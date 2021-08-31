import {submitform,formsubmit} from "./tsbackendscript/ajaxfunctioncall" ;
import {backendurl,loginurl} from "./url" ;
declare var Swal: any;
export class register{
    constructor(){
    }
    register(data:Object,successmg:any,errormsg:any){
 //submitform(`${loginurl}/register`,data,"",'text','post'); //send form
     formsubmit(`${backendurl}/register`,data,null,'text','post',successmg,errormsg);
    }
}