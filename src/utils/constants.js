export const configurations = Object.freeze({
  contractAddress: '0x9333CEF4844403a3Da71733501E31Eb3E278E309',
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
