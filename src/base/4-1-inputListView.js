import React, {Component} from 'react'
import Card from '../common/card'

// 输入组件
function InputView(props) {
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

// 展示组件
function ListView(props) {
  return (
    <ol>
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
  render() {
    return (
      <div>
        <InputView onChange={this.handleChange} />
        <ListView datas={this.state.list} />
      </div>
    )
  }
}

const View = () => (
  <Card title="容器组件、展示组件、操作组件">
    <ContainerView />
  </Card>
)

export default View
