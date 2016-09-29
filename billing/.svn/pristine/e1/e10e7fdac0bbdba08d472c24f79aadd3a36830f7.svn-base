package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.User;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.services.InvoiceValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;

import java.sql.Connection;

/**
 * Created by vostap on 17.12.2014.
 */
public class InvoiceByDepartmentInputOperation extends AbstractModifyOperation<CalcInvoice> {
    private DepartmentInput departmentInput;
    public InvoiceByDepartmentInputOperation(DepartmentInput departmentInput) {
        super(new InvoiceValidator());
        this.departmentInput = departmentInput;
    }

    @Override
    protected long _doOperation(Connection connection, CalcInvoice value)   {
 /*       clearInvoice(connection);
        InvoiceTransfer transfer = new InvoiceTransfer();
        transfer.setConnection(connection);
        transfer.setDepartmentInput(di);
        InputFactor factor = checkInputForCounter(transfer);
        boolean isHasCounter = !(factor == null);
        if (isHasCounter == true){
            transfer.setFactor(factor);
            invoice =  new CalculationByCounterInvoice(transfer);
        }else{
            invoice = new CalculationByNormaInvoice(transfer);
        }
        invoice.calculate();
        return 0;*/
        return 0;
    }

    @Override
    public boolean validate(Connection connection, CalcInvoice value)   {
        return false;
    }

    @Override
    public void checkPermission(Connection connection, User user) throws SecurityException {

    }
}
