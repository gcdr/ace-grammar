ace-grammar
===========

__Transform a JSON grammar into an ACE syntax-highlight parser__



A simple and light-weight (~ 30kB minified, ~ 11kB zipped) [ACE](https://github.com/ajaxorg/ace) add-on

to generate syntax-highlight parsers (ace modes) from a grammar specification in JSON format.


See also:  [codemirror-grammar](https://github.com/foo123/codemirror-grammar) , [prism-grammar](https://github.com/foo123/prism-grammar)

**Note:** The invariant codebase for all the `*-grammar` add-ons resides at [editor-grammar](https://github.com/foo123/editor-grammar) repository (used as a `git submodule`)



###Contents

* [Live Example](http://foo123.github.io/examples/ace-grammar)
* [Todo](#todo)
* [Features](#features)
* [How To use](#how-to-use)
* [API Reference](/api-reference.md)
* [Grammar Reference](https://github.com/foo123/editor-grammar/blob/master/grammar-reference.md)
* [Other Examples](#other-examples)

[![Build your own syntax-highlight mode on the fly](/test/screenshot.png)](http://foo123.github.io/examples/ace-grammar)


###Todo

Code Indentation, Behaviours, Matching (ACE default), Code Folding is not handled <del>based on existing ACE folders (if available)</del>

* handle arbitrary, user-defined, code `folding` in the `grammar` specification (e.g via `fold action` tokens)
* handle arbitrary, user-defined, code `(de-)indentation` in the `grammar` specification (e.g via `indent action` tokens)
* handle arbitrary, user-defined, code `matching` (e.g `brackets`, `tags`, etc..) in the `grammar` specification (e.g via `match action` tokens)
* handle arbitrary, user-defined, `(operator) precedence` relations in the `grammar` specification (e.g via `precedence action` tokens)
* handle arbitrary, user-defined, `local/global/scoped` relations in the `grammar` specification (e.g via `scope action` tokens)
* and so on..
* enable grammar add-on to pre-compile a grammar specification directly into mode source code, so it can be used without the add-on as standalone mode [TODO, maybe]


###Features

* A [`Grammar`](https://github.com/foo123/editor-grammar/blob/master/grammar-reference.md) can **extend other `Grammars`** (so arbitrary `variations` and `dialects` can be handled more easily)
* `Grammar` includes: [`Style Model`](https://github.com/foo123/editor-grammar/blob/master/grammar-reference.md#style-model) , [`Lex Model`](https://github.com/foo123/editor-grammar/blob/master/grammar-reference.md#lexical-model) and [`Syntax Model` (optional)](https://github.com/foo123/editor-grammar/blob/master/grammar-reference.md#syntax-model), plus a couple of [*settings*](https://github.com/foo123/editor-grammar/blob/master/grammar-reference.md#extra-settings) (see examples)
* **`Grammar` specification can be minimal**, defaults will be used (see example grammars)
* [`Grammar.Syntax Model`](https://github.com/foo123/editor-grammar/blob/master/grammar-reference.md#syntax-model) can enable highlight in a more *context-specific* way, plus detect possible *syntax errors* and display appropriate *error messages* (see below)
* [`Grammar.Syntax Model`](https://github.com/foo123/editor-grammar/blob/master/grammar-reference.md#syntax-model) can contain **recursive references** (see `/test/grammar-js-recursion.html`)
* [`Grammar.Syntax Model`](https://github.com/foo123/editor-grammar/blob/master/grammar-reference.md#syntax-pegbnf-like-notations) can be (fully) specificed using [`PEG`](https://en.wikipedia.org/wiki/Parsing_expression_grammar)-like notation or [`BNF`](https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_Form)-like notation  (**NEW feature**)
* `Grammar` can define [*action* tokens](https://github.com/foo123/editor-grammar/blob/master/grammar-reference.md#action-tokens) to perform *complex context-specific* parsing functionality, including **associated tag matching** and **duplicate identifiers** (see for example `xml.grammar` example) (**NEW feature**)
* Generated highlight modes can support **toggle comments** and **keyword autocompletion** functionality if defined in the grammar
* Generated highlight modes can support **lint-like syntax-annotation** functionality generated from the grammar
* Generated parsers are **optimized for speed and size**
* Can generate a syntax-highlight parser from a grammar **interactively and on-the-fly** ( see example, http://foo123.github.io/examples/ace-grammar )


###How to use:

See working examples under [/test](/test) folder.

An example for XML:


```javascript
// 1. a partial xml grammar in simple JSON format
var xml_grammar = {
    
// prefix ID for regular expressions, represented as strings, used in the grammar
"RegExpID"                          : "RE::",

// Style model
"Style"                             : {
    
     "declaration"                  : "keyword"
    ,"doctype"                      : "string"
    ,"meta"                         : "string"
    ,"comment"                      : "comment"
    ,"cdata"                        : "string"
    ,"atom"                         : "string"
    ,"open_tag"                     : "keyword"
    ,"close_tag"                    : "keyword"
    ,"auto_close_open_tag"          : "keyword"
    ,"close_open_tag"               : "keyword"
    ,"attribute"                    : "variable"
    ,"number"                       : "constant.numeric"
    ,"string"                       : "string"
    ,"error"                        : "invalid"

},

// Lexical model
"Lex"                               : {
     
     "comment:comment"              : ["<!--", "-->"]
    ,"declaration:block"            : ["<?xml", "?>"]
    ,"doctype:block"                : ["RE::/<!doctype\\b/i", ">"]
    ,"meta:block"                   : ["RE::/<\\?[_a-zA-Z][\\w\\._\\-]*/", "?>"]
    ,"cdata:block"                  : ["<![CDATA[", "]]>"]
    ,"open_tag"                     : "RE::/<([_a-zA-Z][_a-zA-Z0-9\\-]*)/"
    ,"close_tag"                    : "RE::/<\\/([_a-zA-Z][_a-zA-Z0-9\\-]*)>/"
    ,"attribute"                    : "RE::/[_a-zA-Z][_a-zA-Z0-9\\-]*/"
    ,"string:line-block"            : [["\""], ["'"]]
    ,"number"                       : ["RE::/[0-9]\\d*/", "RE::/#[0-9a-fA-F]+/"]
    ,"atom"                         : ["RE::/&#x[a-fA-F\\d]+;/", "RE::/&#[\\d]+;/", "RE::/&[a-zA-Z][a-zA-Z0-9]*;/"]
    ,"text"                         : "RE::/[^<&]+/"
    
    // actions
    ,"tag_ctx:action"               : {"context":true}
    ,"\\tag_ctx:action"             : {"context":false}
    ,"unique_id:action"             : {"unique":["xml", "$1"],"msg":"Duplicate id value \"$0\""}
    ,"unique_att:action"            : {"unique":["tag", "$0"],"msg":"Duplicate attribute \"$0\"","in-context":true}
    ,"tag_opened:action"            : {"push":"<$1>","ci":true}
    ,"tag_closed:action"            : {"pop":"<$1>","ci":true,"msg":"Tags \"$0\" and \"$1\" do not match"}
    ,"tag_autoclosed:action"        : {"pop":null}
    ,"out_of_place:error"           : "\"$2$3\" can only be at the beginning of XML document"
    
},
    
// Syntax model (optional)
"Syntax"                            : {
     
     "tag_att"                      : "'id'.attribute unique_att '=' string unique_id | attribute unique_att '=' (string | number)"
    ,"start_tag"                    : "open_tag tag_ctx tag_opened tag_att* ('>'.tag | '/>'.tag tag_autoclosed) \\tag_ctx"
    ,"end_tag"                      : "close_tag tag_closed"
    ,"xml"                          : "(^^1 declaration? doctype?) (declaration.error out_of_place | doctype.error out_of_place | comment | meta | cdata | start_tag | end_tag | atom | text)*"
    
},
    
// what to parse and in what order
"Parser"                            : [ ["xml"] ]

};

// 2. parse the grammar into an ACE syntax-highlight mode
var xml_mode = AceGrammar.getMode( xml_grammar );

// 3. use it with ACE
var editor = ace.edit("editor");
editor.setValue( document.getElementById("code").value, -1 );
editor.getSession().setMode( xml_mode );

```


Result:

![xml-grammar-1](/test/grammar-xml-annotations-1.png)
![xml-grammar-2](/test/grammar-xml-annotations-2.png)



###Other Examples:


![js-recursive-grammar](/test/grammar-js-recursion.png)
![js-recursive-grammar](/test/grammar-js-recursion-2.png)


![css-grammar](/test/grammar-css.png)


![python-grammar](/test/grammar-python.png)


![php-grammar](/test/grammar-php.png)

