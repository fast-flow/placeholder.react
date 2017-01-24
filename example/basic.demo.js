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
                <Placeholder content="some text" className="my-placeholder" value={self.state.value}>
                    <input type="text" value={self.state.value} onChange={function (e) {
                            self.setState({
                                value: e.target.value
                            })
                        }} />
                </Placeholder>

                <hr/>

                <Placeholder content="A lot of words, abcdefg 123456" className="my-placeholder" value={self.state.value}  >
                    <input type="text" value={self.state.value} onChange={function (e) {
                            self.setState({
                                value: e.target.value
                            })
                        }} />
                </Placeholder>

                <hr/>

                <Placeholder content="A lot of words, abcdefgsomesome 123456"  type="textarea" className="my-placeholder" value={self.state.value} >
                    <textarea value={self.state.value} onChange={function (e) {
                            self.setState({
                                value: e.target.value
                            })
                        }} />
                </Placeholder>

                <hr/>
                
                <Placeholder content={(<div>img<storng>:</storng> <img src="https://pic3.zhimg.com/a91769a7a_l.jpg" height="10" /></div>)} className="my-placeholder" value={self.state.value} >
                    <input value={self.state.value} onChange={function (e) {
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
