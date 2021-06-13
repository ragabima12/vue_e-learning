import Axios from 'axios'

Axios.defaults.withCredentials = process.env.VUE_APP_BUILD === 'prod' && true || false
Axios.defaults.baseURL = process.env.VUE_APP_DEV_API_HOST

const Login = async (bodyData) => {
  try{
    const result = await Axios({
      method: 'POST',
      url: '/auth/login',
      data: bodyData
    })
    return result.data
  }catch(exception){
    return exception ?. response.data || {}
  }
}

const Register = async (bodyData) => {
  try{
    const result = await Axios({
      method: 'POST',
      url: '/auth/register',
      data: bodyData
    })
    return result.data
  }catch(exception){
    return exception ?. response.data || {}
  }
}

const VerifyToken = async (bodyHeaders) => {
  try{
    const result = await Axios({
      method: 'POST',
      url: '/auth/token',
      headers: bodyHeaders
    })
    return result.data
  }catch(exception){
    return exception ?. response.data || {}
  }
}

const UpdateToken = async (bodyHeaders) => {
  try{
    const result = await Axios({
      method: 'GET',
      url: '/auth/token',
      headers: bodyHeaders
    })
    return result.data
  }catch(exception){
    return exception ?. response.data || {}
  }
}

const GetUser = async(bodyHeaders) => {
  try{
    const result = await Axios({
      method: 'GET',
      url: '/user',
      headers: bodyHeaders
    })
    return result.data
  }catch(exception){
    return exception ?. response.data || {}
  }
}

export default {
  Login,
  Register,
  VerifyToken,
  UpdateToken,
  GetUser
}