import getProvider from "./getProvider";
import BigNumber from 'bignumber.js'
async function claimbleReward(){
    let web3js = getProvider();//web3实例
    let num = 1;
    // let amount =  new BigNumber(this.num1*1e18);
    const widthdrawABI = [
        {
        "inputs": [
            {
            "internalType": "address",
            "name": "_user",
            "type": "address"
            }
        ],
        "name": "claimableReward",
        "outputs": [
            {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
        }
    ]
    const myContract = new web3js.eth.Contract(widthdrawABI, '0xd668822aF1c66600F5A4deaf2cd5028Af50CD2bA')
    await myContract.methods.claimableReward('0x3085284c0C028467f07f4bb9C6B739D26ac1bcF7').call().then(result=>{
        num = new BigNumber(result).div(1e18)
    })
    return parseFloat(num)
}
export default claimbleReward