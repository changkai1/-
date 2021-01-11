// 判断是否在微信中打开
function isWechat () {
    let ua = window.navigator.userAgent.toLowerCase()
    // 通过正则表达式匹配ua中是否含有MicroMessenger字符串
    return /MicroMessenger/i.test(ua)
}

// 用户在手机还是PC
function isNotPc () {
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
}

// 时间格式化
function dateFormat (time, fmt='YYYY-MM-dd') {
    const date = new Date(time)
    const o = {
        'M+': date.getMonth()+1,                 // 月份
        'd+': date.getDate(),                    // 日
        'h+': date.getHours(),                   // 小时
        'm+': date.getMinutes(),                 // 分
        's+': date.getSeconds(),                 // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S"': date.getMilliseconds()             // 毫秒
    }
    if(/(y+)/i.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear()+ '').substr(4 - RegExp.$1.length))
    }
    for(let k in o) {
        if (new RegExp('('+ k +')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00'+ o[k]).substr(('' + o[k]).length)))
        }
    }
    return fmt
}
// 判断结果是否是null
function isNull (exp) {
    let flag = false;
    if (!exp && typeof(exp)!='undefined' && exp != 0) { 
        return !flag 
    } else {
        return flag
    }
}
function downloadFile (vm, url) {
    // 利用a标签下载文件
    const a = document.createElement('a');
    a.setAttribute('download', url);
    a.setAttribute('href', url);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}














