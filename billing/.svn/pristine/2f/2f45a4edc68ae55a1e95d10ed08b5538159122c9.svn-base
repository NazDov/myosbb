package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.taxbill;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.taxbill.TaxBillDetail;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.TaxBillCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchTaxBillDetailQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by bmitsan on 29.03.2016.
 */
public class TaxBillDetailOperations extends AbstractSelectOperation<TaxBillDetail> {
    private TaxBillCondition condition;

    public TaxBillDetailOperations(TaxBillCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<TaxBillDetail> doOperation(Connection connection)   {
        return new SearchTaxBillDetailQuery(this.condition).execute(connection);
    }
}
