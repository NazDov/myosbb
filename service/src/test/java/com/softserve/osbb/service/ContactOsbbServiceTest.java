package com.softserve.osbb.service; /**
 * Created by cavayman on 11.07.2016.
 */

import com.softserve.osbb.config.ServiceApplication;
import com.softserve.osbb.model.ContactOsbb;
import com.softserve.osbb.model.User;
import com.softserve.osbb.utils.ConsoleColorsConst;
import org.apache.log4j.Logger;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import static org.junit.Assert.assertEquals;


/**
 * Created by cavayman on 05.07.2016.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = ServiceApplication.class)
public class ContactOsbbServiceTest {

    Logger logger = Logger.getLogger(ContactOsbbServiceTest.class);

    @Autowired
    private ContactOsbbService contactOsbbService;

    @Before
    public void init() {
        logger.info("init");
    }



    @Test
    @Transactional
    public void testGetManagementContacts() {
        List<ContactOsbb> list = contactOsbbService.getManagementOsbbContacts();
        for (ContactOsbb c: list) {
            logger.info(c);
        }
    }

    @Test
    @Transactional
    public void testGetOsbbContacts() {
        List<ContactOsbb> list = contactOsbbService.getOsbbContacts();
        for (ContactOsbb c : list) {
            logger.info(ConsoleColorsConst.ANSI_BLUE +  c + ConsoleColorsConst.ANSI_RESET);
        }
    }

}
