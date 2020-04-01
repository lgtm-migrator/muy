/**
 * @param {Array|string} content
 */
const keywordsMeta = ({ content, type }) => {
  const allowedTypes = ["article", "book"]
  return {
    content: Array.isArray(content) ? content.join(",") : content,
    meta: "keywords",
    property: allowedTypes.includes(type) && `${type}:tag`,
  }
}

export default keywordsMeta
