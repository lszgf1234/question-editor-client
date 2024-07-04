import request from './fetch'

// 提交答卷
export async function postAnswer(answerInfo: any) {
  const url = '/api/answer'
  return request({
    url,
    method: 'post',
    data: answerInfo,
  })
}
