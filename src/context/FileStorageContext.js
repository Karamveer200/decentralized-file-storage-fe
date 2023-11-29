import { useState, useEffect, createContext } from 'react';
import Web3 from 'web3';
import { configurations } from '../utils/constants';
import fileDownload from 'js-file-download';
import OverLayLoader from '../components/Common/FallbackLoader/OverLayLoader';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

export const FileStorageContext = createContext();

const FileStorageContextComponent = (props) => {
  const FileStorageContractABI = configurations.contractAbi;
  const FileStorageContractAddress = configurations.contractAddress;

  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [events, setEvents] = useState(new Set());

  const [storedFileIds, setStoredFileIds] = useState(new Set());

  const [availableSize, setAvailableSize] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const handleSetEvents = (txnData) => {
    const fileName = txnData?.returnValues?.fileName;
    const fileId = txnData?.returnValues?.fileId;

    const newAvailableStorage = txnData?.returnValues?.newAvailableStorage;

    setAvailableSize(Number(newAvailableStorage));

    if (!storedFileIds?.has(fileId)) {
      setStoredFileIds((prevNames) => new Set(prevNames.add(fileId)));
      setEvents((prevNames) => new Set(prevNames.add({ fileName, fileId })));
    }
  };

  useEffect(() => {
    const initializeWeb3 = async () => {
      if (window.ethereum) {
        try {
          // Request account access if needed
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);
        } catch (error) {
          console.error('Error initializing Web3:', error);
        }
      } else if (window.web3) {
        // Legacy dapp browsers...
        const web3Instance = new Web3(window.web3.currentProvider);
        setWeb3(web3Instance);
      } else {
        console.error('No Web3 provider detected');
      }
    };

    initializeWeb3();
  }, []);

  useEffect(() => {
    const initializeContract = async () => {
      if (web3) {
        let options = {
          filter: {
            value: []
          },
          fromBlock: 0
        };

        // Load contract ABI and address
        const contractABI = FileStorageContractABI;
        const contractAddress = FileStorageContractAddress;

        // Create contract instance
        const fileStorageContract = new web3.eth.Contract(contractABI, contractAddress);
        setContract(fileStorageContract);

        // Listen events
        fileStorageContract.events
          .FileStored(options)
          ?.on('data', (event) => handleSetEvents(event))
          ?.on('error', (err) => console.log('error - ', err));
      }
    };

    initializeContract();
  }, [web3]);

  const handleStoreFile = async (fileName, fileContent) => {
    if (contract) {
      setIsLoading(true);
      try {
        const ownerAddress = configurations.ownerAddress;

        const transaction = await contract.methods.storeFile(fileName, fileContent, uuidv4()).send({
          from: ownerAddress
        });
        console.log('File stored. Transaction Hash:', transaction.transactionHash);
        toast.success(`${fileName} has been uploaded successfully...`);
      } catch (error) {
        console.error('Error storing file:', error);
        toast.error('Unable to upload file');

        throw error;
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleFileRetrieval = async (fileName) => {
    if (contract) {
      setIsLoading(true);

      try {
        return contract.methods.retrieveFile(fileName).call();
      } catch (error) {
        console.error('Error storing file:', error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleFileDeletion = async (name, id) => {
    if (contract) {
      setIsLoading(true);

      try {
        const ownerAddress = configurations.ownerAddress;

        await contract.methods.deleteFile(id).send({
          from: ownerAddress
        });

        toast.info(`${name} has been deleted successfully...`);
      } catch (error) {
        console.error('Error deleting file:', error);
        toast.error('Unable to delete file');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const downloadFile = (blob, fileName) => fileDownload(blob, fileName);

  return (
    <FileStorageContext.Provider
      value={{
        handleStoreFile,
        handleFileRetrieval,
        downloadFile,
        handleFileDeletion,
        events,
        availableSize
      }}>
      <div>
        {isLoading && <OverLayLoader />}
        {props.children}
      </div>
    </FileStorageContext.Provider>
  );
};

export default FileStorageContextComponent;
