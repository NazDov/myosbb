package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.system;

/**
 * Created by vostap on 07.05.2015.
 */
public abstract class AbstractSimpleProfiler {

    public void runFunction(String functionName){
        long s = System.currentTimeMillis();
        profiledFunction(functionName);
        long e = System.currentTimeMillis();

    }

    protected abstract void profiledFunction(String functionName);

}
