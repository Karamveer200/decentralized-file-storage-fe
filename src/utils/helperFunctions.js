import * as momentTimezone from 'moment-timezone';

export const scrollToTop = (smooth = false) => {
  if (smooth) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo(0, 0);
  }
};

const readFileToBlob = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      let blob = new Blob([e.target.result], { type: file.type });
      resolve(blob);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsText(file);
  });
};

const blobToBase64 = async (blob) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function () {
      resolve(reader.result);
    };
  });
};

export const convertBase64ToBlob = (base64String = '') => {
  const base64Data = base64String?.split(',');

  const binaryData = atob(base64Data?.[1]);
  const mimeType = base64String?.split(';')?.[0]?.split(':')?.[1];

  const uint8Array = new Uint8Array(binaryData.length);
  for (let i = 0; i < binaryData.length; i++) {
    uint8Array[i] = binaryData.charCodeAt(i);
  }

  const blob = new Blob([uint8Array], { type: mimeType }); // Specify the MIME type
  return blob;
};

export const prepareFileForStoring = async (data) => {
  const blobData = await readFileToBlob(data);
  const blobToB64 = await blobToBase64(blobData);

  return JSON.stringify({ blob: blobToB64 });
};

export const getUserLocalTimezone = () => {
  return momentTimezone().tz(momentTimezone.tz.guess()).format('z');
};

export const isArray = (arr) => {
  return Array.isArray(arr) && arr?.length > 0 ? true : false;
};

export const isArrayReady = (arr) => {
  return isArray(arr) ? arr : [];
};
