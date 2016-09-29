
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for calcInvoiceRainsInvoice complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="calcInvoiceRainsInvoice">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreement" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}agreement" minOccurs="0"/>
 *         &lt;element name="categoryOfTariff" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}categoryOfTariff" minOccurs="0"/>
 *         &lt;element name="contraAgent" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="department" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}department" minOccurs="0"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="sum" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="tariff" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *         &lt;element name="volume" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "calcInvoiceRainsInvoice", propOrder = {
    "agreement",
    "categoryOfTariff",
    "contraAgent",
    "department",
    "period",
    "sum",
    "tariff",
    "volume"
})
public class CalcInvoiceRainsInvoice {

    protected Agreement agreement;
    protected CategoryOfTariff categoryOfTariff;
    protected ContraAgent contraAgent;
    protected Department department;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    protected Double sum;
    protected Double tariff;
    protected Double volume;

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
     * Gets the value of the sum property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getSum() {
        return sum;
    }

    /**
     * Sets the value of the sum property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setSum(Double value) {
        this.sum = value;
    }

    /**
     * Gets the value of the tariff property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getTariff() {
        return tariff;
    }

    /**
     * Sets the value of the tariff property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setTariff(Double value) {
        this.tariff = value;
    }

    /**
     * Gets the value of the volume property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getVolume() {
        return volume;
    }

    /**
     * Sets the value of the volume property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setVolume(Double value) {
        this.volume = value;
    }

}
