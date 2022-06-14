export const siteData = {
  "base": "/dongdong-components/",
  "lang": "en-US",
  "title": "dongdong-components",
  "description": "Vue3 + ElementPlus 组件库",
  "head": [
    [
      "meta",
      {
        "name": "keywords",
        "content": "Vue3 UI 组件库"
      }
    ],
    [
      "meta",
      {
        "name": "description",
        "content": "此框架使用与二次开发，前端框架使用 Vue3，UI 框架使用 element-plus，全局数据状态管理使用 vuex，ajax 使用库为 axios。用于快速搭建中后台页面。"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
