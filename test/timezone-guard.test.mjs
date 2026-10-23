// 把插件包自带的单测接进仓库的 CI。
//
// 断言本体在包内 plugins/liuchen19960902/timezone-guard/test/time.test.mjs，
// 随包一起分发，装了插件的人也能在包目录里直接 npm test 跑同一份。
// 这里只做转发，不复制断言——复制一份就会有两处要同步，早晚会跑偏。
//
// 覆盖的是 miniapp/client/time.js：档位判定的整点边界、偏移解析
// （含 +05:45 这类非整小时时区）、时差文案、跨日的日历日差。
import '../plugins/liuchen19960902/timezone-guard/test/time.test.mjs';
