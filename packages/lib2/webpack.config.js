const path = require('path');

module.exports = (env, argv) => {
  return {
    mode: argv.mode || 'development',
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      libraryTarget: 'umd', // Or any format suitable for your needs
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        // TypeScript loader
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    externals: { // Use this to avoid bundling dependencies into your library, if necessary
      react: 'react' // Example
    }
  }
};
