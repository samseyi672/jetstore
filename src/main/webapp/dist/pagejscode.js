//import {backendurl} from './ts_scripts/url'
const url = 'http://localhost:1022';
//const url  =     'https://cristabackend.herokuapp.com';
const api = 'http://localhost:1022';

// requirejs(["/node_modules/@asmagin/google-translate-api/index.js"], function (translate) {
//   translate('Ik spreek Engels', {to: 'ig'}).then((res) => {
//          console.log('right',res.text);
//          console.log(res.from.language.iso);   
//              }).catch((err) => {
//          console.error('error',err);
//        });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   requirejs(["/node_modules/@asmagin/google-translate-api/index.js"], function (translate) {
//        translate('Ik spreek Engels', {to: 'ig'}).then((res) => {
//        console.log('right',res.text);
//        console.log(res.from.language.iso);   
//            }).catch((err) => {
//        console.error('error',err);
//      });
//       });
//     });
// const translate = require('@asmagin/google-translate-api');
//  translate('Ik spreek Engels', {to: 'ig'}).then((res) => {
//        console.log('right',res.text);
//        console.log(res.from.language.iso);   
// }).catch((err) => {
//     console.error('error',err);
//        }); 
function showprd(id) {
  console.log('id ', id);
  $('#prd').slideToggle();
  requestdata(null, `${url}/order/orders/${id}`, (res) => {
    console.log('res', res);
    const builder = new StringBuilder();
    res.forEach((data) => {
      builder.append(`<tr><td>${data.productname}</td><td>${data.quantity}</td><td>${data.total}</td><td>${data.tax}</td><td>${data.shipping}</td><td>${data.localpickup}</td><td>${data.price}</td></tr>`);
    });
    $('#orderdetail').empty().html(builder.toString());
    $('#orderform').autofill(res[0]);
    if (res[0].shipping === true) {
      $('#shipping').prop('checked', true)
    }
    if (res[0].localpickup === true) {
      $('#localpickup').prop('checked', true)
    }
    $('#orderform :input').attr('readonly', 'readonly');
    throw new Error('return from here');
  }, {
    method: 'get',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
  });
}
const ajaxload = (idbyclass) => {
  setTimeout(function () {
    $("." + idbyclass).empty().html("<img src='./dist/images/btn-ajax-loader.gif'/> &nbsp; Signing In ...please wait ....");
    // window.location.href="../adminindex" ;
  }, 2000);
}

//add to cart  logic
const storagearray = new Set();  // to store object
const addtocart = (id) => {
  //alert(id) ;
  helpaddtocart2(`${url}/product/displayandloadsimilaritems/${id}`, (res) => {
    console.log('adding to cart ', 'res', res);
    // alert('adding to cart ', 'res'+res) ;
    // return ;
    const product = res;
    const mainprd = product.filter(f => f.id === id).slice(0, 1); //pick the first element
    console.log(' mainprd ', mainprd);
    $('#addtocart').modal('show');
    $('#producttype').text(mainprd[0].productname);
    $('#productimage').prop('src', `${url}/jetstore/${mainprd[0].imageurl}`);
    console.log('mainprd ...', mainprd, ' imageurl ', mainprd[0].imageurl);
    var builder = new StringBuilder();
    if (Array.isArray(product)) {
      product.forEach(element => {
        console.log('productname ', element.productname);
        builder.append(`
        <div class="product-box col-sm-3 col-6">
              <div class="img-wrapper">
                  <div class="front">
                      <a href="/jetcart/productpage" onclick="loadprd('${element.id}','/jetcart/productpage')">
                          <img src="${url}/jetstore/${element.imageurl}"
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
    // add to cart here .
    cartfunction('store', mainprd[0]);
  }, {
    method: 'get',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  //load similar items 
};
//remove item from wishlist 
const removeRow = (id) => {
 // console.log($('#producttable').children.length);
  var parser = new DOMParser();
  let price=null;
  let totalprice=null;
// console.log('total store ',JSON.parse(sessionStorage.getItem('store'))) ;
 let store= JSON.parse(sessionStorage.getItem('store')).filter((elem) =>elem.id.toString()!==id) ;
  //console.log('store',store) ;
  const totalbody = JSON.parse(sessionStorage.getItem('store')).map((elem) => {
    //console.log('element ',elem,typeof elem.id.toString(),typeof id);
        if(elem.id.toString()===id){
         // alert(id) ;
          var htmlDoc = parser.parseFromString($('#customercart').html(),'text/html');
          let h2   = Array.from(htmlDoc.getElementsByTagName('h2')) ;
          console.log('h2 arrays ',h2[h2.length-1])
          totalprice  =  v.substr(v.substr(h2[h2.length-1].outerHTML,4,10),1) ;
          console.log('totalprice ',totalprice) ;
          totalprice  = v.replace(totalprice,',','');
          console.log('totalprice2 ',totalprice) ;
          let htdoc  = parser.parseFromString(document.getElementById(id).parentNode.outerHTML,'text/html');
          let priceh2   = Array.from(htdoc.getElementsByTagName('h2')) ;
          console.log(priceh2.length, priceh2) ;
          console.log('td',priceh2.length,priceh2[priceh2.length-1].outerHTML) ;
          price  = v.substr(priceh2[priceh2.length-1].outerHTML,20,25);
          console.log('price',price) ;
          price =  v.substr(price,2,16);
          console.log('price2 ',price) ;
          price  = v.slice(price,0,8) ;
          console.log('price3 ',price) ;
          price  = v.replace(price,',','') ;
          console.log('price2 ',price) ;
          //price=v.substr(price,1) ;
        //  $('#'+id).closest("tr").remove();
          console.log(totalprice,' and ',price) ;
          let lengthofrows =$('#producttable').children.length;
          console.log('first lengthofrows ',lengthofrows) ;
          document.getElementById(id).parentNode.remove() ;
          console.log('ack ',localStorage.getItem('ack')) ;
          let content  = contenttypewithtoken(localStorage.getItem('customertoken')) ;
          setajax('text',`${url}/product/delproductfromcartlist/${id}/${localStorage.getItem('ack')}`,'get',"",(response)=>{
            console.log('response ',response);
          },()=>{},content) ;
           if(lengthofrows<=1){
            //remove it from db too
            let totalp  = `
            <table className="table cart-table table-responsive-md" id='totalpr'>
                                    <tbody>
                                      <tr>
                                        <td>Total Price:</td>
                                        <td>
                                          <h2>N${((parseFloat(totalprice)-parseFloat(price)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h2>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>                                          `;
           // $('#customercart').empty().html(totalp); 
               //alert('end') ;
               //throw new Error('return');
               return totalp ;
            }
            return ;
        }
        return `
        <tbody>
          <tr>
            <td>
                <a  href="#"><img src="${url}/jetstore/${elem.imageurl}" alt=""/></a>
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
            <td id='${elem.id}'>
            <a href="javascript:void(0)" class="icon mr-3" onclick="removeRow('${elem.id}')">
            <i class="ti-close" title="remove" >
            </i></a>
            </td>                                
        </tr>
    </tbody>`
       }) ;
       let header =`
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
         </thead>`;
    let totalp  = `
    <table className="table cart-table table-responsive-md" id='totalpr'>
                            <tbody>
                              <tr>
                                <td>Total Price:</td>
                                <td>
                                  <h2>N${((parseFloat(totalprice)-parseFloat(price)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h2>
                                </td>
                              </tr>
                            </tbody>
                          </table>                     
               `;
       // $('#'+id).closest("tr").remove();
      //   document.getElementById(id).parentNode.remove() ;
      //  //if(lengthofrows<=1){
      //   let lengthofrows =$('#producttable').children.length ;
      //   console.log('lengthofrows ',lengthofrows) ;
      sessionStorage.setItem('store',JSON.stringify(store)) ;
           console.log('totalprice ',totalprice,' price ',price) ;
      if(totalbody.length===1){
       // alert('in') ;
       // sessionStorage.setItem('store',JSON.stringify(store)) ;
        $('#customercart').empty().html(totalp);
        // setTimeout(function(){
        // window.location.href='./index';
        // },1500)
        return ;
          }
         //alert('got here ') ;
         //console.log(header+totalbody.join("")+'</table>'+totalp) ;
    $('#customercart').empty().html(header+totalbody.join("")+'</table>'+totalp);
 //console.log('parentNode ',document.getElementById(id).parentNode,typeof document.getElementById(id).parentNode) ;
  // console.log(htmlDoc.getElementsByTagName('h2')) ;
  // console.log('textContent ',h2[4],v.substr(h2[4].outerHTML,4,10)) ;
// if(lengthofrows<=1){  
//   alert('in') ;
//   $('#totalpr').empty().html(`
//   <table className="table cart-table table-responsive-md" id='totalpr'>
//                           <tbody>
//                             <tr>
//                               <td>Total Price:</td>
//                               <td>
//                                 <h2>N${((parseFloat(totalprice)-parseFloat(price)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h2>
//                               </td>
//                             </tr>
//                           </tbody>
//                         </table>                     
//              `);
   // $('#customercart').empty().html("");
    // setTimeout(function(){
    //   window.location.href='./index' ;
    // },1000
    // );
     // }
    //  alert('out') ;
    console.log('differences ',parseFloat(totalprice)-parseFloat(price)) ;
      // $('#totalpr').empty().html(`
      // <table className="table cart-table table-responsive-md" id='totalpr'>
      //                         <tbody>
      //                           <tr>
      //                             <td>Total Price:</td>
      //                             <td>
      //                               <h2>N${((parseFloat(totalprice)-parseFloat(price)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h2>
      //                             </td>
      //                           </tr>
      //                         </tbody>
      //                       </table>                     
      // `);
 // }) ;
//   $(document).on("click","#"+id,function(){
//     console.log($('#producttable').children.length);
//   //  $('#'+id).closest("tr").remove();
//    let lengthofrows =$('#producttable').children.length ;
//    console.log($('#producttable').children.length,' and ',jQuery('#totalpr').text());
//  });

// if(lengthofrows>1){  
// $('#totalprice').empty().html(`<td>Total Price:</td>
// <td>
//   <h2>N${(parseFloat($('#totalprice').find('h2').text()).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h2>
// </td>`) ;
//   }
  //e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
  //e.parentElement.remove();
//   let wishliststore = sessionStorage.getItem('wishlist');
//   let cartstore = sessionStorage.getItem('store');
//   let custid  =localStorage.getItem('ack')  ;
//   if(!$.isEmptyObject(wishliststore)){
// //let wishliststore = wishliststore.filter(product => product.id !== id);
// // for (let [i, user] of users.entries()) {
// //   if (user.name === "Tim") {
// //     users.splice(i, 1); // Tim is now removed from "users"
// //   }
// // Also remove from the db 
// console.log("wishliststore "+wishliststore,'custid',custid,'id',id) ;
//  let content  = contenttypewithtoken(localStorage.getItem('customertoken')) ;
// setajax('text',`${url}/product/delproductfromwishlist/${id}/${custid}`,'get',"",(response)=>{
//    //wishliststore = wishliststore.filter(product => product.id !== id);
//   for( var i = 0; i < wishliststore.length; i++){ 
//     if (wishliststore[i].id === id) { 
//         console.log('id',wishliststore[i].id) ;
//         wishliststore.splice(i, 1); 
//     }
//    }
//   console.log("after wishliststore "+wishliststore,'custid',custid,'id',id) ;
//   console.log('delproduct response ',response) ;
//   toastr.success(response) ;
//   sessionStorage.setItem('wishlist', JSON.stringify(wishliststore));
//   $('#' + id).remove();
//  },()=>{},content) ;
//       }
//   //$('#' + id).remove();
//   if(!$.isEmptyObject(cartstore)){
//   //  toastr.success('testing toast') ;
//     console.log('toastr ',typeof toastr) ;
//    // alert(id) ;
//     let content  = contenttypewithtoken(localStorage.getItem('customertoken')) ;
//     setajax('text',`${url}/product/delproductfromcartlist/${id}/${custid}`,'get',"",(response)=>{
//       //wishliststore = wishliststore.filter(product => product.id !== id);
//      for( var i = 0; i < cartstore.length; i++){ 
//        if (cartstore[i].id === id) { 
//            console.log('id',cartstore[i].id) ;
//            cartstore.splice(i, 1); 
//        }
//       }
//      console.log("after cartstore ",'custid',custid,'id',$('#'+id)) ;
//      console.log('cartstore product response ',response) ;
//     // toastr.success(response) ;
//      console.log('after toastr ',response) ;
//      sessionStorage.setItem('store',JSON.stringify(cartstore));
//      console.log('alert cartstore',document.getElementById(id));
//     // toastr.error(response) ;
//      $('#'+id).remove();
//     },()=>{},content) ;
//     }
};

const deleteRow  = (id)=>{
  $('#'+id).remove() ;
}
 
//cart function for wishlist
const addtocartforwishlist = (id) => {
   // alert(id) ;
  if(localStorage.getItem('customertoken')){
    let content  = contenttypewithtoken(localStorage.getItem('customertoken')) ;
    setajax('json',`${url}/product/findproduct/${id}`,'get',"",(response)=>{
      console.log('findproduct response ',response) ;
     // let custid  =localStorage.getItem('ack')  ;
      cartfunction('wishlist',id,response);
     },()=>{},content) ;
    }else{
      toastr.error("Please login to add to wishlist");
    }
  // helpaddtocart2(`${url}/product/displayandloadsimilaritems/${id}`, (res) => {  
  //   // console.log('adding to cart ', 'res', res);
  //   // const product = res;
  //   // const mainprd = product.filter(f => f.id === id).slice(0, 1); //pick the first element
  //   // console.log('product ',product) ;
  //   // if (Array.isArray(mainprd)) {
  //   //   console.log('product array ',product) ;
  //   //   console.log('product mainprd ',mainprd) ;
  //   //   cartfunction('wishlist', id);
  //   // } else {
  //   //   alert(id) ;
  //   //   cartfunction('wishlist', mainprd);
  //   //  }
  // });
}
const contenttypewithtoken = (token)=>{
  return { "accept": "application/json",
   "Content-Type": "application/json",
   "Authorization": "Bearer " + token
    }
 };
 const mutuallyExcludeCartForWishList = (store,wishlist,product)=>{
  let cartstore = JSON.parse(sessionStorage.getItem(store)) ;
    JSON.parse(sessionStorage.getItem(wishlist)).forEach((element) => {
      if(cartstore){
        cartstore = cartstore.filter(e => {
          console.log(e.id , element.id);
          const content  = contenttypewithtoken('customertoken') ;
          setajax('text',`${api}/product/addwishlist/${custid}/${id}`,'get','',(response)=>{
             console.log('response ......',response) ;

            },()=>{},content) ;
          return e.id !==element.id ;
        });
        console.log('setting a new cartstore json',cartstore) ;
        sessionStorage.setItem('store',JSON.stringify(cartstore)) ;
           }
       console.log('new cartstore set') ;
        }
      // if (element.id === product.id) { // check duplicate  items
      //   if(cartstore){ // remove it from wishlist
      //     var keys  = Object.keys(cartstore) ;
      //     console.log('keys ',keys) ;
      //     keys  = keys.filter((e)=>{
      //       console.log('e,cartstore,product',e,cartstore.e,product.e) ;
      //       return cartstore.e===product.e ;
      //     }) ;
      //   console.log('filtered keys ',keys[0]) ;
      //  if(Object.prototype.hasOwnProperty.call(cartstore,keys[0])){
      //       delete cartstore.keys[0] ; //from cartstore if present
      //         }
      //      }

      // }

    );
}

const cartfunction = (store2,custid,product) => {
  console.log('product',product,'custid',custid) ;
  let content  = contenttypewithtoken(localStorage.getItem('customertoken')) ;
  let id  =localStorage.getItem('ack')  ;
  console.log('content ',content,' id ',id) ;
  const store = JSON.parse(sessionStorage.getItem(store2));
  if (store === null || store.includes(null)) { // check for the first time
   console.log('storagearray',Array.from(storagearray.add(product))) ;
    setajax('text',`${api}/product/addwishlist/${custid}/${id}`,'get','',(response)=>{
     console.log('response addwishlist ',response) ;
     sessionStorage.setItem(store2, JSON.stringify(Array.from(storagearray.add(product))));
     console.log('first ' + store2, JSON.parse(sessionStorage.getItem(store2)));
     mutuallyExcludeCartForWishList('store','wishlist',product) ;
     toastr.success('Successfully added to wishlist');
    },()=>{},content) ;
    return ;
  }
  if (store !== null && store.length > 0) {
    console.log(store2, store);
    JSON.parse(sessionStorage.getItem(store2)).forEach((element) => {
      //console.log(' element ', element);  
      if (element.id === product.id) { // check duplicate  items
        console.log(' id ', element.id);
        console.log('duplicate  items in wishlist');
        toastr.error('Already exists in WishList');
        throw new Error('duplicate  item');
        // return;
      }
    });
    setajax('text',`${url}/product/addwishlist/${custid}/${id}`,'get',"",(response)=>{
      console.log('response ',response) ;
      store.push(product);
      console.log('Successfully added to ' + store2);
      sessionStorage.setItem(store2, JSON.stringify(store));
      console.log('next ' + store2, JSON.parse(sessionStorage.getItem(store2)));
      mutuallyExcludeCartForWishList('store','wishlist',product) ;
       toastr.success('Successfully added to wishlist');
      //load similar items 
     },()=>{},content) ;
    // const store = JSON.parse(sessionStorage.getItem('store'));
  }
}
const addtocart2 = (id) => {
  helpaddtocart(`${url}/product/display/${id}`, (res) => {
    console.log('adding to cart ', 'res', res);
    // sessionStorage.setItem('product',JSON.stringify(res)) ;
    const product = res;
    console.log('check if product is added ', product.productname)
    $('#addtocart').modal('show');
    $('#producttype').text(product.productname);
    $('#productimage').prop('src', `${url}/jetstore/${product.imageurl}`);
    // load items   
    console.log('loading  items ', product.productname, ' price ', product.productprice);
    // still visit this part 
    helpaddtocart(`${url}/product/loadsimilaritems2?thename=${product.productname}&price=${product.productprice}&size=4`, (res2) => {
      console.log('adding to cart2 ', res);
      const product = res;
      console.log('product ...', product.constructor.name)
      var builder = new StringBuilder();
      if (Array.isArray(product)) {
        product.forEach(element => {
          console.log('productname ', element.productname);
          builder.append(`
        <div class="product-box col-sm-3 col-6">
              <div class="img-wrapper">
                  <div class="front">
                      <a href="#">
                          <img src="${url}/jetstore/${element.imageurl}"
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
      if (product.constructor.name === 'Object') {
        // for(let p in product){
        // console.log('in loop ',p.productname,product) ;
        builder.append(`
      <div class="product-box col-sm-3 col-6">
      <div class="img-wrapper">
          <div class="front">
              <a href="/jetcart/productpage" onclick="loadprd('${product.id}','/jetcart/productpage')">
                  <img src="${url}/jetstore/${product.imageurl}"
                      class="img-fluid blur-up lazyload mb-1"
                      alt="cotton top">
              </a>
          </div>
          <div class="product-detail">
              <h6><a href="#"><span>${product.productname}</span></a></h6>
              <h4><span>N${(parseFloat(product.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</span></h4>
          </div>
            </div>
    </div>
      `);
        //  }
      }
      $('#upsell_product').empty().html(builder.toString());
    }, {
      method: 'get',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const store = JSON.parse(sessionStorage.getItem('store'));
    if (store === null || store.includes(null)) { // check for the first time
      sessionStorage.setItem('store', JSON.stringify(Array.from(storagearray.add(product))));
      console.log('first store ', JSON.parse(sessionStorage.getItem('store')));
    }
    if (store !== null && store.length > 0) {
      JSON.parse(sessionStorage.getItem('store')).forEach((element) => {
        //console.log(' element ', element);
        if (element.id === product.id) { // check duplicate  items
          console.log('duplicate  items');
          throw new Error('duplicate  item');
          // return;
        }
      });
      // const store = JSON.parse(sessionStorage.getItem('store'));
      store.push(product);
      sessionStorage.setItem('store', JSON.stringify(store));
      console.log('next store ', JSON.parse(sessionStorage.getItem('store')));
      //load similar items 
    }
  }, {
    method: 'get',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  );
};
//add to wishlist logic 
// const addtowishlist  = (id) =>{
//   // e.preventDefault();
//    helpaddtocart2(`${url}/product/display/${id}`,(res)=>{
//     console.log('adding to cart ','res' , res) ;
//     const product  = res ;
//     //toastr.success(`${product.productname} added to wishlist.Click on the wishlist link to view under Page`); 
//     cartfunction('wishlist',product) ;
//    });  
// };

// load by name from BACKEND
const loadprd2 = (id, path) => {
  requestdata('/jetcart/productpage', `${path}/product/display/${id}`, (res) => {
    console.log(' id ', id);
    console.log('res', res);
    sessionStorage.setItem('product', JSON.stringify(res));
  }, {
    method: 'get',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const loadprd = (id, path) => {
  requestdata('/jetcart/productpage', `${url}/product/display/${id}`, (res) => {
    console.log(' id ', id);
    console.log('res', res);
    sessionStorage.setItem('product', JSON.stringify(res));
  }, {
    method: 'get',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
const updateprofile = (formid) => {
  const form = new FormData(document.getElementById(formid));
  console.log(form, form.get("location"), ' ack ', localStorage.getItem('ack'));
  form.append('userid', localStorage.getItem('ack'));
  const formjson = Object.fromEntries(form.entries());// convert  form data to json  
  formsubmit(`${url}/profile/create`, form, $('#error'), 'post', 'text', false, () => {
    $('#exampleModal').modal('hide');
    setTimeout(() => {
      // $('.modal-dialog').classList.remove(`modal-dialog-centered`) ; 
      $('#exampleModal').remove();
      Swal.fire({
        icon: "success",
        text: "Profile Updated successfuly!"
      });
    }, 3500);
  });
}
const formsubmit = (url, form, error, methodtype, returntype, contenttype, mymodal) => {
  // console.log('token ',localStorage.getItem('token')); 
  $.ajax({
    url: url,
    type: methodtype,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    dataType: returntype,
    contentType: contenttype,
    data: form,
    processData: false,
    beforeSend: function () {
      console.log('before sending form ', form.values());
    },
    success: function (data) {
      console.log('data ', data);
      //$('#exampleModal').modal('hide');
      // ajaxload() ;
      //   if(modal !== null){
      //  $('.modal-dialog').classList.remove(`modal-dialog-centered`) ; 
      //       }
      mymodal();
      //  Swal.fire({
      //    icon:"success",
      //    text:"Profile Updated successfuly!"});	
    },
    error: function (err) {
      console.log(' err ', err)
      errorfunc(error, "network error")
    },
  }).done(function (data) {
    console.log('done succesfully ');
    // disposemodal;
  });
};
// call this on call to edit  profile
const ajaxcall = (url, form, methodtype, returntype, contenttype) => {
  $.ajax({
    url: url,
    type: methodtype,
    dataType: returntype,
    contentType: contenttype,
    data: JSON.stringify(form),
    beforeSend: function () {
      //$("#log").empty().html("<img src='./myresources/jetlogistics/images/btn-ajax-loader.gif'/> &nbsp; Signing In ...");      		       
      console.log('inside ajax .......');
    },
    success: function (response) {
      console.log();
      if (response.userid) {

      }
    },
    error: function (err) {
      //errorfunc(error,"network error")
    }
  })
};
const namepattern = /^[a-zA-Z]{3,20}$/;
const citypattern = /^[a-zA-Z]{3,20}|[0-9]+$/;
const errorfunc = (error, theinput) => {
  return error.fadeIn(500, function (e) {
    error.empty().
      html('<br/><div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + `wrong ${theinput}` + ' !</div>');
  });
}
// validate form 
const formvalidator = (error, { firstname, lastname, city, address }) => {
  //    const firstname = form.get(`${firstname}`)  ; 
  //    const lastname= form.get(`${lastname}`)  ;
  //    const city  = form.get(`${city}`) ; 
  // const address  =  form.get(`${address}`) ;
  if (!namepattern.test(firstname) || firstname.length < 1) {
    errorfunc(error, `firstname - ${firstname}`);
  }
  if (!namepattern.test(lastname) || lastname.length < 1) {
    errorfunc(error, `lastname - ${lastname}`);
  }
  if (!citypattern.test(city) || city.length < 1) {
    errorfunc(error, `city ${city}`);
  }
  if (!citypattern.test(address) || address.length < 1) {
    errorfunc(error, `address ${address}`);
  }
};
// using  fetch api 
const processrequest = async (url, form, methodtype, contenttype, token) => {
  const res = await fetch(url, {
    method: methodtype,
    credentials: 'same-origin',
    headers: {
      'Content-Type': contenttype,
      'Authorization': 'Bearer ' + token
    },
    // body:JSON.stringify(form)
  }).then(response => {
    if (response.status != 200) {
      errorfunc(error, "network error");
      throw new Error("network access  error");
    }
    return response.json();
  }).then(r => {
    console.log('r in function ', r);
    return [r];
  });
}

const edit = (id) => {
  console.log('id ', id);
  fetch(`${url}/coupon/findcoupon/${id}`,
    {
      method: 'get',
      credentials: 'same-origin',
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
  )
    .then(response => response.json())
    .then((response) => {
      console.log('', response);
      var todayTime = new Date(response.enddate)
      var month = (todayTime.getMonth() + 1);
      var day = (todayTime.getDate());
      var year = (todayTime.getFullYear());
      let expdate = year + "-" + "0" + month + "-" + day;
      response.enddate = expdate;
      // start date 
      var todayTime = new Date(response.startdate)
      var month = (todayTime.getMonth() + 1);
      var day = (todayTime.getDate());
      var year = (todayTime.getFullYear());
      let stdate = year + "-" + "0" + month + "-" + day;
      response.startdate = stdate;
      //autofill 
      $("#general2").autofill(response);
      $("#rest").autofill(response);
      $("#usage2").autofill(response);
      if (response.couponstatus === 'yes') {
        document.getElementById('checkbox-primary-2').checked = true;
      }
      if (response.freeshipping === 'yes') {
        document.getElementById('checkbox-primary-1').checked = true;
      }
    })
    .catch(err => console.log(err));
  $('#formbody').slideToggle();
};
const cancel = (id) => {
  alertify.confirm("Coupon", "Do you want to delete this coupon ?",
    function () {
      fetch(`${url}/coupon/deletecoupon/${id}`,
        {
          method: 'delete',
          credentials: 'same-origin',
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }
      )
        .then(response => response.text())
        .then((response) => {
          //   console.log('response ',response) ;
          $('#' + id).remove();
        });
      alertify.success('Ok');
    },
    function () {
      alertify.error('Cancel');
    });
};

// to request some data and change links
const requestdata = async (path, url, callback, body) => {
  const res = await fetch(url, body
  ).then(response => {
    if (response.status != 200) {
      throw new Error("network access error");
    }
    return response.json();
  }).then(r => {
    callback(r);
    window.location.href = path;
  });
};
// version 2
const helpaddtocart2 = async (url, callback, body) => {
  const res = await fetch(url, body
  ).then(response => {
    if (response.status != 200) {
      throw new Error("network access  error");
    }
    return response.json();
  }).then(r => {
    callback(r);
    // return await fetch(suburl,body) ;
  });
}
//to add to cart in marketplace and product
const helpaddtocart = async (url, callback, body) => {
  const res = await fetch(url, body
  ).then(response => {
    if (response.status != 200) {
      throw new Error("network access  error");
    }
    return response.json();
  }).then(r => {
    callback(r);
    // return await fetch(suburl,body) ;
  });
};

let contenttype = {
  "accept": "application/json",
  "Content-Type": "application/json",
  // "Authorization": "Bearer " + localStorage.getItem('token')
};
//set ajax jquery
const setajax = (datatype, url, method, data, processresponse, beforesend, header) => {
  //the beforesend will set headers and authorization i it is required 
   console.log(' datatype ',datatype,' url ',url,' method ',method) ;
  $.ajax({
      type: method,
      url: url,
      data: data,
      dataType: datatype,
      headers: header,
      beforeSend: beforesend,
      success: function (response) {
          processresponse(response);
      },
      error: function (jqXHR, textStatus, errorThrown) {
          console.log(textStatus, errorThrown);
      }
  });
};
const messagechoice = (element) => {
  // alert(element.value) ;
  switch (element.value) {
    case `allusers`:
      $('.usersearch2').prop('disabled', true);
      break;
    case `allvendors`:
      $('.usersearch2').prop('disabled', true);
      break;
    default:

  }

}

let brands = new Map();  // for brands 
let size = new Map();  // for size
let color = new Map();  // for color
let range = new Map();
// for brands , sizes , and color
let searchbrands = (id) => {
  // for brands 
  //var [input1,input2,input3]  =  document.getElementsByName("mytype") ;
  let url2 = new URL(decodeURIComponent(window.location.href));
  let searchParams = new URLSearchParams(url2.search).get('productid');
  console.log("by name ",' searchParams ',searchParams);
  var input = document.getElementsByName("mytype");
  let pathparam = 'brand=' + document.getElementById(id).value;
  // for brands 
  input.forEach(inp => {
    if (inp.checked) {
      pathparam = pathparam + "&type=" + inp.value;
    }
  });
  // for sizes
  var size = document.getElementsByName('mysize');
  size.forEach(size => {
    if (size.checked) {
      pathparam = pathparam + '&size=' + size.value;
    }
  });
  // for colors
  if (color.get('color') != null && color.get('color') != undefined) {
    pathparam = pathparam + '&colour=' + color.get('color');
  }
  if (range.get('range') != null && range.get('range') != undefined) {
    pathparam = pathparam + '&price=' + range.get('range');
  }
 // console.log('brands pathparam ', pathparam)
  // console.log(input1.checked,input2.checked,input3.checked) ;
  if (document.getElementById(id).checked) {
    brands.set(id, document.getElementById(id).value);
    //  alert(document.getElementById(id).checked+ " in if and "+brands.get(id)) ;
   // alert(pathparam);
    //call ajax here 
    // console.log('brands pathparam ',`${pathparam}&productid=${searchParams}`);
    // console.log(`${url2}/product/searchcollection?${pathparam}`) ;
    // console.log(`${url2}`) ;
    // console.log(`${url2}/product/searchcollection?${pathparam}&productid=${searchParams}`) ;
    setajax('json',`${api}/product/searchcollection?${pathparam}&productid=${searchParams}`,'get',"",(response)=>{
      console.log('response ',response);
      if(response.length === 0){
         toastr.error('Not found') ;
        // return
         }else{
          modifydisplay(response) ;
         }
    },()=>{},contenttype) ;
  }
}

// to stop event
function stopPropagation(e) {
  if (!e) var e = window.event
  e.cancelBubble = true;
  if (e.stopPropagation) e.stopPropagation();
}
let searchcolor = (e) => {
  console.log(' e.target ',e.target) ;
  color.set('color', htmlToElement(e.target));
  console.log('color ', color.get('color'));
  let pathparam = 'colour=' + color.get('color');
  var input = document.getElementsByName("mytype");
  //let pathparam = '';
  // for type 
  input.forEach(inp => {
    if (inp.checked) {
      pathparam = pathparam + "&type=" + inp.value;
    }
  });
  var brands = document.getElementsByName("myradio");
  // for brands 
  brands.forEach(inp => {
    if (inp.checked) {
      pathparam = pathparam + "&brand=" + inp.value;
    }
  });
  // for sizes
  var size = document.getElementsByName('mysize');
  size.forEach(size => {
    if (size.checked) {
      pathparam = pathparam + '&size=' + size.value;
    }
  });
  if (range.get('range') != null && range.get('range') != undefined) {
    pathparam = pathparam + '&price=' + range.get('range');
  }
  console.log('color pathparam ',pathparam) ;
 // alert(pathparam);
 setajax('json',`${url}/product/searchcollection?${pathparam}`,'get',"",(response)=>{
  console.log('response ',response);
  if(response.length === 0){
     toastr.error('Not found') ;
    // return
     }else{
      modifydisplay(response) ;
     }
},()=>{},contenttype) ;
}
$('#color-selector').on('click', (e) => {
  searchcolor(e);
  stopPropagation(e);
});

//it helps to convert string to html
function htmlToElement(html) {
  var template = document.createElement('template');
  // html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  // console.log(' template ', template.content.firstChild) ;
  //return template.content.firstChild;
  // const parser = new DOMParser();
  // //const htmlString = "<strong>Beware of the leopard</strong>";
  // const doc3 = parser.parseFromString(html, "text/html");
  //console.log(' template ',html.classList) ;
  //return html.getAttribute('data-yellow') ;
  return html.classList.item(1);
}
let searchsize = (e) => {
  let pathparam = '';
  var input = document.getElementsByName("mytype");
  // for type 
  input.forEach(inp => {
    if (inp.checked) {
      pathparam = pathparam + "&type=" + inp.value;
    }
  });
  // for brands
  var brands = document.getElementsByName("myradio");
  brands.forEach(inp => {
    if (inp.checked) {
      pathparam = pathparam + "&brand=" + inp.value;
    }
  });
  // for sizes
  var size = document.getElementsByName('mysize');
  size.forEach(size => {
    if (size.checked) {
      pathparam = pathparam + '&size=' + size.value;
    }
  });
  // for colors
  if (color.get('color') != null && color.get('color') != undefined) {
    pathparam = pathparam + '&colour=' + color.get('color');
  }
  // for prices
  if (range.get('range') != null && range.get('range') != undefined) {
    pathparam = pathparam + '&price=' + range.get('range');
  }
  // alert(pathparam);
  console.log('size pathparam ',pathparam) ;
  setajax('json',`${url}/product/searchcollection?${pathparam}`,'get',"",(response)=>{
    console.log('response ',response);
    if(response.length === 0){
       toastr.error('Not found') ;
      // return
       }else{
        modifydisplay(response) ;
       }
  },()=>{},contenttype) ;
  stopPropagation(e);
}

let searchtype = (id) => {
  let pathparam = 'size=' + document.getElementById(id).value;
  var brands = document.getElementsByName("myradio");
  // for brands 
  brands.forEach(inp => {
    if (inp.checked) {
      pathparam = pathparam + "&brand=" + inp.value;
    }
  });
  // for colors
  if (color.get('color') != null && color.get('color') != undefined) {
    pathparam = pathparam + '&colour=' + color.get('color');
  }
  // for prices
  if (range.get('range') != null && range.get('range') != undefined) {
    pathparam = pathparam + '&price=' + range.get('range');
  }
  //alert(pathparam);
  console.log('type pathparam ',pathparam) ;
  setajax('json',`${url}/product/searchcollection?${pathparam}`,'get',"",(response)=>{
    console.log('response ',response);
    if(response.length === 0){
       toastr.error('Not found') ;
      // return
       }else{
        modifydisplay(response) ;
       }
  },()=>{},contenttype) ;
  stopPropagation(e);
}

const average = (array) => array.reduce((a, b) => a + b) / array.length;

$('.range-slider').on('change', (e) => {
  console.log('price ', e.target.value.split(";")[1]);
  range.set('range', e.target.value.split(";")[1]);
  let pathparam = 'price=' +e.target.value.split(";")[1] ;
  var input = document.getElementsByName("mytype");
  // for type 
  input.forEach(inp => {
    if (inp.checked) {
      pathparam = pathparam + "&type=" + inp.value;
    }
  });
  var brands = document.getElementsByName("myradio");
  // for brands 
  brands.forEach(inp => {
    if (inp.checked) {
      pathparam = pathparam + "&brand=" + inp.value;
    }
  });
  // for sizes
  var size = document.getElementsByName('mysize');
  size.forEach(size => {
    if (size.checked) {
      pathparam = pathparam + '&size=' + size.value;
    }
  });
  // for colors
  if (color.get('color') != null && color.get('color') != undefined) {
    pathparam = pathparam + '&colour=' + color.get('color');
  }
  console.log('price pathparam ',pathparam) ;
  setajax('json',`${url}/product/searchcollection?${pathparam}`,'get',"",(response)=>{
    console.log('response ',response);
    if(response.length === 0){
      modifydisplay(response) ;
       }else{
  
       }
  },()=>{},contenttype) ;
  stopPropagation(e);
});

//to update image in dom
const modifydisplay =(response)=>{
  catproduct  =  response ; 
  $('#small-section').empty().html(`
      <h4>${catproduct[0].categoryid}</h4>
      <h5>${catproduct[0].productname}</h5>
      <p>${catproduct[0].proddescription}</p>
        `) ;
  console.log(' catproduct ',catproduct,' img ',`<img src=${api}/jetstore/${catproduct[0].imageurl}>`) ;
  let src=`${api}/jetstore/${catproduct[0].imageurl}>` ;
  let cat=catproduct[0].productname;
  let id  = catproduct[0].id;
  let proddescription  = catproduct[0].proddescription ;
  // $('#catimg').prop('href',`/jetcart/productpage`) ;
  // $('#catimg').prop('width','5px') ;
  // $('#catimg').prop('height','5px') ;
  //$('#catimg').prop('onclick',`loadprd('${catproduct[0].id}','/jetcart/productpage')`) ;
 // $('#catimg').empty().html(`<img width='5px' height='5px' src=${api}/jetstore/${catproduct.imageurl}> class="img-fluid blur-up lazyload" alt=""`) ;
 console.log(src,cat,id,proddescription) ; 
//  productcontent(src,cat,id,proddescription) ;
 $("#top-banner-wrapper").empty().html(productcontent(src,cat,id,proddescription)) ;
 sessionStorage.setItem('product',JSON.stringify(catproduct)) ;
}
//on arrival
// new jBox('Tooltip', {
//   attach: '#reg',
//    content: 'Pay On Arrival',
//    animation: 'zoomin'
// });
// //online
// new jBox('Tooltip', {
//   attach: '#reg2',
//    content: 'Pay Online',
//    animation: 'zoomin'
// });
const productcontent = (src,cat,id,proddescription)=>{
  return (
    `<div class="top-banner-wrapper">
    <a href="#" id="catimg" onclick="loadprd('${id}','/jetcart/productpage')">
        <img width='5px' height='5px' src="${src}" class="img-fluid blur-up lazyload" alt="">
      </a>
        <div class="top-banner-content small-section" id="small-section">
        <h4>${cat}</h4>
        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </h5>
        <p>
          ${proddescription} 
        </p>  
        </div>
</div>
    `
  );
}



























































