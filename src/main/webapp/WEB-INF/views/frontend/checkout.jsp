<!DOCTYPE html>
<html lang="en">

<head>

    <!-- <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="description" content="crista">
    <meta name="keywords" content="crista">
    <meta name="author" content="crista">
    <link rel="icon" href="/assets/images/favicon/crista.png" type="image/x-icon">
    <link rel="shortcut icon" href="/assets/images/favicon/crista.png" type="image/x-icon">
    <title>CRISTA DIGITAL</title>

    Google font
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet">

    Icons
    <link rel="stylesheet" type="text/css" href="/assets/css/fontawesome.css">

    Slick slider css
    <link rel="stylesheet" type="text/css" href="/assets/css/slick.css">
    <link rel="stylesheet" type="text/css" href="/assets/css/slick-theme.css">

    Animate icon
    <link rel="stylesheet" type="text/css" href="/assets/css/animate.css">

    Themify icon
    <link rel="stylesheet" type="text/css" href="/assets/css/themify-icons.css">

    Bootstrap css
    <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.css">

    Theme css
    <link rel="stylesheet" type="text/css" href="/assets/css/color1.css" media="screen" id="color"> -->
 <jsp:include page="headerlinks.jsp" />
  <jsp:include page="frontendlinks.jsp" />
</head>

<body>
    <!-- header start -->
    
    <!-- header end -->
    
 <jsp:include page="header.jsp" />
 
    <!-- breadcrumb start -->
    <div class="breadcrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="page-title">
                        <h2>Check-out</h2>
                    </div>
                </div>
                <div class="col-sm-6">
                    <nav aria-label="breadcrumb" class="theme-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Check-out</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb End -->


    <!-- section start -->
    <section class="section-b-space">
        <div class="container">
            <div class="checkout-page">
                <div class="checkout-form">
                    <form id="regform">
                        <div class="row">
                            <div class="col-lg-6 col-sm-12 col-xs-12">
                                <div class="checkout-title">
                                    <h3>Billing Details</h3>
                                </div>                             
                                <div class="row check-out">
                                    <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                        <div class="field-label">First Name</div>
                                        <input type="text" name="firstname" value="" placeholder="" required="true">
                                    </div>
                                    <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                        <div class="field-label">Last Name</div>
                                        <input type="text" name="lastname" value="" placeholder="last name" required="true"/>
                                    </div>
                                    <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                        <div class="field-label">Phone</div>
                                        <input type="text" name="phone" value="" placeholder="phone" required="true" />
                                    </div>
                                    <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                        <div class="field-label">Email Address</div>
                                        <input type="text" name="email" value="" placeholder="email" required="true" />
                                    </div>
                                    <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                        <div class="field-label">Country</div>
                                        <select id="country" name="country" required="true">
                                        </select>
                                    </div>
                                   <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                        <div class="field-label">State</div>
<!--                                        <input type="text" name="state" value="" placeholder="State">-->
                                        <select id="state" name="state"  placeholder="State" required="true">
                                            
                                        </select>
                                    </div>
                                     <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                        <div class="field-label">Town/City</div>
<!--                                        <input type="text" name="town" value="" placeholder="Town/city">-->
                                       <select id="city" name="town" placeholder="City/Town" required="true">
                                            
                                        </select>
                                     </div>
                                 <div class="form-group col-md-12 col-sm-12 col-xs-12">
                                        <div class="field-label">Address</div>
                                        <input type="text" name="address" value="" placeholder="Street address" required="true" />
                                    </div>
                                  <!--    
                                   <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                        <div class="field-label">Password</div>
                                        <input type="password" name="password" value="" placeholder="Password">
                                    </div>
                                     -->
                                    <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                        <div class="field-label">Postal Code</div>
                                        <input type="text" name="postalcode" value="" placeholder="Postal code" required="true" />
                                    </div>
                                   <div class="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <input type="checkbox" name="shipping-option" id="account-option">
                                        <label for="account-option">Create An Account?</label>
                                    </div>
                                    <!--   
                                    <div class="form-group col-md-12 col-sm-6 col-xs-12">
                                        <div class="field-label">Postal Code</div>
                                     <a href="javascript:void(0)" class="btn btn-primary" id="createbilling">Create</a>
                                    </div> 
                                    -->
                                     <div id="error">
                                
                                      </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12 col-xs-12">
                                <div class="checkout-details">
                                    <div class="order-box">
                                       <!--  <div class="title-box">
                                            <div>Product <span>Total</span></div>
                                        </div> -->
                                       <!--  <ul class="qty">
                                            <li>Pink Slim Shirt— 1 <span>$25.10</span></li>
                                            <li>SLim Fit Jeans 1 <span>$555.00</span></li>
                                        </ul> -->
                                        <div class="table-responsive">
                                        <table class="table table-striped table-borderless qty">
                                          <thead>
                                          <th><strong>product</strong></th>
                                          <th><strong>quantity</strong></th>
                                          <th><strong>price</strong></th>
                                          <th><strong>total</strong><th>
                                          <th><strong>tax</strong><th>
                                        <!--   <th style="display:none;"><strong>productid</strong></th> -->
                                          </thead>
                                          <tbody id="cartcheckout">
<!--                                          <tr><td>Pink Slim Shirt</td><td>1</td><td><span>$25.10</span></td><td><span>$25.10</span><td><td>5%</td></tr>
                                          <tr><td>SLim Fit Jeans</td><td>1</td><td><span>$555.00</span></td><td><span>$25.10</span><td><td>5%</td></tr>                           -->
                                          </tbody>
                                        </table>
                                        </div>
                                        <ul class="sub-total">
                                            <!-- <li>Subtotal <span class="count">$380.10</span></li> -->
                                            <li>Shipping
                                                <div class="shipping">
                                                    <div class="shopping-option">
                                                        <input type="radio" name="trnasportertype" id="free-shipping">
                                                        <label for="free-shipping">Shipping</label>
                                                    </div>
                                                    <div class="shopping-option">
                                                        <input type="radio"  name="trnasportertype" id="local-pickup">
<!--                                                         <input type="checkbox"  name="localpickup" id="local-pickup">-->
                                                        <label for="local-pickup">Local Pickup</label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul class="total">
                                            <li>Total <span class="count" id="total">00.00</span></li>
                                        </ul>
                                    </div>
                                    <div class="payment-box">
                                        <div class="upper-box">
                                            <div class="payment-options">
                                                <ul>
                                                   <!--  <li>
                                                        <div class="radio-option">
                                                            <input type="radio" name="paymentgroup" id="payment-1"
                                                               value="checkpayments">
                                                            <label for="payment-1">Check Payments<span
                                                                    class="small-text">Please send a check to Store
                                                                    Name, Store Street, Store Town, Store State /
                                                                    County, Store Postcode.</span></label>
                                                         </div>                                                     
                                                    </li> 
                                                    -->
                                                <!--    
                                                  <li style="display:none;">
                                                       <div class="form-group">
						                                        <div class="field-label">Upload your Check</div>
						                                        <input class="form-control" type="file" name="check">
						                                    </div>
                                                    </li> 
                                                    -->
                                                    <li>
                                                        <div class="radio-option">
                                                            <input type="radio" name="paymentgroup" id="payment-2" value="cashondelivery">
                                                            <label for="payment-2">Pay On Delivery<span
                                                                    class="small-text">Please send a check to Store
                                                                    Name, Store Street, Store Town, Store State /
                                                                    County, Store Postcode.</span></label>
                                                        </div>
                                                    </li>
<!--                                                    <li>
                                                        <div class="radio-option">
                                                            <input type="radio" name="paymentgroup"
                                                                id="payment-3" value="mastercard">
                                                            <label for="payment-3">Master Card</label>
                                                        </div>
                                                    </li>
                                                      <li>
                                                        <div class="radio-option">
                                                            <input type="radio" name="paymentgroup"
                                                               id="payment-4" value="visacard">
                                                            <label for="payment-4">Visa Card</label>
                                                        </div>
                                                    </li>-->
                                                     <li>
                                                        <div class="radio-option">
                                                            <input type="radio" name="paymentgroup"
                                                                id="payment-5" value="vervecard">
                                                            <label for="payment-5">Pay(Debit Card)</label>
                                                        </div>
                                                    </li>
<!--                                                    <li>
                                                        <div class="radio-option paypal">
                                                            <input type="radio" name="paymentgroup" id="payment-6" value="paypal">
                                                           <label for="payment-6">Pay with Account
                                                               <span class="image">
                                                            <img src="/assets/images/paypal.png" alt=""></span>
                                                            </label> 
                                                        </div>
                                                    </li>-->
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="text-right">
                                         <a href="javascript:void(0);"  
                                        id="clearorder" class="btn-solid btn" onclick="(()=>{if(confirm('Do you want to clear the form')){document.getElementById('regform').reset();}})()">Clear Order</a>
                                        &nbsp;&nbsp;
                                        <a href="javascript:void(0);"  
                                        id="createbilling" class="btn-solid btn">Place Order</a>
                                        </div>                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!-- section end -->


    <!-- footer start -->
<!--     
        <footer class="footer-light">
        <div class="light-layout">
            <div class="container">
                <section class="small-section border-section border-top-0">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="subscribe">
                                <div>
                                    <h4>KNOW IT ALL FIRST!</h4>
                                    <p>Never Miss Anything From CRISTA DIGITAL  By Signing Up To Our Newsletter.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <form
                                action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&amp;id=082f74cbda"
                                class="form-inline subscribe-form auth-form needs-validation" method="post"
                                id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                                <div class="form-group mx-sm-3">
                                    <input type="text" class="form-control" name="EMAIL" id="mce-EMAIL"
                                        placeholder="Enter your email" required="required">
                                </div>
                                <button type="submit" class="btn btn-solid" id="mc-submit">subscribe</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <section class="section-b-space light-layout">
            <div class="container">
                <div class="row footer-theme partition-f">
                    <div class="col-lg-4 col-md-6">
                        <div class="footer-title footer-mobile-title">
                            <h4>about</h4>
                        </div>
                        <div class="footer-contant">
                            <div class="footer-logo"><img src="/assets/images/icon/crista_logo.png" alt=""></div>
                            <p>Crista Digital is a marketplace for Electronics, household and many other items.</p>
                            <div class="footer-social">
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-rss" aria-hidden="true"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col offset-xl-1">
                        <div class="sub-title">
                            <div class="footer-title">
                                <h4>my account</h4>
                            </div>
                            <div class="footer-contant">
                                <ul>
                                    <li><a href="#">Computers</a></li>
                                    <li><a href="#">Phones</a></li>
                                    <li><a href="#">Healthy Living Products</a></li>
                                    <li><a href="#">Appliancess</a></li>
                                    <li><a href="#">Accessories</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="sub-title">
                            <div class="footer-title">
                                <h4>why we choose</h4>
                            </div>
                            <div class="footer-contant">
                                <ul>
                                    <li><a href="#">shipping & return</a></li>
                                    <li><a href="#">secure shopping</a></li>
                                    <li><a href="#">gallery</a></li>
                                    <li><a href="#">affiliates</a></li>
                                    <li><a href="#">contacts</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="sub-title">
                            <div class="footer-title">
                                <h4>store information</h4>
                            </div>
                            <div class="footer-contant">
                                <ul class="contact-list">
                                    <li><i class="fa fa-map-marker"></i>CRISTA DIGITAL,Plot 115, Block 18,T.F. Kuboye Street,By Oniru Shopping Complex Lekki Lagos</li>
                                    <li><i class="fa fa-phone"></i>Call Us: 08086581822, 08085863502</li>
                                    <li><i class="fa fa-envelope-o"></i>Email Us: <a href="#">sales@cristadigital.com</a></li>
                                    <li></i>Website:  <a href ="#">www.cristadigital.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="sub-footer">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-md-6 col-sm-12">
                        <div class="footer-end">
                            <p><i class="fa fa-copyright" aria-hidden="true"></i> 2020-21 Jetsoft Technologies</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-md-6 col-sm-12">
                        <div class="payment-card-bottom">
                            <ul>
                                <li>
                                    <a href="#"><img src="/assets/images/icon/visa.png" alt=""></a>
                                </li>
                                <li>
                                    <a href="#"><img src="/assets/images/icon/mastercard.png" alt=""></a>
                                </li>
                                <li>
                                    <a href="#"><img src="/assets/images/icon/paypal.png" alt=""></a>
                                </li>
                                <li>
                                    <a href="#"><img src="/assets/images/icon/american-express.png" alt=""></a>
                                </li>
                                <li>
                                    <a href="#"><img src="/assets/images/icon/discover.png" alt=""></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
     -->
     
    <!-- footer end -->
<jsp:include page="footer.jsp" />
    <!-- theme setting -->
   <a href="javascript:void(0)" onclick="openSetting()">
        <div class="setting-sidebar" id="setting-icon">
            <div>
                <i class="fa fa-cog" aria-hidden="true"></i>
            </div>
        </div>
    </a>
    <div id="setting_box" class="setting-box">
        <a href="javascript:void(0)" class="overlay" onclick="closeSetting()"></a>
        <div class="setting_box_body">
            <div onclick="closeSetting()">
                <div class="sidebar-back text-left"><i class="fa fa-angle-left pr-2" aria-hidden="true"></i> Back</div>
            </div>
            <div class="setting-body">               
                <div class="setting-title">
                    <h4>color picker</h4>
                </div>
                <div class="setting-contant">
                    <ul class="color-box">
                        <li>
                            <input id="ColorPicker1" type="color" value="#cc2121" name="Background">
                            <span>theme deafult color</span>
                        </li>
                    </ul>
                </div>                
            </div>
        </div>
    </div>
    <!-- theme setting -->


    <!-- tap to top start -->
    <div class="tap-top">
        <div><i class="fa fa-angle-double-up"></i></div>
    </div>
    <!-- tap to top end -->


    <!-- latest jquery-->
    <script src="/assets/js/jquery-3.3.1.min.js"></script>

    <!-- menu js-->
    <script src="/assets/js/menu.js"></script>

    <!-- lazyload js-->
    <script src="/assets/js/lazysizes.min.js"></script>

    <!-- popper js-->
    <script src="/assets/js/popper.min.js"></script>

    <!-- slick js-->
    <script src="/assets/js/slick.js"></script>

    <!-- Bootstrap js-->
    <script src="/assets/js/bootstrap.js"></script>

    <!-- Bootstrap Notification js-->
    <script src="/assets/js/bootstrap-notify.min.js"></script>

    <!-- Theme js-->
    <script src="/assets/js/script.js"></script>

    <script>
        function openSearch() {
            document.getElementById("search-overlay").style.display = "block";
        }

        function closeSearch() {
            document.getElementById("search-overlay").style.display = "none";
        }
    </script>
     <jsp:include page="frontendplugin.jsp" />
</body>

</html>