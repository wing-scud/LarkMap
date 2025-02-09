import type { IExportImageControlOption } from '@antv/l7';
import { ExportImage as L7ExportImage } from '@antv/l7';
import { useMount, useUnmount } from 'ahooks';
import { omitBy } from 'lodash-es';
import React, { useMemo, useState } from 'react';
import { getStyleText } from '../../../utils';
import { useScene } from '../../LarkMap/hooks';
import { useL7ComponentEvent, useL7ComponentPortal, useL7ComponentUpdate } from '../hooks';
import type { ExportImageControlProps } from './types';

export const ExportImageControl: React.FC<ExportImageControlProps> = ({
  onExport,
  onShow,
  onHide,
  onAdd,
  onRemove,
  imageType,
  btnIcon,
  btnText,
  title,
  vertical,
  position,
  className,
  style,
}) => {
  const scene = useScene();
  const [control, setControl] = useState<L7ExportImage | undefined>();
  const styleText = useMemo(() => getStyleText(style), [style]);
  const { portal: btnIconPortal, dom: btnIconDOM } = useL7ComponentPortal(btnIcon);

  const controlOptions: Partial<IExportImageControlOption> = useMemo(() => {
    return {
      btnText,
      title,
      vertical,
      position,
      className,
      imageType,
      style: styleText,
      btnIcon: btnIconDOM,
      onExport,
    };
  }, [btnText, title, vertical, position, className, styleText, imageType, onExport, btnIconDOM]);

  useMount(() => {
    const exportImage = new L7ExportImage(omitBy(controlOptions, (value) => value === undefined));
    setControl(exportImage);
    scene.addControl(exportImage);
  });

  useUnmount(() => {
    if (control) {
      scene.removeControl(control);
      setControl(undefined);
    }
  });

  useL7ComponentUpdate(control, controlOptions);

  useL7ComponentEvent(control, {
    add: onAdd,
    remove: onRemove,
    show: onShow,
    hide: onHide,
  });

  return <>{btnIconPortal}</>;
};
