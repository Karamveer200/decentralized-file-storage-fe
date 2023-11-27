import React, { useRef, useContext } from 'react';
import { toast } from 'react-toastify';
import { prepareFileForStoring } from '../../../utils/helperFunctions';
import { FileStorageContext } from '../../../context/FileStorageContext';
import ActionBtn from '../../Common/Button/ActionBtn';

const FileUploader = () => {
  const { handleStoreFile, availableSize } = useContext(FileStorageContext);

  const inputFileRef = useRef(null);

  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files?.[0];
      const fileName = file?.name;

      const fileContent = await prepareFileForStoring(file);
      console.log('fileContent', fileName, fileContent);
      await handleStoreFile(fileName, fileContent);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex pt-8 mb-[70px] items-center justify-between">
      <div className="flex gap-3 items-center">
        <header className="text-white text-2xl font-bold">Upload New File -</header>
        <ActionBtn onClick={() => inputFileRef?.current?.click()} text="Upload File" />
        <input type="file" hidden ref={inputFileRef} onChange={handleFileUpload} />
      </div>

      <div className="flex gap-3 items-center">
        <header className="text-white text-2xl font-bold">Available Storage -</header>
        <div className="border-4 border-indigo-300 rounded-sm text-white font-bold text-xl p-6 bg-indigo-600">
          {availableSize} bytes
        </div>
      </div>
    </section>
  );
};

export default FileUploader;
