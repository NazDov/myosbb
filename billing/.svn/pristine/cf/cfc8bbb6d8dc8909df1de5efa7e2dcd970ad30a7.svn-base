package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.enums.InvoiceEnum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.LightTransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.Profiller;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.database.DataSource;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vostap on 07.05.2015.
 */
public class CalculateHelper {

    private DataBaseManagement dataBaseManagement;
    private InvoiceUtils invoiceUtils;
    private TypeCalculations typeCalculations;

    public CalculateHelper() {
        this.dataBaseManagement = new DataBaseManagement();
        this.invoiceUtils = new InvoiceUtils();
        this.typeCalculations = new TypeCalculations(invoiceUtils);
    }

    public void calcPortion() {
        //ApplicationLogger.getLogger().debug("Caclulation on Counter or Norma");
        new Profiller("calculateByCounterOrNorma") {
            @Override
            protected void execute() {
                calculateByCounterOrNorma();
            }
        };
        //ApplicationLogger.getLogger().debug("Update invoice set Document AddingConsumingVolume");
        new Profiller("calculateAddConsumingVolume") {
            @Override
            protected void execute() {
                calculateAddConsumingVolume();
            }
        };
        //ApplicationLogger.getLogger().debug("Cacl invoice Rains");
        new Profiller("calculateRains") {
            @Override
            protected void execute() {
                calculateRains();
            }
        };
        //ApplicationLogger.getLogger().debug("Calc stock without permission");
        new Profiller("calculateStockWithoutPermission") {
            @Override
            protected void execute() {
               calculateStockWithoutPermission();
            }
        };
       // ApplicationLogger.getLogger().debug("Calc volume by LKP");
        new Profiller("calculateVolumeLKP") {
            @Override
            protected void execute() {
               calculateVolumeLKP();
            }
        };
        //ApplicationLogger.getLogger().debug("Calculation Add Consuming Volume");
        // calculateAddConsumingVolume();
        //ApplicationLogger.getLogger().debug("Calculate pdv");
        // calculatePDV();
        //ApplicationLogger.getLogger().debug("Calculate Hot watter supply");
        new Profiller("calculationHotWatterSupply") {
            @Override
            protected void execute() {
                calculationHotWatterSupply();
            }
        };
        recalculateSaldo();
        recalculateSaldoByDepartment();

    }

    private void calculationHotWatterSupply() {
        List<CalcInvoiceTeploenergo> list = this.typeCalculations.calculationInvoickeHotWatterSupplierLKP();
        new ResultCollector().saveCalcInvoiceHotTeploenergo(list);

        List<CalcInvoiceTeploenergo> listHotWatterSupplier = this.typeCalculations.calculationInvoiceHotWatterSupplier();
        new ResultCollector().saveCalcInvoiceHotTeploenergo(listHotWatterSupplier);
    }

    public void lockDateBase() {
        new LightTransactionManager() {
            @Override
            protected void doOperation(Connection connection) {
                dataBaseManagement.lockBD(connection);
            }
        };

    }

    public void unlockDateBase() {
        new LightTransactionManager() {
            @Override
            protected void doOperation(Connection connection) {
                dataBaseManagement.unlockDB(connection);
            }
        };

    }

    public void clearInvoices() {
        new LightTransactionManager() {
            @Override
            protected void doOperation(Connection connection) {
                dataBaseManagement.clearInvoice(connection);
            }
        };


    }

    public List<DepartmentInputInvoice> getAllDepartmentInputToCalculate() {
        return this.invoiceUtils.getDepartmentInputToInvoice();
    }

    private List<CalcInvoice> calculateInput(DepartmentInputInvoice dii) {

        if (dii.getDepartmentInputID() == 83160){
            int beakPoint = 0;
        }

        InvoiceEnum strategy = typeCalculations.investigateInput(dii);

        /*if (strategy == InvoiceEnum.INPUT_COUNTER_UNREGISTERED_TO_CALC_MIDDLE_ON_CHECKERS_OR_REPAIR){
            List<CalcInvoice> list = typeCalculations.calculatebyMiddle(dii);
            return list;
        }*/

        if (strategy == InvoiceEnum.INPUT_COUNTER_REGISTERED_ON_BEGIN_PERIOD_AND_HAVE_NO_DOCUMENT_REGISTER_AND_UNREGISTER) {
            List<CalcInvoice> list = typeCalculations.calculationByCounterInvoice(dii);
            return list;
        }
        if (strategy == InvoiceEnum.INPUT_COUNTER_NOT_EXIST_IN_CURRENT_PERIOD_AND_HAVE_NO_DOCUMENT_REGISTER_AND_UNREGISTER) {
            List<CalcInvoice> list = typeCalculations.calculateByNormaFull(dii);
            return list;
        }
        if (strategy == InvoiceEnum.INPUT_COUNTER_REGISTERED_ON_BEGIN_PERIOD_AND_HAVE_MANY_UNREGISTERED_AND_REGISTERED_DOCUMENTS) {
            List<CalcInvoice> list = typeCalculations.caclulationCounterUnregisteredOnBeginPeriodAndHaveManyUnregisteredAndRegisteredDocuments(dii, true);
            return list;
        }
        if (strategy == InvoiceEnum.INPUT_COUNTER_UNREGISTERED_ON_BEGIN_PERIOD_AND_HAVE_MANY_UNREGISTERED_AND_REGISTERED_DOCUMENTS) {
            List<CalcInvoice> list = typeCalculations.caclulationCounterUnregisteredOnBeginPeriodAndHaveManyUnregisteredAndRegisteredDocuments(dii, false);
            return list;
        }
        throw new RuntimeException("not Calc input " + dii.getDepartmentInputID() + " cannot select strategy");

    }

    private boolean checkInputOnClose(DepartmentInputInvoice dii) {
        if (dii.getDateEnd() == null) return false;
        if (dii.getDateEnd().getTime() < invoiceUtils.getPeriod().getTime()) return true;
        if (dii.getDateStart().getTime() > invoiceUtils.getPeriod().getTime()) return true;
        return false;
    }



    private void calculateByCounterOrNorma() {
        List<DepartmentInputInvoice> departmentInputInvoices = getAllDepartmentInputToCalculate();
        int currentCount = 0;
        int currentInPackage = 0;
        int packageSize = 10000;
        List<CalcInvoice> list = new ArrayList<>();
        for (DepartmentInputInvoice dii : departmentInputInvoices) {
            try {
                List<CalcInvoice> packageList = calculateInput(dii);
                list.addAll(packageList);
            } catch (Exception e) {
               e.printStackTrace();
            }

        }
        typeCalculations.recalculateInput(list);
        //typeCalculations.recalculateInputNew(list);
        this.saveResultToDataBase(list);
        System.out.println("Recalculate Input ");
//
        System.out.println("end recalculate Input");
        //transactionControl.commitTransaction(connection);
        this.invoiceUtils.refreshCalcInvoice();
    }

    private void saveResultToDataBase(List<CalcInvoice> list) {
        new ResultCollector().saveResultToDataBase(list);
    }

    private void calculateRains() {
        List<CalcInvoiceRainsInvoice> list = typeCalculations.calculationDepartmentRainsInvoice();
        new ResultCollector().saveCalcInvoiceRain(list);
    }

    private void calculateStockWithoutPermission() {
        List<CalcInvoiceStockWithoutPermission> list  = typeCalculations.calculationStockWithOutPermission();
        new ResultCollector().saveCalcInvoiceStockWithoutPermission(list);
        System.out.println("end saveCalcInvoiceStockWithoutPermission start Rains");
        List<CalcInvoiceStockWithoutPermission> listReains = typeCalculations.calculationStockWithOutPermissionWithRains();
        new ResultCollector().saveCalcInvoiceStockWithoutPermission(listReains);
    }

    private void calculateVolumeLKP() {
        List<CalcInvoiceVolumeLKP> list = typeCalculations.calculationVolumeLKP();
        new ResultCollector().saveVolumeLKPToDataBase(list);
    }

    private void calculateHotWatterSupplier() {
        List<CalcInvoiceHotWatterSupplier> list =  typeCalculations.calculationHotWatterSupplier();
        new ResultCollector().saveCalcInvoiceHotWatterSupplier(list);
    }

    private void calculateAddConsumingVolume() {
        List<CalcInvoice> list = typeCalculations.calculationAddConsumingVolumeInvoice();
        new ResultCollector().updateCalcInvoice(list);
        this.invoiceUtils.refreshCalcInvoice();
    }

    private void calculatePDV() {
        //typeCalculations.calculatePDV(connection);

    }

    private void recalculateSaldo() {
        List<Saldo> list = typeCalculations.recalculateSaldo();
        new ResultCollector().updateSaldo(list);
    }

    private void recalculateSaldoByDepartment(){
        List<SaldoDepartment> saldoDepartments = typeCalculations.recalculateSaldoByDepartment();
        new ResultCollector().updateSaldoByDepartment(saldoDepartments);
    }

}
