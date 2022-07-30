# AL-Product-card

Este es un paquete de ejemplo de despliegues en npm 

### Alexis Francisco Piña Flores

## ejemplo
```
import {ProductCard,ProductImage,ProductTitle,ProductButtons} from 'af-product-card;
```

```
<ProductCard 
    product={product}
    initialValues={{count:4}}
>
    {
        ({reset,count,isMaxCountReached,maxCount,increaseBy}) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```