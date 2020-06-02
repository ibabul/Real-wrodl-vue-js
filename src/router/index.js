import Vue from "vue";
import VueRouter from "vue-router";
import EventCreate from "../views/EventCreate.vue";
import EventShow from "../views/EventShow.vue";
import EventList from "../views/EventList.vue";
import User from "../views/User.vue";
import NotFound from "../views/NotFound.vue";
import AutoIncrement from "../views/AutoIncrement.vue";






Vue.use(VueRouter);

const routes = [{

        path: "/",
        name: "event-list",
        component: EventList
    },
    {
        path: "/event/:id",
        name: 'event-show',
        component: EventShow,
        props: true
    },

    {
        path: "/auto",
        name: 'Auto',
        component: AutoIncrement
    },
    {
        path: "/event/create",
        name: 'event-create',
        component: EventCreate,
    },
    {
        path: "/user/:username",
        name: 'user',
        component: User,
        props: true
    },
    {
        path: "*",
        component: NotFound
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;