import TableRow from './TableRow';

const Table = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Drag Area</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map(item => <TableRow data={item} key={item.id} />)}
            </tbody>
        </table>
    );
};

export default Table;