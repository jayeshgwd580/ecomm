import './navbar.css'

export const Navbar = () => {
  return (
    <div className="header">
        <div className='container'>
            <div className='row'>
                <div className='header-wrapper'>
                    <div className='logo'>
                        <a href='/'>Shopeefy</a>
                    </div>
                    <div className='user-action'>
                        <a href='/cart'>cart</a>
                    </div>
                    <div className='user-intro'>
                        Guest
                    </div>
                    <div className='login-btn'>
                        <a href='/login'>Login</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
