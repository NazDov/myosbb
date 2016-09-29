package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.agreementsupplier;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.HotWaterSupplier;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.HotWaterSupplyAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 05.01.2016.
 */
public class AgreementSupplierOperation extends AbstractSelectOperation<HotWaterSupplyAgreement> {
    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<HotWaterSupplyAgreement> doOperation(Connection connection) {
        return new AgreementSupplierQuery(null).execute(connection);
    }
}
