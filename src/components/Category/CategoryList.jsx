import {CategoryItem} from '../Category/CategoryItem'


function CategoryList({catalog = []}){
    return (
        
        <div className="category">
            {catalog.map(el => (
                <CategoryItem key={el.idCategory} {...el} />
            ))}
        </div>
        
    )
}

export {CategoryList}