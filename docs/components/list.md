---
title: List 列表
---

# List

一个高性能的 List 列表组件，支持无限滚动渲染，添加删除和重排动画 hook 等

## 基础用法

渲染大量数据

#### 浏览

#

<ClientOnly>
<list-demo-1 />
</ClientOnly>

#### 代码

```html
<w-list
  :originalList="originalList"
  :itemHeight="itemHeight"
  style="width: 500px; height: 600px;"
>
  <template #items="{ visibleData }">
    <div
      class="item"
      v-for="item in visibleData"
      :key="item.id"
      :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
    >
      {{ item.value }}
    </div>
  </template>
</w-list>
```

```js
data() {
  return {
    originalList: [],
    itemHeight: 30,
  }
},
created() {
  for (let i = 0; i < 9999; i++) {
    this.originalList.push({ id: i, value: i });
  }
}
```

## 无限加载

#### 浏览

#

<ClientOnly>
<list-demo-2 />
</ClientOnly>

#### 代码

```html{5}
<w-list
  :originalList="originalList"
  :itemHeight="itemHeight"
  style="width: 500px; height: 600px;"
  @scroll="onScrollEnd"
>
  <template #items="{ visibleData }">
    <div
      class="item"
      v-for="(item, index) in visibleData"
      :key="item + index"
      :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
    >
      {{ item }}
    </div>
  </template>
</w-list>
```

```js
data() {
  return {
    originalList: [],
    itemHeight: 30,
  }
},
created() {
  for (let i = 0; i < 29; i++) {
    this.originalList.push(1);
  }
},
methods: {
  onScrollEnd() {
    for (let i = 0; i < 5; i++) {
      this.originalList.push(1);
    }
  },
}
```

## 动画

#### 浏览

#

<ClientOnly>
<list-demo-3 />
</ClientOnly>

#### 代码

```html{5}
<div>
  <w-button @click="addList" style="margin-bottom: 10px;">add</w-button>
  <w-button @click="shuffleList" style="margin-bottom: 10px;">shuffle</w-button>
  <w-list
    animation
    :originalList="originalList"
    :itemHeight="itemHeight"
    style="width: 500px; height: 600px;"
    @add="onAdd"
    @remove="onRemove"
    @change="onChange"
  >
    <template #items="{ visibleData }">
      <div
        class="item"
        v-for="item in visibleData"
        :key="item.id"
        :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
      >
        {{ item.value }}
        <w-button type="danger" @click="removeItem(item.id)">remove</w-button>
      </div>
    </template>
  </w-list>
</div>
```

```js
data() {
  return {
    originalList: [],
    itemHeight: 50,
    i: 0,
  };
},
created() {
  for (let i = 0; i < 29; i++) {
    this.originalList.push({ id: i, value: i });
    this.i = i;
  }
},
methods: {
  addList() {
    this.i++;
    this.originalList.unshift({ id: this.i, value: this.i });
  },
  removeItem(id) {
    this.originalList.splice(
      this.originalList.findIndex((item) => id === item.id),
      1
    );
  },
  shuffleList() {
    const shuffled = [];
    while (this.originalList.length > 0) {
      const index = this.random(this.originalList.length - 1);
      shuffled.push(this.originalList[index]);
      this.originalList.splice(index, 1);
    }
    this.originalList = shuffled;
  },
  random(max) {
    return Math.floor(Math.random() * (max + 1));
  },
  onAdd() {
    this.$toast("Add item successfully", {
      autoClose: 3,
    });
  },
  onRemove() {
    this.$toast("Remove item successfully", {
      autoClose: 3,
    });
  },
  onChange() {
    this.$toast("List rearrangement successfully", {
      autoClose: 3,
    });
  },
},
```
