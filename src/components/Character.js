import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import axios from 'axios';
 

export default function Characters(props) {
    return (
        <>
        {props.characters.map(char => {
            return <h1>{char.name}</h1>
        })}
        </>
    )
        
}
