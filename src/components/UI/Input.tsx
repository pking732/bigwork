import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';
import './Input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  isTextarea?: false;
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  isTextarea: true;
}

type InputComponentProps = InputProps | TextareaProps;

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputComponentProps>(
  ({ label, error, isTextarea = false, className = '', ...props }, ref) => {
    const inputClasses = [
      'input',
      error && 'input--error',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const inputId = props.id || props.name || `input-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="input-wrapper">
        {label && (
          <label htmlFor={inputId} className="input__label">
            {label}
            {props.required && <span className="input__required">*</span>}
          </label>
        )}
        {isTextarea ? (
          <textarea
            id={inputId}
            className={inputClasses}
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            id={inputId}
            className={inputClasses}
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
        {error && <span className="input__error">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
