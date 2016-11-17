package com.softserve.osbb.controller;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.softserve.osbb.model.Region;
import com.softserve.osbb.model.Street;
import com.softserve.osbb.service.StreetService;

@RestController
@CrossOrigin()
@RequestMapping("/restful/street")
public class StreetController {

	private static Logger logger = LoggerFactory.getLogger(StreetController.class);
	
	@Autowired
	StreetService streetService;
	
	@RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Resource<Street>> createRegion(@RequestBody Street Street) {
        logger.info("Create Street:  " + Street);
       
        return new ResponseEntity<>(addResourceLinkToStreet(Street), HttpStatus.OK);
    }
	
	
	  @RequestMapping(method = RequestMethod.GET)
	    public ResponseEntity<List<Resource<Street>>> getAllCities() {
	   
	        logger.info("Get all cities");
	        List<Street> cities  = streetService.findAll();
	        final List<Resource<Street>> resources = new ArrayList<>();
	        for(Street Street : cities) {
	            resources.add(addResourceLinkToStreet(new Street()));
	        }
	        return new ResponseEntity<>(resources, HttpStatus.OK);
	    }
	
	  @RequestMapping(value = "street/{id}", method = RequestMethod.GET)
	    public ResponseEntity<List<Resource<Street>>> getAllStreetByRegionId(
	            @PathVariable(value = "id") Integer id) {
	        logger.info("get all houses by OsbbId: " + id);
	        List<Street> cities = streetService.findByCityId(id);
	        
	        final List<Resource<Street>> resources = new ArrayList<>();
	        for(Street Street : cities) {
	            resources.add(addResourceLinkToStreet(new Street()));
	        }
	        
	        
	        return new ResponseEntity<>(resources, HttpStatus.OK);
	  
	  }
	
	
	
	private Resource<Street> addResourceLinkToStreet(Street street) {
        if (street == null) return null;
        Resource<Street> resource = new Resource<>(street);
        resource.add(linkTo(methodOn(StreetController.class)
                .getStreetById(street.getId()))
                .withSelfRel());
        return resource;
    }
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Resource<Street>> getStreetById(@PathVariable("id") Integer id) {
        logger.info("Get one osbb by id: " + id);
        Street street = streetService.findById(id);
        return new ResponseEntity<>(addResourceLinkToStreet(street), HttpStatus.OK);
    }
}
