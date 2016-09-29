package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceTeploenergo;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.fillers.Fillers;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceTeploenergoCondition;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vostap on 10/11/2015.
 */
public class GetCurrentInvoiceTeploenergoByPeriodOperation extends AbstractSelectOperation<CalcInvoiceTeploenergo>{
    private CalcInvoiceTeploenergoCondition condition;
    public GetCurrentInvoiceTeploenergoByPeriodOperation(CalcInvoiceTeploenergoCondition condition) {
        this.condition = condition;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }

    @Override
    public List<CalcInvoiceTeploenergo> doOperation(Connection connection) {
        CalcInvoiceTeploenergo calcInvoiceTeploenergo = new CalcInvoiceTeploenergo();
        calcInvoiceTeploenergo.setDepartment(new Fillers().getDepartmentByID(connection,100016L));
        calcInvoiceTeploenergo.setInput(new Fillers().getInputByID(connection, 12L));
        calcInvoiceTeploenergo.setOrganizationName("OrganizName");
        calcInvoiceTeploenergo.setSubService(new Fillers().getSubServiceByID(connection, 1L));
        calcInvoiceTeploenergo.setTariff(new Fillers().getCategoryOfTariffByID(connection, 22L));
        calcInvoiceTeploenergo.setSum(10.56);
        List<CalcInvoiceTeploenergo> res = new ArrayList<>();
        res.add(calcInvoiceTeploenergo);
        return res;
    }
}
