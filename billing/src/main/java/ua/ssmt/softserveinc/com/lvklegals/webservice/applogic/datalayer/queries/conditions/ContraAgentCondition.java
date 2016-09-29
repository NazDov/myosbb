package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions;


import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Algorithm;

/**
 * Created by vostap on 04.09.2014.
 */
public class ContraAgentCondition {
    private Long id;
    private String edrpo;
    private String name;
    private String bankAccount;
    private String AgreementNumber;
    private Long DepId;
    private String CodeConto;
    private String Routename;
    private String mfo;
    private Algorithm algorithm;
    private Boolean comissionAllow;
    private Boolean isHotWatterSupplier;


    public String getEdrpo() {
        return edrpo;
    }

    public void setEdrpo(String edrpo) {
        this.edrpo = edrpo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBankAccount() {
        return bankAccount;
    }

    public void setBankAccount(String bankAccount) {
        this.bankAccount = bankAccount;
    }

    public String getAgreementNumber() {
        return AgreementNumber;
    }

    public void setAgreementNumber(String agreementNumber) {
        AgreementNumber = agreementNumber;
    }

    public Long getDepId() {
        return DepId;
    }

    public void setDepId(Long depId) {
        DepId = depId;
    }

    public String getCodeConto() {
        return CodeConto;
    }

    public void setCodeConto(String codeConto) {
        CodeConto = codeConto;
    }

    public String getRoutename() {
        return Routename;
    }

    public void setRoutename(String routename) {
        Routename = routename;
    }

    public String getMfo() {
        return mfo;
    }

    public void setMfo(String mfo) {
        this.mfo = mfo;
    }

    public Algorithm getAlgorithm() {
        return algorithm;
    }

    public void setAlgorithm(Algorithm algorithm) {
        this.algorithm = algorithm;
    }

    public Boolean getComissionAllow() {
        return comissionAllow;
    }

    public void setComissionAllow(Boolean comissionAllow) {
        this.comissionAllow = comissionAllow;
    }

    public Boolean getIsHotWatterSupplier() {
        return isHotWatterSupplier;
    }

    public void setIsHotWatterSupplier(Boolean isHotWatterSupplier) {
        this.isHotWatterSupplier = isHotWatterSupplier;
    }
}
