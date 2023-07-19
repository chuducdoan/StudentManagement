/* eslint-disable react-hooks/exhaustive-deps */
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload, UploadFile, UploadProps } from "antd";
import { RcFile } from "antd/es/upload";
import { useState } from "react";
import * as S from "./styles";

interface Props {
  getFile?: any;
}

const UploadComponent = ({ getFile }: Props) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [isShow, setIsShow] = useState(true);

  const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    if (newFileList.length === 0) setIsShow(true);
    else setIsShow(false);
    getFile?.(newFileList);
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as RcFile);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1)
    );
  };

  const handleCancel = () => setPreviewOpen(false);

  return (
    <S.Container>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {isShow && (
          <S.Inner>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </S.Inner>
        )}
      </Upload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </S.Container>
  );
};

export default UploadComponent;
