import tw, { styled, css } from 'twin.macro';
import { LoaderColor, LoaderSpeed } from './loader';

interface StyledSpinnerProps {
    color: LoaderColor;
    width: string;
    height: string;
    parentBackground: string;
    speed: LoaderSpeed;
}

export const SpeedMap = {
    slow: '1.5s',
    medium: '1s',
    fast: '0.5s',
};

export const BackgroundMap = {
    blue: '#0266D3',
    'light-blue': '#DCEDFE',
    black: '#000000',
    white: '#FFFFFF',
};

export const OutlineMap = {
    blue: 'rgba(2, 102, 211, 0)',
    'light-blue': 'rgba(220, 237, 254, 0)',
    black: 'rgba(0, 0, 0, 0)',
    white: 'rgba(255, 255, 255, 0)',
};

// emotion linear background best practice
const linearGradients = (solid: string, outline: string) => css`
    background: -moz-linear-gradient(left, ${solid} 10%, ${outline} 42%);
    background: -webkit-linear-gradient(left, ${solid} 10%, ${outline} 42%);
    background: -o-linear-gradient(left, ${solid} 10%, ${outline} 42%);
    background: -ms-linear-gradient(left, ${solid} 10%, ${outline} 42%);
    background: linear-gradient(to right, ${solid} 10%, ${outline} 42%);
`;

const StyledSpinner = styled.div<StyledSpinnerProps>`
    &.inactive {
        display: none;
    }

    font-size: 10px;
    text-indent: -9999em;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 50%;
    background: ${(props) => BackgroundMap[props.color]};
    ${(props) => linearGradients(BackgroundMap[props.color], OutlineMap[props.color])}
    position: relative;
    -webkit-animation: load3 ${(props) => SpeedMap[props.speed]} infinite linear;
    animation: load3 ${(props) => SpeedMap[props.speed]} infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    &:before {
        width: 50%;
        height: 50%;
        background: ${(props) => BackgroundMap[props.color]};
        border-radius: 100% 0 0 0;
        position: absolute;
        top: 0;
        left: 0;
        content: '';
    }
    &:after {
        background: ${(props) => props.parentBackground};
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: '';
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
    @-webkit-keyframes load3 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes load3 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
`;

export default { StyledSpinner };
