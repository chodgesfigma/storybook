import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  style?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  showBeforeIcon?: boolean;
  showAfterIcon?: boolean;
  showLabel?: boolean;
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  style = 'primary',
  showBeforeIcon = true,
  showAfterIcon = true,
  showLabel = true,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={['button', `button--${style}`].join(' ')}
      style={{  }}
      {...props}
    >
      <i></i>
      {label}
      <i></i>
    </button>
  );
};
