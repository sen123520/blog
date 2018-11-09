
//引入mockjs
const Mock = require('mockjs')

//使用mockjs模拟数据
Mock.mock('/api/auth/signup', (req, res) => {
    return {
        data: ['a', 'b']
    }
})
Mock.mock('/auth/signin_by_username', (req, res) => {
    return {
        data: ['a', 'b']
    }
})
Mock.mock('/auth/signin_by_phonenumber', (req, res) => {
    return {
        data: ['a', 'b']
    }
})
Mock.mock('/auth/verificate', (req, res) => {
    return {
        data: ['a', 'b']
    }
})
Mock.mock('/users', (req, res) => {
    return {
        data: ['a', 'b']
    }
})
Mock.mock('/posts', (req, res) => {
    return {
        data: ['a', 'b']
    }
})
Mock.mock('/topics', "get", (req, res) => {
    return {
        data: ['a', 'b']
    }
})
Mock.mock('/categories', "get", (req, res) => {
    return {
        status: 200,
        data: ['a', 'b'],
        msg: ""
    }
})
Mock.mock('/likes', (req, res) => {
    return {
        data: ['a', 'b']
    }
})
Mock.mock('/comments', (req, res) => {
    return {
        data: ['a', 'b']
    }
})