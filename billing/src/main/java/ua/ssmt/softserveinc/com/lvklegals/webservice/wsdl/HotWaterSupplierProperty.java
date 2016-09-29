
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for hotWaterSupplierProperty complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="hotWaterSupplierProperty">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="bank" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}bank" minOccurs="0"/>
 *         &lt;element name="bankAccount" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="contraAgentCategory" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgentCategory" minOccurs="0"/>
 *         &lt;element name="fullName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="groupWatterSupply" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}groupWatterSupply" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="limitConsuming" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="shortName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="sourceWaterSupply" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}sourceWaterSupply" minOccurs="0"/>
 *         &lt;element name="typeActivity" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}typeActivity" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "hotWaterSupplierProperty", propOrder = {
    "bank",
    "bankAccount",
    "contraAgentCategory",
    "fullName",
    "groupWatterSupply",
    "id",
    "limitConsuming",
    "shortName",
    "sourceWaterSupply",
    "typeActivity"
})
public class HotWaterSupplierProperty {

    protected Bank bank;
    protected String bankAccount;
    protected ContraAgentCategory contraAgentCategory;
    protected String fullName;
    protected GroupWatterSupply groupWatterSupply;
    protected Long id;
    protected Double limitConsuming;
    protected String shortName;
    protected SourceWaterSupply sourceWaterSupply;
    protected TypeActivity typeActivity;

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
     * Gets the value of the contraAgentCategory property.
     * 
     * @return
     *     possible object is
     *     {@link ContraAgentCategory }
     *     
     */
    public ContraAgentCategory getContraAgentCategory() {
        return contraAgentCategory;
    }

    /**
     * Sets the value of the contraAgentCategory property.
     * 
     * @param value
     *     allowed object is
     *     {@link ContraAgentCategory }
     *     
     */
    public void setContraAgentCategory(ContraAgentCategory value) {
        this.contraAgentCategory = value;
    }

    /**
     * Gets the value of the fullName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getFullName() {
        return fullName;
    }

    /**
     * Sets the value of the fullName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setFullName(String value) {
        this.fullName = value;
    }

    /**
     * Gets the value of the groupWatterSupply property.
     * 
     * @return
     *     possible object is
     *     {@link GroupWatterSupply }
     *     
     */
    public GroupWatterSupply getGroupWatterSupply() {
        return groupWatterSupply;
    }

    /**
     * Sets the value of the groupWatterSupply property.
     * 
     * @param value
     *     allowed object is
     *     {@link GroupWatterSupply }
     *     
     */
    public void setGroupWatterSupply(GroupWatterSupply value) {
        this.groupWatterSupply = value;
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
     * Gets the value of the limitConsuming property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getLimitConsuming() {
        return limitConsuming;
    }

    /**
     * Sets the value of the limitConsuming property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setLimitConsuming(Double value) {
        this.limitConsuming = value;
    }

    /**
     * Gets the value of the shortName property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getShortName() {
        return shortName;
    }

    /**
     * Sets the value of the shortName property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setShortName(String value) {
        this.shortName = value;
    }

    /**
     * Gets the value of the sourceWaterSupply property.
     * 
     * @return
     *     possible object is
     *     {@link SourceWaterSupply }
     *     
     */
    public SourceWaterSupply getSourceWaterSupply() {
        return sourceWaterSupply;
    }

    /**
     * Sets the value of the sourceWaterSupply property.
     * 
     * @param value
     *     allowed object is
     *     {@link SourceWaterSupply }
     *     
     */
    public void setSourceWaterSupply(SourceWaterSupply value) {
        this.sourceWaterSupply = value;
    }

    /**
     * Gets the value of the typeActivity property.
     * 
     * @return
     *     possible object is
     *     {@link TypeActivity }
     *     
     */
    public TypeActivity getTypeActivity() {
        return typeActivity;
    }

    /**
     * Sets the value of the typeActivity property.
     * 
     * @param value
     *     allowed object is
     *     {@link TypeActivity }
     *     
     */
    public void setTypeActivity(TypeActivity value) {
        this.typeActivity = value;
    }

}
