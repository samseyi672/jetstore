package com.jetstore.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/jetcart")
public class FrontPageController {

	@GetMapping("/index")
	public String index() {
		System.out.println("calling  index");
		return "frontend/index";
	}

	@GetMapping("/productpage")
	public String productpage() {
		System.out.println("calling  index");
		return "frontend/product-page(no-sidebar)";
	}

	@GetMapping("/cart")
	public String cart() {
		System.out.println("calling  index");
		return "frontend/cart";
	}

	@GetMapping("/checkout")
	public String checkout() {
		System.out.println("calling  index");
		return "frontend/checkout";
	}

	@GetMapping("/marketplace")
	public String marketplace() {
		System.out.println("calling  index");
		return "frontend/marketplace";
	}

	@GetMapping("/productpagephoneaccessories")
	public String productPagePhoneAccessories() {
		return "frontend/productpagephoneaccessories";
	}

	@GetMapping("/productpageprinter")
	public String productpageprinters() {
		return "frontend/product-page(no-sidebar-printers)";
	}
	// "/jetcart/productpagedesktop"

	@GetMapping("/productpagedesktop")
	public String productPageDesktop() {
		return "frontend/product-page(no-sidebar-desktops)";
	}

	@GetMapping("/productpagehifinetwork")
	public String productPageHifiNetwork() {
		return "frontend/product-page(no-sidebar-hifi)";
	}

	// "/jetcart/productpageaccessories"
	@GetMapping("/productpageaccessories")
	public String productpageaccessories() {
		return "frontend/product-page(no-sidebar-accessories)";
	}
	// product-page(no-sidebar-computers)

	@GetMapping("/productpagecomputer")
	public String productpagecomputer() {
		return "frontend/product-page(no-sidebar-computers)";
	}

	// "/jetcart/productpagehealthy"
	@GetMapping("/productpagehealthy")
	public String productpagehealthy() {
		return "frontend/product-page(no-sidebar-healthy)";
	}

	@GetMapping("/productpageappliance")
	public String productpageappliance() {
		return "frontend/product-page(no-sidebar-appliances)";
	}

	// /jetcart/productpagephones
	@GetMapping("/productpagephones")
	public String productpagephones() {
		return "frontend/product-page(no-sidebar-phones)";
	}
	@GetMapping("/register")
	public String register() {
		return "frontend/register";
	}
	@GetMapping("/payment")
	public String payment() {
		return "frontend/payment" ;
	}
    @GetMapping("/productbycategory")
	public String productsbycategory() {
		System.out.println("calling  index");
		return "frontend/productbycategory";
	}
    @GetMapping("/scanner")
 	public String scanner() {
 		System.out.println("calling  index");
 		return "frontend/scanners2";
 	}
      @GetMapping("/compare")
 	public String comPare() {
 		System.out.println("calling  index");
 		return "frontend/compare";
 	}
      @GetMapping("/wishlist")
   	public String wishList() {
   		System.out.println("calling  index");
   		return "frontend/wishlist";
   	}
         @GetMapping("/faq")
     	public String faq() {
     		System.out.println("calling  index");
     		return "frontend/faq";
     	}
         @GetMapping("/aboutus")
      	public String aboutus() {
      		System.out.println("calling  index");
      		return "frontend/about-page";
      	}
         @GetMapping("/contact")
      	public String contact() {
      		System.out.println("calling  index");
      		return "frontend/contact";
      	}
         @GetMapping("/becomevendor")
       	public String becomevendor() {
       		System.out.println("calling  index");
       		return "frontend/become-vendor";
       	}
             @GetMapping("/blog")
        	public String blog() {
        		System.out.println("calling  index");
        		return "frontend/blog-page";
        	}
             @GetMapping("/collection")
         	public String collection() {
         		System.out.println("calling  index");
         		return "frontend/collection";
         	}
             @GetMapping("/search")
          	public String search() {
          		System.out.println("calling  index");
          		return "frontend/search";
          	}
             @GetMapping("/category-page")
         	public String categorypage() {
         		System.out.println("calling  index");
         		return "frontend/category-page";
         	}
             
         
}

















































