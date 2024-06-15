import { createWebHistory, createRouter } from "vue-router";
import list from "./components/list.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import error from "./components/error.vue";
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";

const routes = [
    {
        // 해당 URL 접근시 보여줄 컴포넌트들
        path: "/list",
        component: list
    },
    {
        path: "/",
        component: Home,
    },
    // 라우터 안에 또 다른 라우터 (상대경로로 지정)
    {
        path: "/detail/:id",
        component: Detail,
        children: [
            {
                path: "author",
                component: Author
            },
            {
                path: "comment",
                component: Comment
            }
        ]
    },
    {
        path: "/:anything(.*)*",
        component: error,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;