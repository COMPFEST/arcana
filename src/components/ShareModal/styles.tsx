import tw, { css } from 'twin.macro';

export const ShareModalSizeMap = {
    md: {
        width: css`
            @media (min-width: 768px) {
                width: 512px;
            }
        `,
        header: tw`md:(text-3xl pb-5)`,
        text: tw`md:text-base`,
        description: tw`md:(px-16 py-10)`,
        urlPadding: tw`md:(px-5 py-4 mb-3)`,
        iconSize: css`
            @media (min-width: 768px) {
                margin-bottom: 2rem;
                & > a {
                    width: 76px;
                    height: 76px;
                }
            }
        `,
    },
    lg: {
        width: css`
            @media (min-width: 768px) {
                width: 936px;
            }
        `,
        header: tw`md:(text-5xl pb-10)`,
        text: tw`md:text-2xl`,
        description: tw`md:(px-40 py-28)`,
        urlPadding: tw`md:(px-6 py-5 mb-5)`,
        iconSize: css`
            @media (min-width: 768px) {
                margin-bottom: 3.75rem;
                & > a {
                    width: 100px;
                    height: 100px;
                }
            }
        `,
    },
};
