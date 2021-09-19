/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useRef } from 'react';
import SvgSuccesscheckmarkcircle from '../icons/SuccessCheckmarkCircle';
import SvgErrorcheckmarkcircle from '../icons/ErrorcheCkemarkCircle';
import SvgWarning from '../icons/Warning';

interface IProps {
    show?: boolean
    type: 'success' | 'error' | 'warning' | 'dark'
    message?: string
    onHide?: () => void
}

const iconStyle: React.CSSProperties = {
    height: 28,
    width: 28,
    fill: '#fff',
};


const Types: Object = {
    success: {
        color: '#fff',
        Icon: () => (
            <SvgSuccesscheckmarkcircle {...iconStyle as any} />
        ),
        background: '#63c327'
    },
    error: {
        color: '#fff',
        Icon: () => (
            <SvgErrorcheckmarkcircle {...iconStyle as any} />
        ),
        background: '#ff3d00'
    },
    warning: {
        color: 'fff',
        Icon: () => <SvgWarning fill={iconStyle.fill} height={25} width={25} />,
        background: '#FFAB00'
    },
    dark: {
        color: '#fff',
        Icon: () => null,
        background: '#2c2c2c'
    }
}

const Alert: React.FC<IProps> = (props: IProps): JSX.Element | null => {
    const { show, type, message, onHide } = props

    const [_show, setShow] = useState<Boolean>(show || false)
    const [opacity, setOpacity] = useState<number>(0.6);
    const alertRef = useRef<HTMLDivElement>(null);

    const flexStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
    };

    const alertStyle: React.CSSProperties = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Types[type].background,
        position: "relative",
        padding: "0.4rem 0.6rem",
        marginBottom: "0.5rem",
        border: "1px solid transparent",
        borderRadius: ".25rem",
        transition: "0.2s all",
        opacity: 0,
    };

    const textStyle: React.CSSProperties = {
        margin: 0,
        fontSize: "14px",
        color: Types[type].color,
    };

    const btnStyle: React.CSSProperties = {
        display: "inline-block",
        fontWeight: 400,
        lineHeight: 1,
        textAlign: "center",
        textDecoration: "none",
        verticalAlign: "middle",
        cursor: "pointer",
        userSelect: "none",
        backgroundColor: "transparent",
        border: "1px solid transparent",
        padding: ".375rem",
        fontSize: "2em",
        opacity: opacity,
        textShadow: "none",
        color: Types[type].color,
    };


    useEffect(() => {
        if (show) {
            setShow(true);
            setTimeout(() => {
                if (alertRef.current) {
                    alertRef.current.style.opacity = "1";
                }
            }, 250);
        }
    }, [show]);

    useEffect(() => {
        if (!_show && onHide) {
            if (alertRef.current) {
                alertRef.current.style.opacity = "0";
            }
            setTimeout(() => onHide(), 250);
        }
    }, [_show])

    const hide = () => {
        if (alertRef.current) {
            alertRef.current.style.opacity = "0";
        }
        setTimeout(() => setShow(false), 250);
    }

    if (_show) {
        return (<div ref={alertRef} style={alertStyle} className="alert-reactjs">
            <div style={flexStyle}>
                <button onMouseOver={() => setOpacity(1)} onMouseOut={() => setOpacity(0.6)} style={btnStyle} onClick={hide}>×</button>
                <p style={textStyle}>{message}</p>
            </div>
            {Types[type].Icon()}
        </div>)
    }
    return null
}


Alert.defaultProps = {
    show: false,
    message: "There is a problem! The email has not been sent",
    type: "error",
}

export default Alert
