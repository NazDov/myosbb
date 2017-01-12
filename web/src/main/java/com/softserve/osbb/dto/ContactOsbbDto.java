package com.softserve.osbb.dto;

import com.softserve.osbb.model.*;
import com.sun.org.apache.xpath.internal.operations.Number;

import java.util.List;

/**
 * Created by afedorak on 12.01.2017.
 */
public class ContactOsbbDto extends AbstractDTO {
    private Long id;
    private Integer osbbId;
    private String contactCategoryName;
    private Long contactCategoryId;
    private String firstName;
    private String middleName;
    private String lastName;
    private String phone;
    private String phone2;
    private Integer userId;
    private Integer apartmentNum;
    private List<Attachment> attachments;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



    public String getContactCategoryName() {
        return contactCategoryName;
    }

    public void setContactCategoryName(String contactCategoryName) {
        this.contactCategoryName = contactCategoryName;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleName() {
        return middleName;
    }

    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPhone2() {
        return phone2;
    }

    public void setPhone2(String phone2) {
        this.phone2 = phone2;
    }

    public Integer getOsbbId() {
        return osbbId;
    }

    public void setOsbbId(Integer osbbId) {
        this.osbbId = osbbId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getApartmentNum() {
        return apartmentNum;
    }

    public void setApartmentNum(Integer apartmentNum) {
        this.apartmentNum = apartmentNum;
    }

    public List<Attachment> getAttachments() {
        return attachments;
    }

    public void setAttachments(List<Attachment> attachments) {
        this.attachments = attachments;
    }

    public Long getContactCategoryId() {
        return contactCategoryId;
    }

    public void setContactCategoryId(Long contactCategoryId) {
        this.contactCategoryId = contactCategoryId;
    }
}
