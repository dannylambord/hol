package com.qa.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Destination {
	
	@Id
	@GeneratedValue
	int locId = 0;
	int id = 0;
	String city;
	String country;
	
	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public int getLocId() {
		return locId;
	}


	public void setLocId(int locId) {
		this.locId = locId;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}
	

}
