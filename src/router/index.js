import Vue from "vue";
import VueRouter from "vue-router";
import login from "../components/bicycleLogin/login";
import downApp from "../components/downApp/downApp";
import classIntroduce from "../components/classIntroduce/classIntroduce";
import main from "../components/main/main"
import recruit from "../components/recruit/recruit"
import venueList from "../components/venueList/venueList"
import activityList from "../components/activityList/activityList"
import coachList from "../components/coachList/coachList"
import coachXiang from "../components/coachXiang/coachXiang"
import activityClass from "../components/activityClass/activityClass"
import changXiang from "../components/changXiang/changXiang"
import fullMedia from "../components/fullMedia/fullMedia"
import fullXiang from "../components/fullXiang/fullXiang"
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
      path:"/venueList/changXiang",
      component:changXiang
    },
    {
      path:"/activityList",
      component:activityList
    },
    {
      path:"/coachList",
      component:coachList
    },
    {
      path:"/coachList/coachXiang",
      component:coachXiang
    },
    {
      path:"/activityList/activityClass",
      component:activityClass
    },
    {
      path:"/fullMedia",
      component:fullMedia
    },
    {
      path:"/fullMedia/fullXiang",
      component:fullXiang
    }
  ]
})
