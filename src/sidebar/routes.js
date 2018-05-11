import BaseIntroducing from './../base/1-introducing'
import BaseFeature from './../base/2-feature'

let BaseRender, BaseComponent, BaseRouter, BaseRedux, BaseFetch

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
      title: '基础特性 JSX、Props、State、Event、Lifecycle',
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
      path: '/basic/redux',
      title: '数据请求 fetch',
      main: BaseFetch
    }
  ]
}
const routes = [navBase]

export default routes
