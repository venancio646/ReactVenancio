import React from 'react'

export default props => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Numeros aleatios</h2>
            <p>
                <strong>Valor mínimo: </strong> {min}
            </p>

            <p>
                <strong>Valor maximo: </strong> {max}
            </p>

            <p>
                <strong>Valor escolhido: </strong> {aleatorio}
            </p>
        </div>
    )
}