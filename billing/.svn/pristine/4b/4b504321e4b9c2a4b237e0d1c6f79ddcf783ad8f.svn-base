package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

/**
 * Created by ykhav on 27.05.15.
 */
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.elements.AbstractAutoCompleter;

/**
 * Created by vostap on 04.09.2014.
 */
public class SearchAgreementAutoCompleteQuery extends AbstractAutoCompleter {

    public SearchAgreementAutoCompleteQuery(String condition) {
        super(condition);
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select top 20  ");
        sb.append(" id as id,  ");
        sb.append(" AgreementNumber as Name   ");
        sb.append(" from DocAgreement  ");
        sb.append(" where AgreementNumber like '%"+condition.trim()+"%' and DepartmentID is not null  ");
        return sb.toString();
    }


}
