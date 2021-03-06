import React, { FunctionComponent, useState } from 'react';
import {
  Form,
  Upload,
  Typography,
  message,
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

interface IImageFieldProps {
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

const ImageField: FunctionComponent<IImageFieldProps> = ({
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
  const [imageLoading, setImageLoading] = useState<Boolean>(false);
  const [imageUrl, setImageUrl] = useState<any>(false);

  const showError = !!errors[field.name] && submitCount !== 0;
  const validateStatus = showError ? 'error' : 'validating';

  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  function handleChange(info) {
    if (info.file.status === 'uploading') {
      setImageLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => {
        setImageUrl(imageUrl);
        setImageLoading(false);
        setFieldValue(field.name, imageUrl);
      });
    }
  };

  const uploadButton = (
    <div>
      {imageLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );

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
      className="m-2"
      label={isRequire && label ? renderRequireLabel() : label}
      name={field.name}
      hasFeedback={showError}
      validateStatus={validateStatus}
      help={showError && errors[field.name]}
      style={style}
    >
      <Upload
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    </Form.Item>
  );
};

export { ImageField };
