
 export function createSets(value:number) {
    if(value <= 0) {
        return {ok: false, error: "you need 1 or more sets"}
    } else {
        return {ok: true, value: value};
    }

}