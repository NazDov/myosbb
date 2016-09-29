package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.taxbill;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.taxbill.TaxBillHeader;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.TaxBillCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchTaxBillHeaderQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by bmitsan on 29.03.2016.
 */
public class TaxBillHeaderOperations extends AbstractSelectOperation<TaxBillHeader> {
    private TaxBillCondition condition;

    public TaxBillHeaderOperations(TaxBillCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<TaxBillHeader> doOperation(Connection connection)   {
        return new SearchTaxBillHeaderQuery(this.condition).execute(connection);
    }
}
