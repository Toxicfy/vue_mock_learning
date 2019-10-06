import {Random} from 'mockjs'


Random.extend({
    nameList: function () {
        const nameArr = ["洗漱用品", "家居用品", "炊事用品", "装饰用品", "化妆用品", "床上用品"]
        return this.pick(nameArr)
    }
})
