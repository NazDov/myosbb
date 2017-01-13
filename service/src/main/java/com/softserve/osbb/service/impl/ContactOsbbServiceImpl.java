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

    public static final Long MANAGEMENT_OSBB_HEAD_ID = 2L;
    public static final Long MANAGEMENT_OSBB_MEMBER_ID = 3L;

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

    @Override
    public ContactOsbb getManagementOsbbHeadContacts() {
        ContactOsbbCategory category = new ContactOsbbCategory(MANAGEMENT_OSBB_HEAD_ID);
        List<ContactOsbb> list =  contactOsbbRepository.findByContactCategory(category);
        return contactOsbbRepository.findByContactCategory(category).get(0);
    }

    @Override
    public List<ContactOsbb> getManagementOsbbMemberContacts() {
        ContactOsbbCategory category = new ContactOsbbCategory(MANAGEMENT_OSBB_MEMBER_ID);
        return contactOsbbRepository.findByContactCategory(category);
    }
}
