package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.validate.ValidateException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.messages.Messages;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.ReferencesServiceImpl;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAgreementQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 20.11.2014.
 */
public class AgreementValidator extends AbstractValidator<Agreement> {
    private static ReferencesService service = new ReferencesServiceImpl();
    private static User getUser() {
        User user = new User();
        user.setId(1L);
        user.setName("admin");
        user.setUserPassword("admin");
        return user;
    }
    @Override
    public boolean validateToInsert(Connection connection, Agreement value)   {
        this.validateToCorrectActive(connection,value);
      //  this.validatePenya(connection,value);
        return true;

    }

    private boolean validateToCorrectActive(Connection connection, Agreement value)   {
        AgreementCondition condition = new AgreementCondition();
        condition.setContraAgentID(value.getContraAgent().getId());
        condition.setStatus(true);
        try {
            List<Agreement> list = new SearchAgreementQuery(condition).execute(connection);
            if (list.size() >1 ) throw new ValidateException(Messages.getInstance().get("ERROR_CANNOT_EXIST_MORE_THAN_ONE_ACTIVE_AGREEMENT"));
            boolean isExistActive = !list.isEmpty();
            if (value.isActive() ==true && isExistActive == true) throw new ValidateException(Messages.getInstance().get("ERROR_CANNOT_EXIST_MORE_THAN_ONE_ACTIVE_AGREEMENT"));
            return true;
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
    }
  /*  private boolean validatePenya(Connection connection, Agreement value)   {
        AgreementPropertiesPenyaCondition condition = new AgreementPropertiesPenyaCondition();
        condition.setAgreementId(value.getId());
        condition.setPeriod(service.getCurrentPeriod(getUser()).getCurrentPeriod());
        try {
            List<AgreementPenyaProperty> list = new SearchAgreementPropertiesPenyaQuery(condition).execute(connection);
            if (list.size() >1 ) throw new ValidateException(Messages.getInstance().get("ERROR_CANNOT_EXIST_MORE_THAN_ONE_PENYA"));
            boolean isExistActive = !list.isEmpty();
            if (value.getAgreementPenyaProperty().getCalcPenya() ==true && isExistActive == true) throw new ValidateException(Messages.getInstance().get("ERROR_CANNOT_EXIST_MORE_THAN_ONE_PENYA"));
            return true;
        } catch (StorageException e) {
            throw new ValidateException(e);
        }
    }*/

    @Override
    public boolean validateToDelete(Connection connection, Agreement value)   {
        return false;
    }

    @Override
    public boolean validateToUpdate(Connection connection, Agreement value)   {
        return true;
       // return validateToCorrectActive(connection,value);
    }
}
