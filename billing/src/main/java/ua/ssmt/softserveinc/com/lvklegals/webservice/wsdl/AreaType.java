
package ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for areaType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="areaType">
 *   &lt;complexContent>
 *     &lt;extension base="{http://inerfc.applogic.webservice.lvklegals.com.softserveinc.ssmt.ua/}comboBoxItem">
 *       &lt;sequence>
 *         &lt;element name="coefficient" type="{http://www.w3.org/2001/XMLSchema}double" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "areaType", propOrder = {
    "coefficient"
})
public class AreaType
    extends ComboBoxItem
{

    protected Double coefficient;

    /**
     * Gets the value of the coefficient property.
     * 
     * @return
     *     possible object is
     *     {@link Double }
     *     
     */
    public Double getCoefficient() {
        return coefficient;
    }

    /**
     * Sets the value of the coefficient property.
     * 
     * @param value
     *     allowed object is
     *     {@link Double }
     *     
     */
    public void setCoefficient(Double value) {
        this.coefficient = value;
    }

}
