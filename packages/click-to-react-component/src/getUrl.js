/**
 * @param {Object} param
 * @param {string} param.editor
 * @param {string} param.pathToSource
 */
export function getUrl({ editor, pathToSource }) {
  // For IntelliJ IDEA and WebStorm, use different protocol
  const intelliJEditors = ['idea', 'webstorm']
  const isIntelliJ = intelliJEditors.includes(editor)
  const protocol = isIntelliJ ? `${editor}://open?file` : `${editor}://file`

  // Fix https://github.com/microsoft/vscode/issues/197319
  if (pathToSource[0] === '/') {
    return `${protocol}${pathToSource}`
  }

  return `${protocol}/${pathToSource}`
}
