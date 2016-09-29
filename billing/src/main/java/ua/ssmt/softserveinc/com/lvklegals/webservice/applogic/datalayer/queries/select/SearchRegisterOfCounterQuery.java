package ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select;

import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.documents.RegisterOfCounter;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.sys.Options;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.RegisterOfCounterCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.sceleton.AbstractSelectQuery;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Created by vostap on 23.09.2014.
 */
public class SearchRegisterOfCounterQuery extends AbstractSelectQuery<RegisterOfCounter,RegisterOfCounterCondition> {
    public SearchRegisterOfCounterQuery(RegisterOfCounterCondition condition) {
        super(condition);
    }

    @Override
    protected RegisterOfCounter parseResultSet(ResultSet rs) throws SQLException {
        RegisterOfCounter res = new RegisterOfCounter();

        res.setMetrCheckDate(rs.getDate("MetrCheckDate"));
        res.setNumber(rs.getString("Number"));
        res.setOnDate(rs.getDate("OnDate"));
        res.setPlombNumber1(rs.getString("PlombNumber1"));
        res.setPlombNumber2(rs.getString("PlombNumber2"));
        res.setMetrPlomba(rs.getString("MetrPlomba"));
        res.setRegInfDepartmentInputsID(rs.getLong("RegInfDepartmentInputsID"));
        res.setId(rs.getLong("id"));
        res.setPeriod(rs.getDate("Period"));
        res.setInput(this.fillInput(rs));
        res.setContraAgent(this.fillContraAgent(rs));
        res.setDepartment(this.fillDepartment(rs));
        res.setCounter(this.fillCounter(rs));
        res.setReturned(rs.getBoolean("Returned"));
        res.setSurname(rs.getString("Surname"));
        return res;
    }

    private Counter fillCounter(ResultSet rs) throws SQLException {
        Counter res = new Counter();
        res.setId(rs.getLong("CounterID"));
        return res;
    }

    private Department fillDepartment(ResultSet rs) throws SQLException {
        Department res = new Department();
        res.setId(rs.getLong("DepartmetnID"));
        return res;
    }

    private ContraAgent fillContraAgent(ResultSet rs) throws SQLException {
        ContraAgent res = new ContraAgent();
        res.setId(rs.getLong("ContraAgentID"));
        return res;
    }

    private Input fillInput(ResultSet rs) throws SQLException {
        Input i = new Input();
        i.setId(rs.getLong("InputID"));
        return i;
    }

    private Service fillService(ResultSet rs) throws SQLException {
        Service res = new Service();
        res.setId(rs.getLong("ServiceID"));
        return res;
    }



    @Override
    protected String getSQLQuery() {
        StringBuilder sb = new StringBuilder();
        sb.append( " SELECT top "+ Options.getMaxCountToSelectRow()+" d.[id] ");
        sb.append(       "      ,d.[OnDate] ");
        sb.append(       "      ,d.[CounterID] ");
        sb.append(       "      ,d.[Number] ");
        sb.append(       "      ,d.[MetrCheckDate]");
        sb.append(       "      ,d.[PlombNumber1] ");
        sb.append(       "      ,d.[PlombNumber2] ");
        sb.append(       "      ,d.[RegInfDepartmentInputsID]");
        sb.append(       "      ,d.[Period] ");
        sb.append(       "      ,d.[Status] ");
        sb.append(       "      ,d.[MetrPlomba] ");
        sb.append(       "      ,d.[Returned] ");
        sb.append(       "      ,d.[Surname] ");
        sb.append(       "      ,cntr.Number as CounterNumber ");
        sb.append(       "      ,s.Name as streetName   ");
        sb.append(       "      ,mun.Name as munName    ");
        sb.append(       "      ,addr.Number as HouseNumber    ");
        sb.append(       "      ,addr.Letter as HouseLetter   ");
        sb.append(       "      ,s.id as StreetID    ");
        sb.append(       "      ,addr.id as AddressID   ");
        sb.append(       "      ,mun.id as MumicipalID    ");
        sb.append(       "      ,serv.id as ServiceID   ");
        sb.append(       "      ,serv.Name as ServiceName   ");
        sb.append(       "      ,diam.id as diamID   ");
        sb.append(       "      ,diam.Name as diameter   ");

        sb.append(       "      ,di.InputID as InputID   ");
        sb.append(       "      ,di.DepartmentID as DepartmetnID   ");
        sb.append(       "      ,ca.ID as ContraAgentID  ");


        sb.append(       "  FROM [dbo].[DocRegisterCounter] as d ");
        sb.append(       "  left join RegInfDepartsInputs as di on ");
        sb.append(       "  d.RegInfDepartmentInputsID = di.id");
        sb.append(       "  left join RefDepartaments as dep on ");
        sb.append(       "  di.DepartmentID = dep.id ");

        sb.append(       "  left join RefContragents as ca on ");
        sb.append(       "  ca.id = dep.ConraAgentID ");
        sb.append(       "  left join RefCounters as cntr on   ");
        sb.append(       " d.CounterID = cntr.id    ");
        sb.append(       " left join RefInputs as inpt on   ");
        sb.append(       " di.InputID = inpt.id   ");
        sb.append(       " left join RefAddresses as addr on  ");
        sb.append(       " inpt.AddrID = addr.id   ");
        sb.append(       " left join RefStreets as s on  ");
        sb.append(       " addr.StreetID = s.id   ");
        sb.append(       " left join RefMunicipals as mun on   ");
        sb.append(       " s.MunicipalID = mun.id   ");
        sb.append(       " left join RefServices as serv on      ");
        sb.append(       " inpt.ServiceID = serv.id      ");
        sb.append(       " left join RefInputDiameters as diam on  ");
        sb.append(       " inpt.InputDiameterID = diam.id  ");
        sb.append(       " where status = 3  ");

        if (condition.getContraAgentID() != null )
            sb.append(" and ca.id  = "+condition.getContraAgentID());
        if (condition.getDepartmentID() != null )
            sb.append(" and di.DepartmentID ="+condition.getDepartmentID());
        if (condition.getInputID() != null)
            sb.append(" and di.InputID =" +condition.getInputID());
        if (condition.getCounterNumber() != null && condition.getCounterNumber().isEmpty() == false)
            sb.append(" and cntr.Number like '"+condition.getCounterNumber().trim()+"'");
        if (condition.getDateAct() != null)
            sb.append(" and OnDate = "+this.getDateAsString(condition.getDateAct()));
        if (condition.getNumberAct() != null && condition.getNumberAct().isEmpty() == false)
            sb.append(" and Number = '"+condition.getNumberAct().trim()+"'");
        if (condition.getId() != null)
            sb.append(" and d.id = "+condition.getId());
        if (condition.getDepartmentInputID() != null)
            sb.append(" and d.[RegInfDepartmentInputsID]= "+condition.getDepartmentInputID());
        sb.append(" order by d.[OnDate] desc");
        //(sb.toString());
        return sb.toString();
    }
}
