
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['2W2zTvowY8fGoquYQqbyYm'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  