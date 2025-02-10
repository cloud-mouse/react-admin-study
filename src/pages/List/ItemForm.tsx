// src/components/ItemForm.tsx
import React from 'react'
import { Form, Input, Button } from 'antd'
import { useForm } from 'react-hook-form'
import { Item } from './data'

interface ItemFormProps {
  initialValues?: Item
  onSubmit: (values: Item) => void
  onCancel: () => void
}

const ItemForm: React.FC<ItemFormProps> = ({ initialValues, onSubmit, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Item>({
    defaultValues: initialValues,
  })

  React.useEffect(() => {
    if (initialValues) {
      setValue('id', initialValues.id)
      setValue('name', initialValues.name)
      setValue('description', initialValues.description)
    }
  }, [initialValues, setValue])

  const onFormSubmit = (values: Item) => {
    console.log(values)

    onSubmit(values)
  }

  return (
    <Form onFinish={handleSubmit(onFormSubmit)}>
      <Form.Item label="名称" {...register('name', { required: '名称为必填项' })}>
        <Input />
        {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
      </Form.Item>
      <Form.Item label="描述" {...register('description')}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
        <Button onClick={onCancel} style={{ marginLeft: 8 }}>
          取消
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ItemForm
