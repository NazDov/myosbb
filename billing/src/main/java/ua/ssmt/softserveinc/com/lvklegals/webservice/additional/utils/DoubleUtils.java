package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils;

/**
 * Created by vostap on 21.01.2016.
 */
public class DoubleUtils {
    public static double round(double value, int places) {
        if (places < 0) throw new IllegalArgumentException();

        long factor = (long) Math.pow(10, places);
        value = value * factor;
        long tmp = Math.round(value);
        return (double) tmp / factor;
    }
}
