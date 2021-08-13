import getProvider from './getProvider'
async function getPair() {
    let web3js = getProvider()
    const getPairABI = [
        {
       "inputs": [
           {
           "internalType": "address",
           "name": "",
           "type": "address"
           },
           {
           "internalType": "address",
           "name": "",
           "type": "address"
           }
       ],
       "name": "getPair",
       "outputs": [
           {
           "internalType": "address",
           "name": "",
           "type": "address"
           }
       ],
       "stateMutability": "view",
       "type": "function"
       }
   ]
   const myContract = await new web3js.eth.Contract(getPairABI, '0xa0A43A273C8992467005667A733ff73185f57c51')
   return myContract
}
export default getPair