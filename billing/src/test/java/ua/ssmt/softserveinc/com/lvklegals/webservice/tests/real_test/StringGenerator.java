package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.real_test;

import java.math.BigInteger;
import java.security.SecureRandom;

/**
 * Created by vostap on 29.01.2016.
 */
public final class StringGenerator {
    private SecureRandom random = new SecureRandom();

    public String nextSessionId() {
        String s= new BigInteger(160, random).toString(50);
        return s.substring(0,10);
    }
}

