package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.paymentdepartment;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.PaymentDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.PaymentDepartmentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchPaymentDepartmentQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 20.11.2014.
 */
public class SearchPaymentDepartmentOperation extends AbstractSelectOperation<PaymentDepartment> {
    private PaymentDepartmentCondition condition;

    public SearchPaymentDepartmentOperation(PaymentDepartmentCondition condition){
        this.condition =condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<PaymentDepartment> doOperation(Connection connection)   {
        List<PaymentDepartment> list = new SearchPaymentDepartmentQuery(condition).execute(connection);
        for (PaymentDepartment p:list){
            p.setContraAgent(this.getFillers().getContraAgentByID(connection,p.getContraAgent().getId()));
            p.setDepartment(this.getFillers().getDepartmentByID(connection,p.getDepartment().getId()));
            p.setAgreement(this.getFillers().getAgreementByID(connection,p.getAgreement().getId()));
            p.setContragentAgreement(this.getFillers().getAgreementByID(connection,p.getContragentAgreement().getId()));
            p.setServicePayment(this.getFillers().getServicePaymentByID(connection,p.getServicePayment().getId()));
            p.setPaymentType(this.getFillers().getPaymentTypeByID(connection,p.getPaymentType().getId()));
        }
        return list;
    }
}
