
const NumericRange = (props, propName) => { // eslint-disable-line consistent-return
  const propValue = props[propName];
  if (
    !Array.isArray(propValue) ||
    propValue.length !== 2 ||
    !propValue.every(Number.isInteger) ||
    propValue[0] > propValue[1]
  ) {
    return new Error(`${propName} needs to be an array of two numbers sorted in ascending order`);
  }
};

export default NumericRange;
