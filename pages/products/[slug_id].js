//import { useRouter } from 'next/router';
// import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

import Layout from '../../components/my_layout';
import wooApi from '../../services/woo_api';
import getCategoryTree from '../../services/category_tree';
//import wpApi from '../../services/wp_api';

//import Subcategories from '../../sections/category_page/subcategories';
import ProductCard from '../../components/product_card';

import './styles/[slug_id].scss';

export default function ProductPage(props) {
  if (props.error) return JSON.stringify(props.error);

  const {product} = props;
  const {
    categories,
    images,
    short_description: shortDesc,
    average_rating: avgRating,
    rating_count: ratingCount,
  } = product;

  return (
    <Layout categories={props.categoryTree}>
      <section className="main-details">
        <div className="main-details__text-content">
          <h1>{product.name}</h1>
          
          <div dangerouslySetInnerHTML={{ __html: shortDesc }}></div>

          <div className="main-details__action">
            <label>Quantity:
              <input type="number"/>
            </label>

            <button>Buy Now</button>
          </div>
        </div>

        <div className="main-details__product-image-wrapper">
          <div className="main-details__categories">
            {categories.map((category, index)=> (
              <Link href="/categories/[id]" as={`/categories/${category.slug}_${category.id}`}
                key={category.id}
              >
                <a>
                  {`${category.name}${index + 1 < categories.length ? ', ' : ''}`}
                </a>
              </Link>
            ))}
          </div>

          <img src={images[0].src}
            className="main-details__product-image"
            alt={images[0].alt || `Image showing ${product.name}`}
          />

          <div className="main-details__secondary-actions">
            <button>
              Compare
            </button>
            <button>
              Add To Wishlist
            </button>
          </div>
          {/*<p>{avgRating} {ratingCount}</p>*/}
        </div>
      </section>

      <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
    </Layout>
  );
}

ProductPage.getInitialProps = async ({ query })=> {
  try {
    const {slug_id} = query;
    const separatorIndex = slug_id.lastIndexOf('_');
    const id = slug_id.slice(separatorIndex + 1);
    const slug = slug_id.slice(0, separatorIndex);

    let {data: product} = await wooApi.get(`products/${id}`);

    /*product = ((product)=> { // Use IIFE to isolate temporary vars in destructuring assignment.
      const {id, categories, name, permalink, price, sale_price, images} = product;

      return {id, categories, name, permalink, price, sale_price, images};
    })(product);*/

    const categoryTree = await getCategoryTree();

    return {
      slug,
      id,
      product,
      categoryTree,
    };
  }

  catch (error) {
    if (error.response) {
      // Server responded with a status code outside the 2xx range.
      console.log(error.response.status);
      //
    } else if (error.request) {
      // The request was made but no response was received
      console.log('No response recieved');
      //
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }

    console.log('Config', error.config);
    
    return {error};
  }
};
