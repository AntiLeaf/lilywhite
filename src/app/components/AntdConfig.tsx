import React from 'react'

import { ConfigProvider, theme } from 'antd'

const AntdConfig : React.FC = () => {
	return (
    <ConfigProvider
      theme={{
        // algorithm: theme.defaultAlgorithm,

        token: {
          colorPrimary : '#ffc0cb',
          borderRadius : 4,

          // colorBgContainer : '#fff5f6',
        }
      }}
    />
  )
}

export default AntdConfig
