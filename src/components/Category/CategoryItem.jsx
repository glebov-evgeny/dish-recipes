import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { 
    // idCategory, 
    strCategory, 
    strCategoryDescription, 
    strCategoryThumb } = props;

  return (
    <Link to={`/category/${strCategory}`} className="category__item">
      <div className="category__item-img">
        <img src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="category__item-content">
        <p className="category__item-title">{strCategory}</p>
        <p className="category__item-description">{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="category__item-action">
        <div className="category__item-btn">
          Watch category
        </div>
      </div>
    </Link>
  );
}

export { CategoryItem };
