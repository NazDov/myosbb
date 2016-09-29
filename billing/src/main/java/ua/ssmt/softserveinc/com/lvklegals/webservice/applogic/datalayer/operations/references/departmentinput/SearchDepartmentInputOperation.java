package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departmentinput;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputProperty;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.InputSubServiceContain;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.queries.GetCurrentPeriodQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DepartmentInputCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputPropertyCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.InputSubServiceContainsCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchDepartmentInputQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputHistoryQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchInputSubServiceContainsQuery;

import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 23.09.2014.
 */
public class SearchDepartmentInputOperation extends AbstractSelectOperation<DepartmentInput> {

    private DepartmentInputCondition condition;

    public SearchDepartmentInputOperation(DepartmentInputCondition condition) {
        this.condition = condition;
    }

    public void setCondition(DepartmentInputCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection,User user) throws SecurityException {

    }

    @Override
    public List<DepartmentInput> doOperation(Connection connection)   {
        List<DepartmentInput> list = new SearchDepartmentInputQuery(this.condition).execute(connection);
        for (DepartmentInput di:list){
            di.setInput(this.getFillers().getInputByID(connection, di.getInput().getId()));
            di.setSubServices(getFillers().getInputSubServiceContainByID(connection, di.getSubServices().getId()));
            di.setDepartment(this.getFillers().getDepartmentByID(connection, di.getDepartment().getId()));
            di.setCounter(this.getFillers().getCounterByID(connection, di.getCounter().getId()));
            di.setInputProperty(this.getFillers().getPropertyByID(connection, di.getInputProperty().getId()));
            di.setRegisterOfCounter(this.getFillers().getRegisterOfCounterByID(connection,di.getRegisterOfCounter().getId()));
            di.setUnregisterOfCounter(this.getFillers().getUnregisterByID(connection, di.getUnregisterOfCounter().getId()));
            di.setHotWaterSupplier(this.getFillers().getHotWatterSupplytByID(connection, di.getHotWaterSupplier().getId()));
            di.setTypeRemove(this.getFillers().getTypeRemoveByID(connection,di.getTypeRemove().getId()));
            di.setAgreement(this.getFillers().getAgreementByID(connection, di.getAgreement().getId()));
            di.setHistoryInputSubServiceContains(this.fillHistory(connection, di));
            di.setHistoryProperties(this.fillHistoryProperties(connection,di));
            di.getUnregisterOfCounter().setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));
            di.getSubServices().setPeriod(new GetCurrentPeriodQuery(null).execute(connection).get(0));


            if (di.getInput().getParent().getId() != 0)
                di.getInput().setParent(this.getFillers().getInputByID(connection,di.getInput().getParent().getId()));
        }
        return list;
    }

    private List<InputProperty> fillHistoryProperties(Connection connection, DepartmentInput di)   {
        InputPropertyCondition condition = new InputPropertyCondition();
        condition.setRegInfDepartmentID(di.getId());
        return new SearchInputHistoryQuery(condition).execute(connection);
    }



    private List<InputSubServiceContain> fillHistory(Connection connection, DepartmentInput di)   {
        InputSubServiceContainsCondition condition = new InputSubServiceContainsCondition();
        condition.setDepartmentInputID(di.getId());
        return new SearchInputSubServiceContainsQuery(condition).execute(connection);
    }

}
