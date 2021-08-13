import getProvider from './getProvider'
async function getAmountOut() {
    let web3js = getProvider()
    const getAmountOutABI = [
        {
           "inputs": [
               {
               "internalType": "uint256",
               "name": "amountIn",
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
           "name": "getAmountOut",
           "outputs": [
               {
               "internalType": "uint256",
               "name": "amountOut",
               "type": "uint256"
               }
           ],
           "stateMutability": "pure",
           "type": "function"
       }
   ]
   const myContract = await new web3js.eth.Contract(getAmountOutABI, '0xeaBa760F2f0F68981C9D9816741616277c7AbC3f')
   return myContract
}
export default getAmountOut