import { Component } from "react"
import Placeholder from "../index"
import { shallow, mount, render } from "enzyme"

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    render () {
        const self = this
        return (
            <Placeholder className="test1" content="placeholder text" value={self.state.value} >
                <input className="test1-input" type="text" value={self.state.value} onChange={function (e) {
                    self.setState({
                        value: e.target.value
                    })
                }}  />
            </Placeholder>
        )
    }
}

it('className', function () {
    const app = mount(<App/>)
    expect(app.html()).toEqual('<div class="r-placeholder test1 r-placeholder--typeInput"><div class="r-placeholder-content">placeholder text</div><input class="test1-input" type="text" value=""></div>')
})

it('change', function () {
    const app = mount(<App/>)
    app.find('input').simulate('change', {
        target: {value: 'abcd'}
    })
    expect(app.html()).toEqual('<div class="r-placeholder test1 r-placeholder--existValue r-placeholder--typeInput"><div class="r-placeholder-content">placeholder text</div><input class="test1-input" type="text" value=""></div>')
})

it('focus', function () {
    const app = mount(<App/>)
    app.find('input').simulate('focus')
    expect(app.html()).toEqual('<div class="r-placeholder test1 r-placeholder--focus r-placeholder--typeInput"><div class="r-placeholder-content">placeholder text</div><input class="test1-input" type="text" value=""></div>')
    app.find('input').simulate('blur')
    expect(app.html()).toEqual('<div class="r-placeholder test1 r-placeholder--typeInput"><div class="r-placeholder-content">placeholder text</div><input class="test1-input" type="text" value=""></div>')
})

it('click', function () {
    const app = mount(<App/>)
    app.find('input').simulate('click')
    expect(app.html()).toEqual('<div class="r-placeholder test1 r-placeholder--focus r-placeholder--typeInput"><div class="r-placeholder-content">placeholder text</div><input class="test1-input" type="text" value=""></div>')
    app.find('input').simulate('blur')
    expect(app.html()).toEqual('<div class="r-placeholder test1 r-placeholder--typeInput"><div class="r-placeholder-content">placeholder text</div><input class="test1-input" type="text" value=""></div>')
    app.find('.r-placeholder-content').simulate('click')
    expect(app.html()).toEqual('<div class="r-placeholder test1 r-placeholder--focus r-placeholder--typeInput"><div class="r-placeholder-content">placeholder text</div><input class="test1-input" type="text" value=""></div>')
})
