//用来进行文章的接口处理操作
var article = {
        getCate: function (options) {
            $.ajax({
                url: GET_CATE,
                success: function (res) {
                    if (res.code == 200) {
                        options.success(res);
                    }
                }
            })
        },