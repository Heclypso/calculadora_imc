import styles from './ImcBody.module.css'

const ImcBody = ({}) => {
    return (
        <main>
            <div className="container">
            <table id='table'>
                <thead>
                    <tr>
                    <th>IMC</th>
                    <th>Classificação</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>

                        <td>Abaixo de 18,5</td>
                        <td>Baixo peso</td>

                    </tr>

                    <tr>

                        <td>Entre 18,6 e 24,9</td>
                        <td >Peso normal</td>

                    </tr>

                    <tr>

                        <td>Entre 25 e 29,9</td>
                        <td >Sobrepeso</td>

                    </tr>
                    
                    <tr>

                        <td>Entre 30 e 34,9</td>
                        <td >Obesidade grau I</td>

                    </tr>
                    
                    <tr>

                        <td>Entre 35 e 39</td>
                        <td >Obesidade grau II</td>

                    </tr>
                                        
                    <tr>

                        <td>Acima de 40</td>
                        <td >Obesidade grau III</td>

                    </tr>
                    
                </tbody>
                </table>
            </div>
        </main>
    )
}

export default ImcBody;