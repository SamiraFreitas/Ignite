import { Container } from "./styles";

export function TransactionsTable() {
    return (
    <Container>
        <table>
        <thead>
            <tr>
                <th>Título</th>
                <th>Valor</th>
                <th>Categoria</th>
                <th>Data</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>Desenvolvimento de websites</td>
                <td className='deposit'>12.000</td>
                <td>Desenvolvimento</td>
                <td>05/11/2021</td>
                
            </tr>
            <tr>
                <td>Aluguel</td>
                <td className='withdraw'> - 1.100</td>
                <td>Casa</td>
                <td>03/11/2021</td>
                
            </tr>
           
                
        </tbody>
        </table>
    </Container>
    );

}