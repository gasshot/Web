function MenuItem({name,price}){
    // props를 사용하여 데이터를 받아서 렌더링
    //console.log('props' ,props)
    return(
        <div style={{ border: '1px solid black' }}>
        <h1>{name}</h1>
        <p>{price}</p>
      </div>
    );
}

export default MenuItem;