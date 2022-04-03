import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';

export default function CategoryPage() {
    const params = useParams();

    return (
        <div>
            <ProductList />
        </div>
    );
}
