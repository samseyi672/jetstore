import {submitform} from "./ajaxfunctioncall" ;
import {backendurl,loginurl} from "../url" ;
export class login{
  private username:string ;
  private password:string ;
  constructor(){
     this.username="" ;
     this.password="";
     }
   loginaction(form:FormData,token:string):void{
    if(form){ // if it exists 
           // formdata 
       console.log('creating form ....');
      // console.log(form,form.get("username"));
       this.username =  form.get("username") as string ;
       this.password =  form.get("password") as string;
       console.log("username ",this.username,"password ",this.password);
     submitform(`${loginurl}/api/login`,{username:this.username,password:this.password},null,'text','post');//send form
        }
        console.log('login completed truly');
      }
}


































































































