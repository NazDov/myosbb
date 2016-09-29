package ua.ssmt.softserveinc.com.lvklegals.webservice.additional.utils;

/**
 * Created by vostap on 05.01.2016.
 */
public abstract class Profiller {
    public Profiller(String operationName){
        run(operationName);
    }

    private void run(String operationName) {
        long start = System.currentTimeMillis();
        execute();
        long end = System.currentTimeMillis();
        System.out.println("time exec "+operationName+" = "+(end-start));
    }

    protected abstract void execute();
}

