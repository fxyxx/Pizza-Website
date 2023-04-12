const http = require('http')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'nakoskin.buss@gmail.com',
    pass: 'egdssoqnlwwgorvg',
  },
})

const server = http.createServer((req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, PUT, DELETE, OPTIONS'
    )
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.statusCode = 200
    res.end()
  } else if (req.method === 'POST' && req.url === '/data') {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk.toString()
    })
    req.on('end', () => {
      const data = JSON.parse(body)
      console.log(data)

      const mailOptions = {
        from: 'nakoskin.buss@gmail.com',
        to: 'vovkhik.games@gmail.com',
        subject: 'Your order',
        html: data,
      }
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error)
          res.setHeader('Content-Type', 'application/json')
          res.end(
            JSON.stringify({ success: false, message: 'Mail sending error' })
          )
        } else {
          console.log('Mail send: ' + info.response)
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: true }))
        }
      })
    })
  } else {
    res.statusCode = 404
    res.end()
  }
})

server.listen(8080, () => {
  console.log('Server start on 8080')
})
