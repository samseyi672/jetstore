import {submitform} from "./tsbackendscript/ajaxfunctioncall" ;
import {backendurl,loginurl} from "./url" ;
export class coupon{
    savecoupon(coupon:(Object)){ 
      console.log(' coupon ',coupon) ;         
          const token  = localStorage.getItem('token');
          submitform(`${backendurl}/coupon/coupon`,coupon,token,'text','post');//send form
        } 
}










































































