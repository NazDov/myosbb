package com.softserve.osbb.service.impl;

import com.softserve.osbb.model.Region;
import com.softserve.osbb.model.City;
import com.softserve.osbb.model.Street;
import com.softserve.osbb.repository.RegionRepository;
import com.softserve.osbb.repository.CityRepository;
import com.softserve.osbb.repository.StreetRepository;
import com.softserve.osbb.service.AddressService;
import com.softserve.osbb.utils.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by YuriPushchalo on 16.11.2016
 */

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    RegionRepository regionRepository;

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    @Override
    public Region addRegion(Region region) {
        if(region == null) {
            return null;
        }
        return regionRepository.saveAndFlush(region);
    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public Region getRegion(Integer id) {
        return regionRepository.findOne(id);
    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public Region GetRegion(String name) {
        return regionRepository.findByName(name);
    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public List<Region> getAllRegion() {
        return regionRepository.findAll();
    }

    @Autowired
    CityRepository cityRepository;

    
    
    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    @Override
    public City addCity(City city) {
        if(city == null) {
            return null;
        }
        return cityRepository.saveAndFlush(city);
    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public City getCity(Integer id) {
        return cityRepository.findOne(id);
    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public List<City> getAllCitiesOfRegion(Region region) {
        return cityRepository.findByRegion(region);
    }

    @Autowired
    StreetRepository streetRepository;

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    @Override
    public Street addStreet(Street street) {
        if(street == null) {
            return null;
        }
        return streetRepository.saveAndFlush(street);
    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public Street getStreet(Integer id) {
        return streetRepository.findOne(id);
    }

    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    @Override
    public List<Street> getAllStreetsOfCity(City city) {
        return streetRepository.findByCity(city);
    }

}
