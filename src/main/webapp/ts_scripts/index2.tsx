// import expect "" quotes  in typescript
declare var $: any;
declare var jwt_decode: any;
//declare var ajaxcall:any;
declare var processrequest: any;
declare var toastr: any;
declare var Swal: any;
declare var alertify: any;
declare var StringBuilder: any;
declare var Dropzone: any;
declare var CKEDITOR: any;
import { dialog } from "./lithtmlscript";
import { backendurl, loginurl, theprotocol } from "./url";
import { invalidatetoken2, redirectiftokenisnull, jsonresult } from "./miscellaneous";
import { formsubmit, checktoken, submitform, processrequest2 } from "./tsbackendscript/ajaxfunctioncall";
import { createtables2 } from './tables'
import { Search } from "gridjs/dist/src/view/plugin/search/search";
import { order, cartproduct } from './order';
import { product } from "./product";
import {itemcategorypage} from './categorypage' ;
import {animateCSS, animateitems,animatePrdCat,processanimated,animateProductCategoryPage, animaterelatedprd} from "./animate";
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
  $('.modal-body').html((() => {
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
  $(".modal-footer").html((() => {
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
        // console.log(decoded, 'exp ', decoded['exp'], 'sub ', decoded.sub, 'vendorname ', decoded.vendorname, ' ack ', decoded.ack);
        const now = Date.now().valueOf() / 1000;
        const tokenexp = parseInt(decoded.exp);
        console.log(decoded.username);
        // localStorage.setItem('vendorname', decoded.vendorname);
        localStorage.setItem('ack', decoded.ack);
        localStorage.setItem('username', decoded.username);
        const login = document.querySelector('.login') as HTMLDivElement;
        login.classList.add("alert");
        login.classList.add("alert-success");
        login.classList.add("alert-dismissible");
        login.classList.add("fade");
        login.classList.add("show");
        $('.login').empty().html(`<strong>Welcome ${localStorage.getItem('username')} &nbsp;</strong> Logged in.
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span></button>`);

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
//create account
$('#createaccount').on('click', (e: any) => {
  e.preventDefault();
  //  invalidatetoken2(jwt_decode, 'customertoken'); // check token
  alertify.confirm('Registration', 'Do you want to register now ?', function () {
    // const form2 = document.getElementById('regform') as HTMLFormElement ;
    let form = JSON.parse($('#regform').jform());
    //console.log(' form ',form , ' form2 ',form2.firstname.value) ;
    sessionStorage.setItem('form', JSON.stringify(form));
    formsubmit(`${backendurl}/customer/register`, form, null, 'text', 'post', (id: string) => {
      $("#error").empty().html('<br/><div class="alert alert-success" style="display:inline-block;"> <a href="/jetcart/checkout" class="btn btn-primary">Back</a> &nbsp;&nbsp;<span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + 'registration is successful' + ' !</div>');
      alertify.success('Account creation successful');
    }, () => {
      $("#error").empty().html('<br/><div class="alert alert-danger" style="display:inline-block;"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + 'registration is  not successful' + ' !</div>');
    });
  },
    function () {
      alertify.error('cancelled');
    }
  );
});
//$('$')
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
        // invalidatetoken2(jwt_decode, 'customertoken'); // check token
        //  if(!localStorage.getItem('customertoken')){
        //       }
        console.log('userid ', localStorage.getItem('ack'));
        // return ;
        let form = JSON.parse($('#regform').jform());
        if ($.isEmptyObject(form)) {
          toastr.error('please fill the billing details');
          return;
        }
        form.total = $('#total').text();
        // console.log('form', form);
        var tabledata = $('.qty').tableToJSON();
        // console.log(' table ',tabledata) ;//arrange and process for order 
        let orderarray = [];
        for (let prd of tabledata) {
          // console.log('product ' , prd) ;
          const orderobj = {} as order;  //  cast to order 
          orderobj.productname = prd.product;
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
          orderobj.productid = "";
          orderobj.email = form.email;
          orderobj.paymentgroup = form.paymentgroup;
          orderobj.paymentstatus = "";
          orderobj.phone = form.phone;
          orderobj.overalltotal = form.total;
          orderobj.postalcode = form.postalcode
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
        // console.log('ordrarray ',orderarray) ;
        //loop thru each array and send to server 
        const totalorder = {
          "order": orderarray
        };
        //  orderarray.forEach((data:any)=>{
        // console.log(' data ', totalorder, 'customertoken', localStorage.getItem('customertoken'));
        // return ;
        formsubmit(`${backendurl}/order/create`, totalorder, localStorage.getItem('customertoken'), 'text', 'post', () => {
          $("#error").empty().html('<br/><div class="alert alert-success" style="display:inline-block;"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + 'Successful' + ' !</div>');
          alertify.success('Order Successful');
          setTimeout(() => {
            // redirect to  payment
            $("#createbilling").empty().html("<img src='./dist/images/btn-ajax-loader.gif'/> &nbsp; please wait ....");
            window.location.href = '/jetcart/payment';
            sessionStorage.clear(); // clearing   cart 
          }, 4000);
        }, (res: any) => {
          if (res !== null || res !== undefined) {
            $("#error").empty().html('<br/><div class="alert alert-danger" style="display:inline-block;"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + res + ' !</div>');
            return;
          }
          $("#error").empty().html('<br/><div class="alert alert-danger" style="display:inline-block;"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + 'You have neither registered/login' + ' !</div>');
        });
        //  });
      }, function () {
        alertify.error('cancelled');
      });
  }

});
//create review 
$('#submitreview').on('click', (e: any) => {
  e.preventDefault();
 // alert('review');
  invalidatetoken2(jwt_decode, 'customertoken'); // check token
  const form = new FormData(document.getElementById('formreview') as HTMLFormElement);
  const id = JSON.parse(sessionStorage.getItem('product') as string).id;
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
    console.log('response', r);
    if (r.status === 400) {
      $('#error').empty().html('<br/><div class="alert alert-danger" style="display:inline-block;"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + `Please use a registered email` + ' !</div>');
      return;
    }
    if (r.status !== 200) {
      $('#error').empty().html('<br/><div class="alert alert-danger" style="display:inline-block;"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + `You have neither Registered/Login` + ' !</div>');
      return;
    }
    $('#error').empty().html('<br/><div class="alert alert-success" style="display:inline-block;"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + `successful` + ' !</div>');
    return r.text();
  }).catch((err: any) => {
    console.log('err', err);
    $('#error').empty().html('<br/><div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + `You have neither Registered/Login` + ' !</div>');
  });
});

//add to cart logic
const storagearray = new Set();  // to store object
$('#addcart').on('click', (e: any) => {
   // alert('see') ;
  const product = JSON.parse(sessionStorage.getItem('product') as string);
  processrequest2(`${backendurl}/product/displayandloadsimilaritems/${product.id}`, 'get', {
  }, (r: any) => {
    console.log('adding to cart ','res' , r) ;
     r= JSON.parse(r) ;
    // const mainprd  =  product.filter(f=>f.id===id).slice(0,1); //pick the first element
     console.log(' r ',r) ;
     $('#addtocart').modal('show') ;
     $('#producttype').text(product.productname);
     $('#productimage').prop('src',`${backendurl}/jetstore/${product.imageurl}`) ;  
     var builder  =  new StringBuilder() ;
     if(Array.isArray(r)){
       r.forEach((element:any)=>{
         console.log('productname ',element.productname) ;
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
             `) ;
       })
       }
       $('#upsell_product').empty().html(builder.toString()) ;   
  });
    console.log('before if ', JSON.parse(sessionStorage.getItem('store') as string));
  const store = JSON.parse(sessionStorage.getItem('store') as string);
  if (store === null || store.includes(null)) { // check for the first time
    sessionStorage.setItem('store', JSON.stringify(Array.from(storagearray.add(product))));
    console.log('first store ', JSON.parse(sessionStorage.getItem('store') as string));
  }
  if (store !== null && store.length > 0) {
    JSON.parse(sessionStorage.getItem('store') as string).forEach((element: any) => {
      console.log(' element ', element);
      if (element.id === product.id) { // check duplicate  items
        console.log('duplicate  items');
        throw new Error('duplicate  item');
        // return;
      }
    });
    const store = JSON.parse(sessionStorage.getItem('store') as string);
    store.push(product);
    sessionStorage.setItem('store', JSON.stringify(store));
    console.log('next store ', JSON.parse(sessionStorage.getItem('store') as string));
  }
});
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
      `);
   //to wishlist button
  $("#wishlist-btn").empty().html(`
  <a href="javascript:void(0)" class="btn-link" onclick="addtocartforwishlist(${product.id})">
  <i class="fa fa-heart"></i><span class="title-font">Add To
    WishList</span>
         </a>
         `)
};

// the menu 
$('.multimenu2').on('click', (e: any) => {
  e.preventDefault();
  //alert(e.target.innerText) ;
  //console.log('the event ',e.target.innerText) ;
  const encoder = encodeURIComponent(e.target.innerText);
  window.location.href = `../jetcart/productbycategory?product=${encoder}`
});

const pagesonload = (url: string) => {
  //console.log(' url ', url);
  //alert(url)
  const cartstore = JSON.parse(sessionStorage.getItem('store') as string);
  console.log('before ', cartstore) // true) ;
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
      searchandloadmarketproducts() ;
    case `${loginurl}/jetcart/checkout`:
      // $('#customercart').empty().html(processcart()) ;
      console.log('cart store ', cartstore);
      const form = sessionStorage.getItem('form');
      console.log(' form ', form);
      if (form) {
        $("#regform").autofill(JSON.parse(form));  // autofill the  form if session exists 
      }
      //alert() ;
      // sessionStorage.clear() ;
      // fill table 
      if (cartstore === null || cartstore.includes(null)) {
        $('#cartcheckout').empty().html(`<tr><td>Your cart is empty</td><td></td><td></td><td></td><td></td></tr>`);
        return;
      }
      const builder2 = new StringBuilder();
      cartstore.forEach((e: any) => {
        builder2.append(`<tr><td>${e.productname}</td><td>${parseFloat(e.productquantity).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</td>
        <td><span>N${parseFloat(e.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span></td><td><span>N${(parseFloat(e.productprice) * parseFloat(e.productquantity)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span><td><td>${e.tax}%</td></tr>`)
      })
      $('#cartcheckout').empty().html(builder2.toString());
      const price = cartstore.map((res: any) => {
        return res.productprice * res.productquantity;
      });
      console.log('totalprice', price);
      $('#total').text(`N${(parseFloat(price.reduce((a: any, b: any) => a + b, 0.0)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}`);
      break;
    case `${loginurl}/jetcart/productpage`:
     let url:URL = new URL(decodeURIComponent(window.location.href));
        let searchParams = new URLSearchParams(url.search).get('prdinfo'); 
        let product:any ;
        if(searchParams){
          processrequest2(`${backendurl}/product/display/${searchParams}`, 'get', {
          }, (r: any) => {
          product  = JSON.parse(r) ;
          console.log(' r ',product,' searchParams ', searchParams) ;
          fillproductinfo(product, `${loginurl}/jetcart/productpage`);
          sessionStorage.setItem('product',JSON.stringify(product)) ;
          });
        }else{
           product = JSON.parse(sessionStorage.getItem('product') as string);
           console.log(' product check ', product, ' searchParams ',searchParams,window.location.href);
           fillproductinfo(product, `${loginurl}/jetcart/productpage`);
          }
    console.log(' going to load others ',product) ;
      //get product id  for load related category product   
    setTimeout(()=>{
      const id  = product.id ;
      console.log(' id ',id) ; 
      processrequest2(`${backendurl}/product/displayandloadsimilaritems/${id}`,'get', {
      }, (r: any) => {
          r  = JSON.parse(r) ;
          console.log('productpage ...',r) ;
        //process the array r of  product  generated
     let relatedprd  = new StringBuilder() ;
     r.forEach((el:any)=>{
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
     }) ;
            //append to dom
      $('#search-product').empty().html(relatedprd.toString());
   // animate this category 
   setTimeout(()=>{
    //delay for 2000
    const catalogue = document.getElementById('search-product') as HTMLDivElement;
    animateCSS('.search-product','fadeOutRightBig',()=>{
  animaterelatedprd(backendurl,'.search-product','fadeOutRightBig',catalogue,'get',`${backendurl}/product/displayandloadsimilaritems/${id}`)
         }) ;
        },3000);
         })
    },1000) ;
      break;
    case `${loginurl}/jetcart/cart`:
      const store = JSON.parse(sessionStorage.getItem('store') as string);
      // $('#customercart').empty().html(processcart()) ;
      console.log('store ', store);
      if (store === null || store.includes(null)) {
        $('#customercart').empty().html(`<p>Your cart is empty</p>`);
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
                 <td><a href="#"  class="icon"><i className="ti-close"></i></a></td>
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
      $('#customercart').empty().html(builder.toString());
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
            if(p.productstatus === 'refurbished'){
               p.productstatus ='ref' ;
                  }
            let image = `${backendurl}/jetstore/${p.imageurl}`;
            marketplace(strbuildr,p) ;
            // strbuildr.append(`<div class="col-md-3">
            //          <div class="product-box">
            //            <div class="img-wrapper">
            //            <div class="lable-block"><span class="lable3">${p.productstatus}</span>
            //            <span class="lable4">on
            //           sale</span></div>
            //            <div class="lable-block"><span class="lable3">
            //            ${p.productstatus}</span> <span class="lable4">on
            //            sale</span>
            //            </div>
            //  <a href="/jetcart/productpage" onclick="loadprd('${p.id}','/jetcart/productpage')">
            //  <img src="${image}" width="180px" height="180px" alt=""></a>                                      
            //       <div class="cart-info cart-wrap">
            //   <button data-toggle="modal" onclick="addtocart(${p.id})" title="Add to cart">
            //   <i class="ti-shopping-cart"></i></button> 
            //   <a href="javascript:void(0)" onclick="addtowishlist('${p.id}')" title="Add to Wishlist">
            //   <i class="ti-heart" aria-hidden="true"></i></a>
            //    <a href="#" data-toggle="modal"
            //     data-target="#quick-view" title="Quick View">
            //     <i class="ti-search" aria-hidden="true"></i>
            //     </a>
            //     <a href="/jetcart/compare?name=${encodeURIComponent(p.productname)}$price=${p.productprice}" title="Compare">
            //     <i class="ti-reload" aria-hidden="true"></i></a>
            //     </div></div>
            //                    <div class="product-detail">
            //                     <div class="rating"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>
            //                     </div>
            //                     <a href="/jetcart/productpageappliance">
            //                     <h6>${p.productname}</h6>
            //                     </a>
            //                     <h4>N${(parseFloat(p.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h4>
            //                 </div>
            //                 </div>
            //  </div>`);
            // console.log('inner loop got here ') ; 
          }
          // console.log('got here ') ;
          strbuildr.append(`</div>`);
          prdcatalogue.append($.trim(strbuildr.toString()));
        }
        // console.log(prdcatalogue.toString()) ;
        //alert('appending ...');
        $('#catalogue').empty().html(prdcatalogue.toString());
        // $(prdcatalogue.toString()).insertAfter('#catalogue') ; 
      });
       setTimeout(()=>{
      //delay for 2000
      const catalogue = document.getElementById('catalogue') as HTMLDivElement;
      animateCSS('.catalogue','fadeOutRightBig',()=>{
  animateitems(backendurl,'.catalogue','fadeOutRightBig',catalogue,'get',`${backendurl}/product/loadproduct`)
           }) ;
          },2000);
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
        console.log(json) ;
        var strbuildr = new StringBuilder();
        var rowbuilder = new StringBuilder();
        //call the processor 
        processanimated(json,strbuildr,rowbuilder) ;  
        // console.log(prdcatalogue.toString()) ;
        $('#catalogue').empty().html(strbuildr.toString());
    // $(prdcatalogue.toString()).insertAfter('#catalogue') ; 
        json=null;
        //calling the animation
        setTimeout(()=>{
          console.log('self invoking delay ...') ;
         animateProductCategoryPage('.catalogue','fadeOutRightBig',()=>{
          animatePrdCat(item) ;
         })   
        },2000)  
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
              console.log(' params ',params);
             // const vendorname2 = localStorage.getItem('vendorname');
              return {
                thename: params.term, // search term
                size:params.term.length,
                page: params.page
              };
            },
            processResults: function (data: any) {
              // const data2  =  [data] ;
              console.log('processed data ',data);
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
       break ;
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
          console.log('json .....',json) ;
          var strbuildr = new StringBuilder();
          var rowbuilder = new StringBuilder();
          rowbuilder.append(`<tr><th class="product-name">Product Name</th>`) ;
          json.forEach((element:any)=>{
            rowbuilder.append(`
            <td class="grid-link__title">${element.productname}</td>
                     `)     
              });
          rowbuilder.append(`</tr>`) ;
          rowbuilder.append(`<tr><th class="product-name">Product Image</th>`) ;
          json.forEach((element:any)=>{
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
                     `) ;
          }) ;
          rowbuilder.append(`</tr>`) ;
          rowbuilder.append(`<tr><th class="product-name">Product Description</th>`);
          json.forEach((element:any)=>{
           rowbuilder.append(`
           <td class="item-row">
            <p class="description-compare">${element.productdescription}</p>
                </td>
               `) ;
          }) ;
          rowbuilder.append(`</tr>`) ;
          $('#table-compare').empty().html(rowbuilder.toString()) ;  
        });    
        break ;
    case `${loginurl}/jetcart/wishlist`:
      const wishliststore  = JSON.parse(sessionStorage.getItem('wishlist') as string) ;  
      let wishlistbuilder = new StringBuilder() ;
       console.log('wishliststore ',wishliststore) ;   
        wishliststore.forEach((f:any)=>{
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
               </tr></tbody>`) ;
        });
         $('#wishlisttable').append(wishlistbuilder.toString());
      break ;
    case `${loginurl}/jetcart/collection`:
         searchcollection();
      break ;
    case `${loginurl}/jetcart/category-page`:
          //alert() ;
          let caturl:URL = new URL(decodeURIComponent(window.location.href));
          let catsearchParams = new URLSearchParams(caturl.search).get('productid'); 
          let catproduct:any ;  
          fetch(`${backendurl}/product/display/${catsearchParams}`)
          .then((response:any)=>{
             return response.json() ;   
            }).then((response:any)=>{
              catproduct  =  response ; 
              $('#catimg').empty().html(`<img src=${backendurl}/jetstore/${catproduct.imageurl}>`) ;
              $('#catimg').prop('href',`/jetcart/productpage`) ;
              $('#catimg').prop('width','5px') ;
              $('#catimg').prop('height','5px') ;
              $('#catimg').prop('onclick',`loadprd('${catproduct.id}','/jetcart/productpage')`) ;
              sessionStorage.setItem('product',JSON.stringify(catproduct)) ;
             // console.log('cat response ',catproduct) ;
              //process other ajax request 

            }).catch((err:any)=>{
              console.log(err);
            });
        break ;
    default:
  }
}
 let  itemcriteriasearch  =  new itemcategorypage() ;
//item selection in the category-page
$('#itemselection').on('click',(e:any)=>{
  e.preventDefault();
  //console.log(e) ;
 // console.log('innertext '+e.target.innerText) ;
 // console.log('innerhtml '+e.target.innerHTML) ;
  //console.log(' data '+e.target.lastChild.data) ;
  let colour  = "" ;
  let itemcategory  =  "" ;
   if(itemcriteriasearch.colour.includes(e.target.classList[1])){// for colours
       colour  =  e.target.classList[1] ;
       console.log(' colour ',colour) ;
       itemcategory  = colour ;
    itemcriteriasearch.processitem(colour) ;
     }else if(e.target.innerText){ //for price,type,brand,size,colour
    //itemcategory = e.target.innerText  ;
    //console.log(' itemcategory ',itemcategory) ;
    if(!e.target.innerText.includes('-')){
      console.log('entered items ',e.target.innerText) ;
      if(!e.target.control.checked){
        e.target.control.checked  = true ;
        itemcategory = e.target.innerText  ;
        console.log('checked items ',itemcategory) ;
      //  itemcriteriasearch.processitem(itemcategory) ;
         }else if(e.target.control.checked){
          e.target.control.checked  = false ;
          itemcategory = e.target.innerText  ;
          console.log(' unchecked items ',itemcategory) ;
          //itemcriteriasearch.processitem(itemcategory) ;
            }
      }else if(e.target.innerText.includes('-')){
      itemcategory = e.target.innerText  ;  
      console.log(' price ',itemcategory) ;  
    //  itemcriteriasearch.processitem(itemcategory) ; 
           }
    itemcriteriasearch.processitem(itemcategory) ;
    // console.log(' colour ',itemcriteriasearch.processcolour) ;
    // console.log(' size ',itemcriteriasearch.processsize) ;
    // console.log(' brand ',itemcriteriasearch.processbrand) ;
    console.log(' type ',itemcriteriasearch.processtype) ;
   // console.log(' price ',itemcriteriasearch.price) ;
       }
     //send data
    loadcategorypage();  
 //  console.log(' colour3 ',e.target.classList[1]);
  // console.log(' colour ',e.originalEvent.srcElement.dataset);
  // console.log(' colour2 ',e.originalEvent.srcElement.dataset.keys);
  // let  data   = JSON.parse(JSON.stringify(e.originalEvent.srcElement.dataset)) ;
});
//frontpage product search 
$('#prodsearch').on('keyup',(e:any)=>{
   e.preventDefault() ;
 // var search  =  document.getElementById('prodsearch');
  var inputValue =  (document.getElementById('prodsearch') as HTMLInputElement).value;
  var matchlist =  document.getElementById('match-list') as HTMLDivElement ; 
  console.log('search ',inputValue) ;
  processrequest2(`${backendurl}/product/loadsearchitem?thename=${inputValue}&size=${inputValue.length}`, 'get', {
  }, (r: any) => {
     r  =JSON.parse(r) ;
   console.log('res ',r) ;
   let matches  = r.filter((p:any)=>{
    const regex =  new RegExp(`^${inputValue}`,'gi') ; // global and  case insensistive
    return p.productname.match(regex) ; // if its match
   }) ;
  if(inputValue.length === 0){
       matches=[] ;
       matchlist.innerHTML  = '' ;
      } 
  // to output the html of the  matches 
    (()=>{
      if(matches.length >0){
 const html  = matches.map((match:any)=>{
           return `
              <div class="card card-body mb-2" style="cursor:pointer;">
              <h4  class="text-primary m-auto" onclick="loadprd('${match.id}','/jetcart/productpage')" style="padding-right:50px;padding-left:50px;">${match.productname}</h4>           
              </div>
              `
             }).join('') ;
       matchlist.innerHTML  = html ;
      }
    })() ;
  });
})
//extracted market function
const marketplace = (strbuildr:any,p:any)=>{
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
             <a href="/jetcart/productpage" onclick="loadprd('${p.id}','/jetcart/productpage')">
             <img src="${image}" width="180px" height="180px" alt=""></a>                                      
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
$('.itemsearch').on('change',(e:any)=>{
  e.preventDefault() ;
  let userid = $('.itemsearch').val();
  console.log('userid ',$('.itemsearch').text()) ;
 // alert($.trim(userid)) ;
  $.ajax({
    type: 'get',
    url:`${backendurl}/product/loadsearchproduct`,
    data: `id=${userid}&size=6`,
    success: function (data: any) { 
       console.log('result ...',data) ;
       var builder = new StringBuilder() ;
       data.forEach((element:any)=>{
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
              `) ;
       }) ;
       $('.search-product').empty().html(builder.toString());
    }
  });
}) ;

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
 function loadcategorypage(pagenum: any){
  pagenum = pagenum ? pagenum : 0;
  document.cookie = "current_page" + pagenum;
  $.ajax({
    type: 'get',
    datatype:'json',
    url:`${backendurl}/product/categoryitems`,
    data: `brands=${itemcriteriasearch.processbrand}
    &size=${itemcriteriasearch.processsize}
    &type=${itemcriteriasearch.processtype}
    &price=${itemcriteriasearch.price}
    &pageNumber=${pagenum}&pageSize=${20}&colour=${itemcriteriasearch.processcolour}`,
    success: function (data:any) { 
          console.log(' data ',data) ;
        }
      }) ;  
 }
//load collection
async function searchcollection(pagenum: any) {
  pagenum = pagenum ? pagenum : 0;
  document.cookie = "current_page" + pagenum;
  $.ajax({
    type: 'get',
    url: `${backendurl}/product/loadcollections`,
    data: `pageNumber=${pagenum}&pageSize=${20}`,
    success: function (data:any) {
        console.log('data 2',data) ;
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
const searchandloadmarketproducts  = async (pagenum:any)=>{
  pagenum = pagenum ? pagenum : 1;
  document.cookie = "current_page" + pagenum;
  $.ajax({
    type: 'get',
    url:`${backendurl}/product/loadproduct`,
    //data: `pageNumber=${pagenum}&pageSize=${20}`,
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
              if(p.productstatus === 'refurbished'){
                 p.productstatus ='ref' ;
                    }
              let image = `${backendurl}/jetstore/${p.imageurl}`;
              marketplace(strbuildr,p)  
            }
            // console.log('got here ') ;
            strbuildr.append(`</div>`);
            prdcatalogue.append($.trim(strbuildr.toString()));
          }
      let bodyimage = document.getElementById('marketplace') as HTMLDivElement;
      //console.log('appending to dom') ;
      bodyimage.innerHTML = prdcatalogue.toString();
      setTimeout(()=>{
        //delay for 2000
        const catalogue = document.getElementById('marketplace') as HTMLDivElement;
        animateCSS('.marketplace','fadeOutRightBig',()=>{
    animateitems(backendurl,'.marketplace','fadeOutRightBig',catalogue,'get',`${backendurl}/product/loadproduct`)
             }) ;
            },3000);
    }
  }); 
}














































































