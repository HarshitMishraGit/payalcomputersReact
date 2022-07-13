import React from 'react'

function ItemBluePrint(props) {
    // const width=ratio*100;
    // const height = (1/ratio)*100;
    // M-2
    const width = 400 * (props.width) /(props.width+ props.height);
    const height = 400 * (props.height) /( props.width+ props.height);
    // M-3
    // const diagonal = Math.sqrt(((props.height) * (props.height)) + ((props.width) * (props.width)));
    // const width = props.width * 8;
    // const height = props.height * 8;


    const textSize = (width * height) / 3000;
  return (
      <div className='p-2 w-full flex flex-row justify-center h-[400px] items-center my-2'>
          <div className={`bg-blue-500 bg-opacity-25 border-2 border-blue-600 rounded-lg items-center justify-center flex flex-row`} style={{width:width+"px",height:height+"px"}} >
              {/* <p className={`text-center  font-semibold text-blue-900`} style={{fontSize:textSize+"px"}}>This is Your item ratio be look like</p> */}
             {props.width >0 && props.height >0 && <p className='text-center text-gray-200 font-serif' style={{fontSize:textSize+"px"}}>{props.itemName} Dimension : {props.width} X {props.height} { props.dimension}²</p>}
          </div>
    </div>
  )
}

export default ItemBluePrint