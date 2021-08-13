import getProvider from './getProvider'
async function allowance(token_address, user_address, lp_address) {
    let num = 1
    let web3js = getProvider()
    const allowanceABI = [{"stateMutability": "view", "type": "function", "name": "allowance", "inputs": [{"name": "arg0", "type": "address"}, {"name": "arg1", "type": "address"}], "outputs": [{"name": "", "type": "uint256"}], "gas": 1878}]
    const myContract = new web3js.eth.Contract(allowanceABI, token_address)
    await myContract.methods.allowance(user_address,lp_address).call().then(result=>{        
        num = result
    })
    return parseFloat(num)
}
export default allowance