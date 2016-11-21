package com.softserve.osbb.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Yuri Pushchalo on 16.11.2016.
 */
@Entity
@Table(name = "streets")
public class Street implements Serializable {
    private Integer id;
    private String name;
    private City city;
    
//    @OneToMany(mappedBy="street")
//    @JsonIgnore
//    private ArrayList<User> user;

    public Street(){}

    public Street(String name, City city) {
        this.name = name;
        this.city = city;
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

//    public ArrayList<User> getUser() {
//		return user;
//	}
//
//	public void setUser(ArrayList<User> user) {
//		this.user = user;
//	}

	public void setName(String name) {
        this.name = name;
    }

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
        
    }

	@Override
	public String toString() {
		return "Street [id=" + id + ", name=" + name + ", city=" + city + "]";
	}
    
    
    
}
