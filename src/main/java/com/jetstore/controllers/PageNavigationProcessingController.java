package com.jetstore.controllers;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.apache.commons.lang3.RandomStringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus; 
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jetstore.securityconfig.JwtRequest;
import com.jetstore.securityconfig.JwtResponse;

import config.RequestInterceptor;
//import net.bytebuddy.utility.RandomString;

@RestController
@RequestMapping("/api")
public class PageNavigationProcessingController {
	private static Logger logger =  LoggerFactory.getLogger(PageNavigationProcessingController.class)  ;
	   @Autowired
	private   RestTemplate restCaller  ;
	  // @Value("{page.jwtTokenURL}")
	//private String jwtTokenURL="http://104.45.92.200:1022/authenticate" ;
	 private String jwtTokenURL="http://localhost:1022/authenticate" ;
	//private final String jwtTokenURL  ="https://cristabackend.herokuapp.com/authenticate" ;
	  //@Value("{page.customerJwtTokenURL}")
	//private String customerJwtTokenURL ="http://104.45.92.200:1022/authenticatecustomer";
	 private String customerJwtTokenURL ="http://localhost:1022/authenticatecustomer";
   // private final String customerJwtTokenURL ="https://cristabackend.herokuapp.com/authenticatecustomer" ;
	   //@PostMapping("/login")
	   @RequestMapping(value = "/login", method = RequestMethod.POST)
	 public ResponseEntity<?> loginUsers(@Valid @RequestBody JwtRequest authenticationRequest,BindingResult result,HttpServletRequest request,HttpServletResponse response) throws JsonProcessingException{
	        // call rest api here 
		   logger.info("authenticationRequest "+authenticationRequest.toString());
		   Map<String,String> vars  = new HashMap<String,String>()  ;
		    String requestBody  =  getBody(authenticationRequest) ;
		    HttpHeaders headers =  getHeaders() ;
		    HttpEntity<String> requestInJson  = new HttpEntity<String>(requestBody,headers) ;
		       // restCaller.getForEntity(jwtTokenURL,JwtResponse.class,vars) ; 
		    ResponseEntity<JwtResponse> authenticationToken  = restCaller.exchange(jwtTokenURL, HttpMethod.POST, requestInJson,JwtResponse.class) ;
		    // if authentication  is successful,
		    
		    if(authenticationToken.getStatusCode().equals(HttpStatus.OK)) {
		    	logger.info("authenticationToken "+authenticationToken);
		    String  token  = authenticationToken.getBody().getJwtToken() ;	
		       logger.info(" token "+token);
		        HttpSession session= request.getSession(true); // true == allow create
		       // response.setHeader("token",token);
		        session.setAttribute("accessed",genRandomString());
		       // model.addAttribute("token", "redirectWithRedirectPrefix");
		       // return new ModelAndView("redirect:/back-end/index");
		              return new ResponseEntity<String>(token,HttpStatus.OK)  ;
		         }
		     return null  ;
	     }
	   public String genRandomString() {		   
		    int length = 10;
		    boolean useLetters = true;
		    boolean useNumbers = false;
		    String generatedString = RandomStringUtils.random(length, useLetters, useNumbers);
		    System.out.println(generatedString);
		    return generatedString ;
		}
	  private String getBody(final JwtRequest request) throws JsonProcessingException {
		  logger.info("json ....."+new ObjectMapper().writeValueAsString(request));
		 return new ObjectMapper().writeValueAsString(request) ;  
	  } 
	      @RequestMapping(value = "/customer", method = RequestMethod.POST)
		 public ResponseEntity<?> loginCustomer(@Valid @RequestBody JwtRequest 
				 authenticationRequest,BindingResult result,HttpServletRequest request,
				 HttpServletResponse response) throws JsonProcessingException{
	    	    System.out.println(authenticationRequest.toString());
			   Map<String,String> vars  = new HashMap<String,String>()  ;
			    String requestBody  =  getBody(authenticationRequest) ;
			    HttpHeaders headers =  getHeaders() ;
			    HttpEntity<String> requestInJson  = new HttpEntity<String>(requestBody,headers) ;
			       // restCaller.getForEntity(jwtTokenURL,JwtResponse.class,vars) ; 
     ResponseEntity<JwtResponse> authenticationToken  =
			     restCaller.exchange(customerJwtTokenURL, HttpMethod.POST, requestInJson,JwtResponse.class) ;
			    // if authentication  is successful,
			    if(authenticationToken.getStatusCode().equals(HttpStatus.OK)) {
			    	System.out.println("authenticationToken "+authenticationToken);
			    String  token  = authenticationToken.getBody().getJwtToken() ;	
			      System.out.println(" token "+token);
			      //  HttpSession session= request.getSession(true); // true == allow create
			       // response.setHeader("token",token);
			       // session.setAttribute("accessed",RandomString.make(10));
			         return new ResponseEntity<String>(token,HttpStatus.OK)  ;
			         }
		         return null;
	            }  
	  private HttpHeaders getHeaders() {
		  HttpHeaders headers =   new HttpHeaders()  ;
		  headers.set("Content-Type",MediaType.APPLICATION_JSON_VALUE);
		  headers.set("Accept",MediaType.APPLICATION_JSON_VALUE)  ;
		  return headers ;
	  }
	    @GetMapping("/test")
	  public String test(HttpServletRequest request,HttpServletResponse response) {
		  System.out.println(request.getParameter("username"));
		  return "works" ;
	  }
}





















































