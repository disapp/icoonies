# icoonies

Icoonies is a modern tool to manage and customize easily and fast vector images in web projects.

## Table of content

- [Benefits](#benefits)
- [Quick start](#quick-start)
- [Select mode](#select-mode)
- [Show svg areas](#show-svg-areas)
- [Css with icoonies](#css-with-icoonies)
- [Options](#options)
- [Author](#author)
- [License](#license)

## Benefits
The benefits of using icoonies can be shown in the examples that follow.

my object svg

	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 334 278" style="enable-background:new 0 0 334 278;" xml:space="preserve">
		<rect x="0.5" y="0.5" style="fill:red;  stroke:black ; stroke-width:10;" width="333" height="277"/>
	</svg>
	
customize my object svg with background image - icoonies approach

	//html
	<span class=”myClass”>lorem ipsum.. </span>
	
	//css
	.myClass 				{ /*icoonies*/  background:url(myObjectSvg.svg) ..}
	.myClass #icoo-area-1 	{ /*icoonies*/  fill:green; stroke:blue; stroke-width:5;}
	
	// no edit my object svg
	
customize my object svg with image tag - icoonies approach

	//html
	<img alt=”my svg” class="icoonies myClass" src=”#” data-src="myObjectSvg.svg" />

	//css
	.myClass #icoo-area-1 	{ /*icoonies*/  fill:green; stroke:blue; stroke-width:5;}
	
	// no edit my object svg	

customize my object svg with svg tag - icoonies approach

	//html
	<img alt=”my svg” data-mode="svg" class="icoonies myClass" src=”#” data-src="myObjectSvg.svg" />

	//css
	.myClass #icoo-area-1 	{ /*icoonies*/  fill:green; stroke:blue; stroke-width:5;}
	
	// no edit my object svg

## Quick start

Download the plugin, unzip it, copy files and include icoonies script and stylesheet in your document (you will need to make sure the css and js files are on your server, and adjust the paths in the script and link tag). At the beginning of the &lt;head&gt; tag in the document add the following elements:   
	
	<!-- Add jQuery library -->
	<script src="http://code.jquery.com/jquery-latest.min.js"></script>
	
	<!-- Add base64 -->
	<script src="base64.js"></script>

	<!-- Add icoonies-->
	<script src="icoonies.1.0.min.js"></script>
	<link href=" icoo.css" rel="stylesheet" class="icoonies-css"  />
	
	<!-- Add css link where you want to customize your svg by adding the class icoonies-css -->
	<link href="mystyle.css" rel="stylesheet" class="icoonies-css"  />
	
Attach icoonies when the document is loaded

	<script>
		$(document).ready(function(){
			icoo.init();
		});
	</script>
	
## Select mode

Select mode to apply the svg with icoonies, example:

Mode background:
	
	//html
	<p class=”myClass”>Lorem ipusm </p> 
	
	//css
	.myClass  {   /*icoonies*/ background:url(myObjectSvg.svg) .. ;}  

Mode image:

	//html
	<img alt=”my svg” class=”icoonies” src=”#” data-src=”myObjectSvg.svg” />
	
Mode svg:

	//html
	<img alt=”my svg” data-mode="svg" class=”icoonies” src=”#” data-src=”myObjectSvg.svg” />
	
## Show svg areas

Icoonies identifies areas of svg. For each area is assigned an id with prefix "icoo-area-(n)". To show the areas follow the examples:

Mode background:
	
	//html
	<p class=”myClass”>Lorem ipusm </p> 
	
	//css
	.myClass  {   /*icoonies icoo-showarea:true;*/ background:url(myObjectSvg.svg) .. ;} 
	
Mode image:

	//html
	<img alt=”my svg” class=”icoonies icoo-showarea” src=”#” data-src=”myObjectSvg.svg” />
	
Mode svg:

	//html
	<img alt=”my svg” data-mode="svg" class=”icoonies icoo-showarea” src=”#” data-src=”myObjectSvg.svg” />
	
## Css with icoonies

Regardless of mode you choose to apply icoonies, the customization of object SVG is through the use of CSS.
The css rule that is used to customize the object svg, must contain at the beginning of the properties the comment /* icoonies */

Example
	
	.myClass  {   /*icoonies*/ …} 
	
In the comment /* icoonies */ can be inserted properties that are applied to object svg.	

Example

	.myClass  {   /*icoonies icoo-preserveAspectRatio:xMinYMin; icoo-class:myClassSvg*/ …}

The customization of the areas can be done in two ways:

Way 1, example:

	.myClass  #icoo-area-(n)    {  /*icoonies*/ fill:red; opacity:0.5; }

Way 2, example:

	.myClass    { /*icoonies icoo-region:myRegion; icoo-class:myClassSvg */ ...}
	
	/*region myRegion */
		.myClassSvg #icoo-area-(n)   {  fill:red; opacity:0.5;
		}
	/*endregion*/

## Options
	
### Options into comment /* icoonies */

- icoo-showarea 
	- Applies in the case of background mode. Shows the name and the shape of the svg's areas
	- Boolean; value:true;
- icoo-(attribute)
	- Name of the attribute that is applied to the object svg
	- String; 
- icoo-region
	- Name of the region where css styles are applied to the object svg
	- String;
	
### Options html tag

- data-src
	- Applies in the case of image and svg mode. Object path svg
    - String;
- data-mode
	- Applies in the case of image and svg mode. Mode it is rendered the svg
	- String; value: image,svg; default-value:image;

### Options css

Region

    .selector		{	/*icoonies icoo-region:nameregion;*/
	}
	/* region nameregion*/
		...style..
	/*endregion*/

Api Methods

mode:

	icoo.init(mode:[options]);
	
## Author

- Alessandro Romanini ([@alleromanini](https://twitter.com/alleromanini))
- Mattia Cattabiani

## License
Icoonies is released under the [MIT license](https://github.com/icoonies/icoonies/blob/master/LICENSE).
