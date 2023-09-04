function cesarCipher(string, shiftFactor){

    let result = '';
    const asciiArray = [];

    for (let i = 0; i < string.length; i++) {
        if((string.charCodeAt(i)>64 && string.charCodeAt(i)<91) || (string.charCodeAt(i)>96 && string.charCodeAt(i)<123)){

            let cipheredAscii = string.charCodeAt(i) + shiftFactor;

            if(cipheredAscii > 122 && (string.charCodeAt(i)>96 && string.charCodeAt(i)<123)) {

                while((cipheredAscii - 122) > 26){
                    cipheredAscii = 96 + (cipheredAscii - 122);
                }

                cipheredAscii = 96 + (cipheredAscii - 122);
                asciiArray.push(cipheredAscii);
            }
            else if(cipheredAscii < 65 && (string.charCodeAt(i)>64 && string.charCodeAt(i)<91)) {

                while((65 - cipheredAscii) > 26){
                    cipheredAscii = 91 - (65 - cipheredAscii);
                }

                cipheredAscii = 91 - (65 - cipheredAscii);
                asciiArray.push(cipheredAscii);
            }
            else if(cipheredAscii < 97 && (string.charCodeAt(i)>96 && string.charCodeAt(i)<123)){

                while((97-cipheredAscii) > 26){
                    cipheredAscii = 123 - (97-cipheredAscii);
                }
                
                cipheredAscii = 123 - (97-cipheredAscii);
                asciiArray.push(cipheredAscii);

            }
            else if(cipheredAscii > 90 && (string.charCodeAt(i)>64 && string.charCodeAt(i)<91)){

                while((cipheredAscii - 90) > 26){
                    cipheredAscii = 64 + (cipheredAscii - 90);
                }

                cipheredAscii = 64 + (cipheredAscii - 90);
                asciiArray.push(cipheredAscii);
            }
            else asciiArray.push(cipheredAscii);

        } else {

            let cipheredAscii = string.charCodeAt(i);
            asciiArray.push(cipheredAscii);

        }
      }

      for (let j = 0; j < asciiArray.length; j++) {
        const asciiValue = asciiArray[j];
        const letter = String.fromCharCode(asciiValue);
        result += letter;
      }

      return result;
}

module.exports = cesarCipher;