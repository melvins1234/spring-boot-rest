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
    private String country;
    private String image;
	private String token;
	
	public UserDTO() {}
	
	public UserDTO(Long id, String email, String password, String fullName, String billingAddress,
			String defaultShippingAddress, String secondaryShippingAddress, String phone, String roles, String country,
			String image, String token) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.fullName = fullName;
		this.billingAddress = billingAddress;
		this.defaultShippingAddress = defaultShippingAddress;
		this.secondaryShippingAddress = secondaryShippingAddress;
		this.phone = phone;
		this.roles = roles;
		this.country = country;
		this.image = image;
		this.token = token;
	}

	public Long getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public String getFullName() {
		return fullName;
	}

	public String getBillingAddress() {
		return billingAddress;
	}

	public String getDefaultShippingAddress() {
		return defaultShippingAddress;
	}

	public String getSecondaryShippingAddress() {
		return secondaryShippingAddress;
	}

	public String getPhone() {
		return phone;
	}

	public String getRoles() {
		return roles;
	}

	public String getCountry() {
		return country;
	}

	public String getImage() {
		return image;
	}

	public String getToken() {
		return token;
	}

	@Override
	public String toString() {
		return "UserDTO [id=" + id + ", email=" + email + ", password=" + password + ", fullName=" + fullName
				+ ", billingAddress=" + billingAddress + ", defaultShippingAddress=" + defaultShippingAddress
				+ ", secondaryShippingAddress=" + secondaryShippingAddress + ", phone=" + phone + ", roles=" + roles
				+ ", country=" + country + ", image=" + image + ", token=" + token + "]";
	}
	
}
