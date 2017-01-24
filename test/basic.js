// scryRenderedDOMComponentsWithClass ：找出所有匹配指定className的节点
// findRenderedDOMComponentWithClass ：与scryRenderedDOMComponentsWithClass用法相同，但只返回一个节点，如有零个或多个匹配的节点就报错
// scryRenderedDOMComponentsWithTag ：找出所有匹配指定标签的节点
// findRenderedDOMComponentWithTag ：与scryRenderedDOMComponentsWithTag用法相同，但只返回一个节点，如有零个或多个匹配的节点就报错
// scryRenderedComponentsWithType ：找出所有符合指定子组件的节点
// findRenderedComponentWithType ：与scryRenderedComponentsWithType用法相同，但只返回一个节点，如有零个或多个匹配的节点就报错
// findAllInRenderedTree ：遍历当前组件所有的节点，只返回那些符合条件的节点

require('console-polyfill')
import TestUtils from 'react-addons-test-utils'
import expect from "expect.js"
var React = require('react')
var Placeholder = require('placeholder.react').default
var App = React.createClass({
    getInitialState() {
        return {
            value: ''
        }
    },
    render: function () {
        var self = this
        let commonProps = {
            value: self.state.value,
            onChange: function (e) {
                self.setState({
                    value: e.target.value
                })
            }
        }
        return (
            <div>
                <Placeholder className="test1" content="placeholder text" value={self.state.value} >
                    <input className="test1-input" type="text" {...commonProps} />
                </Placeholder>
            </div>
        )
    }
})

const app = TestUtils.renderIntoDocument(<App/>);

expect(TestUtils.findRenderedDOMComponentWithClass(app, 'test1').className).to.eql('r-placeholder test1 r-placeholder--typeInput')

// change
let eInput1 = TestUtils.findRenderedDOMComponentWithClass(app, 'test1-input')
eInput1.value = 'abcd'
TestUtils.Simulate.change(eInput1)
expect(TestUtils.findRenderedDOMComponentWithClass(app, 'test1').className).to.eql('r-placeholder test1 r-placeholder--existValue r-placeholder--typeInput')
eInput1.value = ''

// focus
TestUtils.Simulate.change(eInput1)
expect(TestUtils.findRenderedDOMComponentWithClass(app, 'test1').className).to.eql('r-placeholder test1 r-placeholder--typeInput')
TestUtils.Simulate.focus(eInput1)
expect(TestUtils.findRenderedDOMComponentWithClass(app, 'test1').className).to.eql('r-placeholder test1 r-placeholder--focus r-placeholder--typeInput')
TestUtils.Simulate.blur(eInput1)
expect(TestUtils.findRenderedDOMComponentWithClass(app, 'test1').className).to.eql('r-placeholder test1 r-placeholder--typeInput')

// click
TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(app, 'r-placeholder-content'))
expect(TestUtils.findRenderedDOMComponentWithClass(app, 'test1').className).to.eql('r-placeholder test1 r-placeholder--focus r-placeholder--typeInput')

console.info('basic.js test done')
