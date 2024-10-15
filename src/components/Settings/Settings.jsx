import './Settings.css';
import item1 from "../../assets/note-2.png";
import item2 from "../../assets/color-swatch.png";
import item3 from "../../assets/programming-arrows.png";
import item4 from "../../assets/Icon.png"
import ArrayComponent from '../ArrayComponent/ArrayComponent';

const Settings = () => {
    return (
        <div className="kzui-settings">
            <h3 className="kzui-settings__heading">Settings</h3>

            <div className="kzui-settings__content">
                <div className="kzui-settings__section kzui-settings__section--menu">
                    <h5 className="kzui-settings__section__title">Menu</h5>
                    <div>
                        <ul className="kzui-settings__menu">
                            <li className="kzui-settings__menu-item">
                                <img src={item1} alt="General" className="kzui-settings__menu-icon" />
                                <p className="kzui-settings__menu-text">General</p>
                            </li>
                            <li className="kzui-settings__menu-item kzui-settings__menu-item-selected">
                                <img src={item2} alt="Design System" className="kzui-settings__menu-icon" />
                                <p className="kzui-settings__menu-text">Design System</p>
                            </li>
                            <li className="kzui-settings__menu-item">
                                <img src={item3} alt="Integration" className="kzui-settings__menu-icon" />
                                <p className="kzui-settings__menu-text">Integration</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="kzui-settings__section kzui-settings__section--design">
                    <h3 className="kzui-settings__section__title">Design System</h3>
                    <div className="kzui-settings__design-container">
                        <ul className="kzui-settings__design-menu">
                            <li className="kzui-settings__design-item kzui-settings__design-item--color">Color</li>
                            <li className="kzui-settings__design-item kzui-settings__text--gray ">Typography</li>
                            <li className="kzui-settings__design-item kzui-settings__text--gray">Shadow</li>
                        </ul>
                        <div className="kzui-settings__search-container">
                            <div className="kzui-settings__input-wrapper">
                                <span className="kzui-settings__icon">
                                    <img src={item4} alt="search-icon" />
                                </span>
                                <input
                                    type="text"
                                    className="kzui-settings__search-input"
                                    placeholder="Search D..."
                                />
                            </div>
                        </div>
                        
                    </div>
                    <div className='kzui-table__heading'>
                        <h4>Name</h4>
                        <h4>Value</h4>
                        <h4></h4>
                    </div>
                    <ArrayComponent />
                </div>


            </div>
        </div>
    );
};

export default Settings;
