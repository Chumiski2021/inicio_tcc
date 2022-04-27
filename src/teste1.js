import React, {useEffect, useState} from 'react'

const teste1 = () => {
 
  
    return (
    <div>teste1</div>
  )
}

import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Revisoes = () => {
    const [revisoes, setrevisoes] = useState(null) // lista de revisoes para 
    const baixaRevisoes = () => {
    fetch("http://localhost:8080/revisao") // url do servidor 
    .then(r => r.json()) // obtenho os dados da resposta 
    .then(data => setrevisoes(data)) // com os dados, atualizo o estado das revisoes 
    }

    useEffect(() => {
        baixaRevisoes();
    }, [])

    const apagaRevisao = (id) => {
        fetch("http://localhost:8080/revisao/" + id, {method: "DELETE"})
        .then(response => baixaRevisoes())
    }
    


    return (
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Descricao</th>
                    <th>Editar</th>
                    <th>Deletar</th>
                </tr>
            </thead>
            <tbody>
                {revisoes != null ?
                revisoes.map (revisao =>  <tr key = {revisao.rm}>
                    <td>{revisao.id}</td>
                    <td>{revisao.nome}</td>
                    <td>{revisao.descricao}</td>
                    <td><Link to={"/form/" + revisao.id}><i class="fa fa-pencil" aria-hidden="true"></i></Link></td>
                    <td style={{cursor: "pointer"}} onClick={() => apagaRevisao(revisao.id)}><i class="fa fa-eraser" aria-hidden="true"></i></td>
                </tr>)

                : null }
            </tbody>
        </table>
    </div>
  )
}

export default teste1