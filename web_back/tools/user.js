//使用user.js对项目中操作请求
//使用user.js对项目中与用户操作有关的请
//使用user.js对项目中与用户操作有关的请求操作
var user = {
    //设置login方法，用来进行登录请求操作
    login: function (options) {
        $.ajax({
            type: 'post',
            url: LOGIN, //将地址进行特殊处理，方便后期维护，并且避免修改
            data: {
                user_name: options.data.username,
                password: options.data.password
            },
            success: function (res) {
                // 根据res.code进行成功失败检测
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        });
    },
    logout: function (options) {
        $.ajax({
            type: 'post',
            url: LOGOUT,
            success: function (res) {
                if (res.code === 200) {
                    // 3.1退出成功，跳转到登录界面
                    options.success();
                } else {
                    // 3.2退出失败 进行提示
                    options.fail();
                }
            }
        })
    },
    //设置getuser的方法,用于获取用户的基本信息
    getUser: function (options) {
        $.ajax({
            url: GET_USER,
            success: function (res) {
                if (res.code == 200) {
                    options.success(res.data);
                }
            }
        });
    }
};