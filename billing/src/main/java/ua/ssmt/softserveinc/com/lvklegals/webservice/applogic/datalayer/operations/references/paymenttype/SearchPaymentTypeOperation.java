package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.paymenttype;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.PaymentType;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentTypeCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchPaymentTypeQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 20.11.2014.
 */
public class SearchPaymentTypeOperation extends AbstractSelectOperation<PaymentType> {
    private PaymentTypeCondition condition;

    public SearchPaymentTypeOperation(PaymentTypeCondition condition){
        this.condition =condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<PaymentType> doOperation(Connection connection)   {
        List<PaymentType> list = new SearchPaymentTypeQuery(condition).execute(connection);
        return list;
    }
}
