package com.softserve.osbb.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Yuri Pushchalo on 16.11.2016.
 */
@Entity
@Table(name = "streets")
public class Street implements Serializable {
    private Integer streetId;
    private String name;
    private City city;
//    private Collection<User> users;

    public Street(){}

    public Street(String name, City city) {
        this.name = name;
        this.city = city;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "street_id")
    public Integer getStreetId() {
        return streetId;
    }

    public void setStreetId(Integer streetId) {
        this.streetId = streetId;
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
    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }
    
/*    @OneToMany(mappedBy = "role", fetch = FetchType.LAZY)
    @JsonIgnore
    public Collection<User> getUsers() {
        return users;
    }
  */
}
