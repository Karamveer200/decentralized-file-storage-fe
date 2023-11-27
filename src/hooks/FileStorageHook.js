import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { configurations } from '../utils/constants';

const FileStorageHook = () => {
  const FileStorageContractABI = configurations.contractAbi;
  const FileStorageContractAddress = configurations.contractAddress;

  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

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
        // Load contract ABI and address
        const contractABI = FileStorageContractABI;
        const contractAddress = FileStorageContractAddress;

        // Create contract instance
        const fileStorageContract = new web3.eth.Contract(contractABI, contractAddress);
        setContract(fileStorageContract);
      }
    };

    initializeContract();
  }, [web3]);

  const handleStoreFile = async (fileName, fileContent) => {
    if (contract) {
      try {
        const ownerAddress = configurations.ownerAddress;
        const gasEstimate = await contract.methods.storeFile(fileName, fileContent).estimateGas();

        const transaction = await contract.methods.storeFile(fileName, fileContent).send({
          from: ownerAddress,
          gas: gasEstimate
        });

        console.log('File stored. Transaction Hash:', transaction.transactionHash);
      } catch (error) {
        console.error('Error storing file:', error);
      }
    }
  };

  const handleFileRetrieval = async (fileName) => {
    if (contract) {
      try {
        const transaction = await contract.methods.retrieveFile(fileName).call();

        console.log(fileName, ' File Retrieved. Transaction Hash:', transaction);
      } catch (error) {
        console.error('Error storing file:', error);
      }
    }
  };

  return { handleStoreFile, handleFileRetrieval };
};

export default FileStorageHook;
