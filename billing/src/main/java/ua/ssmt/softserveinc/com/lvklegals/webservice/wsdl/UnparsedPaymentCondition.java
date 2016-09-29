
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for unparsedPaymentCondition complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="unparsedPaymentCondition">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="datePayment" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="mfo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="numberDocPayment" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="ownerBankAccount" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="payer" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="payerBankAccount" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="reason" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="sumPayment" type="{http://www.w3.org/2001/XMLSchema}float" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "unparsedPaymentCondition", propOrder = {
    "datePayment",
    "id",
    "mfo",
    "numberDocPayment",
    "ownerBankAccount",
    "payer",
    "payerBankAccount",
    "reason",
    "sumPayment"
})
public class UnparsedPaymentCondition {

    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar datePayment;
    protected Long id;
    protected String mfo;
    protected String numberDocPayment;
    protected String ownerBankAccount;
    protected String payer;
    protected String payerBankAccount;
    protected String reason;
    protected Float sumPayment;

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
     * Gets the value of the mfo property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMfo() {
        return mfo;
    }

    /**
     * Sets the value of the mfo property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMfo(String value) {
        this.mfo = value;
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
     *     {@link String }
     *     
     */
    public String getOwnerBankAccount() {
        return ownerBankAccount;
    }

    /**
     * Sets the value of the ownerBankAccount property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOwnerBankAccount(String value) {
        this.ownerBankAccount = value;
    }

    /**
     * Gets the value of the payer property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPayer() {
        return payer;
    }

    /**
     * Sets the value of the payer property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPayer(String value) {
        this.payer = value;
    }

    /**
     * Gets the value of the payerBankAccount property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getPayerBankAccount() {
        return payerBankAccount;
    }

    /**
     * Sets the value of the payerBankAccount property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setPayerBankAccount(String value) {
        this.payerBankAccount = value;
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
     * Gets the value of the sumPayment property.
     * 
     * @return
     *     possible object is
     *     {@link Float }
     *     
     */
    public Float getSumPayment() {
        return sumPayment;
    }

    /**
     * Sets the value of the sumPayment property.
     * 
     * @param value
     *     allowed object is
     *     {@link Float }
     *     
     */
    public void setSumPayment(Float value) {
        this.sumPayment = value;
    }

}
