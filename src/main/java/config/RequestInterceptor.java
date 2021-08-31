package config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

public class RequestInterceptor implements HandlerInterceptor {

	private static Logger logger =  LoggerFactory.getLogger(RequestInterceptor.class)  ;
	
	//private static String PAGE_URL  = "http://localhost:1021/adminlogin" ;
	
	private static String PAGE_URL ="https://jetecommerce.herokuapp.com/adminlogin" ;
	
	//private static String PAGE_URL  = "https://jeteshop.herokuapp.com/adminlogin" ;
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		logger.info("request ","class called");
		boolean  flag  = true  ;
		HttpSession session  =  request.getSession() ;
		String  url  =  request.getRequestURL().toString() ;
		  System.out.println("path ....."+request.getServletPath()+request.getContextPath());
		System.out.println("url "+url);
		System.out.println(flag);
		  if(url.equalsIgnoreCase(RequestInterceptor.PAGE_URL)){
			//response.sendRedirect("/adminindex");
			System.out.println("inside login  page");
		    } 
		      if(!url.equalsIgnoreCase(RequestInterceptor.PAGE_URL)){
			 if(session.getAttribute("accessed")==null) {
			    flag  = false ;
			    System.out.println("redirecting .......you have no session ......");
			    response.sendRedirect("/adminlogin"); 
			     return flag ;
			      } 
		            }
		 return  flag  ;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		System.out.println("post  handle method");
	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
			throws Exception {
		System.out.println("request completion method called ");
	}

}














































