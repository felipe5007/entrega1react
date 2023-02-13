import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../list/gfetch';



const ItemDetailContainer = () => {
  const [ productos, setProductos ] = useState({});

  const { idProducto } = useParams()

  useEffect (() => {
    if (idProducto) {
      gFetch()
        .then(res => {
          setProductos(res.find(producto => producto.id === idProducto));
      })
        .catch(error => console.log(error));
      
    } else {

      gFetch()
        .then(res => {
          setProductos(res);
          setLoading(false);
      })
        .catch(error => console.log(error));
    }
  }, [idProducto]);


  return (
    <div className='flex justify-center align-middle'>
      <ProductoDetail productos={productos} />
    </div>
  );
}

export default ItemDetailContainer;
