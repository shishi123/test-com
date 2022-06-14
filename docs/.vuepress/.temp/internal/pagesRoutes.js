import { Vuepress } from '@vuepress/client'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/index.md"]],
  ["v-2f5b9216","/components/UserAvatar.html",{"title":"UserAvatar"},["/components/UserAvatar","/components/UserAvatar.md"]],
  ["v-e45cc9ec","/guide/install.html",{"title":"安装"},["/guide/install","/guide/install.md"]],
  ["v-621628ba","/guide/start.html",{"title":"开始"},["/guide/start","/guide/start.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: '404',
      path: '/:catchAll(.*)',
      component: Vuepress,
    }
  ]
)
