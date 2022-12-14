import React from "react";
import PropTypes from 'prop-types';
import { calcTime, convertMoney} from "../../helpers";

import { Wrapper, Content } from "./MovieDetailBar.style";

export const MovieDetailBar = ({time, budget, revenue}) =>(

    <Wrapper>
        <Content>
            <div className="column">
                <p> Running Time: {calcTime(time)} </p>
            </div>
            <div className="column">
                <p> Budget: {convertMoney(budget)} </p>
            </div>
            <div className="column">
                <p> Revenue: {convertMoney(revenue)} </p>
            </div>
        </Content>
    </Wrapper>

);

MovieDetailBar.propTypes = {
    time:PropTypes.number,
    budget:PropTypes.number,
    revenue:PropTypes.number
}