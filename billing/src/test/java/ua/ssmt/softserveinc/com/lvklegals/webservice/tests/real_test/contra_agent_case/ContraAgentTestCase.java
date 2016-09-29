package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.real_test.contra_agent_case;

import org.junit.Ignore;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.additional.domain.*;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.bussineslayer.FakeTransactionManager;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.database.DataBaseStructure;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.database.DataSource;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.abstracts.AbstractModifyOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.contraagent.CreateContraAgentOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.operations.references.contraagent.SearchContraAgentOperation;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.conditions.ContraAgentCondition;
import ua.ssmt.softserveinc.com.lvklegals.webservice.tests.real_test.StringGenerator;

import java.math.BigInteger;
import java.security.SecureRandom;
import java.sql.Connection;
import java.util.List;

/**
 * Created by vostap on 28.01.2016.
 */
public class ContraAgentTestCase {

    @Test
    @Ignore
    public void _testCreateSuccessfulContraAgent(){
        Connection connection = DataSource.getInstance().getConnection();
        FakeTransactionManager<ContraAgent> tm = new FakeTransactionManager<>(connection);
        testCreateSuccessfulContraAgent(tm);
        tm.runAndRollback();
    }

    public ContraAgent testCreateSuccessfulContraAgent(FakeTransactionManager<ContraAgent> tm){
        ContraAgent expectedContraAgent = _generateCorrectContraAgent();
        tm.doModifyOperation(new CreateContraAgentOperation(),expectedContraAgent);
        ContraAgent insertedContraAgent = _getSingleContraAgentFromDataBase(expectedContraAgent,tm);
        if (!expectedContraAgent.equals(insertedContraAgent)){
            throw new RuntimeException("not equals contranagent inserted and expected");
        }
        return insertedContraAgent;
    }

    private ContraAgent _getSingleContraAgentFromDataBase(ContraAgent expectedContraAgent, FakeTransactionManager<ContraAgent> tm) {
        ContraAgentCondition contraAgentCondition = new ContraAgentCondition();
        contraAgentCondition.setEdrpo(expectedContraAgent.getEDRPO());
        List<ContraAgent> lists = tm.doSelectOperation(new SearchContraAgentOperation(contraAgentCondition));
        if (lists.isEmpty())
            throw new RuntimeException("Cannot get contraAgent by paramenters");
        if (lists.size()>1)
            throw new RuntimeException("Find more than one contraAgent by paramenters");
        return lists.get(0);
    }

    private ContraAgent _generateCorrectContraAgent(){
        ContraAgent contraAgent = new ContraAgent();
        contraAgent.getProperty().setHopeless(false);
        contraAgent.setEDRPO(_generateString());
        contraAgent.getProperty().setGroupWatterSupply(new GroupWatterSupply(1L));
        contraAgent.getProperty().setSourceWaterSupply(new SourceWaterSupply(1L));
        contraAgent.getProperty().setTypeActivity(new TypeActivity(1L));
        contraAgent.getProperty().setContraAgentCategory(new ContraAgentCategory(1L));
        contraAgent.getProperty().setArea(new Area(1L));
        contraAgent.getProperty().setAlgorithm(new Algorithm(1L));
        contraAgent.getProperty().setPayer(new Payer(1L));
        //contraAgent.getProperty().setLimitVK(0.0f);
        return contraAgent;
    }

    private String _generateString(){
        return new StringGenerator().nextSessionId();
    }


}

