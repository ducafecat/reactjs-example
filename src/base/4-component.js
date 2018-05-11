import React, {Component} from 'react'

// 输入组件
// 存操作组件
function InputAView(props) {
  return (
    <div>
      <input
        type="text"
        onKeyDown={props.onChange}
        placeholder="输入 ...... ↩"
      />
    </div>
  )
}
// 功能独立 state 组件
class InputBView extends Component {
  constructor(props) {
    super(props)
    this.handleAdd = props.handleAdd
    this.handleChange = this.handleChange.bind(this)
    this.handleButton = this.handleButton.bind(this)
    this.state = {value: ''}
  }
  handleButton(e) {
    if (this.handleAdd !== undefined) {
      this.handleAdd(this.state.value)
      this.setState({value:''});
    }
  }
  handleChange(e) {
    let name = e.target.attributes.name.value
    let value = e.target.value
    this.setState(state => (state[name] = value))
  }

  render() {
    return (
      <div>
        <input
          name="value"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="输入 ...... 按提交"
        />
        <input type="button" onClick={this.handleButton} value="提交" />
      </div>
    )
  }
}

// 展示组件
function ListView(props) {
  return (
    <ol style={{border: '1px solid #000'}}>
      {props.datas &&
        props.datas.map((item, index) => (
          <li key={index.toString()}>{item}</li>
        ))}
    </ol>
  )
}

// 容器组件
class ContainerView extends Component {
  constructor(props) {
    super(props)
    this.state = {list: []}
    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }
  handleChange(e) {
    if (e.keyCode === 13) {
      const value = e.target.value
      e.target.value = ''
      this.setState((state, props) => {
        let list = state.list
        list.push(value)
        return {list}
      })
    }
  }
  handleAdd(value) {
    this.setState((state, props) => {
      let list = state.list
      list.push(value)
      return {list}
    })
  }
  render() {
    return (
      <div>
        <InputAView onChange={this.handleChange} />
        <InputBView handleAdd={this.handleAdd} />
        <ListView datas={this.state.list} />
      </div>
    )
  }
}

export default ContainerView
