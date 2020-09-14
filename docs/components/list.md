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

通过[插槽 prop](https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD)提供了 visibleData 用作数据展示，你可以通过其渲染你想要的列表

```html{6}
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

## 无限滚动渲染

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

## 列表数据变化回调及动画

#### 浏览

#

<ClientOnly>
<list-demo-3 />
</ClientOnly>

:::tip
组件默认不开启动画，如需要给更改列表数据操作添加动画，不要忘记 animation 属性
:::

#### 代码

```html{5,9,10,11}
<div>
  <w-button @click="addList" style="margin-bottom: 10px;">add</w-button>
  <w-button @click="shuffleList" style="margin-bottom: 10px;">shuffle</w-button>
  <w-list
    animation
    :originalList="originalList"
    :itemHeight="itemHeight"
    style="width: 500px; height: 600px;"
    @added="onAdd"
    @removed="onRemove"
    @changed="onChange"
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

## 动态高度

有时你的列表元素高度并非静态像素，此时你可以传入 estimatedItemHeight 作为初始化展示高度，在视图更新时组件会还原元素真实高度

#### 浏览

#

<ClientOnly>
<list-demo-4 />
</ClientOnly>

:::tip
在元素高度一致时尽量使用性能更好的静态高度
:::

#### 代码

```html{4}
<w-list
  :originalList="originalList"
  :itemHeight="itemHeight"
  :estimatedItemHeight="60"
  style="width: 500px; height: 600px;"
>
  <template #items="{ visibleData }">
    <div
      class="item"
      v-for="(item, index) in visibleData"
      :key="item.id"
      :style="{
          height: itemHeight[index] + 'px',
          lineHeight: itemHeight[index] + 'px',
        }"
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
    itemHeight: [],
  };
},
created() {
  for (let i = 0; i < 9999; i++) {
    this.originalList.push({ id: i, value: i });
    this.itemHeight.push(Math.floor(Math.random() * 100) + 10);
  }
}
```

---

### 参数

| 参数                | 说明                                                                                     | 类型          | 默认值 |
| ------------------- | ---------------------------------------------------------------------------------------- | ------------- | ------ |
| originalList        | 包含大量数据的列表                                                                       | array         | []     |
| itemHeight          | 行高度，静态高度可以直接写入像素值；动态高度可填入数组（仅适合开启 estimatedItemHeight） | number, array | 80     |
| estimatedItemHeight | 行预估高度，组件通过是否传入该值判断是否需要使用动态高度                                 | number        | 0      |
| overscan            | 展示列表上下视区上、下额外展示的 dom 节点数量预留项                                      | number        | 5      |
| animation           | 是否开启动画（仅在使用钩子时有效）                                                       | Boolean       | false  |

### Lost Slot

| name  | 返回参数    | 说明                   | 类型                        |
| ----- | ----------- | ---------------------- | --------------------------- |
| items | visibleData | 当前需要展示的列表内容 | array 如[{id: 1, value: 1}] |

### Hooks

| 方法名  | 说明                                                          | 类型 |
| ------- | ------------------------------------------------------------- | ---- |
| scroll  | 列表滚动到底触发                                              | -    |
| added   | 新增列表项触发，可配合 animation 使用                         | -    |
| removed | 列表项删除触发，可配合 animation 使用                         | -    |
| changed | 列表项变化触发（上述两个操作也会触发），可配合 animation 使用 | -    |
