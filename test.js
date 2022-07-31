const bcrypt = require('bcrypt');
const anotherbrcrypt = require('bcrypt');
const password = 'password';
const salt= bcrypt.genSaltSync(15);

const hash = bcrypt.hashSync(password, '$2b$10$SCrVxtjkRCxSjgXmnjPBc.');

console.log(password)

const otherHash = bcrypt.hashSync(password, '$2b$10$SCrVxtjkRCxSjgXmnjPBc.');
const result =  anotherbrcrypt.compareSync(password, hash);



console.log(salt)
console.log(hash);

console.log(otherHash);
console.log(result);