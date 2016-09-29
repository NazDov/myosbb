package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.hotwatersupplier;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.HotWaterSupplyValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateHotWaterSupplyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateHotWatterSupplyPropQuery;

import java.sql.Connection;

/**
 * Created by vostap on 23.08.2014.
 */
public class CreateHotWaterSupplierOperation extends AbstractModifyOperation<HotWaterSupplier> {

    public CreateHotWaterSupplierOperation() {
        super(new HotWaterSupplyValidator());

    }

    @Override
    protected long _doOperation(Connection connection, HotWaterSupplier hotWaterSupplier)   {
        long hotwaterSupplierId = new CreateHotWaterSupplyQuery().execute(connection,hotWaterSupplier);
        hotWaterSupplier.setId(hotwaterSupplierId);
        new CreateHotWatterSupplyPropQuery().execute(connection,hotWaterSupplier);
        return hotwaterSupplierId;
    }

    @Override
    public boolean validate(Connection connection, HotWaterSupplier value) {
        return false;
    }


    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

}
