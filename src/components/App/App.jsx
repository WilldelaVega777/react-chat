//------------------------------------------------------------------
// Imports Section
//------------------------------------------------------------------
import React            from 'react';
import { Fragment }     from 'react';
import { useSelector }  from 'react-redux';
import { useDispatch }  from 'react-redux';
import { useEffect }    from 'react';
import { selectUser }   from '../../redux/slices/userSlice';

import Sidebar          from '../Sidebar/Sidebar.jsx';
import Chat             from '../Chat/Chat.jsx';
import Login            from '../Login/Login.jsx';

import { auth }         from '../../config/firebase.config';
import { login }        from '../../redux/slices/userSlice';
import { logout }       from '../../redux/slices/userSlice';

import './App.css';

//------------------------------------------------------------------
// Functional Component
//------------------------------------------------------------------
function App()
{
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser)
            {
                dispatch(login({
                    uid: authUser.uid,
                    photo: authUser.photo,
                    email: authUser.email,
                    displayName: authUser.displayName
                }));
            }
            else
            {
                dispatch(logout());
            }
        });
    }, [dispatch])

    return (
        <div className="app">
            {
                user ? (
                    <Fragment>
                        <Sidebar/>
                        <Chat/>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Login/>
                    </Fragment>
                )
            }
        </div>
    );
}


//------------------------------------------------------------------
// Exports Section
//------------------------------------------------------------------
export default App;

