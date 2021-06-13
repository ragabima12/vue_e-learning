export default {

  async created(){
    const isVerifiedToken = await this.$store.dispatch('verifyTokenAction')
    const userData = await this.$store.dispatch('getUserAction')
    const userFetchFail = !!userData ?. error
    const currentPath = this.$router.history.current.path

    if( !isVerifiedToken && userFetchFail ) return this.$router.push('/login').catch(exception => exception)
    
    const { data: user } = userData
    const userRole = user.role.role_label

    const inParentPage = currentPath.indexOf('/parent') > -1
    const inTeacherPage = currentPath.indexOf('/teacher') > -1

    // If not in correct page role, redirect to login
    if( (inParentPage && userRole !== 'parent') || (inTeacherPage && userRole !== 'teacher') ) return this.$router.push('/login')

    if( currentPath === '/login' || currentPath === '/' ){
      switch(userRole){
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