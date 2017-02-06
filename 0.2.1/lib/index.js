import "./index.css"
import { Component, createElement, createClass } from "react"
import { render } from "react-dom"
import props from "./props"
import classNames from "classnames"


class Placeholder extends Component {
    constructor (props) {
        super(props)
        this.state = {
            inputFocus: false
        }
    }
    ms = (action) => {
        let self = this
        let state = self.state
        let props = self.props
        switch (action.type) {
            case 'FOCUS_INPUT':
                state.inputFocus = true
                break
            case 'BLUR_INPUT':
                state.inputFocus = false
                break
            default:
            throw new Error('Not find action.type: ' + action.type)
        }
        self.setState(state)
    }
    ensureFindInput = () => {
        let self = this
        let input = self.props.findInput(self.refs.root)
        if (typeof input === 'undefined') {
            throw new Error('node_module/placeholder.react: props.findInput not find input')
        }
        return input
    }
    contentClick = () => {
        let self = this
        let input = self.ensureFindInput()
        input.focus()
        self.ms({
            type: 'FOCUS_INPUT',
            payload: {
                targetElement: 'content'
            }
        })
    }
    rootClick = (e) => {
        const self = this
        if (e.target === self.ensureFindInput()) {
            self.ms({
                type: 'FOCUS_INPUT',
                targetElement: 'input'
            })
        }
    }
    rootBlur = (e) => {
        const self = this
        if (e.target === self.ensureFindInput()) {
            self.ms({
                type: 'BLUR_INPUT'
            })
        }
    }
    rootFocus = (e) => {
        const self = this
        if (e.target === self.ensureFindInput()) {
            self.ms({
                type: 'FOCUS_INPUT',
                targetElement: 'input'
            })
        }
    }
    capitalize = (name) => {
        return name[0].toUpperCase() + name.slice(1)
    }
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        return (
            <div ref="root" onFocus={self.rootFocus} onClick={self.rootClick} onBlur={self.rootBlur} className={classNames({
                    [`${pcls}`]: true,
                    [`${self.props.className}`]: self.props.className,
                    [`${pcls}--focus`]: self.state.inputFocus,
                    [`${pcls}--existValue`]: self.props.value.length !== 0,
                    [`${pcls}--type` + self.capitalize(self.props.type)]: true
                })} >
                <div className={`${pcls}-content`} onClick={self.contentClick} >{self.props.content}</div>
                {self.props.children}
            </div>
        )
    }
}
props(Placeholder)
export default Placeholder
