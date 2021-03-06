import Link from 'next/link';

import './styles/category_card.scss';

const CategoryCard = (props)=> {
  const {category} = props;
  const {slug, id, image, name, count} = category;

  return (<div className="category-card">
    <Link href="/categories/[slug_id]" as={`/categories/${slug}_${id}`}>
      <a className="category-card__thumbnail">
        <img src={image ? image.src : ''}
          alt={image && image.alt ? image.alt : `Image showing ${name}`}
        />
      </a>
    </Link>

    <div className="category-card__bezel">
      <Link href="/categories/[slug_id]" as={`/categories/${slug}_${id}`}>
        <a className="category-card__name">
          {name}
        </a>
      </Link>

      <span className="category-card__count">
        {count} products listed
      </span>

      <Link href="/categories/[slug_id]" as={`/categories/${slug}_${id}`}>
        <a className="category-card__action">
          Browse &#10132;
        </a>
      </Link>
    </div>
  </div>);
};

export default CategoryCard;
