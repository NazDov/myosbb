package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.elements.AbstractAutoCompleter;

/**
 * Created by vostap on 04.09.2014.
 */
public class SearchContoQuery extends AbstractAutoCompleter {

    public SearchContoQuery(String condition) {
        super(condition);
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" select top 20 conto from tmpKonto where conto not in ");
        sb.append(" (Select distinct d.conto from RefRoutes as a         ");
        sb.append("  left join RefSubRoutes as b    ");
        sb.append("  on a.id = b.RouteID    ");
        sb.append("  left join RegDepartmentSubRoute as c    ");
        sb.append("  on c.SubRouteID = b.id    ");
        sb.append("  left join RegInfDepartamentCharacters as d    ");
        sb.append("   on d.DepartmentID = c.DepartmentID  ");
        sb.append("    left join tmpKonto as e                    ");
        sb.append("    on e.conto = d.conto                   ");
        sb.append("  where a.Name like '%"+condition.trim()+"%'  ");
        return sb.toString();
    }


}
