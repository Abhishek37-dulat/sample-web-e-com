import React, {  useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../reducer/actions/cartAction';

const CartData = ({id, image, name, price, weight, quant}) => {
    const dispatch = useDispatch();
    const [qnt, setQnt] = useState(1);
    console.log(quant)
   
    const handleAdd = () => {
        if(qnt > 0){
            setQnt(qnt+1);
            quant=quant+1;
        }
    }
    const handleSub = () => {
        if(qnt > 1){
            setQnt(qnt-1);
            quant--
        }
        else{
            dispatch(removeFromCart(id));
            quant=0
        }
    }
    const handleRemove = () => {
        dispatch(removeFromCart(id));
        quant=0
    }

  return (
    <tr>
                <td><img style={{width: '50px'}} src={image} alt='product'/></td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{weight}</td>
                <td>
                    <div>
                        <div>{qnt}</div>
                        <div>
                            <button style={{borderRadius: '3px 0px 0px 3px'}} onClick={()=>handleSub()}><RemoveIcon/></button>
                            <button style={{backgroundColor: '#C9302C'}} onClick={()=>handleRemove()}><HighlightOffIcon/></button>
                            <button style={{borderRadius: '0px 3px 3px 0px'}} onClick={()=>handleAdd()}><AddIcon/></button>
                        </div>
                    </div>
                </td>
                <td>₹ {price*qnt}</td>
                <td>{weight*qnt} ml</td>
            </tr>
  )
}

export default CartData
