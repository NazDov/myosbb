package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

/**
 * Created by vostap on 21.10.2014.
 */
public class AddingByCapacityCondition {
    private Long id;
    private Long contraAgentID;
    private Long departmentID;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getContraAgentID() {
        return contraAgentID;
    }

    public void setContraAgentID(Long contraAgentID) {
        this.contraAgentID = contraAgentID;
    }

    public Long getDepartmentID() {
        return departmentID;
    }

    public void setDepartmentID(Long departmentID) {
        this.departmentID = departmentID;
    }

}
