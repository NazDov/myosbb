package ua.ssmt.softserveinc.com.lvklegals.webservice.tests.queries;

import org.junit.Assert;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.database.DataSource;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.create.CreateTypeOfActivityQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.applogic.datalayer.queries.select.SelectTypeActivityQuery;
import ua.ssmt.softserveinc.com.lvklegals.webservice.wsdl.TypeActivity;

import java.sql.Connection;
import java.util.List;

/**
 * Created by afedorak on 28.09.2016.
 */
public class TypeActivityQueryTest {
    private static DataSource dataSource;
    private static Connection connection;

    @BeforeClass
    public static void init(){
        dataSource = DataSource.getInstance();
        connection = dataSource.getConnection();
    }

    @Test
    public void selectTypeActivity() {
        SelectTypeActivityQuery selectTypeActivityQuery = new SelectTypeActivityQuery("test");
        List<TypeActivity> list = selectTypeActivityQuery.execute(connection);
        Assert.assertTrue(list.isEmpty());
    }

    @Test
    public void createTypeActivity(){

        CreateTypeOfActivityQuery createTypeOfActivityQuery = new CreateTypeOfActivityQuery();
        TypeActivity typeActivity = new TypeActivity();
        typeActivity.setName("test");
        createTypeOfActivityQuery.execute(connection, typeActivity);

        SelectTypeActivityQuery selectTypeActivityQuery = new SelectTypeActivityQuery("test");
        List<TypeActivity> list = selectTypeActivityQuery.execute(connection);

        Assert.assertFalse(list.isEmpty());
    }

}
