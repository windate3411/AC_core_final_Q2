const express = require('express')
const app = express()
const port = 3000

// middleware
app.use(function (req, res, next) {
  const start_time = new Date()
  res.on('finish', () => {
    const current_time = new Date()
    const yy = current_time.getFullYear()
    const mm = current_time.getMonth() + 1
    const dd = current_time.getDate()
    const hh = current_time.getHours()
    const mins = current_time.getMinutes() < 10 ? '0' + current_time.getMinutes() : current_time.getMinutes()
    const secs = current_time.getSeconds() < 10 ? '0' + current_time.getSeconds() : current_time.getSeconds()
    const fullTime = `${yy}-${mm}-${dd} ${hh}:${mins}:${secs}`
    console.log(`${fullTime} | ${req.method} from ${req.originalUrl} total time:${current_time.getTime() - start_time.getTime()}ms`)
  })
  next();
})

// 列出全部 Todo
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

// 新增一筆 Todo 頁面
app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

// 顯示一筆 Todo 的詳細內容
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

// 新增一筆  Todo
app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.delete('/:id/delete', (req, res) => {
  res.send('刪除 Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})