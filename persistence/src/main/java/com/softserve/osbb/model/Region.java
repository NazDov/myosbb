package com.softserve.osbb.model;

import java.util.Collection;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Created by Yuri Pushchalo on 15.11.2016.
 */
@Entity
@Table(name = "regions")
public class Region {
	private Integer id;
	private String name;
	private Collection<City> citie;

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

	@OneToMany(mappedBy="region")
	@JsonIgnore
	public Collection<City> getCitie() {
		return citie;
	}

	public void setCitie(Collection<City> citie) {
		this.citie = citie;
	}
	
	

}
