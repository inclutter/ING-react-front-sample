/* eslint-disable jsx-a11y/anchor-is-valid */
import { Table, Tag, Space } from 'antd';
import React from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Hosts',
    dataIndex: 'hosts',
    key: 'hosts',
  },
  {
    title: 'Items',
    dataIndex: 'items',
    key: 'items',
  },
  {
    title: 'Triggers',
    dataIndex: 'triggers',
    key: 'triggers',
  },
  {
    title: 'Functions',
    dataIndex: 'functions',
    key: 'functions',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = 'green'
          if (tag === 'WARNING') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Zabbx Server1',
    hposts: 10,
    items: 32,
    triggers: 40,
    functions: 20,
    status: ['RUNNING'],
  },
  {
    key: '2',
    name: 'Zabbx Server2',
    hosts: 30,
    items: 10,
    triggers: 15,
    functions: 30,
    status: ['WARNING'],
  },
  {
    key: '3',
    name: 'Zabbx Server3',
    hosts: 20,
    items: 32,
    triggers: 40,
    functions: 20,
    status: ['RUNNING'],
  }
];

export default function MainList() {
    return (<Table columns={columns} dataSource={data} />);
}