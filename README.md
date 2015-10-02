Simple JavaScript tooltip for HTML elements. No extra CSS required.

##### Browser support

Chrome 7, Firefox 4.0, IE9 Opera 11.60, Safari 5.1.4. 
The browser support can be extended to IE8 and friends if you have a polyfill for [`Function.prototype.bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

##### Example

```html
<!-- Include the method in your library. -->
<script src="/js/tooltip.js"></script>
```

You can send the content as a string:

```javascript
new tooltip({
  elem: document.getElementById('myLinkId'),
  content: '<div>My HTML content here.</div>'
});
```

You can send the content as a DOM node:

```javascript
new tooltip({
  elem: document.getElementById('myLinkId'),
  content: document.getElementById('myLinkTooltipContent')
});
```

##### Theming

```html
<div class="tooltip">
   <div class="tooltip-content">
      <!-- Your content -->
   </div>
</div>
```

##### Screenshots

<img src="http://assets.ghita.org/projects/tooltip.js.gif" border="0">

##### Contribute

<a href="https://github.com/serbanghita/tooltip/issues/new">Add an issue</a> or fork the project and submit a pull request. <br>
If this script helped you save a lot of developing time, I really appreciate any donations
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=serbanghita%40gmail%2ecom&lc=US&item_name=Serban%20Ghita%20%28GitHub%29&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0"></a>.
