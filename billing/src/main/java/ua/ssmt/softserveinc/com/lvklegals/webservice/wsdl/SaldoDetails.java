
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for saldoDetails complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="saldoDetails">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="pdv" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="saldoID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="sumCorrectionOfRealization" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumDocumentStockWithoutPermission" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumInputByPhysicalPerson" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumInvoiceByLkp" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumInvoiceByPenya" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumInvoiceByStockWithoutPermission" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumInvoiceCancelDept" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumInvoiceCorrectionStockWithoutPermission" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumInvoiceRains" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumInvoiceTeploenergo" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumInvoiceWatterSupplyAndWatterOut" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumPaymentCommis" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumPaymentPP3" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumPaymentPenya" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumPaymentPromyv" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumPaymentStockWithoutPermission" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumPaymentVVVP" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumPaymentVVVPP33AndInnerProvod" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="sumPenyaVVVPAndInnerProvod" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "saldoDetails", propOrder = {
    "id",
    "pdv",
    "saldoID",
    "sumCorrectionOfRealization",
    "sumDocumentStockWithoutPermission",
    "sumInputByPhysicalPerson",
    "sumInvoiceByLkp",
    "sumInvoiceByPenya",
    "sumInvoiceByStockWithoutPermission",
    "sumInvoiceCancelDept",
    "sumInvoiceCorrectionStockWithoutPermission",
    "sumInvoiceRains",
    "sumInvoiceTeploenergo",
    "sumInvoiceWatterSupplyAndWatterOut",
    "sumPaymentCommis",
    "sumPaymentPP3",
    "sumPaymentPenya",
    "sumPaymentPromyv",
    "sumPaymentStockWithoutPermission",
    "sumPaymentVVVP",
    "sumPaymentVVVPP33AndInnerProvod",
    "sumPenyaVVVPAndInnerProvod"
})
public class SaldoDetails {

    protected Long id;
    protected double pdv;
    protected Long saldoID;
    protected double sumCorrectionOfRealization;
    protected double sumDocumentStockWithoutPermission;
    protected double sumInputByPhysicalPerson;
    protected double sumInvoiceByLkp;
    protected double sumInvoiceByPenya;
    protected double sumInvoiceByStockWithoutPermission;
    protected double sumInvoiceCancelDept;
    protected double sumInvoiceCorrectionStockWithoutPermission;
    protected double sumInvoiceRains;
    protected double sumInvoiceTeploenergo;
    protected double sumInvoiceWatterSupplyAndWatterOut;
    protected double sumPaymentCommis;
    protected double sumPaymentPP3;
    protected double sumPaymentPenya;
    protected double sumPaymentPromyv;
    protected double sumPaymentStockWithoutPermission;
    protected double sumPaymentVVVP;
    protected double sumPaymentVVVPP33AndInnerProvod;
    protected double sumPenyaVVVPAndInnerProvod;

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
     * Gets the value of the pdv property.
     * 
     */
    public double getPdv() {
        return pdv;
    }

    /**
     * Sets the value of the pdv property.
     * 
     */
    public void setPdv(double value) {
        this.pdv = value;
    }

    /**
     * Gets the value of the saldoID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getSaldoID() {
        return saldoID;
    }

    /**
     * Sets the value of the saldoID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setSaldoID(Long value) {
        this.saldoID = value;
    }

    /**
     * Gets the value of the sumCorrectionOfRealization property.
     * 
     */
    public double getSumCorrectionOfRealization() {
        return sumCorrectionOfRealization;
    }

    /**
     * Sets the value of the sumCorrectionOfRealization property.
     * 
     */
    public void setSumCorrectionOfRealization(double value) {
        this.sumCorrectionOfRealization = value;
    }

    /**
     * Gets the value of the sumDocumentStockWithoutPermission property.
     * 
     */
    public double getSumDocumentStockWithoutPermission() {
        return sumDocumentStockWithoutPermission;
    }

    /**
     * Sets the value of the sumDocumentStockWithoutPermission property.
     * 
     */
    public void setSumDocumentStockWithoutPermission(double value) {
        this.sumDocumentStockWithoutPermission = value;
    }

    /**
     * Gets the value of the sumInputByPhysicalPerson property.
     * 
     */
    public double getSumInputByPhysicalPerson() {
        return sumInputByPhysicalPerson;
    }

    /**
     * Sets the value of the sumInputByPhysicalPerson property.
     * 
     */
    public void setSumInputByPhysicalPerson(double value) {
        this.sumInputByPhysicalPerson = value;
    }

    /**
     * Gets the value of the sumInvoiceByLkp property.
     * 
     */
    public double getSumInvoiceByLkp() {
        return sumInvoiceByLkp;
    }

    /**
     * Sets the value of the sumInvoiceByLkp property.
     * 
     */
    public void setSumInvoiceByLkp(double value) {
        this.sumInvoiceByLkp = value;
    }

    /**
     * Gets the value of the sumInvoiceByPenya property.
     * 
     */
    public double getSumInvoiceByPenya() {
        return sumInvoiceByPenya;
    }

    /**
     * Sets the value of the sumInvoiceByPenya property.
     * 
     */
    public void setSumInvoiceByPenya(double value) {
        this.sumInvoiceByPenya = value;
    }

    /**
     * Gets the value of the sumInvoiceByStockWithoutPermission property.
     * 
     */
    public double getSumInvoiceByStockWithoutPermission() {
        return sumInvoiceByStockWithoutPermission;
    }

    /**
     * Sets the value of the sumInvoiceByStockWithoutPermission property.
     * 
     */
    public void setSumInvoiceByStockWithoutPermission(double value) {
        this.sumInvoiceByStockWithoutPermission = value;
    }

    /**
     * Gets the value of the sumInvoiceCancelDept property.
     * 
     */
    public double getSumInvoiceCancelDept() {
        return sumInvoiceCancelDept;
    }

    /**
     * Sets the value of the sumInvoiceCancelDept property.
     * 
     */
    public void setSumInvoiceCancelDept(double value) {
        this.sumInvoiceCancelDept = value;
    }

    /**
     * Gets the value of the sumInvoiceCorrectionStockWithoutPermission property.
     * 
     */
    public double getSumInvoiceCorrectionStockWithoutPermission() {
        return sumInvoiceCorrectionStockWithoutPermission;
    }

    /**
     * Sets the value of the sumInvoiceCorrectionStockWithoutPermission property.
     * 
     */
    public void setSumInvoiceCorrectionStockWithoutPermission(double value) {
        this.sumInvoiceCorrectionStockWithoutPermission = value;
    }

    /**
     * Gets the value of the sumInvoiceRains property.
     * 
     */
    public double getSumInvoiceRains() {
        return sumInvoiceRains;
    }

    /**
     * Sets the value of the sumInvoiceRains property.
     * 
     */
    public void setSumInvoiceRains(double value) {
        this.sumInvoiceRains = value;
    }

    /**
     * Gets the value of the sumInvoiceTeploenergo property.
     * 
     */
    public double getSumInvoiceTeploenergo() {
        return sumInvoiceTeploenergo;
    }

    /**
     * Sets the value of the sumInvoiceTeploenergo property.
     * 
     */
    public void setSumInvoiceTeploenergo(double value) {
        this.sumInvoiceTeploenergo = value;
    }

    /**
     * Gets the value of the sumInvoiceWatterSupplyAndWatterOut property.
     * 
     */
    public double getSumInvoiceWatterSupplyAndWatterOut() {
        return sumInvoiceWatterSupplyAndWatterOut;
    }

    /**
     * Sets the value of the sumInvoiceWatterSupplyAndWatterOut property.
     * 
     */
    public void setSumInvoiceWatterSupplyAndWatterOut(double value) {
        this.sumInvoiceWatterSupplyAndWatterOut = value;
    }

    /**
     * Gets the value of the sumPaymentCommis property.
     * 
     */
    public double getSumPaymentCommis() {
        return sumPaymentCommis;
    }

    /**
     * Sets the value of the sumPaymentCommis property.
     * 
     */
    public void setSumPaymentCommis(double value) {
        this.sumPaymentCommis = value;
    }

    /**
     * Gets the value of the sumPaymentPP3 property.
     * 
     */
    public double getSumPaymentPP3() {
        return sumPaymentPP3;
    }

    /**
     * Sets the value of the sumPaymentPP3 property.
     * 
     */
    public void setSumPaymentPP3(double value) {
        this.sumPaymentPP3 = value;
    }

    /**
     * Gets the value of the sumPaymentPenya property.
     * 
     */
    public double getSumPaymentPenya() {
        return sumPaymentPenya;
    }

    /**
     * Sets the value of the sumPaymentPenya property.
     * 
     */
    public void setSumPaymentPenya(double value) {
        this.sumPaymentPenya = value;
    }

    /**
     * Gets the value of the sumPaymentPromyv property.
     * 
     */
    public double getSumPaymentPromyv() {
        return sumPaymentPromyv;
    }

    /**
     * Sets the value of the sumPaymentPromyv property.
     * 
     */
    public void setSumPaymentPromyv(double value) {
        this.sumPaymentPromyv = value;
    }

    /**
     * Gets the value of the sumPaymentStockWithoutPermission property.
     * 
     */
    public double getSumPaymentStockWithoutPermission() {
        return sumPaymentStockWithoutPermission;
    }

    /**
     * Sets the value of the sumPaymentStockWithoutPermission property.
     * 
     */
    public void setSumPaymentStockWithoutPermission(double value) {
        this.sumPaymentStockWithoutPermission = value;
    }

    /**
     * Gets the value of the sumPaymentVVVP property.
     * 
     */
    public double getSumPaymentVVVP() {
        return sumPaymentVVVP;
    }

    /**
     * Sets the value of the sumPaymentVVVP property.
     * 
     */
    public void setSumPaymentVVVP(double value) {
        this.sumPaymentVVVP = value;
    }

    /**
     * Gets the value of the sumPaymentVVVPP33AndInnerProvod property.
     * 
     */
    public double getSumPaymentVVVPP33AndInnerProvod() {
        return sumPaymentVVVPP33AndInnerProvod;
    }

    /**
     * Sets the value of the sumPaymentVVVPP33AndInnerProvod property.
     * 
     */
    public void setSumPaymentVVVPP33AndInnerProvod(double value) {
        this.sumPaymentVVVPP33AndInnerProvod = value;
    }

    /**
     * Gets the value of the sumPenyaVVVPAndInnerProvod property.
     * 
     */
    public double getSumPenyaVVVPAndInnerProvod() {
        return sumPenyaVVVPAndInnerProvod;
    }

    /**
     * Sets the value of the sumPenyaVVVPAndInnerProvod property.
     * 
     */
    public void setSumPenyaVVVPAndInnerProvod(double value) {
        this.sumPenyaVVVPAndInnerProvod = value;
    }

}
