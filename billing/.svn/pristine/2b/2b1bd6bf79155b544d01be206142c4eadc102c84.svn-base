package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.PaymentFromParus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.taxbill.TaxBillDetail;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.taxbill.TaxBillHeader;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.AbstractValidator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.validators.Validator;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices.ResultCollector;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractSelectOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.authorization.GetUserOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.commons.GetComboBoxItemOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingbycapacitytube.CreateAddingByCapacityTubeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingbycapacitytube.DeleteAddingByCapacityTubeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingbycapacitytube.SearchAddingByCapacityTubeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingbycapacitytube.UpdateAddingByCapacityTubeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingbyconsumevolume.CreateAddingByConsumingVolumeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingbyconsumevolume.DeleteAddingConsumingVolumeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingbyconsumevolume.SearchAddingConsumingVolumeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingbyconsumevolume.UpdateAddingConsumingVolumeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingcalculationbyp3_3.CreateAddingCalculationByP3_3Operation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingcalculationbyp3_3.DeleteAddingCalculationByP3_3Operation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingcalculationbyp3_3.SearchAddingCalculationByP3_3Operation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.addingcalculationbyp3_3.UpdateAddingCalculationByP3_3QOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.agreements.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.commission.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.continuerepairorcheck.CreateContinueRepairOrCheckOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.continuerepairorcheck.DeleteContinueRepairOrCheckOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.continuerepairorcheck.SearchContinueRepairOrCheckOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.continuerepairorcheck.UpdateContinueRepairOrCheckOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correction.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correctionofcounter.CreateCorrectionOfCounterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correctionofcounter.DeleteCorrectionOfCounterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correctionofcounter.SearchCorrectionOfCounterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correctionofcounter.UpdateCorrectionOfCounterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correctionofrealize.CreateCorrectionOfRealizeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correctionofrealize.DeleteCorrectionOfRealizeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correctionofrealize.SearchCorrectionOfRealizeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.correctionofrealize.UpdateCorrectionOfRealizeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docCancelZaborgovanist.CreateCancelZaborgovanistOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docCancelZaborgovanist.DeleteCancelZaborgovanistOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docCancelZaborgovanist.SearchCancelZaborgovanistOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docCancelZaborgovanist.UpdateCancelZaborgovanistOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docCorrectionStockWithOutPermission.CreateDocCorrectionStockWithOutPermissionOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docCorrectionStockWithOutPermission.DeleteDocCorrectionWithOutPermitionOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docCorrectionStockWithOutPermission.SearchDocCorrectionStockWithOutPermissionOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docCorrectionStockWithOutPermission.UpdateDocCorrectionStockWithOutPermissionOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docPhysicalPayers.CreateDocPhysicalPayersOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docPhysicalPayers.DeletePsycalPayersOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docPhysicalPayers.SearchDocPhysicalPayersOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.docPhysicalPayers.UpdateDocPhysicalPayerOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.inputfactors.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.payment.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.paymentdepartment.CreatePaymentDepartmentOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.paymentdepartment.DeletePaymentDepartmentOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.paymentdepartment.SearchPaymentDepartmentOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.paymentdepartment.UpdatePaymentDepartmentOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.registerofcounter.CreateRegisterOfCounterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.registerofcounter.DeleteRegisterOfCounterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.registerofcounter.SearchRegisterCounterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.registerofcounter.UpdateRegisterOfCounterCounterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.stockwithoutpermission.CreateStockWithoutPermissionOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.stockwithoutpermission.DeleteStockWithoutPermissionOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.stockwithoutpermission.SearchStockWithoutPermission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.stockwithoutpermission.UpdateStockWithoutPermissionOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.unparsedpayment.CreateUnparsedPaymentOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.unparsedpayment.DeleteUnparsedPaymentOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.unparsedpayment.SearchUnparsedPaymentOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.unregisterofcounter.CreateUnregisterOfCounterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.unregisterofcounter.DeleteUnregisterOfCounterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.unregisterofcounter.SearchUnregisterOfCounterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.unregisterofcounter.UpdateUnregisterOfCounterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.documents.volumeconsumption.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.invoices.CheckForLockOperaiton;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.invoices.SearchSaldoOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.addresses.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.clientservice.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.contraagent.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.controllers.CreateControllerOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.controllers.DeleteControllerOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.controllers.SearchControllerOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.controllers.UpdateControllerOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.controllersReferense.CreateControlerreferenseOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.controllersReferense.DeleteControllerReferenseOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.controllersReferense.SearchControllerReferenceOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.controllersReferense.UpdateControllerReferenseOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.countermodel.CreateCounterModelOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.countermodel.DeleteCounterModelOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.countermodel.SearchCounterModelOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.countermodel.UpdateCounterModelOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.counters.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departmentinput.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departments.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departmentsubroute.CreateDepartmentSubRouteOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departmentsubroute.DeleteDepartmentSubRouteOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departmentsubroute.SearchDepartmentSubRouteOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.departmentsubroute.UpdateDepartmentSunRouteModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.discountRateNBU.CreateDiscountRateOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.discountRateNBU.DeleteDiscountRateOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.discountRateNBU.SearchDiscountRateOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.discountRateNBU.UpdateDiscountRateOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.elements.SearchBankOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.elements.SearchContoOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.elements.SearchDepAgreementOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.elements.SearchModelCountOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.hotwatersupplier.CreateHotWaterSupplierOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.hotwatersupplier.DeleteHotWatterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.hotwatersupplier.SearchHotWaterSupplierOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.hotwatersupplier.UpdateHotWaterSupplyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.inputdiameters.CreateInputDiameterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.inputdiameters.DeleteInputDiameterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.inputdiameters.SearchInputDiametersOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.inputdiameters.UpdateInputDiameterOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.inputs.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.municipals.CreateMunicipalOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.municipals.DeleteMunicipalOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.municipals.SearchMunicipalOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.municipals.UpdateMunicipalOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.ownerbankaccount.SearchOwnerBankAccount;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.paymenttype.CreatePaymentTypeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.paymenttype.DeletePaymentTypeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.paymenttype.SearchPaymentTypeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.paymenttype.UpdatePaymentTypeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.period.CurrentPeriodOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.routes.CreateRouteOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.routes.DeleteRouteOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.routes.SearchRouteOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.routes.UpdateRouteOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.servicepayment.SearchServicePaymentOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.streets.CreateStreetOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.streets.DeleteStreetOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.streets.SearchStreetOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.streets.UpdateStreetOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.subroutes.CreateSubRouteOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.subroutes.DeleteSubRouteOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.subroutes.SearchSubRouteOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.subroutes.UpdateSubRouteOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.subservices.SearchSubServiceOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.tariff.CreateTariffOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.tariff.DeleteTariffOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.tariff.SearchTariffOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.tariff.UpdateTariffOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.taxbill.TaxBillDetailOperations;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.taxbill.TaxBillHeaderOperations;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.typeareakoef.SearchAreaTypeOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateAllSaldoByDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoAllContraAgent;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo.RecalculateSaldoByDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.FormCommission;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.FormCorrection;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.imports.ImportPaymentFromDBFOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.imports.ImportVolumeConsumptionFromDbf;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.invoices.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.periodmanagment.MovePeriodToForward;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.services.periodmanagment.MovePeriodToPreviousOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SearchPaymentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService;

import javax.jws.WebParam;
import javax.jws.WebService;
import java.sql.Connection;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 28.08.2014.
 */

@WebService(endpointInterface = "ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc.ReferencesService",serviceName = "ReferencesService")
public class ReferencesServiceImpl implements ReferencesService {
    private TransactionManager getTransactionManager(){
        return TransactionManager.getInstance();
    }

    @Override
    public List<Municipal> searchMunicipal(MunicipalCondition condition, User user) {
        TransactionManager<Municipal> transactionManager = getTransactionManager();
        return transactionManager.doSelectOperation(new SearchMunicipalOperation(condition),user);
    }

    @Override
    public long updateMunicipal(Municipal municipal, User user) {
        TransactionManager<Municipal> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateMunicipalOperation() ,municipal,user);
    }

    @Override
    public long createMunicipal(Municipal municipal, User user) {
        TransactionManager<Municipal> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new CreateMunicipalOperation(),municipal,user);
    }

    @Override
    public long deleteMunicipal(Municipal municipal, User user) {
        TransactionManager<Municipal> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteMunicipalOperation(),municipal,user);
    }

    @Override
    public List<Street> searchStreet(StreetCondition condition, User user) {
        TransactionManager<Street> transactionManager = getTransactionManager();
        return transactionManager.doSelectOperation(new SearchStreetOperation(condition),user);
    }

    @Override
    public long createStreet(Street street, User user) {
        TransactionManager<Street> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new CreateStreetOperation(),street,user);
    }

    @Override
    public long updateStreet(Street street, User user) {
        TransactionManager<Street> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateStreetOperation(),street,user);
    }

    @Override
    public long deleteStreet(Street street, User user) {
        TransactionManager<Street> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteStreetOperation(),street,user);
    }

    @Override
    public List<User> autorizate(String userName, String userPassword)   {
        TransactionManager<User> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new GetUserOperation(userName,userPassword));
    }


    @Override
    public long importFromDbf(PaymentFromParus paymentFromParus, User user) {
        TransactionManager<PaymentFromParus> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new ImportPaymentFromDBFOperation(),paymentFromParus,user);
    }

    @Override
    public long clearPayment(List<PaymentFromParus> list, User user) {
        TransactionManager<PaymentFromParus> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteUploadedPaymentsFromParus(list),null,user);
    }

    @Override
    public long clearPaymentNotLoaded(List<PaymentFromParus> list, User user) {
        TransactionManager<PaymentFromParus> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteUploadedPaymentsFromParusNotLoaded(list),null,user);
    }
    @Override
    public long clearComission(List<Commission> list, User user) {
        TransactionManager<Commission> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteCommisionLoaded(list),null,user);
    }
    @Override
    public long clearComissionOSBB(List<Commission> list, User user) {
        TransactionManager<Commission> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteCommisionLoadedAlgoritmOsbb(list),null,user);
    }
    @Override
    public boolean importVolumeConsumptionFromDbf(String pathToFile, User user)  {
        TransactionManager<User> transactionManager = this.getTransactionManager();
        return ImportVolumeConsumptionFromDbf.importFromDbf(pathToFile, user);
    }

    @Override
    public boolean createCommissionFromPayments(Date dateBegin, Date dateEnd, Long id, User user)  {
        return FormCommission.createCommissionFromPayments(dateBegin, dateEnd, id, user);
    }

    @Override
    public boolean createCommissionFromPaymentDepartment(Date dateBegin, Date dateEnd, Long id, User user) {
        return FormCommission.createCommissionFromPaymentDepartment(dateBegin, dateEnd, id, user);
    }

    @Override
    public List<ComboBoxItem> getStreetsByPattern(Municipal municipal,String pattern,User user) {
        TransactionManager<ComboBoxItem> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new GetStreetsByCityOperation(municipal,pattern),user);
    }
    @Override
    public List<ComboBoxItem> getDepByAgreemnt(Agreement agreement,User user) {
        TransactionManager<ComboBoxItem> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new GetDepartamentByAgreementOperation(agreement),user);
    }
    @Override
    public List<ComboBoxItem> getContrAgentByDep(Department department,User user) {
        TransactionManager<ComboBoxItem> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new GetKontrAgentByDepOperation(department),user);
    }

    @Override
    public List<ComboBoxItem> getStreetsByPatternOnly(String pattern, User user)   {
        TransactionManager<ComboBoxItem> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new GetAllStreetsByPatternOperation(pattern),user);
    }

    @Override
    public List<ComboBoxItem> getMunicipalsByPattern(String pattern,User user)   {
        TransactionManager<ComboBoxItem> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new GetComboBoxItemOperation("[RefMunicipals]",pattern),user);
    }

    @Override
    public List<ComboBoxItem> getAllTypesCalculationPN(User user) {
        TransactionManager<ComboBoxItem> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new GetComboBoxItemOperation("[RefTypesCalculatePN]",null),user);
    }

    @Override
    public long createHotWatterSupplier(HotWaterSupplier hotWaterSupplier,User user)   {
        TransactionManager<HotWaterSupplier> transactionManager = getTransactionManager();
        long res = transactionManager.doModifyOperation(new CreateHotWaterSupplierOperation(),hotWaterSupplier,user);
        return res;
    }
    @Override
    public long updateHotWatterSupplier(HotWaterSupplier hotWaterSupplier,User user)  {
        TransactionManager<HotWaterSupplier> transactionManager = getTransactionManager();
        long res = transactionManager.doModifyOperation(new UpdateHotWaterSupplyOperation(),hotWaterSupplier,user);
        return res;
    }
    @Override
    public long deleteHotWatterSupplier(HotWaterSupplier hotWaterSupplier,User user)  {
        TransactionManager<HotWaterSupplier> tm = this.getTransactionManager();
        return tm.doModifyOperation(new DeleteHotWatterOperation(), hotWaterSupplier,user);
    }
    @Override
    public long createContraAgent(ContraAgent contraAgent,User user)   {
        TransactionManager<ContraAgent> transactionManager = getTransactionManager();
        long res = transactionManager.doModifyOperation(new CreateContraAgentOperation(),contraAgent,user);
        return res;
    }
    @Override
    public long deleteContraAgent(ContraAgent contraAgent,User user)  {
        TransactionManager<ContraAgent> tm = this.getTransactionManager();
        return tm.doModifyOperation(new DeleteContraAgentOperation(), contraAgent,user);
    }
    @Override
    public long updateContraAgent(ContraAgent contraAgent,User user)  {
        TransactionManager<ContraAgent> transactionManager = getTransactionManager();
        long res = transactionManager.doModifyOperation(new UpdateContraAgentOperation(),contraAgent,user);
        return res;
    }
    @Override
    public List<ContraAgent> searchContraAgent(ContraAgentCondition contraAgentCondition,User user)  {
        TransactionManager<ContraAgent> transactionManager = getTransactionManager();
        return transactionManager.doSelectOperation(new SearchContraAgentOperation(contraAgentCondition),user);
    }
    @Override
    public List<HotWaterSupplier> searchHotWaterSupply(HotWaterSupplierCondition hotWaterSupplierCondition,User user)  {
        TransactionManager<HotWaterSupplier> transactionManager = getTransactionManager();
        return transactionManager.doSelectOperation(new SearchHotWaterSupplierOperation(hotWaterSupplierCondition),user);

    }

    @Override
    public List<ComboBoxItem> searchContraAgentByPattern(String query, User user)  {
        TransactionManager<ComboBoxItem> transactionManager = getTransactionManager();
        return transactionManager.doSelectOperation(new SearchContraAgentByPatternOperation(query),user);
    }

    @Override
    public List<ContraAgent> searchContraAgentWithAgreement(ContraAgentCondition contraAgentCondition, User user)  {
        TransactionManager<ContraAgent> transactionManager = getTransactionManager();
        return transactionManager.doSelectOperation(new SearchContraAgentWithAgreementOperation(contraAgentCondition),user);
    }

    @Override
         public List<ComboBoxItem> searchBank(String query,User user)  {
        TransactionManager<ComboBoxItem> tmp = this.getTransactionManager();
        return tmp.doSelectOperation(new SearchBankOperation(query),user);
    }
    @Override
    public List<ComboBoxItem> searchConto(String query,User user)  {
        TransactionManager<ComboBoxItem> tmp = this.getTransactionManager();
        return tmp.doSelectOperation(new SearchContoOperation(query),user);
    }
    @Override
    public List<ComboBoxItem> searchCounterModelAutoComplete(String query,User user)  {
        TransactionManager<ComboBoxItem> tmp = this.getTransactionManager();
        return tmp.doSelectOperation(new SearchModelCountOperation(query),user);
    }
    @Override
    public List<ComboBoxItem> searchAgreementDepAutoComplete(String query,User user)  {
        TransactionManager<ComboBoxItem> tmp = this.getTransactionManager();
        return tmp.doSelectOperation(new SearchDepAgreementOperation(query),user);
    }
    @Override
    public List<ComboBoxItem> getAllArea(User user)   {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefAreas]", null),user);
    }
    @Override
    public List<ComboBoxItem> getAllTypeCorrection(User user)   {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefTypeCorrection]", null),user);
    }
    public List<ComboBoxItem> getAllBussinessProfile(User user)   {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefBussinessProfile]", null),user);
    }
    public List<ComboBoxItem> getAllPayer(User user)   {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefPayer]", null),user);
    }
    @Override
    public List<ComboBoxItem> getAllGroupWatterConsuming(User user)   {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefWaterConsumplionGroup]",null),user);
    }
    @Override
    public List<ComboBoxItem> getAllKindsActivity(User user)  {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefKindsOfActivity]",null),user);
    }
    @Override
    public List<ComboBoxItem> getAllTypeCounter(User user)  {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefTypeCounter]",null),user);
    }
    @Override
    public List<ComboBoxItem> getAllContraAgentCategories(User user)  {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefCategoryKontragent]",null),user);
    }

    @Override
    public List<ComboBoxItem> getAllSourceOfFunds(User user)  {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefSourceOfFunds]",null),user);
    }

    @Override
    public List<ComboBoxItem> getAllCounterModels(User user)  {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefCounterModels]",null),user);
    }
    @Override
    public List<ComboBoxItem> getAllDiameters(User user)   {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefInputDiameters]",null),user);
    }
    @Override
    public List<ComboBoxItem> getAllCounters(User user)  {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefCounterDiametr]",null),user);
    }
    @Override
    public List<ComboBoxItem> getAllUnitOfMeasurements(User user)  {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefUnitOfMeasures]",null),user);
    }
    @Override
    public List<ComboBoxItem> getAllMainServices(User user)  {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefServices]",null),user);
    }

    @Override
    public List<ComboBoxItem> getAllSubServices(User user)   {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefSubServices]",null),user);
    }

    @Override
    public List<ComboBoxItem> getAllPaymentServices(User user)   {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefServicesPayment]",null),user);
    }
    @Override
    public List<ComboBoxItem> getAllInternalTurnOver(User user)   {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefInternalTurnOver]",null),user);
    }
    @Override
    public List<ComboBoxItem> getCategoriesOfTariff(User user) {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefTariffCategory]",null),user);
    }

    @Override
    public List<ComboBoxItem> getUnregisterCounterReasons(User user)  {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[DocUnregisterCounterReasons]",null),user);
    }

    @Override
    public List<ComboBoxItem> getUnregisterCounterOperationType(User user)  {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[DocUnregisterCounterOperationType]",null),user);
    }

    @Override
    public List<ComboBoxItem> getAllCorrectionOfCounterReason(User user)  {
        //RefCorrectionReasons
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefCorrectionReasons]",null),user);
    }

    @Override
    public List<ComboBoxItem> getAllKindAgreements(User user)   {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefKindAgreement]",null),user);
    }

    @Override
    public List<ComboBoxItem> getAllTypeAgreements(User user)  {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefTypeAgreement]",null),user);
    }

    @Override
    public List<ComboBoxItem> getAllPaymentTypes(User user) {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefPaymentType]",null),user);
    }

    @Override
    public List<ComboBoxItem> getAllOwners(User user)   {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefOwner]",null),user);
    }

    public List<ComboBoxItem> getAllOwnerBankAccounts(User user) {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefOwnerBankAccount]",null),user);
    }

    @Override
    public List<ComboBoxItem> getAllAreaTypes(User user)  {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefAreaType]",null),user);
    }

    @Override
    public List<ComboBoxItem> getAllAlgorithms(User user)   {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefCalcAlgorithm]",null),user);
    }

    @Override
         public List<ComboBoxItem> getAgreementByConsumer(AgreementCondition condition, User user)   {
        TransactionManager<ComboBoxItem> tm = this.getTransactionManager();
        return tm.doSelectOperation(new SearchAgreementToComboBox(condition),user);
    }
    @Override
    public List<ComboBoxItem> getDepByAgr(DepartmentCondition condition, User user)   {
        TransactionManager<ComboBoxItem> tm = this.getTransactionManager();
        return tm.doSelectOperation(new SearchDepartamentToComboBoxOperation(condition),user);
    }
    @Override
    public List<ComboBoxItem> getAgreementByDep(AgreementCondition condition, User user)   {
        TransactionManager<ComboBoxItem> tm = this.getTransactionManager();
        return tm.doSelectOperation(new SearchAgreementToComboBoxByDep(condition),user);
    }
    @Override
    public List<ComboBoxItem> getDepAgreementByConsumer(DepartmentCondition condition, User user)   {
        TransactionManager<ComboBoxItem> tm = this.getTransactionManager();
        return tm.doSelectOperation(new SearchDepartamentToComboBoxOperation(condition),user);
    }
    @Override
    public List<ComboBoxItem> getInputByConsumer(InputCondition condition, User user)   {
        TransactionManager<ComboBoxItem> tm = this.getTransactionManager();
        return tm.doSelectOperation(new SearchInputToComboBoxOperation(condition), user);
    }
    @Override
    public List<SubService> searchSubService(SubServiceCondition condition,User user)   {
        TransactionManager<SubService> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchSubServiceOperation(condition), user);
    }

    @Override
    public long createDepartment(Department department,User user)   {
        TransactionManager<Department> tm = this.getTransactionManager();
        return tm.doModifyOperation(new CreateDepartmentsOperation(), department,user);
    }
    @Override
    public long updateDepartment(Department department,User user)   {
        TransactionManager<Department> tm = this.getTransactionManager();
        return tm.doModifyOperation(new UpdateDepartmentModifyOperation(), department, user);
    }
    @Override
    public long deleteDepartment(Department department,User user)   {
        TransactionManager<Department> tm = this.getTransactionManager();
        return tm.doModifyOperation(new DeleteDepartmentOperation(), department, user);
    }
    @Override
    public List<Department> searchDepartment(DepartmentCondition departmentCondition,User user)   {
        TransactionManager<Department> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchDepartmentOperation(departmentCondition),user);
    }
    @Override
    public List<ComboBoxItem> getAllCategoryOfRealize(User user)   {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefDepartmentCategoryOfRealize]", null), user);
    }
    @Override
    public List<ComboBoxItem> getAllCategoryOfTariff(User user)   {
        TransactionManager<ComboBoxItem> tm  = this.getTransactionManager();
        return tm.doSelectOperation(new GetComboBoxItemOperation("[RefDepartmentCatgories]", null), user);
    }
    @Override
    public long createCounterModel(CounterModel counterModel,User user)  {
        TransactionManager<CounterModel> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateCounterModelOperation(), counterModel,user);
    }
    @Override
    public long updateCounterModel(CounterModel counterModel,User user) {
        TransactionManager<CounterModel> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateCounterModelOperation(), counterModel, user);
    }
    @Override
    public long deleteCounterModel(CounterModel counterModel,User user)  {
        TransactionManager<CounterModel> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteCounterModelOperation(), counterModel,user);
    }
    @Override
    public List<CounterModel> searchCounterModel(CounterModelCondition condition,User user) {
        TransactionManager<CounterModel> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchCounterModelOperation(condition), user);
    }
    @Override
    public long createAddress(Address address,User user) {
        TransactionManager<Address> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateAddressOperation(), address,user);
    }
    @Override
    public long updateAddress(Address address,User user) {
        TransactionManager<Address> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateAddressOperation(), address, user);
    }
    @Override
    public long deleteAddress(Address address,User user)  {
        TransactionManager<Address> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteAddressOperation(), address,user);
    }
    @Override
    public List<Address> searchAddress(AddressCondition condition,User user)  {
        TransactionManager<Address> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchAddressOperation(condition), user);
    }

    @Override
    public long createInputDiameter(InputDiameter diameter,User user)   {
        TransactionManager<InputDiameter> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateInputDiameterOperation(),diameter,user);
    }
    @Override
    public long updateInputDiameter(InputDiameter diameter,User user)  {
        TransactionManager<InputDiameter> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateInputDiameterOperation(), diameter, user);
    }
    @Override
    public long deleteInputDiameter(InputDiameter diameter,User user) {
        TransactionManager<InputDiameter> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteInputDiameterOperation(),diameter,user);
    }
    @Override
    public List<InputDiameter>  searchInputDiameter(InputDiameterCondition condition,User user)  {
        TransactionManager<InputDiameter> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchInputDiametersOperation(condition), user);
    }
    @Override
    public long createInput(Input input,User user) {
        TransactionManager<Input> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateInputOperation(),input,user);
    }
    @Override
    public long updateInput(Input input,User user) {
        TransactionManager<Input> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateInputOperation(), input, user);
    }
    @Override
    public long deleteInput(Input input,User user)  {
        TransactionManager<Input> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteInputOperation(),input,user);
    }
    @Override
    public List<Input> searchInput(InputCondition condition,User user)   {
        TransactionManager<Input> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchInputOperation(condition), user);
    }
    @Override
    public long createCounter(Counter counter,User user)   {
        TransactionManager<Counter> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateCounterOperation(),counter,user);
    }
    @Override
    public long updateCounter(Counter counter,User user) {
        TransactionManager<Counter> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateCounterOperation(), counter, user);
    }
    @Override
    public long deleteCounter(Counter counter,User user) {
        TransactionManager<Counter> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteCounterOperation(),counter,user);
    }
    @Override
    public List<Counter> searchCounter(CounterCondition condition,User user)   {
        TransactionManager<Counter> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchCounterOperation(condition), user);
    }
    @Override
    public List<DiscountRateNBU> searchNBURate(DicountRateNBUConditions condition,User user)   {
        TransactionManager<DiscountRateNBU> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchDiscountRateOperation(condition), user);
    }

    @Override
    public long deleteNBURate(DiscountRateNBU discountRateNBU,User user) {
        TransactionManager<DiscountRateNBU> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteDiscountRateOperation(),discountRateNBU,user);
    }

    @Override
    public long updateNBURate(DiscountRateNBU discountRateNBU,User user) {
        TransactionManager<DiscountRateNBU> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateDiscountRateOperation(), discountRateNBU, user);
    }
    @Override
    public long createNBURate(DiscountRateNBU discountRateNBU,User user)   {
        TransactionManager<DiscountRateNBU> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateDiscountRateOperation(),discountRateNBU,user);
    }
    @Override
    public long createTariff(Tariff tariff,User user)   {
        TransactionManager<Tariff> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateTariffOperation(), tariff,user);
    }

    @Override
    public long updateTariff(Tariff tariff,User user)   {
        TransactionManager<Tariff> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateTariffOperation(), tariff, user);
    }

    @Override
    public long deleteTariff(Tariff tariff,User user)  {
        TransactionManager<Tariff> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteTariffOperation(), tariff,user);
    }

    @Override
    public List<Tariff> searchTariff(TariffCondition condition,User user)   {
        TransactionManager<Tariff> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchTariffOperation(condition), user);
    }

    @Override
    public long createRoute(Route route,User user)  {
        TransactionManager<Route> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateRouteOperation(), route,user);
    }

    @Override
    public long updateRoute(Route route,User user)   {
        TransactionManager<Route> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateRouteOperation(), route, user);
    }

    @Override
    public long deleteRoute(Route route,User user)  {
        TransactionManager<Route> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteRouteOperation(), route,user);
    }

    @Override
    public List<Route> searchRoutes(RouteConditions conditions,User user)   {
        TransactionManager<Route> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchRouteOperation(conditions), user);
    }

    @Override
    public long createSubRoute(SubRoute subRoute,User user)   {
        TransactionManager<SubRoute> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateSubRouteOperation(), subRoute,user);
    }

    @Override
    public long updateSubRoute(SubRoute subRoute,User user)   {
        TransactionManager<SubRoute> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateSubRouteOperation(), subRoute, user);
    }

    @Override
    public long deleteSubRoute(SubRoute subRoute,User user)   {
        TransactionManager<SubRoute> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteSubRouteOperation(), subRoute, user);
    }

    @Override
    public List<SubRoute> searchSubRoute(SubRouteCondition condition,User user)   {
        TransactionManager<SubRoute> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchSubRouteOperation(condition), user);
    }
    @Override
    public List<TypeAreaKoef> searchAreaTypeKoef(TypeAreaKoefConditions condition,User user)  {
        TransactionManager<TypeAreaKoef> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchAreaTypeOperation(condition), user);
    }


    @Override
    public long createController(Controller controller,User user)   {
        TransactionManager<Controller> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateControllerOperation(), controller,user);
    }

    @Override
    public long updateController(Controller controller,User user)   {
        TransactionManager<Controller> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateControllerOperation(), controller, user);
    }

    @Override
    public long deleteController(Controller controller,User user)  {
        TransactionManager<Controller> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteControllerOperation(), controller, user);
    }

    @Override
    public List<Controller> searchController(ControllerCondition controllerCondition,User user)   {
        TransactionManager<Controller> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchControllerOperation(controllerCondition), user);
    }

    @Override
    public List<ControllersReferense> searchControllerReferense(ControllerReferenseCondition controllerReferenseCondition,User user)   {
        TransactionManager<ControllersReferense> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchControllerReferenceOperation(controllerReferenseCondition), user);
    }
    @Override
    public long createControllerReferense(ControllersReferense controllersReferense,User user)   {
        TransactionManager<ControllersReferense> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateControlerreferenseOperation(), controllersReferense,user);
    }
    @Override
    public long updateControllerReferense(ControllersReferense controllersReferense,User user)   {
        TransactionManager<ControllersReferense> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateControllerReferenseOperation(), controllersReferense, user);
    }
    @Override
    public long deleteControllerReferense(ControllersReferense controllersReferense,User user)  {
        TransactionManager<ControllersReferense> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteControllerReferenseOperation(), controllersReferense, user);
    }
    @Override
    public long createRegisterOfCounterDocument(RegisterOfCounter registerOfCounter,User user)   {
        TransactionManager<RegisterOfCounter> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateRegisterOfCounterOperation(), registerOfCounter, user);
    }

    @Override
    public long updateRegisterOfCounterDocument(RegisterOfCounter registerOfCounter,User user)   {
        TransactionManager<RegisterOfCounter> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateRegisterOfCounterCounterOperation(), registerOfCounter, user);
    }

    @Override
    public long deleteRegisterOfCounterDocument(RegisterOfCounter registerOfCounter,User user)   {
        TransactionManager<RegisterOfCounter> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteRegisterOfCounterOperation(), registerOfCounter, user);
    }

    @Override
    public List<RegisterOfCounter> searchRegisterOfCounterDocument(RegisterOfCounterCondition condition,User user)   {
        TransactionManager<RegisterOfCounter> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchRegisterCounterOperation(condition), user);
    }

    @Override
    public long createUnregisterOfCounterDocument(UnregisterOfCounter unregisterOfCounter,User user)   {
        TransactionManager<UnregisterOfCounter> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateUnregisterOfCounterOperation(), unregisterOfCounter, user);

    }

    @Override
    public long updateUnregisterOfCounterDocument(UnregisterOfCounter unregisterOfCounter,User user)   {
        TransactionManager<UnregisterOfCounter> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateUnregisterOfCounterOperation(), unregisterOfCounter, user);
    }

    @Override
    public long deleteUnregisterOfCounterDocument(UnregisterOfCounter unregisterOfCounter,User user)  {
        TransactionManager<UnregisterOfCounter> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteUnregisterOfCounterOperation(), unregisterOfCounter, user);
}

    @Override
    public List<UnregisterOfCounter> searchUnregisterCounterOperation(UnregisterOfCounterCondition counterCondition,User user)   {
        TransactionManager<UnregisterOfCounter> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchUnregisterOfCounterOperation(counterCondition), user);
    }

    @Override
    public long createCorrectionOfCounterDocument(CorrectionOfCounter correctionOfCounter,User user)   {
        TransactionManager<CorrectionOfCounter> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateCorrectionOfCounterOperation(), correctionOfCounter, user);
    }

    @Override
    public long updateCorrectionOfCounterDocument(CorrectionOfCounter correctionOfCounter,User user)  {
        TransactionManager<CorrectionOfCounter> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateCorrectionOfCounterOperation(), correctionOfCounter, user);
    }

    @Override
    public long deleteCorrectionOfCounterDocument(CorrectionOfCounter correctionOfCounter,User user) {
        TransactionManager<CorrectionOfCounter> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteCorrectionOfCounterOperation(), correctionOfCounter, user);
    }

    @Override
    public List<CorrectionOfCounter> searchCorrectionOfCounterDocument(CorrectionOfCounterCondition correctionOfCounterCondition,User user)   {
        TransactionManager<CorrectionOfCounter> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchCorrectionOfCounterOperation(correctionOfCounterCondition), user);
    }

    @Override
    public List<InputFactor> searchCounterToInputFactors(InputFactorCondition condition,User user)   {
        TransactionManager<InputFactor> transactionManager = getTransactionManager();
        return transactionManager.doSelectOperation(new SearchInputFactorsOperation(condition), user);
    }

    @Override
    public long insertFactors(InputFactor factor,User user) {
        TransactionManager<InputFactor> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new InputFactorsOperation(), factor, user);
    }

    @Override
    public long deleteFactors(InputFactor factor, User user) {
        TransactionManager<InputFactor> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteInputFactorOperaition(), factor, user);
    }

    @Override
    public List<AddingByCapacityTube> searchAddingByCapacityTube(AddingByCapacityCondition condition,User user)   {
        TransactionManager<AddingByCapacityTube> transactionManager = getTransactionManager();
        return transactionManager.doSelectOperation(new SearchAddingByCapacityTubeOperation(condition), user);
    }

    @Override
    public long createAddingByCapacityTube(AddingByCapacityTube addingByCapacityTube,User user) {
        TransactionManager<AddingByCapacityTube> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new CreateAddingByCapacityTubeOperation(), addingByCapacityTube,user);
    }

    @Override
    public long updateAddingByCapacityTube(AddingByCapacityTube addingByCapacityTube,User user)  {
        TransactionManager<AddingByCapacityTube> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateAddingByCapacityTubeOperation(), addingByCapacityTube, user);
    }

    @Override
    public long deleteAddingByCapacityTube(AddingByCapacityTube addingByCapacityTube,User user) {
        TransactionManager<AddingByCapacityTube> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteAddingByCapacityTubeOperation(), addingByCapacityTube, user);
    }
    @Override
    public List<CancelZaborgovanist> searchCancelZaborgovanist(CancelZaborgovanistCondition condition,User user)   {
        TransactionManager<CancelZaborgovanist> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchCancelZaborgovanistOperation(condition), user);
    }

    @Override
    public long createCancelZaborgovanist(CancelZaborgovanist cancelZaborgovanist,User user)  {
        TransactionManager<CancelZaborgovanist> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateCancelZaborgovanistOperation(), cancelZaborgovanist, user);
    }
    @Override
    public long updateCancelZaborgovanist(CancelZaborgovanist cancelZaborgovanist,User user) {
        TransactionManager<CancelZaborgovanist> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateCancelZaborgovanistOperation(), cancelZaborgovanist, user);
    }

    @Override
    public long deleteCancelZaborgovanist(CancelZaborgovanist cancelZaborgovanist,User user) {
        TransactionManager<CancelZaborgovanist> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteCancelZaborgovanistOperation(),cancelZaborgovanist,user);
    }
    @Override
    public List<CorrectionOfRealize> searchCorrectionOfRealize(CorrectionOfRealizeCondition condition,User user)   {
        TransactionManager<CorrectionOfRealize> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchCorrectionOfRealizeOperation(condition), user);
    }

    @Override
    public long createCorrectionOfRealize(CorrectionOfRealize correctionOfRealize,User user)  {
        TransactionManager<CorrectionOfRealize> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateCorrectionOfRealizeOperation(), correctionOfRealize, user);
    }

    @Override
    public long updateCorrectionOfRealize(CorrectionOfRealize correctionOfRealize,User user) {
        TransactionManager<CorrectionOfRealize> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateCorrectionOfRealizeOperation(), correctionOfRealize, user);
    }

    @Override
    public long deleteCorrectionOfRealize(CorrectionOfRealize correctionOfRealize,User user) {
        TransactionManager<CorrectionOfRealize> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteCorrectionOfRealizeOperation(),correctionOfRealize,user);
    }

    @Override
    public long createAddingByConsumingVolume(AddingByConsumingVolume addingByConsumingVolume,User user)  {
        TransactionManager<AddingByConsumingVolume> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new CreateAddingByConsumingVolumeOperation(),addingByConsumingVolume,user);
    }

    @Override
    public long updateAddingByConsumingVolume(AddingByConsumingVolume addingByConsumingVolume,User user) {
        TransactionManager<AddingByConsumingVolume> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateAddingConsumingVolumeOperation(), addingByConsumingVolume, user);
    }

    @Override
    public long deleteAddingByConsumingVolume(AddingByConsumingVolume addingByConsumingVolume,User user)  {
        TransactionManager<AddingByConsumingVolume> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteAddingConsumingVolumeOperation(), addingByConsumingVolume, user);
    }

    @Override
    public List<AddingByConsumingVolume> searchAddingByConsumingVolume(AddingByConsumingVolumeCondition addingByConsumingVolumeCondition,User user)   {
        TransactionManager<AddingByConsumingVolume> transactionManager = getTransactionManager();
        return transactionManager.doSelectOperation(new SearchAddingConsumingVolumeOperation(addingByConsumingVolumeCondition), user);
    }

    @Override
    public long createContinueRepairOrCheck(ContinueRepairOrCheck continueRepairOrCheck,User user)  {
        TransactionManager<ContinueRepairOrCheck> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new CreateContinueRepairOrCheckOperation(), continueRepairOrCheck,user);
    }

    @Override
    public long updateContinueRepairOrCheck(ContinueRepairOrCheck continueRepairOrCheck,User user) {
        TransactionManager<ContinueRepairOrCheck> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateContinueRepairOrCheckOperation(), continueRepairOrCheck, user);
    }

    @Override
    public long deleteContinueRepairOrCheck(ContinueRepairOrCheck continueRepairOrCheck,User user) {
        TransactionManager<ContinueRepairOrCheck> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteContinueRepairOrCheckOperation(), continueRepairOrCheck, user);
    }

    @Override
    public List<ContinueRepairOrCheck> searchContinueRepairOrCheck(ContinueRepairOrCheckCondition continueRepairOrCheck,User user)   {
        TransactionManager<ContinueRepairOrCheck> transactionManager = getTransactionManager();
        return transactionManager.doSelectOperation(new SearchContinueRepairOrCheckOperation(continueRepairOrCheck), user);
    }

    @Override
    public long createAddingCalculationByP3_3(AddingCalculationByP3 addingCalculationByP3,User user)  {
        TransactionManager<AddingCalculationByP3> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateAddingCalculationByP3_3Operation(), addingCalculationByP3, user);
    }

    @Override
    public long updateAddingCalculationByP3_3(AddingCalculationByP3 addingCalculationByP3,User user)  {
        TransactionManager<AddingCalculationByP3> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateAddingCalculationByP3_3QOperation(), addingCalculationByP3, user);
    }

    @Override
    public long deleteAddingCalculationByP3_3(AddingCalculationByP3 addingCalculationByP3,User user) {
        TransactionManager<AddingCalculationByP3> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteAddingCalculationByP3_3Operation(), addingCalculationByP3, user);
    }

    @Override
    public List<AddingCalculationByP3> searchAddingCalculationByP3_3(AddingCalculationByP3Condition addingCalculationByP3Condition,User user)   {
        TransactionManager<AddingCalculationByP3> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchAddingCalculationByP3_3Operation(addingCalculationByP3Condition), user);
    }

    @Override
    public long createAgreement(Agreement agreement,User user)   {
        TransactionManager<Agreement> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateAgreementOperation(), agreement, user);
    }

    @Override
    public long updateAgreement(Agreement agreement,User user)  {
        TransactionManager<Agreement> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateAgreementOperation(), agreement, user);
    }

    @Override
    public long deleteAgreement(Agreement agreement,User user) {
        TransactionManager<Agreement> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteAgreementOperation(), agreement, user);
    }
    @Override
    public long createAgreementHotWatterSupply(HotWaterSupplyAgreement agreement,User user)   {
        TransactionManager<HotWaterSupplyAgreement> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateAgreementHotWatterSuppkyOperation(), agreement, user);
    }

    @Override
    public long updateAgreementHotWatterSupply(HotWaterSupplyAgreement agreement,User user)  {
        TransactionManager<HotWaterSupplyAgreement> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateAgreementHotWatterSupplyOperation(), agreement, user);
    }

    @Override
    public long deleteAgreementHotWatterSupply(HotWaterSupplyAgreement agreement,User user) {
        TransactionManager<HotWaterSupplyAgreement> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteAgreementHotWatterSupplyOperation(), agreement, user);
    }
    @Override
    public List<Agreement> searchAgreement(AgreementCondition condition,User user)   {
        TransactionManager<Agreement> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchAgreementOperation(condition), user);
    }
    @Override
    public List<Agreement> searchAgreementDep(AgreementCondition condition,User user)   {
        TransactionManager<Agreement> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchAgreementDepOperation(condition), user);
    }


    @Override
    public List<HotWaterSupplyAgreement> searchAgreementHotWatter(AgreementHotWatterSupplyCondition condition,User user)   {
        TransactionManager<HotWaterSupplyAgreement> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchAgreementHotWatterSupplierOperation(condition), user);
    }

    @Override
    public List<OwnerBankAccount> searchOwnerBankAccount(OwnerBankAccountCondition condition,User user)   {
        TransactionManager<OwnerBankAccount> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchOwnerBankAccount(condition), user);
    }

    @Override
    public List<PaymentType> searchPaymentType(PaymentTypeCondition condition,User user)   {
        TransactionManager<PaymentType> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchPaymentTypeOperation(condition), user);
    }

    @Override
    public List<ServicePayment> searchServicePayment(ServicePaymentCondition condition,User user)   {
        TransactionManager<ServicePayment> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchServicePaymentOperation(condition), user);
    }

    @Override
    public long createPayment(Payment payment,User user) {
        TransactionManager<Payment> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreatePaymentOperation(), payment, user);
    }

    @Override
    public long updatePayment(Payment payment,User user)  {
        TransactionManager<Payment> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdatePaymentOperation(), payment, user);
    }

    @Override
    public long deletePayment(Payment payment,User user)  {
        TransactionManager<Payment> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeletePaymentOperation(), payment, user);
    }

    @Override
    public List<Payment> searchPayment(PaymentCondition condition,User user)   {
        TransactionManager<Payment> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchPaymentOperation(condition), user);
    }

    @Override
    public List<Payment> searchPaymentWithCorrection(PaymentCondition condition,User user)   {
        TransactionManager<Payment> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchPaymentWithCorrectionOperation(condition), user);
    }

    @Override
    public List<PaymentToDelete> searchPaymentToDeleteOperation(@WebParam(name="addingPaymentCondition") PaymentCondition condition,User user) {
        return this.getTransactionManager().doSelectOperation(new SearchPaymentNotLoadedOperation(condition),user);
    }

    @Override
    public long removePaymentToDelete(PaymentToDelete paymentToDelete, User user) {
        return this.getTransactionManager().doModifyOperation(new DeletePaymentToDeleteOperation(),paymentToDelete,user);
    }

    @Override
    public long fixPayment(PaymentToDelete payment, User user) {
        return this.getTransactionManager().doModifyOperation(new FixPaymentOperation(),payment,user);
    }

    @Override
    public long createUnparsedPayment(UnparsedPayment unparsedPayment,User user) {
        TransactionManager<UnparsedPayment> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateUnparsedPaymentOperation(), unparsedPayment, user);
    }

    @Override
    public long deleteUnparsedPayment(UnparsedPayment unparsedPayment,User user)  {
        TransactionManager<UnparsedPayment> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteUnparsedPaymentOperation(), unparsedPayment, user);
    }

    @Override
    public List<UnparsedPayment> searchUnparsedPayment(UnparsedPaymentCondition unparsedCondition,User user)   {
        TransactionManager<UnparsedPayment> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchUnparsedPaymentOperation(unparsedCondition), user);
    }

    public long createPaymentDepartment(PaymentDepartment paymentDepartment,User user)  {
        TransactionManager<PaymentDepartment> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreatePaymentDepartmentOperation(), paymentDepartment,user);
    }

    @Override
    public long updatePaymentDepartment(PaymentDepartment paymentDepartment,User user)  {
        TransactionManager<PaymentDepartment> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdatePaymentDepartmentOperation(), paymentDepartment, user);
    }

    @Override
    public long deletePaymentDepartment(PaymentDepartment paymentDepartment,User user) {
        TransactionManager<PaymentDepartment> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeletePaymentDepartmentOperation(), paymentDepartment, user);
    }

    @Override
    public List<PaymentDepartment> searchPaymentDepartment(PaymentDepartmentCondition condition,User user)   {
        TransactionManager<PaymentDepartment> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchPaymentDepartmentOperation(condition), user);
    }

    @Override
    public List<PhysicalPayer> searchPhysicalPayers(PhysicalPayersCondition condition,User user)   {
        TransactionManager<PhysicalPayer> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchDocPhysicalPayersOperation(condition), user);
    }
    @Override
    public long createPhysicalPayer(PhysicalPayer physicalPayer,User user)  {
        TransactionManager<PhysicalPayer> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateDocPhysicalPayersOperation(), physicalPayer, user);
    }

    @Override
    public long updatePhysicalPayer(PhysicalPayer physicalPayer,User user)  {
        TransactionManager<PhysicalPayer> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateDocPhysicalPayerOperation(), physicalPayer, user);
    }

    @Override
    public long deletePhysicalPayer(PhysicalPayer physicalPayer,User user) {
        TransactionManager<PhysicalPayer> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeletePsycalPayersOperation(), physicalPayer, user);
    }

    @Override
    public long createCommission(Commission commission,User user)  {
        TransactionManager<Commission> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateCommissionOperation(), commission, user);
    }

    @Override
    public long updateCommission(Commission commission,User user)  {
        TransactionManager<Commission> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateCommissionOperation(), commission, user);
    }

    @Override
    public long deleteCommission(Commission commission,User user) {
        TransactionManager<Commission> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteCommissionOperation(), commission, user);
    }

    @Override
    public List<Commission> searchCommission(CommissionCondition condition,User user)   {
        TransactionManager<Commission> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchCommissionOperation(condition), user);
    }

    @Override
    public long createDepartmentInput(DepartmentInput input,User user)  {
        TransactionManager<DepartmentInput> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateDepartmentInputOperation(), input, user);
    }

    @Override
    public long updateDepartmentInput(DepartmentInput input,User user) {
        TransactionManager<DepartmentInput> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateDepartmentInputOperation(), input, user);
    }

    @Override
    public long deleteDepartmentInput(DepartmentInput input,User user)  {
        TransactionManager<DepartmentInput> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteDepartmentInputOperation(), input, user);
    }

    @Override
    public List<DepartmentInput> searchDepartmentInput(DepartmentInputCondition condition,User user)   {
        TransactionManager<DepartmentInput> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchDepartmentInputOperation(condition), user);
    }
    @Override
    public List<DepartmentFreeKonto> searchDepartmentFreeKonto(DepartamentFreeKontoCondition condition,User user)   {
        TransactionManager<DepartmentFreeKonto> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchDepartmentFreeKontoOperation(condition), user);
    }

    @Override
    public long createCorrection(Correction correction,User user)  {
        TransactionManager<Correction> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateCorrectionOperation(),correction,user);

    }

    @Override
    public long updateCorrection(Correction correction,User user) {
        TransactionManager<Correction> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateCorrectionOperation(), correction, user);
    }

    @Override
    public long deleteCorrection(Correction correction,User user)  {

        PaymentCondition paymentCondition = new PaymentCondition();
        paymentCondition.setCorrectionId(correction.getId());
        List<Payment> paymentsToDelete = getTransactionManager().doSelectOperation(new AbstractSelectOperation<Payment>() {
            @Override
            public void checkPermission(Connection connection, User user) throws SecurityException {

            }

            @Override
            public List<Payment> doOperation(Connection connection) {
                return new SearchPaymentQuery(paymentCondition).execute(connection);
            }
        });
        correction.setPayments(paymentsToDelete);
        TransactionManager<Correction> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteCorrectionOperation(), correction,user);
    }

    @Override
    public List<Correction> searchCorrection(CorrectionCondition condition,User user)   {
        TransactionManager<Correction> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchCorrectionOperation(condition), user);
    }

    @Override
    public List<Correction> getMaxCorrectionId(CorrectionCondition condition,User user)   {
        TransactionManager<Correction> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchCorrectionMaxIdOperation(condition),user);
    }

    @Override
    public long createVolumeConsumption(VolumeConsumption volumeConsumption,User user)   {
        TransactionManager<VolumeConsumption> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateVolumeConsumptionOperation(), volumeConsumption, user);
    }

    @Override
    public long updateVolumeConsumption(VolumeConsumption volumeConsumption,User user)   {
        TransactionManager<VolumeConsumption> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateVolumeConsumptionOperation(), volumeConsumption, user);
    }

    @Override
    public long deleteVolumeConsumption(VolumeConsumption volumeConsumption,User user)   {
        TransactionManager<VolumeConsumption> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteVolumeConsumptionOperation(), volumeConsumption, user);
    }

    @Override
    public List<VolumeConsumption> searchVolumeConsumption(VolumeConsumptionCondition condition,User user)   {
        TransactionManager<VolumeConsumption> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchVolumeConsumptionOperation(condition), user);
    }

    @Override
    public long createDepartmentSubRoute(DepartmentSubRoute departmentSubRoute,User user)   {
        TransactionManager<DepartmentSubRoute> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateDepartmentSubRouteOperation(), departmentSubRoute,user);
    }

    @Override
    public long updateDepartmentSubRoute(DepartmentSubRoute departmentSubRoute,User user)  {
        TransactionManager<DepartmentSubRoute> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateDepartmentSunRouteModifyOperation(), departmentSubRoute,user);
    }

    @Override
    public long deleteDepartmentSubRoute(DepartmentSubRoute departmentSubRoute,User user) {
        TransactionManager<DepartmentSubRoute> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteDepartmentSubRouteOperation(), departmentSubRoute,user);
    }

    @Override
    public List<DepartmentSubRoute> searchDepartmentSubRoute(DepartmentSubRouteCondition condition,User user)   {
        TransactionManager<DepartmentSubRoute> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchDepartmentSubRouteOperation(condition),user);
    }

       @Override
    public long createStockWithoutPermission(StockWithoutPermission stockWithoutPermission,User user) {
        TransactionManager<StockWithoutPermission> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateStockWithoutPermissionOperation(),stockWithoutPermission,user);
    }

    @Override
    public long updateStockWithoutPermission(StockWithoutPermission stockWithoutPermission,User user)   {
        TransactionManager<StockWithoutPermission> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateStockWithoutPermissionOperation(), stockWithoutPermission,user);
    }

    @Override
    public long deleteStockWithoutPermission(StockWithoutPermission stockWithoutPermission,User user)   {
        TransactionManager<StockWithoutPermission> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteStockWithoutPermissionOperation(),stockWithoutPermission,user);
    }

    @Override
    public List<StockWithoutPermission> searchStockWithoutPermission(StockWithoutPermissionCondition stockWithoutPermissionCondition,User user)   {
        TransactionManager<StockWithoutPermission> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchStockWithoutPermission(stockWithoutPermissionCondition),user);
    }


    @Override
    public long createCommisionStockWithOutPermission(DocCorrectionStockWithOutPermission docCorrectionStockWithOutPermission,User user) {
        TransactionManager<DocCorrectionStockWithOutPermission> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateDocCorrectionStockWithOutPermissionOperation(),docCorrectionStockWithOutPermission,user);
    }

    @Override
    public long updateCommisionStockWithOutPermission(DocCorrectionStockWithOutPermission docCorrectionStockWithOutPermission,User user)   {
        TransactionManager<DocCorrectionStockWithOutPermission> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateDocCorrectionStockWithOutPermissionOperation(), docCorrectionStockWithOutPermission,user);
    }

    @Override
    public long deleteCommisionStockWithOutPermission(DocCorrectionStockWithOutPermission docCorrectionStockWithOutPermission,User user)   {
        TransactionManager<DocCorrectionStockWithOutPermission> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteDocCorrectionWithOutPermitionOperation(),docCorrectionStockWithOutPermission,user);
    }

    @Override
    public List<DocCorrectionStockWithOutPermission> searchCommisionStockWithOutPermission(DocCommisionStockWithOutPermissionCondition docCommisionStockWithOutPermissionCondition,User user)   {
        TransactionManager<DocCorrectionStockWithOutPermission> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchDocCorrectionStockWithOutPermissionOperation(docCommisionStockWithOutPermissionCondition),user);
    }


    @Override
    public long updateDepartmentTariffCategory(Department department,User user)   {
        TransactionManager<Department> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateDepartmentTariffCategoryOperation(),department,user);
    }

    @Override
    public long updateInputSubDepartmentContains(InputSubServiceContain inputSubServiceContain,User user)   {
        TransactionManager<InputSubServiceContain> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateInputSubSeviceContainsOperation(), inputSubServiceContain,user);
    }

    @Override
    public long updateInputProperty(InputProperty inputProperty,User user)   {
        TransactionManager<InputProperty> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateInputPropertyOperation(),inputProperty,user);
    }

    @Override
    public List<Rains> searchRains(RainsCondition condition,User user)  {
        TransactionManager<Rains> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchRainsOperation(condition),user);
    }

    @Override
    public List<Rains> searchRainsHistory(RainsCondition condition, User user) {
        TransactionManager<Rains> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchRainsHistoryOperation(condition),user);
    }

    @Override
    public long createRains(Rains rains,User user) {
        TransactionManager<Rains> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreateRainsOperation(),rains,user);
    }

    @Override
    public long updateRains(Rains rains,User user)  {
        TransactionManager<Rains> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdateRainsOperation(),rains,user);
    }

    @Override
    public long deleteRains(Rains rains,User user)  {
        TransactionManager<Rains> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeleteRainsOperation(),rains,user);
    }

    @Override
    public List<CSCounterStatus> getCounterStatusgetCounterStatus(CSCounterStatusCondition condition,User user)  {
        TransactionManager<CSCounterStatus> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new GetCounterStatusOperation(condition),user);
    }

    @Override
    public long doInvoice(User user)  {
        new FasterInvoiceCalculator().startInvoice();
        return 0;
    }

    @Override
    public List<CalcInvoice> getAllInvoices(CalcInvoiceCondition condition,User user) {
        TransactionManager<CalcInvoice> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new GetCurrentInvoiceOperation(condition),user);
    }

    @Override
    public List<CalcInvoiceRainsInvoice> getAllRainsInvoice(CalcInvoiceCondition condition,User user)  {
        TransactionManager<CalcInvoiceRainsInvoice> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new GetCurrentInvoiceRainOperation(condition),user);
    }

    @Override
    public List<CalcInvoiceStockWithoutPermission> getAllStockWithoutPermissionInvoice(CalcInvoiceStockWithoutPermissionCondition condition, User user)   {
        TransactionManager<CalcInvoiceStockWithoutPermission> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new GetCurrentInvoiceStockWithoutPermissionOperation(condition),user);
    }

    @Override
    public List<CalcInvoiceVolumeLKP> getCalcInvoiceVolumeLKP(CalcInvoiceVolumeLKPCondition condition, User user) {
        TransactionManager<CalcInvoiceVolumeLKP> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new SearchIvoiceVolumeByLIPOperation(condition),user);
    }

    @Override
    public List<CalcInvoiceTeploenergo> getCalcInvoiceTeploenergo(CalcInvoiceTeploenergoCondition condition, User user) {
        return getTransactionManager().doSelectOperation(new GetCurrentInvoiceTeploenergoByPeriodOperation(condition),user);
    }

    @Override
    public Period getCurrentPeriod(User user)  {
        TransactionManager<Period> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new CurrentPeriodOperation(),user).get(0);
    }

    @Override
    public Date getLastDayOfPeriod(Date date, User user) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);
        calendar.set(Calendar.DAY_OF_MONTH, calendar.getActualMaximum(Calendar.DAY_OF_MONTH));
        return calendar.getTime();
    }

    @Override
    public long movePeriodToForward(User user)  {
        List<Saldo> list = new RecalculateSaldoAllContraAgent().recalculatoSaldoAllContraAgent();
        new ResultCollector().updateSaldo(list);
        TransactionManager<Period> transactionManager = this.getTransactionManager();
        long res =  transactionManager.doModifyOperation(new MovePeriodToForward(),null,user);
        list = new RecalculateSaldoAllContraAgent().recalculatoSaldoAllContraAgent();
        new ResultCollector().updateSaldo(list);
        List<SaldoDepartment> detailses = new RecalculateAllSaldoByDepartment().recalculateAllSaldoOnDepartment();
        new ResultCollector().updateSaldoByDepartment(detailses);

        return res;
    }

    @Override
    public long movePeriodToPrevious(User user)  {
        TransactionManager<Period> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new MovePeriodToPreviousOperation(),null,user);
    }

    @Override
    public List<Counter> searchCounterByDepartmentAndInput(DepartmentInputCondition condition, User user)   {
        TransactionManager<Counter> transactionManager = getTransactionManager();
        return transactionManager.doSelectOperation(new SearchCounterByDepartmentAndInputOperation(condition),user);
    }

    @Override
    public List<ContraAgent> searchContrAgentByAgreement(AgreementCondition condition, User user)   {
        TransactionManager<ContraAgent> transactionManager = getTransactionManager();
        return transactionManager.doSelectOperation(new SearchContrAgentByAgreementOperation(condition),user);
    }

    @Override
    public List<InputFactor> getLastFactorByCounter(Counter condition, User user)   {
        TransactionManager<InputFactor> transactionManager = getTransactionManager();
        return transactionManager.doSelectOperation(new GetLastInputFactorOperation(condition),user);
    }

    @Override
    public long createDocLkp(DocLkpFromDBFTransfer transfer, User user) {
        TransactionManager<DocLkpFromDBFTransfer> transactionManager = getTransactionManager();
        return transactionManager.doModifyOperation(new CreateDocLKPOperation(),transfer,user);
    }

    @Override
    public long deleteDocLKP(List<DocLkpFromDBFTransfer> transfers, User user) {
        TransactionManager<DocLkpFromDBFTransfer> transactionManager = getTransactionManager();
        for (DocLkpFromDBFTransfer transfer:transfers)
             transactionManager.doModifyOperation(new DeleteDocLKPOperation(),transfer,user);
        return 0;
    }

    @Override
    public List<Saldo> searchSaldo(SaldoCondition condition, User user) {
        TransactionManager<Saldo> transactionManager = getTransactionManager();
        return transactionManager.doSelectOperation(new SearchSaldoOperation(condition),user);
    }

    @Override
    public List<CounterClientService> searchDepartamentInputCounter(CounterClientServiceCondition condition, User user) {
        TransactionManager<CounterClientService> transactionManager = getTransactionManager();
        return transactionManager.doSelectOperation(new SearchDepartmentInputCounter(condition),user);
    }

    @Override
    public List<InputFactor> searchHistoryFactors(InputFactorCondition condition, User user) {
        TransactionManager tm = getTransactionManager();
        return tm.doSelectOperation(new SearchInputFactorHistoryByCounterOperation(condition),user);

    }

    @Override
    public List<InputFactor> searchClearInputFactors(InputFactorCondition condition, User user) {
        TransactionManager<InputFactor> tm = getTransactionManager();
        return tm.doSelectOperation(new SearchClearInputFactorOperation(condition),user);
    }


    @Override
    public boolean checkForLockServiceToInvoice() {
        TransactionManager<Boolean> transactionManager = this.getTransactionManager();
        List<Boolean> list = transactionManager.doSelectOperation(new CheckForLockOperaiton());
        return list.get(0);
    }

    @Override
    public long createPaymentType(PaymentType paymentType,User user)   {
        TransactionManager<PaymentType> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new CreatePaymentTypeOperation(),paymentType,user);
    }

    @Override
    public long updatePaymentType(PaymentType paymentType,User user)  {
        TransactionManager<PaymentType> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new UpdatePaymentTypeOperation(),paymentType,user);
    }

    @Override
    public long deletePaymentType(PaymentType paymentType,User user)  {
        TransactionManager<PaymentType> transactionManager = this.getTransactionManager();
        return transactionManager.doModifyOperation(new DeletePaymentTypeOperation(),paymentType,user);
    }
	
	 @Override
    public List<TaxBillDetail> downloadPnFiles(TaxBillCondition condition, User user) {
        TransactionManager<TaxBillDetail> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new TaxBillDetailOperations(condition), user);
    }

    @Override
    public List<TaxBillHeader> downloadPjFiles(TaxBillCondition condition, User user) {
        TransactionManager<TaxBillHeader> transactionManager = this.getTransactionManager();
        return transactionManager.doSelectOperation(new TaxBillHeaderOperations(condition), user);
    }
}
