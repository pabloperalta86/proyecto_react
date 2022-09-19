const ItemListContainer = ({greeting}) => {

    const styles = { border: 'green 2px solid', padding: '20px', margin: '20px' }

    return(
        <div style={styles}>
            <h2>{greeting}</h2>
        </div>
    );
}

export default ItemListContainer;