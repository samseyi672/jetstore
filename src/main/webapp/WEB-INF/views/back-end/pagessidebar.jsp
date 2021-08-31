        <div class="page-sidebar">
            <div class="main-header-left d-none d-lg-block">
                <div class="logo-wrapper"><a href="/adminindex">
                <img  class="blur-up lazyloaded vendorlogo" src="" alt=""></a></div>
            </div>
            <div class="sidebar custom-scrollbar">
                <div class="sidebar-user text-center">
                    <div><img class="img-60 rounded-circle blur-up lazyloaded theuser" 
                    id="profileimg" src="" alt="#">
                    </div>
                    <h6 class="mt-3 f-14"></h6>
                   <!--  this can be added later -->
                    <!-- <p data-localize="position">general manager.</p> -->
                </div>
               <%--  <jsp:include page="pagessidebar.jsp"/> --%>
                 <ul class="sidebar-menu">
                    <li><a class="sidebar-header" href="/adminindex"><i data-feather="home"></i><span data-localize="sidebar.home">Dashboard</span></a></li>
                    <li><a class="sidebar-header" href="#"><i data-feather="box"></i> <span data-localize="sidebar.products">Products</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li>
                                <a href="#"><i class="fa fa-circle"></i>
                                    <span data-localize="sidebar.physical">Physical/Digital</span> <i class="fa fa-angle-right pull-right"></i>
                                </a>
                                <ul class="sidebar-submenu">
                                    <li><a href="/category"><i class="fa fa-circle" data-localize="sidebar.category">
                                     </i>Category</a></li>
                                    <li><a href="/categorysub" data-localize="sidebar.subcategory"><i class="fa fa-circle"></i>Sub Category</a></li>
                                    <li><a href="/productlist" data-localize="sidebar.productlist"><i class="fa fa-circle"></i>Product List</a></li>
                                    <li><a href="/productlistdetails" data-localize="sidebar.productdetails"><i class="fa fa-circle"></i>Product Detail</a></li>
                                    <li><a href="/addprod" data-localize="sidebar.addproduct"><i class="fa fa-circle"></i>Add Product</a></li>
                                </ul>
                            </li>
                           <!--  <li>
                                <a href="#"><i class="fa fa-circle"></i>
                                    <span data-localize="sidebar.digital">Digital</span> <i class="fa fa-angle-right pull-right"></i>
                                </a>
                                <ul class="sidebar-submenu">
                                    <li><a href="/categorydigital" data-localize="sidebar.category"><i class="fa fa-circle"></i>Category</a></li>
                                    <li><a href="categorysubdigital" data-localize="sidebar.subcategory"><i class="fa fa-circle"></i>Sub Category</a></li>
                                    <li><a href="/productlistdigital" data-localize="sidebar.productlist"><i class="fa fa-circle"></i>Product List</a></li>
                                    <li><a href="/addprodigital" data-localize="sidebar.addproduct"><i class="fa fa-circle"></i>Add Product</a></li>
                                </ul>
                            </li> -->
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href=""><i data-feather="dollar-sign"></i><span
                          data-localize="sidebar.sales"
                      >Sales</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/order"  data-localize="sidebar.order"><i class="fa fa-circle"></i>Orders</a></li>
                            <li><a href="/transactions" data-localize="sidebar.transactions"><i class="fa fa-circle"></i>Transactions</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href=""><i data-feather="tag"></i><span data-localize="sidebar.coupon"
                             >Coupons</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/couponlist" data-localize="sidebar.couponlist"><i class="fa fa-circle"></i>List Coupons</a></li>
                            <li><a href="/couponcreate"  data-localize="sidebar.couponcreate"><i class="fa fa-circle"></i>Create Coupons </a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href="#"><i data-feather="clipboard"></i><span data-localize="sidebar.pages">Pages</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/pagelist" data-localize="sidebar.pageslist"><i class="fa fa-circle"></i>List Page</a></li>
                            <li><a href="/pagecreate" data-localize="sidebar.pagescreate"><i class="fa fa-circle"></i>Create Page</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href="/media"><i data-feather="camera"></i><span data-localize="sidebar.media">Media</span></a></li>
                    <li><a class="sidebar-header" href="#"><i data-feather="align-left"></i><span data-localize="sidebar.menus">Menus</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/menulist" data-localize="sidebar.menuslist"><i class="fa fa-circle"></i>Menu Lists</a></li>
                            <li><a href="/createmenu" data-localize="sidebar.menuscreate"><i class="fa fa-circle"></i>Create Menu</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href=""><i data-feather="user-plus"></i><span data-localize="sidebar.user">Users</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/userlist" data-localize="sidebar.userlist"><i class="fa fa-circle"></i>User List</a></li>
                            <li><a href="/createuser" data-localize="sidebar.usercreate"><i class="fa fa-circle"></i>Create User</a></li>
                        </ul>
                    </li>
<!--                     <li><a class="sidebar-header" href=""><i data-feather="users"></i><span data-localize="sidebar.vendor">Vendors</span>
                            <i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/listvendors" data-localize="sidebar.vendorlist"><i class="fa fa-circle"></i>Vendor List</a></li>
                            <li><a href="/createvendors" data-localize="sidebar.vendorcreate"><i class="fa fa-circle"></i>Create Vendor</a></li>
                        </ul>
                    </li> -->
                    <li><a class="sidebar-header" href=""><i data-feather="chrome"></i><span data-localize="sidebar.localization">Localization</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/translations" data-localize="sidebar.translations"><i class="fa fa-circle"></i>Translations</a></li>
                            <li><a href="/currencyrates" data-localize="sidebar.currency"><i class="fa fa-circle"></i>Currency Rates</a></li>
                            <li><a href="/review" data-localize=""><i class="fa fa-circle"></i>Review</a></li>
                             <li><a href="/customer" data-localize=""><i class="fa fa-circle"></i>Customers</a></li>
                            <li><a href="/taxes" data-localize="sidebar.currency"><i class="fa fa-circle"></i>Taxes</a></li>
                        </ul>
                    </li>
                    <li><a class="sidebar-header" href="/reports"><i data-feather="bar-chart"></i><span data-localize="sidebar.reports">Reports</span></a></li>
                    <li><a class="sidebar-header" href="#"><i data-feather="settings" ></i><span data-localize="sidebar.settings">Settings</span><i class="fa fa-angle-right pull-right"></i></a>
                        <ul class="sidebar-submenu">
                            <li><a href="/profile" data-localize="sidebar.profile"><i class="fa fa-circle"></i>Profile</a></li>
                        </ul>
                    </li>
        <li><a class="sidebar-header" href="/invoice"><i data-feather="archive"></i><span data-localize="sidebar.invoice">Invoice</span></a>
          <li><a class="sidebar-header" href="/messaging"><i data-feather="archive"></i><span data-localize="sidebar.message">Messaging</span></a>
                    </li>
            <li><a class="sidebar-header" href="/messageview">
            <i data-feather="archive"></i><span data-localize="sidebar.viewmessage">View Message</span></a>
                    </li>
                    <li><a class="sidebar-header" href="/adminlogin"><i data-feather="log-in"></i><span data-localize="sidebar.login">Login</span></a>
                    </li>
                </ul> 
            </div>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        