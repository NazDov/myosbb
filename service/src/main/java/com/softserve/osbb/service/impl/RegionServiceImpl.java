package com.softserve.osbb.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.softserve.osbb.model.Region;
import com.softserve.osbb.repository.RegionRepository;
import com.softserve.osbb.service.RegionService;

@Service
public class RegionServiceImpl implements RegionService {

	@Autowired
    RegionRepository regionRepository;
	
    @Transactional(readOnly = false, propagation = Propagation.REQUIRED)
    public Region addRegion(Region region) {
        if(region == null) {
            return null;
        }
        return regionRepository.saveAndFlush(region);
    }
    
    
	@Override
	 @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
	public Region findById(Integer id) {
		
		return regionRepository.findById(id);
	}

	@Override
	 @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
	public List<Region> findAll() {
		
		return regionRepository.findAll();
	}

	@Override
	 @Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
	public Region findByName(String name) {
		
		return regionRepository.findByName(name);
	}
	
	

	
}
