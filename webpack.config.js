export default (webpackConfig, env) => {
    webpackConfig.module.rules.push({
        test: /\.md$/,
        use: [
            // {
            //     loader: 'babel-loader',
            //     options: {
            //         presets: ['env', 'react'],
            //     },
            // },
            {
                loader: require.resolve('./markdownLoader')
            }
        ]
    });
    return webpackConfig;
}