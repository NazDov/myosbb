package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.references;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Address;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Municipal;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Street;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AddressCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.StreetCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.List;

/**
 * Created by vostap on 17.09.2014.
 */
public class AddressTests extends AbstractTest {
    private ReferencesService service = new ReferencesServiceImpl();


    @Test
    @Ignore
    public void testAddress()  {
        AddressCondition condition = new AddressCondition();
        //condition.setId(49L);
        condition.setLetter("-111");
        List<Address> addresses = service.searchAddress(condition,user);
        /*if (addresses.isEmpty()) return;
        Address a = addresses.get(0);
        this.service.updateAddress(a);*/

    }


    private void _testAddress(AddressCondition condition) {
        /*List<Address> list = this.service.searchAddress(condition);
        for (Address a:list){
            //(a.getId()+""+a.getNumber()+" "+a.getMunicipalName()+" "+a.getStreetName());
        }*/
    }

    @Test
    @Ignore
    public void searchStreet1() {
        List<ComboBoxItem> list = service.getStreetsByPattern(new Municipal(8100L),"н", this.user);
        for (ComboBoxItem c:list);

    }

    @Test
    @Ignore
    public void searchStreet(){
        StreetCondition condition = new StreetCondition();
        condition.setName("333");
        List<Street> list = service.searchStreet(condition,user);

    }

    @Test
    @Ignore
    public void createStreet(){
        Street s = new Street();
        s.setMunicipal(new Municipal(8110L));
        s.setName("333");
        service.createStreet(s,user);
    }

    @Test
    @Ignore
    public void updateStreet(){
        StreetCondition condition = new StreetCondition();
        List<Street> list = service.searchStreet(condition,user);
        service.updateStreet(list.get(0),user);
    }




}
