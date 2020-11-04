const fs = require('fs-extra')
const glob = require('globby')

glob.sync('src/shared/**/*.ts').forEach((file) => {
  fs.copy(file, file.replace(/^src\//, 'src/node/'))
  fs.copy(file, file.replace(/^src\//, 'src/client/'))
})
