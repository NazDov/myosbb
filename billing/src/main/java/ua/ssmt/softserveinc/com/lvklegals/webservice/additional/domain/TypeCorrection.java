package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

/**
 * Created by ykhav on 21.05.15.
 */
public class TypeCorrection {
    private Long id;
    private String name;

    public TypeCorrection() {
    }

    public TypeCorrection(Long id) {
        this();
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
}

