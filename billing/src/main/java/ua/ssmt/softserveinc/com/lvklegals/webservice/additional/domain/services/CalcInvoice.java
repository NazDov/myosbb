package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 10.12.2014.
 */
public class CalcInvoice {
    //volumeOnNorma
    //volumeOnCheckers
    private Long id;
    private ContraAgent contraAgent = new ContraAgent();
    private DepartmentInput departmentInput = new DepartmentInput();
    private int factorOnBeginMonth =0;
    private int factorOnEndMonth=0;
    private int volumeOnCounter=0;
    private int realConsume=0;
    private double volumeOnNorma=0.0;
    private double countDayByCheckers=0;
    private double volumeOnCheckers=0;
    private double countDayOnRepair=0;
    private double volumeAddingConsume=0;
    private int volumeCorrectionCounter=0;
    private double volumeAddingCapacityInput=0;
    private double volumeTotal=0;
    private double coefWatterSupply=0.0;
    private double coefTarrifWatterOut=0.0;
    private double tariff=0.0;
    private double sum = 0.0;
    private Date period;
    private SubService subService = new SubService();
    private boolean returned;
    private double volumeTotalWithCoef = 0;

    private Long  tarifCategotyID;
    private Long  contrAgentAgreementID;
    private Long  departamentAgreementID;
    private int TotalVolumeCounterByMonth;
    private int countDayOnNorma;
    private int volumeOnRepair;
    private int volumeCorrectionDonarach;
    private boolean load = true;


    private List<CalcInvoiceDetail> detailses;

    public CalcInvoice(){
        this.detailses = new ArrayList<>();
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

    public DepartmentInput getDepartmentInput() {
        return departmentInput;
    }

    public void setDepartmentInput(DepartmentInput departmentInput) {
        this.departmentInput = departmentInput;
    }

    public int getFactorOnBeginMonth() {
        return factorOnBeginMonth;
    }

    public void setFactorOnBeginMonth(int factorOnBeginMonth) {
        this.factorOnBeginMonth = factorOnBeginMonth;
    }

    public int getFactorOnEndMonth() {
        return factorOnEndMonth;
    }

    public void setFactorOnEndMonth(int factorOnEndMonth) {
        this.factorOnEndMonth = factorOnEndMonth;
    }

    public int getVolumeOnCounter() {
        return volumeOnCounter;
    }

    public void setVolumeOnCounter(int volumeOnCounter) {
        this.volumeOnCounter = volumeOnCounter;
    }

    public int getRealConsume() {
        return realConsume;
    }

    public void setRealConsume(int realConsume) {
        this.realConsume = realConsume;
    }

    public double getVolumeOnNorma() {
        return volumeOnNorma;
    }

    public void setVolumeOnNorma(double volumeOnNorma) {
        this.volumeOnNorma = volumeOnNorma;
    }

    public double getCountDayByCheckers() {
        return countDayByCheckers;
    }

    public void setCountDayByCheckers(double countDayByCheckers) {
        this.countDayByCheckers = countDayByCheckers;
    }

    public double getVolumeOnCheckers() {
        return volumeOnCheckers;
    }

    public void setVolumeOnCheckers(double volumeOnCheckers) {
        this.volumeOnCheckers = volumeOnCheckers;
    }

    public double getCountDayOnRepair() {
        return countDayOnRepair;
    }

    public void setCountDayOnRepair(double countDayOnRepair) {
        this.countDayOnRepair = countDayOnRepair;
    }

    public double getVolumeAddingConsume() {
        return volumeAddingConsume;
    }

    public void setVolumeAddingConsume(double volumeAddingConsume) {
        this.volumeAddingConsume = volumeAddingConsume;
    }

    public int getVolumeCorrectionCounter() {
        return volumeCorrectionCounter;
    }

    public void setVolumeCorrectionCounter(int volumeCorrectionCounter) {
        this.volumeCorrectionCounter = volumeCorrectionCounter;
    }

    public double getVolumeAddingCapacityInput() {
        return volumeAddingCapacityInput;
    }

    public void setVolumeAddingCapacityInput(double volumeAddingCapacityInput) {
        this.volumeAddingCapacityInput = volumeAddingCapacityInput;
    }

    public double getVolumeTotal() {
        return volumeTotal;
    }

    public void setVolumeTotal(double volumeTotal) {
        this.volumeTotal = volumeTotal;
    }

    public double getCoefWatterSupply() {
        return coefWatterSupply;
    }

    public void setCoefWatterSupply(double coefWatterSupply) {
        this.coefWatterSupply = coefWatterSupply;
    }

    public double getCoefTarrifWatterOut() {
        return coefTarrifWatterOut;
    }

    public void setCoefTarrifWatterOut(double coefTarrifWatterOut) {
        this.coefTarrifWatterOut = coefTarrifWatterOut;
    }

    public double getTariff() {
        return tariff;
    }

    public void setTariff(double tariff) {
        this.tariff = tariff;
    }

    public double getSum() {
        return sum;
    }

    public void setSum(double sum) {
        this.sum = sum;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
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

    public double getVolumeTotalWithCoef() {
        return volumeTotalWithCoef;
    }

    public void setVolumeTotalWithCoef(double volumeTotalWithCoef) {
        this.volumeTotalWithCoef = volumeTotalWithCoef;
    }

    public Long getTarifCategotyID() {
        return tarifCategotyID;
    }

    public void setTarifCategotyID(Long tarifCategotyID) {
        this.tarifCategotyID = tarifCategotyID;
    }

    public Long getContrAgentAgreementID() {
        return contrAgentAgreementID;
    }

    public void setContrAgentAgreementID(Long contrAgentAgreementID) {
        this.contrAgentAgreementID = contrAgentAgreementID;
    }

    public Long getDepartamentAgreementID() {
        return departamentAgreementID;
    }

    public void setDepartamentAgreementID(Long departamentAgreementID) {
        this.departamentAgreementID = departamentAgreementID;
    }

    public int getTotalVolumeCounterByMonth() {
        return TotalVolumeCounterByMonth;
    }

    public void setTotalVolumeCounterByMonth(int totalVolumeCounterByMonth) {
        TotalVolumeCounterByMonth = totalVolumeCounterByMonth;
    }

    public int getCountDayOnNorma() {
        return countDayOnNorma;
    }

    public void setCountDayOnNorma(int countDayOnNorma) {
        this.countDayOnNorma = countDayOnNorma;
    }

    public int getVolumeOnRepair() {
        return volumeOnRepair;
    }

    public void setVolumeOnRepair(int volumeOnRepair) {
        this.volumeOnRepair = volumeOnRepair;
    }

    public int getVolumeCorrectionDonarach() {
        return volumeCorrectionDonarach;
    }

    public void setVolumeCorrectionDonarach(int volumeCorrectionDonarach) {
        this.volumeCorrectionDonarach = volumeCorrectionDonarach;
    }

    public List<CalcInvoiceDetail> getDetailses() {
        return detailses;
    }

    public void setDetailses(List<CalcInvoiceDetail> detailses) {
        this.detailses = detailses;
    }


    public boolean isLoad() {
        return load;
    }

    public void setLoad(boolean load) {
        this.load = load;
    }
}
