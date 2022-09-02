import React, { useEffect } from 'react'

const Button = ({children}) => {

    const handleClick = () => {

        console.log('Se hizo click')

    }

    useEffect(() => {

        const button = document.getElementById('button')

        button.addEventListener('click', handleClick)

        return () => {

            button.removeEventListener('click', handleClick)

        }

    }, [])

    return (

        <button>{children}</button>

    )

}

export default Button