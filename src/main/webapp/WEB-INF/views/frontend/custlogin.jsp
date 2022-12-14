<!DOCTYPE html>
<html lang="en">
<head>
    <jsp:include page="headerlinks.jsp"/>
  <jsp:include page="frontendlinks.jsp" />
  <link rel="stylesheet" href="/dist/mycss/anim.css"/>
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
                        <h2>contact</h2>
                    </div>
                </div>
                <div class="col-sm-6">
                    <nav aria-label="breadcrumb" class="theme-breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li class="breadcrumb-item active">contact</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- breadcrumb End -->
    <!--section start-->
    <section class="contact-page section-b-space">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <form class="theme-form" id="custloginform">
                        <div class="form-row">
                             <div class="col-md-3">
                            </div> 
                            <div class="col-md-6">
                                <label for="name">User Name</label>
                                <input type="text" name="username" class="form-control" id="username" placeholder="Enter Your Email"
                                    required="true">
                            </div>                       
                        </div> 
                         <div class="form-row">
                           <div class="col-md-3">
                            </div> 
                            <div class="col-md-6">
                                <label for="password">Password</label>
                                <input type="password" name="password" class="form-control" id="password" placeholder="password" required="true">
                            </div>                          
                        </div>
                         <div class="form-row">
                           <div class="col-md-3">
                            </div> 
                            <div class="col-md-6">
                                 <a href="javascript:void(0);" class="btn btn-solid" id="custlogin">Please Login to Proceed</a>
                            </div>                          
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <!--Section ends-->
    <!-- footer start -->
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
    <script src="../assets/js/jquery-3.3.1.min.js"></script>

    <!-- menu js-->
    <script src="../assets/js/menu.js"></script>

    <!-- lazyload js-->
    <script src="../assets/js/lazysizes.min.js"></script>

    <!-- popper js-->
    <script src="../assets/js/popper.min.js"></script>

    <!-- slick js-->
    <script src="../assets/js/slick.js"></script>

    <!-- Bootstrap js-->
    <script src="../assets/js/bootstrap.js"></script>

    <!-- Bootstrap Notification js-->
    <script src="../assets/js/bootstrap-notify.min.js"></script>

    <!-- Theme js-->
    <script src="../assets/js/script.js"></script>
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