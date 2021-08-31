<!DOCTYPE html>
<html lang="en">

<head>

<!--    
   <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
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

  <jsp:include page="headerlinks.jsp"/>
  <jsp:include page="frontendlinks.jsp" />
  <link rel="stylesheet" href="/dist/mycss/anim.css"/>
</head>

<body>


    <!-- header start -->
    
<!--     
       <header>
        <div class="mobile-fix-option"></div>
        <div class="top-header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="header-contact">
                            <ul>
									<li>Welcome to CRISTA DIGITAL</li>
										<li><i class="fa fa-phone" aria-hidden="true"></i>Call Us: 08086581822,08085863502</li>
							</ul>
                        </div>
                    </div>
                    <div class="col-lg-6 text-right">
                        <ul class="header-dropdown">
                            <li class="mobile-wishlist"><a href="#"><i class="fa fa-heart" aria-hidden="true"></i></a>
                            </li>
                            <li class="onhover-dropdown mobile-account">
                                <i class="fa fa-user" aria-hidden="true"></i> My Account
                                <ul class="onhover-show-div">
                                    <li>
                                        <a href="#" data-lng="en">
                                            Login
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-lng="es">
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="main-menu">
                        <div class="menu-left">
                            <div class="navbar">
                                <a href="javascript:void(0)" onclick="openNav()">
                                    <div class="bar-style"> <i class="fa fa-bars sidebar-bar" aria-hidden="true"></i>
                                    </div>
                                </a>
                                <div id="mySidenav" class="sidenav">
                                    <a href="javascript:void(0)" class="sidebar-overlay" onclick="closeNav()"></a>
                                    <nav>
                                        <div onclick="closeNav()">
                                            <div class="sidebar-back text-left">
                                                <i class="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
                                            </div>
                                        </div>
                                        Vertical Menu
                                        <ul id="sub-menu" class="sm pixelstrap sm-vertical">
                                            <li> <a href="category-page(computers).html">Computers</a>
                                                <ul class="mega-menu clothing-menu">
                                                    <li>
                                                        <div class="row m-0">
                                                            <div class="col-xl-4">
                                                                <div class="link-section">
                                                                    <h5>Hardware</h5>
                                                                    <ul>
                                                                        <li><a href="laptops.html">Laptops</a></li>
                                                                        <li><a href="printers.html">Printers</a></li>
                                                                        <li><a href="scanners.html">Scanners</a></li>
                                                                        <li><a href="servers.html">Servers</a></li> 
																		<li><a href="notebooks.html">Notebooks</a></li>
																		<li><a href="ultrabooks.html">Ultrabooks</a></li>																		
                                                                        <li><a href="monitors.html">Monitors</a></li>
                                                                        <li><a href="hybridpcs.html">Hybrid PCS</a></li>
                                                                        <li><a href="macbooks.html">Macbooks</a></li>																		
																		<li><a href="ups.html">UPS</a></li>
																		<li><a href="cpus.html">CPUs</a></li>
																		<li><a href="desktop.html">Desktops</a></li>
																		<li><a href="inkstc.html">Inks, Toners & Cartridges</a></li>
																		<li><a href="screen_protectors.html">Screen Protectors</a></li>
                                                                    </ul>
                                                                    <h5>Networking</h5>
                                                                    <ul>
                                                                        <li><a href="modems.html">Modems</a></li>
                                                                        <li><a href="routers.html">Routers</a></li>
                                                                        <li><a href="switches.html">Switches</a></li>
																		<li><a href="peripherals.html">Peripherals</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-4">
                                                                <div class="link-section">
                                                                    <h5>Software</h5>
                                                                    <ul>
                                                                        <li><a href="officenbusiness.html">Office and Business Software</a></li>
                                                                        <li><a href="operatingsystems.html">Operating Systems</a></li>
													                    <li><a href="otheros.html">Other OSs</a></li>
                                                                        <li><a href="batteries.html">Batteries</a></li>
													                    <li><a href="cables.html">Cables</a></li>
													                    <li><a href="chargers_powerbanks.html">Charges,Power Banks</a></li>
													                    <li><a href="android">Android Phones</a></li>
													                    <li><a href="windows.html">Windows</a></li>
													                    <li><a href="ios.html">iOS Phones</a></li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="col-xl-4">
                                                                <a href="#" class="mega-menu-banner"><img
                                                                        src="/assets/images/mega-menu/electronic/3.jpg"
                                                                        alt="" class="img-fluid blur-up lazyload"></a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            
                                            <li> <a href="category-page(phones).html">Phones</a>
                                                <ul>
                                                    <li><a href="smartphones.html">Smart Phones</a></li>
                                                    
                                                </ul>
                                            </li>
											<li><a href="category-page(appliances).html">Appliances</a>
                                                            <ul>
                                                                <li><a href="airconditioner.html">Air Conditioner & Cooler </a></li>
                                                                <li><a href="fans.html">Fan</a></li>
                                                                <li><a href="freezers.html">Freezer</a></li>
                                                                <li><a href="washers.html">Washers & Dryers</a></li>
                                                                <li><a href="refrigerators.html">Refrigerators</a></li>
                                                                <li><a href="cookers.html">Cookers & Ovens</a></li>
                                                                <li><a href="dispensers.html">Water Dispensers</a></li>
																<li><a href="vaccum.html">Vaccum Cleaners</a></li>
																<li><a href="blenders.html">Blenders,Juicers & Mixers</a></li>
                                                                <li><a href="burners.html">Hot plates & Burners</a></li>
                                                                <li><a href="irons.html">Irons & Steamers</a></li>
                                                                <li><a href="mincers.html">Processors & Mincers</a></li>
                                                                <li><a href="toasters.html">Toasters & Sandwich makers</a></li>
                                                                <li><a href="fryers.html">Deep fryers  & Rice Cookers</a></li>
																<li><a href="kettles.html">Electric Kettles</a></li>
                                                                <li><a href="microwaves.html">Microwaves</a></li>
                                                                <li><a href="pounders.html">Yam Pounders</a></li>
                                                            </ul>
                                                         </li>   
                                                            
                                            <li><a href="category-page(healthy).html">Healthy Living Products</a></li>
                                            <li> <a href="category-page(accessories">Accessories</a>
                                                <ul>
                                                    <li><a href="cables.html">Cables</a></li>
                                                    <li><a href="cases_covers.html">Cases & Covers</a></li>
                                                    <li><a href="screen_protectors.html">Screen Protectors</a></li>
													<li><a href="chargers_powerbanks.html">Chargers & Power Banks</a></li>
                                                    <li><a href="earphones_headsets.html">Earphones & Headsets</a></li>
                                                    <li><a href="smartwatches.html">Smartwatches & Bands</a></li>
													<li><a href="peripherals.html">Computer Peripherals</a></li>
                                                    <li><a href="bags.html">Bags,Cases,Covers & Sleeves</a></li>
                                                    <li><a href="accessories.html">Desktops and Laptops Accessories</a></li>
													<li><a href="storagedevices.html">Storage Devices</a></li>
													<li><a href="cases_covers.html">Cases & Covers</a></li>
                                                    <li><a href="holders_stands.html">Holders & Stands</a></li>
                                                    <li><a href="other_accessories.html">Other Accessories</a></li>
													<li><a href="inkstc.html">Inks,Toners & Cartridges</a></li>
                                                    <li><a href="batteries.html">Batteries</a></li>
                                                </ul>
                                            </li>                                        
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="brand-logo">
                                <a href="index.html"> <img src="/assets/images/icon/crista_logo.png"
                                        class="img-fluid blur-up lazyload" alt=""></a>
                            </div>
                        </div>
                      <div class="menu-right pull-right">
                                <div>
                                    <nav id="main-nav">
                                        <div class="toggle-nav"><i class="fa fa-bars sidebar-bar"></i></div>
                                        Sample menu definition
                                        <ul id="main-menu" class="sm pixelstrap sm-horizontal">
                                            <li>
                                                <div class="mobile-back text-right">Back<i
                                                        class="fa fa-angle-right pl-2" aria-hidden="true"></i></div>
                                            </li>
                                            <li>
                                            <a href="#">Home</a>
                                            <ul>
											<li>
                                                    <a href="electronic-1.html">Crista  Digital</a>
                                                    <ul>
													   
                                                        <li><a target="_blank" href="marketplace-demo.html">Marketplace</a></li>
                                                        
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="category-page(computers).html">Computers</a>
                                                    <ul>
                                                       <li><a href="laptops.html">Laptops</a></li>
                                                        <li><a href="printers.html">Printers</a></li>
                                                        <li><a href="scanners.html">Scanners</a></li>
                                                        <li><a href="servers.html">Servers</a></li> 
														<li><a href="notebooks.html">Notebooks</a></li>
														<li><a href="ultrabooks.html">Ultrabooks</a></li>																		
                                                        <li><a href="monitors.html">Monitors</a></li>
                                                        <li><a href="hybridpcs.html">Hybrid PCS</a></li>
                                                        <li><a href="macbooks.html">Macbooks</a></li>																		
														<li><a href="ups.html">UPS</a></li>
														<li><a href="cpus.html">CPUs</a></li>
														<li><a href="desktop.html">Desktops</a></li>
														<li><a href="inkstc.html">Inks, Toners & Cartridges</a></li>
														<li><a href="screen_protectors.html">Screen Protectors</a></li>
														
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="category-page(phones).html">Phones</a>
                                                    <ul>
                                                    <li><a href="smartphones.html">Smart Phones</a></li>
                                                    <li><a href="bags.html">Smart Watches</a></li>													                                        
													<li><a href="batteries.html">Batteries</a></li>
													<li><a href="cables.html">Cables</a></li>
													<li><a href="chargers_powerbanks.html">Charges,Power Banks</a></li>
													<li><a href="android.html">Android Phones</a></li>
													<li><a href="ios.html">iOS Phones</a></li>
                                                    </ul>
                                                </li>
												
												<li>
                                                    <a href="category-page(appliances).html">Home Appliances</a>
                                                    <ul>
                                                        <li><a href="airconditioner.html">Air Conditioner & Cooler </a></li>
                                                        <li><a href="fans.html">Fans</a></li>
                                                        <li><a href="freezers.html">Freezers</a></li>
                                                        <li><a href="washers.html">Washers & Dryers</a></li>
                                                        <li><a href="refrigerators.html">Refrigerators</a></li>
                                                        <li><a href="cookers.html">Cookers & Ovens</a></li>
                                                        <li><a href="dispensers.html">Water Dispensers</a></li>
														<li><a href="vaccum.html">Vaccum Cleaners</a></li>
														<li><a href="blenders.html">Blenders,Juicers & Mixers</a></li>
                                                        <li><a href="burners.html">Hot plates & Burners</a></li>
                                                        <li><a href="irons.html">Irons & Steamers</a></li>
                                                        <li><a href="mincers.html">Processors & Mincers</a></li>
                                                        <li><a href="toasters.html">Toasters & Sandwich makers</a></li>
                                                        <li><a href="fryers.html">Deep fryers  & Rice Cookers</a></li>
														<li><a href="kettles.html">Electric Kettles</a></li>
                                                        <li><a href="microwaves.html">Microwaves</a></li>
                                                        <li><a href="pounders.html">Yam Pounders</a></li>
                                                    </ul>
                                                </li>
                                                <li><a target="_blank" href="category-page(healthy).html">Healthy Living Products</a></li>       
                                                <li><a target="_blank" href="category-page(accessories).html">Accessories</a></li>    												
                                                                                                
                                            </ul>
                                        </li>
                                        <li class="mega" id="hover-cls"><a href="#">Computers & Phones </a>
                                                <ul class="mega-menu full-mega-menu">
                                                    <li>
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col mega-box">
                                                                    <div class="link-section">
                                                                        <div class="menu-title">
                                                                            <h5>Laptops</h5>
                                                                        </div>
                                                                        <div class="menu-content">
                                                                            <ul>
                                                                                <li><a href="laptops.html">Laptops & Netbooks</a></li>
                                                                                <li><a href="notebooks.html">Notebooks</a></li>
                                                                                <li><a href="ultrabooks.html">Ultrabooks</a></li>
                                                                                <li><a href="hybridpcs.html">Hybrid PCs</a></li>
                                                                                <li><a href="macbooks.html">Macbooks</a></li>                                                                                
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col mega-box">
                                                                    <div class="link-section">
                                                                        <div class="menu-title">
                                                                            <h5>Desktops & Monitors</h5>
                                                                        </div>
                                                                        <div class="menu-content">
                                                                            <ul>
                                                                                <li><a href="monitors.html">Monitors</a></li>
                                                                                <li><a href="cpus.html">CPUs</a></li>
                                                                                <li><a href="ups.html">UPS</a></li>
																				<li><a href="desktop.html">Desktops</a></li>
                                                                                <li><a href="desktopbundles.html">Desktop Bundles</a></li>                                                                                
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col mega-box">
                                                                    <div class="link-section">
                                                                        <div class="menu-title">
                                                                            <h5>Accessories</h5>
                                                                        </div>
                                                                        <div class="menu-content">
                                                                            <ul>
                                                                                <li><a href="peripherals.html">Computer Peripherals</a></li>
                                                                                <li><a href="bccs.html">Bags,Cases,Covers,etc</a></li>                                                                                
                                                                                <li><a href="storagedevices.html">Storage Devices</a></li> 
																				<li><a href="ldaccessories.html">Laptops & Desktops Accessories</a></li>
                                                                                <li><a href="printers.html">Printers</a></li>
                                                                                <li><a href="scanners.html">Scanners</a></li>
                                                                                <li><a href="inkstc.html">Inks, Toners & Cartridges</a></li>
                                                                                <li><a href="pcgames.html">PC Games & Accessories</a></li>
                                                                                <li><a href="storagedevices.html">Storage Devices</a></li>   																				
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
																<div class="col mega-box">
                                                                    <div class="link-section">
                                                                        <div class="menu-title">
                                                                            <h5>Hifi & Networking</h5>
                                                                        </div>
                                                                        <div class="menu-content">
                                                                            <ul>
                                                                                <li><a href="switches.html">Switches</a></li>
                                                                                <li><a href="modems.html">Modems</a></li>
                                                                                <li><a href="routers.html">Routers</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>	
                                                                <div class="col mega-box">
                                                                    <div class="link-section">
                                                                        <div class="menu-title">
                                                                            <h5>Phones & Accessories</h5>
                                                                        </div>
                                                                        <div class="menu-content">
                                                                            <ul>
                                                                                <li><a href="smartphones.html">Smart Phones</a></li>
																				<li><a href="smartwatches.html">Smart Watches</a></li>																			
																				<li><a href="batteries.html">Batteries</a></li>
																				<li><a href="cables.html">Cables</a></li>
																				<li><a href="chargers_powerbanks.html">Charges,Power Banks</a></li>
																				<li><a href="android.html">Android Phones</a></li>
																				<li><a href="ios.html">iOS Phones</a></li>
																				<li><a href="cases_covers.html">Cases & Covers</a></li>
																				<li><a href="screen_protectors.html">Screen Protectors</a></li>
																				<li><a href="chargers_powerbanks.html">Chargers & Power Banks</a></li>
																				<li><a href="earphones_headsets.html">Earphones & Headsets</a></li>									
																				<li><a href="holders_stands.html">Holders & Stands</a></li>
																				<li><a href ="batteries.html">Batteries</a></li>
																			    <li><a href="other_accessories.html">Other Accessories</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>                                                                																															
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="mega" id="hover-cls"><a href="#">Appliances & Accessories</a>
                                                <ul class="mega-menu full-mega-menu">
                                                    <li>
                                                        <div class="container">
                                                            <div class="row">
                                                                <div class="col mega-box">
                                                                    <div class="link-section">
                                                                        <div class="menu-title">
                                                                            <h5>Televisions</h5>
                                                                        </div>
                                                                        <div class="menu-content">
                                                                            <ul>
                                                                                <li><a href="smart_tvs.html">Smart TVs</a></li>
																				<li><a href="led_tvs.html">LED TVs</a></li>
																				<li><a href="curvedtvs.html">Curved TVs</a></li>
																				<li><a href="oledtvs.html">OLED TVs</a></li>
																				<li><a href="plasmatvs.html">Plasma TVs</a></li>
																				<li><a href="home_threatre.html">Home Threatre</a></li>
																				<li><a href="hifi_systems.html">HiFi Systems</a></li>
																				<li><a href="audiosystems.html">Audio Systems</a></li>
																				<li><a href="mp3players.html">MP3 Players  &  Speakers</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col mega-box">
                                                                    <div class="link-section">
                                                                        <div class="menu-title">
                                                                            <h5>Digital Cameras</h5>
                                                                        </div>
                                                                        <div class="menu-content">
                                                                            <ul>
                                                                                <li><a href="digitalcameras.html">Digital Cameras</a></li>
                                                                                <li><a href="pslr.html">Professional& SLR Cameras</a></li>
                                                                                <li><a href="camcoders.html">Camcoders & Video Cameras</a></li>
                                                                                <li><a href="clenses.html">Camera Lenses & Accessories</a></li>
                                                                                <li><a href="cctv.html">CCTV cameras</a></li>                                                                                
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col mega-box">
                                                                    <div class="link-section">
                                                                        <div class="menu-title">
                                                                            <h5>Home Threatre & Audio Systems</h5>
                                                                        </div>
                                                                        <div class="menu-content">
                                                                            <ul>
                                                                                <li><a href="threatre.html">Home Threatre</a></li>
                                                                                <li><a href="audiosystems.html">Audio Systems</a></li>
                                                                                <li><a href="hifi_systems.html">Hifi Systems</a></li>                                                                                
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col mega-box">
                                                                    <div class="link-section">
                                                                        <div class="menu-title">
                                                                            <h5>Accessories</h5>
                                                                        </div>
                                                                        <div class="menu-content">
                                                                            <ul>
                                                                                <li><a href="tv_audio.html">TV Audio</a></li>
                                                                                <li><a href="headphones.html"> Head phones</a></li>
                                                                                <li><a href="other_accessories.html">Other Accessories</a></li>                                                                                
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col mega-box">
                                                                    <div class="link-section">
                                                                        <div class="menu-title">
                                                                            <h5>Appliances</h5>
                                                                        </div>
                                                                        <div class="menu-content">
                                                                            <ul>
                                                                                <li><a href="airconditioner.html">Air Conditioner & Cooler </a></li>
																				<li><a href="fans.html">Fans</a></li>
																				<li><a href="freezers.html">Freezer</a></li>
																				<li><a href="washers.html">Washers & Dryers</a></li>
                                                                                <li><a href="refrigerators.html">Refrigerators</a></li>
                                                                                <li><a href="cookers.html">Cookers & Ovens</a></li>
                                                                                <li><a href="dispensers.html">Water Dispensers</a></li>
																				<li><a href="vaccum.html">Vaccum Cleaners</a></li>
																				<li><a href="blenders.html">Blenders,Juicers & Mixers</a></li>
																				<li><a href="burners.html">Hot plates & Burners</a></li>
																				<li><a href="irons.html">Irons & Steamers</a></li>
																				<li><a href="mincers.html">Processors & Mincers</a></li>
																				<li><a href="toasters.html">Toasters & Sandwich makers</a></li>
																				<li><a href="fryers.html">Deep fryers  & Rice Cookers</a></li>
																				<li><a href="kettles.html">Electric Kettles</a></li>
																				<li><a href="microwaves.html">Microwaves</a></li>
																				<li><a href="pounders.html">Yam Pounders</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>                                            
                                        </ul>
                                    </nav>
                                </div>
                                <div>
                                    <div class="icon-nav">
                                        <ul>
                                            <li class="onhover-div mobile-search">
                                                <div><img src="/assets/images/icon/search.png" onclick="openSearch()"
                                                        class="img-fluid blur-up lazyload" alt=""> <i class="ti-search"
                                                        onclick="openSearch()"></i></div>
                                                <div id="search-overlay" class="search-overlay">
                                                    <div><span class="closebtn" onclick="closeSearch()"
                                                            title="Close Overlay">×</span>
                                                        <div class="overlay-content">
                                                            <div class="container">
                                                                <div class="row">
                                                                    <div class="col-xl-12">
                                                                        <form>
                                                                            <div class="form-group">
                                                                                <input type="text" class="form-control"
                                                                                    id="exampleInputPassword1"
                                                                                    placeholder="Search a Product">
                                                                            </div>
                                                                            <button type="submit"
                                                                                class="btn btn-primary"><i
                                                                                    class="fa fa-search"></i></button>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="onhover-div mobile-setting">
                                                <div><img src="/assets/images/icon/setting.png"
                                                        class="img-fluid blur-up lazyload" alt=""> <i
                                                        class="ti-settings"></i></div>
                                                <div class="show-div setting">
                                                    <h6>language</h6>
                                                    <ul>
                                                        <li><a href="#">english</a></li>
                                                        <li><a href="#">french</a></li>
                                                    </ul>
                                                    <h6>currency</h6>
                                                    <ul class="list-inline">
                                                        <li><a href="#">naira</a></li>
														<li><a href="#">euro</a></li>
                                                        <li><a href="#">rupees</a></li>
                                                        <li><a href="#">pound</a></li>
                                                        <li><a href="#">dollar</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li class="onhover-div mobile-cart">
                                                <div><img src="/assets/images/icon/cart.png"
                                                        class="img-fluid blur-up lazyload" alt=""> <i
                                                        class="ti-shopping-cart"></i></div>
                                                <ul class="show-div shopping-cart">
                                                    <li>
                                                        <div class="media">
                                                            <a href="#"><img class="mr-3"
                                                                    src="/assets/images/electronics/pro/1.jpg"
                                                                    alt="Generic placeholder image"></a>
                                                            <div class="media-body">
                                                                <a href="#">
                                                                    <h4>item name</h4>
                                                                </a>
                                                                <h4><span>1 x $ 299.00</span></h4>
                                                            </div>
                                                        </div>
                                                        <div class="close-circle"><a href="#"><i class="fa fa-times"
                                                                    aria-hidden="true"></i></a></div>
                                                    </li>
                                                    <li>
                                                        <div class="media">
                                                            <a href="#"><img class="mr-3"
                                                                    src="/assets/images/electronics/pro/7.jpg"
                                                                    alt="Generic placeholder image"></a>
                                                            <div class="media-body">
                                                                <a href="#">
                                                                    <h4>item name</h4>
                                                                </a>
                                                                <h4><span>1 x $ 299.00</span></h4>
                                                            </div>
                                                        </div>
                                                        <div class="close-circle"><a href="#"><i class="fa fa-times"
                                                                    aria-hidden="true"></i></a></div>
                                                    </li>
                                                    <li>
                                                        <div class="total">
                                                            <h5>subtotal : <span>$299.00</span></h5>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="buttons"><a href="cart.html" class="view-cart">view
                                                                cart</a> <a href="#" class="checkout">checkout</a></div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
     -->
    <!-- header end -->
 <jsp:include page="header.jsp" />

    <!-- breadcrumb start -->
    <div class="breadcrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-sm-6">
                    <div class="page-title">
                        <h2>faq</h2>
                    </div>
                </div>
                <div class="col-sm-6">
                    <nav aria-label="breadcrumb" class="theme-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">faq</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb end -->


    <!--section start-->
    <section class="faq-section section-b-space">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="accordion theme-accordion" id="accordionExample">
                        <div class="card">
                            <div class="card-header" id="headingOne">
                                <h5 class="mb-0"><button class="btn btn-link" type="button" data-toggle="collapse"
                                        data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">How
                                        can I downgrade to an earlier version of Dummy Content?</button></h5>
                            </div>
                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    <p>it look like readable English. Many desktop publishing packages and web page
                                        editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                                        ipsum' will uncover many web sites still in their infancy. Various versions have
                                        evolved over the years,All the Lorem Ipsum generators on the Internet tend to
                                        repeat predefined chunks as necessary, making this the first true generator on
                                        the Internet. It uses a dictionary of over 200 Latin words, combined with a
                                        handful of model sentence structures</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingTwo">
                                <h5 class="mb-0"><button class="btn btn-link collapsed" type="button"
                                        data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">How can I upgrade from Shopify 2.5 to shopify
                                        3?</button></h5>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    <p>it look like readable English. Many desktop publishing packages and web page
                                        editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                                        ipsum' will uncover many web sites still in their infancy. Various versions have
                                        evolved over the years,All the Lorem Ipsum generators on the Internet tend to
                                        repeat predefined chunks as necessary, making this the first true generator on
                                        the Internet. It uses a dictionary of over 200 Latin words, combined with a
                                        handful of model sentence structures</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingThree">
                                <h5 class="mb-0"><button class="btn btn-link collapsed" type="button"
                                        data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">Under what license are Regular Labs extensions
                                        released?</button></h5>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    <p>it look like readable English. Many desktop publishing packages and web page
                                        editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                                        ipsum' will uncover many web sites still in their infancy. Various versions have
                                        evolved over the years,All the Lorem Ipsum generators on the Internet tend to
                                        repeat predefined chunks as necessary, making this the first true generator on
                                        the Internet. It uses a dictionary of over 200 Latin words, combined with a
                                        handful of model sentence structures</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingFour">
                                <h5 class="mb-0"><button class="btn btn-link collapsed" type="button"
                                        data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">What is the Regular Labs Library?</button></h5>
                            </div>
                            <div id="collapseFour" class="collapse" aria-labelledby="headingFour"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    <p>it look like readable English. Many desktop publishing packages and web page
                                        editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                                        ipsum' will uncover many web sites still in their infancy. Various versions have
                                        evolved over the years,All the Lorem Ipsum generators on the Internet tend to
                                        repeat predefined chunks as necessary, making this the first true generator on
                                        the Internet. It uses a dictionary of over 200 Latin words, combined with a
                                        handful of model sentence structures</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingFive">
                                <h5 class="mb-0"><button class="btn btn-link collapsed" type="button"
                                        data-toggle="collapse" data-target="#collapseFive" aria-expanded="false"
                                        aria-controls="collapseFive">Can I turn on/off some blocks on the page?</button>
                                </h5>
                            </div>
                            <div id="collapseFive" class="collapse" aria-labelledby="headingFive"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    <p>it look like readable English. Many desktop publishing packages and web page
                                        editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                                        ipsum' will uncover many web sites still in their infancy. Various versions have
                                        evolved over the years,All the Lorem Ipsum generators on the Internet tend to
                                        repeat predefined chunks as necessary, making this the first true generator on
                                        the Internet. It uses a dictionary of over 200 Latin words, combined with a
                                        handful of model sentence structures</p>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" id="headingSix">
                                <h5 class="mb-0"><button class="btn btn-link collapsed" type="button"
                                        data-toggle="collapse" data-target="#collapseSix" aria-expanded="false"
                                        aria-controls="collapseSix">What is included in the theme package?</button></h5>
                            </div>
                            <div id="collapseSix" class="collapse" aria-labelledby="headingSix"
                                data-parent="#accordionExample">
                                <div class="card-body">
                                    <p>it look like readable English. Many desktop publishing packages and web page
                                        editors now use Lorem Ipsum as their default model text, and a search for 'lorem
                                        ipsum' will uncover many web sites still in their infancy. Various versions have
                                        evolved over the years,All the Lorem Ipsum generators on the Internet tend to
                                        repeat predefined chunks as necessary, making this the first true generator on
                                        the Internet. It uses a dictionary of over 200 Latin words, combined with a
                                        handful of model sentence structures</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Section ends-->


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
    <jsp:include page="frontendplugin.jsp" />
    <script>
        function openSearch() {
            document.getElementById("search-overlay").style.display = "block";
        }

        function closeSearch() {
            document.getElementById("search-overlay").style.display = "none";
        }
    </script>
</body>

</html>