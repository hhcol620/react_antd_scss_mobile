/* eslint-disable no-undef */
const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  useEslintRc,
  addWebpackAlias,
  addWebpackPlugin
} = require('customize-cra')

const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const isEnvProduction = process.env.NODE_ENV === 'production'

// 生产模式下优化文件大小
const addCompression = () => (config) => {
  if (isEnvProduction) {
    config.plugins.push(
      // gzip压缩
      new CompressionWebpackPlugin({
        test: /\.(css|js)$/,
        // 只处理比1kb大的资源
        threshold: 1024,
        // 只处理压缩率低于90%的文件
        minRatio: 0.9
      })
    )
  }

  return config
}

// 查看打包后各包大小
const addAnalyzer = () => (config) => {
  if (process.env.ANALYZER) {
    config.plugins.push(new BundleAnalyzerPlugin())
  }

  return config
}

module.exports = override(
  // 提供支持装饰器的方式编写代码
  addDecoratorsLegacy(),
  // 按需引入andtUI组件
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  // 配置less  设置主题色   需要安装less  less-loader
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#3498db' }
  }),
  // 配置eslint   统一项目规范化
  useEslintRc(),
  addCompression(),
  addAnalyzer(),
  addWebpackPlugin(
    // 终端进度条显示
    new ProgressBarPlugin()
  ),
  // 路径地址的重命名
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src')
  })
)
