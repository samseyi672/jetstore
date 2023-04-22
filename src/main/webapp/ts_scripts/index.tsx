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
declare var translate: any;
declare var createjs: any;
declare var responsiveVoice:any ;
declare var dateFns:any ;
//declare var requirejs:any;
// declare var process: any;
// import * '../dist/mylanguages/'
// remember to remove create create  link 
import { login } from "./tsbackendscript/login";
import { backendurl, loginurl, theprotocol,websocketurl } from "./url";
import { invalidatetoken, redirectiftokenisnull, jsonresult } from "./miscellaneous";
import { dialog } from "./lithtmlscript";
import { sendmailtocust,formsubmit, checktoken, submitform, processrequest2,onloaddatatable2,setajax, contenttype, contenttypewithtoken,onloaddatawithfetch,setajaxwithform,onMessageReceived,onPrivateMessage} from "./tsbackendscript/ajaxfunctioncall";
import { register } from "./register";
import { User } from "./user";
import { secondialog } from "./lithtmlscript";
import { product } from "./product";
import { coupon } from './coupon';
//import { waterfall, series, each, asyncify, forEach, any } from 'async';
import { createtables, createtables2 } from './tables'
//import  translate from 'google-translate-api';
//import translate from "translate";
//import { Search } from "gridjs/dist/src/view/plugin/search/search";
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
// I had to  add export {}  below to make it  an an isolated modules.
// i also commented out the  isloated  modules to output a  single js file without compiling  other other ts script
// I intalled babel js transform to  be a  able  to compile tsx with jsx code.
// when  you dont  set rootDir , typescript  make use  of  the default rootdir
// which is better. 
//logic goes  as  thus 
//form submit for login
console.log('on load here ........');
$('#login').on('click', (e: any) => {
  e.preventDefault();
  const loginobj = new login();
  var myform = $('form')[0];
  console.log('id ', $(this).id);
  const htmlform: any = document.getElementById('submitLogin');
  const username = htmlform.username.value;
  const password = htmlform.password.value;
  console.log(username, ' and ', password)
  const form = new FormData(); // just note  this
  form.append('username', username);
  form.append('password', password);

  // alert('login');
  loginobj.loginaction(form, "");
});
//process page load 
const urlpages: string[] = [`${loginurl}/adminindex`, `${loginurl}/category`,
`${loginurl}/categorysub`, `${loginurl}/categorysubdigital`,
`${loginurl}/productlistdetails`,
`${loginurl}/addprod`, `${loginurl}/categorydigital`, `${loginurl}/categorysub`,
`${loginurl}/productlistdigital`, `${loginurl}/order`,
`${loginurl}/transactions`,
`${loginurl}/couponlist`, `${loginurl}/couponcreate`, `${loginurl}/pagelist`,
`${loginurl}/pagecreate`, `${loginurl}/menulist`, `${loginurl}/menulist`,
`${loginurl}/userlist`, `${loginurl}/createuser`, `${loginurl}/createvendors`,
`${loginurl}/translations`, `${loginurl}/currencyrates`, `${loginurl}/taxes`,
`${loginurl}/reports`, `${loginurl}/profile`, `${loginurl}/invoice`];

//add digital product 
$('#adddigitalprod').on('click', (e: any) => {
  e.preventDefault();
  Swal.fire({
    icon: 'question',
    // title: 'Multi-Vendor Owner',
    text: 'Do you want to add this Product ?',
    showCancelButton: true,
    allowOutsideClick: false,
  }).then((result: any) => {
    if (result.isConfirmed) {
      const formdata = new FormData();
      let ptitle: any = document.getElementsByName('productname')[0]
      formdata.append("title", ptitle.value);
      console.log('title', ptitle.value);
      let sku: any = document.getElementsByName('sku')[0]
      formdata.append("sku", sku.value);
      console.log('sku', sku.value);
      let productquantity: any = document.getElementsByName('productquantity')[0];
      formdata.append("productquantity", productquantity.value);
      console.log('productquantity', productquantity.value);
      let productcode: any = document.getElementsByName('productcode')[0];
      formdata.append("productcode", productcode.value);
      console.log('productcode', productcode.value);
      let expirydate: any = document.getElementsByName('expirydate')[0];
      formdata.append("expirydate", expirydate.value);
      console.log('expirydate', expirydate.value);
      let state: any = document.getElementsByName('state')[0];
      formdata.append("state", state.value);
      let productstatus: any = document.getElementsByName('productstatus')[0];
      console.log('productstatus', productstatus.value);
      let productprice: any = document.getElementsByName('productprice')[0];
      formdata.append("productprice", productprice.value);
      console.log('productprice', productprice.value);
      let imageurl: any = document.getElementsByName('imageurl')[0];
      formdata.append("imageurl", imageurl.value);
      console.log('imageurl', imageurl.value);
      let proddescription: any = document.getElementsByName('proddescription')[0];
      formdata.append("proddescription", proddescription.value);
      console.log('proddescription', proddescription.value);
      //let proddes:any  =  document.getElementById('editor1') ;
      // let proddes:any= document.getElementById('editor1') ;
      // formdata.append("proddes",proddes.value) ;
      // console.log('proddes',proddes.value) ;
      let metatitle: any = document.getElementsByName('metatitle')[0];
      formdata.append("metatitle", metatitle.value);
      console.log('metatitle', metatitle.value);
      let metadescription: any = document.getElementsByName('metadescription')[0];
      formdata.append("metadescription", metadescription.value);
      console.log('metadescription', metadescription.value);
      let productsta = document.getElementsByName('productstatus');
      let itemstate = document.getElementsByName('state');
      const [enable, disable]: any = Array.from(itemstate);
      console.log('enable', enable)
      if (enable.checked) {
        formdata.append('state', 'enable');
      } else if (disable.checked) {
        formdata.append('state', 'disable');
      }
      const [newprod, oldprod]: any = Array.from(productsta);
      if (newprod.checked) {
        formdata.append('productstatus', 'new');
      } else if (oldprod.checked) {
        formdata.append('productstatus', 'old');
      }
      let categoryid: any = document.getElementsByName('categoryid')[0];
      formdata.append("categoryid", categoryid.value);
      console.log('categoryid', categoryid.value);
      let subcategoryid: any = document.getElementsByName('subcategoryid')[0];
      formdata.append("subcategoryid", subcategoryid.value);
      console.log('subcategoryid', subcategoryid.value);
      let shortsummary: any = document.getElementsByName('shortsummary')[0];
      formdata.append("shortsummary", shortsummary.value);
      console.log('shortsummary', shortsummary.value);
      //  let editor1:any  = document.getElementsByName('editor1')[0] ;
      //  formdata.append("editor1",editor1.value) ;
      //   console.log('editor1',editor1.value) ;     
    } else if (result.isDismissed) {
      Swal.fire({
        icon: 'error',
        text: 'No product added.',
      }).then((r: any) => {
        window.location.reload();
      });
    }
  });

});

//set priceofproduct
$('#tax').on('change', (e: any) => {
  e.preventDefault();
  var priceofproduct = document.getElementById('priceofproduct') as HTMLInputElement;
  let cal = (parseFloat(e.target.value) * 100) + parseInt($('#productprice').val());
  console.log(cal);
  toastr.success('Your selling price will be ' + cal + ' which is (price-tax)');
  priceofproduct.value = cal + "";
  console.log("price " + priceofproduct.value);
  (document.getElementById('pricediv') as HTMLDivElement).style.display = 'none';
});

//add product creation  
$('#addproduct').on('click', (e: any) => {
  e.preventDefault();
  Swal.fire({
    icon: 'question',
    text: 'Do you want to add Product ?',
    showCancelButton: true,
    allowOutsideClick: false,
  }).then((result: any) => {
    if (result.isConfirmed) {
      const prod = new product();
      const form = document.querySelector('#add-product-form') as HTMLFormElement;
      //  console.log('form ', form, 'state ', form.state);
      const [enable, disable] = Array.from(form.state);
      const [newprod, oldprod, refurbished] = Array.from(form.productstatus);
      // console.log('state ', form.state[0].input, ' enable ', enable.checked, 
      // ' disable ', disable.checked,
      // ' new prod ',newprod.checked,' oldprob ',oldprod.checked);
      // validate image    
      //      console.log(' form model ,',form.model[].value
      //  ,' size ',form.size.value,' colour ',form.colour[].value) ;
      if (form.prdfile.value.length < 1) {
        toastr.error('pls add image ..');
        return;
      }
      //  alert() ;
      //return ;
      if (form.productname.value.length < 1) {
        toastr.error('please add product name ..');
        return;
      }
      // if ((/\d/.test(form.productname.value))) {
      //   toastr.error('product name should contain only letters ......');
      //   return;
      // }
      if (!(/\d+$/.test(form.productprice.value))) {
        toastr.error('product price should contains numbers only');
        return;
      }
      if (form.categoryid.value.length < 1 || form.categoryid.value === '') {
        toastr.error('please select category');
        return;
      }
      if (form.subcategoryid.value.length < 1 || form.subcategoryid.value === '') {
        toastr.error('please select sub category');
        return;
      }
      if (form.productcode.value.length < 1) {
        toastr.error("product code cannot be empty");
        return;
      }
      if (form.metatitle.value.length < 1) {
        toastr.error("meta title cannot be empty");
        return;
      }
      if (form.tax.value.length < 1) {
        toastr.error("tax cannot be empty");
        return;
      }
      // if (form.expirydate.value.length < 1) {
      //   toastr.error("expiry date cannot be empty");
      //   return;
      // }
      // if (form.size.value.length < 1) {
      //   toastr.error("size cannot be empty");
      //   return;
      // }
      if (form.shortsummary.value.length < 1) {
        toastr.error("short summary cannot be empty");
        return;
      }
      if (form.metadescription.value.length < 1) {
        toastr.error("metadescription cannot be empty");
        return;
      }
      if (enable.checked !== true && disable.checked !== true) {
        toastr.error('pls check either enable or disable');
        return;
      }
      if (newprod.checked !== true && oldprod.checked !== true && refurbished.checked !== true) {
        toastr.error('please check new or old or refurbished');
        return;
      }
      if (CKEDITOR.instances.editor1.getData().length < 1) {
        toastr.error("description cannot be empty");
        return;
      }
      const prdform = new FormData(form);
      prdform.append('proddescription', CKEDITOR.instances.editor1.getData());
      const vendorname = localStorage.getItem('vendorname') as string;
      // console.log('vendorname',vendorname);
      prdform.append('vendorname', vendorname);
      prdform.append('manysizes', $('#sizesofproduct').val());
      prdform.append('colour', $('#colourofproduct').val());
      prdform.delete('model');// removes id
      prdform.append('model', $('#model').val().split(','));
      // console.log(' id ',$("#id").val()) ;
      if ($("#id").val() === null || $("#id").val() === undefined || $("#id").val() === '') {
        //alert($("#id").length)
        prdform.delete('id');// removes id
        console.log(' size by id ,', $('#sizesofproduct').val());
        console.log(' colour by id ,', $('#colourofproduct').val());
        prdform.delete('size[]');// removes size 
        prdform.delete('colour[]');// removes size 
        console.log('without id');
        console.log(' form ', Object.fromEntries(prdform));
        prod.saveproduct(prdform);
        //return ;
      } else {
        console.log('with id', Object.fromEntries(prdform));
        // console.log(' form ',Object.fromEntries(prdform)) ;
        // prdform.delete('id');// removes id
        // return ;
        prod.saveproduct(prdform);
      }
      // reset form 
      // return ;
      setTimeout(() => {
        // form.reset() ; 
      }, 1500);
    } else if (result.isDismissed) {
      Swal.fire({
        icon: 'error',
        text: 'No product added.',
      });
    }
  });

});
// for language change 
$('.language-dropdown').on('click', (e: any) => {
  e.preventDefault();
  console.log(e);
  if (e.target.lastChild.data === 'English') {
    alert(e.target.lastChild.data);
  } else if (e.target.lastChild.data === 'Spanish') {
    alert(e.target.lastChild.data);
  } else if (e.target.lastChild.data === 'Portuguese') {
    alert(e.target.lastChild.data);
  } else if (e.target.lastChild.data === 'French') {
    // alert(e.target.lastChild.data) ;
    alertify.confirm('Confirmer la langue', 'Voulez-vous changer en français', function () {
      $('[data-localize]').localize('../dist/mylanguages/mylanguage', { language: 'fr' });
      alertify.success("D'accord")
    }
  , function () { alertify.error('Annuler') }).set('labels', { ok: 'Bien!', cancel: 'Naa!' });;
  } else if (e.target.lastChild.data === 'German') {
    alert(e.target.lastChild.data);
  } else if (e.target.lastChild.data === 'Arabic') {
    alert(e.target.lastChild.data);
  } else if (e.target.lastChild.data === 'Swahili') {
    alert(e.target.lastChild.data);
  } else if (e.target.lastChild.data === 'Yoruba') {
    alert(e.target.lastChild.data);
  } else if (e.target.lastChild.data === 'Igbo') {
    alertify.confirm('Kwenye asusu', 'Chọrọ ịgbanwe na Igbo', function () {
      $('[data-localize]').localize('../dist/mylanguages/mylanguage', { language: 'ig' });
      alertify.success("Dịkwa mma")
    }
  ,function () { 
    alertify.error('Ikagbu') }).set('labels', { ok: 'Ọ dị mma!', cancel: 'Naa!' 
      });;
  } else if (e.target.lastChild.data === 'Hausa') {
    alert(e.target.lastChild.data);
  }
});
// check for  vendorowner 
const owner = (vendorowner: boolean | null, yes: HTMLInputElement, no: HTMLInputElement) => {
  console.log('yes', yes.checked, 'no', no.checked);
  if (no.checked || !no.checked) {
    vendorowner = false;
  }
  if (yes) {
    vendorowner = yes.checked;
  }
  console.log('vendorowner', vendorowner, 'yes', yes.checked, 'no', no.checked);
};
// process user creation 
$('#submituser').on('click', (e: any) => {
  e.preventDefault();
  e.stopPropagation();
  const user = new User();
  // get  data  from page 
  //role is assigned from the back end 
  const form1 = JSON.parse($('#userdetails').jform());
  let userdetails: any = document.getElementById('userdetails');
  const [yes, no] = Array.from(userdetails.vendorowner);
  //console.log("checking  form1 ", form1, " value ", yes.value);
  let vendorowner = false;
  if (yes.checked) {
    let ans = confirm("Do you want to make this user a owner ?");
    if (ans) {
      vendorowner = yes.checked;
    }
  }
  // if (no.checked) {
  //   vendorowner = no.checked;
  //    }
  if (form1.firstname.length < 1) {
    $('#usererror').empty().html('<br/><div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' +
      'Empty firstname' + ' !</div>');
    return;
  }
  //console.log('form1.firstname ',form1.firstname);
  //form1.firstname  = $.trim(form1.firstname) ;
  if (!(/^[a-zA-Z]{3,20}$/.test(form1.firstname))) {
    // alert(form1.firstname);
    $('#usererror').empty().html('<br/><div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '
      + 'Only letters are expected' + ' !</div>');;
    return;
  }
  // console.log('form1.firstname2 ',form1.firstname);
  if (form1.lastname.length < 1) {
    $('#usererror').empty().html('<br/><div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' +
      'Empty lastname' + ' !</div>');;
    return;
  }
  if (!((/^[a-zA-Z ]+$/).test(form1.lastname))) {
    //  alert('last');
    $('#usererror').empty().html('<br/><div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '
      +
      'Only letters are expected' + ' !</div>');;
    return;
  }
  //  if(form1.email.length<1){
  //   $('#usererror').empty().html('<br/><div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+
  //   'wrong format of email' +' !</div>');
  //   return ;
  //     }    
  if (form1.password !== form1.confirmPassword) {
    $('#usererror').empty().html('<br/><div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '
      + 'Password/confirm password does not match' + ' !</div>');;
    return;
  }
  if (!yes.checked && !no.checked) {
    $('#usererror').empty().html('<br/><div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' +
      'Either options must be  checked for  vendor' + ' !</div>');
    return;
  }
  const form2 = JSON.parse($('#userpermission').jform());
  // console.log('form1 ',form1,'form2 ',form2) ;   
  let permission = Object.values(form2);
  console.log('permission ', permission);
  permission = permission.filter(r => {
    if (r !== 'on') {
      //  console.log(r);
      return true;
    }
  });
  // filtering the array 
  // console.log(" permission ",permission) ;
  if ($.isEmptyObject(permission)) {
    toastr.error('no permissions are selected....');
    return;
  }
  if (userdetails.userstatus.checked) {
    form1.userstatus = '1';
  } else {
    form1.userstatus = '0';
  }
  form1.permission = permission;
  form1.role = [];
  // form1.vendoroption=vendoroption ;
  form1.vendorname = localStorage.getItem('vendorname') // get it  from  from localstorage 
  // console.log("form1 ", form1);
  // decide  how form1 will be submitted 
  // let username = $('#usersearch').val();
  // console.log('username ',username) ;
  if (!$.isEmptyObject(form1.password) && !$.isEmptyObject(form1.confirmPassword)) {
    owner(vendorowner, yes, no);
    form1.vendorowner = vendorowner;
    console.log(' form1.vendorowner ', form1.vendorowner);
    delete form1['usersearch'];
    console.log('sending as  new user ......');
    Swal.fire({
      icon: 'question',
      // title: 'User creation',
      text: 'Do you want to create this user ?',
      showCancelButton: true,
      allowOutsideClick: false,
    }).then((result: any) => {
      if (result.isConfirmed) {
        if (userdetails.userstatus.checked) {  // check  if activated
          user.save(form1, localStorage.getItem('token'), 'put', () => {
            Swal.fire({
              icon: "success",
              text: "User is created and activated successfully.Account activation email sent shortly"
            });
          }, () => {
            Swal.fire({
              icon: "error",
              text: "Oops.Operation failed.check your connection"
            })
          });  // send as new user 
        } else {
          user.save(form1, localStorage.getItem('token'), 'put', () => {
            Swal.fire({
              icon: "success",
              text: "User is created successfully but have not been activated"
            });
          }, () => {
            Swal.fire({
              icon: "error",
              text: "Oops.Operation failed.check your connection"
            })
          });  // send as new user 
        }
      } else if (result.isDismissed) {
        Swal.fire({
          icon: "error",
          text: "cancelled"
        })
      }
    });
  }
  // dont  forget , this page is for admin of every vendor not for supervisor 
  // so by default , there can  only be  one user vendor owner in a  vendor
  if ($.isEmptyObject(form1.password) && $.isEmptyObject(form1.confirmPassword)) {
    Swal.fire({
      icon: 'question',
      //title: 'User creation',
      text: 'Do you want to create this user ?',
      showCancelButton: true,
      allowOutsideClick: false,
    }).then((result: any) => {
      let id = $('#usersearch').val();
      console.log('id', id);
      owner(vendorowner, yes, no);
      form1.vendorowner = vendorowner;
      delete form1['usersearch'];
      delete form1['password'];
      delete form1['confirmPassword'];
      console.log('updating  user .....', form1);
      form1.id = id; // append the  id  of the elected user  to the json and send for update
      if (result.isConfirmed) {
        if (userdetails.userstatus.checked) {
          user.save(form1, localStorage.getItem('token'), 'put', () => {
            Swal.fire({
              icon: "success",
              text: "User is activated.Account activation email sent shortly"
            });
          }
            , () => {
              Swal.fire({
                icon: "error",
                text: "Oops.Operation failed.Check your connection"
              })
            });
        } else {
          user.save(form1, localStorage.getItem('token'), 'put', () => {
            Swal.fire({
              icon: "success",
              text: "User created but have not been activated"
            });
          }
            , () => {
              Swal.fire({
                icon: "error",
                text: "Oops.Operation failed.Check your connection"
              })
            });
        }
      } else if (result.isDismissed) {
        Swal.fire({
          icon: "error",
          text: "cancelled"
        })
      }
    });
  }
})
//personal profile,email,logout
$('.profile-dropdown').on('click', (e: any) => {
  //use  event delegation from parent  to  children 
  e.stopPropagation();
  if (e.target.lastChild.data === "Edit Profile") {
    // invoke  the dialog box 
    console.log("calling dialog");
    $(dialog((function () {
      return `
          <form class="needs-validation" id="profileform">
           <div class="form">           
              <div class="form">             
              <div class="form">
              <div class="form-group">
                  <label for="validationCustom01" class="mb-1">Location(states or city)* :</label>
                  <input class="form-control" id="validationCustom01" type="text" name="location" />
              </div>
              <div class="form-group">
                  <label for="validationCustom01" class="mb-1">Gender* :</label>
                  <select name="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  </select>
              </div>
              <div class="form">
              <div class="form-group">
                  <label for="validationCustom01" class="mb-1">Mobile* :</label>
                  <input class="form-control" id="validationCustom01" type="text" name="mobilenumber" />
              </div>
              <div class="form-group mb-0">
              <label for="validationCustom02" class="mb-1">Address* :</label>
              <input class="form-control" id="validationCustom02" type="text" name="address">
              </div>
              <div class="form-group mb-0">
              <label for="validationCustom02" class="mb-1">Profile Picture* :</label>
              <input class="form-control" id="validationCustom02" type="file" name="profilepict">
          </div>
          </div>
          </form>
          ` ;
    })(), (function () {
      return `
          <h5 class="modal-title f-w-600" id="exampleModalLabel">Update your Profile</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
          ` ;
    })(), (function () {
      return `
          <button class="btn btn-primary" type="button" onclick="updateprofile('profileform')">Update</button>
          ` ;
    })())).insertAfter(".page-main-header");
    console.log('set dialog');
    //invoke the dialog box 
    const mydialogpos: any = document.querySelector(".modal-dialog");
    mydialogpos.classList.add(`modal-dialog-centered`); // center  it vertically
    // call ajax to  prefill form
    //  ajaxcall(`${backendurl}/profile/{userid}`,"",'get','json','application/json') ;
    let results = {} as jsonresult;
    //process asyn calls  
    console.log(' calling  userid ', localStorage.getItem('ack'));
    // results = processrequest(`${backendurl}/profile/profile/${localStorage.getItem('ack')}`, "", "get", "application/json",localStorage.getItem('token'));         
    fetch(`${backendurl}/profile/profile/${localStorage.getItem('ack')}`, {
      method: 'get',
      credentials: 'same-origin',
      headers: {
        'Content-Type': "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      },
      // body:JSON.stringify(form)
    }).then(response => {
      if (response.status != 200) {
        throw new Error("network access  error");
      }
      return response.json();
    }).then(r => {
      console.log('r in function ', r);
      $("#profileform").autofill(r);
    });
    $('#exampleModal').modal('show');//show modal
  } else if (e.target.lastChild.data === "Inbox") {
    console.log("inbox");
  } else if (e.target.lastChild.data === "Lock Screen") {
    console.log("lock screen");
  } else if (e.target.lastChild.data === "Settings") {
    console.log('settings');
  } else if (e.target.lastChild.data === "Logout") {
    console.log("logout");
  }
  else if (e.target.lastChild.data === "Change Logo") {
    // $(dialog("", "", "")).insertAfter(".back-btn");
    //invoke the dialog box 
    alertify.confirm("Do you want to change Logo?",
      function () {
        $(dialog("", "", "")).insertAfter(".page-main-header");
        const mydialogpos: any = document.querySelector(".modal-dialog");
        mydialogpos.classList.add(`modal-dialog-centered`); // center  it verticallycl
        $(".modal-header").html((() => {
          return (
            <h5 className="modal-title f-w-600" id="exampleModalLabel">Upload Logo:</h5>
          );
        })());
        $(".modal-body").html((() => {
          return (
            <form className="needs-validation" id="regform">
              <div className="form-group">
                <label for="exampleFormControlFile1"><small>Upload your Logo?</small></label>
                <input type="file" className="form-control-file" id="logo" name="logo" />
              </div>
            </form>
          )
        })());
        $(".modal-footer").html((() => {
          function handleClick() {
            const htmlform: any = document.getElementById('regform')
            const input1: any = htmlform?.logo;
            // console.log('input1 ',input1.files);
            //  console.log('input1 ',input1.files[0].name);
            if (input1.value === "" || input1.value === undefined) {
              toastr.error("no file is  choosen");
              alertify.error('No file is choosen');
              return;
            }
            // console.log(input1);
            // send to server 
            const data = new FormData();
            data.append("vendorlogo", input1.files[0]);
            // /assets/images/dashboard/crista.png class blur up
            ///assets/images/dashboard/man.png
            const imglogo: any = document.getElementsByClassName('vendorlogo');
            console.log('img ', imglogo, ' logo ', input1.files[0].name, ' url ', `${backendurl}/jetstore/${input1.files[0].name}`);
            imglogo[0].src = `${backendurl}/jetstore/${input1.files[0].name}`;
            imglogo[1].src = `${backendurl}/jetstore/${input1.files[0].name}`;
            const vendor: string = localStorage.getItem('vendorname') as string;
            console.log('vendorname ', vendor);
            data.append("vendorname", vendor);
            $('#exampleModal').modal('hide');
            //$('#exampleModal').modal('dispose') ;
            setTimeout(() => {
              $('#exampleModal').remove();//remove from the dom after some seconds
            }, 1500);
            submitform(`${backendurl}/vendor/vendor`, data, localStorage.getItem('token'), 'text', 'post');
            //toastr.success("successfully uploaded");         
          }
          function close() {
            setTimeout(() => {
              $('#exampleModal').remove();//remove from the dom after some seconds
            }, 1500);
            $('#exampleModal').modal('hide')
          }
          return (<div>
            <button className="btn btn-primary" type="button" onClick={handleClick}>Upload</button>
            &nbsp;&nbsp;&nbsp;
            <button className="btn btn-secondary" type="button" onClick={close}>Close</button>
          </div>
          );
        })());
        //toastr.error('No vendor name or unchecked options');
        $('#exampleModal').modal('show');//show modal
        //alertify.success('Ok');
      },
      function () {
        alertify.error('Cancel');
      });
  }
});
function Headline(): any {
  console.log("calling jsx");
  return (
    <h5 className="headline">Inital</h5>
  );
}
const profilesummary = (email: string, firstname: string, lastname: string, pic: string): any => {
  return (
    <div>
      <img src={pic} alt="" className="img-fluid img-90 rounded-circle blur-up lazyloaded" />
      <h5 className="f-w-600 mb-0">{firstname + " " + lastname}</h5>
      <span>{email}</span>
      <div className="social">
        <div className="form-group btn-showcase">
          <button className="btn social-btn btn-fb d-inline-block"> <i className="fa fa-facebook"></i></button>
          <button className="btn social-btn btn-twitter d-inline-block"><i className="fa fa-google"></i></button>
          <button className="btn social-btn btn-google d-inline-block mr-0"><i className="fa fa-twitter"></i></button>
        </div>
      </div>
    </div>
  );
};
const fullprofile = (resObject: any, email: string, dob: string, location: string): any => {
  return (<div>
    <h5 className="f-w-600">Profile</h5>
    <div className="table-responsive profile-table">
      <table className="table table-responsive">
        <tbody>
          <tr>
            <td>First Name:</td>
            <td>{resObject.firstname}</td>
          </tr>
          <tr>
            <td>Last Name:</td>
            <td>{resObject.lastname}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>{resObject.gender}</td>
          </tr>
          <tr>
            <td>Mobile Number:</td>
            <td>{resObject.mobilenumber}</td>
          </tr>
          <tr>
            <td>DOB:</td>
            <td>{dob}</td>
          </tr>
          <tr>
            <td>Location:</td>
            <td>{location}</td>
          </tr>
        </tbody>
      </table>
    </div></div>);
};

//this is to enable typescript build jsx by default as configured in tsconfig.json

// const appendChild = (parent, child) => {
//   if (Array.isArray(child))
//     child.forEach((nestedChild) => appendChild(parent, nestedChild))
//   else
//     parent.appendChild(
//       child.nodeType ? child : document.createTextNode(child)
//     )
// };

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
const Header = () => {
  return (
    <h5 className="modal-title f-w-600" id="exampleModalLabel">More Info:</h5>
  );
}
const finalreg = (e: any) => {
  alert();
};
const Footer = () => {
  function handleClick(e: any) {
    e.preventDefault();
    let form1 = JSON.parse($('#contactform').jform());
    console.log('The link was clicked.');
    let form2 = JSON.parse($('#regform').jform());
    //form1 = {form1, ...form2}
    const htmlform: any = document.getElementById('regform');
    let [input1, input2] = Array.from(htmlform?.vendor);
    console.log("form i is ", input1.value, " and 2 is ", input2.value);
    // toastr.error('No vendor name or unchecked options');
    let vendorowner = false;
    console.log(' htmlformname ', htmlform.vendorname.value);
    if (htmlform.vendorname.value.length < 1) {
      toastr.error('No vendor name or unchecked options');
      throw new Error("error of input");
      return;
    }
    console.log(' firstname ', form2.firstname, new String(form2.firstname).length == 0, ' lastname ', form2.lastname);
    if (new String(form2.firstname).length == 0) {
      toastr.error('firstname cannot be  empty');
      throw new Error('error');
    }
    if (form2.lastname.length === 0) {
      toastr.error('lastname cannot be  empty');
      throw new Error('error');
    }
    if (input1.checked === false && input2.checked === false) {
      Swal.fire({
        icon: 'error',
        text: 'Options are not checked !',
      });
      return;
    }
    if (input1.checked === true) {
      vendorowner = true;
      // alert('1 on ');
      form1.vendorowner = vendorowner;
    } else if (input2.checked === true) {
      vendorowner = false;
      // form1.vendoroption = form2.vendor;
      form1.vendorowner = vendorowner;
      // alert('2 on ') ;
    }
    console.log(" form1 ", form1);
    // form1  = {...form2,vendoroption:vendoroption}
    form1.vendorname = form2.vendorname;
    form1.firstname = form2.firstname;
    form1.lastname = form2.lastname;
    console.log(" form1 ", form1);
    form1.role = [];
    form1.permission = [];
    const reg = new register();
    const msg = () => {
      if (input1.checked === true) {
        // alert('1 on');
        Swal.fire({
          icon: 'success',
          text: 'Registration Successful! You will receive an email through which you will activate your account soonest',
        }).then((result: any) => {
          if (result.isConfirmed) {
            console.log('cancelling');
            // Swal.close();
            window.location.href = '../adminlogin';
          }
        });
      } else if (input2.checked === true) {
        //  alert('2 on ');
        Swal.fire({
          icon: 'success',
          text: 'Registration Successful! Contact your administrator to activate your account.',
        }).then((result: any) => {
          if (result.isConfirmed) {
            console.log('cancelling');
            //Swal.close();
            window.location.href = '../adminlogin';
          }
        });
      }
    };
    const errormg = () => {
      Swal.fire({
        icon: 'error',
        text: 'Oops.Check your connection!',
      });
    };
    reg.register(form1, msg, errormg);
    $('#exampleModal').modal('hide'); //show modal
    // $('#exampleModal').modal('dispose');//show modal
    const mydialogpos: any = document.querySelector(".modal");
    mydialogpos.remove();
  }
  return (
    <button className="btn btn-primary" type="button" onClick={handleClick}>Continue</button>
  );
}
const RegForm = () => {
  return (
    <form className="needs-validation" id="regform">
      <div className="form-group">
        <label for="exampleFormControlFile1"><small>What is the name of your vendor?</small></label>
        <input type="text" className="form-control-file" id="vendorname" name="vendorname" />
      </div>
      <div className="form-group">
        <label for="exampleFormControlFile1"><small>What is your firstname?</small></label>
        <input type="text" className="form-control-file" id="firstname" name="firstname" />
      </div>
      <div className="form-group">
        <label for="exampleFormControlFile1"><small>What is your lastname?</small></label>
        <input type="text" className="form-control-file" id="lastname" name="lastname" />
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="vendor" />
        <label className="form-check-label" for="defaultCheck1">
          Yes,I'm a Vendor Owner
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="vendor" />
        <label className="form-check-label" for="defaultCheck2">
          No,I belong to a Vendor
        </label>
      </div>
    </form>
  );
}
//register form
$('#contactform').submit('submit', (e: any) => {
  e.preventDefault();
  //invoke a dialog
  let contactform: any = document.getElementById('contactform');
  if (contactform?.password.value !== contactform?.confirmPassword.value) {
    Swal.fire({
      icon: 'error',
      text: 'Password does not match!',
    });
    return;
    //  $('#regerror').empty().html('<br/><div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+'both password and password confirmation must be the same' +' !</div>');
    // return ;   
  }
  $(dialog("", "", "")).insertAfter(".back-btn");
  //invoke the dialog box 
  const mydialogpos: any = document.querySelector(".modal-dialog");
  mydialogpos.classList.add(`modal-dialog-centered`); // center  it verticallycl
  $(".modal-header").html(Header());
  $(".modal-body").html(RegForm());
  $(".modal-footer").html(Footer());
  //toastr.error('No vendor name or unchecked options');
  let agree: any = document.getElementById('customControlAutosizing1');
  if (!agree.checked) {
    toastr.error("you have not agreed to terms");
    return;
  }
  $('#exampleModal').modal('show');//show modal
});
// create coupon 
$('#savecoupon').on('click', (e: any) => {
  e.preventDefault();
  Swal.fire({
    icon: 'question',
    // title: 'Multi-Vendor Owner',
    text: 'Do you want to create coupon on this product ?',
    showCancelButton: true,
    allowOutsideClick: false,
  }).then((result: any) => {
    if (result.isConfirmed) {
      let general = JSON.parse($('#general2').jform());
      //  console.log('general ', general, 'coupontitle', general.coupontitle);
      let usage = JSON.parse($('#usage2').jform());  //usage
      // console.log('usage ', usage, ' perlimit ', usage.perlimit);
      let rest = JSON.parse($('#rest').jform());
      // console.log('rest ', rest, ' maxspend ', rest.maxspend);
      //const totalform = $.extend(($.extend(usage,general)),rest);
      const total = { ...general, ...rest, ...usage }
      // console.log('total ', { ...general, ...rest, ...usage }, 'minspend ', total.minspend);
      // check
      if (total.maxspend.length < 1 || total.minspend.length < 1 ||
        total.percustomer.length < 1 ||
        total.perlimit.length < 1 || total.couponqty.length < 1) {
        toastr.error('Empty input  is  not permitted');
        return
      }
      if (total.couponcategory.length < 1 || total.coupontitle.length < 1
        || total.enddate.length < 1 || total.startdate.length < 1) {
        toastr.error('Empty input  is  not permitted');
        return
      }
      if (parseInt(total.maxspend) < 0 || parseInt(total.minspend) < 0
        || parseInt(total.percustomer) < 0 ||
        parseInt(total.perlimit) < 0 ||
        parseInt(total.couponqty) < 0 || parseInt(total.discountype) < 0) {
        console.log('entered if ');
        // Swal.fire({
        //   icon: "error",
        //   text: "Negative inputs not permitted"
        // }).then((r: any) => {
        //   if (r.isDismissed) {
        //     return;
        //   }
        // })
        toastr.error('Empty 3 input  is  not permitted');
        return;
      }
      total.couponproductid = total.prodsearch;
      total.vendor = localStorage.getItem('vendorname');
      const freeshippingstatus = document.getElementById('checkbox-primary-1') as HTMLInputElement;
      const couponstatus = document.getElementById('checkbox-primary-2') as HTMLInputElement;
      if (freeshippingstatus.checked) {
        total.freeshipping = 'yes';
      } else {
        total.freeshipping = 'no';
      }
      if (couponstatus.checked) {
        total.couponstatus = 'yes';
      } else {
        total.couponstatus = 'no';
      }
      delete total.prodsearch;
      console.log('final product search ...', total);
      //send to server 
      const mycoupon = new coupon();
      mycoupon.savecoupon(total);
    } else if (result.isDismissed) {
      Swal.fire({
        icon: "error",
        text: "cancelled"
      })
    }
  });
});
// add sub-category for physical product
$('#catsub').on('click', (e: any) => {
  e.preventDefault();
  $(dialog("", "", "")).insertAfter(".page-main-header");
  //invoke the dialog box
  const mydialogpos: any = document.querySelector(".modal-dialog");
  mydialogpos.classList.add(`modal-dialog-centered`); // center  it verticallycl
  $(".modal-header").html((() => {
    return (<h5 className="modal-title f-w-600" id="exampleModalLabel">Add Sub-Category </h5>);
  })());
  $('.modal-body').html((() => {
    function loadcategory(e: any) {
      // load product from  here 
      e.preventDefault();
      // append  to  category  from  here 
      processrequest2(`${backendurl}/categories/category`, 'get', {
        'Content-Type': "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }, (r: any) => {
        let options = new StringBuilder();
        //console.log('r', r)
        options.append(`<option value=''>Select Category</option>`);
        for (let cat of r) {
          // console.log( ' id ',cat.id) ;
          options.append(`<option value='${cat.id}'>${cat.categoryname}</option>`);
          //console.log( ' id ',cat.id) ;
        }
        //append category 
        $('#prdcategory').empty().html(options.toString());
      });
    }
    return (
      <form className="needs-validation" id="catform">
        <div className="form">
          <div className="form-group">
            <label for="validationCustom01" className="mb-1">Sub Category Name :</label>
            <input className="form-control" id="validationCustom01" type="text" name="subcategoryname" />
          </div>
          <div className="form-group">
            {/* <label for="validationCustom01" class="mb-1">Category</label>  */}
            <select className="form-control" id="prdcategory" name="categoryid">
              <option value="">Select Category</option>
            </select>
          </div>
          <div className="form-group">
            <label for="validationCustom01" className="mb-1">Price Range:</label>
            <input className="form-control" id="validationCustom03" type="text" name="pricerange" />
          </div>
          <div className="form-group mb-0">
            <label for="validationCustom02" className="mb-1">Sub Category Image :</label>
            <input className="form-control" id="validationCustom02" type="file" name="imageur" />
          </div>
        </div>
      </form>
    );
  })())
  $(".modal-footer").html((() => {
    function savesubCategory(e: any) {
      e.preventDefault();
      processphysicalanddigitalcategory('post', 'Sub Category', `${backendurl}/subcat/createsubcategory`, 'Do you want to create sub-category', 'catform', "sub category created successfuly", 'error creating category');
    }
    function close(e: any) {
      e.preventDefault();
      $('#exampleModal').modal('hide');
      setTimeout(() => {
        $('#exampleModal').remove();
      }, 800);
    }
    return (<div>
      <button className="btn btn-primary" type="button" onClick={(e) => savesubCategory(e)}>Save</button>&nbsp;&nbsp;&nbsp;
      <button className="btn btn-secondary" type="button" data-dismiss="modal" onClick={(e) => close(e)}>Close</button>
    </div>)
  })());
  $('#exampleModal').modal('show');//show modal
  //then append  category to select 
  $('#prdcategory').empty().html(
    // append  to  category  from  here 
    processrequest2(`${backendurl}/categories/category`, 'get', {
      'Content-Type': "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }, (r: any) => {
      let options = new StringBuilder();
      //console.log('r', r)
      options.append(`<option value=''>Select Category</option>`);
      for (let cat of r) {
        // console.log( ' id ',cat.id) ;
        options.append(`<option value='${cat.id}'>${cat.categoryname}</option>`);
        //console.log( ' id ',cat.id) ;
      }
      //append category 
      $('#prdcategory').empty().html(options.toString());
    }));
})

//add category for physical  products
$('#savecategory').on('click', (e: any) => {
  e.preventDefault();
  $(dialog("", "", "")).insertAfter(".page-main-header");
  //invoke the dialog box 
  const mydialogpos: any = document.querySelector(".modal-dialog");
  mydialogpos.classList.add(`modal-dialog-centered`); // center  it verticallycl
  $(".modal-header").html((() => {
    return (<h5 className="modal-title f-w-600" id="exampleModalLabel">Add Physical Product</h5>);
  })());
  $(".modal-body").html((() => {
    return (<form className="needs-validation" id="catform">
      <div className="form">
        <div className="form-group">
          <label for="validationCustom01" class="mb-1">Category
            Name :</label> <input className="form-control" id="validationCustom01"
              type="text" name="categoryname" />
        </div>
        <div className="form-group">
          <label for="validationCustom01" class="mb-1">Price Range
            Name :</label> <input className="form-control" id="validationCustom01"
              type="text" name="pricerange" />
        </div>
        <div className="form-group mb-0">
          <label for="validationCustom02" class="mb-1">Category Image
            :</label> <input className="form-control" id="validationCustom02"
              type="file" name="imageurl" />
        </div>
      </div>
    </form>);
  })());
  $(".modal-footer").html((() => {
    function saveCategory(e: any) {
      e.preventDefault();
      processphysicalanddigitalcategory('post', 'Category', `${backendurl}/categories/category`, 'Do you want to create category', 'catform', "category created successfuly", 'error creating category')
    }
    function close(e: any) {
      e.preventDefault();
      $('#exampleModal').modal('hide');
      setTimeout(() => {
        $('#exampleModal').remove();
      }, 800);
    }
    return (<div>
      <button className="btn btn-primary" type="button" onClick={(e) => saveCategory(e)}>Save</button>&nbsp;&nbsp;&nbsp;
      <button className="btn btn-secondary" type="button" data-dismiss="modal" onClick={(e) => close(e)}>Close</button>
    </div>)
  })());
  //toastr.error('No vendor name or unchecked options');
  $('#exampleModal').modal('show');//show modal
}
);
const processphysicalanddigitalcategory = (methodtype: string, title: string, url: string,
  confirmmsg: string, formid: string,
  successmsg: string,
  errormsg: string) => {
  alertify.confirm(title, confirmmsg, function () {
    const form = document.getElementById(formid) as HTMLFormElement;
    const formdata = new FormData(form);
    console.log(' select ', $("#prdcategory:selected").val());
    // alert(formdata.get('subcategoryname') + " categoryid "+ formdata.get('categoryid')) ;
    $('#exampleModal').modal('hide')
    setTimeout(() => {
      // $('#exampleModal').hide();
      $('#exampleModal').remove();
      console.log('resetting tables ');
      $("#basicScenario2").jsGrid("loadData");
      console.log('reset table ');
    }, 2000);
    submitform(url, formdata, localStorage.getItem('token'), 'text', methodtype);//send form
  },
    function () {
      alertify.error(errormsg).set('labels', { ok: 'OK!', cancel: 'Naa!' });
    }
  );

};

// logout
$('#logoutme').on('click', (e: any) => {
  e.preventDefault();
  console.log('log out ');
  Swal.fire({
    icon: 'question',
    // title: 'Multi-Vendor Owner',
    text: 'Do you want to Log out ?',
    showCancelButton: true,
    allowOutsideClick: false,
  }).then((result: any) => {
    if (result.isConfirmed) {
      sessionStorage.clear();
      window.location.href = '../adminlogin';
    }
  });
});

// donwload excel 
const downloads = (element: any, name: (string | null), url: string) => {
  element.on('click', (e: any) => {
    e.preventDefault();
    // alert() ;
    Swal.fire({
      icon: "question",
      showCancelButton: true,
      text: "Do you want to downloads the excel file ?"
    }).then((r: any) => {
      if (r.isConfirmed) {
        fetch(url, {
          method: 'get',
          headers: {
            //  'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json; charset=utf-8',
            //'Content-Type':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            responseType: "blob",
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          // body: JSON.stringify( {} )
        })
          .then(response => response.blob())
          .then(response => {
            // element.text('downloading') ;
            const blob = new Blob([response], { type: 'application/application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
            const downloadUrl = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = downloadUrl;
            a.download = `${name}.xlsx`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            //  element.text('download as excel') ;
          })
      } else if (r.isDismissed) {
        toastr.error("The attempt was  cancelled");
      }
    });
  })
}
// imglogo[0].src = `${backendurl}/jetstore/${input1.files[0].name}`;
// imglogo[1].src = `${backendurl}/jetstore/${input1.files[0].name}`;
// category

//send message 
const sendmessage = (e: any) => {
  let selecttyperadio = Array.from(document.getElementsByName('selectype') as NodeListOf<HTMLInputElement>);
  e.preventDefault();
  alertify.confirm('Message', 'Do you want to send this Message', function () {
    const message = CKEDITOR.instances.editor1.getData() as string;
    console.log('calling');
    // call event subscription 
    $.ajax({
      url: `${backendurl}/dispatchEvent`,
      type: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      dataType: 'text',
      data: (function () {
        let [inp1, inp2, inp4] = selecttyperadio; // destructuring of aray of radio buttons
        if (inp1.checked) {
          return "freshNews=" + message + "&vendorname=" + $('#userandvendor').val()
        } else if (inp2.checked) {
          console.log('freshnews ', message, 'userid ', $('#userandvendor').val());
          return "freshNews=" + message + "&userid=" + $('#userandvendor').val()
        } else if (inp4.checked) {
          return "freshNews=" + message
        }
      })(),
      success: function (response: any) {
        console.log('response ' + response);
      }
    });
  }, function () { alertify.error('Cancel') });
};
$('#sendmessage').on('click', (e: any) => {
  // sendmessage(e);
  sendmessage(e);
});
const sendmessageversion2 = (e: any) => {
  e.preventDefault();
  let selecttyperadio = Array.from(document.getElementsByName('selectype') as NodeListOf<HTMLInputElement>);
  let [inp1, inp2, inp4] = selecttyperadio; // destructuring of aray of radio buttons
  if (inp1.checked) {
    let users_Selected = $('#userandvendor').val();
    users_Selected.forEach((element: any) => {
      console.log(' element ', element);
    });
  } else if (inp2.checked) {
    let users_Selected = $('#userandvendor').val();
    users_Selected.forEach((element: any) => {
      console.log(' element ', element);
    });
  } else if (inp4.checked) {
    // subscribetoevent(new EventSource(`${backendurl}/subscribe`),'latestNews') ; 
    //setTimeout(sendmessage(e,selecttyperadio),1000) ;
  }
}
//page load processing
const subscribetoevent = (eventSource: EventSource, evtype: string) => {
  // var eventSource = new EventSource(url);
  // var eventSource = new EventSource(url);
  eventSource.addEventListener(evtype, (event: any) => {
    if (event.data) {
      console.log('from dispatch event ', event.data);
      toastr.success('An Order is placed');
    //  var beepsound = new Audio('https://www.soundjay.com/button/sounds/beep-01a.mp3');
    responsiveVoice.speak('An order is placed.',"US English Female", {volume:20,pitch:0.8}); 
      // alertify.success('Ok');
      eventSource.close();
      console.log($('#ordercounter').text()) ;
     // alert($('#ordercounter').text()) ;
     parseInt($('#ordercounter').text())===0?$('#ordercounter').text('1'):$('#ordercounter').text((parseInt($('#ordercounter').text())+1).toString()) ;
     // $('#ordercounter').text(parseInt($('#ordercounter').text())===0?'1':parseInt($('#ordercounter').text())+1);
      if(datatable!==null && datatable!== undefined){
        alert('reloading') 
        datatable.ajax.reload() ;
        alert('reload')
      }
      subscribetoevent(new EventSource(`${backendurl}/subscribe?vendorname=${localStorage.getItem('vendorname')}`),'vendornews');
    }
  });
  // eventSource.addEventListener("message", (event: any) => {
  //   if (event.data) {
  //     console.log('from dispatch event ', event.data);
  //     toastr.success('message sent successfully');
  //     alertify.success('Ok');
  //     eventSource.close();
  //   }
  // });
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
  // document.addEventListener("DOMContentLoaded", function () {
  //   requirejs(['@asmagin/google-translate-api'], function (translate:any) {
  //        translate('Ik spreek Engels', {to: 'ig'}).then((res) => {
  //        console.log('right',res.text);
  //        console.log(res.from.language.iso);   
  //            }).catch((err) => {
  //        console.error('error',err);
  //      });
  //       });
  //     });
async function translateString(str:string,translateTo:string){
     translate.engine="google";
     translate.key="AIzaSyDfqVwrOlZJTHGyxS7qnHdQ5XLqVME2EEY";
     const text  = await translate(str,translateTo);
     console.log(text);
} 
let datatable:any;  
let datatable2:any;  // resusable datatable
$('#orderproduct').on('click',function(e:Event){
  // alert($('#ordid').val()) ;
  if(confirm('Do you want to send message to this Customer ?')){
   const ordid  =  $('#ordid').val() ;
   const message = CKEDITOR.instances.editor2.getData() as string;
   if(message.length===0 || message===""||message==='Type message to send to this user'){
    const content  = contenttypewithtoken(localStorage.getItem('token')) ;   
    setajax('text', `${backendurl}/order/sendinfoonstock/${ordid}`, 'get', "",(response:any)=>{
      console.log('response',response) ;
      toastr.success('Message sent successfully') ;
    },()=>{},content);
      }else{
        toastr.error('the message cannot be empty') ;
        return ;
      } 
     }else{
      toastr.error('cancelled') ;
     }
})
//print div
function Popup(data:string) {
  var myWindow = window.open('', 'my div', 'height=400,width=600') ;
  myWindow.document.write('<html><head><title>my div</title>');
  /*optional stylesheet*/ //myWindow.document.write('<link rel="stylesheet" href="main.css" type="text/css" />');
  myWindow.document.write('</head><body >');
  myWindow.document.write(data);
  myWindow.document.write('</body></html>');
  myWindow.document.close(); // necessary for IE >= 10
  //myWindow.onload=function(){ // necessary if the div contain images
      myWindow.focus(); // necessary for IE >= 10
      myWindow.print();
      setTimeout(function(){window.close();}, 1); // for chrome
     // myWindow.close();
 // };
}
//generte invoice 
$('#geninvoice').on('click',()=>{
 if(confirm('Do you want to generate invoice')){
  //document.getElementById("luck").contentDocument.body.innerHTML = $('#tableattached').html();
  //  setTimeout(function(){
  //   luck.contentWindow.print();
  //  },
  //  10);
  setTimeout(function(){
    Popup($('#myprint').html());
  },200);
 }
}) ;

//view other attached order and also in trans
$('#viewattached').on('click',(e:any)=>{
  const content  = contenttypewithtoken(localStorage.getItem('token')) ;
  const ordid  = $('#orderid').val() ; 
  //alert(ordid) ;
  setajax('json', `${backendurl}/order/getorders/${ordid}`, 'get', "",(response:any)=>{
    console.log('response',response) ;
    //process the response
   // firstname,price,total,orderdate,productname,paymentstatus
   let myprint  = document.getElementById('myprint') as HTMLDivElement ;
  let body2  =  response.map((element:any)=>{
      console.log('element',element) ;
      return(`<tr><td>${element.ordid}</td><td>${element.paymentstatus}</td>
      <td>${element.ordstatus}</td><td>${element.orderdate}</td>
      <td>${element.total}</td><td>${element.firstname}</td>
      <td>${element.country}</td><td>${element.tax}</td>
      <td>${element.productname}</td><td>${element.price}</td>
      <td>${element.state}</td>
           </tr>`) ;
     }).join("") ;
  console.log("body2 "+body2) ;
  $('#myprint').empty().html(body2) ; //fill print
    //sendmailtocust(body2) ;
    $('#attachedorder').empty().html(body2) ;
    $('#tableattached').slideToggle() ;
  },()=>{},content) ;
}) ;
$('#closeorder').on('click',(e:Event)=>{
  $('#orderformbody').slideToggle() ;
  CKEDITOR.instances.editor2.destroy()
});
$('#viewclose').on('click',(e:Event)=>{
  $('#orderformbody').slideToggle() ;
  CKEDITOR.instances.editor2.destroy()
});
$('#closeinvoice').on('click',(e:Event)=>{
  $('#tableattached').slideToggle() ;
})
$(document).on("click","#redirectlogin",function(){
  $('#exampleModal').modal('hide');//show modal
  $('#exampleModal').remove() ;
   });
  $("#uploadremitted").on('click',(e:Event)=>{
   // setajaxwithform() ;remittalform
   Swal.fire({
     icon: 'question',
     text: 'Is this a remitted file?Continue if it is?',
     showCancelButton: true
   }).then((r: any) => {
     if (r.isConfirmed) {
      e.preventDefault();
      e.stopPropagation();
     // const content  = contenttypewithtoken(localStorage.getItem('token')) ; 
      const content  = {
        "Authorization": "Bearer " + localStorage.getItem("token")
      } ;
      const form   = new FormData(document.getElementById("remittalform") as HTMLFormElement) ; 
      // var input = document.querySelector('input[type="file"]') as HTMLInputElement ;
      // form.append('file',input.files[0]) ; 
    // let form2 = JSON.stringify(Object.fromEntries(form.entries()));
      //console.log('form ',form2) ;
      setajaxwithform('text', `${backendurl}/transactions/submitremittalform`, 'post',form,(response:any)=>{
        console.log('response',response) ;
        toastr.success('Message sent successfully') ;
      },()=>{},content);
     }else{
      toastr.error('cancelled') ;
     }
    });
  }) ;
  let socket = null;
  let stompClient = null;
  let usermap  =  new Map() ;
const pageload = (url: string): void => {
  console.log(' url ', url);
  // alert(url) ;
  //delay for the localstorage to  set 
  //subscribe to event for all users 
  setTimeout(() => {
    processrequest2(`${backendurl}/vendor/vendor?vendorname=${localStorage.getItem('vendorname')}`, "get", {
      'Content-Type': "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }, (r: any) => {
      // console.log(' r in  index ',r) ;
      r = JSON.parse(r);
      const imglogo: any = document.getElementsByClassName('vendorlogo');
      //  console.log(' url ',`${backendurl}/jetstore/${r.vendorlogo}`);
      if (r.vendorlogo) {
        imglogo[0].src = `${backendurl}/jetstore/${r.vendorlogo}`;
        imglogo[1].src = `${backendurl}/jetstore/${r.vendorlogo}`;
      }
    });
    //load profile image in side bar 
    processrequest2(`${backendurl}/profile/profile2/${localStorage.getItem('ack')}`, "get", {
      'Content-Type': "application/json",
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }, (r: any) => {
      //console.log(' profile image in  index ', r);
      r = JSON.parse(r);
      if (r.profilepicture) {
        $('#profileimg').prop('src', `${backendurl}/jetstore/${r.profilepicture}`);
      }
    });
  }, 2000);
  //set local variables 
  let token = $.trim(localStorage.getItem("token"));
   //console.log("the token ",token);
  //alert(token);
  var decoded = jwt_decode(token);
 //console.log(decoded, 'exp ', decoded['exp'], 'sub ', decoded.sub, 'vendorname ', decoded.vendorname, ' ack ', decoded.ack);
  const now = Date.now().valueOf() / 1000;
  const tokenexp = parseInt(decoded.exp);
  //console.log(decoded.username);
  localStorage.setItem('vendorname', decoded.vendorname);
  localStorage.setItem('ack', decoded.ack);
  localStorage.setItem('username', decoded.username);
  $('.mt-3').text(new String(localStorage.getItem('username')).toUpperCase());
  console.log('subscribing to event ....') ;
  //subscribetoevent(new EventSource(`${backendurl}/subscribe`), 'latestNews');
 // subscribetoevent(new EventSource(`${backendurl}/eventbyuser?userid=${localStorage.getItem('ack')}`), 'usernews');
  subscribetoevent(new EventSource(`${backendurl}/subscribe?vendorname=${localStorage.getItem('vendorname')}`),'vendornews');
  console.log("username2 ", localStorage.getItem('username'));
  const myname = (localStorage.getItem('username') as string).toUpperCase();
  console.log('before switch myname ',myname);
  // translate('Ik spreek Engels', {to: 'ig'}).then((res) => {
  //        console.log('right',res.text);
  //        console.log(res.from.language.iso);   
  //            }).catch((err) => {
  //        console.error('error',err);
  //      });
  //console.log(translate) ;
 //translateString("hello world of language","ig");
  switch (url) {
    case urlpages[0]: // for index page
      //alert('got here');
      console.log('myname ',myname," switch username ", localStorage.getItem('username'));
      invalidatetoken(tokenexp);
     // const myname = new String(localStorage.getItem('username')).toUpperCase();
      console.log('myname ',myname);
      $('.alert').prepend(`<strong>Welcome &nbsp;&nbsp;${myname}</strong>`);
      // document.querySelector("#thefooter")?.append(Headline()) ;  
      //for jsx testing which is working
      //subscribe to event for specific users
      (()=>{
      //alert('stat') ;
      })() //set up the statistical analysis
      break;
    case urlpages[urlpages.length - 2]:   //for  profile
      checktoken(localStorage.getItem('token'));
      // call ajax function to  load  profile  data 
      let results: {} = {};
      //profilename
      const username = localStorage.getItem('username') as string;
      $('#profilename').text(`${username.toUpperCase()}`);
      processrequest2(`${backendurl}/profile/profile/${localStorage.getItem('ack')}`, "get"
        , {
          'Content-Type': "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }, (r: any) => {
          if (r) {  // if sucessful
            //  pull user details by userid.chaining it with fetch
            r = JSON.parse(r);
            // console.log(' calling  user  details ', r);
            // if (r.profilepicture) {
            //load profile image for profile page
            setTimeout(() => {
              console.log(' profile image loaded ', r.profilepicture);
              $('.profileimg').prop('src', `${backendurl}/jetstore/${r.profilepicture}`);
            }, 2000);
            //}
            // delay for  sometimes
            setTimeout(() => {
              processrequest2(`${backendurl}/finduser/${localStorage.getItem('ack')}`,
                'get', {
                'Content-Type': "application/json",
                'Authorization': 'Bearer ' + localStorage.getItem('token')
              }, (user: any) => {
                //console.log(' user ', user);
                user = JSON.parse(user);
                const { firstname, lastname, email } = user;
                console.log(firstname, lastname, email);
                r.firstname = firstname;
                r.lastname = lastname;
                r.email = email;
                console.log(' r  total ', r, ' dob ', r.dob, ' location ', r.location);
                $('#top-profile').empty().html(fullprofile(r, email, r.dob, r.location));
              });
            }, 2000);

          }
        });
      if ($.isEmptyObject(results)) {
        console.log('no profile  uodate')
        //  $('.profile-details').empty().html("<span>No profile update yet</span>")
        // $('#top-profile').empty().html("<span>No profile update yet</span>")
      } else {

      }
      break;
    case urlpages[urlpages.length - 8]:  // for create  user page
      console.log('url ', urlpages[urlpages.length - 8]);
      // fill users for  search  
      // console.log('usersearch ',$('#usersearch').val())
      $(".usersearch").select2(
        {
          placeholder: "search your users by name",
          minimumInputLength: 1,
          ajax: {
            url: `${backendurl}/usersearch`,
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            dataType: 'json',
            data: function (params: any) {
              // console.log(' params ',params);
              const vendorname2 = localStorage.getItem('vendorname');
              return {
                action_users: params.term, // search term
                vendorname: vendorname2,
                page: params.page
              };
            },
            processResults: function (data: any) {
              // const data2  =  [data] ;
              // console.log(data);
              return {
                results: $.map(data, function (obj: any) {
                  // console.log('obj in  map ',obj);
                  return {
                    id: obj.id,
                    text: obj.firstname
                  };
                })
              };
            }
          }
        });
      break;
    case `${loginurl}/transactions`:
      datatable2= onloaddatatable2('#orderformbody','#trans',backendurl,[
        {data: "orderid",defaultContent :""},
       {data: "userid",defaultContent :""},
      {data: "username",defaultContent :""},
      {data: "date",defaultContent :""},
       {data: "paymentstatus",defaultContent :""},
     {data: "paymentmethod",defaultContent :""},
       {data: "deliverystatus",defaultContent :""},
       {data: "amount",defaultContent :""},
       {data: "remitted",defaultContent :""},
         ],`transactions/load?vendorname=${localStorage.getItem('vendorname')}`,datatable2,()=>{
        CKEDITOR.replace('editor2');
        CKEDITOR.instances['editor2'].setData('Type message to send to this user about this stock')
      });
    //   new $.fn.dataTable.Buttons(datatable2, {
    //     buttons: [
    //         'copy', 'excel', 'pdf'
    //     ]
    // } );
     
    // datatable2.buttons().container()
    //     .appendTo( $('.col-sm-6:eq(0)', datatable2.table().container() ) );  
      // $('#trans').dataTable({
      //   select: {
      //     selector: 'td:not(:first-child)',
      //     style: 'os'
      //   },
      //   pageLength:20,
      //   processing: true,
      //   serverSide: false,
      //   "ajax": {
      //     type: 'GET',
      //     url: `${backendurl}/transactions/load?vendorname=${localStorage.getItem('vendorname')}`,
      //    // dataSrc:"",
      //     headers: {
      //       "Authorization":"Bearer " +(localStorage.getItem('token') as string).trim()
      //     },
      //   },
      //   "columns": [{data: "orderid",defaultContent :""},
      //     {data: "userid",defaultContent :""},
      //    {data: "username",defaultContent :""},
      //   {data: "date",defaultContent :""},
      //   {data: "paymentstatus",defaultContent :""},
      //  {data: "paymentmethod",defaultContent :""},
      //  {data: "deliverystatus",defaultContent :""},{data: "amount",defaultContent :""},
      //        ],
      //   "order": [[1, 'asc']],
      //   "sPaginationType": "full_numbers",
      //   "autowidth":true,
      //   "destroy": true
      // });
      break;
   case `${loginurl}/order`:  
  // onloaddatawithfetch(`${backendurl}/order/productordered?vendorname=${localStorage.getItem('vendorname')}`)  
      datatable= onloaddatatable2('#orderformbody','#basic-1',backendurl,[{data:"id",defaultContent :""},
        {data: "ordid",defaultContent :""},
        {data: "paymentstatus",defaultContent :""},
        {data: "paymentmethod",defaultContent :""},
        {data: "ordstatus",defaultContent :""},
        {data: "orderdate",defaultContent :""},
        {data: "total",defaultContent :""},
        {data: "firstname",defaultContent :""},{data: "country",defaultContent :""},
        {data: "tax",defaultContent :""},
        {data: "productname",defaultContent :""},
        {data: "price",defaultContent :""},
        {data: "state",defaultContent :""},],`order/productordered?vendorname=${localStorage.getItem('vendorname')}`,datatable,()=>{
          CKEDITOR.replace('editor2');
          CKEDITOR.instances['editor2'].setData('Type message to send to this user about this stock')
        });
        // $('.sidebar-menu').tree();
        break;
    case urlpages[12]:   // for create  coupon
      $('#couponcategory').empty().html(
        processrequest2(`${backendurl}/categories/category`, 'get', {
          'Content-Type': "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }, (r: any) => {
          // console.log(' r ', r) ;
          let builder = '';
          builder += `<option value=''>Select Category</option>`;
          for (let row of r) {
            builder += `<option value='${row.categoryname}'>${row.categoryname}</option>`;
          }
          $('#couponcategory').empty().html(builder.toString());
        }));
      //load sub category   
      $('#couponsubcategory').empty().html(
        processrequest2(`${backendurl}/subcat/subcategory`, 'get', {
          'Content-Type': "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }, (r: any) => {
          // console.log(' sub r ', r) ;
          let builder = '';
          builder += `<option value=''>Select Subcategory</option>`;
          for (let row of r) {
            builder += `<option value='${row.subcategoryname}'>${row.subcategoryname}</option>`;
          }
          $('#couponsubcategory').empty().html(builder.toString());
        }));
      $(".prodsearch").select2(
        {
          placeholder: "search your products by name",
          minimumInputLength: 1,
          ajax: {
            url: `${backendurl}/product/findallproduct`,
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            dataType: 'json',
            data: function (params: any) {
              // console.log(' params ',params);
              const vendorname2 = localStorage.getItem('vendorname');
              // alert(vendorname2) ;
              return {
                action_users: params.term, // search term
                vendorname: vendorname2,
                page: params.page
              };
            },
            processResults: function (data: any) {
              // const data2  =  [data] ;
              // console.log(data);
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
      fetch(`${backendurl}/coupon/coupon?vendorname=${localStorage.getItem('vendorname')}&pageSize=10&pageNumber=1`,
        {
          method: 'get',
          credentials: 'same-origin',
          headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }
      )
        .then(response => response.text())
        .then((response) => {
          // console.log('',response) ;
          const couponbody = document.getElementById('couponbody') as HTMLDivElement;
          couponbody.innerHTML = response;
        })
        .catch(err => console.log(err));
      break;
    case urlpages[1]://  for category page
      //alert('seen '+urlpages[1]) ;
      // const grid  =  new Grid() ;
      const data = [
        {
          name: 'id',
          type: 'hidden',
          css: 'hide'
        },
        {
          name: "categoryname", type: "text", align: "left", width: 80, validate: function (value: any) {
            // if (value > 0) {
            return true;
            //}
          }
        },
        {
          name: "pricerange", align: "left", type: "text", width: 50,
          // itemTemplate: function (value: any, item: any) {
          //   console.log(' value ', value, ' item ', item);
          // },
        },
        // {
        //   name:"imageurl",align:"left",type:"file",width:80,
        // },
        { type: "control" }
      ];
      createtables(`${backendurl}/categories/category`, localStorage.getItem('token'), data);
      downloads($('#dwdexcel'), 'category', `${backendurl}/categories/filereport`);
      break;
    case urlpages[2]:  // for sub category 
      const data2 = [
        {
          name: 'id',
          type: 'hidden',
          css: 'hide'
        },
        {
          name: "subcategoryname", type: "text", align: "left", width: 80, validate: function (value: any) {
            // if (value > 0) {
            return true;
            //}
          }
        },
        {
          name: "pricerange", align: "left", type: "text", width: 50,
          // itemTemplate: function (value: any, item: any) {
          //   console.log(' value ', value, ' item ', item);
          // },
        },
        { type: "control" }
      ];
      createtables(`${backendurl}/subcat/subcategory`, localStorage.getItem('token'), data2);
      downloads($('#dwdexcel'), 'subcategory', `${backendurl}/subcat/filereport`);
      break;
    case urlpages[5]: // for products  page
      // load category
      //alert('products'); 
      $('#sizesofproduct').select2();
      $('#colourofproduct').select2();
      $('#categoryid').empty().html(
        processrequest2(`${backendurl}/categories/category`, 'get', {
          'Content-Type': "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }, (r: any) => {
          // console.log(' r ', r) ;
          r = JSON.parse(r);
          // console.log(' r ', r) ;
          let builder = '';
          builder += `<option value=''>Select Category</option>`;
          for (let row of r) {
            //console.log(' row ',row)
            builder += `<option value='${row.categoryname}'>${row.categoryname}</option>`;
          }
          $('#categoryid').empty().html(builder.toString());
        }));
      //load sub category   
      $('#subcategoryid').empty().html(
        processrequest2(`${backendurl}/subcat/subcategory`, 'get', {
          'Content-Type': "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }, (r: any) => {
          // console.log(' sub r ', r) ;
          r = JSON.parse(r);
          let builder = '';
          builder += `<option value=''>Select Subcategory</option>`;
          for (let row of r) {
            builder += `<option value='${row.subcategoryname}'>${row.subcategoryname}</option>`;
          }
          $('#subcategoryid').empty().html(builder.toString());
        }));
      // load tax 
      $('#tax').empty().html(
        processrequest2(`${backendurl}/taxes/updatetax`, 'get', {
          'Content-Type': "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }, (r: any) => {
          r = JSON.parse(r);
          //  console.log('tax r ', r) ;
          let builder = '';
          builder += `<option value=''>Select Tax on Product</option>`;
          for (let row of r) {
            builder += `<option value='${parseFloat(row.taxrate) / 100}'>${row.taxdetail} ${row.taxrate}%</option>`;
          }
          $('#tax').empty().html(builder.toString());
        }));
      $(".usersearch").select2(
        {
          placeholder: "search your products by name",
          minimumInputLength: 1,
          ajax: {
            url: `${backendurl}/product/findallproduct`,
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            dataType: 'json',
            data: function (params: any) {
              // console.log(' params ',params);
              const vendorname2 = localStorage.getItem('vendorname');
              return {
                action_users: params.term, // search term
                vendorname: vendorname2,
                page: params.page
              };
            },
            processResults: function (data: any) {
              // const data2  =  [data] ;
              // console.log(data);
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
    case urlpages[4]:  // for product details
      $(".prdsearch").select2(
        {
          placeholder: "search your products by name",
          minimumInputLength: 1,
          ajax: {
            url: `${backendurl}/product/findallproduct`,
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            dataType: 'json',
            data: function (params: any) {
              // console.log(' params ',params);
              const vendorname2 = localStorage.getItem('vendorname');
              return {
                action_users: params.term, // search term
                vendorname: vendorname2,
                page: params.page
              };
            },
            processResults: function (data: any) {
              // const data2  =  [data] ;
              // console.log(data);
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
      // on change for products in  product details 
      $(".prdsearch").on('change', (e: any) => {
        e.preventDefault();
        const userid = $('.prdsearch').val();
        console.log('usersearch ', userid);
        processrequest2(`${backendurl}/product/find/${userid}?detail=details`, 'get', {
          'Content-Type': "application/json",
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }, (res: any) => {
          //console.log(" res ",res) ;
          // delete res.vendorname;
          //  delete res.imageurl ; 
          res = JSON.parse(res);
          let prdimage = document.getElementById('prdimage') as HTMLImageElement;
          prdimage.src = `${backendurl}/jetstore/${res.imageurl}`;
          //   console.log(' src path ',`${backendurl}/jetstore/${res.imageurl}`) ;
          // console.log('details data ',e);
          if (res.productreview !== null && res.productreview !== undefined) {
            //console.log(' review ',res.productreview);
            const stars = res.productreview.split('');
            console.log(' stars ', stars);
            const options = new StringBuilder();
            for (let i = 0; i < stars.length; i++) {
              options.append(`<option value='${i}'>${i}</option>`);
            }
            $('#u-rating-fontawesome-o').html(options.toString());
          }
          $('#prddes').text(`${res.proddescription}`);
          $('.product-price').empty().html(`<h3>${res.productprice}</h3>`);
          const prdsize = document.getElementById('prdsize') as HTMLElement;
          prdsize.textContent = `${res.size}`;
          // $('.product-title').after(`${res.productname}`);
          $('#qty').val(`${parseInt(res.productquantity)}`);
          const prdstatus = document.getElementById('prdstatus') as HTMLParagraphElement;
          prdstatus.innerHTML = `<strong>Product status</strong> - ${res.productstatus} <br/>
       <strong>Product code - ${res.productcode} </strong> <br/>
       <strong>Product model - ${res.model}</strong> <br/>
          `;
          const prdsummary = document.getElementById('prdsummary') as HTMLParagraphElement;
          prdsummary.innerHTML = `<p><strong>Short Summary of Product</strong></p> <p>${res.shortsummary}</p>`;
          const prddetails = document.getElementById('prddetails') as HTMLDivElement;
          prddetails.style.display = 'block';
          // console.log('src ',prdimage.src, ' prdimage ',prdimage,stars) ;
        });
      });
      break;
    case `${loginurl}/review`:
      const reviewdata = [
        {
          name: 'id',
          type: 'hidden',
          css: 'hide'
        },
        {
          name: "customername", type: "text", align: "left", width: 80, validate: function (value: any) {
            // if (value > 0) {
            return true;
            //}
          }
        },
        {
          name: "review", align: "left", type: "text", width: 50,
          // itemTemplate: function (value: any, item: any) {
          //   console.log(' value ', value, ' item ', item);
          // },
        },
        {
          name: "testimony", align: "left", type: "text", width: 50,
          // itemTemplate: function (value: any, item: any) {
          //   console.log(' value ', value, ' item ', item);
          // },
        },
        {
          name: "rate", align: "left", type: "text", width: 50,
          // itemTemplate: function (value: any, item: any) {
          //   console.log(' value ', value, ' item ', item);
          // },
        },
        // {
        //   name:"imageurl",align:"left",type:"file",width:80,
        // },
        { type: "control" }
      ];
      createtables2(`${backendurl}/review`, localStorage.getItem('token'), reviewdata, false);
      break;
    case `${loginurl}/customer`:
      const customerdata = [
        {
          name: 'id',
          type: 'hidden',
          css: 'hide'
        },
        {
          name: "firstname", type: "text", align: "left", width: 80, validate: function (value: any) {
            // if (value > 0) {
            return true;
            //}
          }
        },
        {
          name: "lastname", align: "left", type: "text", width: 50,
          // itemTemplate: function (value: any, item: any) {
          //   console.log(' value ', value, ' item ', item);
          // },
        },
        {
          name: "email", align: "left", type: "text", width: 50,
          // itemTemplate: function (value: any, item: any) {
          //   console.log(' value ', value, ' item ', item);
          // },
        },
        {
          name: "phone", align: "left", type: "text", width: 50,
          // itemTemplate: function (value: any, item: any) {
          //   console.log(' value ', value, ' item ', item);
          // },
        },
        // {
        //   name:"imageurl",align:"left",type:"file",width:80,
        // },
        { type: "control" }
      ];
      createtables2(`${backendurl}/customer/register`, localStorage.getItem('token'), customerdata, true);
      break;
    case `${loginurl}/productlist`:
      searchFiter();
      break;
    case `${loginurl}/messaging`:
      // $('#sizesofproduct').select2() ;
      // $('#colourofproduct').select2() ;
      //cme here later 
      subscribetoevent(new EventSource(`${backendurl}/subscribe?vendorname=${localStorage.getItem('vendorname')}`),'usernews');
      let selecttyperadio = Array.from(document.getElementsByName('selectype') as NodeListOf<HTMLInputElement>);
      // let [inp1,inp2,inp3,inp4]  =  selecttyperadio ;
      //console.log('checked ',inp1.checked);
      search(`usersearch`, selecttyperadio);
      //chat logic 
       socket = new SockJS(websocketurl);
       stompClient = Stomp.over(socket);
      stompClient.connect({},()=>{
      stompClient.subscribe('/chatroom/public',onMessageReceived);
      // get data from events before subscribing .
    let eventSource  = new EventSource(`${backendurl}/subscribe?vendorname=${localStorage.getItem('vendorname')}`);
    // receiverName=null;
    eventSource.addEventListener('vendornews', (event:any) => {
      if (event.data) {
        console.log('from dispatch event ', event.data+' is the user id');
       if(usermap.get('receiverName') ===undefined){
            usermap.set('receiverName',event.data) ;
            var chatMessage = {
              senderName:localStorage.getItem('vendorname'),
             // receiverName:usermap.get('receiverName')!==undefined?usermap.get('receiverName'):"",
              message: "",
              status:"JOIN"
               };
            stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
            stompClient.subscribe('/user/'+localStorage.getItem('vendorname')+'/private', onMessageReceived);
            console.log(chatMessage,'usermap.get '+usermap.get('receiverName')) ;
           }
        eventSource.close();
          }
        });
      },()=>{
      console.log("unable to connect") ;   
      });
      $('#sendbtn').on('click',(e:any)=>{
        e.preventDefault() ;
        var chatMessage = {
          senderName:localStorage.getItem('vendorname'),
          receiverName:usermap.get('receiverName'),   // the user
          message: $('#chatmsg').val(),
          status:"MESSAGE"
        };
    $('#messagearea').append(`<br/><li style="color:blue"><strong>${$('#chatmsg').val()}</strong><br/></li>`) ;
      console.log('details ',$('#chatmsg').val(),usermap) ;
      $('#chatmsg').val('');
  (document.getElementById('messagearea') as HTMLUListElement).scrollTop =  (document.getElementById('messagearea') as HTMLUListElement).scrollHeight;
      stompClient.send("/app/private-message",{},JSON.stringify(chatMessage))
      }) ;
      break;
    case `${loginurl}/messageview`:
         //alert() ;
       break ;
    default:
  }
};
//search option in messaging
// const searchoption  = (url:string,inputArray:HTMLInputElement[])=>{
//  search(url,inputArray) ;
// };

const search = (url: string, inputArray: HTMLInputElement[]) => {
  //console.log(inputArray) ;
  let [inp1, inp2] = inputArray;
  $(".userandvendor").select2(
    {
      placeholder: "search users/vendors and send message",
      minimumInputLength: 1,
      ajax: {
        url: function () {
          if (inp1.checked) {
            $('.usersearch2').prop('disabled', false);
            console.log('called vendors', inp1.checked);
            return `${backendurl}/${url}`;
          } else if (inp2.checked) {
            $('.usersearch2').prop('disabled', false);
            console.log('called users', inp2.checked);
            return `${backendurl}/${url}`;
          }
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        dataType: 'json',
        data: function (params: any) {
          // console.log(' params ',params);
          const vendorname2 = localStorage.getItem('vendorname');
          if (inp1.checked) {
            return {
              action_users: params.term, // search term
              //vendorname: vendorname2,
              page: params.page
            };
          } else if (inp2.checked) {
            return {
              action_users: params.term, // search term
              vendorname: vendorname2,
              page: params.page
            };
          }
        },
        processResults: function (data: any) {
          console.log(' data ',data) ;
          if (inp1.checked) {
            console.log('vendorname', data);
            return {
              results: $.map(data, function (obj: any) {
                return {
                  id: obj.id,
                  text: obj.vendorname
                };
              })
            };
          } else if (inp2.checked) {
            console.log('firstname', data);
            return {
              results: $.map(data, function (obj: any) {
                return {
                  id: obj.id,
                  text: obj.firstname
                };
              })
            };
          }

        }
      }
    });
};
// searchfilter 
function searchFiter(pagenum: any) {
  pagenum = pagenum ? pagenum : 0;
  document.cookie = "current_page" + pagenum;
  $.ajax({
    type: 'get',
    url: `${backendurl}/product/allproduct`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    data: `pageNumber=${pagenum}&pageSize=${10}`,
    success: function (data: any) {
      //console.log(data) ;
      let prdcontainer = document.getElementById('prdcontainer') as HTMLDivElement;
      prdcontainer.innerHTML = data;
    }
  });
}
// searchfilter for coupon
function searchFiter2(pagenum: any) {
  pagenum = pagenum ? pagenum : 0;
  document.cookie = "current_page" + pagenum;
  $.ajax({
    type: 'get',
    url: `${backendurl}/coupon/coupon`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    data: `vendorname=${localStorage.getItem('vendorname')}&pageNumber=${pagenum}&pageSize=${10}`,
    success: function (data: any) {
      console.log(data);
      let couponbody = document.getElementById('couponbody') as HTMLDivElement;
      couponbody.innerHTML = data;
    }
  });
}

// search for product on change 
$('.usersearch').on('change', (e: any) => {
  e.preventDefault();
  const userid = $('.usersearch').val();
  processrequest2(`${backendurl}/product/find/${userid}`, 'get', {
    'Content-Type': "application/json",
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }, (res: any) => {
    console.log('product res ', res);
    res = JSON.parse(res);
    delete res.vendorname;
    delete res.imageurl;
    delete res.dateofcreation;
    var todayTime = new Date(res.expirydate)
    var month = (todayTime.getMonth() + 1);
    var day = (todayTime.getDate());
    var year = (todayTime.getFullYear());
    let expdate = year + "-" + "0" + month + "-" + day;
    res.expirydate = expdate;
    //console.log(' res ',res,' date ',res.expirydate) ;
    $("#add-product-form").autofill(res);
    var form = document.getElementById("add-product-form") as HTMLFormElement;
    form.expirydate.value = res.expirydate;
    CKEDITOR.instances.editor1.setData(res.proddescription);
    // console.log('id',$('#id').val()) ; 
  });
});
// search  users 
$('.usersearch').on('change', (e: any) => {
  e.preventDefault();
  // console.log($('.usersearch').val());
  const userid = $('.usersearch').val();
  // fill up the form 
  fetch(`${backendurl}/vendoruser?vendorname=${localStorage.getItem('vendorname')}&id=${userid}`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      // 'Accept': 'application/json',
      'Content-Type': 'application/json',
      // "X-Requested-With": "XMLHttpRequest",
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    //body:JSON.stringify(d)
  }).then(responseJson => {
    console.log(responseJson);
    return responseJson.json();
  }).then((r: any) => {
    console.log('response ...', r);
    delete r.id;
    delete r.vendorname;
    delete r.password;
    delete r.vendorowner;
    delete r.type;
    delete r.token;
    delete r.userdate;
    console.log(document.getElementById('usersearch')?.textContent);
    const userstatus: any = document.getElementById('userstatus');
    //  selecttext.textContent  = '' ;
    $("#userdetails").autofill(r);
    if (r.userstatus === '1') {
      userstatus.checked = true;
    }
    let userdetails: any = document.getElementById('userdetails');
    const [yes, no] = Array.from(userdetails.vendorowner);
    if (r.vendorowner === '1') {
      yes.checked = true;
    } else if (r.vendorowner !== '1') {
      no.checked = true;
    }
    $('#usererror').empty().html('<br/><div class="alert alert-warning"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' +
      'Password field should be empty unless you want to update password for your users' + '!</div>');
  })
    .catch(error => {
      console.log(error);
    })
});
//clear  save button
$('#clear').on('click', (e: any) => {
  e.preventDefault();
  alertify.confirm("Form Reset", "Do you want to reset form ?",
    function () {
      $('#usererror').empty();
      const userid = $('.usersearch').val();
      console.log(document.getElementById('usersearch')?.textContent);
      const selecttext: any = document.getElementById('usersearch');
      selecttext.textContent = '';
      // reset form 
      const userperm: any = document.getElementById('userpermission');
      userperm.reset();
      const userdetails: any = document.getElementById('userdetails');
      userdetails.reset();
      toastr.success('form reset successfully');
    },
    function () {
      alertify.error('Cancel');
    });
});
$(document).ready(() => {
  //const myform: HTMLFormElement = document.querySelector('#top-profile')!;
  if (URL) {
    let currenthref = window.location.href;
    let url: URL = new URL(currenthref);
    console.log('test url ', (theprotocol + url.host + url.pathname));
    pageload((theprotocol + url.host + url.pathname));
    // pageload(url.href);
  } else {
    alert('this browser seem to be too old');
  }
  //  render(()=>html`<button class="btn btn-primary" type="button" @click=${test()}>Update</button>`,document.body);
});
Dropzone.options.multiFileUpload = {
  // paramName: "file",
  method: "post",
  url: `http://localhost:1022/product/uploadfiles?vendorname=${localStorage.getItem("vendorname")}`,
  headers: {
    "Authorization": `Bearer ${localStorage.getItem('token')}`
  },
  withCredentials: true,
  addRemoveLinks: true,
  maxFilesize: 100,
  maxFiles: 100,
  acceptedFiles: ".png,.jpg,.jpeg,.bmp",
  accept: function (file: any, done: any) {
    console.log("uploaded");
    done();
  },
  autoProcessQueue: false,
  uploadMultiple: true,
  parallelUploads: 50,
  init: function () {
    this.on("addedfile", function (file: any) {
      console.log('file added ....');
    });
    this.on('error', function (file: any, errorMessage: any) {
      console.log(errorMessage);
    });
    const myDropzone: any = this; // closure
    var submitButton = document.querySelector("#filesdata") as HTMLButtonElement;
    submitButton.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      Swal.fire({
        icon: 'question',
        text: 'Do you want to upload files and data',
        showCancelButton: true
      }).then((r: any) => {
        if (r.isConfirmed) {
          //set ajax function here to process first
          $("#filesdata").empty().html(`<img src="${loginurl}/dist/images/btn-ajax-loader.gif"/> &nbsp; processing your uploads.please wait ...`);
          const URL = `${backendurl}/product/product`;
          let formData = document.getElementById('addfile') as HTMLFormElement;
          const prdfile = formData.prdfile;
          // if no file is choosen
          // console.log(prdfile,prdfile.value) ;
          if (prdfile.value === undefined || prdfile.value === "") {
            toastr.error('No excel files is uploaded yet');
            console.log('prdfile is testing ');
            throw new Error(" Error. ");
          }
          //console.log('prdfile ') ;
          const filename = prdfile.files[0].name;
          let xlsx = filename.split('.')[1];
          //alert(xlsx) ;
          //console.log('xlxs ',xlsx==='xlx') ;                   
          if (xlsx !== 'xlsx') { // if it not excel
            toastr.error('Only Excel file is permitted');
            setTimeout(() => {
              $("#filesdata").empty().html("<button type='submit' class='btn btn-md btn-primary' id='filesdata'>Upload Files And Data</button>");
              //  toastr.error('uploading of files failed ...'); 
            }, 2000);
            return;
          }
          const form = new FormData(formData);
          $.ajax({
            url: URL,
            type: 'POST',
            headers: {
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            dataType: 'text',
            contentType: false,
            data: form,
            processData: false,
            beforeSend: function () {
              // $("#filesdata").empty().html(`<img src="${loginurl}/dist/images/btn-ajax-loader.gif"/> &nbsp; processing your uploads.please wait ...`);      		
            },
            success: function (result: any) {
              //   submitButton.textContent  = `Upload Files And Data`;
              console.log('button click', result);
              setTimeout(() => {  //delay for the uploaded  to be processed
                myDropzone.processQueue(); // Tell Dropzone to process all queued files.
              }, 5000)
            },
            error: function (err: any) {
              $("#filesdata").empty().html("<button type='submit' class='btn btn-md btn-primary' id='filesdata'>Upload Files And Data</button>");
              toastr.error('uploading of files failed ...');
            }
          });
        }
      })
    });
    // this.sendingMu("sending",function(file:any,xhr:any,formData:any){
    //   formData.append("vendorname",localStorage.getItem("vendorname"));
    //   toastr.success('sending');
    // }) ;
    this.on("successmultiple", function (files: any, response: any) {
      setTimeout(() => {
        $("#filesdata").empty().html("<button type='submit' class='btn btn-md btn-primary' id='filesdata'>Upload Files And Data</button>");
        toastr.success('All Images and data successfully uploaded and processed');
        console.log(' response ', response);
      }, 1500)

    });
    this.on("errormultiple", function (files: any, response: any) {
      toastr.error('there is  a  problem');
      //console.log(response)
    });
    this.on("completemultiple", function (files: any, response: any) {

    });
    this.on('complete', function (file: any) {
      myDropzone.removeFile(file);
    });
  }
};
export { };


























































































































































































































































































































































































