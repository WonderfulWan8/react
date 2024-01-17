import { useState } from "react"
function ItemList(){
  const [list,useList] = useState([1,2,3])
  return(
    <>
      <ul>
        {
          list.map((item)=>{
            return (
              <li key={item}>{item}</li>
            )
          })
        }
      </ul>
    </>
  )
}
export default ItemList