const Regex = {
  EMAIL: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
  DOMAIN: /^((?!-)[A-Za-z0-9-]{1, 63}(?<!-)\\.)+[A-Za-z]{2, 6}$/,
  DOMAIN_PATH: /(\/[^/]+)+/,
};

export default Regex;
