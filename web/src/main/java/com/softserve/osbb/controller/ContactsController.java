package com.softserve.osbb.controller;

import com.softserve.osbb.dto.ContactOsbbDto;
import com.softserve.osbb.dto.mappers.ContactOsbbDtoMapper;
import com.softserve.osbb.model.ContactOsbb;
import com.softserve.osbb.service.ContactOsbbService;
import com.softserve.osbb.service.impl.ContactOsbbServiceImpl;
import com.softserve.osbb.util.resources.exceptions.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

/**
 * Created by afedorak on 12.01.2017.
 */
@RestController
@RequestMapping(value = "/restful/contacts")
@CrossOrigin
public class ContactsController {
    private static final Logger logger = LoggerFactory.getLogger(ContactsController.class);

    @Autowired
    ContactOsbbService contactOsbbService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public ResponseEntity<List<Resource<ContactOsbbDto>>> listAllContacts() {
        List<ContactOsbb> contactOsbbs = contactOsbbService.getAllOsbbContacts();
        List<Resource<ContactOsbbDto>> contactResourceList = new ArrayList<>();
        for (ContactOsbb c : contactOsbbs) {
            try {
                ContactOsbbDto contactOsbbDto = new ContactOsbbDtoMapper().mapEntityToDTO(c);
                contactResourceList.add(addResourceLinkToContactOsbb(contactOsbbDto));
            } catch (EntityNotFoundException e) {
                logger.error("Cannot find contact osbb entity" + e);
                new ResponseEntity<>(contactResourceList, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new ResponseEntity<>(contactResourceList, HttpStatus.OK);
    }


    @RequestMapping(value = "/osbb/", method = RequestMethod.GET)
    public ResponseEntity<List<Resource<ContactOsbbDto>>> listOsbbContacts() {
        List<ContactOsbb> contactOsbbs = contactOsbbService.getOsbbContacts();
        List<Resource<ContactOsbbDto>> contactResourceList = new ArrayList<>();

        for (ContactOsbb c : contactOsbbs) {
            try {
                ContactOsbbDto contactOsbbDto = new ContactOsbbDtoMapper().mapEntityToDTO(c);
                contactResourceList.add(addResourceLinkToContactOsbb(contactOsbbDto));
            } catch (EntityNotFoundException e) {
                logger.error("Cannot find contact osbb entity" + e);
                new ResponseEntity<>(contactResourceList, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new ResponseEntity<>(contactResourceList, HttpStatus.OK);
    }

    @RequestMapping(value = "/management/", method = RequestMethod.GET)
    public ResponseEntity<List<Resource<ContactOsbbDto>>> listManagementContacts() {
        List<ContactOsbb> contactOsbbs = contactOsbbService.getManagementOsbbContacts();
        List<Resource<ContactOsbbDto>> contactResourceList = new ArrayList<>();
        for (ContactOsbb c : contactOsbbs) {
            try {
                ContactOsbbDto contactOsbbDto = new ContactOsbbDtoMapper().mapEntityToDTO(c);
                contactResourceList.add(addResourceLinkToContactOsbb(contactOsbbDto));
            } catch (EntityNotFoundException e) {
                logger.error("Cannot find contact osbb entity" + e);
                new ResponseEntity<>(contactResourceList, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        return new ResponseEntity<>(contactResourceList, HttpStatus.OK);
    }


    private Resource<ContactOsbbDto> addResourceLinkToContactOsbb(ContactOsbbDto ContactOsbbDto) throws EntityNotFoundException {
        if (ContactOsbbDto == null) {
            throw new EntityNotFoundException();
        }
        Resource<ContactOsbbDto> contactResource = new Resource<>(ContactOsbbDto);
        contactResource.add(linkTo(methodOn(ContactsController.class)
                .listAllContacts())
                .withSelfRel());
        return contactResource;
    }

}
