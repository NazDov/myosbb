package com.softserve.osbb.repository;

import com.softserve.osbb.PersistenceConfiguration;
import com.softserve.osbb.model.ContactOsbb;
import com.softserve.osbb.model.ContactOsbbCategory;
import com.softserve.osbb.model.Osbb;
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
@Transactional
public class ContactOsbbRepositoryTest {
    private ContactOsbb contactOsbb;

    @Autowired
    private ContactOsbbRepository contactOsbbRepository;

    @Autowired
    private ContactOsbbCategoryRepository contactOsbbCategoryRepository;

    @Before
    public void init() {
        contactOsbb = new ContactOsbb(new Osbb(1), "test");
        contactOsbb.setContactCategory(new ContactOsbbCategory(1L));
    }



    @Test
    public  void testSaveCategory(){
        long count = contactOsbbCategoryRepository.count();
        ContactOsbbCategory contactOsbbCategory = new ContactOsbbCategory();
        contactOsbbCategory.setName("test");
        contactOsbbCategoryRepository.save(contactOsbbCategory);
        Assert.assertNotEquals(count, contactOsbbCategoryRepository.count());
    }

    @Test
    public void testSave() {
        contactOsbbRepository.save(contactOsbb);
        Assert.assertNotNull(contactOsbbRepository.findOne(contactOsbb.getId()));
    }

}