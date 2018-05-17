import checkSize from './checkSize';

const breakpointList = ['xs', 'sm', 'md', 'lg', 'xl'];

/**
 * Determines whether passed string is a parsable expression
 */
function isAnExpression(str) {
  return str.charAt(0) === '<' || str.charAt(0) === '>';
}

/**
 * Returns true if currently active breakpoint matches the expression
 */
function isAnyActive(acceptedBreakpoints) {
  let found = false;
  const currentBreakPpoint = checkSize();
  acceptedBreakpoints.forEach((acceptedBreakpoint) => {
    if (acceptedBreakpoint === currentBreakPpoint) {
      found = true;
    }
  });
  return found;
}

/**
 * Splits the expression in into <|> [=] alias
 */
function splitExpression(str) {
  // Used operator
  const operator = str.charAt(0);
  // Include breakpoint equal to alias?
  const orEqual = str.charAt(1) === '=';

  /**
   * Index at which breakpoint name starts.
   *
   * For:  >sm, index = 1
   * For: >=sm, index = 2
   */
  const index = 1 + (orEqual ? 1 : 0);

  /**
   * The remaining part of the expression, after the operator, will be treated as the
   * breakpoint name to compare with
   */
  const breakpointName = str.slice(index);

  return {
    operator,
    orEqual,
    breakpointName,
  };
}

/**
 * Determines whether current breakpoint matches the expression given
 */
function isMatchingExpression(str) {
  const expression = splitExpression(str);

  // Get index of sought breakpoint in the list
  const pos = breakpointList.indexOf(expression.breakpointName);

  // Breakpoint found
  if (pos !== -1) {
    let start = 0;
    let end = 0;

    /**
     * Parsing viewport.is('<=md') we interate from smallest breakpoint ('xs') and end
     * at 'md' breakpoint, indicated in the expression,
     * That makes: start = 0, end = 2 (index of 'md' breakpoint)
     *
     * Parsing viewport.is('<md') we start at index 'xs' breakpoint, and end at
     * 'sm' breakpoint, one before 'md'.
     * Which makes: start = 0, end = 1
     */
    if (expression.operator === '<') {
      start = 0;
      end = expression.orEqual ? pos + 1 : pos;
    }
    /**
     * Parsing viewport.is('>=sm') we interate from breakpoint 'sm' and end at the end
     * of breakpoint list.
     * That makes: start = 1, end = undefined
     *
     * Parsing viewport.is('>sm') we start at breakpoint 'md' and end at the end of
     * breakpoint list.
     * Which makes: start = 2, end = undefined
     */
    if (expression.operator === '>') {
      start = expression.orEqual ? pos : pos + 1;
      end = undefined;
    }

    const acceptedBreakpoints = breakpointList.slice(start, end);
    // console.log('acceptedBreakpoints: ', acceptedBreakpoints);

    return isAnyActive(acceptedBreakpoints);
  }
  return false;
}

export default function is(str) {
  if (isAnExpression(str)) {
    return isMatchingExpression(str);
  }
  return false;
}
