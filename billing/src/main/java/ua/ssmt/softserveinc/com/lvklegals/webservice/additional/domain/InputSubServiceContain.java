package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import java.util.Date;

/**
 * Created by vostap on 12.11.2014.
 */
public class InputSubServiceContain {

    private Long id;
    private Boolean watterSupply;
    private Boolean watterOut;

    private Date period;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Boolean getWatterSupply() {
        return watterSupply;
    }

    public void setWatterSupply(Boolean watterSupply) {
        this.watterSupply = watterSupply;
    }
;
    public Boolean getWatterOut() {
        return watterOut;
    }

    public void setWatterOut(Boolean watterOut) {
        this.watterOut = watterOut;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }
}
