package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correctionofcounter;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents.CorrectionOfCounterValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;

import java.sql.Connection;

/**
 * Created by vostap on 23.09.2014.
 */
public class UpdateCorrectionOfCounterOperation extends AbstractModifyOperation<CorrectionOfCounter> {
    public UpdateCorrectionOfCounterOperation() {
        super(new CorrectionOfCounterValidator());
    }

    @Override
    protected long _doOperation(Connection connection, CorrectionOfCounter value)   {
        return 0;
    }

    @Override
    public boolean validate(Connection connection,CorrectionOfCounter value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
