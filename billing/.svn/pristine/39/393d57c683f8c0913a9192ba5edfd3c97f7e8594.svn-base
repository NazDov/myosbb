package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import java.util.Date;

/**
 * Created by vostap on 21.09.2014.
 */
public class Tariff {

    private Long id;
    private CategoryOfTariff category;
    private SubService subService;
    private Date dateInAction;
    private Double tariff;
    private Date period;

    public Tariff() {
        this.category = new CategoryOfTariff();
        this.subService = new SubService();
    }

    public Tariff(Long id) {
        this();
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public CategoryOfTariff getCategory() {
        return category;
    }

    public void setCategory(CategoryOfTariff category) {
        this.category = category;
    }


    public Date getDateInAction() {
        return dateInAction;
    }

    public void setDateInAction(Date dateInAction) {
        this.dateInAction = dateInAction;
    }

    public Double getTariff() {
        return tariff;
    }

    public void setTariff(Double tariff) {
        this.tariff = tariff;
    }


    public SubService getSubService() {
        return subService;
    }

    public void setSubService(SubService subService) {
        this.subService = subService;
    }

    @Override
    public String toString() {
        return "Tariff{" +
                "id=" + id +
                ", category=" + category +
                ", subService=" + subService +
                ", dateInAction=" + dateInAction +
                ", tariff=" + tariff +
                '}';
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }
}
