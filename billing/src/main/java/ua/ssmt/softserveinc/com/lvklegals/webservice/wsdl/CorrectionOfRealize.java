
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for correctionOfRealize complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="correctionOfRealize">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="categoryOfTariff" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}categoryOfTariff" minOccurs="0"/>
 *         &lt;element name="contraAgent" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="dateTarif" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="depAgreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="department" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}department" minOccurs="0"/>
 *         &lt;element name="documentReasonDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="documentReasonNumber" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="input" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}input" minOccurs="0"/>
 *         &lt;element name="label" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="reason" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}correctionOfRealizeReason" minOccurs="0"/>
 *         &lt;element name="subServicevpID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="subServicevvID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="sumWaterSupply" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="sumWatterOut" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="sumbezpdvVP" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="sumbezpdvVV" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="sumpdv" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="tarifvp" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="tarifvv" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="typeCorrection" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}typeCorrection" minOccurs="0"/>
 *         &lt;element name="volumeWatterOut" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="volumeWatterSupply" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "correctionOfRealize", propOrder = {
    "agreement",
    "categoryOfTariff",
    "contraAgent",
    "dateTarif",
    "depAgreement",
    "department",
    "documentReasonDate",
    "documentReasonNumber",
    "id",
    "input",
    "label",
    "period",
    "reason",
    "subServicevpID",
    "subServicevvID",
    "sumWaterSupply",
    "sumWatterOut",
    "sumbezpdvVP",
    "sumbezpdvVV",
    "sumpdv",
    "tarifvp",
    "tarifvv",
    "typeCorrection",
    "volumeWatterOut",
    "volumeWatterSupply"
})
public class CorrectionOfRealize {

    protected Agreement agreement;
    protected CategoryOfTariff categoryOfTariff;
    protected ContraAgent contraAgent;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar dateTarif;
    protected Agreement depAgreement;
    protected Department department;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar documentReasonDate;
    protected String documentReasonNumber;
    protected Long id;
    protected Input input;
    protected String label;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    protected CorrectionOfRealizeReason reason;
    protected Long subServicevpID;
    protected Long subServicevvID;
    protected Double sumWaterSupply;
    protected Double sumWatterOut;
    protected Double sumbezpdvVP;
    protected Double sumbezpdvVV;
    protected Double sumpdv;
    protected Double tarifvp;
    protected Double tarifvv;
    protected TypeCorrection typeCorrection;
    protected Double volumeWatterOut;
    protected Double volumeWatterSupply;

    /**
     * Gets the value of the agreement property.
     * 
     * @return
     *     possible object is
     *     {@link Agreement }
     *     
     */
    public Agreement getAgreement() {
        return agreement;
    }

    /**
     * Sets the value of the agreement property.
     * 
     * @param value
     *     allowed object is
     *     {@link Agreement }
     *     
     */
    public void setAgreement(Agreement value) {
        this.agreement = value;
    }

    /**
     * Gets the value of the categoryOfTariff property.
     * 
     * @return
     *     possible object is
     *     {@link CategoryOfTariff }
     *     
     */
    public CategoryOfTariff getCategoryOfTariff() {
        return categoryOfTariff;
    }

    /**
     * Sets the value of the categoryOfTariff property.
     * 
     * @param value
     *     allowed object is
     *     {@link CategoryOfTariff }
     *     
     */
    public void setCategoryOfTariff(CategoryOfTariff value) {
        this.categoryOfTariff = value;
    }

    /**
     * Gets the value of the contraAgent property.
     * 
     * @return
     *     possible object is
     *     {@link ContraAgent }
     *     
     */
    public ContraAgent getContraAgent() {
        return contraAgent;
    }

    /**
     * Sets the value of the contraAgent property.
     * 
     * @param value
     *     allowed object is
     *     {@link ContraAgent }
     *     
     */
    public void setContraAgent(ContraAgent value) {
        this.contraAgent = value;
    }

    /**
     * Gets the value of the dateTarif property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDateTarif() {
        return dateTarif;
    }

    /**
     * Sets the value of the dateTarif property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDateTarif(XMLGregorianCalendar value) {
        this.dateTarif = value;
    }

    /**
     * Gets the value of the depAgreement property.
     * 
     * @return
     *     possible object is
     *     {@link Agreement }
     *     
     */
    public Agreement getDepAgreement() {
        return depAgreement;
    }

    /**
     * Sets the value of the depAgreement property.
     * 
     * @param value
     *     allowed object is
     *     {@link Agreement }
     *     
     */
    public void setDepAgreement(Agreement value) {
        this.depAgreement = value;
    }

    /**
     * Gets the value of the department property.
     * 
     * @return
     *     possible object is
     *     {@link Department }
     *     
     */
    public Department getDepartment() {
        return department;
    }

    /**
     * Sets the value of the department property.
     * 
     * @param value
     *     allowed object is
     *     {@link Department }
     *     
     */
    public void setDepartment(Department value) {
        this.department = value;
    }

    /**
     * Gets the value of the documentReasonDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDocumentReasonDate() {
        return documentReasonDate;
    }

    /**
     * Sets the value of the documentReasonDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDocumentReasonDate(XMLGregorianCalendar value) {
        this.documentReasonDate = value;
    }

    /**
     * Gets the value of the documentReasonNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDocumentReasonNumber() {
        return documentReasonNumber;
    }

    /**
     * Sets the value of the documentReasonNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDocumentReasonNumber(String value) {
        this.documentReasonNumber = value;
    }

    /**
     * Gets the value of the id property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getId() {
        return id;
    }

    /**
     * Sets the value of the id property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setId(Long value) {
        this.id = value;
    }

    /**
     * Gets the value of the input property.
     * 
     * @return
     *     possible object is
     *     {@link Input }
     *     
     */
    public Input getInput() {
        return input;
    }

    /**
     * Sets the value of the input property.
     * 
     * @param value
     *     allowed object is
     *     {@link Input }
     *     
     */
    public void setInput(Input value) {
        this.input = value;
    }

    /**
     * Gets the value of the label property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLabel() {
        return label;
    }

    /**
     * Sets the value of the label property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLabel(String value) {
        this.label = value;
    }

    /**
     * Gets the value of the period property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getPeriod() {
        return period;
    }

    /**
     * Sets the value of the period property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setPeriod(XMLGregorianCalendar value) {
        this.period = value;
    }

    /**
     * Gets the value of the reason property.
     * 
     * @return
     *     possible object is
     *     {@link CorrectionOfRealizeReason }
     *     
     */
    public CorrectionOfRealizeReason getReason() {
        return reason;
    }

    /**
     * Sets the value of the reason property.
     * 
     * @param value
     *     allowed object is
     *     {@link CorrectionOfRealizeReason }
     *     
     */
    public void setReason(CorrectionOfRealizeReason value) {
        this.reason = value;
    }

    /**
     * Gets the value of the subServicevpID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getSubServicevpID() {
        return subServicevpID;
    }

    /**
     * Sets the value of the subServicevpID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setSubServicevpID(Long value) {
        this.subServicevpID = value;
    }

    /**
     * Gets the value of the subServicevvID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getSubServicevvID() {
        return subServicevvID;
    }

    /**
     * Sets the value of the subServicevvID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setSubServicevvID(Long value) {
        this.subServicevvID = value;
    }

    /**
     * Gets the value of the sumWaterSupply property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSumWaterSupply() {
        return sumWaterSupply;
    }

    /**
     * Sets the value of the sumWaterSupply property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSumWaterSupply(Double value) {
        this.sumWaterSupply = value;
    }

    /**
     * Gets the value of the sumWatterOut property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSumWatterOut() {
        return sumWatterOut;
    }

    /**
     * Sets the value of the sumWatterOut property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSumWatterOut(Double value) {
        this.sumWatterOut = value;
    }

    /**
     * Gets the value of the sumbezpdvVP property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSumbezpdvVP() {
        return sumbezpdvVP;
    }

    /**
     * Sets the value of the sumbezpdvVP property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSumbezpdvVP(Double value) {
        this.sumbezpdvVP = value;
    }

    /**
     * Gets the value of the sumbezpdvVV property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSumbezpdvVV() {
        return sumbezpdvVV;
    }

    /**
     * Sets the value of the sumbezpdvVV property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSumbezpdvVV(Double value) {
        this.sumbezpdvVV = value;
    }

    /**
     * Gets the value of the sumpdv property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSumpdv() {
        return sumpdv;
    }

    /**
     * Sets the value of the sumpdv property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSumpdv(Double value) {
        this.sumpdv = value;
    }

    /**
     * Gets the value of the tarifvp property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getTarifvp() {
        return tarifvp;
    }

    /**
     * Sets the value of the tarifvp property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setTarifvp(Double value) {
        this.tarifvp = value;
    }

    /**
     * Gets the value of the tarifvv property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getTarifvv() {
        return tarifvv;
    }

    /**
     * Sets the value of the tarifvv property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setTarifvv(Double value) {
        this.tarifvv = value;
    }

    /**
     * Gets the value of the typeCorrection property.
     * 
     * @return
     *     possible object is
     *     {@link TypeCorrection }
     *     
     */
    public TypeCorrection getTypeCorrection() {
        return typeCorrection;
    }

    /**
     * Sets the value of the typeCorrection property.
     * 
     * @param value
     *     allowed object is
     *     {@link TypeCorrection }
     *     
     */
    public void setTypeCorrection(TypeCorrection value) {
        this.typeCorrection = value;
    }

    /**
     * Gets the value of the volumeWatterOut property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getVolumeWatterOut() {
        return volumeWatterOut;
    }

    /**
     * Sets the value of the volumeWatterOut property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setVolumeWatterOut(Double value) {
        this.volumeWatterOut = value;
    }

    /**
     * Gets the value of the volumeWatterSupply property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getVolumeWatterSupply() {
        return volumeWatterSupply;
    }

    /**
     * Sets the value of the volumeWatterSupply property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setVolumeWatterSupply(Double value) {
        this.volumeWatterSupply = value;
    }

}
