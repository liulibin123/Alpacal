import getProvider from "./getProvider"
async function addLiquidityETH() {
    let web3js = getProvider()
    const addLiquidityETHABI = [
        {
            "inputs": [
              {
                "internalType": "address",
                "name": "token",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amountTokenDesired",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amountTokenMin",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amountETHMin",
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
            "name": "addLiquidityETH",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "amountToken",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "amountETH",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "liquidity",
                "type": "uint256"
              }
            ],
            "stateMutability": "payable",
            "type": "function"
          }
    ]
    const myContract = await new web3js.eth.Contract(addLiquidityETHABI, '0xeaBa760F2f0F68981C9D9816741616277c7AbC3f')
    return myContract
}
export default addLiquidityETH