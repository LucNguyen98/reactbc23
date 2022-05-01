import { useState } from 'react'

export default function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        setCount(count - 1)
    }

    return {
        count,
        increase,
        decrease
    }

}
