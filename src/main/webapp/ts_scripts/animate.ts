import { backendurl, loginurl } from "./url";
declare var $: any;
declare var StringBuilder: any;
export function animateProductCategoryPage(element:any, animationName:any, callback:any) {
  // setInterval(function(){
  const node = document.querySelector(element);
   //console.log('inside anim css',node);
  node.classList.add('animated', animationName);
  function handleAnimationEnd() {
    node.classList.remove('animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);
    if (typeof callback === 'function') {
      // animateitems() ;
      callback();
    }
  }
  // node.classList.add('animated',animationName) ;
  node.addEventListener('animationend', handleAnimationEnd);
 //  },2000);
}
//process the json for amimation
export const processanimated = (json:any,strbuildr:any,rowbuilder:any) => {
  let counter = 0;
  if (json.length === 0) {
    $('#catalogue').empty().html(`<div>This product is not in store</div>`);
    throw new Error('product not in store .......');
       }
  for (let p of json) {
    console.log(' p of ', p.productname, `${backendurl}/jetstore/${p.imageurl}`);
    if (counter === 0) {
      rowbuilder.append(`<div class="row offset-1">`)
       }
    let image = `${backendurl}/jetstore/${p.imageurl}`;
    //  rowbuilder.append(`<div class='row'></div>`) ;
    if(p.productstatus === 'refurbished'){
      p.productstatus ='ref' ;
             }
    rowbuilder.append(`<div class="col-md-3">
                 <div class="product-box">
                   <div class="img-wrapper">
                   <div class="lable-block"><span class="lable3">${p.productstatus}</span>
                    <span class="lable4">on
                   sale</span></div>
         <a href="/jetcart/productpage" onclick="loadprd('${p.id}','/jetcart/productpage')">>
         <img src="${image}" width="180px" height="180px" alt=""></a>                                      
              <div class="cart-info cart-wrap">
          <button data-toggle="modal" onclick="addtocart('${p.id}')" title="Add to cart">
          <i class="ti-shopping-cart"></i></button> <a href="javascript:void(0)" onclick="addtowishlist('${p.id}')" title="Add to Wishlist">
          <i class="ti-heart" aria-hidden="true"></i></a> <a href="#" data-toggle="modal"
            data-target="#quick-view" title="Quick View"><i class="ti-search" aria-hidden="true">
            </i></a>
            <a href="/jetcart/compare?name=${encodeURIComponent(p.productname)}$price=${p.productprice}" title="Compare">
            <i class="ti-reload" aria-hidden="true"></i></a>
            </div></div>
                           <div class="product-detail">
                            <div class="rating"><i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i> 
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            </div>
                            <a href="/jetcart/productpageappliance">
                            <h6>${p.productname}</h6>
                            </a>
                            <h4>N${(parseFloat(p.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h4>
                            <h4><del>N${(parseFloat(p.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</del></h4>
                            </div>
                        </div>
         </div>`);
    // console.log('inner loop got here ') ; 
    if (counter === 4) {
      // console.log('got here ') ;
      rowbuilder.append(`</div>`);  // close  the  row 
      console.log('closing  the row .....');
      strbuildr.append(rowbuilder.toString());
      rowbuilder = null;
      counter = 0;
    }
    counter++;
  }
};
//animate product cateory page
export function animatePrdCat(item:string) {
 // console.log('item ',item)
  $.ajax({
    type: 'get',
    url: `${backendurl}/product/loadproductcategory/${item}`,
    dataType: 'json',
    success: function (html:any) {
     // console.log('html ',html) ;
      var strbuildr = new StringBuilder() 
    // var html2 = JSON.parse(html) ;
       const rowbuilder  = new StringBuilder() ;
      processanimated(html,strbuildr,rowbuilder) ;
     // $('#catalogue').empty().html(strbuildr.toString()); you can also add it here .just check later  
      setTimeout(()=>{
        $('#catalogue').empty().html(strbuildr.toString());
        animateProductCategoryPage('.catalogue', 'fadeOutRightBig', ()=>{
          // console.log('calling anonymous function .....');
           animatePrdCat(item);
         });  //recursion 
      },2000)
    }
  });

}
export function animateCSS(element: any, animationName: any, callback: any) {
 // setTimeout(function(){
  console.log('entered my animateCSS .....', element, animationName)
  const node = document.querySelector(element);
  console.log('inside anim css');
  node.classList.add('animated', animationName);
  console.log('inside anim css classlist');
  function handleAnimationEnd() {
    console.log('inside handle ......');
    node.classList.remove('animated', animationName);
    node.removeEventListener('animationend', handleAnimationEnd);
    console.log('animated');
    if (typeof callback === 'function') {
      // animateitems() ;
      console.log('calling  the  animate .....');
      callback();
    }
  }
  console.log('calling animation animated');
  // node.classList.add('animated',animationName) ;
  node.addEventListener('animationend', handleAnimationEnd);
  console.log('listener added ');
  // },2000);
}
export function animateitems(backendurl: string, element: string, animationtype: string,
  domdivelement: any, methodtype: string, url: string) {
  console.log('calling again ----- and emptying it ....');
  // domdivelement.innerHTML  = '' ;
  $.ajax({
    url: url,
    type: methodtype,
    dataType: 'json',
    // data:'pageNumber=4'+'&pageSize=2',
    beforeSend: function () {
      console.log('sending');
    },
    success: function (r: any) {
      // console.log('returning json ', r);
      let json = r;
      // console.log('appending  json ', json);
      //  let json = JSON.parse(r); 
      let keys = Object.keys(r);
      var prdcatalogue = new StringBuilder();
      for (let k of keys) {
        //  console.log(' k ', k, json[k]);
        var strbuildr = new StringBuilder();
        strbuildr.append(`<div class="row offset-5"><div class="title2">
        <h2 class="title-inner2">${k}</h2></div></div><div class="row offset-1">`)
        for (let p of json[k]) {
          // console.log(' p of ',k,`${backendurl}/jetstore/${p.imageurl}`) ;
          let image = `${backendurl}/jetstore/${p.imageurl}`;
          if(p.productstatus === 'refurbished'){
            p.productstatus ='ref' ;
               }
          strbuildr.append(`<div class="col-md-3">
                     <div class="product-box">
                       <div class="img-wrapper">
                       <div class="lable-block"><span class="lable3">${p.productstatus}</span> 
                       <span class="lable4">on
                       sale</span></div>
             <a href="/jetcart/productpage" onclick="loadprd('${p.id}','/jetcart/productpage')">>
             <img src="${image}" width="180px" height="180px" alt=""></a>                                      
                  <div class="cart-info cart-wrap">
              <button data-toggle="modal" onclick="addtocart('${p.id}')" title="Add to cart">
              <i class="ti-shopping-cart"></i>
              </button> <a href="javascript:void(0)" onclick="addtocartforwishlist('${p.id}')" title="Add to Wishlist">
              <i class="ti-heart" aria-hidden="true"></i></a> <a href="#" data-toggle="modal"
                data-target="#quick-view" title="Quick View"><i class="ti-search" aria-hidden="true">
                </i></a>
                <a href="/jetcart/compare?name=${encodeURIComponent(p.productname)}$price=${p.productprice}" title="Compare">
                <i class="ti-reload" aria-hidden="true"></i></a>
                </div></div>
                               <div class="product-detail">
                                <div class="rating"><i class="fa fa-star"></i> <i class="fa fa-star">
                                </i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star">
                                </i>
                                </div>
                                <a href="/jetcart/productpageappliance">
                                <h6>${p.productname}</h6>
                                </a>
                                <h4>N${(parseFloat(p.productprice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))}</h4>
                            </div>
                            </div>
             </div>`);
          //  console.log('inner loop got here ') ; 
        }
        //  console.log('got here ') ;
        strbuildr.append(`</div>`);
        prdcatalogue.append($.trim(strbuildr.toString()));
      }
      // console.log(domdivelement) ;
      // domdivelement.empty().html(prdcatalogue.toString());
      domdivelement.innerHTML = prdcatalogue.toString();
      //console.log('appended to the dom .......');
      //console.log('calling the method again .......');
      // console.log('domdivelement .....',domdivelement);
      setTimeout(() => {
      // //   //delay for 2000
      //   //const catalogue  =  document.getElementById('catalogue') as HTMLDivElement;
         animateCSS(element, animationtype, ()=>{
          animateitems(backendurl, element, animationtype, domdivelement, methodtype, url)
       });  //recursion 
       }, 2000);

    }
  });

}
// animate related  products
export function animaterelatedprd(backendurl: string, element: string, animationtype: string,
  domdivelement: any, methodtype: string, url: string){
    $.ajax({
      url: url,
      type: methodtype,
      dataType: 'json',
      // data:'pageNumber=4'+'&pageSize=2',
      beforeSend: function () {
        console.log('sending');
      },
      success: function (r: any) {
        // console.log('returning json ', r);
        let json = r;
      console.log('json',json) ;
      let relatedprd  = new StringBuilder() ;
      json.forEach((el:any)=>{
      relatedprd.append(`<div class="col-xl-2 col-md-4 col-sm-6">
       <div class="product-box">
           <div class="img-wrapper">
               <div class="front">
                   <a href="/jetcart/productpage" onclick="loadprd('${el.id}','/jetcart/productpage')">
                   <img src="${backendurl}/jetstore/${el.imageurl}"
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
    //   $('#search-product').empty().html(relatedprd.toString());
       domdivelement.innerHTML  = relatedprd.toString() ;
      setTimeout(() => {
        //delay for 2000
        //const catalogue  =  document.getElementById('catalogue') as HTMLDivElement;
        animateCSS(element, animationtype, ()=>{
          animaterelatedprd(backendurl, element, animationtype, domdivelement, methodtype, url)
        });  //recursion 
      },4000);
      }  
      }); 
}



















































