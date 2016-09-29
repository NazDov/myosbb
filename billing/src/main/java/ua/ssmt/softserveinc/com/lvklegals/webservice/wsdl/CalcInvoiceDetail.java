
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for calcInvoiceDetail complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="calcInvoiceDetail">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="beginFactorIn" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="calcInvoiceID" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *         &lt;element name="countDayByChecker" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="countDayByNorma" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="countDayByRepair" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="dateBegin" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="dateEnd" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="endFactorIn" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long"/>
 *         &lt;element name="returned" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *         &lt;element name="subService" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}subService" minOccurs="0"/>
 *         &lt;element name="volumeOnChecker" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="volumeOnCounterIn" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="volumeOnNormaIn" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="volumeOnRepair" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "calcInvoiceDetail", propOrder = {
    "beginFactorIn",
    "calcInvoiceID",
    "countDayByChecker",
    "countDayByNorma",
    "countDayByRepair",
    "dateBegin",
    "dateEnd",
    "endFactorIn",
    "id",
    "returned",
    "subService",
    "volumeOnChecker",
    "volumeOnCounterIn",
    "volumeOnNormaIn",
    "volumeOnRepair"
})
public class CalcInvoiceDetail {

    protected int beginFactorIn;
    protected long calcInvoiceID;
    protected int countDayByChecker;
    protected int countDayByNorma;
    protected int countDayByRepair;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar dateBegin;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar dateEnd;
    protected int endFactorIn;
    protected long id;
    protected boolean returned;
    protected SubService subService;
    protected double volumeOnChecker;
    protected double volumeOnCounterIn;
    protected double volumeOnNormaIn;
    protected double volumeOnRepair;

    /**
     * Gets the value of the beginFactorIn property.
     * 
     */
    public int getBeginFactorIn() {
        return beginFactorIn;
    }

    /**
     * Sets the value of the beginFactorIn property.
     * 
     */
    public void setBeginFactorIn(int value) {
        this.beginFactorIn = value;
    }

    /**
     * Gets the value of the calcInvoiceID property.
     * 
     */
    public long getCalcInvoiceID() {
        return calcInvoiceID;
    }

    /**
     * Sets the value of the calcInvoiceID property.
     * 
     */
    public void setCalcInvoiceID(long value) {
        this.calcInvoiceID = value;
    }

    /**
     * Gets the value of the countDayByChecker property.
     * 
     */
    public int getCountDayByChecker() {
        return countDayByChecker;
    }

    /**
     * Sets the value of the countDayByChecker property.
     * 
     */
    public void setCountDayByChecker(int value) {
        this.countDayByChecker = value;
    }

    /**
     * Gets the value of the countDayByNorma property.
     * 
     */
    public int getCountDayByNorma() {
        return countDayByNorma;
    }

    /**
     * Sets the value of the countDayByNorma property.
     * 
     */
    public void setCountDayByNorma(int value) {
        this.countDayByNorma = value;
    }

    /**
     * Gets the value of the countDayByRepair property.
     * 
     */
    public int getCountDayByRepair() {
        return countDayByRepair;
    }

    /**
     * Sets the value of the countDayByRepair property.
     * 
     */
    public void setCountDayByRepair(int value) {
        this.countDayByRepair = value;
    }

    /**
     * Gets the value of the dateBegin property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getDateBegin() {
        return dateBegin;
    }

    /**
     * Sets the value of the dateBegin property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setDateBegin(XMLGregorianCalendar value) {
        this.dateBegin = value;
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
     * Gets the value of the endFactorIn property.
     * 
     */
    public int getEndFactorIn() {
        return endFactorIn;
    }

    /**
     * Sets the value of the endFactorIn property.
     * 
     */
    public void setEndFactorIn(int value) {
        this.endFactorIn = value;
    }

    /**
     * Gets the value of the id property.
     * 
     */
    public long getId() {
        return id;
    }

    /**
     * Sets the value of the id property.
     * 
     */
    public void setId(long value) {
        this.id = value;
    }

    /**
     * Gets the value of the returned property.
     * 
     */
    public boolean isReturned() {
        return returned;
    }

    /**
     * Sets the value of the returned property.
     * 
     */
    public void setReturned(boolean value) {
        this.returned = value;
    }

    /**
     * Gets the value of the subService property.
     * 
     * @return
     *     possible object is
     *     {@link SubService }
     *     
     */
    public SubService getSubService() {
        return subService;
    }

    /**
     * Sets the value of the subService property.
     * 
     * @param value
     *     allowed object is
     *     {@link SubService }
     *     
     */
    public void setSubService(SubService value) {
        this.subService = value;
    }

    /**
     * Gets the value of the volumeOnChecker property.
     * 
     */
    public double getVolumeOnChecker() {
        return volumeOnChecker;
    }

    /**
     * Sets the value of the volumeOnChecker property.
     * 
     */
    public void setVolumeOnChecker(double value) {
        this.volumeOnChecker = value;
    }

    /**
     * Gets the value of the volumeOnCounterIn property.
     * 
     */
    public double getVolumeOnCounterIn() {
        return volumeOnCounterIn;
    }

    /**
     * Sets the value of the volumeOnCounterIn property.
     * 
     */
    public void setVolumeOnCounterIn(double value) {
        this.volumeOnCounterIn = value;
    }

    /**
     * Gets the value of the volumeOnNormaIn property.
     * 
     */
    public double getVolumeOnNormaIn() {
        return volumeOnNormaIn;
    }

    /**
     * Sets the value of the volumeOnNormaIn property.
     * 
     */
    public void setVolumeOnNormaIn(double value) {
        this.volumeOnNormaIn = value;
    }

    /**
     * Gets the value of the volumeOnRepair property.
     * 
     */
    public double getVolumeOnRepair() {
        return volumeOnRepair;
    }

    /**
     * Sets the value of the volumeOnRepair property.
     * 
     */
    public void setVolumeOnRepair(double value) {
        this.volumeOnRepair = value;
    }

}
