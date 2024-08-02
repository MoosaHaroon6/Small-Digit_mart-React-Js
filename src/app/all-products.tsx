import Product from './products';
import { ProductItemType } from "./products-item-type";


type ProductsListType = {
    productsList: ProductItemType[]
}


export default function AllProducts({ productsList }: ProductsListType) {
    return (
        <table
            style={{
                border: '1px solid black', margin: 'auto', backgroundColor: 'rgb(232 232 232)',
                width: '800px', borderRadius: '5px'
            }}>
            <thead>
                <tr>
                    <th style={{ border: '1px solid black', padding: '10px' }}>
                        Sr.
                    </th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>
                        Name
                    </th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>
                        Price
                    </th>
                    <th style={{ border: '1px solid black', padding: '10px' }}>
                        Category
                    </th>
                </tr>
            </thead>
            <tbody>

                {
                    productsList.map(({ id, name, price, category }) => (
                        <Product
                            key={name + id}
                            id={id}
                            name={name}
                            price={price}
                            category={category}
                        />
                    ))
                }
           </tbody>
        </table>
    );
}