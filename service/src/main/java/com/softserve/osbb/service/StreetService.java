package com.softserve.osbb.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.softserve.osbb.model.City;
import com.softserve.osbb.model.Street;

@Service
public interface StreetService {
	
    public Street findById(Integer id);
    
    public List<Street> findAll();
    
    public List<Street> findByName(String name);
    
    public List<Street> findByCity(City city);
    
    public List<Street> findByCityName(String nameCity);
    
    public List<Street> findByCityId(int idCity);

}
