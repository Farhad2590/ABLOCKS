import './Navbar.css';

const Navbar = () => {
    return (
        <div className="kzui-nav">
            <div className="kzui-nav__logo">aBlocks</div>

            <div className="kzui-nav__links">
                <div className="kzui-nav__link kzui-nav__link--active">Welcome</div>
                <div className="kzui-nav__link">Blocks</div>
                <div className="kzui-nav__link">Settings</div>
            </div>
        </div>
    );
};

export default Navbar;
