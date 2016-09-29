package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * Created by vostap on 04.09.2014.
 */
public class Messages {

    private static Messages instance = new Messages();
    private Properties properties;

    private Messages() {
        this.properties = new Properties();
        InputStream is = null;
        try {
            ClassLoader classloader = Thread.currentThread().getContextClassLoader();
            is = classloader.getResourceAsStream("messages.properties");
            this.properties.load(is);
        } catch (IOException e) {
            throw new RuntimeException(e);
        } finally {
            if (is != null)
                try {
                    is.close();
                } catch (IOException e) {

                }

        }
    }
    public String get(String key) {
        String value = this.properties.getProperty(key);
        if (value == null) throw new RuntimeException("Cannot find property "+key+" in file messages.properties");
        return this.properties.getProperty(key);
    }

    public static Messages getInstance(){
        return instance;
    }




}
