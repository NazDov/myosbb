
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.*;
import javax.xml.datatype.XMLGregorianCalendar;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>Java class for calcInvoice complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="calcInvoice">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="coefTarrifWatterOut" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="coefWatterSupply" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="contrAgentAgreementID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="contraAgent" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}contraAgent" minOccurs="0"/>
 *         &lt;element name="countDayByCheckers" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="countDayOnNorma" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="countDayOnRepair" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="departamentAgreementID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="departmentInput" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}departmentInput" minOccurs="0"/>
 *         &lt;element name="detailses" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}calcInvoiceDetail" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="factorOnBeginMonth" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="factorOnEndMonth" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="load" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *         &lt;element name="period" type="{http://www.w3.org/2001/XMLSchema}dateTime" minOccurs="0"/>
 *         &lt;element name="realConsume" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="returned" type="{http://www.w3.org/2001/XMLSchema}boolean"/>
 *         &lt;element name="subService" type="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}subService" minOccurs="0"/>
 *         &lt;element name="sum" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="tarifCategotyID" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="tariff" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="totalVolumeCounterByMonth" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="volumeAddingCapacityInput" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="volumeAddingConsume" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="volumeCorrectionCounter" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="volumeCorrectionDonarach" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="volumeOnCheckers" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="volumeOnCounter" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="volumeOnNorma" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="volumeOnRepair" type="{http://www.w3.org/2001/XMLSchema}int"/>
 *         &lt;element name="volumeTotal" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *         &lt;element name="volumeTotalWithCoef" type="{http://www.w3.org/2001/XMLSchema}double"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "calcInvoice", propOrder = {
    "coefTarrifWatterOut",
    "coefWatterSupply",
    "contrAgentAgreementID",
    "contraAgent",
    "countDayByCheckers",
    "countDayOnNorma",
    "countDayOnRepair",
    "departamentAgreementID",
    "departmentInput",
    "detailses",
    "factorOnBeginMonth",
    "factorOnEndMonth",
    "id",
    "load",
    "period",
    "realConsume",
    "returned",
    "subService",
    "sum",
    "tarifCategotyID",
    "tariff",
    "totalVolumeCounterByMonth",
    "volumeAddingCapacityInput",
    "volumeAddingConsume",
    "volumeCorrectionCounter",
    "volumeCorrectionDonarach",
    "volumeOnCheckers",
    "volumeOnCounter",
    "volumeOnNorma",
    "volumeOnRepair",
    "volumeTotal",
    "volumeTotalWithCoef"
})
public class CalcInvoice {

    protected double coefTarrifWatterOut;
    protected double coefWatterSupply;
    protected Long contrAgentAgreementID;
    protected ContraAgent contraAgent;
    protected double countDayByCheckers;
    protected int countDayOnNorma;
    protected double countDayOnRepair;
    protected Long departamentAgreementID;
    protected DepartmentInput departmentInput;
    @XmlElement(nillable = true)
    protected List<CalcInvoiceDetail> detailses;
    protected int factorOnBeginMonth;
    protected int factorOnEndMonth;
    protected Long id;
    protected boolean load;
    @XmlSchemaType(name = "dateTime")
    protected XMLGregorianCalendar period;
    protected int realConsume;
    protected boolean returned;
    protected SubService subService;
    protected double sum;
    protected Long tarifCategotyID;
    protected double tariff;
    protected int totalVolumeCounterByMonth;
    protected double volumeAddingCapacityInput;
    protected double volumeAddingConsume;
    protected int volumeCorrectionCounter;
    protected int volumeCorrectionDonarach;
    protected double volumeOnCheckers;
    protected int volumeOnCounter;
    protected double volumeOnNorma;
    protected int volumeOnRepair;
    protected double volumeTotal;
    protected double volumeTotalWithCoef;

    /**
     * Gets the value of the coefTarrifWatterOut property.
     * 
     */
    public double getCoefTarrifWatterOut() {
        return coefTarrifWatterOut;
    }

    /**
     * Sets the value of the coefTarrifWatterOut property.
     * 
     */
    public void setCoefTarrifWatterOut(double value) {
        this.coefTarrifWatterOut = value;
    }

    /**
     * Gets the value of the coefWatterSupply property.
     * 
     */
    public double getCoefWatterSupply() {
        return coefWatterSupply;
    }

    /**
     * Sets the value of the coefWatterSupply property.
     * 
     */
    public void setCoefWatterSupply(double value) {
        this.coefWatterSupply = value;
    }

    /**
     * Gets the value of the contrAgentAgreementID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getContrAgentAgreementID() {
        return contrAgentAgreementID;
    }

    /**
     * Sets the value of the contrAgentAgreementID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setContrAgentAgreementID(Long value) {
        this.contrAgentAgreementID = value;
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
     * Gets the value of the countDayByCheckers property.
     * 
     */
    public double getCountDayByCheckers() {
        return countDayByCheckers;
    }

    /**
     * Sets the value of the countDayByCheckers property.
     * 
     */
    public void setCountDayByCheckers(double value) {
        this.countDayByCheckers = value;
    }

    /**
     * Gets the value of the countDayOnNorma property.
     * 
     */
    public int getCountDayOnNorma() {
        return countDayOnNorma;
    }

    /**
     * Sets the value of the countDayOnNorma property.
     * 
     */
    public void setCountDayOnNorma(int value) {
        this.countDayOnNorma = value;
    }

    /**
     * Gets the value of the countDayOnRepair property.
     * 
     */
    public double getCountDayOnRepair() {
        return countDayOnRepair;
    }

    /**
     * Sets the value of the countDayOnRepair property.
     * 
     */
    public void setCountDayOnRepair(double value) {
        this.countDayOnRepair = value;
    }

    /**
     * Gets the value of the departamentAgreementID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getDepartamentAgreementID() {
        return departamentAgreementID;
    }

    /**
     * Sets the value of the departamentAgreementID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setDepartamentAgreementID(Long value) {
        this.departamentAgreementID = value;
    }

    /**
     * Gets the value of the departmentInput property.
     * 
     * @return
     *     possible object is
     *     {@link DepartmentInput }
     *     
     */
    public DepartmentInput getDepartmentInput() {
        return departmentInput;
    }

    /**
     * Sets the value of the departmentInput property.
     * 
     * @param value
     *     allowed object is
     *     {@link DepartmentInput }
     *     
     */
    public void setDepartmentInput(DepartmentInput value) {
        this.departmentInput = value;
    }

    /**
     * Gets the value of the detailses property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the detailses property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getDetailses().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link CalcInvoiceDetail }
     * 
     * 
     */
    public List<CalcInvoiceDetail> getDetailses() {
        if (detailses == null) {
            detailses = new ArrayList<CalcInvoiceDetail>();
        }
        return this.detailses;
    }

    /**
     * Gets the value of the factorOnBeginMonth property.
     * 
     */
    public int getFactorOnBeginMonth() {
        return factorOnBeginMonth;
    }

    /**
     * Sets the value of the factorOnBeginMonth property.
     * 
     */
    public void setFactorOnBeginMonth(int value) {
        this.factorOnBeginMonth = value;
    }

    /**
     * Gets the value of the factorOnEndMonth property.
     * 
     */
    public int getFactorOnEndMonth() {
        return factorOnEndMonth;
    }

    /**
     * Sets the value of the factorOnEndMonth property.
     * 
     */
    public void setFactorOnEndMonth(int value) {
        this.factorOnEndMonth = value;
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
     * Gets the value of the load property.
     * 
     */
    public boolean isLoad() {
        return load;
    }

    /**
     * Sets the value of the load property.
     * 
     */
    public void setLoad(boolean value) {
        this.load = value;
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
     * Gets the value of the realConsume property.
     * 
     */
    public int getRealConsume() {
        return realConsume;
    }

    /**
     * Sets the value of the realConsume property.
     * 
     */
    public void setRealConsume(int value) {
        this.realConsume = value;
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
     * Gets the value of the sum property.
     * 
     */
    public double getSum() {
        return sum;
    }

    /**
     * Sets the value of the sum property.
     * 
     */
    public void setSum(double value) {
        this.sum = value;
    }

    /**
     * Gets the value of the tarifCategotyID property.
     * 
     * @return
     *     possible object is
     *     {@link Long }
     *     
     */
    public Long getTarifCategotyID() {
        return tarifCategotyID;
    }

    /**
     * Sets the value of the tarifCategotyID property.
     * 
     * @param value
     *     allowed object is
     *     {@link Long }
     *     
     */
    public void setTarifCategotyID(Long value) {
        this.tarifCategotyID = value;
    }

    /**
     * Gets the value of the tariff property.
     * 
     */
    public double getTariff() {
        return tariff;
    }

    /**
     * Sets the value of the tariff property.
     * 
     */
    public void setTariff(double value) {
        this.tariff = value;
    }

    /**
     * Gets the value of the totalVolumeCounterByMonth property.
     * 
     */
    public int getTotalVolumeCounterByMonth() {
        return totalVolumeCounterByMonth;
    }

    /**
     * Sets the value of the totalVolumeCounterByMonth property.
     * 
     */
    public void setTotalVolumeCounterByMonth(int value) {
        this.totalVolumeCounterByMonth = value;
    }

    /**
     * Gets the value of the volumeAddingCapacityInput property.
     * 
     */
    public double getVolumeAddingCapacityInput() {
        return volumeAddingCapacityInput;
    }

    /**
     * Sets the value of the volumeAddingCapacityInput property.
     * 
     */
    public void setVolumeAddingCapacityInput(double value) {
        this.volumeAddingCapacityInput = value;
    }

    /**
     * Gets the value of the volumeAddingConsume property.
     * 
     */
    public double getVolumeAddingConsume() {
        return volumeAddingConsume;
    }

    /**
     * Sets the value of the volumeAddingConsume property.
     * 
     */
    public void setVolumeAddingConsume(double value) {
        this.volumeAddingConsume = value;
    }

    /**
     * Gets the value of the volumeCorrectionCounter property.
     * 
     */
    public int getVolumeCorrectionCounter() {
        return volumeCorrectionCounter;
    }

    /**
     * Sets the value of the volumeCorrectionCounter property.
     * 
     */
    public void setVolumeCorrectionCounter(int value) {
        this.volumeCorrectionCounter = value;
    }

    /**
     * Gets the value of the volumeCorrectionDonarach property.
     * 
     */
    public int getVolumeCorrectionDonarach() {
        return volumeCorrectionDonarach;
    }

    /**
     * Sets the value of the volumeCorrectionDonarach property.
     * 
     */
    public void setVolumeCorrectionDonarach(int value) {
        this.volumeCorrectionDonarach = value;
    }

    /**
     * Gets the value of the volumeOnCheckers property.
     * 
     */
    public double getVolumeOnCheckers() {
        return volumeOnCheckers;
    }

    /**
     * Sets the value of the volumeOnCheckers property.
     * 
     */
    public void setVolumeOnCheckers(double value) {
        this.volumeOnCheckers = value;
    }

    /**
     * Gets the value of the volumeOnCounter property.
     * 
     */
    public int getVolumeOnCounter() {
        return volumeOnCounter;
    }

    /**
     * Sets the value of the volumeOnCounter property.
     * 
     */
    public void setVolumeOnCounter(int value) {
        this.volumeOnCounter = value;
    }

    /**
     * Gets the value of the volumeOnNorma property.
     * 
     */
    public double getVolumeOnNorma() {
        return volumeOnNorma;
    }

    /**
     * Sets the value of the volumeOnNorma property.
     * 
     */
    public void setVolumeOnNorma(double value) {
        this.volumeOnNorma = value;
    }

    /**
     * Gets the value of the volumeOnRepair property.
     * 
     */
    public int getVolumeOnRepair() {
        return volumeOnRepair;
    }

    /**
     * Sets the value of the volumeOnRepair property.
     * 
     */
    public void setVolumeOnRepair(int value) {
        this.volumeOnRepair = value;
    }

    /**
     * Gets the value of the volumeTotal property.
     * 
     */
    public double getVolumeTotal() {
        return volumeTotal;
    }

    /**
     * Sets the value of the volumeTotal property.
     * 
     */
    public void setVolumeTotal(double value) {
        this.volumeTotal = value;
    }

    /**
     * Gets the value of the volumeTotalWithCoef property.
     * 
     */
    public double getVolumeTotalWithCoef() {
        return volumeTotalWithCoef;
    }

    /**
     * Sets the value of the volumeTotalWithCoef property.
     * 
     */
    public void setVolumeTotalWithCoef(double value) {
        this.volumeTotalWithCoef = value;
    }

}
