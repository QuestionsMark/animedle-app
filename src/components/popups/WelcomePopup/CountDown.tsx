import { View } from "react-native";
import { useUserInfo } from "../../../contexts/user.context";
import { useEffect, useMemo, useRef, useState } from "react";
import { componentsStyles } from "../../../styles";
import { Digit } from "./Digit";

interface Props {
    date: Date;
    onFinish?(): void;
}

export const CountDown = ({ date, onFinish }: Props) => {
    const { username } = useUserInfo();

    const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

    const setState = (timeType: 'D' | 'H' | 'M' | 'S') => {
        const now = new Date();
        const time = Math.floor(+date / 1000) - Math.floor(+now / 1000);
        if (time <= 0) return 0;

        switch (timeType) {
            case 'D': {
                const days = Math.floor(time / (60 * 60 * 24));
                return days;
            }
            case 'H': {
                const days = Math.floor(time / (60 * 60 * 24));
                const restTime = time - days * (60 * 60 * 24);
                const hours = Math.floor(restTime / (60 * 60));
                return hours;
            }
            case 'M': {
                const days = Math.floor(time / (60 * 60 * 24));
                const restTime = time - days * (60 * 60 * 24);
                const hours = Math.floor(restTime / (60 * 60));
                const restTime2 = restTime - hours * (60 * 60);
                const minutes = Math.floor(restTime2 / 60);
                return minutes;
            }
            case 'S': {
                const days = Math.floor(time / (60 * 60 * 24));
                const restTime = time - days * (60 * 60 * 24);
                const hours = Math.floor(restTime / (60 * 60));
                const restTime2 = restTime - hours * (60 * 60);
                const minutes = Math.floor(restTime2 / 60);
                const seconds = restTime2 - minutes * 60;
                return seconds;
            }
        }
    };

    const [days, setDays] = useState(setState('D'));
    const [hours, setHours] = useState(setState('H'));
    const [minutes, setMinutes] = useState(setState('M'));
    const [seconds, setSeconds] = useState(setState('S'));

    useEffect(() => {
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) return;
        intervalIdRef.current = setInterval(() => {
            setSeconds(ss => {
                if (ss === 0) {
                    setMinutes(ms => {
                        if (ms === 0) {
                            setHours(hs => {
                                if (hs === 0) {
                                    setDays(ds => {
                                        return ds - 1;
                                    });
                                }
                                return hs === 0 ? 59 : hs - 1;
                            });
                        }
                        return ms === 0 ? 59 : ms - 1;
                    });
                }
                return ss === 0 ? 59 : ss - 1;
            });
        }, 1000);

        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
        }
    }, []);

    useEffect(() => {
        if (days === 0 && hours === 0 && minutes === 0 && seconds <= 1) {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
            }
            setTimeout(() => {
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
                if (typeof onFinish === 'function') {
                    onFinish();
                }
            }, 1);
        }
    }, [days, hours, minutes, seconds]);

    const daysDigit = useMemo(() => <Digit value={days} />, [days]);
    const hoursDigit = useMemo(() => <Digit value={hours} />, [hours]);
    const minutesDigit = useMemo(() => <Digit value={minutes} />, [minutes]);
    const secondsDigit = useMemo(() => <Digit value={seconds} />, [seconds]);

    return (
        <View style={componentsStyles.countdown}>
            {daysDigit}
            {hoursDigit}
            {minutesDigit}
            {secondsDigit}
        </View>
    );
};