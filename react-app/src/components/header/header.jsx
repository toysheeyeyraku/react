
import { useState } from 'react';
import HeaderAdmin from './header-admin/header-admin';
import HeaderAnonim from './header-anonim/header-anonim';
import HeaderStudent from './header-student/header-student';
import { Link } from 'react-router-dom'
import Logo from './uchihaLogo.png'
import './header.css'
import '../../common/commonStyle.css'
import identityService from '../../services/identityService'

function Header() {
    // Anonim, Student, Admin
    const [logginState, setLoginState] = useState('Anonim');

    let renderControlls = () => {
        if (logginState === 'Anonim'){
            return (
                <div>
                    <button onClick={() => console.log(identityService.user)}>Реєстрація</button>
                    <Link to='/login'>
                        <button>Вхід</button>
                    </Link>
                </div>
            );
        }

        if (logginState === 'Student' || logginState === 'Admin'){
            return (
                <div>
                    <button>Вихід</button>
                </div>
            );
        }
    }

    let renderBody = () => {
        if (logginState === 'Student'){
            return (
                <HeaderStudent />
            );
        }

        if (logginState === 'Admin'){
            return (
                <HeaderAdmin />
            );
        }
        return (
            <HeaderAnonim />
        );
    }

    return (
        <div className='header'>
            <div className='headerUp'>
                <div className='headerLogo'>
                    <img src={Logo} ></img>
                </div>
                <div className='headerControll'>
                    {renderControlls()}
                </div>
            </div>
            <div className='headerBody'>
                {renderBody()}
            </div>
        </div>
    );
  }
  
  export default Header;
  