import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCouter } from '../../hooks/useCounter'
import { useFatch } from '../../hooks/useFatch'

const UseRef = (props) => {

    const [count, inc, dec] = useCouter()
    

    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    useFatch(url)
    const response = useFatch(url)

    function showStates(states){
        return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn"
                        onClick={() => inc()}>INC</button>
                    <button className="btn"
                        onClick={() => dec()}>DEC</button>
                </div>
            </div>

            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                <ul>
                    {!response.loading ? showStates(response.data) : false}
                </ul>
            </div>
        </div>
    )
}

export default UseRef
