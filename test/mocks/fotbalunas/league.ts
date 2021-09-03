import { SoccerBotResponse, SoccerBotTeam } from '../../../lib/shared/interfaces';

export const LEAGUE_HTML = `
<!DOCTYPE html>
<html>
    <head>
		<base href="/" />
		<meta charset="UTF-8">


		<title>	Aktuální tabulky Divize A, 2021-2022 |
 fotbalunas.cz</title>


		<meta name="description" content="FOTBALUNAS.CZ - fotky, tipování, hodnocení, komentáře a mnoho dalšího na nejčtenějším místě českého internetu o amatérském fotbalu."/>
		<meta property="og:title" content="	Aktuální tabulky Divize A, 2021-2022 |
 fotbalunas.cz" />
		<meta property="og:type" content="website" />
					<meta property="og:image" content="https://www.fotbalunas.cz/assets/css/images/fb-logo.png" />
			<meta property="og:image:width" content="635" />
			<meta property="og:image:height" content="353" />
		        <meta name="facebook-domain-verification" content="3gptai48cymn28phzcb28aqw2zvn45" />
		<link rel="image_src" href="https://www.fotbalunas.cz/assets/css/images/fb-logo.png" />

			<script src="https://cdnjs.cloudflare.com/ajax/libs/postscribe/2.0.6/postscribe.min.js"></script>

		<script type="text/javascript" src="/assets/js/jquery-1.11.2.min.js"></script>
		<script type="text/javascript" src="/assets/js/jquery-ui-1.5.3.min.js"></script>
		<script type="text/javascript" src="/assets/js/jquery-ui-tabs-rotate.js"></script>

		<script src="/assets/js/slick/slick.min.js"></script>
		<link href="/assets/js/slick/slick.css" rel='stylesheet' type='text/css'>
		<link href="/assets/js/slick/slick-theme.css" rel='stylesheet' type='text/css'>

		<script src="/assets/js/slider-pro-master/dist/js/jquery.sliderPro.min.js"></script>
		<link href="/assets/js/slider-pro-master/dist/css/slider-pro.css" rel='stylesheet' type='text/css'>

		<script src="/assets/js/jquery.vticker.js"></script>

		<script src="/assets/js/excanvas.js"></script>
		<script src="/assets/js/jquery.maphilight.js"></script>

		<script type="text/javascript" src="/assets/js/lightbox/js/lightbox.js"></script>
		<link href="/assets/js/lightbox/css/lightbox.css" type="text/css" rel="stylesheet" />

		<script type="text/javascript" src="/assets/js/jquery-pin/jquery.pin.min.js"></script>
		<link href="/assets/js/jquery-pin/css/style.css" type="text/css" rel="stylesheet" />

		<script type="text/javascript" src="/assets/js/jshowoff/jquery.jshowoff.js"></script>

		<script	src="/assets/js/growl/jquery.growl.js"></script>
		<link href="/assets/js/growl/jquery.growl.css" rel="stylesheet" type="text/css" />

		<!-- Bootstrap -->
		<link href="/assets/bootstrap/css/bootstrap.min.css?v=2" rel="stylesheet">
		<script type="text/javascript" src="/assets/bootstrap/js/bootstrap.min.js"></script>

		<script type="text/javascript" src="/assets/js/jquery-news-ticker/jquery.newsTicker.min.js"></script>
		<script type="text/javascript" src="/assets/js/fotbalunas.js?v=3"></script>
		<meta name="viewport" content="width=1000">

		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->

		<link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,400,700,200italic,400italic,700italic&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:100,200,400,700,200italic,400italic,700italic&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Fira+Sans:400,500,700&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Ubuntu:300,400,700&subset=latin,latin-ext' rel='stylesheet' type='text/css'>

		<script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
			})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			ga('create', 'UA-61729515-1', 'auto');
			ga('send', 'pageview');
		</script>

					<link rel="stylesheet" href="/css/38de474.css?v=10" />




		<script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script>
<script>
  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];
</script>
<script type='text/javascript'>
  googletag.cmd.push(function() {
	googletag.defineOutOfPageSlot('/16240546/v08_divize_A_c00_branding_skin_bg_2000x1200', 'adw_branding_skin').addService(googletag.pubads());
				googletag.defineSlot('/16240546/v08_divize_A_c04_midboard_970x200', [[970, 100], [970, 90], [970, 200], [728, 90], [970, 150], [970, 210]], 'adw_midboard').addService(googletag.pubads());
	googletag.defineSlot('/16240546/v08_divize_A_c05_rectangle1_300x600', [[300, 250], [300, 300], [300, 600]], 'adw_rectangle1').addService(googletag.pubads());
	googletag.defineSlot('/16240546/v08_divize_A_c06_rectangle2_300x600', [[300, 250], [300, 300], [300, 600]], 'adw_rectangle2').addService(googletag.pubads());
	googletag.defineSlot('/16240546/v08_divize_A_c07_rectangle3_300x600', [[300, 250], [300, 300], [300, 600]], 'adw_rectangle3').addService(googletag.pubads());
	googletag.defineSlot('/16240546/v08_divize_A_c08_rectangle4_300x600', [[300, 250], [300, 300], [300, 600]], 'adw_rectangle4').addService(googletag.pubads());
		googletag.defineSlot('/16240546/v08_divize_A_c11_infobox1_605x400', [[480, 300], [480, 150], [605, 200], [605, 100], [605, 400], [300, 250], [300, 300], [605, 300], [605, 250], [605, 150]], 'adw_infobox1').addService(googletag.pubads());
	googletag.defineSlot('/16240546/v08_divize_A_c12_infobox2_605x400', [[480, 300], [480, 150], [605, 200], [605, 100], [605, 400], [300, 250], [300, 300], [605, 300], [605, 250], [605, 150]], 'adw_infobox2').addService(googletag.pubads());
	googletag.defineSlot('/16240546/v08_divize_A_c13_infobox3_605x400', [[480, 300], [480, 150], [605, 200], [605, 100], [605, 400], [300, 250], [300, 300], [605, 300], [605, 250], [605, 150]], 'adw_infobox3').addService(googletag.pubads());
	googletag.defineSlot('/16240546/v08_divize_A_c14_footboard_1000x300', [[970, 200], [970, 310], [728, 90], [1000, 150], [970, 100], [970, 210], [1000, 300], [970, 250], [1000, 200], [1000, 310], [970, 150], [1000, 100], [1000, 210], [970, 90], [1000, 250]], 'adw_footboard').addService(googletag.pubads());
		googletag.pubads().setTargeting("url","tabulky/soutez/31/");
    googletag.pubads().collapseEmptyDivs();
  googletag.enableServices();
  });
</script>

<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '548604218816887');
fbq('track', 'PageView');
</script>
<noscript>
 <img height="1" width="1"
src="https://www.facebook.com/tr?id=548604218816887&ev=PageView
&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->

	</head>
	<body>
		<script>
document.write("<div class='skin' id='skin' style='margin:0 auto;width:1000px;'>"
            +"<div class='fotbalunas-skin-wrap' id='fotbalunas-skin-wrap' style='margin:0 auto; width:1000px;'>"
            + "<table id='' align='center' style='margin:0 auto;'>"
            + "<tr><td id='leader-creative-content' style='height:210px;'></td></tr>"
            + "</table>"
            + "</div>"
            + "</div>");
</script>
<div id='adw_branding_skin' style='margin: auto; width: 1000px; height:0px; position: relative;'><script>googletag.cmd.push(function() { googletag.display('adw_branding_skin'); });</script></div>		<div class="container">
			<div class="shadow-outter">
				<header class="header">
											<div class="header-top">
	<a href="/" class="logo">
		<img src="/assets/css/images/fotbalunas-logo-jednobarevne-png24.png" alt="Fotbalunas.cz" />
	</a>

	<div class="menu">
					<ul class="navigation">
							<li><a href="/clanky/celostatni/" title="Celostátní články - výběr nejzajímavějších událostí, které přesahují jednotlivé soutěže a regiony">Články</a></li>
																						<li><a href="/tip-liga/?soutez=31" title="Interaktivní přehled - tipujte na výsledky fotbalových utkání z libovolné soutěže napříč celou ČR">TIP liga</a></li>
				<li><a href="/diskuze/?soutez=31" title="Přehled všech diskuzí z celé ČR - vyjádřete svůj názor, hodnoťte hráče, rozhodčí, zázemí, ... na fotbalunas.cz!">Diskuze</a></li>
				<li><a href="https://fotbalunas.cz/prehled/esport/" title="eSport liga, unikátní projekt soutěží ve hře FIFA pro reálné členy fotbalových klubů z celé ČR ">eSport liga</a></li>
			</ul>
			</div>
  <div class="header-top-novinka" style="position: absolute; left: 664px; top: 26px;">
    <a href="https://www.instagram.com/fotbalunas/" class="novinka-1">
		<img src="/assets/css/images/sleduj-nas-do-hlavicky4.png" alt="Sleduj fotbalunas.cz">
	  </a>
  </div>
	<div class="registrovana-sekce-bar">
	<a class="btn btn-default btn-warning btn-sm sync" href="/registrovana-sekce/" title="Registrovaná sekce"><i class="glyphicon glyphicon-user"></i> Přihlásit - <strong>staň se součástí fotbalunas.cz!</strong></a>
</div>
<div class="clear"></div>	<div class="search-icon-toggle btn btn-default">
		<span class="glyphicon glyphicon-search"></span>
	</div>
	<div class="form-group search-form">
		<form role="search" id="search" action="/hledat/" method="get">
			<input type="search" name="s" class="form-control" placeholder="Vyhledávání..." value="" />
			<button class="btn btn-default" type="submit" alt="Odeslat"><span class="glyphicon glyphicon-search white"></span></button>
		</form>
	</div>
	<a class="s-f-logo" target="_blank" href="https://www.facebook.com/fotbalunas">
		<img src="/assets/css/images/f.png" />
	</a>
  <a class="s-i-logo" target="_blank" href="https://www.instagram.com/fotbalunas">
		<img src="/assets/css/images/i.png" />
	</a>
  <a class="s-t-logo" target="_blank" href="https://www.twitter.com/fotbalunas">
		<img src="/assets/css/images/t.png" />
	</a>
  <a class="s-y-logo" target="_blank" href="https://www.youtube.com/channel/UCFU6cBXYYSGiK_NjbIGVSAw">
		<img src="/assets/css/images/y.png" />
	</a>
</div>							<div class="secondary-menu secondary-menu-soutez-breadcrumb secondary-menu-breadcrumb">
		<ul class="pull-right soutez-breadcrumb">
			<li>
				<a href="/">fotbalunas.cz</a>
			</li>
									<li>
				&raquo; <a href="/soutez/31/">Divize sk. A</a>
			</li>
		</ul>
	</div>

	<div class="secondary-menu secondary-menu-soutez">
		<ul>
			<li>
				<a href="/soutez/31/">Soutěž</a>
			</li>
			<li>
				<a href="/rozlosovani/soutez/31/">Rozlosování</a>
			</li>
			<li>
				<a href="/aktualni-vysledky/soutez/31/">Aktuální kolo</a>
			</li>
			<li>
				<a href="/tabulky/soutez/31/">Tabulka</a>
			</li>
			<li>
				<a href="/statistiky/soutez/31/">Hráčské statistiky</a>
			</li>
			<li>
				<a href="/expert-tipy/soutez/31/">Expert tipy</a>
			</li>
			<li>
				<a href="/sestavy-kola/soutez/31/">Sestavy kola</a>
			</li>
			<li>
				<a href="/hraci-kola/soutez/31/">Hráči kola</a>
			</li>
			<li>
				<a href="/rozhovory/soutez/31/">Rozhovory</a>
			</li>
			<li>
				<a href="/soutez/31/diskuze/">Diskuze k souteži</a>
			</li>
		</ul>
	</div>
							</header>

			<section id="wrapper" class="inner-container">
				<div id="content-wrapper" class="outer-container">
					<div id="content" class="inner-container">
					<div class="row">
	<div class="col-xs-12">
		<h1>Divize A</h1>
		<div id="fultop-1000-100" class="rtb height-90">
	<div id='adw_midboard'><script>googletag.cmd.push(function() { googletag.display('adw_midboard'); });</script></div>
</div>	</div>
</div>

<div class="row">
	<div class="col-xs-8">
		<h2>2021-2022</h2>

					<table class="table table-striped table-bordered table-hover table-condensed">
				<thead>
					<tr>
						<th></th>
						<th>Tým</th>
						<th class="text-center">Z</th>
						<th class="text-center">V</th>
						<th class="text-center">R</th>
						<th class="text-center">P</th>
						<th class="text-center">Skóre</th>
						<th class="text-center">B</th>
						<th class="text-center">PK</th>
					</tr>
				</thead>
				<tbody>
											<tr>
							<td class="text-center">1</td>
							<td><a href="/tym/453/">TJ Sokol Lom</a></td>
							<td class="text-center">5</td>
							<td class="text-center">5</td>
							<td class="text-center">0</td>
							<td class="text-center">0</td>
							<td class="text-center">17:1</td>
							<td class="text-center">15</td>
							<td class="text-center">0</td>
						</tr>
											<tr>
							<td class="text-center">2</td>
							<td><a href="/tym/62/">SK Klatovy 1898</a></td>
							<td class="text-center">5</td>
							<td class="text-center">4</td>
							<td class="text-center">0</td>
							<td class="text-center">1</td>
							<td class="text-center">10:5</td>
							<td class="text-center">12</td>
							<td class="text-center">0</td>
						</tr>
											<tr>
							<td class="text-center">3</td>
							<td><a href="/tym/3737/">TJ Přeštice</a></td>
							<td class="text-center">5</td>
							<td class="text-center">3</td>
							<td class="text-center">2</td>
							<td class="text-center">0</td>
							<td class="text-center">18:5</td>
							<td class="text-center">11</td>
							<td class="text-center">0</td>
						</tr>
											<tr>
							<td class="text-center">4</td>
							<td><a href="/tym/230/">FK Jindřichův Hradec 1910</a></td>
							<td class="text-center">5</td>
							<td class="text-center">3</td>
							<td class="text-center">1</td>
							<td class="text-center">1</td>
							<td class="text-center">10:6</td>
							<td class="text-center">10</td>
							<td class="text-center">0</td>
						</tr>
											<tr>
							<td class="text-center">5</td>
							<td><a href="/tym/4939/">SK Dynamo České Budějovice B</a></td>
							<td class="text-center">5</td>
							<td class="text-center">3</td>
							<td class="text-center">0</td>
							<td class="text-center">2</td>
							<td class="text-center">11:3</td>
							<td class="text-center">9</td>
							<td class="text-center">0</td>
						</tr>
											<tr>
							<td class="text-center">6</td>
							<td><a href="/tym/147/">SK Otava Katovice</a></td>
							<td class="text-center">5</td>
							<td class="text-center">3</td>
							<td class="text-center">0</td>
							<td class="text-center">2</td>
							<td class="text-center">13:9</td>
							<td class="text-center">9</td>
							<td class="text-center">0</td>
						</tr>
											<tr>
							<td class="text-center">7</td>
							<td><a href="/tym/224/">FK Spartak Soběslav</a></td>
							<td class="text-center">5</td>
							<td class="text-center">3</td>
							<td class="text-center">0</td>
							<td class="text-center">2</td>
							<td class="text-center">10:6</td>
							<td class="text-center">9</td>
							<td class="text-center">0</td>
						</tr>
											<tr>
							<td class="text-center">8</td>
							<td><a href="/tym/3736/">SK Petřín Plzeň</a></td>
							<td class="text-center">5</td>
							<td class="text-center">2</td>
							<td class="text-center">2</td>
							<td class="text-center">1</td>
							<td class="text-center">9:7</td>
							<td class="text-center">8</td>
							<td class="text-center">0</td>
						</tr>
											<tr>
							<td class="text-center">9</td>
							<td><a href="/tym/3682/">TJ Slavoj Mýto</a></td>
							<td class="text-center">5</td>
							<td class="text-center">2</td>
							<td class="text-center">1</td>
							<td class="text-center">2</td>
							<td class="text-center">6:8</td>
							<td class="text-center">7</td>
							<td class="text-center">0</td>
						</tr>
											<tr>
							<td class="text-center">10</td>
							<td><a href="/tym/70/">FC Viktoria Mariánské Lázně</a></td>
							<td class="text-center">5</td>
							<td class="text-center">2</td>
							<td class="text-center">0</td>
							<td class="text-center">3</td>
							<td class="text-center">8:13</td>
							<td class="text-center">6</td>
							<td class="text-center">0</td>
						</tr>
											<tr>
							<td class="text-center">11</td>
							<td><a href="/tym/59/">SK Senco Doubravka</a></td>
							<td class="text-center">5</td>
							<td class="text-center">1</td>
							<td class="text-center">2</td>
							<td class="text-center">2</td>
							<td class="text-center">4:5</td>
							<td class="text-center">5</td>
							<td class="text-center">0</td>
						</tr>
											<tr>
							<td class="text-center">12</td>
							<td><a href="/tym/69/">FC Rokycany</a></td>
							<td class="text-center">5</td>
							<td class="text-center">1</td>
							<td class="text-center">2</td>
							<td class="text-center">2</td>
							<td class="text-center">4:8</td>
							<td class="text-center">5</td>
							<td class="text-center">0</td>
						</tr>
											<tr>
							<td class="text-center">13</td>
							<td><a href="/tym/68/">FK Hvězda Cheb</a></td>
							<td class="text-center">5</td>
							<td class="text-center">1</td>
							<td class="text-center">0</td>
							<td class="text-center">4</td>
							<td class="text-center">3:12</td>
							<td class="text-center">3</td>
							<td class="text-center">0</td>
						</tr>
											<tr>
							<td class="text-center">14</td>
							<td><a href="/tym/683/">Český Lev - Union Beroun</a></td>
							<td class="text-center">5</td>
							<td class="text-center">1</td>
							<td class="text-center">0</td>
							<td class="text-center">4</td>
							<td class="text-center">4:15</td>
							<td class="text-center">3</td>
							<td class="text-center">0</td>
						</tr>
											<tr>
							<td class="text-center">15</td>
							<td><a href="/tym/55/">SK Hořovice</a></td>
							<td class="text-center">5</td>
							<td class="text-center">0</td>
							<td class="text-center">2</td>
							<td class="text-center">3</td>
							<td class="text-center">4:11</td>
							<td class="text-center">2</td>
							<td class="text-center">0</td>
						</tr>
											<tr>
							<td class="text-center">16</td>
							<td><a href="/tym/675/">TJ Tatran Sedlčany</a></td>
							<td class="text-center">5</td>
							<td class="text-center">0</td>
							<td class="text-center">0</td>
							<td class="text-center">5</td>
							<td class="text-center">3:20</td>
							<td class="text-center">0</td>
							<td class="text-center">0</td>
						</tr>
									</tbody>
			</table>

		<br />
		<a class="btn btn-default btn-sm" href="/soutez/31/">
			<span class="glyphicon glyphicon-arrow-up"></span> Zpět na soutěž
		</a>
	</div>
	<div id="outer-container-reklama" class="col-xs-4">
		<div id="" class="">
			<div id="commentsWidget">
			<div class="comment-small-widget">
	<h4 class="title">Nejnovější události</h4>			<a href="/soutez/31/diskuze/" class="comment">
			<span class="name">E. Rytířová</span>
			<span class="pull-right">9:36 9.4.2018</span>
			<span class="text">
									Dobrý den, kdy bude sestava kola? není možné tento...
							</span>
		</a>
			<a href="/zapas/342756/" class="comment">
			<span class="name">J. Teršl</span>
			<span class="pull-right">7:20 31.8.2021</span>
			<span class="text">
										<b>Tip:</b>
	výhra domácích Katovice

							</span>
		</a>
			<a href="/zapas/342759/" class="comment">
			<span class="name">J. Teršl</span>
			<span class="pull-right">7:20 31.8.2021</span>
			<span class="text">
										<b>Tip:</b>
	výhra domácích Mýto

							</span>
		</a>
			<a href="/zapas/342755/" class="comment">
			<span class="name">J. Teršl</span>
			<span class="pull-right">7:20 31.8.2021</span>
			<span class="text">
										<b>Tip:</b>
	výhra domácích Dynamo ČB

							</span>
		</a>
			<a href="/zapas/342758/" class="comment">
			<span class="name">J. Teršl</span>
			<span class="pull-right">7:20 31.8.2021</span>
			<span class="text">
										<b>Tip:</b>
	výhra domácích Přeštice

							</span>
		</a>
	</div>
		</div>
		<h4>Rozhovory</h4>
		<br />
		<ul>
		<li>
		<a href="/rozhovor/7521/cim-vice-bodu-udelame-na-podzim-tim-lepe-protoze-vime-co-se-deje-na-jare-na-urcitych-stadionech-rika-dan-houdek/">Čím více bodů uděláme na podzim, tím lépe, protože víme, co se děje na jaře na určitých stadionech, říká Dan Houdek</a>
		</li>
    <br>
		<li>
		<a href="/rozhovor/7451/verim-ze-budeme-v-presticich-uspesni-kabina-i-vedeni-si-preje-postup-do-cfl-rika-sebastien-bohm/">Věřím, že budeme v Přešticích úspěšní, kabina i vedení si přeje postup do ČFL, říká Sebastien Böhm</a>
		</li>
    <br>
		<li>
		<a href="/rozhovor/7419/jestli-budeme-hrat-celou-sezonu-jako-v-poslednich-zapasech-muzeme-byt-hodne-vysoko-rika-david-cipera/">Jestli budeme hrát celou sezónu jako v posledních zápasech, můžeme být hodně vysoko, říká David Čipera</a>
		</li>
    <br>
</ul>		<br /><br />
		<div id='adw_rectangle3'><script>googletag.cmd.push(function() { googletag.display('adw_rectangle3'); });</script></div>		<br /><br />
		<table class="table table-striped table-bordered table-hover table-condensed">
	<thead>
		<tr>
			<th></th>
			<th>Tabulka</th>
			<th class="text-center">Z</th>
						<th class="text-center">Skóre</th>
			<th class="text-center">B</th>
					</tr>
	</thead>
	<tbody>
					<tr>
			<td class="text-center">1</td>
			<td><a href="/tym/453/">TJ Sokol Lom</a></td>
			<td class="text-center">5</td>
						<td class="text-center">17:1</td>
			<td class="text-center">15</td>
					</tr>
							<tr>
			<td class="text-center">2</td>
			<td><a href="/tym/62/">SK Klatovy 1898</a></td>
			<td class="text-center">5</td>
						<td class="text-center">10:5</td>
			<td class="text-center">12</td>
					</tr>
							<tr>
			<td class="text-center">3</td>
			<td><a href="/tym/3737/">TJ Přeštice</a></td>
			<td class="text-center">5</td>
						<td class="text-center">18:5</td>
			<td class="text-center">11</td>
					</tr>
							<tr>
			<td class="text-center">4</td>
			<td><a href="/tym/230/">FK Jindřichův Hradec 1910</a></td>
			<td class="text-center">5</td>
						<td class="text-center">10:6</td>
			<td class="text-center">10</td>
					</tr>
							<tr>
			<td class="text-center">5</td>
			<td><a href="/tym/4939/">SK Dynamo České Budějovice B</a></td>
			<td class="text-center">5</td>
						<td class="text-center">11:3</td>
			<td class="text-center">9</td>
					</tr>
																																					</tbody>
</table>
<a href="/tabulky/soutez/31/" class="">Zobrazit celou tabulku</a>
		<br /><br />

<table class="table table-striped table-bordered table-hover table-condensed">
	<thead>
		<tr>
			<th>&nbsp;</th>
			<th class="text-left">Nejlepší střelci</th>
			<th class="text-center">Góly</th>
		</tr>
	</thead>
	<tbody>
					<tr>
			<td class="text-center">1</td>
			<td>
				<a href="/hrac/15732/">Zbyněk Musiol</a>
			</td>
			<td class="text-center">
				7
			</td>
		</tr>
							<tr>
			<td class="text-center">2</td>
			<td>
				<a href="/hrac/168413/">Tomáš Arzberger</a>
			</td>
			<td class="text-center">
				5
			</td>
		</tr>
							<tr>
			<td class="text-center">3</td>
			<td>
				<a href="/hrac/25478/">Vladimír Uher</a>
			</td>
			<td class="text-center">
				4
			</td>
		</tr>
							<tr>
			<td class="text-center">4</td>
			<td>
				<a href="/hrac/34608/">Antonín Presl</a>
			</td>
			<td class="text-center">
				4
			</td>
		</tr>
							<tr>
			<td class="text-center">5</td>
			<td>
				<a href="/hrac/59819/">Michal Požárek</a>
			</td>
			<td class="text-center">
				4
			</td>
		</tr>
																																																																																																																																																																																																																																								</tbody>
</table>

<a href="/statistiky/soutez/31/strelci/" class="">Zobrazit celou tabulku</a>

		<br /><br />

<div class="grid table-grid">

    <table class="table table-condensed table-striped">
                <thead>
        <tr>
			<th></th>

                                                <th class="">
                                                    <span >Jméno</span>
                                            </th>
                                                                <th class=" table-sort  table-sort-desc ">
                                                    <span title="Získané body">ZB</span>
                                            </th>
                                                                <th class="">
                                                    <span title="Úspěšnost">Ú</span>
                                            </th>
                                                                <th class="">
                                                    <span title="Bezchybných Expert tipů">BE</span>
                                            </th>

        </tr>
		        </thead>
                        <tbody>
                    <tr class="table-odd ">
								<td>1</td>
                                                                            <td class="table-cell-jmeno">
                                                            <a href=/profil/35199>Dusan Barborka</a>
                                                    </td>
                                                                                <td class="table-cell-done">
                                                            26
                                                    </td>
                                                                                <td class="table-cell-p">
                                                            65%
                                                    </td>
                                                                                <td class="table-cell-top">
                                                            1
                                                    </td>

            </tr>
                    <tr class="table-even ">
								<td>2</td>
                                                                            <td class="table-cell-jmeno">
                                                            <a href=/profil/20144>Vladislav Fiala</a>
                                                    </td>
                                                                                <td class="table-cell-done">
                                                            26
                                                    </td>
                                                                                <td class="table-cell-p">
                                                            66%
                                                    </td>
                                                                                <td class="table-cell-top">
                                                            0
                                                    </td>

            </tr>
                    <tr class="table-odd ">
								<td>3</td>
                                                                            <td class="table-cell-jmeno">
                                                            <a href=/profil/30962>Jakub Teršl</a>
                                                    </td>
                                                                                <td class="table-cell-done">
                                                            23
                                                    </td>
                                                                                <td class="table-cell-p">
                                                            57%
                                                    </td>
                                                                                <td class="table-cell-top">
                                                            0
                                                    </td>

            </tr>
                    <tr class="table-even ">
								<td>4</td>
                                                                            <td class="table-cell-jmeno">
                                                            <a href=/profil/25520>Pavel Tauber</a>
                                                    </td>
                                                                                <td class="table-cell-done">
                                                            23
                                                    </td>
                                                                                <td class="table-cell-p">
                                                            57%
                                                    </td>
                                                                                <td class="table-cell-top">
                                                            0
                                                    </td>

            </tr>
                    <tr class="table-odd ">
								<td>5</td>
                                                                            <td class="table-cell-jmeno">
                                                            <a href=/profil/43871>Petr Chovánek</a>
                                                    </td>
                                                                                <td class="table-cell-done">
                                                            21
                                                    </td>
                                                                                <td class="table-cell-p">
                                                            65%
                                                    </td>
                                                                                <td class="table-cell-top">
                                                            0
                                                    </td>

            </tr>
                </tbody>
            </table>
	<div class="pull-right">


	</div>
	<div class="clearfix"></div>
</div>
    <script type="text/javascript">
        (function($) {
        "use strict";

        var insertParamInQueryString = function (key, value) {
            key = encodeURIComponent(key);
            value = encodeURIComponent(value);

            var query = document.location.search.substr(1),
                kvp = query.length > 0 ? query.split('&') : [],
                i = kvp.length,
                x;

            while(i--) {
                x = kvp[i].split('=');
                if (x[0] == key) {
                    x[1] = value;
                    kvp[i] = x.join('=');
                    break;
                }
            }

            if(i < 0) {
                kvp[kvp.length] = [key, value].join('=');
            }

            //this will reload the page, it's likely better to store this until finished
            document.location.search = kvp.join('&');
        };

        $('#t_grid_filter_form').submit(function(e) {
            e.preventDefault();
            var value = $('#t_grid_filter').val();
            insertParamInQueryString('t_grid_filter', value);
        });
    })(jQuery);
</script>
<a href="/tip-liga/?soutez=31" class="">Zobrazit celou tabulku</a>		<br /><br />
		<div id="inner-container-reklama-sekce4" class="pinned-container">
			<div class="pinned">
				<div id='adw_rectangle4'><script>googletag.cmd.push(function() { googletag.display('adw_rectangle4'); });</script></div>			</div>
		</div>
	</div>	</div>
</div>
				</div>
			</div>
		</section>

		<div class="clearfix"></div>
		<div id='adw_footboard'>
	<script>googletag.cmd.push(function() { googletag.display('adw_footboard'); });</script>
</div>

		<div id="footer-wrapper" class="outer-container">
			<div id="footer" class="inner-container light">
				<div id="footer-menu">
					<ul>
						<li><a href="/o-projektu/">O projektu</a></li>
						<li><a href="/kariera/">Kariéra</a></li>
						<li><a href="/reklama/">Reklama</a></li>
						<li><a href="/kontakt/">Kontakty</a></li>
					</ul>
				</div>
									<div id="copyright">
						<a href="/podminky-uziti/">Všeobecné podmínky portálu fotbalunas.cz</a> |
						&copy; Copyright <a href="http://www.kpksport.cz" title="KPK sport s.r.o.">KPK sport s.r.o.</a> Jakékoliv užití obsahu včetně převzetí, šíření či dalšího zpřístupňování článků a fotografií je bez souhlasu KPK sport, s.r.o. zakázáno.<br />
						Provozovatelem serveru fotbalunas.cz je KPK sport, s.r.o.
					</div>
							</div>
		</div>

	</div>
	</div>
	</body>
</html>
`;

export const LEAGUE_DATA: SoccerBotResponse<SoccerBotTeam[]> = {
  ok: true,
  data: [
    { id: '453', name: 'TJ Sokol Lom' },
    { id: '62', name: 'SK Klatovy 1898' },
    { id: '3737', name: 'TJ Přeštice' },
    { id: '230', name: 'FK Jindřichův Hradec 1910' },
    { id: '4939', name: 'SK Dynamo České Budějovice B' },
    { id: '147', name: 'SK Otava Katovice' },
    { id: '224', name: 'FK Spartak Soběslav' },
    { id: '3736', name: 'SK Petřín Plzeň' },
    { id: '3682', name: 'TJ Slavoj Mýto' },
    { id: '70', name: 'FC Viktoria Mariánské Lázně' },
    { id: '59', name: 'SK Senco Doubravka' },
    { id: '69', name: 'FC Rokycany' },
    { id: '68', name: 'FK Hvězda Cheb' },
    { id: '683', name: 'Český Lev - Union Beroun' },
    { id: '55', name: 'SK Hořovice' },
    { id: '675', name: 'TJ Tatran Sedlčany' }
  ]
};
