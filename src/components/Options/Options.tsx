import { useState, useEffect } from "react";

interface FeedbackState {
    good: number;
    neutral: number;
    bad: number;
}

const Options = () => {

        const [state, setState] = useState<FeedbackState>(() => {
                const saveState = window.localStorage.getItem('saved-state');
                
                return saveState ? JSON.parse(saveState) : { good: 0, neutral: 0, bad: 0 }
        }
                
        )

        useEffect(() => {
                window.localStorage.setItem('saved-state', JSON.stringify(state))
        }, [state])

        const totalStat = state.good + state.neutral + state.bad;
        const totalStatePers = Math.round((state.good / totalStat) * 100)

        const reset = () => {
                return setState({
                        good: 0,
                        neutral: 0,
                        bad: 0
                })
        }
        
        return (
                <>
                        <div>
                                <button onClick={() => setState(prevState => ({ ...prevState, good: prevState.good + 1 }))}>Good</button>
                                <button onClick={() => setState(prevState => ({ ...prevState, neutral: prevState.neutral + 1 }))}>Neutral</button>
                                <button onClick={() => setState(prevState => ({ ...prevState, bad: prevState.bad + 1 }))}>Bad</button>
                                {totalStat > 0 && <button onClick={reset}>Reset</button>}
                        </div>
                        {totalStat === 0 ? (
                                <p>Not feedback yet</p>
                        ) : (
                                 <ul>
                                <li>Good: {state.good}</li>
                                <li>Neutral: {state.neutral}</li>
                                <li>Bad: {state.bad}</li>
                                <li>Total: {totalStat}</li>
                                                <li>Positive: {totalStatePers}</li>
                        </ul>       
                        )}
                        
                </>
        );
}

export default Options;
