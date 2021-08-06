import getProvider from './getProvider'
import BigNumber from 'bignumber.js'

async function totalStable() {
    let web3js = getProvider()
    let total1 = 1
    let total2 = 1
    const total_stakedABI = [
                    {
    "inputs": [],
    "name": "total_staked_",
    "outputs": [
        {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
        }
    ],
    "stateMutability": "view",
    "type": "function"
    }]
    const myContract1 = new web3js.eth.Contract(total_stakedABI, '0x7a199FD711A1723e941Ac49d8C9fF6AB80c70Df8')
    await myContract1.methods.total_staked_().call().then(result =>{
        total1 = new BigNumber(result).div(1e18)
    })
    const myContract = new web3js.eth.Contract(total_stakedABI, '0x7d3341D090250399F45C6B43996A88c42E5B47Fe')
    await myContract.methods.total_staked_().call().then(result =>{
        total2 = new BigNumber(result).div(1e18)
    })
    return parseFloat(total1)+parseFloat(total2)
}
export default totalStable
