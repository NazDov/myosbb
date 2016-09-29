
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for contraAgentProperty complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="contraAgentProperty">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="address" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="agreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="algorithm" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}algorithm" minOccurs="0"/>
 *         &lt;element name="area" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}area" minOccurs="0"/>
 *         &lt;element name="bank" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}bank" minOccurs="0"/>
 *         &lt;element name="bankAccount" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="contraAgentCategory" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgentCategory" minOccurs="0"/>
 *         &lt;element name="flagCommiss" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/>
 *         &lt;element name="fullName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="groupWatterSupply" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}groupWatterSupply" minOccurs="0"/>
 *         &lt;element name="hopeless" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="limitConsuming" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="limitVK" type="{http://www.w3.org/2001/XMLSchema}float" minOccurs="0"/>
 *         &lt;element name="payer" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}payer" minOccurs="0"/>
 *         &lt;element name="percentCommiss" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="respPerson" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="shortName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="sourceWaterSupply" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}sourceWaterSupply" minOccurs="0"/>
 *         &lt;element name="tel" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
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
@XmlType(name = "contraAgentProperty", propOrder = {
    "address",
    "agreement",
    "algorithm",
    "area",
    "bank",
    "bankAccount",
    "contraAgentCategory",
    "flagCommiss",
    "fullName",
    "groupWatterSupply",
    "hopeless",
    "id",
    "limitConsuming",
    "limitVK",
    "payer",
    "percentCommiss",
    "respPerson",
    "shortName",
    "sourceWaterSupply",
    "tel",
    "typeActivity"
})
public class ContraAgentProperty {

    protected String address;
    protected Agreement agreement;
    protected Algorithm algorithm;
    protected Area area;
    protected Bank bank;
    protected String bankAccount;
    protected ContraAgentCategory contraAgentCategory;
    protected Boolean flagCommiss;
    protected String fullName;
    protected GroupWatterSupply groupWatterSupply;
    protected Boolean hopeless;
    protected Long id;
    protected Double limitConsuming;
    protected Float limitVK;
    protected Payer payer;
    protected Double percentCommiss;
    protected String respPerson;
    protected String shortName;
    protected SourceWaterSupply sourceWaterSupply;
    protected String tel;
    protected TypeActivity typeActivity;

    /**
     * Gets the value of the address property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAddress() {
        return address;
    }

    /**
     * Sets the value of the address property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAddress(String value) {
        this.address = value;
    }

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
     * Gets the value of the algorithm property.
     * 
     * @return
     *     possible object is
     *     {@link Algorithm }
     *     
     */
    public Algorithm getAlgorithm() {
        return algorithm;
    }

    /**
     * Sets the value of the algorithm property.
     * 
     * @param value
     *     allowed object is
     *     {@link Algorithm }
     *     
     */
    public void setAlgorithm(Algorithm value) {
        this.algorithm = value;
    }

    /**
     * Gets the value of the area property.
     * 
     * @return
     *     possible object is
     *     {@link Area }
     *     
     */
    public Area getArea() {
        return area;
    }

    /**
     * Sets the value of the area property.
     * 
     * @param value
     *     allowed object is
     *     {@link Area }
     *     
     */
    public void setArea(Area value) {
        this.area = value;
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
     * Gets the value of the flagCommiss property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isFlagCommiss() {
        return flagCommiss;
    }

    /**
     * Sets the value of the flagCommiss property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setFlagCommiss(Boolean value) {
        this.flagCommiss = value;
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
     * Gets the value of the hopeless property.
     * 
     * @return
     *     possible object is
     *     {@link Boolean }
     *     
     */
    public Boolean isHopeless() {
        return hopeless;
    }

    /**
     * Sets the value of the hopeless property.
     * 
     * @param value
     *     allowed object is
     *     {@link Boolean }
     *     
     */
    public void setHopeless(Boolean value) {
        this.hopeless = value;
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
     * Gets the value of the limitVK property.
     * 
     * @return
     *     possible object is
     *     {@link Float }
     *     
     */
    public Float getLimitVK() {
        return limitVK;
    }

    /**
     * Sets the value of the limitVK property.
     * 
     * @param value
     *     allowed object is
     *     {@link Float }
     *     
     */
    public void setLimitVK(Float value) {
        this.limitVK = value;
    }

    /**
     * Gets the value of the payer property.
     * 
     * @return
     *     possible object is
     *     {@link Payer }
     *     
     */
    public Payer getPayer() {
        return payer;
    }

    /**
     * Sets the value of the payer property.
     * 
     * @param value
     *     allowed object is
     *     {@link Payer }
     *     
     */
    public void setPayer(Payer value) {
        this.payer = value;
    }

    /**
     * Gets the value of the percentCommiss property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getPercentCommiss() {
        return percentCommiss;
    }

    /**
     * Sets the value of the percentCommiss property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setPercentCommiss(Double value) {
        this.percentCommiss = value;
    }

    /**
     * Gets the value of the respPerson property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRespPerson() {
        return respPerson;
    }

    /**
     * Sets the value of the respPerson property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRespPerson(String value) {
        this.respPerson = value;
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
     * Gets the value of the tel property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getTel() {
        return tel;
    }

    /**
     * Sets the value of the tel property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setTel(String value) {
        this.tel = value;
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
