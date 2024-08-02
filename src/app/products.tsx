import { ProductItemType } from './products-item-type';

export default function Product({ id, price, name, category }: ProductItemType) {
    return (
        <tr >
            <td style={{ border: '2px solid black', padding: '10px' }}>
                {id}
            </td>
            <td style={{ border: '2px solid black', padding: '10px' }}>
                {name}
            </td>
            <td style={{ border: '2px solid black', padding: '10px' }}>
                {price}
            </td>
            <td style={{ border: '2px solid black', padding: '10px' }}>
                {category}
            </td>
        </tr>


    )
}