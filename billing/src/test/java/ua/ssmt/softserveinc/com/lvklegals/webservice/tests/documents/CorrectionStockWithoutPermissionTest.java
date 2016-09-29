package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.documents;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.DocCorrectionStockWithOutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.invoice.correctionstockwithoutpermission.CorrectionStockWithoutPermissionCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.DocCommisionStockWithOutPermissionCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.AbstractTest;

import java.util.List;

/**
 * Created by vostap on 03.03.2016.
 */
public class CorrectionStockWithoutPermissionTest extends AbstractTest {

    @Test
    @Ignore
    public void testUpdate(){
        DocCommisionStockWithOutPermissionCondition condition = new DocCommisionStockWithOutPermissionCondition();
        condition.setId(3L);
        List<DocCorrectionStockWithOutPermission> list = service.searchCommisionStockWithOutPermission(condition,user);
        DocCorrectionStockWithOutPermission d = list.get(0);
        service.updateCommisionStockWithOutPermission(d,user);
    }
}
