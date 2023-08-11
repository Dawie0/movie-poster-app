import logo from '../assets/icon.png'

const NavBar = () => {

    return (
        <div className="row d-flex justify-content-center align-items-center">
            <div className='col-sm-12 col-md-3 d-flex justify-content-center align-items-center'>
                <img className='logo' src={logo}/>
            </div>
            <div className='col-xs-12 col-md-8 d-none d-md-block d-flex justify-content-center'>
                <div className='title'>
                    <h1>Movie Pro</h1>
                </div>
            </div>
        </div>
    )
}
export default NavBar