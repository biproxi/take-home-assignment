module.exports = (api) => {
    api.cache(true);
    const presets = [
        'next/babel',
        '@emotion/babel-preset-css-prop',
    ];
    const plugins = [
        '@emotion',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
    ];
    return {
        presets,
        plugins,
    };
};