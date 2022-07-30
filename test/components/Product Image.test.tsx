import React from 'react';
import renderer  from 'react-test-renderer';
import {ProductImage,ProductCard} from '../../src/components';
import { product2 } from '../data/product';

describe('ProductImage',()=>{
    test('debe de mostrar el componente correctamente con el titulo personalizado',()=>{
        
        const wrapper = renderer.create(
            <ProductImage img="https://hola.jpg" />
        )

        expect( wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe de mostrar el componente con el nombre de producto', () => { 
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    ()=>(
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect( wrapper.toJSON()).toMatchSnapshot();

     })
})