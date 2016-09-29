
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for inputFactor complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="inputFactor">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="agreement" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="beginFactor" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="codeConto" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="conto" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="correctionDocumentID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="counter" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}counter" minOccurs="0"/>
 *         &lt;element name="counterModel" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="department" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}department" minOccurs="0"/>
 *         &lt;element name="doctype" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="documentID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="endFactor" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="factorOnBeginMonth" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="factorTypeID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="input" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}input" minOccurs="0"/>
 *         &lt;element name="inputDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="onDate" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="unregisterDocumentID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="volume" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="wiringID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "inputFactor", propOrder = {
    "agreement",
    "beginFactor",
    "codeConto",
    "conto",
    "correctionDocumentID",
    "counter",
    "counterModel",
    "department",
    "doctype",
    "documentID",
    "endFactor",
    "factorOnBeginMonth",
    "factorTypeID",
    "id",
    "input",
    "inputDate",
    "onDate",
    "period",
    "unregisterDocumentID",
    "volume",
    "wiringID"
})
public class InputFactor {

    protected String agreement;
    protected Integer beginFactor;
    protected String codeConto;
    protected String conto;
    protected Long correctionDocumentID;
    protected Counter counter;
    protected String counterModel;
    protected Department department;
    protected int doctype;
    protected Long documentID;
    protected Integer endFactor;
    protected Integer factorOnBeginMonth;
    protected Long factorTypeID;
    protected Long id;
    protected Input input;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar inputDate;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar onDate;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    protected Long unregisterDocumentID;
    protected Integer volume;
    protected Long wiringID;

    /**
     * Gets the value of the agreement property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAgreement() {
        return agreement;
    }

    /**
     * Sets the value of the agreement property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAgreement(String value) {
        this.agreement = value;
    }

    /**
     * Gets the value of the beginFactor property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getBeginFactor() {
        return beginFactor;
    }

    /**
     * Sets the value of the beginFactor property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setBeginFactor(Integer value) {
        this.beginFactor = value;
    }

    /**
     * Gets the value of the codeConto property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCodeConto() {
        return codeConto;
    }

    /**
     * Sets the value of the codeConto property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCodeConto(String value) {
        this.codeConto = value;
    }

    /**
     * Gets the value of the conto property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getConto() {
        return conto;
    }

    /**
     * Sets the value of the conto property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setConto(String value) {
        this.conto = value;
    }

    /**
     * Gets the value of the correctionDocumentID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getCorrectionDocumentID() {
        return correctionDocumentID;
    }

    /**
     * Sets the value of the correctionDocumentID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setCorrectionDocumentID(Long value) {
        this.correctionDocumentID = value;
    }

    /**
     * Gets the value of the counter property.
     * 
     * @return
     *     possible object is
     *     {@link Counter }
     *     
     */
    public Counter getCounter() {
        return counter;
    }

    /**
     * Sets the value of the counter property.
     * 
     * @param value
     *     allowed object is
     *     {@link Counter }
     *     
     */
    public void setCounter(Counter value) {
        this.counter = value;
    }

    /**
     * Gets the value of the counterModel property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCounterModel() {
        return counterModel;
    }

    /**
     * Sets the value of the counterModel property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCounterModel(String value) {
        this.counterModel = value;
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
     * Gets the value of the doctype property.
     * 
     */
    public int getDoctype() {
        return doctype;
    }

    /**
     * Sets the value of the doctype property.
     * 
     */
    public void setDoctype(int value) {
        this.doctype = value;
    }

    /**
     * Gets the value of the documentID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getDocumentID() {
        return documentID;
    }

    /**
     * Sets the value of the documentID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setDocumentID(Long value) {
        this.documentID = value;
    }

    /**
     * Gets the value of the endFactor property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getEndFactor() {
        return endFactor;
    }

    /**
     * Sets the value of the endFactor property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setEndFactor(Integer value) {
        this.endFactor = value;
    }

    /**
     * Gets the value of the factorOnBeginMonth property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getFactorOnBeginMonth() {
        return factorOnBeginMonth;
    }

    /**
     * Sets the value of the factorOnBeginMonth property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setFactorOnBeginMonth(Integer value) {
        this.factorOnBeginMonth = value;
    }

    /**
     * Gets the value of the factorTypeID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getFactorTypeID() {
        return factorTypeID;
    }

    /**
     * Sets the value of the factorTypeID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setFactorTypeID(Long value) {
        this.factorTypeID = value;
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
     * Gets the value of the input property.
     * 
     * @return
     *     possible object is
     *     {@link Input }
     *     
     */
    public Input getInput() {
        return input;
    }

    /**
     * Sets the value of the input property.
     * 
     * @param value
     *     allowed object is
     *     {@link Input }
     *     
     */
    public void setInput(Input value) {
        this.input = value;
    }

    /**
     * Gets the value of the inputDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getInputDate() {
        return inputDate;
    }

    /**
     * Sets the value of the inputDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setInputDate(XMLGregorianCalendar value) {
        this.inputDate = value;
    }

    /**
     * Gets the value of the onDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getOnDate() {
        return onDate;
    }

    /**
     * Sets the value of the onDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setOnDate(XMLGregorianCalendar value) {
        this.onDate = value;
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
     * Gets the value of the unregisterDocumentID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getUnregisterDocumentID() {
        return unregisterDocumentID;
    }

    /**
     * Sets the value of the unregisterDocumentID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setUnregisterDocumentID(Long value) {
        this.unregisterDocumentID = value;
    }

    /**
     * Gets the value of the volume property.
     * 
     * @return
     *     possible object is
     *     {@link Integer }
     *     
     */
    public Integer getVolume() {
        return volume;
    }

    /**
     * Sets the value of the volume property.
     * 
     * @param value
     *     allowed object is
     *     {@link Integer }
     *     
     */
    public void setVolume(Integer value) {
        this.volume = value;
    }

    /**
     * Gets the value of the wiringID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getWiringID() {
        return wiringID;
    }

    /**
     * Sets the value of the wiringID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setWiringID(Long value) {
        this.wiringID = value;
    }

}
