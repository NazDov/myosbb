package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;

/**
 * Created by vostap on 7/31/2015.
 */
public class CalcInvoiceForHotWatterSupplier {
    private ContraAgent contraAgent;
    private DepartmentInput departmentInput;

    public ContraAgent getContraAgent() {
        return contraAgent;
    }

    public void setContraAgent(ContraAgent contraAgent) {
        this.contraAgent = contraAgent;
    }

    public DepartmentInput getDepartmentInput() {
        return departmentInput;
    }

    public void setDepartmentInput(DepartmentInput departmentInput) {
        this.departmentInput = departmentInput;
    }
}
