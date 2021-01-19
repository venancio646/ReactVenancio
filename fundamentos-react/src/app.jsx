import React from 'react'
import "./app.css"

import Primeiro from './Components/basicos/Primeiro'
import ComParametro from './Components/basicos/ComParametro'
import Fragmento from './Components/basicos/Fragmento'
import Alearotio from './Components/basicos/Aleatorio'
import Card from './Components/layout/card'
import Familia from './Components/basicos/Familia'
import MembroFamilia from './Components/basicos/MembroFamilia'
import ListaAlunos from './Components/repeticao/ListaAlunos'
import TabelaProduto from './Components/repeticao/TabelaProduto'
import ParOuImpar from './Components/condicional/ParouImpar'
import DiretaPai from "./Components/comunicacao/DiretaPai"
import IndiretaPai from "./Components/comunicacao/IndiretaPai"
import Input from "./Components/formulario/Input"
import Contador from "./Components/contador/Contador"
import Mega from './Components/mega/Mega'

export default _ =>
    <div className="app">
        <h1>Fundamentos React</h1>

        <div className="cards">

            <Card titulo="#13 - Numeros da Mega" color="#424242">
                <Mega qtde={7}></Mega>
            </Card>

            <Card titulo="#12 - Contador (class)" color="#424242">
                <Contador numeroInicial={1}></Contador>
            </Card>

            <Card titulo="#11 - Componente controlado (Input)" color="#8BAD39">
                <Input></Input>
            </Card>

            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>

            <Card titulo="#09 - Comunicação Direta" color="#982395">
                <DiretaPai></DiretaPai>
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#982395">
                <ParOuImpar numero={13}></ParOuImpar>
            </Card>

            <Card titulo="#07 - Tabela produtos" color="#FF4C65">
                <TabelaProduto></TabelaProduto>
            </Card>

            <Card titulo="#06 - Lista de alunos" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            {/* <Card titulo="#05 - Componente com Filhos">
                <Familia sobrenome="Ferreira">
                    <MembroFamilia nome="Pedro" />
                    <MenbroFamilia nome="Lucas" />
                    <MenbroFamilia nome="Maria" />
                </Familia>
            </Card> */}

            <Card titulo="#04 - Desafio aleatorio" color="#080">
                <Alearotio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#090">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parametro">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#01 - Primeiro">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>