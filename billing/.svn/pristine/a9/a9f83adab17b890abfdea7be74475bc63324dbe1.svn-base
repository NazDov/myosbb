package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.elements.AbstractAutoCompleter;

/**
 * Created by vostap on 04.09.2014.
 */
public class SearchBankQuery extends AbstractAutoCompleter {

    public SearchBankQuery(String condition) {
        super(condition);
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select top 20  ");
        sb.append("        id as id,  ");
        sb.append("        BankName as Name ");
        sb.append("   from RefBanks   ");
        sb.append("  where mfo like '%"+condition.trim()+"%'  ");
        return sb.toString();
    }


}
