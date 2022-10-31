import Link from 'next/link';
import React, { useState } from 'react'

import { useStateContext } from '../../context/StateContext';
import { useRouter } from 'next/router'


const details = () => {
    const router = useRouter()
    const { totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuanitity, onRemove } = useStateContext();
    const [state, setState] = useState({
        email: "",
        address: "",
        phone: "",
        error: false,
        success: false,
        // clientToken: null,
        instance: {},
    });

    const sendOrder = () => {
        if(state.email.length === 0 || state.address.length === 0 ||  state.phone.length ===0 ){
            alert("All fields are required")
        }else{
            const data = cartItems.map((item, index) => {
                return (
                    {name:item.name, price: item.price, quantity: item.quantity, slug: item.slug.current, description: item.description, totalItemPrice: item.price * item.quantity}
                )
            })
            console.log(data.flat(1))

            const orderData = {
                allProduct: data.flat(1),
                email: state.email,
                address: state.address,
                phone: state.phone
            }

            fetch('https://dzirash-order.herokuapp.com/addorder', {
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                router.push("/success")
            })
            .catch((error) => {
                console.error('Error:', error);
            });

        }
    }

  return (
    <div>
        <div style={{ flexDirection: 'column' }}>
            <p htmlFor="address">
                Email
            </p>
            <input
                style={{ width: '80%', height: 40, borderRadius: 8, margin: 20, marginBottom: 40, borderWidth: 1, fontSize: 20, borderColor: 'black' }}
                value={state.email}
                onChange={(e) =>
                setState({
                    ...state,
                    email: e.target.value,
                    error: false,
                })
                }
                type="text"
                id="address"
                placeholder="Email"
            />
        </div>

        <div style={{ flexDirection: 'column' }}>
            <p htmlFor="address">
                Dalivery Address
            </p>
            <input
                style={{ width: '80%', height: 40, borderRadius: 8, margin: 20, marginBottom: 40, borderWidth: 1, fontSize: 20, borderColor: 'black' }}
                value={state.address}
                onChange={(e) =>
                setState({
                    ...state,
                    address: e.target.value,
                    error: false,
                })
                }
                type="text"
                id="address"
                placeholder="Address..."
            />
        </div>

        <div  style={{ flexDirection: 'column' }}>
        <p htmlFor="phone" className="pb-2">
            Phone
        </p>
        <input
            style={{ width: '80%', height: 40, borderRadius: 8, margin: 20, marginBottom: 40, borderWidth: 1, fontSize: 20, borderColor: 'black'  }}
            value={state.phone}
            onChange={(e) =>
            setState({
                ...state,
                phone: e.target.value,
                error: false,
            })
            }
            type='number'
            id="phone"
            placeholder="+233"
        />
        </div>

        <div className="btn-container" onClick={sendOrder}>
            {/* <Link href="/success"> */}
                <button type="button" className="btn">
                    DONE
                </button>
            {/* </Link> */}
        </div>

        {/* <div
            onClick=''
            style={{ background: "#303031" }}
        >
        Pay now
        </div> */}

    </div>
  )
}

export default details