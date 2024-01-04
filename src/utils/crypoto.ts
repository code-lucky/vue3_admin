import * as CryptoJS from 'crypto-js';

export function encrypt(value: string){
    return CryptoJS.AES.encrypt(value, '646d7e82-a22f-4109-90c4-c556b00d45ae').toString();
}