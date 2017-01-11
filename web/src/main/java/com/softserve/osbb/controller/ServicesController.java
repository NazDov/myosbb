package com.softserve.osbb.controller;

import com.softserve.osbb.service.ServicesService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by afedorak on 11.01.2017.
 */
@RestController
@CrossOrigin
@RequestMapping("/restful/services")
public class ServicesController {
    private static final Logger logger = LoggerFactory.getLogger(ServicesController.class);

    @Autowired
    ServicesService servicesService;



}
