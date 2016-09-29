package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

/**
 * Created by vostap on 10/12/2015.
 */
public class SourceInputPayment {
    private Long id;
    private String name;

    public SourceInputPayment(Long id) {
        this.id = id;
    }

    public SourceInputPayment(){

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
