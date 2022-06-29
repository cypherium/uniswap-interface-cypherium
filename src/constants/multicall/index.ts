import { ChainId } from 'cypheriumswap'
import MULTICALL_ABI from './abi.json'
import { multicall } from '../../cypherium_address.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.CYPHER_MAINNET]: '0xeefBa1e63905eF1D7ACbA5a8513c70307C1cE441',
  [ChainId.CYPHER_ROPSTEN]: '0xB4656db1dcE1A268139A7A28Ac288526689cD696',
  [ChainId.CYPHER_RINKEBY]: multicall,
  [ChainId.CYPHER_GÖRLI]: multicall,
  [ChainId.CYPHER_KOVAN]: multicall
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
