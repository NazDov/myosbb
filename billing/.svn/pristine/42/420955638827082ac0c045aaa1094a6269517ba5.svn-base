package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.inerfc;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.PaymentFromParus;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.taxbill.TaxBillDetail;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.taxbill.TaxBillHeader;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;

import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import java.util.Date;
import java.util.List;

/**
 * Created by vostap on 28.08.2014.
 */
@WebService
public interface ReferencesService {

    @WebResult List<Municipal> searchMunicipal(@WebParam MunicipalCondition condition,User user);
    @WebResult long updateMunicipal(@WebParam Municipal municipal,User user);
    @WebResult long createMunicipal(@WebParam Municipal municipal,User user);
    @WebResult long deleteMunicipal(@WebParam Municipal municipal,User user);

    @WebResult List<Street> searchStreet(@WebParam StreetCondition condition, User user);
    @WebResult long createStreet(@WebParam Street street, User user);
    @WebResult long updateStreet(@WebParam Street street, User user);
    @WebResult long deleteStreet(@WebParam Street street, User user);

    @WebResult List<User> autorizate(String userName,String userPassword);
    @WebResult public long importFromDbf(PaymentFromParus paymentFromParus, User user);
    @WebResult public long clearPayment(List<PaymentFromParus> accounts, User user);
    @WebResult public long clearPaymentNotLoaded(List<PaymentFromParus> accounts, User user);
    @WebResult public long clearComission(List<Commission> commissions, User user);
    @WebResult public long clearComissionOSBB(List<Commission> commissions, User user);
    @WebResult public boolean createCommissionFromPayments(Date dateBegin, Date dateEnd, Long id, User user);
    @WebResult public boolean createCommissionFromPaymentDepartment(Date dateBegin, Date dateEnd, Long id, User user);
    @WebResult public List<ComboBoxItem> getStreetsByPattern(Municipal municipal,String pattern,@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getStreetsByPatternOnly(String pattern,@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getDepByAgreemnt (Agreement agreement,@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getContrAgentByDep (Department department,@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getMunicipalsByPattern (String pattern,@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllTypesCalculationPN(@WebParam(name = "user") User user);
    @WebResult public long createContraAgent(@WebParam(name = "contraAgent") ContraAgent contraAgent,@WebParam(name = "user") User user);
    @WebResult public long deleteContraAgent(@WebParam(name = "contraAgent")ContraAgent contraAgent,@WebParam(name = "user") User user);
    @WebResult public long updateContraAgent(@WebParam(name = "contraAgent") ContraAgent contraAgent,@WebParam(name = "user") User user);
    @WebResult public long createHotWatterSupplier(@WebParam(name = "hotWaterSupplier") HotWaterSupplier hotWaterSupplier,@WebParam(name = "user") User user);
    @WebResult public long deleteHotWatterSupplier(@WebParam(name = "hotWaterSupplier")HotWaterSupplier hotWaterSupplier,@WebParam(name = "user") User user);
    @WebResult public long updateHotWatterSupplier(@WebParam(name = "hotWaterSupplier") HotWaterSupplier hotWaterSupplier,@WebParam(name = "user") User user);
    @WebResult public List<ContraAgent> searchContraAgent(@WebParam(name = "contraAgentCondition") ContraAgentCondition contraAgentCondition,@WebParam(name = "user") User user);
    @WebResult public List<HotWaterSupplier> searchHotWaterSupply(@WebParam(name = "hotWaterSupplierCondition") HotWaterSupplierCondition hotWaterSupplierCondition,@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> searchContraAgentByPattern(@WebParam(name = "ContraAgentByCondition") String query,@WebParam(name = "user") User user);
    @WebResult public List<ContraAgent> searchContraAgentWithAgreement(@WebParam(name = "contraAgentCondition") ContraAgentCondition contraAgentCondition,@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> searchBank(@WebParam(name = "bankCondition") String query,@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> searchConto(@WebParam(name = "bankCondition") String query,@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> searchCounterModelAutoComplete(@WebParam(name = "counterModelCondition") String query,@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> searchAgreementDepAutoComplete(@WebParam(name = "agreementCondition") String query,@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllArea(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllTypeCorrection(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllBussinessProfile(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllGroupWatterConsuming(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllKindsActivity(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllTypeCounter(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllContraAgentCategories(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllPayer(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllSourceOfFunds(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllCounterModels(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllDiameters(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllCounters(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllUnitOfMeasurements(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllMainServices(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllSubServices(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllPaymentServices(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllInternalTurnOver(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getCategoriesOfTariff(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getUnregisterCounterReasons(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getUnregisterCounterOperationType(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllCorrectionOfCounterReason(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllKindAgreements(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllTypeAgreements(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllPaymentTypes(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllOwners(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllOwnerBankAccounts(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllAreaTypes(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllAlgorithms(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getDepByAgr(@WebParam(name="condition") DepartmentCondition condition, @WebParam(name = "user") User user) ;
    @WebResult public List<ComboBoxItem> getAgreementByConsumer(@WebParam(name="condition") AgreementCondition condition, @WebParam(name = "user") User user) ;
    @WebResult public List<ComboBoxItem> getAgreementByDep (@WebParam(name="condition") AgreementCondition condition, @WebParam(name = "user") User user) ;
    @WebResult public List<ComboBoxItem> getDepAgreementByConsumer(@WebParam(name="condition") DepartmentCondition condition, @WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getInputByConsumer(@WebParam(name="condition") InputCondition condition, @WebParam(name = "user") User user);

    @WebResult public List<SubService> searchSubService(@WebParam(name = "condition")  SubServiceCondition condition,@WebParam(name = "user") User user);

    @WebResult public long createDepartment(@WebParam(name = "department") Department department,@WebParam(name = "user") User user);
    @WebResult public long updateDepartment(@WebParam(name = "department") Department department,@WebParam(name = "user") User user);
    @WebResult public long deleteDepartment(@WebParam(name = "department") Department department,@WebParam(name = "user") User user);
    @WebResult public List<Department> searchDepartment( @WebParam(name = "departmentCondition") DepartmentCondition departmentCondition,@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllCategoryOfRealize(@WebParam(name = "user") User user);
    @WebResult public List<ComboBoxItem> getAllCategoryOfTariff(@WebParam(name = "user") User user);
    //----counterModels
    @WebResult public long createCounterModel(@WebParam(name = "counterModel") CounterModel counterModel,@WebParam(name = "user") User user);
    @WebResult public long updateCounterModel(@WebParam(name = "counterModel") CounterModel counterModel,@WebParam(name = "user") User user);
    @WebResult public long deleteCounterModel(@WebParam(name = "counterModel") CounterModel counterModel,@WebParam(name = "user") User user);
    @WebResult public List<CounterModel> searchCounterModel(CounterModelCondition condition,@WebParam(name = "user") User user);
    //--------addresses
    @WebResult public long createAddress(@WebParam(name = "address") Address address,@WebParam(name = "user") User user);
    @WebResult public long updateAddress(@WebParam(name = "address") Address address,@WebParam(name = "user") User user);
    @WebResult public long deleteAddress(@WebParam(name = "address") Address address,@WebParam(name = "user") User user);
    @WebResult public List<Address> searchAddress(@WebParam(name = "condition") AddressCondition condition,@WebParam(name = "user") User user);
    //--------InputDiameter
    @WebResult public long createInputDiameter(@WebParam(name = "diameter") InputDiameter diameter,@WebParam(name = "user") User user);
    @WebResult public long updateInputDiameter(@WebParam(name = "diameter") InputDiameter diameter,@WebParam(name = "user") User user);
    @WebResult public long deleteInputDiameter(@WebParam(name = "diameter") InputDiameter diameter,@WebParam(name = "user") User user);
    @WebResult public List<InputDiameter> searchInputDiameter(@WebParam(name = "diameter") InputDiameterCondition condition,@WebParam(name = "user") User user);
    //---------Input
    @WebResult public long createInput(@WebParam(name = "input") Input input,@WebParam(name = "user") User user);
    @WebResult public long updateInput(@WebParam(name = "input") Input input,@WebParam(name = "user") User user);
    @WebResult public long deleteInput(@WebParam(name = "input") Input input,@WebParam(name = "user") User user);
    @WebResult public List<Input> searchInput(@WebParam(name = "inputCondition") InputCondition condition,@WebParam(name = "user") User user);
    //------Counter----------------
    @WebResult public long createCounter(@WebParam(name = "counter") Counter counter,@WebParam(name = "user") User user);
    @WebResult public long updateCounter(@WebParam(name = "counter") Counter counter,@WebParam(name = "user") User user);
    @WebResult public long deleteCounter(@WebParam(name = "counter") Counter counter,@WebParam(name = "user") User user);
    @WebResult public List<Counter> searchCounter( @WebParam(name = "counterCondition")CounterCondition condition,@WebParam(name = "user") User user)  ;
    //------NBURate----------------
    @WebResult public long createNBURate(@WebParam(name = "discountRateNBU") DiscountRateNBU discountRateNBU,@WebParam(name = "user") User user);
    @WebResult public long updateNBURate(@WebParam(name = "discountRateNBU") DiscountRateNBU discountRateNBU,@WebParam(name = "user") User user);
    @WebResult public long deleteNBURate(@WebParam(name = "discountRateNBU") DiscountRateNBU discountRateNBU,@WebParam(name = "user") User user);
    @WebResult public List<DiscountRateNBU> searchNBURate( @WebParam(name = "dicountRateNBUConditions")DicountRateNBUConditions condition,@WebParam(name = "user") User user)  ;
    //------Tariff
    @WebResult public long createTariff(@WebParam(name = "tariff") Tariff tariff,@WebParam(name = "user") User user);
    @WebResult public long updateTariff(@WebParam(name = "tariff") Tariff tariff,@WebParam(name = "user") User user);
    @WebResult public long deleteTariff(@WebParam(name = "tariff") Tariff tariff,@WebParam(name = "user") User user);
    @WebResult public List<Tariff> searchTariff(@WebParam(name = "condition") TariffCondition condition,@WebParam(name = "user") User user)  ;
    //---------Routes
    @WebResult public long createRoute(@WebParam(name = "route")  Route route,@WebParam(name = "user") User user);
    @WebResult public long updateRoute(@WebParam(name = "route")  Route route,@WebParam(name = "user") User user);
    @WebResult public long deleteRoute(@WebParam(name = "route")  Route route,@WebParam(name = "user") User user);
    @WebResult public List<Route> searchRoutes(@WebParam(name = "condition") RouteConditions conditions,@WebParam(name = "user") User user)  ;
    //--------SubRoutes---------
    @WebResult public long createSubRoute(@WebParam(name = "route") SubRoute subRoute,@WebParam(name = "user") User user);
    @WebResult public long updateSubRoute(@WebParam(name = "route")  SubRoute subRoute,@WebParam(name = "user") User user);
    @WebResult public long deleteSubRoute(@WebParam(name = "route")  SubRoute subRoute,@WebParam(name = "user") User user);
    @WebResult public List<SubRoute> searchSubRoute(@WebParam(name = "condition")  SubRouteCondition condition,@WebParam(name = "user") User user);

    //--------AreaTypeKoef---------
    @WebResult public List<TypeAreaKoef> searchAreaTypeKoef(@WebParam(name = "condition")  TypeAreaKoefConditions condition,@WebParam(name = "user") User user);
    //-----------Controllers
    @WebResult public long createController(@WebParam(name = "controller") Controller controller,@WebParam(name = "user") User user);
    @WebResult public long updateController(@WebParam(name = "controller") Controller controller,@WebParam(name = "user") User user);
    @WebResult public long deleteController(@WebParam(name = "controller") Controller controller,@WebParam(name = "user") User user);
    @WebResult public List<Controller> searchController(@WebParam(name = "controllerCondition") ControllerCondition controllerCondition,@WebParam(name = "user") User user);
    @WebResult public List <ControllersReferense> searchControllerReferense (@WebParam(name= "controllerReferenseCondition") ControllerReferenseCondition controllerReferenseCondition,@WebParam(name= "user")User user);
    @WebResult public long createControllerReferense(@WebParam(name = "controllersReferense") ControllersReferense controllersReferense,@WebParam(name = "user") User user);
    @WebResult public long updateControllerReferense(@WebParam(name = "controllersReferense") ControllersReferense controllersReferense,@WebParam(name = "user") User user);
    @WebResult public long deleteControllerReferense(@WebParam(name = "controllersReferense") ControllersReferense controllersReferense,@WebParam(name = "user") User user);
  //------------RegisterOfCounters
    @WebResult public long createRegisterOfCounterDocument(@WebParam(name = "registerOfCounter") RegisterOfCounter registerOfCounter,@WebParam(name = "user") User user);
    @WebResult public long updateRegisterOfCounterDocument(@WebParam(name = "registerOfCounter") RegisterOfCounter registerOfCounter,@WebParam(name = "user") User user);
    @WebResult public long deleteRegisterOfCounterDocument(@WebParam(name = "registerOfCounter") RegisterOfCounter registerOfCounter,@WebParam(name = "user") User user);
    @WebResult public List<RegisterOfCounter> searchRegisterOfCounterDocument(@WebParam(name = "condition") RegisterOfCounterCondition condition,@WebParam(name = "user") User user);
    //--------UnregisterOfCounter
    @WebResult public long createUnregisterOfCounterDocument(@WebParam(name = "unregisterOfCounter") UnregisterOfCounter unregisterOfCounter,@WebParam(name = "user") User user);
    @WebResult public long updateUnregisterOfCounterDocument(@WebParam(name = "unregisterOfCounter") UnregisterOfCounter unregisterOfCounter,@WebParam(name = "user") User user);
    @WebResult public long deleteUnregisterOfCounterDocument(@WebParam(name = "unregisterOfCounter") UnregisterOfCounter unregisterOfCounter,@WebParam(name = "user") User user);
    @WebResult public List<UnregisterOfCounter> searchUnregisterCounterOperation(@WebParam(name = "unregisterOfCounterCondition") UnregisterOfCounterCondition counterCondition,@WebParam(name = "user") User user);
    //----------------CorrectionCounter
    @WebResult public long createCorrectionOfCounterDocument(@WebParam(name = "unregisterOfCounter") CorrectionOfCounter correctionOfCounter,@WebParam(name = "user") User user);
    @WebResult public long updateCorrectionOfCounterDocument(@WebParam(name = "unregisterOfCounter") CorrectionOfCounter correctionOfCounter,@WebParam(name = "user") User user);
    @WebResult public long deleteCorrectionOfCounterDocument(@WebParam(name = "unregisterOfCounter") CorrectionOfCounter correctionOfCounter,@WebParam(name = "user") User user);
    @WebResult public List<CorrectionOfCounter> searchCorrectionOfCounterDocument(@WebParam(name = "unregisterOfCounter") CorrectionOfCounterCondition correctionOfCounterCondition,@WebParam(name = "user") User user)  ;
    //---------------InputFactors
    @WebResult public List<InputFactor> searchCounterToInputFactors(@WebParam(name = "unregisterOfCounter") InputFactorCondition condition,@WebParam(name = "user") User user)  ;
    @WebResult public long insertFactors(@WebParam(name = "factor") InputFactor factor,@WebParam(name = "user") User user);
    @WebResult public long deleteFactors(@WebParam(name = "factor") InputFactor factor,@WebParam(name = "user") User user);

    //---------------AddingByCapacityTube
    @WebResult public List<AddingByCapacityTube> searchAddingByCapacityTube(@WebParam(name = "condition") AddingByCapacityCondition condition,@WebParam(name = "user") User user)  ;
    @WebResult public long createAddingByCapacityTube(@WebParam(name = "addingByCapacityTube") AddingByCapacityTube addingByCapacityTube,@WebParam(name = "user") User user);
    @WebResult public long updateAddingByCapacityTube(@WebParam(name = "addingByCapacityTube") AddingByCapacityTube addingByCapacityTube,@WebParam(name = "user") User user);
    @WebResult public long deleteAddingByCapacityTube(@WebParam(name = "addingByCapacityTube") AddingByCapacityTube addingByCapacityTube,@WebParam(name = "user") User user);
    //--------------CorrectionOfRealize
    @WebResult public List<CorrectionOfRealize> searchCorrectionOfRealize(@WebParam(name = "condition") CorrectionOfRealizeCondition condition,@WebParam(name = "user") User user)  ;
    @WebResult public long createCorrectionOfRealize(@WebParam(name = "correctionOfRealize")  CorrectionOfRealize correctionOfRealize,@WebParam(name = "user") User user);
    @WebResult public long updateCorrectionOfRealize(@WebParam(name = "correctionOfRealize") CorrectionOfRealize correctionOfRealize,@WebParam(name = "user") User user);
    @WebResult public long deleteCorrectionOfRealize(@WebParam(name = "correctionOfRealize") CorrectionOfRealize correctionOfRealize,@WebParam(name = "user") User user);

    //--------------CancelZaborgovanist
    @WebResult public List<CancelZaborgovanist> searchCancelZaborgovanist(@WebParam(name = "condition") CancelZaborgovanistCondition condition,@WebParam(name = "user") User user)  ;
    @WebResult public long createCancelZaborgovanist(@WebParam(name = "cancelZaborgovanist")  CancelZaborgovanist cancelZaborgovanist,@WebParam(name = "user") User user);
    @WebResult public long updateCancelZaborgovanist(@WebParam(name = "cancelZaborgovanist") CancelZaborgovanist cancelZaborgovanist,@WebParam(name = "user") User user);
    @WebResult public long deleteCancelZaborgovanist(@WebParam(name = "cancelZaborgovanist") CancelZaborgovanist cancelZaborgovanist,@WebParam(name = "user") User user);


    @WebResult public long createAddingByConsumingVolume(@WebParam(name = "addingConsumingVolume") AddingByConsumingVolume addingByConsumingVolume,@WebParam(name = "user") User user);
    @WebResult public long updateAddingByConsumingVolume(@WebParam(name = "addingConsumingVolume") AddingByConsumingVolume addingByConsumingVolume,@WebParam(name = "user") User user);
    @WebResult public long deleteAddingByConsumingVolume(@WebParam(name = "addingConsumingVolume") AddingByConsumingVolume addingByConsumingVolume,@WebParam(name = "user") User user);
    @WebResult public List<AddingByConsumingVolume> searchAddingByConsumingVolume(@WebParam(name = "addingByConsumingVolumeCondition") AddingByConsumingVolumeCondition addingByConsumingVolumeCondition,@WebParam(name = "user") User user)  ;

    @WebResult public long createContinueRepairOrCheck(@WebParam(name = "continueRepairOrCheck")ContinueRepairOrCheck continueRepairOrCheck,@WebParam(name = "user") User user);
    @WebResult public long updateContinueRepairOrCheck(@WebParam(name = "continueRepairOrCheck")ContinueRepairOrCheck continueRepairOrCheck,@WebParam(name = "user") User user);
    @WebResult public long deleteContinueRepairOrCheck(@WebParam(name = "continueRepairOrCheck")ContinueRepairOrCheck continueRepairOrCheck,@WebParam(name = "user") User user);
    @WebResult public List<ContinueRepairOrCheck> searchContinueRepairOrCheck(@WebParam(name = "continueRepairOrCheck")ContinueRepairOrCheckCondition continueRepairOrCheck,@WebParam(name = "user") User user)  ;

    @WebResult public long createAddingCalculationByP3_3(@WebParam(name="addingCalculationByP3") AddingCalculationByP3 addingCalculationByP3,@WebParam(name = "user") User user);
    @WebResult public long updateAddingCalculationByP3_3(@WebParam(name="addingCalculationByP3") AddingCalculationByP3 addingCalculationByP3,@WebParam(name = "user") User user);
    @WebResult public long deleteAddingCalculationByP3_3(@WebParam(name="addingCalculationByP3") AddingCalculationByP3 addingCalculationByP3,@WebParam(name = "user") User user);
    @WebResult public List<AddingCalculationByP3> searchAddingCalculationByP3_3(@WebParam(name="addingCalculationByP3Condition") AddingCalculationByP3Condition addingCalculationByP3Condition,@WebParam(name = "user") User user);

    @WebResult public long createAgreement(@WebParam(name="agreement") Agreement agreement,@WebParam(name = "user") User user);
    @WebResult public long updateAgreement(@WebParam(name="agreement") Agreement agreement,@WebParam(name = "user") User user);
    @WebResult public long deleteAgreement(@WebParam(name="agreement") Agreement agreement,@WebParam(name = "user") User user);
    @WebResult public long createAgreementHotWatterSupply(@WebParam(name="agreement") HotWaterSupplyAgreement agreement,@WebParam(name = "user") User user);
    @WebResult public long updateAgreementHotWatterSupply(@WebParam(name="agreement") HotWaterSupplyAgreement agreement,@WebParam(name = "user") User user);
    @WebResult public long deleteAgreementHotWatterSupply(@WebParam(name="agreement") HotWaterSupplyAgreement agreement,@WebParam(name = "user") User user);
    @WebResult public List<Agreement> searchAgreement(@WebParam(name="addingCalculationByP3Condition") AgreementCondition condition,@WebParam(name = "user") User user)  ;
    @WebResult public List<Agreement> searchAgreementDep(@WebParam(name="addingCalculationByP3Condition") AgreementCondition condition,@WebParam(name = "user") User user)  ;
    @WebResult public List<HotWaterSupplyAgreement> searchAgreementHotWatter(@WebParam(name="addingCalculationByP3Condition") AgreementHotWatterSupplyCondition condition,@WebParam(name = "user") User user)  ;

    // -------- docPayment

    @WebResult public long createPayment(@WebParam(name="payment1") Payment payment,@WebParam(name = "user") User user);
    @WebResult public long updatePayment(@WebParam(name="payment1") Payment payment,@WebParam(name = "user") User user);
    @WebResult public long deletePayment(@WebParam(name="payment1") Payment payment,@WebParam(name = "user") User user);
    @WebResult public List<Payment> searchPayment(@WebParam(name="addingPaymentCondition") PaymentCondition condition,@WebParam(name = "user") User user)  ;
    @WebResult public List<Payment> searchPaymentWithCorrection(@WebParam(name="addingPaymentCondition") PaymentCondition condition,@WebParam(name = "user") User user)  ;
    @WebResult public List<PaymentToDelete> searchPaymentToDeleteOperation(@WebParam(name="addingPaymentCondition") PaymentCondition condition,@WebParam(name = "user") User user);
    @WebResult public long removePaymentToDelete(@WebParam(name="paymentToDelete")PaymentToDelete paymentToDelete, @WebParam(name = "user") User user);
    @WebResult public long fixPayment(@WebParam(name="payment") PaymentToDelete payment,@WebParam(name = "user") User user);

    // -------- unparsedPayment
    @WebResult public long createUnparsedPayment(@WebParam(name="unparsedPayment") UnparsedPayment unparsedPayment,@WebParam(name = "user") User user);
    @WebResult public long deleteUnparsedPayment(@WebParam(name="unparsedPayment") UnparsedPayment unparsedPayment,@WebParam(name = "user") User user);
    @WebResult public List<UnparsedPayment> searchUnparsedPayment(@WebParam(name="addingUnparsedPaymentCondition") UnparsedPaymentCondition condition,@WebParam(name = "user") User user)  ;

    // -------- unparsedPayment
//    @WebResult public long createUnparsedPayment(@WebParam(name="unparsedPayment") UnparsedPayment unparsedPayment,@WebParam(name = "user") User user)  , StorageException;
//    @WebResult public long deleteUnparsedPayment(@WebParam(name="unparsedPayment") UnparsedPayment unparsedPayment,@WebParam(name = "user") User user)  , StorageException;
//    @WebResult public List<UnparsedPayment> searchUnparsedPayment(@WebParam(name="addingUnparsedPaymentCondition") UnparsedPaymentCondition condition,@WebParam(name = "user") User user)  ;

    @WebResult public List<PaymentType> searchPaymentType(@WebParam(name="addingPaymentTypeCondition") PaymentTypeCondition condition,@WebParam(name = "user") User user)  ;
    @WebResult public List<ServicePayment> searchServicePayment(@WebParam(name="addingServicePaymentCondition") ServicePaymentCondition condition,@WebParam(name = "user") User user)  ;
    @WebResult public List<OwnerBankAccount> searchOwnerBankAccount(@WebParam(name="addingOwnerBankAccountCondition") OwnerBankAccountCondition condition,@WebParam(name = "user") User user)  ;
    // -------- docPaymentDepartment

    @WebResult public long createPaymentDepartment(@WebParam(name="paymentDepartment") PaymentDepartment paymentDepartment,@WebParam(name = "user") User user);
    @WebResult public long updatePaymentDepartment(@WebParam(name="paymentDepartment") PaymentDepartment paymentDepartment,@WebParam(name = "user") User user);
    @WebResult public long deletePaymentDepartment(@WebParam(name="paymentDepartment") PaymentDepartment paymentDepartment,@WebParam(name = "user") User user);
    @WebResult public List<PaymentDepartment> searchPaymentDepartment(@WebParam(name="addingPaymentDepartmentCondition") PaymentDepartmentCondition condition,@WebParam(name = "user") User user)  ;

    // -------- docCommission

    @WebResult public long createCommission(@WebParam(name="commission") Commission commission,@WebParam(name = "user") User user);
    @WebResult public long updateCommission(@WebParam(name="commission") Commission commission,@WebParam(name = "user") User user);
    @WebResult public long deleteCommission(@WebParam(name="commission") Commission commission,@WebParam(name = "user") User user);
    @WebResult public List<Commission> searchCommission(@WebParam(name="addingCommissionCondition") CommissionCondition condition,@WebParam(name = "user") User user)  ;

    // -------- docPsycalPayer


    @WebResult public List<PhysicalPayer> searchPhysicalPayers(@WebParam(name="physicalPayersCondition") PhysicalPayersCondition condition,@WebParam(name = "user") User user)  ;
    @WebResult public long createPhysicalPayer(@WebParam(name="physicalPayer") PhysicalPayer physicalPayer,@WebParam(name = "user") User user);
    @WebResult public long updatePhysicalPayer(@WebParam(name="physicalPayer") PhysicalPayer physicalPayer,@WebParam(name = "user") User user);
    @WebResult public long deletePhysicalPayer(@WebParam(name="physicalPayer") PhysicalPayer physicalPayer,@WebParam(name = "user") User user);

    //----------departmentInput
    @WebResult public long createDepartmentInput (@WebParam(name="districtInput") DepartmentInput input,@WebParam(name = "user") User user);
    @WebResult public long updateDepartmentInput(@WebParam(name="districtInput") DepartmentInput input,@WebParam(name = "user") User user);
    @WebResult public long deleteDepartmentInput(@WebParam(name="districtInput") DepartmentInput input,@WebParam(name = "user") User user);
    @WebResult public List<DepartmentInput> searchDepartmentInput(@WebParam(name="districtInput") DepartmentInputCondition condition,@WebParam(name = "user") User user)  ;
    @WebResult public List<DepartmentFreeKonto> searchDepartmentFreeKonto(@WebParam(name="districtInput") DepartamentFreeKontoCondition condition,@WebParam(name = "user") User user)  ;

    // -------- docCorrection
    @WebResult public long createCorrection(@WebParam(name="correction") Correction correction,@WebParam(name = "user") User user);
    @WebResult public long updateCorrection(@WebParam(name="correction") Correction correction,@WebParam(name = "user") User user);
     //@WebResult public long updateCorrection(@WebParam(name="correction") Correction correction, boolean isUpdate, @WebParam(name = "user") User user)  , StorageException;
    @WebResult public long deleteCorrection(@WebParam(name="correction") Correction correction,@WebParam(name = "user") User user);
  //  @WebResult public long deleteCorrection(@WebParam(name="correction") Correction correction ,boolean isDeleteded,@WebParam(name = "user") User user)  , StorageException;
    @WebResult public List<Correction> getMaxCorrectionId(@WebParam(name="addingCorrectionCondition") CorrectionCondition correctionCondition,@WebParam(name = "user") User user);
    @WebResult public List<Correction> searchCorrection(@WebParam(name="addingCorrectionCondition") CorrectionCondition correctionCondition,@WebParam(name = "user") User user);

    // -------- volumeConsumption
    @WebResult public long createVolumeConsumption (@WebParam(name="volumeConsumption") VolumeConsumption volumeConsumption,@WebParam(name = "user") User user);
    @WebResult public long updateVolumeConsumption(@WebParam(name="volumeConsumption") VolumeConsumption volumeConsumption,@WebParam(name = "user") User user);
    @WebResult public long deleteVolumeConsumption(@WebParam(name="volumeConsumption") VolumeConsumption volumeConsumption,@WebParam(name = "user") User user);
    @WebResult public List<VolumeConsumption> searchVolumeConsumption(@WebParam(name="volumeConsumption") VolumeConsumptionCondition volumeCondition,@WebParam(name = "user") User user)  ;
    @WebResult public boolean importVolumeConsumptionFromDbf(String pathToFile, User user);

    @WebResult public long createDepartmentSubRoute(@WebParam(name = "departmentSubRoute") DepartmentSubRoute departmentSubRoute,@WebParam(name = "user") User user);
    @WebResult public long updateDepartmentSubRoute(@WebParam(name = "departmentSubRoute") DepartmentSubRoute departmentSubRoute,@WebParam(name = "user") User user);
    @WebResult public long deleteDepartmentSubRoute(@WebParam(name = "departmentSubRoute") DepartmentSubRoute departmentSubRoute,@WebParam(name = "user") User user);
    @WebResult public List<DepartmentSubRoute> searchDepartmentSubRoute(@WebParam(name="departmentSubRouteCondition")DepartmentSubRouteCondition condition,@WebParam(name = "user") User user)  ;

    @WebResult public long createStockWithoutPermission(@WebParam(name = "stockWithoutPermission")  StockWithoutPermission stockWithoutPermission,@WebParam(name = "user") User user);
    @WebResult public long updateStockWithoutPermission(@WebParam(name = "stockWithoutPermission")  StockWithoutPermission stockWithoutPermission,@WebParam(name = "user") User user);
    @WebResult public long deleteStockWithoutPermission(@WebParam(name = "stockWithoutPermission")  StockWithoutPermission stockWithoutPermission,@WebParam(name = "user") User user);
    @WebResult public List<StockWithoutPermission> searchStockWithoutPermission(@WebParam(name = "stockWithoutPermission")  StockWithoutPermissionCondition stockWithoutPermissionCondition,@WebParam(name = "user") User user)  ;

    @WebResult public long createCommisionStockWithOutPermission(@WebParam(name = "docCorrectionStockWithOutPermission")  DocCorrectionStockWithOutPermission docCorrectionStockWithOutPermission,@WebParam(name = "user") User user);
    @WebResult public long updateCommisionStockWithOutPermission(@WebParam(name = "docCorrectionStockWithOutPermission")  DocCorrectionStockWithOutPermission docCorrectionStockWithOutPermission,@WebParam(name = "user") User user);
    @WebResult public long deleteCommisionStockWithOutPermission(@WebParam(name = "docCorrectionStockWithOutPermission")  DocCorrectionStockWithOutPermission docCorrectionStockWithOutPermission,@WebParam(name = "user") User user);
    @WebResult public List<DocCorrectionStockWithOutPermission> searchCommisionStockWithOutPermission(@WebParam(name = "docCorrectionStockWithOutPermission")  DocCommisionStockWithOutPermissionCondition docCommisionStockWithOutPermissionCondition,@WebParam(name = "user") User user)  ;

    //---------------paymentTypes-----------------------

    @WebResult public long createPaymentType(@WebParam(name = "paymentType") PaymentType paymentType,@WebParam(name = "user") User user);
    @WebResult public long updatePaymentType(@WebParam(name = "paymentType") PaymentType paymentType,@WebParam(name = "user") User user);
    @WebResult public long deletePaymentType(@WebParam(name = "paymentType") PaymentType paymentType,@WebParam(name = "user") User user);

    //---------------clientService-----------------------

    @WebResult public long updateDepartmentTariffCategory(@WebParam(name = "department") Department department,@WebParam(name = "user") User user);
    @WebResult public long updateInputSubDepartmentContains(@WebParam(name="inputSubServiceContain") InputSubServiceContain inputSubServiceContain,@WebParam(name = "user") User user);
    @WebResult public long updateInputProperty(@WebParam(name =  "inputProperty") InputProperty inputProperty,@WebParam(name = "user") User user);
    @WebResult public List<Rains> searchRains(@WebParam(name =  "condition") RainsCondition condition,@WebParam(name = "user") User user);
    @WebResult public List<Rains> searchRainsHistory(@WebParam(name =  "condition") RainsCondition condition,@WebParam(name = "user") User user);
    @WebResult public long createRains(@WebParam(name =  "inputProperty")Rains rains,@WebParam(name = "user") User user);
    @WebResult public long updateRains(@WebParam(name =  "inputProperty") Rains rains,@WebParam(name = "user") User user);
    @WebResult public long deleteRains(@WebParam(name =  "inputProperty")Rains rains,@WebParam(name = "user") User user);
    @WebResult public List<CSCounterStatus> getCounterStatusgetCounterStatus(@WebParam(name =  "condition") CSCounterStatusCondition condition,@WebParam(name = "user") User user);

    //----------------------------- serivces---------------------

    @WebResult public long doInvoice(@WebParam(name = "user") User user);
    @WebResult public List<CalcInvoice> getAllInvoices(CalcInvoiceCondition condition,@WebParam(name = "user") User user);
    @WebResult public List<CalcInvoiceRainsInvoice> getAllRainsInvoice(CalcInvoiceCondition condition,User user);
    @WebResult public List<CalcInvoiceStockWithoutPermission> getAllStockWithoutPermissionInvoice(CalcInvoiceStockWithoutPermissionCondition condition,User user);
    @WebResult public List<CalcInvoiceVolumeLKP> getCalcInvoiceVolumeLKP(CalcInvoiceVolumeLKPCondition condition,User user);
    @WebResult public List<CalcInvoiceTeploenergo> getCalcInvoiceTeploenergo(CalcInvoiceTeploenergoCondition condition,User user);
    @WebResult public Period getCurrentPeriod(@WebParam(name = "user") User user);
    @WebResult public Date getLastDayOfPeriod(Date date, @WebParam(name = "user") User user);
    @WebResult public long movePeriodToForward(@WebParam(name = "user") User user);
    @WebResult public long movePeriodToPrevious(@WebParam(name = "user") User user);

    @WebResult public List<Counter> searchCounterByDepartmentAndInput(@WebParam(name = "departmentInputCondition")DepartmentInputCondition condition,@WebParam(name = "user") User user)  ;
    @WebResult public List<ContraAgent> searchContrAgentByAgreement(@WebParam(name = "agreementCondition")AgreementCondition condition,@WebParam(name = "user") User user)  ;
    @WebResult public List<InputFactor> getLastFactorByCounter(@WebParam(name = "counter")Counter condition,@WebParam(name = "User")User user)  ;
    @WebResult public boolean checkForLockServiceToInvoice ();
    @WebResult public long createDocLkp(@WebParam(name = "counter")DocLkpFromDBFTransfer transfer,@WebParam(name = "User")User user);
    @WebResult public long deleteDocLKP(@WebParam(name = "listDocLKP")List<DocLkpFromDBFTransfer> transfers,@WebParam(name = "User")User user);
    @WebResult public List<Saldo> searchSaldo(@WebParam(name = "saldoConditon")SaldoCondition condition,@WebParam(name = "User")User user);
    @WebResult public List<CounterClientService> searchDepartamentInputCounter(@WebParam(name = "counterClientServiceCondition")CounterClientServiceCondition condition,@WebParam(name = "User")User user);

    @WebResult public List<InputFactor> searchHistoryFactors(InputFactorCondition condition,User user);
    @WebResult public List<InputFactor> searchClearInputFactors(InputFactorCondition condition,User user);
	
	@WebResult List<TaxBillDetail> downloadPnFiles(@WebParam(name = "condition") TaxBillCondition Condition, @WebParam(name = "User")User user);
    @WebResult List<TaxBillHeader> downloadPjFiles(@WebParam(name = "condition") TaxBillCondition Condition, @WebParam(name = "User")User user);

}
