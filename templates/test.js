const checkArrowMatch = (arrows) => {
  let stack = [];

  for (let i = 0; i < arrows.length; i++) {
    if (arrows[i] === '(') {
      stack.push(arrows[i]);
    } else if (arrows[i] === ')') {
      if (stack.length === 0) return false;
      stack.pop(i);
    }
  }

  return stack.length === 0;
};
