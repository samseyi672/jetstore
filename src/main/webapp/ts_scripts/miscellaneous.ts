declare var toastr: any;
 const invalidatetoken = (exp:number):void =>{
    const now = Date.now().valueOf() / 1000
    console.log('validating token ....') ;
    if (typeof exp !== 'undefined' && exp < now) {
      localStorage.removeItem("token");
      localStorage.removeItem('userid');
      window.location.href="../adminlogin" ;
      console.log('after removing token');
      throw new Error(`token expired`)
    }
   console.log('token valid ') ;
 return ;  
};
// for frontend 
export const invalidatetoken2 = (jwt_decode:any,token:string):void =>{
 // alert('review');
   if(!localStorage.getItem(token)){ //if not login
    toastr.error('Please login before you submit review') ;
    return ;
   }
   var decoded = jwt_decode(localStorage.getItem(token));
  // alert('review2');
   const exp = parseInt(decoded.exp);
   const now = Date.now().valueOf() / 1000
   console.log('validating token ....') ;
   if (typeof exp !== 'undefined' && exp < now) {
     localStorage.removeItem(token);
    // localStorage.removeItem('userid');
    // window.location.href="../jetcart/index" ;
      toastr.error('Please login before you submit review') ;
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
export {invalidatetoken,redirectiftokenisnull} ;















































































































