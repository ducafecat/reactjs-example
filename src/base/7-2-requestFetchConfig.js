import React, {Component} from 'react'

class RequestView extends Component {
  constructor(props) {
    super(props)
    this.state = {user: null}
    this.handlePostForm = this.handlePostForm.bind(this)
    this.handlePostJSON = this.handlePostJSON.bind(this)
  }
  handlePostForm() {
    let initHeaders = new Headers()
    initHeaders.append('Accept', 'application/json, text/plain, */*')
    initHeaders.append('Cache-Control', 'no-cache')
    initHeaders.append('Content-Type', 'application/x-www-form-urlencoded')

    let data = {uid: 1011}
    let body = `uid=${data.uid}`

    const init = {
      method: 'POST',
      credentials: 'include', // cookies
      cache: 'no-cache ', // cookies
      headers: initHeaders,
      body
    }
    fetch(
      'https://www.easy-mock.com/mock/59801fd8a1d30433d84f198c/example/user/login',
      init
    )
      .then(res => res.json())
      .then(data => {
        this.setState({user: data})
      })
      .catch(e => console.log('错误:', e))
  }
  handlePostJSON() {
    let initHeaders = new Headers()
    initHeaders.append('Accept', 'application/json, text/plain, */*')
    initHeaders.append('Cache-Control', 'no-cache')
    initHeaders.append('Content-Type', 'application/json;charset=UTF-8')

    let data = {uid: 1011}
    let body = JSON.stringify(data, null, 2)

    const init = {
      method: 'POST',
      credentials: 'include', // cookies
      cache: 'no-cache ', // cookies
      headers: initHeaders,
      body
    }
    fetch(
      'https://www.easy-mock.com/mock/59801fd8a1d30433d84f198c/example/user/login',
      init
    )
      .then(res => res.json())
      .then(data => {
        this.setState({user: data})
      })
      .catch(e => console.log('错误:', e))
  }

  render() {
    return (
      <div>
        <input
          type="button"
          value="点击 http-post form 表单"
          onClickCapture={this.handlePostForm}
        />
        <br />
        <input
          type="button"
          value="点击 http-post json raw 格式"
          onClickCapture={this.handlePostJSON}
        />
        {this.state.user && (
          <ul>
            <li>ID: {this.state.user.id}</li>
            <li>Name: {this.state.user.name}</li>
          </ul>
        )}
      </div>
    )
  }
}

export default RequestView
