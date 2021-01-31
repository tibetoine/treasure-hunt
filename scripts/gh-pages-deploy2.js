/* eslint-disable no-console */
const execa = require('execa')
const fs = require('fs')
;(async () => {
  try {
    await execa('git', ['switch', '-C', 'gh-pages'])
    // eslint-disable-next-line no-console
    console.log('Building started...')
    await execa('npm', ['run', 'build'])
    // Understand if it's dist or build folder
    const folderName = fs.existsSync('dist') ? 'dist' : 'build'
    await execa('cd', [folderName])
    await execa('git', ['init'])
    await execa('git', ['add', '-A'])
    await execa('git', ['commit', '-m', "'deploy'"])
    console.log('Pushing to gh-pages...')
    await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force'])

    console.log('Successfully deployed, check your settings')
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e.message)
    process.exit(1)
  }
})()
