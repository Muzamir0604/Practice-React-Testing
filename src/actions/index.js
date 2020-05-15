export const actionTypes ={
    CORRECT_GUESS: 'CORRECT_GUESS',
}

/**
 * @function correctGuess
 * @return {type} - Action object with type `CORRECT_GUESS`
 */
export function correctGuess(){
    return { type: actionTypes.CORRECT_GUESS};
}