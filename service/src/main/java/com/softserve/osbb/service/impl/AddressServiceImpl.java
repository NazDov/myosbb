package com.softserve.osbb.service.impl;

import com.softserve.osbb.model.Region;
import com.softserve.osbb.model.City;
import com.softserve.osbb.model.Street;
import com.softserve.osbb.repository.RegionRepository;
import com.softserve.osbb.repository.CityRepository;
import com.softserve.osbb.repository.StreetRepository;
import com.softserve.osbb.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
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

	@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
	@Override
	public List<Region> getAllRegion() {
		return regionRepository.findAll();
	}

	@Autowired
	CityRepository cityRepository;

	@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
	@Override
	public List<City> getAllCitiesOfRegion(Integer regionId) {
		return cityRepository.findByRegion(regionRepository.findByRegionId(regionId));
	}

	@Autowired
	StreetRepository streetRepository;

	@Transactional(readOnly = true, propagation = Propagation.SUPPORTS)
	@Override
	public List<Street> getAllStreetsOfCity(Integer cityId) {
		return streetRepository.findByCity(cityRepository.findByCityId(cityId));
	}

}
