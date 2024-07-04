
import request from './fetch'

export function getQuestionById(id: string) {
  return request({
    url: `/api/question/${id}`,
    method: 'get',
  })
}
