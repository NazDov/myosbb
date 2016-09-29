
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for saldo complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="saldo">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="contraAgent" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="currentPeriod" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="detailses" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}saldoDetails" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="invoice" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="newPeriod" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="pdv" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="saldoGroup" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}saldoGroup" minOccurs="0"/>
 *         &lt;element name="saldoOnBegin" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="saldoOnEnd" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="sumPayment" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "saldo", propOrder = {
    "agreement",
    "contraAgent",
    "currentPeriod",
    "detailses",
    "id",
    "invoice",
    "newPeriod",
    "pdv",
    "period",
    "saldoGroup",
    "saldoOnBegin",
    "saldoOnEnd",
    "sumPayment"
})
public class Saldo {

    protected Agreement agreement;
    protected ContraAgent contraAgent;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar currentPeriod;
    protected SaldoDetails detailses;
    protected Long id;
    protected Double invoice;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar newPeriod;
    protected double pdv;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    protected SaldoGroup saldoGroup;
    protected Double saldoOnBegin;
    protected Double saldoOnEnd;
    protected Double sumPayment;

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
     * Gets the value of the currentPeriod property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getCurrentPeriod() {
        return currentPeriod;
    }

    /**
     * Sets the value of the currentPeriod property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setCurrentPeriod(XMLGregorianCalendar value) {
        this.currentPeriod = value;
    }

    /**
     * Gets the value of the detailses property.
     * 
     * @return
     *     possible object is
     *     {@link SaldoDetails }
     *     
     */
    public SaldoDetails getDetailses() {
        return detailses;
    }

    /**
     * Sets the value of the detailses property.
     * 
     * @param value
     *     allowed object is
     *     {@link SaldoDetails }
     *     
     */
    public void setDetailses(SaldoDetails value) {
        this.detailses = value;
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
     * Gets the value of the invoice property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getInvoice() {
        return invoice;
    }

    /**
     * Sets the value of the invoice property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setInvoice(Double value) {
        this.invoice = value;
    }

    /**
     * Gets the value of the newPeriod property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getNewPeriod() {
        return newPeriod;
    }

    /**
     * Sets the value of the newPeriod property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setNewPeriod(XMLGregorianCalendar value) {
        this.newPeriod = value;
    }

    /**
     * Gets the value of the pdv property.
     * 
     */
    public double getPdv() {
        return pdv;
    }

    /**
     * Sets the value of the pdv property.
     * 
     */
    public void setPdv(double value) {
        this.pdv = value;
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
     * Gets the value of the saldoGroup property.
     * 
     * @return
     *     possible object is
     *     {@link SaldoGroup }
     *     
     */
    public SaldoGroup getSaldoGroup() {
        return saldoGroup;
    }

    /**
     * Sets the value of the saldoGroup property.
     * 
     * @param value
     *     allowed object is
     *     {@link SaldoGroup }
     *     
     */
    public void setSaldoGroup(SaldoGroup value) {
        this.saldoGroup = value;
    }

    /**
     * Gets the value of the saldoOnBegin property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSaldoOnBegin() {
        return saldoOnBegin;
    }

    /**
     * Sets the value of the saldoOnBegin property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSaldoOnBegin(Double value) {
        this.saldoOnBegin = value;
    }

    /**
     * Gets the value of the saldoOnEnd property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSaldoOnEnd() {
        return saldoOnEnd;
    }

    /**
     * Sets the value of the saldoOnEnd property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSaldoOnEnd(Double value) {
        this.saldoOnEnd = value;
    }

    /**
     * Gets the value of the sumPayment property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSumPayment() {
        return sumPayment;
    }

    /**
     * Sets the value of the sumPayment property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSumPayment(Double value) {
        this.sumPayment = value;
    }

}
