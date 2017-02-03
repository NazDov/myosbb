package com.softserve.osbb.model;


import javax.persistence.*;

/**
 * Created by afedorak on 25.11.2016.
 */
@Entity
public class Services {
    private long serviceId;
    private Provider provider;
    private String name;
    private Double tariff;
    private String unitsOfMeasurement;
    private Osbb osbb;

    public Services(long serviceId) {
        this.serviceId = serviceId;
    }

    public Services() {
    }


    @Id
    @Column(name = "service_id", nullable = false)
    public long getServiceId() {
        return serviceId;
    }

    public void setServiceId(long serviceId) {
        this.serviceId = serviceId;
    }

    @ManyToOne
    @JoinColumn(name = "provider_id")
    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }

    @Column(name = "name", nullable = false, length = 50)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "tariff", nullable = true, precision = 0)
    public Double getTariff() {
        return tariff;
    }

    public void setTariff(Double tariff) {
        this.tariff = tariff;
    }

    @Column(name = "units_of_measurement", nullable = true, length = 50)
    public String getUnitsOfMeasurement() {
        return unitsOfMeasurement;
    }

    public void setUnitsOfMeasurement(String unitsOfMeasurement) {
        this.unitsOfMeasurement = unitsOfMeasurement;
    }

    @ManyToOne
    @JoinColumn(name = "osbb_id")
    public Osbb getOsbb() {
        return osbb;
    }

    public void setOsbb(Osbb osbb) {
        this.osbb = osbb;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Services services = (Services) o;

        if (serviceId != services.serviceId) return false;
        if (provider != null ? !provider.equals(services.provider) : services.provider != null) return false;
        if (name != null ? !name.equals(services.name) : services.name != null) return false;
        if (tariff != null ? !tariff.equals(services.tariff) : services.tariff != null) return false;
        if (unitsOfMeasurement != null ? !unitsOfMeasurement.equals(services.unitsOfMeasurement) : services.unitsOfMeasurement != null)
            return false;
        return osbb != null ? osbb.equals(services.osbb) : services.osbb == null;

    }

    @Override
    public int hashCode() {
        int result = (int) (serviceId ^ (serviceId >>> 32));
        result = 31 * result + (provider != null ? provider.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (tariff != null ? tariff.hashCode() : 0);
        result = 31 * result + (unitsOfMeasurement != null ? unitsOfMeasurement.hashCode() : 0);
        result = 31 * result + (osbb != null ? osbb.hashCode() : 0);
        return result;
    }
}
