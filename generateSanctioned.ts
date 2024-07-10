const bitcoinjs = require('bitcoinjs-lib');

const [, , key, address] = process.argv;

const pubkey = Buffer.from(key, 'hex');
const { address: a1 } = bitcoinjs.payments.p2wpkh({ pubkey });
const { address: a2 } = bitcoinjs.payments.p2pkh({ pubkey });

console.log(a1);
console.log(a2);
console.log(address === a1);
console.log(address === a2);
