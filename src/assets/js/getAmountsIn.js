import getProvider from './getProvider'
async function getAmountsIn() {
    let web3js = getProvider()
    const getAmountsInABI = [
        {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "amountOut",
                "type": "uint256"
              },
              {
                "internalType": "address[]",
                "name": "path",
                "type": "address[]"
              }
            ],
            "name": "getAmountsIn",
            "outputs": [
              {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
              }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    const myContract = new web3js.eth.Contract(getAmountsInABI, '0xeaBa760F2f0F68981C9D9816741616277c7AbC3f')
    return myContract
}
export default getAmountsIn