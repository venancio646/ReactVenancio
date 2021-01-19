import React from 'react'
import "./Contador.css"
import Display from "./Display"
import Botoes from "./Botoes"
import Passoform from "./PassoForm"

export default class Contador extends React.Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (novoPasspo) => {
        this.setState({
            passo: novoPasspo,
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero} />
                <Passoform passo={this.state.passpo} setPasso={this.setPasso}/>
                <Botoes setInc={this.inc} setDec={this.dec} />
            </div>
        )
    }
}