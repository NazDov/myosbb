package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.elements.AbstractAutoCompleter;

/**
 * Created by vostap on 09.01.2015.
 */
public class SearchContraAgentByPatternQuery extends AbstractAutoCompleter {
    public SearchContraAgentByPatternQuery(String condition) {
        super(condition);
    }

    @Override
    protected String getSQLQuery() {
        return "select top 20 id, '' as name from RefContragents as c \n" +
                "where edrpo like '%"+condition+"%'";
    }
}
