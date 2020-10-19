按需加载 antd 可参考https://www.jianshu.com/p/bb6bf56478a9 1.安装 npm install react-app-rewired customize-cra babel-plugin-import -D -D 代表这三个库为开发依赖 2.修改 package.json 中的
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
},
// "start": "node scripts/start.js",
// "build": "node scripts/build.js",
// "test": "node scripts/test.js"
为
"scripts": {
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test",
"eject": "react-app-rewired eject"
}, 3.在根目录创建 config-overrides.js 文件 写入以下代码
const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
fixBabelImports('import', {
libraryName: 'antd',
libraryDirectory: 'es',
style: 'css',
}),
);
