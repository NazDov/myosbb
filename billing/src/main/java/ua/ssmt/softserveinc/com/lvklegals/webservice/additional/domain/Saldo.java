package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 6/7/2015.
 */
public class Saldo  {
    private Long id;
    private ContraAgent contraAgent;
    private Agreement agreement;
    private Double saldoOnBegin;
    private Double saldoOnEnd;
    private Date period;
    private SaldoGroup saldoGroup;
    private Double invoice;
    private Double sumPayment;
    private SaldoDetails detailses;
    private double pdv;

    private Date currentPeriod;
    private Date newPeriod;

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

    public Double getSaldoOnBegin() {
        return saldoOnBegin;
    }

    public void setSaldoOnBegin(Double saldoOnBegin) {
        this.saldoOnBegin = saldoOnBegin;
    }

    public Double getSaldoOnEnd() {
        return saldoOnEnd;
    }

    public void setSaldoOnEnd(Double saldoOnEnd) {
        this.saldoOnEnd = saldoOnEnd;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public Double getInvoice() {
        return invoice;
    }

    public void setInvoice(Double invoice) {
        this.invoice = invoice;
    }

    public Double getSumPayment() {
        return sumPayment;
    }

    public void setSumPayment(Double sumPayment) {
        this.sumPayment = sumPayment;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public SaldoGroup getSaldoGroup() {
        return saldoGroup;
    }

    public void setSaldoGroup(SaldoGroup saldoGroup) {
        this.saldoGroup = saldoGroup;
    }


    public SaldoDetails getDetailses() {
        return detailses;
    }

    public void setDetailses(SaldoDetails detailses) {
        this.detailses = detailses;
    }

    public Date getCurrentPeriod() {
        return currentPeriod;
    }

    public void setCurrentPeriod(Date currentPeriod) {
        this.currentPeriod = currentPeriod;
    }

    public Date getNewPeriod() {
        return newPeriod;
    }

    public void setNewPeriod(Date newPeriod) {
        this.newPeriod = newPeriod;
    }

    public double getPdv() {
        return pdv;
    }

    public void setPdv(double pdv) {
        this.pdv = pdv;
    }
}
