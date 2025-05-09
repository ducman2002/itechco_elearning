import Exercise from "~/pages/Exercise";
import Course from "~/pages/Course";

const publishRoutes = [
    { path: "/", component: Exercise },
    { path: "/exercise", component: Exercise },
    { path: "/course", component: Course },
];

const privateRoutes = [];

export { publishRoutes, privateRoutes };
