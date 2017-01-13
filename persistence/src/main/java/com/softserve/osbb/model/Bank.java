package com.softserve.osbb.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

/**
 * Created by afedorak on 11.01.2017.
 */
@Entity
@Table(name = "bank")
public class Bank {

    private long id;
    private String name;
    private String mfo;
    private String edrpo;
    private String address;
    private String phone;

    private List<Osbb> osbbs;

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "mfo")
    public String getMfo() {
        return mfo;
    }

    public void setMfo(String mfo) {
        this.mfo = mfo;
    }

    @Column(name = "edrpo")
    public String getEdrpo() {
        return edrpo;
    }

    public void setEdrpo(String edrpo) {
        this.edrpo = edrpo;
    }

    @Column(name = "name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "address")
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Column(name = "phone")
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @OneToMany(mappedBy = "bank", cascade = CascadeType.ALL)
    @JsonIgnore
    public List<Osbb> getOsbbs() {
        return osbbs;
    }

    public void setOsbbs(List<Osbb> osbbs) {
        this.osbbs = osbbs;
    }
}
