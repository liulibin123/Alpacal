import getProvider from './getProvider'
import BigNumber from 'bignumber.js'
async function userStable() {
    let usercoin1 = 1
    let usercoin2 = 1
    let web3js = getProvider();//web3实例
    const user_stakedABI = [{
        "inputs": [
        {
            "internalType": "address",
            "name": "_user",
            "type": "address"
        }
        ],
        "name": "user_staked",
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
    const myContract1 = new web3js.eth.Contract(user_stakedABI, '0x7a199FD711A1723e941Ac49d8C9fF6AB80c70Df8')
    await myContract1.methods.user_staked('0x3085284c0C028467f07f4bb9C6B739D26ac1bcF7').call().then(result =>{
        usercoin1 = new BigNumber(result).div(1e18)
    })
    const myContract = new web3js.eth.Contract(user_stakedABI, '0x7d3341D090250399F45C6B43996A88c42E5B47Fe')
    await myContract.methods.user_staked('0x3085284c0C028467f07f4bb9C6B739D26ac1bcF7').call().then(result =>{
        usercoin2 = new BigNumber(result).div(1e18)
    })
    return parseFloat(usercoin1)+parseFloat(usercoin2)
}
export default userStable