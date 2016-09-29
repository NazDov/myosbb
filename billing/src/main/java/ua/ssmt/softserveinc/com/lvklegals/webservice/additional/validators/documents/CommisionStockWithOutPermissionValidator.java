package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.DocCorrectionStockWithOutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;

import java.sql.Connection;

/**
 * Created by vstoian on 27.01.2015.
 */
public class CommisionStockWithOutPermissionValidator extends AbstractValidator<DocCorrectionStockWithOutPermission> {
    @Override
    public boolean validateToInsert(Connection connection,DocCorrectionStockWithOutPermission value)   {
        return false;
    }

    @Override
    public boolean validateToDelete(Connection connection,DocCorrectionStockWithOutPermission value)   {
        return true;
    }

    @Override
    public boolean validateToUpdate(Connection connection,DocCorrectionStockWithOutPermission value)   {
        return false;
    }
}
