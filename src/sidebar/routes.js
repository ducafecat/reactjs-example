import BaseIntroducing from './../base/1-introducing'
import BaseFeature from './../base/2-feature'
import BaseRender from './../base/3-render'
import BaseComponent from './../base/4-component'
import BaseRouter from './../base/5-router'
import BaseRedux from './../base/6-redux'
import BaseRequest from './../base/7-request'
import BasePropTypes from './../base/8-propTypes'

let BaseNull

const navBase = {
  path: '',
  title: '快速上手',
  childs: [
    {
      path: '/basic/introducing',
      title: '一切都是组件',
      main: BaseIntroducing
    },
    {
      path: '/basic/feature',
      title: '基础特性 JSX、Props、State、Lifecycle、Event',
      main: BaseFeature
    },
    {
      path: '/basic/render',
      title: '组件渲染控制',
      main: BaseRender
    },
    {
      path: '/basic/component',
      title: '容器组件、展示组件',
      main: BaseComponent
    },
    {
      path: '/basic/router',
      title: '前端路由 react-router',
      main: BaseRouter
    },
    {
      path: '/basic/redux',
      title: '状态管理 react-redux',
      main: BaseRedux
    },
    {
      path: '/basic/fetch',
      title: '数据请求 fetch',
      main: BaseRequest
    },
    {
      path: '/basic/prop-types',
      title: '属性类型检查 prop-types',
      main: BasePropTypes
    },
    {
      path: '/basic/flow',
      title: '静态类型检查 Flow',
      main: BaseNull
    },
  ]
}
const routes = [navBase]

export default routes
