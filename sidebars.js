/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
*/

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Welcome',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'welcome/welcome',
      },
      items: [
        'welcome/why-develop-on-edgeware',
        'welcome/roadmap',
        'welcome/changelog',
      ],
    },
    {
      type: 'category',
      label: 'Quickstart',
      collapsible: true,
      collapsed: false,
      items: [
        'quickstart/create-an-account',
        'quickstart/connect-to-a-wallet-and-check-balance',
        'quickstart/send-edge-to-another-account',
        'quickstart/create-an-edgeware-identity',
        'quickstart/ledger',
        'quickstart/set-up-a-full-node',
        'quickstart/set-up-a-validator',
      ],
    },
    {
      type: 'category',
      label: 'Development',
      collapsible: true,
      collapsed: false,
      items: [
        {
        type: 'category',
        label: 'Develop',
        collapsible: true,
        collapsed: true,
        link: {
          type: 'doc',
          id: 'development/develop/README',
        },
        items: [
          'development/develop/install-edgeware',
          'development/develop/docker-image',
          {
            type: 'category',
            label: 'Smart Contracts',
            collapsible: true,
            collapsed: true,
            link: {
              type: 'doc',
              id: 'development/develop/smart-contracts/README',
            },
            items: [
              'development/develop/smart-contracts/setting-up-an-edgeware-node-for-local-development',
              {
                type: 'category',
                label: 'WASM',
                collapsible: true,
                collapsed: true,
                link: {
                  type: 'doc',
                  id: 'development/develop/smart-contracts/wasm-smart-contracts/README',
                },
                items: [
                  {
                    type: 'category',
                    label: 'Tutorials',
                    collapsible: true,
                    collapsed: true,
                    link: {
                      type: 'doc',
                      id: 'development/develop/smart-contracts/wasm-smart-contracts/tutorials/README',
                    },
                    items: [
                      {
                        type: 'category',
                        label: 'WASM Ballot Contract',
                        collapsible: true,
                        collapsed: true,
                        link: {
                          type: 'doc',
                          id: 'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-ballot-contract/README',
                        },
                        items: [
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-ballot-contract/contract-template',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-ballot-contract/collection-and-traits',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-ballot-contract/adding-functionality',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-ballot-contract/troubleshoot',
                        ],
                      },
                      {
                        type: 'category',
                        label: 'WASM Setup',
                        collapsible: true,
                        collapsed: true,
                        link: {
                          type: 'doc',
                          id: 'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-setup/README',
                        },
                        items: [
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-setup/setup-environment',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-setup/creating-an-ink-project',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-setup/building-your-contract',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-setup/running-an-edgeware-node',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-setup/deploying-your-contract',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-setup/calling-your-contract',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-setup/live-smart-contracts',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-setup/troubleshoot',
                        ],
                      },
                      {
                        type: 'category',
                        label: 'WASM Basics',
                        collapsible: true,
                        collapsed: true,
                        link: {
                          type: 'doc',
                          id: 'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-basics/README',
                        },
                        items: [
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-basics/contract-template',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-basics/storing-a-value',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-basics/getting-a-value',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-basics/incrementing-the-value',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-basics/storing-a-mapping',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-basics/incrementing-my-value',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-basics/troubleshoot',
                        ],
                      },
                      {
                        type: 'category',
                        label: 'WASM ERC20',
                        collapsible: true,
                        collapsed: true,
                        link: {
                          type: 'doc',
                          id: 'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-erc20/README',
                        },
                        items: [
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-erc20/creating-the-erc20-template',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-erc20/transferring-tokens',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-erc20/transferring-tokens',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-erc20/supporting-approvals-and-transfer-from',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-erc20/testing-our-contract',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-erc20/troubleshoot',
                        ],
                      },
                      {
                        type: 'category',
                        label: 'WASM PSP22',
                        collapsible: true,
                        collapsed: true,
                        link: {
                          type: 'doc',
                          id: 'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-psp22/README',
                        },
                        items: [
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-psp22/PSP',
                          'development/develop/smart-contracts/wasm-smart-contracts/tutorials/wasm-psp22/PSP22-implementation',
                        ],
                      },
                      'development/develop/smart-contracts/wasm-smart-contracts/wasm-advanced',
                      {
                        type: 'link',
                        label: 'ink! repository', // The link label
                        href: 'https://github.com/hicommonwealth/ink', // The external URL
                      },
                    ],
                  },
                ],
              },
              {
                type: 'category',
                label: 'EVM',
                collapsible: true,
                collapsed: true,
                link: {
                  type: 'doc',
                  id: 'development/develop/smart-contracts/evm-smart-contracts/README',
                },
                items: [
                  {
                    type: 'category',
                    label: 'EVM Tools & Resources',
                    collapsible: true,
                    collapsed: true,
                    link: {
                      type: 'doc',
                      id: 'development/develop/smart-contracts/evm-smart-contracts/evm-tools-and-resources/README',
                    },
                    items: [
                      {
                        type: 'category',
                        label: 'Ethereum Libraries',
                        collapsible: true,
                        collapsed: true,
                        link: {
                          type: 'doc',
                          id: 'development/develop/smart-contracts/evm-smart-contracts/evm-tools-and-resources/ethereum-libraries/README',
                        },
                        items: [
                          'development/develop/smart-contracts/evm-smart-contracts/evm-tools-and-resources/ethereum-libraries/web3.js',
                          'development/develop/smart-contracts/evm-smart-contracts/evm-tools-and-resources/ethereum-libraries/ethers.js',
                          'development/develop/smart-contracts/evm-smart-contracts/evm-tools-and-resources/ethereum-libraries/web3.py',
                        ],
                      },
                      {
                        type: 'category',
                        label: 'Tools',
                        collapsible: true,
                        collapsed: true,
                        link: {
                          type: 'doc',
                          id: 'development/develop/smart-contracts/evm-smart-contracts/evm-tools-and-resources/tools/README',
                        },
                        items: [
                          'development/develop/smart-contracts/evm-smart-contracts/evm-tools-and-resources/tools/waffle',
                        ],
                      },
                      'development/develop/smart-contracts/evm-smart-contracts/evm-tools-and-resources/evm-balances',
                      'development/develop/smart-contracts/evm-smart-contracts/evm-tools-and-resources/evm-network-parameters',
                    ],
                  },
                  {
                    type: 'category',
                    label: 'Tutorials',
                    collapsible: true,
                    collapsed: true,
                    link: {
                      type: 'doc',
                      id: 'development/develop/smart-contracts/evm-smart-contracts/evm-tools-and-resources/tools/README',
                    },
                    items: [
                      
                    ],
                  },
                ],
              },
            ],
          },
        ],
        },
      ],
    },
  ],
};