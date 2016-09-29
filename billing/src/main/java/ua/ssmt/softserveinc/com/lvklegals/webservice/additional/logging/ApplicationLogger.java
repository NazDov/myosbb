package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.logging;


import org.apache.log4j.PropertyConfigurator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URI;
import java.net.URL;

/**
 * Created by vostap on 11/2/2015.
 */
public class ApplicationLogger {
    private ApplicationLogger(){

    }

    private static final Logger logger;

    static {
        ClassLoader classLoader = ApplicationLogger.class.getClassLoader();
        URL uri =  classLoader.getResource("log4j.properties");


        logger = LoggerFactory.getLogger(ApplicationLogger.class);
        PropertyConfigurator.configure(uri.getFile());


    }

    public static synchronized Logger getLogger1(){
        return logger;
    }

}
