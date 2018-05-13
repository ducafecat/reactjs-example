import React from 'react'
import Card from '../common/card'
import RouterBaseView from './5-1-routerBase'
import RouterParamsView from './5-2-routerParams'
import RouterNoMatchView from './5-3-routerNoMatch'
import RouterTransitionsView from './5-4-routerTransitions'

const View = () => (
  <div>
    <Card title="基础使用">
      <RouterBaseView />
    </Card>
    <Card title="URL参数">
      <RouterParamsView />
    </Card>
    <Card title="无法匹配">
      <RouterNoMatchView />
    </Card>
    <Card title="动画切换">
      <RouterTransitionsView />
    </Card>
  </div>
)

export default View
