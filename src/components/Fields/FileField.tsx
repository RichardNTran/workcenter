import React, { FunctionComponent, useState } from 'react';
import {
  Form,
  Button,
  Upload,
  Typography,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface IFileFieldProps {
  field: any,
  form: {
    setFieldValue: Function,
    submitCount: Number,
    errors: String,
  },
  type: String,
  label: String,
  isRequire: Boolean,
  width: String,
  style: Object,
}

const FileField: FunctionComponent<IFileFieldProps> = ({
  field,
  form: {
    setFieldValue,
    submitCount,
    errors,
  },
  label,
  isRequire,
  children,
  style,
  ...props
}) => {
  const [fileList, setFileList] = useState<any>(false);

  const showError = !!errors[field.name] && submitCount !== 0;
  const validateStatus = showError ? 'error' : 'validating';

  function handleChange(info) {
    let fileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    setFileList(fileList);
    setFieldValue(field.name, fileList);
  };

  function renderRequireLabel() {
    return (
      <>
        <Typography.Text type="danger">*</Typography.Text>&nbsp;
        {label}
      </>
    )
  }

  return (
    <Form.Item
      label={isRequire && label ? renderRequireLabel() : label}
      name={field.name}
      hasFeedback={showError}
      validateStatus={validateStatus}
      help={showError && errors[field.name]}
      style={style}
    >
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={handleChange}
        multiple
        fileList={fileList}
      >
        <Button>
          <UploadOutlined /> Upload
        </Button>
      </Upload>
    </Form.Item>
  );
};

export { FileField };
