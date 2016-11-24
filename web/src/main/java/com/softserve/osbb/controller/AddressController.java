package com.softserve.osbb.controller;

import com.softserve.osbb.model.Region;
import com.softserve.osbb.model.City;
import com.softserve.osbb.model.Street;
import com.softserve.osbb.service.AddressService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by YuriPushchalo on 16/11/2016.
 */
@RestController
@CrossOrigin
@RequestMapping("/restful/address")
public class AddressController {

    private static Logger logger = LoggerFactory.getLogger(AddressController.class);

    @Autowired
    private AddressService addressService;

    @RequestMapping(value = "/region", method = RequestMethod.GET)
    public ResponseEntity<List<Region>> getAllRegion() {
        logger.info("Get all region: ");
        return new ResponseEntity<>(addressService.getAllRegion(), HttpStatus.OK);
    }

    @RequestMapping(value = "/city/{id}", method = RequestMethod.GET)
    public ResponseEntity<List<City>> getAllCitiesOfRegion(@PathVariable("id") Integer id) {
        logger.info("Get all cities of region: ");
        return new ResponseEntity<>(addressService.getAllCitiesOfRegion(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/street/{id}", method = RequestMethod.GET)
    public ResponseEntity<List<Street>> getAllStreetsOfCity(@PathVariable("id") Integer id) {
        logger.info("Get all streets of city: ");
        return new ResponseEntity<>(addressService.getAllStreetsOfCity(id), HttpStatus.OK);
    }

    @RequestMapping(value = "/street/id/{id}", method = RequestMethod.GET)
    public ResponseEntity<Street> getStreetById(@PathVariable("id") Integer id) {
        logger.info("Get street by Id: ");
        return new ResponseEntity<>(addressService.getStreetById(id), HttpStatus.OK);
    }

}