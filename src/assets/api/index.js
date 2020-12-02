import { POST } from '../common/utils'
export async function searchCgi(value) {
  try {
    const res = await POST('category/getlocalbook', {
      keyword: value,
      pageNo: 1,
      pageSize: 10
    })
    return res
  } catch ({code, type, message, url}) {
    return {
      res: '系统方面错误'
    }
  }
}