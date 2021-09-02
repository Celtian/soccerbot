import {
  SoccerBotCountry,
  SoccerBotFoot,
  SoccerBotPlayer,
  SoccerBotPositionGroup,
  SoccerBotResponse
} from '../../../lib/shared/interfaces';

export const TEAM_HTML = `
<!DOCTYPE html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if IE 7]>
<html class="ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!-->

<html class="no-js" lang="en">
<!--<![endif]-->

<body x-ms-format-detection="none" style="overflow-y: scroll;" class="" itemscope itemtype="http://schema.org/WebPage">
    <tm-language-hint></tm-language-hint>
            <div id="navibalken" class="navibalken hide-for-small"></div>
    <div id="main">
                <div class="row" id="logobereich">
            <div id="header" class="large-12 columns">
                <div class="naviback hide-for-small hide-for-print"></div>
                <div class="werbung-skyscraper-container hide-for-small">
                    <!-- tisoomi check --><script type="text/javascript">//RWGzztV("skyscraper")</script>

<div class="werbung werbung-skyscraper">
	<!-- DFPV2 -->
	<div id="Skyscraper" >
	<script>
		googletag.cmd.push(function() { googletag.display('Skyscraper'); });
	</script>
	</div>
</div>
<span class="RWGzztV_end"></span>
                </div>

                <div class="werbung-skyscraperbtf-container hide-for-small">
                                    </div>
                <div class="row" style="margin: 0;">
                    <div class="large-3 columns">
                        <a href="/" class="hide-for-small">
                            <img class="icon-logo" src="https://tmsi.akamaized.net/head/transfermarkt_logo.svg" title="Transfermarkt" alt="Transfermarkt">
                        </a>
                                                    <tm-domainswitcher open-list="false" tld="com"></tm-domainswitcher>
                                            </div>


                        <div id="header-social-icons" class="large-3 columns flexCenter">
		                <a name="SocMedia" href="https://www.facebook.com/Transfermarkt.global" target="_blank" onclick="ga('send','event','SM-Icons_Header','click','Facebook');
"><span class="icon-facebook">&nbsp;</span></a>|
                <a name="SocMedia" href="https://twitter.com/TMuk_news" target="_blank" onclick="ga('send','event','SM-Icons_Header','click','Twitter');
"><span class="icon-twitter">&nbsp;</span></a>|
                <a name="SocMedia" href="http://instagram.com/transfermarkt_official" target="_blank" onclick="ga('send','event','SM-Icons_Header','click','Instagram');
"><span class="icon-instagram_grau">&nbsp;</span></a>|
                <a name="SocMedia" href="/intern/rssguide" target="_blank" onclick="ga('send','event','SM-Icons_Header','click','RSS');
"><span class="icon-rss_feed_grau">&nbsp;</span></a>
				    </div>


                                            <div class="large-6 columns " id="schnellsuche-platz">
                            <form name="schnellsuche" id="schnellsuche" class="noclose" action="/schnellsuche/ergebnis/schnellsuche">
                                <input type="text" name="query" class="header-suche" onClick="" placeholder="Enter search term" autocorrect="off" spellcheck="false"" value=" " />
                                <input type="image" class="header-suche-abschicken" src="/images/suche-grau.svg" alt="search" />
                            </form>
                            <a href="/detailsuche/spielerdetail/suche" title="to the player detail search" id="detailsuche-head" class="header-suche-detailsuche">
                                <span class="icon-detailsuche"></span>
                            </a>
                        </div>
                                    </div>
            </div>
        </div>
                <div class="row hide-on-print navihalter ">
            <div class="page_wrapper">
                <div class="large-12 columns megamenu_container megamenu_dark_bar megamenu_dark">
                    <a href="/" class="sticky-logo hide-for-small">
                        <span title="Transfermarkt" class="tm_svg"></span>
                    </a>
                        <!-- Begin Menu Container -->
<ul class="megamenu " id="mainmenue" itemscope="itemscope" itemtype="http://www.schema.org/SiteNavigationElement">
    <!-- Begin Mega Menu -->
    <li id="mobile_hauptmenu_button">
                <ul id="hauptmenuepunkte">
                                    <li id="naviid_news"class=" megamenu_drop_list">
                        <a class="megamenu_drop"
                                                       onClick="ga('send','event','News','click','menu');
">
                            News                        </a>
                                                <div class="dropdown_fullwidth">
                            <div class="col_12 menue_main_col">
                                                                    <img src="/images/bx_loader.gif"/>
                                                                </div>
                            <div class="col_3 menue_right_col hide-for-small">
                            </div>
                        </div>
                                            </li>
                                            <li id="naviid_transfers"class=" megamenu_drop_list">
                        <a class="megamenu_drop"
                                                       onClick="ga('send','event','Transfers & rumours','click','menu');
">
                            Transfers & rumours                        </a>
                                                <div class="dropdown_fullwidth">
                            <div class="col_12 menue_main_col">
                                                                    <img src="/images/bx_loader.gif"/>
                                                                </div>
                            <div class="col_3 menue_right_col hide-for-small">
                            </div>
                        </div>
                                            </li>
                                            <li id="naviid_marktwerte"class=" megamenu_drop_list">
                        <a class="megamenu_drop"
                                                       onClick="ga('send','event','Market values','click','menu');
">
                            Market values                        </a>
                                                <div class="dropdown_fullwidth">
                            <div class="col_12 menue_main_col">
                                                                    <img src="/images/bx_loader.gif"/>
                                                                </div>
                            <div class="col_3 menue_right_col hide-for-small">
                            </div>
                        </div>
                                            </li>
                                            <li id="naviid_wettbewerbe"class="aktiv megamenu_drop_list">
                        <a class="megamenu_drop"
                                                       onClick="ga('send','event','Competitions','click','menu');
">
                            Competitions                        </a>
                                                <div class="dropdown_fullwidth">
                            <div class="col_12 menue_main_col">
                                                                    <img src="/images/bx_loader.gif"/>
                                                                </div>
                            <div class="col_3 menue_right_col hide-for-small">
                            </div>
                        </div>
                                            </li>
                                            <li id="naviid_foren"class=" megamenu_drop_list">
                        <a class="megamenu_drop"
                             href="/uebersicht/index/forum/com"                            onClick="ga('send','event','Forums','click','menu');
">
                            Forums                        </a>
                                            </li>
                                            <li id="naviid_meintm"class=" megamenu_drop_list">
                        <a class="megamenu_drop"
                                                       onClick="ga('send','event','My TM','click','menu');
">
                            My TM                        </a>
                                                <div class="dropdown_fullwidth">
                            <div class="col_12 menue_main_col">
                                                                    <img src="/images/bx_loader.gif"/>
                                                                </div>
                            <div class="col_3 menue_right_col hide-for-small">
                            </div>
                        </div>
                                            </li>
                                            <li id="naviid_live" class="">
                        <a href="/ticker/index/live" class="live-navilink"
                           onClick="ga('send','event','Live','click','menu');
">Live                            <tm-live-match-counter auto-request="true" content='["Live match", "live matches"]'></tm-live-match-counter>
                        </a>
                                            </li>
                            </ul>
    </li>
</ul>
                    <a href="/" id="logo_klein" class="show-for-small">
                        <img class="icon-logo" src="https://tmsi.akamaized.net/head/transfermarkt_logo.svg" title="Transfermarkt" alt="Transfermarkt">
                    </a>
                                        <form name="schnellsuche" id="schnellsuche-sticky" class="noclose sticky-suche" action="/schnellsuche/ergebnis/schnellsuche">
                        <input type="text" name="query" class="header-suche" onClick="" placeholder="Enter search term" />
                        <input type="image" class="header-suche-abschicken" src="https://tmssl.akamaized.net//images/suchicon.png" alt="search" />
                    </form>
                    <a href="/detailsuche/spielerdetail/suche" title="to the player detail search" id="detailsuche-head" class="header-suche-detailsuche">
                        <span class="icon-detailsuche"></span>
                    </a>
                    <a name="ToTop-Menu" id="arrow-up-xy" href="#" onClick="">
                        <i class="fi-arrow-up"></i>
                    </a>
                    <div class="userbox ub-abgemeldet" id="login" onClick="ga('send','event','login','click','sign_in_button');
">
    <a>
        <span class="login-torso">
            <i class="fi-torso"></i>
        </span>
        <span class="anmelden">Log in</span>
    </a>
</div>
                </div>
            </div>
        </div>

        <div class="row popuphalter">
                <div id="loginbox" class="small-12"></div>
<div id="registerbox"></div>
<div id="passwortVergessenBox"></div>
        </div>

                    <script>
                function googleEvent(string) {
                    //_gaq.push(['_trackEvent', string, 'click', 'menu']);
                    ga('send', 'event', string, 'click', 'menu');
                }
            </script>
                            <div class="row">
                    <div id="breadcrumb" class="large-12 columns" itemscope itemtype="https://schema.org/BreadcrumbList">
                        <div class="breadcrumb-box">
                            <div class="breadcrumb">

<div id="quickselect-skeleton" class="ssc" style="height: 40px;">
  <div class="ssc-wrapper flex" style="height: 100%; padding: 0">
    <div class="ssc-square quickselect-element" style="width: 40px;"></div>
    <div class="ssc-square quickselect-element quickselect-selector" style="width: 171.06px;"></div>
    <div class="ssc-square quickselect-element quickselect-selector" style="width: 170.84px;"></div>
    <div class="ssc-square quickselect-element quickselect-selector" style="width: 138.03px;"></div>
    <div class="ssc-square quickselect-element quickselect-selector" style="width: 141.5px;"></div>
  </div>
</div>

<tm-quick-select-bar
    default-country="172"
    default-competition="TS1"
    default-club="62"
    default-player=""
    dropdown-visible=""
    translations='{&quot;home&quot;:&quot;Home&quot;,&quot;country&quot;:&quot;country&quot;,&quot;competition&quot;:&quot;competition&quot;,&quot;club&quot;:&quot;club&quot;,&quot;player&quot;:&quot;player&quot;,&quot;attack&quot;:&quot;attack&quot;,&quot;midfield&quot;:&quot;midfield&quot;,&quot;defense&quot;:&quot;defence&quot;,&quot;goalkeeper&quot;:&quot;goalkeeper&quot;}'
    >
</tm-quick-select-bar>
                            </div>
                        </div>
                    </div>
                </div>

        <div style="text-align:right"></div>
        <script type="text/javascript">//RWGzztV("billboard")</script>

<div class="werbung werbung-billboard">
	<!-- DFPV2 -->
	<div id="Billboard" >
	<script>
		googletag.cmd.push(function() { googletag.display('Billboard'); });
	</script>
	</div>
</div>
<span class="RWGzztV_end"></span>

<div id="modalHolder"></div>
            <div class="row" id="verein_head">
        <div class="large-12 columns">
            <div class="dataHeader dataExtended">
                <div class="dataMain">
                    <div class="dataTop">
                        <div class="dataName">
                            <h1 itemprop="name">
                                <span>SK Slavia Prague</span>
                            </h1>
                        </div>
                                                    <div class="dataErfolge hide-for-small">
                                                                    <a href="/sk-slavia-prague/erfolge/verein/62"
                                       title="Czech Champion">
                                        <div class="dataErfolg">
                                            <img src="https://tmssl.akamaized.net/images/erfolge/header/21.png?lm=1461847499" title="Czech Champion" alt="Czech Champion" class="dataErfolgImage" />                                            <span class="dataErfolgAnzahl">6</span>
                                        </div>
                                    </a>
                                                                    <a href="/sk-slavia-prague/erfolge/verein/62"
                                       title="Mitropacup">
                                        <div class="dataErfolg">
                                            <img src="https://tmssl.akamaized.net/images/erfolge/header/147.png?lm=1520606997" title="Mitropacup" alt="Mitropacup" class="dataErfolgImage" />                                            <span class="dataErfolgAnzahl">1</span>
                                        </div>
                                    </a>
                                                                    <a href="/sk-slavia-prague/erfolge/verein/62"
                                       title="Czech Cup Winner">
                                        <div class="dataErfolg">
                                            <img src="https://tmssl.akamaized.net/images/erfolge/header/341.png?lm=1461847499" title="Czech Cup Winner" alt="Czech Cup Winner" class="dataErfolgImage" />                                            <span class="dataErfolgAnzahl">5</span>
                                        </div>
                                    </a>
                                                                    <a href="/sk-slavia-prague/erfolge/verein/62"
                                       title="Champion of Czechoslovakia">
                                        <div class="dataErfolg notTablet">
                                            <img src="https://tmssl.akamaized.net/images/erfolge/header/default.png?lm=1520606999" title="Champion of Czechoslovakia" alt="Champion of Czechoslovakia" class="dataErfolgImage" />                                            <span class="dataErfolgAnzahl">14</span>
                                        </div>
                                    </a>
                                                                    <a href="/sk-slavia-prague/erfolge/verein/62"
                                       title="Czech Cup Winner">
                                        <div class="dataErfolg notTablet">
                                            <img src="https://tmssl.akamaized.net/images/erfolge/header/default.png?lm=1520606999" title="Czech Cup Winner" alt="Czech Cup Winner" class="dataErfolgImage" />                                            <span class="dataErfolgAnzahl">4</span>
                                        </div>
                                    </a>
                                                                                                    <a href="/sk-slavia-prague/erfolge/verein/62"
                                       title="">
                                        <div class="dataErfolg">
                                            <span class="dataErfolgMore"><img
                                                    src="/images/icons/mehr_erfolge.png"/></span>
                                        </div>
                                    </a>
                                                            </div>
                                            </div>

                </div>
                <div class="dataContent">
                    <div class="dataBottom">
                        <div class="dataDaten">
                            <p>
                                <span class="dataItem">Squad size:</span>
                            <span class="dataValue">
                                26                            </span>
                            </p>
                            <p>
                                <span class="dataItem">Average age:</span>
                            <span class="dataValue">
                                26.6                            </span>
                            </p>
                            <p>
                                <span class="dataItem"> Foreigners:</span>
                            <span class="dataValue">
                                 <a href="/sk-slavia-prague/legionaere/verein/62">11</a>&nbsp;&nbsp;<span class="tabellenplatz">42.3 %</span>                            </span>
                            </p>
                        </div>
                        <div class="dataDaten">
                                                            <p>
                                    <span class="dataItem">National team players:</span>
                                    <span class="dataValue">
                                    <a href="/sk-slavia-prague/nationalspieler/verein/62">15</a>                                    </span>
                                </p>
                                <p>
                                    <span class="dataItem">Stadium:</span>
                                    <span class="dataValue">
                                    <a title="SK Slavia Prague" class="" id="62" href="/sk-slavia-prag/stadion/verein/62">Sinobo Stadium</a>&nbsp;&nbsp;<span class="tabellenplatz">20.617 Seats</span>                                    </span>
                                </p>
                                <p>
                                    <span class="dataItem">Current transfer record:</span>
                                    <span class="dataValue">
                                                                                <span class="greentext">
                                            <a class="greentext" href="/sk-slavia-prague/transfers/verein/62/saison_id/2020">+€19.34m</a>                                        </span>
                                    </span>
                                </p>

                        </div>
                        <div class="dataTrikot">

                        </div>
                    </div>
                </div>
                <div class="dataBild ">
                    <img src="https://tmssl.akamaized.net/images/wappen/head/62.png?lm=1419784643" title="&nbsp;" alt="SK Slavia Prague" class="" />                </div>
                                    <div class="dataZusatzbox">
                        <div class="dataZusatzImage">

                            <a href="/fortuna-liga/startseite/wettbewerb/TS1">
                                <img src="https://tmssl.akamaized.net/images/logo/mediumquad/ts1.png?lm=1547491735" title="Fortuna Liga" alt="Fortuna Liga" class="" />                            </a>
                        </div>
                        <div class="dataZusatzDaten">
                        <span class="hauptpunkt">
                            <a href="/fortuna-liga/startseite/wettbewerb/TS1">
                                Fortuna Liga                            </a><br />
                        </span>
                                                <span class="mediumpunkt">
                            League level:
                            <a href="/fortuna-liga/startseite/wettbewerb/TS1">
                                <img src="https://tmssl.akamaized.net/images/flagge/tiny/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen vm" />First Tier                            </a>
                        </span>
                                                    <br/>
                            <span class="dataItem">Table position:</span>
                            <span class="dataValue">
                            <a
                                href="/fortuna-liga/tabelle/wettbewerb/TS1"
                                title="League table">1</a>                        </span>
                            <br/>
                            <span class="dataItem">In league since:</span>
                        <span class="dataValue">
                             <a href="/sk-slavia-prague/platzierungen/verein/62"
                                title="">2 years</a>
                        </span>
                            <br/>
                        <span class="mediumpunkt">

                        </span>

                        </div>
                    </div>
                                                    <div class="dataMarktwert">
                                                <a href="/sk-slavia-prague/kader/verein/62"><span class="waehrung">€</span>62.25<span class="waehrung">m</span>                        <p>Total market value</p></a>
                    </div>
                                                    <div id="listeVerknupfterVereine">
                        <div id="weitereVereine">+</div>
                        <div id="alleTemsVerein" class="noclose">
                            <img src="https://tmssl.akamaized.net/images/wappen/tiny/62.png?lm=1419784643" title="&nbsp;" alt="SK Slavia Prague" class="tiny_wappen" /><span><a title="SK Slavia Prague" class="" id="62" href="/sk-slavia-prag/startseite/verein/62">SK Slavia Prague</a></span><br /><img src="https://tmssl.akamaized.net/images/wappen/tiny/6541.png?lm=1568220003" title="&nbsp;" alt="SK Slavia Prague B" class="tiny_wappen" /><span><a title="SK Slavia Prague B" class="" id="6541" href="/sk-slavia-prag-u21/startseite/verein/6541">SK Slavia Prague B</a></span><br /><img src="https://tmssl.akamaized.net/images/wappen/tiny/14340.png?lm=1568220003" title="&nbsp;" alt="SK Slavia Prague U19" class="tiny_wappen" /><span><a title="SK Slavia Prague U19" class="" id="14340" href="/sk-slavia-prag-u19/startseite/verein/14340">SK Slavia Prague U19</a></span><br /><img src="https://tmssl.akamaized.net/images/wappen/tiny/73624.png?lm=1568220003" title="&nbsp;" alt="SK Slavia Prague U17" class="tiny_wappen" /><span><a title="SK Slavia Prague U17" class="" id="73624" href="/sk-slavia-praha-u17/startseite/verein/73624">SK Slavia Prague U17</a></span><br /><img src="https://tmssl.akamaized.net/images/wappen/tiny/76578.png?lm=1568220004" title="&nbsp;" alt="SK Slavia Prag UEFA U19" class="tiny_wappen" /><span><a title="SK Slavia Prag UEFA U19" class="" id="76578" href="/sk-slavia-prag-uefa-u19/startseite/verein/76578">SK Slavia Prag UEFA U19</a></span><br />                        </div>
                    </div>
                            </div>
                            <div class="dataErfolge show-for-small">
                                            <a href="/sk-slavia-prague/erfolge/verein/62"
                           title="Czech Champion">
                            <div class="dataErfolg">
                                <img src="https://tmssl.akamaized.net/images/erfolge/header/21.png?lm=1461847499" title="Czech Champion" alt="Czech Champion" class="dataErfolgImage" />                                <span class="dataErfolgAnzahl">6</span>
                            </div>
                        </a>
                                            <a href="/sk-slavia-prague/erfolge/verein/62"
                           title="Mitropacup">
                            <div class="dataErfolg">
                                <img src="https://tmssl.akamaized.net/images/erfolge/header/147.png?lm=1520606997" title="Mitropacup" alt="Mitropacup" class="dataErfolgImage" />                                <span class="dataErfolgAnzahl">1</span>
                            </div>
                        </a>
                                            <a href="/sk-slavia-prague/erfolge/verein/62"
                           title="Czech Cup Winner">
                            <div class="dataErfolg">
                                <img src="https://tmssl.akamaized.net/images/erfolge/header/341.png?lm=1461847499" title="Czech Cup Winner" alt="Czech Cup Winner" class="dataErfolgImage" />                                <span class="dataErfolgAnzahl">5</span>
                            </div>
                        </a>
                                            <a href="/sk-slavia-prague/erfolge/verein/62"
                           title="Champion of Czechoslovakia">
                            <div class="dataErfolg notTablet">
                                <img src="https://tmssl.akamaized.net/images/erfolge/header/default.png?lm=1520606999" title="Champion of Czechoslovakia" alt="Champion of Czechoslovakia" class="dataErfolgImage" />                                <span class="dataErfolgAnzahl">14</span>
                            </div>
                        </a>
                                            <a href="/sk-slavia-prague/erfolge/verein/62"
                           title="Czech Cup Winner">
                            <div class="dataErfolg notTablet">
                                <img src="https://tmssl.akamaized.net/images/erfolge/header/default.png?lm=1520606999" title="Czech Cup Winner" alt="Czech Cup Winner" class="dataErfolgImage" />                                <span class="dataErfolgAnzahl">4</span>
                            </div>
                        </a>
                                                                <a href="/sk-slavia-prague/erfolge/verein/62"
                           title="">
                            <div class="dataErfolg">
                                <span class="dataErfolgMore"><img
                                        src="/images/icons/mehr_erfolge.png"/></span>
                            </div>
                        </a>
                                    </div>
                    </div>
    </div>
    <script type="text/javascript">
        var boxOpen = false;
        $('#listeVerknupfterVereine').on('click', function () {
            $('#listeVerknupfterVereine').toggleClass('aktiv');
            var box = $('#alleTemsVerein');
            if (box.css('display') !== 'block') {
                box.slideToggle(200);
                setTimeout(function () {
                    boxOpen = '#alleTemsVerein';
                }, 200);
            } else {
                box.slideToggle(200);
                boxOpen = false;
            }
        });
    </script>
    <script type="text/javascript">
        var boxOpen = false;
        $('#weitereVereineMobile').on('click', function () {
            $('#weitereVereineMobile').toggleClass('aktiv');
            var box = $('#alleTemsVereinMobile');
            if (box.css('display') !== 'block') {
                box.slideToggle(200);
                setTimeout(function () {
                    boxOpen = '#alleTemsVereinMobile';
                }, 200);
            } else {
                box.slideToggle(200);
                boxOpen = false;
            }
        });
    </script>
            <div class="banner sub-banner">
        <a href="/whatsMyValue?cp=IK" onclick="ga('send', 'event', 'banner', '/whatsMyValue?cp=IK', 'd-day-banner');"><img src="https://tmsi.akamaized.net/games/whatsmyvalue/announce/WMV_Legends_Banner_Desktop_EN.jpg" alt="deadline-day banner"></a>
    </div>
            <div class="row hide-on-print" id="subnavi">
        <div class="page_wrapper subnavi">
            <div class="large-12 columns">
                <div class="subnavi_box" id="subnavigation">
                    <div class="submenu-text show-for-small">
                        <a name="SubNavi" title="Navigation">
                            <span>≡ Sub Menu</span>
                        </a>
                    </div>
                    <nav>
                        <ul id="submenu">
                                                        <li id="close_submenu" class="show-for-small">
                                <div id="submenu-icon">
                                    <span class="clicked"></span>
                                    <span class="clicked"></span>
                                </div>
                                <a>Close Menu</a>
                            </li>
                                                                <li id="overview" data-name="overview" class="first-button  ">
                                        <a name="SubNavi" href="/sk-slavia-prag/startseite/verein/62/saison_id/2020" class="megamenu" onClick="ga('send','event','subnavigation_verein','click','uebersicht');
">Overview</a>
                                                                            </li>
                                                                        <li id="squad" data-name="squad" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="megamenu_drop" onClick="ga('send','event','subnavigation_verein','click','kader');
">Squad</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="/images/bx_loader.gif" /></div></div>                                    </li>
                                                                        <li id="fixtures" data-name="fixtures" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="megamenu_drop" onClick="ga('send','event','subnavigation_verein','click','spielplan');
">Fixtures</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="/images/bx_loader.gif" /></div></div>                                    </li>
                                                                        <li id="transfers-amp-rumours" data-name="transfers-amp-rumours" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="megamenu_drop" onClick="ga('send','event','subnavigation_verein','click','transfers-amp-geruchte');
">Transfers & rumours</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="/images/bx_loader.gif" /></div></div>                                    </li>
                                                                        <li id="information-amp-facts" data-name="information-amp-facts" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="megamenu_drop" onClick="ga('send','event','subnavigation_verein','click','daten_und_fakten');
">Information & facts</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="/images/bx_loader.gif" /></div></div>                                    </li>
                                                                        <li id="stadium" data-name="stadium" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="megamenu_drop" onClick="ga('send','event','subnavigation_verein','click','stadion');
">Stadium</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="/images/bx_loader.gif" /></div></div>                                    </li>
                                                                        <li id="history" data-name="history" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="megamenu_drop" onClick="ga('send','event','subnavigation_verein','click','historie');
">History</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="/images/bx_loader.gif" /></div></div>                                    </li>
                                                                        <li id="news" data-name="news" class="  ">
                                        <a name="SubNavi" href="/sk-slavia-prag/news/verein/62" class="megamenu" onClick="ga('send','event','subnavigation_verein','click','news');
">News</a>
                                                                            </li>
                                                                        <li id="" data-name="subnavi-edit" class="  subnavi-edit">
                                        <a name="SubNavi" href="#subnavi" class="megamenu_drop" onClick="ga('send','event','subnavigation_verein','click','edit');
"></a>
                                        <div class="dropdown_fullwidth gasthinweis" title="Log in or register now"><div><img src="/images/bx_loader.gif" /></div></div>                                    </li>
                                                            </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <script>
        var stickySubTop = $('#subnavigation').offset().top;
        stickySubTop = stickySubTop - 60;
        var main = $("#main");
        $(document).ready(function () {
            $(window).on('scroll load', function () {
                if (!main.hasClass("stickySubnavigation")) {
                    stickySubTop = $('#subnavigation').offset().top;
                }
                if ($(window).scrollTop() > stickySubTop) {
                    main.addClass("stickySubnavigation");
                } else {
                    main.removeClass("stickySubnavigation");
                }
            });
        });
    </script>
    <style>
        .forum-anchor {
            margin-top: -80px;
        }
    </style>

    <div class="row">
    <div class="large-12 columns">

                            <div class="box">
                <div class="table-header">
                    <h2>
                        Squad SK Slavia Prague
                                            </h2>
                    <div class="header-social">

<div class="teilen-desktop-link" name="teilen-desktop" onClick="ga('send','event','teilen-desktop','click','teilen');
">
    <ul>
                <li><a href="mailto:?to=&subject=Squad&body=https%3A%2F%2Fwww.transfermarkt.com%2Fsk-slavia-prague%2Fkader%2Fverein%2F62%2Fsaison_id%2F2020%2Fplus%2F1" class="MailToLink" name="teilen-mail-desktop" onClick="ga('send','event','teilen-mail-desktop','click','teilen');
"><img src="https://tmsi.akamaized.net/icons/mail-schwarz.svg" alt="Mail" /></a></li>
        <li><a href="https://twitter.com/share?url=https%3A%2F%2Fwww.transfermarkt.com%2Fsk-slavia-prague%2Fkader%2Fverein%2F62%2Fsaison_id%2F2020%2Fplus%2F1&text=Squad" target="_blank" class="TwitterLink" name="teilen-twitter-desktop" onClick="ga('send','event','teilen-twitter-desktop','click','teilen');
"><img src="https://tmsi.akamaized.net/icons/Twitter-Blau.svg" alt="Twitter" /></a></li>
        <li><a href="http://www.facebook.com/share.php?u=https%3A%2F%2Fwww.transfermarkt.com%2Fsk-slavia-prague%2Fkader%2Fverein%2F62%2Fsaison_id%2F2020%2Fplus%2F1" target="_blank" class="FacebookLink" name="teilen-facebook-desktop" onClick="ga('send','event','teilen-facebook-desktop','click','teilen');
"><img src="https://tmsi.akamaized.net/icons/Facebook-Blau.svg" alt="Facebook" /></a></li>
    </ul>
</div>                        <a class="button dropdown toggler statistik-toggler dnu hide-for-small"
                           data-toggle="statistik-infoblock"></a>
                    </div>
                </div>
                <div id="statistik-infoblock">
                    <p class="info-content">
                        This page displays a detailed overview of the club's current squad. It shows all personal information about the players, including age, nationality, contract duration and current market value. It also contains a table with average age, cumulative market value and average market value for each player position and overall.                    </p>
                    <div class="content">
                                                    <div class="content">
                                <form action="/sk-slavia-prague/kader/verein/62/plus/1/galerie/0" method="get">                                <div class="row">
                                    <div class="large-12 columns">
                                        <table class="auflistung">
                                            <tbody>
                                            <tr>
                                                <td>
                                                    Filter by season                                                </td>
                                                <td>
                                                    <div class="inline-select">
                                                        <select name="saison_id"
                                                                data-placeholder="Filter by season"
                                                                class="chzn-select" tabindex="0">
                                                                                                                            <option
                                                                     selected="selected"value="2020">20/21</option>
                                                                                                                            <option
                                                                    value="2019">19/20</option>
                                                                                                                            <option
                                                                    value="2018">18/19</option>
                                                                                                                            <option
                                                                    value="2017">17/18</option>
                                                                                                                            <option
                                                                    value="2016">16/17</option>
                                                                                                                            <option
                                                                    value="2015">15/16</option>
                                                                                                                            <option
                                                                    value="2014">14/15</option>
                                                                                                                            <option
                                                                    value="2013">13/14</option>
                                                                                                                            <option
                                                                    value="2012">12/13</option>
                                                                                                                            <option
                                                                    value="2011">11/12</option>
                                                                                                                            <option
                                                                    value="2010">10/11</option>
                                                                                                                            <option
                                                                    value="2009">09/10</option>
                                                                                                                            <option
                                                                    value="2008">08/09</option>
                                                                                                                            <option
                                                                    value="2007">07/08</option>
                                                                                                                            <option
                                                                    value="2006">06/07</option>
                                                                                                                            <option
                                                                    value="2005">05/06</option>
                                                                                                                            <option
                                                                    value="2004">04/05</option>
                                                                                                                            <option
                                                                    value="2003">03/04</option>
                                                                                                                            <option
                                                                    value="2002">02/03</option>
                                                                                                                            <option
                                                                    value="2001">01/02</option>
                                                                                                                            <option
                                                                    value="2000">00/01</option>
                                                                                                                            <option
                                                                    value="1999">99/00</option>
                                                                                                                            <option
                                                                    value="1998">98/99</option>
                                                                                                                            <option
                                                                    value="1997">97/98</option>
                                                                                                                            <option
                                                                    value="1996">96/97</option>
                                                                                                                            <option
                                                                    value="1995">95/96</option>
                                                                                                                            <option
                                                                    value="1994">94/95</option>
                                                                                                                            <option
                                                                    value="1993">93/94</option>
                                                                                                                            <option
                                                                    value="1992">92/93</option>
                                                                                                                            <option
                                                                    value="1991">91/92</option>
                                                                                                                            <option
                                                                    value="1990">90/91</option>
                                                                                                                            <option
                                                                    value="1989">89/90</option>
                                                                                                                            <option
                                                                    value="1987">87/88</option>
                                                                                                                            <option
                                                                    value="1986">86/87</option>
                                                                                                                            <option
                                                                    value="1985">85/86</option>
                                                                                                                            <option
                                                                    value="1984">84/85</option>
                                                                                                                            <option
                                                                    value="1983">83/84</option>
                                                                                                                            <option
                                                                    value="1982">82/83</option>
                                                                                                                            <option
                                                                    value="1981">81/82</option>
                                                                                                                            <option
                                                                    value="1977">77/78</option>
                                                                                                                            <option
                                                                    value="1976">76/77</option>
                                                                                                                            <option
                                                                    value="1975">75/76</option>
                                                                                                                            <option
                                                                    value="1974">74/75</option>
                                                                                                                            <option
                                                                    value="1968">68/69</option>
                                                                                                                            <option
                                                                    value="1967">67/68</option>
                                                                                                                            <option
                                                                    value="1963">63/64</option>
                                                                                                                            <option
                                                                    value="1957">57/58</option>
                                                                                                                            <option
                                                                    value="1950">50/51</option>
                                                                                                                            <option
                                                                    value="1949">49/50</option>
                                                                                                                            <option
                                                                    value="1948">48/49</option>
                                                                                                                            <option
                                                                    value="1947">47/48</option>
                                                                                                                            <option
                                                                    value="1946">46/47</option>
                                                                                                                            <option
                                                                    value="1945">45/46</option>
                                                                                                                            <option
                                                                    value="1944">44/45</option>
                                                                                                                            <option
                                                                    value="1943">43/44</option>
                                                                                                                            <option
                                                                    value="1942">42/43</option>
                                                                                                                            <option
                                                                    value="1941">41/42</option>
                                                                                                                            <option
                                                                    value="1940">40/41</option>
                                                                                                                            <option
                                                                    value="1939">39/40</option>
                                                                                                                            <option
                                                                    value="1938">38/39</option>
                                                                                                                            <option
                                                                    value="1937">37/38</option>
                                                                                                                            <option
                                                                    value="1936">36/37</option>
                                                                                                                            <option
                                                                    value="1935">35/36</option>
                                                                                                                            <option
                                                                    value="1934">34/35</option>
                                                                                                                            <option
                                                                    value="1933">33/34</option>
                                                                                                                            <option
                                                                    value="1932">32/33</option>
                                                                                                                            <option
                                                                    value="1931">31/32</option>
                                                                                                                            <option
                                                                    value="1930">30/31</option>
                                                                                                                            <option
                                                                    value="1929">1929/30</option>
                                                                                                                            <option
                                                                    value="1928">1928/29</option>
                                                                                                                            <option
                                                                    value="1927">1927/28</option>
                                                                                                                            <option
                                                                    value="1926">1926/27</option>
                                                                                                                            <option
                                                                    value="1925">1925/26</option>
                                                                                                                            <option
                                                                    value="1924">1924/25</option>
                                                                                                                            <option
                                                                    value="1923">1923/24</option>
                                                                                                                    </select>
                                                    </div>
                                                </td>
                                                <td>
                                                    <input type="submit" class="small button" value="Show">
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </form>
                            </div>
                                            </div>
                </div>

<div class="kartei-button-bar">
    <a href="/sk-slavia-prague/kader/verein/62/saison_id/2020"><div class="kartei-button kartei-number-1"><span class="kartei-button-body">Compact</span></div></a><a href="/sk-slavia-prague/kader/verein/62/saison_id/2020/plus/1"><div class="kartei-button second-kartei kartei-number-2 active-kartei"><span class="kartei-button-body">Detailed</span></div></a><a href="/sk-slavia-prague/kader/verein/62/saison_id/2020/galerie/1"><div class="kartei-button second-kartei kartei-number-3"><span class="kartei-button-body">Gallery</span></div></a></div>
                <div class="responsive-table">
                    <div id="yw1" class="grid-view">
<div class="summary"></div>
<table class="items">
<thead>
<tr>
<th class="zentriert" id="yw1_c0"><a class="sort-link" href="/sk-slavia-prague/kader/verein/62/saison_id/2020/plus/1/sort/rn">#</a></th><th id="yw1_c1"><a class="sort-link asc" href="/sk-slavia-prague/kader/verein/62/saison_id/2020/plus/1/sort/spieler.desc">player</a></th><th class="zentriert" id="yw1_c2"><a class="sort-link" href="/sk-slavia-prague/kader/verein/62/saison_id/2020/plus/1/sort/age">Date of birth / Age</a></th><th class="zentriert" id="yw1_c3">Nat.</th><th class="zentriert" id="yw1_c4"><a class="sort-link" href="/sk-slavia-prague/kader/verein/62/saison_id/2020/plus/1/sort/groesse.desc">Height</a></th><th class="zentriert" id="yw1_c5"><a class="sort-link" href="/sk-slavia-prague/kader/verein/62/saison_id/2020/plus/1/sort/fuss.desc">Foot</a></th><th class="zentriert" id="yw1_c6"><a class="sort-link" href="/sk-slavia-prague/kader/verein/62/saison_id/2020/plus/1/sort/im_team">Joined</a></th><th class="zentriert" id="yw1_c7">Signed from</th><th class="zentriert" id="yw1_c8"><a class="sort-link" href="/sk-slavia-prague/kader/verein/62/saison_id/2020/plus/1/sort/vertrag_bis">Contract expires</a></th><th class="rechts" id="yw1_c9"><a class="sort-link" href="/sk-slavia-prague/kader/verein/62/saison_id/2020/plus/1/sort/marktwert.desc">Market value</a></th></tr>
</thead>
<tbody>
<tr class="odd">
<td title="Goalkeeper" class="zentriert rueckennummer bg_Torwart"><div class=rn_nummer>1</div></td><td title="" class="posrela"><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/189630-1605983913.png?lm=1" title="Ondrej Kolar" alt="Ondrej Kolar" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Ondrej Kolar" class="spielprofil_tooltip" id="189630" href="/ondrej-kolar/profil/spieler/189630">Ondrej Kolar</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Ondrej Kolar" class="spielprofil_tooltip" id="189630" href="/ondrej-kolar/profil/spieler/189630">O. Kolar</a></span></div></td></tr><tr><td>Goalkeeper</td></tr></table></td><td class="zentriert">Oct 17, 1994 (26)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,93 m</td><td class="zentriert">right</td><td class="zentriert">Jan 22, 2018</td><td class="zentriert"><a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2017"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/697.png?lm=1419784849" title=": Ablöse €1.00m" alt="FC Slovan Liberec" class="" /></a></td><td class="zentriert">Jun 30, 2024</td><td class="rechts hauptlink">€7.50m&nbsp;<span title="Previous market value: €6.00m" class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="even">
<td title="Goalkeeper" class="zentriert rueckennummer bg_Torwart"><div class=rn_nummer>13</div></td><td title="" class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined as a winter arrival from: FK Mladá Boleslav; date: Jan 14, 2021; fee: ?" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/5546.png?lm=1419784887" title="Joined as a winter arrival from: FK Mladá Boleslav; date: Jan 14, 2021; fee: ?" alt="FK Mladá Boleslav" class="" /></a></span><a title="Joined as a winter arrival from: FK Mladá Boleslav; date: Jan 14, 2021; fee: ?" class="hide-for-small" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2020"><img src="/images/icons/winterzugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/260071-1537380388.jpg?lm=1" title="Jan Stejskal" alt="Jan Stejskal" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Jan Stejskal" class="spielprofil_tooltip" id="260071" href="/jan-stejskal/profil/spieler/260071">Jan Stejskal</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Jan Stejskal" class="spielprofil_tooltip" id="260071" href="/jan-stejskal/profil/spieler/260071">J. Stejskal</a></span></div></td></tr><tr><td>Goalkeeper</td></tr></table></td><td class="zentriert">Feb 14, 1997 (24)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,90 m</td><td class="zentriert">-</td><td class="zentriert">Jan 14, 2021</td><td class="zentriert"><a class="vereinprofil_tooltip" id="5546" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/5546.png?lm=1419784887" title=": Ablöse ?" alt="FK Mladá Boleslav" class="" /></a></td><td class="zentriert">Jun 30, 2025</td><td class="rechts hauptlink">€300Th.&nbsp;<span title="Previous market value: €300Th." class="icons_sprite grey-block-ten">&nbsp;</span></td></tr>
<tr class="odd">
<td title="Goalkeeper" class="zentriert rueckennummer bg_Torwart"><div class=rn_nummer>31</div></td><td title="" class="posrela"><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/70625-1605982494.png?lm=1" title="Premysl Kovar" alt="Premysl Kovar" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Premysl Kovar" class="spielprofil_tooltip" id="70625" href="/premysl-kovar/profil/spieler/70625">Premysl Kovar</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Premysl Kovar" class="spielprofil_tooltip" id="70625" href="/premysl-kovar/profil/spieler/70625">P. Kovar</a></span></div></td></tr><tr><td>Goalkeeper</td></tr></table></td><td class="zentriert">Oct 14, 1985 (35)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,87 m</td><td class="zentriert">right</td><td class="zentriert">Jan 1, 2017</td><td class="zentriert"><a class="vereinprofil_tooltip" id="967" href="/cherno-more-varna/startseite/verein/967/saison_id/2016"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/967.png?lm=1416145122" title=": Ablöse €200Th." alt="Cherno More Varna" class="" /></a></td><td class="zentriert">Jun 30, 2021</td><td class="rechts hauptlink">€100Th.&nbsp;<span title="Previous market value: €150Th." class="icons_sprite red-arrow-ten">&nbsp;</span></td></tr>
<tr class="even">
<td title="Defender" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>4</div></td><td title="" class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="On loan from Club Brugge KV until Jun 30, 2021" href="/club-brugge-kv/kadernaechstesaison/verein/2282/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/2282.png?lm=1448474251" title="On loan from Club Brugge KV until Jun 30, 2021" alt="Club Brugge KV" class="" /></a></span><a title="On loan from Club Brugge KV until Jun 30, 2021" class="hide-for-small" href="/club-brugge-kv/kadernaechstesaison/verein/2282/saison_id/2020"><img src="/images/icons/leihe_beta_kader.png" width="19px" height="19px" class="wechsel-symbol" /></a><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/234124-1581847698.jpg?lm=1" title="Simon Deli" alt="Simon Deli" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Simon Deli" class="spielprofil_tooltip" id="234124" href="/simon-deli/profil/spieler/234124">Simon Deli</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Simon Deli" class="spielprofil_tooltip" id="234124" href="/simon-deli/profil/spieler/234124">S. Deli</a></span></div></td></tr><tr><td>Centre-Back</td></tr></table></td><td class="zentriert">Oct 27, 1991 (29)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/38.png?lm=1520611569" title="Cote d'Ivoire" alt="Cote d'Ivoire" class="flaggenrahmen" /></td><td class="zentriert">1,92 m</td><td class="zentriert">left</td><td class="zentriert">Feb 1, 2021</td><td class="zentriert"><a class="vereinprofil_tooltip" id="2282" href="/fc-brugge/startseite/verein/2282/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/2282.png?lm=1448474251" title=": Ablöse ?" alt="Club Brugge KV" class="" /></a></td><td class="zentriert">Jun 30, 2021</td><td class="rechts hauptlink">€5.00m&nbsp;<span title="Previous market value: €6.00m" class="icons_sprite red-arrow-ten">&nbsp;</span></td></tr>
<tr class="odd">
<td title="Defender" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>6</div></td><td title="" class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined from SK Sigma Olomouc B; date: Aug 3, 2020; fee: €1.30m" href="/sk-sigma-olomouc-b/startseite/verein/6038/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/6038.png?lm=1419785397" title="Joined from SK Sigma Olomouc B; date: Aug 3, 2020; fee: €1.30m" alt="SK Sigma Olomouc B" class="" /></a></span><a title="Joined from SK Sigma Olomouc B; date: Aug 3, 2020; fee: €1.30m" class="hide-for-small" href="/sk-sigma-olomouc-b/startseite/verein/6038/saison_id/2020"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/544149-1605982598.png?lm=1" title="David Zima" alt="David Zima" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="David Zima" class="spielprofil_tooltip" id="544149" href="/david-zima/profil/spieler/544149">David Zima</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="David Zima" class="spielprofil_tooltip" id="544149" href="/david-zima/profil/spieler/544149">D. Zima</a></span></div></td></tr><tr><td>Centre-Back</td></tr></table></td><td class="zentriert">Nov 8, 2000 (20)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,90 m</td><td class="zentriert">-</td><td class="zentriert">Aug 3, 2020</td><td class="zentriert"><a class="vereinprofil_tooltip" id="6038" href="/sk-sigma-olmutz-u21/startseite/verein/6038/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/6038.png?lm=1419785397" title=": Ablöse €1.30m" alt="SK Sigma Olomouc B" class="" /></a></td><td class="zentriert">Jun 30, 2024</td><td class="rechts hauptlink">€3.00m&nbsp;<span title="Previous market value: €400Th." class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="even">
<td title="Defender" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>2</div></td><td title="" class="posrela"><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/263431-1605982636.png?lm=1" title="David Hovorka" alt="David Hovorka" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="David Hovorka" class="spielprofil_tooltip" id="263431" href="/david-hovorka/profil/spieler/263431">David Hovorka</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="David Hovorka" class="spielprofil_tooltip" id="263431" href="/david-hovorka/profil/spieler/263431">D. Hovorka</a></span></div><span title="Cruciate Ligament Surgery - Return unknown" class="verletzt-table icons_sprite">&nbsp;</span></td></tr><tr><td>Centre-Back</td></tr></table></td><td class="zentriert">Aug 7, 1993 (27)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,79 m</td><td class="zentriert">right</td><td class="zentriert">Jul 1, 2019</td><td class="zentriert"><a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/startseite/verein/1322/saison_id/2019"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/1322.png?lm=1551278724" title=": Ablöse €1.20m" alt="FK Jablonec" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€2.00m&nbsp;<span title="Previous market value: €2.40m" class="icons_sprite red-arrow-ten">&nbsp;</span></td></tr>
<tr class="odd">
<td title="Defender" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>15</div></td><td title="" class="posrela"><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/35699-1605982627.PNG?lm=1" title="Ondrej Kudela" alt="Ondrej Kudela" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Ondrej Kudela" class="spielprofil_tooltip" id="35699" href="/ondrej-kudela/profil/spieler/35699">Ondrej Kudela</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Ondrej Kudela" class="spielprofil_tooltip" id="35699" href="/ondrej-kudela/profil/spieler/35699">O. Kudela</a></span></div></td></tr><tr><td>Centre-Back</td></tr></table></td><td class="zentriert">Mar 26, 1987 (33)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,82 m</td><td class="zentriert">right</td><td class="zentriert">Jan 19, 2018</td><td class="zentriert"><a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2017"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/697.png?lm=1419784849" title=": Ablöse €400Th." alt="FC Slovan Liberec" class="" /></a></td><td class="zentriert">Jun 30, 2022</td><td class="rechts hauptlink">€1.60m&nbsp;<span title="Previous market value: €1.60m" class="icons_sprite grey-block-ten">&nbsp;</span></td></tr>
<tr class="even">
<td title="Defender" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>30</div></td><td title="" class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="On loan from FC Slovan Liberec until Jun 30, 2021" href="/fc-slovan-liberec/kadernaechstesaison/verein/697/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/697.png?lm=1419784849" title="On loan from FC Slovan Liberec until Jun 30, 2021" alt="FC Slovan Liberec" class="" /></a></span><a title="On loan from FC Slovan Liberec until Jun 30, 2021" class="hide-for-small" href="/fc-slovan-liberec/kadernaechstesaison/verein/697/saison_id/2020"><img src="/images/icons/leihe_beta_kader.png" width="19px" height="19px" class="wechsel-symbol" /></a><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/213975-1515158777.JPG?lm=1" title="Taras Kacharaba" alt="Taras Kacharaba" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Taras Kacharaba" class="spielprofil_tooltip" id="213975" href="/taras-kacharaba/profil/spieler/213975">Taras Kacharaba</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Taras Kacharaba" class="spielprofil_tooltip" id="213975" href="/taras-kacharaba/profil/spieler/213975">T. Kacharaba</a></span></div></td></tr><tr><td>Centre-Back</td></tr></table></td><td class="zentriert">Jan 7, 1995 (26)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/177.png?lm=1520611569" title="Ukraine" alt="Ukraine" class="flaggenrahmen" /></td><td class="zentriert">1,89 m</td><td class="zentriert">right</td><td class="zentriert">Jan 6, 2021</td><td class="zentriert"><a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/697.png?lm=1419784849" title=": Ablöse €100Th." alt="FC Slovan Liberec" class="" /></a></td><td class="zentriert">Jun 30, 2021</td><td class="rechts hauptlink">€800Th.&nbsp;<span title="Previous market value: €750Th." class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="odd">
<td title="Defender" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>18</div></td><td title="" class="posrela"><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/129655-1605982586.png?lm=1" title="Jan Boril" alt="Jan Boril" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Jan Boril" class="spielprofil_tooltip" id="129655" href="/jan-boril/profil/spieler/129655">Jan Boril</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Jan Boril" class="spielprofil_tooltip" id="129655" href="/jan-boril/profil/spieler/129655">Jan Boril</a></span></div><span title="Team captain" class="kapitaenicon-table icons_sprite">&nbsp;</span></td></tr><tr><td>Left-Back</td></tr></table></td><td class="zentriert">Jan 11, 1991 (30)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,75 m</td><td class="zentriert">right</td><td class="zentriert">Jan 7, 2016</td><td class="zentriert"><a class="vereinprofil_tooltip" id="5546" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2015"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/5546.png?lm=1419784887" title=": Ablöse €350Th." alt="FK Mladá Boleslav" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€2.50m&nbsp;<span title="Previous market value: €1.80m" class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="even">
<td title="Defender" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>5</div></td><td title="" class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined as a winter arrival from: SönderjyskE; date: Jan 5, 2021; fee: €1.75m" href="/sonderjyske/startseite/verein/5817/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/5817.png?lm=1518117723" title="Joined as a winter arrival from: SönderjyskE; date: Jan 5, 2021; fee: €1.75m" alt="SönderjyskE" class="" /></a></span><a title="Joined as a winter arrival from: SönderjyskE; date: Jan 5, 2021; fee: €1.75m" class="hide-for-small" href="/sonderjyske/startseite/verein/5817/saison_id/2020"><img src="/images/icons/winterzugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/452607-1543410615.jpg?lm=1" title="Alexander Bah" alt="Alexander Bah" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Alexander Bah" class="spielprofil_tooltip" id="452607" href="/alexander-bah/profil/spieler/452607">Alexander Bah</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Alexander Bah" class="spielprofil_tooltip" id="452607" href="/alexander-bah/profil/spieler/452607">A. Bah</a></span></div></td></tr><tr><td>Right-Back</td></tr></table></td><td class="zentriert">Dec 9, 1997 (23)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/39.png?lm=1520611569" title="Denmark" alt="Denmark" class="flaggenrahmen" /></td><td class="zentriert">1,83 m</td><td class="zentriert">right</td><td class="zentriert">Jan 5, 2021</td><td class="zentriert"><a class="vereinprofil_tooltip" id="5817" href="/sonderjyske/startseite/verein/5817/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/5817.png?lm=1518117723" title=": Ablöse €1.75m" alt="SönderjyskE" class="" /></a></td><td class="zentriert">Jun 30, 2025</td><td class="rechts hauptlink">€2.50m&nbsp;<span title="Previous market value: €700Th." class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="odd">
<td title="Defender" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>3</div></td><td title="" class="posrela"><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/216278-1605982574.png?lm=1" title="Tomas Holes" alt="Tomas Holes" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Tomas Holes" class="spielprofil_tooltip" id="216278" href="/tomas-holes/profil/spieler/216278">Tomas Holes</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Tomas Holes" class="spielprofil_tooltip" id="216278" href="/tomas-holes/profil/spieler/216278">T. Holes</a></span></div></td></tr><tr><td>Right-Back</td></tr></table></td><td class="zentriert">Mar 31, 1993 (27)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,80 m</td><td class="zentriert">-</td><td class="zentriert">Jul 1, 2019</td><td class="zentriert"><a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/startseite/verein/1322/saison_id/2019"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/1322.png?lm=1551278724" title=": Ablöse €1.60m" alt="FK Jablonec" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€1.50m&nbsp;<span title="Previous market value: €750Th." class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="even">
<td title="midfield" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>25</div></td><td title="" class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Returned after loan spell with FC Slovan Liberec; date: Dec 31, 2020; fee: End of loan" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/697.png?lm=1419784849" title="Returned after loan spell with FC Slovan Liberec; date: Dec 31, 2020; fee: End of loan" alt="FC Slovan Liberec" class="" /></a></span><a title="Returned after loan spell with FC Slovan Liberec; date: Dec 31, 2020; fee: End of loan" class="hide-for-small" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2020"><img src="/images/icons/rueckkehr_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/186380-1413554666.png?lm=1" title="Jakub Hromada" alt="Jakub Hromada" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Jakub Hromada" class="spielprofil_tooltip" id="186380" href="/jakub-hromada/profil/spieler/186380">Jakub Hromada</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Jakub Hromada" class="spielprofil_tooltip" id="186380" href="/jakub-hromada/profil/spieler/186380">J. Hromada</a></span></div></td></tr><tr><td>Defensive Midfield</td></tr></table></td><td class="zentriert">May 25, 1996 (24)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/154.png?lm=1520611569" title="Slovakia" alt="Slovakia" class="flaggenrahmen" /></td><td class="zentriert">1,80 m</td><td class="zentriert">right</td><td class="zentriert">Jul 1, 2017</td><td class="zentriert"><a class="vereinprofil_tooltip" id="1038" href="/uc-sampdoria/startseite/verein/1038/saison_id/2017"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/1038.png?lm=1520934353" title=": Ablöse €500Th." alt="UC Sampdoria" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€650Th.&nbsp;<span title="Previous market value: €350Th." class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="odd">
<td title="midfield" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>23</div></td><td title="" class="posrela"><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/147555-1605983691.png?lm=1" title="Petr Sevcik" alt="Petr Sevcik" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Petr Sevcik" class="spielprofil_tooltip" id="147555" href="/petr-sevcik/profil/spieler/147555">Petr Sevcik</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Petr Sevcik" class="spielprofil_tooltip" id="147555" href="/petr-sevcik/profil/spieler/147555">P. Sevcik</a></span></div><span title="Stretched Ligament - Return expected on Mar 5, 2021" class="verletzt-table icons_sprite">&nbsp;</span></td></tr><tr><td>Central Midfield</td></tr></table></td><td class="zentriert">May 4, 1994 (26)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,72 m</td><td class="zentriert">right</td><td class="zentriert">Jan 1, 2019</td><td class="zentriert"><a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2018"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/697.png?lm=1419784849" title=": Ablöse €1.00m" alt="FC Slovan Liberec" class="" /></a></td><td class="zentriert">Jun 30, 2022</td><td class="rechts hauptlink">€3.50m&nbsp;<span title="Previous market value: €2.50m" class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="even">
<td title="midfield" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>27</div></td><td title="" class="posrela"><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/179236-1605983702.png?lm=1" title="Ibrahim Traoré" alt="Ibrahim Traoré" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Ibrahim Traoré" class="spielprofil_tooltip" id="179236" href="/ibrahim-traore/profil/spieler/179236">Ibrahim Traoré</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Ibrahim Traoré" class="spielprofil_tooltip" id="179236" href="/ibrahim-traore/profil/spieler/179236">I. Traoré</a></span></div></td></tr><tr><td>Central Midfield</td></tr></table></td><td class="zentriert">Sep 16, 1988 (32)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/38.png?lm=1520611569" title="Cote d'Ivoire" alt="Cote d'Ivoire" class="flaggenrahmen" /></td><td class="zentriert">1,87 m</td><td class="zentriert">right</td><td class="zentriert">Jan 1, 2019</td><td class="zentriert"><a class="vereinprofil_tooltip" id="5545" href="/fc-tescoma-zlin/startseite/verein/5545/saison_id/2018"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/5545.png?lm=1419785784" title=": Ablöse €200Th." alt="FC FASTAV Zlin" class="" /></a></td><td class="zentriert">Jun 30, 2022</td><td class="rechts hauptlink">€1.40m&nbsp;<span title="Previous market value: €1.40m" class="icons_sprite grey-block-ten">&nbsp;</span></td></tr>
<tr class="odd">
<td title="midfield" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>28</div></td><td title="" class="posrela"><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/234153-1605983729.png?lm=1" title="Lukas Masopust" alt="Lukas Masopust" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Lukas Masopust" class="spielprofil_tooltip" id="234153" href="/lukas-masopust/profil/spieler/234153">Lukas Masopust</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Lukas Masopust" class="spielprofil_tooltip" id="234153" href="/lukas-masopust/profil/spieler/234153">L. Masopust</a></span></div></td></tr><tr><td>Right Midfield</td></tr></table></td><td class="zentriert">Feb 12, 1993 (28)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,79 m</td><td class="zentriert">right</td><td class="zentriert">Jan 1, 2019</td><td class="zentriert"><a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/startseite/verein/1322/saison_id/2018"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/1322.png?lm=1551278724" title=": Ablöse €590Th." alt="FK Jablonec" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€3.50m&nbsp;<span title="Previous market value: €2.50m" class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="even">
<td title="midfield" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>19</div></td><td title="" class="posrela"><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/401475-1605983714.png?lm=1" title="Oscar Dorley" alt="Oscar Dorley" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Oscar Dorley" class="spielprofil_tooltip" id="401475" href="/oscar-dorley/profil/spieler/401475">Oscar Dorley</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Oscar Dorley" class="spielprofil_tooltip" id="401475" href="/oscar-dorley/profil/spieler/401475">Oscar Dorley</a></span></div></td></tr><tr><td>Left Midfield</td></tr></table></td><td class="zentriert">Jul 19, 1998 (22)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/95.png?lm=1520611569" title="Liberia" alt="Liberia" class="flaggenrahmen" /></td><td class="zentriert">1,74 m</td><td class="zentriert">left</td><td class="zentriert">Aug 11, 2019</td><td class="zentriert"><a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2019"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/697.png?lm=1419784849" title=": Ablöse €1.00m" alt="FC Slovan Liberec" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€2.00m&nbsp;<span title="Previous market value: €1.20m" class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="odd">
<td title="midfield" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>7</div></td><td title="" class="posrela"><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/148372-1605983756.png?lm=1" title="Nicolae Stanciu" alt="Nicolae Stanciu" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Nicolae Stanciu" class="spielprofil_tooltip" id="148372" href="/nicolae-stanciu/profil/spieler/148372">Nicolae Stanciu</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Nicolae Stanciu" class="spielprofil_tooltip" id="148372" href="/nicolae-stanciu/profil/spieler/148372">N. Stanciu</a></span></div></td></tr><tr><td>Attacking Midfield</td></tr></table></td><td class="zentriert">May 7, 1993 (27)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/140.png?lm=1520611569" title="Romania" alt="Romania" class="flaggenrahmen" /></td><td class="zentriert">1,69 m</td><td class="zentriert">right</td><td class="zentriert">Jul 4, 2019</td><td class="zentriert"><a class="vereinprofil_tooltip" id="18487" href="/al-ahli-dschidda/startseite/verein/18487/saison_id/2019"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/18487.png?lm=1407562631" title=": Ablöse €4.00m" alt="Al-Ahli Jeddah" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€4.50m&nbsp;<span title="Previous market value: €4.50m" class="icons_sprite grey-block-ten">&nbsp;</span></td></tr>
<tr class="even">
<td title="midfield" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>32</div></td><td title="" class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined from MFK Karvina; date: Aug 6, 2020; fee: €450Th." href="/mfk-karvina/startseite/verein/13726/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/13726.png?lm=1419785681" title="Joined from MFK Karvina; date: Aug 6, 2020; fee: €450Th." alt="MFK Karvina" class="" /></a></span><a title="Joined from MFK Karvina; date: Aug 6, 2020; fee: €450Th." class="hide-for-small" href="/mfk-karvina/startseite/verein/13726/saison_id/2020"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/321195-1605983767.png?lm=1" title="Ondrej Lingr" alt="Ondrej Lingr" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Ondrej Lingr" class="spielprofil_tooltip" id="321195" href="/ondrej-lingr/profil/spieler/321195">Ondrej Lingr</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Ondrej Lingr" class="spielprofil_tooltip" id="321195" href="/ondrej-lingr/profil/spieler/321195">O. Lingr</a></span></div></td></tr><tr><td>Attacking Midfield</td></tr></table></td><td class="zentriert">Oct 7, 1998 (22)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,75 m</td><td class="zentriert">-</td><td class="zentriert">Aug 6, 2020</td><td class="zentriert"><a class="vereinprofil_tooltip" id="13726" href="/mfk-karvina/startseite/verein/13726/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/13726.png?lm=1419785681" title=": Ablöse €450Th." alt="MFK Karvina" class="" /></a></td><td class="zentriert">Jun 30, 2024</td><td class="rechts hauptlink">€1.00m&nbsp;<span title="Previous market value: €550Th." class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="odd">
<td title="midfield" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>20</div></td><td title="" class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Returned after loan spell with FC Slovan Liberec; date: Dec 31, 2020; fee: End of loan" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/697.png?lm=1419784849" title="Returned after loan spell with FC Slovan Liberec; date: Dec 31, 2020; fee: End of loan" alt="FC Slovan Liberec" class="" /></a></span><a title="Returned after loan spell with FC Slovan Liberec; date: Dec 31, 2020; fee: End of loan" class="hide-for-small" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2020"><img src="/images/icons/rueckkehr_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/664456-1605984275.png?lm=1" title="Michal Beran" alt="Michal Beran" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Michal Beran" class="spielprofil_tooltip" id="664456" href="/michal-beran/profil/spieler/664456">Michal Beran</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Michal Beran" class="spielprofil_tooltip" id="664456" href="/michal-beran/profil/spieler/664456">M. Beran</a></span></div></td></tr><tr><td>Attacking Midfield</td></tr></table></td><td class="zentriert">Aug 22, 2000 (20)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,67 m</td><td class="zentriert">-</td><td class="zentriert">Aug 3, 2020</td><td class="zentriert"><a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/697.png?lm=1419784849" title=": Ablöse €700Th." alt="FC Slovan Liberec" class="" /></a></td><td class="zentriert">Jun 30, 2024</td><td class="rechts hauptlink">€300Th.&nbsp;<span title="Previous market value: €200Th." class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="even">
<td title="attack" class="zentriert rueckennummer bg_Sturm"><div class=rn_nummer>9</div></td><td title="" class="posrela"><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/248393-1605984091.png?lm=1" title="Peter Olayinka" alt="Peter Olayinka" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Peter Olayinka" class="spielprofil_tooltip" id="248393" href="/peter-olayinka/profil/spieler/248393">Peter Olayinka</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Peter Olayinka" class="spielprofil_tooltip" id="248393" href="/peter-olayinka/profil/spieler/248393">P. Olayinka</a></span></div></td></tr><tr><td>Left Winger</td></tr></table></td><td class="zentriert">Nov 16, 1995 (25)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/124.png?lm=1520611569" title="Nigeria" alt="Nigeria" class="flaggenrahmen" /></td><td class="zentriert">1,88 m</td><td class="zentriert">right</td><td class="zentriert">Jul 21, 2018</td><td class="zentriert"><a class="vereinprofil_tooltip" id="157" href="/kaa-gent/startseite/verein/157/saison_id/2018"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/157.png?lm=1442954733" title=": Ablöse €3.20m" alt="KAA Gent" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€6.00m&nbsp;<span title="Previous market value: €3.50m" class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="odd">
<td title="attack" class="zentriert rueckennummer bg_Sturm"><div class=rn_nummer>17</div></td><td title="" class="posrela"><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/292779-1605984074.png?lm=1" title="Lukas Provod" alt="Lukas Provod" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Lukas Provod" class="spielprofil_tooltip" id="292779" href="/lukas-provod/profil/spieler/292779">Lukas Provod</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Lukas Provod" class="spielprofil_tooltip" id="292779" href="/lukas-provod/profil/spieler/292779">L. Provod</a></span></div></td></tr><tr><td>Left Winger</td></tr></table></td><td class="zentriert">Oct 23, 1996 (24)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,89 m</td><td class="zentriert">left</td><td class="zentriert">Jan 1, 2020</td><td class="zentriert"><a class="vereinprofil_tooltip" id="8751" href="/fc-viktoria-pilsen-u21/startseite/verein/8751/saison_id/2019"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/8751.png?lm=1571347012" title=": Ablöse €770Th." alt="FC Viktoria Plzen B" class="" /></a></td><td class="zentriert">Jun 30, 2024</td><td class="rechts hauptlink">€1.50m&nbsp;<span title="Previous market value: €800Th." class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="even">
<td title="attack" class="zentriert rueckennummer bg_Sturm"><div class=rn_nummer>14</div></td><td title="" class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Returned after loan spell with SK Dynamo Ceske Budejovice; date: Dec 31, 2020; fee: End of loan" href="/sk-dynamo-ceske-budejovice/startseite/verein/1321/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/1321.png?lm=1419785284" title="Returned after loan spell with SK Dynamo Ceske Budejovice; date: Dec 31, 2020; fee: End of loan" alt="SK Dynamo Ceske Budejovice" class="" /></a></span><a title="Returned after loan spell with SK Dynamo Ceske Budejovice; date: Dec 31, 2020; fee: End of loan" class="hide-for-small" href="/sk-dynamo-ceske-budejovice/startseite/verein/1321/saison_id/2020"><img src="/images/icons/rueckkehr_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/189053-1605984282.png?lm=1" title="Mick van Buren" alt="Mick van Buren" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Mick van Buren" class="spielprofil_tooltip" id="189053" href="/mick-van-buren/profil/spieler/189053">Mick van Buren</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Mick van Buren" class="spielprofil_tooltip" id="189053" href="/mick-van-buren/profil/spieler/189053">M. van Buren</a></span></div></td></tr><tr><td>Right Winger</td></tr></table></td><td class="zentriert">Aug 24, 1992 (28)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/122.png?lm=1520611569" title="Netherlands" alt="Netherlands" class="flaggenrahmen" /></td><td class="zentriert">1,84 m</td><td class="zentriert">right</td><td class="zentriert">Jul 1, 2016</td><td class="zentriert"><a class="vereinprofil_tooltip" id="3426" href="/esbjerg-fb/startseite/verein/3426/saison_id/2016"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/3426.png?lm=1588522725" title=": Ablöse free transfer" alt="Esbjerg fB" class="" /></a></td><td class="zentriert">Jun 30, 2021</td><td class="rechts hauptlink">€600Th.&nbsp;<span title="Previous market value: €500Th." class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="odd">
<td title="attack" class="zentriert rueckennummer bg_Sturm"><div class=rn_nummer>12</div></td><td title="" class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Internal transfer: SK Slavia Prague B; date: Oct 1, 2020" href="/sk-slavia-prague-b/startseite/verein/6541/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/6541.png?lm=1568220003" title="Internal transfer: SK Slavia Prague B; date: Oct 1, 2020" alt="SK Slavia Prague B" class="" /></a></span><a title="Internal transfer: SK Slavia Prague B; date: Oct 1, 2020" class="hide-for-small" href="/sk-slavia-prague-b/startseite/verein/6541/saison_id/2020"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/776798-1606429924.png?lm=1" title="Abdallah Sima" alt="Abdallah Sima" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Abdallah Sima" class="spielprofil_tooltip" id="776798" href="/abdallah-sima/profil/spieler/776798">Abdallah Sima</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Abdallah Sima" class="spielprofil_tooltip" id="776798" href="/abdallah-sima/profil/spieler/776798">A. Sima</a></span></div></td></tr><tr><td>Centre-Forward</td></tr></table></td><td class="zentriert">Jun 17, 2001 (19)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/149.png?lm=1520611569" title="Senegal" alt="Senegal" class="flaggenrahmen" /></td><td class="zentriert">1,88 m</td><td class="zentriert">right</td><td class="zentriert">Oct 1, 2020</td><td class="zentriert"><a class="vereinprofil_tooltip" id="6541" href="/sk-slavia-prag-u21/startseite/verein/6541/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/6541.png?lm=1568220003" title=": Ablöse -" alt="SK Slavia Prague B" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€8.00m&nbsp;<span title="Previous market value: -" class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="even">
<td title="attack" class="zentriert rueckennummer bg_Sturm"><div class=rn_nummer>16</div></td><td title="" class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined from FC Slovan Liberec; date: Aug 3, 2020; fee: €400Th." href="/fc-slovan-liberec/startseite/verein/697/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/697.png?lm=1419784849" title="Joined from FC Slovan Liberec; date: Aug 3, 2020; fee: €400Th." alt="FC Slovan Liberec" class="" /></a></span><a title="Joined from FC Slovan Liberec; date: Aug 3, 2020; fee: €400Th." class="hide-for-small" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2020"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/334802-1605984038.PNG?lm=1" title="Jan Kuchta" alt="Jan Kuchta" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Jan Kuchta" class="spielprofil_tooltip" id="334802" href="/jan-kuchta/profil/spieler/334802">Jan Kuchta</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Jan Kuchta" class="spielprofil_tooltip" id="334802" href="/jan-kuchta/profil/spieler/334802">J. Kuchta</a></span></div></td></tr><tr><td>Centre-Forward</td></tr></table></td><td class="zentriert">Jan 8, 1997 (24)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,84 m</td><td class="zentriert">right</td><td class="zentriert">Aug 3, 2020</td><td class="zentriert"><a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/697.png?lm=1419784849" title=": Ablöse €400Th." alt="FC Slovan Liberec" class="" /></a></td><td class="zentriert">Jun 30, 2024</td><td class="rechts hauptlink">€1.00m&nbsp;<span title="Previous market value: €400Th." class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
<tr class="odd">
<td title="attack" class="zentriert rueckennummer bg_Sturm"><div class=rn_nummer>11</div></td><td title="" class="posrela"><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/81390-1605984050.png?lm=1" title="Stanislav Tecl" alt="Stanislav Tecl" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Stanislav Tecl" class="spielprofil_tooltip" id="81390" href="/stanislav-tecl/profil/spieler/81390">Stanislav Tecl</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Stanislav Tecl" class="spielprofil_tooltip" id="81390" href="/stanislav-tecl/profil/spieler/81390">S. Tecl</a></span></div></td></tr><tr><td>Centre-Forward</td></tr></table></td><td class="zentriert">Sep 1, 1990 (30)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,81 m</td><td class="zentriert">right</td><td class="zentriert">Jan 24, 2017</td><td class="zentriert"><a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/startseite/verein/1322/saison_id/2016"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/1322.png?lm=1551278724" title=": Ablöse €550Th." alt="FK Jablonec" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€900Th.&nbsp;<span title="Previous market value: €900Th." class="icons_sprite grey-block-ten">&nbsp;</span></td></tr>
<tr class="even">
<td title="attack" class="zentriert rueckennummer bg_Sturm"><div class=rn_nummer>29</div></td><td title="" class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Returned after loan spell with FC Slovan Liberec; date: Dec 31, 2020; fee: End of loan" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/697.png?lm=1419784849" title="Returned after loan spell with FC Slovan Liberec; date: Dec 31, 2020; fee: End of loan" alt="FC Slovan Liberec" class="" /></a></span><a title="Returned after loan spell with FC Slovan Liberec; date: Dec 31, 2020; fee: End of loan" class="hide-for-small" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2020"><img src="/images/icons/rueckkehr_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a><table class="inline-table" title=><tr><td rowspan="2" class=""><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/351181-1566372328.jpg?lm=1" title="Yusuf" alt="Yusuf" class="bilderrahmen-fixed" /></a></td><td class="hauptlink"><div class="di nowrap"><span class="hide-for-small"><a title="Yusuf" class="spielprofil_tooltip" id="351181" href="/yusuf/profil/spieler/351181">Yusuf</a></span></div><div class="di nowrap"><span class="show-for-small"><a title="Yusuf" class="spielprofil_tooltip" id="351181" href="/yusuf/profil/spieler/351181">Yusuf</a></span></div><span title="Muscle Injury - Return unknown" class="verletzt-table icons_sprite">&nbsp;</span></td></tr><tr><td>Centre-Forward</td></tr></table></td><td class="zentriert">Jun 12, 1993 (27)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/15.png?lm=1520611569" title="Bahrain" alt="Bahrain" class="flaggenrahmen" /></td><td class="zentriert">1,94 m</td><td class="zentriert">-</td><td class="zentriert">Jan 3, 2019</td><td class="zentriert"><a class="vereinprofil_tooltip" id="715" href="/fc-bohemians-prag-1905/startseite/verein/715/saison_id/2018"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/715.png?lm=1547322604" title=": Ablöse ?" alt="FC Bohemians Prag 1905" class="" /></a></td><td class="zentriert">Jun 30, 2022</td><td class="rechts hauptlink">€600Th.&nbsp;<span title="Previous market value: €500Th." class="icons_sprite green-arrow-ten">&nbsp;</span></td></tr>
</tbody>
</table>
<div class="keys" style="display:none" title="/sk-slavia-prague/kader/verein/62/saison_id/2020/plus/1"><span>1</span><span>13</span><span>31</span><span>4</span><span>6</span><span>2</span><span>15</span><span>30</span><span>18</span><span>5</span><span>3</span><span>25</span><span>23</span><span>27</span><span>28</span><span>19</span><span>7</span><span>32</span><span>20</span><span>9</span><span>17</span><span>14</span><span>12</span><span>16</span><span>11</span><span>29</span></div>
</div>                </div>
            </div>
            </div>
    </div>

<div class="werbung werbung-fullsize_contentad">
	<!-- DFPV2 -->
	<div id="BillboardFooter" >
	<script>
		googletag.cmd.push(function() { googletag.display('BillboardFooter'); });
	</script>
	</div>
</div>
                <div id="footer" class="row large-12 columns small-12">
	        <a name="Footer" href="/"
           class="footer-logo"><img src="/images/logo.png" alt="Transfermarkt"/></a>
	    <a name="Footer"
       href="/intern/impressum">legal notice</a>
    |
    <a name="Footer"
       href="/intern/datenschutz">privacy</a>
    |
        <a name="Footer"
       href="/intern/anb">general terms of use</a>
    |
    <a name="Footer"
       href="/intern/tmteam">The TM Team</a>
    |
	    <a name="Footer"
       href="/intern/socialmedia">Social-Media</a>
		    |

    <a name="Footer"
       href="/intern/faq"> FAQ</a> |
    <a name="Footer"
       href="/intern/fehlermelden">Found a mistake?</a>
</div>
                <div id="menue_overlay" style="display: none;"></div>
    </div>

	<!-- DFPV2 -->
	<div id="Richmedia" style="z-index:1000000">
	<script>
		googletag.cmd.push(function() { googletag.display('Richmedia'); });
	</script>
	</div>
    <!-- SZM VERSION="2.0" -->
    <script type="text/javascript">
        var iam_data = {
"st":"transfer",
"cp":"ausland_co.uk_r",
"oc":"co-uk_other",
"mg":"yes",
"sv":"i2",
"sc":"yes",
"co":""
}
iom.c(iam_data,1);
    </script>
    <!--/SZM -->
            <script type="module">
        var defaultOptions={tracking:!0,refreshAds:!0};export var refreshAd=function(){var n,e;[ASCDP.hasOwnProperty("adS"),null===(n=ASCDP.adS)||void 0===n?void 0:n.hasOwnProperty("reloadAds"),"function"==typeof(null===(e=ASCDP.adS)||void 0===e?void 0:e.reloadAds)].every(function(n){return n})&&ASCDP.adS.reloadAds()};export var TmTrackingAndAds=function(n,e){void 0===e&&(e=defaultOptions);var r=["tabelle","reiter","forum"].includes(n)?n:"";e.tracking&&(ga("send","pageview","/jsContent"+window.location.pathname),sendIvwData(r)),e.refreshAds&&"undefined"!=typeof ASCDP&&refreshAd()};window.tmTrackingAndAds=function(n,e){return TmTrackingAndAds(n,e)};
</script>
            <script>
            $(document).on('ready ajaxSuccess', function() {
                $(document).foundation();
            });
        </script>
                <script type="text/javascript">
	if(typeof(adet) == "boolean" && adet == false){
		img_src="/static/singlepictures/jk99hhfsdh209nbnkjldgh90sghfsdlk";
	} else {
		img_src="/static/singlepictures/jku90whjlkjbwbta1g4b8h89fh8sgh8d";
	}
	var elem = document.createElement("img");
	document.body.appendChild(elem);
	elem.src = img_src;
</script>


<script type="text/javascript" src="https://tmssl.akamaized.net/assets/aa69c6e9c51f1e811847082c63633956/gridview/jquery.yiigridview.js?lm=1613568701"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/libs/micromodal.min.js?lm=1613568692"></script>
<script type="text/javascript">
/*<![CDATA[*/
	function initCss() {
	}
	var aktuelleUrl = 'https://www.transfermarkt.com/sk-slavia-prague/kader/verein/62/saison_id/2020/plus/1'
	var loginUrl='/profil/login?referrer=https%3A%2F%2Fwww.transfermarkt.com%2Fsk-slavia-prague%2Fkader%2Fverein%2F62%2Fsaison_id%2F2020%2Fplus%2F1';
	var notificationUrl='/notifications/liste';
	var privateNachrichtenUrl = '/privateNachrichten/liste'
	var favoritenUrl = '/favoriten/userFavoriten'
	var favoritenHandleUrl = '/favoriten/handle'
	var favoritEntfernenText = 'delete_favourite'
	var favoritHinzufuegenText = 'add_favourite'
	var vereinUrl = '/verein/userbox';
	var boxOpen = false;
	var titleString='SK Slavia Prague - Detailed squad 20/21 (Detailed view) | Transfermarkt';
	var naviController = 'verein';
	var naviAction = 'kader';
	var naviPath = 'sk-slavia-prague/kader/verein/62/saison_id/2020/plus/1';
	var naviId = '62';
	var naviSaison = '2020';
	var onlyDE = '';
	var onlyMobile = '';
	var onlyTablet = '';
	var getUserID = '';

function ReloadPixelImages(typ) {
    if(typ == 'tabelle') {
        var iam_data = {
"st":"transfer",
"cp":"ausland_co.uk_r_t",
"oc":"co-uk_other",
"mg":"yes",
"sc":"yes",
"sv":"i2",
"co":""
}
iom.c(iam_data,1);

    }else if(typ == 'reiter') {
        var iam_data = {
"st":"transfer",
"cp":"ausland_co.uk_r_r",
"oc":"co-uk_other",
"mg":"yes",
"sv":"i2",
"sc":"yes",
"co":""
}
iom.c(iam_data,1);

    }else if(typ == 'forum') {
        var iam_data = {
"st":"transfer",
"cp":"ausland_co.uk_r_forum",
"oc":"co-uk_other",
"mg":"yes",
"sv":"i2",
"sc":"yes",
"co":""
}
iom.c(iam_data,1);

    }else {
        var iam_data = {
"st":"transfer",
"cp":"ausland_co.uk_r_s",
"oc":"co-uk_other",
"mg":"yes",
"sv":"i2",
"sc":"yes",
"co":""
}
iom.c(iam_data,1);

    }
    ga('send','pageview',"/jsContent" + window.location.pathname);
    if(typeof ASCDP.adS.reloadAds == 'function' && typ != '') {
        ASCDP.adS.reloadAds()
    }
}
function sendIvwData(typ) {
    if(typeof iom === 'object' && typeof iom.c === 'function') {
        if(typ == 'tabelle') {
            var iam_data = {
"st":"transfer",
"cp":"ausland_co.uk_r_t",
"oc":"co-uk_other",
"mg":"yes",
"sc":"yes",
"sv":"i2",
"co":""
}
iom.c(iam_data,1);

        }else if(typ == 'reiter') {
            var iam_data = {
"st":"transfer",
"cp":"ausland_co.uk_r_r",
"oc":"co-uk_other",
"mg":"yes",
"sv":"i2",
"sc":"yes",
"co":""
}
iom.c(iam_data,1);

        }else if(typ == 'forum') {
            var iam_data = {
"st":"transfer",
"cp":"ausland_co.uk_r_forum",
"oc":"co-uk_other",
"mg":"yes",
"sv":"i2",
"sc":"yes",
"co":""
}
iom.c(iam_data,1);

        }else {
            var iam_data = {
"st":"transfer",
"cp":"ausland_co.uk_r_s",
"oc":"co-uk_other",
"mg":"yes",
"sv":"i2",
"sc":"yes",
"co":""
}
iom.c(iam_data,1);

        }
    }
}
jQuery(function($) {
jQuery('#yw1').yiiGridView({'ajaxUpdate':['yw1'],'ajaxVar':'ajax','pagerClass':'pager','loadingClass':'grid\x2Dview\x2Dloading','filterClass':'filters','tableClass':'items','selectableRows':1,'enableHistory':false,'updateSelector':'\x7Bpage\x7D,\x20\x7Bsort\x7D','filterSelector':'\x7Bfilter\x7D'});

          $(".spielprofil_tooltip").tooltipster({'position':'right','arrowColor':'white','delay':'100','speed':0,'contentAsHTML':true,'interactive':true,'content':'\x0A\x09\x09\x09\x3Cimg\x20src\x3D\x22https\x3A\x2F\x2Ftmssl.akamaized.net\x2F\x2Fimages\x2Fspinner.gif\x22\x20style\x3D\x22vertical\x2Dalign\x3A\x20middle\x3B\x22\x20\x2F\x3E\x0A\x09\x09','functionBefore':function(origin, continueTooltip) { continueTooltip(); id_array = origin.context.id.split("/"); var spieler_id = id_array[0]; $.post( "/spieler/_profilTooltip", { spieler_id : spieler_id }, function(data) { if(data) { origin.tooltipster("update", data); } }); }});


          $(".vereinprofil_tooltip").tooltipster({'position':'right','arrowColor':'white','delay':'100','speed':0,'contentAsHTML':true,'interactive':true,'content':'\x0A\x09\x09\x09\x3Cimg\x20src\x3D\x22https\x3A\x2F\x2Ftmssl.akamaized.net\x2F\x2Fimages\x2Fspinner.gif\x22\x20style\x3D\x22vertical\x2Dalign\x3A\x20middle\x3B\x22\x20\x2F\x3E\x0A\x09\x09','functionBefore':function(origin, continueTooltip) { continueTooltip(); id_array = origin.context.id.split("/"); var verein_id = id_array[0]; $.post( "/verein/_profilTooltip", { verein_id : verein_id }, function(data) { if(data) { origin.tooltipster("update", data); } }); }});

});
/*]]>*/
</script>
</body>

</html>
`;

export const TEAM_DATA: SoccerBotResponse<SoccerBotPlayer[]> = {
  ok: true,
  data: [
    {
      id: '189630',
      name: 'Ondrej Kolar',
      jerseyNumber: 1,
      position: SoccerBotPositionGroup.GOALKEEPER,
      birthdate: '1994-10-17',
      height: 193,
      foot: SoccerBotFoot.RIGHT,
      joined: '2018-01-22',
      contractExpires: '2024-06-30',
      marketValue: 7500000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '260071',
      name: 'Jan Stejskal',
      jerseyNumber: 13,
      position: SoccerBotPositionGroup.GOALKEEPER,
      birthdate: '1997-02-14',
      height: 190,
      foot: undefined,
      joined: '2021-01-14',
      contractExpires: '2025-06-30',
      marketValue: 300000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '70625',
      name: 'Premysl Kovar',
      jerseyNumber: 31,
      position: SoccerBotPositionGroup.GOALKEEPER,
      birthdate: '1985-10-14',
      height: 187,
      foot: SoccerBotFoot.RIGHT,
      joined: '2017-01-01',
      contractExpires: '2021-06-30',
      marketValue: 100000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '234124',
      name: 'Simon Deli',
      jerseyNumber: 4,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '1991-10-27',
      height: 192,
      foot: SoccerBotFoot.LEFT,
      joined: '2021-02-01',
      contractExpires: '2021-06-30',
      marketValue: 5000000,
      country: SoccerBotCountry.IVORY_COAST
    },
    {
      id: '544149',
      name: 'David Zima',
      jerseyNumber: 6,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '2000-11-08',
      height: 190,
      foot: undefined,
      joined: '2020-08-03',
      contractExpires: '2024-06-30',
      marketValue: 3000000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '263431',
      name: 'David Hovorka',
      jerseyNumber: 2,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '1993-08-07',
      height: 179,
      foot: SoccerBotFoot.RIGHT,
      joined: '2019-07-01',
      contractExpires: '2023-06-30',
      marketValue: 2000000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '35699',
      name: 'Ondrej Kudela',
      jerseyNumber: 15,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '1987-03-26',
      height: 182,
      foot: SoccerBotFoot.RIGHT,
      joined: '2018-01-19',
      contractExpires: '2022-06-30',
      marketValue: 1600000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '213975',
      name: 'Taras Kacharaba',
      jerseyNumber: 30,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '1995-01-07',
      height: 189,
      foot: SoccerBotFoot.RIGHT,
      joined: '2021-01-06',
      contractExpires: '2021-06-30',
      marketValue: 800000,
      country: SoccerBotCountry.UKRAINE
    },
    {
      id: '129655',
      name: 'Jan Boril',
      jerseyNumber: 18,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '1991-01-11',
      height: 175,
      foot: SoccerBotFoot.RIGHT,
      joined: '2016-01-07',
      contractExpires: '2023-06-30',
      marketValue: 2500000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '452607',
      name: 'Alexander Bah',
      jerseyNumber: 5,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '1997-12-09',
      height: 183,
      foot: SoccerBotFoot.RIGHT,
      joined: '2021-01-05',
      contractExpires: '2025-06-30',
      marketValue: 2500000,
      country: SoccerBotCountry.DENMARK
    },
    {
      id: '216278',
      name: 'Tomas Holes',
      jerseyNumber: 3,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '1993-03-31',
      height: 180,
      foot: undefined,
      joined: '2019-07-01',
      contractExpires: '2023-06-30',
      marketValue: 1500000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '186380',
      name: 'Jakub Hromada',
      jerseyNumber: 25,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1996-05-25',
      height: 180,
      foot: SoccerBotFoot.RIGHT,
      joined: '2017-07-01',
      contractExpires: '2023-06-30',
      marketValue: 650000,
      country: SoccerBotCountry.SLOVAKIA
    },
    {
      id: '147555',
      name: 'Petr Sevcik',
      jerseyNumber: 23,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1994-05-04',
      height: 172,
      foot: SoccerBotFoot.RIGHT,
      joined: '2019-01-01',
      contractExpires: '2022-06-30',
      marketValue: 3500000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '179236',
      name: 'Ibrahim Traoré',
      jerseyNumber: 27,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1988-09-16',
      height: 187,
      foot: SoccerBotFoot.RIGHT,
      joined: '2019-01-01',
      contractExpires: '2022-06-30',
      marketValue: 1400000,
      country: SoccerBotCountry.IVORY_COAST
    },
    {
      id: '234153',
      name: 'Lukas Masopust',
      jerseyNumber: 28,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1993-02-12',
      height: 179,
      foot: SoccerBotFoot.RIGHT,
      joined: '2019-01-01',
      contractExpires: '2023-06-30',
      marketValue: 3500000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '401475',
      name: 'Oscar Dorley',
      jerseyNumber: 19,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1998-07-19',
      height: 174,
      foot: SoccerBotFoot.LEFT,
      joined: '2019-08-11',
      contractExpires: '2023-06-30',
      marketValue: 2000000,
      country: SoccerBotCountry.LIBERIA
    },
    {
      id: '148372',
      name: 'Nicolae Stanciu',
      jerseyNumber: 7,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1993-05-07',
      height: 169,
      foot: SoccerBotFoot.RIGHT,
      joined: '2019-07-04',
      contractExpires: '2023-06-30',
      marketValue: 4500000,
      country: SoccerBotCountry.ROMANIA
    },
    {
      id: '321195',
      name: 'Ondrej Lingr',
      jerseyNumber: 32,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1998-10-07',
      height: 175,
      foot: undefined,
      joined: '2020-08-06',
      contractExpires: '2024-06-30',
      marketValue: 1000000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '664456',
      name: 'Michal Beran',
      jerseyNumber: 20,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '2000-08-22',
      height: 167,
      foot: undefined,
      joined: '2020-08-03',
      contractExpires: '2024-06-30',
      marketValue: 300000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '248393',
      name: 'Peter Olayinka',
      jerseyNumber: 9,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '1995-11-16',
      height: 188,
      foot: SoccerBotFoot.RIGHT,
      joined: '2018-07-21',
      contractExpires: '2023-06-30',
      marketValue: 6000000,
      country: SoccerBotCountry.NIGERIA
    },
    {
      id: '292779',
      name: 'Lukas Provod',
      jerseyNumber: 17,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '1996-10-23',
      height: 189,
      foot: SoccerBotFoot.LEFT,
      joined: '2020-01-01',
      contractExpires: '2024-06-30',
      marketValue: 1500000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '189053',
      name: 'Mick van Buren',
      jerseyNumber: 14,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '1992-08-24',
      height: 184,
      foot: SoccerBotFoot.RIGHT,
      joined: '2016-07-01',
      contractExpires: '2021-06-30',
      marketValue: 600000,
      country: SoccerBotCountry.NETHERLANDS
    },
    {
      id: '776798',
      name: 'Abdallah Sima',
      jerseyNumber: 12,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '2001-06-17',
      height: 188,
      foot: SoccerBotFoot.RIGHT,
      joined: '2020-10-01',
      contractExpires: '2023-06-30',
      marketValue: 8000000,
      country: SoccerBotCountry.SENEGAL
    },
    {
      id: '334802',
      name: 'Jan Kuchta',
      jerseyNumber: 16,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '1997-01-08',
      height: 184,
      foot: SoccerBotFoot.RIGHT,
      joined: '2020-08-03',
      contractExpires: '2024-06-30',
      marketValue: 1000000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '81390',
      name: 'Stanislav Tecl',
      jerseyNumber: 11,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '1990-09-01',
      height: 181,
      foot: SoccerBotFoot.RIGHT,
      joined: '2017-01-24',
      contractExpires: '2023-06-30',
      marketValue: 900000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '351181',
      name: 'Yusuf',
      jerseyNumber: 29,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '1993-06-12',
      height: 194,
      foot: undefined,
      joined: '2019-01-03',
      contractExpires: '2022-06-30',
      marketValue: 600000,
      country: SoccerBotCountry.BAHRAIN
    }
  ]
};
