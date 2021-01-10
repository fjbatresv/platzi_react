import React from 'react';
import { Link } from 'react-router-dom';
import RcIf, { RcElse } from 'rc-if';
import { connect } from 'react-redux';
import { logoutRequest, isLogin, isRegister } from '../actions';
import classNames from 'classnames';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import '../assets/styles/components/Header.scss';


const Header = props => {

    const { user, isRegister, isLogin } = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutRequest({});
    };

    const headerClass = classNames('header', {
        isLogin,
        isRegister
    });

    return (
        <header className={headerClass}>
            <Link to="/">
                <img className='header__img' src={logo} alt='Platzi Video' />
            </Link>
            <div className='header__menu'>
                <div className='header__menu--profile'>
                    <img src={userIcon} alt='' />
                    <p>{hasUser ? user.email : 'Perfil'}</p>
                </div>
                <ul>
                    <RcIf if={hasUser} >
                        <li><a onClick={handleLogout}>Cerrar sesión</a></li>
                        <RcElse>
                            <li>
                                <Link to="/login">
                                    Iniciar Sesión
                                </Link>
                            </li>
                        </RcElse>
                    </RcIf>
                </ul>
            </div>
        </header>
    );
};

const mapStateProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    logoutRequest
};

export default connect(mapStateProps, mapDispatchToProps)(Header);
