

export function createWeight(value:number) {
    if(value < 0) {
        return {ok: false, error: 'you cannot lift negative weight'};
    } else {
        return {ok: true, value: value};
    }
}