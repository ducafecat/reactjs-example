import React, {Component} from 'react'
import Card from '../common/card'

// 输入组件
class InputView extends Component {
  constructor(props) {
    super(props)
    this.form = props.form // 父容器 state.form
    this.sync = props.sync // 父容器 sync
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    let name = e.target.attributes.name.value
    let value = e.target.value
    this.sync({name, value})
  }
  render() {
    return (
      <ul>
        <li>
          <input
            name="input"
            type="text"
            value={this.form.input}
            onChange={this.handleChange}
          />
        </li>
        <li>
          <textarea
            name="textarea"
            value={this.form.textarea}
            onChange={this.handleChange}
          />
        </li>
        <li>
          <select
            name="select"
            value={this.form.select}
            onChange={this.handleChange}
          >
            <option value="">---</option>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </li>
      </ul>
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
    this.state = {form: {input: '', textarea: '', select: ''}}
    this.handleSync = this.handleSync.bind(this)
  }
  handleSync(item) {
    this.setState((prevState, props) => {
      let form = prevState.form
      form[item.name] = item.value
      return {form}
    })
  }
  render() {
    return (
      <div>
        <InputView sync={this.handleSync} form={this.state.form} />
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
