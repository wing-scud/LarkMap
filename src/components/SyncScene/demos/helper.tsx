/*
 * @Author       : 青艺 wangxueyi.wxy@mybank.cn
 * @Date         : 2023-02-07 10:21:26
 * @LastEditors  : 青艺 wangxueyi.wxy@mybank.cn
 * @LastEditTime : 2023-02-07 10:24:51
 * @FilePath     : /OpenSource/LarkMap/src/components/SyncScene/demos/helper.tsx
 * @name         :
 * @Description  :
 */
import type { Scene } from '@antv/l7';
import type { LarkMapProps } from '@antv/larkmap';
import { LarkMap, syncSceneHelper } from '@antv/larkmap';
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
  const onSceneLoaded = (scene: Scene) => {
    setSceneArray((oldValue) => [...oldValue, scene]);
  };
  React.useEffect(() => {
    const callback = syncSceneHelper(sceneArray, {
      zoomGap: 0,
    });
    return callback;
  }, [sceneArray]);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', height: '300px' }}>
        <LarkMap onSceneLoaded={onSceneLoaded} {...config} id="helperScene" style={{ flex: 1 }}>
          <h2 style={{ position: 'absolute', left: '10px' }}>地图1</h2>
        </LarkMap>
        <LarkMap onSceneLoaded={onSceneLoaded} {...config} id="helperScene2" style={{ flex: 1 }}>
          <h2 style={{ position: 'absolute', left: '10px' }}>地图2</h2>
        </LarkMap>
      </div>
    </div>
  );
};
