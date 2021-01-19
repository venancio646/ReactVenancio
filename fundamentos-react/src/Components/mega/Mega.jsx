import React from 'react'

export default props => {

    const qtde = props.qtde || 6
    const num = []

    for (let i = 0; i < qtde; i = i + 1) {
        num[i] = parseInt(Math.random() * 99);
    }

    return (
        <div>
            <h2>Numeros da mega</h2>
            <p>
                <strong>Quantidade de numeros </strong> {qtde}
            </p>
            <p>
                <strong>Numeros da mega: </strong> {num.join(' ')}
            </p>
        </div>
    )

}