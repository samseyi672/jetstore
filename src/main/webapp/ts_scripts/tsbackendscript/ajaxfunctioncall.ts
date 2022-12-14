declare var $: any;
declare var jwt_decode: any;
declare var Swal: any;
declare var toastr: any;
import { secondialog } from "../lithtmlscript";
//declare var response:any;
//these are ajax calls
//login
import { invalidatetoken } from "../miscellaneous";
export const checktoken = (token: any) => {
     //const token= localStorage.getItem('token') ;
     var decoded = jwt_decode(token);
     const now = Date.now().valueOf() / 1000
     const tokenexp = parseInt(decoded.exp);
     invalidatetoken(tokenexp);
}
export const contenttype = {
     "accept": "application/json",
     "Content-Type": "application/json",
   };
   export const contenttypewithtoken = (token:(string|null)):any=>{
    return { "accept": "application/json",
     "Content-Type": "application/json",
     "Authorization": "Bearer " + token
      }
   };
  export function setajaxwithpromise(datatype:string, url:string, method:string, data:string,processresponse:Function,beforesend:Function, header:any) {
     return new Promise((resolve, reject) => {
       $.ajax({
         url:url,
         type:method,
         data:data,
         datatype:datatype,
         headers:header,
         beforeSend:beforesend,
         success: function (data:any) {
           resolve(processresponse(data));
         },
         error: function (jqXHR:any, textStatus:any,errorThrown:any) {
           reject(jqXHR);
         }
       });
     });
   }
export const setajax = (datatype:string, url:string, method:string, data:string, processresponse:Function, beforesend:Function, header:any) => {
     //the beforesend will set headers and authorization i it is required 
      console.log(' datatype ',datatype,' url ',url,' method ',method) ;
     $.ajax({
         type: method,
         url: url,
         data: data,
         dataType: datatype,
         headers: header,
         beforeSend: beforesend,
         success: function (response:JSON) {
             processresponse(response);
         },
         statusCode: {
          500: function(xhr:any) {
                if(window.location.href.includes('wishlist')){
                    toastr.error('Invalid Username/Password/Wrong credentials'); 
                  }
                  if(window.location.href.includes('cart')){
                    toastr.error('Invalid Username/Password/Wrong credentials'); 
                  }
           }
          },
         error: function (jqXHR:any, textStatus:any, errorThrown:any) {
             console.log(textStatus, errorThrown);
         }
     });
   };

   export const setajaxwithform = (datatype:string, url:string, method:string, data:string|FormData, processresponse:Function, beforesend:Function, header:any) => {
     //the beforesend will set headers and authorization i it is required 
      console.log(' datatype ',datatype,' url ',url,' method ',method) ;
     $.ajax({
         url: url,
         type: method,
         headers: header,
         dataType: datatype,
         contentType: false,
         processData: false,
         data: data,
         beforeSend: beforesend,
         success: function (response:any) {
             processresponse(response);
         },
         statusCode: {
          500: function(xhr:any) {
           toastr.error('Invalid Username/Password/Wrong credentials'); 
           }
          },
         error: function (jqXHR:any, textStatus:any, errorThrown:any) {
             console.log(textStatus, errorThrown);
         }
     });
   };

export const submitform = (url: string, data: any, token: string | null, returntype: string, methodtype: string): void => {
     console.log("url ", url, 'check ', data instanceof FormData);
     if (!$.isEmptyObject(token) && data instanceof FormData) {
          checktoken(token)  // validate token
          $.ajax({
               url: url,
               type: methodtype,
               headers: {
                    Authorization: `Bearer ${token}`
               },
               dataType: returntype,
               contentType: false,
               data: data,
               processData: false,
               beforeSend: function () {
                    //$("#log").empty().html("<img src='./myresources/jetlogistics/images/btn-ajax-loader.gif'/> &nbsp; Signing In ...");      		       
                    console.log('inside ajax .......');
               },
               success: function (response: any) {
                    console.log(response);
                    //  localStorage.setItem("token",response) ;
                    //  setTimeout(function() {
                    //       $(".form-button").empty().html("<img src='./dist/images/btn-ajax-loader.gif'/> &nbsp; Signing In ...please wait ....");
                    //       window.location.href="../adminindex" ;
                    //             },2000);
                    toastr.success("successfully uploaded/created");
               },
               error: function (err: any) {
                    console.log(err);
                    Swal.fire({
                         icon: 'error',
                         text: 'Operation Failed.',
                    });
                    throw new Error('Operation failed .');
               },
               complete: function () {
                    // return ;
               }
          });
          return;
     } else if (!$.isEmptyObject(token) && data instanceof Object) {
          checktoken(token)  // validate token
          $.ajax({
               url: url,
               type: methodtype,
               headers: {
                    Authorization: `Bearer ${token}`
               },
               dataType: returntype,
               contentType: 'application/json',
               data: JSON.stringify(data),
               beforeSend: function () {
                    //$("#log").empty().html("<img src='./myresources/jetlogistics/images/btn-ajax-loader.gif'/> &nbsp; Signing In ...");      		       
                    console.log('inside ajax .......');
               },
               success: function (response: any) {
                    console.log(response);
                    //   var decoded = jwt_decode(response);	 
                    //   console.log(decoded,'exp ',decoded['exp'] , 'sub ',decoded.sub);
                    // localStorage.setItem("token",response) ;
                    //    localStorage.setItem("userid",decoded.sub) ;
                    // $(".form-button").empty().html(`<button id="login">Login</button>`);
                    //  window.location.href="../adminindex" ;
                    //  setTimeout(function() {
                    //       $(".form-button").empty().html("<img src='./dist/images/btn-ajax-loader.gif'/> &nbsp; Signing In ...please wait ....");
                    //       window.location.href="../adminindex" ;
                    //             },2000); 
                    toastr.success("created/uploaded successfull ....");
               },
               error: function (err: any) {
                    console.log(err);
                    Swal.fire({
                         icon: 'error',
                         text: 'Operation Failed.',
                    });
               }
          });
          return;
     }
     //this one is if token is empty , it  can permit all 
     $.ajax({
          url: url,
          type: methodtype,
          dataType: returntype,
          contentType: 'application/json',
          data: JSON.stringify(data),
          beforeSend: function () {
               //$("#log").empty().html("<img src='./myresources/jetlogistics/images/btn-ajax-loader.gif'/> &nbsp; Signing In ...");      		       
               console.log('inside ajax .......');
          },
          success: function (response: any) {
               //alert('creating response ') ;
               // console.log(response);
               //   console.log(decoded,'exp ',decoded['exp'] , 'sub ',decoded.sub);
              // console.log(" response ", response);
              // alert(response);
               localStorage.setItem("token", response);
               //   localStorage.setItem("userid",decoded.sub) ;
               // $(".form-button").empty().html(`<button id="login">Login</button>`);
               //  window.location.href="../adminindex" ;
               setTimeout(function () {
                    $(".form-button").empty().html("<img src='./dist/images/btn-ajax-loader.gif'/> &nbsp; Signing In ...please wait ....");
                    console.log('redirecting ......');
                    window.location.href = "../adminindex";
               }, 1500);
          },
          error: function (err: any) {
               console.log(err);
               $("#error").fadeIn(500, function (e: any) {
                    $("#error").empty().html('<br/><div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + 'wrong username/password' + ' !</div>');
               });
          }
     });
};

export const formsubmit = (url: string, data: any, token: string | null, returntype: string, methodtype: string,
     successmsg: any, errormsg: any) => {
     //console.log('data stringify ',JSON.stringify(data),' data',data) ;
     if (token) {
          checktoken(token)  // validate token
          return $.ajax({
               url: url,
               type: methodtype,
               headers: {
                    Authorization: `Bearer ${token}`
               },
               dataType: returntype,
               contentType: 'application/json',
               data: JSON.stringify(data),
               beforeSend: function () {
                    //$("#log").empty().html("<img src='./myresources/jetlogistics/images/btn-ajax-loader.gif'/> &nbsp; Signing In ...");      		       
                    console.log('inside ajax .......');
               },
               success: function (response: any) {
                    console.log('response ', response);
                    successmsg();
               },
               error: function (err: any) {
                    console.log('error ', err);
                    if (err.status === 400) {
                         errormsg('Please use a registered  email');
                         return;
                    }
                    errormsg();
               }
          })
          return;
     }
     return $.ajax({
          url: url,
          type: methodtype,
          dataType: returntype,
          contentType: 'application/json',
          data: JSON.stringify(data),
          beforeSend: function () {
               //$("#log").empty().html("<img src='./myresources/jetlogistics/images/btn-ajax-loader.gif'/> &nbsp; Signing In ...");      		       
               console.log('inside ajax .......');
          },
          success: function (response: any) {
               successmsg();
          },
          error: function (err: any) {
               console.log('error ', err);
               errormsg();
          }
     })
};

export const processrequest2 = async (url: string, methodtype: string, headers: any, myfunc: any) => {
     if (methodtype === 'get') {
          const res = await fetch(url, {
               method: methodtype,
               credentials: 'same-origin',
               headers: headers
          }).then(response => {
               if (response.status != 200) {
                    throw new Error("network access  error");
               }
               return response.text();
          }).then(r => {
               // console.log('r in function ',r) ;
               myfunc(r)
          });
     }
     if (methodtype === 'post' || methodtype === 'put' || methodtype === 'delete') {
          const res = await fetch(url, {
               method: methodtype,
               credentials: 'same-origin',
               headers
          }).then(response => {
               if (response.status != 200) {
                    throw new Error("network access  error");
               }
               return response.json();
          }).then(r => {
               // console.log('r in function ',r) ;
               myfunc(r)
          });
     }

}

 export const onloaddatatable2 = (slider:string,id:string, path:string, dataarray:string[],url:string,datatable:any,postfunc:Function) => {
     console.log(`${path}/${url}`) ;
     $(document).ready(function () {
       datatable = $(id).DataTable({
          paging:true,
          //dom: 'Bfrtip',
          dom:'Bfrltip',
          buttons: [
           'excelHtml5', 'pdfHtml5','print',
           {
               text: 'Reload',
               action: function ( e:any, dt:any, node:any, config:any ) {
                   dt.ajax.reload();
               }
           },
          //  {
          //      extend: 'searchPanes',
          //      config: {
          //          cascadePanes: true,
          //          serverSide:false,
          //          threshold: 1,
          //          columns: [1,2,3,4,5],
          //          orthogonal: { search: 'filter', display: 'display' }, 
          //      }
          //  }
          ],
         select: {
           selector: 'td:not(:first-child)',
           style: 'os'
         },
         pageLength:20,
         searching:true,
         ordering:true,
         processing: true,
         serverSide: false,
         "ajax": {
           type: 'GET',
           url: `${path}/${url}`,
          // dataSrc:"",
           headers: {
          //    "content-type": "application/json",
          //     "accept": "application/json",
             "Authorization":"Bearer " +(localStorage.getItem('token') as string).trim()
           },
          //  data:function(d:any){
          //     return JSON.parse(d) ;
          //  },
          //  success:function(response:any){
          //   console.log('response ',response) ;
          //  }
         },
         "columns": dataarray,
         "order": [[1, 'asc']],
         "sPaginationType": "full_numbers",
         "scrollY": 200,
         "scrollX": true,
         "autowidth":true,
         "destroy": true
       });
       // Add event listener for opening and closing details
       $(`${id} tbody`).on('click','tr', function (e:any) {
            var data = datatable.row(e.target).data();
             console.log(data,slider) ;
             $(slider).autofill(data);
             $(slider+" :input").prop('readonly', true);
             postfunc() ;
             $(slider).slideToggle() ; 
        });
     // $(`${id} tbody`).on('click', 'td.dt-control', function () {
     //      var tr = $(this).closest('tr');
     //      var row = datatable.row(tr);
     //      console.log(row) ;
     // });

     });
     return datatable ;
   };

export const onloaddatawithfetch=(url:string):any=>{
     let table:any ;
     document.addEventListener('DOMContentLoaded', function () {
           table = $("#trans").DataTable({
              ajax: function (d:any, cb:any) {
                  fetch(url,
                    {
                         method:'get',
                         // credentials: 'same-origin',
                         headers: {
                              "content-type": "application/json",
                              "accept": "application/json",
                              "Authorization":"Bearer " +(localStorage.getItem('token') as string).trim()
                            }
                    })
                      .then(response =>{
                         console.log(' response.json() ', response.clone().json());
                         response.json()
                      })
                      .then(data => cb(data));
              },
              "columns": [
                {data: "orderid"},
             {data: "paymentstatus"},
           {data: "paymentmethod"},
        {data: "orderstatus"},
        {data: "orderdate"},  
              ],
              "order": [[1, 'asc']],
              destroy: true
          } );
      } );
      return table ;
}

export const sendmailtocust=(body:string)=>{
     $(secondialog(() => {
         return (
         body 
         ) ;
        }, () => {
          return (`<h5 class="modal-title">Email Sender box</h5>`);
        }, () => {
          return (`<div class="row">
          <div class="col-md-6">
        <button class="btn btn-danger" id="redirecttologin">Cancel</button>
         </div>
        </div>`) ;
        })).insertAfter(".order-datatable");
        $('#exampleModal').modal('show');//show modal
}

export function onMessageReceived(payload:any) {
     console.log("message "+payload.body.message) ;
     $('#messagearea').append(`<br/><li style="color:${getAvatarColor(JSON.parse(payload.body).message)}"><strong>${JSON.parse(payload.body).message}</strong></li><br/>`) ;
}
var colors = [
     '#2196F3', '#32c787', '#00BCD4', '#ff5652',
     '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
 ];
export function getAvatarColor(messageSender:string) {
     var hash = 0;
     for (var i = 0; i < messageSender.length; i++) {
         hash = 31 * hash + messageSender.charCodeAt(i);
     }
     var index = Math.abs(hash % colors.length);
     return colors[index];
 }

 export const onPrivateMessage = (payload:any)=>{
     console.log('vendor ',payload.body);
     $('#msgarea').append(`<br/><li style="color:${getAvatarColor(JSON.parse(payload.body).message)}"><strong>${JSON.parse(payload.body).message}</strong></li><br/>`) ;
 }












