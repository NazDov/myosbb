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
//
//import com.softserve.osbb.model.Street;
//import com.softserve.osbb.service.StreetService;
//
//@RestController
//@CrossOrigin()
//@RequestMapping("/restful/street")
//public class StreetController {
//
//	private static Logger logger = LoggerFactory.getLogger(StreetController.class);
//	
//	@Autowired
//	StreetService streetService;
//
//	@RequestMapping(value = "/create", method = RequestMethod.POST)
//	public ResponseEntity<Resource<Street>> createRegion(@RequestBody Street Street) {
//		logger.info("Create Street:  " + Street);
//
//		return new ResponseEntity<>(addResourceLinkToStreet(Street), HttpStatus.OK);
//	}
//
//	@RequestMapping(value = "/all", method = RequestMethod.GET)
//	public ResponseEntity<List<Resource<Street>>> getAllCities() {
//
//		logger.info("Get all Street");
//		List<Street> cities = streetService.findAll();
//		final List<Resource<Street>> resources = new ArrayList<>();
//		for (Street Street : cities) {
//			resources.add(addResourceLinkToStreet(new Street()));
//		}
//		return new ResponseEntity<>(resources, HttpStatus.OK);
//	}
//
//	@RequestMapping(value = "/city/{id}", method = RequestMethod.GET)
//	public ResponseEntity<List<Resource<Street>>> getAllStreetByCityId(@PathVariable(value = "id") Integer id) {
//		
//		logger.info("get all streets by city: " + id);
//		List<Street> streets = streetService.findByCityId(id);
//		System.out.println("1 -> " + streets);
//		final List<Resource<Street>> resources = new ArrayList<>();
//		System.out.println("2");
//		for (Street street : streets) {
//			resources.add(addResourceLinkToStreet(street));
//		}
//		System.out.println("3");
//		return new ResponseEntity<>(resources, HttpStatus.OK);
//
//	}
//
////	@RequestMapping(value = "/city/{name}", method = RequestMethod.GET)
////	public ResponseEntity<List<Resource<Street>>> getAllCityByCityId(@PathVariable(value = "name") String name) {
////		logger.info("get all city by Region: " + name);
////		List<Street> streets = streetService.findByCityName(name);
////
////		final List<Resource<Street>> resources = new ArrayList<>();
////		for (Street street : streets) {
////			resources.add(addResourceLinkToStreet(street));
////		}
////
////		return new ResponseEntity<>(resources, HttpStatus.OK);
////	}
//
//	private Resource<Street> addResourceLinkToStreet(Street street) {
//		if (street == null)
//			return null;
//		Resource<Street> resource = new Resource<>(street);
//		System.out.println("--> " + street.getId());
//		resource.add(linkTo(methodOn(StreetController.class)
//				.getStreetById(street.getId()))
//				.withSelfRel());
//		System.out.println("After");
//		return resource;
//	}
//
//	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
//	public ResponseEntity<Resource<Street>> getStreetById(@PathVariable("id") Integer id) {
//		logger.info("Get one osbb by id: " + id);
//		System.out.println("******");
//		Street street = streetService.findById(id);
//		return new ResponseEntity<>(addResourceLinkToStreet(street), HttpStatus.OK);
//	}
//}
