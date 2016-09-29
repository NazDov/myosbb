package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

import java.util.Date;

/**
 * Created by vostap on 01.12.2014.
 */
public class Rains {
    private Long id;
    private Department department;
    private Date period;
    private AreaType areaType;
    private Double area;
    private Double distributedCoeficient;
    private AreaType areaTypeHelper;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    public Date getPeriod() {
        return period;
    }

    public void setPeriod(Date period) {
        this.period = period;
    }

    public AreaType getAreaType() {
        return areaType;
    }

    public void setAreaType(AreaType areaType) {
        this.areaType = areaType;
    }

    public Double getArea() {
        return area;
    }

    public void setArea(Double area) {
        this.area = area;
    }

    public Double getDistributedCoeficient() {
        return distributedCoeficient;
    }

    public void setDistributedCoeficient(Double distributedCoeficient) {
        this.distributedCoeficient = distributedCoeficient;
    }

    public AreaType getAreaTypeHelper() {
        return areaTypeHelper;
    }

    public void setAreaTypeHelper(AreaType areaTypeHelper) {
        this.areaTypeHelper = areaTypeHelper;
    }
}
