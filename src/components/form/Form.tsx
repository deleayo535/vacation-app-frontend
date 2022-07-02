import "antd/dist/antd.css";
import { Button, Form, Input, Select, TimePicker } from "antd";
import React, { Fragment, useState } from "react";
import "./Form.css";

type LayoutType = Parameters<typeof Form>[0]["layout"];

const Forms: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (fieldsValue: any) => {
    const values = {
      ...fieldsValue,
      "time-picker": fieldsValue["time-picker"].format("HH:mm"),
    };
  };

  return (
    <Form>
      <div className="form">
        <div>
          <h1>Book your Apartment</h1>
        </div>

        <Form.Item name="Full name">
          <Input placeholder="Full Name" />
        </Form.Item>
        <Form.Item name="Check-in">
          <Input placeholder="Check-in" />
        </Form.Item>
        <Form.Item name="Check-out">
          <Input placeholder="Check-out" />
        </Form.Item>
        <Form.Item name="Adult">
          <Select placeholder="Adults">
            <Select.Option value="demo">Adults</Select.Option>
            <Select.Option value="demo">1</Select.Option>
            <Select.Option value="demo">2</Select.Option>
            <Select.Option value="demo">3</Select.Option>
            <Select.Option value="demo">4</Select.Option>
            <Select.Option value="demo">5</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="Children">
          <Select placeholder="Children">
            <Select.Option value="demo">Children</Select.Option>
            <Select.Option value="demo">1</Select.Option>
            <Select.Option value="demo">2</Select.Option>
            <Select.Option value="demo">3</Select.Option>
            <Select.Option value="demo">4</Select.Option>
            <Select.Option value="demo">5</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item name="phone number">
          <Input placeholder="Phone Number" />
        </Form.Item>
        <Form.Item>
          <TimePicker placeholder="Time" />
        </Form.Item>
        <Button block>Book apartment now</Button>
      </div>
    </Form>
  );
};

export default Forms;
