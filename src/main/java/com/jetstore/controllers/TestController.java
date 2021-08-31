package com.jetstore.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class TestController {

	  @GetMapping("/test2")
	public ModelAndView test() {
		  ModelAndView modelAndView = new ModelAndView("back-end/login");
		    return modelAndView;
	}
}
