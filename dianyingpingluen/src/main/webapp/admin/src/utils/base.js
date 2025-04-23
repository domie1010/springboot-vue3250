const base = {
    get() {
        return {
            url : "http://localhost:8080/dianyingpingluen/",
            name: "dianyingpingluen",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/dianyingpingluen/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "电影评论系统"
        } 
    }
}
export default base
