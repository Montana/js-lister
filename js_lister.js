function listExternalScripts() {
  const scripts = [...document.querySelectorAll('script[src]')];
  return scripts.map(script => script.src);
}

function listInlineScripts() {
  const scripts = [...document.querySelectorAll('script:not([src])')];
  return scripts.map(script => script.innerText.substring(0, 50) + '...');
}

console.log('External Scripts:', listExternalScripts());
console.log('Inline Scripts:', listInlineScripts());
