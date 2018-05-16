// @flow
import * as React from 'react'
import Card from '../common/card'

// 组件中使用
type Props = {
  children?: React.Node,
  name: string,
  isShow?: boolean,
  fileSize?: number
}
type State = {
  count: number
}
class PropsView extends React.Component<Props, State> {
  // 状态初始
  state = {
    count: 0
  }
  // 属性默认值
  static defaultProps = {
    name: '',
    isShow: true,
    fileSize: 999
  }
  // 事件定义
  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState(prevState => ({
      count: prevState.count + 99
    }))
    if (this.button !== undefined && this.button !== null) {
      this.button.disabled = true
    }
  }
  // ref 定义
  button: ?HTMLButtonElement;

  componentDidMount() {}

  render() {
    let {name, isShow, fileSize} = this.props
    return (
      <div>
        <button onClickCapture={this.handleClick} ref={button => (this.button = button)}>+ 按钮事件</button>
        <ul>
          <li>props.name - {name}</li>
          <li>props.isShow - {isShow ? 'true' : 'false'}</li>
          <li>props.fileSize - {fileSize}</li>
          <li>state.count - {this.state.count}</li>
        </ul>
      </div>
    )
  }
}

function FlowView() {
  return (
    <Card title="React 组件中使用 Flow">
      <PropsView name="hello" />
    </Card>
  )
}

export default FlowView
