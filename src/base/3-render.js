import React, {Component} from 'react'
import Card from '../common/card'

// 并行
function UserView(props) {
  return <p>用户 xxx 你好，欢迎回来！</p>
}
function GuestView(props) {
  return <p>游客你好， 注册 | 登陆。</p>
}

// 条件判断
function ConditionView(props) {
  return <div>{props.isLogin && <UserView />}</div>
}

// 三目运算
function InlineIfElseView(props) {
  return <div>{props.isLogin === true ? <UserView /> : <GuestView />}</div>
}

// 循环
let blogs = [
  {
    title: 'React v16.3.0: New lifecycles and context API',
    url: 'https://reactjs.org/blog/2018/03/29/react-v-16-3.html',
    by: 'Brian Vaughn'
  },
  {
    title: 'Update on Async Rendering',
    url: 'https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html',
    by: 'Brian Vaughn'
  },
  {
    title: 'Sneak Peek: Beyond React 16',
    url: 'https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html',
    by: 'Sophie Alpert'
  },
  {
    title: 'Behind the Scenes: Improving the Repository Infrastructure',
    url:
      'https://reactjs.org/blog/2017/12/15/improving-the-repository-infrastructure.html',
    by: 'Dan Abramov , Brian Vaughn'
  },
  {
    title: 'Introducing the React RFC Process',
    url:
      'https://reactjs.org/blog/2017/12/07/introducing-the-react-rfc-process.html',
    by: 'Andrew Clark'
  }
]
function ListsView(props) {
  let datas = props.data
  return (
    <ol>
      {datas.map((item, index) => 
        <li key={index.toString()}>
          <a href={item.url} target="_blank">{item.title}</a> --- <small>by {item.by}</small>
        </li>)}
    </ol>
  )
}

// 空组件
function NullView(props) {
  let isNull = props.isNull
  if (isNull) {
    return null
  }
  return (
    <div>组件123</div>
  )
}

// 容器
class Render extends Component {
  render() {
    return (
      <div>
        <Card title="并行">
          <UserView />
          <GuestView />
        </Card>
        <Card title="条件判断">
          <ConditionView isLogin />
        </Card>
        <Card title="三目运算">
          <InlineIfElseView isLogin={false} />
        </Card>
        <Card title="循环">
          <ListsView data={blogs} />
        </Card>
        <Card title="空组件">
          <NullView isNull={true} />
        </Card>
      </div>
    )
  }
}

export default Render
