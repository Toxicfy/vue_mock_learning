import Mock from 'mockjs'
//
import './extends'

//
Mock.mock('/api/list', 'get', {
    status: 200,
    message: '获取列表数据成功',
    'data|5-10': [{
        id: '@increment(1)',
        name: '@nameList()',
        price: '@natural(9.9,99)',
        saleCount: '@natural(100,999)',
        imageURL: '@dataImage("200x100", "#00405d", "#FFF",)'
    }]
})
//
Mock.mock('/api/add', 'post', function (option) {
    //option -- 包含url，body，type的对象
    console.log(option)
    return {
        status: 200,
        message: '数据获取成功'
    }
})
//
Mock.mock(/\/api\/search/, function (option) {
    const id = /\/api\/search\/(\d+)/.exec(option.url)[1];
    if (id) {
        return {
            status: 200,
            id: Number(id),
            message: '该条数据获取成功'
        }
    } else {
        return {
            status: 200,
            message: 'Error: 请输入参数后再获取'
        }
    }
})

// Mock.js 的语法规范包括两部分：
// 数据模板定义规范（Data Template Definition，DTD）
// 'name|rule': value  => '属性名|规则': 属性值
// 数据占位符定义规范（Data Placeholder Definition，DPD）
