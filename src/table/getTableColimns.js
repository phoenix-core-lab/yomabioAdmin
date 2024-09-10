import { Space, Tag } from "antd";

export const getTableColumns = [
    {
      title: "Контактное лицо",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Почта",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Письмо",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Компания",
      key: "company",
      dataIndex: "company",
      render: (text) => <Tag color="#11c417"> {text}</Tag>,
    },
    {
      title: "Наименование товара",
      key: "product",
      dataIndex: "product",
      render: (text) => (
        <Space size='middle'>
          <p>{text}</p>
        </Space>
      ),
    },
    {
      title: "Номер телефона",
      dataIndex: "phone",
      key: "phone",
      render: (text) => <p>{text}</p>,
    },
  ];