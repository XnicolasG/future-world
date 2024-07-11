import Image from "next/image";
import styles from './ProductView.module.css'
import { ProductViewItemsOrder } from "./ProductViewItems";
import { SanitizeHTML } from "app/components/Shared/SanitizeHTML";

interface ProductViewProps {
  product: ProductType
}

export const ProductView = ({ product }: ProductViewProps) => {

  return (
    <main className={styles.ProductView}>
      <section className={styles.ProductView__images}>
        <Image
          loading="eager"
          src={product.image}
          width={500}
          height={500}
          quality={80}
          alt={product.title}
        />
      </section>
      <section className={styles.ProductView__info}>
        <h1 className={styles.ProductView__info__title}>{product.title}</h1>
        <p className={styles.ProductView__info__category}>{product.tags}</p>
        <SanitizeHTML
          className={styles.ProductView__info__description}
          tag="p"
        >
          {product.description}
        </SanitizeHTML>
        
        <span className={styles.ProductView__info__price}>
          $ {product.price}
        </span>
        <ProductViewItemsOrder maxQuantity={product.quantity}  product={product}/>
      </section>
    </main>
  )
};