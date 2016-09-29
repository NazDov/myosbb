package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

/**
 * Created by vostap on 13.11.2014.
 */
public class InputPropertyCondition {
    private Long id;
    private Long RegInfDepartmentID;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getRegInfDepartmentID() {
        return RegInfDepartmentID;
    }

    public void setRegInfDepartmentID(Long regInfDepartmentID) {
        RegInfDepartmentID = regInfDepartmentID;
    }
}
