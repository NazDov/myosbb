package com.softserve.osbb.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.softserve.osbb.model.Region;

@Service
public interface RegionService {

    public Region findById(Integer id);
	
	public List<Region> findAll();

	public Region findByName(String name);
}
