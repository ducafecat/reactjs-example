import React, {Component} from 'react'
import Card from '../common/card'
import './base.css'

// JSX 属性
const ElementProps = () => (
  <div tabIndex="0" className="divbg" style={{fontSize: '14px'}}>
    JSX 属性 tabIndex、className、style、fontSize
  </div>
)

// JSX 防注入攻击
const jsContent = `
<script type="text/javascript">
alert("JSX 防注入攻击!")
</script>`
const ElementInject = () => <div>{jsContent}</div>

// Props
function ElementShow(props) {
  // props.isShow = true // 只读不能修改
  return (
    <div>
      <p>字符串: {props.name} </p>
      <p>日期变量: {props.date.toLocaleTimeString()}</p>
      <p>布尔变量: {props.isShow === true ? 'True' : 'False'}</p>
    </div>
  )
}

// State
// 初始
class ElementStateStatic extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }
  render() {
    return <p>初始时间 => {this.state.date.toLocaleString()}</p>
  }
}
// 更新
class ElementStateUpdate extends Component {
  constructor(props) {
    super(props)
    this.date = props.date
    this.state = {date: new Date()}
  }
  componentDidMount() {
    if (this.date !== undefined) {
      // 传值方式
      this.setState({date: this.date})
      // 函数方式
      // this.setState((state, props) => {
      //   return {date: this.date}
      // })
    }
  }
  render() {
    return <p>更新时间 => {this.state.date.toLocaleString()}</p>
  }
}

// Lifecycle
class ElementLifecycle extends Component {
  constructor(props) {
    super(props)
    this.date = props.date
    this.state = {date: this.date}
  }
  componentWillMount() {
    console.log('componentWillMount 在渲染前调用')
  }
  componentDidMount() {
    console.log('componentDidMount 在第一次渲染后调用')
    if (this.date !== undefined) {
      // 传值方式
      this.setState({date: this.date})
      // 函数方式
      // this.setState((state, props) => {
      //   return {date: this.date}
      // })
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(
      'componentWillReceiveProps 在组件接收到一个新的 prop (更新后)时被调用',
      nextProps
    )
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      'shouldComponentUpdate 在组件接收到新的props或者state时被调用',
      nextProps,
      nextState
    )
    return true // 返回一个布尔值
  }
  componentWillUpdate(nextProps, nextState) {
    console.log(
      'componentWillUpdate 在组件接收到新的props或者state但还没有render时被调用',
      nextProps,
      nextState
    )
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      'componentDidUpdate 在组件完成更新后立即调用',
      prevProps,
      prevState
    )
  }
  componentWillUnmount() {
    console.log('componentWillUnmount 在组件从 DOM 中移除的时候立刻被调用')
  }
  render() {
    return <p>时间 => {this.state.date.toLocaleString()}</p>
  }
}

// Event
class InputView extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  handleChangeVal(val, e) {
    console.log(val)
    this.setState({value: e.target.value})
  }
  handleSubmit(e) {
    e.preventDefault() // 阻止事件
    console.log('handleSubmit')
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{display: 'inline-flex'}}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChangeVal.bind(this, '123')}
        />
        <input type="submit" value="提交" />
        <p>{this.state.value}</p>
      </form>
    )
  }
}

// 容器组件
class Features extends Component {
  render() {
    return (
      <div>
        <Card title="JSX">
          <ElementProps />
          <ElementInject />
        </Card>
        <Card title="Props">
          <ElementShow name="greeting" date={new Date()} isShow={false} />
        </Card>
        <Card title="State">
          <ElementStateStatic />
          <ElementStateUpdate date={new Date('2006-06-06 06:06:06')} />
        </Card>
        <Card title="Lifecycle">
          <ElementLifecycle date={new Date('2006-06-06 06:06:06')} />
        </Card>
        <Card title="Event">
          <InputView />
        </Card>
      </div>
    )
  }
}

export default Features
