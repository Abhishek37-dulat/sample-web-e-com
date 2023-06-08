import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const CartData = () => {
  return (
    <tr>
                <td><img style={{width: '50px'}} src="https://nanykids.com/image/product/normal/8670.jpg" alt='product'/></td>
                <td>NanyKids Virgin Coconut Oil For All Skin Types, Enriched With Coconut Oil, Aloe Vera, Vitamin A & E, Jojoba Oil, (100ml)</td>
                <td>₹ 189</td>
                <td>100 gm</td>
                <td>
                    <div>
                        <div>2</div>
                        <div>
                            <button style={{borderRadius: '3px 0px 0px 3px'}}><RemoveIcon/></button>
                            <button style={{backgroundColor: '#C9302C'}}><HighlightOffIcon/></button>
                            <button style={{borderRadius: '0px 3px 3px 0px'}}><AddIcon/></button>
                        </div>
                    </div>
                </td>
                <td>₹ 756</td>
                <td>400 gm</td>
            </tr>
  )
}

export default CartData
