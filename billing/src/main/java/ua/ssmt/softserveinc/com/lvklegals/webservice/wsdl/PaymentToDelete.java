
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for paymentToDelete complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="paymentToDelete">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="bank" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}bank" minOccurs="0"/>
 *         &lt;element name="bankAccount" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="contraAgent" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="correction" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}correction" minOccurs="0"/>
 *         &lt;element name="datePayment" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="edrpo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="isAutomated" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="numberDocPayment" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="ownerBankAccount" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}ownerBankAccount" minOccurs="0"/>
 *         &lt;element name="paymentType" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}paymentType" minOccurs="0"/>
 *         &lt;element name="reason" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="servicePayment" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}servicePayment" minOccurs="0"/>
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
@XmlType(name = "paymentToDelete", propOrder = {
    "agreement",
    "bank",
    "bankAccount",
    "contraAgent",
    "correction",
    "datePayment",
    "edrpo",
    "id",
    "isAutomated",
    "numberDocPayment",
    "ownerBankAccount",
    "paymentType",
    "reason",
    "servicePayment",
    "sumPayment"
})
public class PaymentToDelete {

    protected Agreement agreement;
    protected Bank bank;
    protected String bankAccount;
    protected ContraAgent contraAgent;
    protected Correction correction;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar datePayment;
    protected String edrpo;
    protected Long id;
    protected Integer isAutomated;
    protected String numberDocPayment;
    protected OwnerBankAccount ownerBankAccount;
    protected PaymentType paymentType;
    protected String reason;
    protected ServicePayment servicePayment;
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
     * Gets the value of the bank property.
     * 
     * @return
     *     possible object is
     *     {@link Bank }
     *     
     */
    public Bank getBank() {
        return bank;
    }

    /**
     * Sets the value of the bank property.
     * 
     * @param value
     *     allowed object is
     *     {@link Bank }
     *     
     */
    public void setBank(Bank value) {
        this.bank = value;
    }

    /**
     * Gets the value of the bankAccount property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBankAccount() {
        return bankAccount;
    }

    /**
     * Sets the value of the bankAccount property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBankAccount(String value) {
        this.bankAccount = value;
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
     * Gets the value of the correction property.
     * 
     * @return
     *     possible object is
     *     {@link Correction }
     *     
     */
    public Correction getCorrection() {
        return correction;
    }

    /**
     * Sets the value of the correction property.
     * 
     * @param value
     *     allowed object is
     *     {@link Correction }
     *     
     */
    public void setCorrection(Correction value) {
        this.correction = value;
    }

    /**
     * Gets the value of the datePayment property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDatePayment() {
        return datePayment;
    }

    /**
     * Sets the value of the datePayment property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDatePayment(XMLGregorianCalendar value) {
        this.datePayment = value;
    }

    /**
     * Gets the value of the edrpo property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEdrpo() {
        return edrpo;
    }

    /**
     * Sets the value of the edrpo property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEdrpo(String value) {
        this.edrpo = value;
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
     * Gets the value of the isAutomated property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getIsAutomated() {
        return isAutomated;
    }

    /**
     * Sets the value of the isAutomated property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setIsAutomated(Integer value) {
        this.isAutomated = value;
    }

    /**
     * Gets the value of the numberDocPayment property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNumberDocPayment() {
        return numberDocPayment;
    }

    /**
     * Sets the value of the numberDocPayment property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNumberDocPayment(String value) {
        this.numberDocPayment = value;
    }

    /**
     * Gets the value of the ownerBankAccount property.
     * 
     * @return
     *     possible object is
     *     {@link OwnerBankAccount }
     *     
     */
    public OwnerBankAccount getOwnerBankAccount() {
        return ownerBankAccount;
    }

    /**
     * Sets the value of the ownerBankAccount property.
     * 
     * @param value
     *     allowed object is
     *     {@link OwnerBankAccount }
     *     
     */
    public void setOwnerBankAccount(OwnerBankAccount value) {
        this.ownerBankAccount = value;
    }

    /**
     * Gets the value of the paymentType property.
     * 
     * @return
     *     possible object is
     *     {@link PaymentType }
     *     
     */
    public PaymentType getPaymentType() {
        return paymentType;
    }

    /**
     * Sets the value of the paymentType property.
     * 
     * @param value
     *     allowed object is
     *     {@link PaymentType }
     *     
     */
    public void setPaymentType(PaymentType value) {
        this.paymentType = value;
    }

    /**
     * Gets the value of the reason property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getReason() {
        return reason;
    }

    /**
     * Sets the value of the reason property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setReason(String value) {
        this.reason = value;
    }

    /**
     * Gets the value of the servicePayment property.
     * 
     * @return
     *     possible object is
     *     {@link ServicePayment }
     *     
     */
    public ServicePayment getServicePayment() {
        return servicePayment;
    }

    /**
     * Sets the value of the servicePayment property.
     * 
     * @param value
     *     allowed object is
     *     {@link ServicePayment }
     *     
     */
    public void setServicePayment(ServicePayment value) {
        this.servicePayment = value;
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
