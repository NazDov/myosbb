package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

/**
 * Created by vostap on 23.09.2014.
 */
public class DepartmentInputCondition {
    private Long departmentID;
    private Long contraAgentID;
    private Long inputID;
    private Long id;
    private boolean withHotWatterSupply =false;
    private Long hotwaterSupplyID;
    private Long counterID;

    public Long getDepartmentID() {
        return departmentID;
    }

    public void setDepartmentID(Long departmentID) {
        this.departmentID = departmentID;
    }

    public Long getContraAgentID() {
        return contraAgentID;
    }

    public void setContraAgentID(Long contraAgentID) {
        this.contraAgentID = contraAgentID;
    }

    public Long getInputID() {
        return inputID;
    }

    public void setInputID(Long inputID) {
        this.inputID = inputID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isWithHotWatterSupply() {
        return withHotWatterSupply;
    }

    public void setWithHotWatterSupply(boolean withHotWatterSupply) {
        this.withHotWatterSupply = withHotWatterSupply;
    }

    public Long getHotwaterSupplyID() {
        return hotwaterSupplyID;
    }

    public void setHotwaterSupplyID(Long hotwaterSupplyID) {
        this.hotwaterSupplyID = hotwaterSupplyID;
    }

    public Long getCounterID() {
        return counterID;
    }

    public void setCounterID(Long counterID) {
        this.counterID = counterID;
    }
}
