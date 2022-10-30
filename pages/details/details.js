import Link from 'next/link';
import React, { useState } from 'react'

import { useStateContext } from '../../context/StateContext';


const details = () => {
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
  return (
    <div>

        <div style={{ flexDirection: 'column' }}>
            <p htmlFor="address">
                Email
            </p>
            <input
                style={{ width: '80%', height: 40, borderRadius: 8, margin: 20, marginBottom: 40, borderWidth: 1, fontSize: 20, borderColor: 'black' }}
                value={state.address}
                onChange={(e) =>
                setState({
                    ...state,
                    email: e.target.value,
                    error: false,
                })
                }
                type="email"
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
            type="number"
            id="phone"
            placeholder="+233"
        />
        </div>

        <div className="btn-container" onClick={() => console.log(cartItems)}>
            <Link href="/success">
                <button type="button" className="btn">
                    DONE
                </button>
            </Link>
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