require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remind exchange give arctic october twice'; 
let testAccounts = [
"0x039d5787edb756d3f7ee69b63d736928ef2e4d29981bb8fce4d7150d15109865",
"0xc23de0c6c0771e9c909464e219ec9e1464c7c677681c9877ca9c365396c8b677",
"0x439ae7a779e86e1895dacbdd1a76f19ed01fdfa510d5ca307631ee9ba0c4947b",
"0xae65a0ab627dc081e7f472f27b2ccd26a22e2455c5a145b5717869b7a9546264",
"0x99fe28f3beb9d2782d80880f3dd26774e51eda7b1a7c285d5439bd84a694e027",
"0x0ac5c9bd144d0f615948ed9630a6f26189ed9a0f682722a194774d3a83061485",
"0x3553aba0fa2de382084bc7fd0d7088c509e6be1cc0e5d802e8d9130e773e7552",
"0xa9c6413eb4a890a164c5fcbe09e707cba0aefbd965e95469a757d7fca02c5ae2",
"0x5ccb67fec47764799df4321f04408510b16b6113e93fb622bd8dfa4fa7939971",
"0x90155e0c256b6f615a4424ab341b7066fce8861ccf4348c59dc6a0bb4b15fccd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
