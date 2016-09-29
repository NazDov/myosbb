package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.agreements;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.HotWaterSupplyAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AgreementHowWatterSupplierValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.delete.DeleteAgreementHotWatterAgreementQuery;

import java.sql.Connection;

/**
 * Created by vostap on 20.11.2014.
 */
public class DeleteAgreementHotWatterSupplyOperation extends AbstractModifyOperation<HotWaterSupplyAgreement> {
    public DeleteAgreementHotWatterSupplyOperation() {
        super(new AgreementHowWatterSupplierValidator());
    }

    @Override
    protected long _doOperation(Connection connection, HotWaterSupplyAgreement value)   {
        return new DeleteAgreementHotWatterAgreementQuery().execute(connection,value);
    }

    @Override
    public boolean validate(Connection connection, HotWaterSupplyAgreement value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
