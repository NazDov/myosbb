
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for comboBoxItem complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="comboBoxItem">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="id" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="name" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "comboBoxItem", propOrder = {
    "id",
    "name"
})
@XmlSeeAlso({
    OwnerBankAccount.class,
    OperationType.class,
    SourceWaterSupply.class,
    Area.class,
    ContraAgentCategory.class,
    TypeActivity.class,
    CorrectionOfCountersReason.class,
    GroupWatterSupply.class,
    Service.class,
    TypeCounter.class,
    Payer.class,
    Model.class,
    Algorithm.class,
    CategoryOfTariff.class,
    AreaType.class,
    KindAgreement.class,
    ServicePayment.class,
    Bank.class,
    UnitOfMeasurement.class,
    PaymentType.class,
    CorrectionOfRealizeReason.class,
    ReasonAddingByCapacityTube.class,
    TypeAgreement.class,
    BussinessProfile.class,
    InternalTurnOver.class
})
public class ComboBoxItem {

    protected Long id;
    protected String name;

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
     * Gets the value of the name property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getName() {
        return name;
    }

    /**
     * Sets the value of the name property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setName(String value) {
        this.name = value;
    }

}
