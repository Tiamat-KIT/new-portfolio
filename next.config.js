/** @type {import('next').NextConfig} */
/* const { resolve } = require("path")
require("dotenv").config() */
const WindiCSSWebpackPlugin =  require("windicss-webpack-plugin") 

const nextConfig = {
  experimental: {
    serverActions: true,
    typedRoutes: true
  },
  images: {
    domains: ["lh3.googleusercontent.com","daisyui.com","images.microcms-assets.io"]
  },
  transpilePackages :[
    "@next-auth/firebase-adapter",
    "microcms-js-sdk",
  ],
  webpack(config){
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  }
}

module.exports = nextConfig
