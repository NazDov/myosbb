package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import java.util.Date;

/**
 * Created by vostap on 03.10.2014.
 */
public class DepartmentProperty {
    private CategoryOfTariff categoryOfTariff;
    private Area area;
    private Long id;
    private String name;
    private String konto;
    private String conto;
    private Date period;
    private BussinessProfile bussinessProfile;


    public DepartmentProperty() {
        this.categoryOfTariff = new CategoryOfTariff();
        this.area = new Area();
        this.bussinessProfile = new BussinessProfile();
    }

    public DepartmentProperty(Long id) {
        this();
        this.id = id;
    }

    public CategoryOfTariff getCategoryOfTariff() {
        return categoryOfTariff;
    }

    public void setCategoryOfTariff(CategoryOfTariff categoryOfTariff) {
        this.categoryOfTariff = categoryOfTariff;
    }

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getConto() {
        return conto;
    }

    public void setConto(String conto) {
        this.conto = conto;
    }

    @Override
    public String toString() {
        return "DepartmentProperty{" +
                "categoryOfTariff=" + categoryOfTariff +
                ", area=" + area +
                ", id=" + id +
                ", name='" + name +
                ", konto='" + konto +
                ", conto='" + conto +
                ", bussinessProfile='" + bussinessProfile +
                '}';
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public String getKonto() {
        return konto;
    }

    public void setKonto(String konto) {
        this.konto = konto;
    }

    public BussinessProfile getBussinessProfile() {
        return bussinessProfile;
    }

    public void setBussinessProfile(BussinessProfile bussinessProfile) {
        this.bussinessProfile = bussinessProfile;
    }
}
