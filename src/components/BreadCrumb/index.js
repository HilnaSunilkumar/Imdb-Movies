import React from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import { Wrapper, Content } from "./BreadCrumb.style";

export const BreadCrumb = ({movieTitle}) =>(

    <Wrapper>
        <Content>
            <Link to='/'>
                <span> <b>Home </b></span>
            </Link>
            <span> &nbsp; | </span>
            <span> <b> {movieTitle} </b></span>
        </Content>
    </Wrapper>
)

BreadCrumb.propTypes = {
    movieTitle:PropTypes.string
}