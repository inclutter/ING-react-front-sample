import { Col, Row, Typography } from 'antd'
import React from 'react'
import Settings from '../component/Settings'

export default function ZabbixMain() {
  return (
    <>
      <Row justify="end" style={{padding: 30}}>
        <Settings/>
      </Row>
      <Row justify="center" style={{margin: 100}}>
        <Col>
          <Typography.Title>
            ZABBIX 통합 조회 화면
          </Typography.Title>
        </Col>
      </Row>
      <Row justify="center" style={{marginTop: 50}}>
        <Col span={12}>검색</Col>
      </Row>
    </>
  )
}
