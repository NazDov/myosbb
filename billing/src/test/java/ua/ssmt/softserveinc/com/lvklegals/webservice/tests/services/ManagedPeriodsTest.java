package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.services;


import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.Profiller;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

/**
 * Created by vostap on 19.12.2014.
 */
public class ManagedPeriodsTest extends AbstractTest {
    private ReferencesService service = new ReferencesServiceImpl();

    @Test
    @Ignore
    public void testMovePeriodToForward()  {
        new Profiller("move to period") {
            @Override
            protected void execute() {
                service.movePeriodToForward(user);
            }
        };

    }

    @Test
    public void testMovePeriodToPrevious()   {
      //  service.movePeriodToPrevious(this.user);
    }

}
