# icoonies

Icoonies is a modern plugin for easily managing and customizing vector images in web projects. It allows to create multiple different versions of images in a very fast way with a user-friendly interface which discovers sections over image files.

## Table of content

- [Benefits](#benefits)
- [Quick start](#quick-start)
- [Ho to configure the _select modes_](#how-to-configure-the-select-mode)
- [How to show svg areas](#how-to-show-svg-areas)
- [Css and icoonies](#css-and-icoonies)
- [Options](#options)
- [API methods](#api-methods)
- [Author](#author)
- [License](#license)

## Benefits
The benefits in using icoonies can be shown in the following examples. 

This is a sample svg object:

	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 334 278" style="enable-background:new 0 0 334 278;" xml:space="preserve">
		<rect x="0.5" y="0.5" style="fill:red;  stroke:black ; stroke-width:10;" width="333" height="277"/>
	</svg>

icoonies can manage the svg object with three different behaviors. Note that the svg object will not be edited:

1. customizing the svg object with a _background image_ (select mode: _background_)

    //html
	<span class=”myClass”>lorem ipsum.. </span>
	
    //css
	.myClass 				{ /*icoonies*/  background:url(myObjectSvg.svg) ..}
	.myClass #icoo-area-1 	{ /*icoonies*/  fill:green; stroke:blue; stroke-width:5;}
	
2. customizing the svg object with an _image tag_ (select mode: _image_)

    //html
    <img alt=”my svg” class="icoonies myClass" src=”#” data-src="myObjectSvg.svg" />

    //css
	.myClass #icoo-area-1 	{ /*icoonies*/  fill:green; stroke:blue; stroke-width:5;}
	
3. customize the svg object with _svg tag_ (select mode: _svg_)

    //html
    <img alt=”my svg” data-mode="svg" class="icoonies myClass" src=”#” data-src="myObjectSvg.svg" />

    //css
	.myClass #icoo-area-1 	{ /*icoonies*/  fill:green; stroke:blue; stroke-width:5;}

Using this way allows you to get a large number of solutions from a single svg object, just by writing little markup:

    //html
	<span class=”myClassGreen”>lorem ipsum.. </span>
	<span class=”myClassBlue”>lorem ipsum.. </span>
	<span class=”myClassYellow”>lorem ipsum.. </span>
	
    //css
	.myClassGreen, .myClassBlue, .myClassYellow 	{ /*icoonies*/  background:url(myObjectSvg.svg) ..}
	.myClassGreen  #icoo-area-1 			    { /*icoonies*/  fill:green; opacity:.6; ...  }
	.myClassBlue   #icoo-area-1 				{ /*icoonies*/  fill:blue; stroke:#000; ...}
	.myClassYellow #icoo-area-1 				{ /*icoonies*/  fill:Yellow; stroke:none; ... }
	
## Quick start

1. Download the plugin here
2. Unzip it
3. Copy files into your web server 
4. Include icoonies script and stylesheet in your document 

**Note:** make sure that the css and js files are on your server, and change the paths in the script and link tag). 

At the beginning of the &lt;head&gt; tag in the document add the following elements:   
	
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
	
## Ho to configure the _select modes_

_Select modes_ can be described as transformation behavior directly managed by the plugin. Icoonies renders the html based on this modes.
The following examples show you how to manage svg objects with icoonies:

Background select mode:
	
    //html
	<p class=”myClass”>Lorem ipusm </p> 
	
    //css
	.myClass  {   /*icoonies*/ background:url(myObjectSvg.svg) .. ;}  

Image select mode:

    //html
	<img alt=”my svg” class=”icoonies” src=”#” data-src=”myObjectSvg.svg” />
	
Svg select mode:

    //html
	<img alt=”my svg” data-mode="svg" class=”icoonies” src=”#” data-src=”myObjectSvg.svg” />
	
## How to show svg areas
Svg files are organized in areas (or sections). Each area can be configured and customized.
Icoonies discovers areas of a svg file and adds an id with "icoo-area-" prefix followed by "(n)", with _n_ which is the number of each area. 
The following examples display how to get areas:

Background select mode:
	
    //html
	<p class=”myClass”>Lorem ipusm </p> 
	
    //css
	.myClass  {   /*icoonies icoo-showarea:true;*/ background:url(myObjectSvg.svg) .. ;} 
	
Image select mode:

    //html
	<img alt=”my svg” class=”icoonies icoo-showarea” src=”#” data-src=”myObjectSvg.svg” />
	
Svg select mode:

    //html
	<img alt=”my svg” data-mode="svg" class=”icoonies icoo-showarea” src=”#” data-src=”myObjectSvg.svg” />
	
## Css and icoonies

Regardless what is the select mode you've chosen, the customization of a svg object must be done using CSS.
The css rules used to customize the svg object have to start with the comment /* icoonies */.

Sample setting
	
	.myClass  {   /*icoonies*/ …} 
	
The comment /* icoonies */ can contain also properties that are applied to the svg object

	.myClass  {   /*icoonies icoo-preserveAspectRatio:xMinYMin; icoo-class:myClassSvg*/ …}

You can configure the areas in two ways:

class and area_id:

	.myClass  #icoo-area-(n)    {  /*icoonies*/ fill:red; opacity:0.5; }

class with region:

	.myClass    { /*icoonies icoo-region:myRegion; icoo-class:myClassSvg */ ...}
	
	/*region myRegion */
		.myClassSvg #icoo-area-(n)   {  fill:red; opacity:0.5;
		}
	/*endregion*/

## Options
	
### Comment /* icoonies */ options

- icoo-showarea 
	- Applies in the case of background mode. Shows the name and the shape of the svg's areas
	- Boolean; value:true;
- icoo-(attribute)
	- Name of the attribute that is applied to the object svg
	- String; 
- icoo-region
	- Name of the region where css styles are applied to the object svg
	- String;
	
### Html tag options

- data-src
	- Applies in the case of image and svg mode. Object path svg
    - String;
- data-mode
	- Applies in the case of image and svg mode. Mode it is rendered the svg
	- String; value: image,svg; default-value:image;

### Css options

Region

    .selector		{	/*icoonies icoo-region:nameregion;*/
	}
	/* region nameregion*/
		...style..
	/*endregion*/

#Api Methods

mode:

	icoo.init(mode:[options]);
	
## Author

- Alessandro Romanini ([@alleromanini](https://twitter.com/alleromanini))
- Mattia Cattabiani

## License
Icoonies is released under the [MIT license](https://github.com/icoonies/icoonies/blob/master/LICENSE).
