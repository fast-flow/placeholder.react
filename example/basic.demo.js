var React = require('react')
var Placeholder = require('placeholder.react').default
var App = React.createClass({
    getInitialState() {
        return {
            show: true
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                {
                    self.state.show?
                    (
                        <Placeholder onClose={function() {
                                self.setState({
                                    show: false
                                })
                            }} >basic</Placeholder>
                    ):null
                }
            </div>
        )
    }
})
module.exports = App
