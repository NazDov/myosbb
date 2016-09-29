package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents;

/**
 * @author vstoian
 * @version 1.0.0
 * @since 1.0.0
 */
public class UnparsedVolumeConsumption {
    String agreementNumber;
    Float volumeVp;
    Float volumeVv;

    public String getAgreementNumber() {
        return agreementNumber;
    }

    public void setAgreementNumber(String agreementNumber) {
        this.agreementNumber = agreementNumber;
    }

    public Float getVolumeVp() {
        return volumeVp;
    }

    public void setVolumeVp(Float volumeVp) {
        this.volumeVp = volumeVp;
    }

    public Float getVolumeVv() {
        return volumeVv;
    }

    public void setVolumeVv(Float volumeVv) {
        this.volumeVv = volumeVv;
    }
}
