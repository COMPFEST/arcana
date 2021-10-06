import React from 'react';
import tw, { styled } from 'twin.macro';

interface StyledDivProps {
    size: string;
}

type SizeDictType = {
    [key: string]: string;
};

const sizeDict: SizeDictType = {
    small: '16px',
    medium: '20px',
    default: '24px',
    large: '36px',
};

const StyledDivCSS = styled.div<StyledDivProps>`
    width: ${(props) => sizeDict[props.size]};
    height: ${(props) => sizeDict[props.size]};

    svg {
        width: 100%;
        height: 100%;
    }
`;

export const StyledDiv: React.FC<StyledDivProps> = (props) => {
    const { size, children } = props;
    return <StyledDivCSS size={size}>{children}</StyledDivCSS>;
};
