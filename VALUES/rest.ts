

export function createRest(value:string) {
    //check if string contains 0-9; if not, advise user to enter number for rest or proper time format
    if(!/\d/.test(value)) {
        return {ok: false, error: "you need to enter a number for rest or a proper time format"};
    }

    //if value has an 's' on the end and is not in M:SS format, trim the 's', convert to number, store as time, and send to timer
    if(value.endsWith('s') && !/^\d+:\d{2}$/.test(value)) {
        const trimmedValue = value.slice(0, -1);
        const numericValue = parseInt(trimmedValue);
        return {ok: true, value: numericValue, type: "time"};
    }

    //if value does not have an 's' and is not in M:SS format, convert to number and store as time
    if(!value.endsWith('s') && !/^\d+:\d{2}$/.test(value)) {
        const numericValue = parseInt(value);
        return {ok: true, value: numericValue, type: "time"};
    }

    //if value is in M:SS format, check for value over 59s after colon. If value over 59, tell user to enter a correct time value. If time values are correct and there is an 's', trim it, then convert to total seconds and set field to time, send to timer; if no 's', convert to total seconds and set field to time, send to timer
    if(/^\d+:\d{2}$/.test(value)) {
        const [minutes, seconds] = value.split(':').map(Number);
        if(seconds > 59) {
            return {ok: false, error: "seconds value cannot be greater than 59"};
        }
        const totalSeconds = minutes * 60 + seconds;
        return {ok: true, value: totalSeconds, type: "time"};
    }

    return {ok: false, error: "invalid format for rest"};
    
}