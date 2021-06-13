export default {

  async created(){
    const isVerifiedToken = await this.$store.dispatch('verifyTokenAction')
    const userData = await this.$store.dispatch('getUserAction')
    const userFetchFail = !!userData ?. error
    const currentPath = this.$router.history.current.path

    if( !isVerifiedToken && userFetchFail ) return this.$router.push('/login').catch(exception => exception)
    
    const { data: user } = userData
    if( currentPath === '/login' || currentPath === '/' ){
      switch(user.role.role_label){
        case 'parent':
          this.$router.push('/dashboard/parent')
          break
        case 'teacher':
          this.$router.push('/dashboard/teacher')
          break
      }
    }
  }

}