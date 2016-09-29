package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldocache.payment.correctionofrealize.CorrectionOfRealizeCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.correctionofrealize.CorrectionOfRealizeDepartmentSaldoCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.departmentcommission.DepartmentCommissionCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.departmentinvoicebylkp.DepartmentInvoiceByLKPCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.departmentpaymentcache.DepartmentPaymentCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.departmentpaymentcache.DepartmentPaymentSum;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.caches.saldodepartments.paymentdepartment.DepartmentDepartmentPaymentCache;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.database.DataSource;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldodepartment.SearchSaldoDepartmentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateSaldoDepartmentDetailsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateSaldoDepartmentQuery;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;

/**
 * Created by vostap on 10.03.2016.
 */
public class RecalculateAllSaldoByDepartment {

    private CorrectionOfRealizeDepartmentSaldoCache correctionOfRealizeCache;
    private DepartmentPaymentCache departmentPaymentCache;
    private DepartmentInvoiceByLKPCache departmentInvoiceByLKPCache;
    private DepartmentDepartmentPaymentCache departmentDepartmentPaymentCache;
    private DepartmentCommissionCache departmentCommissionCache;

    public RecalculateAllSaldoByDepartment(){
        this.correctionOfRealizeCache = new CorrectionOfRealizeDepartmentSaldoCache();
        this.departmentPaymentCache = new DepartmentPaymentCache();
        this.departmentInvoiceByLKPCache = new DepartmentInvoiceByLKPCache();
        this.departmentDepartmentPaymentCache = new DepartmentDepartmentPaymentCache();
        this.departmentCommissionCache = new DepartmentCommissionCache();
    }

    public List<SaldoDepartment> recalculateAllSaldoOnDepartment(){
      //  CorrectionOfRealizeCache
        Connection connection = DataSource.getInstance().getConnection();
        try{
            List<SaldoDepartment> res =  _recalculateAllSaldoOnDepartment(connection);
            return res;
        }finally {
            try {
                connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    private List<SaldoDepartment> _recalculateAllSaldoOnDepartment(Connection connection){
        List<SaldoDepartment> saldoDepartments = getSaldoDepartment(connection);
        for (SaldoDepartment s:saldoDepartments){
            Agreement agreement = s.getAgreement();
            Department department = s.getDepartment();
            SaldoDepartmentDetails sd = s.getSaldoDetails();
            sd.setSumCorrectionOfRealize(getSumCorrectionOfRealize(s.getAgreement(),s.getDepartment()));
            sd.setSumInnerOborot(getSumInnerOborot(agreement,department,connection));
            sd.setSumComiss(getSumCommis(agreement,department,connection));
            sd.setSumPaymentDepartment(getSumPaymentDepartment(agreement,department,connection));
            sd.setSumInvoiceByLKP(getSumInvoiceByLKP(agreement,department,connection));
            s.setInvoice(sd.getSumCorrectionOfRealize()+sd.getSumInvoiceByLKP());
            s.setPayment(sd.getSumInnerOborot()+sd.getSumComiss()+ sd.getSumPaymentDepartment());
            s.setSaldoOnEnd(s.getSaldoOnBegin()+(s.getInvoice()-s.getPayment()));
        }
        return saldoDepartments;
    }




    private Double getSumInvoiceByLKP(Agreement agreement, Department department, Connection connection) {
        double res = 0;
        for (DepartmentPaymentSum d:this.departmentInvoiceByLKPCache.getDocuments()){
            if (d.getDepartmentAgreement().getId().equals(agreement.getId()))
                return d.getSum();
        }
        return res;
    }

    private Double getSumPaymentDepartment(Agreement agreement, Department department, Connection connection) {
        double res = 0;
        for (DepartmentPaymentSum d:this.departmentDepartmentPaymentCache.getDocuments()){
            if (d.getDepartmentAgreement().getDepartment().getId().equals(department.getId())){
                 return d.getSum();
            }
        }
        return res;
    }

    private Double getSumCommis(Agreement agreement, Department department, Connection connection) {
        double res = 0;
       /*CommissionCondition condition = new CommissionCondition();
        condition.setDepartmentAgreementID(agreement.getId());
        condition.setDepartmentID(department.getId());
        List<Commission> list = new SearchCommissionQuery(condition).execute(connection);
        double res = 0;
        for (Commission c:list){
            res+=c.getSumCommission();
        }*/
        for (DepartmentPaymentSum d:this.departmentCommissionCache.getDocuments()){
            if (d.getDepartmentAgreement().getId().equals(department.getId()) &&
                    d.getDepartmentAgreement().getDepartment().getId().equals(department.getId())){
                return d.getSum();
            }
        }
        return res;
    }

    private Double getSumInnerOborot(Agreement agreement, Department department, Connection connection) {
        for (DepartmentPaymentSum d:this.departmentPaymentCache.getDocuments()){
            if (d.getDepartmentAgreement().getId().equals(agreement.getId())){
                return d.getSum();
            }
        }
        return 0.0;

    }

    private Double getSumCorrectionOfRealize(Agreement agreement, Department department) {
        for ( CorrectionOfRealizeSum c:this.correctionOfRealizeCache.getDocuments()){
            if (c.getDepartment().getId().equals(department.getId()) &&
                    agreement.getId().equals(agreement.getId()))
                return c.getSum();
        }
        return 0.0;
    }

    private List<SaldoDepartment> getSaldoDepartment(Connection connection) {
        SaldoDepartmentCondition condition = new SaldoDepartmentCondition();
        List<SaldoDepartment> res = new SearchSaldoDepartmentQuery(condition).execute(connection);
        return res;
    }

}
