//import {backendurl} from './ts_scripts/url'
//const url  = 'http://localhost:1022' ; 
const url  =     'https://cristabackend.herokuapp.com';
//const api = 'http://localhost:1022' ; 
const api  =  'https://cristabackend.herokuapp.com';

function showprd(id){
	 console.log('id ',id) ;
	 $('#prd').slideToggle() ;
    requestdata(null,`${url}/order/orders/${id}`,(res)=>{
        console.log('res' , res) ;
        const builder  = new StringBuilder() ;
        res.forEach((data) =>{
        builder.append(`<tr><td>${data.productname}</td><td>${data.quantity}</td><td>${data.total}</td><td>${data.tax}</td><td>${data.shipping}</td><td>${data.localpickup}</td><td>${data.price}</td></tr>`);
        }) ;
        $('#orderdetail').empty().html(builder.toString()) ;
        $('#orderform').autofill(res[0]) ;
        if(res[0].shipping === true){
         $('#shipping').prop('checked',true)
          }
          if(res[0].localpickup === true){
            $('#localpickup').prop('checked',true)
             }  
             $('#orderform :input').attr('readonly','readonly');
        throw new Error('return from here') ;
      },{
        method:'get',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'Authorization':'Bearer '+localStorage.getItem('token')
            },
      }) ; 
	}
const ajaxload  = (idbyclass)=>{
    setTimeout(function() {
        $("."+idbyclass).empty().html("<img src='./dist/images/btn-ajax-loader.gif'/> &nbsp; Signing In ...please wait ....");
       // window.location.href="../adminindex" ;
              },2000);
   }

   //add to cart  logic
const storagearray = new Set();  // to store object
const addtocart = (id)=>{
  //alert(id) ;
  helpaddtocart2(`${url}/product/displayandloadsimilaritems/${id}`,(res)=>{
    console.log('adding to cart ','res' , res) ;
    const product  = res ;
   const mainprd  =  product.filter(f=>f.id===id).slice(0,1); //pick the first element
   console.log(' mainprd ',mainprd) ;
   $('#addtocart').modal('show') ;
   $('#producttype').text(mainprd[0].productname);
   $('#productimage').prop('src',`${url}/jetstore/${mainprd[0].imageurl}`) ;
   console.log('mainprd ...',mainprd,' imageurl ',mainprd[0].imageurl) ;
   var builder  =  new StringBuilder() ;
    if(Array.isArray(product)){
      product.forEach(element=>{
        console.log('productname ',element.productname) ;
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
            `) ;
      })
      }
      $('#upsell_product').empty().html(builder.toString()) ; 
    // add to cart here .
    cartfunction('store',mainprd[0]) ;   
      },{
      method:'get',
      credentials: 'same-origin',
      headers: {
      'Content-Type': 'application/json',
      }
    });
    //load similar items 
};
//remove item from wishlist 
 const removeRow = (id) =>{
  // alert(id) ;
  $('#'+id).remove() ;
 } ;
 //cart function for wishlist
 const addtocartforwishlist  = (id)=>{
   //alert(id) ;
  helpaddtocart2(`${url}/product/displayandloadsimilaritems/${id}`,(res)=>{
  console.log('adding to cart ','res' , res) ;
  const product  = res ;
  const mainprd  =  product.filter(f=>f.id===id).slice(0,1); //pick the first element
  if(Array.isArray(mainprd)){
    cartfunction('wishlist',mainprd[0]) ; 
  }else{
    cartfunction('wishlist',mainprd) ; 
  }

  });
 }
const cartfunction  = (store2,product) =>{
  console.log(' product ',product,' productname ',product.productname)
  //alert(product.id) ;
  //toastr.error('This has been added') ;
  const store = JSON.parse(sessionStorage.getItem(store2));
  if (store === null || store.includes(null)) { // check for the first time
    sessionStorage.setItem(store2, JSON.stringify(Array.from(storagearray.add(product))));
    console.log('first '+store2, JSON.parse(sessionStorage.getItem(store2)));
    toastr.success('successfully added to '+store2) ;
  }
  if (store !== null && store.length > 0) {
    console.log(store2,store);
    JSON.parse(sessionStorage.getItem(store2)).forEach((element) => {
      //console.log(' element ', element);  
      if (element.id === product.id) { // check duplicate  items
        console.log(' id ',element.id);
        console.log('duplicate  items');
        toastr.error('This has been added') ;
        throw new Error('duplicate  item');
        // return;
      }
    });
   // const store = JSON.parse(sessionStorage.getItem('store'));
    store.push(product);
    console.log('successfully added to '+store2) ;
    sessionStorage.setItem(store2, JSON.stringify(store));
    console.log('next '+store2, JSON.parse(sessionStorage.getItem(store2)));
    toastr.success('successfully added to '+store2) ;
    //load similar items 
     }
}
const addtocart2= (id)=>{
  helpaddtocart(`${url}/product/display/${id}`,(res)=>{
    console.log('adding to cart ','res' , res) ;
  // sessionStorage.setItem('product',JSON.stringify(res)) ;
  const product  = res ;
     console.log('check if product is added ',product.productname)
     $('#addtocart').modal('show') ;
     $('#producttype').text(product.productname);
     $('#productimage').prop('src',`${url}/jetstore/${product.imageurl}`) ;
    // load items   
   console.log('loading  items ',product.productname,' price ',product.productprice) ;
   // still visit this part 
  helpaddtocart(`${url}/product/loadsimilaritems2?thename=${product.productname}&price=${product.productprice}&size=4`,(res2)=>{
    console.log('adding to cart2 ', res) ;
    const product  =  res  ;
    console.log('product ...',product.constructor.name)
    var builder  =  new StringBuilder() ;
    if(Array.isArray(product)){
      product.forEach(element=>{
        console.log('productname ',element.productname) ;
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
            `) ;
      })
      }  
    if(product.constructor.name === 'Object'){
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
      `) ;
    //  }
          }
    $('#upsell_product').empty().html(builder.toString()) ;
    },{
    method:'get',
    credentials: 'same-origin',
    headers: {
    'Content-Type': 'application/json',
        },
  }) ;
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
     },{
      method:'get',
      credentials: 'same-origin',
      headers: {
      'Content-Type': 'application/json',
          },
    }
  );
} ;
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
const loadprd2 = (id,path)=>{
  requestdata('/jetcart/productpage',`${path}/product/display/${id}`,(res)=>{
    console.log(' id ',id) ;
    console.log('res' , res) ;
   sessionStorage.setItem('product',JSON.stringify(res)) ;
  },{
    method:'get',
    credentials: 'same-origin',
    headers: {
    'Content-Type': 'application/json',
        },
  }) ; 
};

   const loadprd = (id,path)=>{
      requestdata('/jetcart/productpage',`${url}/product/display/${id}`,(res)=>{
        console.log(' id ',id) ;
        console.log('res' , res) ;
       sessionStorage.setItem('product',JSON.stringify(res)) ;
      },{
        method:'get',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json',
            },
      }) ; 
   };
const updateprofile  = (formid)=>{
  const form  =  new FormData(document.getElementById(formid)) ;
  console.log(form,form.get("location"),' ack ',localStorage.getItem('ack')) ;
  form.append('userid',localStorage.getItem('ack'));
  const formjson  = Object.fromEntries(form.entries());// convert  form data to json  
  formsubmit(`${url}/profile/create`,form,$('#error'),'post','text',false,()=>{
    $('#exampleModal').modal('hide');
    setTimeout(()=>{
     // $('.modal-dialog').classList.remove(`modal-dialog-centered`) ; 
      $('#exampleModal').remove();
      Swal.fire({
        icon:"success",
        text:"Profile Updated successfuly!"
        });
    },3500) ;
  }) ;
}
const formsubmit  = (url,form,error,methodtype,returntype,contenttype,mymodal)=>{
 // console.log('token ',localStorage.getItem('token')); 
  $.ajax({
	    url: url,
      type: methodtype,
      headers: { 
        Authorization:`Bearer ${localStorage.getItem('token')}` 
        },
      dataType:returntype,
	    contentType : contenttype,
      data: form,
	    processData : false,
      beforeSend:function(){
       console.log('before sending form ',form.values()) ;
      },
	    success:function(data){       
	     console.log('data ',data);
       //$('#exampleModal').modal('hide');
         // ajaxload() ;
        //   if(modal !== null){
        //  $('.modal-dialog').classList.remove(`modal-dialog-centered`) ; 
        //       }
          mymodal() ;
      //  Swal.fire({
      //    icon:"success",
      //    text:"Profile Updated successfuly!"});	
	         },
        error:function(err){
          console.log(' err ',err)
         errorfunc(error,"network error") 
        },
	}).done(function(data){
	   console.log('done succesfully ');
        // disposemodal;
	});
};
   // call this on call to edit  profile
  const ajaxcall = (url,form,methodtype,returntype,contenttype)=>{
    $.ajax({
        url:url,
        type:methodtype,
        dataType:returntype,
        contentType:contenttype,
        data:JSON.stringify(form),
        beforeSend:function(){ 
        //$("#log").empty().html("<img src='./myresources/jetlogistics/images/btn-ajax-loader.gif'/> &nbsp; Signing In ...");      		       
           console.log('inside ajax .......') ;
             },
        success:function(response){
              console.log() ;
             if(response.userid){ 

                }
           },
           error:function(err){
            //errorfunc(error,"network error")
           }
     } )
  };
  const namepattern  = /^[a-zA-Z]{3,20}$/  ;
  const citypattern  = /^[a-zA-Z]{3,20}|[0-9]+$/  ;
  const errorfunc  = (error,theinput)=>{
      return error.fadeIn(500, function(e){                 
        error.empty().
      html('<br/><div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+`wrong ${theinput}` +' !</div>');
        }) ;
  }
  // validate form 
  const formvalidator = (error,{firstname,lastname,city,address}) =>{
    //    const firstname = form.get(`${firstname}`)  ; 
    //    const lastname= form.get(`${lastname}`)  ;
    //    const city  = form.get(`${city}`) ; 
      // const address  =  form.get(`${address}`) ;
        if(!namepattern.test(firstname)||firstname.length<1){
            errorfunc(error,`firstname - ${firstname}`) ;
        }
        if(!namepattern.test(lastname)||lastname.length<1){
            errorfunc(error,`lastname - ${lastname}`) ;
        }
        if(!citypattern.test(city)||city.length<1){
            errorfunc(error,`city ${city}`) ;
        }
        if(!citypattern.test(address)|| address.length<1){
            errorfunc(error,`address ${address}`) ;
        }
  };
  // using  fetch api 
 const processrequest = async (url,form,methodtype,contenttype,token)=>{ 
  const res  =   await fetch(url,{
        method:methodtype,
        credentials: 'same-origin',
        headers: {
        'Content-Type': contenttype,
        'Authorization':'Bearer '+token
            },
       // body:JSON.stringify(form)
           }).then(response=>{
                 if(response.status!=200){
                   errorfunc(error,"network error");
                     throw new  Error("network access  error");
                      }
                return response.json() ;
            }).then(r=>{
              console.log('r in function ',r) ;
              return [r] ;
            }) ;
  }

  const edit =(id)=>{
    console.log('id ',id) ;
    fetch(`${url}/coupon/findcoupon/${id}`,
    {
  method:'get',
  credentials: 'same-origin',
  headers:{
    'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
     } 
    )
.then(response => response.json())
.then((response) => {
    console.log('',response) ;
    var todayTime =new Date(response.enddate)
     var month = (todayTime .getMonth() + 1);
     var day = (todayTime .getDate());
     var year = (todayTime .getFullYear());
  let expdate  = year+"-"+"0"+month+"-"+day;
     response.enddate =  expdate ; 
     // start date 
     var todayTime =new Date(response.startdate)
     var month = (todayTime .getMonth() + 1);
     var day = (todayTime .getDate());
     var year = (todayTime .getFullYear());
  let stdate  = year+"-"+"0"+month+"-"+day;
     response.startdate = stdate ;
     //autofill 
     $("#general2").autofill(response);
     $("#rest").autofill(response);
     $("#usage2").autofill(response);
     if(response.couponstatus ==='yes'){
      document.getElementById('checkbox-primary-2').checked =  true ;
     }
     if(response.freeshipping === 'yes'){
      document.getElementById('checkbox-primary-1').checked =  true ;
     }  
})
.catch(err => console.log(err));
   $('#formbody').slideToggle() ;
   };
   const cancel =(id)=>{
    alertify.confirm("Coupon","Do you want to delete this coupon ?",
    function(){
      fetch(`${url}/coupon/deletecoupon/${id}`,
      {
    method:'delete',
    credentials: 'same-origin',
    headers:{
      'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
       } 
      )
  .then(response => response.text())
  .then((response) => {
   //   console.log('response ',response) ;
      $('#'+id).remove() ;
          });
      alertify.success('Ok');
    },
    function(){
      alertify.error('Cancel');
    }); 
   };

   // to request some data and change links
   const requestdata = async (path,url,callback,body) => { 
    const res  =   await fetch(url,body
             ).then(response=>{
                   if(response.status!=200){
                       throw new Error("network access  error");
                        }
                  return response.json() ;
              }).then(r=>{
                callback(r);
               window.location.href=path ;
              }) ;
    };
    // version 2
   const helpaddtocart2  = async (url,callback,body)=>{
    const res  =   await fetch(url,body
      ).then(response=>{
            if(response.status!=200){
                throw new Error("network access  error");
                 }
           return response.json() ;
       }).then(r=>{
         callback(r);
        // return await fetch(suburl,body) ;
       });
         } 
    //to add to cart in marketplace and product
    const helpaddtocart = async (url,callback,body) => { 
      const res  =   await fetch(url,body
               ).then(response=>{
                     if(response.status!=200){
                         throw new Error("network access  error");
                          }
                    return response.json() ;
                }).then(r=>{
                  callback(r);
                 // return await fetch(suburl,body) ;
                });
      };

const messagechoice =(element)=>{
    // alert(element.value) ;
    switch(element.value){
    case `allusers`:
      $('.usersearch2').prop('disabled',true) ;
       break;
    case `allvendors`:
      $('.usersearch2').prop('disabled',true) ;
       break;  
    default:
     
      }
   
       }










































































