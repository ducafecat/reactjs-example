import React from 'react'
import Card from '../common/card'
import RequestFetch from './7-1-requestFetch'
import RequestFetchConfig from './7-2-requestFetchConfig'
import RequestFetchAwait from './7-3-requestFetchAwait'
import RequestCrossFetch from './7-4-requestCrossFetch'

const RequestView = () => (
  <div>
    <Card title="fetch 基础">
      <RequestFetch />
    </Card>
    <Card title="fetch Form、JSON RAW POST提交">
      <RequestFetchConfig />
    </Card>
    <Card title="fetch async / await">
      <RequestFetchAwait />
    </Card>
    <Card title="fetch Cross-Fetch 组件">
      <RequestCrossFetch />
    </Card>
  </div>
)

export default RequestView
