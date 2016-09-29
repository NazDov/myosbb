package ua.ssmt.softserveinc.com.lvklegals.webservice.tests;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;

import java.util.Calendar;
import java.util.Date;

/**
 * Created by vostap on 23.12.2014.
 */
public abstract class AbstractTest {
    protected ReferencesService service;
    protected User user;

    public AbstractTest() {
        this.service = new ReferencesServiceImpl();
        user = new User(1L);
    }

    public ReferencesService getService() {
        return service;
    }

    public void setService(ReferencesService service) {
        this.service = service;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getDate(int year,int month,int day){
        Calendar c = Calendar.getInstance();
        c.set(Calendar.MONTH,(month-1));
        c.set(Calendar.YEAR,year);
        c.set(Calendar.DAY_OF_MONTH,day);
        return c.getTime();
    }

}
