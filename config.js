import md5 from 'md5';
import {publicKey, privatekey} from '@env';


const ts = Date.now();

const hash = md5(`${ts}${privatekey}${publicKey}`);

const apiParams = {

ts,
apikey:publicKey,
hash,
baseUrl: 'https://geteway.marvel.com'


}


export default apiParams