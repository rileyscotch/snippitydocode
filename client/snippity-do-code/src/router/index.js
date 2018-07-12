import Vue from "vue";
import Router from "vue-router";
import Landing from "@/components/Landing";
import Snips from "@/components/Snips";
import Example from "@/components/Example";
import Create from "@/components/Create";
import Edit from "@/components/Edit";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Landing",
      component: Landing
    },
    {
      path: "/snips",
      name: "Snips",
      component: Snips
    },
    {
      path: "/snips/create",
      name: "Create",
      component: Create
    },
    {
      path: "/snips/:id",
      name: "Example",
      component: Example
    },
    {
      path: "/snips/:id/edit",
      name: "Edit",
      component: Edit
    }
  ]
});
