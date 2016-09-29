package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;

import java.util.Date;

/**
 * Created by vostap on 19.11.2014.
 */
public class Agreement {

    private Long id;
    private ContraAgent contraAgent;
    private Date beginDate;
    private Date endDate;
    private TypeAgreement typeAgreement;
    private KindAgreement kindAgreement;
    private String agreementNumber;
    private Department department;
    private boolean isActive;
    private AgreementPenyaProperty agreementPenyaProperty;

    public Agreement() {
    }

    public Agreement(Long id) {
        this.id = id;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean isActive) {
        this.isActive = isActive;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ContraAgent getContraAgent() {
        return contraAgent;
    }

    public void setContraAgent(ContraAgent contraAgent) {
        this.contraAgent = contraAgent;
    }

    public Date getBeginDate() {
        return beginDate;
    }

    public void setBeginDate(Date beginDate) {
        this.beginDate = beginDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public TypeAgreement getTypeAgreement() {
        return typeAgreement;
    }

    public void setTypeAgreement(TypeAgreement typeAgreement) {
        this.typeAgreement = typeAgreement;
    }

    public KindAgreement getKindAgreement() {
        return kindAgreement;
    }

    public void setKindAgreement(KindAgreement kindAgreement) {
        this.kindAgreement = kindAgreement;
    }

    public String getAgreementNumber() {
        return agreementNumber;
    }

    public void setAgreementNumber(String agreementNumber) {
        this.agreementNumber = agreementNumber;
    }

    public AgreementPenyaProperty getAgreementPenyaProperty() {
        return agreementPenyaProperty;
    }

    public void setAgreementPenyaProperty(AgreementPenyaProperty agreementPenyaProperty) {
        this.agreementPenyaProperty = agreementPenyaProperty;
    }
}
