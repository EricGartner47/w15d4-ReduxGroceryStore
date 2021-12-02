import { addProduce, likeProduce } from "../../store/cart";
import { useDispatch } from "react-redux"
import { useState } from "react"

function ProduceDetails({ produce }) {
  const [liked, setLiked] = useState(produce.liked)
  const cartItem = {}
  const dispatch = useDispatch()

  // console.log(produce)
  const likedItem = () => {
    dispatch(likeProduce(produce.id))
    setLiked(!liked)
  }
  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (liked ? " selected" : "")}
          onClick={()=> likedItem()}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={()=> dispatch(addProduce(produce.id))}
          // value={produce}

        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
