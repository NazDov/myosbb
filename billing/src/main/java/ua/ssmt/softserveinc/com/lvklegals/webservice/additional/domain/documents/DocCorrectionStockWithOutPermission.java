package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.ContraAgent;

import java.util.Date;

/**
 * Created by vstoian on 24.11.2014.
 */
public class DocCorrectionStockWithOutPermission {

    private Long id;
    private Date period;
    private ContraAgent contraAgent;
    private Agreement agreement;
    private Date dateReason;
    private String numberReason;
    private Double sum;
    private String note;





    public DocCorrectionStockWithOutPermission(){
        this.contraAgent = new ContraAgent();
        this.agreement = new Agreement();

    }

    public DocCorrectionStockWithOutPermission(Long id) {
        this();
        this.id = id;
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

    public Agreement getAgreement() {
        return agreement;
    }

    public void setAgreement(Agreement agreement) {
        this.agreement = agreement;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public Date getDateReason() {
        return dateReason;
    }

    public void setDateReason(Date dateReason) {
        this.dateReason = dateReason;
    }

    public String getNumberReason() {
        return numberReason;
    }

    public void setNumberReason(String numberReason) {
        this.numberReason = numberReason;
    }

    public Double getSum() {
        return sum;
    }

    public void setSum(Double sum) {
        this.sum = sum;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
