<!DOCTYPE html>
<html lang="en">

<head>
<!--     
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Multikart admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
    <meta name="keywords" content="admin template, Multikart admin template, dashboard template, flat admin template, responsive admin template, web app">
    <meta name="author" content="pixelstrap">
    <link rel="icon" href="/assets/images/dashboard/favicon.png" type="image/x-icon">
    <link rel="shortcut icon" href="/assets/images/dashboard/favicon.png" type="image/x-icon">
    <title>Crista Digital</title>

    Google font
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    Font Awesome
    <link rel="stylesheet" type="text/css" href="/assets/css/fontawesome.css">

    Flag icon
    <link rel="stylesheet" type="text/css" href="/assets/css/flag-icon.css">

    Bootstrap css
    <link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.css">

    App css
    <link rel="stylesheet" type="text/css" href="/assets/css/admin.css"> -->
<jsp:include page="pagescsslinks.jsp" />
</head>
<body>

	<!-- page-wrapper Start-->
	<div class="page-wrapper">

		<!-- Page Header Start-->
		<jsp:include page="pagesheader.jsp" />
		<!--     <div class="page-main-header">
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
                                        <p class="mb-0">.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="media">
                                    <div class="media-body">
                                        <h6 class="mt-0 txt-success"><span><i class="download-color font-success" data-feather="download"></i></span>Download Complete</h6>
                                        <p class="mb-0">Downloads.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="media">
                                    <div class="media-body">
                                        <h6 class="mt-0 txt-danger"><span><i class="alert-color font-danger" data-feather="alert-circle"></i></span>250 MB trash files</h6>
                                        <p class="mb-0">Your Files.</p>
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
    </div> -->
		<!-- Page Header Ends -->

		<!-- Page Body Start-->
		<div class="page-body-wrapper">

			<!-- Page Sidebar Start-->
			<jsp:include page="pagessidebar.jsp" />
			<%--         <div class="page-sidebar">
            <div class="main-header-left d-none d-lg-block">
                <div class="logo-wrapper"><a href="/adminindex"><img  class="blur-up lazyloaded" src="/assets/images/dashboard/crista.png" alt=""></a></div>
            </div>
            <div class="sidebar custom-scrollbar">
                <div class="sidebar-user text-center">
                    <div><img class="img-60 rounded-circle blur-up lazyloaded" src="/assets/images/dashboard/man.png" alt="#">
                    </div>
                    <h6 class="mt-3 f-14">JOHN</h6>
                    <p>general manager.</p>
                </div>
                <jsp:include page="pagessidebar.jsp"/>
                 <ul class="sidebar-menu">
                    <li><a class="sidebar-header" href="index.html"><i data-feather="home"></i><span>Dashboard</span></a></li>
                    <li><a class="sidebar-header" href="#"><i data-feather="box"></i> <span>Products</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li>
                                <a href="#"><i class="fa fa-circle"></i>
                                    <span>Physical</span> <i class="fa fa-angle-right pull-right"></i>
                                </a>
                                <ul class="sidebar-submenu">
                                    <li><a href="/category"><i class="fa fa-circle"></i>Category</a></li>
                                    <li><a href="/categorysub"><i class="fa fa-circle"></i>Sub Category</a></li>
                                    <li><a href="/productlist"><i class="fa fa-circle"></i>Product List</a></li>
                                    <li><a href="/productlistdetails"><i class="fa fa-circle"></i>Product Detail</a></li>
                                    <li><a href="/addprod"><i class="fa fa-circle"></i>Add Product</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-circle"></i>
                                    <span>Digital</span> <i class="fa fa-angle-right pull-right"></i>
                                </a>
                                <ul class="sidebar-submenu">
                                    <li><a href="/categorydigital"><i class="fa fa-circle"></i>Category</a></li>
                                    <li><a href="/categorysub"><i class="fa fa-circle"></i>Sub Category</a></li>
                                    <li><a href="/productlistdigital"><i class="fa fa-circle"></i>Product List</a></li>
                                    <li><a href="/addprodigital"><i class="fa fa-circle"></i>Add Product</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href=""><i data-feather="dollar-sign"></i><span>Sales</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/order"><i class="fa fa-circle"></i>Orders</a></li>
                            <li><a href="/transactions"><i class="fa fa-circle"></i>Transactions</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href=""><i data-feather="tag"></i><span>Coupons</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/couponlist"><i class="fa fa-circle"></i>List Coupons</a></li>
                            <li><a href="/couponcreate"><i class="fa fa-circle"></i>Create Coupons </a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href="#"><i data-feather="clipboard"></i><span>Pages</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/pagelist"><i class="fa fa-circle"></i>List Page</a></li>
                            <li><a href="/pagecreate"><i class="fa fa-circle"></i>Create Page</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href="media.html"><i data-feather="camera"></i><span>Media</span></a></li>
                    <li><a class="sidebar-header" href="#"><i data-feather="align-left"></i><span>Menus</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/menulist"><i class="fa fa-circle"></i>Menu Lists</a></li>
                            <li><a href="/createmenu"><i class="fa fa-circle"></i>Create Menu</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href=""><i data-feather="user-plus"></i><span>Users</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/userlist"><i class="fa fa-circle"></i>User List</a></li>
                            <li><a href="/createuser"><i class="fa fa-circle"></i>Create User</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href=""><i data-feather="users"></i><span>Vendors</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/listvendor"><i class="fa fa-circle"></i>Vendor List</a></li>
                            <li><a href="/createvendors"><i class="fa fa-circle"></i>Create Vendor</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href=""><i data-feather="chrome"></i><span>Localization</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/translations"><i class="fa fa-circle"></i>Translations</a></li>
                            <li><a href="/currencyrates"><i class="fa fa-circle"></i>Currency Rates</a></li>
                            <li><a href="/taxes"><i class="fa fa-circle"></i>Taxes</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href="reports.html"><i data-feather="bar-chart"></i><span>Reports</span></a></li>
                    <li><a class="sidebar-header" href=""><i data-feather="settings" ></i><span>Settings</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/profile"><i class="fa fa-circle"></i>Profile</a></li>
                        </ul>
                    </li>
<li><a class="sidebar-header" href="/invoice"><i data-feather="archive"></i><span>Invoice</span></a>
                    </li>
                    <li><a class="sidebar-header" href="/adminlogin"><i data-feather="log-in"></i><span>Login</span></a>
                    </li>
                </ul> 
            </div>
        </div> --%>
			<!-- Page Sidebar Ends-->

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
                                <li class="clearfix"><img class="rounded-circle user-image blur-up lazyloaded" src="../assets/images/dashboard/user.png" alt="">
                                    <div class="status-circle online"></div>
                                    <div class="about">
                                        <div class="name">Vincent Porter</div>
                                        <div class="status"> Online</div>
                                    </div>
                                </li>
                                <li class="clearfix"><img class="rounded-circle user-image blur-up lazyloaded" src="../assets/images/dashboard/user1.jpg" alt="">
                                    <div class="status-circle away"></div>
                                    <div class="about">
                                        <div class="name">Ain Chavez</div>
                                        <div class="status"> 28 minutes ago</div>
                                    </div>
                                </li>
                                <li class="clearfix"><img class="rounded-circle user-image blur-up lazyloaded" src="../assets/images/dashboard/user2.jpg" alt="">
                                    <div class="status-circle online"></div>
                                    <div class="about">
                                        <div class="name">Kori Thomas</div>
                                        <div class="status"> Online</div>
                                    </div>
                                </li>
                                <li class="clearfix"><img class="rounded-circle user-image blur-up lazyloaded" src="../assets/images/dashboard/user3.jpg" alt="">
                                    <div class="status-circle online"></div>
                                    <div class="about">
                                        <div class="name">Erica Hughes</div>
                                        <div class="status"> Online</div>
                                    </div>
                                </li>
                                <li class="clearfix"><img class="rounded-circle user-image blur-up lazyloaded" src="../assets/images/dashboard/man.png" alt="">
                                    <div class="status-circle offline"></div>
                                    <div class="about">
                                        <div class="name">Ginger Johnston</div>
                                        <div class="status"> 2 minutes ago</div>
                                    </div>
                                </li>
                                <li class="clearfix"><img class="rounded-circle user-image blur-up lazyloaded" src="../assets/images/dashboard/user5.jpg" alt="">
                                    <div class="status-circle away"></div>
                                    <div class="about">
                                        <div class="name">Prasanth Anand</div>
                                        <div class="status"> 2 hour ago</div>
                                    </div>
                                </li>
                                <li class="clearfix"><img class="rounded-circle user-image blur-up lazyloaded" src="../assets/images/dashboard/designer.jpg" alt="">
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
									<h3>
										Add Products <small>Crista Digital Admin</small>
									</h3>
								</div>
							</div>
							<div class="col-lg-6">
								<ol class="breadcrumb pull-right">
									<li class="breadcrumb-item"><a href="index.html"><i
											data-feather="home"></i></a></li>
									<li class="breadcrumb-item">Physical</li>
									<li class="breadcrumb-item active">Add Product</li>
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
									<h5>Add Product</h5>
								</div>

								<div class="card-body">
									<div class="col-md-7">
										<form>
											<div class="form-group">
												<select class="usersearch form-control" name="usersearch"
													id="usersearch">
												</select>
											</div>
										</form>
									</div>
									<div class="row product-adding">
										<!--  <div class="col-xl-5">
                                        <div class="add-product">
                                            <div class="row">
                                                <div class="col-xl-9 xl-50 col-sm-6 col-9">
                                                    <img src="/assets/images/pro3/1.jpg" alt=""  class="img-fluid image_zoom_1 blur-up lazyloaded">
                                                </div>
                                                <div class="col-xl-3 xl-50 col-sm-6 col-3">
                                                    <ul class="file-upload-product">
                                                        <li><div class="box-input-file"><input class="upload" type="file"><i class="fa fa-plus"></i></div></li>
                                                        
                                                        <li><div class="box-input-file"><input class="upload" type="file"><i class="fa fa-plus"></i></div></li>
                                                        <li><div class="box-input-file"><input class="upload" type="file"><i class="fa fa-plus"></i></div></li>
                                                        <li><div class="box-input-file"><input class="upload" type="file"><i class="fa fa-plus"></i></div></li>
                                                        <li><div class="box-input-file"><input class="upload" type="file"><i class="fa fa-plus"></i></div></li>
                                                        <li><div class="box-input-file"><input class="upload" type="file"><i class="fa fa-plus"></i></div></li>
                                                       
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->

										<div class="col-xl-7">
											<form class="needs-validation add-product-form" novalidate=""
												id="add-product-form">
												<div class="form">
													<!--  <div class="form-group mb-3 row">
                                                    <label for="validationCustom01" class="col-xl-3 col-sm-4 mb-0">Search Products:</label>
                                                    <input class="form-control col-xl-8 col-sm-7" name="search">  
                                                     <div id="match-list" style="z-index:4;position:absolute;"></div>                                          
                                                </div> -->

													<div class="form-group mb-3 row">
														<label for="validationCustom01"
															class="col-xl-3 col-sm-4 mb-0">Product Image*:</label> <input
															class="form-control col-xl-8 col-sm-7" name="prdfile"
															id="prdfile" type="file" required="">
														<div class="valid-feedback">Looks good!</div>
													</div>
													<div class="form-group mb-3 row">
														<label for="validationCustom01"
															class="col-xl-3 col-sm-4 mb-0">Title(Name)* :</label> <input
															class="form-control col-xl-8 col-sm-7"
															id="validationCustom01" name="productname" type="text"
															required="">
														<div class="valid-feedback">Looks good!</div>
													</div>
													<div class="form-group mb-3 row">
														<label for="validationCustom01"
															class="col-xl-3 col-sm-4 mb-0">Product Code :</label> <input
															class="form-control col-xl-8 col-sm-7"
															id="validationCustom01" name="productcode" type="text"
															required="">
														<div class="valid-feedback">Looks good!</div>
													</div>
													<input type="hidden" class="form-control col-xl-8 col-sm-7"
														name="id" id="id" />
													<div class="form-group mb-3 row">
														<label for="validationCustom01"
															class="col-xl-3 col-sm-4 mb-0">Type* :</label> 
															<!-- <input
															class="form-control col-xl-8 col-sm-7" readonly
															name="prodtype" type="text" value="physical" required=""> -->
															<select class="form-control col-xl-8 col-sm-7"
															id="prodtype" name="prodtype" required="">
															<option value="physical">physical</option>
															<option value="digital">Digital</option>
														</select>
														<div class="valid-feedback">Looks good!</div>
													</div>
													<div class="form-group mb-3 row">
														<label for="validationCustom02"
															class="col-xl-3 col-sm-4 mb-0">Price* :</label> <input
															class="form-control col-xl-8 col-sm-7"
															name="productprice" id="productprice" type="text" required="">
														<div class="valid-feedback">Looks good!</div>
													</div>
												   <div id="pricediv" style="display:none;" class="form-group mb-3 row">
														<label for="validationCustom02"
															class="col-xl-3 col-sm-4 mb-0">Selling Price :</label> <input
															class="form-control col-xl-8 col-sm-7"
															name="priceofproduct" id="priceofproduct" type="text" required="">
														<div class="valid-feedback">Looks good!</div>
													</div>
													<div class="form-group mb-3 row">
														<label for="validationCustom02"
															class="col-xl-3 col-sm-4 mb-0">Product Model/Brand:
															</label> <input
															class="form-control col-xl-8 col-sm-7" id="model"
															name="model" type="text" />
								                   <small><i style="color: blue"><strong>*separate by comma if one than one</strong></i></small>
														<div class="valid-feedback">Looks good!</div>
													</div>
													<div class="form-group mb-3 row">
														<label for="validationCustom02"
															class="col-xl-3 col-sm-4 mb-0">Product Validation
															Number (Nafdac):</label> <input
															class="form-control col-xl-8 col-sm-7" name="valnumber"
															id="valnumber" type="text" />
														<div class="valid-feedback">Looks good!</div>
													</div>
													<div class="form-group mb-3 row">
														<label for="validationCustom02"
															class="col-xl-3 col-sm-4 mb-0">Product Category*
															:</label> <select class="form-control col-xl-8 col-sm-7"
															id="categoryid" name="categoryid" required="">
															<option value="">select category</option>
															<option value="electronics">electronics</option>
														</select>
														<div class="valid-feedback">Looks good!</div>
													</div>
													<div class="form-group mb-3 row">
														<label for="validationCustom02"
															class="col-xl-3 col-sm-4 mb-0">Add Product Tax* :</label>
														<select class="form-control col-xl-8 col-sm-7" id="tax"
															name="tax" required="">
															<option value="1">select tax on product</option>
															<option value="2">Nigerian tax(7%)</option>
															<option value="4">American(5%)</option>
															<option value="5">British(5%)</option>
														</select>
														<div class="valid-feedback">Looks good!</div>
													</div>
													<div class="form-group mb-3 row">
														<label for="validationCustom02"
															class="col-xl-3 col-sm-4 mb-0">Product
															SubCategory* :</label> <select
															class="form-control col-xl-8 col-sm-7" id="subcategoryid"
															name="subcategoryid" required="">
															<option value="">select subcategory</option>
															<option value="electronics">electronics</option>
														</select>
														<div class="valid-feedback">Looks good!</div>
													</div>
													<div class="form-group row">
														<label class="col-xl-3 col-sm-4">Set-on-Front-Page:(Trigger
															by Advert)</label>
														<div class="col-xl-8 col-sm-7 pl-0 description-sm">
															<div class="form-group">
																<div
																	class="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
																	<label class="d-block" for="edo-ani"> Enable
																		&nbsp; <input class="radio_animated" id="frontpage"
																		type="radio" name="frontpage">
																	</label>
																</div>
															</div>
														</div>
													</div>
													<div class="form-group mb-3 row">
														<label for="validationCustomUsername"
															class="col-xl-3 col-sm-4 mb-0">Meta Title* :</label> <input
															class="form-control col-xl-8 col-sm-7" name="metatitle"
															id="metatitle" type="text" required="">
														<div class="invalid-feedback offset-sm-4 offset-xl-3">Please
															input meta description.</div>
													</div>
													<div class="form-group mb-3 row">
														<label for="validationCustomUsername"
															class="col-xl-3 col-sm-4 mb-0">Expiry Date :</label> <input
															class="form-control col-xl-8 col-sm-7" name="expirydate"
															id="validationCustomUsername" type="date" required="">
														<div class="invalid-feedback offset-sm-4 offset-xl-3">Please
															expiry date.</div>
													</div>
												</div>
												<div class="form">
													<div class="form-group row">
														<label for="exampleFormControlSelect1"
															class="col-xl-3 col-sm-4 mb-0">Select Size :</label> 
														<select
															 class="form-control digits col-xl-8 col-sm-7"
															id="sizesofproduct" name="size[]" multiple="multiple">
															<option value="Small">Small</option>
															<option value="Medium">Medium</option>
															<option value="Large">Large</option>
															<option value="ExtraLarge">Extra Large</option>
														</select>
													</div>
													
													<div class="form-group row">
														<label for="exampleFormControlSelect1"
															class="col-xl-3 col-sm-4 mb-0">Select Colour :</label> 
														<select
															 class="form-control digits col-xl-8 col-sm-7"
															id="colourofproduct" name="colour[]" multiple="multiple">
															<option value="white">white</option>
															<option value="blue">blue</option>
															<option value="black">black</option>
															<option value="red">red</option>
															<option value="yellow">yellow</option>
															<option value="green">green</option>
															<option value="ash">ash</option>
															<option value="brown">brown</option>
															<option value="mix">mix</option>
														</select>
													</div>
													
													<div class="form-group row">
														<label class="col-xl-3 col-sm-4 mb-0">Total
															Products* :</label>
														<fieldset class="qty-box col-xl-9 col-xl-8 col-sm-7 pl-0">
															<small><i style="color: blue"><strong>*The
																		product has to be of the same type</strong></i></small>
															<div class="input-group">
																<input class="touchspin" type="text"
																	name="productquantity" value="1">
															</div>
														</fieldset>
													</div>
													<div class="form-group row">
														<label class="col-xl-3 col-sm-4">Add Meta
															Description* :</label>
														<div class="col-xl-8 col-sm-7 pl-0 description-sm">
															<textarea id="editor2" name="metadescription" cols="50"
																rows="5"></textarea>
														</div>
													</div>
													<div class="form-group row">
														<label class="col-xl-3 col-sm-4">Short Summary* :</label>
														<div class="col-xl-8 col-sm-7 pl-0 description-sm">
															<textarea id="editor2" name="shortsummary" cols="50"
																rows="5"></textarea>
														</div>
													</div>

													<div class="form-group row">
														<label class="col-xl-3 col-sm-4">State* :</label>
														<div class="col-xl-8 col-sm-7 pl-0 description-sm">
															<div class="form-group">
																<div
																	class="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
																	<label class="d-block" for="edo-ani"> <input
																		class="radio_animated" id="edo-ani" type="radio"
																		name="state" value="enable"> Enable
																	</label> <label class="d-block" for="edo-ani1"> <input
																		class="radio_animated" id="edo-ani1" type="radio"
																		name="state" value="disable"> Disable
																	</label> <label class="d-block" for="edo-ani1"> | </label> <label
																		class="d-block" for="edo-ani1"> <input
																		class="radio_animated" id="edo-ani13" type="radio"
																		name="productstatus" value="new"> New
																	</label> <label class="d-block" for="edo-ani1"> <input
																		class="radio_animated" id="edo-ani14" type="radio"
																		name="productstatus" value="old"> Old
																	</label> <label class="d-block" for="edo-ani1"> <input
																		class="radio_animated" id="edo-ani15" type="radio"
																		name="productstatus" value="refurbished">
																		Refurbished
																	</label>
																</div>
															</div>
														</div>
													</div>
													<div class="form-group row">
														<label class="col-xl-3 col-sm-4">Other Features* :</label>
														<div class="col-xl-8 col-sm-7 pl-0 description-sm">
															<div class="form-group">
																<div
																	class="m-checkbox-inline mb-0 custom-radio-ml d-flex radio-animated">
																	<label class="d-block" for="edo-ani"> <input
																		class="radio_checkbox" id="newarrival" type="checkbox"
																		name="newarrival" value="newarrival"> New Arrival
																	</label> 
																	 <label class="d-block" for="edo-ani1"> | </label> 
																	<label class="d-block" for="edo-ani1"> 
																	  <input
																		class="radio_checkbox" id="featured" type="checkbox"
																		name="featured" value="featured"> Featured
																	</label>
																	 <label class="d-block" for="edo-ani1"> | </label> 
																	<label
																		class="d-block" for="edo-ani1"> <input
																		class="radio_checkbox" id="Special" type="checkbox"
																		name="Special" value="special"> Special
																	</label> 																	 														
																</div>
															</div>
														</div>
													</div>
													<div class="form-group row">
														<label class="col-xl-3 col-sm-4">Add Description*
															:</label>
														<div class="col-xl-8 col-sm-7 pl-0 description-sm">
															<textarea id="editor1" name="proddescription" cols="10"
																rows="4"></textarea>
														</div>
													</div>
												</div>
												<div class="offset-xl-3 offset-sm-4">
													<!--   add-product-form -->
													<button type="button" class="btn btn-primary"
														id="addproduct">Add</button>
													<button type="button" class="btn btn-light"
														onclick="(function(){document.getElementById('add-product-form').reset();toastr.success('form reset');CKEDITOR.instances.editor1.setData('');})()">Discard</button>
												</div>
											</form>
											<hr />
											<h5 style="cursor: pointer; color: blue;" id=""
												onclick="function callform(){$('#fileform').slideToggle();} callform();">
												Use this form to uploads all products at once</h5>
											<div id="fileform" style="display: none">
												<form class="needs-validation add-product-form"
													novalidate="" id="addfile">
													<div class="form-group mr-3 row">												
													<a href="<%=request.getContextPath()%>/dist/productfiletemplate/jetcart.xlsx" target="_">download template</a>
													&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;											
													<a href="<%=request.getContextPath()%>/dist/productfiletemplate/guide.xlsx" target="_">download guide</a>													
													</div>
													<div class="form-group mb-3 row">
														<label for="validationCustom01"
															class="col-xl-3 col-sm-4 mb-0">Product File
															(.xlxs):</label> <input class="form-control col-xl-8 col-sm-7"
															name="prdfile" id="prdfile" type="file" required="">
														<div class="valid-feedback">Looks good!</div>
													</div>												
												</form>
												<form id="multiFileUpload" class="dropzone digits"
													enctype="multipart/form-data">
													<small>please make sure the product name match with
														the images' name to enable us to match. <br> e.g if
														the product name in the file is fash fash, then the image
														name should be fashfash.jpg/png.
													</small>
													<div class="form-group">
														<div id="dropzoneDragArea"
															class="dz-message dropzoneDragArea needsclick">
															<div class="fallback">
																<input name="file" type="file" multiple />
															</div>
															<i class="fa fa-cloud-upload"></i>
															<h4 class="mb-0 f-w-600">Drop files here or click to
																upload.</h4>
														</div>
														<div class="dropzone-previews"></div>
													</div>
												</form>
												<br />
												<div class="form-group">
													<button type="submit" class="btn btn-md btn-primary"
														id="filesdata">Upload Files And Data</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Container-fluid Ends-->

			</div>

			<!-- footer start-->
			<jsp:include page="pagefooter.jsp" />
			<!--   <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 footer-copyright">
                        <p class="mb-0">Copyright <script>document.write(new Date().getFullYear())</script> © Crista Digital All rights reserved.</p>
                    </div>
                    <div class="col-md-6">
                        <p class="pull-right mb-0">Hand crafted & made by JetSoft (A Subsidiary of Jetlink)<i class="fa fa-heart"></i></p>
                    </div>
                </div>
            </div>
        </footer> -->
			<!-- footer end-->

		</div>

	</div>

	<!-- latest jquery-->
	<jsp:include page="plugins2.jsp" />
</body>
</html>
