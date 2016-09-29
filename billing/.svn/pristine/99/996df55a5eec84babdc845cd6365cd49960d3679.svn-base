package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoiceDetail;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.LightTransactionManager;


import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.SelectMaxValueIDToCalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.UpdateMaxValueIDToCalcInvoice;

import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.precompiled.calcinvoice.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateSaldoDepartmentDetailsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateSaldoDepartmentQuery;


import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vostap on 06.05.2015.
 */
public class ResultCollector {
    public void saveResultToDataBase(List<CalcInvoice> list) {
        fillIDs(list);
        createMainInvoice(list);
        createDetailInvoice(list);
    }

    public void updateSaldoByDepartment(List<SaldoDepartment> list){
        new LightTransactionManager() {
            @Override
            protected void doOperation(Connection connection) {
                for (SaldoDepartment s : list) {
                    new UpdateSaldoDepartmentQuery().execute(connection, s);
                    new UpdateSaldoDepartmentDetailsQuery().execute(connection, s.getSaldoDetails());
                }
            }
        };
    }

    public void saveVolumeLKPToDataBase(List<CalcInvoiceVolumeLKP> list) {
        new LightTransactionManager() {
            @Override
            protected void doOperation(Connection connection) {
                PutCalcResultVolumeLKPInvoicePQuery putCalcResultInvoicePQuery = new PutCalcResultVolumeLKPInvoicePQuery(connection);
                for (CalcInvoiceVolumeLKP c:list){
                    putCalcResultInvoicePQuery.addToBatch(c);
                }
                putCalcResultInvoicePQuery.execute();
                putCalcResultInvoicePQuery.close();
            }
        };
    }
    public void saveCalcInvoiceStockWithoutPermission(List<CalcInvoiceStockWithoutPermission> list) {
        new LightTransactionManager() {
            @Override
            protected void doOperation(Connection connection) {
                PutCalcStrockWithoutPermissionPQuery putCalcStrockWithoutPermissionPQuery = new PutCalcStrockWithoutPermissionPQuery(connection);
                for (CalcInvoiceStockWithoutPermission c:list){
                    putCalcStrockWithoutPermissionPQuery.addToBatch(c);
                }
                putCalcStrockWithoutPermissionPQuery.execute();
                putCalcStrockWithoutPermissionPQuery.close();
            }
        };


    }
    public void saveCalcInvoiceHotWatterSupplier(List<CalcInvoiceHotWatterSupplier> list) {
        new LightTransactionManager() {
            @Override
            protected void doOperation(Connection connection) {
                /*PutCalcInvoiceTeploenergoPQuery query = new PutCalcInvoiceTeploenergoPQuery(connection);
                for (CalcInvoiceTeploenergo c:list){
                    query.addToBatch(c);
                }
                query.execute();
                query.close();*/
            }
        };
    }
    public void calculateAndSavePdvToDataBase() {

    }
    public void saveCalcInvoiceRain(List<CalcInvoiceRainsInvoice> list){
        new LightTransactionManager() {
            @Override
            protected void doOperation(Connection connection) {
                InsertCalcInvoiceRainPQuery query  = new InsertCalcInvoiceRainPQuery(connection);
                for (CalcInvoiceRainsInvoice c:list){
                    query.addToBatch(c);
                }
                query.execute();
                query.close();
            }
        };
    }
    public void updateSaldo(List<Saldo> list) {
       // updateSaldoDetails(list);
        updateMainAllSaldo(list);

    }
    public void updateCalcInvoice(List<CalcInvoice> list) {
        new LightTransactionManager() {
            @Override
            protected void doOperation(Connection connection) {
                UpdateCalcInoviceForAdingConsumerVolumePQuery updateCalcInoviceForAdingConsumerVolumePQuery =
                        new UpdateCalcInoviceForAdingConsumerVolumePQuery(connection);
                for (CalcInvoice c:list){

                    updateCalcInoviceForAdingConsumerVolumePQuery.addToBatch(c);
                }
                updateCalcInoviceForAdingConsumerVolumePQuery.execute();
                updateCalcInoviceForAdingConsumerVolumePQuery.close();
            }
        };
    }
    public void saveCalcInvoiceHotTeploenergo(List<CalcInvoiceTeploenergo> list) {
        new LightTransactionManager() {
            @Override
            protected void doOperation(Connection connection) {
                PutCalcInvoiceTeploenergoPQuery query = new PutCalcInvoiceTeploenergoPQuery(connection);
                for (CalcInvoiceTeploenergo c:list){
                    query.addToBatch(c);
                }
                query.execute();
                query.close();
            }
        };
    }

    private void updateMainAllSaldo(List<Saldo> list) {
        int cnt = 0;
        int packSize = 10000;
        List<Saldo> tmpList = new ArrayList<>();
        for (Saldo s:list){
            if (cnt == packSize){
                tmpList.add(s);
                _updateListSaldo(tmpList);
                cnt = 0;
                tmpList.clear();
            }else{
                tmpList.add(s);
                cnt++;
            }
        }
        _updateListSaldo(tmpList);
        System.out.println("end main saldo ");
       // updateSaldoDetails(list);
        System.out.println("end details saldo ");
    }

    /*private void updateSaldoDetails(List<Saldo> list) {
        new LightTransactionManager(){
            @Override
            protected void doOperation(Connection connection) {
                UpdateSaldoDetailsPQuery query = new UpdateSaldoDetailsPQuery(connection);
                for (Saldo s:list){
                    query.addToBatch(s.getDetailses());
                }
                query.execute();
                query.close();
            }
        };

    }*/

    private void _updateListSaldo(List<Saldo> list){
        new LightTransactionManager() {
            @Override
            protected void doOperation(Connection connection) {
                UpdateMainSaldoPQuery queryMain = new UpdateMainSaldoPQuery(connection);
                for (Saldo s:list){
                    queryMain.addToBatch(s);
                }
                queryMain.execute();
                queryMain.close();
            }
        };
        new LightTransactionManager(){
            @Override
            protected void doOperation(Connection connection) {
                UpdateSaldoDetailsPQuery query = new UpdateSaldoDetailsPQuery(connection);
                for (Saldo s:list){
                    query.addToBatch(s.getDetailses());
                }
                query.execute();
                query.close();
            }
        };
    }

    private void createDetailInvoice(List<CalcInvoice> list) {
        new LightTransactionManager() {
            @Override
            protected void doOperation(Connection connection) {
                PutCalcResultInvoiceDetailsPQuery putCalcResultInvoiceDetailsPQuery = new PutCalcResultInvoiceDetailsPQuery(connection);
                for (CalcInvoice calcInvoice : list) {
                    calcInvoice.getDetailses().forEach(putCalcResultInvoiceDetailsPQuery::addToBatch);
                }
                putCalcResultInvoiceDetailsPQuery.execute();
                putCalcResultInvoiceDetailsPQuery.close();
            }
        };

    }
    private void createMainInvoice(List<CalcInvoice> list) {
        new LightTransactionManager() {
            @Override
            protected void doOperation(Connection connection) {
                PutCalcResultInvoicePQuery putCalcResultInvoicePQuery = new PutCalcResultInvoicePQuery(connection);
                for (CalcInvoice c : list) {
                    if (c.getId() == null) System.out.println("fount null id in calcinvoice Result");
                    if (c.getContraAgent().getId() == null) {
                        System.out.println("empty contraAgent in " + c.getDepartmentInput().getId());
                    }
                    putCalcResultInvoicePQuery.addToBatch(c);
                }
                putCalcResultInvoicePQuery.execute();
                putCalcResultInvoicePQuery.close();
            }
        };

    }
    private synchronized void fillIDs(List<CalcInvoice> list) {
        new LightTransactionManager() {
            @Override
            protected void doOperation(Connection connection) {
                long id = new SelectMaxValueIDToCalcInvoice(null).execute(connection).get(0);
                for (CalcInvoice c : list) {
                    //Long id = this.generateIDCalcInvoice(connection);
                    id++;
                    c.setId(id);
                    for (CalcInvoiceDetail cd : c.getDetailses()) {
                        cd.setCalcInvoiceID(id);
                    }
                }
                new UpdateMaxValueIDToCalcInvoice().execute(connection, id);
            }
        };

    }



}
