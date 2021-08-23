import React from 'react'
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/themes/theme-red.css';


export default function ReactButton() {
    return (
        <div>
            <AwesomeButton
            type="secondary"
            size="large"
            >
               🍔 Go
            </AwesomeButton>
        </div>
    )
}
