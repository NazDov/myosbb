package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

/**
 * Created by vostap on 09.09.2014.
 */
public class CounterModel {
    private Long id;
    private String name;
    private Integer maxLength;

    public CounterModel() {
    }

    public CounterModel(Long id) {
        this.id = id;
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

    public Integer getMaxLength() {
        return maxLength;
    }

    public void setMaxLength(Integer maxLength) {
        this.maxLength = maxLength;
    }

    @Override
    public String toString() {
        return "CounterModel{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", maxLength=" + maxLength +
                '}';
    }
}
