import { SoccerBotPlayer, SoccerBotPositionGroup, SoccerBotResponse } from '../../../lib/shared/interfaces';

export const TEAM_HTML = `
<!DOCTYPE html>
<html>
    <head>
		<base href="/" />
		<meta charset="UTF-8">


		<title>	SK Klatovy 1898 |
 fotbalunas.cz</title>


		<meta name="description" content="FOTBALUNAS.CZ - fotky, tipování, hodnocení, komentáře a mnoho dalšího na nejčtenějším místě českého internetu o amatérském fotbalu."/>
		<meta property="og:title" content="	SK Klatovy 1898 |
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
		googletag.pubads().setTargeting("url","tym/62/");
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
</div>												</header>

			<section id="wrapper" class="inner-container">
				<div id="content-wrapper" class="outer-container">
					<div id="content" class="inner-container">
					<div class="row">
	<div class="col-xs-12">
		<h1>SK Klatovy 1898</h1>
		<div id="fultop-1000-100" class="rtb height-90">
	<div id='adw_midboard'><script>googletag.cmd.push(function() { googletag.display('adw_midboard'); });</script></div>
</div>	</div>
</div>

<div class="row">
	<div class="col-xs-8">
					<div class="thumbnail pull-left margin-right">
				<img src="/cache/b/e/4/3/e/be43eafa19593b9cb3a2a090380d05eb5adcf942.png" />
			</div>

		<h3>Klub: <a href="/klub/62/">SK Klatovy 1898</a></h3>
		A-tým klubu
		<br />
		<div class="clear"></div>

				<br />
		<h3>Aktuální soutěž</h3>
		<a href="/soutez/31/">Divize A</a>
		<h3>Poslední zápasy</h3>
					<ul>

<li class="zapas-item">
		<table class="zapas-item-table">
			<tr>
				<td class="zapas-item-icon" width="20">
					<a href="/registrovana-sekce/pridat-report/342751/" class="btn-plus" title="Poslat report, video, foto"></a>
				</td>
				<td class="zapas-item-utkani text-left">
					<a href="/zapas/342751/" >


												Beroun
																			-
												Klatovy

											</a>
				</td>
				<td class="zapas-item-vysledek">
																		<a href="/zapas/342751/">
															0:2


															(0:1)							</a>
												<a href="/zapas/342751/">
							<small class="btn-sm alert-success">28.08. 10:15</small>
															<span class="glyphicon glyphicon-pencil"></span>
																				</a>
									</td>
			</tr>
		</table>
</li>

<li class="zapas-item">
		<table class="zapas-item-table">
			<tr>
				<td class="zapas-item-icon" width="20">
					<a href="/registrovana-sekce/pridat-report/342740/" class="btn-plus" title="Poslat report, video, foto"></a>
				</td>
				<td class="zapas-item-utkani text-left">
					<a href="/zapas/342740/" >


												Klatovy
																			-
												Rokycany

											</a>
				</td>
				<td class="zapas-item-vysledek">
																		<a href="/zapas/342740/">
															2:0


															(0:0)							</a>
												<a href="/zapas/342740/">
							<small class="btn-sm alert-success">21.08. 17:00</small>
															<span class="glyphicon glyphicon-pencil"></span>
																				</a>
									</td>
			</tr>
		</table>
</li>

<li class="zapas-item">
		<table class="zapas-item-table">
			<tr>
				<td class="zapas-item-icon" width="20">
					<a href="/registrovana-sekce/pridat-report/342731/" class="btn-plus" title="Poslat report, video, foto"></a>
				</td>
				<td class="zapas-item-utkani text-left">
					<a href="/zapas/342731/" >


												Mar. Lázně
																			-
												Klatovy

											</a>
				</td>
				<td class="zapas-item-vysledek">
																		<a href="/zapas/342731/">
															4:1


															(1:0)							</a>
												<a href="/zapas/342731/">
							<small class="btn-sm alert-success">14.08. 10:15</small>
															<span class="glyphicon glyphicon-pencil"></span>
																				</a>
									</td>
			</tr>
		</table>
</li>

<li class="zapas-item">
		<table class="zapas-item-table">
			<tr>
				<td class="zapas-item-icon" width="20">
					<a href="/registrovana-sekce/pridat-report/342723/" class="btn-plus" title="Poslat report, video, foto"></a>
				</td>
				<td class="zapas-item-utkani text-left">
					<a href="/zapas/342723/" >


												Klatovy
																			-
												Mýto

											</a>
				</td>
				<td class="zapas-item-vysledek">
																		<a href="/zapas/342723/">
															3:0


															(0:0)							</a>
												<a href="/zapas/342723/">
							<small class="btn-sm alert-success">07.08. 17:00</small>
															<span class="glyphicon glyphicon-pencil"></span>
																				</a>
									</td>
			</tr>
		</table>
</li>

<li class="zapas-item">
		<table class="zapas-item-table">
			<tr>
				<td class="zapas-item-icon" width="20">
					<a href="/registrovana-sekce/pridat-report/342719/" class="btn-plus" title="Poslat report, video, foto"></a>
				</td>
				<td class="zapas-item-utkani text-left">
					<a href="/zapas/342719/" >


												Klatovy
																			-
												Dynamo ČB
															B

											</a>
				</td>
				<td class="zapas-item-vysledek">
																		<a href="/zapas/342719/">
															2:1


															(1:0)							</a>
												<a href="/zapas/342719/">
							<small class="btn-sm alert-success">31.07. 17:00</small>
															<span class="glyphicon glyphicon-pencil"></span>
																				</a>
									</td>
			</tr>
		</table>
</li>
							</ul>
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

export const CLUB_HTML = `
<!DOCTYPE html>
<html>
    <head>
		<base href="/" />
		<meta charset="UTF-8">


		<title>	SK Klatovy 1898 |
 fotbalunas.cz</title>


		<meta name="description" content="FOTBALUNAS.CZ - fotky, tipování, hodnocení, komentáře a mnoho dalšího na nejčtenějším místě českého internetu o amatérském fotbalu."/>
		<meta property="og:title" content="	SK Klatovy 1898 |
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
	googletag.defineOutOfPageSlot('/16240546/v08_hp_hp_c00_branding_skin_bg_2000x1200', 'adw_branding_skin').addService(googletag.pubads());
				googletag.defineSlot('/16240546/v08_hp_hp_c04_midboard_970x200', [[970, 100], [970, 90], [970, 200], [728, 90], [970, 150], [970, 210]], 'adw_midboard').addService(googletag.pubads());
	googletag.defineSlot('/16240546/v08_hp_hp_c05_rectangle1_300x600', [[300, 250], [300, 300], [300, 600]], 'adw_rectangle1').addService(googletag.pubads());
	googletag.defineSlot('/16240546/v08_hp_hp_c06_rectangle2_300x600', [[300, 250], [300, 300], [300, 600]], 'adw_rectangle2').addService(googletag.pubads());
	googletag.defineSlot('/16240546/v08_hp_hp_c07_rectangle3_300x600', [[300, 250], [300, 300], [300, 600]], 'adw_rectangle3').addService(googletag.pubads());
	googletag.defineSlot('/16240546/v08_hp_hp_c08_rectangle4_300x600', [[300, 250], [300, 300], [300, 600]], 'adw_rectangle4').addService(googletag.pubads());
		googletag.defineSlot('/16240546/v08_hp_hp_c11_infobox1_605x400', [[480, 300], [480, 150], [605, 200], [605, 100], [605, 400], [300, 250], [300, 300], [605, 300], [605, 250], [605, 150]], 'adw_infobox1').addService(googletag.pubads());
	googletag.defineSlot('/16240546/v08_hp_hp_c12_infobox2_605x400', [[480, 300], [480, 150], [605, 200], [605, 100], [605, 400], [300, 250], [300, 300], [605, 300], [605, 250], [605, 150]], 'adw_infobox2').addService(googletag.pubads());
	googletag.defineSlot('/16240546/v08_hp_hp_c13_infobox3_605x400', [[480, 300], [480, 150], [605, 200], [605, 100], [605, 400], [300, 250], [300, 300], [605, 300], [605, 250], [605, 150]], 'adw_infobox3').addService(googletag.pubads());
	googletag.defineSlot('/16240546/v08_hp_hp_c14_footboard_1000x300', [[970, 200], [970, 310], [728, 90], [1000, 150], [970, 100], [970, 210], [1000, 300], [970, 250], [1000, 200], [1000, 310], [970, 150], [1000, 100], [1000, 210], [970, 90], [1000, 250]], 'adw_footboard').addService(googletag.pubads());
		googletag.pubads().setTargeting("url","klub/62/");
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
																						<li><a href="/tip-liga/" title="Interaktivní přehled - tipujte na výsledky fotbalových utkání z libovolné soutěže napříč celou ČR">TIP liga</a></li>
				<li><a href="/diskuze/" title="Přehled všech diskuzí z celé ČR - vyjádřete svůj názor, hodnoťte hráče, rozhodčí, zázemí, ... na fotbalunas.cz!">Diskuze</a></li>
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
</div>												</header>

			<section id="wrapper" class="inner-container">
				<div id="content-wrapper" class="outer-container">
					<div id="content" class="inner-container">

<div class="row">
	<div class="col-xs-12">
		<h1>
			SK Klatovy 1898

					</h1>
		<div id="fultop-1000-100" class="rtb height-90">
	<div id='adw_midboard'><script>googletag.cmd.push(function() { googletag.display('adw_midboard'); });</script></div>
</div>	</div>
</div>
<div class="row">
	<div class="col-xs-8">

					<div class="thumbnail pull-left margin-right">
				<img src="/cache/b/e/4/3/e/be43eafa19593b9cb3a2a090380d05eb5adcf942.png" />
			</div>


		<div class="clear"></div>

					<div class="panel panel-default">
				<div class="panel-heading">
					<h3 class="panel-title">Informace o klubu</h3>
				</div>
				<div class="panel-body">
											<div class="panel nomargin"><span class="glyphicon glyphicon-home"></span> Gorkého 440/II, 33901 Klatovy</div>
																<div class="panel nomargin"><a href="http://www.fotbal-klatovy.cz" target="_blank"><span class="glyphicon glyphicon-globe"></span> http://www.fotbal-klatovy.cz</a></div>

											<div class="panel nomargin"><a href="mailto:tjklatovykopana@centrum.cz"><span class="glyphicon glyphicon-envelope"></span> tjklatovykopana@centrum.cz</a></div>

											<div class="panel"><span class="glyphicon glyphicon-phone"></span> 605 200 827</div>

									</div>
			</div>

		<h3>Týmy</h3>

					<a class="btn btn-default" href="/tym/62/">SK Klatovy 1898</a>
					<a class="btn btn-default" href="/tym/3871/">SK Klatovy 1898 B</a>
				<br /><br />

									<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">
							<a href="/tym/62/">
								SK Klatovy 1898</a><br />
																<small><a href="/soutez/31/">Divize A</a></small>
														</h3>
					</div>
					<div class="panel-body">
						<ul>

<li class="zapas-item">
		<table class="zapas-item-table">
			<tr>
				<td class="zapas-item-icon" width="20">
					<a href="/registrovana-sekce/pridat-report/342751/" class="btn-plus" title="Poslat report, video, foto"></a>
				</td>
				<td class="zapas-item-utkani text-left">
					<a href="/zapas/342751/" >


												Beroun
																			-
												Klatovy

											</a>
				</td>
				<td class="zapas-item-vysledek">
																		<a href="/zapas/342751/">
															0:2


															(0:1)							</a>
												<a href="/zapas/342751/">
							<small class="btn-sm alert-success">28.08. 10:15</small>
															<span class="glyphicon glyphicon-pencil"></span>
																				</a>
									</td>
			</tr>
		</table>
</li>

<li class="zapas-item">
		<table class="zapas-item-table">
			<tr>
				<td class="zapas-item-icon" width="20">
					<a href="/registrovana-sekce/pridat-report/342740/" class="btn-plus" title="Poslat report, video, foto"></a>
				</td>
				<td class="zapas-item-utkani text-left">
					<a href="/zapas/342740/" >


												Klatovy
																			-
												Rokycany

											</a>
				</td>
				<td class="zapas-item-vysledek">
																		<a href="/zapas/342740/">
															2:0


															(0:0)							</a>
												<a href="/zapas/342740/">
							<small class="btn-sm alert-success">21.08. 17:00</small>
															<span class="glyphicon glyphicon-pencil"></span>
																				</a>
									</td>
			</tr>
		</table>
</li>

<li class="zapas-item">
		<table class="zapas-item-table">
			<tr>
				<td class="zapas-item-icon" width="20">
					<a href="/registrovana-sekce/pridat-report/342731/" class="btn-plus" title="Poslat report, video, foto"></a>
				</td>
				<td class="zapas-item-utkani text-left">
					<a href="/zapas/342731/" >


												Mar. Lázně
																			-
												Klatovy

											</a>
				</td>
				<td class="zapas-item-vysledek">
																		<a href="/zapas/342731/">
															4:1


															(1:0)							</a>
												<a href="/zapas/342731/">
							<small class="btn-sm alert-success">14.08. 10:15</small>
															<span class="glyphicon glyphicon-pencil"></span>
																				</a>
									</td>
			</tr>
		</table>
</li>

<li class="zapas-item">
		<table class="zapas-item-table">
			<tr>
				<td class="zapas-item-icon" width="20">
					<a href="/registrovana-sekce/pridat-report/342723/" class="btn-plus" title="Poslat report, video, foto"></a>
				</td>
				<td class="zapas-item-utkani text-left">
					<a href="/zapas/342723/" >


												Klatovy
																			-
												Mýto

											</a>
				</td>
				<td class="zapas-item-vysledek">
																		<a href="/zapas/342723/">
															3:0


															(0:0)							</a>
												<a href="/zapas/342723/">
							<small class="btn-sm alert-success">07.08. 17:00</small>
															<span class="glyphicon glyphicon-pencil"></span>
																				</a>
									</td>
			</tr>
		</table>
</li>

<li class="zapas-item">
		<table class="zapas-item-table">
			<tr>
				<td class="zapas-item-icon" width="20">
					<a href="/registrovana-sekce/pridat-report/342719/" class="btn-plus" title="Poslat report, video, foto"></a>
				</td>
				<td class="zapas-item-utkani text-left">
					<a href="/zapas/342719/" >


												Klatovy
																			-
												Dynamo ČB
															B

											</a>
				</td>
				<td class="zapas-item-vysledek">
																		<a href="/zapas/342719/">
															2:1


															(1:0)							</a>
												<a href="/zapas/342719/">
							<small class="btn-sm alert-success">31.07. 17:00</small>
															<span class="glyphicon glyphicon-pencil"></span>
																				</a>
									</td>
			</tr>
		</table>
</li>
													</ul>
					</div>
				</div>
							<div class="panel panel-default">
					<div class="panel-heading">
						<h3 class="panel-title">
							<a href="/tym/3871/">
								SK Klatovy 1898 B</a><br />
																<small><a href="/soutez/338/">Plzeňský  | 1.B třída sk. B</a></small>
														</h3>
					</div>
					<div class="panel-body">
						<ul>

<li class="zapas-item">
		<table class="zapas-item-table">
			<tr>
				<td class="zapas-item-icon" width="20">
					<a href="/registrovana-sekce/pridat-report/344551/" class="btn-plus" title="Poslat report, video, foto"></a>
				</td>
				<td class="zapas-item-utkani text-left">
					<a href="/zapas/344551/" >


												Klatovy
														B
																			-
												Štěnovice

											</a>
				</td>
				<td class="zapas-item-vysledek">
																		<a href="/zapas/344551/">
															4:3


															(2:1)							</a>
												<a href="/zapas/344551/">
							<small class="btn-sm alert-success">29.08. 15:00</small>
															<span class="glyphicon glyphicon-pencil"></span>
																				</a>
									</td>
			</tr>
		</table>
</li>

<li class="zapas-item">
		<table class="zapas-item-table">
			<tr>
				<td class="zapas-item-icon" width="20">
					<a href="/registrovana-sekce/pridat-report/344549/" class="btn-plus" title="Poslat report, video, foto"></a>
				</td>
				<td class="zapas-item-utkani text-left">
					<a href="/zapas/344549/" >


												Chotěšov
																			-
												Klatovy
															B

											</a>
				</td>
				<td class="zapas-item-vysledek">
																		<a href="/zapas/344549/">
															2:3p.


															(2:1)							</a>
												<a href="/zapas/344549/">
							<small class="btn-sm alert-success">21.08. 17:30</small>
															<span class="glyphicon glyphicon-pencil"></span>
																				</a>
									</td>
			</tr>
		</table>
</li>

<li class="zapas-item">
		<table class="zapas-item-table">
			<tr>
				<td class="zapas-item-icon" width="20">
					<a href="/registrovana-sekce/pridat-report/357625/" class="btn-plus" title="Poslat report, video, foto"></a>
				</td>
				<td class="zapas-item-utkani text-left">
					<a href="/zapas/357625/" >


												Klatovy
														B
																			-
												Bolešiny

											</a>
				</td>
				<td class="zapas-item-vysledek">
																		<a href="/zapas/357625/">
															4:2


															(1:1)							</a>
												<a href="/zapas/357625/">
							<small class="btn-sm alert-success">15.08. 15:00</small>
															<span class="glyphicon glyphicon-pencil"></span>
																				</a>
									</td>
			</tr>
		</table>
</li>

<li class="zapas-item">
		<table class="zapas-item-table">
			<tr>
				<td class="zapas-item-icon" width="20">
					<a href="/registrovana-sekce/pridat-report/357620/" class="btn-plus" title="Poslat report, video, foto"></a>
				</td>
				<td class="zapas-item-utkani text-left">
					<a href="/zapas/357620/" >


												Měcholupy
																			-
												Klatovy
															B

											</a>
				</td>
				<td class="zapas-item-vysledek">
																		<a href="/zapas/357620/">
															3:2


															(2:1)							</a>
												<a href="/zapas/357620/">
							<small class="btn-sm alert-success">07.08. 18:00</small>
															<span class="glyphicon glyphicon-pencil"></span>
																				</a>
									</td>
			</tr>
		</table>
</li>

<li class="zapas-item">
		<table class="zapas-item-table">
			<tr>
				<td class="zapas-item-icon" width="20">
					<a href="/registrovana-sekce/pridat-report/328745/" class="btn-plus" title="Poslat report, video, foto"></a>
				</td>
				<td class="zapas-item-utkani text-left">
					<a href="/zapas/328745/" >

												Klatovy
														B
																			-
												Chotěšov
																								</a>
				</td>
				<td class="zapas-item-vysledek">
																		<a href="/zapas/328745/">-:- (-:-)</a>
												<a href="/zapas/328745/">
							<small class="btn-sm alert-success">15.11. 10:30</small>
															<span class="glyphicon glyphicon-list-alt"></span>
																				</a>
									</td>
			</tr>
		</table>
</li>
													</ul>
					</div>
				</div>

					<h3>Soupiska</h3>
			<table class="table table-striped table-bordered table-hover table-condensed">
				<thead>
					<tr>
						<th>Číslo</th>
						<th>Jméno</th>
						<th>Věk</th>
						<th>Pozice</th>
					</tr>
				</thead>
									<tr>
						<td>20</td>
						<td>
							<a href="/hrac/189875/">
								Dominik Baloun
							</a>
						</td>
						<td></td>
						<td>Brankář</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/20464/">
								Jan Herman
							</a>
						</td>
						<td></td>
						<td>Brankář</td>
					</tr>
									<tr>
						<td>20</td>
						<td>
							<a href="/hrac/154326/">
								František Hrachovec
							</a>
						</td>
						<td></td>
						<td>Brankář</td>
					</tr>
									<tr>
						<td>20</td>
						<td>
							<a href="/hrac/143592/">
								Ondřej Mareš
							</a>
						</td>
						<td></td>
						<td>Brankář</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/3944/">
								Jiří Rybár
							</a>
						</td>
						<td></td>
						<td>Brankář</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/2025/">
								Petr Blažek
							</a>
						</td>
						<td> 36 let</td>
						<td>Obránce</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/37356/">
								Denis Chirinciuc
							</a>
						</td>
						<td></td>
						<td>Obránce</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/31130/">
								Zdeněk Cibulka
							</a>
						</td>
						<td></td>
						<td>Obránce</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/2028/">
								Milan Mészáros
							</a>
						</td>
						<td> 31 let</td>
						<td>Obránce</td>
					</tr>
									<tr>
						<td>2</td>
						<td>
							<a href="/hrac/192603/">
								Jan Ouda
							</a>
						</td>
						<td></td>
						<td>Obránce</td>
					</tr>
									<tr>
						<td>12</td>
						<td>
							<a href="/hrac/192606/">
								Matěj Procházka
							</a>
						</td>
						<td></td>
						<td>Obránce</td>
					</tr>
									<tr>
						<td>3</td>
						<td>
							<a href="/hrac/189258/">
								Lukáš Rajtmajer
							</a>
						</td>
						<td></td>
						<td>Obránce</td>
					</tr>
									<tr>
						<td>4</td>
						<td>
							<a href="/hrac/189968/">
								Jan Šťastný
							</a>
						</td>
						<td></td>
						<td>Obránce</td>
					</tr>
									<tr>
						<td>10</td>
						<td>
							<a href="/hrac/189966/">
								Štěpán Tomaka
							</a>
						</td>
						<td></td>
						<td>Obránce</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/8753/">
								Stanislav Vítovec
							</a>
						</td>
						<td></td>
						<td>Obránce</td>
					</tr>
									<tr>
						<td>5</td>
						<td>
							<a href="/hrac/20306/">
								Martin Wágner
							</a>
						</td>
						<td></td>
						<td>Obránce</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/18756/">
								Jakub Bošek
							</a>
						</td>
						<td></td>
						<td>Záložník</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/8774/">
								David Dolanský
							</a>
						</td>
						<td></td>
						<td>Záložník</td>
					</tr>
									<tr>
						<td>9</td>
						<td>
							<a href="/hrac/192605/">
								Martin Gunitš
							</a>
						</td>
						<td></td>
						<td>Záložník</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/8766/">
								Pavel Harmady
							</a>
						</td>
						<td></td>
						<td>Záložník</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/20610/">
								Lukáš Homolka
							</a>
						</td>
						<td></td>
						<td>Záložník</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/2038/">
								Martin Janda
							</a>
						</td>
						<td> 30 let</td>
						<td>Záložník</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/20472/">
								Jan Ježek
							</a>
						</td>
						<td></td>
						<td>Záložník</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/8752/">
								Tomáš Jůda
							</a>
						</td>
						<td></td>
						<td>Záložník</td>
					</tr>
									<tr>
						<td>15</td>
						<td>
							<a href="/hrac/189259/">
								Lukáš Kamenský
							</a>
						</td>
						<td></td>
						<td>Záložník</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/20467/">
								Zdeněk Kotáb
							</a>
						</td>
						<td></td>
						<td>Záložník</td>
					</tr>
									<tr>
						<td>6</td>
						<td>
							<a href="/hrac/192604/">
								Petr Lucák
							</a>
						</td>
						<td></td>
						<td>Záložník</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/34608/">
								Antonín Presl
							</a>
						</td>
						<td> 33 let</td>
						<td>Záložník</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/26365/">
								Radek Radek
							</a>
						</td>
						<td></td>
						<td>Záložník</td>
					</tr>
									<tr>
						<td>12</td>
						<td>
							<a href="/hrac/189967/">
								Lukáš Šlechta
							</a>
						</td>
						<td></td>
						<td>Záložník</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/2166/">
								Lukáš Bezděk
							</a>
						</td>
						<td></td>
						<td>Útočník</td>
					</tr>
									<tr>
						<td>10</td>
						<td>
							<a href="/hrac/192607/">
								Lukáš Korpa
							</a>
						</td>
						<td></td>
						<td>Útočník</td>
					</tr>
									<tr>
						<td>7</td>
						<td>
							<a href="/hrac/192608/">
								Marek Kutka
							</a>
						</td>
						<td></td>
						<td>Útočník</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/2046/">
								Michal Lukeš
							</a>
						</td>
						<td> 28 let</td>
						<td>Útočník</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/2048/">
								Petr Páleník
							</a>
						</td>
						<td> 29 let</td>
						<td>Útočník</td>
					</tr>
									<tr>
						<td>12</td>
						<td>
							<a href="/hrac/191442/">
								Matouš Pešek
							</a>
						</td>
						<td></td>
						<td>Útočník</td>
					</tr>
									<tr>
						<td>5</td>
						<td>
							<a href="/hrac/178667/">
								David Šašek
							</a>
						</td>
						<td></td>
						<td>Útočník</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/4011/">
								Alex Vachuška
							</a>
						</td>
						<td></td>
						<td>Útočník</td>
					</tr>
									<tr>
						<td>11</td>
						<td>
							<a href="/hrac/151086/">
								Adam Aizner
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>14</td>
						<td>
							<a href="/hrac/153518/">
								Matyáš Barborka
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>15</td>
						<td>
							<a href="/hrac/177136/">
								Petr Berka
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>3</td>
						<td>
							<a href="/hrac/127448/">
								Jakub Brabec
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>3</td>
						<td>
							<a href="/hrac/173998/">
								Tomáš Daněk
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>12</td>
						<td>
							<a href="/hrac/145676/">
								František Diviš
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>12</td>
						<td>
							<a href="/hrac/152281/">
								Martin Frančík
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>12</td>
						<td>
							<a href="/hrac/157964/">
								Adrian - Marian Hrin
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>11</td>
						<td>
							<a href="/hrac/116701/">
								Jiří Jánský
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>13</td>
						<td>
							<a href="/hrac/173141/">
								Ondřej Javorský
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/108624/">
								Ondřej Karásek
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>10</td>
						<td>
							<a href="/hrac/165001/">
								Jan Kojan
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>6</td>
						<td>
							<a href="/hrac/145051/">
								Josef Kolerus
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>16</td>
						<td>
							<a href="/hrac/160313/">
								Jan Kotáb
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>13</td>
						<td>
							<a href="/hrac/153517/">
								Zdeněk Krejčiřík
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>3</td>
						<td>
							<a href="/hrac/123258/">
								Tomáš Křepel
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/114624/">
								Michal Marek
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>14</td>
						<td>
							<a href="/hrac/178674/">
								Lukáš Marek
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>6</td>
						<td>
							<a href="/hrac/141952/">
								Vladyslav Mykhalchuk
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>14</td>
						<td>
							<a href="/hrac/154040/">
								Milan Našinec
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>30</td>
						<td>
							<a href="/hrac/174682/">
								Tomáš Novák
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>7</td>
						<td>
							<a href="/hrac/145052/">
								Tomáš Partyngl
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>18</td>
						<td>
							<a href="/hrac/177022/">
								Antonín Prančl
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>14</td>
						<td>
							<a href="/hrac/160174/">
								Jiří Sedláček
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>4</td>
						<td>
							<a href="/hrac/187976/">
								Matěj Škoch
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>14</td>
						<td>
							<a href="/hrac/134471/">
								Jindřich Sojka
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/83848/">
								Jindřich Sojka
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>12</td>
						<td>
							<a href="/hrac/141193/">
								Andrii Stetsenko
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/108732/">
								Lukáš Urs
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>15</td>
						<td>
							<a href="/hrac/155004/">
								Adam Vacek
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>20</td>
						<td>
							<a href="/hrac/160409/">
								Ondřej Valeš
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td></td>
						<td>
							<a href="/hrac/113287/">
								Michal Vlček
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>11</td>
						<td>
							<a href="/hrac/186759/">
								Sebastian Weber
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
									<tr>
						<td>10</td>
						<td>
							<a href="/hrac/156857/">
								Jan Zajíček
							</a>
						</td>
						<td></td>
						<td>Neuvedeno</td>
					</tr>
							</table>

	</div>
	<div id="outer-container-reklama" class="col-xs-4">
			</div>
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

export const TEAM_DATA: SoccerBotResponse<SoccerBotPlayer[]> = {
  ok: true,
  data: [
    {
      id: '189875',
      name: 'Dominik Baloun',
      jerseyNumber: 20,
      position: SoccerBotPositionGroup.GOALKEEPER
    },
    {
      id: '20464',
      name: 'Jan Herman',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.GOALKEEPER
    },
    {
      id: '154326',
      name: 'František Hrachovec',
      jerseyNumber: 20,
      position: SoccerBotPositionGroup.GOALKEEPER
    },
    {
      id: '143592',
      name: 'Ondřej Mareš',
      jerseyNumber: 20,
      position: SoccerBotPositionGroup.GOALKEEPER
    },
    {
      id: '3944',
      name: 'Jiří Rybár',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.GOALKEEPER
    },
    {
      id: '2025',
      name: 'Petr Blažek',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.DEFENDER
    },
    {
      id: '37356',
      name: 'Denis Chirinciuc',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.DEFENDER
    },
    {
      id: '31130',
      name: 'Zdeněk Cibulka',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.DEFENDER
    },
    {
      id: '2028',
      name: 'Milan Mészáros',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.DEFENDER
    },
    {
      id: '192603',
      name: 'Jan Ouda',
      jerseyNumber: 2,
      position: SoccerBotPositionGroup.DEFENDER
    },
    {
      id: '192606',
      name: 'Matěj Procházka',
      jerseyNumber: 12,
      position: SoccerBotPositionGroup.DEFENDER
    },
    {
      id: '189258',
      name: 'Lukáš Rajtmajer',
      jerseyNumber: 3,
      position: SoccerBotPositionGroup.DEFENDER
    },
    {
      id: '189968',
      name: 'Jan Šťastný',
      jerseyNumber: 4,
      position: SoccerBotPositionGroup.DEFENDER
    },
    {
      id: '189966',
      name: 'Štěpán Tomaka',
      jerseyNumber: 10,
      position: SoccerBotPositionGroup.DEFENDER
    },
    {
      id: '8753',
      name: 'Stanislav Vítovec',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.DEFENDER
    },
    {
      id: '20306',
      name: 'Martin Wágner',
      jerseyNumber: 5,
      position: SoccerBotPositionGroup.DEFENDER
    },
    {
      id: '18756',
      name: 'Jakub Bošek',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.MIDFIELDER
    },
    {
      id: '8774',
      name: 'David Dolanský',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.MIDFIELDER
    },
    {
      id: '192605',
      name: 'Martin Gunitš',
      jerseyNumber: 9,
      position: SoccerBotPositionGroup.MIDFIELDER
    },
    {
      id: '8766',
      name: 'Pavel Harmady',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.MIDFIELDER
    },
    {
      id: '20610',
      name: 'Lukáš Homolka',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.MIDFIELDER
    },
    {
      id: '2038',
      name: 'Martin Janda',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.MIDFIELDER
    },
    {
      id: '20472',
      name: 'Jan Ježek',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.MIDFIELDER
    },
    {
      id: '8752',
      name: 'Tomáš Jůda',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.MIDFIELDER
    },
    {
      id: '189259',
      name: 'Lukáš Kamenský',
      jerseyNumber: 15,
      position: SoccerBotPositionGroup.MIDFIELDER
    },
    {
      id: '20467',
      name: 'Zdeněk Kotáb',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.MIDFIELDER
    },
    {
      id: '192604',
      name: 'Petr Lucák',
      jerseyNumber: 6,
      position: SoccerBotPositionGroup.MIDFIELDER
    },
    {
      id: '34608',
      name: 'Antonín Presl',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.MIDFIELDER
    },
    {
      id: '26365',
      name: 'Radek Radek',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.MIDFIELDER
    },
    {
      id: '189967',
      name: 'Lukáš Šlechta',
      jerseyNumber: 12,
      position: SoccerBotPositionGroup.MIDFIELDER
    },
    {
      id: '2166',
      name: 'Lukáš Bezděk',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.ATTACKER
    },
    {
      id: '192607',
      name: 'Lukáš Korpa',
      jerseyNumber: 10,
      position: SoccerBotPositionGroup.ATTACKER
    },
    {
      id: '192608',
      name: 'Marek Kutka',
      jerseyNumber: 7,
      position: SoccerBotPositionGroup.ATTACKER
    },
    {
      id: '2046',
      name: 'Michal Lukeš',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.ATTACKER
    },
    {
      id: '2048',
      name: 'Petr Páleník',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.ATTACKER
    },
    {
      id: '191442',
      name: 'Matouš Pešek',
      jerseyNumber: 12,
      position: SoccerBotPositionGroup.ATTACKER
    },
    {
      id: '178667',
      name: 'David Šašek',
      jerseyNumber: 5,
      position: SoccerBotPositionGroup.ATTACKER
    },
    {
      id: '4011',
      name: 'Alex Vachuška',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.ATTACKER
    },
    {
      id: '151086',
      name: 'Adam Aizner',
      jerseyNumber: 11,
      position: undefined
    },
    {
      id: '153518',
      name: 'Matyáš Barborka',
      jerseyNumber: 14,
      position: undefined
    },
    {
      id: '177136',
      name: 'Petr Berka',
      jerseyNumber: 15,
      position: undefined
    },
    {
      id: '127448',
      name: 'Jakub Brabec',
      jerseyNumber: 3,
      position: undefined
    },
    {
      id: '173998',
      name: 'Tomáš Daněk',
      jerseyNumber: 3,
      position: undefined
    },
    {
      id: '145676',
      name: 'František Diviš',
      jerseyNumber: 12,
      position: undefined
    },
    {
      id: '152281',
      name: 'Martin Frančík',
      jerseyNumber: 12,
      position: undefined
    },
    {
      id: '157964',
      name: 'Adrian - Marian Hrin',
      jerseyNumber: 12,
      position: undefined
    },
    {
      id: '116701',
      name: 'Jiří Jánský',
      jerseyNumber: 11,
      position: undefined
    },
    {
      id: '173141',
      name: 'Ondřej Javorský',
      jerseyNumber: 13,
      position: undefined
    },
    {
      id: '108624',
      name: 'Ondřej Karásek',
      jerseyNumber: undefined,
      position: undefined
    },
    {
      id: '165001',
      name: 'Jan Kojan',
      jerseyNumber: 10,
      position: undefined
    },
    {
      id: '145051',
      name: 'Josef Kolerus',
      jerseyNumber: 6,
      position: undefined
    },
    {
      id: '160313',
      name: 'Jan Kotáb',
      jerseyNumber: 16,
      position: undefined
    },
    {
      id: '153517',
      name: 'Zdeněk Krejčiřík',
      jerseyNumber: 13,
      position: undefined
    },
    {
      id: '123258',
      name: 'Tomáš Křepel',
      jerseyNumber: 3,
      position: undefined
    },
    {
      id: '114624',
      name: 'Michal Marek',
      jerseyNumber: undefined,
      position: undefined
    },
    {
      id: '178674',
      name: 'Lukáš Marek',
      jerseyNumber: 14,
      position: undefined
    },
    {
      id: '141952',
      name: 'Vladyslav Mykhalchuk',
      jerseyNumber: 6,
      position: undefined
    },
    {
      id: '154040',
      name: 'Milan Našinec',
      jerseyNumber: 14,
      position: undefined
    },
    {
      id: '174682',
      name: 'Tomáš Novák',
      jerseyNumber: 30,
      position: undefined
    },
    {
      id: '145052',
      name: 'Tomáš Partyngl',
      jerseyNumber: 7,
      position: undefined
    },
    {
      id: '177022',
      name: 'Antonín Prančl',
      jerseyNumber: 18,
      position: undefined
    },
    {
      id: '160174',
      name: 'Jiří Sedláček',
      jerseyNumber: 14,
      position: undefined
    },
    {
      id: '187976',
      name: 'Matěj Škoch',
      jerseyNumber: 4,
      position: undefined
    },
    {
      id: '134471',
      name: 'Jindřich Sojka',
      jerseyNumber: 14,
      position: undefined
    },
    {
      id: '83848',
      name: 'Jindřich Sojka',
      jerseyNumber: undefined,
      position: undefined
    },
    {
      id: '141193',
      name: 'Andrii Stetsenko',
      jerseyNumber: 12,
      position: undefined
    },
    {
      id: '108732',
      name: 'Lukáš Urs',
      jerseyNumber: undefined,
      position: undefined
    },
    {
      id: '155004',
      name: 'Adam Vacek',
      jerseyNumber: 15,
      position: undefined
    },
    {
      id: '160409',
      name: 'Ondřej Valeš',
      jerseyNumber: 20,
      position: undefined
    },
    {
      id: '113287',
      name: 'Michal Vlček',
      jerseyNumber: undefined,
      position: undefined
    },
    {
      id: '186759',
      name: 'Sebastian Weber',
      jerseyNumber: 11,
      position: undefined
    },
    {
      id: '156857',
      name: 'Jan Zajíček',
      jerseyNumber: 10,
      position: undefined
    }
  ]
};
