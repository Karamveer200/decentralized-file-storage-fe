import React, { useRef } from 'react';
import BodyContainer from '../../Common/BodyContainer/BodyContainer';
import FileStorageHook from '../../../hooks/FileStorageHook';
import { toast } from 'react-toastify';
import { readFileForContents } from '../../../utils/helperFunctions';

const FileUploader = () => {
  const { handleStoreFile, handleFileRetrieval } = FileStorageHook();

  const inputFileRef = useRef(null);

  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files?.[0];
      const fileName = file?.name;

      const fileContent = await readFileForContents(file);

      handleStoreFile(fileName, fileContent);
    } catch (error) {
      toast.error('Unable to upload file');
    }
  };

  const retrieveFile = () => {
    handleFileRetrieval('A demo.txt');
  };

  return (
    <BodyContainer className="h-screen">
      <section className="flex flex-col lg:flex-row pb-24 sm:pb-32 pt-8 lg:pt-0">
        <button
          onClick={() => inputFileRef?.current?.click()}
          className="bg-indigo-600 cursor-pointer text-white font-bold px-8 py-4 text-xl transition-all duration-200 ease-in rounded-md hover:bg-indigo-400">
          Upload File
        </button>
        <input type="file" hidden ref={inputFileRef} onChange={handleFileUpload} />
      </section>

      <section className="flex flex-col lg:flex-row pb-24 sm:pb-32 pt-8 lg:pt-0">
        <button
          onClick={retrieveFile}
          className="bg-indigo-600 cursor-pointer text-white font-bold px-8 py-4 text-xl transition-all duration-200 ease-in rounded-md hover:bg-indigo-400">
          Get File
        </button>
      </section>
    </BodyContainer>
  );
};

export default FileUploader;
