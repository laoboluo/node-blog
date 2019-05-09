// 返回处理模型
class BaseModel {
  constructor(data, message) {
    if (typeof data === 'string') {
      this.message = data
      data = null
      message = null
    }
    if (data) {
      this.data = data
    }
    if (message) {
      this.message = message
    }
  }
}
class ErrModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    this.errno = -1
  }
}
class SuccessModel extends BaseModel {
  constructor(data, message) {
    super(data, message)
    console.log('-----', this.data)
    this.errno = 0
  }
}
module.exports = {
  SuccessModel,
  ErrModel
}
