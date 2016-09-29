package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.elements.AbstractAutoCompleter;

/**
 * Created by vostap on 09.09.2014.
 */
public class SearchStreetForAutoCompliterQuery extends AbstractAutoCompleter {
    public SearchStreetForAutoCompliterQuery(String condition) {
        super(condition);
    }

    @Override
    protected String getSQLQuery() {
        return
                "SELECT top "+ Options.getMaxCountToSelectRow()+" [id]\n" +
                "      ,[Name]\n" +
                "  FROM [dbo].[RefStreets] where Name like '%"+condition+"%'";

    }
}
