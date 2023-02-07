/*
 * @Author       : 青艺 wangxueyi.wxy@mybank.cn
 * @Date         : 2023-02-07 10:11:01
 * @LastEditors  : 青艺 wangxueyi.wxy@mybank.cn
 * @LastEditTime : 2023-02-07 10:11:02
 * @FilePath     : /OpenSource/LarkMap/src/components/SyncScene/demos/zoomGap.tsx
 * @name         :
 * @Description  :
 */
import type { Scene } from '@antv/l7';
import type { LarkMapProps } from '@antv/larkmap';
import { LarkMap, SyncScene } from '@antv/larkmap';

import React from 'react';
const config: LarkMapProps = {
  // mapType: 'Gaode',
  mapOptions: {
    style: 'light',
    center: [120.210792, 30.246026],
    zoom: 9,
  },
};
export default () => {
  const [sceneArray, setSceneArray] = React.useState([]);
  const [zoomGap, setZoomGap] = React.useState<number>();
  const onSceneLoaded = (scene: Scene) => {
    setSceneArray((oldValue) => [...oldValue, scene]);
  };
  const changeHandler = (e) => {
    // 转为Number类型
    const gap = Number(e.target.value);
    setZoomGap(gap);
  };

  return (
    <div>
      设置zoomGap： <input onChange={changeHandler} />
      <div style={{ display: 'flex', flexDirection: 'row', height: '300px' }}>
        <LarkMap onSceneLoaded={onSceneLoaded} {...config} id="gapScene" style={{ flex: 1 }}>
          <h2 style={{ position: 'absolute', left: '10px' }}>主地图</h2>
        </LarkMap>
        <LarkMap onSceneLoaded={onSceneLoaded} {...config} id="gapScene2" style={{ flex: 1 }}>
          <h2 style={{ position: 'absolute', left: '10px' }}>地图2</h2>
        </LarkMap>
        <SyncScene scenes={sceneArray} zoomGap={zoomGap} />
      </div>
    </div>
  );
};
