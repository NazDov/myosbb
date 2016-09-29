package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.references;

import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Tariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.TariffCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.List;


/**
 * Created by vostap on 21.09.2014.
 */
public class TariffTest extends AbstractTest {
    @Test
    public void testCreateTariff()  {
    /*    Tariff t = new Tariff();
        t.setSubServiceID(1L);
        t.setCategoryID(1L);
        t.setTariff(-1.0);
        t.setDateInAction(new Date());
        t.setId(1L);

        service.deleteTariff(t);  */
    }

    @Test
    public void testSearchTariff()  {
       TariffCondition c = new TariffCondition();
        c.setCategoryID(10L);
        c.setSubServiceID(2L);
        c.setDateInAction(getDate(2010, 01, 01));

       List<Tariff> list = service.searchTariff(c,user);
        int i=0;
    }
}
