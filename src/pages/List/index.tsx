// src/App.tsx
import React, { useState } from 'react'
import 'antd/dist/reset.css'
import ItemList from './ItemList'
import ItemForm from './ItemForm'
import { Item, initialData } from './data'
import { Button } from 'antd'

const App: React.FC = () => {
  const [data, setData] = useState<Item[]>(initialData)
  const [editingItem, setEditingItem] = useState<Item | null>(null)
  const [isFormVisible, setIsFormVisible] = useState(false)

  const handleEdit = (item: Item) => {
    setEditingItem(item)
    setIsFormVisible(true)
  }

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id))
  }

  const handleSubmit = (values: Item) => {
    if (editingItem) {
      setData(data.map((item) => (item.id === values.id ? values : item)))
    } else {
      const newItem = { ...values, id: Date.now() }
      setData([...data, newItem])
    }
    setIsFormVisible(false)
    setEditingItem(null)
  }

  const handleCancel = () => {
    setIsFormVisible(false)
    setEditingItem(null)
  }

  const handleAdd = () => {
    setEditingItem(null)
    setIsFormVisible(true)
  }

  return (
    <div className="App">
      <h1>用户列表</h1>
      <Button onClick={handleAdd} type="primary" style={{ marginBottom: 16 }}>
        新增
      </Button>
      {isFormVisible && (
        <ItemForm initialValues={editingItem || undefined} onSubmit={handleSubmit} onCancel={handleCancel} />
      )}
      <ItemList data={data} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  )
}

export default App
