import React,{useEffect,useState} from 'react'
import CardItems from './CardItems';
import ItemCard from './ItemCard';
import SideBarcomp from './SideBarcomp';
const axios = require('axios')

function AllItemsInStore() {
    const [listOfItem, setlistOfItem] = useState([]);
    useEffect(() => {
        axios.post("http://localhost/__payalComputersBackend/_getAllItems.php").then((response) => {
            // console.log(response)
            setlistOfItem(response.data);
    }).catch(err=>console.log(err));
    }, []);

  return (
      <div className='flex md:flex-row '>
          <SideBarcomp/>
          <div className='flex flex-row gap-3 flex-wrap justify-center my-2 w-[80%]'>
          {listOfItem.map((item, key) => {
            //  return <ItemCard image={item.image} price={ item.price} title={item.title} description={item.description} key={key}  />
              return <CardItems image={item.image} price={item.price} title={item.title} description={item.description} key={key} category={ 'category'} />

          })}
    </div>
      </div>
  )
}

export default AllItemsInStore
