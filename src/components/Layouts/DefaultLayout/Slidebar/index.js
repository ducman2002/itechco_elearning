import classNames from "classnames/bind";
import styles from "./Slidebar.module.scss";

const cx = classNames.bind(styles);

function Slidebar() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("menu")}>
                    <div className={cx("menu-item")}>Tương Tác Game</div>
                    <div className={cx("menu-item")}>Khóa Học</div>
                </div>
            </div>
        </div>
    );
}

export default Slidebar;
