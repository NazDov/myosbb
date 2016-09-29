package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import java.util.Date;

/**
 * Created by vostap on 22.09.2014.
 */
public class DiscountRateNBU {
    private Long id;
    private Double discountRate;
    private Date period;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getDiscountRate() {
        return discountRate;
    }

    public void setDiscountRate(Double discountRate) {
        this.discountRate = discountRate;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    @Override
    public String toString() {
        return "DiscountRateNBU{" +
                "id=" + id +
                ", discountRate='" + discountRate + '\'' +
                '}';
    }
}
