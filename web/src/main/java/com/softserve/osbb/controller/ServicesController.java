package com.softserve.osbb.controller;

import com.softserve.osbb.model.Contract;
import com.softserve.osbb.model.Osbb;
import com.softserve.osbb.model.Services;
import com.softserve.osbb.repository.SubServicesRepository;
import com.softserve.osbb.service.ServicesService;
import com.softserve.osbb.service.SubServicesService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

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


    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Resource<Services>> getAll() {
        List<Resource<Services>> list = new ArrayList<>();
        List<Services> tmpList = servicesService.findAllSevices();
        tmpList.forEach((services) -> list.add(getContractResource(services)));
        return list;
    }


    @RequestMapping(value = "/osbb/{osbbId}", method = RequestMethod.GET)
    public List<Resource<Services>> getAllServicesByOsbb(@PathVariable(value = "osbbId")Integer osbbId) {
        List<Resource<Services>> list = new ArrayList<>();
        List<Services> tmpList = servicesService.findSevicesByOsbb(new Osbb(osbbId));
        tmpList.forEach((services) -> list.add(getContractResource(services)));
        return list;
    }


    private Resource<Services> getContractResource(Services services) {
        Resource<Services> resource = new Resource<Services>(services);
        resource.add(linkTo(methodOn(ServicesController.class)
                .getAll())
                .withSelfRel());
        return resource;
    }
}
