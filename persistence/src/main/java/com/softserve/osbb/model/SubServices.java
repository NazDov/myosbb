package com.softserve.osbb.model;

import javax.persistence.*;

/**
 * Created by afedorak on 25.11.2016.
 */
@Entity
@Table(name = "sub_services", schema = "myosbb", catalog = "")
public class SubServices {
    private long id;
    private Services service;
    private String name;
    private Provider provider;
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

    @ManyToOne
    @JoinColumn(name = "service_id")
    public Services getService() {
        return service;
    }

    public void setService(Services service) {
        this.service = service;
    }

    @Column(name = "name", nullable = false, length = 50)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @ManyToOne
    @JoinColumn(name = "provider_id")
    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
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
        if (Double.compare(that.tariff, tariff) != 0) return false;
        if (service != null ? !service.equals(that.service) : that.service != null) return false;
        if (name != null ? !name.equals(that.name) : that.name != null) return false;
        if (provider != null ? !provider.equals(that.provider) : that.provider != null) return false;
        return unitsOfMeasurement != null ? unitsOfMeasurement.equals(that.unitsOfMeasurement) : that.unitsOfMeasurement == null;

    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = (int) (id ^ (id >>> 32));
        result = 31 * result + (service != null ? service.hashCode() : 0);
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (provider != null ? provider.hashCode() : 0);
        temp = Double.doubleToLongBits(tariff);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (unitsOfMeasurement != null ? unitsOfMeasurement.hashCode() : 0);
        return result;
    }
}
