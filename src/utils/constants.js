export const configurations = Object.freeze({
  contractAddress: '0x0BAa2431a63F34136CAE407f2240BB138DE0bC91',
  ownerAddress: '0xC5B9a788C30EC4955D3FAC9590c0924381b552DB',
  ethNodePoint: 'https://sepolia.infura.io/v3/e43d53efdbcd4b859f45dd09c6787d3c',
  contractAbi: [
    {
      inputs: [
        {
          internalType: 'string',
          name: 'fileName',
          type: 'string'
        }
      ],
      name: 'deleteFile',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'initialStorage',
          type: 'uint256'
        }
      ],
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'fileName',
          type: 'string'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'fileSize',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newAvailableStorage',
          type: 'uint256'
        }
      ],
      name: 'FileDeleted',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'fileName',
          type: 'string'
        },
        {
          indexed: false,
          internalType: 'string',
          name: 'content',
          type: 'string'
        }
      ],
      name: 'FileRetrieved',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'string',
          name: 'fileName',
          type: 'string'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'fileSize',
          type: 'uint256'
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newAvailableStorage',
          type: 'uint256'
        }
      ],
      name: 'FileStored',
      type: 'event'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'fileName',
          type: 'string'
        },
        {
          internalType: 'string',
          name: 'content',
          type: 'string'
        }
      ],
      name: 'storeFile',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'availableStorage',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [
        {
          internalType: 'string',
          name: 'fileName',
          type: 'string'
        }
      ],
      name: 'retrieveFile',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string'
        }
      ],
      stateMutability: 'view',
      type: 'function'
    }
  ]
});

export const ARRAY_KEYS = {
  LABEL: 'LABEL',
  VALUE: 'VALUE',
  COMPONENT: 'COMPONENT',
  DATA: 'DATA',
  ON_CLICK: 'ON_CLICK',
  HEADER: 'HEADER',
  BODY: 'BODY',
  DISPLAY_FN: 'DISPLAY_FN',
  DISPLAY_FN_2: 'DISPLAY_FN_2',
  MIN_WIDTH: 'MIN_WIDTH',
  FILE_NAME: 'FILE_NAME'
};

export const ZERO = 0;
