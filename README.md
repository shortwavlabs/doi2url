# doi2url

Small utility to convert a DOI link to the actual URL.

## Use Cases

This utility can be useful for scraping scientific papers, as some scraping tools do not handle redirections.

## Usage

```javascript
import { doi2url } from '@swlabs/doi2url'

await doi2url('https://doi.org/10.1038/s41591-024-03173-6')
```
