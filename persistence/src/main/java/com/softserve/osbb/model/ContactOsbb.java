package com.softserve.osbb.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by afedorak on 25.11.2016.
 */
@Entity
@Table(name = "contact_osbb", schema = "myosbb", catalog = "")
public class ContactOsbb {
    private long id;
    private long osbbId;
    private long contactCategoryId;
    private String firstName;
    private String middleName;
    private String lastName;
    private String phone;
    private String phone2;
    private Long userId;

    public ContactOsbb(long osbbId, String firstName) {
        this.osbbId = osbbId;
        this.firstName = firstName;
    }

    @Id
    @Column(name = "id", nullable = false)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "osbb_id", nullable = false)
    public long getOsbbId() {
        return osbbId;
    }

    public void setOsbbId(long osbbId) {
        this.osbbId = osbbId;
    }

    @Column(name = "contact_category_id", nullable = false)
    public long getContactCategoryId() {
        return contactCategoryId;
    }

    public void setContactCategoryId(long contactCategoryId) {
        this.contactCategoryId = contactCategoryId;
    }

    @Column(name = "first_name", nullable = false, length = 50)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }


    @Column(name = "middle_name", nullable = true, length = 50)
    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }


    @Column(name = "last_name", nullable = true, length = 50)
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    @Column(name = "phone", nullable = true, length = 50)
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }


    @Column(name = "phone2", nullable = true, length = 50)
    public String getPhone2() {
        return phone2;
    }

    public void setPhone2(String phone2) {
        this.phone2 = phone2;
    }

    @Column(name = "user_id", nullable = true)
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ContactOsbb that = (ContactOsbb) o;

        if (id != that.id) return false;
        if (osbbId != that.osbbId) return false;
        if (contactCategoryId != that.contactCategoryId) return false;
        if (firstName != null ? !firstName.equals(that.firstName) : that.firstName != null) return false;
        if (middleName != null ? !middleName.equals(that.middleName) : that.middleName != null) return false;
        if (lastName != null ? !lastName.equals(that.lastName) : that.lastName != null) return false;
        if (phone != null ? !phone.equals(that.phone) : that.phone != null) return false;
        if (phone2 != null ? !phone2.equals(that.phone2) : that.phone2 != null) return false;
        if (userId != null ? !userId.equals(that.userId) : that.userId != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = (int) (id ^ (id >>> 32));
        result = 31 * result + (int) (osbbId ^ (osbbId >>> 32));
        result = 31 * result + (int) (contactCategoryId ^ (contactCategoryId >>> 32));
        result = 31 * result + (firstName != null ? firstName.hashCode() : 0);
        result = 31 * result + (middleName != null ? middleName.hashCode() : 0);
        result = 31 * result + (lastName != null ? lastName.hashCode() : 0);
        result = 31 * result + (phone != null ? phone.hashCode() : 0);
        result = 31 * result + (phone2 != null ? phone2.hashCode() : 0);
        result = 31 * result + (userId != null ? userId.hashCode() : 0);
        return result;
    }
}
