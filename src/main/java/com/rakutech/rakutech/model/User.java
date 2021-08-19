package com.rakutech.rakutech.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "user")
public class User {
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String password;
    @Column(name="full_name")
    private String fullName;
    @Column(name="billing_address")
    private String billingAddress;
    @Column(name="default_shipping_address")
    private String defaultShippingAddress;
    @Column(name="secondary_shipping_address")
    private String secondaryShippingAddress;
    private String phone;
    @Column(name="role")
    private String roles;
    
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
	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + ", password=" + password + ", fullName=" + fullName
				+ ", billingAddress=" + billingAddress + ", defaultShippingAddress=" + defaultShippingAddress
				+ ", secondaryShippingAddress=" + secondaryShippingAddress + ", phone=" + phone + ", roles=" + roles
				+ "]";
	}
	
}
