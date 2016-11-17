package com.softserve.osbb.service.impl;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.softserve.osbb.model.City;
import com.softserve.osbb.model.Region;
import com.softserve.osbb.repository.CityRepository;
import com.softserve.osbb.service.CityService;

@Service
public class CityServiceImpl implements CityService {

	@Autowired
    CityRepository cityRepository;
		
	@Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    public City addCity(City city) {
        if(city == null) {
            return null;      
        }
        
        return cityRepository.saveAndFlush(city);
    }
	
	@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
	@Override
	public City findById(Integer id) {
		
		return cityRepository.findById(id);
	}

	@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
	@Override
	public List<City> findByName(String name) {
		
		return cityRepository.findByName(name);
	}

	@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
	@Override
	public List<City> findByRegion(Region region) {
		
		return cityRepository.findByRegion(region);
	}

	@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
	@Override
	public List<City> findByRegionName(String nameRegion) {
		
		return cityRepository.findByName(nameRegion);
	}

	@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
	@Override
	public List<City> findByRegionId(Integer idRegion) {
		
		return cityRepository.findByRegionId(idRegion);
	}

	@Override
	@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
	public List<City> findAll() {
		
		return cityRepository.findAll();
	}

}
