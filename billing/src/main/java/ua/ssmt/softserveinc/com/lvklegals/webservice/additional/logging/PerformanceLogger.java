package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.logging;

import org.apache.log4j.PropertyConfigurator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URL;

/**
 * Created by vostap on 29.12.2015.
 */
public class PerformanceLogger {
    private PerformanceLogger(){

    }

    private static final Logger logger;

    static {
        ClassLoader classLoader = PerformanceLogger.class.getClassLoader();
        URL uri =  classLoader.getResource("performance_log.properties");


        logger = LoggerFactory.getLogger(PerformanceLogger.class);
        PropertyConfigurator.configure(uri.getFile());


    }

    public static synchronized Logger getLogger(){
        return logger;
    }
}
