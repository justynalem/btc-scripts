import bitcoinMsg from 'bitcoinjs-message';
import { ECPairFactory } from 'ecpair';
const tinysecp = require('tiny-secp256k1');
import { readFileSync } from 'fs';
const ECPairApi = ECPairFactory(tinysecp);

const { privateKey }: { address: string, privateKey: string; } = JSON.parse(readFileSync('./config.json').toString());

const [, , message] = process.argv;

const keyPair = ECPairApi.fromWIF(privateKey);

const signature = bitcoinMsg.sign(message, keyPair.privateKey!, keyPair.compressed);

console.log(signature.toString('base64'));