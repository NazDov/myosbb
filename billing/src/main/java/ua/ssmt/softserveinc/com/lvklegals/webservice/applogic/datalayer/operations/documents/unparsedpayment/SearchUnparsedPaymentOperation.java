package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.unparsedpayment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.UnparsedPayment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.UnparsedPaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchUnParsedPaymentQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 20.11.2014.
 */
public class SearchUnparsedPaymentOperation extends AbstractSelectOperation<UnparsedPayment> {
    private UnparsedPaymentCondition condition;

    public SearchUnparsedPaymentOperation(UnparsedPaymentCondition condition){
        this.condition =condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<UnparsedPayment> doOperation(Connection connection)   {
        List<UnparsedPayment> list = new SearchUnParsedPaymentQuery(condition).execute(connection);
        return list;
    }
}
