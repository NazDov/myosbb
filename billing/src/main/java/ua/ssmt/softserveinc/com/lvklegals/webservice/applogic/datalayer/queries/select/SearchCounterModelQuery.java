package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.elements.AbstractAutoCompleter;

/**
 * Created by vostap on 04.09.2014.
 */
public class SearchCounterModelQuery extends AbstractAutoCompleter {

    public SearchCounterModelQuery(String condition) {
        super(condition);
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select top 20  ");
        sb.append("        id as id,  ");
        sb.append("        Name as Name ");
        sb.append("   from RefCounterModels   ");
        sb.append("  where Name like '%"+condition.trim()+"%'  ");
        return sb.toString();
    }


}
