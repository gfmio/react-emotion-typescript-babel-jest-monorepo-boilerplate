module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        targets: {
          chrome: "58",
          ie: "11"
        },
        corejs: 3
      }
    ],
    "@babel/preset-react"
  ],
  plugins: ["emotion"]
};
