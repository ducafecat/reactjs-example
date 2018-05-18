import React, {Component} from 'react'

// 常量
const Element1 = () => <h2>组件1 - 常量</h2>

// 变量
let Element2 = () => <h2>组件2 - 变量</h2>

// es5 函数
function Element3() {
  return <h2>组件3 - es5 函数</h2>
}

// es6 箭头函数
let Element4 = () => {
  return <h2>组件4 - es6 箭头函数</h2>
}

// React.Component 类
class Element5 extends Component {
  render() {
    return <h2>组件5 - React.Component 类对象</h2>
  }
}

// es6 class 组件 , 标准 class 不能作为组件使用
// class Element6 {
//   render() {
//     return <h2>组件6 - es6 class 类对象</h2>
//   }
// }

class Introducing extends Component {
  render() {
    return (
      <div>
        <h1>一切都是组件</h1>
        <Element1 />
        <Element2 />
        <Element3 />
        <Element4 />
        <Element5 />
        {/* <Element6 /> */}
      </div>
    )
  }
}

export default Introducing
