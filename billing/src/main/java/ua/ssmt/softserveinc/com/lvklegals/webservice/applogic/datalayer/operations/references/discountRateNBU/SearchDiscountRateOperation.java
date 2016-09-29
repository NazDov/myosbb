package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.discountRateNBU;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DiscountRateNBU;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DicountRateNBUConditions;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDiscountRateNBUQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 22.09.2014.
 */
public class SearchDiscountRateOperation extends AbstractSelectOperation<DiscountRateNBU>{
    private DicountRateNBUConditions conditions;

    public SearchDiscountRateOperation(DicountRateNBUConditions conditions) {
        this.conditions = conditions;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<DiscountRateNBU> doOperation(Connection connection)   {
        return new SearchDiscountRateNBUQuery(conditions).execute(connection);
    }
}
