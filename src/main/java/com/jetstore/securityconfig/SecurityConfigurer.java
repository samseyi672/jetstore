package com.jetstore.securityconfig;

import java.util.Collections;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;

@Configuration
@EnableWebSecurity()
public class SecurityConfigurer extends WebSecurityConfigurerAdapter{

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		super.configure(auth);
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
	          http.cors().and().csrf().disable()
				.authorizeRequests()
				.antMatchers("/api/login").permitAll()
				.antMatchers("/login").permitAll()
				.antMatchers("/api/test").permitAll()
				.antMatchers("/adminindex").permitAll()
				.antMatchers("/market").permitAll()
				.antMatchers("/addprod").permitAll()
				.antMatchers("/category").permitAll()
				.antMatchers("/add-digital-product").permitAll()
				.antMatchers("/categorydigital").permitAll()
				.antMatchers("/categorysubdigital").permitAll()
				.antMatchers("/categorysub").permitAll()
				.antMatchers("/couponcreate").permitAll()
				.antMatchers("/couponlist").permitAll()
				.antMatchers("/createmenu").permitAll()
				.antMatchers("/createuser").permitAll()
				.antMatchers("/createvendors").permitAll()
				.antMatchers("/currencyrates").permitAll()
				//.antMatchers("/adminindex").permitAll()
				.antMatchers("/review").permitAll()
				.antMatchers("/customer").permitAll()
				.antMatchers("/invoice").permitAll()
				.antMatchers("/listvendors").permitAll()
				.antMatchers("/media").permitAll()
				.antMatchers("/menulist").permitAll()
				.antMatchers("/order").permitAll()
				.antMatchers("/pagecreate").permitAll()
				.antMatchers("/pagelist").permitAll()
				.antMatchers("/pagedetails").permitAll()
				.antMatchers("/productlist").permitAll()
				.antMatchers("/messaging").permitAll()
				.antMatchers("/messageview").permitAll()
				.antMatchers("/jetcart/category-page").permitAll()
				.antMatchers("/jetcart/becomevendor").permitAll()
				.antMatchers("/jetcart/collection").permitAll()
				.antMatchers("/jetcart/search").permitAll()
				.antMatchers("/jetcart/contact").permitAll()
				.antMatchers("/jetcart/forgotpassword").permitAll()
				.antMatchers("/jetcart/aboutus").permitAll()
				.antMatchers("/jetcart/chat").permitAll()
				.antMatchers("/productlistdetails").permitAll()
				.antMatchers("/productlistdigital").permitAll()
				.antMatchers("/addprodigital").permitAll()
				.antMatchers("/profile").permitAll()
				.antMatchers("/jetcart/**").permitAll()
//				.antMatchers("/scanner").permitAll()
//				.antMatchers("/productbycategory").permitAll()
				.antMatchers("/reports").permitAll()
				.antMatchers("/taxes").permitAll()
				.antMatchers("/transactions").permitAll()
				.antMatchers("/translations").permitAll()
				.antMatchers("/userlist").permitAll()
				.antMatchers("/assets/**").permitAll()
				.antMatchers("/jetresources/**").permitAll()
				.antMatchers("/dist/**").permitAll()
				.antMatchers("/wishlist").permitAll()
				.antMatchers("/contact/**").permitAll()
				.antMatchers("/jetcart").permitAll()
				.antMatchers("/chat").permitAll()			
				//.antMatchers("/jetcart/adminlogin**").permitAll()
				//.antMatchers("/dist/**").permitAll()
				.anyRequest().authenticated()
				.and().sessionManagement()
		        .sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED).and()
				.formLogin().loginPage("/adminlogin").permitAll()
				.usernameParameter("email").passwordParameter("password").and().logout()  // this is used as username in the  html form page
				.and()
				.exceptionHandling().accessDeniedPage("/403") ;				
	}
}
