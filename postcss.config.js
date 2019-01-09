module.exports = {
    plugins: [
        require('precss'),
        require('autoprefixer'),
        require('postcss-csso'),
        require('postcss-font-magician')({ display: 'swap' })
    ]
}