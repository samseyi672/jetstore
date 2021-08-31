var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { login } from "./tsbackendscript/login";
import { backendurl, loginurl } from "./url";
import { invalidatetoken } from "./miscellaneous";
import { dialog } from "./lithtmlscript";
import { checktoken } from "./tsbackendscript/ajaxfunctioncall";
import { register } from "./register";
toastr.options = {
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
console.log('on load here ........');
$('#login').on('click', (e) => {
    e.preventDefault();
    const loginobj = new login();
    var myform = $('form')[0];
    console.log('id ', $(this).id);
    const htmlform = document.getElementById('submitLogin');
    const username = htmlform.username.value;
    const password = htmlform.password.value;
    console.log(username, ' and ', password);
    const form = new FormData();
    form.append('username', username);
    form.append('password', password);
    loginobj.loginaction(form, "");
});
const urlpages = [`${loginurl}/adminindex`, `${loginurl}/category`,
    `${loginurl}/categorysub`, `${loginurl}/categorysubdigital`, `${loginurl}/productlistdetails`,
    `${loginurl}/addprod`, `${loginurl}/categorydigital`, `${loginurl}/categorysub`,
    `${loginurl}/productlistdigital`, `${loginurl}/order`,
    `${loginurl}/transactions`,
    `${loginurl}/couponlist`, `${loginurl}/couponcreate`, `${loginurl}/pagelist`,
    `${loginurl}/pagecreate`, `${loginurl}/menulist`, `${loginurl}/menulist`,
    `${loginurl}/userlist`, `${loginurl}/createuser`, `${loginurl}/createvendors`,
    `${loginurl}/translations`, `${loginurl}/currencyrates`, `${loginurl}/taxes`,
    `${loginurl}/reports`, `${loginurl}/profile`, `${loginurl}/invoice`];
$('.profile-dropdown').on('click', (e) => {
    e.stopPropagation();
    if (e.target.lastChild.data === "Edit Profile") {
        console.log("calling dialog");
        $(dialog((function () {
            return `
          <form class="needs-validation" id="profileform">
           <div class="form">
              <div class="form-group">
                  <label for="validationCustom01" class="mb-1">First Name* :</label>
                  <input class="form-control" id="validationCustom01" type="text" name="firstname">
              </div>
              <div class="form">
              <div class="form-group">
                  <label for="validationCustom01" class="mb-1">Last Name* :</label>
                  <input class="form-control" id="validationCustom01" type="text" name="lastname"/>
              </div>
              <div class="form">
              <div class="form-group">
                  <label for="validationCustom01" class="mb-1">Location(states or city)* :</label>
                  <input class="form-control" id="validationCustom01" type="text" name="city" />
              </div>
              <div class="form">
              <div class="form-group">
                  <label for="validationCustom01" class="mb-1">Mobile* :</label>
                  <input class="form-control" id="validationCustom01" type="text" name="mobile" />
              </div>
              <div class="form-group mb-0">
              <label for="validationCustom02" class="mb-1">Address* :</label>
              <input class="form-control" id="validationCustom02" type="text" name="address">
              </div>
              <div class="form-group mb-0">
              <label for="validationCustom02" class="mb-1">Profile Picture* :</label>
              <input class="form-control" id="validationCustom02" type="file" name="profilepicture">
          </div>
          </div>
          </form>
          `;
        })(), (function () {
            return `
          <h5 class="modal-title f-w-600" id="exampleModalLabel">Update your Profile</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
          `;
        })(), (function () {
            return `
          <button class="btn btn-primary" type="button" onclick="updateprofile('profileform')">Update</button>
          `;
        })())).insertAfter(".page-main-header");
        console.log('set dialog');
        const mydialogpos = document.querySelector(".modal-dialog");
        mydialogpos.classList.add(`modal-dialog-centered`);
        let results = {};
        (() => __awaiter(void 0, void 0, void 0, function* () {
            yield (() => __awaiter(void 0, void 0, void 0, function* () {
                const token = localStorage.getItem('token');
                const userid = localStorage.getItem('userid');
                results = yield processrequest(`${backendurl}/profile/${userid}`, "", "get", "json", "application/json", token, $('#error'));
                if (results.firstname) {
                    const { firstname, lastname, city, address } = results;
                    const data = {
                        "firstname": firstname,
                        "lastname": lastname,
                        "city": city,
                        "address": address
                    };
                    $("#profileform").autofill(data);
                }
            }));
        }))();
        $('#exampleModal').modal('show');
    }
    else if (e.target.lastChild.data === "Inbox") {
        console.log("inbox");
    }
    else if (e.target.lastChild.data === "Lock Screen") {
        console.log("lock screen");
    }
    else if (e.target.lastChild.data === "Settings") {
        console.log('settings');
    }
    else if (e.target.lastChild.data === "Logout") {
        console.log("logout");
    }
});
function Headline() {
    console.log("calling jsx");
    return (<h5 className="headline">Inital</h5>);
}
const profilesummary = (email, firstname, lastname, pic) => {
    return (<div>
      <img src={pic} alt="" className="img-fluid img-90 rounded-circle blur-up lazyloaded"/>
      <h5 className="f-w-600 mb-0">{firstname + " " + lastname}</h5>
      <span>{email}</span>
      <div className="social">
        <div className="form-group btn-showcase">
          <button className="btn social-btn btn-fb d-inline-block"> <i className="fa fa-facebook"></i></button>
          <button className="btn social-btn btn-twitter d-inline-block"><i className="fa fa-google"></i></button>
          <button className="btn social-btn btn-google d-inline-block mr-0"><i className="fa fa-twitter"></i></button>
        </div>
      </div>
    </div>);
};
const fullprofile = (resObject, email) => {
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
            <td>resObject.dob</td>
          </tr>
          <tr>
            <td>Location:</td>
            <td>resObject.location</td>
          </tr>
        </tbody>
      </table>
    </div></div>);
};
function dom(tag, attrs, ...children) {
    if (typeof tag === 'function') {
        return tag();
    }
    if (typeof tag === 'string') {
        const fragments = document.createDocumentFragment();
        const element = document.createElement(tag);
        children.forEach(child => {
            if (child instanceof HTMLElement) {
                fragments.appendChild(child);
            }
            else if (typeof child === 'string') {
                const textnode = document.createTextNode(child);
                fragments.appendChild(textnode);
            }
            else {
                console.log('not appendable', child);
            }
        });
        element.appendChild(fragments);
        Object.entries(attrs || {}).forEach(([name, value]) => {
            if (name.startsWith('on') && name.toLowerCase() in window)
                element.addEventListener(name.toLowerCase().substr(2), value);
        });
        Object.assign(element, attrs);
        return element;
    }
}
const Header = () => {
    return (<h5 className="modal-title f-w-600" id="exampleModalLabel">More Info:</h5>);
};
const finalreg = (e) => {
    alert();
};
const Footer = () => {
    function handleClick(e) {
        e.preventDefault();
        let form1 = JSON.parse($('#contactform').jform());
        console.log('The link was clicked.');
        let form2 = JSON.parse($('#regform').jform());
        const htmlform = document.getElementById('regform');
        let [input1, input2] = Array.from(htmlform === null || htmlform === void 0 ? void 0 : htmlform.vendor);
        console.log("form i is ", input1.value, " and 2 is ", input2.value);
        toastr.error('No vendor name or unchecked options');
        let vendoroption = false;
        console.log(' htmlformname ', htmlform.vendorname.value);
        if (htmlform.vendorname.value.length < 1) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Wrong input.please check!',
            });
            throw new Error("error of input");
            return;
        }
        if (input1.checked === false || input2.checked === false) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'You must check either options !',
            });
            return;
        }
        if (input1.checked === true) {
            vendoroption = true;
            form1.vendoroption = form2.vendor;
        }
        else if (input2.checked === true) {
            vendoroption = true;
            form1.vendoroption = form2.vendor;
        }
        console.log(" form1 ", form1);
        form1.vendorname = form2.vendorname;
        console.log("form1 ", form1);
        const reg = new register();
        reg.register(form1);
        $('#exampleModal').modal('hide');
        if (input1.checked === true) {
            Swal.fire({
                icon: 'success',
                text: 'Registration Successful! You will receive an email through which you will activate your account soonest',
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log('cancelling');
                    Swal.close();
                    window.location.href = '../adminlogin';
                }
            });
        }
        else if (input2.checked === true) {
            Swal.fire({
                icon: 'success',
                text: 'Registration Successful! Contact your administrator to activate your account.',
            }).then((result) => {
                if (result.isConfirmed) {
                    console.log('cancelling');
                    Swal.close();
                    window.location.href = '../adminlogin';
                }
            });
        }
    }
    return (<button className="btn btn-primary" type="button" onClick={handleClick}>Continue</button>);
};
const RegForm = () => {
    return (<form className="needs-validation" id="regform">
      <div className="form-group">
        <label for="exampleFormControlFile1"><small>What is the name of your vendor ?</small></label>
        <input type="text" className="form-control-file" id="vendorname" name="vendorname"/>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="vendor"/>
        <label className="form-check-label" for="defaultCheck1">
          Yes, I'm a Vendor Owner
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="vendor"/>
        <label className="form-check-label" for="defaultCheck2">
          No, I belong to a Vendor
         </label>
      </div>
    </form>);
};
$('#contactform').submit('submit', (e) => {
    e.preventDefault();
    let contactform = document.getElementById('contactform');
    if ((contactform === null || contactform === void 0 ? void 0 : contactform.password.value) !== (contactform === null || contactform === void 0 ? void 0 : contactform.confirmPassword.value)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'both password and password confirmation must be the same !',
        });
        return;
    }
    $(dialog("", "", "")).insertAfter(".back-btn");
    const mydialogpos = document.querySelector(".modal-dialog");
    mydialogpos.classList.add(`modal-dialog-centered`);
    $(".modal-header").html(Header());
    $(".modal-body").html(RegForm());
    $(".modal-footer").html(Footer());
    $('#exampleModal').modal('show');
});
const pageload = (url) => {
    switch (url) {
        case urlpages[0]:
            const token = localStorage.getItem("token");
            var decoded = jwt_decode(token);
            console.log(decoded, 'exp ', decoded['exp'], 'sub ', decoded.sub);
            const now = Date.now().valueOf() / 1000;
            const tokenexp = parseInt(decoded.exp);
            invalidatetoken(tokenexp);
            const myname = new String(decoded.username).toUpperCase();
            $('.alert').prepend(`<strong>Welcome &nbsp;&nbsp;${myname}</strong>`);
            $('.mt-3').text(decoded.username);
            break;
        case urlpages[urlpages.length - 2]:
            checktoken(localStorage.getItem('token'));
            let results = {};
            (() => __awaiter(void 0, void 0, void 0, function* () {
                yield (() => __awaiter(void 0, void 0, void 0, function* () {
                    const userid = localStorage.getItem('userid');
                    results = yield processrequest(`${backendurl}/profile/${userid}`, "", "get", "json", "application/json", token, $('#error'));
                }));
            }))();
            if (!$.isEmptyObject(results)) {
                const { firstname, lastname, city, address, profilepicture } = results;
                console.log(firstname, lastname, city, address);
                if (firstname) {
                    $('.profile-details').empty().html(profilesummary(decoded.sub, firstname, lastname, profilepicture));
                }
                if (firstname) {
                    $('#top-profile').empty().html(fullprofile(results, decoded.sub));
                }
            }
            if ($.isEmptyObject(results)) {
                console.log('no profile  uodate');
                $('.profile-details').empty().html("<span>No profile update yet</span>");
                $('#top-profile').empty().html("<span>No profile update yet</span>");
            }
            break;
    }
};
$(document).ready(() => {
    if (URL) {
        let currenthref = window.location.href;
        let url = new URL(currenthref);
        pageload(url.href);
    }
    else {
        alert('this browser might be too old');
    }
});
