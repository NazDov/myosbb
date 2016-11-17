package com.softserve.osbb.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Yuri Pushchalo on 15.11.2016.
 */
@Entity
@Table(name = "regions")
public class Region implements Serializable {
	private Integer id;
	private String name;
	
	@OneToMany(mappedBy="region")
	@JsonIgnore
	private List<City> cities = new ArrayList<>();

	public Region() {
	}

	public Region(String name) {
		this.name = name;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Basic
	@Column(name = "name")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void addCity(City city) {
		cities.add(city);
	}

	public City getCity(int index) {
		return cities.get(index);
	}
}
