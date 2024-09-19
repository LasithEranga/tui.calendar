import { h } from 'preact';

import type { DayNameThemes } from '@src/components/dayGridCommon/gridHeader';
import { Template } from '@src/components/template';
import { useEventBus } from '@src/contexts/eventBus';
import { cls } from '@src/helpers/css';
import { getDayName } from '@src/helpers/dayName';
import { usePrimaryTimezone } from '@src/hooks/timezone/usePrimaryTimezone';
import type { TemplateName } from '@src/template/default';
import type TZDate from '@src/time/date';
import { isSameDate, isSaturday, isSunday, isWeekend, toFormat } from '@src/time/datetime';

import type { CalendarViewType, StyleProp } from '@t/components/common';
import type { TemplateMonthDayName, TemplateWeekDayName } from '@t/template';

interface Props {
  type: CalendarViewType;
  dayName: TemplateWeekDayName | TemplateMonthDayName;
  style: StyleProp;
  theme: DayNameThemes;
}

function isWeekDayName(
  type: 'week' | 'month',
  dayName: Props['dayName']
): dayName is TemplateWeekDayName {
  return type === 'week';
}

function getWeekDayNameColor({
  dayName,
  theme,
  today,
}: {
  dayName: TemplateWeekDayName;
  theme: Props['theme'];
  today: TZDate;
}) {
  const { day, dateInstance } = dayName;
  const isToday = isSameDate(today, dateInstance);
  const isPastDay = !isToday && dateInstance < today;

  if (isSunday(day)) {
    return theme.common.holiday.color;
  }
  if (isPastDay) {
    return theme.week?.pastDay.color;
  }
  if (isSaturday(day)) {
    return theme.common.saturday.color;
  }
  if (isToday) {
    return theme.week?.today.color;
  }

  return theme.common.dayName.color;
}

function getMonthDayNameColor({
  dayName,
  theme,
}: {
  dayName: TemplateMonthDayName;
  theme: Props['theme'];
}) {
  const { day } = dayName;

  if (isSunday(day)) {
    return theme.common.holiday.color;
  }
  if (isSaturday(day)) {
    return theme.common.saturday.color;
  }

  return theme.common.dayName.color;
}

export function DayName({ dayName, style, type, theme }: Props) {
  const eventBus = useEventBus();
  const [, getNow] = usePrimaryTimezone();
  const today = getNow();
  const { day } = dayName;
  const color =
    type === 'week'
      ? getWeekDayNameColor({ dayName: dayName as TemplateWeekDayName, theme, today })
      : getMonthDayNameColor({ dayName: dayName as TemplateMonthDayName, theme });

  const templateType = `${type}DayName` as TemplateName;

  const handleClick = () => {
    console.log('clickDayName', dayName);
    if (isWeekDayName(type, dayName)) {
      eventBus.fire('clickDayName', { date: toFormat(dayName.dateInstance, 'YYYY-MM-DD') });
    }
  };
  const daynameStr = isWeekDayName(type, dayName) ? `${dayName.dayName}` : `${dayName.label}`;

  const splitted = daynameStr.split('_');
  let [productName, productType, imageLink] = ['', '', ''];
  if (splitted.length === 3) {
    [productName, productType, imageLink] = splitted;
  } else {
    productName = '';
    productType = '';
    imageLink = '';
  }

  return (
    <div
      className={cls('day-name-item', type, 'hover-div')}
      style={{ ...style, lineHeight: '15px', marginTop: '5px' }}
      onClick={handleClick}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        {imageLink ? (
          <img
            src={imageLink}
            style={{ width: '30px', height: '30px', marginRight: '10px', borderRadius: '50%' }}
          />
        ) : (
          <div
            style={{ width: '30px', height: '30px', marginRight: '10px', borderRadius: '50%' }}
          ></div>
        )}
        <div>
          <span>{productName}</span> <br></br>
          <span>{productType}</span>
        </div>
      </div>
    </div>
  );
}
