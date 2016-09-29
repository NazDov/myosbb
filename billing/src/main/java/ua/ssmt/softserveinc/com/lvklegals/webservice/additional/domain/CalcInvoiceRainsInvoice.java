package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;

import java.util.Date;

/**
 * Created by vostap on 26.12.2014.
 */
public class CalcInvoiceRainsInvoice {
    private ContraAgent contraAgent;
    private Department department;
    private Date period;
    private Double sum;
    private Double volume;
    private Double tariff;
    private Agreement agreement;
    private CategoryOfTariff categoryOfTariff;

    public ContraAgent getContraAgent() {
        return contraAgent;
    }

    public void setContraAgent(ContraAgent contraAgent) {
        this.contraAgent = contraAgent;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public Double getSum() {
        return sum;
    }

    public void setSum(Double sum) {
        this.sum = sum;
    }

    public Double getVolume() {
        return volume;
    }

    public void setVolume(Double volume) {
        this.volume = volume;
    }

    public Double getTariff() {
        return tariff;
    }

    public void setTariff(Double tariff) {
        this.tariff = tariff;
    }

    public Agreement getAgreement() {
        return agreement;
    }

    public void setAgreement(Agreement agreement) {
        this.agreement = agreement;
    }

    public CategoryOfTariff getCategoryOfTariff() {
        return categoryOfTariff;
    }

    public void setCategoryOfTariff(CategoryOfTariff categoryOfTariff) {
        this.categoryOfTariff = categoryOfTariff;
    }
}
