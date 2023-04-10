// Function to replace all katex-mathml elements with their raw KaTeX code
function replaceKatexElements() {
  // Find all katex-mathml elements on the page
  const katexElements = document.querySelectorAll('.katex-mathml');

  // Iterate through each katex-mathml element
  katexElements.forEach((katexElement) => {
    // Find the annotation element inside the katex-mathml element
    const annotationElement = katexElement.querySelector('annotation');

    // Get the raw KaTeX code from the annotation element's text content
    const rawKatexCode = annotationElement.textContent;

    // Create a new text node containing the raw KaTeX code
    const rawKatexTextNode = document.createTextNode(rawKatexCode);

    // Replace the parent element of katex-mathml with the raw KaTeX text node
    // This will remove both the katex-mathml element and the formatted KaTeX element
    katexElement.parentElement.parentElement.replaceChild(rawKatexTextNode, katexElement.parentElement);
  });
}

// Call the function to replace all katex-mathml elements on the page
replaceKatexElements();
