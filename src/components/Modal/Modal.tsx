import React, { useState, useRef } from 'react';
import { Dialog } from '@headlessui/react';
import tw from 'twin.macro';
import { CFCloseButton } from './CloseButton';

export interface ModalProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  isOpen: boolean;
  setIsOpen: (a: boolean) => void;
  hideCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  size,
  children,
  isOpen,
  setIsOpen,
  hideCloseButton = false,
}) => {
  const focusRef = useRef(null);

  const sizeStyle = () => {
    switch (size?.toLowerCase()) {
      case 'xs':
        return tw`max-w-xs`;
      case 'sm':
        return tw`max-w-sm`;
      case 'md':
        return tw`max-w-md`;
      case 'lg':
        return tw`max-w-lg`;
      case 'xl':
        return tw`max-w-xl`;
      case '2xl':
        return tw`max-w-2xl`;
      case '3xl':
        return tw`max-w-3xl`;
      case '4xl':
        return tw`max-w-4xl`;
      default:
        return tw`max-w-xl`;
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      tw="fixed z-10 inset-0 overflow-y-auto"
      initialFocus={focusRef}
    >
      <div tw="flex items-center justify-center min-h-screen px-4">
        <Dialog.Overlay tw="fixed inset-0 bg-black-40 opacity-80" />
        <div
          ref={focusRef}
          tw="relative rounded-lg w-full mx-auto z-10 bg-white"
          css={sizeStyle()}
        >
          {!hideCloseButton && (
            <div tw="absolute right-8 -top-10">
              <CFCloseButton onClose={() => setIsOpen(false)} />
            </div>
          )}

          {children}
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
