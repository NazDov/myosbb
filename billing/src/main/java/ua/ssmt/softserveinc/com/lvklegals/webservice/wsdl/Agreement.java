
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for agreement complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="agreement">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="active" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *         &lt;element name="agreementNumber" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="agreementPenyaProperty" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreementPenyaProperty" minOccurs="0"/>
 *         &lt;element name="beginDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="contraAgent" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="department" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}department" minOccurs="0"/>
 *         &lt;element name="endDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="kindAgreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}kindAgreement" minOccurs="0"/>
 *         &lt;element name="typeAgreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}typeAgreement" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "agreement", propOrder = {
    "active",
    "agreementNumber",
    "agreementPenyaProperty",
    "beginDate",
    "contraAgent",
    "department",
    "endDate",
    "id",
    "kindAgreement",
    "typeAgreement"
})
public class Agreement {

    protected boolean active;
    protected String agreementNumber;
    protected AgreementPenyaProperty agreementPenyaProperty;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar beginDate;
    protected ContraAgent contraAgent;
    protected Department department;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar endDate;
    protected Long id;
    protected KindAgreement kindAgreement;
    protected TypeAgreement typeAgreement;

    /**
     * Gets the value of the active property.
     * 
     */
    public boolean isActive() {
        return active;
    }

    /**
     * Sets the value of the active property.
     * 
     */
    public void setActive(boolean value) {
        this.active = value;
    }

    /**
     * Gets the value of the agreementNumber property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAgreementNumber() {
        return agreementNumber;
    }

    /**
     * Sets the value of the agreementNumber property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAgreementNumber(String value) {
        this.agreementNumber = value;
    }

    /**
     * Gets the value of the agreementPenyaProperty property.
     * 
     * @return
     *     possible object is
     *     {@link AgreementPenyaProperty }
     *     
     */
    public AgreementPenyaProperty getAgreementPenyaProperty() {
        return agreementPenyaProperty;
    }

    /**
     * Sets the value of the agreementPenyaProperty property.
     * 
     * @param value
     *     allowed object is
     *     {@link AgreementPenyaProperty }
     *     
     */
    public void setAgreementPenyaProperty(AgreementPenyaProperty value) {
        this.agreementPenyaProperty = value;
    }

    /**
     * Gets the value of the beginDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getBeginDate() {
        return beginDate;
    }

    /**
     * Sets the value of the beginDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setBeginDate(XMLGregorianCalendar value) {
        this.beginDate = value;
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
     * Gets the value of the endDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getEndDate() {
        return endDate;
    }

    /**
     * Sets the value of the endDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setEndDate(XMLGregorianCalendar value) {
        this.endDate = value;
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
     * Gets the value of the kindAgreement property.
     * 
     * @return
     *     possible object is
     *     {@link KindAgreement }
     *     
     */
    public KindAgreement getKindAgreement() {
        return kindAgreement;
    }

    /**
     * Sets the value of the kindAgreement property.
     * 
     * @param value
     *     allowed object is
     *     {@link KindAgreement }
     *     
     */
    public void setKindAgreement(KindAgreement value) {
        this.kindAgreement = value;
    }

    /**
     * Gets the value of the typeAgreement property.
     * 
     * @return
     *     possible object is
     *     {@link TypeAgreement }
     *     
     */
    public TypeAgreement getTypeAgreement() {
        return typeAgreement;
    }

    /**
     * Sets the value of the typeAgreement property.
     * 
     * @param value
     *     allowed object is
     *     {@link TypeAgreement }
     *     
     */
    public void setTypeAgreement(TypeAgreement value) {
        this.typeAgreement = value;
    }

}
