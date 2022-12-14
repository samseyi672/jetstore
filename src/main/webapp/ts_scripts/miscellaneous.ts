declare var toastr: any;
declare var CryptoJS:any ;
declare var Swal: any;
declare var $: any;

 const invalidatetoken = (exp:number):void =>{
    const now = Date.now().valueOf() / 1000
    console.log('validating token ....') ;
    if (typeof exp !== 'undefined' && exp < now) {
      localStorage.removeItem("token");
      localStorage.removeItem('userid');
      console.log('after removing token');
      window.location.href="../adminlogin" ;  
      throw new Error(`token expired`)
    }
   console.log('token valid ') ;
 return ;  
};
//clears session for sessionstorage and token
 const invalidateSessionAndToken = (jwt_decode:any,token:string)=>{
  console.log("decoding token ",localStorage.getItem('customertoken')) ; 
   if(localStorage.getItem('customertoken')){
    var decoded = jwt_decode(localStorage.getItem(token));
    if(decoded!==undefined && decoded!==null){
     console.log("decoded token ",decoded) ;
     const exp = parseInt(decoded.exp);
     const now = Date.now().valueOf() / 1000
     console.log('validating token ....') ;
     if(typeof exp !== 'undefined' && exp < now) {
       localStorage.removeItem(token);
       localStorage.clear() ;
       sessionStorage.clear() ;
       console.log('after removing token');
       $('#customercart').empty().html(`<center><p>Session expired.Please login again</p></center>`);
       throw new Error(`token expired`)
     }
     }
   }else{
    alert('pls login to access') ;
    window.location.href='./index' ;
   } 
}

export const invalidateSession = (jwt_decode:any,token:string)=>{
  console.log("decoding token ",localStorage.getItem('customertoken')) ;  
  if(localStorage.getItem('customertoken')!==null){
  var decoded = jwt_decode(localStorage.getItem(token));
    if(decoded){
      console.log("decoded token ",decoded) ;
      const exp = parseInt(decoded.exp);
      const now = Date.now().valueOf() / 1000
      console.log('validating token ....') ;
      if(typeof exp !== 'undefined' && exp < now) {
        localStorage.removeItem(token);
        localStorage.clear() ;
        sessionStorage.clear() ;
        console.log('after removing token and session expired');
        if(confirm('Session expired.Please reload')){
          window.location.href='./marketplace' ;
        }
        //$('#customercart').empty().html(`<center><p>Session expired.Please login again</p></center>`);
        throw new Error(`token expired`)
      }
      }
    }
    console.log('got here ');
}
// for frontend 
export const invalidatetoken2 = (jwt_decode:any,token:string):void =>{
 // alert('review');
   if(!localStorage.getItem(token)){ //if not login
    toastr.error('Please login') ;
    throw new Error("no login yet") ;
   }
   var decoded = jwt_decode(localStorage.getItem(token));
   //console.log('decoded ',decoded);
   //alert('review2');
   //return ;
   const exp = parseInt(decoded.exp);
   const now = Date.now().valueOf() / 1000
   console.log('validating token ....') ;
   if (typeof exp !== 'undefined' && exp < now) {
     localStorage.removeItem(token);
    // localStorage.removeItem('userid');
    // window.location.href="../jetcart/index" ;
      toastr.error('Please login') ;
     console.log('after removing token');
     throw new Error(`token expired`)
   }
  console.log('token valid ') ;
return ;  
};
const redirectiftokenisnull  = (token:string|null)=>{
    if(token === null){
    window.location.href="../adminlogin";
       }
};
export interface jsonresult{
   firstname:string,
   lastname:string,
    city:string,
    address:string,
    profilepicture:string
 }

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

const doDecryption  = (encryptedCipherText:string,encryptedBase64Key:string)=>{
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
}
export {invalidateSessionAndToken,invalidatetoken,redirectiftokenisnull,doDecryption,doEncryption} ;















































































































