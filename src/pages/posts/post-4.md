---
layout: ../../layouts/MarkdownPostLayout.astro
title: MarkDown Cheat Sheet
author: Astro Learner
description: "A quick reference to the Markdown syntax.!"
image:
    url: "https://www.markdownguide.org/assets/images/tool-icons/markdown-here.png"
    alt: "The Markdown logo on a dark background."
pubDate: 2022-07-15
tags: [".md", "markdown", "#", "documents"]
---


# Markdown Cheat Sheet


## Overview

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can't cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax/) and [extended syntax](https://www.markdownguide.org/extended-syntax/).

## Basic Syntax

These are the elements outlined in John Gruber's original design document. All Markdown applications support these elements.

| Element | Markdown Syntax |
| --- | --- |
| [Heading](https://www.markdownguide.org/basic-syntax/#headings) | `# H1`<br>`## H2`<br>`### H3` |
| [Bold](https://www.markdownguide.org/basic-syntax/#bold) | `**bold text**` |
| [Italic](https://www.markdownguide.org/basic-syntax/#italic) | `*italicized text*` |
| [Blockquote](https://www.markdownguide.org/basic-syntax/#blockquotes-1) | `> blockquote` |
| [Ordered List](https://www.markdownguide.org/basic-syntax/#ordered-lists) | `1. First item`<br>`2. Second item`<br>`3. Third item` |
| [Unordered List](https://www.markdownguide.org/basic-syntax/#unordered-lists) | `- First item`<br>`- Second item`<br>`- Third item` |
| [Code](https://www.markdownguide.org/basic-syntax/#code) | `` `code` `` |
| [Horizontal Rule](https://www.markdownguide.org/basic-syntax/#horizontal-rules) | `---` |
| [Link](https://www.markdownguide.org/basic-syntax/#links) | `[title](https://www.example.com)` |
| [Image](https://www.markdownguide.org/basic-syntax/#images-1) | `![alt text](image.jpg)` |

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

| Element | Markdown Syntax |
| --- | --- |
| [Table](https://www.markdownguide.org/extended-syntax/#tables) | `| Syntax | Description |`<br>`| ----------- | ----------- |`<br>`| Header | Title |`<br>`| Paragraph | Text |` |
| [Fenced Code Block](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks) | ```<br>{<br>  "firstName": "John",<br>  "lastName": "Smith",<br>  "age": 25<br>}<br>``` |
| [Footnote](https://www.markdownguide.org/extended-syntax/#footnotes) | `Here's a sentence with a footnote. [^1]`<br><br>`[^1]: This is the footnote.` |
| [Heading ID](https://www.markdownguide.org/extended-syntax/#heading-ids) | `### My Great Heading {#custom-id}` |
| [Definition List](https://www.markdownguide.org/extended-syntax/#definition-lists) | `term`<br>`: definition` |
| [Strikethrough](https://www.markdownguide.org/extended-syntax/#strikethrough) | `~~The world is flat.~~` |
| [Task List](https://www.markdownguide.org/extended-syntax/#task-lists) | `- [x] Write the press release`<br>`- [ ] Update the website`<br>`- [ ] Contact the media` |
| [Emoji](https://www.markdownguide.org/extended-syntax/#emoji) | `That is so funny! :joy:` |
| [Highlight](https://www.markdownguide.org/extended-syntax/#highlight) | `I need to highlight these ==very important words==.` |
| [Subscript](https://www.markdownguide.org/extended-syntax/#subscript) | `H~2~O` |
| [Superscript](https://www.markdownguide.org/extended-syntax/#superscript) | `X^2^` |