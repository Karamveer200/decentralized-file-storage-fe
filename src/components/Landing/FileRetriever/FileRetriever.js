import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { convertBase64ToBlob } from '../../../utils/helperFunctions';
import { FileStorageContext } from '../../../context/FileStorageContext';
import TableData from '../../Common/Table/Table';
import { ARRAY_KEYS } from '../../../utils/constants';
import { isArrayReady } from '../../../utils/helperFunctions';
import ActionBtn from '../../Common/Button/ActionBtn';

const FileRetriever = () => {
  const { events, handleFileRetrieval, handleFileDeletion, downloadFile } =
    useContext(FileStorageContext);

  const eventsArray = [...events];

  const retrieveFile = async (name) => {
    try {
      const b64Data = await handleFileRetrieval(name);

      const parseBlob = await convertBase64ToBlob(JSON.parse(b64Data).blob);

      await downloadFile(parseBlob, name);

      toast.info(`${name} will be downloaded shortly...`);
    } catch (error) {
      toast.error('Unable to retrieve file');
      console.log(error);
    }
  };

  const headers = [
    { [ARRAY_KEYS.HEADER]: 'File Name', [ARRAY_KEYS.VALUE]: ARRAY_KEYS.FILE_NAME },
    { [ARRAY_KEYS.HEADER]: 'Action' },
    { [ARRAY_KEYS.HEADER]: 'Action' }
  ];

  const bodyData = isArrayReady(eventsArray)?.map((item) => {
    return {
      [ARRAY_KEYS.FILE_NAME]: item,
      [ARRAY_KEYS.DISPLAY_FN]: (
        <ActionBtn onClick={() => retrieveFile(item)} text="Download" isTableBtn />
      ),
      [ARRAY_KEYS.DISPLAY_FN_2]: (
        <ActionBtn onClick={() => handleFileDeletion(item)} text="Delete" isTableBtn />
      )
    };
  });

  return (
    <div className="flex flex-col gap-3">
      <header className="text-white text-2xl font-bold">Your uploads - </header>
      <TableData headers={headers} bodyData={bodyData} />
    </div>
  );
};

export default FileRetriever;
