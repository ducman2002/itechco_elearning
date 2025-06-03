import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import styles from "./Slidebar.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

const menuItems = [
    { label: "Tương Tác Game", path: "/exercise" },
    { label: "Khóa Học", path: "/course" },
];

const courses = ["Khóa học 1", "Khóa học 2", "Khóa học 3", "Khóa học 4"];

function Slidebar() {
    const navigate = useNavigate();
    const [selectedMenu, setSelectedMenu] = useState(null);
    const [showCourses, setShowCourses] = useState(false);

    const handleMenuClick = (idx, path) => {
        if (selectedMenu === idx) {
            setSelectedMenu(null);
            if (idx === 1) setShowCourses(false);
        } else {
            setSelectedMenu(idx);
            navigate(path);
            if (idx === 1) setShowCourses(true);
            else setShowCourses(false);
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("menu")}>
                    {menuItems.map((item, idx) => (
                        <div
                            key={item.label}
                            className={cx("menu-item", { selected: selectedMenu === idx })}
                            onClick={() => handleMenuClick(idx, item.path)}
                        >
                            {item.label}
                        </div>
                    ))}
                    {showCourses && (
                        <div className={cx("list-item-course")}>
                            {courses.map((course, i) => (
                                <div key={i} className={cx("item-course-content-item")}>
                                    {course}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Slidebar;
