package com.jetstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.handler.MappedInterceptor;

import config.RequestInterceptor;

@SpringBootApplication
public class JetstoreApplication {

	public static void main(String[] args) {
		SpringApplication.run(JetstoreApplication.class,args);
	}
	
	//this is an interceptor bean 	
	 @Bean
	public MappedInterceptor localeInterceptor(){
	return new MappedInterceptor(null,new String[]{"/jetresources/**",
		"/dist/**","/assets/**","/api/**","/jetcart/**"},new RequestInterceptor());
	}
	
    @Bean
    public RestTemplate getTemplate() {
       return new RestTemplate() ;	
    }
}






































































































