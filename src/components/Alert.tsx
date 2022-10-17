import React, { useState, useEffect, useRef, isValidElement } from 'react';
import SvgSuccesscheckmarkcircle from '../icons/SuccessCheckmarkCircle';
import SvgErrorcheckmarkcircle from '../icons/ErrorcheCkemarkCircle';
import SvgWarning from '../icons/Warning';
import { AlertProps, AlertStyle, AlertStyleItem } from '../types';

const defaultIconStyle: React.CSSProperties = {
  height: 26,
  width: 26,
};

const flexStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
};

const textStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '14px',
};

const defaultStyle: AlertStyle = {
  success: {
    icon: {
      fill: 'rgb(4 108 78)',
    },
    closeIcon: {
      color: 'rgb(4 108 78)',
    },
    text: {
      color: 'rgb(4 108 78)',
    },
    alert: {
      backgroundColor: 'rgb(222 247 236)',
    },
  },
  info: {
    icon: {
      fill: 'rgb(26 86 219)',
    },
    closeIcon: {
      color: 'rgb(26 86 219)',
    },
    text: {
      color: 'rgb(26 86 219)',
    },
    alert: {
      backgroundColor: 'rgb(225 239 254)',
    },
  },
  error: {
    icon: {
      fill: 'rgb(200 30 30)',
    },
    closeIcon: {
      color: 'rgb(200 30 30)',
    },
    text: {
      color: 'rgb(200 30 30)',
    },
    alert: {
      backgroundColor: 'rgb(253 232 232)',
    },
  },
  warning: {
    icon: {
      fill: 'rgb(142 75 16)',
    },
    closeIcon: {
      color: 'rgb(142 75 16)',
    },
    text: {
      color: 'rgb(142 75 16)',
    },
    alert: {
      backgroundColor: 'rgb(253 246 178)',
    },
  },
  dark: {
    icon: {
      fill: '#fff',
    },
    closeIcon: {
      color: '#fff',
    },
    text: {
      color: '#fff',
    },
    alert: {
      backgroundColor: '#2c2c2c',
    },
  },
};

const icons: any = {
  success: {
    render: (iconStyle: React.CSSProperties) => (
      <SvgSuccesscheckmarkcircle
        //fill={iconStyle.fill}
        //{...(defaultIconStyle as any)}
        style={iconStyle}
      />
    ),
  },
  error: {
    render: (iconStyle: React.CSSProperties) => (
      <SvgErrorcheckmarkcircle
        //fill={iconStyle.fill}
        //{...(defaultIconStyle as any)}
        style={iconStyle}
      />
    ),
  },
  warning: {
    render: (iconStyle: React.CSSProperties) => (
      <SvgWarning
        //fill={iconStyle.fill}
        //{...(defaultIconStyle as any)}
        style={iconStyle}
      />
    ),
  },
  info: {
    render: (iconStyle: React.CSSProperties) => (
      <SvgWarning
        //fill={iconStyle.fill}
        //{...(defaultIconStyle as any)}
        style={iconStyle}
      />
    ),
  },
  dark: {
    render: () => null,
  },
};

const isValidType = (
  type: 'success' | 'error' | 'warning' | 'info' | 'dark' | undefined,
  data: any
) => {
  if (type && data?.[type]) {
    return data[type];
  } else if (!type && data?.['success']) {
    return data['success'];
  }
  return {};
};

const Alert: React.FC<AlertProps> = (props: AlertProps): JSX.Element | null => {
  const {
    className,
    alertStyle: customAlertStyle,
    show,
    message,
    onHide,
    type,
    transitionTime: defaultTransitionTime,
    customIcon,
  } = props;

  const [alertShow, setAlertShow] = useState<Boolean>(false);
  const [opacity, setOpacity] = useState<number>(0.6);
  const alertRef = useRef<HTMLDivElement>(null);
  const alertStyleDefault = isValidType(type, defaultStyle);
  const [style, setStyle] = useState<AlertStyleItem>(alertStyleDefault);
  const [icon, setIcon] = useState(isValidType(type, icons));

  const transitionTime =
    typeof defaultTransitionTime === 'number' ? defaultTransitionTime : 250;

  const alertStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0.4rem 0.6rem',
    marginBottom: '0.5rem',
    border: '1px solid transparent',
    borderRadius: '.25rem',
    transition: `${transitionTime}ms all`,
    opacity: 0,
  };

  const btnStyle: React.CSSProperties = {
    display: 'inline-block',
    fontWeight: 700,
    lineHeight: 1,
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none',
    backgroundColor: 'transparent',
    border: '1px solid transparent',
    padding: '.375rem',
    fontSize: '1.5em',
    opacity: opacity,
    textShadow: 'none',
    fontFamily: 'initial',
  };

  useEffect(() => {
    setStyle(isValidType(type, defaultStyle));
    setIcon(isValidType(type, icons));
  }, [type]);

  useEffect(() => {
    if (customAlertStyle && type && customAlertStyle[type]) {
      setStyle(customAlertStyle[type] as AlertStyleItem);
    }
  }, [customAlertStyle]);

  useEffect((): ReturnType<any> => {
    let id: any = null;
    if (alertShow) {
      id = setTimeout(() => {
        if (alertRef.current) {
          alertRef.current.style.opacity = '1';
        }
      }, transitionTime);
    }
    return () => clearTimeout(id);
  }, [alertShow]);

  useEffect(() => {
    if (show) {
      setAlertShow(true);
    }
  }, [show]);

  useEffect((): ReturnType<any> => {
    let id: any = null;
    if (!show) {
      id = hide();
    }
    return () => clearTimeout(id);
  }, [show]);

  const hide = () => {
    if (alertRef.current) {
      alertRef.current.style.opacity = '0';
    }
    return setTimeout(() => {
      setAlertShow(false);
      if (onHide) {
        onHide();
      }
    }, transitionTime);
  };

  if (alertShow) {
    return (
      <div
        ref={alertRef}
        style={{ ...alertStyle, ...alertStyleDefault.alert, ...style?.alert }}
        className={`alert-reactjs ${className || ''}`.trim()}
      >
        <div style={flexStyle} className="alert-reactjs-body">
          <button
            onMouseOver={() => setOpacity(1)}
            onMouseOut={() => setOpacity(0.6)}
            style={{
              ...btnStyle,
              ...alertStyleDefault.closeIcon,
              ...style.closeIcon,
            }}
            onClick={hide}
            type="button"
          >
            ×
          </button>
          <p
            style={{
              ...textStyle,
              ...alertStyleDefault.text,
              ...style?.text,
            }}
          >
            {isValidElement(message) ? message : message}
          </p>
        </div>
        <div className="alert-reactjs-icon">
          {isValidElement(customIcon)
            ? customIcon
            : icon?.render?.({
                ...defaultIconStyle,
                ...alertStyleDefault.icon,
                ...style?.icon,
              })}
        </div>
      </div>
    );
  }
  return null;
};

Alert.defaultProps = {
  className: undefined,
  show: false,
  message: undefined,
  type: 'success',
  customIcon: undefined,
  alertStyle: undefined,
  transitionTime: 250,
};

export default Alert;
