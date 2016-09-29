package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.contraagent;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.exeptions.StorageException;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchContraAgentByPatternQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 09.01.2015.
 */
public class SearchContraAgentByPatternOperation  extends AbstractSelectOperation<ComboBoxItem> {

    private String query;

    public SearchContraAgentByPatternOperation(String pattern){
        this.query = pattern;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<ComboBoxItem> doOperation(Connection connection)   {
        List<ComboBoxItem> list = new SearchContraAgentByPatternQuery(this.query).execute(connection);
        for (ComboBoxItem item :list){
            ContraAgent ca = this.getContraAgent(item,connection);
            item.setName(ca.getProperty().getShortName());
        }
        return list;
    }

    private ContraAgent getContraAgent(ComboBoxItem item,Connection connection)   {
        return this.getFillers().getContraAgentByID(connection,item.getId());


    }
}
