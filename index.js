module.exports = async function EvalFunction(functionText) {
  functionText = `${functionText}`.trim();

  function Id() {
    function id() {
      return Math.random().toString(36).slice(2);
    }

    function dateId() {
      return Date.now().toString(36);
    }

    return `${id()}${dateId()}${id()}`;
  }

  const id = Id();
  const functionName = `_${id}`;
  const functionCode = `
      function ${functionName}() {
        return ${functionText}
      }
    `;

  const script = document.createElement('script');
  script.src = 'data:text/javascript,' + encodeURIComponent(functionCode);
  document.body.appendChild(script);

  await new Promise((resolve, reject) => {
    script.onload = resolve;
  });

  const fn = window[functionName]();

  return (...args) => {
    return fn(...args)
  }
}