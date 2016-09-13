package com.softserve.osbb.controller;

import com.softserve.osbb.model.Attachment;
import com.softserve.osbb.model.Osbb;
import com.softserve.osbb.model.enums.AttachmentType;
import com.softserve.osbb.service.AttachmentService;
import com.softserve.osbb.service.OsbbService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

/**
 * Created by Roman on 12.07.2016.
 */

@RestController
@CrossOrigin
@RequestMapping("/restful/osbb")
public class OsbbController {

    private static Logger logger = LoggerFactory.getLogger(OsbbController.class);

    @Autowired
    private OsbbService osbbService;

    @Autowired
    private AttachmentService attachmentService;


    @RequestMapping(value="",method = RequestMethod.POST)
    public ResponseEntity<Resource<Osbb>> createOsbb(@RequestBody Osbb osbb) {
        logger.info("Create osbb:  " + osbb);
        // System.out.println(" ***************Osbb:" + osbb.getLogo().);

        //Attachment logo = osbb.getLogo();
        //logo.setType(AttachmentType.IMAGE);
        // attachmentService.saveAttachment(logo);
        //osbb.setLogo(logo);
        osbb = osbbService.addOsbb(osbb);
        return new ResponseEntity<>(addResourceLinkToOsbb(osbb), HttpStatus.OK);
    }

    @RequestMapping(value = "/{osbbId}", method = RequestMethod.POST)
    public ResponseEntity<?> addLogoToOsbb(@RequestParam("file") MultipartFile file, @PathVariable("osbbId") Integer osbbId) {
        if (!file.isEmpty()) {
            try {
                logger.info("Uploading logo and add to osbb. File name: " +
                        file.getOriginalFilename() + " osbbId: " + osbbId);
                Attachment attachment = attachmentService.uploadFile(file);
                attachment.setType(AttachmentType.IMAGE);
                Osbb osbb = osbbService.getOsbb(osbbId);
                osbb.setLogo(attachment);
                osbbService.updateOsbb(osbb);
                return new ResponseEntity<>(attachmentService.downloadFile(file.getOriginalFilename()), HttpStatus.OK);
            } catch (IOException | RuntimeException e) {
                logger.warn("Cannot upload file " + file.getOriginalFilename());
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
        } else {
            logger.warn("Cannot upload file " + file.getOriginalFilename() + " because it is empty.");
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Resource<Osbb>> getOsbbById(@PathVariable("id") Integer osbbId) {
        logger.info("Get one osbb by id: " + osbbId);
        Osbb osbb = osbbService.getOsbb(osbbId);
        return new ResponseEntity<>(addResourceLinkToOsbb(osbb), HttpStatus.OK);
    }

    @RequestMapping(value = "/search/{name}", method = RequestMethod.GET)
    public ResponseEntity<List<Resource<Osbb>>> getOsbbByNameContaining(@PathVariable("name") String osbbName) {
        logger.info("Get all osbb: " +  osbbName);
        List<Osbb> osbbList = osbbService.findByNameContaining(osbbName);
        final List<Resource<Osbb>> resourceOsbbList = new ArrayList<>();
        for(Osbb o: osbbList) {
            resourceOsbbList.add(addResourceLinkToOsbb(o));
        }
        return new ResponseEntity<>(resourceOsbbList, HttpStatus.OK);
    }

    @RequestMapping(value = "/order/{field},{order}", method = RequestMethod.GET)
    public ResponseEntity<List<Resource<Osbb>>> getAllOsbbByOrder(@PathVariable("field") String field,
                                                                        @PathVariable("order") Boolean order) {
        logger.info("Get all osbb by order : " +  field);
        List<Osbb> osbbList;
        if(field.equals("name")) {
            if(order) {
                osbbList = osbbService.findAllOrderByNameAsc();
            } else {
                osbbList = osbbService.findAllOrderByNameDesc();
            }
        } else if(field.equals("district")) {
            if(order) {
                osbbList = osbbService.findAllOrderByDistrictAsc();
            } else {
                osbbList = osbbService.findAllOrderByDistrictDesc();
            }
        } else if(field.equals("creationDate")) {
            if(order) {
                osbbList = osbbService.findAllOrderByCreationDateAsc();
            } else {
                osbbList = osbbService.findAllOrderByCreationDateDesc();
            }
        } else {
            osbbList = new ArrayList<>();
        }

        final List<Resource<Osbb>> resourceOsbbList = new ArrayList<>();
        for(Osbb o: osbbList) {
            resourceOsbbList.add(addResourceLinkToOsbb(o));
        }
        return new ResponseEntity<>(resourceOsbbList, HttpStatus.OK);
    }

    @RequestMapping(value = "",method = RequestMethod.GET)
    public ResponseEntity<List<Resource<Osbb>>> getAllOsbb() {
        logger.info("Get all osbb.");
        List<Osbb> osbbList = osbbService.getAllOsbb();
        final List<Resource<Osbb>> resourceOsbbList = new ArrayList<>();

        for(Osbb o: osbbList) {
            resourceOsbbList.add(addResourceLinkToOsbb(o));
        }
        return new ResponseEntity<>(resourceOsbbList, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<Resource<Osbb>> updateOsbb(@RequestBody Osbb osbb) {
        logger.info("Update osbb with id: " + osbb.getOsbbId());
        Osbb updatedOsbb = osbbService.updateOsbb(osbb);
        return new ResponseEntity<>(addResourceLinkToOsbb(updatedOsbb), HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Resource<Osbb>> deleteOsbb(@PathVariable("id") Integer id) {
        logger.info("Delete osbb with id: " + id );
        osbbService.deleteOsbb(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    private Resource<Osbb> addResourceLinkToOsbb(Osbb osbb) {
        if (osbb == null) return null;
        Resource<Osbb> osbbResource = new Resource<>(osbb);
        osbbResource.add(linkTo(methodOn(OsbbController.class)
                .getOsbbById(osbb.getOsbbId()))
                .withSelfRel());
        return osbbResource;
    }

}
