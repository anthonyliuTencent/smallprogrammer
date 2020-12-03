import { POST } from '../common/utils'
export async function searchCgi(value) {
  try {
    const res = await POST('category/getlocalbook', {
      keyword: value
    })
    return res
  } catch ({code, type, message, url}) {
    return {
      res: '系统方面错误'
    }
  }
}
export async function getBookDetail(value) {
  try {
    const res = await POST('book/getbookdetail2', {
      book_id: value
    })
    return res
  } catch ({code, type, message, url}) {
    return {
      res: '系统方面错误'
    }
  }
}
export async function getChapterContent(bookId, chapterId) {
  try {
    const res = await POST('book/getchaptercontent', {
      book_id: bookId,
      chapter_id: chapterId
    })
    return res
  } catch ({code, type, message, url}) {
    return {
      res: '系统方面错误'
    }
  }
}
export async function getRecordBook() {
  try {
    const res = await POST('book/getrecordbook', {
    })
    return res
  } catch ({code, type, message, url}) {
    return {
      res: '系统方面错误'
    }
  }
}
