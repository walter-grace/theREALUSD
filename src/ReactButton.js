import React from 'react'
import { AwesomeButton } from 'react-awesome-button'
import 'react-awesome-button/dist/themes/theme-red.css';


export default function ReactButton() {
    return (
        <div>
            <AwesomeButton
            type="secondary"
            size="large"
            href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/112829198486691756376904202910570877934169287029014742543201552265834770989061"
            >
               🍔 Go
            </AwesomeButton>
        </div>
    )
}
