# jQuery Tabs
Really Simple jQuery plugin for tabbed content

## Releases

#### 1.0 Initial release
---

## Features
+ Only really simple markup needed
+ Basic api, just instantiate
+ No need for `id` tags on each element
+ Optionally override the class names for the tab header and tab content

### Notes

* Make sure the same number of tab headings and groups exist.
* Make sure the tab headings and content sections are in the same listed order

## Example

1. Add an `id` on the container element
1. Use (or override) the default `.tab` class on the header
1. Use (or override) the default `.tab-content` class on the conetent section
1. Add the `active` class to the content section you want shown by default
1. Use the container `id` to instantiate a new instance of the `tabgroup`.

```html
<body>
    <div id="tab-container">
        <div id="tab-header">
            <div id="tab-1" class="tab">Tab 1</div>
            <div id="tab-2" class="tab">Tab 2</div>
            <div id="tab-3" class="tab">Tab 3</div>
        </div>
        <div id="tab-content-area">
            <div class="tab-content active">Tab Content 1</div>
            <div class="tab-content">Tab Content 2</div>
            <div class="tab-content">Tab Content 3</div>
        </div>
    </div>

    <script>
    // Example usage
    $(document).ready(function ($) {
        // default usage
        $('#tab-container').tabgroup();

        // classname override for tab
        //$('#tab-container').tabgroup({tabClass:'.tab1'});
    });
    </script>
</body>
```
