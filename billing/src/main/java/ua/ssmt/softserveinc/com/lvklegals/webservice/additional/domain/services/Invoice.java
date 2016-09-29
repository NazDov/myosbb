package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services;

/**
 * Created by vostap on 26.09.2014.
 */
public class Invoice {
    private Long id;
    private Long counterID;
    private Long tariffID;
    private Double totalInvoice;
    private Long subServiceID;
    private Double currentTariff;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCounterID() {
        return counterID;
    }

    public void setCounterID(Long counterID) {
        this.counterID = counterID;
    }

    public Long getTariffID() {
        return tariffID;
    }

    public void setTariffID(Long tariffID) {
        this.tariffID = tariffID;
    }

    public Double getTotalInvoice() {
        return totalInvoice;
    }

    public void setTotalInvoice(Double totalInvoice) {
        this.totalInvoice = totalInvoice;
    }

    public Long getSubServiceID() {
        return subServiceID;
    }

    public void setSubServiceID(Long subServiceID) {
        this.subServiceID = subServiceID;
    }

    public Double getCurrentTariff() {
        return currentTariff;
    }

    public void setCurrentTariff(Double currentTariff) {
        this.currentTariff = currentTariff;
    }
    @Override
    public String toString(){
        StringBuilder sb = new StringBuilder();
        sb.append("----------------------------------------------\n");
        sb.append("counterID = "+this.counterID+"\n");
        sb.append("tariffID = "+this.tariffID+"\n");
        sb.append("totalInvoice = "+this.totalInvoice+"\n");
        sb.append("subServiceID = "+this.subServiceID+"\n");
        sb.append("currentTariff = "+this.tariffID+"\n");
        sb.append("----------------------------------------------\n");
        return sb.toString();
    }
}
