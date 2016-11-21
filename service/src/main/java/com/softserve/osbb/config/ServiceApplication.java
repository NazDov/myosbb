package com.softserve.osbb.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.context.request.RequestContextListener;

import com.softserve.osbb.PersistenceConfiguration;

@SpringBootApplication
@Import(PersistenceConfiguration.class)
@ComponentScan(basePackages = "com.softserve.osbb.service")
public class ServiceApplication {

    /**
     * enables adjusting request and session scopes per each service if needed
     * @return
     */
    @Bean public RequestContextListener requestContextListener(){
        return new RequestContextListener();
    }

    public static void main(String[] args) {

        SpringApplication.run(new Class<?>[]{ServiceApplication.class, TransactionManager.class}, args);

    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}