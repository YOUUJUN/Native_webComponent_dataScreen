layui.use('table', function(){
    var table = layui.table;

    //方法级渲染
    table.render({
        elem: '#LAY_table_user',
        url: '../../demo/table/user/-page=1&limit=30.js',
        cols: [[
            {field:'username', title: '客户姓名'},
            {field:'sex', title: '联系方式'},
            {field:'city', title: '年龄'},
            {field:'sign', title: '签名'},
            {field:'experience', title: '状态'}
        ]],
        id:'userTable',
        page: true,
        height: 310
    });

    const active = {
        reload: function(){
            const tableReload = document.getElementById('tableReload');

            //执行重载
            table.reload('userTable', {
                page: {
                    curr: 1 //重新从第 1 页开始
                }
                ,where: {
                    username: tableReload.value
                }
            });
        }
    };

    document.getElementById('table_search').addEventListener('click', function(){
        let type = this.dataset.type
        active[type] && active[type].call(this)
    });
});