
package com.softserve.osbb.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.softserve.osbb.model.City;
import com.softserve.osbb.model.Street;
import com.softserve.osbb.repository.StreetRepository;
import com.softserve.osbb.service.StreetService;

@Service
public class StreetServiceImpl implements StreetService{

    @Autowired
    StreetRepository streetRepository;
    
    @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
    public Street addStreet(Street street) {
        if(street == null) {
            return null;
        }
        return streetRepository.saveAndFlush(street);
    }

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
	@Override
	public Street findById(Integer id) {
		
		return streetRepository.findById(id);
	}

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
	@Override
	public List<Street> findByName(String name) {
		
		return streetRepository.findByName(name);
	}

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
	@Override
	public List<Street> findByCity(City city) {
		
		return streetRepository.findByCity(city);
	}

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
	@Override
	public List<Street> findByCityName(String nameCity) {
		
		return streetRepository.findByCityName(nameCity);
	}

    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
	@Override
	public List<Street> findByCityId(int idCity) {
		
		return streetRepository.findByCityId(idCity);
	}

    
	@Override
	@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
	public List<Street> findAll() {
		
		return streetRepository.findAll();
	}

}
