package com.softserve.osbb.repository;

import com.softserve.osbb.PersistenceConfiguration;
import com.softserve.osbb.model.ContactOsbb;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Anastasiia Fedorak on 7/20/16.
 */

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = PersistenceConfiguration.class)
@Rollback
@Transactional
public class ContactOsbbRepositoryTest {
    private ContactOsbb contactOsbb;

    @Before
    public void init() {
        contactOsbb = new ContactOsbb(1, "test");
        contactOsbb.setContactCategoryId(1L);
    }

    @Autowired
    ContactOsbbRepository contactOsbbRepository;


    @Test
    public void testSave() {
        contactOsbbRepository.save(contactOsbb);
        Assert.assertNotNull(contactOsbbRepository.findOne(contactOsbb.getId()));
    }

    @Test
    public void testFindProviderTypeByName(){
        testSave();
    }
}