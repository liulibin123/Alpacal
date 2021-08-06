import getProvider from "./getProvider"
async function getReserve(claimableRewardNum) {
    let web3js = getProvider()
    let apy1 = 0
    let apy = 0
    const getReservesABI = [
        { 
        "constant": true, 
        "inputs": [], 
        "name": "getReserves", 
        "outputs": [ 
        { "internalType": "uint112", "name": "_reserve0", "type": "uint112" }, 
        { "internalType": "uint112", "name": "_reserve1", "type": "uint112" }, 
        { "internalType": "uint32", "name": "_blockTimestampLast", "type": "uint32" } 
        ], 
        "payable": false, 
        "stateMutability": "view", 
        "type": "function" 
        }
    ]
    const myContract1 = new web3js.eth.Contract(getReservesABI, '0x3Fb6a6DcF90C674E255cBdA0d19a28d01b90D819')
    await myContract1.methods.getReserves().call().then(result =>{
        // let b = new BigNumber(result)
        // console.log(b.toString())
        apy1 = result._reserve0 / result._reserve1
        apy = (claimableRewardNum * apy1 / (0.002758620689655172 * 30) * 365 * 100).toFixed(2)
    })
    return apy
}
export default getReserve