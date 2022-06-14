---
title: 'UserAvatar'
desc: 'desc'
---

### @dongdong-components/UserAvatar

::: demo

```vue
<template>
  <UserAvatar :settings="settings" class="sum-TwoColumns">
    
  </UserAvatar>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const currentUser =  {
      userPic: '',
      department: {
        id: null,
        name: '',
      },
      email: '',
      name: '',
      empId: '',
      gender: null,
      dashboard: false,
    };
    return {
      currentUser,
    }
  }
})
</script>

<style>
.sum-TwoColumns {
   min-height: 500px;
}
.title {
  display: flex;
  align-items: center;
}
a:hover {
  text-decoration: none!important;
}
</style>
```

:::

### SumTwoColumns Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| settings | 布局参数 | object | — | {} |

### Settings Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| headerTitle | 头栏左边内容 | string/object/function（如果有rener函数则展示render函数内容，如果是object,{slot: 'title'}则可以使用插槽，否则展示字符串） | — | {} |
| headerRight | 头栏右边内容 | string/object/function（如果有rener函数则展示render函数内容，如果是object,{slot: 'title'}则可以使用插槽，否则展示字符串） | — | {} |
| headerStyles | 头栏样式 | object | — | {} |
| menuProps | 侧栏属性传递（继承 el-menu 属性） | object | — | {} |
| triggerCollapse | 是否显示 collapse 图标 | boolean | — | false |
| menuData | 菜单数据 | array | — | [] |
| footer | 底部footer | string/object/function（如果有rener函数则展示render函数内容，如果是object,{slot: 'title'}则可以使用插槽，否则展示字符串） | — | {} |

### MenuProps Attributes

| 参数                | 说明                                                                                | 类型    | 可选值                | 默认值   |
| ------------------- | ----------------------------------------------------------------------------------- | ------- | --------------------- | -------- |
| mode                | 模式                                                                                | string  | horizontal / vertical | vertical |
| collapse            | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）                                | boolean | —                     | false    |
| background-color    | 菜单的背景色（仅支持 hex 格式）                                                     | string  | —                     | #ffffff  |
| text-color          | 菜单的文字颜色（仅支持 hex 格式）                                                   | string  | —                     | #303133  |
| active-text-color   | 当前激活菜单的文字颜色（仅支持 hex 格式）                                           | string  | —                     | #409EFF  |
| default-active      | 当前激活菜单的 index                                                                | string  | —                     | —        |
| default-openeds     | 当前打开的 sub-menu 的 index 的数组                                                 | Array   | —                     | —        |
| unique-opened       | 是否只保持一个子菜单的展开                                                          | boolean | —                     | false    |
| menu-trigger        | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效)                                | string  | hover / click         | hover    |
| router              | 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | boolean | —                     | false    |
| collapse-transition | 是否开启折叠动画                                                                    | boolean | —                     | true     |
