package com.softserve.osbb.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.softserve.osbb.model.City;
import com.softserve.osbb.model.Region;

@Service
public interface CityService {
	
	
    public City findById(Integer id);
    
    public List<City> findAll();
    
    public List<City> findByName(String name);
    
    public List<City> findByRegion(Region region);
    
    public List<City> findByRegionName(String nameRegion);
    
    public List<City> findByRegionId(Integer idRegion);

}
