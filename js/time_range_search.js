/**
 *
 * @param elem
 * @param type year month
 */
function genTimeRange(elem, type, callback){
    const root = document.getElementById(elem)
    const startTime = root.querySelector('.startTime')
    const endTime = root.querySelector('.endTime')
    layui.use('laydate', () =>{
        const laydate = layui.laydate;
        laydate.render({
            elem : root,
            type,
            range: [startTime, endTime], //或 range: '~' 来自定义分割字符
            done: (value, date, endDate) => {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                callback(value, date, endDate)
            },
            change: function(value, date, endDate){
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
            }
        });
    });

}