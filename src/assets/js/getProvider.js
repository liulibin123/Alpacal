import Web3 from 'web3'
function getProvider() {
    let web3Provide;
    async function getpro() {
        if (window.ethereum) {
            web3Provide = window.ethereum;
            try {
                await window.ethereum.enable();
            } catch (error) {
                alert("User denied account access")
            }
        } else {
            // set the provider you want from Web3.providers
            web3Provide = new Web3.providers.HttpProvider("http://localhost:8545");
        }
    }
    getpro();
    const web3 = new Web3(web3Provide)
    return web3;
}
export default getProvider