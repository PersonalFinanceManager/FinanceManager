package com.manager;

import com.manager.dataObject.Transaction;
import com.manager.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class SeedDB {
    @Autowired
    private TransactionRepository transactionRepository;

    @PostConstruct
    public void init(){

        transactionRepository.save(new Transaction("1","Mortagage","$2166.39","2020/08/01 12:30:00","Home/Rent"));
        transactionRepository.save(new Transaction("2","Electricity","$343.99","2020/08/01 12:20:00","Utility"));
        transactionRepository.save(new Transaction("3","KFC","$50.19","2020/08/01 12:10:00","Restaurant"));
        transactionRepository.save(new Transaction("4","Taxi","$40.39","2020/08/01 12:00:00","Traffic"));
    }
}
