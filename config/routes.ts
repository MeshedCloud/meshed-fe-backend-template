export default [
  {
    path: '/user',
    layout: false,
    routes: [{name: '登录', path: '/user/login/', component: './User/Login'}],
  },
  { path: '/welcome/', name: '欢迎', icon: 'smile', component: './Welcome' },
  {path: '/', redirect: '/welcome/'},
  {path: '/error/:code/', layout: false, component: './error'},
  {path: '*', redirect: '/error/404'},
];
