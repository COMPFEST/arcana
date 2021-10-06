import React, { ReactNode, useRef } from 'react';
import tw, { css } from 'twin.macro';
import { Dialog } from '@headlessui/react';

export interface ShareModalSkeletonProps {
    isOpen: boolean;
    setIsOpen: (arg0: boolean) => void;
    children?: ReactNode;
}

const ShareModalSkeleton: React.FC<ShareModalSkeletonProps> = (props) => {
    const { isOpen, setIsOpen, children } = props;
    const closeRef = useRef(null);
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            initialFocus={closeRef}
            tw="fixed z-50 inset-0 overflow-y-auto"
        >
            <Dialog.Overlay tw="fixed inset-0 bg-black-100 opacity-30" />
            <div tw="flex flex-col items-center justify-center min-h-screen ">
                <div tw="z-40 bg-white rounded-2xl overflow-hidden mt-3 mx-6">
                    <div tw="flex justify-end w-full background[#FFF] px-4 pt-4 pb-0 md:(background[#f6f6f6] px-8 pt-7 pb-0)">
                        <div
                            tw="background[#dedede] p-3 cursor-pointer rounded-full flex justify-center items-center"
                            onClick={() => setIsOpen(false)}
                            ref={closeRef}
                        >
                            <img src="/close.svg" alt="close" />
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </Dialog>
    );
};

export default ShareModalSkeleton;
