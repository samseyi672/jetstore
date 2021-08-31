<div class="page-main-header">
	<div class="main-header-right row">
		<div class="main-header-left d-lg-none">
			<div class="logo-wrapper">
				<a href="/adminindex"><img class="blur-up lazyloaded vendorlogo"
					src="" alt=""></a>
			</div>
		</div>
		<div class="mobile-sidebar">
			<div class="media-body text-right switch-sm">
				<label class="switch"><a href="#"><i id="sidebar-toggle"
						data-feather="align-left"></i></a></label>
			</div>
		</div>
		<div class="nav-right col">
			<ul class="nav-menus">
				<!-- search bar -->
				<jsp:include page="search.jsp" />
				<li><a class="text-dark" href="#!"
					onclick="javascript:toggleFullScreen()"><i
						data-feather="maximize-2"></i></a></li>
				<li class="onhover-dropdown"><a class="txt-dark" href="#">
						<h6>EN</h6>
				</a>
					<ul class="language-dropdown onhover-show-div p-20">
						<li><a href="#" data-lng="en" data-localize="language-en"><i
								class="flag-icon flag-icon-is"></i>English</a></li>
						<li><a href="#" data-lng="es" data-localize="language-es"><i
								class="flag-icon flag-icon-um"></i>Spanish</a></li>
						<li><a href="#" data-lng="pt" data-localize="language-pt"><i
								class="flag-icon flag-icon-uy"></i>Portuguese</a></li>
						<li><a href="#" data-lng="fr" data-localize="language-fr"><i
								class="flag-icon flag-icon-nz"></i>French</a></li>
						<li><a href="#" data-lng="de" data-localize="language-de"><i
								class="flag-icon flag-icon-de"></i>German</a></li>
					    <li><a href="#" data-lng="ar" data-localize="language-ar"><i
								class="flag-icon flag-icon-ar"></i>Arabic</a></li>
						<li><a href="#" data-lng="sw" data-localize="language-sw"><i
								class="flag-icon flag-icon-sw"></i>Swahili</a></li>
								<li><a href="#" data-lng="ng" data-localize="language-yo"><i
								class="flag-icon flag-icon-ng"></i>Yoruba</a></li>
								<li><a href="#" data-lng="ng" data-localize="language-ig"><i
								class="flag-icon flag-icon-ng"></i>Igbo</a></li>
								<li><a href="#" data-lng="ng" data-localize="language-hs"><i
								class="flag-icon flag-icon-ng"></i>Hausa</a></li>
					</ul></li>
				<li class="onhover-dropdown"><i data-feather="bell"></i><span
					class="badge badge-pill badge-primary pull-right notification-badge">3</span><span
					class="dot"></span>
					<ul class="notification-dropdown onhover-show-div p-0">
						<li data-localize="notification" title="view messages">Notification <span
							class="badge badge-pill badge-primary pull-right">3</span></li>
						<li>
							<div class="media">
								<div class="media-body">
									<h6 class="mt-0" data-localize="medialn.order">
										<span><i class="shopping-color"
											data-feather="shopping-bag"></i>
											</span>Your order ready for Ship..!
									</h6>
									<p class="mb-0">.</p>
								</div>
							</div>
						</li>
					<!-- 	
					      <li>
							<div class="media">
								<div class="media-body">
									<h6 data-localize="medialn.dwn" class="mt-0 txt-success">
										<span><i class="download-color font-success"
											data-feather="download"></i></span>Download Complete
									</h6>
									<p class="mb-0" data-localize="medialn.download">Downloads.</p>
								</div>
							</div>
						</li>
						 -->
					   <!-- 	
					      <li>
							<div class="media">
								<div class="media-body">
									<h6 class="mt-0 txt-danger" data-localize="medialn.files">
										<span><i class="alert-color font-danger"
											data-feather="alert-circle"></i></span>250 MB trash files
									</h6>
									<p class="mb-0" data-localize="medialn.file">Your Files.</p>
								</div>
							</div>
						</li> 
						-->
						
		                <!-- 				 
		         <li data-localize="medialn.notify" class="bg-light txt-dark"><a href="#" 
						data-localize="medialn.all">All</a>
							notification
							</li> 
						-->
					</ul>
					</li>
				<li><a href="#"><i class="right_side_toggle"
						data-feather="message-square"></i><span class="dot"></span></a></li>
				<li class="onhover-dropdown">
					<div class="media align-items-center">
						<img
							class="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded theuser"
							src="/assets/images/dashboard/man.png" alt="header-user">
						<div class="dotted-animation">
							<span class="animate-circle"></span><span class="main-circle"></span>
						</div>
					</div>
					<ul class="profile-dropdown onhover-show-div p-20">
					     <li><a href="javascript:void(0);" data-localize="profile.change"><i data-feather="logo"></i>Change Logo</a></li>
						<li><a href="javascript:void(0);" data-localize="profile.usdrer"><i data-feather="user">
						</i>Edit Profile</a></li>
						<li><a href="javascript:void(0);" data-localize="profile.inbox"><i data-feather="mail">
						   </i>Inbox</a></li>
					<!-- 	<li><a href="javascript:void(0);"><i data-feather="lock"></i>Lock Screen</a></li> -->
						<li><a href="javascript:void(0);" data-localize="profile.settings"><i
								data-feather="settings"></i>Settings</a></li>
						<li><a id="logoutme" href="javascript:void(0);" data-localize="profile.logout"><i
								data-feather="log-out"></i>Logout</a></li>
					</ul>
				</li>
			</ul>
			<div class="d-lg-none mobile-toggle pull-right">
				<i data-feather="more-horizontal"></i>
			</div>
		</div>
	</div>
</div>




























