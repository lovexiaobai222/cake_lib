/**
 * value 转换成金额字符串
 * 功能：如2，会在2后面补上00，即2.00
 * @returns {number}
 */
export function toMoney(value) {
    //若不是数字，原样返回
    if (isNaN(value)) {
        return value;
    }
    let f = parseFloat(value);
    f = Math.round(f*100)/100;
    let s = f.toString();
    let rs = s.indexOf('.');
    //若小数点不存在，补小数点
    if (rs < 0) {
        rs = s.length;
        s += '.';
    }
    //若不足两位小数，则补0
    while (s.length <= rs + 2) {
        s += '0';
    }
    //若超出两位小数，则截取掉最后一位
    while (s.length > rs + 3) {
        s = s.substring(0, s.length -1);
    }

    return s;
}


