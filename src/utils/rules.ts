/**
 * 必须填写
 * @param message 错误提示
 */
export const required = (message: string) => ({
  message,
  required: true,
});

/**
 * 最大长度不能超过{length}
 * @param length 最大长度
 * @param message 错误提示
 */
export const max = ( message: string, length: number = 20) => ({
  max: length,
  message,
});

/**
 * 最小长度不能少于{length}
 * @param length 最小长度
 * @param message 错误提示
 */
export const min = (message: string, length: number = 3) => ({
  message,
  min: length,
});

/**
 * 检测表单填写是否符合规则
 * @param reg 正则表达
 * @param message 提示信息
 */
export const pattern = (message: string, reg: RegExp) => ({
  message,
  pattern: reg,
});


/**
 * 两个字段值是否相等
 * @param srcFieldValue 原字段值
 * @param destFieldValue 目标字段值
 * @param message 错误消息
 */
// export const same = (handler: (key: string[]) => object, keys: string[] = [],
//  message: string | { srcFieldName: string, destFieldName: string }) => ({
//   validator(value: string | number | null | undefined | boolean, rule: string = 'same', cb: (msg: string) => void) {
//     const values = handler(keys);
//     let store: string = '';
//     let isSame: boolean = true;
//     for (const p in values) {
//       if (values.hasOwnProperty(p)) {
//         store = store || values[p];
//         if (store !== values[p]) {
//           isSame = false;
//           break;
//         }
//       }
//     }
//     if (isSame) {
//       cb();
//     } else {
//       if (typeof message === 'object') {
//         cb(i18n._('rule.same', message));
//       } else {
//         cb(message || i18n._('rule.same'));
//       }
//     }
//   }
// });

/**
 * 是否符合命名规范
 */
export const name = (message: string) => ({
  message,
  pattern: /^[a-zA-Z_]+[a-zA-Z_\d]{4,99}/,
});
/**
 * 电子邮箱
 */
export const email = (message: string) => ({
  message,
  pattern: /^(\w|\.)+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
});

/**
 * 身份证id
 */
export const id = (message: string) => ({
  message,
  pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/,
});

/**
 * 电话号码mobile
 */
export const mobile = (message: string) => ({
  message,
  pattern: /^1(3|4|5|6|7|8|9)\d{9}$/,
});

/**
 * 检验盒id
 */
export const barCodeValidate = (message: string) => ({
  message,
  pattern: /^[a-zA-Z]{2}(\d){5}$/,
});

export const smsValidate = (message: string) => ({
  message,
  pattern: /^[0-9]{5}$/,
});
