import { PropTypes } from "react"
import extend from "extend"
export default function (component) {
    extend(true, component, {
        defaultProps: {
            prefixClassName: 'r-placeholder',
            className: '',
            content: '',
            type: 'input',
            findInput: function (rootElement) {
                return rootElement.getElementsByTagName('input')[0] || rootElement.getElementsByTagName('textarea')[0]
            }
        },
        propTypes: {
            prefixClassName: PropTypes.string,
            className: PropTypes.string,
            content: PropTypes.oneOfType([
                PropTypes.element,
                PropTypes.string
            ]),
            type: PropTypes.oneOf(['input', 'textarea', 'custom']),
            findInput: PropTypes.func
        }
    })
}
