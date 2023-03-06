/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { dev }) => {
    // Use Sass for CSS files
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              includePaths: ["./node_modules"],
            },
          },
        },
      ],
    });

    return config;
  },
};

