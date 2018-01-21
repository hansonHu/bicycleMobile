import Vue from "vue";
import VueRouter from "vue-router";
import login from "../components/bicycleLogin/login";
import downApp from "../components/downApp/downApp";
import classIntroduce from "../components/classIntroduce/classIntroduce";
import main from "../components/main/main"
import recruit from "../components/recruit/recruit"
import venueList from "../components/venueList/venueList"
import activityList from "../components/activityList/activityList"
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
    },
    {
      path:"/recruit",
      component:recruit
    },
    {
      path:"/venueList",
      component:venueList
    },
    {
      path:"/activityList",
      component:activityList
    }
  ]
})
