declare var $: any;
declare var jwt_decode: any;
declare var Swal: any;
declare var toastr: any;
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
               console.log(" response ", response);
               alert(response);
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






















