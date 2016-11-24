//package com.softserve.osbb.controller;
//
//import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
//import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.hateoas.Resource;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.softserve.osbb.model.City;
//import com.softserve.osbb.service.CityService;
//
//
//
//
//@RestController
//@CrossOrigin()
//@RequestMapping("/restful/city")
//public class CityController {
//	
//	private static Logger logger = LoggerFactory.getLogger(CityController.class);
//	
//	@Autowired
//	CityService cityService;
//
//	@RequestMapping(value = "/create", method = RequestMethod.POST)
//	public ResponseEntity<Resource<City>> createRegion(@RequestBody City city) {
//		logger.info("Create city:  " + city);
//
//		return new ResponseEntity<>(addResourceLinkToCity(city), HttpStatus.OK);
//	}
//
//	@RequestMapping(value = "/all", method = RequestMethod.GET)
//	public ResponseEntity<List<Resource<City>>> getAllCities() {
//
//		logger.info("Get all cities");
//		List<City> cities = cityService.findAll();
//		final List<Resource<City>> resources = new ArrayList<>();
//		for (City city : cities) {
//			resources.add(addResourceLinkToCity(city));
//		}
//		return new ResponseEntity<>(resources, HttpStatus.OK);
//	}
//
//	@RequestMapping(value = "/region/{id}", method = RequestMethod.GET)
//	public ResponseEntity<List<Resource<City>>> getAllCityByRegionId(@PathVariable(value = "id") Integer id) {
//		logger.info("get all city by Region: " + id);
//		List<City> cities = cityService.findByRegionId(id);
//		final List<Resource<City>> resources = new ArrayList<>();
//		for (City city : cities) {
//			resources.add(addResourceLinkToCity(city));
//		}
//		return new ResponseEntity<>(resources, HttpStatus.OK);
//
//	}
//
//	/*@RequestMapping(value = "/region/{name}", method = RequestMethod.GET)
//	public ResponseEntity<List<Resource<City>>> getAllCityByRegionName(@PathVariable(value = "name") String name) {
//		logger.info("get all city by Region: " + name);
//		List<City> cities = cityService.findByRegionName(name);
//
//		final List<Resource<City>> resources = new ArrayList<>();
//		for (City city : cities) {
//			resources.add(addResourceLinkToCity(city));
//		}
//
//		return new ResponseEntity<>(resources, HttpStatus.OK);
//
//	}*/
//
//	private Resource<City> addResourceLinkToCity(City city) {
//		if (city == null)
//			return null;
//		Resource<City> resource = new Resource<>(city);
//		resource.add(linkTo(methodOn(CityController.class)
//				.getCityById(city.getId()))
//				.withSelfRel());
//		return resource;
//	}
//
//	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
//	public ResponseEntity<Resource<City>> getCityById(@PathVariable("id") Integer id) {
//		logger.info("Get one osbb by id: " + id);
//		City city = cityService.findById(id);
//		return new ResponseEntity<>(addResourceLinkToCity(city), HttpStatus.OK);
//	}
//
//}
