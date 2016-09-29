package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.references;

import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CounterModel;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CounterModelCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;

import java.util.List;

/**
 * Created by vostap on 20.09.2014.
 */
public class CounterModelTest  {
    private ReferencesService service = new ReferencesServiceImpl();

    @Test
    public void testCounterModel()  {
      /*CounterModelCondition condition = new CounterModelCondition();
        condition.setName("ENB");
        List<CounterModel> list = this.service.searchCounterModel(condition);
        int i =1;*/

    }

}
