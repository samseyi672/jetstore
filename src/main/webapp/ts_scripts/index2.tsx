// import expect "" quotes  in typescript
declare var $: any;
declare var jwt_decode: any;
//declare var ajaxcall:any;
declare var processrequest: any;
declare var toastr: any;
declare var Swal: any;
declare var alertify: any;
declare var StringBuilder: any;
declare var accounting: any;
declare var Dropzone: any;
declare var CKEDITOR: any;
declare var window: any;
declare var FlutterwaveCheckout: any;
import { dialog, secondialog } from "./lithtmlscript";
import { backendurl, loginurl, theprotocol, brands, size, color } from "./url";
import { invalidateSession, invalidateSessionAndToken, invalidatetoken2, redirectiftokenisnull, jsonresult, doDecryption, doEncryption } from "./miscellaneous";
import { formsubmit, checktoken, submitform, processrequest2, setajax, contenttype, contenttypewithtoken, setajaxwithpromise,onMessageReceived,onPrivateMessage } from "./tsbackendscript/ajaxfunctioncall";
import { createtables2 } from './tables'
import { Search } from "gridjs/dist/src/view/plugin/search/search";
import { order, cartproduct } from './order';
//import {doDecryption,doEncryption} from  '../dist/encrption' ;
import { product } from "./product";
import { itemcategorypage } from './categorypage';
import { animateCSS, animateitems, animatePrdCat, processanimated, animateProductCategoryPage, animaterelatedprd } from "./animate";
import { MyWebscoket } from "./websocket";
let wsUri: string = "ws://" + "localhost:1022";
 //let wsUri: string = "ws://" + "http://104.45.92.200:1022" ;

//let wsUri: string = "ws://" + "http://localhost:1022" ;

//let sockjsurl  = 'http://104.45.92.200:1023' ;

let sockjsurl  = 'http://localhost:1023' ;

toastr.options = {  // toast and notification
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "2500",
  "hideDuration": "200",
  "timeOut": "3000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
};
//the dom function for jsx
function dom(tag: any, attrs: any, ...children: any) {
  //   const element = document.createElement(tag)
  // Object.entries(attrs || {}).forEach(([name, value]) => {
  // 	if (name.startsWith('on') && name.toLowerCase() in window)
  // 		element.addEventListener(name.toLowerCase().substr(2), value)
  // 	else element.setAttribute(name, value.toString())
  // })
  // children.forEach((child) => {
  // 	appendChild(element, child)
  //   })
  //       return element

  //Custom Components will be functions
  if (typeof tag === 'function') { return tag() }
  // regular html tags will be strings to create the elements
  if (typeof tag === 'string') {
    // fragments to append multiple children to the initial node
    const fragments = document.createDocumentFragment()
    const element = document.createElement(tag)
    children.forEach(child => {
      if (child instanceof HTMLElement) {
        fragments.appendChild(child)
      } else if (typeof child === 'string') {
        const textnode = document.createTextNode(child)
        fragments.appendChild(textnode)
      } else {
        // later other things could not be HTMLElement not strings
        console.log('not appendable', child);
      }
    })
    element.appendChild(fragments)
    // Merge element with attributes
    //  console.log('attrs ...', attrs);
    Object.entries(attrs || {}).forEach(([name, value]) => {
      if (name.startsWith('on') && name.toLowerCase() in window)
        element.addEventListener(name.toLowerCase().substr(2), value);
      // else element.setAttribute(name, value.toString())
    })
    Object.assign(element, attrs)
    return element
  }
}

// customer  login
$('#customerlogin').on('click', () => {
  $(dialog("", "", "")).insertAfter(".page-main-header");
  //invoke the dialog box
  const mydialogpos: any = document.querySelector(".modal-dialog");
  mydialogpos.classList.add(`modal-dialog-centered`); // center  it verticallycl
  $(".modal-header").html((() => {
    return (<h5 className="modal-title f-w-600" id="exampleModalLabel">Customer Login</h5>);
  })());
  $('.modal-body').empty().html((() => {
    return (
      <form className="needs-validation" id="catform" autoComplete="off">
        <div className="form">
          <div className="form-group">
            <label for="validationCustom01" className="mb-1">Username:</label>
            <input className="form-control" id="username" type="text" name="username" />
          </div>
          <div className="form-group mb-0">
            <label for="validationCustom02" className="mb-1">Pasword:</label>
            <input className="form-control" id="password" type="password" name="password" />
          </div>
        </div>
      </form>
    );
  })());
  //add footer
  $(".modal-footer").empty().html((() => {
    function login(e: any) {
      e.preventDefault();
      // processphysicalanddigitalcategory('post', 'Sub Category', `${backendurl}/subcat/createsubcategory`, 'Do you want to create sub-category', 'catform', "sub category created successfuly", 'error creating category');
      const form = document.getElementById('catform') as HTMLFormElement;
      const formdata = new FormData(form);
      // submitform(`${loginurl}/api/login`,{username:this.username,password:this.password},null,'text','post');//send form
      //submitform(`${backendurl}/customerlogin`,formdata,null,'text','post');//send form
      fetch(`${loginurl}/api/login`, {
        method: 'post',
        credentials: 'same-origin',
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({ username: formdata.get('username') as string, password: formdata.get("password") as string })
      }).then(response => {
        if (response.status != 200) {
          throw new Error("network access  error");
        }
        return response.text();
      }).then(r => {
        // console.log('r in function ', r);
        localStorage.setItem("customertoken", r);
        var decoded = jwt_decode(r);
       console.log(decoded, 'exp ', decoded['exp'], 'sub ', decoded.sub, 'vendorname ', decoded.vendorname, ' ack ', decoded.ack);
        const now = Date.now().valueOf() / 1000;
        const tokenexp = parseInt(decoded.exp);
        console.log(decoded.username);
        localStorage.setItem('vendorname', decoded.vendorname);
        localStorage.setItem('ack', decoded.ack);
        localStorage.setItem('username', decoded.username);
        const login = document.querySelector('.login') as HTMLDivElement;
        login.classList.add("alert");
        login.classList.add("alert-success");
        login.classList.add("alert-dismissible");
        login.classList.add("fade");
        login.classList.add("show");
        $('.login').empty().html(`<strong>Welcome ${localStorage.getItem('username')?.toUpperCase()} &nbsp;</strong> Logged in.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>`);
        //check if it is wishlist
        if (window.location.href.includes('/wishlist')) {
          // load wishlist and cart
          let content = contenttypewithtoken(localStorage.getItem('customertoken'));
          console.log('content ', content);
          setajax('json', `${backendurl}/product/loadwishlist/${decoded.ack}`, 'get', "", (response: any) => {
            console.log('response ', response);
            // response=[] ;  
            if (response.length === 0) {
              Swal.fire({
                icon: 'question',
                text: 'Your WishList is Empty?',
                showCancelButton: false,
                allowOutsideClick: false,
              }).then((result: any) => {
                if (result.isConfirmed) {
                  window.location.href = './marketplace';
                }
              });
            }
            let wishlistbuilder = new StringBuilder();
            //console.log('wishliststore empty store ', wishliststore);
            response.forEach((f: any) => {
              wishlistbuilder.append(`<tbody id="${f.id}">
               <tr>
                   <td>
                       <a href="/jetcart/productpage" onclick="loadprd('${f.id}','/jetcart/productpage')">
                       <img src="${backendurl}/jetstore/${f.imageurl}" alt=""></a>
                   </td>
                   <td><a href="#">${f.productname}</a>
                       <div class="mobile-cart-content row">
                           <div class="col-xs-3">
                               <p>in stock</p>
                           </div>
                           <div class="col-xs-3">
                               <h2 class="td-color">N${(parseFloat(f.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h2>
                           </div>
                           <div class="col-xs-3">
                               <h2 class="td-color"><a href="#" class="icon mr-1"><i class="ti-close"></i>
                                   </a><a href="#" class="cart"><i class="ti-shopping-cart"></i></a></h2>
                           </div>
                       </div>
                   </td>
                   <td>
                       <h2>N${(parseFloat(f.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h2>
                   </td>
                   <td>
                   <a href="javascript:void(0)" class="icon mr-3">
                   <i class="ti-close" title="remove" onclick="removeRow('${f.id}')"></i></a>
                     <a href="javascript:void(0)" onclick="addtocartforwishlist('${f.id}')" class="cart"><i class="ti-shopping-cart" title="add to cart"></i></a>
                   </td>
                    </tr></tbody>`);
            });
            // set sessionstorage afresh 
            sessionStorage.setItem('wishlist', JSON.stringify(response));
            $('#wishlisttable').append(wishlistbuilder.toString());
          }, () => { }, content);
        }
        if (window.location.href.includes('/cart')) {
          let content = contenttypewithtoken(localStorage.getItem('customertoken'));
          console.log('content ', content);
          setajax('json', `${backendurl}/product/loadcartlist/${decoded.ack}`, 'get', "", (store: any) => {
            console.log('response ', store);
            // response=[] ;  
            if (store.length === 0) {
              Swal.fire({
                icon: 'question',
                text: 'Your Cart is Empty?',
                showCancelButton: false,
                allowOutsideClick: false,
              }).then((result: any) => {
                if (result.isConfirmed) {
                  window.location.href = './marketplace';
                }
              });
            }
            //load cart afresh from db 
            //const store = JSON.parse(sessionStorage.getItem('store') as string);
            // $('#customercart').empty().html(processcart()) ;
            console.log('store ', store);
            if (store === null || store.includes(null)) {
              $('#customercart').empty().html(`<center><p>Your cart is empty</p></center>`);
              return;
            }
            const totalbody = store.map((elem: any) => {
              console.log('element ', elem);
              //processing each object in cart 
              return `
               <tbody>
                 <tr>
                   <td>
                       <a href="#"><img src="${backendurl}/jetstore/${elem.imageurl}" alt="" /></a>
                   </td>
                   <td>
                   <a href="#">${elem.productname}</a>
                       <div class="mobile-cart-content row">
                           <div class="col-xs-3">
                               <div class="qty-box">
                                   <div class="input-group">
                                       <input type="text" name="quantity" 
                                       class="form-control input-number"
                                           value="${parseFloat(elem.productquantity)}" />
                                   </div>
                                 </div>
                               </div>
                             
                           <div class="col-xs-3">
                               <h2 class="td-color">${elem.productprice}</h2>
                           </div>
                           <div class="col-xs-3">
                               <h2 class="td-color"><a href="#" class="icon">
                                 <i class="ti-close"></i></a>
                               </h2>
                           </div>
                       </div>
                   </td>
                   <td>
                       <h2>N${(parseFloat(elem.productprice)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h2>
                   </td>
                   <td>
                       <div class="qty-box">
                           <div class="input-group">
                               <input type="number" name="quantity" 
                               class="form-control input-number" readonly
                                   value="${parseFloat(elem.productquantity)}" />
                           </div>
                       </div>
                   </td>
                   <td>
                   <a href="javascript:void(0)" class="icon mr-3">
                   <i class="ti-close" title="remove" onclick="removeRow('${elem.id}')"></i></a>
                   </td>
                   <td>
          <h2 class="td-color">N${(parseFloat(elem.productprice) * parseFloat(elem.productquantity)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h2>
                   </td>           
               </tr>
           </tbody>`
            });
            //  <td>${parseFloat(elem.productprice)}</td>
            //  <td>${parseFloat(elem.productquantity)}</td>
            var builder = new StringBuilder();
            builder.append(`
           <table class="table cart-table table-responsive-xs">
             <thead>
           <tr className="table-head">
               <th scope="col">image</th>
               <th scope="col">product name</th>
               <th scope="col">price</th>
               <th scope="col">quantity</th>
               <th scope="col">action</th>
               <th scope="col">total</th>
           </tr>
             </thead>`);
            totalbody.forEach((el: any) => {
              builder.append(el);
            })
            builder.append(`</table>`);
            const totalprice = store.map((res: any) => {
              return res.productprice * res.productquantity;
            });
            console.log('totalprice', totalprice);
            builder.append(`<table className="table cart-table table-responsive-md">
                    <tfoot>
                      <tr>
                        <td>Total Price :</td>
                        <td>
                          <h2>N${(parseFloat(totalprice.reduce((a: any, b: any) => a + b, 0.0)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h2>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                  `);
            sessionStorage.setItem('store', JSON.stringify(store));
            $('#customercart').empty().html(builder.toString());
          }, () => { }, content);
        }
        if(window.location.href.includes('/checkout')){
         let id=localStorage.getItem('ack') ;
          let content = contenttypewithtoken(localStorage.getItem('customertoken'));
          setajax('json', `${backendurl}/userdetail/${id}`, 'get', "", (response: any) => {
            // process the response
            let phonenumber = response[0].phonenumber;
            let json = { ...response[0] };
            json.phone = phonenumber;
            delete json.phonenumber;
            // json = Object.assign({}, array);
            // json = array.reduce((json, value, key) => { json[key] = value; return json; }, {});
            console.log('response from  ', response, 'json', json);
            $("#regform").autofill(json);
          }, () => { }, content);
          }
        close(e);
      });
    }
    function close(e: any) {
      e.preventDefault();
      $('#exampleModal').modal('hide');
      setTimeout(() => {
        $('#exampleModal').remove();
      }, 800);
    }
    return (<div>
      <button className="btn btn-primary" type="button" onClick={(e) => login(e)}>Login</button>&nbsp;&nbsp;&nbsp;
      <button className="btn btn-secondary" type="button" data-dismiss="modal" onClick={(e) => close(e)}>Close</button>
    </div>)
  })());
  $('#exampleModal').modal('show');//show modal
});

// log out customer 
$('#custlogout').on('click', (e: any) => {
  e.preventDefault();
  Swal.fire({
    icon: 'question',
    text: 'Do you want to log out ?',
    showCancelButton: true,
    allowOutsideClick: false,
  }).then((result: any) => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = './index';
  });
});
//get state from countries .also use checkout
$('#country').on('change', (e: any) => {
  e.preventDefault();
  //alert(e.target.value.toLowerCase()) ;
  let countryandstates = {
    "country": e.target.value.toLowerCase()
  }
  setajax('json', `https://countriesnow.space/api/v0.1/countries/states`, 'post', JSON.stringify(countryandstates), (response: any) => {
    // process the response
    // console.log('response ',response);
    response = response.data.states.map((e: any) => {
      return `<option value='${e.name}'>${e.name}</option>`;
    });
    $("#state").empty().html(response.join(""));
  }, () => { }, contenttype);
});

// get cities from states 
$("#state").on('change', (e: any) => {
  console.log("Country ", $('#country').text());
  // alert($('#country').text()) ;
  // alert($('#country').val()) ;
  e.preventDefault();
  let countryandstates = {
    "country": $('#country').val(),
    "state": e.target.value
  }
  setajax('json', `https://countriesnow.space/api/v0.1/countries/state/cities`, 'post', JSON.stringify(countryandstates), (response: any) => {
    // process the response
    // console.log('response ',response.data);
    response = response.data.map((e: any) => {
      return `<option value='${e}'>${e}</option>`;
    });
    response.push(`<option value="Other">Other</option>`);
    $("#city").empty().html(response.join(""));
  }, () => { }, contenttype);
});
//create account
$('#createaccount').on('click', (e: any) => {
  e.preventDefault();
  //  invalidatetoken2(jwt_decode, 'customertoken'); // check token
  alertify.confirm('Registration', 'Do you want to Register Now ?', function () {
    // const form2 = document.getElementById('regform') as HTMLFormElement ;
    let form = JSON.parse($('#regform').jform());
    console.log(' form ', form);
    if (form.phone === "" || form.phone === null) {
      toastr.error('Phone cannot be empty');
      return;
    }
    if (form.password === "" || form.password === null) {
      toastr.error('Password cannot be empty');
      return;
    }
    if (form.password === "" || form.password === null) {
      toastr.error('confirmpassword cannot be empty');
      return;
    }
    if (form.email === "" || form.email === null) {
      toastr.error('Phone cannot be empty');
      return;
    }
    if (form.country === "" || form.country === null) {
      toastr.error('Country cannot be empty');
      return;
    }
    if (form.state === "" || form.state === null) {
      toastr.error('State cannot be empty');
      return;
    }
    sessionStorage.setItem('form', JSON.stringify(form));
    setajax('text', `${backendurl}/customer/register`, 'post', JSON.stringify(form), (response: any) => {
      // process the response
      console.log('response ', response);
      Swal.fire({
        icon: 'info',
        text: response + 'Please check your Email for Account Activation',
        showCancelButton: true,
        allowOutsideClick: false,
      }).then((result: any) => {
        if (result.isConfirmed) {
          (document.getElementById('regform') as HTMLFormElement).reset();
          window.location.href = "./productpage";
        }
      }
      );
    }, () => { }, contenttype);
    // formsubmit(`${backendurl}/customer/register`, form, null, 'text', 'post', (id: string) => {
    //   $("#error").empty().html('<br/><div class="alert alert-success" style="display:inline-block;"> <a href="/jetcart/checkout" class="btn btn-primary">Back</a> &nbsp;&nbsp;<span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + 'Registration is Successful' + ' !</div>');
    //   alertify.success('Account creation successful');
    // }, () => {
    //   $("#error").empty().html('<br/><div class="alert alert-danger" style="display:inline-block;"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + 'Registration is  not Successful' + ' !</div>');
    // });
  },
    function () {
      alertify.error('cancelled');
    }
  );
});
//$('$')
// registeration
// $('#createaccount').on('click',(e:any)=>{
//   e.preventDefault() ;
//   alert('seen') ;
// });
//create billing system under  check out
$('#createbilling').on('click', (e: any) => {
  // alert() ;
  e.preventDefault();
  const accountoption = document.getElementById("account-option") as HTMLInputElement;
  // alert('works') ;
  //return ;
  if (accountoption.checked) {
    window.location.href = "/jetcart/register";
  }
  else if (!accountoption.checked) {
    alertify.confirm('Billing Details',
      'Do you want create Billing Details and order this/these Goods/Product/Items ?',
      function () {
        let paymentgroup = document.getElementsByName('paymentgroup');
        // const paymentondelivery  = (Array.from(paymentgroup)[0] as HTMLInputElement).checked ;
        let paymentwithdebitcard = (Array.from(paymentgroup)[1] as HTMLInputElement).checked;
        // let selecttyperadio = Array.from(document.getElementsByName('selectype') as NodeListOf<HTMLInputElement>);
        (document.getElementById('payment-5') as HTMLInputElement).onclick = function (e: any) {
          console.log(e.target.value, ' and ', e.target.checked);
          if (e.target.checked) {
            paymentwithdebitcard = e.target.checked;
          }
          console.log('Array ', paymentwithdebitcard);
        }
        if (paymentwithdebitcard === false) {
          alertify.confirm().destroy();
          toastr.error('Pls Choose either one of the two options');
          throw new Error('option eror');
        }
        let form = JSON.parse($('#regform').jform());
       // console.log('userid ', localStorage.getItem('ack'), 'form', form);
        if (!localStorage.getItem('ack')) {
          form = {};
          if ($.isEmptyObject(form)) {
            alertify.confirm().destroy();
            toastr.error('Please fill the Billing Details');
            throw new Error('Option error');
          }
        }
        form.total = $('#total').text();
        // console.log('form', form);
        var tabledata = $('.qty').tableToJSON();
       // console.log(' table ', tabledata);//arrange and process for order 
        let orderarray = [];
        const mystore = JSON.parse(sessionStorage.getItem('store') as string); // get session store
        //console.log('mystore', mystore);
        for (let prd of tabledata) {
          //console.log('product ' , prd) ;
          const orderobj = {} as order;  //cast to order 
          orderobj.productname = prd.product;
          for (let prdstore of mystore) {
            console.log("prdstore.productname === prd.product ",prdstore.id === prd.product);
            if (prdstore.product === prd.productname) {
              orderobj.productid = prdstore.id;
              orderobj.vendorname  = prdstore.vendorname
            }
          }
          orderobj.price = prd.price;
          orderobj.ordid = "",
          orderobj.quantity = prd.quantity;
          orderobj.ordstatus = "";
          orderobj.town = form.town;
          orderobj.state = form.state;
          orderobj.total = prd.total;
          orderobj.tax = prd.tax;
          orderobj.country = form.country;
          orderobj.address = form.address;
          orderobj.firstname = form.firstname;
          orderobj.lastname = form.lastname;
          orderobj.email = form.email;
          orderobj.paymentmethod = form.paymentgroup;
          orderobj.paymentstatus = "";
          orderobj.phone = form.phone;
          orderobj.overalltotal = form.total;
          orderobj.postalcode = form.postalcode
         // orderobj.request_order_id = ""; // this shows if they are of the same order group
          orderobj.userid = localStorage.getItem('ack') as string
          if (form.shipping === 'on') {
            orderobj.shipping = true
          } else {
            orderobj.shipping = false;
          }
          if (form.localpickup === 'on') {
            orderobj.localpickup = true;
          } else {
            orderobj.localpickup = false;
          }
          orderarray.push(orderobj);
        }
        const totalorder = {
          "order": orderarray
        };
        setTimeout(() => {
          //console.log('totalorder', JSON.stringify(totalorder.order), 'total',parseFloat(form.total));
          console.log('total',parseFloat(form.total));
          let content = contenttypewithtoken(localStorage.getItem('customertoken'));
          setajax('json', `${backendurl}/order/saveorder`, 'post', JSON.stringify(totalorder.order), (response: any) => {
            // process the response
           // console.log('response and dispatch event ', response);
          //  console.log('localstorage ',localStorage);
            // send the event 
            let uriencode  = encodeURIComponent(`[${localStorage.getItem('vendorname')}]`) ;
           // let datarray   = new Array(${localStorage.getItem('vendorname')}) ;
            setajax('',`${backendurl}/dispatchEvent?vendorname=${uriencode}&freshNews=${localStorage.getItem('username')}`,'get',"", (response: any) => {
              // process the response
             // console.log('response ', response); 
          // subscribetoevent(new EventSource(`${backendurl}/subscribe?vendorname=${localStorage.getItem('vendorname')}&freshNews='This is me'`),'vendornews');
            }, () => {}, content);
           makePayment(JSON.stringify(totalorder), generateId(),parseFloat(form.total), "Pls Fill in your Card Info", `${backendurl}/jetstore/crista-digital.jpg`, "JTL Platform", "");
          }, () => { }, content);
        }, 1500);
      }, function () {
        alertify.error('cancelled');
      });
  }

});
//create review 
$('#submitreview').on('click', (e: any) => {
  e.preventDefault();
  // alert('review');
  Swal.fire({
    icon: 'question',
    text: 'Do you want to add Review ?',
    showCancelButton: true,
    allowOutsideClick: false,
  }).then((result: any) => {
    if (result.isConfirmed) {
      invalidatetoken2(jwt_decode, 'customertoken'); // check token
      const form = new FormData(document.getElementById('formreview') as HTMLFormElement);
      form.append("custid", (localStorage.getItem('ack') as string));
      const id = JSON.parse(sessionStorage.getItem('product') as string).id; // session created for product
      const jsonform = Object.fromEntries(form);
      jsonform.productid = id;
      console.log('ack', localStorage.getItem('ack'), ' jsonform ', jsonform);
      fetch(`${backendurl}/review`, {
        method: 'post',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('customertoken')
        },
        body: JSON.stringify(jsonform)
      }
      ).then((r: any) => {
        console.log('response', r, r.clone().text());
        return r.text();
      }).then((r: any) => {
        console.log('r ', r);
        $('#error').empty().html('<br/><div class="alert alert-danger" style="display:inline-block;"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + r + ' !</div>');
      }).catch((err: any) => {
        console.log('err', err);
        $('#error').empty().html('<br/><div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + `You have neither Registered/Login` + ' !</div>');
      });
    } else {
      toastr.error('cancelled');
    }
  });
});
//detect duplicates on cart and wishlist
const mutuallyExcludeWishListForCart = (store: string, wishlist: string, product: any) => {
  let wishliststore = JSON.parse(sessionStorage.getItem(wishlist) as string); // to check if there is in wishlist
  console.log('wishliststore ', wishliststore);
  JSON.parse(sessionStorage.getItem(store) as string).forEach((element: any) => {
    //console.log(' element ', element);
    if (wishliststore!==undefined && wishliststore!==null) {  // if it is not empty
      wishliststore = wishliststore.filter((e: any) => {
        console.log(e.id, element.id);
        if(e.id===element.id){  // remove from db
          const content  = contenttypewithtoken(localStorage.getItem('token')) ;   
          setajax('json', `${backendurl}/product/removefromwishlist/${element.id}`, 'get', "",(response:any)=>{
            console.log('response',response) ;
              },()=>{},content);
           }
      return e.id !== element.id
      });
      console.log('setting a new wishliststore json', wishliststore);
      sessionStorage.setItem('wishlist', JSON.stringify(wishliststore));
    }
    console.log('new wishliststore set');
  }
    // if (element.id === product.id) { // check duplicate  items
    // //  console.log('duplicate  items');
    //  // toastr.error("This item is already in Cart");
    //   if(wishliststore){ // remove it from wishlist
    //     var keys  = Object.keys(wishliststore) ;
    //     console.log('keys ',keys) ;
    //     keys  = keys.filter((e:any)=>{
    //       console.log('e,wishliststore,product',e,wishliststore.e,product.e) ;
    //       return wishliststore.e===product.e ;
    //     }) ;
    //   console.log('filtered keys ',keys[0]) ;
    //  if(Object.prototype.hasOwnProperty.call(wishliststore,keys[0])){
    //    console.log('deleting .......') ;
    //       delete wishliststore.keys[0] ; //from wishlist if present
    //         }
    //      }
    //   }
  );
}
//add to cart logic
const storagearray = new Set();  // to store object
$('#addcart').on('click', (e: any) => {
  // e.preventDefault() ;
  // alert(localStorage.getItem('customertoken')+"2222") ;
  //alert('view the cart') ;
 // return ;
  let token = localStorage.getItem('customertoken');
  console.log("token " + token);
  if (token !== null) {
    invalidateSession(jwt_decode, 'customertoken');
    const product = JSON.parse(sessionStorage.getItem('product') as string);
    let inputnumber  = $('#input-number').val()  ;
    product.productquantity  = inputnumber ;
  //  console.log('cart product ', product.categoryid, ' and ', product);
    //alert(inputnumber) ;
   // return ;
    let content = contenttypewithtoken(localStorage.getItem('customertoken'));
    setajax('json', `${backendurl}/product/displayandloadsimilaritems/${product.id}`, 'get', "", (r: any) => {
      // process the response
      console.log('adding to cart ', 'res', r);
      console.log(' r ', r);
      $('#producttype').text(product.productname);
      $('#productimage').prop('src', `${backendurl}/jetstore/${product.imageurl}`);
      var builder = new StringBuilder();
      //sessionStorage.setItem('store', JSON.stringify(Array.from(storagearray.add(product))));
      if (Array.isArray(r)) {
        r.forEach((element: any) => {
          console.log('productname ', element.productname);
          builder.append(`
         <div class="product-box col-sm-3 col-6">
               <div class="img-wrapper">
                   <div class="front">
                       <a href="/jetcart/productpage" onclick="loadprd('${element.id}','/jetcart/productpage')">
                           <img src="${backendurl}/jetstore/${element.imageurl}"
                               class="img-fluid blur-up lazyload mb-1"
                               alt="cotton top">
                       </a>
                   </div>
                   <div class="product-detail">
                       <h6><a href="#"><span>${element.productname}</span></a></h6>
                       <h4><span>N${(parseFloat(element.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</span></h4>
                   </div>
               </div>
             </div>
             `);
        })
      }
      $('#upsell_product').empty().html(builder.toString());
      console.log('calling the modal ');
      $('#addtocart2').modal('show');
      console.log('before if ', JSON.parse(sessionStorage.getItem('store') as string));
      const store = JSON.parse(sessionStorage.getItem('store') as string);
      if (store === null || store.includes(null)) { // check for the first time
        // addtodb
        // sessionStorage.setItem('store', JSON.stringify(Array.from(storagearray.add(product))));
        let content = contenttypewithtoken(localStorage.getItem('customertoken'));
        console.log('content ', content, ' product ', product);
        console.log('first store ', JSON.parse(sessionStorage.getItem('store') as string));
        setajax('text', `${backendurl}/product/addcartlist/${product.id}/${localStorage.getItem('ack')}/${product.productquantity}`, 'get',"", (response: any) => {
          // process the response
          console.log('response ', response);
          sessionStorage.setItem('store', JSON.stringify(Array.from(storagearray.add(product))));
          console.log('going to process exclusive');
          mutuallyExcludeWishListForCart('store', 'wishlist', product);
          console.log('finish processing exclusive');
          //toastr.success('') ;
        }, () => { }, content);
        // return ;
      }
      if (store !== null && store.length > 0) {
        JSON.parse(sessionStorage.getItem('store') as string).forEach((element: any) => {
          console.log(' element ', element);
          if (element.id === product.id) { // check duplicate  items
            console.log('duplicate  items');
            toastr.error("This item is already in Cart");
            throw new Error('duplicate  item');
            // return;
          }
          // also check if it is in db too
        });
        const store = JSON.parse(sessionStorage.getItem('store') as string);
        console.log(' ack ', localStorage.getItem('ack'));
        console.log(' store to cart ', store);
        let content = contenttypewithtoken(localStorage.getItem('customertoken'));
        console.log('content ', content, ' product ', product);
        setajax('text', `${backendurl}/product/addcartlist/${product.id}/${localStorage.getItem('ack')}/${product.productquantity}`, 'get', "", (response: any) => {
          // process the response
          console.log('response store not empty ', response);
          console.log(' product ', product);
          store.push(product);
          sessionStorage.setItem('store', JSON.stringify(store));
          mutuallyExcludeWishListForCart('store', 'wishlist', product);
          console.log('next store ', JSON.parse(sessionStorage.getItem('store') as string));
        }, () => { }, content);
      }
    }, () => { }, content);
  } else {
    // toastr.error("Please login to add to cart") ;
    // $(secondialog(()=>{
    //   return (`<h5 class="modal-title">Account Management</h5>`) ;
    // },()=>{
    //   return (`<div class="row form-group">
    //     <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
    //     <button class="btn btn-primary" type="button" id="redirecttologin">Login</button>
    //   </div>`)
    // },()=>{
    //   return (
    //     ""
    //   );
    // })).insertAfter(".product-description"); 
    $(secondialog(() => {
      return (`<div class="row">
        <div class="col-md-5">
      <button class="btn btn-link" id="redirecttoreg">Create Account</button>
        </div>
        <div class="col-md-6">
      <button class="btn btn-link" id="redirecttologin">Login to your Account</button>
       </div>
      </div>`)
    }, () => {
      return (`<h5 class="modal-title">Account Management</h5>`);
    }, () => {
      return (
        ""
      );
    })).insertAfter(".product-description");
    $('#exampleModal').modal('show');//show modal
  }
});

//customer access into the system
$(document).on("click", "#redirecttologin", function () {
  (function () {
    $('#exampleModal').modal('hide');
    setTimeout(() => {
      $('#exampleModal').remove();
      let id = JSON.parse(sessionStorage.getItem('product') as string).productname;
      window.location.href = './custlogin?custlogin=' + btoa(unescape(id));
    }, 800);
  })();
});

$(document).on("click", "#redirecttoreg", function () {
  (function () {
    $('#exampleModal').modal('hide');
    setTimeout(() => {
      $('#exampleModal').remove();
      //let coursename= decodeURIComponent(escape(window.atob(params.get('csn'))));
      // ${btoa(unescape(encodeURIComponent(id)))}
      let id = JSON.parse(sessionStorage.getItem('product') as string).productname;
      window.location.href = './register?prd=' + btoa(unescape(id));
    }, 800);
  })();
});
//customer  login
$('#custlogin').on('click', () => {
  // alert() ;
  Swal.fire({
    icon: 'info',
    text: 'Do you want to login ?',
    showCancelButton: true,
    allowOutsideClick: false,
  }).then((result: any) => {
    if (result.isConfirmed) {
      const form = document.getElementById('custloginform') as HTMLFormElement;
      const formdata = new FormData(form);
      console.log('username ', (formdata.get('username') as string) === '');
      if ((formdata.get('username') as string) === '') {
        toastr.error('Please fill the username field');
        throw new Error('login error');
      } else if ((formdata.get("password") as string) === '') {
        toastr.error('Please fill the password field');
        throw new Error('login error');
      } else {
        setajax('text', `${loginurl}/api/login`, 'post', JSON.stringify({ username: formdata.get('username') as string, password: formdata.get("password") as string }), (response: any) => {
          // process the response
          console.log('response store not empty ', response);
          Swal.fire({
            icon: 'info',
            text: 'Pls proceed to cart',
            showCancelButton: false,
            allowOutsideClick: false,
          }).then((result: any) => {
            if (result.isConfirmed) {
              console.log('response store not empty ', response);
              localStorage.setItem("customertoken", response);
              var decoded = jwt_decode(response);
              // console.log(decoded, 'exp ', decoded['exp'], 'sub ', decoded.sub, 'vendorname ', decoded.vendorname, ' ack ', decoded.ack);
              const now = Date.now().valueOf() / 1000;
              const tokenexp = parseInt(decoded.exp);
              console.log(decoded.username);
              // localStorage.setItem('vendorname', decoded.vendorname);
              localStorage.setItem('ack', decoded.ack);
              localStorage.setItem('username', decoded.username);
              localStorage.setItem("vendorname",decoded.vendorname);
              const login = document.querySelector('.login') as HTMLDivElement;
              login.classList.add("alert");
              login.classList.add("alert-success");
              login.classList.add("alert-dismissible");
              login.classList.add("fade");
              login.classList.add("show");
              $('.login').empty().html(`<strong>Welcome ${localStorage.getItem('username')?.toUpperCase()} &nbsp;</strong> Logged in.
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>`);
              setTimeout(function () {
                // redirect back to the page
                //sessionStorage.clear() ;
                // sessionStorage.setItem('store',JSON.stringify(JSON.parse(sessionStorage.getItem('product') as string))) ;
                // console.log() ;
                window.location.href = './productpage';
              }, 2000);
            }
          });
        }
          , () => { }, contenttype);
      }
    } else {
      toastr.error('Attempt cancelled');
    }
  });
}
);
//load  pr0ductpage info
const fillproductinfo = (product: any, pagelink: string) => {
  if ($.isEmptyObject(product)) { // incase no product in product session 
    $('#pagetitle').empty().html(`<h2>Nil</h2>`);
    $('#pagetype').empty().html(`<li class="breadcrumb-item"><a href="${pagelink}">Home</a></li>
   <li class="breadcrumb-item active" aria-current="page">Nil</li>`);
    $('#cat').text(`Nil`);
    $(`#top-home`).empty().html(`Nil`);
    $('#top-profile').empty().html(`Nil`);
    //  $('.myimage').prop('src',`${backendurl}/jetstore/${product.imageurl}`) ;
    // $('.input-number').val(`${product}`) ;
    $('#prdetails').empty().html(`
        <h6 class="product-title">product details</h6>
        <p>Nil<p>
        <p><strong> Product Name </strong> &nbsp;&nbsp;Nil</p>
        <p><strong>Product Size</strong> &nbsp;&nbsp;Nil</p>
        <p><strong> Product Status</strong> &nbsp;&nbsp;Nil</p>
        <p><strong>Product Price</strong> &nbsp;&nbsp;Nil</p>
        <p><strong>Product Tax </strong> &nbsp;&nbsp;Nil%</p>
        <p><strong>Product Model </strong> &nbsp;&nbsp;Nil</p>
        <p><strong>Vendor in Charge </strong> &nbsp;&nbsp;Nil</p>
        `);
    return;
  }
  $('#pagetitle').empty().html(`<h2>${product.categoryid}</h2>`);
  $('#pagetype').empty().html(`<li class="breadcrumb-item"><a href="${pagelink}">Home</a></li>
 <li class="breadcrumb-item active" aria-current="page">${product.categoryid}</li>`);
  $('#cat').text(`${product.categoryid}`);
  $(`#top-home`).empty().html(`${product.proddescription}`);
  $('#top-profile').empty().html(`${product.shortsummary}`);
  $('.myimage').prop('src', `${backendurl}/jetstore/${product.imageurl}`);
  // $('.input-number').val(`${product}`) ;
  $('#prdetails').empty().html(`
      <h6 class="product-title">product details</h6>
      <p>${product.shortsummary}<p>
      <p><strong> Product Name </strong> &nbsp;&nbsp;${product.productname}</p>
      <p><strong>Product Size</strong> &nbsp;&nbsp;${product.size}</p>
      <p><strong> Product Status</strong> &nbsp;&nbsp;${product.productstatus}</p>
      <p><strong>Product Price</strong> &nbsp;&nbsp;${product.productprice}</p>
      <p><strong>Product Tax </strong> &nbsp;&nbsp;${product.tax}%</p>
      <p><strong>Product Model </strong> &nbsp;&nbsp;${product.model}</p>
      <p><strong>Vendor in Charge </strong> &nbsp;&nbsp;${product.vendorname}</p>
      <a style="color:blue;" target="_" href="./chat"><strong>Chat with </strong>the Product Owner</strong></a>
      `);
  //to wishlist button
  $("#wishlist-btn").empty().html(`
  <a href="javascript:void(0)" class="btn-link" onclick="addtocartforwishlist(${product.id})">
  <i class="fa fa-heart"></i><span class="title-font">Add To
    WishList</span>
         </a>
         `)
};
let usermap  =  new Map() ;
// the menu 
$('.multimenu2').on('click', (e: any) => {
  e.preventDefault();
  //alert(e.target.innerText) ;
  //console.log('the event ',e.target.innerText) ;
  const encoder = encodeURIComponent(e.target.innerText);
  window.location.href = `../jetcart/productbycategory?product=${encoder}`
});
$('#removeitemfromcart').on('click', (e: any) => {
  alert('seen');
});
let socket = null;
let stompClient = null;
//pay on delivery
$('#payment-2').on('click', (e: any) => {
  $(dialog("", "", "")).insertAfter(".upper-box");
  $('.modal-body').empty().html((() => {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Company Name</th>
            <th scope="col">Bank Name</th>
            <th scope="col">Account</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Cristal Digital Limited</td>
            <td>Access Bank</td>
            <td>11111111111111</td>
          </tr>
        </tbody>
      </table>
    );
  })());
  $(".modal-footer").empty().html((() => {
    function close(e: any) {
      e.preventDefault();
      $('#exampleModal').modal('hide');
      setTimeout(() => {
        $('#exampleModal').remove();
      }, 800);
    }
    return (<div>
      <button className="btn btn-secondary" type="button" data-dismiss="modal" onClick={(e) => close(e)}>Close</button>
    </div>)
  })());
  $('#exampleModal').modal('show');//show modal
});
//submit contact form
// function returnToPreviousPage(e:any){
//   e = e || window.event;
//   console.log(e) ;
//   // validation code
//   alert('contact') ;
//   // if invalid
//   if (e.preventDefault) {
//     e.preventDefault();
//   } else {
//     e.returnValue = false;
//   }
// }
// var submitcontact2 = document.getElementById("submitcontact2") as HTMLButtonElement;
// if (submitcontact2.addEventListener) {
//   submitcontact2.addEventListener("click", returnToPreviousPage);
// } else {
//   //submitcontact2.attachEvent("onclick", returnToPreviousPage);
// }

// $(document).on('submit', 'submitcontact2', function(e:any){
//   e.preventDefault();
//   //your code goes here
//   alert('contact') ;
//   //100% works
//   return;
// });
//make payment 
function makePayment(itemsbought: string, txref: string, amount: number, description: string, imagelink: string, title: string, custdata: string) {
   console.log('itemsbought ',JSON.parse(itemsbought),' txref ',txref) ;
   console.log('amount ',amount) ;
   console.log('description ',description) ;
   console.log('imagelink ',imagelink) ;
   console.log('title ',title) ;
   console.log('custdata ',custdata) ;
   let items =JSON.parse(itemsbought) ;
   console.log('items ',parseInt(items.order[0].overalltotal.substring(1).replace(/,/g, ""))) ;
  //validate the form 
  let form = JSON.parse($('#regform').jform());
  console.log(' form ', form, form.firstname);
  if (form.firstname === "" || form.firstname === null) {
    toastr.error('firstname cannot be empty');
    return;
  }
  if (form.email === "" || form.email === null) {
    toastr.error('Email cannot be empty');
    return;
  }
  if (form.lastname === "" || form.lastname === null) {
    toastr.error('lastname cannot be empty');
    return;
  }
  if (form.state === "" || form.state === null) {
    toastr.error('state cannot be empty');
    return;
  }
  if (form.city === "" || form.city === null) {
    toastr.error('city cannot be empty');
    return;
  }
  if (form.address === "" || form.address === null) {
    toastr.error('Address cannot be empty');
    return;
  }
  if (form.postalcode === "" || form.postalcode === null) {
    toastr.error('Postal code cannot be empty');
    return;
  }
  if (form.phone === "" || form.phone === null) {
    toastr.error('Phone cannot be empty');
    return;
  }
  if (form.password === "" || form.password === null) {
    toastr.error('Password cannot be empty');
    return;
  }
  //console.log('itemsbought',itemsbought);
  const modal  = FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-739dbfa5df97cb97b1cfe74e51c4eb7e-X",
    tx_ref: txref,
    amount: parseInt(items.order[0].overalltotal.substring(1).replace(/,/g, "")),
    currency: "NGN",
    payment_options: "card,ussd",
    callback: function (payment: any) {
      // Send AJAX verification request to backend
      console.log('payment ', payment);
      verifyTransactionOnBackend(payment, itemsbought);
    },
    onclose: function (incomplete: any) {
      console.log('modal object under close ',modal,' complete ',incomplete);
     // modal.close() ;
      // if (incomplete || window.verified === false) {
      //   (document.querySelector("#payment-failed") as HTMLInputElement).style.display = 'block';
      // } else {
      //   (document.querySelector("form") as HTMLFormElement).style.display = 'none';
      //   if (window.verified === true) {
      //     (document.querySelector("#payment-success") as HTMLInputElement).style.display = 'block';
      //   } else {
      //     (document.querySelector("#payment-pending") as HTMLInputElement).style.display = 'block';
      //   }
      // }
    },
    customer: {
      email: form.email,
      phone_number: form.phone,
      name: form.firstname + '' + form.lastname,
    },
    customizations: {
      title: title,
      description: description + "<br/>" + amount,
      logo: imagelink
    }
  });
  console.log('modal object ',modal);
}
//genrate randon random  ids 
function uid() {
  let a = new Uint32Array(3);
  window.crypto.getRandomValues(a);
  return (performance.now().toString(36) + Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g, "");
}
function generateId() {
  return Math.random().toString(36).substring(2) +
    (new Date()).getTime().toString(36);
}
function verifyTransactionOnBackend(transactionId: string, itemsbought: string) {
  // Let's just pretend the request was successful
  console.log('after transaction for backends calls ', transactionId);
  setTimeout(function () {
    window.verified = true;
    const content = contenttypewithtoken(localStorage.getItem('customertoken'));
    setajax('json', `${backendurl}/order/create`, 'post', itemsbought, (r: any) => {
      console.log('r ',r) ;
      // process the response
      //  makePayment(itemsbought:JSON,txref:string,amount:string,description:string,imagelink:string,title:string,custdata:string) 
    }, () => {
    }, content);
  }, 200);
}
// send contact form
$('#submitcontact2').on('click', (e: any) => {
  Swal.fire({
    icon: 'info',
    text: 'Do you really want to contact us ?',
    showCancelButton: false,
    allowOutsideClick: false,
  }).then((result: any) => {
    if (result.isConfirmed) {
      let submitcontact2 = new FormData(document.getElementById('contact') as HTMLFormElement)
      //JSON.parse($('#contact').jform());
      console.log(' submitcontact2 ', submitcontact2.get('email'), Object.fromEntries(submitcontact2));
      setajax('json', `${backendurl}/customer/contact`, 'post', JSON.stringify(Object.fromEntries(submitcontact2)), (response: any) => {
        console.log('response ', response);
      }, () => { }, contenttype);
    }
  })
});

const subscribetoevent = (eventSource: EventSource, evtype: string) => {
  // var eventSource = new EventSource(url);
  // var eventSource = new EventSource(url);
  eventSource.addEventListener(evtype, (event: any) => {
    // if (event.data) {
      console.log('from dispatch event ', event.data);
      toastr.success('message sent successfully');
      alertify.success('Ok');
       eventSource.close();
    // }
  });
  // for error 
  eventSource.addEventListener("error", (event: any) => {
    if (event.currentTarget.readyState === EventSource.CLOSED) {
    } else {
      eventSource.close();
    }
  });
  // window.onbeforeunload = function () {
  //   eventSource.close();
  // }
  // console.log('closing  connection .....') ;
  // eventSource.close() ;
  // return eventSource ;
}
const pagesonload = (url: string) => {
  //server events handling connection
  console.log('calling events connection subscriber ....') ;
 // subscribetoevent(new EventSource(`${backendurl}/subscribe`), 'latestNews');
 // subscribetoevent(new EventSource(`${backendurl}/eventbyuser?userid=${localStorage.getItem('ack')}`), 'usernews');
  //subscribetoevent(new EventSource(`${backendurl}/subscribe?vendorname=${localStorage.getItem('vendorname')}`),'vendornews');
  const cartstore = JSON.parse(sessionStorage.getItem('store') as string);
  console.log('before cartstore ', cartstore) // true) ;
  if (cartstore !== null && !cartstore.includes(null)) {
    // console.log(' cartsotre ',cartstore.length,cartstore) ;
    const b = new StringBuilder();
    cartstore.forEach((res: any) => {
      //console.log('res ',res) ;
      b.append(`
                      <li>
												<div class="media">
													<a href="#"><img class="mr-3"
														src="${backendurl}/jetstore/${res.imageurl}"
														alt="Generic placeholder image"></a>
													<div class="media-body">
														<a href="#">
															<h4>${res.productname}</h4>
														</a>
														<h4>
															<span>${res.productquantity} x ${parseFloat(res.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
														</h4>
													</div>
												</div>
												<div class="close-circle">
													<a href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
												</div>
											</li>
           `);
    });
    $('#cartsummary').empty().html(b.toString());
  } else {
    $('#cartsummary').empty().html(`<li>empty cart</li>`);
  }
  switch (url) {
    case `${loginurl}/taxes`: // for taxes
      const taxesdata = [
        {
          name: 'id',
          type: 'hidden',
          css: 'hide'
        },
        {
          name: "taxdetail", type: "text", align: "left", width: 80, validate: function (value: any) {
            // if (value > 0) {
            return true;
            //}
          }
        },
        {
          name: "taxschedule", align: "left", type: "text", width: 50,
          // itemTemplate: function (value: any, item: any) {
          //   console.log(' value ', value, ' item ', item);
          // },
        },
        {
          name: "totaltaxamount", align: "left", type: "text", width: 50,
          // itemTemplate: function (value: any, item: any) {
          //   console.log(' value ', value, ' item ', item);
          // },
        },
        {
          name: "taxrate", align: "left", type: "text", width: 50,
          // itemTemplate: function (value: any, item: any) {
          //   console.log(' value ', value, ' item ', item);
          // },
        },
        { type: "control" }
      ];
      createtables2(`${backendurl}/taxes/updatetax`, localStorage.getItem('token'), taxesdata, true);
      break;
    case `${loginurl}/jetcart/index`:
      //load  images 
      searchFiter2();
      searchNewArrivalFilter();
      searchFeaturedFilter();
      // load market products
      searchandloadmarketproducts();
      break;
    case `${loginurl}/jetcart/chat`:
      if(localStorage.getItem('customertoken')){
      (function () {
        // invalidateSessionAndToken(jwt_decode,'customertoken') ;
        // alert() ;
      //  let myWebSocket = new MyWebscoket(`ws://localhost:1023/ws`);
        // let webSocket:WebSocket = new WebSocket(`ws://localhost:1023/ws`);
        // webSocket.onopen = function (evt:any) {
        //   console.log("onopen connected ", evt.data);
        // }
        // webSocket.onmessage = function (evt) {
        //   console.log('on message', evt.data);
        // };
        // webSocket.onerror = function (evt:any) {
        //   console.log('onerror ', evt.data);
        // };
        socket = new SockJS(`${sockjsurl}/ws`);
        stompClient = Stomp.over(socket);
       stompClient.connect({},()=>{
        stompClient.subscribe('/chatroom/public',onMessageReceived);
        //dispatch event before subscribing 
        let content = contenttypewithtoken(localStorage.getItem('customertoken')) ;
        let uriencode  = encodeURIComponent(`[${localStorage.getItem('vendorname')}]`) ;
        setajax('',`${backendurl}/dispatchEvent?vendorname=${uriencode}&freshNews=${localStorage.getItem('username')}`,'get',"", (response: any) => {
          // process the response
          console.log('response ', response); 
        }, () => {}, content);
        var chatMessage = {
          senderName:localStorage.getItem('username'),
         // receiverName:usermap.get('receiverName')!==undefined?usermap.get('receiverName'):"",
          message: "",
          status:"JOIN"
           };
        stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
        stompClient.subscribe('/user/'+localStorage.getItem('username')+'/private', onPrivateMessage);
       },()=>{
       console.log("unable to connect") ;   
       });
      })();
      $('#sendbtn').on('click',(e:any)=>{
        e.preventDefault() ;
       console.log($('#chatmsg').val()) ;
        var chatMessage = {
          senderName:localStorage.getItem('username'),
          receiverName:localStorage.getItem('vendorname'),
          message: $('#chatmsg').val(),
          status:"MESSAGE"
        };
      $('#msgarea').append(`<p style="color:blue"><i>${$('#chatmsg').val()}</i></p>`) ;
      $('#chatmsg').val('');
    //(document.getElementById('msgarea') as HTMLUListElement).scrollTop =  (document.getElementById('msgarea') as HTMLUListElement).scrollHeight;
      stompClient.send("/app/private-message",{},JSON.stringify(chatMessage))
      }) ;
    }else{
      alert('Pls login to access') ;
      localStorage.clear ;
      window.location.href='./index' ;
    }
      break;
    case `${loginurl}/jetcart/checkout`:
      // check user's  login 
      let id = localStorage.getItem('ack');
      console.log("id ", id);
      if (id) {   //check if he is logged in
        invalidateSession(jwt_decode, 'customertoken');
        console.log('cart store ', cartstore);
        //loads countries
        setajax('json', `https://countriesnow.space/api/v0.1/countries/states`, 'get', "", (response: any) => {
          // process the response
          let countries = response.data.map((e: any) => {
            return `<option value=${e.name}>${e.name}</option>`;
          });
          $('#country').empty().html(countries.join(""));
        }, () => { }, contenttype);
        const form = sessionStorage.getItem('form');
        console.log('form ', form);
        if (form) {
          $("#regform").autofill(JSON.parse(form));  //autofill the  form if session exists 
        } else {  // load the form from backend
          let content = contenttypewithtoken(localStorage.getItem('customertoken'));
          setajax('json', `${backendurl}/userdetail/${id}`, 'get', "", (response: any) => {
            // process the response
            let phonenumber = response[0].phonenumber;
            let json = { ...response[0] };
            json.phone = phonenumber;
            delete json.phonenumber;
            // json = Object.assign({}, array);
            // json = array.reduce((json, value, key) => { json[key] = value; return json; }, {});
            console.log('response from  ', response, 'json', json);
            $("#regform").autofill(json);
          }, () => { }, content);
        }
        if (cartstore === null || cartstore.includes(null)) {
          let content = contenttypewithtoken(localStorage.getItem('customertoken'));
          console.log('content ', content, `${backendurl}/product/loadcartlist/${localStorage.getItem('ack')}`);
          //alert(localStorage.getItem('ack')) ;
          setajax('text', `${backendurl}/product/loadcartlist/${localStorage.getItem('ack')}`, 'get', '', (store: any) => {
            // process the response
            console.log('loaded response ', store);
            if (store.length === 0) {
              $('#cartcheckout').empty().html(`<tr><td>Your cart is empty</td><td></td><td></td><td></td><td></td></tr>`);
            }
            const builder2 = new StringBuilder();
            store.forEach((e: any) => {
              builder2.append(`<tr><td>${e.productname}</td><td>${parseFloat(e.productquantity).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
              <td><span>N${parseFloat(e.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span></td><td><span>N${(parseFloat(e.productprice) * parseFloat(e.productquantity)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span><td><td>${e.tax}%</td></tr>`)
            });
            $('#cartcheckout').empty().html(builder2.toString());
            const price = store.map((res: any) => {
              return res.productprice * res.productquantity;
            });
            console.log('totalprice', price);
            $('#total').text(`N${(parseFloat(price.reduce((a: any, b: any) => a + b, 0.0)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}`);
          }, () => { }, content);
          return;
        } else {
          const builder2 = new StringBuilder();
          cartstore.forEach((e: any) => {
            builder2.append(`<tr><td>${e.productname}</td><td>${parseFloat(e.productquantity).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
            <td><span>N${parseFloat(e.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span></td><td><span>N${(parseFloat(e.productprice) * parseFloat(e.productquantity)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span><td><td>${e.tax}%</td></tr>`)
          });
          $('#cartcheckout').empty().html(builder2.toString());
          const price = cartstore.map((res: any) => {
            return res.productprice * res.productquantity;
          });
          console.log('totalprice', price);
          $('#total').text(`N${(parseFloat(price.reduce((a: any, b: any) => a + b, 0.0)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}`);
        }
      } else {
        Swal.fire({
          icon: 'info',
          text: 'Please login',
          showCancelButton: false,
          allowOutsideClick: false,
        }).then((result: any) => {
          if (result.isConfirmed) {

          }
        });
      }
      break;
    case `${loginurl}/jetcart/productpage`:
      let url: URL = new URL(decodeURIComponent(window.location.href));
      let searchParams = new URLSearchParams(url.search).get('prdinfo');
      let product: any;
      if (searchParams) {
        processrequest2(`${backendurl}/product/display/${searchParams}`, 'get', {
        }, (r: any) => {
          product = JSON.parse(r);
          console.log(' r ', product, ' searchParams ', searchParams);
          fillproductinfo(product, `${loginurl}/jetcart/productpage`);
          sessionStorage.setItem('product', JSON.stringify(product));
        });
      } else {
        product = JSON.parse(sessionStorage.getItem('product') as string);
        console.log(' product check ', product, ' searchParams ', searchParams, window.location.href);
        fillproductinfo(product, `${loginurl}/jetcart/productpage`);
      }
      console.log(' going to load others ', product);
      //get product id  for load related category product   
      setTimeout(() => {
        const id = product.id;
        console.log(' id ', id);
        processrequest2(`${backendurl}/product/displayandloadsimilaritems/${id}`, 'get', {
        }, (r: any) => {
          r = JSON.parse(r);
          console.log('productpage ...', r);
          //process the array r of  product  generated
          let relatedprd = new StringBuilder();
          r.forEach((el: any) => {
            relatedprd.append(`<div class="col-xl-2 col-md-4 col-sm-6">
      <div class="product-box">
          <div class="img-wrapper">
              <div class="front">
                  <a href="#"><img src="${backendurl}/jetstore/${el.imageurl}"
                          class="img-fluid blur-up lazyload bg-img" alt=""></a>
              </div>
              <div class="back">
                  <a href="#"><img src="${backendurl}/jetstore/${el.imageurl}"
                 class="img-fluid blur-up lazyload bg-img" alt=""></a>
              </div>
              <div class="cart-info cart-wrap">
                  <button data-toggle="modal" onclick="addtocart('${el.id}')" title="Add to cart"><i
                          class="ti-shopping-cart"></i></button> 
            <a href="javascript:void(0)" onclick="addtocartforwishlist('${el.id}')"
                      title="Add to Wishlist"><i class="ti-heart" aria-hidden="true"></i></a> 
                      <a href="#"
                      data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                          class="ti-search" aria-hidden="true"></i></a> 
          <a href="/jetcart/compare?name=${encodeURIComponent(el.productname)}$price=${el.productprice}"
                      title="Compare"><i class="ti-reload" aria-hidden="true"></i></a></div>
          </div>
          <div class="product-detail">
              <div class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i
                      class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                      </div>
              <a href="product-page(no-sidebar).html">
                  <h6>${el.categoryid}</h6>
              </a>
              <h4>N${(parseFloat(el.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h4>
              <h4><del>N${(parseFloat(el.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</del></h4>
          </div>
      </div>
  </div>`)
          });
          //append to dom
          $('#search-product').empty().html(relatedprd.toString());
          // animate this category 
          setTimeout(() => {
            //delay for 2000
            const catalogue = document.getElementById('search-product') as HTMLDivElement;
            animateCSS('.search-product', 'fadeOutRightBig', () => {
              animaterelatedprd(backendurl, '.search-product', 'fadeOutRightBig', catalogue, 'get', `${backendurl}/product/displayandloadsimilaritems/${id}`)
            });
          }, 1000);
        })
      }, 500);
      break;
    case `${loginurl}/jetcart/register`:
      setajax('json', `https://countriesnow.space/api/v0.1/countries/states`, 'get', "", (response: any) => {
        // process the response
        // console.log('response ',response.data);
        let countries = response.data.map((e: any) => {
          //console.log('countries',e.name) ;
          return `<option value=${e.name}>${e.name}</option>`;
        });
        //console.log(countries) ;
        $('#country').empty().html(countries.join(""));
      }, () => { }, contenttype);
      break;
    case `${loginurl}/jetcart/cart`:
      invalidateSessionAndToken(jwt_decode, 'customertoken');
     // sessionStorage.clear() ;
      if (localStorage.getItem('customertoken') !== null) {
        const store = JSON.parse(sessionStorage.getItem('store') as string);
         console.log('cart store ', store);
        if (store === null || store.includes(null)) {
          alert('session null');
          let content = contenttypewithtoken(localStorage.getItem('customertoken'));
          //console.log('content ', content, `${backendurl}/product/loadcartlist/${localStorage.getItem('ack')}`);
          //alert(localStorage.getItem('ack')) ;
          setajax('text', `${backendurl}/product/loadcartlist/${localStorage.getItem('ack')}`, 'get', '', (store: any) => {
            // process the response
            console.log('loaded response ', store);
            //alert('response ..');
            if(store!== undefined){
            if (store.length === 0) {
              toastr.error('Your cart is empty');
              $('#customercart').empty().html(`<center><p>Your cart is empty</p><center>`);
            }
            console.log('typeof ', typeof store);
            store = JSON.parse(store);
            //alert() ;
            const totalbody = store.map((elem: any) => {
              //alert('elem') ;
              console.log('element2 ',elem);
              //processing each object in cart 
              return `
                     <tbody>
                       <tr>
                         <td>
                             <a  href="#"><img src="${backendurl}/jetstore/${elem.imageurl}" alt=""/></a>
                         </td>
                         <td>
                         <a href="#">${elem.productname}</a>
                             <div class="mobile-cart-content row">
                                 <div class="col-xs-3">
                                     <div class="qty-box">
                                         <div class="input-group">
                                             <input type="text" name="quantity" 
                                             class="form-control input-number"
                                                 value="${parseFloat(elem.productquantity)}" />
                                         </div>
                                       </div>
                                     </div>
                                   
                                 <div class="col-xs-3">
                                     <h2 class="td-color">${elem.productprice}</h2>
                                 </div>
                                 <div class="col-xs-3">
                                     <h2 class="td-color"><a href="#" class="icon">
                                       <i class="ti-close"></i></a>
                                     </h2>
                                 </div>
                             </div>
                         </td>
                         <td>
                             <h2>N${(parseFloat(elem.productprice)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h2>
                         </td>
                         <td>
                             <div class="qty-box">
                                 <div class="input-group">
                                     <input type="number" name="quantity" 
                                     class="form-control input-number" readonly
                                         value="${parseFloat(elem.productquantity)}" />
                                 </div>
                             </div>
                         </td>
                         <td>
                         <h2 class="td-color">N${(parseFloat(elem.productprice) * parseFloat(elem.productquantity)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h2>
                         </td>  
                         <td>
                         <a href="javascript:void(0)" class="icon mr-3" id='${elem.id}' onclick="removeRow('${elem.id}')">
                         <i class="ti-close" title="remove" >
                         </i></a>
                         </td>                                
                     </tr>
                 </tbody>`
            });
            //  <td>${parseFloat(elem.productprice)}</td>
            //  <td>${parseFloat(elem.productquantity)}</td>
            var builder = new StringBuilder();
            builder.append(`
                 <table class="table cart-table table-responsive-xs" id="producttable">
                   <thead>
                 <tr className="table-head">
                     <th scope="col">image</th>
                     <th scope="col">product name</th>
                     <th scope="col">price</th>
                     <th scope="col">quantity</th>
                     <th scope="col">action</th>
                     <th scope="col">total</th>
                 </tr>
                   </thead>`);
            totalbody.forEach((el: any) => {
              builder.append(el);
            })
            builder.append(`</table>`);
            const totalprice = store.map((res: any) => {
              return res.productprice * res.productquantity;
            });
            console.log('totalprice', totalprice);
            // var formatter = new Intl.NumberFormat('en-US', {
            //   style: 'currency',
            //   currency: 'NIG',
            //          });
            builder.append(`<table className="table cart-table table-responsive-md" id='totalpr'>
                          <tbody>
                            <tr>
                              <td>Total Price:</td>
                              <td>
                                <h2>N${(parseFloat(totalprice.reduce((a: any, b: any) => a + b, 0.0)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h2>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        `);
            //builder.append(`<br/><h2 id="totalpr2">N${(parseFloat(totalprice.reduce((a: any, b: any) => a + b, 0.0)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h2>`) ;
            sessionStorage.setItem('store', JSON.stringify(store));
            $('#customercart').empty().html(builder.toString());
          }else{
            toastr.error('your cart is empty') ;
          }
          }, () => { }, content);
        } else if (store !== null) {
          console.log('store ', store);
          // alert('store') ;
          const totalbody = store.map((elem: any) => {
            console.log('element ', elem);
            //processing each object in cart 
            return `
                 <tbody>
                   <tr>
                     <td>
                         <a href="#"><img src="${backendurl}/jetstore/${elem.imageurl}" alt="" /></a>
                     </td>
                     <td>
                     <a href="#">${elem.productname}</a>
                         <div class="mobile-cart-content row">
                             <div class="col-xs-3">
                                 <div class="qty-box">
                                     <div class="input-group">
                                         <input type="text" name="quantity" 
                                         class="form-control input-number"
                                             value="${parseFloat(elem.productquantity)}" />
                                     </div>
                                   </div>
                                 </div>
                               
                             <div class="col-xs-3">
                                 <h2 class="td-color">${elem.productprice}</h2>
                             </div>
                             <div class="col-xs-3">
                                 <h2 class="td-color"><a href="#" class="icon">
                                   <i class="ti-close"></i></a>
                                 </h2>
                             </div>
                         </div>
                     </td>
                     <td>
                         <h2>N${(parseFloat(elem.productprice)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h2>
                     </td>
                     <td>
                         <div class="qty-box">
                             <div class="input-group">
                                 <input type="number" name="quantity" 
                                 class="form-control input-number" readonly
                                     value="${parseFloat(elem.productquantity)}" />
                             </div>
                         </div>
                     </td>   
                    <td id='${elem.id}'>
                    <a href="javascript:void(0)" class="icon mr-3">
                    <i class="ti-close" title="remove" onclick="removeRow('${elem.id}')"></i></a>
                    </td>
                     <td>
            <h2 class="td-color">N${(parseFloat(elem.productprice) * parseFloat(elem.productquantity)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h2>
                     </td>           
                 </tr>
             </tbody>`
          });
          //  <td>${parseFloat(elem.productprice)}</td>
          //  <td>${parseFloat(elem.productquantity)}</td>
          var builder = new StringBuilder();
          builder.append(`
             <table class="table cart-table table-responsive-xs">
               <thead>
             <tr className="table-head">
                 <th scope="col">image</th>
                 <th scope="col">product name</th>
                 <th scope="col">price</th>
                 <th scope="col">quantity</th>
                 <th scope="col">action</th>
                 <th scope="col">total</th>
             </tr>
               </thead>`);
          totalbody.forEach((el: any) => {
            builder.append(el);
          })
          builder.append(`</table>`);
          const totalprice = store.map((res: any) => {
            return res.productprice * res.productquantity;
          });
          console.log('totalprice', totalprice);
          // var formatter = new Intl.NumberFormat('en-US', {
          //   style: 'currency',
          //   currency: 'NIG',
          //          });
          builder.append(`<table className="table cart-table table-responsive-md" id="pricetotal">
                      <tfoot>
                        <tr>
                          <td>Total Price :</td>
                          <td>
                            <h2>N${(parseFloat(totalprice.reduce((a: any, b: any) => a + b, 0.0)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h2>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                    `);
          //sessionStorage.setItem('store',JSON.stringify(store));
          console.log('stored session', store);
          $('#customercart').empty().html(builder.toString());
        }
      } else if (localStorage.getItem('customertoken') === null) {
        // Swal.fire({
        //   icon: 'info',
        //   text: 'Please login to see your Cart?',
        //   showCancelButton: false,
        //   allowOutsideClick: false,
        // }).then((result: any) => {
        //   if (result.isConfirmed) {
        //     $('#customercart').empty().html(`<center><p>Your cart is empty</p></center>`);
        //   }
        // });
      }
      break;
    case `${loginurl}/order`:
      //console.log(localStorage.getItem('token')) ;
      processrequest2(`${backendurl}/order/order`, 'get', {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }, (r: any) => {
        // console.log('response  from server',r) ;
        $('#customerorder').empty().html(r);
      });
      break;
    case `${loginurl}/jetcart/marketplace`:
      // alert() ;
      processrequest2(`${backendurl}/product/loadproduct`, 'get', {
      }, (r: any) => {
        //console.log('response  from server',r) ;
        let json = JSON.parse(r);
        let keys = Object.keys(JSON.parse(r));
        console.log(json)
        var prdcatalogue = new StringBuilder();
        for (let k of keys) {
          // console.log(' k ',k ,json[k]) ;
          var strbuildr = new StringBuilder();
          strbuildr.append(`<div class="row offset-5">
              <div class="title2">
            <h2 class="title-inner2">${k}</h2>
              </div>
              </div>
               <div class="row offset-1">`);
          // alert() ;
          // <a href="compare.html" title="Compare"><i class="ti-reload" aria-hidden="true"></i></a>
          for (let p of json[k]) {
            // console.log(' p of ',k,`${backendurl}/jetstore/${p.imageurl}`) ;
            if (p.productstatus === 'refurbished') {
              p.productstatus = 'ref';
            }
            let image = `${backendurl}/jetstore/${p.imageurl}`;
            marketplace(strbuildr, p);
          }
          // console.log('got here ') ;
          strbuildr.append(`</div>`);
          prdcatalogue.append($.trim(strbuildr.toString()));
        }
        // console.log(prdcatalogue.toString()) ;
        //alert('appending ...');
         //alert('market') ;
        $('#catalogue').empty().html(prdcatalogue.toString());
        // $(prdcatalogue.toString()).insertAfter('#catalogue') ; 
      });
      setTimeout(() => {
        //delay for 2000
        const catalogue = document.getElementById('catalogue') as HTMLDivElement;
        animateCSS('.catalogue', 'fadeOutRightBig', () => {
          animateitems(backendurl, '.catalogue', 'fadeOutRightBig', catalogue, 'get', `${backendurl}/product/loadproduct`)
        });
      },3000);
      break;
    case `${loginurl}/jetcart/productbycategory`:
      //alert(url) ;
      const parsedUrl = new URL(window.location.href);
      // console.log(' product ', parsedUrl.searchParams.get("product"));
      const item = parsedUrl.searchParams.get("product") as string;
      const producttype = document.getElementById('producttype') as HTMLElement;
      if (item) {
        producttype.innerHTML = decodeURIComponent(item);
        // alert(item);
      } else {
        producttype.innerHTML = 'slide';
        // alert(item);
        $('#catalogue').empty().html(`<div class="row offset-5">This product is not in store</div>`);
        throw new Error('Product not in store .......');
      }
      //load  product based  on item variable
      processrequest2(`${backendurl}/product/loadproductcategory/${item}`, 'get', {
      }, (r: any) => {
        // console.log('response  from server',r) ;
        // console.log('item ....',item) ;
        let json = JSON.parse(r);
        let keys = Object.keys(JSON.parse(r));
        var prdcatalogue = new StringBuilder();
        console.log(json);
        var strbuildr = new StringBuilder();
        var rowbuilder = new StringBuilder();
        //call the processor 
        processanimated(json, strbuildr, rowbuilder);
        // console.log(prdcatalogue.toString()) ;
        $('#catalogue').empty().html(strbuildr.toString());
        // $(prdcatalogue.toString()).insertAfter('#catalogue') ; 
        json = null;
        //calling the animation
        setTimeout(() => {
          console.log('self invoking delay ...');
          animateProductCategoryPage('.catalogue', 'fadeOutRightBig', () => {
            animatePrdCat(item);
          })
        }, 2000)
      });
      break;
    case `${loginurl}/jetcart/search`:
      $(".itemsearch").select2(
        {
          placeholder: "search your products",
          minimumInputLength: 1,
          ajax: {
            url: `${backendurl}/product/loadsearchitem`,
            // headers: {
            //   Authorization: `Bearer ${localStorage.getItem('token')}`
            // },
            dataType: 'json',
            data: function (params: any) {
              console.log(' params ', params);
              // const vendorname2 = localStorage.getItem('vendorname');
              return {
                thename: params.term, // search term
                size: params.term.length,
                page: params.page
              };
            },
            processResults: function (data: any) {
              // const data2  =  [data] ;
              console.log('processed data ', data);
              return {
                results: $.map(data, function (obj: any) {
                  // console.log('obj in  map ',obj);
                  return {
                    id: obj.id,
                    text: obj.productname
                  };
                })
              };

            }
          }
        });
      break;
    case `${loginurl}/jetcart/compare`:
      const compareUrl = new URL(window.location.href);
      // console.log(' product ', parsedUrl.searchParams.get("product"));
      const compareItem = compareUrl.searchParams.get("name") as string;
      const comparePrice = compareUrl.searchParams.get("price") as string;
      // const compareproducttype = document.getElementById('producttype') as HTMLElement;
      if (compareItem) {
        //  compareproducttype.innerHTML = decodeURIComponent(compareItem);
        // alert(item);
      } else {
        // compareproducttype.innerHTML = 'slide';
        // alert(item);
        $('#table-compare').empty().html(`<div class="row offset-5">This product is not in store</div>`);
        throw new Error('Product not in store .......');
      }
      //load items 
      processrequest2(`${backendurl}/product/loadsimilaritems2?thename=${compareItem}&price=${comparePrice}&size=4`, 'get', {
      }, (r: any) => {
        let json = JSON.parse(r);
        let keys = Object.keys(JSON.parse(r));
        var prdcatalogue = new StringBuilder();
        console.log('json .....', json);
        var strbuildr = new StringBuilder();
        var rowbuilder = new StringBuilder();
        rowbuilder.append(`<tr><th class="product-name">Product Name</th>`);
        json.forEach((element: any) => {
          rowbuilder.append(`
            <td class="grid-link__title">${element.productname}</td>
                     `)
        });
        rowbuilder.append(`</tr>`);
        rowbuilder.append(`<tr><th class="product-name">Product Image</th>`);
        json.forEach((element: any) => {
          // <img src="${backendurl}/jetstore/${element.imageurl}" alt=""
          // class="featured-image">
          rowbuilder.append(`
                  <td class="item-row">
                  <a href="/jetcart/productpage" onclick="loadprd('${element.id}','/jetcart/productpage')">
                  <img src="${backendurl}/jetstore/${element.imageurl}" class="featured-image" alt="">
                  </a>
              <div class="product-price product_price"><strong>On Sale:
                  </strong><span>N${(parseFloat(element.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</span></div>
              <form class="variants clearfix">
                  <input type="hidden">
                  <a href="javascript:void(0);" title="Add to Cart" onclick="addtocart('${element.id}')" class="add-to-cart btn btn-solid">Add to
                      Cart</a>
              </form>
              <p class="grid-link__title hidden">${element.productname}</p>
                        </td>   
                     `);
        });
        rowbuilder.append(`</tr>`);
        rowbuilder.append(`<tr><th class="product-name">Product Description</th>`);
        json.forEach((element: any) => {
          rowbuilder.append(`
           <td class="item-row">
            <p class="description-compare">${element.productdescription}</p>
                </td>
               `);
        });
        rowbuilder.append(`</tr>`);
        $('#table-compare').empty().html(rowbuilder.toString());
      });
      break;
    case `${loginurl}/jetcart/wishlist`:
      // sessionStorage.clear();
      // if customer is logged in
      console.log('checking', localStorage.getItem('customertoken'));
      invalidateSession(jwt_decode, 'customertoken');
      if (localStorage.getItem('customertoken')!==null) {
        console.log('inside logging .');
        const wishliststore = JSON.parse(sessionStorage.getItem('wishlist') as string);
        if ($.isEmptyObject(wishliststore)) {
          //alert('empty') ;
          let content = contenttypewithtoken(localStorage.getItem('customertoken'));
          let custid = (localStorage.getItem('ack') as string);
          console.log(content, ' and ', custid);
          // load from db afresh if session store is empty 
          //people has to login to see wishlist
          setajax('json', `${backendurl}/product/loadwishlist/${custid}`, 'get', "", (response: any) => {
            console.log('response ', response);
            // response=[] ; 
            if(response!== undefined){
            if (response.length === 0) {
              Swal.fire({
                icon: 'question',
                text: 'Your WishList is Empty?',
                showCancelButton: false,
                allowOutsideClick: false,
              }).then((result: any) => {
                if (result.isConfirmed) {
                  setTimeout(() => {
                    window.location.href = './marketplace';
                  }, 1500); // redirects after this time
                }
              });
            }
            let wishlistbuilder = new StringBuilder();
            console.log('wishliststore empty store ', wishliststore);
            response.forEach((f: any) => {
              wishlistbuilder.append(`<tbody id="${f.id}">
               <tr>
                   <td>
                       <a href="/jetcart/productpage" onclick="loadprd('${f.id}','/jetcart/productpage')">
                       <img src="${backendurl}/jetstore/${f.imageurl}" alt=""></a>
                   </td>
                   <td><a href="#">${f.productname}</a>
                       <div class="mobile-cart-content row">
                           <div class="col-xs-3">
                               <p>in stock</p>
                           </div>
                           <div class="col-xs-3">
                               <h2 class="td-color">N${(parseFloat(f.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h2>
                           </div>
                           <div class="col-xs-3">
                               <h2 class="td-color"><a href="#" class="icon mr-1"><i class="ti-close"></i>
                                   </a>
                              <a href="#" class="cart"><i class="ti-shopping-cart"></i></a>
                               </h2>
                           </div>
                       </div>
                   </td>
                   <td>
                       <h2>N${(parseFloat(f.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h2>
                   </td>
                   <td>
                   <a href="javascript:void(0)" class="icon mr-3">
                   <i class="ti-close" title="remove" onclick="removeRow('${f.id}')"></i></a>
                     <a href="javascript:void(0)" onclick="addtocartforwishlist('${f.id}')" class="cart"><i class="ti-shopping-cart" title="add to cart"></i></a>
                   </td>
                    </tr></tbody>`);
            });
            // set sessionstorage afresh 
            sessionStorage.setItem('wishlist', JSON.stringify(response));
            $('#wishlisttable').append(wishlistbuilder.toString());
          }else{
            toastr.error('your wishlist is empty') ;
          }
          }, () => { }, content);
        } else {
          let wishlistbuilder = new StringBuilder();
          console.log('wishliststore store not empty ', wishliststore);
          wishliststore.forEach((f: any) => {
            wishlistbuilder.append(`<tbody id="${f.id}">
               <tr>
                   <td>
                       <a href="/jetcart/productpage" onclick="loadprd('${f.id}','/jetcart/productpage')">
                       <img src="${backendurl}/jetstore/${f.imageurl}" alt=""></a>
                   </td>
                   <td><a href="#">${f.productname}</a>
                       <div class="mobile-cart-content row">
                           <div class="col-xs-3">
                               <p>in stock</p>
                           </div>
                           <div class="col-xs-3">
                               <h2 class="td-color">N${(parseFloat(f.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h2>
                           </div>
                           <div class="col-xs-3">
                               <h2 class="td-color"><a href="#" class="icon mr-1"><i class="ti-close"></i>
                                   </a><a href="#" class="cart"><i class="ti-shopping-cart"></i></a></h2>
                           </div>
                       </div>
                   </td>
                   <td>
                       <h2>N${(parseFloat(f.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h2>
                   </td>
                   <td>
                   <a href="javascript:void(0)" class="icon mr-3">
                   <i class="ti-close" title="remove" onclick="removeRow('${f.id}')"></i></a>
                     <a href="javascript:void(0)" onclick="addtocartforwishlist('${f.id}')" class="cart"><i size="500px" class="ti-shopping-cart" title="add to cart"></i></a>
                   </td>
                    </tr></tbody>`);
          });
          //under add to cart,change the function
          // $('#wishlisttable').append(wishlistbuilder.toString());
          $('#wishlisttable').empty().html(wishlistbuilder.toString());
        }
      } else {
        //alert() ;
        //if the user does not logged in 
        console.log("not logged in");
        Swal.fire({
          icon: 'question',
          text: 'login please',
          showCancelButton: false,
          allowOutsideClick: false,
        }).then((result: any) => {
          if (result.isConfirmed) {
            window.location.href = './marketplace';
          }
        });
      }
      break;
    case `${loginurl}/jetcart/collection`:
      searchcollection();
      break;
    case `${loginurl}/jetcart/category-page`:
      //alert() ;
      let caturl: URL = new URL(decodeURIComponent(window.location.href));
      let catsearchParams = new URLSearchParams(caturl.search).get('productid');
      let catproduct: any;
      //  console.log(' catsearchParams ',catsearchParams) ;
      fetch(`${backendurl}/product/display/${catsearchParams}`)
        .then((response: any) => {
          return response.json();
        }).then((response: any) => {
          catproduct = response;
          console.log('catproduct ', catproduct);
          $('#small-section').empty().html(`
                  <h4>${catproduct.categoryid}</h4>
                  <h5>${catproduct.productname}</h5>
                  <p>${catproduct.proddescription}</p>
                    `);
          // console.log(' catproduct ',catproduct,' img ',`<img src=${backendurl}/jetstore/${catproduct.imageurl}>`) ;
          $('#catimg').empty().html(`<img src=${backendurl}/jetstore/${catproduct.imageurl}>`);
          $('#catimg').prop('href', `/jetcart/productpage`);
          $('#catimg').prop('width', '5px');
          $('#catimg').prop('height', '5px');
          $('#catimg').prop('onclick', `loadprd('${catproduct.id}','/jetcart/productpage')`);
          sessionStorage.setItem('product', JSON.stringify(catproduct));
          // console.log('cat response ',catproduct) ;
          //process other ajax request 
          if (catproduct.model !== null) {
            let productbrands: string[] = catproduct.model.split(",");
            // console.log("productbrands ",productbrands) ;
            //adding brands to help collection search
            productbrands = productbrands.map(br => {
              // console.log("brands",br) ;
              //brands.set("brands",br) ;  
              return `<div class="custom-control custom-radio collection-filter-radio">
                        <input name="myradio" type="radio" onclick="searchbrands(this.id)" class="custom-control-input" value="${br}" id="${br}">
                        <label class="custom-control-label" for="${br}">${br}</label>                     
                                </div>` ;
            });
            // console.log(" productbrands.join() ",productbrands.join()) ;
            $("#collection-brand-filter").empty().html(productbrands.join(" "));
          }
          //for color 
          //  let productcolor:string[]  = catproduct.manycolor.split(",") ; 
          //  productcolor  = productcolor.map(color=>{
          //            if(color.toLowerCase() ==='white'){
          //             return `<li class="color-1 ${color}" data-white="${color}"></li>` ;
          //            }else if(color.toLowerCase() ==='red'){
          //             return `<li class="color-2 ${color}" data-red="${color}"></li>` ;
          //            }else if(color.toLowerCase() ==='blue'){
          //             return `<li class="color-3 ${color}" data-blue="${color}"></li>` ;
          //            }else if(color.toLowerCase() ==='purple'){
          //             return `<li class="color-4 ${color}" data-purple="${color}"></li>` ;
          //            }else if(color.toLowerCase() ==='black'){
          //             return `<li class="color-5 ${color}" data-black="${color}"></li>` ;
          //            }else if(color.toLowerCase() ==='green'){
          //             return `<li class="color-6 ${color}" data-green="${color}"></li>` ;
          //            }else if(color.toLowerCase() === 'grey'){
          //              return `<li class="color-7 ${color}" data-grey="grey"></li>` ;
          //            }else if(color.toLowerCase() === 'yellow'){
          //             return `<li class="color-8 ${color}" data-yelow="yellow"></li>` ;
          //           }
          //          return '' ;
          //        }) ;
          // productcolor.push(`<li class="color-9 ${color}" data-white="${color}" title="None or Others"></li>`);
          // $('#color-selector').empty().html(productcolor.join("")) ;
          // for sizes 
          if (catproduct.manysizes !== null) {
            let productsize: string[] = catproduct.manysizes;
            productsize = productsize.map(size => {
              if (size.charAt(0).toLowerCase() === 's') {
                return ` <div class="custom-control custom-radio collection-filter-radio">
                          <input onclick='searchtype(this.id)' value='s' name="mysize" type="radio" class="custom-control-input" id="hundred">
                          <label class="custom-control-label" for="hundred">s</label>
                               </div>` ;
              } else if (size.charAt(0).toLowerCase() === 'm') {
                return `<div class="custom-control custom-radio collection-filter-radio">
                          <input  onclick='searchtype(this.id)' value='m' name="mysize" type="radio" class="custom-control-input" id="twohundred">
                          <label class="custom-control-label" for="twohundred">m</label>
                                     </div>` ;
              } else if (size.charAt(0).toLowerCase() === 'l') {
                return `<div class="custom-control custom-radio collection-filter-radio">
                              <input  onclick='searchtype(this.id)' name="mysize" value='l' type="radio" class="custom-control-input" id="threehundred">
                              <label class="custom-control-label" for="threehundred">l</label>
                                </div>` ;
              } else if (size.charAt(0).toLowerCase() === 'xl') {
                return `  <div class="custom-control custom-radio collection-filter-radio">
                             <input  onclick='searchtype(this.id)' name="mysize" value='xl' type="radio" class="custom-control-input" id="fourhundred">
                             <label class="custom-control-label" for="fourhundred">xl</label>
                               </div>` ;
              }
              return ''
            });
            $('#collection-size-filter').empty().html(productsize.join(" "));
          }
        }).catch((err: any) => {
          console.log(err);
        });
      // load products into  category page
      setajax('json', `${backendurl}/product/loadcatproduct?size=24`, 'get', '', (response: any) => {
        //console.log(' response ',response) ;
        if (response.length !== 0) {
          var builder = new StringBuilder();
          const myhtml = response.map((el: any) => {
            // console.log(' jetstore ',`${backendurl}/jetstore/${el.imageurl}`);
            return categorypagetemplate(`${backendurl}/jetstore/${el.imageurl}`, el.id, el.productname, el.productprice, el.proddescription);
          }).join("");
          // console.log(myhtml) ;
          $('#margin-res').empty().html(myhtml);
        }
        console.log('added successfully');
      }, () => { }, contenttype);
      //newer product  
      setajax('json', `${backendurl}/product/loadnewcatproduct?size=9`, 'get', '', (response: any) => {
        if (response.length != 0) {
          let count = 1;
          let count2 = 0;
          var builder = new StringBuilder();
          var builder2 = new StringBuilder();
          for (let el of response) {
            builder.append(newprdtemplate(`${backendurl}/jetstore/${el.imageurl}`, el.productname, el.productprice, el.id));
            count2 = count2 + 1;
            if (count2 === 3) {
              console.log(' builder count ', builder.toString());
              builder2.append(`<div>${builder.toString()}</div>`);
              builder = null;
              builder = new StringBuilder();
              console.log(' added ', count2);
              count2 = 0;
            }
          }
          console.log(" builder2.toString() " + builder2.toString());
          $('#slide-1').empty().html(`<h5 class="title-border">new product</h5>
                   <div class="offer-slider slide-1">`+ builder2.toString() + `</div>`);
        }
      }, () => { }, contenttype);
      break;
    default:
  }
}

//new product on category page

const newprdtemplate = (image: string, productname: string, price: any, id: string) => {
  return (`
  <div class="media">
  <a href="/jetcart/productpage" onclick="loadprd('${id}','/jetcart/productpage')" style="cursor:pointer;"><img class="img-fluid blur-up lazyload" src="${image}" alt=""></a>
  <div class="media-body align-self-center">
      <div class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></div>
      <a href="/jetcart/productpage" onclick="loadprd('${id}','/jetcart/productpage')" style="cursor:pointer;">
          <h6>${productname}</h6>
      </a>
      <h4>${accounting.formatMoney(price, { symbol: "N", format: "%s %v" })}</h4>
  </div>
</div>
  `);
}

// category-page template 
const categorypagetemplate = (image: string, id: string, productname: string, productprice: any, description: string) => {
  return (`<div class="col-xl-3 col-6 col-grid-box">
  <div class="product-box">
      <div class="img-wrapper">
          <div class="front">
              <a href="/jetcart/productpage" onclick="loadprd('${id}','/jetcart/productpage')" style="cursor:pointer;"><img src="${image}" class="img-fluid blur-up lazyload bg-img" alt=""></a>
          </div>
          <div class="back">
              <a href="/jetcart/productpage" onclick="loadprd('${id}','/jetcart/productpage')" style="cursor:pointer;"><img src="${image}" class="img-fluid blur-up lazyload bg-img" alt=""></a>
          </div>
          <div class="cart-info cart-wrap">
              <button data-toggle="modal" data-target="#addtocart" title="Add to cart"><i
                      class="ti-shopping-cart"></i></button> <a href="javascript:void(0)" onclick='addproducttowishlist(this.id)' id=${id} title="Add to Wishlist"><i
                      class="ti-heart" aria-hidden="true"></i></a> <a href="#" data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                      class="ti-search" aria-hidden="true"></i></a> 
          </div>
      </div>
      <div class="product-detail">
          <div>
              <div class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></div>
              <a href="/jetcart/productpage" onclick="loadprd('${id}','/jetcart/productpage')" style="cursor:pointer;">
                  <h6>${productname}</h6>
              </a>
              <p>
                ${description}
              </p>
              <h4>${accounting.formatMoney(productprice, { symbol: "N", format: "%s %v" })}</h4>
          </div>
      </div>
  </div>
</div>
`);
};
//item selection in the category-page

// $('.custom-control').on('click',(e:any)=>{
//   e.preventDefault();
//   //$('#'+e.target.lastChild.data).prop('checked',true) ;
//   // console.log('innertext '+e.target.innerText) ;
//   // console.log('innerhtml '+e.target.innerHTML) ;
//   // console.log(' data '+e.target.lastChild.data) ;
//   // console.log(' e.target.classList[1] ',e.target.classList) ;
//   // console.log(' e ',e) ;
//   console.log(' e ',e.target) ;
// });
let itemcriteriasearch = new itemcategorypage();

//item selection in the category-page.to use another logic-19/6/2022
// $('#itemselection').on('click',(e:any)=>{
//   e.preventDefault();
//   //console.log(e) ;
//  // console.log('innertext '+e.target.innerText) ;
//  // console.log('innerhtml '+e.target.innerHTML) ;
//   //console.log(' data '+e.target.lastChild.data) ;
//   let colour  = "" ;
//   let itemcategory  =  "" ;
//    if(itemcriteriasearch.colour.includes(e.target.classList[1])){// for colours
//        colour  =  e.target.classList[1] ;
//        console.log(' colour ',colour) ;
//        itemcategory  = colour ;
//     itemcriteriasearch.processitem(colour) ;
//      }else if(e.target.innerText){ //for price,type,brand,size,colour
//     //itemcategory = e.target.innerText  ;
//     //console.log(' itemcategory ',itemcategory) ;
//     if(!e.target.innerText.includes('-')){
//       console.log('entered items ',e.target.innerText) ;
//       if(!e.target.control.checked){
//         e.target.control.checked  = true ;
//         itemcategory = e.target.innerText  ;
//         console.log('checked items ',itemcategory) ;
//       //  itemcriteriasearch.processitem(itemcategory) ;
//          }else if(e.target.control.checked){
//           e.target.control.checked  = false ;
//           itemcategory = e.target.innerText  ;
//           console.log(' unchecked items ',itemcategory) ;
//           //itemcriteriasearch.processitem(itemcategory) ;
//             }
//       }else if(e.target.innerText.includes('-')){
//       itemcategory = e.target.innerText  ;  
//       console.log(' price ',itemcategory) ;  
//     //  itemcriteriasearch.processitem(itemcategory) ; 
//            }
//     itemcriteriasearch.processitem(itemcategory) ;
//     // console.log(' colour ',itemcriteriasearch.processcolour) ;
//     // console.log(' size ',itemcriteriasearch.processsize) ;
//     // console.log(' brand ',itemcriteriasearch.processbrand) ;
//     console.log(' type ',itemcriteriasearch.processtype) ;
//    // console.log(' price ',itemcriteriasearch.price) ;
//        }
//      //send data
//     loadcategorypage();  
//  //  console.log(' colour3 ',e.target.classList[1]);
//   // console.log(' colour ',e.originalEvent.srcElement.dataset);
//   // console.log(' colour2 ',e.originalEvent.srcElement.dataset.keys);
//   // let  data   = JSON.parse(JSON.stringify(e.originalEvent.srcElement.dataset)) ;
// });
//frontpage product search 
$('#prodsearch').on('keyup', (e: any) => {
  e.preventDefault();
  // var search  =  document.getElementById('prodsearch');
  var inputValue = (document.getElementById('prodsearch') as HTMLInputElement).value;
  var matchlist = document.getElementById('match-list') as HTMLDivElement;
  console.log('search ', inputValue);
  processrequest2(`${backendurl}/product/loadsearchitem?thename=${inputValue}&size=${inputValue.length}`, 'get', {
  }, (r: any) => {
    r = JSON.parse(r);
    console.log('res ', r);
    let matches = r.filter((p: any) => {
      const regex = new RegExp(`^${inputValue}`, 'gi'); // global and  case insensistive
      return p.productname.match(regex); // if its match
    });
    if (inputValue.length === 0) {
      matches = [];
      matchlist.innerHTML = '';
    }
    // to output the html of the  matches 
    (() => {
      if (matches.length > 0) {
        const html = matches.map((match: any) => {
          return `
              <div class="card card-body mb-2" style="cursor:pointer;">
              <h4  class="text-primary m-auto" onclick="loadprd('${match.id}','/jetcart/productpage')" style="padding-right:50px;padding-left:50px;">${match.productname}</h4>           
              </div>
              `
        }).join('');
        matchlist.innerHTML = html;
      }
    })();
  });
})
//extracted market function
const marketplace = (strbuildr: any, p: any) => {
  let image = `${backendurl}/jetstore/${p.imageurl}`;
  strbuildr.append(`<div class="col-md-3">
                     <div class="product-box">
                       <div class="img-wrapper">
                       <div class="lable-block"><span class="lable3">${p.productstatus}</span>
                       <span class="lable4">on
                      sale</span></div>
                       <div class="lable-block"><span class="lable3">
                       ${p.productstatus}</span> <span class="lable4">on
                       sale</span>
                       </div>
             <a href="javascript:void(0)" onclick="loadprd('${p.id}','/jetcart/productpage')">
             <img src="${image}" class='animate__animated animate__bounce' width="180px" height="180px" alt=""></a>                                      
                  <div class="cart-info cart-wrap">
              <button data-toggle="modal" onclick="addtocart(${p.id})" title="Add to cart">
              <i class="ti-shopping-cart"></i></button> 
              <a href="javascript:void(0)" onclick="addtowishlist('${p.id}')" title="Add to Wishlist">
              <i class="ti-heart" aria-hidden="true"></i></a>
               <a href="#" data-toggle="modal"
                data-target="#quick-view" title="Quick View">
                <i class="ti-search" aria-hidden="true"></i>
                </a>
                <a href="/jetcart/compare?name=${encodeURIComponent(p.productname)}$price=${p.productprice}" title="Compare">
                <i class="ti-reload" aria-hidden="true"></i></a>
                </div></div>
                               <div class="product-detail">
                                <div class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                </div>
                                <a href="/jetcart/productpageappliance">
                                <h6>${p.productname}</h6>
                                </a>
                                <h4>N${(parseFloat(p.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h4>
                            </div>
                            </div>
             </div>`)
}

// on change product search.load items by search
$('.itemsearch').on('change', (e: any) => {
  e.preventDefault();
  let userid = $('.itemsearch').val();
  console.log('userid ', $('.itemsearch').text());
  // alert($.trim(userid)) ;
  $.ajax({
    type: 'get',
    url: `${backendurl}/product/loadsearchproduct`,
    data: `id=${userid}&size=6`,
    success: function (data: any) {
      console.log('result ...', data);
      var builder = new StringBuilder();
      data.forEach((element: any) => {
        builder.append(`
        <div class="col-xl-2 col-md-4 col-sm-6">
        <div class="product-box">
            <div class="img-wrapper">
                <div class="front">
                    <a href="/jetcart/productpage" onclick="loadprd('${element.id}','/jetcart/productpage')">
                    <img src="${backendurl}/jetstore/${element.imageurl}"
                            class="img-fluid blur-up lazyload bg-img" alt=""></a>
                </div>
                <div class="back">
                    <a href="/jetcart/productpage" onclick="loadprd('${element.id}','/jetcart/productpage')">
                    <img src="${backendurl}/jetstore/${element.imageurl}"
                            class="img-fluid blur-up lazyload bg-img" alt=""></a>
                </div>
                <div class="cart-info cart-wrap">
                    <button data-toggle="modal" onclick="addtocart('${element.id}')" title="Add to cart"><i
                            class="ti-shopping-cart"></i></button>
          <a href="javascript:void(0)" onclick="addtocartforwishlist('${element.id}')" title="Add to Wishlist"><i class="ti-heart" aria-hidden="true"></i></a> 
                        <a href="#"
                        data-toggle="modal" data-target="#quick-view" title="Quick View"><i
                            class="ti-search" aria-hidden="true"></i>
                            </a> 
                      <a href="/jetcart/compare?name=${encodeURIComponent(element.productname)}$price=${element.productprice}"
                        title="Compare"><i class="ti-reload" aria-hidden="true"></i></a></div>
            </div>
            <div class="product-detail">
                <div class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i
                        class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></div>
                <a href="product-page(no-sidebar).html">
                    <h6>${element.productname}</h6>
                </a>
                <h4>N${(parseFloat(element.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h4>
                <h4><del>N${(parseFloat(element.productoldprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</del></h4>
            </div>
        </div>
           </div>
              `);
      });
      $('.search-product').empty().html(builder.toString());
    }
  });
});

$(document).ready(() => {
  //const myform: HTMLFormElement = document.querySelector('#top-profile')!;
  if (URL) {
    let currenthref = window.location.href;
    let url: URL = new URL(currenthref);
    //  console.log('test url ',(theprotocol+url.host+url.pathname));
    pagesonload((theprotocol + url.host + url.pathname));
  } else {
    alert('this browser seem to be too old');
  }
  //  render(()=>html`<button class="btn btn-primary" type="button" @click=${test()}>Update</button>`,document.body);
});
//load category
function loadcategorypage(pagenum: any) {
  pagenum = pagenum ? pagenum : 0;
  document.cookie = "current_page" + pagenum;
  $.ajax({
    type: 'get',
    datatype: 'json',
    url: `${backendurl}/product/categoryitems`,
    data: `brands=${itemcriteriasearch.processbrand}
    &size=${itemcriteriasearch.processsize}
    &type=${itemcriteriasearch.processtype}
    &price=${itemcriteriasearch.price}
    &pageNumber=${pagenum}&pageSize=${20}&colour=${itemcriteriasearch.processcolour}`,
    success: function (data: any) {
      console.log(' data ', data);
    }
  });
}
//load collection
async function searchcollection(pagenum: any) {
  pagenum = pagenum ? pagenum : 0;
  document.cookie = "current_page" + pagenum;
  $.ajax({
    type: 'get',
    url: `${backendurl}/product/loadcollections`,
    data: `pageNumber=${pagenum}&pageSize=${20}`,
    success: function (data: any) {
      console.log('data 2', data);
      let bodyimage = document.getElementById('collection') as HTMLDivElement;
      //console.log('appending to dom') ;
      bodyimage.innerHTML = data;
    }
  });

}
// load product search
async function searchFiter2(pagenum: any) {
  pagenum = pagenum ? pagenum : 0;
  document.cookie = "current_page" + pagenum;
  $.ajax({
    type: 'get',
    url: `${backendurl}/product/byspecial`,
    data: `pageNumber=${pagenum}&pageSize=${20}`,
    success: function (data: any) {
      //  console.log(data) ;
      let bodyimage = document.getElementById('tab-3') as HTMLDivElement;
      //console.log('appending to dom') ;
      bodyimage.innerHTML = data;
    }
  });
}
async function searchFeaturedFilter(pagenum: any) {
  pagenum = pagenum ? pagenum : 1;
  document.cookie = "current_page" + pagenum;
  $.ajax({
    type: 'get',
    url: `${backendurl}/product/byfeatured`,
    data: `pageNumber=${pagenum}&pageSize=${20}`,
    success: function (data: any) {
      // console.log(data) ;
      let bodyimage = document.getElementById('tab-2') as HTMLDivElement;
      //console.log('appending to dom') ;
      bodyimage.innerHTML = data;
    }
  });
}
//by new arrival
async function searchNewArrivalFilter(pagenum: any) {
  pagenum = pagenum ? pagenum : 1;
  document.cookie = "current_page" + pagenum;
  $.ajax({
    type: 'get',
    url: `${backendurl}/product/bynewarrival`,
    data: `pageNumber=${pagenum}&pageSize=${20}`,
    success: function (data: any) {
      // console.log(data) ;
      let bodyimage = document.getElementById('tab-1') as HTMLDivElement;
      //console.log('appending to dom') ;
      bodyimage.innerHTML = data;
    }
  });
}

// load market products
const searchandloadmarketproducts = async (pagenum: any) => {
  pagenum = pagenum ? pagenum : 1;
  document.cookie = "current_page" + pagenum;
  $.ajax({
    type: 'get',
    url: `${backendurl}/product/loadproduct`,
    success: function (data: any) {
      let json = data;
      let keys = Object.keys(data);
      console.log(json)
      var prdcatalogue = new StringBuilder();
      for (let k of keys) {
        var strbuildr = new StringBuilder();
        strbuildr.append(`<div class="row offset-5">
            <div class="title2">
          <h2 class="title-inner2">${k}</h2>
            </div>
            </div>
             <div class="row offset-1">`);
        for (let p of json[k]) {
          // console.log(' p of ',k,`${backendurl}/jetstore/${p.imageurl}`) ;
          if (p.productstatus === 'refurbished') {
            p.productstatus = 'ref';
          }
          let image = `${backendurl}/jetstore/${p.imageurl}`;
          marketplace(strbuildr, p)
        }
        // console.log('got here ') ;
        strbuildr.append(`</div>`);
        prdcatalogue.append($.trim(strbuildr.toString()));
      }
      let bodyimage = document.getElementById('marketplace') as HTMLDivElement;
      //console.log('appending to dom') ;
      bodyimage.innerHTML = prdcatalogue.toString();
      setTimeout(() => {
        //delay for 2000
        const catalogue = document.getElementById('marketplace') as HTMLDivElement;
        animateCSS('.marketplace', 'fadeOutRightBig', () => {
          animateitems(backendurl, '.marketplace', 'fadeOutRightBig', catalogue, 'get', `${backendurl}/product/loadproduct`);
        });
      }, 3000);
    }
  });
}














































































