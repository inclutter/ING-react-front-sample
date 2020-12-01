import { AutoComplete, Input } from 'antd'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons';

export default function ZabbixMain() {
  function setKeyword(value) {}
  function gotoUser(value) {}

  return (
    <AutoComplete
      value={keyword}
      onChange={setKeyword}
      onSelect={gotoUser}
      style={{ width: '100%' }}
      options={[]}
      autoFocus
    >
    <Input size="large" placeholder="input here" prefix={<SearchOutlined />}/>
  </AutoComplete>
  )
}
