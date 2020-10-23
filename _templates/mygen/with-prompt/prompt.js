module.exports = [
  {
    type: 'input',
    name: 'folder',
    message: '请输入文件夹名: ',
    validate(value) {
      if (!value.length) {
        return '文件夹名不能为空！'
      }
      return true
    }
  },
  {
    type: 'input',
    name: 'name',
    message: '请输入根组件名称: ',
    validate(value) {
      if (!value.length) {
        return '根组件名称不能为空！'
      }
      return true
    }
  }
]
