import './TabelaProduto.css'
import React from 'react';
import produtos from '../../data/produtos';

export default props => {
    const produtoJSX = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>

        );
    });

    return (
        <div className="TabelaProduto">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtoJSX}
                </tbody>
            </table>
        </div>
    )
}