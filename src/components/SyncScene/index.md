---
toc: content
order: 3
group:
  title: 示例分组
  order: 100
nav:
  title: 组件
  path: /components
hide: true
---

# 同步地图 - SyncScene

## 介绍

用于同步地图状态「缩放层级、地图中心点、旋转角、倾斜角」。

支持 Gaode 和 Mapbox 两种地图引擎类型

### 使用场景

适用于同步多个场景的地图状态，适用于两幅或多幅地图的联动。

## 代码演示

### 示例一：基础使用

<code src="./demos/default.tsx">

### 示例二： 设置 zoomGap

<code src="./demos/zoomGap.tsx">

### 示例三：多地图场景同步

<code src="./demos/multiSync.tsx">

## API

组件参数 `SyncSceneProps`

| 参数        | 说明                                                                       | 类型      | 默认值 |
| ----------- | -------------------------------------------------------------------------- | --------- | ------ |
| `scenes`    | LarkMap 加载完成的 Scene 实例数组                                          | `Scene[]` | []     |
| `zoomGap`   | 用于设置同步场景的地图层级差                                               | `number`  | 0      |
| `mainIndex` | 搭配 `zoomGap` 使用，用于设置主场景，其余场景为主场景的 `zoom` + `zoomGap` | `number`  | 0      |

## FAQ

### 如何使用方法同步地图

#### 使用

`import {syncSceneHelper} from "@antv/larkmap"`

### 示例

<code src="./demos/helper.tsx">

#### API

参数含义同组件 `SyncSceneProps` 内定义

`syncSceneHelper(scenes: Scene[], options: { zoomGap: number, mainIndex: number })`
