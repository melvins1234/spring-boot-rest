package com.rakutech.rakutech.dto;

public class UserDTO {
	
	private Long id;
	private String email;
	private String password;
	private String fullName;
	private String billingAddress;
	private String defaultShippingAddress;
	private String secondaryShippingAddress;
	private String phone;
	private String roles; 
	private String token;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getBillingAddress() {
		return billingAddress;
	}
	public void setBillingAddress(String billingAddress) {
		this.billingAddress = billingAddress;
	}
	public String getDefaultShippingAddress() {
		return defaultShippingAddress;
	}
	public void setDefaultShippingAddress(String defaultShippingAddress) {
		this.defaultShippingAddress = defaultShippingAddress;
	}
	public String getSecondaryShippingAddress() {
		return secondaryShippingAddress;
	}
	public void setSecondaryShippingAddress(String secondaryShippingAddress) {
		this.secondaryShippingAddress = secondaryShippingAddress;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getRoles() {
		return roles;
	}
	public void setRoles(String roles) {
		this.roles = roles;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	@Override
	public String toString() {
		return "UserDTO [id=" + id + ", email=" + email + ", password=" + password + ", fullName=" + fullName
				+ ", billingAddress=" + billingAddress + ", defaultShippingAddress=" + defaultShippingAddress
				+ ", secondaryShippingAddress=" + secondaryShippingAddress + ", phone=" + phone + ", roles=" + roles
				+ ", token=" + token + "]";
	}
	
}
