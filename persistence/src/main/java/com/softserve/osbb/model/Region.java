package com.softserve.osbb.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Yuri Pushchalo on 15.11.2016.
 */
@Entity
@Table(name = "regions")
public class Region implements Serializable {
	private Integer regionId;
	private String name;
	// private Collection<User> users;

	public Region() {
	}

	public Region(String name) {
		this.name = name;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "region_id")
	public Integer getRegionId() {
		return regionId;
	}

	public void setRegionId(Integer regionId) {
		this.regionId = regionId;
	}

	@Basic
	@Column(name = "name")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
