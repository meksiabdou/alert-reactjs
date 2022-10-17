import { CSSProperties, ReactNode } from 'react';

export interface AlertStyleItem {
  icon?: CSSProperties;
  closeIcon?: CSSProperties;
  text?: CSSProperties;
  alert?: CSSProperties;
}

export interface AlertStyle {
  success?: AlertStyleItem;
  info?: AlertStyleItem;
  error?: AlertStyleItem;
  warning?: AlertStyleItem;
  dark?: AlertStyleItem;
}

export interface AlertProps {
  className?: string;
  //style?: CSSProperties;
  alertStyle?: AlertStyle;
  show?: boolean;
  type?: 'success' | 'error' | 'warning' | 'info' | 'dark';
  message?: ReactNode | string;
  transitionTime?: number;
  customIcon?: ReactNode;
  onHide?: () => void;
}
