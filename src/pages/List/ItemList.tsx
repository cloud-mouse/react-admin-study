import React from 'react'
import { Table, Button } from 'antd'
import { Item } from './data'

interface ItemListProps {
  data: Item[]
  onEdit: (item: Item) => void
  onDelete: (id: number) => void
}

const ItemList: React.FC<ItemListProps> = ({ data, onEdit, onDelete }) => {
  const columns = [
    { title: '编号', dataIndex: 'id', key: 'id' },
    { title: '名称', dataIndex: 'name', key: 'name' },
    { title: '描述', dataIndex: 'description', key: 'description' },
    {
      title: '操作',
      key: 'action',
      render: (_: unknown, record: Item) => (
        <>
          <Button onClick={() => onEdit(record)}>编辑</Button>
          <Button onClick={() => onDelete(record.id)} danger>
            删除
          </Button>
        </>
      ),
    },
  ]

  return <Table dataSource={data} columns={columns} rowKey="id" />
}

export default ItemList
