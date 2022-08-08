import React from "react";
import PropTypes from 'prop-types';

import { Wrapper, Image } from "./Actors.style";

export const Actors = ({name, character, imageUrl})=> (
    <Wrapper>
        <Image src = {imageUrl} alt='actors-thumb'/>
        <h3> {name} </h3>
        <p> {character} </p>
    </Wrapper>
);

Actors.propTypes = {
    name:PropTypes.string,
    character:PropTypes.string,
    imageUrl:PropTypes.string
}