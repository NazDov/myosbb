package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.tariffcategoryforcalculateteplo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CategoryOfTariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Tariff;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.TransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.tariffs.GetAllTariffOperation;

import java.util.List;

/**
 * Created by vostap on 19.01.2016.
 */
public class TariffCategoryFroCalculateTeploCache {
    private List<CategoryOfTariff> documents;
    private TransactionManager<CategoryOfTariff> tm = TransactionManager.getInstance();
    public TariffCategoryFroCalculateTeploCache(Long id){
        this.documents = tm.doSelectOperation(new TariffCategoryForCalculateTeploOperation(id));
    }
    public synchronized List<CategoryOfTariff>  getDocuments() {
        return documents;
    }
}
