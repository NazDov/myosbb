
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.*;
import javax.xml.datatype.XMLGregorianCalendar;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>Java class for correction complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="correction">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreementDepOne" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="agreementDepTwo" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="contraAgentOne" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="contraAgentTwo" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="dateCorrection" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="departmentOne" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}department" minOccurs="0"/>
 *         &lt;element name="departmentTwo" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}department" minOccurs="0"/>
 *         &lt;element name="docNumberOne" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="docNumberTwo" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="internalTurnOver" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}internalTurnOver" minOccurs="0"/>
 *         &lt;element name="notes" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="paymentType" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}paymentType" minOccurs="0"/>
 *         &lt;element name="payments" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}payment" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="servicePayment" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}servicePayment" minOccurs="0"/>
 *         &lt;element name="servicePaymentsecond" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}servicePayment" minOccurs="0"/>
 *         &lt;element name="sumCorrection" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "correction", propOrder = {
    "agreementDepOne",
    "agreementDepTwo",
    "contraAgentOne",
    "contraAgentTwo",
    "dateCorrection",
    "departmentOne",
    "departmentTwo",
    "docNumberOne",
    "docNumberTwo",
    "id",
    "internalTurnOver",
    "notes",
    "paymentType",
    "payments",
    "period",
    "servicePayment",
    "servicePaymentsecond",
    "sumCorrection"
})
public class Correction {

    protected Agreement agreementDepOne;
    protected Agreement agreementDepTwo;
    protected ContraAgent contraAgentOne;
    protected ContraAgent contraAgentTwo;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar dateCorrection;
    protected Department departmentOne;
    protected Department departmentTwo;
    protected Agreement docNumberOne;
    protected Agreement docNumberTwo;
    protected Long id;
    protected InternalTurnOver internalTurnOver;
    protected String notes;
    protected PaymentType paymentType;
    @XmlElement(nillable = true)
    protected List<Payment> payments;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    protected ServicePayment servicePayment;
    protected ServicePayment servicePaymentsecond;
    protected Double sumCorrection;

    /**
     * Gets the value of the agreementDepOne property.
     * 
     * @return
     *     possible object is
     *     {@link Agreement }
     *     
     */
    public Agreement getAgreementDepOne() {
        return agreementDepOne;
    }

    /**
     * Sets the value of the agreementDepOne property.
     * 
     * @param value
     *     allowed object is
     *     {@link Agreement }
     *     
     */
    public void setAgreementDepOne(Agreement value) {
        this.agreementDepOne = value;
    }

    /**
     * Gets the value of the agreementDepTwo property.
     * 
     * @return
     *     possible object is
     *     {@link Agreement }
     *     
     */
    public Agreement getAgreementDepTwo() {
        return agreementDepTwo;
    }

    /**
     * Sets the value of the agreementDepTwo property.
     * 
     * @param value
     *     allowed object is
     *     {@link Agreement }
     *     
     */
    public void setAgreementDepTwo(Agreement value) {
        this.agreementDepTwo = value;
    }

    /**
     * Gets the value of the contraAgentOne property.
     * 
     * @return
     *     possible object is
     *     {@link ContraAgent }
     *     
     */
    public ContraAgent getContraAgentOne() {
        return contraAgentOne;
    }

    /**
     * Sets the value of the contraAgentOne property.
     * 
     * @param value
     *     allowed object is
     *     {@link ContraAgent }
     *     
     */
    public void setContraAgentOne(ContraAgent value) {
        this.contraAgentOne = value;
    }

    /**
     * Gets the value of the contraAgentTwo property.
     * 
     * @return
     *     possible object is
     *     {@link ContraAgent }
     *     
     */
    public ContraAgent getContraAgentTwo() {
        return contraAgentTwo;
    }

    /**
     * Sets the value of the contraAgentTwo property.
     * 
     * @param value
     *     allowed object is
     *     {@link ContraAgent }
     *     
     */
    public void setContraAgentTwo(ContraAgent value) {
        this.contraAgentTwo = value;
    }

    /**
     * Gets the value of the dateCorrection property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDateCorrection() {
        return dateCorrection;
    }

    /**
     * Sets the value of the dateCorrection property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDateCorrection(XMLGregorianCalendar value) {
        this.dateCorrection = value;
    }

    /**
     * Gets the value of the departmentOne property.
     * 
     * @return
     *     possible object is
     *     {@link Department }
     *     
     */
    public Department getDepartmentOne() {
        return departmentOne;
    }

    /**
     * Sets the value of the departmentOne property.
     * 
     * @param value
     *     allowed object is
     *     {@link Department }
     *     
     */
    public void setDepartmentOne(Department value) {
        this.departmentOne = value;
    }

    /**
     * Gets the value of the departmentTwo property.
     * 
     * @return
     *     possible object is
     *     {@link Department }
     *     
     */
    public Department getDepartmentTwo() {
        return departmentTwo;
    }

    /**
     * Sets the value of the departmentTwo property.
     * 
     * @param value
     *     allowed object is
     *     {@link Department }
     *     
     */
    public void setDepartmentTwo(Department value) {
        this.departmentTwo = value;
    }

    /**
     * Gets the value of the docNumberOne property.
     * 
     * @return
     *     possible object is
     *     {@link Agreement }
     *     
     */
    public Agreement getDocNumberOne() {
        return docNumberOne;
    }

    /**
     * Sets the value of the docNumberOne property.
     * 
     * @param value
     *     allowed object is
     *     {@link Agreement }
     *     
     */
    public void setDocNumberOne(Agreement value) {
        this.docNumberOne = value;
    }

    /**
     * Gets the value of the docNumberTwo property.
     * 
     * @return
     *     possible object is
     *     {@link Agreement }
     *     
     */
    public Agreement getDocNumberTwo() {
        return docNumberTwo;
    }

    /**
     * Sets the value of the docNumberTwo property.
     * 
     * @param value
     *     allowed object is
     *     {@link Agreement }
     *     
     */
    public void setDocNumberTwo(Agreement value) {
        this.docNumberTwo = value;
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
     * Gets the value of the internalTurnOver property.
     * 
     * @return
     *     possible object is
     *     {@link InternalTurnOver }
     *     
     */
    public InternalTurnOver getInternalTurnOver() {
        return internalTurnOver;
    }

    /**
     * Sets the value of the internalTurnOver property.
     * 
     * @param value
     *     allowed object is
     *     {@link InternalTurnOver }
     *     
     */
    public void setInternalTurnOver(InternalTurnOver value) {
        this.internalTurnOver = value;
    }

    /**
     * Gets the value of the notes property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNotes() {
        return notes;
    }

    /**
     * Sets the value of the notes property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNotes(String value) {
        this.notes = value;
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
     * Gets the value of the payments property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the payments property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getPayments().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Payment }
     * 
     * 
     */
    public List<Payment> getPayments() {
        if (payments == null) {
            payments = new ArrayList<Payment>();
        }
        return this.payments;
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
     * Gets the value of the servicePaymentsecond property.
     * 
     * @return
     *     possible object is
     *     {@link ServicePayment }
     *     
     */
    public ServicePayment getServicePaymentsecond() {
        return servicePaymentsecond;
    }

    /**
     * Sets the value of the servicePaymentsecond property.
     * 
     * @param value
     *     allowed object is
     *     {@link ServicePayment }
     *     
     */
    public void setServicePaymentsecond(ServicePayment value) {
        this.servicePaymentsecond = value;
    }

    /**
     * Gets the value of the sumCorrection property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSumCorrection() {
        return sumCorrection;
    }

    /**
     * Sets the value of the sumCorrection property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSumCorrection(Double value) {
        this.sumCorrection = value;
    }

}
