package com.jetstore.securityconfig;

import lombok.Data;

public class JwtResponse {
	private String jwtToken;
	public JwtResponse(){}
	public JwtResponse(String jwttoken) {
		this.jwtToken = jwttoken;
	}
	public String getJwtToken() {
		return jwtToken;
	}
	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}
	@Override
	public String toString() {
		return "JwtResponse [jwtToken=" + jwtToken + "]";
	}
	
	
}
