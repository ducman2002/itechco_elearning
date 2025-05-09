import classNames from "classnames/bind";
import styles from "./Header.module.scss";

import Logo from "~/resources/Images/Logo.png";

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={cx("search-bar")}>
                    <input className={cx("search-box")} placeholder="Search..." spellCheck={false} />
                </div>
            </div>
        </div>
    );
}

export default Header;
