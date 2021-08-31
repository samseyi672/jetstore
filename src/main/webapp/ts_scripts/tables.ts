declare var $: any;
import { backendurl, loginurl } from "./url";
export const templatefunction = (url:string,token:string|null,crudinput:string,
  methodtype:string)=>{
  // console.log('crudinput ',crudinput,' token ',token) ;
  return $.ajax({
    type:methodtype,
    url:url,
    headers: { 
     Authorization:`Bearer ${token}`,
   // 'Content-Type': 'application/json',
    },
   // dataType:'json',
   // data:JSON.stringify(crudinput),
    error:function (err:any){
     console.log('err ',err) ;
    //  errorfunc() ;
    }
});
}
export const templatefunctionget = (url:string,token:string|null,crudinput:string,
  methodtype:string)=>{
   console.log('crudinput ',crudinput) ;
  return $.ajax({
    type:methodtype,
    url:url,
    headers: { 
     Authorization:`Bearer ${token}`,
    },
    data:crudinput,
   // dataType:'json',
   // data:crudinput,
    error:function (err:any){
     console.log('err ',err) ;
    //  errorfunc() ;
    }
});
}
export const createtables  = (url:string,token:string|null,fieldsdata:any) =>{
  $("#basicScenario2").jsGrid({
       width:"100%",
       height:"250px",
       filtering:true,
      // inserting:true,
       editing:true,
       sorting:true,
       paging:true,
       autoload:true,
       noDataContent: "No Data is found",
       pageSize:10,
       //loadIndication: true,
       loadMessage: "Please, wait...",
       pageButtonCount:5,
       confirmDeleting: true,
       deleteConfirm:"Do you really want to delete data ?",  
       controller:{
        loadData: function(filter:any) { 
          console.log('filter ',filter);
            return templatefunction(url,token,filter,'get') ;
         },
        insertItem: function(item:any) {
           // refresh grid
           console.log('item ', item);
           setTimeout(()=>{
            console.log('reloading items ');
           $("#basicScenario2").jsGrid("loadData");  //  reloads the  grid
         },7000);
          return  templatefunctionget(url,localStorage.getItem('token'),item,'post') ;
        },
        updateItem: function(item:any) { 
               // refresh grid
               setTimeout(()=>{
                 console.log('reloading items ');
                $("#basicScenario2").jsGrid("loadData");  //  reloads the  grid
              },7000);
        return templatefunctionget(url,localStorage.getItem('token'),item,'put') ;         
         },
        deleteItem: function(item:any) { 
          setTimeout(()=>{
            console.log('reloading items ');
           $("#basicScenario2").jsGrid("loadData");  //  reloads the  grid
         },7000);
         return templatefunctionget(url,localStorage.getItem('token'),item,'delete') ;
              }
         },  
       fields:fieldsdata
      })  ;
    
}

// createtables2
export const createtables2  = (url:string,token:string|null,fieldsdata:any,insertcond:boolean) =>{
  $("#basicScenario2").jsGrid({
       width:"100%",
       height:"250px",
       filtering:true,
       inserting:insertcond,
       editing:true,
       sorting:true,
       paging:true,
       autoload:true,
       noDataContent: "No Data is found",
       pageSize:10,
       //loadIndication: true,
       loadMessage: "Please, wait...",
       pageButtonCount:5,
       confirmDeleting: true,
       deleteConfirm:"Do you really want to delete data ?",  
       controller:{
        loadData: function(filter:any) { 
          console.log('filter in get ',filter);
         return templatefunction(url,token,filter,'get') ;
         },
        insertItem: function(item:any) {
           // refresh grid
           console.log('item ', item);
           setTimeout(()=>{
            console.log('reloading items ');
           $("#basicScenario2").jsGrid("loadData");  //  reloads the  grid
         },2000);
          return  templatefunctionget(url,localStorage.getItem('token'),item,'post') ;
        },
        updateItem: function(item:any) { 
               // refresh grid
               setTimeout(()=>{
                 console.log('reloading items ');
                $("#basicScenario2").jsGrid("loadData");  //  reloads the  grid
              },2000);
        return templatefunctionget(url,localStorage.getItem('token'),item,'put') ;         
         },
        deleteItem: function(item:any) { 
          setTimeout(()=>{
            console.log('reloading items ');
           $("#basicScenario2").jsGrid("loadData");  //  reloads the  grid
         },2000);
         return templatefunctionget(url,localStorage.getItem('token'),item,'delete') ;
              }
         },  
       fields:fieldsdata
      })  ;
    
}

































































































