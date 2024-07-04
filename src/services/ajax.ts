
// const HOST = 'http://localhost:3001' // Mock 的 host
const HOST = 'http://39.106.130.35:3001/' // Mock 的 host

export async function get(url: string) {
  const res = await fetch(`${HOST}${url}`, {
    method: 'get',
  })
  console.log('2221221', res)
  const data = res.json()
  return data
}

export async function post(url: string, body: any) {
  const res = await fetch(`${HOST}${url}`, {
    method: 'post',
    body: JSON.stringify(body)
  })
  const data = res.json()
  return data
}
