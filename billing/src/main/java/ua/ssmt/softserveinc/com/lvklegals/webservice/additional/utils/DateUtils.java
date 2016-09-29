package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils;

import org.joda.time.Days;
import org.joda.time.LocalDate;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

/**
 * Created by vostap on 07.05.2015.
 */
public class DateUtils {

    public static long getCountDaysBetweenDate(Date date1,Date date2){
        LocalDate d1 = new LocalDate(date1);
        LocalDate d2 = new LocalDate(date2);
        return Days.daysBetween(d1, d2).getDays();
    }

    public static int getCountDayInMonth(Date date){
        Calendar c = Calendar.getInstance();
        c.setTime(date);
        return c.getActualMaximum(Calendar.DAY_OF_MONTH);
    }

    public static Date getFirstDayOfMonth(Date date){
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.set(Calendar.DAY_OF_MONTH,1);
        return calendar.getTime();
    }

    public static Date getLastDayOfMonth(Date date){
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.MONTH, 1);
        calendar.set(Calendar.DAY_OF_MONTH, 1);
        calendar.add(Calendar.DATE, -1);
        Date lastDayOfMonth = calendar.getTime();
        return lastDayOfMonth;
    }

    public static boolean checkDateInPeriod(Date date, Date period){
        Date a = getFirstDayOfMonth(period);
        Date b = getLastDayOfMonth(period);
        if (date.getTime()>= a.getTime() && date.getTime()<= b.getTime() )
            return true;
        else
            return false;
    }

    public static int getDayFromDate(Date dateStart) {
        Calendar c = Calendar.getInstance();
        c.setTime(dateStart);
        return c.get(Calendar.DAY_OF_MONTH);
    }

    public static boolean isDateInMonth(Date dateToCheck, Date period){
        return dateToCheck.getTime() >= getFirstDayOfMonth(period).getTime() &&
                dateToCheck.getTime() <= getLastDayOfMonth(period).getTime();
    }

    public static String getDateAsString(Date date){
        SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
        return sdf.format(date);
    }

    public static Date addMonth(Date date,int number){
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.MONTH,number);
        return calendar.getTime();
    }
    public static Date addDay(Date date,int number){
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.add(Calendar.DAY_OF_MONTH,number);
        return calendar.getTime();
    }

}
