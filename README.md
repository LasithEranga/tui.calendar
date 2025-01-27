# ![TOAST UI Calendar](https://user-images.githubusercontent.com/26706716/39230183-7f8ff186-48a0-11e8-8d9c-9699d2d0e471.png)

> 🍞📅 A JavaScript calendar that is full featured. Now your service just got the customizable calendar.

[![npm](https://img.shields.io/npm/v/@toast-ui/calendar.svg)](https://www.npmjs.com/package/@toast-ui/calendar)
[![GitHub license](https://img.shields.io/github/license/nhn/tui.calendar.svg)](https://github.com/nhn/tui.calendar/blob/main/LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](https://github.com/nhn/tui.calendar/labels/help%20wanted)
[![code with hearth by NHN Cloud](https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-NHN_Cloud-ff1414.svg)](https://github.com/nhn)

## 🚩 Table of Contents

- [📦 Packages](#-packages)
- [📙 Documents](#-documents)
- [Collect statistics on the use of open source](#collect-statistics-on-the-use-of-open-source)
- [📅 Features](#-features)
  - [✨ Monthly, Weekly, Daily and Various View Types](#-monthly-weekly-daily-and-various-view-types)
  - [Easy to Use: Dragging and Resizing a Schedule](#easy-to-use-dragging-and-resizing-a-schedule)
  - [Ready to Use: Default Popups](#ready-to-use-default-popups)
- [🎨 Other Features](#-other-features)
- [💬 Contributing](#-contributing)
- [🌏 Browser Support](#-browser-support)
- [🔩 Dependencies](#-dependencies)
- [🍞 TOAST UI Family](#-toast-ui-family)
- [🚀 Used By](#-used-by)
- [📜 License](#-license)

## 📦 Packages

The functionality of TOAST UI Calendar is available when using the Plain JavaScript, React, Vue Component.

- [@toast-ui/calendar](/apps/calendar) - Plain JavaScript component implemented by [NHN Cloud](https://github.com/nhn).
- [@toast-ui/react-calendar](/apps/react-calendar) - React wrapper component implemented by [NHN Cloud](https://github.com/nhn).
- [@toast-ui/vue-calendar](/apps/vue-calendar) - Vue wrapper component implemented by [NHN Cloud](https://github.com/nhn).

## 📙 Documents

- [English](./docs/README.md)
- [Korean](./docs/ko/README.md)

## Collect statistics on the use of open source

TOAST UI Calendar applies Google Analytics (GA) to collect statistics on the use of open source, in order to identify how widely TOAST UI Calendar is used throughout the world. It also serves as important index to determine the future course of projects. location.hostname (e.g. > “ui.toast.com") is to be collected and the sole purpose is nothing but to measure statistics on the usage.

To disable GA, refer to the docs below.

- [TOAST UI Calendar](/docs/en/guide/getting-started.md#disable-to-collect-hostname-for-google-analyticsga)
- [TOAST UI Calendar for React](/apps/react-calendar/docs/en/guide/getting-started.md#disable-to-collect-hostname-for-google-analyticsga)
- [TOAST UI Calendar for Vue](/apps/vue-calendar/docs/en/guide/getting-started.md#disable-to-collect-hostname-for-google-analyticsga)

## 📅 Features

### ✨ Monthly, Weekly, Daily and Various View Types

| Monthly | Weekly |
| --- | --- |
| ![image](https://user-images.githubusercontent.com/26706716/39230396-4d79a592-48a1-11e8-9849-08e80f1bedf6.png) | ![image](https://user-images.githubusercontent.com/26706716/39230459-83beac38-48a1-11e8-8cd4-11b97817f1f8.png) |

| Daily | 2 Weeks |
| --- | --- |
| ![image](https://user-images.githubusercontent.com/26706716/39230685-60a2a1d6-48a2-11e8-9d46-ce5693277a64.png) | ![image](https://user-images.githubusercontent.com/26706716/39230638-281d5266-48a2-11e8-84d8-ab289f372051.png) |

### Easy to Use: Dragging and Resizing a Schedule

| Dragging | Resizing |
| --- | --- |
| ![image](https://user-images.githubusercontent.com/26706716/39230930-591031f8-48a3-11e8-8f62-e12e6c19920c.gif) | ![image](https://user-images.githubusercontent.com/26706716/39231671-c926d0da-48a5-11e8-959d-35fd32f2c522.gif) |

### Ready to Use: Default Popups

| Creation Popup | Detail Popup |
| --- | --- |
| ![image](https://user-images.githubusercontent.com/26706716/39230798-d151a9ae-48a2-11e8-842d-b19b40432f48.png) | ![image](https://user-images.githubusercontent.com/26706716/39230820-e73fa11c-48a2-11e8-9348-8e3d81979a78.png) |

## 🎨 Other Features

- Supports various view types: daily, weekly, monthly(6 weeks, 2 weeks, 3 weeks)
- Supports efficient management of milestone and task schedules
- Supports the narrow width of weekend
- Supports changing start day of week
- Supports customizing the date and schedule information UI(including a header and a footer of grid cell)
- Supports adjusting a schedule by mouse dragging
- Supports customizing UI by theme

## 💬 Contributing

- [Code of Conduct](/CODE_OF_CONDUCT.md)
- [Contributing Guidelines](/CONTRIBUTING.md)
- [Commit Message Convention](/docs/COMMIT_MESSAGE_CONVENTION.md)
- [Issue Guidelines](/docs/ISSUE_TEMPLATE.md)

## 🌏 Browser Support

| <img src="https://user-images.githubusercontent.com/1215767/34348387-a2e64588-ea4d-11e7-8267-a43365103afe.png" alt="Chrome" width="16px" height="16px" /> Chrome | <img src="https://user-images.githubusercontent.com/1215767/34348590-250b3ca2-ea4f-11e7-9efb-da953359321f.png" alt="IE" width="16px" height="16px" /> Internet Explorer | <img src="https://user-images.githubusercontent.com/1215767/34348380-93e77ae8-ea4d-11e7-8696-9a989ddbbbf5.png" alt="Edge" width="16px" height="16px" /> Edge | <img src="https://user-images.githubusercontent.com/1215767/34348394-a981f892-ea4d-11e7-9156-d128d58386b9.png" alt="Safari" width="16px" height="16px" /> Safari | <img src="https://user-images.githubusercontent.com/1215767/34348383-9e7ed492-ea4d-11e7-910c-03b39d52f496.png" alt="Firefox" width="16px" height="16px" /> Firefox |
| :---------: | :---------: | :---------: | :---------: | :---------: |
| Latest | 11+ | Latest | Latest | Latest |

## 🔩 Dependencies

- [Preact](https://github.com/preactjs/preact)
- [Immer](https://github.com/immerjs/immer)
- [DOMPurify](https://github.com/cure53/DOMPurify)
- (Optional) [tui-date-picker](https://github.com/nhn/tui.date-picker)
- (Optional) [tui-time-picker](https://github.com/nhn/tui.time-picker)

## 🍞 TOAST UI Family

- [TOAST UI Grid](https://github.com/nhn/tui.grid)
- [TOAST UI Chart](https://github.com/nhn/tui.chart)
- [TOAST UI Editor](https://github.com/nhn/tui.editor)
- [TOAST UI Image-Editor](https://github.com/nhn/tui.image-editor)
- [TOAST UI Components](https://github.com/nhn?q=tui)

## 🚀 Used By

- [NHN Dooray! - Collaboration Service (Project, Messenger, Mail, Calendar, Drive, Wiki, Contacts)](https://dooray.com)
- [NCP - Commerce Platform](https://www.e-ncp.com/)
- [shopby](https://www.godo.co.kr/shopby/main.gd)
- [payco-shopping](https://shopping.payco.com/)
- [iamTeacher](https://teacher.iamservice.net)
- [linder](https://www.linder.kr)

## 📜 License

This software is licensed under the [MIT](/LICENSE) © [NHN Cloud](https://github.com/nhn).


## make follwing changes to show the calendar without height issues

.rpv-default-layout__sidebar.rpv-default-layout__sidebar--ltr {
  display: none;
}
.toastui-calendar-day-name__date,
.toastui-calendar-allday,
.toastui-calendar-panel-resizer {
  display: none;
}
.toastui-calendar-timegrid.toastui-calendar-timegrid-scroll-area {
  height: 600% !important;
}
.toastui-calendar-timegrid {
  height: 3000px !important;
}
.toastui-calendar-panel.toastui-calendar-time {
  height: 500px;
  min-height: unset !important;
}
.toastui-calendar-timegrid.toastui-calendar-timegrid-scroll-area {
  height: 100% !important;
}

.toastui-calendar-day-names {
  border-bottom: none !important;
}

.rpv-default-layout__container {
  border: none;
}

.rpv-default-layout__toolbar {
  position: sticky;
  top: 0px;
}

.rpv-default-layout__body {
  padding-top: 0;
}

.rpv-core__inner-pages.rpv-core__inner-pages--vertical {
  padding-top: 10px;
}

.rpv-toolbar__right > :nth-child(1),
.rpv-toolbar__right > :nth-child(2),
.rpv-toolbar__right > :nth-child(6) {
  visibility: hidden;
}

.rpv-toolbar__right > :nth-child(3),
.rpv-toolbar__right > :nth-child(5) {
  display: none;
}

.blocked-area {
  position: relative;
  width: 200px; /* Adjust as needed */
  height: 200px; /* Adjust as needed */
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.3) 25%,
    transparent 25%,
    transparent 50%,
    rgba(0, 0, 0, 0.3) 50%,
    rgba(0, 0, 0, 0.3) 75%,
    transparent 75%,
    transparent
  );
  background-size: 20px 20px; /* Adjust size to your needs */
}


## handle the height dynamically

  useEffect(() => {
    let timeout = null;
    const updateHeight = () => {
      const elements = document.querySelectorAll('.toastui-calendar-panel.toastui-calendar-time');
      console.log(elements);
      timeout = setTimeout(() => {
        elements.forEach((element) => {
          element.style.height = 'calc(90vh - 100px)';
        });
      }, 200);
    };

    window.addEventListener('resize', updateHeight);
    updateHeight();

    return () => {
      window.removeEventListener('resize', updateHeight);
      timeout && clearTimeout(timeout);
    };
  }, [currentView]);

