package config;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class RequestInterceptor implements HandlerInterceptor {

	private static Logger logger =  LoggerFactory.getLogger(RequestInterceptor.class)  ;

	//@Value("{page.adminlogin}")
	// private static String PAGE_URL ="http://104.45.92.200:1021/adminlogin";
	
	  private static String PAGE_URL = "http://localhost:1021/adminlogin";
	
	//private static String PAGE_URL ="https://jetecommerce.herokuapp.com/adminlogin" ;
	
	//private static String PAGE_URL  = "https://jeteshop.herokuapp.com/adminlogin" ;
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		logger.info("request "+"class called " +PAGE_URL);
		boolean  flag  = true  ;
		HttpSession session  =  request.getSession() ;
		String  url  =  request.getRequestURL().toString() ;
		logger.info("url "+url);
		logger.info("path ....."+request.getServletPath()+" getContextPath "+request.getContextPath());
		logger.info(""+flag);
		  if(url.equalsIgnoreCase(RequestInterceptor.PAGE_URL)){
			//response.sendRedirect("/adminindex");
			logger.info("inside login  page");
			 return flag ;
		       } 
		  if(!url.equalsIgnoreCase(RequestInterceptor.PAGE_URL)){
			 if(session.getAttribute("accessed")==null && url.contains("/jetcart")) {
			    flag  = false ;
			    logger.info("redirecting .......you have no session ......"+flag);
			   // response.sendRedirect("/jetcart/index");
			       return true ;
			       }else if(session.getAttribute("accessed") !=null) {
			    	    return flag ;  
			       }else {
			    	   response.sendRedirect("/adminlogin");
			    	   return false ;
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














































