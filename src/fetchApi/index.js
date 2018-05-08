import axios from 'axios'

export function get(url, params = '') {
  let _params = params ? {params:params} : {}
  let res = axios(url,_params).then((res) => {
      if(res.data && res.data.code == 0) {
          return Promise.resolve(res.data)
      }else{
          let error = new Error('User doesn\'t exist')
          return Promise.reject(error)
      }

  })
  return res
}