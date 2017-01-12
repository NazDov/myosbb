package com.softserve.osbb.service.impl;

import com.softserve.osbb.model.ContactOsbb;
import com.softserve.osbb.model.ContactOsbbCategory;
import com.softserve.osbb.repository.ContactOsbbCategoryRepository;
import com.softserve.osbb.repository.ContactOsbbRepository;
import com.softserve.osbb.service.ContactOsbbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by afedorak on 12.01.2017.
 */
@Service
public class ContactOsbbServiceImpl implements ContactOsbbService {

    @Autowired
    private ContactOsbbRepository contactOsbbRepository;

    @Autowired
    private ContactOsbbCategoryRepository contactOsbbCategoryRepository;

    @Override
    public List<ContactOsbb> getAllOsbbContacts() {
        return contactOsbbRepository.findAll();
    }

    @Override
    @Transactional
    public List<ContactOsbb> getManagementOsbbContacts() {
        List<ContactOsbbCategory> category = contactOsbbCategoryRepository.findByManagementTrue();
        List<ContactOsbb> contactsOsbbs = new ArrayList<>();
        for (ContactOsbbCategory c: category) {
            contactsOsbbs.addAll(contactOsbbRepository.findByContactCategory(c));
        }
        return contactsOsbbs;
    }

    @Override
    public List<ContactOsbb> getOsbbContacts() {
        List<ContactOsbbCategory> category = contactOsbbCategoryRepository.findByManagementFalse();
        List<ContactOsbb> contactsOsbbs = new ArrayList<>();
        for (ContactOsbbCategory c: category) {
            contactsOsbbs.addAll(contactOsbbRepository.findByContactCategory(c));
        }
        return contactsOsbbs;
    }


}
