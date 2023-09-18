const { default: LoggerContext } = require("context/Logger/LoggerContext");
const { useContext } = require("react");

/**
 * @typedef {Object} logger
 * @prop {Function} trace
 * @prop {Function} debug
 * @prop {Function} info
 * @prop {Function} warn
 * @prop {Function} error
 */

/**
 *
 * @returns {logger}
 */
function useLogger() {
  const logger = useContext(LoggerContext);
  return logger;
}

export default useLogger;
