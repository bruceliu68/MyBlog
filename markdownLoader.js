const markdown = require('markdown-it')

module.exports = function (src) {
  const html = markdown().render(src)
  console.log(html);
  return (
    `<div className="markdown">${html}</div>`
  )
}
