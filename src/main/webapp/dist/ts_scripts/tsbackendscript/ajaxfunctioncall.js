import { invalidatetoken } from "../miscellaneous";
export const checktoken = (token) => {
    var decoded = jwt_decode(token);
    const now = Date.now().valueOf() / 1000;
    const tokenexp = parseInt(decoded.exp);
    invalidatetoken(tokenexp);
};
export const submitform = (url, data, token, returntype, methodtype) => {
    console.log("url ", url);
    if (!$.isEmptyObject(token)) {
        checktoken(token);
        $.ajax({
            url: url,
            type: methodtype,
            headers: {
                Authorization: $ `Bearer ${token}`
            },
            dataType: returntype,
            contentType: 'application/json',
            data: JSON.stringify(data),
            beforeSend: function () {
                console.log('inside ajax .......');
            },
            success: function (response) {
                console.log(response);
                var decoded = jwt_decode(response);
                console.log(decoded, 'exp ', decoded['exp'], 'sub ', decoded.sub);
                localStorage.setItem("token", response);
                localStorage.setItem("userid", decoded.sub);
                setTimeout(function () {
                    $(".form-button").empty().html("<img src='./dist/images/btn-ajax-loader.gif'/> &nbsp; Signing In ...please wait ....");
                    window.location.href = "../adminindex";
                }, 2000);
            },
            error: function (err) {
                console.log(err);
                $("#error").fadeIn(500, function (e) {
                    $("#error").empty().html('<br/><div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + 'wrong username/password' + ' !</div>');
                });
            }
        });
        return;
    }
    $.ajax({
        url: url,
        type: methodtype,
        dataType: returntype,
        contentType: 'application/json',
        data: JSON.stringify(data),
        beforeSend: function () {
            console.log('inside ajax .......');
        },
        success: function (response) {
            setTimeout(function () {
                $(".form-button").empty().html("<img src='./dist/images/btn-ajax-loader.gif'/> &nbsp; Signing In ...please wait ....");
                window.location.href = "../adminindex";
            }, 2000);
        },
        error: function (err) {
            console.log(err);
            $("#error").fadeIn(500, function (e) {
                $("#error").empty().html('<br/><div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; ' + 'wrong username/password' + ' !</div>');
            });
        }
    });
};
export const formsubmit = (form) => {
    alert('submit');
    return;
};
