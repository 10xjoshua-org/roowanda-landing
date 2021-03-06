import clsx from 'clsx';
import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

enum ButtonVariant {
  'dark',
  'light',
  'primary',
  'secondary',
}

type ButtonProps = {
  isLoading?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  children,
  className,
  disabled: buttonDisabled,
  isLoading,
  variant = 'dark',
  ...rest
}: ButtonProps) {
  const disabled = isLoading || buttonDisabled;

  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx(
        'py-2 px-4 font-bold',
        // 'border border-gray-600 shadow-sm',
        {
          'bg-dark disabled:bg-gray-700 text-white disabled:hover:text-white':
            variant === 'dark',
          'bg-white disabled:bg-gray-200 text-dark hover:text-dark focus-visible:text-dark border-gray-400 disabled:hover:text-dark':
            variant === 'light',
          'bg-yellow-400 text-black hover:text-black  disabled:hover:bg-primary-400 disabled:brightness-75  focus-visible:text-dark':
            variant === 'primary',
          'bg-green-700 text-white disabled:hover:bg-primary-400 disabled:brightness-75  focus-visible:text-dark':
            variant === 'secondary',
        },
        'disabled:cursor-not-allowed',
        !disabled && 'animated-underline',
        isLoading &&
          'relative text-transparent hover:!text-transparent !cursor-wait transition-none',
        className
      )}
      style={
        variant === 'primary'
          ? ({
              '--clr-primary-400': 'white',
              '--clr-primary-500': 'white',
            } as React.CSSProperties)
          : undefined
      }
    >
      {isLoading && (
        <div
          className={clsx(
            'absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2',
            variant !== 'dark' ? 'text-black' : 'text-white'
          )}
        >
          <ImSpinner2 className='animate-spin' />
        </div>
      )}
      {children}
    </button>
  );
}

export const OutlineBtn: React.FC<{ onClick?: () => void; classA?: string }> =
  ({ children, onClick, classA }) => {
    return (
      <button
        className={
          'py-2 px-4 border border-green-500 w-full hover:bg-green-900 hover:text-white ' +
          classA
        }
        onClick={onClick}
      >
        {children}
      </button>
    );
  };

export const AppButton = Button;
