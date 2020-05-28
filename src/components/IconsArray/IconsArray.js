import React, { Component } from 'react'
import './Styles.css'
import IconsWithText from '../IconWithText/IconWithText'

export default class IconsArray extends Component {
    render() {
        return (
            <div className="IconsWithText-Container">
                <IconsWithText />
                <IconsWithText />
                <IconsWithText />
            </div>
        )
    }
}
