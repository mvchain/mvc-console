import request from '@/utils/request'
export function pageList(data) {
  return request({
    url: '/user/list' + data,
    method: 'get'
  })
}
export function changeUser(data) {
  return request({
    url: '/user/' + data.id,
    method: 'put',
    data
  })
}
