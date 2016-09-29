package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.servicepayment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ServicePayment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ServicePaymentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchServicePaymentQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 20.11.2014.
 */
public class SearchServicePaymentOperation extends AbstractSelectOperation<ServicePayment> {
    private ServicePaymentCondition condition;

    public SearchServicePaymentOperation(ServicePaymentCondition condition){
        this.condition =condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<ServicePayment> doOperation(Connection connection)   {
        List<ServicePayment> list = new SearchServicePaymentQuery(condition).execute(connection);
        return list;
    }
}
