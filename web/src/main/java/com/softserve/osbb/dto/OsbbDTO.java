/*
 * Project “OSBB” – a web-application which is a godsend for condominium head, managers and 
 * residents. It offers a very easy way to manage accounting and residents, events and 
 * organizational issues. It represents a simple design and great functionality that is needed 
 * for managing. 
 */
package com.softserve.osbb.dto;

import com.softserve.osbb.model.Attachment;
import com.softserve.osbb.model.Bank;
import com.softserve.osbb.model.District;
import com.softserve.osbb.model.User;

import java.sql.Timestamp;

/**
 * Created by Roman on 22.09.2016.
 */
public class OsbbDTO {

    private Integer osbbId;
    private String name;
    private String description;
    private String houseNumber;
    private District district;
    private String districtStr;
    private Attachment logo;
    private Timestamp creationDate;
    private User creator;
    private Integer countOfHouses;
    private Integer countOfUsers;

    private Bank bank;
    private String bankMfo;
    private String bankEdrpo;
    private String baankNumber;


    public OsbbDTO(){}

    public Integer getOsbbId() {
        return osbbId;
    }

    public void setOsbbId(Integer osbbId) {
        this.osbbId = osbbId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }

    public District getDistrict() {
        return district;
    }

    public void setDistrict(District district) {
        this.district = district;
    }

    public String getDistrictStr() {
        return districtStr;
    }

    public void setDistrictStr(String districtStr) {
        this.districtStr = districtStr;
    }

    public Attachment getLogo() {
        return logo;
    }

    public void setLogo(Attachment logo) {
        this.logo = logo;
    }

    public Timestamp getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Timestamp creationDate) {
        this.creationDate = creationDate;
    }

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    public Integer getCountOfHouses() {
        return countOfHouses;
    }

    public void setCountOfHouses(Integer countOfHouses) {
        this.countOfHouses = countOfHouses;
    }

    public Integer getCountOfUsers() {
        return countOfUsers;
    }

    public void setCountOfUsers(Integer countOfUsers) {
        this.countOfUsers = countOfUsers;
    }


    public String getBankMfo() {
        return bankMfo;
    }

    public void setBankMfo(String bankMfo) {
        this.bankMfo = bankMfo;
    }

    public String getBankEdrpo() {
        return bankEdrpo;
    }

    public void setBankEdrpo(String bankEdrpo) {
        this.bankEdrpo = bankEdrpo;
    }


    public String getBaankNumber() {
        return baankNumber;
    }

    public void setBaankNumber(String baankNumber) {
        this.baankNumber = baankNumber;
    }

    public Bank getBank() {
        return bank;
    }

    public void setBank(Bank bank) {
        this.bank = bank;
    }
}
