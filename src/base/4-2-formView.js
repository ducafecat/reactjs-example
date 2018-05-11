import React, {Component} from 'react'
import Card from '../common/card'

// 输入组件
class InputView extends Component {
  constructor(props) {
    super(props)
    this.state = {form: props.form} // 父容器 state
    this.handleSync = props.handleSync // 父容器 sync
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    let name = e.target.attributes.name.value
    let value = e.target.value
    this.setState(state => (state.form[name] = value))
    this.handleSync({name, value})
  }
  render() {
    return (
      <div>
        <input
          name="input"
          type="text"
          value={this.state.form.input}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

// 展示组件
function ListView(props) {
  let form = props.form
  let list = []
  for (let key in form) {
    list.push({
      key,
      value: form[key]
    })
  }
  return (
    <ul>
      {list &&
        list.map((item, index) => (
          <li key={index.toString()}>
            {item.key} - {item.value}
          </li>
        ))}
    </ul>
  )
}

// 容器组件
class ContainerView extends Component {
  constructor(props) {
    super(props)
    this.state = {form: {input: '1', textarea: '2'}}
    this.handleSync = this.handleSync.bind(this)
  }
  handleSync(item) {
    this.setState(state => (state.form[item.name] = item.value))
  }
  render() {
    return (
      <div>
        <InputView handleSync={this.handleSync} form={this.state.form} />
        <ListView form={this.state.form} />
      </div>
    )
  }
}

const View = () => (
  <Card title="双向绑定">
    <ContainerView />
  </Card>
)

export default View
