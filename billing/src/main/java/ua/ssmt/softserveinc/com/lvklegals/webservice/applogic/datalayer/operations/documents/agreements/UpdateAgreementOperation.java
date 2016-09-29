package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.agreements;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AgreementValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ServiceAgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateAgreementPropertyPenyaQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SelectAgreementPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateAgreementPropertyQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateAgreementQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 20.11.2014.
 */
public class UpdateAgreementOperation extends AbstractModifyOperation<Agreement> {
    public UpdateAgreementOperation() {
        super(new AgreementValidator());
    }

    @Override
    protected long _doOperation(Connection connection, Agreement value)   {
        this.updateAgreement(connection, value);
        if (this.checkExistaGreementPropertyInCurrentPeriod(connection, value))
            this.updateAgreementProperty(connection, value);
        else
            this.createAgreementropertyInCurrentPeriod(connection,value);
        return value.getId();
    }


    private boolean checkExistaGreementPropertyInCurrentPeriod(Connection connection,Agreement agreement)   {
        ServiceAgreementCondition condition = new ServiceAgreementCondition();
        condition.setAgreementId(agreement.getId());
        List<Agreement> list  = new SelectAgreementPropertyQuery(condition).execute(connection);
        if (list.isEmpty() == true) return false;
        else
            return true;
    }

    private void updateAgreementProperty(Connection connection,Agreement agreement)   {
        new UpdateAgreementPropertyQuery().execute(connection,agreement);
    }

    private void createAgreementropertyInCurrentPeriod(Connection connection,Agreement agreement)   {
        new CreateAgreementPropertyPenyaQuery().execute(connection,agreement);
    }
    private void updateAgreement(Connection connection,Agreement agreement)   {
        new UpdateAgreementQuery().execute(connection,agreement);
    }
    @Override
    public boolean validate(Connection connection, Agreement value)   {
        return validator.validateToUpdate(connection,value);
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }


}
