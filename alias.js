const { readdirSync } = require('fs')
const { join } = require('path')
const chalk = require('chalk')
const headPkgList = []

const pkgList = readdirSync(join(__dirname, './packages')).filter(
    pkg => pkg.charAt(0) !== '.' && !headPkgList.includes(pkg)
)
const alias = pkgList.reduce((pre, pkg) => {
    pre[`@dongdong-components/${pkg}`] = join(__dirname, './packages', pkg, 'src/main.ts')
    return {
        ...pre
    }
}, {})

console.log(`🌼 alias list \n${chalk.blue(Object.keys(alias).join('\n'))}`)

module.exports = alias
