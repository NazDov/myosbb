package com.softserve.osbb.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by afedorak on 25.11.2016.
 */
@Entity
@Table(name = "sub_services", schema = "myosbb", catalog = "")
public class SubServices {
    private long id;
    private long serviceId;
    private String name;
    private long providerId;
    private double tariff;
    private String unitsOfMeasurement;

    @Id
    @Column(name = "id", nullable = false)
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name = "service_id", nullable = false)
    public long getServiceId() {
        return serviceId;
    }

    public void setServiceId(long serviceId) {
        this.serviceId = serviceId;
    }

    @Column(name = "name", nullable = false, length = 50)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Column(name = "provider_id", nullable = false)
    public long getProviderId() {
        return providerId;
    }

    public void setProviderId(long providerId) {
        this.providerId = providerId;
    }

    @Column(name = "tariff", nullable = false, precision = 0)
    public double getTariff() {
        return tariff;
    }

    public void setTariff(double tariff) {
        this.tariff = tariff;
    }

    @Column(name = "units_of_measurement", nullable = false, length = 50)
    public String getUnitsOfMeasurement() {
        return unitsOfMeasurement;
    }

    public void setUnitsOfMeasurement(String unitsOfMeasurement) {
        this.unitsOfMeasurement = unitsOfMeasurement;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SubServices that = (SubServices) o;

        if (id != that.id) return false;
        if (serviceId != that.serviceId) return false;
        if (providerId != that.providerId) return false;
        if (Double.compare(that.tariff, tariff) != 0) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (unitsOfMeasurement != null ? !unitsOfMeasurement.equals(that.unitsOfMeasurement) : that.unitsOfMeasurement != null)
            return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = (int) (id ^ (id >>> 32));
        result = 31 * result + (int) (serviceId ^ (serviceId >>> 32));
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (int) (providerId ^ (providerId >>> 32));
        temp = Double.doubleToLongBits(tariff);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (unitsOfMeasurement != null ? unitsOfMeasurement.hashCode() : 0);
        return result;
    }
}
