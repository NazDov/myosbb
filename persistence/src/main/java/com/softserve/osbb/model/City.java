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
@Table(name = "cities")
public class City implements Serializable {
    private Integer id;
    private String name;
    private Region region;
    
    @OneToMany(mappedBy="city")
    @JsonIgnore
    private List<Street> streets = new ArrayList<>();

    public City(){}

    public City(String name, Region region) {
        this.name = name;
        this.region = region;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    public Integer getid() {
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

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    public Region getRegion() {
        return region;
    }

    public void setRegion(Region region) {
        this.region = region;
    }
    
    public void addStreet(Street street) {
    	streets.add(street);
    }
    
    public Street getStreet(int index) {
    	return streets.get(index);
    }
    

}
