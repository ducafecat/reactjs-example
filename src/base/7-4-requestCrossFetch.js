import React, {Component} from 'react'
import fetch from 'cross-fetch'

class RequestView extends Component {
  constructor(props) {
    super(props)
    this.state = {users: []}
    this.handleClick = this.handleClick.bind(this)
  }
  async handleClick() {
    try {
      const res = await fetch(
        'https://www.easy-mock.com/mock/59801fd8a1d30433d84f198c/example/user/all'
      )
      const users = await res.json()
      this.setState({users})
    } catch (error) {
      console.log('错误', error)
    }
  }

  render() {
    return (
      <div>
        <input
          type="button"
          value="点击 cross-fetch 组件方式 获取数据"
          onClickCapture={this.handleClick}
        />
        <ul>
          {this.state.users &&
            this.state.users.map((item, index) => (
              <li key={index.toString()}>{item.name}</li>
            ))}
        </ul>
      </div>
    )
  }
}

export default RequestView
