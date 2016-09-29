package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.commission;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Commission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CommissionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchCommissionQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vstoian on 27.01.2015.
 */
public class SearchCommissionOperation extends AbstractSelectOperation<Commission> {
    private CommissionCondition condition;

    public SearchCommissionOperation(CommissionCondition condition){
        this.condition =condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<Commission> doOperation(Connection connection)   {
        List<Commission> list = new SearchCommissionQuery(condition).execute(connection);
        for (Commission p:list){
            p.setContraAgent(this.getFillers().getContraAgentByID(connection,p.getContraAgent().getId()));
            p.setDepartment(this.getFillers().getDepByID(connection,p.getDepartment().getId()));
            p.setAgreement(this.getFillers().getAgreementByID(connection, p.getAgreement().getId()));
            p.setAgreementDep(this.getFillers().getAgreementDepByID(connection, p.getAgreementDep().getId()));
            p.setServicePayment(this.getFillers().getServicePaymentByID(connection,p.getServicePayment().getId()));
         //   if (p.getDepartment().getId()>0)
        //        p.setDepartment(this.getFillers().getDepartmentByID(connection,p.getDepartment().getId()));
        }
        return list;
    }
}
