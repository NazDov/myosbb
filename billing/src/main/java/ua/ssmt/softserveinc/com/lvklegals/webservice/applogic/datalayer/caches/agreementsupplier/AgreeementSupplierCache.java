package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.agreementsupplier;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.HotWaterSupplyAgreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;

import java.util.List;

/**
 * Created by vostap on 05.01.2016.
 */
public class AgreeementSupplierCache {
    private List<HotWaterSupplyAgreement> documents;
    private TransactionManager<HotWaterSupplyAgreement> tm = TransactionManager.getInstance();
    public AgreeementSupplierCache(){
        this.documents = tm.doSelectOperation(new AgreementSupplierOperation());
    }

    public synchronized List<HotWaterSupplyAgreement>  getDocuments() {
        return documents;
    }
}
