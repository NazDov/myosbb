package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.tariffs;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Tariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.subservices.GetAllSubServiceOperation;

import java.util.List;

/**
 * Created by vostap on 25.12.2015.
 */
public class TariffsCache {

    private List<Tariff> documents;
    private TransactionManager<Tariff> tm = TransactionManager.getInstance();
    public TariffsCache(){
        this.documents = tm.doSelectOperation(new GetAllTariffOperation());
    }

    public synchronized List<Tariff>  getDocuments() {
        return documents;
    }


}
