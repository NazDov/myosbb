package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;

import java.util.Date;

/**
 * Created by vostap on 03.10.2014.
 */
public class AgreementPenyaProperty {
    private Long id;
    private Agreement agreement;
    private Boolean calcPenya;
    private ComboBoxItem typesCalculatePN;
    private Date period;



    public AgreementPenyaProperty() {
        this.agreement = new Agreement();

    }

    public AgreementPenyaProperty(Long id) {
        this();
        this.id = id;
    }



    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



    @Override
    public String toString() {
        return "AgreementPenyaProperty{" +
                "calcPenya=" + calcPenya +
                ", agreement=" + agreement +
                ", id=" + id +

                '}';
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public Agreement getAgreement() {
        return agreement;
    }

    public void setAgreement(Agreement agreement) {
        this.agreement = agreement;
    }

    public Boolean getCalcPenya() {
        return calcPenya;
    }

    public void setCalcPenya(Boolean calcPenya) {
        this.calcPenya = calcPenya;
    }

    public ComboBoxItem getTypesCalculatePN() {
        return typesCalculatePN;
    }

    public void setTypesCalculatePN(ComboBoxItem typesCalculatePN) {
        this.typesCalculatePN = typesCalculatePN;
    }
}
