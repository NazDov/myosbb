package com.softserve.osbb.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

/**
 * Created by afedorak on 25.11.2016.
 */
@Entity
@Table(name = "contact_osbb_category")
public class ContactOsbbCategory {
    private long id;
    private String name;
    private Boolean management;

    private List<ContactOsbb> osbbs;


    public ContactOsbbCategory(long id) {
        this.id = id;
    }

    public ContactOsbbCategory() {
    }


    @Id
    @Column(name = "id", nullable = false)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "name", nullable = false, length = 50)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @OneToMany(mappedBy = "contactCategory", cascade = CascadeType.ALL)
    @JsonIgnore
    public List<ContactOsbb> getOsbbs() {
        return osbbs;
    }

    public void setOsbbs(List<ContactOsbb> osbbs) {
        this.osbbs = osbbs;
    }

    @Column(name = "management")
    public Boolean isManagement() {
        return management;
    }

    public void setManagement(Boolean management) {
        this.management = management;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ContactOsbbCategory that = (ContactOsbbCategory) o;

        if (id != that.id) return false;
        if (!name.equals(that.name)) return false;
        if (!management.equals(that.management)) return false;
        return osbbs.equals(that.osbbs);

    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + name.hashCode();
        result = 31 * result + management.hashCode();
        result = 31 * result + osbbs.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "ContactOsbbCategory{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", management=" + management +
                '}';
    }
}
