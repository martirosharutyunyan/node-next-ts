import React, { useState, useEffect, useMemo, useRef, memo, FC } from 'react';
import axios, { AxiosResponse } from 'axios';

let Container:FC = () => {
    const click =async ():Promise<void> => {
        let postToBack:AxiosResponse = await axios.post('/autoLogin')
        console.log(postToBack)
    }
    return (
        <div>
            <button onClick={click}>post</button>
        </div>
    )
}


export default Container;       