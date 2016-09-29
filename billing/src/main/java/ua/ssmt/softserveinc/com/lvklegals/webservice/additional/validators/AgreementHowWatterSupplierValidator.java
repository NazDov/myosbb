package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.HotWaterSupplyAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementHotWatterSupplyCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAgreementHotWatterSupplyQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 20.11.2014.
 */
public class AgreementHowWatterSupplierValidator extends AbstractValidator<HotWaterSupplyAgreement> {
    @Override
    public boolean validateToInsert(Connection connection, HotWaterSupplyAgreement value)   {
       return validateToCorrectActive(connection,value);

    }

    private boolean validateToCorrectActive(Connection connection, HotWaterSupplyAgreement value)   {
        AgreementHotWatterSupplyCondition condition = new AgreementHotWatterSupplyCondition();
        condition.setHotwaterSupplierId(value.getHotWaterSupplier().getId());
        condition.setStatus(true);
        try {
            List<HotWaterSupplyAgreement> list = new SearchAgreementHotWatterSupplyQuery(condition).execute(connection);
            if (list.size() >1 ) throw new ValidateException(Messages.getInstance().get("ERROR_CANNOT_EXIST_MORE_THAN_ONE_ACTIVE_AGREEMENT"));
            boolean isExistActive = !list.isEmpty();
            return true;
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
    }

    @Override
    public boolean validateToDelete(Connection connection, HotWaterSupplyAgreement value)   {
        return false;
    }

    @Override
    public boolean validateToUpdate(Connection connection, HotWaterSupplyAgreement value)   {
        return true;
       // return validateToCorrectActive(connection,value);
    }
}
