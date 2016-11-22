/*
 * Project “OSBB” – a web-application which is a godsend for condominium head, managers and 
 * residents. It offers a very easy way to manage accounting and residents, events and 
 * organizational issues. It represents a simple design and great functionality that is needed 
 * for managing. 
 */
package com.softserve.osbb.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.softserve.osbb.model.Apartment;
import com.softserve.osbb.model.House;
import com.softserve.osbb.model.Osbb;
import com.softserve.osbb.service.HouseService;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by nazar.dovhyy on 03.08.2016.
 */
public class HouseDTO {

    private Integer houseId;
    private String city;
    private String street;
    private String zipCode;
    private String description;
    private String osbbName;
    private Integer apartmentCount;
    private Integer numberOfInhabitants;

    public HouseDTO() {
        //needed for JSON mapping
    }


    public HouseDTO(HouseDTOBuilder houseDTOBuilder) {
        this.houseId = houseDTOBuilder.houseId;
        this.city = houseDTOBuilder.city;
        this.street = houseDTOBuilder.street;
        this.zipCode = houseDTOBuilder.zipCode;
        this.description = houseDTOBuilder.description;
        this.osbbName = houseDTOBuilder.osbbName;
        this.apartmentCount = houseDTOBuilder.apartmentCount;
        this.numberOfInhabitants = houseDTOBuilder.numberOfInhabitants;
    }

    public Integer getHouseId() {
        return houseId;
    }

    public String getCity() {
        return city;
    }

    public String getStreet() {
        return street;
    }

    public String getZipCode() {
        return zipCode;
    }

    public String getDescription() {
        return description;
    }

    public String getOsbbName() {
        return osbbName;
    }

    public Integer getApartmentCount() {
        return apartmentCount;
    }

    public Integer getNumberOfInhabitants() {
        return numberOfInhabitants;
    }

    public static class HouseDTOBuilder {
        private Integer houseId;
        private String city;
        private String street;
        private String zipCode;
        private String description;
        private String osbbName;
        private Integer apartmentCount;
        private Integer numberOfInhabitants;
        @JsonIgnore
        private HouseService houseService;

        public HouseDTOBuilder(HouseService houseService) {
            this.houseService = houseService;
        }

        public HouseDTOBuilder setHouseId(final Integer houseId) {
            this.houseId = houseId;
            return this;
        }

        public HouseDTOBuilder setCity(final String city) {
            this.city = city;
            return this;
        }

        public HouseDTOBuilder setStreet(final String street) {
            this.street = street;
            return this;
        }

        public HouseDTOBuilder setZipCode(final String zipCode) {
            this.zipCode = zipCode;
            return this;
        }

        public HouseDTOBuilder setDescription(final String description) {
            this.description = description;
            return this;
        }

        public HouseDTOBuilder setOsbbName(final Osbb osbb) {
            if (osbb != null) {
                this.osbbName = osbb.getName();
            }
            return this;
        }

        public HouseDTOBuilder setApartmentCount(final Collection<Apartment> apartments) {
            if (apartments != null && !apartments.isEmpty()) {
                this.apartmentCount = apartments.size();
            }
            return this;
        }

        public HouseDTOBuilder setNumberOfInhabitants(House house) {
            this.numberOfInhabitants = (house == null) ? 0 :
                    this.houseService.getNumberOfInhabitants(house);
            return this;
        }

        public HouseDTO build() {
            return new HouseDTO(this);
        }
    }

    @Override
    public String toString() {
        return "HouseDTO{" +
                "houseId=" + houseId +
                ", city='" + city + '\'' +
                ", street='" + street + '\'' +
                ", zipCode='" + zipCode + '\'' +
                ", description='" + description + '\'' +
                ", osbbName='" + osbbName + '\'' +
                ", apartmentCount=" + apartmentCount +
                ", numberOfInhabitants=" + numberOfInhabitants +
                '}';
    }
}
