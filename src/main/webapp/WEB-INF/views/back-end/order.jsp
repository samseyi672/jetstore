<!DOCTYPE html>
<html lang="en">
<head>

   <!--  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Multikart admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
    <meta name="keywords" content="admin template, Multikart admin template, dashboard template, flat admin template, responsive admin template, web app">
    <meta name="author" content="pixelstrap">
    <link rel="icon" href="/assets/images/dashboard/crista.png" type="image/x-icon">
    <link rel="shortcut icon" href="/assets/images/dashboard/crista.png" type="image/x-icon">
    <title>CRISTA DIGITAl</title>
    Google font
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    Font Awesome
    <link rel="stylesheet" type="text/css" href="/assets/css/fontawesome.css">

    Flag icon
    <link rel="stylesheet" type="text/css" href="/assets/css/flag-icon.css"> -->

    <!-- Datatables css-->
    
    <link rel="stylesheet" type="text/css" href="/assets/css/datatables.css">
  <jsp:include page="pagescsslinks.jsp" />
</head>
<body>

<!-- page-wrapper Start-->
<div class="page-wrapper">

    <!-- Page Header Start-->
     <jsp:include page="pagesheader.jsp"/>
    <!-- 
    <div class="page-main-header">
        <div class="main-header-right row">
            <div class="main-header-left d-lg-none">
                <div class="logo-wrapper"><a href="index.html"><img class="blur-up lazyloaded" src="/assets/images/dashboard/crista.png" alt=""></a></div>
            </div>
            <div class="mobile-sidebar">
                <div class="media-body text-right switch-sm">
                    <label class="switch"><a href="#"><i id="sidebar-toggle" data-feather="align-left"></i></a></label>
                </div>
            </div>
            <div class="nav-right col">
                <ul class="nav-menus">
                    <li>
                        <form class="form-inline search-form">
                            <div class="form-group">
                                <input class="form-control-plaintext" type="search" placeholder="Search.."><span class="d-sm-none mobile-search"><i data-feather="search"></i></span>
                            </div>
                        </form>
                    </li>
                    <li><a class="text-dark" href="#!" onclick="javascript:toggleFullScreen()"><i data-feather="maximize-2"></i></a></li>
                    <li class="onhover-dropdown"><a class="txt-dark" href="#">
                        <h6>EN</h6></a>
                        <ul class="language-dropdown onhover-show-div p-20">
                            <li><a href="#" data-lng="en"><i class="flag-icon flag-icon-is"></i> English</a></li>
                            <li><a href="#" data-lng="es"><i class="flag-icon flag-icon-um"></i> Spanish</a></li>
                            <li><a href="#" data-lng="pt"><i class="flag-icon flag-icon-uy"></i> Portuguese</a></li>
                            <li><a href="#" data-lng="fr"><i class="flag-icon flag-icon-nz"></i> French</a></li>
                        </ul>
                    </li>
                    <li class="onhover-dropdown"><i data-feather="bell"></i><span class="badge badge-pill badge-primary pull-right notification-badge">3</span><span class="dot"></span>
                        <ul class="notification-dropdown onhover-show-div p-0">
                            <li>Notification <span class="badge badge-pill badge-primary pull-right">3</span></li>
                            <li>
                                <div class="media">
                                    <div class="media-body">
                                        <h6 class="mt-0"><span><i class="shopping-color" data-feather="shopping-bag"></i></span>Your order ready for Ship..!</h6>
                                        <p class="mb-0">Shipping</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="media">
                                    <div class="media-body">
                                        <h6 class="mt-0 txt-success"><span><i class="download-color font-success" data-feather="download"></i></span>Download Complete</h6>
                                        <p class="mb-0">download</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="media">
                                    <div class="media-body">
                                        <h6 class="mt-0 txt-danger"><span><i class="alert-color font-danger" data-feather="alert-circle"></i></span>250 MB trash files</h6>
                                        <p class="mb-0">250 MB</p>
                                    </div>
                                </div>
                            </li>
                            <li class="bg-light txt-dark"><a href="#">All</a> notification</li>
                        </ul>
                    </li>
                    <li><a href="#"><i class="right_side_toggle" data-feather="message-square"></i><span class="dot"></span></a></li>
                    <li class="onhover-dropdown">
                        <div class="media align-items-center"><img class="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" src="/assets/images/dashboard/man.png" alt="header-user">
                            <div class="dotted-animation"><span class="animate-circle"></span><span class="main-circle"></span></div>
                        </div>
                        <ul class="profile-dropdown onhover-show-div p-20">
                            <li><a href="#"><i data-feather="user"></i>Edit Profile</a></li>
                            <li><a href="#"><i data-feather="mail"></i>Inbox</a></li>
                            <li><a href="#"><i data-feather="lock"></i>Lock Screen</a></li>
                            <li><a href="#"><i data-feather="settings"></i>Settings</a></li>
                            <li><a href="#"><i data-feather="log-out"></i>Logout</a></li>
                        </ul>
                    </li>
                </ul>
                <div class="d-lg-none mobile-toggle pull-right"><i data-feather="more-horizontal"></i></div>
            </div>
        </div>
    </div>
 -->    <!-- Page Header Ends -->

    <!-- Page Body Start-->
    <div class="page-body-wrapper">

        <!-- Page Sidebar Start-->
          <jsp:include page="pagessidebar.jsp"/>
        <!-- 
        <div class="page-sidebar">
            <div class="main-header-left d-none d-lg-block">
                <div class="logo-wrapper"><a href="index.html"><img class="blur-up lazyloaded" src="/assets/images/dashboard/crista.png" alt=""></a></div>
            </div>
            <div class="sidebar custom-scrollbar">
                <div class="sidebar-user text-center">
                    <div><img class="img-60 rounded-circle blur-up lazyloaded" src="/assets/images/dashboard/man.png" alt="#">
                    </div>
                    <h6 class="mt-3 f-14">JOHN</h6>
                    <p>general manager.</p>
                </div>
                <ul class="sidebar-menu">
                    <li><a class="sidebar-header" href="index.html"><i data-feather="home"></i><span>Dashboard</span></a></li>
                    <li><a class="sidebar-header" href="#"><i data-feather="box"></i> <span>Products</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li>
                                <a href="#"><i class="fa fa-circle"></i>
                                    <span>Physical</span> <i class="fa fa-angle-right pull-right"></i>
                                </a>
                                <ul class="sidebar-submenu">
                                    <li><a href="category.html"><i class="fa fa-circle"></i>Category</a></li>
                                    <li><a href="category-sub.html"><i class="fa fa-circle"></i>Sub Category</a></li>
                                    <li><a href="product-list.html"><i class="fa fa-circle"></i>Product List</a></li>
                                    <li><a href="product-detail.html"><i class="fa fa-circle"></i>Product Detail</a></li>
                                    <li><a href="add-product.html"><i class="fa fa-circle"></i>Add Product</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-circle"></i>
                                    <span>Digital</span> <i class="fa fa-angle-right pull-right"></i>
                                </a>
                                <ul class="sidebar-submenu">
                                    <li><a href="category-digital.html"><i class="fa fa-circle"></i>Category</a></li>
                                    <li><a href="category-digitalsub.html"><i class="fa fa-circle"></i>Sub Category</a></li>
                                    <li><a href="product-listdigital.html"><i class="fa fa-circle"></i>Product List</a></li>
                                    <li><a href="add-digital-product.html"><i class="fa fa-circle"></i>Add Product</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href=""><i data-feather="dollar-sign"></i><span>Sales</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="order.html"><i class="fa fa-circle"></i>Orders</a></li>
                            <li><a href="transactions.html"><i class="fa fa-circle"></i>Transactions</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href=""><i data-feather="tag"></i><span>Coupons</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="coupon-list.html"><i class="fa fa-circle"></i>List Coupons</a></li>
                            <li><a href="coupon-create.html"><i class="fa fa-circle"></i>Create Coupons </a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href="#"><i data-feather="clipboard"></i><span>Pages</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="pages-list.html"><i class="fa fa-circle"></i>List Page</a></li>
                            <li><a href="page-create.html"><i class="fa fa-circle"></i>Create Page</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href="media.html"><i data-feather="camera"></i><span>Media</span></a></li>
                    <li><a class="sidebar-header" href="#"><i data-feather="align-left"></i><span>Menus</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="menu-list.html"><i class="fa fa-circle"></i>Menu Lists</a></li>
                            <li><a href="create-menu.html"><i class="fa fa-circle"></i>Create Menu</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href=""><i data-feather="user-plus"></i><span>Users</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="user-list.html"><i class="fa fa-circle"></i>User List</a></li>
                            <li><a href="create-user.html"><i class="fa fa-circle"></i>Create User</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href=""><i data-feather="users"></i><span>Vendors</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="list-vendor.html"><i class="fa fa-circle"></i>Vendor List</a></li>
                            <li><a href="create-vendors.html"><i class="fa fa-circle"></i>Create Vendor</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href=""><i data-feather="chrome"></i><span>Localization</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="translations.html"><i class="fa fa-circle"></i>Translations</a></li>
                            <li><a href="currency-rates.html"><i class="fa fa-circle"></i>Currency Rates</a></li>
                            <li><a href="taxes.html"><i class="fa fa-circle"></i>Taxes</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href="reports.html"><i data-feather="bar-chart"></i><span>Reports</span></a></li>
                    <li><a class="sidebar-header" href=""><i data-feather="settings" ></i><span>Settings</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="profile.html"><i class="fa fa-circle"></i>Profile</a></li>
                        </ul>
                    </li>
<li><a class="sidebar-header" href="invoice.html"><i data-feather="archive"></i><span>Invoice</span></a>
                    </li>
                    <li><a class="sidebar-header" href="login.html"><i data-feather="log-in"></i><span>Login</span></a>
                    </li>
                </ul>
            </div>
        </div>
 -->        <!-- Page Sidebar Ends-->

        <!-- Right sidebar Start-->
        <!--
        <div class="right-sidebar" id="right_side_bar">
            <div>
                <div class="container p-0">
                    <div class="modal-header p-l-20 p-r-20">
                        <div class="col-sm-8 p-0">
                            <h6 class="modal-title font-weight-bold">FRIEND LIST</h6>
                        </div>
                        <div class="col-sm-4 text-right p-0"><i class="mr-2" data-feather="settings"></i></div>
                    </div>
                </div>
                <div class="friend-list-search mt-0">
                    <input type="text" placeholder="search friend"><i class="fa fa-search"></i>
                </div>
                <div class="p-l-30 p-r-30">
                    <div class="chat-box">
                        <div class="people-list friend-list">
                            <ul class="list">
                                <li class="clearfix"><img class="rounded-circle user-image blur-up lazyloaded" src="/assets/images/dashboard/user.png" alt="">
                                    <div class="status-circle online"></div>
                                    <div class="about">
                                        <div class="name">Vincent Porter</div>
                                        <div class="status"> Online</div>
                                    </div>
                                </li>
                                <li class="clearfix"><img class="rounded-circle user-image blur-up lazyloaded" src="/assets/images/dashboard/user1.jpg" alt="">
                                    <div class="status-circle away"></div>
                                    <div class="about">
                                        <div class="name">Ain Chavez</div>
                                        <div class="status"> 28 minutes ago</div>
                                    </div>
                                </li>
                                <li class="clearfix"><img class="rounded-circle user-image blur-up lazyloaded" src="/assets/images/dashboard/user2.jpg" alt="">
                                    <div class="status-circle online"></div>
                                    <div class="about">
                                        <div class="name">Kori Thomas</div>
                                        <div class="status"> Online</div>
                                    </div>
                                </li>
                                <li class="clearfix"><img class="rounded-circle user-image blur-up lazyloaded" src="/assets/images/dashboard/user3.jpg" alt="">
                                    <div class="status-circle online"></div>
                                    <div class="about">
                                        <div class="name">Erica Hughes</div>
                                        <div class="status"> Online</div>
                                    </div>
                                </li>
                                <li class="clearfix"><img class="rounded-circle user-image blur-up lazyloaded" src="/assets/images/dashboard/man.png" alt="">
                                    <div class="status-circle offline"></div>
                                    <div class="about">
                                        <div class="name">Ginger Johnston</div>
                                        <div class="status"> 2 minutes ago</div>
                                    </div>
                                </li>
                                <li class="clearfix"><img class="rounded-circle user-image blur-up lazyloaded" src="/assets/images/dashboard/user5.jpg" alt="">
                                    <div class="status-circle away"></div>
                                    <div class="about">
                                        <div class="name">Prasanth Anand</div>
                                        <div class="status"> 2 hour ago</div>
                                    </div>
                                </li>
                                <li class="clearfix"><img class="rounded-circle user-image blur-up lazyloaded" src="/assets/images/dashboard/designer.jpg" alt="">
                                    <div class="status-circle online"></div>
                                    <div class="about">
                                        <div class="name">Hileri Jecno</div>
                                        <div class="status"> Online</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        -->
        <!-- Right sidebar Ends-->

        <div class="page-body">

            <!-- Container-fluid starts-->
            <div class="container-fluid">
                <div class="page-header">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="page-header-left">
                                <h3>Orders
                                    <small>Crista Digital Admin panel</small>
                                </h3>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <ol class="breadcrumb pull-right">
                                <li class="breadcrumb-item"><a href="index.html"><i data-feather="home"></i></a></li>
                                <li class="breadcrumb-item">Sales</li>
                                <li class="breadcrumb-item active">Orders</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Container-fluid Ends-->

            <!-- Container-fluid starts-->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-header">
                                <h5>Manage Order</h5>
                            </div>
                            <div class="card-body" style="display:none;" id="prd">
                              <div class="table-responsive">
                                        <table class="table table-striped table-borderless qty">
                                          <thead>
                                          <th><strong>Product</strong></th>
                                          <th><strong>Quantity</strong></th>
                                          <th><strong>Total</strong></th>
                                          <th><strong>Tax</strong></th>
                                          <th><strong>Shipping</strong></th>
                                          <th><strong>LocalPickup</strong></th>
                                          <th><strong>Price</strong></th>
                                          </thead>
                                          <tbody id="orderdetail">
                                        <!--   <tr><td>Pink Slim Shirt</td><td>1</td><td><span>$25.10</span><td></tr>
                                          <tr><td>SLim Fit Jeans</td><td>1</td><td><span>$555.00</span></td></tr> -->
                                          </tbody>
                                        </table>
                                        </div>
                                        <form id="orderform">
										  <div class="form-row ml-1">
										    <div class="col-auto">
										      <input type="text" class="form-control" name="firstname" placeholder="First name">
										    </div>
										    <div class="col-auto">
										      <input type="text" class="form-control" name="lastname" placeholder="Last name">
										    </div>
										     <div class="col-auto">
										      <input type="text" class="form-control" name="phone" placeholder="phone">
										    </div>
										     <div class="col-auto">
										      <input type="email" class="form-control" name="email" placeholder="email">
										    </div>
										  </div>
										   <div class="form-row ml-1 mt-2">
										    <div class="col-auto">
										      <input type="text" class="form-control" name="country" placeholder="country">
										    </div>
										    <div class="col-auto">
										      <input type="text" class="form-control" name="address" placeholder="address">
										    </div>
										     <div class="col-auto">
										      <input type="text" class="form-control" name="town" placeholder="town">
										    </div>
										     <div class="col-auto">
										      <input type="text" class="form-control" name="state" placeholder="state">
										    </div>
										  </div>
										   <div class="form-row ml-1 mt-2">
										    <div class="col-auto">
										      <input type="text" class="form-control" name="postalcode" placeholder="postal code">
										    </div>										   										   
										  </div>
										 <div class="custom-control custom-checkbox custom-control-inline ml-1 mt-2">
										  <input type="checkbox" id="shipping" name="shipping" class="custom-control-input">
										  <label class="custom-control-label" for="customRadioInline1">Shipping</label>
										</div>
										<div class="custom-control custom-checkbox custom-control-inline ml-1 mt-3">
										  <input type="checkbox" id="localpickup" name="localpickup" class="custom-control-input">
										  <label class="custom-control-label" for="customRadioInline2">Local Pick Up</label>
										</div>
										</form>
										</div>
                           <!--    <div class="container">
                         <form id="regform">
                        <div class="row">
                            <div class="col-lg-6 col-sm-12 col-xs-12">
                                <div class="checkout-title">
                                    <h3>Billing Details</h3>
                                </div>
                                <div id="error">
                                
                                </div>
                                <div class="row check-out">
                                    <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                        <div class="field-label">First Name</div>
                                        <input type="text" name="firstname" value="" placeholder="">
                                    </div>
                                    <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                        <div class="field-label">Last Name</div>
                                        <input type="text" name="lastname" value="" placeholder="last name">
                                    </div>
                                    <div class="form-group col-md-6 col-sm-6 col-xs-12">
                                        <div class="field-label">Phone</div>
                                        <input type="text" name="phone" value="" placeholder="phone">
                                    </div>
                                    </div>
                                    </div>
                                    </div>>
                                    </form>
                                    </div> -->
                            <div class="card-body order-datatable">
                                <table class="display" id="basic-1">
                                    <thead>
                                    <tr>
                                        <th>Order Id</th>                        
                                        <th>Payment Status</th>
                                        <th>Payment Method</th>
                                        <th>Order Status</th>
                                        <th>Date</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody id="customerorder">
                                       <!--    
                                        <tr>
                                        <td>#51240</td>                                   
                                        <td><span class="badge badge-secondary">Cash On Delivery</span></td>
                                        <td>Paypal</td>
                                        <td><span class="badge badge-success">Delivered</span></td>
                                        <td>Dec 10,18</td>
                                        <td>$54671</td>
                                        <td><span class="fa fa-eye" style="cursor:pointer;" onclick="showprd('2')" title="view details">
                                        </span><span class="fa fa-remove" style="cursor:pointer;" onclick="" title="cancel"></span></td>
                                       </tr> 
                                       -->
                                     <!--
                                    <tr>
                                        <td>#51241</td>
                                        <td>
                                            <div class="d-flex">
                                                <img src="/assets/images/electronics/product/12.jpg" alt="" class="img-fluid img-30 mr-2 blur-up lazyloaded">
                                                
                                                <img src="/assets/images/electronics/product/3.jpg" alt="" class="img-fluid img-30 blur-up lazyloaded">
                                                
                                            </div>
                                        </td>
                                        <td><span class="badge badge-success">Paid</span></td>
                                        <td>Master Card</td>
                                        <td><span class="badge badge-primary">Shipped</span></td>
                                        <td>Feb 15,18</td>
                                        <td>$2136</td>
                                        <td><span class="fa fa-eye"></span><span class="fa fa-remove"></span></td>
                                    </tr>
                                    <tr>
                                        <td>#51242</td>
                                        <td><img src="/assets/images/electronics/product/14.jpg" alt="" class="img-fluid img-30 blur-up lazyloaded"></td>
                                        <td><span class="badge badge-warning">Awaiting Authentication</span></td>
                                        <td>Debit Card</td>
                                        <td><span class="badge badge-warning">Processing</span></td>
                                        <td>Mar 27,18</td>
                                        <td>$8791</td>
                                        <td><span class="fa fa-eye"></span><span class="fa fa-remove"></span></td>
                                    </tr>
                                    <tr>
                                        <td>#51243</td>
                                        <td>
                                            <div class="d-flex">
                                                <img src="/assets/images/electronics/product/6.jpg" alt="" class="img-fluid img-30 mr-2 blur-up lazyloaded">
                                                
                                                <img src="/assets/images/furniture/8.jpg" alt="" class="img-fluid img-30 blur-up lazyloaded">
                                               
                                            </div>
                                        </td>
                                        <td><span class="badge badge-danger">Payment Failed</span></td>
                                        <td>Master Card</td>
                                        <td><span class="badge badge-danger">Cancelled</span></td>
                                        <td>Sep 1,18</td>
                                        <td>$139</td>
                                        <td><span class="fa fa-eye"></span><span class="fa fa-remove"></span></td>
                                    </tr>
                                    <tr>
                                        <td>#51244</td>
                                        <td>
                                            <div class="d-flex">
                                                <img src="/assets/images/jewellery/pro/18.jpg" alt="" class="img-fluid img-30 mr-2 blur-up lazyloaded">
                                                
                                                <img src="/assets/images/fashion/pro/06.jpg" alt="" class="img-fluid img-30 blur-up lazyloaded">
                                                
                                            </div>
                                        </td>
                                        <td><span class="badge badge-success">Paid</span></td>
                                        <td>Paypal</td>
                                        <td><span class="badge badge-primary">Shipped</span></td>
                                        <td>May 18,18</td>
                                        <td>$4678</td>
                                        <td><span class="fa fa-eye"></span><span class="fa fa-remove"></span></td>
                                    </tr>
                                    <tr>
                                        <td>#51245</td>
                                        <td>
                                            <div class="d-flex">
                                                <img src="/assets/images/electronics/product/19.jpg" alt="" class="img-fluid img-30 mr-2 blur-up lazyloaded">
                                                
                                                <img src="/assets/images/electronics/product/20.jpg" alt="" class="img-fluid img-30 mr-2 blur-up lazyloaded">
                                                <img src="/assets/images/electronics/product/23.jpg" alt="" class="img-fluid img-30 blur-up lazyloaded">
                                                
                                            </div>
                                        </td>
                                        <td><span class="badge badge-success">Paid</span></td>
                                        <td>Visa</td>
                                        <td><span class="badge badge-success">Delivered</span></td>
                                        <td>Jan 14,18</td>
                                        <td>$6791</td>
                                         <td><span class="fa fa-eye"></span><span class="fa fa-remove"></span></td>
                                    </tr> -->
                                    <!-- 
                                    <tr>
                                        <td>#51246</td>
                                        <td><img src="/assets/images/electronics/product/24.jpg" alt="" class="img-fluid img-30 blur-up lazyloaded"></td>
                                        <td><span class="badge badge-warning">Awaiting Authentication</span></td>
                                        <td>Credit Card</td>
                                        <td><span class="badge badge-warning">Processing</span></td>
                                        <td>Apr 22,18</td>
                                        <td>$976</td>
                                    </tr>
                                    <tr>
                                        <td>#51247</td>
                                        <td>
                                            <div class="d-flex">
                                                <img src="/assets/images/electronics/product/21.jpg" alt="" class="img-fluid img-30 mr-2 blur-up lazyloaded">
                                                
                                                <img src="/assets/images/electronics/product/8.jpg" alt="" class="img-fluid img-30 blur-up lazyloaded">
                                                
                                            </div>
                                        </td>
                                        <td><span class="badge badge-danger">Payment Failed</span></td>
                                        <td>Master Card</td>
                                        <td><span class="badge badge-danger">Cancelled</span></td>
                                        <td>Mar 26,18</td>
                                        <td>$3212</td>
                                    </tr>
                                    <tr>
                                        <td>#51248</td>
                                        <td><img src="/assets/images/electronics/product/18.jpg" alt="" class="img-fluid img-30 blur-up lazyloaded"></td>
                                        <td><span class="badge badge-secondary">Cash On Delivery</span></td>
                                        <td>Paypal</td>
                                        <td><span class="badge badge-primary">Shipped</span></td>
                                        <td>Feb 29,18</td>
                                        <td>$6719</td>
                                    </tr>
                                    <tr>
                                        <td>#51249</td>
                                        <td><img src="/assets/images/electronics/product/17.jpg" alt="" class="img-fluid img-30 blur-up lazyloaded"></td>
                                        <td><span class="badge badge-success">Paid</span></td>
                                        <td>Master Card</td>
                                        <td><span class="badge badge-secondary">Processing</span></td>
                                        <td>Sep 2,18</td>
                                        <td>$9765</td>
                                    </tr>
                                    <tr>
                                        <td>#51250</td>
                                        <td>
                                            <div class="d-flex">
                                                <img src="/assets/images/electronics/product/7.jpg" alt="" class="img-fluid img-30 mr-2 blur-up lazyloaded">
                                                
                                                <img src="/assets/images/electronics/product/4.jpg" alt="" class="img-fluid img-30 blur-up lazyloaded">
                                               
                                            </div>
                                        </td>
                                        <td><span class="badge badge-success">Paid</span></td>
                                        <td>Credit Card</td>
                                        <td><span class="badge badge-primary">Shipped</span></td>
                                        <td>Dec 10,18</td>
                                        <td>$9706</td>
                                    </tr>
                                    <tr>
                                        <td>#51251</td>
                                        <td>
                                            <div class="d-flex">
                                                <img src="/assets/images/electronics/product/22.jpg" alt="" class="img-fluid img-30 mr-2 blur-up lazyloaded">
                                                
                                                <img src="/assets/images/electronics/product/20.jpg" alt="" class="img-fluid img-30 blur-up lazyloaded">
                                              
                                            </div>
                                        </td>
                                        <td><span class="badge badge-secondary">Cash On Delivered</span></td>
                                        <td>Paypal</td>
                                        <td><span class="badge badge-primary">Shipped</span></td>
                                        <td>Feb 15,18</td>
                                        <td>$1500</td>
                                    </tr>
                                    <tr>
                                        <td>#51252</td>
                                        <td>
                                            <img src="/assets/images/electronics/product/3.jpg" alt="" class="img-fluid img-30 blur-up lazyloaded">
                                        </td>
                                        <td><span class="badge badge-danger">Payment Failed</span></td>
                                        <td>Credit Card</td>
                                        <td><span class="badge badge-danger">Cancelled</span></td>
                                        <td>Mar 27,18</td>
                                        <td>$18.97</td>
                                    </tr>
                                    <tr>
                                        <td>#51253</td>
                                        <td>
                                            <div class="d-flex">
                                                <img src="/assets/images/electronics/product/11.jpg" alt="" class="img-fluid img-30 mr-2 blur-up lazyloaded">
                                                
                                                <img src="/assets/images/electronics/product/2.jpg" alt="" class="img-fluid img-30 mr-2 blur-up lazyloaded">
                                                <img src="/assets/images/electronics/product/9.jpg" alt="" class="img-fluid img-30 blur-up lazyloaded">
                                              
                                            </div>
                                        </td>
                                        <td><span class="badge badge-success">Paid</span></td>
                                        <td>Visa</td>
                                        <td><span class="badge badge-success">Delivered</span></td>
                                        <td>Mar 30,18</td>
                                        <td>$3478</td>
                                    </tr>
                                    <tr>
                                        <td>#51254</td>
                                        <td>
                                            <div class="d-flex">
                                                <img src="/assets/images/electronics/pro/4.jpg" alt="" class="img-fluid img-30 mr-2 blur-up lazyloaded">
                                                 
                                                <img src="/assets/images/electronics/pro/5.jpg" alt="" class="img-fluid img-30 blur-up lazyloaded">
                                                 
                                            </div>
                                        </td>
                                        <td><span class="badge badge-warning">Awaiting Authentication</span></td>
                                        <td>0.80 %</td>
                                        <td><span class="badge badge-warning">Processing</span></td>
                                        <td>Apr 5,18</td>
                                        <td>$9672</td>
                                    </tr> -->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Container-fluid Ends-->

        </div>

        <!-- footer start-->
          <jsp:include page="pagefooter.jsp"/>
       <!--  <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 footer-copyright">
                        <p class="mb-0">Copyright 2019 © Multikart All rights reserved.</p>
                    </div>
                    <div class="col-md-6">
                        <p class="pull-right mb-0">Hand crafted & made with<i class="fa fa-heart"></i></p>
                    </div>
                </div>
            </div>
        </footer> -->
        <!-- footer end-->

    </div>

</div>

<!-- latest jquery-->

<script src="/assets/js/jquery-3.3.1.min.js"></script>

<!-- Bootstrap js-->
<script src="/assets/js/popper.min.js"></script>
<script src="/assets/js/bootstrap.js"></script>

<!-- feather icon js-->
<script src="/assets/js/icons/feather-icon/feather.min.js"></script>
<script src="/assets/js/icons/feather-icon/feather-icon.js"></script>

<!-- Sidebar jquery-->
<script src="/assets/js/sidebar-menu.js"></script>

<!-- Datatable js-->
<script src="/assets/js/datatables/jquery.dataTables.min.js"></script>
<script src="/assets/js/datatables/custom-basic.js"></script>

<!--Customizer admin-->
<script src="/assets/js/admin-customizer.js"></script>

<!-- lazyload js-->
<script src="/assets/js/lazysizes.min.js"></script>

<!--right sidebar js-->
<script src="/assets/js/chat-menu.js"></script>

<!--script admin-->
<script src="/assets/js/admin-script.js"></script>
 <jsp:include page="../frontend/frontendplugin.jsp" />
</body>
</html>
