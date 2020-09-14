package com.manager.controller;

import com.manager.VO.ResultVO;
import com.manager.VO.TransactionInfoVO;
import com.manager.dataObject.Transaction;
import com.manager.service.TransactionService;
import com.manager.service.TransactionServiceImpl;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class TransactionController {

    @Autowired
    TransactionService transactionService;



    @GetMapping("/Account")
    public ResultVO sayHello(){
        List<Transaction> transactionList = transactionService.findAll();
        List<TransactionInfoVO> transactionInfoVOList = new ArrayList<>();
        for(Transaction transaction: transactionList){
            TransactionInfoVO transactionInfoVO = new TransactionInfoVO();
            BeanUtils.copyProperties(transaction,transactionInfoVO);
            transactionInfoVOList.add(transactionInfoVO);
        }


        ResultVO resultVO = new ResultVO();
        TransactionInfoVO transactionInfoVO = new TransactionInfoVO();
        resultVO.setList(transactionInfoVOList);


        return resultVO;
    }
}
