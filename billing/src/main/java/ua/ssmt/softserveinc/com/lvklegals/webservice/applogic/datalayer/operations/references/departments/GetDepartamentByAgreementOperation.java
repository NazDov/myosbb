package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departments;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetDepByAgreementQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by ykhav on 28.05.15.
 */
public class GetDepartamentByAgreementOperation extends AbstractSelectOperation<ComboBoxItem> {
    private Agreement agreement;

    public GetDepartamentByAgreementOperation(Agreement agreement){
        this.agreement = agreement;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<ComboBoxItem> doOperation(Connection connection)   {
        return new GetDepByAgreementQuery(this.agreement).execute(connection);
    }
}
