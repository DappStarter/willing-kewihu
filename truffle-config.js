require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note pulse puzzle harvest dry equal gate'; 
let testAccounts = [
"0x18c78a714fbc2927986fc60d2d6874fd76e274be31c2ce115c61ccc3ace221dd",
"0x6a522048939ac901e893a3ea48e0206e7e32561c4bb89cfc9e8e53f15740b311",
"0x7db887f724ad6ac95f1c225ee61d7dd3a5be982753a42f51371654523bd43d93",
"0x38049e040b792fb1d9a8cfdc29c067ea3dc31cd76bea7877810c5b50a25cc9d9",
"0x8981b2dfbf57eb2bd6af2a3cc8c37de6dcc601555c44accf8cce0737de8d6274",
"0x0b7560213e4086878a2a0eb9acb1298c239d7a4bebc4892b09553768623804d1",
"0xa9b6cb6239c970e96a215ea2da9e7c657584f3a579713b8f8b0587e502e21951",
"0x574076ecca1740dbecf3e88f2b3d89b6dac20616553035e7de1bb0d8ee53e537",
"0x8c6cade5ce98137b6eb831e97db5d6375d13962b3ba02ed84089646444e9769b",
"0x02367c2e9a202e2e529256e1b1b75670daf3dc34a797c4d402a73f2c83eeee2f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
