mvn clean
mvn dependency:purge-local-repository
mvn install:install-file -Dfile=D:\Realize\WebSerivceSpecification.jar  -DgroupId=ua.ssmt.softserveinc.lvklegals -DartifactId=WebSerivceSpecification -Dversion=1 -Dpackaging=jar -DgeneratePom=true

pause