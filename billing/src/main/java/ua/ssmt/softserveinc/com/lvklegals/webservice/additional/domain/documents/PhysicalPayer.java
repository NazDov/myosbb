package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;

import java.util.Date;

/**
 * Created by vstoian on 24.11.2014.
 */
public class PhysicalPayer {

    private Long id;
    private Date period;
    private ContraAgent contraAgent;
    private Agreement agreement;
    private Double volumeVp;
    private Double volumeVv;
    private Double sumVp;
    private Double sumVv;
    private Double pilga;
    private Double subs;


    public PhysicalPayer(){
        this.contraAgent = new ContraAgent();
        this.agreement = new Agreement();

    }

    public PhysicalPayer(Long id) {
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

    public Double getVolumeVp() {
        return volumeVp;
    }

    public void setVolumeVp(Double volumeVp) {
        this.volumeVp = volumeVp;
    }

    public Double getVolumeVv() {
        return volumeVv;
    }

    public void setVolumeVv(Double volumeVv) {
        this.volumeVv = volumeVv;
    }

    public Double getSumVp() {
        return sumVp;
    }

    public void setSumVp(Double sumVp) {
        this.sumVp = sumVp;
    }

    public Double getSumVv() {
        return sumVv;
    }

    public void setSumVv(Double sumVv) {
        this.sumVv = sumVv;
    }

    public Double getPilga() {
        return pilga;
    }

    public void setPilga(Double pilga) {
        this.pilga = pilga;
    }

    public Double getSubs() {
        return subs;
    }

    public void setSubs(Double subs) {
        this.subs = subs;
    }
}
