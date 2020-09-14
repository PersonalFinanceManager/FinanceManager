package com.manager.VO;

import lombok.Data;

import java.util.List;

@Data
public class ResultVO<T> {



    //return content
    private List<TransactionInfoVO> list;
}
