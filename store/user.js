
export const state = ()=>({
       // 登录后的数据，包含token和user对象
    userInfo:{ }
})

export const mutations = {
    //第一个参数必须是state  ，第二个参数是传递进来的参数
    userName (state,data){
        state.userInfo = data 
    }
}

export const actions = {
     login(store,data){
        return this.$axios({
            url:'/accounts/login',
            method:'post',
            data
        }).then(res=>{
          this.$router.back()
           store.commit('userName',res.data)
           return true
        })
    },
    //发送验证码请求
    sendCaptcha(store,data){
        return this.$axios({
            url:'/captchas',
            method:'POST',
            data:{
                tel:data
            }
        })
    }
}