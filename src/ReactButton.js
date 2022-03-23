import React from 'react'
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/themes/theme-red.css';


export default function ReactButton() {
    return (
        <div>
            <AwesomeButton
            type="secondary"
            size="large"
            href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/63367272381273427994526977373537561235187732922829644273149988688510907842561"
            >
               🍔 Go
            </AwesomeButton>
        </div>
    )
}
