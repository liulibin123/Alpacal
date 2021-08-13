import getProvider from './getProvider'
async function getReserves(address) {
    let web3js = getProvider()
    const getReservesABI = [
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "from",
            "type": "address"
            },
            {
            "internalType": "address",
            "name": "to",
            "type": "address"
            },
            {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
            "internalType": "bool",
            "name": "",
            "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
        },
        {
        "inputs": [],
        "name": "getReserves",
        "outputs": [
            {
            "internalType": "uint112",
            "name": "_reserve0",
            "type": "uint112"
            },
            {
            "internalType": "uint112",
            "name": "_reserve1",
            "type": "uint112"
            },
            {
            "internalType": "uint32",
            "name": "_blockTimestampLast",
            "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        }
    ]
    const myContract = await new web3js.eth.Contract(getReservesABI, address)
    return myContract
}
export default getReserves