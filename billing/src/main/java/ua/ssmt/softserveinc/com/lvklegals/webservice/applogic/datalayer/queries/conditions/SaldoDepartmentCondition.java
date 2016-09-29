package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;

/**
 * Created by vostap on 03.03.2016.
 */
public class SaldoDepartmentCondition {
    private Long departmentID;
    private Long agreementID;

    public Long getDepartmentID() {
        return departmentID;
    }

    public void setDepartmentID(Long departmentID) {
        this.departmentID = departmentID;
    }

    public Long getAgreementID() {
        return agreementID;
    }

    public void setAgreementID(Long agreementID) {
        this.agreementID = agreementID;
    }
}
