package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

/**
 * Created by vostap on 11/29/2015.
 */
public class SaldoGroup  {
    private Long id;
    private String name;

    public SaldoGroup(Long id) {
        this.id = id;
    }

    public SaldoGroup() {
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
}
