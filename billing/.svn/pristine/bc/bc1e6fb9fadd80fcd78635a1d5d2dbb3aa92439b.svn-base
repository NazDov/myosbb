package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.contraagent;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ComboBoxItem;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.fillers.Fillers;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetKontrAgentByDepQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetKontraAgentByDepartmentQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by ykhav on 28.05.15.
 */
public class GetKontrAgentByDepOperation extends AbstractSelectOperation<ComboBoxItem> {
    private Department department;

    public GetKontrAgentByDepOperation(Department department){
        this.department = department;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<ComboBoxItem> doOperation(Connection connection)   {
        //return new GetKontrAgentByDepQuery(this.department).execute(connection);
        List<ComboBoxItem> list  = new GetKontraAgentByDepartmentQuery(department).execute(connection);
        for (ComboBoxItem cb:list){
            cb.setName(new Fillers().getContraAgentByID(connection,cb.getId()).getProperty().getShortName());
        }
        return list;
    }
}


