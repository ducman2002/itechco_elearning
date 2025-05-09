import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

import Header from "./Header";
import Slidebar from "./Slidebar";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className={cx("wrapper")}>
                <Slidebar />
                <div className={cx("content")}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
