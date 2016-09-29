package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import java.util.Date;

/**
 * Created by ykhav on 09.02.15.
 */
public class Koef {
    private Long id;
    private Date period;
    private Double kofficient;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getKofficient() {
        return kofficient;
    }

    public void setKofficient(Double kofficient) {
        this.kofficient = kofficient;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    @Override
    public String toString() {
        return "TypeAreaKoef{" +
                "id=" + id +
                ", koeffcient=" + kofficient +
                '}';
    }
}
