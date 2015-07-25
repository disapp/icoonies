# icoonies

icoonies is a modern plugin for easily managing and customizing vector icon in web projects. It allows to create multiple different versions of icon in a very fast way with a user-friendly interface which discovers sections over icon files.

To get started, check out [http://www.icoonies.website](http://www.icoonies.website)
 
## Table of content

- [Benefits](#benefits)
- [Quick start](#quick-start)
- [Next step](#next-step)
- [Author](#author)
- [Contributor](#contributor)
- [License](#license)

## Benefits
The benefits in using icoonies can be shown in the following examples. 

This is a sample svg object:

	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 334 278" style="enable-background:new 0 0 334 278;" xml:space="preserve">
		<rect x="0.5" y="0.5" style="fill:red;  stroke:black ; stroke-width:10;" width="333" height="277"/>
	</svg>

icoonies can manage the svg object with three different behaviors. Note that the svg object will not be edited:

Customizing the svg object with a _background image_ (background mode)

    //html
	<span class=”myClass”>lorem ipsum.. </span>
	
    //css
	.myClass 				{ /*icoonies*/  background:url(myObjectSvg.svg) ..}
	.myClass #icoo-area-1 	{ /*icoonies*/  fill:green; stroke:blue; stroke-width:5;}
	
Customizing the svg object with an _image tag_ (image mode)

   	//html
	<img alt=”my svg” class="icoonies myClass" src=”#” data-src="myObjectSvg.svg" />

    //css
	.myClass #icoo-area-1 	{ /*icoonies*/  fill:green; stroke:blue; stroke-width:5;}
	
Customizing the svg object with _svg tag_ (svg mode)

   	//html image tag

	<img alt=”my svg” data-mode="svg" class="icoonies myClass" src=”#” data-src="myObjectSvg.svg" />
	
	//html generic tag example span
	<span data-mode="svg" class="icoonies myClass" data-src="myObjectSvg.svg"> </span>

    //css
	.myClass #icoo-area-1 	{ /*icoonies*/  fill:green; stroke:blue; stroke-width:5;}

Using this way allows you to get a large number of solutions from a single **icon svg (icoon)**, just by writing little markup:

    //html
	<span class=”myIconGreen”>lorem ipsum.. </span>
	<span class=”myIconBlue”>lorem ipsum.. </span>
	<span class=”myIconYellow”>lorem ipsum.. </span>
	
    //css
	.myIconGreen, .myIconBlue, .myIconYellow 	{ /*icoonies*/  background:url(myIcon.svg) ..}
	.myIconGreen  #icoo-area-1 			    	{ /*icoonies*/  fill:green; opacity:.6; ...  }
	.myIconBlue   #icoo-area-1 					{ /*icoonies*/  fill:blue; stroke:#000; ...}
	.myIconYellow #icoo-area-1 					{ /*icoonies*/  fill:Yellow; stroke:none; ... }
	
## Quick start

1. Download the plugin [here](https://github.com/icoonies/icoonies/tree/master/source)
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
	
## Next step

1. [Search icoons](http://www.icoonies.website)
2. [Show the documentations](http://www.icoonies.website/Icoonies/Start)
3. See an example:
	* [background mode](http://www.icoonies.website/Icoonies/BackgroundMode)
	* [image mode](http://www.icoonies.website/Icoonies/ImageMode)
	* [svg mode](http://www.icoonies.website/Icoonies/SvgMode)
	
## Author

- Alessandro Romanini ([@alleromanini](https://twitter.com/alleromanini))
- Mattia Cattabiani

##Contributor

- Alessandro Alpi ([@suxstellino](https://twitter.com/suxstellino))

## License
icoonies is released under the [MIT license](https://github.com/icoonies/icoonies/blob/master/LICENSE).
