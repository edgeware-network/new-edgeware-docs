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
          'development/develop/rosetta-api',
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
                      {
                        type: 'category',
                        label: 'EVM Basics',
                        collapsible: true,
                        collapsed: true,
                        link: {
                          type: 'doc',
                          id: 'development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-basics/README',
                        },
                        items: [
                          'development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-basics/setting-up-a-edgeware-evm-node',
                          'development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-basics/using-metamask',
                          'development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-basics/using-truffle',
                          'development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-basics/using-web3.js',
                          'development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-basics/using-remix-ethereum-ide',
                          'development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-basics/using-hardhat',
                          'development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-basics/using-ethers.js',
                          'development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-basics/using-web3.py',
                        ],
                      },
                      {
                        type: 'category',
                        label: 'EVM Intermediate',
                        collapsible: true,
                        collapsed: true,
                        link: {
                          type: 'doc',
                          id: 'development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-intermediate/README',
                        },
                        items: [
                          'development/develop/smart-contracts/evm-smart-contracts/tutorials/evm-intermediate/create-an-nft-using-hardhat',
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
        {
          type: 'category',
          label: 'Substrate',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'development/substrate/README',
          },
          items: [
            {
              type: 'link',
              label: 'Exchange integration', // The link label
              href: 'https://wiki.polkadot.network/docs/build-integration', // The external URL
            },
            {
              type: 'link',
              label: 'Substrate RPC', // The link label
              href: 'https://polkadot.js.org/docs/substrate/rpc', // The external URL
            },
            {
              type: 'link',
              label: 'Substrate Documentation', // The link label
              href: 'https://docs.substrate.io/v3/getting-started/overview/', // The external URL
            },
            {
              type: 'link',
              label: 'Substrate APIs', // The link label
              href: 'https://polkadot.js.org/docs/api/', // The external URL
            },
          ],
        },
        {
          type: 'category',
          label: 'Community',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'development/community',
          },
          items: [
            {
              type: 'link',
              label: 'Report an issue', // The link label
              href: 'https://github.com/edgeware-network/edgeware-documentation/issues', // The external URL
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Edgeware Stack',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'welcome/welcome',
      },
      items: [
        {
          type: 'category',
          label: 'Edgeware Node',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'edgeware-stack/node/README',
          },
          items: [
            {
              type: 'link',
              label: 'Set Up a Full Node', // The link label
              href: 'https://docs.edgeware.wiki/quickstart/set-up-a-full-node', // The external URL
            },
            {
              type: 'link',
              label: 'Setting up an Edgeware node for local development', // The link label
              href: 'https://docs.edgeware.wiki/development/develop/smart-contracts/evm-smart-contracts/tutorials/deploy-an-evm-contract/setting-up-a-edgeware-evm-node', // The external URL
            },
            {
              type: 'link',
              label: 'Running an Edgeware Node', // The link label
              href: 'https://docs.edgeware.wiki/development/develop/smart-contracts/wasm-smart-contracts/tutorials/deploy-a-wasm-contract/running-an-edgeware-node', // The external URL
            },
            'edgeware-stack/node/docker',
          ],
        },
        {
          type: 'category',
          label: 'Balances',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'edgeware-stack/balances/README',
          },
          items: [
           'edgeware-stack/balances/stash-and-controller-accounts',
          ],
        },
        {
          type: 'category',
          label: 'Consensus',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'edgeware-stack/consensus/README',
          },
          items: [
            {
              type: 'link',
              label: 'Aura', // The link label
              href: 'https://docs.substrate.io/v3/advanced/consensus/#aura', // The external URL
            },
          ],
        },
        'edgeware-stack/parameters',
        {
          type: 'category',
          label: 'Economics',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'edgeware-stack/economics/README',
          },
          items: [
            {
              type: 'category',
              label: 'Treasury',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'edgeware-stack/economics/treasury/README',
              },
              items: [
                'edgeware-stack/economics/treasury/tipping-function',
              ],
            },
            {
              type: 'link',
              label: 'Network Staking Simulator', // The link label
              href: 'https://docs.google.com/spreadsheets/d/1VlzTUDESbbfOggMRz3GyE9-VqR9MlOhNuoekBboKvLw/edit#gid=2011072230', // The external URL
            },
            {
              type: 'link',
              label: 'Total Supply API URL', // The link label
              href: 'https://edgeware-supply.vercel.app/', // The external URL
            },
            'edgeware-stack/economics/return-rate-calculator-for-validators',
            'edgeware-stack/economics/transaction-fees',
          ],
        },
        {
          type: 'category',
          label: 'Governance',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'edgeware-stack/governance/README',
          },
          items: [
            {
              type: 'link',
              label: 'Edgeware Governance Portal', // The link label
              href: 'https://commonwealth.im/edgeware/', // The external URL
            },
            {
              type: 'category',
              label: 'Council',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'edgeware-stack/governance/council/README',
              },
              items: [
                'edgeware-stack/governance/council/council-elections',
                'edgeware-stack/governance/council/council-operations-and-resources',
                'edgeware-stack/governance/council/voting-for-council',
                'edgeware-stack/governance/council/voting-for-council',
                'edgeware-stack/governance/council/run-for-council',
              ],
            },
            'edgeware-stack/governance/signaling',
            {
              type: 'category',
              label: 'Democracy',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'edgeware-stack/governance/democracy/README',
              },
              items: [
                'edgeware-stack/governance/democracy/guides-to-referenda',
                'edgeware-stack/governance/democracy/democracy-features',
                'edgeware-stack/governance/democracy/delegation',
                'edgeware-stack/governance/democracy/launch-a-simple-majority-referenda',
              ],
            },
          ],
        },
        'edgeware-stack/identity',
        {
          type: 'category',
          label: 'Staking',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'edgeware-stack/staking/README',
          },
          items: [
            'edgeware-stack/staking/how-to-stake-on-edgeware',
            'edgeware-stack/staking/intro-to-roles-in-npos',
            'edgeware-stack/staking/nominating',
            {
              type: 'category',
              label: 'Validating',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'edgeware-stack/staking/validating/README',
              },
              items: [
                'edgeware-stack/staking/validating/frequently-used-commands',
              ],
            },
            'edgeware-stack/staking/advanced-staking',
            'edgeware-stack/staking/the-sequential-phragmen-method',
            'edgeware-stack/staking/slashing-consequences',
          ],
        },
        {
          type: 'category',
          label: 'Lockdrop',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'edgeware-stack/lockdrop/README',
          },
          items: [
            {
              type: 'category',
              label: 'Retrieve your Locked ETH',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'edgeware-stack/lockdrop/retrieve-your-eth/README',
              },
              items: [
                {
                  type: 'link',
                  label: 'Unlock Tool', // The link label
                  // TODO need to change this link
                  href: 'https://commonwealth.im/edgeware/unlock', // The external URL
                },
              ],
            },
            'edgeware-stack/lockdrop/lockdrop-allocation-formula',
            'edgeware-stack/lockdrop/find-your-lockdrop-user-contract-luc',
            'edgeware-stack/lockdrop/check-the-status-of-your-lock-duration-and-unlock-date',
            {
              type: 'link',
              label: 'Stats', // The link label
              // TODO need to change this link
              href: 'https://commonwealth.im/edgeware/stats', // The external URL
            },
            'edgeware-stack/lockdrop/gini-coefficient-of-edgeware',
            {
              type: 'category',
              label: 'Contract & Specifications',
              collapsible: true,
              collapsed: true,
              link: {
                type: 'doc',
                id: 'edgeware-stack/staking/validating/README',
              },
              items: [
                {
                  type: 'link',
                  label: 'Lockdrop Contracts', // The link label
                  href: 'https://github.com/hicommonwealth/edgeware-lockdrop', // The external URL
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Adavanced',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Setup Multi Signature Account',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'advanced/setup-multi-signature-account/README',
          },
          items: [
            'advanced/setup-multi-signature-account/create-multi-signature-account',
            'advanced/setup-multi-signature-account/making-transaction-with-a-multi-signature-account',
            'advanced/setup-multi-signature-account/utilities',
          ],
        },
        'advanced/setting-up-a-public-ui',
        'advanced/validating-on-edgeware',
        'advanced/setting-up-monitoring',
        {
          type: 'category',
          label: 'Running Cross Chain Protocols',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'advanced/running-cross-chain-protocols/README',
          },
          items: [
            'advanced/running-cross-chain-protocols/cross-chain-protocols',
            'advanced/running-cross-chain-protocols/ethereum-less-than-greater-than-edgeware-bridge',
          ],
        },
        {
          type: 'category',
          label: 'XCMP',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'advanced/xcmp/README',
          },
          items: [
            'advanced/xcmp/what-is-polkadot',
            'advanced/xcmp/what-is-a-parachain',
            'advanced/xcmp/parachain-to-parachain-interaction',
            'advanced/xcmp/interacting-with-spree',
          ],
        },
        {
          type: 'category',
          label: 'Zero Knowledge Primitives',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'advanced/zero-knowledge-primitives/README',
          },
          items: [
            'advanced/zero-knowledge-primitives/primitives',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'FAQs',
          collapsible: true,
          collapsed: true,
          link: {
            type: 'doc',
            id: 'resources/faq/README',
          },
          items: [
            'resources/faq/faqs-for-new-users',
            'resources/faq/parachain-status',
            'resources/faq/validator-faqs',
          ],
        },
        'resources/ecosystem-tools',
        'resources/edgscan',
        'resources/exchanges',
        {
          type: 'link',
          label: 'Forum', // The link label
          href: 'https://commonwealth.im/edgeware', // The external URL
        },
        {
          type: 'link',
          label: 'Edgeware app', // The link label
          href: 'https://www.edgeware.app/#/explorer', // The external URL
        },
        {
          type: 'link',
          label: 'Polkadot UI', // The link label
          href: 'https://polkadot.js.org/apps/#/explorer', // The external URL
        },
        {
          type: 'link',
          label: 'Glossary', // The link label
          href: 'https://docs.substrate.io/v3/getting-started/glossary/', // The external URL
        },
      ],
    },
    {
      type: 'category',
      label: 'Style Guide',
      collapsible: true,
      collapsed: false,
      items: [
        'style-guide/documentation-style-guide',
        'style-guide/code-style-guide',
      ],
    },
    {
      type: 'category',
      label: 'Community',
      collapsible: true,
      collapsed: false,
      items: [
        'community/public-grants',
        'community/current-projects',
      ],
    },
  ],
};