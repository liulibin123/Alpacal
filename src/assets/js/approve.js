import getProvider from './getProvider'
import BigNumber from 'bignumber.js'
async function approve(address_lp,address_spender) {
    let amount = new BigNumber(10000).multipliedBy(1e18)
    let web3js = getProvider()
    const approveABI = [{
        "stateMutability": "nonpayable", 
        "type": "function", 
        "name": "approve", 
        "inputs": [{"name": "_spender", "type": "address"}, {"name": "_value", "type": "uint256"}], 
        "outputs": [{"name": "", "type": "bool"}], 
        "gas": 37821
    }]
    const myContract = await new web3js.eth.Contract(approveABI, address_lp)
    myContract.methods.approve(address_spender, amount).send({from: '0x3085284c0C028467f07f4bb9C6B739D26ac1bcF7',gas:100000}).then(()=>{
        console.log('1')
    })
}
export default approve