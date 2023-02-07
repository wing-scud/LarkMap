/*
 * @Author       : 青艺 wangxueyi.wxy@mybank.cn
 * @Date         : 2023-02-07 09:58:51
 * @LastEditors  : 青艺 wangxueyi.wxy@mybank.cn
 * @LastEditTime : 2023-02-07 10:18:45
 * @FilePath     : /OpenSource/LarkMap/src/components/SyncScene/index.tsx
 * @name         :
 * @Description  :
 */
import React, { useEffect } from 'react';
import { syncSceneHelper } from './helper';
import type { SyncSceneProps } from './types';

export const SyncScene: React.FC<SyncSceneProps> = ({ scenes, zoomGap, mainIndex }) => {
  useEffect(() => {
    const callback = syncSceneHelper(scenes, {
      zoomGap,
      mainIndex,
    });
    return callback;
  }, [scenes, zoomGap, mainIndex]);

  return <></>;
};

export { syncSceneHelper };
