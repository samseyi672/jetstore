package com.jetstore.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class PageControllers {

//	@GetMapping("/market")
//	public String index() {
//		System.out.println("calling  index");
//		return "frontend/index";
//	}

	@GetMapping("/adminlogin")
	public String adminlogin() {
		System.out.println("calling  index");
		return "back-end/login";
	}

	@GetMapping("/addprod")
	public String addProduct() {
		System.out.println("calling  index");
		return "back-end/add-product";
	}

	@GetMapping("/category")
	public String addCategory() {
		System.out.println("calling  index");
		return "back-end/category";
	}

	@GetMapping("/add-digital-product")
	public String addDigitalProduct() {
		System.out.println("calling  index");
		return "back-end/add-digital-product";
	}

	@GetMapping("/categorydigital")
	public String categoryDigital() {
		System.out.println("calling  index");
		return "back-end/category-digital";
	}

	@GetMapping("/categorysubdigital")
	public String categoryDigitalSub() {
		System.out.println("calling  index");
		return "back-end/category-digitalsub";
	}

	@GetMapping("/categorysub")
	public String categorySub() {
		System.out.println("calling  index");
		return "back-end/category-sub";
	}

	@GetMapping("/couponcreate")
	public String couponCreate() {
		System.out.println("calling  index");
		return "back-end/coupon-create";
	}

	@GetMapping("/couponlist")
	public String couponList() {
		System.out.println("calling  index");
		return "back-end/coupon-list";
	}

	@GetMapping("/createmenu")
	public String createMenu() {
		System.out.println("calling  index");
		return "back-end/create-menu";
	}

	@GetMapping("/createuser")
	public String createUser() {
		System.out.println("calling  index");
		return "back-end/create-user";
	}

	@GetMapping("/createvendors")
	public String createVendors() {
		System.out.println("calling  index");
		return "back-end/create-vendors";
	}
//	invoice,listvendors,media,menulist,order,pagecreate,pagelist,pagedetails,productlist,productlistdetails,profile,reports,taxes,
//	transactions,translations,userlist
	@GetMapping("/currencyrates")
	public String currencyRates() {
		System.out.println("calling  index");
		return "back-end/currency-rates";
	}

	@GetMapping("/adminindex")
	public String adminIndex() {
		System.out.println("calling  index");
		return "back-end/index";
	}
	
	@GetMapping("/invoice")
	public String invoice() {
		System.out.println("calling  index");
		return "back-end/invoice";
	}
	
	@GetMapping("/listvendors")
	public String listVendors() {
		System.out.println("calling  index");
		return "back-end/list-vendor";
	}
	
	@GetMapping("/media")
	public String media() {
		System.out.println("calling  index");
		return "back-end/media";
	}
	
	@GetMapping("/menulist")
	public String menulist() {
		System.out.println("calling  index");
		return "back-end/menu-list";
	}
	
	@GetMapping("/order")
	public String order() {
		System.out.println("calling  index");
		return "back-end/order";
	}
	
	@GetMapping("/pagecreate")
	public String pagecreate() {
		System.out.println("calling  index");
		return "back-end/page-create";
	}
	
	@GetMapping("/pagelist")
	public String pagelist() {
		System.out.println("calling  index");
		return "back-end/pages-list";
	}
	
	@GetMapping("/pagedetails")
	public String pagedetails() {
		System.out.println("calling  index");
		return "back-end/page-details";
	}
	
	@GetMapping("/productlist")
	public String productlist() {
		System.out.println("calling  index");
		return "back-end/product-list";
	}
	
	@GetMapping("/productlistdetails")
	public String productlistdetails() {
		System.out.println("calling  index");
		return "back-end/product-detail";
	}

	@GetMapping("/productlistdigital")
	public String productlistdigital() {
		System.out.println("calling  index");
		return "back-end/product-listdigital";
	}
	@GetMapping("/addprodigital")
	public String addProdigital() {
		System.out.println("calling  index");
		return "back-end/add-digital-product";
	}
	
	@GetMapping("/profile")
	public String profile() {
		System.out.println("calling  index");
		return "back-end/profile";
	}
	
	@GetMapping("/reports")
	public String reports() {
		System.out.println("calling  index");
		return "back-end/reports";
	}
	
	@GetMapping("/taxes")
	public String taxes() {
		System.out.println("calling  index");
		return "back-end/taxes";
	}
	
	@GetMapping("/transactions")
	public String transactions() {
		System.out.println("calling  index");
		return "back-end/transactions";
	}
	
	@GetMapping("/translations")
	public String translations() {
		System.out.println("calling  index");
		return "back-end/translations";
	}

	 @GetMapping("/userlist")
	public String userList() {
		System.out.println("calling  index");
		return "back-end/user-list";
	}
	 @GetMapping("/review")
		public String review() {
			System.out.println("calling  index");
			return "back-end/review";
		}
	     @GetMapping("/customer")
		public String customer() {
			System.out.println("calling  index");
			return "back-end/customer";
		}
	          @GetMapping("/messaging")
			public String messaging() {
				System.out.println("calling  index");
				return "back-end/messaging";
			}
	             @GetMapping("/messageview")
				public String messageview() {
					System.out.println("calling  index");
					return "back-end/messageview";
				}
}
