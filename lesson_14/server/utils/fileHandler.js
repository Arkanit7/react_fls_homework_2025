const fs = require('fs').promises

exports.readData = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8')
    return JSON.parse(data)
  } catch (err) {
    return []
  }
}

exports.writeData = async (filePath, data) => {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8')
}
