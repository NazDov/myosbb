package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.InputFactor;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices.DepartmentInputInvoice;

import java.sql.Connection;

/**
 * Created by vostap on 12.12.2014.
 */
public class InvoiceTransfer {
    private Connection connection;
    private Double sum;
    private Tariff tariff;
    private SubService subService;
    private DepartmentInputInvoice departmentInput;
    private InputFactor factor;
    private Service service;
    private Counter counter;
    private RegisterOfCounter registerOfCounter;
    private Input input;
    private Double addingByConsumingVolume;
    private Double norma;
    private double koefWatterOut;
    private double koefWatterSupply;
    private boolean returned;

    private InputFactor invoice;

    private Long  tarifCategotyID;
    private Long  contrAgentAgreementID;
    private Long  departamentAgreementID;
    private Integer TotalVolumeCounterByMonth = 0;
    private Integer countDayOnNorma = 0;
    private Integer volumeOnRepair = 0;
    private Integer volumeCorrectionDonarach = 0;

    public Double getKoefWatterOut() {
        return koefWatterOut;
    }

    public void setKoefWatterOut(Double koefWatterOut) {
        this.koefWatterOut = koefWatterOut;
    }

    public Connection getConnection() {
        return connection;
    }

    public void setConnection(Connection connection) {
        this.connection = connection;
    }

    public Double getSum() {
        return sum;
    }

    public void setSum(Double sum) {
        this.sum = sum;
    }

    public Tariff getTariff() {
        return tariff;
    }

    public void setTariff(Tariff tariff) {
        this.tariff = tariff;
    }

    public SubService getSubService() {
        return subService;
    }

    public void setSubService(SubService subService) {
        this.subService = subService;
    }

    public InputFactor getFactor() {
        return factor;
    }

    public void setFactor(InputFactor factor) {
        this.factor = factor;
    }

    public DepartmentInputInvoice getDepartmentInput() {
        return departmentInput;
    }

    public void setDepartmentInput(DepartmentInputInvoice departmentInput) {
        this.departmentInput = departmentInput;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public Counter getCounter() {
        return counter;
    }

    public void setCounter(Counter counter) {
        this.counter = counter;
    }

    public RegisterOfCounter getRegisterOfCounter() {
        return registerOfCounter;
    }

    public void setRegisterOfCounter(RegisterOfCounter registerOfCounter) {
        this.registerOfCounter = registerOfCounter;
    }

    public Input getInput() {
        return input;
    }

    public void setInput(Input input) {
        this.input = input;
    }

    public Double getAddingByConsumingVolume() {
        return addingByConsumingVolume;
    }

    public void setAddingByConsumingVolume(Double addingByConsumingVolume) {
        this.addingByConsumingVolume = addingByConsumingVolume;
    }

    public void setKoefWatterOut(double koefWatterOut) {
        this.koefWatterOut = koefWatterOut;
    }

    public double getKoefWatterSupply() {
        return koefWatterSupply;
    }

    public void setKoefWatterSupply(double koefWatterSupply) {
        this.koefWatterSupply = koefWatterSupply;
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

    public Integer getTotalVolumeCounterByMonth() {
        return TotalVolumeCounterByMonth;
    }

    public void setTotalVolumeCounterByMonth(Integer totalVolumeCounterByMonth) {
        TotalVolumeCounterByMonth = totalVolumeCounterByMonth;
    }

    public Integer getCountDayOnNorma() {
        return countDayOnNorma;
    }

    public void setCountDayOnNorma(Integer countDayOnNorma) {
        this.countDayOnNorma = countDayOnNorma;
    }

    public Integer getVolumeOnRepair() {
        return volumeOnRepair;
    }

    public void setVolumeOnRepair(Integer volumeOnRepair) {
        this.volumeOnRepair = volumeOnRepair;
    }

    public Integer getVolumeCorrectionDonarach() {
        return volumeCorrectionDonarach;
    }

    public void setVolumeCorrectionDonarach(Integer volumeCorrectionDonarach) {
        this.volumeCorrectionDonarach = volumeCorrectionDonarach;
    }

    public Double getNorma() {
        return norma;
    }

    public void setNorma(Double norma) {
        this.norma = norma;
    }

    public InputFactor getInvoice() {
        return invoice;
    }

    public void setInvoice(InputFactor invoice) {
        this.invoice = invoice;
    }

    public boolean isReturned() {
        return returned;
    }

    public void setReturned(boolean returned) {
        this.returned = returned;
    }
}
