let arr = [
    {
        orgId: "2654",
        orgName: "主办沪文文化",
        shareProportion: "12"
    },
    {
        orgId: "2654",
        orgName: "主办沪文文化",
        shareProportion: "12121212"
    },
    {
        orgId: "2654",
        orgName: "主办沪文文化",
        shareProportion: "12.12"
    },
    {
        orgId: "2654",
        orgName: "主办沪文文化",
        shareProportion: "10.12"
    },
    {
        orgId: "2654",
        orgName: "主办沪文文化",
        shareProportion: "12"
    }
]
let lock = true;
if (arr.length > 0) {
    for (let i = 0 ; i < arr.length; i++) {
        if (arr[i].shareProportion == 'null' || arr[i].shareProportion == '') {
            console.log("请输入分成比例", "warn");
            lock = false;
            break;
        } else if (arr[i].shareProportion >= 100 || arr[i].shareProportion < 0) {
            console.log('请输入小于100大于0的数字');
            lock = false;
            break;
        } else {
            var reg = /^\d+(\.\d{1,2})?$/;
            if (!reg.test(arr[i].shareProportion)) {
                console.log('请最多保留两位小数');
            }
            lock = false;
            break;
        }
    }
}
if (!lock) {
    return false;
}

if (arr.length > 0){
    console.log(12345)
} else {
    console.log(6789)
}
