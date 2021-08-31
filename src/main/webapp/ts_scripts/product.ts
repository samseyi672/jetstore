import {submitform} from "./tsbackendscript/ajaxfunctioncall" ;
import {backendurl,loginurl} from "./url" ;

export class product{  
     saveproduct(product:(HTMLFormElement|FormData)){
     //  const productform:any  =  document.getElementById("add-product-form") ;
       if(product instanceof FormData){
        // const form  = new  FormData(product) ;
        console.log('in formdata if ','productname ','prddescription',product.get('description'))   
        const token  = localStorage.getItem('token');
        submitform(`${backendurl}/product/create`,product,token,'text','post');//send form
        return ;
           }
       const form  = new  FormData(product) ;
       console.log('productname ',form.get('productname'))
      // console.log(form) ;     
       const token  = localStorage.getItem('token');
       submitform(`${loginurl}/product`,form,token,'json','post');//send form
     } 
}










































































































