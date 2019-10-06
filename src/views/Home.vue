<template>
    <div class="home">
        <el-button class="left" @click="testRequest">测试数据请求</el-button>
        <el-button class="left" @click="testAddRequest">提交数据</el-button>


        <el-button class="paramsDiv" @click="testRequestByParam(requestParam)">测试数据请求(带参数)</el-button>
        <div class="paramsDiv">
            <el-input v-model="requestParam" type="number" placeholder="参数输入"></el-input>
        </div>

        <hr/>

        <div class="result">
            {{result}}
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        data() {
            return {
                result: '',
                requestParam: ''
            }
        },
        methods: {
            testRequest() {
                this.$http('/api/list')
                    .then(res => {
                        console.log(res.data)
                        this.result = res.data
                    })
            },
            async testAddRequest() {
                let commitContent = {
                    name: 'testName',
                    price: '14.9',
                    saleCount: 66
                }
                const {data} = await this.$http.post('/api/add', commitContent)
                this.result = data
            },
            async testRequestByParam(id) {
                const {data} = await this.$http(`/api/search/${id}`);
                this.result = data
            }
        }
    }
</script>

<style lang="scss">
    .left{
        float: left;
    }
    .paramsDiv{
        margin-left: 20px;
        float: left;
    }
    .result{
        margin-top: 50px;
        border: 1px solid #eee;
        width: 70%;
        height: 500px;
        overflow: scroll;
    }
</style>
