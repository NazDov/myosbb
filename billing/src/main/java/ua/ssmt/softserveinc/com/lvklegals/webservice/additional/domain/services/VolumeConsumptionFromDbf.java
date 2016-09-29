package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services;

/**
 * @author vstoian
 * @version 1.0.0
 * @since 1.0.0
 */
public class VolumeConsumptionFromDbf {
    private String agreementNumber;
    private Double VolumeVv;
    private Double VolumeVp;

    public String getAgreementNumber() {
        return agreementNumber;
    }

    public void setAgreementNumber(String agreementNumber) {
        this.agreementNumber = agreementNumber;
    }

    public Double getVolumeVv() {
        return VolumeVv;
    }

    public void setVolumeVv(Double volumeVv) {
        VolumeVv = volumeVv;
    }

    public Double getVolumeVp() {
        return VolumeVp;
    }

    public void setVolumeVp(Double volumeVp) {
        VolumeVp = volumeVp;
    }
}
