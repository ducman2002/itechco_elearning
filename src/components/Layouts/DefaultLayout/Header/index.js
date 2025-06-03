import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

import Logo from "~/resources/Images/Logo.png";

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();

    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("logo")}>
                    <img className={cx("image-logo")} src={Logo} alt="Logo" onClick={() => navigate("/")} />
                </div>
                <div className={cx("search-bar")}>
                    <input className={cx("search-box")} placeholder="Search..." spellCheck={false} />
                </div>
            </div>
        </div>
    );
}

export default Header;
