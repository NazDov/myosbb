package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.hotwatersupplier;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.HotWaterSupplyValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ServiceContraAgentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateHotWatterSupplyPropQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SelectHotWaterSupplyPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateHotWatterSupplierPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateHotWatterSupplierQuery;

import java.sql.Connection;
import java.util.List;

//import ContraAgentValidator;

/**
 * Created by vostap on 25.08.2014.
 */
public class UpdateHotWaterSupplyOperation extends AbstractModifyOperation<HotWaterSupplier> {

    public UpdateHotWaterSupplyOperation() {
        super(new HotWaterSupplyValidator());
    }

    @Override
    protected long _doOperation(Connection connection, HotWaterSupplier hotWaterSupplier )   {
        this.updateContraAgent(connection,hotWaterSupplier);
        if (this.checkExistContraAgentPropertyInCurrentPeriod(connection,hotWaterSupplier))
            this.updateContraAgentProperty(connection,hotWaterSupplier);
        else
            this.createContraAgentPropertyInCurrentPeriod(connection,hotWaterSupplier);
        return hotWaterSupplier.getId();
    }

    @Override
    public boolean validate(Connection connection, HotWaterSupplier value) {
        return false;
    }


    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    private void updateContraAgent(Connection connection,HotWaterSupplier contraAgent)   {
        new UpdateHotWatterSupplierQuery().execute(connection,contraAgent);
    }

    private boolean checkExistContraAgentPropertyInCurrentPeriod(Connection connection,HotWaterSupplier contraAgent)   {
        ServiceContraAgentCondition condition = new ServiceContraAgentCondition();
        condition.setContraAgentID(contraAgent.getId());
        List<HotWaterSupplier> list  = new SelectHotWaterSupplyPropertyQuery(condition).execute(connection);
        if (list.isEmpty() == true) return false;
        else
            return true;
    }

    private void updateContraAgentProperty(Connection connection,HotWaterSupplier contraAgent)   {
        new UpdateHotWatterSupplierPropertyQuery().execute(connection,contraAgent);
    }

    private void createContraAgentPropertyInCurrentPeriod(Connection connection,HotWaterSupplier contraAgent)   {
        new CreateHotWatterSupplyPropQuery().execute(connection,contraAgent);
    }

}
