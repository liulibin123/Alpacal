import getProvider from './getProvider'
async function addLiquidity() {
    let web3js = getProvider()
    const addLiquidityABI = [{
        "inputs": [
            {
            "internalType": "address",
            "name": "tokenA",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "tokenB",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "amountADesired",
            "type": "uint256"
            },
            {
            "internalType": "uint256",
            "name": "amountBDesired",
            "type": "uint256"
            },
            {
            "internalType": "uint256",
            "name": "amountAMin",
            "type": "uint256"
            },
            {
            "internalType": "uint256",
            "name": "amountBMin",
            "type": "uint256"
            },
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
            }
        ],
        "name": "addLiquidity",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "amountA",
            "type": "uint256"
            },
            {
            "internalType": "uint256",
            "name": "amountB",
            "type": "uint256"
            },
            {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
        }
    ]
    const myContract = await new web3js.eth.Contract(addLiquidityABI, '0xeaBa760F2f0F68981C9D9816741616277c7AbC3f')
    return myContract
}
export default addLiquidity