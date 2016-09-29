package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

/**
 * Created by vstoian on 24.11.2014.
 */
public class PaymentType extends ComboBoxItem{
    private Long id;
    private String code;
    private String name;

    public PaymentType() {

    }

    public PaymentType(Long id) {
        super(id);
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

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    @Override
    public String toString() {
        return "PaymentType{" +
                "id=" + id +
                ", Code=" + code +
                ", Name='" + name + '\'' +
                '}';
    }
}
