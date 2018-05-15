import React from 'react'
import RequestFetch from './7-1-requestFetch'
import RequestFetchConfig from './7-2-requestFetchConfig'
import Card from '../common/card'

const RequestView = () => (
  <div>
    <Card title="fetch 基础">
      <RequestFetch />
    </Card>
    <Card title="fetch Form、JSON POST提交">
      <RequestFetchConfig />
    </Card>
  </div>
)

export default RequestView
