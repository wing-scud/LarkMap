/*
 * @Author       : 青艺 wangxueyi.wxy@mybank.cn
 * @Date         : 2023-02-07 09:58:51
 * @LastEditors  : 青艺 wangxueyi.wxy@mybank.cn
 * @LastEditTime : 2023-02-07 10:02:43
 * @FilePath     : /OpenSource/LarkMap/src/components/SyncScene/types.ts
 * @name         :
 * @Description  :
 */
import type { Scene } from '@antv/l7';
import type { CommonProps } from '../../types/common';
/**
 * 组件类型定义
 */
export interface SyncSceneProps extends CommonProps {
  scenes: Scene[];
  zoomGap?: number;
  mainIndex?: number;
}
