package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.elements;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 09.09.2014.
 */
public abstract class AbstractAutoCompleter extends AbstractSelectQuery<ComboBoxItem,String> {
    public AbstractAutoCompleter(String condition) {
        super(condition);
    }

    @Override
    protected ComboBoxItem parseResultSet(ResultSet rs) throws SQLException {
        ComboBoxItem res = new ComboBoxItem();
        res.setName(rs.getString("Name"));
        res.setId(rs.getLong("id"));
        return  res;
    }

}
