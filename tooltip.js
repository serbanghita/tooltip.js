/**
MIT License
===========

Copyright (c) 2013 Serban Ghita <serbanghita@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.

*/
(function(doc){

    var tooltip = function(settings){

      this.settings = settings;

      if(!this.settings.content ||
         !this.settings.elem){ return false; }

      this.create();
      this.setContent();
      this.addToPage();
      this.bindElem();

    };

    tooltip.prototype.isDOM = function( node ){
      return typeof node === "object" && "nodeType" in node && node.nodeType === 1;
    };

    tooltip.prototype.uuid = function(){
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    };

    tooltip.prototype.create = function(){

      this.tooltipNode = doc.createElement('div');
      this.tooltipNode.id = this.settings.id || 't' + this.uuid() + this.uuid();
      this.tooltipNode.setAttribute('style', 'display:none;');
      this.tooltipNode.className = 'tooltip';
      this.tooltipNode.innerHTML = '<div class="tooltip-content"></div>';

      return this.tooltipNode;

    };

    tooltip.prototype.setContent = function(){

      if( this.isDOM(this.settings.content) ){
        var newNode           = this.settings.content.cloneNode(true);
        newNode.style.display = '';
        newNode.id            = null;
        this.tooltipNode.getElementsByTagName('div')[0].appendChild( newNode );

        return true;
      }

      if( typeof this.settings.content === 'string' ){
        this.tooltipNode.getElementsByTagName('div')[0].innerHTML = this.settings.content;

        return true;
      }

      return false;

    };

    tooltip.prototype.bindEvent = function(elem, eventType, eventHandle){

      // Bind the global event handler to the element
      if ( elem.addEventListener ) {
        elem.addEventListener( eventType, eventHandle, false );
      } else if ( elem.attachEvent ) {
        elem.attachEvent( "on" + eventType, eventHandle );
      }

      return elem;

    }

    tooltip.prototype.bindElem = function(){
      this.bindEvent(this.settings.elem, 'mousemove', this.show.bind(this));
      this.bindEvent(this.settings.elem, 'mouseover', this.show.bind(this));
      this.bindEvent(this.settings.elem, 'mouseout', this.hide.bind(this));
    };

    tooltip.prototype.show = function(e){
      this.tooltipNode.setAttribute('style', 'position:absolute; left: '+e.clientX+'px; top: '+(e.clientY+ (e.target ? e.target.offsetHeight : e.srcElement.offsetHeight))+'px;');
    };

    tooltip.prototype.hide = function(e){
      this.tooltipNode.setAttribute('style', 'display:none;');
    };

    tooltip.prototype.addToPage = function(){
      // Update with the new DOM ref.
      this.tooltipNode = doc.body.appendChild( this.tooltipNode );
    };

    // Expose the plugin.
    window.tooltip = tooltip;


})(document);