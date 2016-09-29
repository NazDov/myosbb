package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.saldo;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.CalcInvoiceVolumeLKP;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.Department;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoDepartment;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.SaldoDepartmentDetails;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldo.GetSumFromInvoiceByLKPQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.saldodepartment.SearchSaldoDepartmentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateSaldoAllDepartmentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateSaldoDepartmentDetailsQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateSaldoDepartmentQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.update.UpdateSaldoMainListQuery;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by vostap on 12/10/2015.
 */
public class RecalculateSaldoByDepartment {

    /*public void recalculateSaldoOnDepartment(Agreement agreement, Department department,Connection connection){
        //throw new UnsupportedOperationException("Not supported ");
        new UpdateSaldoAllDepartmentQuery().execute(connection,null);
    }*/

    public void recalculateSaldoOnDepartment(Agreement agreement, Department department, Connection connection){
        List<SaldoDepartment> saldoDepartments = getSaldoDepartment(agreement,department,connection);
        for (SaldoDepartment s:saldoDepartments){
            SaldoDepartmentDetails sd = s.getSaldoDetails();
            sd.setSumCorrectionOfRealize(getSumCorrectionOfRealize(agreement,department,connection));
            sd.setSumInnerOborot(getSumInnerOborot(agreement,department,connection));
            sd.setSumComiss(getSumCommis(agreement,department,connection));
            sd.setSumPaymentDepartment(getSumPaymentDepartment(agreement,department,connection));
            sd.setSumInvoiceByLKP(getSumInvoiceByLKP(agreement,department,connection));
            s.setInvoice(sd.getSumCorrectionOfRealize()+sd.getSumInvoiceByLKP());
            s.setPayment(sd.getSumInnerOborot()+sd.getSumComiss()+ sd.getSumPaymentDepartment());
            s.setSaldoOnEnd(s.getSaldoOnBegin()+(s.getInvoice()-s.getPayment()));
        }
        updateSaldo(connection,saldoDepartments);
    }

    private void updateSaldo(Connection connection,List<SaldoDepartment> saldoDepartments) {
       for (SaldoDepartment s:saldoDepartments){
           new UpdateSaldoDepartmentQuery().execute(connection,s);
           new UpdateSaldoDepartmentDetailsQuery().execute(connection,s.getSaldoDetails());
       }
    }


    private Double getSumInvoiceByLKP(Agreement agreement, Department department, Connection connection) {
        double res = 0;
        CalcInvoiceVolumeLKPCondition condition = new CalcInvoiceVolumeLKPCondition();
        condition.setDepartmentID(department.getId());
        condition.setDepartmentAgreementID(agreement.getId());
        List<CalcInvoiceVolumeLKP> list = new SearchInvoiceVolumeByLKPQuery(condition).execute(connection);
        for (CalcInvoiceVolumeLKP d:list){
            res+=d.getSumWithPdv();
        }
        return res;
    }

    private Double getSumPaymentDepartment(Agreement agreement, Department department, Connection connection) {
        double res = 0;
        PaymentDepartmentCondition condition = new PaymentDepartmentCondition();
        condition.setDepartmentID(department.getId());
        condition.setAgreementID(agreement.getId());
        List<PaymentDepartment> list = new SearchPaymentDepartmentQuery(condition).execute(connection);
        for (PaymentDepartment d:list){
            res+=d.getSumPayment();
        }
        return res;
    }

    private Double getSumCommis(Agreement agreement, Department department, Connection connection) {
        CommissionCondition condition = new CommissionCondition();
        condition.setDepartmentAgreementID(agreement.getId());
        condition.setDepartmentID(department.getId());
        List<Commission> list = new SearchCommissionQuery(condition).execute(connection);
        double res = 0;
        for (Commission c:list){
            res+=c.getSumCommission();
        }
        return res;
    }

    private Double getSumInnerOborot(Agreement agreement, Department department, Connection connection) {
        double res = 0.0;
        PaymentCondition condition = new PaymentCondition();
        condition.setAgreementDepartmentID(agreement.getId());
        List<Payment> list = new SearchPaymentQuery(condition).execute(connection);
        for (Payment c:list){
            res+=c.getSumPayment();
        }

        return res;
    }

    private Double getSumCorrectionOfRealize(Agreement agreement, Department department, Connection connection) {
        double res = 0.0;
        CorrectionOfRealizeCondition condition = new CorrectionOfRealizeCondition();
        condition.setDepartmentAgreementID(agreement.getId());
        condition.setDepartmentID(department.getId());
        List<CorrectionOfRealize> list = new SearchCorrectionOfRealizeQuery(condition).execute(connection);
        for (CorrectionOfRealize sd:list){
            res+=(sd.getSumWaterSupply())+sd.getSumWatterOut();
        }
        return res;
    }

    private List<SaldoDepartment> getSaldoDepartment(Agreement agreement, Department department, Connection connection) {
        SaldoDepartmentCondition condition = new SaldoDepartmentCondition();
        condition.setAgreementID(agreement.getId());
        condition.setDepartmentID(department.getId());
        List<SaldoDepartment> res = new SearchSaldoDepartmentQuery(condition).execute(connection);
        return res;
    }


}
