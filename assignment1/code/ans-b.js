/***** address *****/
const keccak256 = require('js-sha3').keccak256;
//const strob = require('')

const public_key = '1f724987ca166d0e7fb7578b7498b554df29313cf47421d5ffb598de7e7c2a5a479fba635ad71bbd2ba2b8804616fb6045d6ef6dc7bbcc2a1510b474a30c941d' ;
// step 2:  public_key_hash = Keccak-256(public_key)
const public_key_hash = keccak256(public_key);

// step 3:  address = ‘0x’ + last 20 bytes of public_key_hash
const address = '0x'+public_key_hash.substring(44);

console.log("address:", address);
