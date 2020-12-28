// 校验规则

export function password (rule, value, callback) { // 密码
    value = unescape(value);
    value = value ? value.trim() : '';
    // eslint-disable-next-line no-useless-escape
    const reg = /^[a-z_A-Z0-9-\.!@#\$%\\\^&\*\)\(\+=\{\}\[\]\/",'<>~\·`\?:;|]{8,20}$/;
    if (!reg.test(value) && value !== '') {
      return callback(new Error('请输入合法的密码'));
    } else {
      callback();
    }
  }