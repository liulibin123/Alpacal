import getProvider from './getProvider'
async function allowance() {
    let num = 1
    let web3js = getProvider()
    const allowanceABI = [{"stateMutability": "view", "type": "function", "name": "allowance", "inputs": [{"name": "arg0", "type": "address"}, {"name": "arg1", "type": "address"}], "outputs": [{"name": "", "type": "uint256"}], "gas": 1878}]
    const myContract = new web3js.eth.Contract(allowanceABI, '0x3Fb6a6DcF90C674E255cBdA0d19a28d01b90D819')
    await myContract.methods.allowance('0x3085284c0C028467f07f4bb9C6B739D26ac1bcF7','0xd668822aF1c66600F5A4deaf2cd5028Af50CD2bA').call().then(result=>{        
        num = result
    })
    return parseFloat(num)
}
export default allowance