<section class="tab-product m-0">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-lg-12">
                <ul class="nav nav-tabs nav-material" id="top-tab" role="tablist">
                    <li class="nav-item"><a class="nav-link active" id="top-home-tab" data-toggle="tab"
                                            href="#top-home" role="tab" aria-selected="true">Description</a>
                        <div class="material-border"></div>
                    </li>
                    <li class="nav-item"><a class="nav-link" id="profile-top-tab" data-toggle="tab"
                                            href="#top-profile" role="tab" aria-selected="false">Details</a>
                        <div class="material-border"></div>
                    </li>
                    <!--  <li class="nav-item"><a class="nav-link" id="contact-top-tab" data-toggle="tab"
                             href="#top-contact" role="tab" aria-selected="false">Video</a>
                         <div class="material-border"></div>
                     </li> -->
                    <li class="nav-item"><a class="nav-link" id="review-top-tab" data-toggle="tab"
                                            href="#top-review" role="tab" aria-selected="false">Write Review</a>
                        <div class="material-border"></div>
                    </li>
                </ul>
                <div class="tab-content nav-material" id="top-tabContent">
                    <div class="tab-pane fade show active" id="top-home" role="tabpanel"
                         aria-labelledby="top-home-tab">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum
                            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div class="tab-pane fade" id="top-profile" role="tabpanel" aria-labelledby="profile-top-tab">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <div class="single-product-tables">                               

                        </div>
                        <!--   <div class="tab-pane fade" id="top-contact" role="tabpanel" aria-labelledby="contact-top-tab">
                              <div class="mt-4 text-center">
                                  <iframe width="560" height="315" src="https://www.youtube.com/embed/BUWzX78Ye_8"
                                      allow="autoplay; encrypted-media" allowfullscreen></iframe>
                              </div>
                          </div> -->
                    </div>
                    <div class="tab-pane fade" id="top-review" role="tabpanel" aria-labelledby="review-top-tab">
                        <form class="theme-form" id="formreview">
                            <div class="form-row">
                                <div class="col-md-12">
                                    <div class="media">
                                        <label>Rating</label>
                                        <div class="media-body ml-3">
                                            <div class="rating three-star">
                                                <i class="fa fa-star"></i> 
                                                <i class="fa fa-star"></i> 
                                                <i class="fa fa-star"></i> 
                                                <i class="fa fa-star"></i> 
                                                <i class="fa fa-star"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <!--                                    <div class="col-md-6">
                                                                        <label for="name">Name</label>
                                                                        <input type="text" class="form-control" name="customername" id="name" placeholder="Enter Your name"
                                                                            required>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <label for="email">Email</label>
                                                                        <input type="text" class="form-control" name="email" id="email" placeholder="Email" required>
                                                                    </div>-->
                                <div class="col-md-12">
                                    <label for="review">Review Title</label>
                                    <input type="text" class="form-control" name="review" id="review"
                                           placeholder="Enter your Review Subjects" required>
                                </div>
                                <div class="col-md-1">
                                    <label for="review">Rate out of 5</label>                                 						
                                    <input type="text" name="rate" class="form-control" placeholder="e.g 1" /> 											

                                </div>							
                                <div class="col-md-12">
                                    <label for="review">Review Title</label>
                                    <textarea class="form-control" placeholder="Write Your Testimonial Here"
                                              name="customertestimony" id="customertestimony" rows="6"></textarea>
                                </div>
                                <div class="col-md-12">
                                    <a class="btn btn-solid" href="javascript:void(0);" id="submitreview">Submit YOur Review</a>
                                </div>
                                <div class="col-md-12" id="error">

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>