package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import java.util.Date;

/**
 * Created by vostap on 03.12.2014.
 */
public class CSCounterStatusHistory {
    /*
         reg.period,
	reg.OnDate,
	fac.BeginFactor,
	fac.EndFactor,
	fac.EndFactor - fac.BeginFactor,
	'REGISTER' as OperType
	,0 as correction
      */
    private Date period;
    private Date onDate;
    private Integer begingFactor;
    private Integer endFactor;
    private Integer volume;
    private String type;
    private Boolean isCorrect;

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public Date getOnDate() {
        return onDate;
    }

    public void setOnDate(Date onDate) {
        this.onDate = onDate;
    }

    public Integer getBegingFactor() {
        return begingFactor;
    }

    public void setBegingFactor(Integer begingFactor) {
        this.begingFactor = begingFactor;
    }

    public Integer getEndFactor() {
        return endFactor;
    }

    public void setEndFactor(Integer endFactor) {
        this.endFactor = endFactor;
    }

    public Integer getVolume() {
        return volume;
    }

    public void setVolume(Integer volume) {
        this.volume = volume;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Boolean getIsCorrect() {
        return isCorrect;
    }

    public void setIsCorrect(Boolean isCorrect) {
        this.isCorrect = isCorrect;
    }
}
