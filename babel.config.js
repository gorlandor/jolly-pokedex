module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-react-jsx',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-proposal-async-generator-functions',
        '@babel/plugin-transform-async-to-generator',
        '@babel/plugin-transform-regenerator',
    ],
};
