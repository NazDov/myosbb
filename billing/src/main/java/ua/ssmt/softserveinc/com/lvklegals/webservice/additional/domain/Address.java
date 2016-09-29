package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

/**
 * Created by vostap on 09.09.2014.
 */
public class Address {
    private Long id;
    private Street street;
    private String number;
    private String letter;



    public Address(){
        this.street = new Street();
    }

    public Address(Long id){
        this();
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Street getStreet() {
        return street;
    }

    public void setStreet(Street street) {
        this.street = street;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getLetter() {
        return letter;
    }

    public void setLetter(String letter) {
        this.letter = letter;
    }

    @Override
    public String toString() {
        return "Address{" +
                "id=" + id +
                ", street=" + street +
                ", number='" + number + '\'' +
                ", letter='" + letter + '\'' +
                '}';
    }
}
