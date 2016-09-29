package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.agreements;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AgreementCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAgreementByDepQuery;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vostap on 09.01.2015.
 */
public class SearchAgreementToComboBoxByDep extends AbstractSelectOperation<ComboBoxItem> {

    private AgreementCondition condition;

    public SearchAgreementToComboBoxByDep(AgreementCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<ComboBoxItem> doOperation(Connection connection)   {
        List<Agreement> agreements = new SearchAgreementByDepQuery(condition).execute(connection);
        List<ComboBoxItem> res = new ArrayList<>();
        for (Agreement agreement:agreements){
            ComboBoxItem item = new ComboBoxItem();
            item.setId(agreement.getId());
            if(agreement.isActive())
                item.setName(agreement.getAgreementNumber()+" (A)");
            else
                item.setName(agreement.getAgreementNumber());
            res.add(item);
        }
        return res;
    }
}
