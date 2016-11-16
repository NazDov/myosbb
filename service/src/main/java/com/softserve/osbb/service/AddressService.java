package com.softserve.osbb.service;

import com.softserve.osbb.model.Region;
import com.softserve.osbb.model.City;
import com.softserve.osbb.model.Street;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by YuriPushchalo on 16.11.2016
 */

@Service
public interface AddressService {

    Region addRegion(Region region);

    Region getRegion(Integer id);

    Region GetRegion(String name);

    List<Region> getAllRegion();

    City addCity(City city);

    City getCity(Integer id);

    List<City> getAllCitiesOfRegion(Region region);

    Street addStreet(Street street);

    Street getStreet(Integer id);

    List<Street> getAllStreetsOfCity(City city);

}
