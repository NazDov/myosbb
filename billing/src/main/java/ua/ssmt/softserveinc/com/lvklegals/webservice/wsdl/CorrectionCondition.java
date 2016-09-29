
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for correctionCondition complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="correctionCondition">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreementDepartmentID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="agreementDepartmentID2" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="contraAgent1ID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="contraAgent2ID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="dateEnd" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="dateStart" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="departmentID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="docNumber1ID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="docNumber2ID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="note" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="paymentTypeID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="servicePaymentID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="sumCorrection" type="{http://www.w3.org/2001/XMLSchema}float" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "correctionCondition", propOrder = {
    "agreementDepartmentID",
    "agreementDepartmentID2",
    "contraAgent1ID",
    "contraAgent2ID",
    "dateEnd",
    "dateStart",
    "departmentID",
    "docNumber1ID",
    "docNumber2ID",
    "id",
    "note",
    "paymentTypeID",
    "servicePaymentID",
    "sumCorrection"
})
public class CorrectionCondition {

    protected Long agreementDepartmentID;
    protected Long agreementDepartmentID2;
    protected Long contraAgent1ID;
    protected Long contraAgent2ID;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar dateEnd;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar dateStart;
    protected Long departmentID;
    protected Long docNumber1ID;
    protected Long docNumber2ID;
    protected Long id;
    protected String note;
    protected Long paymentTypeID;
    protected Long servicePaymentID;
    protected Float sumCorrection;

    /**
     * Gets the value of the agreementDepartmentID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getAgreementDepartmentID() {
        return agreementDepartmentID;
    }

    /**
     * Sets the value of the agreementDepartmentID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setAgreementDepartmentID(Long value) {
        this.agreementDepartmentID = value;
    }

    /**
     * Gets the value of the agreementDepartmentID2 property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getAgreementDepartmentID2() {
        return agreementDepartmentID2;
    }

    /**
     * Sets the value of the agreementDepartmentID2 property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setAgreementDepartmentID2(Long value) {
        this.agreementDepartmentID2 = value;
    }

    /**
     * Gets the value of the contraAgent1ID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getContraAgent1ID() {
        return contraAgent1ID;
    }

    /**
     * Sets the value of the contraAgent1ID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setContraAgent1ID(Long value) {
        this.contraAgent1ID = value;
    }

    /**
     * Gets the value of the contraAgent2ID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getContraAgent2ID() {
        return contraAgent2ID;
    }

    /**
     * Sets the value of the contraAgent2ID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setContraAgent2ID(Long value) {
        this.contraAgent2ID = value;
    }

    /**
     * Gets the value of the dateEnd property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDateEnd() {
        return dateEnd;
    }

    /**
     * Sets the value of the dateEnd property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDateEnd(XMLGregorianCalendar value) {
        this.dateEnd = value;
    }

    /**
     * Gets the value of the dateStart property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDateStart() {
        return dateStart;
    }

    /**
     * Sets the value of the dateStart property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDateStart(XMLGregorianCalendar value) {
        this.dateStart = value;
    }

    /**
     * Gets the value of the departmentID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getDepartmentID() {
        return departmentID;
    }

    /**
     * Sets the value of the departmentID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setDepartmentID(Long value) {
        this.departmentID = value;
    }

    /**
     * Gets the value of the docNumber1ID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getDocNumber1ID() {
        return docNumber1ID;
    }

    /**
     * Sets the value of the docNumber1ID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setDocNumber1ID(Long value) {
        this.docNumber1ID = value;
    }

    /**
     * Gets the value of the docNumber2ID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getDocNumber2ID() {
        return docNumber2ID;
    }

    /**
     * Sets the value of the docNumber2ID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setDocNumber2ID(Long value) {
        this.docNumber2ID = value;
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
     * Gets the value of the note property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getNote() {
        return note;
    }

    /**
     * Sets the value of the note property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setNote(String value) {
        this.note = value;
    }

    /**
     * Gets the value of the paymentTypeID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getPaymentTypeID() {
        return paymentTypeID;
    }

    /**
     * Sets the value of the paymentTypeID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setPaymentTypeID(Long value) {
        this.paymentTypeID = value;
    }

    /**
     * Gets the value of the servicePaymentID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getServicePaymentID() {
        return servicePaymentID;
    }

    /**
     * Sets the value of the servicePaymentID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setServicePaymentID(Long value) {
        this.servicePaymentID = value;
    }

    /**
     * Gets the value of the sumCorrection property.
     * 
     * @return
     *     possible object is
     *     {@link Float }
     *     
     */
    public Float getSumCorrection() {
        return sumCorrection;
    }

    /**
     * Sets the value of the sumCorrection property.
     * 
     * @param value
     *     allowed object is
     *     {@link Float }
     *     
     */
    public void setSumCorrection(Float value) {
        this.sumCorrection = value;
    }

}
