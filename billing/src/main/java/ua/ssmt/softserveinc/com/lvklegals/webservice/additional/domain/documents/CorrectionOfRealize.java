package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;

import java.util.Date;

/**
 * Created by vostap on 22.10.2014.
 */
public class CorrectionOfRealize  {
    private Long id;
    private ContraAgent contraAgent;
    private Department department;
    private Input input;
    private Double volumeWatterSupply;
    private Double volumeWatterOut;
    private Double sumWaterSupply=0.00;
    private Double sumWatterOut = 0.00;
    private String label;
    private CorrectionOfRealizeReason reason;
    private Date documentReasonDate;
    private String documentReasonNumber;
    private Agreement agreement;
    private Agreement depAgreement;
    private TypeCorrection typeCorrection;
    private CategoryOfTariff categoryOfTariff;
    private Date period;
    private Date dateTarif;
    private Long subServicevvID;
    private Long subServicevpID;
    private Double tarifvv;
    private Double tarifvp;
    private Double sumbezpdvVV;
    private Double sumbezpdvVP;
    private Double sumpdv;


    public CorrectionOfRealize(){
        this.contraAgent = new ContraAgent();
        this.department = new Department();
        this.input = new Input();
        this.reason = new CorrectionOfRealizeReason();
        this.agreement= new Agreement();
        this.depAgreement = new Agreement();
        this.typeCorrection = new TypeCorrection();
        this.categoryOfTariff = new CategoryOfTariff();

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

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Input getInput() {
        return input;
    }

    public void setInput(Input input) {
        this.input = input;
    }

    public Double getVolumeWatterSupply() {
        return volumeWatterSupply;
    }

    public void setVolumeWatterSupply(Double volumeWatterSupply) {
        this.volumeWatterSupply = volumeWatterSupply;
    }

    public Double getVolumeWatterOut() {
        return volumeWatterOut;
    }

    public void setVolumeWatterOut(Double volumeWatterOut) {
        this.volumeWatterOut = volumeWatterOut;
    }

    public Double getSumWatterOut() {
        return sumWatterOut;
    }

    public void setSumWatterOut(Double sumWatterOut) {
        this.sumWatterOut = sumWatterOut;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public CorrectionOfRealizeReason getReason() {
        return reason;
    }

    public void setReason(CorrectionOfRealizeReason reason) {
        this.reason = reason;
    }

    public Date getDocumentReasonDate() {
        return documentReasonDate;
    }

    public void setDocumentReasonDate(Date documentReasonDate) {
        this.documentReasonDate = documentReasonDate;
    }

    public String getDocumentReasonNumber() {
        return documentReasonNumber;
    }

    public void setDocumentReasonNumber(String documentReasonNumber) {
        this.documentReasonNumber = documentReasonNumber;
    }

    public Agreement getAgreement() {
        return agreement;
    }

    public void setAgreement(Agreement agreement) {
        this.agreement = agreement;
    }

    public TypeCorrection getTypeCorrection() {
        return typeCorrection;
    }

    public void setTypeCorrection(TypeCorrection typeCorrection) {
        this.typeCorrection = typeCorrection;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public CategoryOfTariff getCategoryOfTariff() {
        return categoryOfTariff;
    }

    public void setCategoryOfTariff(CategoryOfTariff categoryOfTariff) {
        this.categoryOfTariff = categoryOfTariff;
    }

    public Date getDateTarif() {
        return dateTarif;
    }

    public void setDateTarif(Date dateTarif) {
        this.dateTarif = dateTarif;
    }

    public Long getSubServicevvID() {
        return subServicevvID;
    }

    public void setSubServicevvID(Long subServicevvID) {
        this.subServicevvID = subServicevvID;
    }

    public Long getSubServicevpID() {
        return subServicevpID;
    }

    public void setSubServicevpID(Long subServicevpID) {
        this.subServicevpID = subServicevpID;
    }

    public Double getTarifvv() {
        return tarifvv;
    }

    public void setTarifvv(Double tarifvv) {
        this.tarifvv = tarifvv;
    }

    public Double getTarifvp() {
        return tarifvp;
    }

    public void setTarifvp(Double tarifvp) {
        this.tarifvp = tarifvp;
    }

    public Double getSumbezpdvVV() {
        return sumbezpdvVV;
    }

    public void setSumbezpdvVV(Double sumbezpdvVV) {
        this.sumbezpdvVV = sumbezpdvVV;
    }

    public Double getSumbezpdvVP() {
        return sumbezpdvVP;
    }

    public void setSumbezpdvVP(Double sumbezpdvVP) {
        this.sumbezpdvVP = sumbezpdvVP;
    }

    public Double getSumpdv() {
        return sumpdv;
    }

    public void setSumpdv(Double sumpdv) {
        this.sumpdv = sumpdv;
    }

    public Agreement getDepAgreement() {
        return depAgreement;
    }

    public void setDepAgreement(Agreement depAgreement) {
        this.depAgreement = depAgreement;
    }

    public Double getSumWaterSupply() {
        return sumWaterSupply;
    }

    public void setSumWaterSupply(Double sumWaterSupply) {
        this.sumWaterSupply = sumWaterSupply;
    }
}
