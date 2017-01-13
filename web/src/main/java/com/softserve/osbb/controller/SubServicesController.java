package com.softserve.osbb.controller;

import com.softserve.osbb.model.Services;
import com.softserve.osbb.model.SubServices;
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
@RequestMapping("/restful/subservices")
public class SubServicesController {
    private static final Logger logger = LoggerFactory.getLogger(SubServicesController.class);

    @Autowired
    SubServicesService subServicesService;


    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Resource<SubServices>> getAll(){
        List<Resource<SubServices>> list = new ArrayList<>();
        List<SubServices> tmpList = subServicesService.findAllSubSevices();
        tmpList.forEach((services) -> list.add(getContractResource(services)));
        return list;
    }

    @RequestMapping(value = "/parent/{parentId}", method = RequestMethod.GET)
    public List<Resource<SubServices>> getByParentId(@PathVariable(value = "parentId") long parentId){
        List<Resource<SubServices>> list = new ArrayList<>();
        List<SubServices> tmpList = subServicesService.findSubSevicesByParentID(parentId);
        tmpList.forEach((services) -> list.add(getContractResource(services)));
        return list;
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Resource<SubServices> getById(@PathVariable(value = "id") long id) {
        SubServices subServices = subServicesService.findOneSubSeviceByID(id);
        return getContractResource(subServices);
    }



    private Resource<SubServices> getContractResource(SubServices services) {
        Resource<SubServices> resource = new Resource<SubServices>(services);
        resource.add(linkTo(methodOn(SubServicesController.class)
                        .getAll())
                        .withSelfRel());
        return resource;
    }
}
