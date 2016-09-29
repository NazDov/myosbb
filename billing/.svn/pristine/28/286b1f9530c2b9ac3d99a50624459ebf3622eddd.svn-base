package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.inputs;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.AddressCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchAddressQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentInputQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputQuery;

import java.sql.Connection;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 18.09.2014.
 */
public class SearchInputOperation extends AbstractSelectOperation<Input> {

    private InputCondition condition;

    public SearchInputOperation(InputCondition condition){
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<Input> doOperation(Connection connection)   {
        List<Input> list = new SearchInputQuery(this.condition).execute(connection);
        list = this.fillAddress(list,connection);
        for (Input input:list){
            this.fillContraAgentAndDepartment(input,connection);
        }
        return list;
    }

    private void fillContraAgentAndDepartment(Input input, Connection connection)   {
        DepartmentInputCondition condition = new DepartmentInputCondition();
        condition.setInputID(input.getId());
        List<DepartmentInput> list = new SearchDepartmentInputQuery(condition).execute(connection);
        if (list.isEmpty() ) {
            input.setDepartment(new Department());
            input.setAgreement(new Agreement());
            input.setContraAgent(new ContraAgent());
            return;
        }
        DepartmentInput di = list.get(0);
        if (checkInputForClose(di,connection)) return;
        di.setDepartment(this.getFillers().getDepartmentByID(connection,di.getDepartment().getId()));
        input.setDepartment(this.getFillers().getDepartmentByID(connection, di.getDepartment().getId()));
        input.setContraAgent(this.getFillers().getContraAgentByID(connection,di.getDepartment().getContraAgent().getId()));
        input.setAgreement(this.getFillers().getAgreementByID(connection,di.getAgreement().getId()));

    }

    private boolean checkInputForClose(DepartmentInput di,Connection connection) {
        Date period = new GetCurrentPeriodQuery(null).execute(connection).get(0).getCurrentPeriod();
        if (di.getEndDate() == null) return false;
        if (di.getEndDate().getTime()<period.getTime()) return true;
        else return false;
    }


    private List<Input> fillAddress(List<Input> list, Connection connection)   {
        for (Input i:list){
            AddressCondition condition = new AddressCondition();
            condition.setId(i.getAddress().getId());
            i.setAddress(new SearchAddressQuery(condition).execute(connection).get(0));
        }
        return list;

    }
}
