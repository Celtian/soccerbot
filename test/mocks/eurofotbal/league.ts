import { SoccerBotResponse, SoccerBotTeam } from '../../../src/shared/interfaces';

export const LEAGUE_HTML = `

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html xmlns:og="http://ogp.me/ns#" xmlns:fb="https://www.facebook.com/2008/fbml">
<head>
<title>1. Fotbalová liga - Fotbal Česko - 1. Fotbalová liga: zprávy, výsledky, statistiky</title>
<meta name="description" content="Fotbalová sekce Česko - 1. Fotbalová liga na EuroFotbal.cz nabízí novinky, výsledky a statistiky k soutěži 1. Fotbalová liga">
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta name="verify-v1" content="LMiHVgr9Hk5cQoaXlt2KDTx64extEBNUcXc8Srrv0zQ=" />
<link rel="apple-touch-icon" sizes="180x180" href="/res/img/apple/apple-touch-icon-180x180.png" alt="iphone 6 plus" />
<link rel="apple-touch-icon" sizes="152x152" href="/res/img/apple/apple-touch-icon-152x152.png" alt="ipad retina ios≥7" />
<link rel="apple-touch-icon" sizes="120x120" href="/res/img/apple/apple-touch-icon-120x120.png" alt="iphone retina ios≥7" />
<link rel="apple-touch-icon" sizes="72x72" href="/res/img/apple/apple-touch-icon-72x72.png" alt="first and second gen ipad" />
<link rel="apple-touch-icon" sizes="57x57" href="/res/img/apple/apple-touch-icon-57x57.png" alt="non-retina iphone, ipod touch, android 2.1+" />
<link rel="apple-touch-icon" href="/res/img/apple/apple-touch-icon.png" alt="everything else" />
<link rel="shortcut icon" href="/res/img/favicon.ico" />
<link rel="icon" type="image/x-icon" href="/res/img/favicon.ico" />
<link rel="stylesheet" href="/res/css/advert.css?par=1630078966" type="text/css">
<link rel="stylesheet" href="/res/css/_basic.css?par=1630078966" type="text/css">
<link rel="stylesheet" href="/res/css/competition.css?par=1630078966" type="text/css">
<link rel="stylesheet" href="/res/css/poll.css?par=1630078966" type="text/css">
<link rel="stylesheet" href="/res/css/article.css?par=1630078966" type="text/css">
<script src="/res/js/jquery-1.11.1.min.js?par=1630078966" language="JavaScript" type="text/javascript"></script>
<script src="/res/js/_basic.js?par=1630078966" language="JavaScript" type="text/javascript"></script>
<script src="https://cdn.cpex.cz/skin/v2/cpex-skin.js" language="JavaScript" type="text/javascript"></script>
<script src="/res/js/ajax.js?par=1630078966" language="JavaScript" type="text/javascript"></script>
<script src="/res/js/banner-scroll.js.php?par=1630078966" language="JavaScript" type="text/javascript"></script>
<script src="/res/js/waypoints.js?par=1630078966" language="JavaScript" type="text/javascript"></script>
<script src="/res/js/poll.js?par=1630078966" language="JavaScript" type="text/javascript"></script>
<script src="/res/js/expres.js?par=1630078966" language="JavaScript" type="text/javascript"></script>
</head>
<body>
			<!-- Adform publisher tag -->
			<!-- Tag for Eurofotbal.cz_21161 - TT-Eurofotbal-CW-Nestandard-300-104-desktop placement -->
			<script data-adfscript="adx.adform.net/adx/?mid=448205"></script>
			<script src="//s1.adform.net/banners/scripts/adx.js" async defer></script>


<div class="screen" id="screen">
<div class="all">
<div class="main">
   <div class="header">
      <a href="/" title="" class="home-link"><span>EuroFotbal.cz - specialista na evropský fotbal</span></a>
      <span class="info">specialista na evropský fotbal</span>
      <div class="login">
         <form action="/muj/login/" method="post" class="top" onsubmit="return addLSID(this);">
            <input type="hidden" name="return" value="LzEtZm90YmFsb3ZhLWxpZ2Ev">
            <input type="text" name="login" id="loginLogin" onfocus="loginFormInit();" value="Login" class="field">
            <input type="password" name="pass" id="loginPassword" value="Heslo" class="field ml5">
            <div class="button">
               <div class="l"></div>
               <input type="submit" value="Přihlásit">
               <div class="r"></div>
            </div>
         </form>
         <div class="links">
            <a href="/muj/registrace/" title="" class="sheet-check">Registrace</a> <span class="dl">|</span> <a href="/muj/reseni-problemu/" title="" class="sheet-question">Zapomněl jsem heslo</a>
         </div>
      </div>
      <ul class="top-menu">
         <li class="active"><a href="/" title=""><span class="l"></span><span class="bg">EuroFotbal</span><span class="r"></span></a></li>
         <li><a href="/euro-2020/" title=""><span class="l"></span><span class="bg">Euro 2020</span><span class="r"></span></a></li>
         <li><a href="/tipliga/" title=""><span class="l"></span><span class="bg">Tipliga</span><span class="r"></span></a></li>
         <li><a href="/livescore/" title=""><span class="l"></span><span class="bg">Livescore</span><span class="r"></span></a></li>
         <li><a href="/video/" title=""><span class="l"></span><span class="bg">Video</span><span class="r"></span></a></li>
         <li><a href="/sazeni/" title=""><span class="l"></span><span class="bg">Sázení</span><span class="r"></span></a></li>
         <li><a href="/tv/" title=""><span class="l"></span><span class="bg">Fotbal v TV</span><span class="r"></span></a></li>
         <li><a href="/muj/" title=""><span class="l"></span><span class="bg">Můj EuroFotbal</span><span class="r"></span></a></li>
      </ul>
   </div>
   <div class="cl h10"></div>
	<div class="middle">
		<div class="col-left">
<div class="box">
	<div class="in">
		<ul class="main-menu">
			<li><a href="/" title=""><span class="l"></span>Hlavní stránka<span class="r"></span></a></li>
			<li><a href="/souteze/domaci/" title="" class="red"><span class="l"></span>Přehled soutěží<span class="r"></span></a>
				<ul>
					<li><a href="/premier-league/" title=""><span class="ar"></span>Premier League</a></li>
					<li><a href="/laliga/" title=""><span class="ar"></span>LaLiga</a></li>
					<li><a href="/serie-a/" title=""><span class="ar"></span>Serie A</a></li>
					<li><a href="/bundesliga/" title=""><span class="ar"></span>1. Bundesliga</a></li>
					<li><a href="/ligue-1/" title=""><span class="ar"></span>Ligue 1</a></li>
					<li><a href="/1-fotbalova-liga/" title="" class="active"><span class="ar"></span>1. Fotbalová liga</a></li>
					<li><a href="/fortuna-liga/" title=""><span class="ar"></span>Fortuna liga</a></li>
					<li><a href="/primeira-liga/" title=""><span class="ar"></span>Primeira Liga</a></li>
					<li><a href="/premier-liga/" title=""><span class="ar"></span>Premier Liga</a></li>
					<li><a href="/eredivisie/" title=""><span class="ar"></span>Eredivisie</a></li>
					<li><a href="/liga-mistru/" title=""><span class="ar"></span>Liga mistrů</a></li>
					<li><a href="/evropska-liga/" title=""><span class="ar"></span>Evropská liga</a></li>
					<li><a href="/konferencni-liga/" title=""><span class="ar"></span>Konferenční liga</a></li>
					<li><a href="/euro-2020/" title=""><span class="ar"></span>Mistrovství Evropy</a></li>
					<li><a href="/mistrovstvi-sveta-kvalifikace-2022/" title=""><span class="ar"></span>MS - kvalifikace</a></li>
					<li><a href="/souteze/domaci/" title="" class="last"><span class="ar"></span>další soutěže</a></li>
				</ul>
			</li>
			<li><a href="javascript: void(0);" onclick="leftMenuClick(2);" title=""><span class="l"></span>Kluby<span class="r"></span></a>
				<ul style="display: none;" id="leftSubMenu2">
					<li><a href="/kluby/anglie/arsenal-fc/" title=""><span class="ar"></span>Arsenal FC</a></li>
					<li><a href="/kluby/anglie/chelsea-fc/" title=""><span class="ar"></span>Chelsea FC</a></li>
					<li><a href="/kluby/anglie/manchester-united/" title=""><span class="ar"></span>Manchester United</a></li>
					<li><a href="/kluby/italie/ac-milan/" title=""><span class="ar"></span>AC Milán</a></li>
					<li><a href="/kluby/italie/juventus-fc/" title=""><span class="ar"></span>Juventus FC</a></li>
					<li><a href="/kluby/nemecko/bayern-mnichov/" title=""><span class="ar"></span>Bayern Mnichov</a></li>
					<li><a href="/kluby/spanelsko/fc-barcelona/" title=""><span class="ar"></span>FC Barcelona</a></li>
					<li><a href="/kluby/spanelsko/real-madrid/" title=""><span class="ar"></span>Real Madrid</a></li>
					<li><a href="/kluby/" title=""><span class="ar"></span>další kluby</a></li>
				</ul>
			</li>
			<li><a href="javascript: void(0);" onclick="leftMenuClick(3);" title=""><span class="l"></span>Reprezentace<span class="r"></span></a>
				<ul style="display: none;" id="leftSubMenu3">
					<li><a href="/reprezentace/cesko/" title=""><span class="ar"></span>Česko</a></li>
					<li><a href="/reprezentace/slovensko/" title=""><span class="ar"></span>Slovensko</a></li>
					<li><a href="/reprezentace/" title="" class="last"><span class="ar"></span>další týmy</a></li>
				</ul>
			</li>
			<li><a href="/prestupy/" title=""><span class="l"></span>Přestupy<span class="r"></span></a></li>
			<li><a href="/zapasy/" title=""><span class="l"></span>Dnešní zápasy<span class="r"></span></a></li>
			<li><a href="javascript: void(0);" onclick="leftMenuClick(1);" title=""><span class="l"></span>Články<span class="r"></span></a>
				<ul style="display: none;" id="leftSubMenu1">
					<li><a href="/clanky/aktuality/" title=""><span class="ar"></span>Aktuality</a></li>
					<li><a href="/clanky/previews/" title=""><span class="ar"></span>Previews</a></li>
					<li><a href="/clanky/komentare-a-souhrny/" title=""><span class="ar"></span>Komentáře a souhrny</a></li>
					<li><a href="/clanky/nazory-a-komentare/" title=""><span class="ar"></span>Názory a komentáře</a></li>
					<li><a href="/clanky/fejetony/" title=""><span class="ar"></span>Fejetony</a></li>
					<li><a href="/clanky/zivotopisy/" title=""><span class="ar"></span>Životopisy</a></li>
					<li><a href="/clanky/profily-historie/" title=""><span class="ar"></span>Profily, historie</a></li>
					<li><a href="/clanky/rozhovory/" title=""><span class="ar"></span>Rozhovory</a></li>
					<li><a href="/clanky/tipy-a-analyzy/" title=""><span class="ar"></span>Tipy a analýzy</a></li>
				</ul>
			</li>
			<li><a href="javascript: void(0);" onclick="leftMenuClick(4);" title=""><span class="l"></span>Témata<span class="r"></span></a>
				<ul style="display: none;" id="leftSubMenu4">
					<li><a href="/tema/eurozapisnik-2020/" title=""><span class="ar"></span>Eurozápisník</a></li>
					<li><a href="/tema/euro-2020-v-kostce/" title=""><span class="ar"></span>Euro v kostce</a></li>
					<li><a href="/tema/predstaveni-tymu-euro-2020/" title=""><span class="ar"></span>Představení týmů Eura</a></li>
					<li><a href="/tema/predstaveni-mest-euro-2020/" title=""><span class="ar"></span>Města a stadióny Eura</a></li>
					<li><a href="/tema/fantasy-euro-2020/" title=""><span class="ar"></span>Euro Fantasy</a></li>
					<li><a href="/tema/nominace-euro-2020/" title=""><span class="ar"></span>Nominace na Euro</a></li>
					<li><a href="/tema/predstaveni-tymu-copa-2021/" title=""><span class="ar"></span>Představení týmů Copy</a></li>
					<li><a href="/tema/udalosti-fl/" title=""><span class="ar"></span>Události FL</a></li>
					<li><a href="/tema/ohlednuti-lm/" title=""><span class="ar"></span>Ohlédnutí za LM</a></li>
					<li><a href="/tema/premier-league-v-kostce/" title=""><span class="ar"></span>PL v kostce</a></li>
					<li><a href="/tema/ozveny-z-bundesligy/" title=""><span class="ar"></span>Ozvěny BL</a></li>
					<li><a href="/tema/cesi-v-zahranici/" title=""><span class="ar"></span>Češi v zahraničí</a></li>
					<li><a href="/tema/evropske-koeficienty/" title=""><span class="ar"></span>Evropské koeficienty</a></li>
					<li><a href="/tema/prestupy/" title=""><span class="ar"></span>Přestupy</a></li>
					<li><a href="/tema/spekulace/" title=""><span class="ar"></span>Přestupové spekulace</a></li>
					<li><a href="/tema/zraneni/" title=""><span class="ar"></span>Zranění</a></li>
					<li><a href="/tema/historie-evropskych-poharu/" title=""><span class="ar"></span>Historie pohárů</a></li>
					<li><a href="/prehled-temat/" ><span class="ar"></span>další témata</a></li>
				</ul>
			</li>
		</ul>
	</div>
</div>
<div class="cl h10"></div>
<div class="box">
	<div class="in">
		<form action="/vyhledavani/" method="get" class="search">
			<input type="text" name="text" class="field" id="searchField" value="" placeholder="Hledaný text">
			<input type="submit" value="" class="submit" onclick="return searchSubmitCheck('searchField');">
		</form>
		<div class="cl"></div>
	</div>
</div>
<div class="cl h10"></div>
<div style="text-align: center;"><div class="adsenvelope adstextpad banx-bwin_left" id="lsadvert-zid-263" style="width:120px;"><div style="height:240px"><div class="adscontent" id="lsadvert-bwin_left"><iframe id="lsadvert-zid-263-iframe" name="banx-bwin_left" frameborder="0" scrolling="no" style="allowTransparency: true; visibility: hidden; width:120px; height:240px"></iframe></div><div class="adsgraphhori"><div class="adsghori ath-CS"></div></div></div></div></div>
<div class="box">
<div class="in">
<ul class="main-menu">
<li><a href="/clanky-pro-vas-web/" title=""><span class="l"></span>Články pro váš web!<span class="r"></span></a></li>
</ul>
</div>
</div>
<div class="cl h10"></div>
<div style="text-align: center;"><a href="/rss/"><img src="/res/img/ico-rss.gif"></a>&nbsp;&nbsp;<a href="https://wap.eurofotbal.cz/" target="_blank"><img src="/res/img/ico-wap.gif" style="margin-bottom: 2px;"></a></div>
<div class="cl h10"></div>
<div style="text-align: center;"><a href="/netvibes/"><img src="/res/img/netvibes.gif" border="0" alt="Přidej na Netvibes" title="Přidej na Netvibes"></a></div>
<div class="cl h10"></div>

		<div style="/*float: left;*/">
			<div style="text-align: center;">
				<a href="/facebook/" target="_blank"><img src="/res/img/banners/fbbanner.gif?serial=1"/></a>
			</div>
			<div style="margin-top: 2px; font-size:9px; text-align: center;">
				<a href="/facebook/">EuroFotbal</a> on Facebook
			</div>
		</div>

		</div>
<div class="col-top">
<div class="box green"><div class="in">
<h1 class="pagetitle2">Česko - 1. Fotbalová liga - zprávy</h1>
<div class="fr">
<select class="pagetitle2select" name="seasonSelect" onchange="location.href=this.value">
<option value="/1-fotbalova-liga/2021-2022/" selected>2021/2022</option><option value="/1-fotbalova-liga/2020-2021/tabulky/">2020/2021</option><option value="/1-fotbalova-liga/2019-2020/tabulky/">2019/2020</option><option value="/1-fotbalova-liga/2018-2019/tabulky/">2018/2019</option><option value="/1-fotbalova-liga/2017-2018/tabulky/">2017/2018</option><option value="/1-fotbalova-liga/2016-2017/tabulky/">2016/2017</option><option value="/1-fotbalova-liga/2015-2016/tabulky/">2015/2016</option><option value="/1-fotbalova-liga/2014-2015/tabulky/">2014/2015</option><option value="/1-fotbalova-liga/2013-2014/tabulky/">2013/2014</option><option value="/1-fotbalova-liga/2012-2013/tabulky/">2012/2013</option><option value="/1-fotbalova-liga/2011-2012/tabulky/">2011/2012</option><option value="/1-fotbalova-liga/2010-2011/tabulky/">2010/2011</option><option value="/1-fotbalova-liga/2009-2010/tabulky/">2009/2010</option><option value="/1-fotbalova-liga/2008-2009/tabulky/">2008/2009</option><option value="/1-fotbalova-liga/2007-2008/tabulky/">2007/2008</option><option value="/1-fotbalova-liga/2006-2007/tabulky/">2006/2007</option><option value="/1-fotbalova-liga/2005-2006/tabulky/">2005/2006</option><option value="/1-fotbalova-liga/2004-2005/tabulky/">2004/2005</option><option value="/1-fotbalova-liga/2003-2004/tabulky/">2003/2004</option><option value="/1-fotbalova-liga/2002-2003/tabulky/">2002/2003</option><option value="/1-fotbalova-liga/2001-2002/tabulky/">2001/2002</option><option value="/1-fotbalova-liga/2000-2001/tabulky/">2000/2001</option><option value="/1-fotbalova-liga/1999-2000/tabulky/">1999/2000</option><option value="/1-fotbalova-liga/1998-1999/tabulky/">1998/1999</option><option value="/1-fotbalova-liga/1997-1998/tabulky/">1997/1998</option><option value="/1-fotbalova-liga/1996-1997/tabulky/">1996/1997</option><option value="/1-fotbalova-liga/1995-1996/tabulky/">1995/1996</option><option value="/1-fotbalova-liga/1994-1995/tabulky/">1994/1995</option><option value="/1-fotbalova-liga/1993-1994/tabulky/">1993/1994</option></select>
</div>
<div class="cl"></div>
</div></div>
<div class="cl h10"></div>
<div class="box submenu"><div class="in"><div class="bookmark"><span class="it active"><a href="/1-fotbalova-liga/">Zprávy</a></span><span class="dl"></span><span class="it"><a href="/1-fotbalova-liga/2021-2022/tabulky/" class="popup" onmouseover="menuOver(1);" onmouseout="menuOut();">Tabulky</a><br><div id="menu_1" class="itemdiv" onmouseover="menuOver(1);" onmouseout="menuOut();"><a href="/1-fotbalova-liga/2021-2022/tabulky/">všechny tabulky</a><a href="/1-fotbalova-liga/2021-2022/tabulky/zakladni-cast/">základní část</a><a href="/1-fotbalova-liga/2021-2022/tabulky/o-titul/">o titul</a><a href="/1-fotbalova-liga/2021-2022/tabulky/o-udrzeni/">o udržení</a></div></span><span class="dl"></span><span class="it"><a href="/1-fotbalova-liga/2021-2022/vysledky-rozlosovani/" class="popup" onmouseover="menuOver(2);" onmouseout="menuOut()">Zápasy</a><br><div id="menu_2" class="itemdiv" onmouseover="menuOver(2);" onmouseout="menuOut(2)"><a href="/1-fotbalova-liga/2021-2022/vysledky-rozlosovani/" class="bold">celá sezóna</a><a href="/1-fotbalova-liga/2021-2022/vysledky-rozlosovani/zakladni-cast/">základní část</a><a href="/1-fotbalova-liga/2021-2022/vysledky-rozlosovani/o-titul/">o titul</a><a href="/1-fotbalova-liga/2021-2022/vysledky-rozlosovani/o-evropskou-ligu/">o Evropskou ligu</a><a href="/1-fotbalova-liga/2021-2022/vysledky-rozlosovani/o-udrzeni/">o udržení</a></div></span><span class="dl"></span><span class="it"><a href="/1-fotbalova-liga/2021-2022/statistiky/tabulka-strelcu/">Statistiky</a></span>
<span class="dl"></span><span class="it"><a href="/1-fotbalova-liga/2021-2022/kluby/">Kluby</a></span>
<span class="dl"></span><span class="it"><a href="/1-fotbalova-liga/2021-2022/prestupy/">Přestupy</a></span><span class="dl"></span><span class="it">	<a href="javascript: void(0);" class="popup" onmouseover="menuOver(5);" onmouseout="menuOut();">Česko: další soutěže</a>	<br><div id="menu_5" class="itemdiv" onmouseover="menuOver(5);" onmouseout="menuOut();"><a class="bold" href="/1-fotbalova-liga/">1. Fotbalová liga</a><a href="/souteze/cesko/mol-cup/">MOL Cup</a><a class="comp-inactive" href="/souteze/cesko/superpohar/">Superpohár</a><a href="/souteze/cesko/fotbalova-narodni-liga/">Fotbalová národní liga</a><a class="comp-inactive" href="/souteze/cesko/cfl/">ČFL</a><a href="/souteze/cesko/cfl-a/">ČFL A</a><a href="/souteze/cesko/cfl-b/">ČFL B</a><a href="/souteze/cesko/msfl/">MSFL</a><a href="/souteze/cesko/divize-a/">Divize A</a><a href="/souteze/cesko/divize-b/">Divize B</a><a href="/souteze/cesko/divize-c/">Divize C</a><a href="/souteze/cesko/divize-d/">Divize D</a><a href="/souteze/cesko/divize-e/">Divize E</a><a href="/souteze/cesko/divize-f/">Divize F</a><a class="comp-inactive" href="/souteze/cesko/juniorska-liga/">Juniorská liga</a><a href="/souteze/cesko/baraz-o-1-ligu/">Baráž o 1. ligu</a><a href="/souteze/cesko/1-liga-zen/">1. liga žen</a><a class="comp-inactive" href="/souteze/cesko/baraz-o-1-ligu-zen/">Baráž o 1. ligu žen</a>	</div></span><div class="border"></div></div></div></div>
<div class="cl h10"></div>
</div>
<div class="col-center">
	<div class="box green tran cols c2">
		<div class="col tran">
			<div class="img w248"><a href="/clanky/ani-konec-trenera-nepomohl-aneb-udalosti-6-kola-fortuna-ligy-511678/">
				<img src="/res/img/news/z7jGSh9S-MFNWeigq_1.jpg" alt="">
				<div class="desc"><div class="i">Miroslav Holeňák (&copy;&nbsp;fcslovanliberec.cz)</div></div>
				<div class="b">&nbsp;</div>
			</a></div>
		</div>
		<div class="sep">&nbsp;</div>
		<div class="col tran">
			<h2 class="lab medium"><a href="/clanky/ani-konec-trenera-nepomohl-aneb-udalosti-6-kola-fortuna-ligy-511678/" title="">Ani konec trenéra nepomohl aneb Události 6. kola FORTUNA:LIGY</a></h2>
			<div class="article-perex-top">Z Liberce se před 6. kolem nejvyšší ligové soutěže pakoval trenér Pavel Hoftych a zdálo se, že utkání se Zlínem je ideálním pro odražení se ke světlejším zítřkům. Jenže provizorní kouč Miroslav Holeňák se svým týmem podlehl Zlínu a Luboše Kozla tak čeká velmi náročná práce. <a href="/clanky/ani-konec-trenera-nepomohl-aneb-udalosti-6-kola-fortuna-ligy-511678/" title="" class="button-r"><span>&nbsp;</span></a></div>
			<div class="cl h5"></div>
<span class="red">DNES</span> <span class="dl">|</span> <a href="/clanky/nazory-a-komentare">Názory a komentáře</a> <span class="dl">|</span> <a href="/clanky/ani-konec-trenera-nepomohl-aneb-udalosti-6-kola-fortuna-ligy-511678/#forum" class="forumbubble" data-fid="908093">4 komentáře</a>
		</div>
		<div class="cl"></div>
	</div>
<div class="cl h10"></div>
<div class="box green tran">
		<div class="bookmark">
			<span class="dl"></span>
			<span class="it active"><a href="" title="">Další články</a></span>
			<div class="border"></div>
		</div>
</div>
<div class="cl h10"></div>
	<div class="box green tran cols per">
		<div class="col l tran">
			<div class="img w116"><a href="/clanky/liberecky-koscelnik-dostal-za-faul-proti-zlinu-trest-na-tri-duely-511697/">
				<img src="/res/img/news/lUjPRtKi-fLFTGIl7_3.jpg" alt="">
				<div class="b">&nbsp;</div>
			</a></div>
		</div>
		<div class="sep">&nbsp;</div>
		<div class="col r tran">
			<h2 class="lab small"><a href="/clanky/liberecky-koscelnik-dostal-za-faul-proti-zlinu-trest-na-tri-duely-511697/" title="">Liberecký Koscelník dostal za faul proti Zlínu trest na tři duely</a></h2>
			<div class="article-perex">Liberecký pravý obránce či záložník Martin Koscelník dostal za faul v zápase 6. ligového kola se Zlínem trest na tři soutěžní utkání. Disciplinární komise Ligové fotbalové asociace přihlédla k tomu, že se slovenský reprezentant podobného zákroku dopustil už v únoru při duelu v Plzni. <a href="/clanky/liberecky-koscelnik-dostal-za-faul-proti-zlinu-trest-na-tri-duely-511697/" title="" class="button-r"><span>&nbsp;</span></a></div>
			<div class="cl h5"></div>
<span class="red">DNES</span> <span class="dl">|</span> <a href="/clanky/aktuality">Aktuality</a> <span class="dl">|</span> <a href="/clanky/liberecky-koscelnik-dostal-za-faul-proti-zlinu-trest-na-tri-duely-511697/#forum" class="forumbubble" data-fid="908092">6 komentářů</a>
		</div>
		<div class="cl"></div>
	</div>
	<div class="box green tran cols per">
		<div class="col l tran">
			<div class="img w116"><a href="/clanky/jablonec-posilil-zkuseny-utocnik-nespor-z-olomouce-511694/">
				<img src="/res/img/news/jceYqjV5-ldlUUvKe_3.jpg" alt="">
				<div class="b">&nbsp;</div>
			</a></div>
		</div>
		<div class="sep">&nbsp;</div>
		<div class="col r tran">
			<h2 class="lab small"><a href="/clanky/jablonec-posilil-zkuseny-utocnik-nespor-z-olomouce-511694/" title="">Jablonec posílil zkušený útočník Nešpor z Olomouce</a></h2>
			<div class="article-perex">Jablonec posílil útočník Martin Nešpor. Jednatřicetiletý hráč, který naposledy působil v Olomouci, podepsal se severočeským klubem roční smlouvu. Účastník skupiny Evropské konferenční ligy o tom informoval na svých internetových stránkách. <a href="/clanky/jablonec-posilil-zkuseny-utocnik-nespor-z-olomouce-511694/" title="" class="button-r"><span>&nbsp;</span></a></div>
			<div class="cl h5"></div>
<span class="red">DNES</span> <span class="dl">|</span> <a href="/clanky/aktuality">Aktuality</a> <span class="dl">|</span> <a href="/clanky/jablonec-posilil-zkuseny-utocnik-nespor-z-olomouce-511694/#forum" class="forumbubble" data-fid="908091">24 komentářů</a>
		</div>
		<div class="cl"></div>
	</div>
	<div class="box green tran cols per">
		<div class="col l tran">
			<div class="img w116"><a href="/clanky/kozel-nad-nabidkou-liberce-nevahal-slovan-podle-nej-na-posledni-misto-nepatri-511548/">
				<img src="/res/img/news/C6lMBiKn-UcBVNhra_3.jpg" alt="">
				<div class="b">&nbsp;</div>
			</a></div>
		</div>
		<div class="sep">&nbsp;</div>
		<div class="col r tran">
			<h2 class="lab small"><a href="/clanky/kozel-nad-nabidkou-liberce-nevahal-slovan-podle-nej-na-posledni-misto-nepatri-511548/" title="">Kozel nad nabídkou Liberce neváhal, Slovan podle něj na poslední místo nepatří</a></h2>
			<div class="article-perex">Přestože Liberci patří v lize poslední místo, trenér Luboš Kozel nad nabídkou převzít mužstvo příliš neváhal. Nástupce Pavla Hoftycha bere angažmá jako výzvu a je přesvědčen, že Severočeši na dno tabulky nepatří. Hráči podle něj potřebují psychicky zvednout. Jeho asistenty budou Ivan Kopecký a Miroslav Holeňák, který zůstává z předchozího realizačního týmu. <a href="/clanky/kozel-nad-nabidkou-liberce-nevahal-slovan-podle-nej-na-posledni-misto-nepatri-511548/" title="" class="button-r"><span>&nbsp;</span></a></div>
			<div class="cl h5"></div>
<span class="bold">VČERA</span> <span class="dl">|</span> <a href="/clanky/aktuality">Aktuality</a> <span class="dl">|</span> <a href="/clanky/kozel-nad-nabidkou-liberce-nevahal-slovan-podle-nej-na-posledni-misto-nepatri-511548/#forum" class="forumbubble" data-fid="908057">93 komentářů</a>
		</div>
		<div class="cl"></div>
	</div>
	<div class="box green tran cols per">
		<div class="col l tran">
			<div class="img w116"><a href="/clanky/sima-prestoupil-ze-slavie-do-brightonu-sezonu-ale-stravi-ve-stoke-city-511373/">
				<img src="/res/img/news/bNhoY5p7-b1dOXUN4_3.jpg" alt="">
				<div class="b">&nbsp;</div>
			</a></div>
		</div>
		<div class="sep">&nbsp;</div>
		<div class="col r tran">
			<h2 class="lab small"><a href="/clanky/sima-prestoupil-ze-slavie-do-brightonu-sezonu-ale-stravi-ve-stoke-city-511373/" title="">Sima přestoupil ze Slavie do Brightonu, sezonu ale stráví ve Stoke City</a></h2>
			<div class="article-perex">Abdallah Sima přestoupil z pražské Slavie do anglického Brightonu a v novém působišti podepsal smlouvu do roku 2025. Kluby o tom informovaly na svých webech, výši transferu ale nezveřejnily. Aktuální sezonu stráví dvacetiletý Senegalec na hostování v druholigovém Stoke City. <a href="/clanky/sima-prestoupil-ze-slavie-do-brightonu-sezonu-ale-stravi-ve-stoke-city-511373/" title="" class="button-r"><span>&nbsp;</span></a></div>
			<div class="cl h5"></div>
<span class="bold">31.08.</span> <span class="dl">|</span> <a href="/clanky/aktuality">Aktuality</a> <span class="dl">|</span> <a href="/clanky/sima-prestoupil-ze-slavie-do-brightonu-sezonu-ale-stravi-ve-stoke-city-511373/#forum" class="forumbubble" data-fid="908038">268 komentářů</a>
		</div>
		<div class="cl"></div>
	</div>
	<div class="box green tran cols per">
		<div class="col l tran">
			<div class="img w116"><a href="/clanky/havel-pripustil-ze-pozvanku-do-reprezentace-uz-moc-necekal-511314/">
				<img src="/res/img/news/G0WzuZSH-dvJhFEND_3.jpg" alt="">
				<div class="b">&nbsp;</div>
			</a></div>
		</div>
		<div class="sep">&nbsp;</div>
		<div class="col r tran">
			<h2 class="lab small"><a href="/clanky/havel-pripustil-ze-pozvanku-do-reprezentace-uz-moc-necekal-511314/" title="">Havel připustil, že pozvánku do reprezentace už moc nečekal</a></h2>
			<div class="article-perex">Milan Havel připustil, že už příliš nepočítal s tím, že se někdy dostane do české reprezentace. Premiérová pozvánka před zářijovými zápasy s Běloruskem, v Belgii a s Ukrajinou sedmadvacetiletého plzeňského obránce překvapila o to víc, že se v létě potýkal se zraněním a musel na operaci menisku. <a href="/clanky/havel-pripustil-ze-pozvanku-do-reprezentace-uz-moc-necekal-511314/" title="" class="button-r"><span>&nbsp;</span></a></div>
			<div class="cl h5"></div>
<span class="bold">31.08.</span> <span class="dl">|</span> <a href="/clanky/aktuality">Aktuality</a> <span class="dl">|</span> <a href="/clanky/havel-pripustil-ze-pozvanku-do-reprezentace-uz-moc-necekal-511314/#forum" class="forumbubble" data-fid="908033">8 komentářů</a>
		</div>
		<div class="cl"></div>
	</div>
	<div class="box green tran cols per">
		<div class="col l tran">
			<div class="img w116"><a href="/clanky/obrance-zima-prestoupil-z-prazske-slavie-do-fc-turin-511341/">
				<img src="/res/img/news/IuD1f0y6-xnh1rk6o_3.jpg" alt="">
				<div class="b">&nbsp;</div>
			</a></div>
		</div>
		<div class="sep">&nbsp;</div>
		<div class="col r tran">
			<h2 class="lab small"><a href="/clanky/obrance-zima-prestoupil-z-prazske-slavie-do-fc-turin-511341/" title="">Obránce Zima přestoupil z pražské Slavie do FC Turín</a></h2>
			<div class="article-perex">Dvacetiletý obránce David Zima přestoupil z pražské Slavie do FC Turín. Kluby o tom informovaly na svých webech. Podle italských médií dvojnásobný český šampion podepsal s účastníkem Serie A čtyřletou smlouvu. <a href="/clanky/obrance-zima-prestoupil-z-prazske-slavie-do-fc-turin-511341/" title="" class="button-r"><span>&nbsp;</span></a></div>
			<div class="cl h5"></div>
<span class="bold">31.08.</span> <span class="dl">|</span> <a href="/clanky/aktuality">Aktuality</a> <span class="dl">|</span> <a href="/clanky/obrance-zima-prestoupil-z-prazske-slavie-do-fc-turin-511341/#forum" class="forumbubble" data-fid="908031">191 komentářů</a>
		</div>
		<div class="cl"></div>
	</div>
	<div class="box green tran cols per">
		<div class="col l tran">
			<div class="img w116"><a href="/clanky/utocnik-zajic-bude-z-baniku-ostrava-hostovat-v-zaglebie-lubin-511342/">
				<img src="/res/img/news/KzSfrT71-CSvBIQtA_3.jpg" alt="">
				<div class="b">&nbsp;</div>
			</a></div>
		</div>
		<div class="sep">&nbsp;</div>
		<div class="col r tran">
			<h2 class="lab small"><a href="/clanky/utocnik-zajic-bude-z-baniku-ostrava-hostovat-v-zaglebie-lubin-511342/" title="">Útočník Zajíc bude z Baníku Ostrava hostovat v Zaglebie Lubin</a></h2>
			<div class="article-perex">Útočník Tomáš Zajíc odchází z Ostravy do Zaglebie Lubin, kde bude hostovat do konce sezony. Podle Baníku je součástí dohody opce. Pětadvacetiletý Zajíc po loňském příchodu ze Slovácka dal v lize osm gólů, v tomto ročníku nejvyšší soutěže ale do hry nezasáhl. <a href="/clanky/utocnik-zajic-bude-z-baniku-ostrava-hostovat-v-zaglebie-lubin-511342/" title="" class="button-r"><span>&nbsp;</span></a></div>
			<div class="cl h5"></div>
<span class="bold">31.08.</span> <span class="dl">|</span> <a href="/clanky/aktuality">Aktuality</a> <span class="dl">|</span> <a href="/clanky/utocnik-zajic-bude-z-baniku-ostrava-hostovat-v-zaglebie-lubin-511342/#forum" class="forumbubble" data-fid="908032">38 komentářů</a>
		</div>
		<div class="cl"></div>
	</div>
	<div class="box green tran cols per">
		<div class="col l tran">
			<div class="img w116"><a href="/clanky/bucha-prodlouzil-v-plzni-smlouvu-do-cervna-2024-511313/">
				<img src="/res/img/news/KbYECXYj-88irGk05_3.jpg" alt="">
				<div class="b">&nbsp;</div>
			</a></div>
		</div>
		<div class="sep">&nbsp;</div>
		<div class="col r tran">
			<h2 class="lab small"><a href="/clanky/bucha-prodlouzil-v-plzni-smlouvu-do-cervna-2024-511313/" title="">Bucha prodloužil v Plzni smlouvu do června 2024</a></h2>
			<div class="article-perex"> Třiadvacetiletý záložník Pavel Bucha prodloužil s Plzní smlouvu o další dva roky do června 2024. Viktoria o tom informovala na svém webu. <a href="/clanky/bucha-prodlouzil-v-plzni-smlouvu-do-cervna-2024-511313/" title="" class="button-r"><span>&nbsp;</span></a></div>
			<div class="cl h5"></div>
<span class="bold">31.08.</span> <span class="dl">|</span> <a href="/clanky/aktuality">Aktuality</a> <span class="dl">|</span> <a href="/clanky/bucha-prodlouzil-v-plzni-smlouvu-do-cervna-2024-511313/#forum" class="forumbubble" data-fid="908029">6 komentářů</a>
		</div>
		<div class="cl"></div>
	</div>
	<div class="box green tran cols per">
		<div class="col l tran">
			<div class="img w116"><a href="/clanky/hlavaty-bude-z-plzne-hostovat-v-boleslavi-matejka-v-pardubicich-511300/">
				<img src="/res/img/news/UoJe0f89-YL96BYus_3.jpg" alt="">
				<div class="b">&nbsp;</div>
			</a></div>
		</div>
		<div class="sep">&nbsp;</div>
		<div class="col r tran">
			<h2 class="lab small"><a href="/clanky/hlavaty-bude-z-plzne-hostovat-v-boleslavi-matejka-v-pardubicich-511300/" title="">Hlavatý bude z Plzně hostovat v Boleslavi, Matějka v Pardubicích</a></h2>
			<div class="article-perex">Z Plzně odešli na roční hostování třiadvacetiletý záložník Michal Hlavatý a stejně starý útočník Lukáš Matějka. Hlavatý posílil Mladou Boleslav, Matějka zase Pardubice. Viktoria o tom informovala na svém webu. <a href="/clanky/hlavaty-bude-z-plzne-hostovat-v-boleslavi-matejka-v-pardubicich-511300/" title="" class="button-r"><span>&nbsp;</span></a></div>
			<div class="cl h5"></div>
<span class="bold">31.08.</span> <span class="dl">|</span> <a href="/clanky/aktuality">Aktuality</a> <span class="dl">|</span> <a href="/clanky/hlavaty-bude-z-plzne-hostovat-v-boleslavi-matejka-v-pardubicich-511300/#forum" class="forumbubble" data-fid="908027">35 komentářů</a>
		</div>
		<div class="cl"></div>
	</div>
<div class="box green">
	<div class="in c">
<div class="pageslist"><table cellspacing="0" cellpadding="0"><tr><td><a href="/1-fotbalova-liga/"><span class="pg-bb">&nbsp;</span></a><div class="dl"></div><a href="/1-fotbalova-liga/"><span class="pg-b">&nbsp;</span></a><div class="dl"></div><div class="actual">1</div><div class="dl"></div><a href="/1-fotbalova-liga/?list=2">2</a><div class="dl"></div><a href="/1-fotbalova-liga/?list=3">3</a><div class="dl"></div><a href="/1-fotbalova-liga/?list=4">4</a><div class="dl"></div><a href="/1-fotbalova-liga/?list=5">5</a><div class="dl"></div><a href="/1-fotbalova-liga/?list=6">6</a><div class="dl"></div><a href="/1-fotbalova-liga/?list=7">7</a><div class="dl"></div><a href="/1-fotbalova-liga/?list=8">8</a><div class="dl"></div><a href="/1-fotbalova-liga/?list=9">9</a><div class="dl"></div><a href="/1-fotbalova-liga/?list=10">10</a><div class="dl"></div><a href="/1-fotbalova-liga/?list=11">11</a><div class="dl"></div><a href="/1-fotbalova-liga/?list=2"><span class="pg-f">&nbsp;</span></a><div class="dl"></div><a href="/1-fotbalova-liga/?list=1449"><span class="pg-ff">&nbsp;</span></a><div class="cl"></div>
</td></tr></table></div>	</div>
</div>
<script language="javascript">
postsLoad('908093,908092,908091,908057,908038,908033,908031,908032,908029,908027', 0);
</script>
<div style="text-align: center;" class="mt20"><div class="adsenvelope adstextpad banx-main_square" id="lsadvert-zid-3301" style="width:300px;"><div style="height:250px"><div class="adscontent" id="lsadvert-main_square"><iframe id="lsadvert-zid-3301-iframe" name="banx-main_square" frameborder="0" scrolling="no" style="allowTransparency: true; visibility: hidden; width:300px; height:250px"></iframe></div><div class="adsgraphhori"><div class="adsghori ath-CS"></div></div></div></div></div>
</div>
<div class="col-right">
<div class="box blue"><div class="in">
<a href="javascript:void(0)" class="sheets-plus" id="bookmarkLink" onclick="bookmarkToggle('competition', 19, 0);">přidat stránku do záložek</a></div></div>
<div class="cl h10"></div>
<div class="box green" onmouseover="expresOver();" onmouseout="expresOut();">
<div class="in">
<div class="bookmark">
<span class="it active"><a href="/1-fotbalova-liga/expres-zpravy/" title="">Expres zprávy</a></span>
<div class="border"></div>
</div>
<table cellspacing="0" cellpadding="0" class="rightexpres">
<col width="25"><col width="193">
<tr id="rightexpres-title-511667">
<td class="nw c red w30">16:41</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('511667');">Program 9. kola FORTUNA:LIGY</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-511667">
<td colspan="2" class="nbr"><b>Program 9. kola první fotbalové ligy:
<br>Sobota 25. září:</b>
<br>16:00 České Budějovice - Karviná, Pardubice - Plzeň, Ostrava - Bohemians 1905,
<br>19:00 Zlín - Sparta.
<br><b>Neděle 26. září:</b>
<br>16:00 Jablonec - Liberec, Mladá Boleslav - Slovácko, Teplice - Olomouc,
<br>19:00 Slavia - Hradec Králové. <span class="source">(ČTK)</span></td>
</tr>
<tr id="rightexpres-title-511633">
<td class="nw c red w30">10:32</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('511633');">Slavii opustil João Felipe</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-511633">
<td colspan="2" class="nbr">João Felipe se dále nebude snažit prosadit ve Slavii Praha. Dvacetiletý brazilský křídelník se chtěl vrátit zpátky do Brazílie, proto došlo k vzájemnému ukončení smlouvy. <span class="source">(twitter.com/slaviamladez)</span></td>
</tr>
<tr id="rightexpres-title-511295">
<td class="nw c w30">31.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('511295');">Golenkov podepsal v Olomouci</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-511295">
<td colspan="2" class="nbr">Ruský útočník Jegor Golenkov podepsal na dva roky smlouvu s Olomoucí. Naposledy působil v ruské Samaře, se kterou v minulé sezoně postoupil do nejvyšší soutěže. Přichází jako volný hráč poté, co přesvědčil na zkoušce. <span class="source">(sigmafotbal.cz)</span></td>
</tr>
<tr id="rightexpres-title-511242">
<td class="nw c w30">31.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('511242');">Slavia odmítla nabídku za Alijagiće</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-511242">
<td colspan="2" class="nbr">Denis Alijagić prožívá vydařené hostování ve Vlašimi, což neuniklo ani pozornosti zahraničních klubů. Nabídku za talentovaného útočníka Slavie Praha měl podat AC Milán, úřadující český mistr ale prodej mládežnického reprezentanta Bosny a Hercegoviny odmítl. <span class="source">(twitter.com/LudekMadl)</span></td>
</tr>
<tr id="rightexpres-title-511050">
<td class="nw c w30">29.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('511050');">FORTUNA:LIGA - výsledky</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-511050">
<td colspan="2" class="nbr">Výsledky dnešních zápasů české ligy: <b>Bohemians 1905 - Teplice 4:2</B> (41. z penalty a 59. z penalty Chramosta, 45+2. Krch, 90+4. Koubek - 22. Mareš, 89. Fortelný), <b>Hradec Králové - Plzeň 1:0</b> (58. Rada), <b>Olomouc - Jablonec 4:0</b> (4. González, 58. Zmrzlý, 73. a 79. Hála), <b>Karviná - Slavia 3:3</b> (27. Papadopulos, 55. Svoboda, 90+1. Zych - 35. Schranz, 45. Kačaraba, 65. Traoré).</td>
</tr>
<tr id="rightexpres-title-511070">
<td class="nw c w30">29.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('511070');">Slavia dohrává bez zraněného Kúdely</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-511070">
<td colspan="2" class="nbr">Ondřej Kúdela nedohrál první poločas dnešního zápasu v Karviné, obránce Slavie se v závěru úvodní části zranil a musel střídat.</td>
</tr>
<tr id="rightexpres-title-511043">
<td class="nw c w30">29.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('511043');">Takács má namířeno do Lubinu</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-511043">
<td colspan="2" class="nbr">Slavii Praha by měl opustit Ladislav Takács, jenž se zřejmě přesune do Polska. Pětadvacetiletý defenzivní univerzál má namířeno na roční hostování s opcí do Zagłębie Lubin. <span class="source">(twitter.com/Eugeniogonza2)</span></td>
</tr>
<tr id="rightexpres-title-510970">
<td class="nw c w30">28.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('510970');">Zajíc na odchodu z Baníku</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-510970">
<td colspan="2" class="nbr">Loni desetigólový útočník Tomáš Zajíc nemá v Ostravě na růžích ustláno a po příchodu Jiřího Klímy či Ladislava Almásiho definitivně míří pryč. Potvrdil to kouč Ondřej Smetana po utkání s Mladou Boleslaví, kdy se Zajíc opět nevešel ani na lavičku. <span class="source">(isport.cz)</span></td>
</tr>
<tr id="rightexpres-title-510964">
<td class="nw c w30">28.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('510964');">Sparta přivádí Haraslína</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-510964">
<td colspan="2" class="nbr">Univerzální slovenský křídelník či krajní obránce Lukáš Haraslín by již v pondělí mohl být představen pražskou Spartou. Ta účastníka nedávného Eura přivádí ze Sassuola na hostování s opcí. <span class="source">(gianlucadimarzio.com)</span></td>
</tr>
<tr id="rightexpres-title-510957">
<td class="nw c w30">28.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('510957');">Horejš: Spartu jsme hodně potrápili</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-510957">
<td colspan="2" class="nbr">Kouč Českých Budějovic David Horejš byl i přes prohru 0:1 po výkonu se Spartou spokojený: <i>"Náš výkon byl velice slušný, Spartu jsme hodně potrápili. Abychom mohli pomýšlet na lepší výsledek, museli bychom vstřelit branku. V předchozích zápasech, v nichž jsme tady bodovali, jsme byli produktivní. Možnosti, které jsme dnes měli, jsme nedokázali dotáhnout, a to zápas rozhodlo. Sparta rozhodla ze standardní situace. To mě mrzí hodně, protože jsme se na to hodně připravovali. Sparta působila lépe v poslední třetině, byla tam vidět větší kvalita. Z naší strany tam byly nadstandardní výkony od některých hráčů. V přechodové fáze jsme působili jistě, byli jsme kvalitní na míči. Ale zápas se rozhoduje ve vápně a v poslední třetině a tam jsme byli bohužel hodně zbrklí. Výkon se dá hodnotit pozitivně, ale výsledek pro nás bohužel nic."</i> <span class="source">(ČTK)</span></td>
</tr>
</table>
<div class="cl h5"></div>
<a href="/1-fotbalova-liga/expres-zpravy/" title="" class="but w120 fr"><span class="l"></span><span class="i">Další expres zprávy</span><span class="r"></span></a>
<div class="cl"></div>
</div>
</div>
<div class="cl h10"></div>
<div class="adsenvelope adstextpad banx-square" id="lsadvert-zid-1150" style="width:300px;"><div style="height:250px"><div class="adscontent" id="lsadvert-square"><iframe id="lsadvert-zid-1150-iframe" name="banx-square" frameborder="0" scrolling="no" style="allowTransparency: true; visibility: hidden; width:300px; height:250px"></iframe></div><div class="adsgraphhori"><div class="adsghori ath-CS"></div></div></div></div><div class="box green"><div class="in">
<div class="bookmark">
<span id="bookmark_100_title_1" class="it active"><a href="#" onclick="return bookmarkSetActiveList('100', 1);">základní část</a></span>
<span class="dl"></span>
<span id="bookmark_100_title_2" class="it"><a href="#" onclick="return bookmarkSetActiveList('100', 2);">o titul</a></span>
<span class="dl"></span>
<span id="bookmark_100_title_3" class="it"><a href="#" onclick="return bookmarkSetActiveList('100', 3);">o udržení</a></span>
<span class="dl"></span>
	<div class="border"></div>
</div>
<div id="bookmark_100_contents_1">
<table cellspacing="0" cellpadding="0" class="leaguetable vam">
<tr><th class="pos">&nbsp;</th><th colspan="2">Tým</th><th class="c">Z</th><th class="c nbr">B</th></tr>
<tr><td class="pos" style="background: #DCEBC5;" title="skupina o titul"><span class="rank">1.</span></td><td class="logo"><img src="/res/img/team-logo/4zqe1Nl5-fuvfH3PL.png"></td><td class=""><a href="/kluby/cesko/sparta-praha/">Sparta Praha</a></td><td class="nw c c1">6</td><td class="nw nbr c c1">16</td></tr>
<tr><td class="pos" style="background: #DCEBC5;" title="skupina o titul"><span class="rank">2.</span></td><td class="logo"><img src="/res/img/team-logo/Kb3QvF8a-6sEsOLMh.png"></td><td class=""><a href="/kluby/cesko/viktoria-plzen/">Viktoria Plzeň</a></td><td class="nw c c1">6</td><td class="nw nbr c c1">15</td></tr>
<tr><td class="pos" style="background: #DCEBC5;" title="skupina o titul"><span class="rank">3.</span></td><td class="logo"><img src="/res/img/team-logo/U5IeDDAa-EHjrWR8F.png"></td><td class=""><a href="/kluby/cesko/slavia-praha/">Slavia Praha</a></td><td class="nw c c1">5</td><td class="nw nbr c c1">13</td></tr>
<tr><td class="pos" style="background: #DCEBC5;" title="skupina o titul"><span class="rank">4.</span></td><td class="logo"><img src="/res/img/team-logo/AuLLBNSg-vZQvv0lr.png"></td><td class=""><a href="/kluby/cesko/1-fc-slovacko/">1. FC Slovácko</a></td><td class="nw c c1">6</td><td class="nw nbr c c1">13</td></tr>
<tr><td class="pos" style="background: #DCEBC5;" title="skupina o titul"><span class="rank">5.</span></td><td class="logo"><img src="/res/img/team-logo/hIlpqziM-Q9RRRo5a.png"></td><td class=""><a href="/kluby/cesko/banik-ostrava/">Baník Ostrava</a></td><td class="nw c c1">6</td><td class="nw nbr c c1">12</td></tr>
<tr><td class="pos" style="background: #DCEBC5;" title="skupina o titul"><span class="rank">6.</span></td><td class="logo"><img src="/res/img/team-logo/hd1BQXiM-thd8iK6o.png"></td><td class=""><a href="/kluby/cesko/sigma-olomouc/">Sigma Olomouc</a></td><td class="nw c c1">5</td><td class="nw nbr c c1">10</td></tr>
<tr><td class="pos" style="background: #E4EFFF;" title="o 7.-10. místo"><span class="rank">7.</span></td><td class="logo"><img src="/res/img/team-logo/YqOFxRXA-Y5ugOelE.png"></td><td class=""><a href="/kluby/cesko/fastav-zlin/">Fastav Zlín</a></td><td class="nw c c1">6</td><td class="nw nbr c c1">9</td></tr>
<tr><td class="pos" style="background: #E4EFFF;" title="o 7.-10. místo"><span class="rank">8.</span></td><td class="logo"><img src="/res/img/team-logo/pUeNLmkl-AssAw0sA.png"></td><td class=""><a href="/kluby/cesko/fk-mlada-boleslav/">FK Mladá Boleslav</a></td><td class="nw c c1">6</td><td class="nw nbr c c1">7</td></tr>
<tr><td class="pos" style="background: #E4EFFF;" title="o 7.-10. místo"><span class="rank">9.</span></td><td class="logo"><img src="/res/img/team-logo/46AMCCj5-4dxpBJMG.png"></td><td class=""><a href="/kluby/cesko/dynamo-ceske-budejovice/">Dynamo České Budějovice</a></td><td class="nw c c1">6</td><td class="nw nbr c c1">7</td></tr>
<tr><td class="pos" style="background: #E4EFFF;" title="o 7.-10. místo"><span class="rank">10.</span></td><td class="logo"><img src="/res/img/team-logo/fN6sahVg-WWuhGv47.png"></td><td class=""><a href="/kluby/cesko/bohemians-praha-1905/">Bohemians Praha 1905</a></td><td class="nw c c1">6</td><td class="nw nbr c c1">6</td></tr>
<tr><td class="pos" style="background: #F9D4CC;" title="skupina o udržení"><span class="rank">11.</span></td><td class="logo"><img src="/res/img/team-logo/QPbN5bj5-YVdbVGED.png"></td><td class=""><a href="/kluby/cesko/fc-hradec-kralove/">FC Hradec Králové</a></td><td class="nw c c1">6</td><td class="nw nbr c c1">6</td></tr>
<tr><td class="pos" style="background: #F9D4CC;" title="skupina o udržení"><span class="rank">12.</span></td><td class="logo"><img src="/res/img/team-logo/MZLFU98a-biPYe2Z2.png"></td><td class=""><a href="/kluby/cesko/fk-pardubice/">FK Pardubice</a></td><td class="nw c c1">6</td><td class="nw nbr c c1">5</td></tr>
<tr><td class="pos" style="background: #F9D4CC;" title="skupina o udržení"><span class="rank">13.</span></td><td class="logo"><img src="/res/img/team-logo/hW9QzVBG-dMNreo7H.png"></td><td class=""><a href="/kluby/cesko/fk-jablonec/">FK Jablonec</a></td><td class="nw c c1">6</td><td class="nw nbr c c1">5</td></tr>
<tr><td class="pos" style="background: #F9D4CC;" title="skupina o udržení"><span class="rank">14.</span></td><td class="logo"><img src="/res/img/team-logo/SEHNnGml-lAaltwJ8.png"></td><td class=""><a href="/kluby/cesko/mfk-karvina/">MFK Karviná</a></td><td class="nw c c1">6</td><td class="nw nbr c c1">3</td></tr>
<tr><td class="pos" style="background: #F9D4CC;" title="skupina o udržení"><span class="rank">15.</span></td><td class="logo"><img src="/res/img/team-logo/zcgEuC9a-8EW7UJ8O.png"></td><td class=""><a href="/kluby/cesko/fk-teplice/">FK Teplice</a></td><td class="nw c c1">6</td><td class="nw nbr c c1">3</td></tr>
<tr><td class="pos nbb" style="background: #F9D4CC;" title="skupina o udržení"><span class="rank">16.</span></td><td class="logo nbb"><img src="/res/img/team-logo/O2zfRX7r-pKLugMV2.png"></td><td class=" nbb"><a href="/kluby/cesko/slovan-liberec/">Slovan Liberec</a></td><td class="nw c c1 nbb">6</td><td class="nw nbr c c1 nbb">1</td></tr>
</table>

</div>
<div id="bookmark_100_contents_2" class="none">
<table cellspacing="0" cellpadding="0" class="leaguetable vam">
<tr><th class="pos">&nbsp;</th><th colspan="2">Tým</th><th class="c">Z</th><th class="c nbr">B</th></tr>
<tr><td colspan="5" class="nodata">tabulka je prázdná</td></tr>
</table>

</div>
<div id="bookmark_100_contents_3" class="none">
<table cellspacing="0" cellpadding="0" class="leaguetable vam">
<tr><th class="pos">&nbsp;</th><th colspan="2">Tým</th><th class="c">Z</th><th class="c nbr">B</th></tr>
<tr><td colspan="5" class="nodata">tabulka je prázdná</td></tr>
</table>

</div>
<script language="javascript">
bookmarkInit('100', 1);
</script>
<div class="cl h5"></div>
<a href="/1-fotbalova-liga/2021-2022/tabulky/" title="" class="but w110 fr"><span class="l"></span><span class="i">Podrobné tabulky</span><span class="r"></span></a>
<div class="cl"></div>
</div></div>
<div class="cl h10"></div>
<div class="adsenvelope adstextpad banx-square2" id="lsadvert-zid-1151" style="width:300px;"><div style="height:250px"><div class="adscontent" id="lsadvert-square2"><iframe id="lsadvert-zid-1151-iframe" name="banx-square2" frameborder="0" scrolling="no" style="allowTransparency: true; visibility: hidden; width:300px; height:250px"></iframe></div><div class="adsgraphhori"><div class="adsghori ath-CS"></div></div></div></div><div class="box green">
<div class="in">
<div class="bookmark">
<span class="it active">Poslední zápasy</span>
<div class="border"></div>
</div>
<table cellspacing="0" cellpadding="0" class="matches">
<tr><td class="date_noyear">28.08.</td><td class="teams"><div class="fl">Slovan Liberec - Fastav Zlín</div><a href="/1-fotbalova-liga/2021-2022/reportaz/slovan-liberec-fastav-zlin-721101/" class="fr matchico" title="Reportáž"><img src="/res/img/servis-report.gif"></a></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/reportaz/slovan-liberec-fastav-zlin-721101/">0:1</a></td></tr>
<tr><td class="date_noyear">28.08.</td><td class="teams"><div class="fl">1. FC Slovácko - FK Pardubice</div><a href="/1-fotbalova-liga/2021-2022/reportaz/1-fc-slovacko-fk-pardubice-721103/" class="fr matchico" title="Reportáž"><img src="/res/img/servis-report.gif"></a></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/reportaz/1-fc-slovacko-fk-pardubice-721103/">2:1</a></td></tr>
<tr><td class="date_noyear">28.08.</td><td class="teams"><div class="fl">Baník Ostrava - Ml. Boleslav</div><a href="/1-fotbalova-liga/2021-2022/reportaz/banik-ostrava-fk-mlada-boleslav-721106/" class="fr matchico" title="Reportáž"><img src="/res/img/servis-report.gif"></a></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/reportaz/banik-ostrava-fk-mlada-boleslav-721106/">1:0</a></td></tr>
<tr><td class="date_noyear">28.08.</td><td class="teams"><div class="fl">Sparta Praha - České Budějovice</div><a href="/1-fotbalova-liga/2021-2022/reportaz/sparta-praha-dynamo-ceske-budejovice-721107/" class="fr matchico" title="Reportáž"><img src="/res/img/servis-report.gif"></a></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/reportaz/sparta-praha-dynamo-ceske-budejovice-721107/">1:0</a></td></tr>
<tr><td class="date_noyear">29.08.</td><td class="teams"><div class="fl">Bohemians Praha 1905 - FK Teplice</div><a href="/1-fotbalova-liga/2021-2022/reportaz/bohemians-praha-1905-fk-teplice-721104/" class="fr matchico" title="Reportáž"><img src="/res/img/servis-report.gif"></a></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/reportaz/bohemians-praha-1905-fk-teplice-721104/">4:2</a></td></tr>
<tr><td class="date_noyear">29.08.</td><td class="teams"><div class="fl">Sigma Olomouc - FK Jablonec</div><a href="/1-fotbalova-liga/2021-2022/reportaz/sigma-olomouc-fk-jablonec-721105/" class="fr matchico" title="Reportáž"><img src="/res/img/servis-report.gif"></a></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/reportaz/sigma-olomouc-fk-jablonec-721105/">4:0</a></td></tr>
<tr><td class="date_noyear">29.08.</td><td class="teams"><div class="fl">Hradec Králové - Viktoria Plzeň</div><a href="/1-fotbalova-liga/2021-2022/reportaz/fc-hradec-kralove-viktoria-plzen-721108/" class="fr matchico" title="Reportáž"><img src="/res/img/servis-report.gif"></a></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/reportaz/fc-hradec-kralove-viktoria-plzen-721108/">1:0</a></td></tr>
<tr class="last"><td class="date_noyear">29.08.</td><td class="teams"><div class="fl">MFK Karviná - Slavia Praha</div><a href="/1-fotbalova-liga/2021-2022/reportaz/mfk-karvina-slavia-praha-721102/" class="fr matchico" title="Reportáž"><img src="/res/img/servis-report.gif"></a></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/reportaz/mfk-karvina-slavia-praha-721102/">3:3</a></td></tr>
</table>
<div class="cl h5"></div>
<a href="/1-fotbalova-liga/2021-2022/vysledky-rozlosovani/" title="" class="but w100 fr"><span class="l"></span><span class="i">Všechny zápasy</span><span class="r"></span></a>
<div class="cl"></div>
</div>
</div>
<div class="cl h10"></div>
<div class="box green">
<div class="in">
<div class="bookmark">
<span class="it active">Následující zápasy</span>
<div class="border"></div>
</div>
<table cellspacing="0" cellpadding="0" class="matches">
<tr><td class="date_noyear">11.09.</td><td class="time">?</td><td class="teams"><div class="fl">FK Teplice - Baník Ostrava</div></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/preview/fk-teplice-banik-ostrava-721109/">info</a></td></tr>
<tr><td class="date_noyear">11.09.</td><td class="time">?</td><td class="teams"><div class="fl">Ml. Boleslav - Sigma Olomouc</div></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/preview/fk-mlada-boleslav-sigma-olomouc-721110/">info</a></td></tr>
<tr><td class="date_noyear">11.09.</td><td class="time">?</td><td class="teams"><div class="fl">Slavia Praha - 1. FC Slovácko</div></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/preview/slavia-praha-1-fc-slovacko-721111/">info</a></td></tr>
<tr><td class="date_noyear">11.09.</td><td class="time">?</td><td class="teams"><div class="fl">FK Jablonec - MFK Karviná</div></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/preview/fk-jablonec-mfk-karvina-721112/">info</a></td></tr>
<tr><td class="date_noyear">11.09.</td><td class="time">?</td><td class="teams"><div class="fl">Fastav Zlín - Bohemians 1905</div></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/preview/fastav-zlin-bohemians-praha-1905-721113/">info</a></td></tr>
<tr><td class="date_noyear">11.09.</td><td class="time">?</td><td class="teams"><div class="fl">FK Pardubice - Slovan Liberec</div></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/preview/fk-pardubice-slovan-liberec-721114/">info</a></td></tr>
<tr><td class="date_noyear">11.09.</td><td class="time">?</td><td class="teams"><div class="fl">Č. Budějovice - Hradec Král.</div></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/preview/dynamo-ceske-budejovice-fc-hradec-kralove-721115/">info</a></td></tr>
<tr class="last"><td class="date_noyear">11.09.</td><td class="time">?</td><td class="teams"><div class="fl">Viktoria Plzeň - Sparta Praha</div></td><td class="res nbr"><a href="/1-fotbalova-liga/2021-2022/preview/viktoria-plzen-sparta-praha-721116/">info</a></td></tr>
</table>
<div class="cl h5"></div>
<a href="/1-fotbalova-liga/2021-2022/vysledky-rozlosovani/" title="" class="but w100 fr"><span class="l"></span><span class="i">Všechny zápasy</span><span class="r"></span></a>
<div class="cl"></div>
</div>
</div>
<div class="cl h10"></div>
<div class="box green"><div class="in">
<div class="bookmark"><span class="it active"><a href="/1-fotbalova-liga/2021-2022/statistiky/tabulka-strelcu/">Tabulka střelců</a></span><div class="border"></div></div>
<table cellspacing="0" cellpadding="0" class="leaguetable full vam"><tr><th>&nbsp;</th><th colspan="2">Hráč</th><th class="c nbr">Góly</th></tr><tr><td class="pos"><span class="rank">1.</span></td><td class="logo"><img src="/res/img/flags/small/45.gif">
</td><td><a href="/hraci/ivan-schranz-27936/">Ivan Schranz</a></td><td class="c c1 nbr">5</td></tr><tr><td class="pos"><span class="rank">2.</span></td><td class="logo"><img src="/res/img/flags/small/16.gif">
</td><td><a href="/hraci/martin-hala-32515/">Martin Hála</a></td><td class="c c1 nbr">4</td></tr><tr><td class="pos"><span class="rank">3.</span></td><td class="logo"><img src="/res/img/flags/small/3.gif">
</td><td><a href="/hraci/jean-david-beauguel-36963/">Jean-David Beauguel</a></td><td class="c c1 nbr">3</td></tr><tr><td class="pos"><span class="rank">&nbsp;</span></td><td class="logo"><img src="/res/img/flags/small/16.gif">
</td><td><a href="/hraci/adam-hlozek-85856/">Adam Hložek</a></td><td class="c c1 nbr">3</td></tr><tr><td class="pos nbb"><span class="rank">&nbsp;</span></td><td class="logo nbb"><img src="/res/img/flags/small/16.gif">
</td><td class="nbb"><a href="/hraci/david-lischka-69736/">David Lischka</a></td><td class="c c1 nb">3</td></tr></table><div class="cl h5"></div>
<a href="/1-fotbalova-liga/2021-2022/statistiky/tabulka-strelcu/" title="" class="but w80 fr"><span class="l"></span><span class="i">Celá tabulka</span><span class="r"></span></a>
<div class="cl"></div>
</div></div>
<div class="cl h10"></div>
<div class="box green"><div class="in">
<div class="bookmark"><span class="it active">Anketa</span><div class="border"></div></div>
<div id="poll4598">
<div class="poll">
<form name="poll4598">
<div class="name">Jak se vám líbí návrat k systému nadstavbových skupin?</div><table cellspacing="0" cellpadding="0">
<tr><td class="left"><input type="radio" class="noborder" name="vote" value="15188" id="vote15188"></td><td><label for="vote15188">Vyhovuje mi. Dělá soutěž zajímavější</label></td></tr><tr><td class="left"><input type="radio" class="noborder" name="vote" value="15189" id="vote15189"></td><td><label for="vote15189">Nevadí mi, ale preferoval bych jiné rozdělení</label></td></tr><tr><td class="left"><input type="radio" class="noborder" name="vote" value="15190" id="vote15190"></td><td><label for="vote15190">Raději bych viděl ligu s 18 týmy jako loni</label></td></tr><tr><td class="left"><input type="radio" class="noborder" name="vote" value="15191" id="vote15191"></td><td><label for="vote15191">Nejlepší je klasický systém: 16 týmů a 30 kol </label></td></tr></table>
</form>
</div>
<div class="cl h5"></div>
<a href="javascript: vote(4598);" title="" class="but fr"><span class="l"></span><span class="i">Hlasovat</span><span class="r"></span></a>
<div class="cl"></div>
</div></div></div>
<div class="cl h10"></div>
</div>   </div>
   <div class="cl h10"></div>
   <div class="footer">
      <div class="l">
         <div class="fl">Copyright &copy; 2007-2021 EuroFotbal.cz. Využíváme zpravodajství ČTK.</div>
<div class="fl"><a href="https://www.toplist.cz/" target="_top"><img src="https://toplist.cz/dot.asp?id=1259275" border="0" alt="TOPlist" width="1" height="1"/></a></div>
      </div>
      <div class="r">
         <a href="/" title="" class="link">Hlavní stránka</a>
         <span class="dl"> | </span>
         <a href="/rss/" title="" class="link">RSS</a>
         <span class="dl"> | </span>
         <a href="https://wap.eurofotbal.cz/" target="_blank" class="link">WAP</a>
         <span class="dl"> | </span>
         <a href="/podminky/" title="" class="link">Podmínky užití</a>
         <span class="dl"> | </span>
         <a href="/kontakt/" title="" class="link">Kontakt</a>
         <span class="dl"> | </span>
         <a href="javascript:void(0);" class="link optanon-show-settings">Nastavení soukromí</a>
      </div>
      <div class="cl"></div>
   </div>
   <div class="cl h10"></div>
</div>
</div>
<div class="col-advert">
</div>
<div class="cl"></div>
</div>
<div class="cl"></div>
			<script language="javascript">
			$(document).ready(function() {
				bgInit();
			});
			</script>
			<!-- Adform publisher tag -->
			<!-- Tag for Eurofotbal.cz - TT-Eurofotbal-Leaderboard-2000-1400 placement -->
			<script data-adfscript="adx.adform.net/adx/?mid=547711"></script>
			                <script type="text/javascript">
                    // <![CDATA[
                    var banners; "use strict";
var BannerHandler = (function () {
    function BannerHandler(zoneIds, elementsBackgrounds, adsServers, adsAdminUrl, noticeTextSelectors, noticeText, storage, zoneIdsCond, requestOnInit, topZoneIds, refreshRates) {
        if (noticeTextSelectors === void 0) { noticeTextSelectors = {}; }
        if (noticeText === void 0) { noticeText = ''; }
        if (storage === void 0) { storage = null; }
        if (zoneIdsCond === void 0) { zoneIdsCond = null; }
        if (requestOnInit === void 0) { requestOnInit = true; }
        if (topZoneIds === void 0) { topZoneIds = []; }
        if (refreshRates === void 0) { refreshRates = {}; }
        this.verbose = false;
        this.allZoneIds = [];
        this.zoneIds = [];
        this.backupedDroppedZoneIds = [];
        this._refreshRateTimers = {};
        this.adsServers = [];
        this.adsAdminUrl = '';
        this.noticeText = '';
        this.storage = null;
        this.requests = 0;
        this.idPrefix = 'lsadvert-zid-';
        this.requested = false;
        this.responseHandled = false;
        this.displayed = false;
        this.displayCalled = false;
        this.adBlockedCallback = null;
        this.displayedCallback = null;
        this.zones = {};
        this.capping = {};
        this.cappingKey = '';
        this.setBackgroundCallbacks = [];
        this.backgroundZonesWithOffset = {};
        this.afterAdBackgroundElementCreatedCallbacks = [];
        this.bannersLoadedCallbacks = [];
        this.adBlocked = null;
        this.clientTypes = {
            mobile: "mobile",
            tablet: "tablet",
            PC: "PC"
        };
        this._backupPrepaired = false;
        this._attachedEvents = false;
        this._setIframeContentCounter = 0;
        this._setIframeContentTimeout = 20;
        this._backgroundSetTimeout = 100;
        this.testAdBlockElement = function (element) {
            var _a = document.body.getBoundingClientRect(), width = _a.width, height = _a.height;
            return element.style.display === "none" || element.style.visibility === "none" || width === 0 || height === 0;
        };
        var windowWithBrowser = window;
        windowWithBrowser.browser = windowWithBrowser.browser || {};
        this.zoneIdsCond = zoneIdsCond;
        this.allZoneIdsCond = zoneIdsCond ? zoneIdsCond : {};
        if (zoneIds && Array.isArray(zoneIds)) {
            this.allZoneIds = zoneIds;
            this.zoneIds = this._filterZoneIdsByBreakpoints(zoneIds);
        }
        else if (this.verbose) {
            window.cerr('zoneIds must be array');
        }
        this.topZoneIds = topZoneIds;
        this.noticeTextSelectors = noticeTextSelectors;
        this.elementsBackgrounds = elementsBackgrounds;
        this._refreshRates = refreshRates;
        if (adsServers && Array.isArray(zoneIds)) {
            this.adsServers = adsServers;
        }
        else if (this.verbose) {
            window.cerr('adsServers must be array');
        }
        this.adsAdminUrl = adsAdminUrl;
        this.validateBackgroundZones();
        this.noticeText = noticeText;
        this.storage = storage;
        this.maxRequests = Math.min(3, this.adsServers.length);
        this.requestTTL = this.maxRequests == 1 ? 15 : 2;
        this.urlTemplate = location.protocol + '//{URL}/delivery?zones=';
        if (this.storage) {
            var date = new Date();
            this.cappingKey = 'advertCapping_' + date.getFullYear() + '_' + date.getMonth() + '_' + date.getDate();
            var capping = this.storage.get(this.cappingKey);
            this.capping = capping ? JSON.parse(capping) : {};
        }
        if (requestOnInit) {
            this.request();
        }
    }
    BannerHandler.prototype.disableZone = function (zoneId) {
        var indexOfZone = this.zoneIds.indexOf(zoneId);
        if (indexOfZone != -1) {
            this.backupedDroppedZoneIds.push(zoneId);
            this.zoneIds.splice(indexOfZone, 1);
            return true;
        }
        return false;
    };
    BannerHandler.prototype.enableZone = function (zoneId) {
        var indexOfDroppedZone = this.backupedDroppedZoneIds.indexOf(zoneId);
        if (indexOfDroppedZone != -1) {
            this.zoneIds.push(zoneId);
            this.backupedDroppedZoneIds.splice(indexOfDroppedZone, 1);
            this.resetState();
            return true;
        }
        return false;
    };
    BannerHandler.prototype.resetState = function () {
        this.displayed = false;
        this.responseHandled = false;
        this.requested = false;
        this.requests = 0;
        return this;
    };
    BannerHandler.prototype.validateBackgroundZones = function () {
        if (this.getClientType() != this.clientTypes.mobile) {
            return;
        }
        var newZoneIds = [];
        for (var zoneIndex in this.zoneIds) {
            if (typeof this.elementsBackgrounds[this.zoneIds[zoneIndex]] == 'undefined') {
                newZoneIds.push(this.zoneIds[zoneIndex]);
            }
        }
        this.zoneIds = newZoneIds;
        this.elementsBackgrounds = {};
    };
    BannerHandler.prototype.setAdBlockedCallback = function (callback) {
        this.adBlockedCallback = callback;
        return this;
    };
    BannerHandler.prototype.setDisplayedCallback = function (callback) {
        this.displayedCallback = callback;
        return this;
    };
    BannerHandler.prototype.addSetBackgroundCallback = function (callback) {
        this.setBackgroundCallbacks.push(callback);
        return this;
    };
    BannerHandler.prototype.addAfterAdBackgroundElementCreatedCallbacks = function (callback) {
        this.afterAdBackgroundElementCreatedCallbacks.push(callback);
        return this;
    };
    BannerHandler.prototype.addBannersLoadedCallback = function (callback) {
        this.bannersLoadedCallbacks.push(callback);
        return this;
    };
    BannerHandler.prototype.hasFlashSupport = function () {
        try {
            var swfobject_1 = window.swfobject;
            return !!((typeof swfobject_1 != 'undefined' && swfobject_1.hasFlashPlayerVersion("1")) || "application/x-shockwave-flash" in navigator.mimeTypes || window.ActiveXObject && new ActiveXObject('ShockwaveFlash.ShockwaveFlash'));
        }
        catch (e) {
        }
        return false;
    };
    BannerHandler.prototype.getClientType = function () {
        if (typeof window.browser.mobile === 'undefined' ||
            typeof window.browser.mobile !== 'undefined' &&
                window.browser.mobile) {
            return this.clientTypes.mobile;
        }
        else if (/android|ipad|playbook|silk/i.test(navigator.userAgent || navigator.vendor || window.opera)) {
            return this.clientTypes.tablet;
        }
        return this.clientTypes.PC;
    };
    BannerHandler.prototype.getUrl = function () {
        var randUrlPos = Math.floor(Math.random() * this.adsServers.length);
        var randUrl = this.urlTemplate.replace('{URL}', this.adsServers[randUrlPos]);
        if (this.adsServers.length > 1) {
            this.adsServers.splice(randUrlPos, 1);
        }
        return randUrl;
    };
    BannerHandler.prototype.getUrlCappingPart = function () {
        var retCap = {}, hasCap = false;
        for (var i = 0; i < this.zoneIds.length; i++) {
            if (typeof this.capping[this.zoneIds[i]] != 'undefined') {
                hasCap = true;
                for (var j in this.capping[this.zoneIds[i]]) {
                    retCap[j] = this.capping[this.zoneIds[i]][j];
                }
            }
        }
        return hasCap ? '&cap=' + encodeURI(JSON.stringify(retCap)) : '';
    };
    BannerHandler.prototype.getUrlFlashPart = function () {
        return this.hasFlashSupport() ? '' : '&no_flash=1';
    };
    BannerHandler.prototype.getUrlClientTypePart = function () {
        return "&clientType=" + this.getClientType();
    };
    BannerHandler.prototype.getZoneIdsWithMissingData = function () {
        if (Object.keys(this.zones).length == 0) {
            return this.zoneIds;
        }
        var zonesToRequest = [];
        for (var key in this.zoneIds) {
            if (!this.zones[this.zoneIds[key]]) {
                zonesToRequest.push(this.zoneIds[key]);
            }
        }
        return zonesToRequest;
    };
    BannerHandler.prototype.viewportChanged = function () {
        if (this.verbose) {
            window.clog('Viewport changed');
        }
        var oldZoneIds = this.zoneIds;
        var zoneIds = this._filterZoneIdsByBreakpoints(this.allZoneIds);
        for (var index in oldZoneIds) {
            var zoneId = oldZoneIds[index];
            if (zoneIds.indexOf(zoneId) === -1) {
                this.hideZone(zoneId);
            }
        }
        this.zoneIds = zoneIds;
        var zonesToRequest = this.getZoneIdsWithMissingData();
        for (var index in zoneIds) {
            var zoneId = zoneIds[index];
            if (zonesToRequest.indexOf(zoneId) === -1) {
                this.showZone(zoneId);
            }
        }
        this.resetState();
        this.request();
    };
    BannerHandler.prototype.xhrRequest = function (url, onSuccess, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, method = _b.method, timeout = _b.timeout, json = _b.json, jsonp = _b.jsonp, onError = _b.onError;
        var xhr = new XMLHttpRequest();
        xhr.open(method || 'GET', url);
        if (timeout) {
            xhr.timeout = timeout * 1000;
        }
        xhr.onload = function () {
            if (_this.verbose) {
                window.clog('Success response');
            }
            xhr.status === 200
                ? onSuccess(json ? JSON.parse(_this.parseJsonp(xhr.response, jsonp)) : xhr.response)
                : onError && onError(xhr);
        };
        xhr.onerror = function () { return onError && onError(xhr); };
        try {
            xhr.send();
        }
        catch (e) {
            console.error(e);
            onError && onError(xhr);
        }
        return xhr;
    };
    BannerHandler.prototype.parseJsonp = function (data, jsonp) {
        if (jsonp)
            return data.substring(data.indexOf('(') + 1, data.lastIndexOf(')'));
        return data;
    };
    BannerHandler.prototype.request = function () {
        var zonesToRequest = this.getZoneIdsWithMissingData();
        this._request(zonesToRequest);
    };
    BannerHandler.prototype._request = function (zonesToRequest) {
        var _this = this;
        if (zonesToRequest.length > 0) {
            this.requests++;
            if (this.verbose) {
                window.clog('Requesting ' + zonesToRequest.join(','));
            }
            var url = this.getUrl() + zonesToRequest.join(',') + this.getUrlClientTypePart() + this.getUrlCappingPart() + this.getUrlFlashPart();
            this.xhrRequest(url, function (data) { return _this.setData(data, zonesToRequest); }, {
                jsonp: true,
                json: true,
                onError: function (xhr) { return _this.responseError(xhr); }
            });
        }
        this.requested = true;
    };
    BannerHandler.prototype.setData = function (data, requestedZones) {
        for (var zoneIdString in data) {
            var zoneId = parseInt(zoneIdString);
            this.zones[zoneId] = data[zoneId];
            this._prepareZone(zoneId);
            this._callBannersLoadedCallback(zoneId);
            if (this.zoneIdsCond && this.zoneIdsCond[zoneId] && this.zoneIdsCond[zoneId].offset) {
                this.backgroundZonesWithOffset[zoneId] = this.zoneIdsCond[zoneId].offset;
            }
        }
        this.responseHandled = true;
        if (this.displayCalled) {
            this.display();
        }
        else {
            for (var index = 0; index < this.zoneIds.length; index++) {
                var zoneId = this.zoneIds[index];
                if (!this.zones[zoneId] || !this.zones[zoneId].content) {
                    this.hideZone(zoneId);
                }
            }
        }
        var storeCapping = false;
        var zonesCond = [];
        if (!requestedZones) {
            requestedZones = this.zoneIds;
        }
        for (var _i = 0, requestedZones_1 = requestedZones; _i < requestedZones_1.length; _i++) {
            var zoneId = requestedZones_1[_i];
            if (this.zoneIdsCond != null && typeof this.zoneIdsCond[zoneId] != 'undefined') {
                var noZoneOrSecondRequest = typeof this.zones[zoneId] == 'undefined' || this.zoneIdsCond[zoneId].second_request;
                var noZoneOrNoHeight = typeof this.zones[zoneId] == 'undefined' || typeof this.zones[zoneId].h == 'undefined' || this.zones[zoneId].h <= this.zoneIdsCond[zoneId].height;
                if (noZoneOrSecondRequest && noZoneOrNoHeight) {
                    for (var i in this.zoneIdsCond[zoneId].zones) {
                        zonesCond.push(this.zoneIdsCond[zoneId].zones[i]);
                    }
                }
                else {
                    for (var i in this.zoneIdsCond[zoneId].zones) {
                        var zone = document.getElementById(this.idPrefix + this.zoneIdsCond[zoneId].zones[i]);
                        if (zone) {
                            zone.style.display = 'none';
                            var wrapper = zone.closest ? zone.closest('div.adsbackground-wrapper') : null;
                            if (wrapper) {
                                wrapper.style.display = 'none';
                            }
                        }
                    }
                }
            }
        }
        for (var zone in this.zones) {
            if (typeof this.zones[zone].cap != 'undefined') {
                if (typeof this.capping[zone] == 'undefined') {
                    this.capping[zone] = {};
                }
                if (typeof this.capping[zone][this.zones[zone].cap] == 'undefined') {
                    this.capping[zone][this.zones[zone].cap] = 1;
                }
                else {
                    this.capping[zone][this.zones[zone].cap]++;
                }
                storeCapping = true;
            }
        }
        if (storeCapping && this.storage) {
            this.storage.store(this.cappingKey, JSON.stringify(this.capping), 24 * 60 * 60, 'self', '/');
        }
        if (zonesCond.length) {
            var zoneIdsBack = this.zoneIds;
            for (var i = 0, l = zonesCond.length; i < l; i++) {
                zoneIdsBack.push(zonesCond[i]);
            }
            this.zoneIds = zonesCond;
            this.zoneIdsCond = null;
            this.requested = false;
            this.displayed = false;
            this.request();
            this.zoneIds = zoneIdsBack;
        }
        return this;
    };
    BannerHandler.prototype.responseError = function (xhr, errorThrown) {
        if (this.verbose) {
            window.cerr('Response error');
        }
        if (this.requests >= this.maxRequests) {
            this.setData({});
            if (!this.displayCalled) {
                this.requested = false;
                this.responseHandled = false;
            }
        }
        else {
            this.requested = false;
            this.request();
        }
    };
    BannerHandler.prototype.getContent = function (zoneId) {
        if (zoneId === void 0) { zoneId = 0; }
        if (this.zones && this.zones[zoneId] && this.zones[zoneId].content) {
            var zoneContent = this.zones[zoneId].content.replace(/\[timestamp\]/g, "" + Math.random());
            var windowWithBrowser = window;
            if ((windowWithBrowser.browser.msie || windowWithBrowser.browser.opera) && zoneContent.indexOf('<script') != -1) {
                var closeDelay = 700;
                if (windowWithBrowser.browser.version && windowWithBrowser.browser.version <= 8) {
                    closeDelay *= 8;
                }
                if (windowWithBrowser.browser.opera) {
                    closeDelay = 10;
                }
                zoneContent += "<script type=\"text/javascript\">setTimeout('document.close();', " + closeDelay + ");</s" + "cript>";
                if (windowWithBrowser.browser.opera) {
                    return "<script type=\"text/javascript\">setTimeout('document.write(unescape(\"" + escape("<body style=\"margin:0;padding:0;\">" + zoneContent + "</b" + "ody>") + "\"));',10);</s" + "cript>";
                }
            }
            return "<body style=\"margin:0;padding:0;\">" + zoneContent + "</b" + "ody>";
        }
        return '';
    };
    BannerHandler.prototype.display = function () {
        var _this = this;
        this.displayCalled = true;
        this._windowWidth = window.innerWidth;
        if (this.verbose) {
            window.clog('DisplayCalled');
        }
        if (this.responseHandled && !this.displayed) {
            this.displayed = true;
            var keys = [];
            this._prepareBackgroundsWithOffset();
            this._displayAdblockBanners();
            for (var i in this.zones) {
                if (this.zones.hasOwnProperty(i)) {
                    keys.push(i);
                }
            }
            if (!keys.length) {
                this.adBlocked = true;
                if (this.adBlockedCallback !== null) {
                    this.adBlockedCallback(this.adBlocked, window.browser);
                }
            }
            for (var index = 0, len = this.zoneIds.length; index < len; index++) {
                var zoneId = this.zoneIds[index];
                this._renderZone(zoneId);
            }
            if (!this._attachedEvents) {
                this._attachedEvents = true;
                var self_1 = this;
                window.addEventListener('resize', function () {
                    if (window.innerWidth != self_1._windowWidth) {
                        self_1._windowWidth = window.innerWidth;
                        clearTimeout(self_1._viewportTimeout);
                        self_1._viewportTimeout = setTimeout(function () {
                            self_1.viewportChanged();
                        }, 600);
                    }
                });
                if (!document.hidden) {
                    this._prepareRefreshZones();
                }
                var lastActiveTime_1 = new Date();
                window.addEventListener('visibilitychange', function () {
                    if (document.hidden) {
                        lastActiveTime_1 = new Date();
                        _this._clearRefreshZones();
                    }
                    else {
                        var now = new Date();
                        var diff = now.getTime() - lastActiveTime_1.getTime();
                        _this._prepareRefreshZones(Math.floor(diff / 1000));
                    }
                });
            }
            if (this.verbose) {
                window.clog('Display');
            }
        }
        else if (!this.requested) {
            this.request();
        }
    };
    BannerHandler.prototype.showZone = function (zoneId) {
        var zone = document.getElementById(this.idPrefix + zoneId);
        if (zone) {
            zone.style.display = 'block';
            var wrapper = zone.closest ? zone.closest('div.adsbackground-wrapper') : null;
            if (wrapper) {
                wrapper.style.display = 'block';
            }
        }
        var zoneIfrm = this._getZoneIframe(zoneId);
        if (zoneIfrm) {
            var bodyClassAttribute = zoneIfrm.getAttribute('data-body-class');
            if (bodyClassAttribute) {
                document.body.classList.add(bodyClassAttribute);
            }
        }
    };
    BannerHandler.prototype.hideZone = function (zoneId) {
        delete (this.zones[zoneId]);
        var zone = document.getElementById(this.idPrefix + zoneId);
        if (zone) {
            zone.style.display = 'none';
            var wrapper = zone.closest ? zone.closest('div.adsbackground-wrapper') : null;
            if (wrapper) {
                wrapper.style.display = 'none';
            }
        }
        var zoneIfrm = this._getZoneIframe(zoneId);
        if (zoneIfrm) {
            var bodyClassAttribute = zoneIfrm.getAttribute('data-body-class');
            if (bodyClassAttribute) {
                document.body.classList.remove(bodyClassAttribute);
            }
        }
    };
    BannerHandler.prototype.refreshZone = function (zoneId) {
        if (this.zoneIds.indexOf(zoneId) === -1) {
            return false;
        }
        delete (this.zones[zoneId]);
        this.resetState();
        this._request([zoneId]);
        return true;
    };
    BannerHandler.prototype._prepareRefreshZones = function (intervalSinceLastTime) {
        if (intervalSinceLastTime === void 0) { intervalSinceLastTime = 0; }
        var _loop_1 = function (zoneId) {
            var refreshRate = this_1._refreshRates[zoneId];
            if (this_1._refreshRateTimers.hasOwnProperty(zoneId)) {
                window.clearInterval(this_1._refreshRateTimers[zoneId]);
                delete (this_1._refreshRateTimers[zoneId]);
            }
            if (intervalSinceLastTime >= refreshRate) {
                this_1.refreshZone(parseInt(zoneId));
            }
            this_1._refreshRateTimers[zoneId] = (function (_self, _zoneId) {
                return window.setInterval(function () {
                    _self.refreshZone(_zoneId);
                }, refreshRate * 1000);
            })(this_1, parseInt(zoneId));
        };
        var this_1 = this;
        for (var zoneId in this._refreshRates) {
            _loop_1(zoneId);
        }
    };
    BannerHandler.prototype._clearRefreshZones = function () {
        for (var zoneId in this._refreshRateTimers) {
            window.clearInterval(this._refreshRateTimers[zoneId]);
            delete (this._refreshRateTimers[zoneId]);
        }
    };
    BannerHandler.prototype.testAdBlock = function () {
        if (this.requested) {
            var self_2 = this;
            setTimeout(function () {
                self_2.adBlocked = !self_2.responseHandled;
                if (!self_2.adBlocked) {
                    for (var i in self_2.zoneIds) {
                        var zoneIframe = document.getElementById(self_2.idPrefix + self_2.zoneIds[i] + '-iframe');
                        if (typeof self_2.zones[self_2.zoneIds[i]] != 'undefined') {
                            if (zoneIframe && self_2.testAdBlockElement(zoneIframe)) {
                                self_2.adBlocked = true;
                                break;
                            }
                            var zoneIframeObj = zoneIframe;
                            var zoneIframeDoc = (zoneIframeObj.contentWindow) ? zoneIframeObj.contentWindow : (zoneIframeObj.contentDocument.document) ? zoneIframeObj.contentDocument.document : zoneIframeObj.contentDocument;
                            if (typeof zoneIframeDoc.document != 'object') {
                                self_2.adBlocked = true;
                                break;
                            }
                            else {
                                var body = zoneIframeDoc.document.body;
                                if (body && (body.innerHTML.trim() == '' || self_2.testAdBlockElement(body))) {
                                    self_2.adBlocked = true;
                                    break;
                                }
                            }
                        }
                    }
                }
                else {
                    self_2.adBlocked = true;
                }
                if (self_2.adBlockedCallback !== null) {
                    self_2.adBlockedCallback(self_2.adBlocked, self_2.getBrowser());
                }
            }, 2000);
        }
    };
    BannerHandler.prototype.uaMatch = function (ua) {
        ua = ua.toLowerCase();
        var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
            /(webkit)[ \/]([\w.]+)/.exec(ua) ||
            /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
            /(msie) ([\w.]+)/.exec(ua) ||
            ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
            [];
        return {
            browser: match[1] || "",
            version: match[2] || "0"
        };
    };
    BannerHandler.prototype.getBrowser = function () {
        var userAgent = this.uaMatch(navigator.userAgent);
        var browser = {};
        if (userAgent.browser) {
            browser[userAgent.browser] = true;
            browser.version = userAgent.version;
        }
        if (browser.chrome) {
            browser.webkit = true;
        }
        else if (browser.webkit) {
            browser.safari = true;
        }
        return browser;
    };
    BannerHandler.prototype.backgroundZoneHasOffset = function (zoneId) {
        return !!this.backgroundZonesWithOffset[zoneId];
    };
    BannerHandler.prototype.addOrCallAdblockPlusCallback = function (callback) {
        if (window.AdblockPlus && typeof window.AdblockPlus.detect === 'function') {
            var locationOrigin = location.protocol + "//" + location.host;
            window.AdblockPlus.detect(locationOrigin + '/px.gif', callback);
        }
        return this;
    };
    BannerHandler.prototype._getViewportSize = function () {
        var body = (document.compatMode && document.compatMode === 'CSS1Compat') ? document.documentElement : document.body;
        return { width: body.clientWidth, height: body.clientHeight };
    };
    BannerHandler.prototype._filterZoneIdsByBreakpoints = function (zoneIds) {
        if (!this.zoneIdsCond) {
            this.zoneIdsCond = this.allZoneIdsCond;
        }
        var bodyClassList = document.body.classList;
        var isMobi = bodyClassList.contains("mobi");
        if (isMobi) {
            return zoneIds;
        }
        var filteredZoneIds = [];
        var isMobileOrTablet = this.getClientType() == this.clientTypes.mobile || this.getClientType() == this.clientTypes.tablet;
        var isDetailPage = document.body.classList.contains("detailbody");
        var fsiElement = document.getElementById('fsi');
        var isLsInFrame = false;
        if (fsiElement != null) {
            isLsInFrame = fsiElement.classList.contains('lsInFrame');
        }
        var viewportSize = this._getViewportSize();
        var desktopBreakpoint = 1000;
        if (!isDetailPage) {
            if (bodyClassList.contains("_in")) {
                desktopBreakpoint = 980;
            }
            else if (bodyClassList.contains("_sb")) {
                desktopBreakpoint = 988;
            }
        }
        for (var i in zoneIds) {
            var zoneId = zoneIds[i];
            if (!this.zoneIdsCond
                || !(zoneId in this.zoneIdsCond)
                || !('breakpoint' in this.zoneIdsCond[zoneId])
                || !this.zoneIdsCond[zoneId]['breakpoint']) {
                if (!(zoneId in this.zoneIdsCond)) {
                    this.zoneIdsCond[zoneId] = {};
                }
                this.zoneIdsCond[zoneId]['breakpoint'] = [desktopBreakpoint, 9999];
            }
            var breakpoint = this.zoneIdsCond[zoneId]['breakpoint'];
            var matchedBreakpoint = (viewportSize.width >= breakpoint[0] && viewportSize.width <= breakpoint[1]);
            var allowedForDetailPage = breakpoint[0] == desktopBreakpoint;
            if ((!isDetailPage && matchedBreakpoint) || (isDetailPage && (matchedBreakpoint || allowedForDetailPage) && (isMobileOrTablet || allowedForDetailPage)) || isLsInFrame) {
                filteredZoneIds.push(zoneId);
                continue;
            }
            this.hideZone(zoneId);
            for (var i_1 in this.zoneIdsCond[zoneId].zones) {
                this.hideZone(this.zoneIdsCond[zoneId].zones[i_1]);
            }
        }
        return filteredZoneIds;
    };
    BannerHandler.prototype._getInt = function (int) {
        try {
            int = parseInt(int);
        }
        catch (e) {
        }
        if (typeof int == "number") {
            return int;
        }
        return 0;
    };
    BannerHandler.prototype._prepareZone = function (zoneId) {
        if (zoneId === void 0) { zoneId = 0; }
        if (this.zones && this.zones[zoneId]) {
            this.zones[zoneId].rendered = false;
            this._resizeZoneToContent(zoneId);
        }
    };
    BannerHandler.prototype._resizeZoneToContent = function (zoneId) {
        if (zoneId === void 0) { zoneId = 0; }
        if (typeof this.zones[zoneId].w == "number" && typeof this.zones[zoneId].h == "number") {
            var zone = document.getElementById(this.idPrefix + zoneId);
            var zoneChild = zone && zone.childNodes[0];
            if (zone && zoneChild) {
                var width = Math.min(this._getInt(zone.style.width), this.zones[zoneId].w);
                var height = Math.min(this._getInt(zoneChild.style.height), this.zones[zoneId].h);
                this.zones[zoneId].width = width;
                this.zones[zoneId].height = height;
                zone.style.width = width + "px";
                zoneChild.style.height = height + "px";
                var iframe = document.getElementById(this.idPrefix + zoneId + '-iframe');
                if (iframe) {
                    iframe.style.width = width + "px";
                    iframe.style.height = height + "px";
                }
            }
        }
    };
    BannerHandler.prototype._callBannersLoadedCallback = function (zoneId) {
        for (var callbackIndex = 0, len = this.bannersLoadedCallbacks.length; callbackIndex < len; callbackIndex++) {
            if (Object.prototype.toString.call(this.bannersLoadedCallbacks[callbackIndex]) == '[object Function]') {
                this.bannersLoadedCallbacks[callbackIndex](zoneId);
            }
        }
    };
    BannerHandler.prototype._setIframeContent = function (zoneIfrm, zoneId, content, bannerId) {
        var _this = this;
        var self = this;
        var iterator = this._setIframeContentCounter;
        setTimeout(function () {
            var zoneIfrmDoc = _this._getIframeContentDocument(zoneIfrm);
            zoneIfrm.style.visibility = "";
            zoneIfrm.setAttribute("banner-id", bannerId.toString());
            var bodyClassAttribute = zoneIfrm.getAttribute('data-body-class');
            if (bodyClassAttribute) {
                document.body.classList.add(bodyClassAttribute);
            }
            if (self.noticeTextSelectors[zoneId]) {
                self._setNoticeTextToElement(self.noticeTextSelectors[zoneId]);
                for (var callbackIndex = 0, len = self.setBackgroundCallbacks.length; callbackIndex < len; callbackIndex++) {
                    if (Object.prototype.toString.call(self.setBackgroundCallbacks[callbackIndex]) == '[object Function]') {
                        var hasOffset = self.backgroundZoneHasOffset(zoneId);
                        self.setBackgroundCallbacks[callbackIndex](zoneId, hasOffset);
                    }
                }
            }
            if (!zoneIfrmDoc || !('document' in zoneIfrmDoc) || typeof zoneIfrmDoc.document != 'object') {
                zoneIfrm.src = 'javascript:(function(){document.open();document.domain="' + document.domain + '";var c = window.parent.banners.getContent(' + zoneId + ');document.write(c);})()';
            }
            else {
                zoneIfrmDoc.document.open();
                zoneIfrmDoc.document.write(content);
            }
            if (zoneIfrmDoc && 'document' in zoneIfrmDoc && (!(window.browser.msie) || content.indexOf('<script') == -1)) {
                zoneIfrmDoc.document.close();
            }
            self.showZone(zoneId);
            if (self._setIframeContentCounter - 1 == iterator) {
                self.testAdBlock();
                if (self.displayedCallback !== null) {
                    self.displayedCallback();
                }
            }
        }, this._setIframeContentTimeout * this._setIframeContentCounter++);
        return this;
    };
    BannerHandler.prototype._getIframeContentDocument = function (iframe) {
        if (iframe) {
            if (iframe.contentWindow) {
                return iframe.contentWindow;
            }
            else if (iframe.contentDocument) {
                if (iframe.contentDocument.document) {
                    return iframe.contentDocument.document;
                }
                return iframe.contentDocument;
            }
        }
        return null;
    };
    BannerHandler.prototype._setNoticeTextToElement = function (elementSelector) {
        var elements = document.querySelectorAll(elementSelector);
        if (elements[0]) {
            var span = document.createElement('span');
            span.classList.add("advert-bgr-notice");
            span.appendChild(document.createTextNode(this.noticeText));
            elements[0].appendChild(span);
        }
        return this;
    };
    BannerHandler.prototype.prepareBackup = function () {
        var _this = this;
        if (this.verbose) {
            window.clog('PrepareBackup');
        }
        if (this._backupPrepaired) {
            return;
        }
        this._backupPrepaired = true;
        if (typeof window.banners_backup_callbacks != "undefined" && window.banners_backup_callbacks.length) {
            var callbacks_1 = window.banners_backup_callbacks;
            var onRequestSuccess = function (script) {
                _this._eval(script);
                for (var index = 0, len = callbacks_1.length; index < len; index++) {
                    var callback = callbacks_1[index];
                    if (typeof callback == 'function') {
                        callback();
                    }
                }
            };
            this.xhrRequest("//static.criteo.net/js/ld/publishertag.js", onRequestSuccess);
        }
    };
    BannerHandler.prototype._eval = function (data) {
        if (data) {
            try {
                (window.execScript || function (data) {
                    window["eval"].call(window, data);
                })(data);
            }
            catch (error) {
                console.error(error);
            }
        }
    };
    BannerHandler.prototype._renderZone = function (zoneId) {
        var backgroundIds = [];
        if (typeof window.cjs != 'undefined' && window.cjs.dic) {
            var zoneList_1 = window.cjs.Api.config.get('app', 'banner', 'zone_list');
            if (zoneList_1) {
                Object.keys(zoneList_1).forEach(function (zoneName) {
                    if (zoneName.indexOf('background') === 0) {
                        if (zoneList_1[zoneName].id) {
                            backgroundIds.push(zoneList_1[zoneName].id);
                        }
                    }
                });
            }
        }
        var isMobileOrTablet = this.getClientType() == this.clientTypes.mobile || this.getClientType() == this.clientTypes.tablet;
        if (isMobileOrTablet && backgroundIds.indexOf(zoneId) != -1) {
            var element = document.getElementById(this.idPrefix + zoneId);
            if (element)
                element.remove();
            return;
        }
        if (this.zones[zoneId] && this.zones[zoneId].content && !this.zones[zoneId].rendered) {
            this.zones[zoneId].rendered = true;
            var clickUrl = null;
            if (this.zones[zoneId].id) {
                clickUrl = 'https://' + this.adsAdminUrl + '/delivery/ck.php?oaparams=2__bannerid=' + this.zones[zoneId].id + '__zoneid=' + zoneId;
            }
            if (this.elementsBackgrounds[zoneId]) {
                var backgroundSet = function (banners, zoneId, click) {
                    return function () {
                        for (var callbackIndex = 0; callbackIndex < banners.setBackgroundCallbacks.length; callbackIndex++) {
                            if (Object.prototype.toString.call(banners.setBackgroundCallbacks[callbackIndex]) == '[object Function]') {
                                var hasOffset = banners.backgroundZoneHasOffset(zoneId);
                                banners.setBackgroundCallbacks[callbackIndex](zoneId, hasOffset);
                            }
                        }
                        var bgrItem = banners.elementsBackgrounds[zoneId];
                        var backgroundAdSelector = bgrItem.element;
                        var background = "";
                        var elementContainingBackground = Array.prototype.filter.call(document.getElementsByTagName("div"), function (element) { return element.innerHTML === banners.zones[zoneId].content; })[0];
                        if (elementContainingBackground) {
                            var imgElement = elementContainingBackground.getElementsByTagName("img")[0];
                            if (imgElement) {
                                background = imgElement.getAttribute("src") || "";
                            }
                        }
                        var backgroundElements = document.querySelectorAll(backgroundAdSelector);
                        var backgroundElement = backgroundElements[0] ? backgroundElements[0] : null;
                        if (backgroundElement) {
                            backgroundElement.style.backgroundImage = 'url(' + background + ')';
                            backgroundElement.style.backgroundPosition = '49.9% 0';
                            backgroundElement.style.backgroundRepeat = 'repeat-x';
                            backgroundElement.style.cursor = 'pointer';
                            if (bgrItem.fixed) {
                                backgroundElement.style.backgroundAttachment = 'fixed';
                            }
                        }
                        for (var callbackIndex = 0, len = banners.afterAdBackgroundElementCreatedCallbacks.length; callbackIndex < len; callbackIndex++) {
                            if (Object.prototype.toString.call(banners.afterAdBackgroundElementCreatedCallbacks[callbackIndex]) == '[object Function]') {
                                banners.afterAdBackgroundElementCreatedCallbacks[callbackIndex](backgroundAdSelector, banners);
                            }
                        }
                        if (bgrItem.notice) {
                            banners._setNoticeTextToElement(bgrItem.notice);
                        }
                        var newStyle = document.createElement("style");
                        newStyle.innerHTML = backgroundAdSelector + ' > * {cursor: default;}';
                        newStyle.setAttribute("type", "text/css");
                        document.head.appendChild(newStyle);
                        if (click) {
                            if (backgroundElement) {
                                backgroundElement.onclick = function (_clickUrl, _clickableElement) {
                                    return function (e) {
                                        if (typeof e != 'undefined' && e.target == _clickableElement) {
                                            window.open(_clickUrl, 'banner');
                                        }
                                    };
                                }(click, backgroundElement);
                            }
                        }
                    };
                }(this, zoneId, clickUrl);
                setTimeout(backgroundSet, this._backgroundSetTimeout + this._setIframeContentTimeout * (this._setIframeContentCounter - 1));
                return;
            }
            if (this.zones[zoneId].id) {
                var zone = document.getElementById(this.idPrefix + zoneId);
                if (zone) {
                    var adsContent = zone.querySelectorAll("div.adscontent")[0];
                    if (adsContent) {
                        var parent_1 = adsContent.parentElement;
                        if (parent_1) {
                            parent_1.innerHTML = '<div class="adsclick" style="width: 100% !important; height: 100% !important" onclick="window.open(\'' + clickUrl + '\')"></div>' + parent_1.innerHTML;
                        }
                    }
                }
            }
            var zoneIfrm = this._getZoneIframe(zoneId);
            if (zoneIfrm) {
                var content = this.getContent(zoneId);
                this._setIframeContent(zoneIfrm, zoneId, content, this.zones[zoneId].id ? this.zones[zoneId].id : 0);
            }
        }
        else if (!this.zones[zoneId] || !this.zones[zoneId].rendered) {
            this.hideZone(zoneId);
        }
    };
    BannerHandler.prototype._getZoneIframe = function (zoneId) {
        return document.getElementById(this.idPrefix + zoneId + "-iframe");
    };
    BannerHandler.prototype._prepareBackgroundsWithOffset = function () {
        var self = this;
        var topZoneIds = this.topZoneIds;
        var programmaticZonesIds = Object.keys(this.backgroundZonesWithOffset);
        topZoneIds.forEach(function (topZoneId) {
            if (self.zones[topZoneId] && programmaticZonesIds.length) {
                programmaticZonesIds.forEach(function (programmaticZoneId) {
                    delete self.backgroundZonesWithOffset[programmaticZoneId];
                    delete self.zones[programmaticZoneId];
                });
            }
        });
    };
    BannerHandler.prototype._displayAdblockBanners = function () {
        var self = this;
        this.addOrCallAdblockPlusCallback(function (usesABP) {
            if (usesABP) {
                var elements = document.getElementsByClassName('abp_backup_zone');
                [].forEach.call(elements, function (element) {
                    element.style.display = 'block';
                });
                self.zoneIds.map(self.hideZone.bind(self));
            }
        });
    };
    return BannerHandler;
}());
if (typeof window !== "undefined" && window !== null) {
    window.BannerHandler = BannerHandler;
}
else {
    exports.BannerHandler = BannerHandler;
}

                    banners = new BannerHandler(
                        [1150,1151,263,3301],
                        [],
                        window.bannersAdsServers || ["content.livesportmedia.eu"],
                        "ads.livesportmedia.eu",
                        [],
                        "",
                        null,
                        {"1150":{"height":null,"second_request":false,"zones":[],"offset":false,"breakpoint":[0,9999]},"1151":{"height":null,"second_request":false,"zones":[],"offset":false,"breakpoint":[0,9999]},"263":{"height":null,"second_request":false,"zones":[],"offset":false,"breakpoint":[0,9999]},"3301":{"height":null,"second_request":false,"zones":[],"offset":false,"breakpoint":[0,9999]}},
                        true,
                        [259],
                        {},
                    );


                    document.lsadvert_display = function() {
                        banners.display();

	banners.prepareBackup();
                    }
                                        // ]]>
                </script>
                		<script type='text/javascript'>
		$(document).ready(function()
		{
			setTimeout('document.lsadvert_display();', 1000);
		});
		</script>

		<!-- OneTrust Cookies Consent Notice start for eurofotbal.cz -->
		<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="cfefe7a7-9a52-4929-88f9-721d7c585024" ></script>
		<script type="text/javascript">
		function OptanonWrapper() { }
		</script>
		<!-- OneTrust Cookies Consent Notice end for eurofotbal.cz -->

		<!-- Google Tag Manager -->
		<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-M94G39"
		height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
		<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-M94G39');</script>
		<!-- End Google Tag Manager -->

		<!-- iBILLBOARD Ad Server one2many code -->
		<!-- HowTo: All the ad codes must be above this code! -->
		<!-- HowTo: It is good idea to place this code just below the last ad code. -->
		<script type='text/javascript' charset='utf-8' src='https://go.cz.bbelements.com/bb/bb_one2n.js'></script>
		<script type='text/javascript'>/* <![CDATA[ */
		var bbkeywords=''; //fill in: 'key1;key2;..'
		bmone2n.addPosition('21161.1.1.5','');
		bmone2n.getAd('go.cz.bbelements.com',bbkeywords,''+(typeof(bburlparam)=='string'?'&'+bburlparam:''),'utf-8');
		/* ]]> */</script>
		<div id='bmone2t-21161.1.1.5' style='display:none'><script type='text/javascript'>/* <![CDATA[ */ bmone2n.makeAd('21161.1.1.5'); /* ]]> */</script></div>
		<script type='text/javascript'>/* <![CDATA[ */ bmone2n.moveAd(); /* ]]> */</script>

		<span id="mlc-4ck3s9wd8c"></span>
		<span id="mlc-aks81bkdz"></span>
		</body>
</html>
`;

export const LEAGUE_DATA: SoccerBotResponse<SoccerBotTeam[]> = {
  ok: true,
  data: [
    { id: 'cesko/sparta-praha', name: 'Sparta Praha' },
    { id: 'cesko/viktoria-plzen', name: 'Viktoria Plzeň' },
    { id: 'cesko/slavia-praha', name: 'Slavia Praha' },
    { id: 'cesko/1-fc-slovacko', name: '1. FC Slovácko' },
    { id: 'cesko/banik-ostrava', name: 'Baník Ostrava' },
    { id: 'cesko/sigma-olomouc', name: 'Sigma Olomouc' },
    { id: 'cesko/fastav-zlin', name: 'Fastav Zlín' },
    { id: 'cesko/fk-mlada-boleslav', name: 'FK Mladá Boleslav' },
    {
      id: 'cesko/dynamo-ceske-budejovice',
      name: 'Dynamo České Budějovice'
    },
    { id: 'cesko/bohemians-praha-1905', name: 'Bohemians Praha 1905' },
    { id: 'cesko/fc-hradec-kralove', name: 'FC Hradec Králové' },
    { id: 'cesko/fk-pardubice', name: 'FK Pardubice' },
    { id: 'cesko/fk-jablonec', name: 'FK Jablonec' },
    { id: 'cesko/mfk-karvina', name: 'MFK Karviná' },
    { id: 'cesko/fk-teplice', name: 'FK Teplice' },
    { id: 'cesko/slovan-liberec', name: 'Slovan Liberec' }
  ]
};
