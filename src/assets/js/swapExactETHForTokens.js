import getProvider from './getProvider'
async function swapExactETHForTokens() {
    let web3js = getProvider()
    const swapExactETHForTokensABI = [
        {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "amountOutMin",
                "type": "uint256"
              },
              {
                "internalType": "address[]",
                "name": "path",
                "type": "address[]"
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
            "name": "swapExactETHForTokens",
            "outputs": [
              {
                "internalType": "uint256[]",
                "name": "amounts",
                "type": "uint256[]"
              }
            ],
            "stateMutability": "payable",
            "type": "function"
        }
    ]
    const myContract = await new web3js.eth.Contract(swapExactETHForTokensABI, '0xeaBa760F2f0F68981C9D9816741616277c7AbC3f')
    return myContract
}
export default swapExactETHForTokens