<?
// Get page request
if(isset($_GET['path'])){$path = htmlentities(trim($_GET['path']), ENT_QUOTES);}
if(!$path){
	$path="home";
	$thisPage = "Home";
} else {
	$thisPage = ucwords(str_replace("-", " ", $path));
}
?>

<!DOCTYPE HTML>
<html lang="en">
	<head>
		<title>Human Friendly Design</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta name="keywords" content="human friendly design, don osborne, web design, interface design, web designer, interface designer, web developer, los angeles" />
		<meta name="description" content="Human Friendly Design is the work of Don Osborne" />
		<meta name="author" content="Don Osborne - Human Friendly Design" />
		<link rel="stylesheet" href="/_library/css/reset-1.0.1.css" type="text/css" media="screen" charset="utf-8"/>
		<link rel="stylesheet" href="/_library/css/styles.css" type="text/css" media="screen" charset="utf-8"/>
		<link rel="stylesheet" href="/_library/css/jquery.fancybox-1.3.4.css" type="text/css" media="screen" charset="utf-8"/>
	</head>
	<body>
		<div id="header_wrap">
			<div id="header" class="wrapper">
				<a href="/" id="hfd_logo"></a>
				<ul id="menus">
					<li><a href="http://twitter.com/intastella" onclick="window.open(this.href, '_blank'); return false;"><img src="/_library/gfx/menu_tweet_inactive.png" width="19" height="16" alt="message me" />message me</a></li>
					<li><a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#100;&#111;&#110;&#64;&#104;&#117;&#109;&#97;&#110;&#102;&#114;&#105;&#101;&#110;&#100;&#108;&#121;&#100;&#101;&#115;&#105;&#103;&#110;&#46;&#99;&#111;&#109;"><img src="/_library/gfx/menu_contact_inactive.png" width="17" height="17" alt="email me" />email me</a></li>
					<!--
					<li id="menu_about"><a href="/about/"><img src="/_library/gfx/menu_about_inactive.png" width="14" height="16" alt="Menu - About" />about</a></li>
					<li id="menu_work"><a href="/work/"><img src="/_library/gfx/menu_work_inactive.png" width="15" height="16" alt="Menu - Work" />work</a></li>
					<li id="menu_hello"><a href="/" class="active"><img src="/_library/gfx/menu_home_inactive.png" width="15" height="16" alt="Menu - Home" />home</a></li>
					-->
				</ul>
				<div class="clearer">&nbsp;</div>
			</div>
		</div>
		<div id="content_wrap" class="wrapper">
			<h1>
				Hi, I'm Don. I'm a designer based in Los Angeles, specializing in Interface Design and User Experience Design.  Take a look at my work and if you would like to get in touch,<br />
				<a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#100;&#111;&#110;&#64;&#104;&#117;&#109;&#97;&#110;&#102;&#114;&#105;&#101;&#110;&#100;&#108;&#121;&#100;&#101;&#115;&#105;&#103;&#110;&#46;&#99;&#111;&#109;">email</a> or <a href="http://twitter.com/intastella" onclick="window.open(this.href, '_blank'); return false;">message</a> me.
			</h1>
			<div id="content">
				<? include("_library/php/work_grid.php"); ?>
				<div class="clearer">&nbsp;</div>
			</div>
		</div>
		
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
		<script type="text/javascript" src="/_library/js/jquery.easing-1.3.pack.js"></script>
		<script type="text/javascript" src="/_library/js/jquery.fancybox-1.3.4.pack.js"></script>
		<script type="text/javascript" src="/_library/js/cloud-zoom.1.0.2.js"></script>
		
		<script type="text/javascript">
			$(document).ready(function() {
				$('.slide_group').hover(function() {
					$(this).children('.tile_info').fadeToggle();
				});
				
				$("a.slideshow").fancybox({
					'overlayColor' : '#000',
					'overlayOpacity' : .8,
					'autoScale' : true
				});
			});
        </script>
		
		<script type="text/javascript">
		var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
		document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
		</script>
		<script type="text/javascript">
		try {
		var pageTracker = _gat._getTracker("UA-16040635-1");
		pageTracker._trackPageview();
		} catch(err) {}
		</script>
	</body>
</html>