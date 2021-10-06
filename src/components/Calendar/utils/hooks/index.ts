import { useEffect, useState } from 'react';

interface MousePosition {
    x: number | undefined;
    y: number | undefined;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const useMousePosition = (): MousePosition => {
    const [mousePosition, setMousePosition] = useState<MousePosition>({ x: undefined, y: undefined });

    const updateMousePosition = (e: globalThis.MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);

        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return mousePosition;
};

export const calculateTimeLeft = (endTime: Date): TimeLeft => {
    const difference = +endTime - +new Date();
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0)
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };

    return timeLeft;
};
