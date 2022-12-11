import "./Header.scss"
import { Link, useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { resetStore } from "../../redux/userRedux";


export default function Header(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLogged,isAdmin, currentUser } = useSelector((state) => state.user);
    

    function handleClick(){
        navigate('/home/signIn')
    }
    function handleLogout(){
        dispatch(resetStore())
        navigate('/home')
    }

    return(
        <header className="header">
            <nav className="wrapper">
                <div className="left">
                    <Link to='/home' className="logo">Shokutsu</Link>
                </div>
                    <Link to='/menu' className="menu">Menu</Link>
                <div className="right">
                    <div className="left">
                        <span>Register as :</span>
                        <Link to={ isLogged && isAdmin?'/restaurant/dashboard':"/restaurant/signIn"}>Restaurant</Link>
                    </div>
                    <div className="right">
                        {isLogged && !isAdmin
                        ?(<div>
                            <strong>{currentUser?.user?.name}</strong>&nbsp;&nbsp;
                            <button onClick={handleLogout}>Logout</button>
                            </div>)
                        :<button onClick={handleClick}>Login</button>}
                    </div>
                </div>
            </nav>
        </header>
    )
}