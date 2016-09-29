package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

/**
 * Created by ykhav on 12.02.15.
 */
public class CounterDiametr {
    private Long id;
    private Double diameter;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getDiameter() {
        return diameter;
    }

    public void setDiameter(Double diameter) {
        this.diameter = diameter;
    }
    @Override
    public String toString() {
        return ""+getDiameter();
    }
}
