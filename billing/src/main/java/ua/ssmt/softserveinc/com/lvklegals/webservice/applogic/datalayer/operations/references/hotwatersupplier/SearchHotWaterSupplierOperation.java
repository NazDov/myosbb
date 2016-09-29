package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.hotwatersupplier;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplierProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.HotWaterSupplierCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchHotWaterQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by ykhav on 07.07.15.
 */
public class SearchHotWaterSupplierOperation extends AbstractSelectOperation<HotWaterSupplier> {

    private HotWaterSupplierCondition condition;
    public SearchHotWaterSupplierOperation(HotWaterSupplierCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<HotWaterSupplier> doOperation(Connection connection)   {
        List<HotWaterSupplier> hotWaterSuppliers = new SearchHotWaterQuery(this.condition).execute(connection);
        for (HotWaterSupplier hotWaterSupplier:hotWaterSuppliers) {
            this.fillContraAgentProperties(connection, hotWaterSupplier.getProperty());
        }
        return hotWaterSuppliers;
    }

    private void fillContraAgentProperties(Connection connection, HotWaterSupplierProperty property)   {
        property.setTypeActivity(this.getFillers().getTypeActivityByID(connection,property.getTypeActivity().getId()));
        property.setSourceWaterSupply(this.getFillers().getSourceWatterSupplyByID(connection,property.getSourceWaterSupply().getId()));
        property.setBank(this.getFillers().getBankByID(connection,property.getBank().getId()));
        if (property.getBankAccount() !=null && !property.getBankAccount().isEmpty())
        {
            String bankAccount = property.getBankAccount().substring(0,1);
            if (!bankAccount.equals("*") && property.getBank().getId() != 0) {
                property.setBank(this.getFillers().getBankByID(connection,property.getBank().getId()));
            }
        } else {
            if (property.getBank().getId() != 0)
                property.setBank(this.getFillers().getBankByID(connection,property.getBank().getId()));
        }
        property.setGroupWatterSupply(this.getFillers().getGroupWatterSupplyByID(connection,property.getGroupWatterSupply().getId()));
    }
}
