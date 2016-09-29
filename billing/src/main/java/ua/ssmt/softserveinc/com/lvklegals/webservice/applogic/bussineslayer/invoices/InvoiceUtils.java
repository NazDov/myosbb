package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.invoices;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.services.CalcInvoice;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.enums.InputStatuses;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.DateUtils;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils.LightTransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.addingconsumingvolume.AddingConsumeVolumeCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.agreements.AgreementsCaches;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.agreementsupplier.AgreeementSupplierCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.calcinvoice.CalcInvoiceCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.calcinvoice.rains.CalcInvoiceRainsCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.calcinvoicetohotwattersupplier.CalcInvoiceHotWatterSupplierCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.coeficientareatypes.CoeficientAreaTypesCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.departmentinput.DepartmentInputCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.docvolumeconsumption.DocVolumeConsumptionCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.hotwattersupplier.HotWatterSupplierCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.input.InputCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.inputfactord.InputFactorsCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.koef.KoefCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.rains.RainsCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.rains.norma.RainsNormaCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.registerofcounterinperiod.RegisterOfCounterInPeriodCache_;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.registerofcounters.RegisterOfCounterDocumentsCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.stockwithoutpermission.StockWithoutPermissionCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.subservices.SubserviceCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.tariffcategoryforcalculateteplo.TariffCategoryFroCalculateTeploCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.tariffs.TariffsCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.unregisterofcounterinperiod.UnregisterOfCounterInPeriodCache_;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.unregisterofcounters.UnregisterOfCounterDocumentsCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CalcInvoiceCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetCurrentPeriodQuery;

import java.sql.Connection;
import java.util.*;
import java.util.stream.Collectors;


/**
 * Created by vostap on 06.05.2015.
 */
class InvoiceUtils {

    private static final long CODE_SERVICE_WATTER_OUT = 1;

    private Date period;

    private RegisterOfCounterDocumentsCache registerOfCounterDocumentsCache;
    private UnregisterOfCounterDocumentsCache unregisterOfCounterDocumentsCache;
    private AgreementsCaches agreementsCaches;
    private InputFactorsCache inputFactorsCache;
    private SubserviceCache subserviceCache;
    private TariffsCache tariffsCache;
    private UnregisterOfCounterInPeriodCache_ unregisterOfCounterInPeriodCache;
    private RegisterOfCounterInPeriodCache_ registerOfCounterInPeriodCache;
    private CalcInvoiceCache calcInvoiceCache;
    private RainsCache rainsCache;
    private RainsNormaCache rainsNormaCache;
    private HotWatterSupplierCache hotWatterSupplierCache;
    private AgreeementSupplierCache agreeementSupplierCache;
    private CoeficientAreaTypesCache coeficientAreaTypesCache;
    private Double rainsLevel;
    private DocVolumeConsumptionCache docVolumeConsumptionCache;
    private CalcInvoiceHotWatterSupplierCache calcInvoiceHotWatterSupplierCache;
    private TariffCategoryFroCalculateTeploCache tariffCategoryFroCalculateTeploCache;
    private StockWithoutPermissionCache stockWithoutPermissionCache;
    private DepartmentInputCache departmentInputCache;
    private KoefCache koefCache;
    private AddingConsumeVolumeCache addingConsumeVolumeCache;
    private InputCache inputCache;

    public InvoiceUtils() {
        System.out.println("Start caching.............");
        registerOfCounterDocumentsCache = new RegisterOfCounterDocumentsCache();
        unregisterOfCounterDocumentsCache = new UnregisterOfCounterDocumentsCache();
        rainsNormaCache = new RainsNormaCache();
        agreementsCaches = new AgreementsCaches();
        inputFactorsCache = new InputFactorsCache();
        subserviceCache = new SubserviceCache();
        tariffsCache = new TariffsCache();
        unregisterOfCounterInPeriodCache = new UnregisterOfCounterInPeriodCache_();
        registerOfCounterInPeriodCache = new RegisterOfCounterInPeriodCache_();
        rainsCache = new RainsCache();
        //calcInvoiceCache = new CalcInvoiceCache();
        hotWatterSupplierCache = new HotWatterSupplierCache();
        agreeementSupplierCache = new AgreeementSupplierCache();
        coeficientAreaTypesCache = new CoeficientAreaTypesCache();
        this.docVolumeConsumptionCache = new DocVolumeConsumptionCache();
        this.calcInvoiceHotWatterSupplierCache = new CalcInvoiceHotWatterSupplierCache();
        this.tariffCategoryFroCalculateTeploCache = new TariffCategoryFroCalculateTeploCache(42L);
        this.stockWithoutPermissionCache = new StockWithoutPermissionCache();
        this.departmentInputCache = new DepartmentInputCache();
        this.koefCache = new KoefCache();
        this.inputCache = new InputCache();
        this.addingConsumeVolumeCache = new AddingConsumeVolumeCache();

        this.rainsLevel = 742.000;

        System.out.println("End caching................");

        this.period = getCurrentPeriod();

    }
    public Date getPeriod(){
        return this.period;
    }



    int getCountRegisterOfDocumentInPeriodNotIncludeFirstDay(DepartmentInputInvoice departmentInputInvoice){
        int res = 0;
        for (RegisterOfCounter r:this.registerOfCounterDocumentsCache.getDocuments()){
            if (r.getOnDate().equals(DateUtils.getFirstDayOfMonth(getPeriod()))) continue;
            if (r.getRegInfDepartmentInputsID() == departmentInputInvoice.getDepartmentInputID() && DateUtils.checkDateInPeriod(r.getOnDate(),getPeriod())){
                res++;
            }
        }
        return res;
    }

    private int _getCountRegisterOfDocumentInPeriodFromCache(DepartmentInputInvoice departmentInputInvoice){
        int res = 0;
        for (RegisterOfCounter r:this.registerOfCounterDocumentsCache.getDocuments()){
           if (r.getRegInfDepartmentInputsID() == departmentInputInvoice.getDepartmentInputID() && DateUtils.checkDateInPeriod(r.getOnDate(),getPeriod())){
               res++;
           }
        }
        return res;
    }


    int getCountUnregisterOfCounterDocumentInPeriod(DepartmentInputInvoice departmentInputInvoice){
        return _getCountUnregisterOfCounterDocumentInPeriodFromDataCache(departmentInputInvoice);
    }

    private int _getCountUnregisterOfCounterDocumentInPeriodFromDataCache(DepartmentInputInvoice departmentInputInvoice){
        int res = 0;
        for (UnregisterOfCounter u:unregisterOfCounterInPeriodCache.getDocuments()){
            if ((u.getDepartmentInput().getId().equals(departmentInputInvoice.getDepartmentInputID())) &&
                    (DateUtils.checkDateInPeriod(u.getDateActToUnPlomb(),getPeriod()))){
                res++;
            }
        }
        return res;
    }

    List<SubService> getSubServicesByService(Service service) {
        return _getSubServicesByServiceFromCache(service);
    }

    private List<SubService> _getSubServicesByServiceFromCache(Service service){
        List<SubService> subServices = this.subserviceCache.getDocuments().stream().filter(ss -> ss.getService().getId() == service.getId()).collect(Collectors.toList());
        return subServices;
    }


    Tariff getTariffBySubService(SubService subService, DepartmentInputInvoice di)   {
        return _getTarriffBySubServiceFromCache(subService,di);
    }

    private Tariff _getTarriffBySubServiceFromCache(SubService subService, DepartmentInputInvoice di) {
         for (Tariff t:tariffsCache.getDocuments()){
             if (t.getSubService().getId().equals(subService.getId()) && t.getCategory().getId().equals(di.getTariffCategory())){
                 return t;
             }
         }
        return null;
    }


    Tariff getTariffBySubService(SubService subService, CategoryOfTariff categoryOfTariff)   {
        for (Tariff t:tariffsCache.getDocuments()){
            if (t.getSubService().getId() == subService.getId() && t.getCategory().getId() == categoryOfTariff.getId()){
                return t;
            }
        }
        return null;
    }

    List<RegisterOfCounter> getRegisterOfCounterDocInPeriod(DepartmentInputInvoice inputInvoice){
        List<RegisterOfCounter> list = new ArrayList<>();
        for (RegisterOfCounter r:registerOfCounterInPeriodCache.getDocuments()){
            if (r.getRegInfDepartmentInputsID().equals(inputInvoice.getDepartmentInputID())){
                list.add(r);
            }
        }
        return list;
    }


    List<UnregisterOfCounter> getUnregisterOfCounterDocInPeriod(DepartmentInputInvoice inputInvoice){

        return getUnregisterOfCounterDocInPeriodFromCache(inputInvoice);
    }



    List<UnregisterOfCounter> getUnregisterOfCounterDocInPeriodFromCache(DepartmentInputInvoice inputInvoice) {
        List<UnregisterOfCounter> list = new ArrayList<>();
        for (UnregisterOfCounter u:unregisterOfCounterInPeriodCache.getDocuments()){
            if (u.getDepartmentInput().getId().equals(inputInvoice.getDepartmentInputID())){
                list.add(u);
            }
        }
        return list;
    }

    public List<Input>  getInputsByParentID(long id){
        List<Input> res = this.inputCache.getDocuments().stream().filter(input -> input.getParent().getId().equals(id)).collect(Collectors.toList());
        return res;
    }

     boolean checkEnabled(DepartmentInputInvoice departmentInput, SubService subService) {
        boolean isWatterSupply = this.isWatterSupply(subService);

        if (isWatterSupply == true && departmentInput.getWatterSupply() == true) return true;
        if (isWatterSupply == true && departmentInput.getWatterSupply() == false) return false;

        if (isWatterSupply == false && departmentInput.getWatterOut() == true) return true;
        if (isWatterSupply == false && departmentInput.getWatterOut() == false) return false;

        throw new RuntimeException("check enabled error");
    }

    boolean isWatterSupply(SubService subService){
        if (subService.getId() == 2 || subService.getId() == 4) return true;
        if (subService.getId() == 1 || subService.getId() == 3) return false;
        throw new RuntimeException("Unknow Subservice");
    }

     boolean checkTariffDataInAction(Tariff tariff)   {
        Date p =  this.period;
         if (tariff.getDateInAction() == null) return true;
        if (tariff.getDateInAction().getTime()>getEndPeriod(p).getTime()) return false;
        else return true;
    }


    Date getCurrentPeriod(){
        final Date[] res = {null};
        new LightTransactionManager() {
            @Override
            protected void doOperation(Connection connection) {
                res[0] = new GetCurrentPeriodQuery(null).execute(connection).get(0).getCurrentPeriod();
            }
        };
        return res[0];
    }

    InputFactor checkInputForCounter(DepartmentInputInvoice departmentInput,RegisterOfCounter registerOfCounter){
        //return checkFactors(connection, departmentInput, registerOfCounter);
        return getFactors(departmentInput);
    }

    private InputFactor getFactors(DepartmentInputInvoice departmentInput) {
        for (InputFactor i:this.inputFactorsCache.getDocuments()){
            if (i.getWiringID().longValue() == departmentInput.getDepartmentInputID() &&
                    DateUtils.checkDateInPeriod(i.getPeriod(),getPeriod()))
                return i;
        }
        return  new InputFactor();
    }



    private InputFactor _checkLastFactorBeforeNextRegistration(RegisterOfCounter registerOfCounter, List<InputFactor> factors) {
        for (int i=0;i<factors.size();i++){
            InputFactor f = factors.get(i);
            if (f.getDocumentID().equals(registerOfCounter.getId())) {
                if ((i + 1) <= (factors.size() - 1))
                    return factors.get(i + 1);
                else
                    return factors.get(i);
            }
        }
        return null;
    }

    private int checkCountRegisterDocumentInInput(List<InputFactor> factors, RegisterOfCounter registerOfCounter) {
        int res = 0;
        for (InputFactor f:factors){
            if (f.getDocumentID() != 0) res++;
        }
        return res;
    }

    List<Rains> getAllRainses(Department department)   {
        return getAllRainsesfromCache(department);
    }

    List<Rains> getAllRainsesfromCache(Department department)   {
        List<Rains> res = new ArrayList<>();

        for (Rains rains:rainsCache.getDocuments()){
            if (rains.getDepartment().getId().longValue() == department.getId().longValue() && rains.getAreaType().getId().equals(1L)){
                res.add(rains);
                break;
            }
        }

        for (Rains rains:rainsCache.getDocuments()){
            if (rains.getDepartment().getId().longValue() == department.getId().longValue() && rains.getAreaType().getId().equals(2L)){
                res.add(rains);
                break;
            }
        }

        for (Rains rains:rainsCache.getDocuments()){
            if (rains.getDepartment().getId().longValue() == department.getId().longValue() && rains.getAreaType().getId().equals(3L)){
                res.add(rains);
                break;
            }
        }

        return res;
    }

    List<Rains> getAllRainsNormafromCache(Department department)   {
        List<Rains> res = new ArrayList<>();
        for (Rains rains:rainsCache.getDocuments()){
            if (rains.getDepartment().getId().longValue() == department.getId().longValue()){
                res.add(rains);
            }
        }
        return res;
    }



    void fillCoefficients(List<Rains> rainses)   {
        for (Rains r:rainses){
            r.setAreaType(this.getAreaType(r));
        }
    }

    Double getCurrentRainsLevel()   {
        return rainsLevel;
    }

    Tariff getTariff(DepartmentInputInvoice departmentInput)   {
        SubService subService = new SubService();
        subService.setId(CODE_SERVICE_WATTER_OUT);
        Tariff t = this.getTariffBySubService(subService, departmentInput);
        return t;

    }

     List<AddingByConsumingVolume> getAddingByConsuminVolumeByPeriod()   {
        return addingConsumeVolumeCache.getDocuments();
   }


    List<DepartmentInputInvoice> getDepartmentInputToInvoice(){
        return departmentInputCache.getDocuments();
    }

    boolean checkIsActiveInput(DepartmentInputInvoice departmentInputInvoice) {
        Date period = getPeriod();
        if (departmentInputInvoice.getDateEnd() == null) return true;
        if (departmentInputInvoice.getDateEnd().getTime() < DateUtils.getFirstDayOfMonth(period).getTime() &&
                departmentInputInvoice.getDateEnd().getTime() > DateUtils.getLastDayOfMonth(period).getTime())
            return true;
        if (departmentInputInvoice.getDateEnd().getTime() < DateUtils.getFirstDayOfMonth(period).getTime())
            return false;
        return true;
    }

    private AreaType getAreaType(Rains r)   {
        List<AreaType> list = new ArrayList<>();
        for (AreaType areaType:coeficientAreaTypesCache.getDocuments()){
            if (r.getAreaType().getId().equals(areaType.getId()))
                list.add(areaType);
        }
        if (list.isEmpty()) {
            AreaType areaType = new AreaType();
            areaType.setId(r.getAreaType().getId());
            areaType.setCoefficient(0.0);
            return areaType;
        }else{
            AreaType areaType = new AreaType();
            areaType.setId(r.getAreaType().getId());
            areaType.setCoefficient(list.get(0).getCoefficient());
            return areaType;
        }


    }



    private Date getEndPeriod(Date currentPeriod) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(currentPeriod);
        calendar.add(Calendar.MONTH, 1);
        calendar.set(Calendar.DAY_OF_MONTH, 1);
        calendar.add(Calendar.DATE, -1);
        Date lastDayOfMonth = calendar.getTime();
        return lastDayOfMonth;
    }

    public List<VolumeConsumption> getAllDocumentVolumeLKPByPeriod() {

        return docVolumeConsumptionCache.getDocuments();
    }



    public List<StockWithoutPermission> getDocumentsStockWithoutPermission() {
        return this.stockWithoutPermissionCache.getDocuments();
    }


    public List<CalcInvoiceRainsInvoice> getInvoiceFromPreviousPeriodRains(StockWithoutPermission s) {
        CalcInvoiceCondition condition = new CalcInvoiceCondition();
        condition.setPeriod(s.getPeriodCalculation());

        List<CalcInvoiceRainsInvoice> list = new CalcInvoiceRainsCache(condition).getDocuments();
        List<CalcInvoiceRainsInvoice> res = new ArrayList<>();
        for (CalcInvoiceRainsInvoice c:list){
            if (c.getContraAgent().getId().equals(s.getContraAgent().getId()))
                res.add(c);
        }
        return res;
    }


    public List<RegisterOfCounter> getLastRegisterOfCounterDocument(DepartmentInputInvoice departmentInput) {
        return _getLastRegisterOfCounterDocumentFromCache(departmentInput);
    }


    private List<RegisterOfCounter> _getLastRegisterOfCounterDocumentFromCache(DepartmentInputInvoice departmentInput){
        List<RegisterOfCounter> res = this.registerOfCounterDocumentsCache.getDocuments().stream().filter(r -> r.getRegInfDepartmentInputsID() == departmentInput.getDepartmentInputID()).collect(Collectors.toList());
        return res;
    }


    public List<CalcInvoice> getCalcInvoicesHotWatterSupplierToCalculate() {

        return this.calcInvoiceHotWatterSupplierCache.getDocuments();
    }

    public VolumeConsumption getVolumeConsuptionDocument(ContraAgent contraAgent) {
                for (VolumeConsumption d:docVolumeConsumptionCache.getDocuments()){
            if (d.getContraAgent().equals(contraAgent.getId()))
                return d;
        }
        return null;
    }



    public List<CalcInvoice> getAllHotWatterSupplierInvoice(){
        List<CalcInvoice> res = new ArrayList<>();
        if (calcInvoiceCache == null) calcInvoiceCache = new CalcInvoiceCache();
        for (CalcInvoice c: calcInvoiceCache.getDocuments()){
            if (c.getSubService().getId().equals(3L)) res.add(c);
        }
        return res;
    }



    public List<CalcInvoice> getCalculationInvoiceForAddingConsumeVolume(AddingByConsumingVolume doc) {
        List<CalcInvoice> res = new ArrayList<>();
        for (CalcInvoice c:this.calcInvoiceCache.getDocuments()){
            if (c.getDepartmentInput().getId().equals(doc.getDepartmentInput().getId())){
                res.add(c);
            }
        }
        return res;
    }


    public Double getPdv() {
        return 1.2;
    }

    public Agreement getActiveAgreement(ContraAgent contraAgent) {
        for (Agreement a:agreementsCaches.getDocuments()){
            if (a.getContraAgent().getId().intValue() == contraAgent.getId() && a.isActive() == true){
                return a;
            }
        }
        return null;
    }



    public List<VolumeConsumption> getDocumentVolumeConsuption() {

        return docVolumeConsumptionCache.getDocuments();
    }


    public boolean checkIsHotInputInDocument(VolumeConsumption d) {
        if (d.getService().getId() == 2) return true;
        else return false;
    }

    public HotWaterSupplier getHotWatterSupplier(VolumeConsumption d) {
        for (HotWaterSupplier h: hotWatterSupplierCache.getDocuments()){
            if (h.getId().equals(d.getDepartmentInput().getHotWaterSupplier().getId()))
                return h;
        }
        return null;
    }

    public CategoryOfTariff getTariffCategoryForCalculateTeplo(VolumeConsumption d){
        if (d.getDepartment().getProperty().getCategoryOfTariff().getId().equals(10L))
            return new CategoryOfTariff(43L);
        else
            return new CategoryOfTariff(42L);
    }

    public CategoryOfTariff getTariffCategoryForCalculateTeplo(){
            return tariffCategoryFroCalculateTeploCache.getDocuments().get(0);
    }

    public Agreement getDepartmentAgreement(Department department) {
        for (Agreement a:agreementsCaches.getDocuments()){
            if (a.getDepartment().getId()
                    .equals(department.getId())) return a;
        }
        return null;
    }


    public HotWaterSupplyAgreement getHotWatterSupplierAgreement(HotWaterSupplier hotWaterSupplier) {
        for (HotWaterSupplyAgreement a:agreeementSupplierCache.getDocuments()){
            if (a.getContraAgent().getId().equals(hotWaterSupplier.getId())) return a;
        }
        return null;
    }

    public UnregisterOfCounter getLastUnregisterOfCounterDocument(DepartmentInputInvoice inputInvoice){
        for (UnregisterOfCounter unregisterOfCounter:unregisterOfCounterDocumentsCache.getDocuments()){
            if (unregisterOfCounter.getDepartmentInput().getId().equals(inputInvoice.getDepartmentInputID()))
               return unregisterOfCounter;
        }
        return null;
    }

    public InputStatuses getStatusInputOnDate(DepartmentInputInvoice departmentInputInvoice, Date date) {
        RegisterOfCounter registerOfCounter = this.getLastRegisterOfCounterDocumentBeforeDate(departmentInputInvoice, date);
        UnregisterOfCounter unregisterOfCounter = this.getLastUnregisterOfCounterDocumentBeforeDate(departmentInputInvoice,date);
        if (registerOfCounter == null && unregisterOfCounter == null) return InputStatuses.INPUT_WITHOUT_COUNTER;
        if (registerOfCounter == null && unregisterOfCounter != null) return InputStatuses.INPUT_WITHOUT_COUNTER;
        if (registerOfCounter != null && unregisterOfCounter  == null) return InputStatuses.INPUT_WITH_COUNTER;
        if (registerOfCounter != null && unregisterOfCounter != null){
            if (registerOfCounter.getOnDate().getTime()>unregisterOfCounter.getDateActToUnPlomb().getTime())
                return InputStatuses.INPUT_WITH_COUNTER;
            if (unregisterOfCounter.getDateActToUnPlomb().getTime()>registerOfCounter.getOnDate().getTime())
                return InputStatuses.INPUT_WITHOUT_COUNTER;
        }
        throw new RuntimeException("Cannot get status from departmentInput = "+departmentInputInvoice.getDepartmentInputID());
    }

    public boolean checkForCalculateToMiddle(DepartmentInputInvoice dii) {
        Set<CounterDocuments> documents = getAllDocumentsByDepartmentInput(dii);
        if (documents.isEmpty()) return false;
        CounterDocuments dc = documents.iterator().next();
        if (dc instanceof RegisterOfCounter) return false;
        else{
            UnregisterOfCounter undoc = (UnregisterOfCounter)dc;
            if (undoc.getDateToReturnCounter().getTime()<DateUtils.getFirstDayOfMonth(getPeriod()).getTime()) return false;
            if (undoc.getOperationType().getId().equals(1L) || undoc.getOperationType().getId().equals(2L)){
                if (undoc.getCalculateInPeriodUnregisterCounter()) {
                    return true;
                }
            }
        }
        return false;
    }

    private Set<CounterDocuments> getAllDocumentsByDepartmentInput(DepartmentInputInvoice dii) {
        Set<CounterDocuments> documentsSet = new TreeSet<>((Comparator<CounterDocuments>) (o1, o2) -> o1.compareTo(o2)*(-1));
        documentsSet.addAll(registerOfCounterDocumentsCache.getDocuments().stream().filter(r -> r.getRegInfDepartmentInputsID().equals(dii.getDepartmentInputID()) && r.getOnDate().getTime()<= DateUtils.getLastDayOfMonth(getPeriod()).getTime()).collect(Collectors.toList()));
        documentsSet.addAll(unregisterOfCounterDocumentsCache.getDocuments().stream().filter(u -> u.getDepartmentInput().getId().equals(dii.getDepartmentInputID())&& u.getDateActToUnPlomb().getTime()<= DateUtils.getLastDayOfMonth(getPeriod()).getTime()).collect(Collectors.toList()));
        return documentsSet;
    }


    private UnregisterOfCounter getLastUnregisterOfCounterDocumentBeforeDate(DepartmentInputInvoice departmentInputInvoice, Date date) {
        return _getLastUnregisterOfCounterDocumentBeforeDateFromCache(departmentInputInvoice,date);
    }

    private UnregisterOfCounter _getLastUnregisterOfCounterDocumentBeforeDateFromCache(DepartmentInputInvoice departmentInputInvoice, Date date){
        for (UnregisterOfCounter u:this.unregisterOfCounterDocumentsCache.getDocuments()){
            if (u.getDepartmentInput().getId() == departmentInputInvoice.getDepartmentInputID() && u.getDateActToUnPlomb().getTime() < date.getTime()){
                return u;
            }
        }
        return null;
    }

    private RegisterOfCounter getLastRegisterOfCounterDocumentBeforeDate(DepartmentInputInvoice departmentInputInvoice, Date date) {
       for (RegisterOfCounter r:registerOfCounterDocumentsCache.getDocuments()){
           if (r.getRegInfDepartmentInputsID() == departmentInputInvoice.getDepartmentInputID() && r.getOnDate().getTime()<=date.getTime())
               return r;
       }
        return null;
    }



    public Koef getKoef() {
        return this.koefCache.getDocuments().get(0);
    }

    public Tariff getTariff(Long CategoryOfTariff, Long subserviceID, Date period) {
        for (Tariff t:this.tariffsCache.getDocuments()){
            if (t.getCategory().getId().equals(CategoryOfTariff) &&
                    t.getSubService().getId().equals(subserviceID)
                    //&& t.getPeriod().equals(period)
                    ){
                return t;
            }
        }
        return null;
    }

    public void refreshCalcInvoice(){
        this.calcInvoiceCache = new CalcInvoiceCache();
    }

    public int getLastFactorInPeriod(Counter counter,Date periodByMiddleCalculationOnMonth1) {
        for (InputFactor f:inputFactorsCache.getDocuments()){
            if (f.getPeriod().equals(periodByMiddleCalculationOnMonth1) && f.getCounter().getId().equals(counter.getId()))
                return (f.getEndFactor()-f.getFactorOnBeginMonth());
        }
        //throw new RuntimeException("not found lastFactor in period");
        return 0;

    }


    public List<RainNorma> getAllRainsNorma(Department department) {
        List<RainNorma> res = new ArrayList<>();
        for (RainNorma r:this.rainsNormaCache.getDocuments()){
            if (r.getDepartment().getId().equals(department.getId())){
                res.add(r);
                return res;
            }
        }
        return res;
    }
}
