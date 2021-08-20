import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      322: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      321: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    token: tokens.syrup,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'KCS/MJT LP',
    lpAddresses: {
      322: '0xf8bc98Cbb64486a6E77fA91e3D50cA814aa121B6',
      321: '0xA527a61703D82139F8a06Bc300322cC9CAA2df5A',
    },
    token: tokens.mjt,
    quoteToken: tokens.wkcs,
  },
]

export default farms
