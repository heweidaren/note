// class MonthDate {
//     constructor(a) {
//         this.date = a
//         if (typeof a === 'string') {
//             this.date = new Date(a)
//         }
//     }
//     format(string) {
//         return this.date
//     }
// }

//精确到日期 2021-02-1
const dateTypes = {
  formatDateDay: "YYYY-MM-DD",
  formatDate: "YYYY-MM-DD HH:mm:ss",
  formatDateMinute: "HH:mm:ss",
};
export function MonthDate(a: Date, b: string) {
  if (b === dateTypes.formatDateDay) {
    return formatDateDay(a);
  }
  if (b === dateTypes.formatDate) {
    return formatDate(a);
  }
  if (b === dateTypes.formatDateMinute) {
    return formatDateMinute(a);
  }
  console.error("数据错误");
}

// 年月日
function formatDateDay(inputTime: Date) {
  const date = inputTime;
  const y: any = date.getFullYear();
  let m: any = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  let d: any = date.getDate();
  d = d < 10 ? "0" + d : d;
  return y + "-" + m + "-" + d;
}

//精确到分钟 2021-02-1 10:10:23
function formatDate(inputTime: Date) {
  const date = inputTime;
  const y: any = date.getFullYear();
  let m: any = date.getMonth() + 1;
  m = m < 10 ? "0" + m : m;
  let d: any = date.getDate();
  d = d < 10 ? "0" + d : d;
  let h: any = date.getHours();
  h = h < 10 ? "0" + h : h;
  let minute: any = date.getMinutes();
  let second: any = date.getSeconds();
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
}

// 时分秒
function formatDateMinute(inputTime: Date) {
  const date = inputTime;
  let h: any = date.getHours();
  h = h < 10 ? "0" + h : h;
  let minute: any = date.getMinutes();
  let second: any = date.getSeconds();
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  return h + ":" + minute + ":" + second;
}

//  深拷贝
export function cloneDeep(obj: any): object {
  let newobj: any = {};
  if (typeof obj == "object" && obj !== null) {
    newobj = obj instanceof Array ? [] : {};
    for (const i in obj) {
      newobj[i] = cloneDeep(obj[i]);
    }
  } else {
    newobj = obj;
  }
  return newobj;
}
// 对象字符拼接

export function splicing(obj: any): string {
  let str = "";
  //   if (obj[i as keyof object] !== null) {
  //     str += obj[i as keyof object];
  //   }
  let number = 0;
  for (const i in obj) {
    if (obj[i] !== null && obj[i] !== undefined && obj[i] !== "") {
      if (number === 1) {
        str = str + "&" + i + "=" + obj[i];
      } else {
        str = "?" + i + "=" + obj[i];
        number = 1;
      }
    }
  }
  return str;
}
