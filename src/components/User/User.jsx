//-------------------------------------------------------------------------------
// Imports Section
//-------------------------------------------------------------------------------
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/slices/userSlice';
import './User.css';

//-------------------------------------------------------------------------------
// Component Section
//-------------------------------------------------------------------------------
export function User()
{
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <div>

        </div>
    );
}
