package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.Agreement;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.CorrectionOfRealize;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.CorrectionOfRealizeCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 23.10.2014.
 */
public class SearchCorrectionOfRealizeQuery extends AbstractSelectQuery<CorrectionOfRealize,CorrectionOfRealizeCondition> {
    public SearchCorrectionOfRealizeQuery(CorrectionOfRealizeCondition condition) {
        super(condition);
    }

    @Override
    protected CorrectionOfRealize parseResultSet(ResultSet rs) throws SQLException {
        CorrectionOfRealize res = new CorrectionOfRealize();
        res.setId(rs.getLong("id"));
        res.setContraAgent(this.fillContraAgent(rs));
        res.setDepartment(this.fillDepartment(rs));
        res.setInput(this.fillInput(rs));
        res.setLabel(rs.getString("Label"));
        res.setVolumeWatterSupply(rs.getDouble("VolumeWatterSupply"));
        res.setVolumeWatterOut(rs.getDouble("VolumeWatterOut"));
        res.setSumWaterSupply(rs.getDouble("SumWatterSupply"));
        res.setSumWatterOut(rs.getDouble("SumWatterOut"));
        res.setDocumentReasonDate(rs.getDate("DocumentReasonDate"));
        res.setDocumentReasonNumber(rs.getString("DocumnentReasonNumber"));
        res.setPeriod(rs.getDate("Period"));
        res.setAgreement(this.fillAgreement(rs));
        res.setDepAgreement(this.fillAgreementDep(rs));
        res.setTypeCorrection(this.fillTypeCorrection(rs));
        res.setDateTarif(rs.getDate("periodTarif"));
        res.setCategoryOfTariff(this.fillCategoryOfTariff(rs));
        res.setSubServicevpID(rs.getLong("subServicevp"));
        res.setSubServicevvID(rs.getLong("subServicevv"));
        res.setTarifvp(rs.getDouble("tarifvp"));
        res.setTarifvv(rs.getDouble("tarifvv"));
        res.setSumbezpdvVP(rs.getDouble("sumbezpdvVP"));
        res.setSumbezpdvVV(rs.getDouble("sumbezpdvVV"));
        res.setSumpdv(rs.getDouble("sumpdv"));
        return res;
    }

    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("ContraAgentID"));
        return res;
    }
    private TypeCorrection fillTypeCorrection(ResultSet rs) throws SQLException {
        TypeCorrection res = new TypeCorrection();
        res.setId(rs.getLong("typeCorrection"));
        res.setName(rs.getString("TypeCorrectionNAme"));
        return res;
    }

    private CategoryOfTariff fillCategoryOfTariff(ResultSet rs) throws SQLException {
        CategoryOfTariff res = new CategoryOfTariff();
        res.setId(rs.getLong("tarifCategoryId"));
        return res;
    }

    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmentID"));
        return res;
    }
    private Input fillInput(ResultSet rs) throws SQLException {
        Input res = new Input();
        res.setId(rs.getLong("InputID"));
        return res;
    }
    private Agreement fillAgreement(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("AgreementID"));
        res.setAgreementNumber(rs.getString("AgreementNumber"));
        return res;
    }

    private Agreement fillAgreementDep(ResultSet rs) throws SQLException {
        Agreement res = new Agreement();
        res.setId(rs.getLong("DepartmentAgreementID"));
        return res;
    }

    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append(" SELECT top "+ Options.getMaxCountToSelectRow()+" a.[id]    ");
        sb.append(" ,a.[DocumentDate]  ");
        sb.append(" ,a.[ContraAgentID]  ");
        sb.append(" ,a.[DepartmentID]  ");
        sb.append(" ,a.[InputID]  ");
        sb.append(" ,a.[VolumeWatterSupply]  ");
        sb.append(" ,a.[VolumeWatterOut]  ");
        sb.append(" ,a.[SumWatterSupply]  ");
        sb.append(" ,a.[SumWatterOut]  ");
        sb.append(" ,a.[Label]  ");
        sb.append(" ,a.[Period]  ");
        sb.append(" ,a.[ReasonID]  ");
        sb.append(" ,a.[DocumnentReasonNumber]  ");
        sb.append(" ,a.[DocumentReasonDate]  ");
        sb.append(" ,a.[AgreementID]  " );
        sb.append(" ,a.[typeCorrectionID] as typeCorrection  ");
        sb.append(" ,t.[name] as TypeCorrectionNAme  ");
        sb.append(",agreement.AgreementNumber as AgreementNumber  ");
        sb.append(" ,a.[tarifCategoryId] as tarifCategoryId  ");
        sb.append(" ,a.[periodTarif] as periodTarif  ");
        sb.append(" ,a.[subServicevv]  ");
        sb.append(" ,a.[subServicevp]  ");
        sb.append(" ,a.[tarifvv]  ");
        sb.append(" ,a.[tarifvp]  ");
        sb.append(" ,a.[sumbezpdvVV]  ");
        sb.append(" ,a.[sumbezpdvVP]  ");
        sb.append(" ,a.[sumpdv]  ");
        sb.append(" ,a.[DepartmentAgreementID]  ");
        sb.append(" FROM [dbo].[DocCorrectionOfRealize]  as a  ");
        sb.append(" left join  DocAgreement as agreement on  a.[AgreementID] = agreement.id  ");
        sb.append(" left join  RefTypeCorrection as t on  a.[typeCorrectionID] = t.id  ");
        sb.append(       " where 1 = 1  ");


        if (condition.getContraAgentID() != null )
            sb.append(" and a.[ContraAgentID]  = "+condition.getContraAgentID());
        if (condition.getDepartmentID() != null)
            sb.append(" and a.[DepartmentID]  = "+condition.getDepartmentID());
        if (condition.getDocumentReasonDate() != null)
            sb.append(" and a.[DocumentReasonDate] = "+condition.getDocumentReasonDate());
        if (condition.getDepartmentAgreementID() != null)
            sb.append("and DepartmentAgreementID = "+condition.getDepartmentAgreementID());
        if (condition.getId() != null)
            sb.append(" and a.id = "+condition.getId());
        return sb.toString();
    }
}
