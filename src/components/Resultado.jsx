import '../css/global.css'
import '../css/resultado.css'
import TabelaImc from '.TabelaImc'

//destruct - desestruturação = acessa propriedades de outros componentes
function Resultado({resultado}){
    return(
        <div>
            <div className="resultado">
                <h2>
                    Seu IMC é de:<span className='imcSpan'>{resultado}</span>
                </h2>
            </div>
            <table>
                <thead className='TabelaHeader'>
                    <tr>
                        <th>Classificação</th>
                        <td>IMC</td>
                    </tr>
                </thead>
                <tbody className='tabelaBody'>
                    <tr>{TabelaImc(resultado)}</tr>
                </tbody>
            </table>
        </div>
    )
}
export default Resultado