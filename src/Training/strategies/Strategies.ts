import Strategy from './Strategy';
import StrategyRL from './Regression/RL/StrategyRL';
import StrategySVM from './SVM/StrategySVM';
import AlgorithmViewSVM from './SVM/AlgorithmViewSVM';
import React from 'react';
import DataSVM from './SVM/DataSVM';
import Data from './Data';
import OptionRegression from '../../common/OptionsRegression';
import OptionSVM from '../../common/OptionsSVM';
import Option from '../../common/Options';
import DataRegression from './Regression/DataRegression';
import AlgorithmViewRegression from './Regression/AlgorithmViewRegression';
import StrategyRegLog from './Regression/RLOG/StrategyRegLog';
import StrategyRegExp from './Regression/REXP/StrategyRegExp';

export const strategies: { [index: string]: Strategy } = {
    RL: new StrategyRL(),
    SVM: new StrategySVM(),
    RLOG: new StrategyRegLog(),
    REXP: new StrategyRegExp(),
};

export const algview: { [index: string]: typeof React.Component } = {
    RL: AlgorithmViewRegression,
    SVM: AlgorithmViewSVM,
    RLOG: AlgorithmViewRegression,
    REXP: AlgorithmViewRegression,
};

export const data: { [index: string]: Data } = {
    RL: new DataRegression(),
    SVM: new DataSVM(),
    RLOG: new DataRegression(),
    REXP: new DataRegression(),
};

export const opt: { [index: string]: Option } = {
    RL: new OptionRegression(),
    SVM: new OptionSVM(),
    RLOG: new OptionRegression(),
    REXP: new OptionRegression(),
};
