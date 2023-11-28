import React from "react";
import App from "./App";

function FailMessage() {
    return (
        <div>
            <h1 style={
                {
                    textAlign: 'center',
                    color: 'red'
                }
            }>
                Opps, sorry Ash.
            </h1>
        </div>
    )
}

export default FailMessage