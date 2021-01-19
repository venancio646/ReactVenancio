import React from 'react'

export default props => {
    return (
        <div>
            <span>nome: {props.nome} </span>
            <span>Idade: <strong>{props.idade}</strong> </span>
            <span>È nerd: {props.nerd ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    )
}