package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceVolumeLKP;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceVolumeLKPCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAgreementQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInvoiceVolumeByLKPQuery;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vostap on 6/2/2015.
 */
public class SearchIvoiceVolumeByLIPOperation extends AbstractSelectOperation<CalcInvoiceVolumeLKP>{

    private CalcInvoiceVolumeLKPCondition condition;

    public SearchIvoiceVolumeByLIPOperation(CalcInvoiceVolumeLKPCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<CalcInvoiceVolumeLKP> doOperation(Connection connection) {
        List<CalcInvoiceVolumeLKP> res = new SearchInvoiceVolumeByLKPQuery(condition).execute(connection);
        for (CalcInvoiceVolumeLKP c:res){
            c.setDepartmentInput(getFillers().getDepartmentInputByID(connection,c.getDepartmentInput().getId()));
            c.setAgreement(this.fillAgreement(connection,c));
        }
        return res;
    }

    private Agreement fillAgreement(Connection connection,CalcInvoiceVolumeLKP c) {
        AgreementCondition condition = new AgreementCondition();
        condition.setDepartamentID(c.getDepartmentInput().getDepartment().getId());
        List<Agreement> agreements = new SearchAgreementQuery(condition).execute(connection);
        if (agreements.isEmpty()) return new Agreement();
        else
           return agreements.get(0);
    }
}
