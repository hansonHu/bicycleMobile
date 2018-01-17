import Vue from "vue";
import VueRouter from "vue-router";
import login from "../components/bicycleLogin/login";
import downApp from "../components/downApp/downApp";
import classIntroduce from "../components/classIntroduce/classIntroduce";
import main from "../components/main/main"
Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    {
      path:"/",
      component:main

    },
    {
      path:"/downApp",
      component:downApp
    },
    {
      path:"/classIntroduce",
      component:classIntroduce
    },
    {
      path:"/login",
      component:login
    }
  ]
})
