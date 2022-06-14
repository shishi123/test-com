---
title: 开始
---
## 安装

```bash
npm i @dongdong-components/TwoColumns
# or
yarn add @dongdong-components/TwoColumns


## 使用

```vue
<template>
 <TwoColumns>
 </TwoColumns>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import TwoColumns from '@dongdong-components/TwoColumns'

export default defineComponent({
  name: 'oa-TwoColumns',
  components: { TwoColumns },
  setup() {}
})
</script>
```
