import getProvider from './getProvider'
// import BigNumber from 'bignumber.js'
function approve(address_lp,address_spender) {
    // let amount =  new BigNumber(number*1e18)
    let web3js = getProvider()
    const approveABI = [{
        "stateMutability": "nonpayable", 
        "type": "function", 
        "name": "approve", 
        "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}], 
        "outputs": [{"name": "", "type": "bool"}], 
        "gas": 37821
    }]
    const myContract = new web3js.eth.Contract(approveABI, address_lp)
    myContract.methods.approve(address_spender, 1e10).send({from: '0x3085284c0C028467f07f4bb9C6B739D26ac1bcF7',gas:10000000}).then(function(err,result){
        console.log(result)
    })
}
export default approve