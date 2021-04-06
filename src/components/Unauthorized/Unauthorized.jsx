//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import React from 'react'

import Reactotron from 'reactotron-react-js'

import "./Unauthorized.css";

//-------------------------------------------------------------------------------
// Component Section
//-------------------------------------------------------------------------------
function Unauthorized() {

    // Log:
    Reactotron.log('User was unauthorized');

    return (
        <div className="unauthorized">
            <div className="content__centered">
                <h1>You are not Authorized</h1>
                <h3>To view this content...</h3>
            </div>
        </div>
    )
}

//-------------------------------------------------------------------------------
// Exports Section
//-------------------------------------------------------------------------------
export default Unauthorized
