package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain;

/**
 * Created by vostap on 09.09.2014.
 */
public class OwnerAccount {
    private Long id;
    private String shortName;
    private String name;
    private String edrpo;
    private String address;
    private String ipn;
    private String numberPdv;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getShortName() {
        return shortName;
    }

    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEdrpo() {
        return edrpo;
    }

    public void setEdrpo(String edrpo) {
        this.edrpo = edrpo;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getIpn() {
        return ipn;
    }

    public void setIpn(String ipn) {
        this.ipn = ipn;
    }

    public String getNumberPdv() {
        return numberPdv;
    }

    public void setNumberPdv(String numberPdv) {
        this.numberPdv = numberPdv;
    }

    @Override
    public String toString() {
        return "OwnerAccount{" +
                "id=" + id +
                ", shortName=" + shortName +
                ", name='" + name + '\'' +
                ", edrpo='" + edrpo + '\'' +
                ", address='" + address + '\'' +
                ", ipn='" + ipn + '\'' +
                ", numberPdv='" + numberPdv + '\'' +
                '}';
    }
}
