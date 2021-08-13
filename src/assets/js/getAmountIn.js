import getProvider from './getProvider'
async function getAmountIn() {
    let web3js = getProvider()
    const getAmountInABI = [
        {
        "inputs": [
            {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
            },
            {
            "internalType": "uint256",
            "name": "reserveIn",
            "type": "uint256"
            },
            {
            "internalType": "uint256",
            "name": "reserveOut",
            "type": "uint256"
            }
        ],
        "name": "getAmountIn",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
        }
    ]
    const myContract = new web3js.eth.Contract(getAmountInABI, '0xeaBa760F2f0F68981C9D9816741616277c7AbC3f')
    return myContract
}
export default getAmountIn