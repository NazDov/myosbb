package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.DepartmentInput;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SubService;

import java.util.Date;

/**
 * Created by vostap on 11/16/2015.
 */
public class CalcInvoiceDetail {

    private long id;
    private int beginFactorIn;
    private int  endFactorIn;
    private double volumeOnCounterIn;
    private double volumeOnNormaIn;
    private long calcInvoiceID;
    private int  countDayByNorma;
    private double volumeOnChecker;
    private int countDayByChecker;
    private double volumeOnRepair;
    private int countDayByRepair;
    private Date dateBegin;
    private Date dateEnd;
    private SubService subService;
    private boolean returned;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getBeginFactorIn() {
        return beginFactorIn;
    }

    public void setBeginFactorIn(int beginFactorIn) {
        this.beginFactorIn = beginFactorIn;
    }

    public int getEndFactorIn() {
        return endFactorIn;
    }

    public void setEndFactorIn(int endFactorIn) {
        this.endFactorIn = endFactorIn;
    }

    public double getVolumeOnCounterIn() {
        return volumeOnCounterIn;
    }

    public void setVolumeOnCounterIn(double volumeOnCounterIn) {
        this.volumeOnCounterIn = volumeOnCounterIn;
    }

    public double getVolumeOnNormaIn() {
        return volumeOnNormaIn;
    }

    public void setVolumeOnNormaIn(double volumeOnNormaIn) {
        this.volumeOnNormaIn = volumeOnNormaIn;
    }

    public long getCalcInvoiceID() {
        return calcInvoiceID;
    }

    public void setCalcInvoiceID(long calcInvoiceID) {
        this.calcInvoiceID = calcInvoiceID;
    }

    public int getCountDayByNorma() {
        return countDayByNorma;
    }

    public void setCountDayByNorma(int countDayByNorma) {
        this.countDayByNorma = countDayByNorma;
    }

    public double getVolumeOnChecker() {
        return volumeOnChecker;
    }

    public void setVolumeOnChecker(double volumeOnChecker) {
        this.volumeOnChecker = volumeOnChecker;
    }

    public int getCountDayByChecker() {
        return countDayByChecker;
    }

    public void setCountDayByChecker(int countDayByChecker) {
        this.countDayByChecker = countDayByChecker;
    }

    public double getVolumeOnRepair() {
        return volumeOnRepair;
    }

    public void setVolumeOnRepair(double volumeOnRepair) {
        this.volumeOnRepair = volumeOnRepair;
    }

    public int getCountDayByRepair() {
        return countDayByRepair;
    }

    public void setCountDayByRepair(int countDayByRepair) {
        this.countDayByRepair = countDayByRepair;
    }

    public Date getDateBegin() {
        return dateBegin;
    }

    public void setDateBegin(Date dateBegin) {
        this.dateBegin = dateBegin;
    }

    public Date getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(Date dateEnd) {
        this.dateEnd = dateEnd;
    }


    public SubService getSubService() {
        return subService;
    }

    public void setSubService(SubService subService) {
        this.subService = subService;
    }

    public boolean isReturned() {
        return returned;
    }

    public void setReturned(boolean returned) {
        this.returned = returned;
    }
}
