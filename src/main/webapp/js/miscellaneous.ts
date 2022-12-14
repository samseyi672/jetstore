
declare var CryptoJS:any ;

// for frontend 

  const doEncryption  = (plaintText:String,encryptedBase64Key:string,apicall:Function)=>{
  console.log('plaintText',plaintText,' encryptedBase64Key ',encryptedBase64Key)
    var parsedBase64Key = CryptoJS.enc.Base64.parse(encryptedBase64Key);
    var encryptedData = null;
    // Encryption process
     console.log( "plaintText = " + plaintText );    
    // this is Base64-encoded encrypted data
    encryptedData = CryptoJS.AES.encrypt(plaintText, parsedBase64Key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
    });
     console.log( "encryptedData in func = " + encryptedData);
    // var payload2  = {payload:""} ;
   //  payload2.payload  = encryptedData ; 
    // console.log('payload ',JSON.stringify(payload2)) ;
     apicall(`{payload:${encryptedData}}`);
    return encryptedData ;
}

const doDecryption  = (encryptedCipherText:string,encryptedBase64Key:string:apicall:Function)=>{
  var parsedBase64Key = CryptoJS.enc.Base64.parse(encryptedBase64Key);
    //var encryptedCipherText = 'U2WvSc8oTur1KkrB6VGNDmA3XxJb9cC+T9RnqT4kD90=' ; // or encryptedData;
    var decryptedData = CryptoJS.AES.decrypt( encryptedCipherText,parsedBase64Key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
    } );
  console.log( "DecryptedData = " + decryptedData );
    // this is the decrypted data as a string
    var decryptedText = decryptedData.toString( CryptoJS.enc.Utf8 );
    console.log( "DecryptedText = " + decryptedText );
	 apicall(`{payload:${encryptedData}}`);
}

export {doDecryption,doEncryption} ;















































































































