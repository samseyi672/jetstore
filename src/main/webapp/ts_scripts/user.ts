import {formsubmit} from "./tsbackendscript/ajaxfunctioncall" ;
import {backendurl,loginurl} from "./url" ;
export class User{
    save(userform:Object,token:string|null,methodtype:string,successmsg:any,errormsg:any){
       //const token  = localStorage.getItem('token');
       if(methodtype === 'put'){
        console.log('form put ',userform);
       // return ;
        formsubmit(`${backendurl}/update`,userform,token,'text',methodtype,successmsg,errormsg);//send form
       }
    //   if(methodtype === 'put' && token===null){
    //   console.log('form put without token ',userform);
    //   return ;
    // formsubmit(`${backendurl}/user`,userform,null,'json',methodtype,successmsg,errormsg); //send form
    //   }
    }
}
export {}

































































