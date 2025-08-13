const WEB3MODAL_PROVIDER_OPTIONS = {
  walletconnect: {
    package: window.WalletConnectProvider.default,
    options: {
      rpc: {
        1:         'https://mainnet.infura.io/v3/YOUR_INFURA_KEY',
        11155111:  'https://rpc.sepolia.org',
        80002:     'https://rpc-amoy.polygon.technology',
        421614:    'https://sepolia-rollup.arbitrum.io/rpc',
        84532:     'https://sepolia.base.org'
      },
      chainId: 1
    }
  },
  coinbasewallet: {
    package: window.CoinbaseWalletSDK,
    options: {
      appName: 'ProofDrop',
      rpc: 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY',
      darkMode: true
    }
  }
};

const MORALIS_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjQwMDhkMTc4LWQxNmItNDU4Yy05MTRkLWNlZjU1YzZmMjdiMyIsIm9yZ0lkIjoiNDY0MzAyIiwidXNlcklkIjoiNDc3NjY3IiwidHlwZUlkIjoiYTNhODc2MmUtYWRiNS00MDk1LWFmNmEtNDhmNGQ5ZTA4NDVkIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3NTQ4MTI3MjQsImV4cCI6NDkxMDU3MjcyNH0.ssV3d1p5s7iDcYT2rZtosJ8J_z1cuuNvF9bU5X8O2HY';
const COVALENT_API_KEY = 'cqt_rQYkGgFvK3CcfjKw9K4gGBQmxyRK';

const CHAIN_MAP = {
  1:         { name: 'Ethereum Mainnet', moralis: 'eth', covalent: 1 },
  11155111:  { name: 'Ethereum Sepolia', moralis: 'sepolia', covalent: 11155111 },
  80002:     { name: 'Polygon Amoy',     moralis: 'amoy', covalent: 80002 },
  421614:    { name: 'Arbitrum Sepolia', moralis: 'arbitrum-sepolia', covalent: 421614 },
  84532:     { name: 'Base Sepolia',     moralis: 'base-sepolia', covalent: 84532 }
};

const GRAPH_ENDPOINTS = {
  governance: {
    1:         'YOUR_GRAPH_GOVERNANCE_SUBGRAPH_URL_FOR_ETHEREUM',
    11155111:  'YOUR_GRAPH_GOVERNANCE_SUBGRAPH_URL_FOR_SEPOLIA',
    80002:     'YOUR_GRAPH_GOVERNANCE_SUBGRAPH_URL_FOR_AMOY',
    421614:    'YOUR_GRAPH_GOVERNANCE_SUBGRAPH_URL_FOR_ARB_SEPOLIA',
    84532:     'YOUR_GRAPH_GOVERNANCE_SUBGRAPH_URL_FOR_BASE_SEPOLIA'
  },
  dex: {
    1:         'YOUR_GRAPH_DEX_SUBGRAPH_URL_FOR_ETHEREUM',
    11155111:  'YOUR_GRAPH_DEX_SUBGRAPH_URL_FOR_SEPOLIA',
    80002:     'YOUR_GRAPH_DEX_SUBGRAPH_URL_FOR_AMOY',
    421614:    'YOUR_GRAPH_DEX_SUBGRAPH_URL_FOR_ARB_SEPOLIA',
    84532:     'YOUR_GRAPH_DEX_SUBGRAPH_URL_FOR_BASE_SEPOLIA'
  }
};

const NFT_MINT = {
  CONTRACT_ADDRESS: '0xYourNftContractAddress',
  ABI: [
    {
      "inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"string","name":"uri","type":"string"}],
      "name":"safeMint",
      "outputs":[{"internalType":"uint256","name":"","type":"uint256"}],
      "stateMutability":"nonpayable","type":"function"
    }
  ],
  FUNCTION_NAME: 'safeMint'
};
