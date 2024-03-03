import './Item.css'

function Item(props){
    return(
        <div>
            <p className='name'>{props.name}</p>
            {props.children}
        </div>
    );
}

export default Item;