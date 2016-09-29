package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.agreements;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.HotWaterSupplyAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementHotWatterSupplyCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAgreementHotWatterSupplyQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 20.11.2014.
 */
public class SearchAgreementHotWatterSupplierOperation extends AbstractSelectOperation<HotWaterSupplyAgreement> {
    private AgreementHotWatterSupplyCondition condition;

    public SearchAgreementHotWatterSupplierOperation(AgreementHotWatterSupplyCondition condition){
        this.condition =condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<HotWaterSupplyAgreement> doOperation(Connection connection)   {
        List<HotWaterSupplyAgreement> list = new SearchAgreementHotWatterSupplyQuery(condition).execute(connection);
        for (HotWaterSupplyAgreement doc:list){

            if (doc.getHotWaterSupplier().getId() != 0) {
                doc.setHotWaterSupplier(this.getFillers().getHotWatterSupplytByID(connection, doc.getHotWaterSupplier().getId()));
            }

        }
        return list;
    }
}
