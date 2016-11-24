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
//import com.softserve.osbb.model.Region;
//import com.softserve.osbb.service.RegionService;
//
//@RestController
//@CrossOrigin()
//@RequestMapping("/restful/region")
//public class RegionController {
//
//	private static Logger logger = LoggerFactory.getLogger(RegionController.class);
//	
//	@Autowired
//	RegionService regionService;
//	
//
//	
//	@RequestMapping(value = "/create",method = RequestMethod.POST)
//    public ResponseEntity<Resource<Region>> createRegion(@RequestBody Region region) {
//        logger.info("Create region:  " + region);
//       
//        return new ResponseEntity<>(addResourceLinkToRegion(region), HttpStatus.OK);
//    }
//	
//	  @RequestMapping(value = "/all",method = RequestMethod.GET)
//	    public ResponseEntity<List<Resource<Region>>> getAllRegions() {
//	   
//	        logger.info("Get all regions");
//	        List<Region> regions  = regionService.findAll();
//	        final List<Resource<Region>> resources = new ArrayList<>();
//	        for(Region reg : regions) {
//	            resources.add(addResourceLinkToRegion(reg));
//	        }
//	        return new ResponseEntity<>(resources, HttpStatus.OK);
//	    }
//	
//	private Resource<Region> addResourceLinkToRegion(Region region) {
//        if (region == null) return null;
//        Resource<Region> resource = new Resource<>(region);
//        resource.add(linkTo(methodOn(RegionController.class)
//                .getRegionById(region.getId()))
//                .withSelfRel());
//        return resource;
//    }
//	
//	
//	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
//    public ResponseEntity<Resource<Region>> getRegionById(@PathVariable("id") Integer id) {
//        logger.info("Get one region by id: " + id);
//        Region region = regionService.findById(id);
//        return new ResponseEntity<>(addResourceLinkToRegion(region), HttpStatus.OK);
//    }
//	
//}
