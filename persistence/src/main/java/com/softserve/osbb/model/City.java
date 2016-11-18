package com.softserve.osbb.model;

import javax.persistence.*;

/**
 * Created by Yuri Pushchalo on 15.11.2016.
 */
@Entity
@Table(name = "cities")
public class City {
    private Integer cityId;
    private String name;
    private Region region;

    public City() { }

    public City(String name, Region region) {
        this.name = name;
        this.region = region;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "city_id")
    public Integer getCityId() {
        return cityId;
    }

    public void setCityId(Integer cityId) {
        this.cityId = cityId;
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
    
}
