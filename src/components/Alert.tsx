/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import SvgSuccesscheckmarkcircle from '../icons/SuccessCheckmarkCircle';
import SvgErrorcheckmarkcircle from '../icons/ErrorcheCkemarkCircle';
import SvgWarning from '../icons/Warning';

interface IProps {
  show?: boolean;
  type?: 'success' | 'error' | 'warning' | 'dark';
  message?: string;
  transitionTime?: number;
  customIcon?: () => any;
  onHide?: () => void;
}

const iconStyle: React.CSSProperties = {
  height: 28,
  width: 28,
  fill: '#fff',
};

const Types: any = {
  success: {
    color: '#fff',
    Icon: () => <SvgSuccesscheckmarkcircle {...(iconStyle as any)} />,
    background: '#63c327',
  },
  error: {
    color: '#fff',
    Icon: () => <SvgErrorcheckmarkcircle {...(iconStyle as any)} />,
    background: '#ff3d00',
  },
  warning: {
    color: 'fff',
    Icon: () => <SvgWarning fill={iconStyle.fill} height={25} width={25} />,
    background: '#FFAB00',
  },
  dark: {
    color: '#fff',
    Icon: () => null,
    background: '#2c2c2c',
  },
};

const Alert: React.FC<IProps> = (props: IProps): JSX.Element | null => {
  const { show, message, onHide, type, transitionTime, customIcon } = props;

  const [_show, setShow] = useState<Boolean>(show || false);
  const [opacity, setOpacity] = useState<number>(0.6);
  const alertRef = useRef<HTMLDivElement>(null);

  const flexStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  };

  const alertType = type && type in Types ? Types[type] : Types['success'];
  const _transitionTime =
    typeof transitionTime === 'number' ? transitionTime : 250;

  const alertStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: alertType.background,
    position: 'relative',
    padding: '0.4rem 0.6rem',
    marginBottom: '0.5rem',
    border: '1px solid transparent',
    borderRadius: '.25rem',
    transition: `${_transitionTime}ms all`,
    opacity: 0,
  };

  const textStyle: React.CSSProperties = {
    margin: 0,
    fontSize: '14px',
    color: alertType.color,
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
    color: alertType.color,
    fontFamily: 'initial',
  };

  useEffect((): ReturnType<any> => {
    let id: any = null;
    if (_show) {
      id = setTimeout(() => {
        if (alertRef.current) {
          alertRef.current.style.opacity = '1';
        }
      }, _transitionTime);
    }
    return () => clearTimeout(id);
  }, [_show]);

  useEffect(() => {
    if (show) {
      setShow(true);
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
      setShow(false);
      if (onHide) {
        onHide();
      }
    }, _transitionTime);
  };

  if (_show) {
    return (
      <div ref={alertRef} style={alertStyle} className="alert-reactjs">
        <div style={flexStyle} className="alert-reactjs-body">
          <button
            onMouseOver={() => setOpacity(1)}
            onMouseOut={() => setOpacity(0.6)}
            style={btnStyle}
            onClick={hide}
            type="button"
          >
            ×
          </button>
          <p style={textStyle}>{message || ''}</p>
        </div>
        <div className="alert-reactjs-icon">
          {customIcon && typeof customIcon === 'function'
            ? customIcon()
            : alertType.Icon()}
        </div>
      </div>
    );
  }
  return null;
};

Alert.defaultProps = {
  show: false,
  message: '',
  type: 'success',
  customIcon: undefined,
  transitionTime: 250,
};

export default Alert;
