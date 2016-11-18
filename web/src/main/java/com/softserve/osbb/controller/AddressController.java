package com.softserve.osbb.controller;

import com.softserve.osbb.model.Region;
import com.softserve.osbb.model.City;
import com.softserve.osbb.model.Street;
import com.softserve.osbb.service.AddressService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static com.softserve.osbb.util.resources.util.ResourceUtil.toResource;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

/**
 * Created by YuriPushchalo on 16/11/2016.
 */
@RestController
@CrossOrigin
@RequestMapping("/restful/address")
public class AddressController {

    private static Logger logger = LoggerFactory.getLogger(AddressController.class);

    @Autowired
    AddressService addressService;

    @RequestMapping(value = "/region", method = RequestMethod.GET)
    public ResponseEntity<List<Region>> getAllRegion() {
        logger.info("Get all region: ");
        
        List<Region> regionList = addressService.getAllRegion();
        if (regionList == null) {
            return new ResponseEntity<>(new ArrayList<Region>(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(regionList, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/city/{id}", method = RequestMethod.GET)
    public ResponseEntity<List<City>> getAllCitiesOfRegion(@PathVariable("id") Integer id) {
        logger.info("Get all cities of region: ");
        
        List<City> cityList = addressService.getAllCitiesOfRegion(id);
        if (cityList == null) {
            return new ResponseEntity<>(new ArrayList<City>(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(cityList, HttpStatus.OK);
        }
    }

    @RequestMapping(value = "/street/{id}", method = RequestMethod.GET)
    public ResponseEntity<List<Street>> getAllStreetsOfCity(@PathVariable("id") Integer id) {
        logger.info("Get all streets of city: ");
        
        List<Street> streetList = addressService.getAllStreetsOfCity(id);
        if (streetList == null) {
            return new ResponseEntity<>(new ArrayList<Street>(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(streetList, HttpStatus.OK);
        }
    }

}
