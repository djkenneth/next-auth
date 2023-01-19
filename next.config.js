const path = require("path");

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "res.cloudinary.com", "costpriceuae.com", "cdn.shopify.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
