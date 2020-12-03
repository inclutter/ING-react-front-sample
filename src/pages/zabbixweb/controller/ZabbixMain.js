import { Col, Row, Typography } from 'antd'
import React from 'react'
import MainList from '../component/MainList'
// import MainButton from '../component/SearchInput'
import Settings from '../component/Settings'

export default function ZabbixMain() {
  return (
    <>
      <Row justify="end" style={{padding: 30}}>
        <Settings/>
      </Row>
      <Row justify="center" style={{margin: 10}}>
        <Col>
          <Typography.Title style={{fontFamily:''}}>
            ZABBIX 통합 조회 화면
          </Typography.Title>
        </Col>
      </Row>
      {/* <Row justify="center" style={{marginTop: 50}}>
        <MainButton/>
      </Row> */}
      <Row justify="center" style={{marginTop: 10}}>
        <MainList/>
      </Row>
    </>
  )
}
