var React = require('react')
var Placeholder = require('placeholder.react').default
var App = React.createClass({
    getInitialState: function () {
        return {
            value: ''
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                <Placeholder className="example-basic" value={self.state.value} content="some text" >
                    <input type="text" value={self.state.value} onChange={function (e) {
                            self.setState({
                                value: e.target.value
                            })
                        }} />
                </Placeholder>

                <hr/>

                <Placeholder className="example-basic" value={self.state.value} content="A lot of words, abcdefg 123456" >
                    <input type="text" value={self.state.value} onChange={function (e) {
                            self.setState({
                                value: e.target.value
                            })
                        }} />
                </Placeholder>

                <hr/>

                <Placeholder type="textarea" className="example-basic" value={self.state.value} content="A lot of words, abcdefgsomesome 123456" >
                    <textarea value={self.state.value} onChange={function (e) {
                            self.setState({
                                value: e.target.value
                            })
                        }} />
                </Placeholder>
            </div>
        )
    }
})
module.exports = App
