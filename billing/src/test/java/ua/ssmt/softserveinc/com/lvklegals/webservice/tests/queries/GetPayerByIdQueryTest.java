package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.queries;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.database.DataSource;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.GetPayerByIdQuery;

import java.sql.Connection;

/**
 * Created by afedorak on 27.09.2016.
 */

public class GetPayerByIdQueryTest {
    DataSource dataSource;
    Connection connection;

    @Before
    public void init(){
        dataSource = DataSource.getInstance();
        connection = dataSource.getConnection();
    }

    @Test
    public void testGetPayerById(){
        GetPayerByIdQuery getPayerByIdQuery = new GetPayerByIdQuery(1L);
        Assert.assertFalse(getPayerByIdQuery.execute(connection).isEmpty());
    }


}
