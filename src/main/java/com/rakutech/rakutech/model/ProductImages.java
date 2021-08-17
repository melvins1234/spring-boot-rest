package com.rakutech.rakutech.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="product_images")
public class ProductImages {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String image;
	
	public ProductImages() {}
	
	public ProductImages(String image) {
		this.image = image;
	}

	public String getImage() {
		return image;
	}

	@Override
	public String toString() {
		return "ProductImages [id=" + id + ", image=" + image + "]";
	}
	
	
	
}
