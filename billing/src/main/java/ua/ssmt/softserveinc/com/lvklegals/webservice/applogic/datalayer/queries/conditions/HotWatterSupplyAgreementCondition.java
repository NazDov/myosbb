package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;

/**
 * Created by vostap on 19.11.2014.
 */
public class HotWatterSupplyAgreementCondition {
    private Long contraAgentID;
    private Long departamentID;
    private String AgreementNumber;
    private Boolean status;
    private Long id;
    private Long agreementID;
    private Boolean onlyContraAgent =false;

    public String getAgreementNumber() {
        return AgreementNumber;
    }

    public void setAgreementNumber(String agreementNumber) {
        AgreementNumber = agreementNumber;
    }

    public Long getContraAgentID() {
        return contraAgentID;
    }

    public void setContraAgentID(Long contraAgentID) {
        this.contraAgentID = contraAgentID;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getDepartamentID() {
        return departamentID;
    }

    public void setDepartamentID(Long departamentID) {
        this.departamentID = departamentID;
    }

    public Long getAgreementID() {
        return agreementID;
    }

    public void setAgreementID(Long agreementID) {
        this.agreementID = agreementID;
    }


    public Boolean getOnlyContraAgent() {
        return onlyContraAgent;
    }

    public void setOnlyContraAgent(Boolean onlyContraAgent) {
        this.onlyContraAgent = onlyContraAgent;
    }
}
