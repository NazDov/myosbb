package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.agreements;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.HotWaterSupplyAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AgreementHowWatterSupplierValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateAgreementHotWatterSupplyQuery;

import java.sql.Connection;

/**
 * Created by vostap on 20.11.2014.
 */
public class UpdateAgreementHotWatterSupplyOperation extends AbstractModifyOperation<HotWaterSupplyAgreement> {
    public UpdateAgreementHotWatterSupplyOperation() {
        super(new AgreementHowWatterSupplierValidator());
    }

    @Override
    protected long _doOperation(Connection connection, HotWaterSupplyAgreement value)   {
        return new UpdateAgreementHotWatterSupplyQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, HotWaterSupplyAgreement value)   {
        return validator.validateToUpdate(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
