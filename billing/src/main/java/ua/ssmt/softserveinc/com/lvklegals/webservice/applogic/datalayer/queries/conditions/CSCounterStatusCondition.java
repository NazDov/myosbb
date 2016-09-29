package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;

/**
 * Created by vostap on 02.12.2014.
 */
public class CSCounterStatusCondition {
    private DepartmentInput departmentInput;
    private Long counterID;

    public DepartmentInput getDepartmentInput() {
        return departmentInput;
    }

    public void setDepartmentInput(DepartmentInput departmentInput) {
        this.departmentInput = departmentInput;
    }

    public Long getCounterID() {
        return counterID;
    }

    public void setCounterID(Long counterID) {
        this.counterID = counterID;
    }
}
