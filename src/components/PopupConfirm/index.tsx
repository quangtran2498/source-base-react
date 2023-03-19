import React, { useEffect } from "react";
import Button, { ButtonTypes } from "../Button/index";

export interface PopupConfirmProps {
  visible: boolean;
  children?: React.ReactNode;
  title?: string;
  content?: string;
  onOk?: () => void;
  okTitle?: string;
  okButtonComponent?: React.ReactNode;
  onCancel?: () => void;
  cancelTitle?: string;
  redConfirm?: boolean;
  type?: "";
  showContactButton?: boolean;
  showIcon?: boolean;
  okButtonType?: ButtonTypes;
  isHtmlContent?: boolean;
  popupStyle?: React.CSSProperties;
  buttonContainerStyle?: React.CSSProperties;
  hotline?: string;
  icon?: string;
}

const PopupConfirm = (props: PopupConfirmProps) => {
  //   const { t } = useTranslation();
  const {
    visible,
    onOk,
    content,
  } = props;

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [visible]);

  if (!visible) return <div />;
  return (
    <div className="" style={container} onClick={onOk}>
      <div className="" style={styleModal}>
        <div className="">icon</div>
        <div className="">{content}</div>
        <div className="">
          <Button
            onClick={onOk}
            text={"ok"}
            extraClassName={"w-full"}
          />
        </div>
      </div>
    </div>
  );
};
export default PopupConfirm;
const container:React.CSSProperties = {
  position:"fixed",
  width:"100vw",
  height:"100vh",
  top:0,
  right:0,
  left:0,
  background:"rgba(0,0,0,0.1)",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
}
const styleModal = {
  width:"500px",
  height:"500px",
  background:"#fff",
}