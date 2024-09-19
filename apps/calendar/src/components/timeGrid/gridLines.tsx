import { h } from 'preact';
import { memo } from 'preact/compat';

import { useTheme } from '@src/contexts/themeStore';
import { cls, toPercent } from '@src/helpers/css';

import type { TimeGridRow } from '@t/grid';
import type { ThemeState } from '@t/theme';

function gridLineBorderSelector(theme: ThemeState) {
  return {
    hourLineBorder: theme.week.timeGridHourLine.borderBottom,
    halfHourLineBorder: theme.week.timeGridHalfHourLine.borderBottom,
  };
}

export const GridLines = memo(function GridLines({
  timeGridRows,
}: {
  timeGridRows: TimeGridRow[];
}) {
  const { hourLineBorder, halfHourLineBorder } = useTheme(gridLineBorderSelector);

  return (
    <div className={cls('gridlines')}>
      {timeGridRows.map((time, index) => {
        const isHourLine = index % 4 === 3; // Every 2nd row is an hour line (e.g., 12:00, 1:00)
        const borderBottomStyle = isHourLine ? hourLineBorder : halfHourLineBorder; // Alternate between hour and half-hour lines

        return (
          <div
            key={`gridline-${time.startTime}-${time.endTime}`}
            className={cls('gridline-half')}
            style={{
              top: toPercent(time.top),
              height: toPercent(time.height),
              borderBottom: borderBottomStyle,
            }}
            data-testid={`gridline-${time.startTime}-${time.endTime}`}
          />
        );
      })}
    </div>
  );
});
