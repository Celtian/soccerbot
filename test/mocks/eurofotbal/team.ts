import {
  SoccerBotCountry,
  SoccerBotPlayer,
  SoccerBotPositionGroup,
  SoccerBotResponse
} from '../../../src/shared/interfaces';

export const TEAM_HTML = `

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html xmlns:og="http://ogp.me/ns#" xmlns:fb="https://www.facebook.com/2008/fbml">
<head>
<title>Sparta Praha (Česko) - sestavy, soupiska klubu, sestava</title>
<meta name="description" content="Aktuální soupiska klubu Sparta Praha (Česko). Soupiska, pravděpodobné sestavy, ideální sestava a další týmové informace klubu Sparta Praha (Česko).">
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
<link rel="stylesheet" href="/res/css/team.css?par=1630078966" type="text/css">
<link rel="stylesheet" href="/res/css/competition.css?par=1630078966" type="text/css">
<link rel="stylesheet" href="/res/css/poll.css?par=1630078966" type="text/css">
<link rel="stylesheet" href="/res/css/userInfo.css?par=1630078966" type="text/css">
<script src="/res/js/jquery-1.11.1.min.js?par=1630078966" language="JavaScript" type="text/javascript"></script>
<script src="/res/js/_basic.js?par=1630078966" language="JavaScript" type="text/javascript"></script>
<script src="https://cdn.cpex.cz/skin/v2/cpex-skin.js" language="JavaScript" type="text/javascript"></script>
<script src="/res/js/ajax.js?par=1630078966" language="JavaScript" type="text/javascript"></script>
<script src="/res/js/banner-scroll.js.php?par=1630078966" language="JavaScript" type="text/javascript"></script>
<script src="/res/js/waypoints.js?par=1630078966" language="JavaScript" type="text/javascript"></script>
<script src="/res/js/expres.js?par=1630078966" language="JavaScript" type="text/javascript"></script>
<script src="/res/js/poll.js?par=1630078966" language="JavaScript" type="text/javascript"></script>
<script src="/res/js/user.js?par=1630078966" language="JavaScript" type="text/javascript"></script>
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
            <input type="hidden" name="return" value="L2tsdWJ5L2Nlc2tvL3NwYXJ0YS1wcmFoYS9zb3VwaXNrYS8=">
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
			<li><a href="/souteze/domaci/" title=""><span class="l"></span>Přehled soutěží<span class="r"></span></a>
				<ul>
					<li><a href="/premier-league/" title=""><span class="ar"></span>Premier League</a></li>
					<li><a href="/laliga/" title=""><span class="ar"></span>LaLiga</a></li>
					<li><a href="/serie-a/" title=""><span class="ar"></span>Serie A</a></li>
					<li><a href="/bundesliga/" title=""><span class="ar"></span>1. Bundesliga</a></li>
					<li><a href="/ligue-1/" title=""><span class="ar"></span>Ligue 1</a></li>
					<li><a href="/1-fotbalova-liga/" title=""><span class="ar"></span>1. Fotbalová liga</a></li>
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
			<li><a href="javascript: void(0);" onclick="leftMenuClick(2);" title="" class="red"><span class="l"></span>Kluby<span class="r"></span></a>
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
<h1 class="pagetitle">Sparta Praha (Česko) - soupiska 2021/2022</h1><div class="box submenu"><div class="in"><div class="bookmark"><span class="it"><a href="/kluby/cesko/sparta-praha/">Zprávy</a></span><span class="dl"></span><span class="it"><a href="javascript: void(0);" class="popup" onmouseover="menuOver(1);" onmouseout="menuOut();">Aktuální sezóna</a><br><div id="menu_1" class="itemdiv" onmouseover="menuOver(1);" onmouseout="menuOut();"><a href="/kluby/cesko/sparta-praha/zapasy/1-fotbalova-liga-2021-2022/?cID=19&sID=302">1. Fotbalová liga 2021/2022</a><a href="/kluby/cesko/sparta-praha/zapasy/liga-mistru-2021-2022/?cID=1&sID=302">Liga mistrů 2021/2022</a><a href="/kluby/cesko/sparta-praha/zapasy/evropska-liga-2021-2022/?cID=2&sID=302">Evropská liga 2021/2022</a><a href="/kluby/cesko/sparta-praha/zapasy/">přehled všech zápasů</a></div></span><span class="dl"></span><span class="it"><a href="/kluby/cesko/sparta-praha/archiv/" class="popup" onmouseover="menuOver(2);" onmouseout="menuOut();">Minulé sezóny</a><br><div id="menu_2" class="itemdiv" onmouseover="menuOver(2);" onmouseout="menuOut();"><a href="/kluby/cesko/sparta-praha/zapasy/2020-2021/?sID=300" class="head-link">2020/2021</a><a href="/kluby/cesko/sparta-praha/zapasy/1-fotbalova-liga-2020-2021/?cID=19&sID=300" class="sub-link">1. Fotbalová liga</a><a href="/kluby/cesko/sparta-praha/zapasy/mol-cup-2020-2021/?cID=160&sID=300" class="sub-link">MOL Cup</a><a href="/kluby/cesko/sparta-praha/zapasy/evropska-liga-2020-2021/?cID=2&sID=300" class="sub-link">Evropská liga</a><a href="/kluby/cesko/sparta-praha/zapasy/2019-2020/?sID=298" class="head-link">2019/2020</a><a href="/kluby/cesko/sparta-praha/zapasy/1-fotbalova-liga-2019-2020/?cID=19&sID=298" class="sub-link">1. Fotbalová liga</a><a href="/kluby/cesko/sparta-praha/zapasy/mol-cup-2019-2020/?cID=160&sID=298" class="sub-link">MOL Cup</a><a href="/kluby/cesko/sparta-praha/zapasy/evropska-liga-2019-2020/?cID=2&sID=298" class="sub-link">Evropská liga</a><a href="/kluby/cesko/sparta-praha/zapasy/2018-2019/?sID=296" class="head-link">2018/2019</a><a href="/kluby/cesko/sparta-praha/zapasy/1-fotbalova-liga-2018-2019/?cID=19&sID=296" class="sub-link">1. Fotbalová liga</a><a href="/kluby/cesko/sparta-praha/zapasy/mol-cup-2018-2019/?cID=160&sID=296" class="sub-link">MOL Cup</a><a href="/kluby/cesko/sparta-praha/zapasy/evropska-liga-2018-2019/?cID=2&sID=296" class="sub-link">Evropská liga</a><a href="/kluby/cesko/sparta-praha/zapasy/2017-2018/?sID=294" class="head-link">2017/2018</a><a href="/kluby/cesko/sparta-praha/zapasy/1-fotbalova-liga-2017-2018/?cID=19&sID=294" class="sub-link">1. Fotbalová liga</a><a href="/kluby/cesko/sparta-praha/zapasy/mol-cup-2017-2018/?cID=160&sID=294" class="sub-link">MOL Cup</a><a href="/kluby/cesko/sparta-praha/zapasy/evropska-liga-2017-2018/?cID=2&sID=294" class="sub-link">Evropská liga</a><a href="/kluby/cesko/sparta-praha/zapasy/2016-2017/?sID=292" class="head-link">2016/2017</a><a href="/kluby/cesko/sparta-praha/zapasy/1-fotbalova-liga-2016-2017/?cID=19&sID=292" class="sub-link">1. Fotbalová liga</a><a href="/kluby/cesko/sparta-praha/zapasy/mol-cup-2016-2017/?cID=160&sID=292" class="sub-link">MOL Cup</a><a href="/kluby/cesko/sparta-praha/zapasy/liga-mistru-2016-2017/?cID=1&sID=292" class="sub-link">Liga mistrů</a><a href="/kluby/cesko/sparta-praha/zapasy/evropska-liga-2016-2017/?cID=2&sID=292" class="sub-link">Evropská liga</a><a href="/kluby/cesko/sparta-praha/archiv/" class="head-link">další sezóny &raquo;</a></div></span><span class="dl"></span><span class="it"><a href="/kluby/cesko/sparta-praha/info/">O klubu</a></span><span class="dl"></span><span class="it active"><a href="/kluby/cesko/sparta-praha/soupiska/">Soupiska</a></span><span class="dl"></span><span class="it"><a href="/kluby/cesko/sparta-praha/statistiky/tabulka-strelcu/">Statistiky</a></span><span class="dl"></span><span class="it"><a href="/kluby/cesko/sparta-praha/prestupy/">Přestupy</a></span><span class="dl"></span><span class="it"><a href="/kluby/cesko/sparta-praha/fanousci/">Fanoušci</a></span><div class="border"></div></div></div></div>
<div class="cl h10"></div>
</div>
<div class="col-center">
<div class="box"><div class="in">
Vyber sezónu: <select onchange="location.href='/kluby/cesko/sparta-praha/soupiska/'+this.value;">
<option value="" selected>2021/2022 - aktuální sezóna</option>
<option value="2020-2021/">2020/2021</option>
<option value="2019-2020/">2019/2020</option>
<option value="2018-2019/">2018/2019</option>
<option value="2017-2018/">2017/2018</option>
<option value="2016-2017/">2016/2017</option>
<option value="2015-2016/">2015/2016</option>
<option value="2014-2015/">2014/2015</option>
<option value="2013-2014/">2013/2014</option>
<option value="2012-2013/">2012/2013</option>
<option value="2011-2012/">2011/2012</option>
<option style="color: silver;" value="2011/">2011</option>
<option value="2010-2011/">2010/2011</option>
<option style="color: silver;" value="2010/">2010</option>
<option value="2009-2010/">2009/2010</option>
<option style="color: silver;" value="2009/">2009</option>
<option value="2008-2009/">2008/2009</option>
<option value="2007-2008/">2007/2008</option>
<option value="2006-2007/">2006/2007</option>
<option value="2005-2006/">2005/2006</option>
<option value="2004-2005/">2004/2005</option>
<option value="2003-2004/">2003/2004</option>
<option value="2002-2003/">2002/2003</option>
<option value="2001-2002/">2001/2002</option>
<option style="color: silver;" value="2000-2001/">2000/2001</option>
<option style="color: silver;" value="1999-2000/">1999/2000</option>
<option style="color: silver;" value="1998-1999/">1998/1999</option>
<option style="color: silver;" value="1997-1998/">1997/1998</option>
<option style="color: silver;" value="1996-1997/">1996/1997</option>
<option style="color: silver;" value="1995-1996/">1995/1996</option>
<option style="color: silver;" value="1994-1995/">1994/1995</option>
<option style="color: silver;" value="1993-1994/">1993/1994</option>
<option style="color: silver;" value="1992-1993/">1992/1993</option>
<option style="color: silver;" value="1991-1992/">1991/1992</option>
<option style="color: silver;" value="1990-1991/">1990/1991</option>
<option style="color: silver;" value="1989-1990/">1989/1990</option>
<option style="color: silver;" value="1988-1989/">1988/1989</option>
<option style="color: silver;" value="1987-1988/">1987/1988</option>
<option style="color: silver;" value="1986-1987/">1986/1987</option>
<option style="color: silver;" value="1985-1986/">1985/1986</option>
<option style="color: silver;" value="1984-1985/">1984/1985</option>
<option style="color: silver;" value="1980-1981/">1980/1981</option>
<option style="color: silver;" value="1967-1968/">1967/1968</option>
<option style="color: silver;" value="1965-1966/">1965/1966</option>
</select>
</div></div>
<div class="cl h10"></div>
<div class="box green"><div class="in">
<div class="bar">Brankáři</div>
<table cellspacing="0" cellpadding="0" class="squad vam">
<tr><td class="number">29</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/milan-heca-28271/">Milan Heča</a></td><td class="birth">21.03.1991</td><td class="hw">192 / 82</td><td class="stats">0</td><td class="stats">0</td></tr>
<tr><td class="number">77</td><td class="flag"><img src="/res/img/flags/small/45.gif" alt="Slovensko"></td><td class="name"><a href="/hraci/dominik-holec-41446/">Dominik Holec</a></td><td class="birth">28.07.1994</td><td class="hw">? / ?</td><td class="stats">0</td><td class="stats">0</td></tr>
<tr><td class="number">1</td><td class="flag"><img src="/res/img/flags/small/39.gif" alt="Rumunsko"></td><td class="name"><a href="/hraci/florin-nita-33952/">Florin Niţă</a></td><td class="birth">03.07.1987</td><td class="hw">185 / 74</td><td class="stats">10</td><td class="stats">0</td></tr>
</table><div class="bar">Obránci</div>
<table cellspacing="0" cellpadding="0" class="squad vam">
<tr><td class="number">3</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/ondrej-celustka-2874/">Ondřej Čelůstka</a></td><td class="birth">18.06.1989</td><td class="hw">185 / 78</td><td class="stats">0</td><td class="stats">0</td></tr>
<tr><td class="number">4</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/adam-gabriel-113943/">Adam Gabriel</a></td><td class="birth">28.05.2001</td><td class="hw">? / ?</td><td class="stats">2</td><td class="stats">0</td></tr>
<tr><td class="number">33</td><td class="flag"><img src="/res/img/flags/small/45.gif" alt="Slovensko"></td><td class="name"><a href="/hraci/david-hancko-59188/">Dávid Hancko</a></td><td class="birth">13.12.1997</td><td class="hw">188 / ?</td><td class="stats">9</td><td class="stats">1</td></tr>
<tr><td class="number">17</td><td class="flag"><img src="/res/img/flags/small/18.gif" alt="Dánsko"></td><td class="name"><a href="/hraci/casper-hojer-69377/">Casper Höjer</a></td><td class="birth">20.11.1994</td><td class="hw">183 / 80</td><td class="stats">3</td><td class="stats">0</td></tr>
<tr><td class="number">19</td><td class="flag"><img src="/res/img/flags/small/45.gif" alt="Slovensko"></td><td class="name"><a href="/hraci/lukas-stetina-11671/">Lukáš Štetina</a></td><td class="birth">28.07.1991</td><td class="hw">185 / 85</td><td class="stats">4</td><td class="stats">0</td></tr>
<tr><td class="number">32</td><td class="flag"><img src="/res/img/flags/small/36.gif" alt="Norsko"></td><td class="name"><a href="/hraci/andreas-vindheim-55261/">Andreas Vindheim</a></td><td class="birth">04.08.1995</td><td class="hw">184 / 79</td><td class="stats">3</td><td class="stats">0</td></tr>
<tr><td class="number">41</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/martin-vitik-107726/">Martin Vitík</a></td><td class="birth">21.01.2003</td><td class="hw">? / ?</td><td class="stats">1</td><td class="stats">0</td></tr>
<tr><td class="number">28</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/tomas-wiesner-68770/">Tomáš Wiesner</a></td><td class="birth">17.07.1997</td><td class="hw">? / ?</td><td class="stats">10</td><td class="stats">0</td></tr>
</table><div class="bar">Záložníci</div>
<table cellspacing="0" cellpadding="0" class="squad vam">
<tr><td class="number">10</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/borek-dockal-2741/">Bořek Dočkal</a></td><td class="birth">30.09.1988</td><td class="hw">182 / 71</td><td class="stats">6</td><td class="stats">0</td></tr>
<tr><td class="number">&nbsp;</td><td class="flag"><img src="/res/img/flags/small/45.gif" alt="Slovensko"></td><td class="name"><a href="/hraci/lukas-haraslin-46966/">Lukáš Haraslín</a></td><td class="birth">26.05.1996</td><td class="hw">182 / ?</td><td class="stats">0</td><td class="stats">0</td></tr>
<tr><td class="number">36</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/adam-karabec-103740/">Adam Karabec</a></td><td class="birth">02.07.2003</td><td class="hw">? / ?</td><td class="stats">9</td><td class="stats">1</td></tr>
<tr><td class="number">9</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/ladislav-krejci-13871/">Ladislav Krejčí</a></td><td class="birth">05.07.1992</td><td class="hw">179 / 61</td><td class="stats">4</td><td class="stats">1</td></tr>
<tr><td class="number">37</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/ladislav-krejci-71037/">Ladislav Krejčí</a></td><td class="birth">20.04.1999</td><td class="hw">187 / 78</td><td class="stats">3</td><td class="stats">2</td></tr>
<tr><td class="number">27</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/filip-panak-57575/">Filip Panák</a></td><td class="birth">02.11.1995</td><td class="hw">185 / 72</td><td class="stats">6</td><td class="stats">0</td></tr>
<tr><td class="number">8</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/david-pavelka-28921/">David Pavelka</a></td><td class="birth">18.05.1991</td><td class="hw">174 / 57</td><td class="stats">10</td><td class="stats">2</td></tr>
<tr><td class="number">21</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/jakub-pesek-59053/">Jakub Pešek</a></td><td class="birth">24.06.1993</td><td class="hw">174 / 63</td><td class="stats">10</td><td class="stats">4</td></tr>
<tr><td class="number">24</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/matej-polidar-88981/">Matěj Polidar</a></td><td class="birth">20.12.1999</td><td class="hw">179 / 76</td><td class="stats">8</td><td class="stats">1</td></tr>
<tr><td class="number">16</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/michal-sacek-68526/">Michal Sáček</a></td><td class="birth">19.09.1996</td><td class="hw">175 / 63</td><td class="stats">9</td><td class="stats">0</td></tr>
<tr><td class="number">6</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/filip-soucek-90547/">Filip Souček</a></td><td class="birth">18.09.2000</td><td class="hw">? / ?</td><td class="stats">7</td><td class="stats">1</td></tr>
</table><div class="bar">Útočníci</div>
<table cellspacing="0" cellpadding="0" class="squad vam">
<tr><td class="number">14</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/vaclav-drchal-76244/">Václav Drchal</a></td><td class="birth">25.07.1999</td><td class="hw">? / ?</td><td class="stats">1</td><td class="stats">0</td></tr>
<tr><td class="number">20</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/adam-hlozek-85856/">Adam Hložek</a></td><td class="birth">25.07.2002</td><td class="hw">? / ?</td><td class="stats">10</td><td class="stats">3</td></tr>
<tr><td class="number">39</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/lukas-julis-30858/">Lukáš Juliš</a></td><td class="birth">02.12.1994</td><td class="hw">184 / 76</td><td class="stats">3</td><td class="stats">0</td></tr>
<tr><td class="number">11</td><td class="flag"><img src="/res/img/flags/small/15.gif" alt="Bulharsko"></td><td class="name"><a href="/hraci/martin-mincev-72196/">Martin Minčev</a></td><td class="birth">22.04.2001</td><td class="hw">? / ?</td><td class="stats">4</td><td class="stats">0</td></tr>
<tr><td class="number">7</td><td class="flag"><img src="/res/img/flags/small/47.gif" alt="Švédsko"></td><td class="name"><a href="/hraci/david-moberg-karlsson-50775/">David Moberg Karlsson</a></td><td class="birth">20.03.1994</td><td class="hw">179 / 76</td><td class="stats">10</td><td class="stats">3</td></tr>
<tr><td class="number">52</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/vojtech-patrak-104619/">Vojtěch Patrák</a></td><td class="birth">18.03.2000</td><td class="hw">? / ?</td><td class="stats">1</td><td class="stats">0</td></tr>
<tr><td class="number">18</td><td class="flag"><img src="/res/img/flags/small/16.gif" alt="Česko"></td><td class="name"><a href="/hraci/matej-pulkrab-68165/">Matěj Pulkrab</a></td><td class="birth">23.05.1997</td><td class="hw">182 / 73</td><td class="stats">5</td><td class="stats">0</td></tr>
</table>
</div></div>
<div class="cl h10"></div>
<div class="box"><div class="in">Sloupce: číslo dresu, post, jméno, datum narození, výška/váha, zápasy v sezóně, góly v sezóně.</div></div>
<div class="cl h10"></div>
<div style="text-align: center;" class="mt20"><div class="adsenvelope adstextpad banx-main_square" id="lsadvert-zid-3301" style="width:300px;"><div style="height:250px"><div class="adscontent" id="lsadvert-main_square"><iframe id="lsadvert-zid-3301-iframe" name="banx-main_square" frameborder="0" scrolling="no" style="allowTransparency: true; visibility: hidden; width:300px; height:250px"></iframe></div><div class="adsgraphhori"><div class="adsghori ath-CS"></div></div></div></div></div>
</div>
<div class="col-right">
<div class="box blue"><div class="in">
<a href="javascript:void(0)" class="sheets-plus" id="bookmarkLink" onclick="bookmarkToggle('team', 515, 0);">přidat stránku do záložek</a></div></div>
<div class="cl h10"></div>
<div class="box green" onmouseover="expresOver();" onmouseout="expresOut();">
<div class="in">
<div class="bookmark">
<span class="it active"><a href="/kluby/cesko/sparta-praha/expres-zpravy/" title="">Expres zprávy</a></span>
<div class="border"></div>
</div>
<table cellspacing="0" cellpadding="0" class="rightexpres">
<col width="25"><col width="193">
<tr id="rightexpres-title-510964">
<td class="nw c w30">28.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('510964');">Sparta přivádí Haraslína</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-510964">
<td colspan="2" class="nbr">Univerzální slovenský křídelník či krajní obránce Lukáš Haraslín by již v pondělí mohl být představen pražskou Spartou. Ta účastníka nedávného Eura přivádí ze Sassuola na hostování s opcí. <span class="source">(gianlucadimarzio.com)</span></td>
</tr>
<tr id="rightexpres-title-510930">
<td class="nw c w30">28.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('510930');">Sparta přišla o zraněného Polidara</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-510930">
<td colspan="2" class="nbr">Matěj Polidar ze Sparty vydržel proti Českým Budějovicím na trávníku jenom necelých 20 minut. Univerzálovi letenského celku vystavila stopku zraněná achillovka. <span class="source">(idnes.cz/fotbal)</span></td>
</tr>
<tr id="rightexpres-title-510880">
<td class="nw c w30">28.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('510880');">Program Sparty v Evropské lize</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-510880">
<td colspan="2" class="nbr"><b>Program pražské Sparty v základní skupině Evropské ligy:</b>
<br><b>Skupina A:</b>
<br>16. září: 21:00 Bröndby Kodaň - Sparta Praha,
<br>30. září: 18:45 Sparta Praha - Rangers,
<br>21. října: 21:00 Sparta Praha - Lyon,
<br>4. listopadu: 18:45 Lyon - Sparta Praha,
<br>25. listopadu: 21:00 Rangers - Sparta Praha,
<br>9. prosince: 18:45 Sparta Praha - Bröndby Kodaň. <span class="source">(ČTK)</span></td>
</tr>
<tr id="rightexpres-title-510759">
<td class="nw c w30">27.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('510759');">Sparta zná své soupeře</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-510759">
<td colspan="2" class="nbr">Sparta zná soupeře pro základní skupinu Evropské ligy, na Letenské čekají Lyon, Rangers a Brondby.</td>
</tr>
<tr id="rightexpres-title-510730">
<td class="nw c w30">27.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('510730');">České kluby získaly za postup celkem 242 milionů</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-510730">
<td colspan="2" class="nbr">Celkem 242,3 milionu korun získaly tři české kluby za postup do hlavní fáze evropských pohárů. Nejlépe je na tom Sparta, která díky účasti ve skupině Evropské ligy inkasuje prémii 3,63 milionu eur (92,3 milionu korun). Slavia s Jabloncem si zahrají nově vzniklou Konferenční ligu, za což dostanou v přepočtu zhruba 75 milionů korun. Obě soutěže výrazně zaostávají za Ligou mistrů. Za start v hlavní fázi nejprestižnějšího z pohárů si kluby připíšou téměř 400 milionů korun, o dost štědřejší jsou i bonusy za výhru a za remízu. <span class="source">(ČTK)</span></td>
</tr>
<tr id="rightexpres-title-510696">
<td class="nw c w30">26.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('510696');">Sparta zřejmě ve 3. koši, Slavia v prvním</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-510696">
<td colspan="2" class="nbr">Rozdělení jednotlivých účastníků Evropské ligy a Konferenční ligy prozatím nebylo učiněno oficiálním, lze ho však již téměř jistě odvodit. Sparta Praha má být při losu Evropské ligy nasazena do 3. koše stejně jako Jablonec v Konferenční lize, zatímco Slavia bude s největší pravděpodobností v prvním koši a vyhne se např. AS Řím, Basileji či Tottenhamu. <span class="source">(twitter.com/OndraZlamal)</span></td>
</tr>
<tr id="rightexpres-title-509456">
<td class="nw c w30">14.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('509456');">Vrba: Zápas dvou poločasů</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-509456">
<td colspan="2" class="nbr">Sparta dnes sice zvládla stáhnout manko v Ďolíčku, zároveň však poprvé v sezoně ztratila body a trenér Pavel Vrba tak nemohl být plně spokojený: <i>"První a druhý poločas je nesrovnatelný a byl to důvod, proč jsme nevyhráli. V prvním poločase jsme ztratili spoustu balonů, v rozehrávce jsme byli nepřesní. Měli jsme tam dvě situace, v nichž jsme dobře vystřelili. Hlavně ale naše hra byla strašně pomalá a obrovské ztráty udělaly to, že soupeř tam měl několik závarů a mohli jsme prohrávat víc než 0:1. Je to spravedlivý výsledek vzhledem k tomu, že první poločas byla lepší Bohemka a ve druhém my."</i> <span class="source">(ČTK)</span></td>
</tr>
<tr id="rightexpres-title-509043">
<td class="nw c w30">10.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('509043');">Sparta prohrála v Monacu</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-509043">
<td colspan="2" class="nbr">Výsledek odvety 3. předkola Ligy mistrů: <b>Monaco - Sparta 3:1</b> (50. Martins, 56. Golovin, 81. Diop - 78. Karlsson).</td>
</tr>
<tr id="rightexpres-title-509038">
<td class="nw c w30">10.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('509038');">Sparťané hrají v Monacu bez gólu</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-509038">
<td colspan="2" class="nbr">Poločasový výsledek odvety 3. předkola Ligy mistrů: <b>Monaco - Sparta 0:0</b>.</td>
</tr>
<tr id="rightexpres-title-509026">
<td class="nw c w30">10.08.</td>
<td class="nbr"><a href="javascript: void(0);" onclick="expresShow('509026');">Sestavy: Monaco - Sparta</a></td>
</tr>
<tr class="rightexpres-text none" id="rightexpres-text-509026">
<td colspan="2" class="nbr"><b>Základní sestavy pro odvetu 3. předkola Ligy mistrů:<br>
Monaco:</b> Nübel - Sidibé, Disasi, B. Badiashile, Caio Henrique - Martins, Fofana, Tchouaméni, Golovin - Ben Yedder, Volland.<br>
<b>Sparta:</b> Niţă - Wiesner, Panák, Hancko, Polidar - Pešek, Souček, Sáček, Pavelka, Karabec - Hložek.</td>
</tr>
</table>
<div class="cl h5"></div>
<a href="/kluby/cesko/sparta-praha/expres-zpravy/" title="" class="but w120 fr"><span class="l"></span><span class="i">Další expres zprávy</span><span class="r"></span></a>
<div class="cl"></div>
</div>
</div>
<div class="cl h10"></div>
<div class="adsenvelope adstextpad banx-square" id="lsadvert-zid-1150" style="width:300px;"><div style="height:250px"><div class="adscontent" id="lsadvert-square"><iframe id="lsadvert-zid-1150-iframe" name="banx-square" frameborder="0" scrolling="no" style="allowTransparency: true; visibility: hidden; width:300px; height:250px"></iframe></div><div class="adsgraphhori"><div class="adsghori ath-CS"></div></div></div></div><div class="box green"><div class="in">
<div class="bookmark"><span class="it active"><a href="/1-fotbalova-liga/">1. Fotbalová liga 2021/2022</a></span><div class="border"></div></div>
<div class="bar">Poslední zápas</div>
<table cellspacing="0" cellpadding="0" class="club_right_match vam"><tr><td rowspan="2" class="date">28.08.</td><td class="team">Sparta Praha</td><td rowspan="2" class="mid">&nbsp;-&nbsp;</td><td class="team">Č. Buděj.</td><td rowspan="2" class="res"><a href="/1-fotbalova-liga/2021-2022/reportaz/sparta-praha-dynamo-ceske-budejovice-721107/">1:0</a></td></tr><tr><td class="logo"><img src="/res/img/team-logo/bBcb0s4B-fuvfH3PL.png"></td><td class="logo"><img src="/res/img/team-logo/bT9QBW5B-4dxpBJMG.png"></td></tr></table><div class="bar">Další zápas</div>
<table cellspacing="0" cellpadding="0" class="club_right_match vam"><tr><td rowspan="2" class="date">11.09.</td><td class="team">Plzeň</td><td rowspan="2" class="mid">&nbsp;-&nbsp;</td><td class="team">Sparta Praha</td><td rowspan="2" class="res"><a href="/1-fotbalova-liga/2021-2022/preview/viktoria-plzen-sparta-praha-721116/">info</a></td></tr><tr><td class="logo"><img src="/res/img/team-logo/EL2UwZN5-6sEsOLMh.png"></td><td class="logo"><img src="/res/img/team-logo/bBcb0s4B-fuvfH3PL.png"></td></tr></table><div class="bar">Tabulka</div>
<table cellspacing="0" cellpadding="0" class="leaguetable vam">
<tr><th class="pos">&nbsp;</th><th colspan="2">Tým</th><th class="c">Z</th><th class="c nbr">B</th></tr>
<tr><td class="pos" style="background: #DCEBC5;" title="skupina o titul"><span class="rank">1.</span></td><td class="logo"><img src="/res/img/team-logo/4zqe1Nl5-fuvfH3PL.png"></td><td class=" bold"><a href="/kluby/cesko/sparta-praha/">Sparta Praha</a></td><td class="nw c c1">6</td><td class="nw nbr c c1">16</td></tr>
<tr><td class="pos" style="background: #DCEBC5;" title="skupina o titul"><span class="rank">2.</span></td><td class="logo"><img src="/res/img/team-logo/Kb3QvF8a-6sEsOLMh.png"></td><td class=""><a href="/kluby/cesko/viktoria-plzen/">Viktoria Plzeň</a></td><td class="nw c c1">6</td><td class="nw nbr c c1">15</td></tr>
<tr><td class="pos" style="background: #DCEBC5;" title="skupina o titul"><span class="rank">3.</span></td><td class="logo"><img src="/res/img/team-logo/U5IeDDAa-EHjrWR8F.png"></td><td class=""><a href="/kluby/cesko/slavia-praha/">Slavia Praha</a></td><td class="nw c c1">5</td><td class="nw nbr c c1">13</td></tr>
<tr><td class="pos nbb" style="background: #DCEBC5;" title="skupina o titul"><span class="rank">4.</span></td><td class="logo nbb"><img src="/res/img/team-logo/AuLLBNSg-vZQvv0lr.png"></td><td class=" nbb"><a href="/kluby/cesko/1-fc-slovacko/">1. FC Slovácko</a></td><td class="nw c c1 nbb">6</td><td class="nw nbr c c1 nbb">13</td></tr>
</table>
</div></div>
<div class="cl h10"></div>
<div class="box green"><div class="in">
<div class="bookmark"><span class="it active"><a href="/liga-mistru/">Liga mistrů 2021/2022</a></span><div class="border"></div></div>
<div class="bar">Poslední zápas</div>
<table cellspacing="0" cellpadding="0" class="club_right_match vam"><tr><td rowspan="2" class="date">10.08.</td><td class="team">AS Monaco</td><td rowspan="2" class="mid">&nbsp;-&nbsp;</td><td class="team">Sparta Praha</td><td rowspan="2" class="res"><a href="/liga-mistru/2021-2022/reportaz/as-monaco-sparta-praha-739201/">3:1</a></td></tr><tr><td class="logo"><img src="/res/img/team-logo/jPeCvu8S-r79l4nWp.png"></td><td class="logo"><img src="/res/img/team-logo/bBcb0s4B-fuvfH3PL.png"></td></tr></table></div></div>
<div class="cl h10"></div>
<div class="adsenvelope adstextpad banx-square2" id="lsadvert-zid-1151" style="width:300px;"><div style="height:250px"><div class="adscontent" id="lsadvert-square2"><iframe id="lsadvert-zid-1151-iframe" name="banx-square2" frameborder="0" scrolling="no" style="allowTransparency: true; visibility: hidden; width:300px; height:250px"></iframe></div><div class="adsgraphhori"><div class="adsghori ath-CS"></div></div></div></div><div class="box green"><div class="in">
<div class="bookmark"><span class="it active"><a href="/evropska-liga/">Evropská liga 2021/2022</a></span><div class="border"></div></div>
<div class="bar">Další zápas</div>
<table cellspacing="0" cellpadding="0" class="club_right_match vam"><tr><td rowspan="2" class="date">16.09.<br>21:00</td><td class="team">Brøndby IF</td><td rowspan="2" class="mid">&nbsp;-&nbsp;</td><td class="team">Sparta Praha</td><td rowspan="2" class="res"><a href="/evropska-liga/2021-2022/preview/brondby-if-sparta-praha-743484/">info</a></td></tr><tr><td class="logo"><img src="/res/img/team-logo/6opsC4Ll-AZY0sZPj.png"></td><td class="logo"><img src="/res/img/team-logo/bBcb0s4B-fuvfH3PL.png"></td></tr></table><div class="bar">Tabulka</div>
<table cellspacing="0" cellpadding="0" class="leaguetable vam">
<tr><th class="pos">&nbsp;</th><th colspan="2">Tým</th><th class="c">Z</th><th class="c nbr">B</th></tr>
<tr><td class="pos" style="background: #BFDB95;" title="postup"><span class="rank">1.</span></td><td class="logo"><img src="/res/img/team-logo/GK8yhtWA-vy0WmGB5.png"></td><td class=""><a href="/kluby/francie/olympique-lyon/">Olympique Lyon (FRA)</a></td><td class="nw c c1">0</td><td class="nw nbr c c1">0</td></tr>
<tr><td class="pos" style="background: #DCEBC5;" title="postup do předkola playoff"><span class="rank">&nbsp;</span></td><td class="logo"><img src="/res/img/team-logo/Qm6t6jXR-feKebZU5.png"></td><td class=""><a href="/kluby/skotsko/rangers-fc/">Rangers FC (SCO)</a></td><td class="nw c c1">0</td><td class="nw nbr c c1">0</td></tr>
<tr><td class="pos" style="background: #F7EB9C;" title="předkolo Evropské konferenční ligy"><span class="rank">&nbsp;</span></td><td class="logo"><img src="/res/img/team-logo/4zqe1Nl5-fuvfH3PL.png"></td><td class=" bold"><a href="/kluby/cesko/sparta-praha/">Sparta Praha (CZE)</a></td><td class="nw c c1">0</td><td class="nw nbr c c1">0</td></tr>
<tr><td class="pos nbb"><span class="rank">&nbsp;</span></td><td class="logo nbb"><img src="/res/img/team-logo/COpwDp6r-AZY0sZPj.png"></td><td class=" nbb"><a href="/kluby/dansko/brondby-if/">Brøndby IF (DEN)</a></td><td class="nw c c1 nbb">0</td><td class="nw nbr c c1 nbb">0</td></tr>
</table>
</div></div>
<div class="cl h10"></div>
<div class="box green"><div class="in">
<div class="bookmark"><span class="it active"><a href="/kluby/cesko/sparta-praha/fanousci/">Fanoušci klubu</a></span><div class="border"></div></div>
<table cellspacing="0" cellpadding="0" class="vam">
<tr><td class="w10 npr nbr"><img src="/res/img/user.gif"></td><td class="nbr"><a href="javascript:void(0);" onclick="userInfoClick(event, 61227, '', true);" class="user-link">Teoretik</a></td></tr>
<tr><td class="w10 npr nbr"><img src="/res/img/user.gif"></td><td class="nbr"><a href="javascript:void(0);" onclick="userInfoClick(event, 35621, '', true);" class="user-link">Kenneth</a></td></tr>
<tr><td class="w10 npr nbr"><img src="/res/img/user.gif"></td><td class="nbr"><a href="javascript:void(0);" onclick="userInfoClick(event, 12290, '', true);" class="user-link">Bady86</a></td></tr>
<tr><td class="w10 npr nbr"><img src="/res/img/user.gif"></td><td class="nbr"><a href="javascript:void(0);" onclick="userInfoClick(event, 66926, '', true);" class="user-link">Tlamiczka</a></td></tr>
<tr><td class="w10 npr nb"><img src="/res/img/user.gif"></td><td class="nb"><a href="javascript:void(0);" onclick="userInfoClick(event, 20105, '', true);" class="user-link">DUCK11</a></td></tr>
</table>
<div class="cl h5"></div>
<a href="/kluby/cesko/sparta-praha/fanousci/" title="" class="but w100 fr"><span class="l"></span><span class="i">Všichni fanoušci</span><span class="r"></span></a>
<div class="cl"></div>
</div></div>
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

export const TEAM_DATA: SoccerBotResponse<SoccerBotPlayer[]> = {
  ok: true,
  data: [
    {
      id: 'milan-heca-28271',
      name: 'Milan Heča',
      position: SoccerBotPositionGroup.GOALKEEPER,
      jerseyNumber: 29,
      birthdate: '1991-03-21',
      height: 192,
      weight: 82,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'dominik-holec-41446',
      name: 'Dominik Holec',
      position: SoccerBotPositionGroup.GOALKEEPER,
      jerseyNumber: 77,
      birthdate: '1994-07-28',
      height: undefined,
      weight: undefined,
      country: SoccerBotCountry.SLOVAKIA
    },
    {
      id: 'florin-nita-33952',
      name: 'Florin Niţă',
      position: SoccerBotPositionGroup.GOALKEEPER,
      jerseyNumber: 1,
      birthdate: '1987-07-03',
      height: 185,
      weight: 74,
      country: SoccerBotCountry.ROMANIA
    },
    {
      id: 'ondrej-celustka-2874',
      name: 'Ondřej Čelůstka',
      position: SoccerBotPositionGroup.DEFENDER,
      jerseyNumber: 3,
      birthdate: '1989-06-18',
      height: 185,
      weight: 78,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'adam-gabriel-113943',
      name: 'Adam Gabriel',
      position: SoccerBotPositionGroup.DEFENDER,
      jerseyNumber: 4,
      birthdate: '2001-05-28',
      height: undefined,
      weight: undefined,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'david-hancko-59188',
      name: 'Dávid Hancko',
      position: SoccerBotPositionGroup.DEFENDER,
      jerseyNumber: 33,
      birthdate: '1997-12-13',
      height: 188,
      weight: undefined,
      country: SoccerBotCountry.SLOVAKIA
    },
    {
      id: 'casper-hojer-69377',
      name: 'Casper Höjer',
      position: SoccerBotPositionGroup.DEFENDER,
      jerseyNumber: 17,
      birthdate: '1994-11-20',
      height: 183,
      weight: 80,
      country: SoccerBotCountry.DENMARK
    },
    {
      id: 'lukas-stetina-11671',
      name: 'Lukáš Štetina',
      position: SoccerBotPositionGroup.DEFENDER,
      jerseyNumber: 19,
      birthdate: '1991-07-28',
      height: 185,
      weight: 85,
      country: SoccerBotCountry.SLOVAKIA
    },
    {
      id: 'andreas-vindheim-55261',
      name: 'Andreas Vindheim',
      position: SoccerBotPositionGroup.DEFENDER,
      jerseyNumber: 32,
      birthdate: '1995-08-04',
      height: 184,
      weight: 79,
      country: SoccerBotCountry.NORWAY
    },
    {
      id: 'martin-vitik-107726',
      name: 'Martin Vitík',
      position: SoccerBotPositionGroup.DEFENDER,
      jerseyNumber: 41,
      birthdate: '2003-01-21',
      height: undefined,
      weight: undefined,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'tomas-wiesner-68770',
      name: 'Tomáš Wiesner',
      position: SoccerBotPositionGroup.DEFENDER,
      jerseyNumber: 28,
      birthdate: '1997-07-17',
      height: undefined,
      weight: undefined,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'borek-dockal-2741',
      name: 'Bořek Dočkal',
      position: SoccerBotPositionGroup.MIDFIELDER,
      jerseyNumber: 10,
      birthdate: '1988-09-30',
      height: 182,
      weight: 71,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'lukas-haraslin-46966',
      name: 'Lukáš Haraslín',
      position: SoccerBotPositionGroup.MIDFIELDER,
      jerseyNumber: undefined,
      birthdate: '1996-05-26',
      height: 182,
      weight: undefined,
      country: SoccerBotCountry.SLOVAKIA
    },
    {
      id: 'adam-karabec-103740',
      name: 'Adam Karabec',
      position: SoccerBotPositionGroup.MIDFIELDER,
      jerseyNumber: 36,
      birthdate: '2003-07-02',
      height: undefined,
      weight: undefined,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'ladislav-krejci-13871',
      name: 'Ladislav Krejčí',
      position: SoccerBotPositionGroup.MIDFIELDER,
      jerseyNumber: 9,
      birthdate: '1992-07-05',
      height: 179,
      weight: 61,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'ladislav-krejci-71037',
      name: 'Ladislav Krejčí',
      position: SoccerBotPositionGroup.MIDFIELDER,
      jerseyNumber: 37,
      birthdate: '1999-04-20',
      height: 187,
      weight: 78,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'filip-panak-57575',
      name: 'Filip Panák',
      position: SoccerBotPositionGroup.MIDFIELDER,
      jerseyNumber: 27,
      birthdate: '1995-11-02',
      height: 185,
      weight: 72,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'david-pavelka-28921',
      name: 'David Pavelka',
      position: SoccerBotPositionGroup.MIDFIELDER,
      jerseyNumber: 8,
      birthdate: '1991-05-18',
      height: 174,
      weight: 57,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'jakub-pesek-59053',
      name: 'Jakub Pešek',
      position: SoccerBotPositionGroup.MIDFIELDER,
      jerseyNumber: 21,
      birthdate: '1993-06-24',
      height: 174,
      weight: 63,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'matej-polidar-88981',
      name: 'Matěj Polidar',
      position: SoccerBotPositionGroup.MIDFIELDER,
      jerseyNumber: 24,
      birthdate: '1999-12-20',
      height: 179,
      weight: 76,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'michal-sacek-68526',
      name: 'Michal Sáček',
      position: SoccerBotPositionGroup.MIDFIELDER,
      jerseyNumber: 16,
      birthdate: '1996-09-19',
      height: 175,
      weight: 63,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'filip-soucek-90547',
      name: 'Filip Souček',
      position: SoccerBotPositionGroup.MIDFIELDER,
      jerseyNumber: 6,
      birthdate: '2000-09-18',
      height: undefined,
      weight: undefined,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'vaclav-drchal-76244',
      name: 'Václav Drchal',
      position: SoccerBotPositionGroup.ATTACKER,
      jerseyNumber: 14,
      birthdate: '1999-07-25',
      height: undefined,
      weight: undefined,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'adam-hlozek-85856',
      name: 'Adam Hložek',
      position: SoccerBotPositionGroup.ATTACKER,
      jerseyNumber: 20,
      birthdate: '2002-07-25',
      height: undefined,
      weight: undefined,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'lukas-julis-30858',
      name: 'Lukáš Juliš',
      position: SoccerBotPositionGroup.ATTACKER,
      jerseyNumber: 39,
      birthdate: '1994-12-02',
      height: 184,
      weight: 76,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'martin-mincev-72196',
      name: 'Martin Minčev',
      position: SoccerBotPositionGroup.ATTACKER,
      jerseyNumber: 11,
      birthdate: '2001-04-22',
      height: undefined,
      weight: undefined,
      country: SoccerBotCountry.BULGARIA
    },
    {
      id: 'david-moberg-karlsson-50775',
      name: 'David Moberg Karlsson',
      position: SoccerBotPositionGroup.ATTACKER,
      jerseyNumber: 7,
      birthdate: '1994-03-20',
      height: 179,
      weight: 76,
      country: SoccerBotCountry.SWEDEN
    },
    {
      id: 'vojtech-patrak-104619',
      name: 'Vojtěch Patrák',
      position: SoccerBotPositionGroup.ATTACKER,
      jerseyNumber: 52,
      birthdate: '2000-03-18',
      height: undefined,
      weight: undefined,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: 'matej-pulkrab-68165',
      name: 'Matěj Pulkrab',
      position: SoccerBotPositionGroup.ATTACKER,
      jerseyNumber: 18,
      birthdate: '1997-05-23',
      height: 182,
      weight: 73,
      country: SoccerBotCountry.CZECH_REPUBLIC
    }
  ]
};
