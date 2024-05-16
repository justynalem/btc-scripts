import * as bitcoin from 'bitcoinjs-lib';
import { ECPairFactory } from 'ecpair';
import { writeFileSync } from 'fs';
const tinysecp = require('tiny-secp256k1');

const ECPairApi = ECPairFactory(tinysecp);

const btcKeys = ECPairApi.makeRandom();
const privateKey = btcKeys.toWIF();
const pubKey = btcKeys.publicKey;
const { address } = bitcoin.payments.p2pkh({ pubkey: pubKey });

writeFileSync('config.json', JSON.stringify({
  address,
  privateKey
}));