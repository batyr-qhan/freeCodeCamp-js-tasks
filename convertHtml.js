function convertHTML(str) {

    let ampersand = /&/
    let less = /</g
    let greater = />/
    let singleQuote = /'/
    let doubleQuote = /"/g

    return str.replace(ampersand, '&amp;')
        .replace(less, '&lt;')
        .replace(greater, "&gt;")
        .replace(singleQuote, '&apos;')
        .replace(doubleQuote, '&quot;')
}

convertHTML("Dolce < Gabbana");

// еще лучший вариант

function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// test here
convertHTML("Dolce & Gabbana");