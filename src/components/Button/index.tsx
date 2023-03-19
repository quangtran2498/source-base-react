import React from 'react';
// import loadingIcon from 'src/assets/loading.gif';
// import throttle from 'lodash/throttle';
// import './style.scoped.css';

export enum ButtonTypes {
  PrimaryFilled = 'primaryFilled',
  PrimaryOutlined = 'primaryOutlined',
  PrimaryBorderless = 'primaryBorderless',
  PrimaryBorderless2 = 'primaryBorderless2',
  PrimaryBorderless3 = 'primaryBorderless3',
  SecondaryFilled = 'secondaryFilled',
  SecondaryOutlined = 'secondaryOutlined',
  SecondaryBorderless = 'secondaryBorderless',
  ErrorBorderless = 'errorBorderless',
  OutlinedNeutral = 'outlinedNeutral',
}

export enum ButtonSizes {
  Small = 'small',
  Normal = 'normal',
}

type ButtonProps = {
  text: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (data?: any) => void;
  buttonType?: ButtonTypes;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  size?: string;
  extraClassName?: string;
  [propertyName: string]: any;
};

const Button = (props: ButtonProps) => {
  const {
    text,
    loading = false,
    onClick,
    leftIcon,
    rightIcon,
    extraClassName,
    ...passProps
  } = props;
  console.log(onClick,"onClick");
  
  const handleClick = (event: React.MouseEvent) => {
    // if (loading || disabled) return;
    !!onClick && onClick(event);
  };

  return (
    <button
      {...passProps}
      onClick={handleClick}
    >
      {!!leftIcon && leftIcon}
      {loading ? (
        <div>img</div>
      ) : (
        text
      )}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export default Button;
