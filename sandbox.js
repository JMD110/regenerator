var input = CodeMirror(function(input) {
  document.getElementById("inputWrapper").appendChild(input);
}, {
  value: [
    "function *range(max, step) {",
    "  var count = 0;",
    "  step = step || 1;",
    "",
    "  for (var i = 0; i < max; i += step) {",
    "    count++;",
    "    yield i;",
    "  }",
    "",
    "  return count;",
    "}",
    "",
    "var gen = range(20, 3), info;",
    "",
    "while (!(info = gen.next()).done) {",
    "  console.log(info.value);",
    "}",
    "",
    'console.log("steps taken: " + info.value);'
  ].join("\n"),
  mode: "javascript",
  indentUnit: 2,
  autofocus: true
});

var output = CodeMirror(function(output) {
  document.getElementById("outputWrapper").appendChild(output);
}, {
  value: regenerator(input.getValue()),
  readOnly: true
});

var doc = document;
var head = doc.documentElement.firstChild;
var delayTimer;
var delayMS = 100;

CodeMirror.on(input.doc, "change", function(instance) {
  clearTimeout(delayTimer);
  delayTimer = setTimeout(function() {
    try {
      output.setValue(regenerator(instance.getValue()));
    } catch (err) {
      console.log(err);
    }
  }, delayMS);
});

function toggleComparison(a) {
  var ul = document.getElementById("comparison");
  ul.setAttribute("class", ul.className.match(/\bhidden\b/) ? "" : "hidden");

  var tn = document.getElementById("punctuation").firstChild;
  tn.nodeValue = tn.nodeValue.replace(/^\s*([\.:])/, function(_, punctuation) {
    return punctuation === "." ? ":" : ".";
  });
}

function reportBug() {
  var doc = document;
  var form = doc.createElement("form");

  var title = doc.createElement("input");
  title.setAttribute("type", "hidden");
  var body = title.cloneNode(false);

  title.setAttribute("name", "title");
  title.setAttribute("value", "Faulty sandbox example");
  form.appendChild(title);

  body.setAttribute("name", "body");
  body.setAttribute("value", [
    "This code does not behave as expected:",
    "```js",
    input.getValue(),
    "```"
  ].join("\n"));
  form.appendChild(body);

  form.setAttribute("action", "https://github.com/facebook/regenerator/issues/new");
  form.setAttribute("method", "GET");
  form.setAttribute("target", "_blank");

  form.submit();
}

function evaluateOutput() {
  var script = doc.createElement("script");
  script.appendChild(doc.createTextNode(output.getValue()));
  head.appendChild(script);
}

CodeMirror.on(document, "keydown", function(event) {
  if (event.ctrlKey && event.which === 13) {
    event.preventDefault();
    evaluateOutput();
  }
});