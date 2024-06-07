import product from '../product'
function Image({imageUrl, name}){
    return(
        <img src={product.imageUrl} alt={product.name}></img>
    )
}
export default Image;