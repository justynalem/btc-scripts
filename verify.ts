import bitcoinMsg from 'bitcoinjs-message';
import { readFileSync } from 'fs';

const { address }: { address: string, privateKey: string; } = JSON.parse(readFileSync('./config.json').toString());

const [, , message, signature] = process.argv;

const verified = bitcoinMsg.verify(message, address, signature);

console.log(verified);