import React, { ReactNode } from 'react';

export interface ShareIconProps {
    svg: ReactNode;
    url: string;
    target: Location | string;
}

const ShareIcon: React.FC<ShareIconProps> = (props) => {
    const { svg, url, target } = props;
    return (
        <a href={`${url}${target}`} target="_blank" rel="noreferrer">
            {svg}
        </a>
    );
};

export default ShareIcon;
