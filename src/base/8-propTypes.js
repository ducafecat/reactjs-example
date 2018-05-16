import React from 'react'
import PropTypes from 'prop-types'
import Card from '../common/card'

// 类型声明
const PropTypesComponent = props => (
  <ul>
    <li>name - {props.name}</li>
    <li>optionalEnum - {props.optionalEnum}</li>
    <li>optionalUnion - {props.optionalUnion}</li>
    <li>optionalUnion - {props.optionalUnion}</li>
    <li>optionalObjectWithShape - color: {props.optionalObjectWithShape.color} , fontSize: {props.optionalObjectWithShape.fontSize}</li>
    <li>requiredAny - {props.requiredAny}</li>
  </ul>
)
PropTypesComponent.propTypes = {
  name: PropTypes.string, // 原生类型
  optionalEnum: PropTypes.oneOf(['News', 'Photos']), // 某个特定值之一
  optionalUnion: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]), // 限制它为列举类型之一的对象
  optionalObjectWithShape: PropTypes.shape({
    color: PropTypes.string,
    fontSize: PropTypes.number
  }), // 一个指定属性及其类型的对象
  requiredAny: PropTypes.any.isRequired // 任意类型的数据
}

// 限制单个子代
const OnlyOneChild = (props) => {
  const children = props.children
  return (
    <div>
      {children}
    </div>
  )
}
OnlyOneChild.propTypes = {
  children: PropTypes.element.isRequired
}

// 属性默认值
const DefaultVal = (props) => {
  return (
    <h3>
      {props.name}
    </h3>
  )
}
DefaultVal.defaultProps = {
  name: '我是默认值!'
}

// 集合
const PropTypesView = () => (
  <div>
    <Card title="类型声明">
      <PropTypesComponent 
        name="你好 这是字符串" 
        optionalEnum="News" 
        optionalUnion={123} 
        optionalObjectWithShape={{color: '#fff', fontSize: 18}} 
        requiredAny="any..." />
    </Card>
    <Card title="限制单个子代">
      <OnlyOneChild>
        <h3>第一个子节点</h3>
      </OnlyOneChild>
    </Card>
    <Card title="属性默认值">
      <DefaultVal />
    </Card>
  </div>
)

export default PropTypesView
