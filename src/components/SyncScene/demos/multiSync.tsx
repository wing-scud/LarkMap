/*
 * @Author       : 青艺 wangxueyi.wxy@mybank.cn
 * @Date         : 2023-02-07 10:10:44
 * @LastEditors  : 青艺 wangxueyi.wxy@mybank.cn
 * @LastEditTime : 2023-02-07 10:12:35
 * @FilePath     : /OpenSource/LarkMap/src/components/SyncScene/demos/multiSync.tsx
 * @name         :
 * @Description  :
 */
/**
 * title: 主地图与其余地图缩放层级差为2
 */
import type { Scene } from '@antv/l7';
import type { LarkMapProps } from '@antv/larkmap';
import { LarkMap, SyncScene } from '@antv/larkmap';
import React from 'react';
const config: LarkMapProps = {
  mapType: 'Gaode',
  mapOptions: {
    style: 'light',
    center: [120.210792, 30.246026],
    zoom: 9,
  },
};
export default () => {
  const [sceneArray, setSceneArray] = React.useState([]);
  const onSceneLoaded = (scene: Scene) => {
    setSceneArray((oldValue) => [...oldValue, scene]);
  };

  return (
    <div>
      <h1>主地图与其余地图缩放层级差为2</h1>
      <div style={{ display: 'flex', flexDirection: 'row', height: '400px' }}>
        <LarkMap onSceneLoaded={onSceneLoaded} {...config} id="multiScene" style={{ flex: 1 }}>
          <h3 style={{ position: 'absolute', left: '10px' }}>主地图</h3>
        </LarkMap>
        <LarkMap onSceneLoaded={onSceneLoaded} {...config} id="multiScene2" style={{ flex: 1 }}>
          <h3 style={{ position: 'absolute', left: '10px' }}>地图2</h3>
        </LarkMap>
        <LarkMap onSceneLoaded={onSceneLoaded} {...config} id="multiScene3" style={{ flex: 1 }}>
          <h3 style={{ position: 'absolute', left: '10px' }}>地图3</h3>
        </LarkMap>
        <SyncScene scenes={sceneArray} zoomGap={2} mainIndex={0} />
      </div>
    </div>
  );
};
