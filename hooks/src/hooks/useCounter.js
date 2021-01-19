import React, { useState } from 'react'

export const useCouter = (initialValue = 100) => {
    const [count, setCount] =  useState(initialValue)
    
    function inc(){
        setCount(count + 1)
    }

    function dec(){
        setCount(count - 1)
    }

    return [count, inc, dec]
}