package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import java.util.Date;

/**
 * Created by vostap on 13.11.2014.
 */
public class InputProperty {
    private Long id;
    private Double norma;
    private Double koefWatterSupply;
    private Double koefWatterOut;
    private Date period;
    private Long departmentInputID;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getNorma() {
        return norma;
    }

    public void setNorma(Double norma) {
        this.norma = norma;
    }

    public Double getKoefWatterSupply() {
        return koefWatterSupply;
    }

    public void setKoefWatterSupply(Double koefWatterSupply) {
        this.koefWatterSupply = koefWatterSupply;
    }

    public Double getKoefWatterOut() {
        return koefWatterOut;
    }

    public void setKoefWatterOut(Double koefWatterOut) {
        this.koefWatterOut = koefWatterOut;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public Long getDepartmentInputID() {
        return departmentInputID;
    }

    public void setDepartmentInputID(Long departmentInputID) {
        this.departmentInputID = departmentInputID;
    }
}
