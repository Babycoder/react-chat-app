import React from 'react'
import {auth} from '../firebase'

const LogOut = () => {



    return (
        <button onClick={() => auth.signOut()} className='bg-gray-200 px-4 py-2 rounded hover:bg-gray-100'>
            LogOut
        </button>
    )
}

export default LogOut
