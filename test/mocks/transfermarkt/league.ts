import { SoccerBotResponse, SoccerBotTeam } from "../../../lib/shared";

export const LEAGUE_HTML = `
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
                    <script type="text/javascript">//RWGzztV("skyscraper")</script>

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
    default-club=""
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
        <div class="row" id="wettbewerb_head">
    <div class="large-12 columns">
        <div class="box">
            <div class="box-header">
                <h1 class="spielername-profil">Fortuna Liga</h1>
                <div class="hide-for-small icons-profil">
                    <div class="flagge">
                                                    <a href="/wettbewerbe/national/wettbewerbe/172">
                                <img src="https://tmssl.akamaized.net/images/flagge/small/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" />                            </a>
                                                </div>
                </div>
            </div>
            <div class="box-content">
                <div class="headerfoto">
                    <img src="https://tmssl.akamaized.net/images/logo/normal/ts1.png?lm=1547491735" title="Fortuna Liga" alt="Fortuna Liga" class="" />                </div>
                <div class="box-personeninfos">
                    <div class="list">
                        <table class="profilheader">
                            <tr>
                                <th>League level:</th>
                                <td>
                                    First Tier&nbsp;-&nbsp;<img src="https://tmssl.akamaized.net/images/flagge/tiny/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="miniflagge" />&nbsp;Czech Republic                                </td>
                            </tr>

                            <tr>
                                <th>Number of teams:</th>
                                <td>
                                    18 teams                                </td>
                            </tr>
                            <tr>
                                <th>Players:</th>
                                <td>
                                    478                                </td>
                            </tr>
                            <tr>
                                <th>Foreigners:</th>
                                <td>
                                    <a href="/fortuna-liga/gastarbeiter/wettbewerb/TS1">123&nbsp;Players</a>&nbsp;&nbsp;<span class="tabellenplatz">25.7%</span>                                </td>
                            </tr>
                                                            <tr>
                                    <th>&oslash;-Market value:</th>
                                    <td>
                                        €524Th.                                    </td>
                                </tr>
                                                        </table>
                    </div>
                    <div class="list">
                        <table class="profilheader">
                                                            <tr>
                                    <th>UEFA coefficient:</th>
                                    <td>
                                        <a href="/uefa/5jahreswertung/statistik">20. Pos.</a>&nbsp;&nbsp;<span class="tabellenplatz">25.600 </span><span class="tabellenplatz">Points</span>                                    </td>
                                </tr>
                                                                <tr>
                                    <th>Record-holding champions:</th>
                                    <td>
                                        <a title="AC Sparta Prague" href="/ac-sparta-prague/startseite/verein/197">AC Sparta Prague</a>&nbsp;&nbsp;<span class="tabellenplatz">12&nbsp;</span><span class="tabellenplatz">time(s)</span>                                    </td>
                                </tr>
                                                            <tr>
                                <th>
                                                                            &oslash;-Age:
                                                                        </th>
                                <td>
                                    26.4                                </td>
                            </tr>
                                                            <tr>
                                    <th>Reigning champion:</th>
                                    <td>
                                        <a title="SK Slavia Prague" href="/sk-slavia-prague/startseite/verein/62">SK Slavia Prague</a>                                    </td>
                                </tr>
                                                                <tr>
                                    <th>Most valuable player:</th>
                                    <td>
                                        <a title="Adam Hlozek" class="spielprofil_tooltip" id="552057" href="/adam-hlozek/profil/spieler/552057">Adam Hlozek</a>&nbsp;&nbsp;<span class="tabellenplatz">€12.00m</span>                                    </td>
                                </tr>
                                                        </table>
                    </div>
                </div>
                                    <div class="marktwert">
                        Total Market Value:<br /><span><a href=""><span class="waehrung">€</span>250.50<span class="waehrung">m</span></a></span>                    </div>
                                </div>
        </div>
    </div>
</div>
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
                                                                <li id="overview" data-name="overview" class="first-button aktiv ">
                                        <a name="SubNavi" href="/gambrinus-liga/startseite/wettbewerb/TS1/saison_id/2020" class="megamenu" onClick="ga('send','event','subnavigation_wettbewerb','click','title_uebersicht');
">Overview</a>
                                                                            </li>
                                                                        <li id="tables" data-name="tables" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="megamenu_drop" onClick="ga('send','event','subnavigation_wettbewerb','click','tabellen');
">Tables</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="/images/bx_loader.gif" /></div></div>                                    </li>
                                                                        <li id="transfers" data-name="transfers" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="megamenu_drop" onClick="ga('send','event','subnavigation_wettbewerb','click','title_transfers');
">Transfers</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="/images/bx_loader.gif" /></div></div>                                    </li>
                                                                        <li id="market-values" data-name="market-values" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="megamenu_drop" onClick="ga('send','event','subnavigation_wettbewerb','click','title_marktwerte');
">Market Values</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="/images/bx_loader.gif" /></div></div>                                    </li>
                                                                        <li id="players" data-name="players" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="megamenu_drop" onClick="ga('send','event','subnavigation_wettbewerb','click','title_spieler');
">Players</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="/images/bx_loader.gif" /></div></div>                                    </li>
                                                                        <li id="clubs" data-name="clubs" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="megamenu_drop" onClick="ga('send','event','subnavigation_wettbewerb','click','title_vereine');
">Clubs</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="/images/bx_loader.gif" /></div></div>                                    </li>
                                                                        <li id="information-amp-facts" data-name="information-amp-facts" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="megamenu_drop" onClick="ga('send','event','subnavigation_wettbewerb','click','daten_und_fakten');
">Information & facts</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="/images/bx_loader.gif" /></div></div>                                    </li>
                                                                        <li id="history" data-name="history" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="megamenu_drop" onClick="ga('send','event','subnavigation_wettbewerb','click','title_historie');
">History</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="/images/bx_loader.gif" /></div></div>                                    </li>
                                                                        <li id="news" data-name="news" class="  ">
                                        <a name="SubNavi" href="/gambrinus-liga/news/wettbewerb/TS1" class="megamenu" onClick="ga('send','event','subnavigation_wettbewerb','click','title_news');
">News</a>
                                                                            </li>
                                                                        <li id="" data-name="subnavi-edit" class="  subnavi-edit">
                                        <a name="SubNavi" href="#subnavi" class="megamenu_drop" onClick="ga('send','event','subnavigation_wettbewerb','click','edit');
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

    <div id="wettbewerbsstartseite" class="row wettbewerbsstartseite">
    <div class="large-8 columns">
		<div class="box">
    <div class="table-header">
        <h2>Info</h2>
        <div class="header-social">

<div class="teilen-desktop-link" name="teilen-desktop" onClick="ga('send','event','teilen-desktop','click','teilen');
">
    <ul>
                <li><a href="mailto:?to=&subject=Startpage&body=https%3A%2F%2Fwww.transfermarkt.com%2Fslug%2Fstartseite%2Fwettbewerb%2FTS1" class="MailToLink" name="teilen-mail-desktop" onClick="ga('send','event','teilen-mail-desktop','click','teilen');
"><img src="https://tmsi.akamaized.net/icons/mail-schwarz.svg" alt="Mail" /></a></li>
        <li><a href="https://twitter.com/share?url=https%3A%2F%2Fwww.transfermarkt.com%2Fslug%2Fstartseite%2Fwettbewerb%2FTS1&text=Startpage" target="_blank" class="TwitterLink" name="teilen-twitter-desktop" onClick="ga('send','event','teilen-twitter-desktop','click','teilen');
"><img src="https://tmsi.akamaized.net/icons/Twitter-Blau.svg" alt="Twitter" /></a></li>
        <li><a href="http://www.facebook.com/share.php?u=https%3A%2F%2Fwww.transfermarkt.com%2Fslug%2Fstartseite%2Fwettbewerb%2FTS1" target="_blank" class="FacebookLink" name="teilen-facebook-desktop" onClick="ga('send','event','teilen-facebook-desktop','click','teilen');
"><img src="https://tmsi.akamaized.net/icons/Facebook-Blau.svg" alt="Facebook" /></a></li>
    </ul>
</div>        </div>
    </div>
    <p class="info-content">
        Competition startpage    </p>
    <div class="content">
        <form action="/fortuna-liga/startseite/wettbewerb/TS1/plus/" method="get">        <div class="row">
            <div class="large-12 columns">
                <table class="auflistung">
                    <tbody>
                    <tr>
                        <td>Filter by season:</td>
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
                                                                        </select>
                            </div>
                        </td>
                        <td>
                            <input type="submit" class="small button"
                                   value="Show">
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </form>
    </div>
</div>
<div class="box">
    <h2 class="table-header">Clubs - Fortuna Liga 20/21</h2>

    <div class="show-for-small show-for-pad">
<div class="kartei-button-bar">
    <a href="/fortuna-liga/startseite/wettbewerb/TS1/saison_id/2020"><div class="kartei-button kartei-number-1 active-kartei"><span class="kartei-button-body">Compact</span></div></a><a href="/fortuna-liga/startseite/wettbewerb/TS1/saison_id/2020/plus/1"><div class="kartei-button second-kartei kartei-number-2"><span class="kartei-button-body">Detailed</span></div></a></div>
</div>
    <div class="responsive-table">
        <div id="yw1" class="grid-view">
<div class="summary"></div>
<table class="items">
<thead>
<tr>
<th colspan="2" id="yw1_c0">club</th><th class="hide" id="yw1_c1"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/name">name</a></th><th class="hide" id="yw1_c2"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/name">name</a></th><th class="zentriert" id="yw1_c3"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/anzahl_spieler_hidden.desc">Squad</a></th><th class="zentriert hide-for-small hide-for-pad" id="yw1_c4"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/alter_durchschnitt.desc">&oslash; age</a></th><th class="zentriert hide-for-pad hide-for-small" id="yw1_c5"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/legionaere.desc">Foreigners</a></th><th class="rechts hide-for-small hide-for-pad" id="yw1_c6"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/marktwert_gesamt_anzeige.desc">Total market value</a></th><th class="rechts hide-for-small hide-for-pad" id="yw1_c7"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/marktwert_schnitt_anzeige.desc">&oslash; market value</a></th><th class="rechts show-for-small show-for-pad nowrap" id="yw1_c8"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/marktwert_gesamt_anzeige.desc">Total MV</a></th><th class="rechts show-for-small show-for-pad nowrap" id="yw1_c9"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/marktwert_schnitt_anzeige.desc">&oslash; MV</a></th></tr>
</thead>
<tfoot>
<tr>
<td colspan="2">&nbsp;</td><td class="hide">&nbsp;</td><td class="hide">&nbsp;</td><td class="zentriert">478</td><td class="zentriert hide-for-small hide-for-pad">26.4 Years</td><td class="zentriert hide-for-pad hide-for-small">123</td><td class="rechts hide-for-small hide-for-pad">€250.50m</td><td class="rechts hide-for-small hide-for-pad">€524Th.</td><td class="rechts show-for-small show-for-pad nowrap">€250.50m</td><td class="rechts show-for-small show-for-pad nowrap">€524Th.</td></tr>
</tfoot>
<tbody>
<tr class="odd">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/sk-slavia-prag/startseite/verein/62/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/62.png?lm=1419784643" title=" " alt="SK Slavia Prague" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/startseite/verein/62/saison_id/2020">SK Slavia Prague</a> <a href="#"><img src="https://tmssl.akamaized.net/images/erfolge/mini/21.png?lm=1461847499" title="Czech Champion 19/20" alt="Czech Champion 19/20" class="tabelle-erfolg" /></a></td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/startseite/verein/62/saison_id/2020">Slavia Prague</a></td><td class="zentriert"><a title="SK Slavia Prague" href="/sk-slavia-prague/kader/verein/62/saison_id/2020">26</a></td><td class="zentriert hide-for-small hide-for-pad">26.6</td><td class="zentriert hide-for-pad hide-for-small">11</td><td class="rechts hide-for-small hide-for-pad"><a title="SK Slavia Prague" href="/sk-slavia-prague/kader/verein/62/saison_id/2020">€62.25m</a></td><td class="rechts hide-for-small hide-for-pad">€2.39m</td><td class="rechts show-for-small show-for-pad nowrap"><a title="SK Slavia Prague" href="/sk-slavia-prague/kader/verein/62/saison_id/2020">€62.25m</a></td><td class="rechts show-for-small show-for-pad nowrap">€2.39m</td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/ac-sparta-prag/startseite/verein/197/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/197.png?lm=1474921587" title=" " alt="AC Sparta Prague" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="197" href="/ac-sparta-prag/startseite/verein/197/saison_id/2020">AC Sparta Prague</a> <a href="#"><img src="https://tmssl.akamaized.net/images/erfolge/mini/341.png?lm=1461847499" title="Czech Cup Winner 19/20" alt="Czech Cup Winner 19/20" class="tabelle-erfolg" /></a></td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="197" href="/ac-sparta-prag/startseite/verein/197/saison_id/2020">Sparta Prague</a></td><td class="zentriert"><a title="AC Sparta Prague" href="/ac-sparta-prague/kader/verein/197/saison_id/2020">28</a></td><td class="zentriert hide-for-small hide-for-pad">25.6</td><td class="zentriert hide-for-pad hide-for-small">7</td><td class="rechts hide-for-small hide-for-pad"><a title="AC Sparta Prague" href="/ac-sparta-prague/kader/verein/197/saison_id/2020">€41.90m</a></td><td class="rechts hide-for-small hide-for-pad">€1.50m</td><td class="rechts show-for-small show-for-pad nowrap"><a title="AC Sparta Prague" href="/ac-sparta-prague/kader/verein/197/saison_id/2020">€41.90m</a></td><td class="rechts show-for-small show-for-pad nowrap">€1.50m</td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/fc-viktoria-pilsen/startseite/verein/941/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/941.png?lm=1571347012" title=" " alt="FC Viktoria Plzen" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="941" href="/fc-viktoria-pilsen/startseite/verein/941/saison_id/2020">FC Viktoria Plzen</a> </td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="941" href="/fc-viktoria-pilsen/startseite/verein/941/saison_id/2020">Viktoria Plzen</a></td><td class="zentriert"><a title="FC Viktoria Plzen" href="/fc-viktoria-plzen/kader/verein/941/saison_id/2020">24</a></td><td class="zentriert hide-for-small hide-for-pad">27.9</td><td class="zentriert hide-for-pad hide-for-small">4</td><td class="rechts hide-for-small hide-for-pad"><a title="FC Viktoria Plzen" href="/fc-viktoria-plzen/kader/verein/941/saison_id/2020">€24.60m</a></td><td class="rechts hide-for-small hide-for-pad">€1.03m</td><td class="rechts show-for-small show-for-pad nowrap"><a title="FC Viktoria Plzen" href="/fc-viktoria-plzen/kader/verein/941/saison_id/2020">€24.60m</a></td><td class="rechts show-for-small show-for-pad nowrap">€1.03m</td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/5546.png?lm=1419784887" title=" " alt="FK Mladá Boleslav" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="5546" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2020">FK Mladá Boleslav</a> </td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="5546" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2020">Mladá Boleslav</a></td><td class="zentriert"><a title="FK Mladá Boleslav" href="/fk-mlada-boleslav/kader/verein/5546/saison_id/2020">29</a></td><td class="zentriert hide-for-small hide-for-pad">25.9</td><td class="zentriert hide-for-pad hide-for-small">2</td><td class="rechts hide-for-small hide-for-pad"><a title="FK Mladá Boleslav" href="/fk-mlada-boleslav/kader/verein/5546/saison_id/2020">€12.98m</a></td><td class="rechts hide-for-small hide-for-pad">€447Th.</td><td class="rechts show-for-small show-for-pad nowrap"><a title="FK Mladá Boleslav" href="/fk-mlada-boleslav/kader/verein/5546/saison_id/2020">€12.98m</a></td><td class="rechts show-for-small show-for-pad nowrap">€447Th.</td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/697.png?lm=1419784849" title=" " alt="FC Slovan Liberec" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2020">FC Slovan Liberec</a> </td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2020">Slovan Liberec</a></td><td class="zentriert"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/kader/verein/697/saison_id/2020">26</a></td><td class="zentriert hide-for-small hide-for-pad">24.7</td><td class="zentriert hide-for-pad hide-for-small">10</td><td class="rechts hide-for-small hide-for-pad"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/kader/verein/697/saison_id/2020">€12.13m</a></td><td class="rechts hide-for-small hide-for-pad">€466Th.</td><td class="rechts show-for-small show-for-pad nowrap"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/kader/verein/697/saison_id/2020">€12.13m</a></td><td class="rechts show-for-small show-for-pad nowrap">€466Th.</td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/fk-jablonec/startseite/verein/1322/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/1322.png?lm=1551278724" title=" " alt="FK Jablonec" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/startseite/verein/1322/saison_id/2020">FK Jablonec</a> </td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/startseite/verein/1322/saison_id/2020">FK Jablonec</a></td><td class="zentriert"><a title="FK Jablonec" href="/fk-jablonec/kader/verein/1322/saison_id/2020">22</a></td><td class="zentriert hide-for-small hide-for-pad">28.0</td><td class="zentriert hide-for-pad hide-for-small">3</td><td class="rechts hide-for-small hide-for-pad"><a title="FK Jablonec" href="/fk-jablonec/kader/verein/1322/saison_id/2020">€9.90m</a></td><td class="rechts hide-for-small hide-for-pad">€450Th.</td><td class="rechts show-for-small show-for-pad nowrap"><a title="FK Jablonec" href="/fk-jablonec/kader/verein/1322/saison_id/2020">€9.90m</a></td><td class="rechts show-for-small show-for-pad nowrap">€450Th.</td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/fc-banik-ostrava/startseite/verein/377/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/377.png?lm=1419584907" title=" " alt="FC Banik Ostrava" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="377" href="/fc-banik-ostrava/startseite/verein/377/saison_id/2020">FC Banik Ostrava</a> </td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="377" href="/fc-banik-ostrava/startseite/verein/377/saison_id/2020">Banik Ostrava</a></td><td class="zentriert"><a title="FC Banik Ostrava" href="/fc-banik-ostrava/kader/verein/377/saison_id/2020">24</a></td><td class="zentriert hide-for-small hide-for-pad">26.4</td><td class="zentriert hide-for-pad hide-for-small">7</td><td class="rechts hide-for-small hide-for-pad"><a title="FC Banik Ostrava" href="/fc-banik-ostrava/kader/verein/377/saison_id/2020">€9.33m</a></td><td class="rechts hide-for-small hide-for-pad">€389Th.</td><td class="rechts show-for-small show-for-pad nowrap"><a title="FC Banik Ostrava" href="/fc-banik-ostrava/kader/verein/377/saison_id/2020">€9.33m</a></td><td class="rechts show-for-small show-for-pad nowrap">€389Th.</td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/fc-bohemians-prag-1905/startseite/verein/715/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/715.png?lm=1547322604" title=" " alt="FC Bohemians Prag 1905" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="715" href="/fc-bohemians-prag-1905/startseite/verein/715/saison_id/2020">FC Bohemians Prag 1905</a> </td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="715" href="/fc-bohemians-prag-1905/startseite/verein/715/saison_id/2020">Bohemians 1905</a></td><td class="zentriert"><a title="FC Bohemians Prag 1905" href="/fc-bohemians-prag-1905/kader/verein/715/saison_id/2020">28</a></td><td class="zentriert hide-for-small hide-for-pad">26.4</td><td class="zentriert hide-for-pad hide-for-small">5</td><td class="rechts hide-for-small hide-for-pad"><a title="FC Bohemians Prag 1905" href="/fc-bohemians-prag-1905/kader/verein/715/saison_id/2020">€8.43m</a></td><td class="rechts hide-for-small hide-for-pad">€301Th.</td><td class="rechts show-for-small show-for-pad nowrap"><a title="FC Bohemians Prag 1905" href="/fc-bohemians-prag-1905/kader/verein/715/saison_id/2020">€8.43m</a></td><td class="rechts show-for-small show-for-pad nowrap">€301Th.</td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/sk-sigma-olmutz/startseite/verein/2311/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/2311.png?lm=1419785397" title=" " alt="SK Sigma Olomouc" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="2311" href="/sk-sigma-olmutz/startseite/verein/2311/saison_id/2020">SK Sigma Olomouc</a> </td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="2311" href="/sk-sigma-olmutz/startseite/verein/2311/saison_id/2020">Sigma Olomouc</a></td><td class="zentriert"><a title="SK Sigma Olomouc" href="/sk-sigma-olomouc/kader/verein/2311/saison_id/2020">29</a></td><td class="zentriert hide-for-small hide-for-pad">26.7</td><td class="zentriert hide-for-pad hide-for-small">7</td><td class="rechts hide-for-small hide-for-pad"><a title="SK Sigma Olomouc" href="/sk-sigma-olomouc/kader/verein/2311/saison_id/2020">€8.30m</a></td><td class="rechts hide-for-small hide-for-pad">€286Th.</td><td class="rechts show-for-small show-for-pad nowrap"><a title="SK Sigma Olomouc" href="/sk-sigma-olomouc/kader/verein/2311/saison_id/2020">€8.30m</a></td><td class="rechts show-for-small show-for-pad nowrap">€286Th.</td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/fc-zbrojovka-brunn/startseite/verein/5225/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/5225.png?lm=1419785332" title=" " alt="FC Zbrojovka Brno" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="5225" href="/fc-zbrojovka-brunn/startseite/verein/5225/saison_id/2020">FC Zbrojovka Brno</a> <span title="Promoted to 1st league 19/20" class="icons_sprite icon-aufsteiger">&nbsp;</span></td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="5225" href="/fc-zbrojovka-brunn/startseite/verein/5225/saison_id/2020">Zbrojovka Brno</a></td><td class="zentriert"><a title="FC Zbrojovka Brno" href="/fc-zbrojovka-brno/kader/verein/5225/saison_id/2020">29</a></td><td class="zentriert hide-for-small hide-for-pad">26.7</td><td class="zentriert hide-for-pad hide-for-small">5</td><td class="rechts hide-for-small hide-for-pad"><a title="FC Zbrojovka Brno" href="/fc-zbrojovka-brno/kader/verein/5225/saison_id/2020">€7.95m</a></td><td class="rechts hide-for-small hide-for-pad">€274Th.</td><td class="rechts show-for-small show-for-pad nowrap"><a title="FC Zbrojovka Brno" href="/fc-zbrojovka-brno/kader/verein/5225/saison_id/2020">€7.95m</a></td><td class="rechts show-for-small show-for-pad nowrap">€274Th.</td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/fc-tescoma-zlin/startseite/verein/5545/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/5545.png?lm=1419785784" title=" " alt="FC FASTAV Zlin" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="5545" href="/fc-tescoma-zlin/startseite/verein/5545/saison_id/2020">FC FASTAV Zlin</a> </td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="5545" href="/fc-tescoma-zlin/startseite/verein/5545/saison_id/2020">FC Zlin</a></td><td class="zentriert"><a title="FC FASTAV Zlin" href="/fc-fastav-zlin/kader/verein/5545/saison_id/2020">25</a></td><td class="zentriert hide-for-small hide-for-pad">27.1</td><td class="zentriert hide-for-pad hide-for-small">10</td><td class="rechts hide-for-small hide-for-pad"><a title="FC FASTAV Zlin" href="/fc-fastav-zlin/kader/verein/5545/saison_id/2020">€7.88m</a></td><td class="rechts hide-for-small hide-for-pad">€315Th.</td><td class="rechts show-for-small show-for-pad nowrap"><a title="FC FASTAV Zlin" href="/fc-fastav-zlin/kader/verein/5545/saison_id/2020">€7.88m</a></td><td class="rechts show-for-small show-for-pad nowrap">€315Th.</td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/fk-teplice/startseite/verein/814/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/814.png?lm=1419784933" title=" " alt="FK Teplice" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="814" href="/fk-teplice/startseite/verein/814/saison_id/2020">FK Teplice</a> </td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="814" href="/fk-teplice/startseite/verein/814/saison_id/2020">FK Teplice</a></td><td class="zentriert"><a title="FK Teplice" href="/fk-teplice/kader/verein/814/saison_id/2020">27</a></td><td class="zentriert hide-for-small hide-for-pad">26.6</td><td class="zentriert hide-for-pad hide-for-small">3</td><td class="rechts hide-for-small hide-for-pad"><a title="FK Teplice" href="/fk-teplice/kader/verein/814/saison_id/2020">€7.23m</a></td><td class="rechts hide-for-small hide-for-pad">€268Th.</td><td class="rechts show-for-small show-for-pad nowrap"><a title="FK Teplice" href="/fk-teplice/kader/verein/814/saison_id/2020">€7.23m</a></td><td class="rechts show-for-small show-for-pad nowrap">€268Th.</td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/fk-pardubice/startseite/verein/1496/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/1496.png?lm=1419786179" title=" " alt="FK Pardubice" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="1496" href="/fk-pardubice/startseite/verein/1496/saison_id/2020">FK Pardubice</a> <span title="Promoted to 1st league 19/20" class="icons_sprite icon-aufsteiger">&nbsp;</span></td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="1496" href="/fk-pardubice/startseite/verein/1496/saison_id/2020">FK Pardubice</a></td><td class="zentriert"><a title="FK Pardubice" href="/fk-pardubice/kader/verein/1496/saison_id/2020">28</a></td><td class="zentriert hide-for-small hide-for-pad">24.3</td><td class="zentriert hide-for-pad hide-for-small">3</td><td class="rechts hide-for-small hide-for-pad"><a title="FK Pardubice" href="/fk-pardubice/kader/verein/1496/saison_id/2020">€6.63m</a></td><td class="rechts hide-for-small hide-for-pad">€237Th.</td><td class="rechts show-for-small show-for-pad nowrap"><a title="FK Pardubice" href="/fk-pardubice/kader/verein/1496/saison_id/2020">€6.63m</a></td><td class="rechts show-for-small show-for-pad nowrap">€237Th.</td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/1-fc-slovacko/startseite/verein/5544/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/5544.png?lm=1419785239" title=" " alt="1.FC Slovácko" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="5544" href="/1-fc-slovacko/startseite/verein/5544/saison_id/2020">1.FC Slovácko</a> </td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="5544" href="/1-fc-slovacko/startseite/verein/5544/saison_id/2020">Slovácko</a></td><td class="zentriert"><a title="1.FC Slovácko" href="/1-fc-slovacko/kader/verein/5544/saison_id/2020">23</a></td><td class="zentriert hide-for-small hide-for-pad">27.3</td><td class="zentriert hide-for-pad hide-for-small">5</td><td class="rechts hide-for-small hide-for-pad"><a title="1.FC Slovácko" href="/1-fc-slovacko/kader/verein/5544/saison_id/2020">€6.60m</a></td><td class="rechts hide-for-small hide-for-pad">€287Th.</td><td class="rechts show-for-small show-for-pad nowrap"><a title="1.FC Slovácko" href="/1-fc-slovacko/kader/verein/5544/saison_id/2020">€6.60m</a></td><td class="rechts show-for-small show-for-pad nowrap">€287Th.</td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/sk-dynamo-ceske-budejovice/startseite/verein/1321/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/1321.png?lm=1419785284" title=" " alt="SK Dynamo Ceske Budejovice" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="1321" href="/sk-dynamo-ceske-budejovice/startseite/verein/1321/saison_id/2020">SK Dynamo Ceske Budejovice</a> </td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="1321" href="/sk-dynamo-ceske-budejovice/startseite/verein/1321/saison_id/2020">C. Budejovice</a></td><td class="zentriert"><a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/kader/verein/1321/saison_id/2020">23</a></td><td class="zentriert hide-for-small hide-for-pad">27.2</td><td class="zentriert hide-for-pad hide-for-small">10</td><td class="rechts hide-for-small hide-for-pad"><a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/kader/verein/1321/saison_id/2020">€6.55m</a></td><td class="rechts hide-for-small hide-for-pad">€285Th.</td><td class="rechts show-for-small show-for-pad nowrap"><a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/kader/verein/1321/saison_id/2020">€6.55m</a></td><td class="rechts show-for-small show-for-pad nowrap">€285Th.</td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/mfk-karvina/startseite/verein/13726/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/13726.png?lm=1419785681" title=" " alt="MFK Karvina" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="13726" href="/mfk-karvina/startseite/verein/13726/saison_id/2020">MFK Karvina</a> </td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="13726" href="/mfk-karvina/startseite/verein/13726/saison_id/2020">MFK Karvina</a></td><td class="zentriert"><a title="MFK Karvina" href="/mfk-karvina/kader/verein/13726/saison_id/2020">26</a></td><td class="zentriert hide-for-small hide-for-pad">25.9</td><td class="zentriert hide-for-pad hide-for-small">14</td><td class="rechts hide-for-small hide-for-pad"><a title="MFK Karvina" href="/mfk-karvina/kader/verein/13726/saison_id/2020">€6.50m</a></td><td class="rechts hide-for-small hide-for-pad">€250Th.</td><td class="rechts show-for-small show-for-pad nowrap"><a title="MFK Karvina" href="/mfk-karvina/kader/verein/13726/saison_id/2020">€6.50m</a></td><td class="rechts show-for-small show-for-pad nowrap">€250Th.</td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/1-fk-pribram/startseite/verein/2598/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/2598.png?lm=1445329831" title=" " alt="1.FK Pribram" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="2598" href="/1-fk-pribram/startseite/verein/2598/saison_id/2020">1.FK Pribram</a> </td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="2598" href="/1-fk-pribram/startseite/verein/2598/saison_id/2020">1.FK Pribram</a></td><td class="zentriert"><a title="1.FK Pribram" href="/1-fk-pribram/kader/verein/2598/saison_id/2020">30</a></td><td class="zentriert hide-for-small hide-for-pad">26.4</td><td class="zentriert hide-for-pad hide-for-small">9</td><td class="rechts hide-for-small hide-for-pad"><a title="1.FK Pribram" href="/1-fk-pribram/kader/verein/2598/saison_id/2020">€5.58m</a></td><td class="rechts hide-for-small hide-for-pad">€186Th.</td><td class="rechts show-for-small show-for-pad nowrap"><a title="1.FK Pribram" href="/1-fk-pribram/kader/verein/2598/saison_id/2020">€5.58m</a></td><td class="rechts show-for-small show-for-pad nowrap">€186Th.</td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" href="/slezsky-fc-opava/startseite/verein/479/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/479.png?lm=1419786232" title=" " alt="Slezsky FC Opava" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links hide-for-small hide-for-pad"><a class="vereinprofil_tooltip" id="479" href="/slezsky-fc-opava/startseite/verein/479/saison_id/2020">Slezsky FC Opava</a> </td><td class="hauptlink no-border-links show-for-small show-for-pad"><a class="vereinprofil_tooltip" id="479" href="/slezsky-fc-opava/startseite/verein/479/saison_id/2020">SFC Opava</a></td><td class="zentriert"><a title="Slezsky FC Opava" href="/slezsky-fc-opava/kader/verein/479/saison_id/2020">30</a></td><td class="zentriert hide-for-small hide-for-pad">26.2</td><td class="zentriert hide-for-pad hide-for-small">8</td><td class="rechts hide-for-small hide-for-pad"><a title="Slezsky FC Opava" href="/slezsky-fc-opava/kader/verein/479/saison_id/2020">€5.50m</a></td><td class="rechts hide-for-small hide-for-pad">€183Th.</td><td class="rechts show-for-small show-for-pad nowrap"><a title="Slezsky FC Opava" href="/slezsky-fc-opava/kader/verein/479/saison_id/2020">€5.50m</a></td><td class="rechts show-for-small show-for-pad nowrap">€183Th.</td></tr>
</tbody>
</table>
<div class="keys" style="display:none" title="/slug/startseite/wettbewerb/TS1"><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;62&quot; href=&quot;/sk-slavia-prag/startseite/verein/62/saison_id/2020&quot;&gt;SK Slavia Prague&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;197&quot; href=&quot;/ac-sparta-prag/startseite/verein/197/saison_id/2020&quot;&gt;AC Sparta Prague&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;941&quot; href=&quot;/fc-viktoria-pilsen/startseite/verein/941/saison_id/2020&quot;&gt;FC Viktoria Plzen&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;5546&quot; href=&quot;/fk-mlada-boleslav/startseite/verein/5546/saison_id/2020&quot;&gt;FK Mladá Boleslav&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;697&quot; href=&quot;/fc-slovan-liberec/startseite/verein/697/saison_id/2020&quot;&gt;FC Slovan Liberec&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;1322&quot; href=&quot;/fk-jablonec/startseite/verein/1322/saison_id/2020&quot;&gt;FK Jablonec&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;377&quot; href=&quot;/fc-banik-ostrava/startseite/verein/377/saison_id/2020&quot;&gt;FC Banik Ostrava&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;715&quot; href=&quot;/fc-bohemians-prag-1905/startseite/verein/715/saison_id/2020&quot;&gt;FC Bohemians Prag 1905&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;2311&quot; href=&quot;/sk-sigma-olmutz/startseite/verein/2311/saison_id/2020&quot;&gt;SK Sigma Olomouc&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;5225&quot; href=&quot;/fc-zbrojovka-brunn/startseite/verein/5225/saison_id/2020&quot;&gt;FC Zbrojovka Brno&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;5545&quot; href=&quot;/fc-tescoma-zlin/startseite/verein/5545/saison_id/2020&quot;&gt;FC FASTAV Zlin&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;814&quot; href=&quot;/fk-teplice/startseite/verein/814/saison_id/2020&quot;&gt;FK Teplice&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;1496&quot; href=&quot;/fk-pardubice/startseite/verein/1496/saison_id/2020&quot;&gt;FK Pardubice&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;5544&quot; href=&quot;/1-fc-slovacko/startseite/verein/5544/saison_id/2020&quot;&gt;1.FC Slovácko&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;1321&quot; href=&quot;/sk-dynamo-ceske-budejovice/startseite/verein/1321/saison_id/2020&quot;&gt;SK Dynamo Ceske Budejovice&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;13726&quot; href=&quot;/mfk-karvina/startseite/verein/13726/saison_id/2020&quot;&gt;MFK Karvina&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;2598&quot; href=&quot;/1-fk-pribram/startseite/verein/2598/saison_id/2020&quot;&gt;1.FK Pribram&lt;/a&gt;</span><span>&lt;a class=&quot;vereinprofil_tooltip&quot; id=&quot;479&quot; href=&quot;/slezsky-fc-opava/startseite/verein/479/saison_id/2020&quot;&gt;Slezsky FC Opava&lt;/a&gt;</span></div>
</div>    </div>
    <div class="table-footer">
        <a title="To table of market values" href="/gambrinus-liga/marktwerteverein/wettbewerb/TS1">To table of market values</a>    </div>
</div>
<div id="wettbewerbSpieltagsbox"
     class="box sptg-print swiper-container">
    <div class="swiper-wrapper" id="spieltagstabs">
<ul>
<li class="four-tabs "><a href="#spieltagtabs-1">Last matchday</a></li>
<li class="four-tabs "><a href="#spieltagtabs-2">Current matchday</a></li>
<li class="four-tabs "><a href="#spieltagtabs-3">Next matchday</a></li>
<li class="four-tabs "><a href="#spieltagtabs-4">Rearranged match</a></li>
</ul>
<div id="spieltagtabs-1"><div id="spieltagsbox">
    <div class="clearfix"></div>
	    <table class="livescore">
		            <thead>
            <tr>
                <th class="hide-for-small">Date</th>
                <th colspan="2" class="text-right hide-for-small">Home team</th>
                <th class="text-right show-for-small">Home team</th>
                <th></th>
                <th colspan="2" class="hide-for-small">Away team</th>
                <th class="show-for-small">Away team</th>
                <th class="" ></th>            </tr>
            </thead>
			            <tr class="begegnungZeile" id="3449109" data-id="3449109">
                <td class="hide-for-small zeit al">
            Fri                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2021-02-19">Feb 19, 2021</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/spielplan/verein/1322/saison_id/2020">FK Jablonec</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/spielplan/verein/1322/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1322.png?lm=1551278724" title="&nbsp;" alt="FK Jablonec" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3449109"><span class="matchresult finished">1:1</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="5546" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5546.png?lm=1419784887" title="&nbsp;" alt="FK Mladá Boleslav" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="5546" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2020">Mladá Boleslav</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449188" data-id="3449188">
                <td class="hide-for-small zeit al">
            Sat                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2021-02-20">Feb 20, 2021</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="2598" href="/1-fk-pribram/spielplan/verein/2598/saison_id/2020">1.FK Pribram</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="2598" href="/1-fk-pribram/spielplan/verein/2598/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/2598.png?lm=1445329831" title="&nbsp;" alt="1.FK Pribram" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3449188"><span class="matchresult finished">1:4</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="5544" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5544.png?lm=1419785239" title="&nbsp;" alt="1.FC Slovácko" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="5544" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2020">Slovácko</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449225" data-id="3449225">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="2311" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2020">Sigma Olomouc</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="2311" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/2311.png?lm=1419785397" title="&nbsp;" alt="SK Sigma Olomouc" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3449225"><span class="matchresult finished">1:0</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="5225" href="/fc-zbrojovka-brunn/spielplan/verein/5225/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5225.png?lm=1419785332" title="&nbsp;" alt="FC Zbrojovka Brno" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="5225" href="/fc-zbrojovka-brunn/spielplan/verein/5225/saison_id/2020">Zbrojovka Brno</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449240" data-id="3449240">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="1496" href="/fk-pardubice/spielplan/verein/1496/saison_id/2020">FK Pardubice</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="1496" href="/fk-pardubice/spielplan/verein/1496/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1496.png?lm=1419786179" title="&nbsp;" alt="FK Pardubice" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3449240"><span class="matchresult finished">3:2</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="377" href="/fc-banik-ostrava/spielplan/verein/377/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/377.png?lm=1419584907" title="&nbsp;" alt="FC Banik Ostrava" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="377" href="/fc-banik-ostrava/spielplan/verein/377/saison_id/2020">Banik Ostrava</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449209" data-id="3449209">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="5545" href="/fc-tescoma-zlin/spielplan/verein/5545/saison_id/2020">FC Zlin</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="5545" href="/fc-tescoma-zlin/spielplan/verein/5545/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5545.png?lm=1419785784" title="&nbsp;" alt="FC FASTAV Zlin" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3449209"><span class="matchresult finished">0:3</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="197" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/197.png?lm=1474921587" title="&nbsp;" alt="AC Sparta Prague" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="197" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2020">Sparta Prague</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449046" data-id="3449046">
                <td class="hide-for-small zeit al">
            Sun                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2021-02-21">Feb 21, 2021</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="1321" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2020">C. Budejovice</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="1321" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1321.png?lm=1419785284" title="&nbsp;" alt="SK Dynamo Ceske Budejovice" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3449046"><span class="matchresult finished">0:1</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="479" href="/slezsky-fc-opava/spielplan/verein/479/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/479.png?lm=1419786232" title="&nbsp;" alt="Slezsky FC Opava" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="479" href="/slezsky-fc-opava/spielplan/verein/479/saison_id/2020">SFC Opava</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449077" data-id="3449077">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="941" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2020">Viktoria Plzen</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="941" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/941.png?lm=1571347012" title="&nbsp;" alt="FC Viktoria Plzen" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3449077"><span class="matchresult finished">3:1</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="715" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/715.png?lm=1547322604" title="&nbsp;" alt="FC Bohemians Prag 1905" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="715" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2020">Bohemians 1905</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449120" data-id="3449120">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="13726" href="/mfk-karvina/spielplan/verein/13726/saison_id/2020">MFK Karvina</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="13726" href="/mfk-karvina/spielplan/verein/13726/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/13726.png?lm=1419785681" title="&nbsp;" alt="MFK Karvina" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3449120"><span class="matchresult finished">1:1</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/697.png?lm=1419784849" title="&nbsp;" alt="FC Slovan Liberec" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2020">Slovan Liberec</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449152" data-id="3449152">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="814" href="/fk-teplice/spielplan/verein/814/saison_id/2020">FK Teplice</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="814" href="/fk-teplice/spielplan/verein/814/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/814.png?lm=1419784933" title="&nbsp;" alt="FK Teplice" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3449152"><span class="matchresult finished">1:1</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/62.png?lm=1419784643" title="&nbsp;" alt="SK Slavia Prague" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2020">Slavia Prague</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                    <tr>
            <td class="text-rechts footer p0" colspan="10">

</div>
    <div class="footer-links fl">

		<a title="Fortuna Liga" href="/fortuna-liga/spieltag/wettbewerb/TS1/spieltag/20/saison_id/2020">All games from matchday 20</a>    </div>
	<div class="footer-links">
	<a title="Fortuna Liga" href="/fortuna-liga/gesamtspielplan/wettbewerb/TS1/saison_id/2020">All fixtures & results</a></div>
</table>
</div>
</div>
<div id="spieltagtabs-2"><div id="spieltagsbox">
    <div class="clearfix"></div>
	    <table class="livescore">
		            <thead>
            <tr>
                <th class="hide-for-small">Date</th>
                <th colspan="2" class="text-right hide-for-small">Home team</th>
                <th class="text-right show-for-small">Home team</th>
                <th></th>
                <th colspan="2" class="hide-for-small">Away team</th>
                <th class="show-for-small">Away team</th>
                <th class="" ></th>            </tr>
            </thead>
			            <tr class="begegnungZeile" id="3449129" data-id="3449129">
                <td class="hide-for-small zeit al">
            Fri                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2021-02-26">Feb 26, 2021</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2020">Slovan Liberec</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/697.png?lm=1419784849" title="&nbsp;" alt="FC Slovan Liberec" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Score Center" class="ergebnis-link live-ergebnis" href="/ticker/begegnung/live/3449129"><span class="matchresult finished noSheet">4:1</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="1496" href="/fk-pardubice/spielplan/verein/1496/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1496.png?lm=1419786179" title="&nbsp;" alt="FK Pardubice" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="1496" href="/fk-pardubice/spielplan/verein/1496/saison_id/2020">FK Pardubice</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449249" data-id="3449249">
                <td class="hide-for-small zeit al">
            Sat                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2021-02-27">Feb 27, 2021</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="479" href="/slezsky-fc-opava/spielplan/verein/479/saison_id/2020">SFC Opava</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="479" href="/slezsky-fc-opava/spielplan/verein/479/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/479.png?lm=1419786232" title="&nbsp;" alt="Slezsky FC Opava" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Score Center" class="ergebnis-link live-ergebnis" href="/ticker/begegnung/live/3449249"><span class="matchresult finished noSheet">0:1</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/spielplan/verein/1322/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1322.png?lm=1551278724" title="&nbsp;" alt="FK Jablonec" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/spielplan/verein/1322/saison_id/2020">FK Jablonec</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449094" data-id="3449094">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="715" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2020">Bohemians 1905</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="715" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/715.png?lm=1547322604" title="&nbsp;" alt="FC Bohemians Prag 1905" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Score Center" class="ergebnis-link live-ergebnis" href="/ticker/begegnung/live/3449094"><span class="matchresult finished noSheet">1:1</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="1321" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1321.png?lm=1419785284" title="&nbsp;" alt="SK Dynamo Ceske Budejovice" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="1321" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2020">C. Budejovice</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449263" data-id="3449263">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="377" href="/fc-banik-ostrava/spielplan/verein/377/saison_id/2020">Banik Ostrava</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="377" href="/fc-banik-ostrava/spielplan/verein/377/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/377.png?lm=1419584907" title="&nbsp;" alt="FC Banik Ostrava" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Score Center" class="ergebnis-link live-ergebnis" href="/ticker/begegnung/live/3449263"><span class="matchresult finished noSheet">1:1</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="814" href="/fk-teplice/spielplan/verein/814/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/814.png?lm=1419784933" title="&nbsp;" alt="FK Teplice" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="814" href="/fk-teplice/spielplan/verein/814/saison_id/2020">FK Teplice</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449195" data-id="3449195">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="5225" href="/fc-zbrojovka-brunn/spielplan/verein/5225/saison_id/2020">Zbrojovka Brno</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="5225" href="/fc-zbrojovka-brunn/spielplan/verein/5225/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5225.png?lm=1419785332" title="&nbsp;" alt="FC Zbrojovka Brno" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Score Center" class="ergebnis-link live-ergebnis" href="/ticker/begegnung/live/3449195"><span class="matchresult finished noSheet">0:1</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="941" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/941.png?lm=1571347012" title="&nbsp;" alt="FC Viktoria Plzen" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="941" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2020">Viktoria Plzen</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449065" data-id="3449065">
                <td class="hide-for-small zeit al">
            Sun                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2021-02-28">Feb 28, 2021</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="2311" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2020">Sigma Olomouc</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="2311" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/2311.png?lm=1419785397" title="&nbsp;" alt="SK Sigma Olomouc" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3449065"><span class="matchresult">2:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="5545" href="/fc-tescoma-zlin/spielplan/verein/5545/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5545.png?lm=1419785784" title="&nbsp;" alt="FC FASTAV Zlin" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="5545" href="/fc-tescoma-zlin/spielplan/verein/5545/saison_id/2020">FC Zlin</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449274" data-id="3449274">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="5546" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2020">Mladá Boleslav</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="5546" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5546.png?lm=1419784887" title="&nbsp;" alt="FK Mladá Boleslav" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3449274"><span class="matchresult">2:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="13726" href="/mfk-karvina/spielplan/verein/13726/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/13726.png?lm=1419785681" title="&nbsp;" alt="MFK Karvina" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="13726" href="/mfk-karvina/spielplan/verein/13726/saison_id/2020">MFK Karvina</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449164" data-id="3449164">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="5544" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2020">Slovácko</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="5544" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5544.png?lm=1419785239" title="&nbsp;" alt="1.FC Slovácko" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3449164"><span class="matchresult">4:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/62.png?lm=1419784643" title="&nbsp;" alt="SK Slavia Prague" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2020">Slavia Prague</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449229" data-id="3449229">
                <td class="hide-for-small zeit al">
            Tue                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2021-03-09">Mar 9, 2021</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="197" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2020">Sparta Prague</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="197" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/197.png?lm=1474921587" title="&nbsp;" alt="AC Sparta Prague" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3449229"><span class="matchresult">6:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="2598" href="/1-fk-pribram/spielplan/verein/2598/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/2598.png?lm=1445329831" title="&nbsp;" alt="1.FK Pribram" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="2598" href="/1-fk-pribram/spielplan/verein/2598/saison_id/2020">1.FK Pribram</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                    <tr>
            <td class="text-rechts footer p0" colspan="10">

</div>
    <div class="footer-links fl">

		<a title="Fortuna Liga" href="/fortuna-liga/spieltag/wettbewerb/TS1/spieltag/21/saison_id/2020">All games from matchday 21</a>    </div>
	<div class="footer-links">
	<a title="Fortuna Liga" href="/fortuna-liga/gesamtspielplan/wettbewerb/TS1/saison_id/2020">All fixtures & results</a></div>
</table>
</div>
</div>
<div id="spieltagtabs-3"><div id="spieltagsbox">
    <div class="clearfix"></div>
	    <table class="livescore">
		            <thead>
            <tr>
                <th class="hide-for-small">Date</th>
                <th colspan="2" class="text-right hide-for-small">Home team</th>
                <th class="text-right show-for-small">Home team</th>
                <th></th>
                <th colspan="2" class="hide-for-small">Away team</th>
                <th class="show-for-small">Away team</th>
                <th class="" ></th>            </tr>
            </thead>
			            <tr class="begegnungZeile" id="3449231" data-id="3449231">
                <td class="hide-for-small zeit al">
            Fri                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2021-03-05">Mar 5, 2021</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="1496" href="/fk-pardubice/spielplan/verein/1496/saison_id/2020">FK Pardubice</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="1496" href="/fk-pardubice/spielplan/verein/1496/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1496.png?lm=1419786179" title="&nbsp;" alt="FK Pardubice" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3449231"><span class="matchresult">6:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="5544" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5544.png?lm=1419785239" title="&nbsp;" alt="1.FC Slovácko" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="5544" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2020">Slovácko</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449176" data-id="3449176">
                <td class="hide-for-small zeit al">
            Sat                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2021-03-06">Mar 6, 2021</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="2598" href="/1-fk-pribram/spielplan/verein/2598/saison_id/2020">1.FK Pribram</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="2598" href="/1-fk-pribram/spielplan/verein/2598/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/2598.png?lm=1445329831" title="&nbsp;" alt="1.FK Pribram" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3449176"><span class="matchresult">2:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/697.png?lm=1419784849" title="&nbsp;" alt="FC Slovan Liberec" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2020">Slovan Liberec</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449124" data-id="3449124">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="814" href="/fk-teplice/spielplan/verein/814/saison_id/2020">FK Teplice</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="814" href="/fk-teplice/spielplan/verein/814/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/814.png?lm=1419784933" title="&nbsp;" alt="FK Teplice" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3449124"><span class="matchresult">4:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="479" href="/slezsky-fc-opava/spielplan/verein/479/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/479.png?lm=1419786232" title="&nbsp;" alt="Slezsky FC Opava" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="479" href="/slezsky-fc-opava/spielplan/verein/479/saison_id/2020">SFC Opava</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449206" data-id="3449206">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="5545" href="/fc-tescoma-zlin/spielplan/verein/5545/saison_id/2020">FC Zlin</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="5545" href="/fc-tescoma-zlin/spielplan/verein/5545/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5545.png?lm=1419785784" title="&nbsp;" alt="FC FASTAV Zlin" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3449206"><span class="matchresult">4:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="715" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/715.png?lm=1547322604" title="&nbsp;" alt="FC Bohemians Prag 1905" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="715" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2020">Bohemians 1905</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449074" data-id="3449074">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="941" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2020">Viktoria Plzen</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="941" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/941.png?lm=1571347012" title="&nbsp;" alt="FC Viktoria Plzen" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3449074"><span class="matchresult">6:30 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="2311" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/2311.png?lm=1419785397" title="&nbsp;" alt="SK Sigma Olomouc" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="2311" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2020">Sigma Olomouc</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449012" data-id="3449012">
                <td class="hide-for-small zeit al">
            Sun                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2021-03-07">Mar 7, 2021</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="1321" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2020">C. Budejovice</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="1321" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1321.png?lm=1419785284" title="&nbsp;" alt="SK Dynamo Ceske Budejovice" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3449012"><span class="matchresult">2:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="5546" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5546.png?lm=1419784887" title="&nbsp;" alt="FK Mladá Boleslav" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="5546" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2020">Mladá Boleslav</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449144" data-id="3449144">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="13726" href="/mfk-karvina/spielplan/verein/13726/saison_id/2020">MFK Karvina</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="13726" href="/mfk-karvina/spielplan/verein/13726/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/13726.png?lm=1419785681" title="&nbsp;" alt="MFK Karvina" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3449144"><span class="matchresult">2:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="5225" href="/fc-zbrojovka-brunn/spielplan/verein/5225/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5225.png?lm=1419785332" title="&nbsp;" alt="FC Zbrojovka Brno" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="5225" href="/fc-zbrojovka-brunn/spielplan/verein/5225/saison_id/2020">Zbrojovka Brno</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449031" data-id="3449031">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/spielplan/verein/1322/saison_id/2020">FK Jablonec</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/spielplan/verein/1322/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1322.png?lm=1551278724" title="&nbsp;" alt="FK Jablonec" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <span class="matchresult">postponed</span>
                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="197" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/197.png?lm=1474921587" title="&nbsp;" alt="AC Sparta Prague" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="197" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2020">Sparta Prague</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                        <tr class="begegnungZeile" id="3449104" data-id="3449104">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2020">Slavia Prague</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/62.png?lm=1419784643" title="&nbsp;" alt="SK Slavia Prague" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3449104"><span class="matchresult">6:30 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="377" href="/fc-banik-ostrava/spielplan/verein/377/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/homepage/377.png?lm=1419584907" title="&nbsp;" alt="FC Banik Ostrava" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="377" href="/fc-banik-ostrava/spielplan/verein/377/saison_id/2020">Banik Ostrava</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small">
                                    </td>
            </tr>

                    <tr>
            <td class="text-rechts footer p0" colspan="10">

</div>
    <div class="footer-links fl">

		<a title="Fortuna Liga" href="/fortuna-liga/spieltag/wettbewerb/TS1/spieltag/22/saison_id/2020">All games from matchday 22</a>    </div>
	<div class="footer-links">
	<a title="Fortuna Liga" href="/fortuna-liga/gesamtspielplan/wettbewerb/TS1/saison_id/2020">All fixtures & results</a></div>
</table>
</div>
</div>
<div id="spieltagtabs-4">    <div id="spieltagsbox">
        <div class="responsive-table">
			            <table class="livescore">
                <thead>
                <tr>
                    <th class="hide-for-small">Date</th>
                    <th colspan="2"
                        class="text-right hide-for-small">Home team</th>
                    <th class="text-right show-for-small">Home team</th>
                    <th></th>
                    <th colspan="2" class="hide-for-small">Away team</th>
                    <th class="show-for-small">Away team</th>
                    <th class="" ></th>                </tr>
                </thead>
                <tbody>
									                    <tr class="begegnungZeile" id="">
					                        <td class="hide-for-small zeit al">
							Sun                        <span class="spielzeitpunkt">
                            <a href="/aktuell/waspassiertheute/aktuell/new/datum/2021-03-07">
                                Mar 7, 2021                            </a>
                        </span>
								                        </td>
						                    <td class="spieltagsthread home-sst hide-for-small">
						                    </td>
                    <td class="verein-heim">
                            <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/spielplan/verein/1322">FK Jablonec</a>                            </span>
                        <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/spielplan/verein/1322"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1322.png?lm=1551278724" title="&nbsp;" alt="FK Jablonec" class="" /></a></a>
                            </span>
                    </td>
                    <td class="ergebnis">
                            <span class="ergebnis">
                                <span class="matchresult">postponed</span>                            </span>
                    </td>
                    <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a class="vereinprofil_tooltip" id="197" href="/ac-sparta-prag/spielplan/verein/197"><img src="https://tmssl.akamaized.net/images/wappen/homepage/197.png?lm=1474921587" title="&nbsp;" alt="AC Sparta Prague" class="" /></a>                                </a>
                            </span>
                        <span class="vereinsname">
                                <a class="vereinprofil_tooltip" id="197" href="/ac-sparta-prag/spielplan/verein/197">Sparta Prague</a>                            </span>
                    </td>
                    <td class="spieltagsthread hide-for-small">
						                    </td>
                    <td class="zentriert quotenzelle hide-for-small">
                                                </td>
                    </td>
                    </tr>

                                    <tr>
                    <td colspan="7" class="text-rechts footer">
                        <a href="/gambrinus-liga/gesamtspielplan/wettbewerb/TS1/saison_id/2020">
							View all fixtures                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</div>
    </div>
<div class="box"><script src="//player.daznservices.com/player.js#4df00488561d81ef6156f80298.qhcy7srjtfqs12e5txms5dxtj$s=1" async></script>
</div><div class="box">
	<h2 class="table-header">Top goalscorers </h2>
	<div id="yw3" class="grid-view">
<div class="summary"></div>
<table class="items">
<thead>
<tr>
<th class="zentriert" id="yw3_c0">#</th><th id="yw3_c1">player</th><th class="zentriert" id="yw3_c2"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/age">Age</a></th><th class="zentriert" id="yw3_c3">club</th><th class="zentriert" id="yw3_c4"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/tore.desc">Goals</a></th></tr>
</thead>
<tbody>
<tr class="odd">
<td class="zentriert">1</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/776798-1606429924.png?lm=1" title="Abdallah Sima" alt="Abdallah Sima" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Abdallah Sima" class="spielprofil_tooltip" id="776798" href="/abdallah-sima/profil/spieler/776798">Abdallah Sima</a></td></tr><tr><td>Centre-Forward</td></tr></table></td><td class="zentriert">19</td><td class="zentriert"><a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/startseite/verein/62/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/62.png?lm=1419784643" title="&nbsp;" alt="SK Slavia Prague" class="" /></a></td><td class="zentriert hauptlink">11</td></tr>
<tr class="even">
<td class="zentriert">2</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/334802-1605984038.PNG?lm=1" title="Jan Kuchta" alt="Jan Kuchta" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Jan Kuchta" class="spielprofil_tooltip" id="334802" href="/jan-kuchta/profil/spieler/334802">Jan Kuchta</a></td></tr><tr><td>Centre-Forward</td></tr></table></td><td class="zentriert">24</td><td class="zentriert"><a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/startseite/verein/62/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/62.png?lm=1419784643" title="&nbsp;" alt="SK Slavia Prague" class="" /></a></td><td class="zentriert hauptlink">11</td></tr>
<tr class="odd">
<td class="zentriert">3</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/s_147550_6483_2011_1.jpg?lm=1" title="Lukas Julis" alt="Lukas Julis" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Lukas Julis" class="spielprofil_tooltip" id="147550" href="/lukas-julis/profil/spieler/147550">Lukas Julis</a></td></tr><tr><td>Centre-Forward</td></tr></table></td><td class="zentriert">26</td><td class="zentriert"><a class="vereinprofil_tooltip" id="197" href="/ac-sparta-prag/startseite/verein/197/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/197.png?lm=1474921587" title="&nbsp;" alt="AC Sparta Prague" class="" /></a></td><td class="zentriert hauptlink">11</td></tr>
<tr class="even">
<td class="zentriert">4</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/s_154335_709_2010_1.jpg?lm=1" title="Azevedo" alt="Azevedo" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Azevedo" class="spielprofil_tooltip" id="154335" href="/azevedo/profil/spieler/154335">Azevedo</a></td></tr><tr><td>Left Winger</td></tr></table></td><td class="zentriert">29</td><td class="zentriert"><a class="vereinprofil_tooltip" id="377" href="/fc-banik-ostrava/startseite/verein/377/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/377.png?lm=1419584907" title="&nbsp;" alt="FC Banik Ostrava" class="" /></a></td><td class="zentriert hauptlink">8</td></tr>
<tr class="odd">
<td class="zentriert">5</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/218299-1470668746.jpg?lm=1" title="Jan Kliment" alt="Jan Kliment" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Jan Kliment" class="spielprofil_tooltip" id="218299" href="/jan-kliment/profil/spieler/218299">Jan Kliment</a></td></tr><tr><td>Centre-Forward</td></tr></table></td><td class="zentriert">27</td><td class="zentriert"><a class="vereinprofil_tooltip" id="5544" href="/1-fc-slovacko/startseite/verein/5544/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/5544.png?lm=1419785239" title="&nbsp;" alt="1.FC Slovácko" class="" /></a></td><td class="zentriert hauptlink">8</td></tr>
</tbody>
</table>
<div class="keys" style="display:none" title="/slug/startseite/wettbewerb/TS1"><span>8000000</span><span>1000000</span><span>2500000</span><span>600000</span><span>300000</span></div>
</div>	<div class="table-footer">
		<a title="View stats" href="/gambrinus-liga/torschuetzenliste/wettbewerb/TS1/saison_id/2020">View stats</a>	</div>
</div>
<div id="recommender" class="box" >
    <div class="OUTBRAIN" data-src="" data-widget-id="AR_1" data-ob-template="DE_Transfermarkt.de" ></div>
	<script type="text/javascript" src="https://widgets.outbrain.com/outbrain.js"></script>
</div>
    </div>
    <div class="large-4 columns">
		<!-- tisoomi check --><script type="text/javascript">//RWGzztV("rectangle1")</script>

<div class="werbung werbung-rectangle1">
	<!-- DFPV2 -->
	<div id="Rectangle1" >
	<script>
		googletag.cmd.push(function() { googletag.display('Rectangle1'); });
	</script>
	</div>
</div>
<span class="RWGzztV_end"></span>
        <tm-data-scouts translation='{&quot;headline&quot;:{&quot;singular&quot;:&quot;Responsible data scout:&quot;,&quot;plural&quot;:&quot;Responsible data scouts:&quot;}}' competition-id="TS1"></tm-data-scouts>
        <div class="box">
    <div id="tabs">
<ul>
<li class="three-tabs"><a href="#tabs-1">News</a></li>
<li class="three-tabs"><a href="#tabs-2">Transfers</a></li>
<li class="three-tabs"><a href="#tabs-3">Market values</a></li>
</ul>
<div id="tabs-1">    <div class="clearer relevante-news-auflistung">
        <div class="subKategorie">
            <h2>More News</h2>
        </div>
        <div class="tabelle">
            <div class="table">
                                    <div class="tr">
                        <div class="td newsFoto">
                            <a href="/fortuna-liga-update-hlozek-breaks-euro-10m-mark-premier-league-target-sima-with-high-start-value/view/news/376733">
                                <a href="#"><img title="Adam Hlozek - Source: imago images" alt="Adam Hlozek" class=" lazy" data-original="https://img.a.transfermarkt.technology/portrait/medium/552057-1569408179.jpg?lm=1"></a>                            </a>
                        </div>
                        <div class="td">
                            <span class="newsSubline">
                                Market values Czech Republic                            </span>
                                <span class="newsHeadline">
                                <a href="/fortuna-liga-update-hlozek-breaks-euro-10m-mark-premier-league-target-sima-with-high-start-value/view/news/376733"
                                   onClick="ga('send', 'event', 'Button', 'click', 'wettbewerb_profil_news_1_4', 1);">
                                    Fortuna Liga update: Hlozek breaks €10m mark - Premier League target Sima with high start value                                </a>
                            </span>
                        </div>
                    </div>
                                        <div class="tr">
                        <div class="td newsFoto">
                            <a href="/coufal-follows-soucek-czech-republic-international-joins-west-ham/view/news/371880">
                                <a href="#"><img title="Vladimir Coufal - Source: imago images" alt="Vladimir Coufal" class=" lazy" data-original="https://img.a.transfermarkt.technology/portrait/medium/157672-1487754678.jpg?lm=1"></a>                            </a>
                        </div>
                        <div class="td">
                            <span class="newsSubline">
                                “Best years still ahead of him”                            </span>
                                <span class="newsHeadline">
                                <a href="/coufal-follows-soucek-czech-republic-international-joins-west-ham/view/news/371880"
                                   onClick="ga('send', 'event', 'Button', 'click', 'wettbewerb_profil_news_2_4', 2);">
                                    Coufal follows Soucek - Czech Republic international joins West Ham                                </a>
                            </span>
                        </div>
                    </div>
                                        <div class="tr">
                        <div class="td newsFoto">
                            <a href="/soucek-makes-permanent-west-ham-move-11th-most-expensive-hammers-signing/view/news/366362">
                                <a href="#"><img title="Tomas Soucek - Source: imago images" alt="Tomas Soucek" class=" lazy" data-original="https://img.a.transfermarkt.technology/portrait/medium/283628-1515765413.jpg?lm=1"></a>                            </a>
                        </div>
                        <div class="td">
                            <span class="newsSubline">
                                Czech midfielder                            </span>
                                <span class="newsHeadline">
                                <a href="/soucek-makes-permanent-west-ham-move-11th-most-expensive-hammers-signing/view/news/366362"
                                   onClick="ga('send', 'event', 'Button', 'click', 'wettbewerb_profil_news_3_4', 3);">
                                    Soucek makes permanent West Ham move - 11th most expensive Hammers signing                                </a>
                            </span>
                        </div>
                    </div>
                                        <div class="tr">
                        <div class="td newsFoto">
                            <a href="/market-value-update-czechia-hlozek-now-among-the-10-most-valuable-u18-forwards/view/news/365132">
                                <a href="#"><img title="Adam Hlozek - Source: imago images" alt="Adam Hlozek" class=" lazy" data-original="https://img.a.transfermarkt.technology/portrait/medium/552057-1569408179.jpg?lm=1"></a>                            </a>
                        </div>
                        <div class="td">
                            <span class="newsSubline">
                                Update                            </span>
                                <span class="newsHeadline">
                                <a href="/market-value-update-czechia-hlozek-now-among-the-10-most-valuable-u18-forwards/view/news/365132"
                                   onClick="ga('send', 'event', 'Button', 'click', 'wettbewerb_profil_news_4_4', 4);">
                                    Market value update Czechia: Hlozek now among the 10 most valuable U18 forwards                                </a>
                            </span>
                        </div>
                    </div>
                                </div>
        </div>
        <div class="footer">
            <a href="/gambrinus-liga/news/wettbewerb/TS1">View all news</a>        </div>
    </div>
    </div>
<div id="tabs-2">	<div class="box-slider">
		<div class="container">
			<span class="letzteTransfersWettbewerbSlider-prev"></span>
			<p class="text"><span>Latest transfers</span></p>
			<span class="letzteTransfersWettbewerbSlider-next"></span>
		</div>
		<div class="clearer" style="max-height:269px;overflow:hidden;">
			<ul class="letzteTransfersWettbewerbSlider slider-list">
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3272706">
						<div>
	<div class="container-foto text-center">
		<img src="https://img.a.transfermarkt.technology/portrait/medium/261897-1582232303.png?lm=1" title="Michal Jerabek" alt="Michal Jerabek" class="bilderrahmen max-medium-foto" />	</div>
	<div class="container-inhalt">
		<div class="container-hauptinfo">
			<a title="Michal Jerabek" class="spielprofil_tooltip" id="261897" href="/michal-jerabek/profil/spieler/261897">Michal Jerabek</a>		</div>
		<div class="container-zusatzinfo">
			<b>Age:</b> 27 Years&nbsp;
			<img src="https://tmssl.akamaized.net/images/flagge/tiny/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /><br />
			<b>Position:</b> Centre-Back<br />
			<b>Market value:</b> €300Th.<br />
		</div>
		<div class="container-hauptfact">
            <b>Fee:</b> <b>?</b> 		</div>
		<div class="container-transferwappen">
			<div class="text-center container-wappen">
				<a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/transfers/verein/1322"><img src="https://tmssl.akamaized.net/images/wappen/medium/1322.png?lm=1551278724" title="&nbsp;" alt="FK Jablonec" class="" /></a>			</div>
			<div class="text-center container-pfeil">
				<span class="icons_sprite wechsel-pfeil-slider">&nbsp;</span>
			</div>
			<div class="text-center container-wappen">
				<a class="vereinprofil_tooltip" id="10157" href="/fk-aktobe/transfers/verein/10157"><img src="https://tmssl.akamaized.net/images/wappen/medium/10157.png?lm=1600683766" title="&nbsp;" alt="FK Aktobe" class="" /></a>			</div>
			<div class="clearer"></div>
		</div>
	</div>
</div>
					</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3271327">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3269043">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3269027">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3268684">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3258227">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3251412">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3253252">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3245278">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3247173">
											</li>
							</ul>
		</div>
		<div class="footer bxPagerParent">
			<span class="bxPagerCustom"></span><a title="View complete list" href="/gambrinus-liga/letztetransfers/wettbewerb/TS1">View complete list</a>		</div>
	</div>
</div>
<div id="tabs-3"><div class="container">
	<p class="langer-text no-border">Most valuable players in the league</p>
</div>
<div class="clearer">
<div id="yw4" class="grid-view">
<div class="summary"></div>
<table class="items">
<thead>
<tr>
<th id="yw4_c0">#</th><th id="yw4_c1">player</th><th class="zentriert" id="yw4_c2">club</th><th class="rechts" id="yw4_c3">Market value</th></tr>
</thead>
<tbody>
<tr class="odd">
<td class="zentriert">1</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/552057-1569408179.jpg?lm=1" title="Adam Hlozek" alt="Adam Hlozek" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Adam Hlozek" class="spielprofil_tooltip" id="552057" href="/adam-hlozek/profil/spieler/552057">Adam Hlozek</a></td></tr><tr><td>Second Striker</td></tr></table></td><td class="zentriert"><a class="vereinprofil_tooltip" id="197" href="/ac-sparta-prag/startseite/verein/197/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/197.png?lm=1474921587" title="&nbsp;" alt="AC Sparta Prague" class="" /></a></td><td class="rechts hauptlink">€12.00m</td></tr>
<tr class="even">
<td class="zentriert">2</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/776798-1606429924.png?lm=1" title="Abdallah Sima" alt="Abdallah Sima" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Abdallah Sima" class="spielprofil_tooltip" id="776798" href="/abdallah-sima/profil/spieler/776798">Abdallah Sima</a></td></tr><tr><td>Centre-Forward</td></tr></table></td><td class="zentriert"><a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/startseite/verein/62/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/62.png?lm=1419784643" title="&nbsp;" alt="SK Slavia Prague" class="" /></a></td><td class="rechts hauptlink">€8.00m</td></tr>
<tr class="odd">
<td class="zentriert">3</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/189630-1605983913.png?lm=1" title="Ondrej Kolar" alt="Ondrej Kolar" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Ondrej Kolar" class="spielprofil_tooltip" id="189630" href="/ondrej-kolar/profil/spieler/189630">Ondrej Kolar</a></td></tr><tr><td>Goalkeeper</td></tr></table></td><td class="zentriert"><a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/startseite/verein/62/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/62.png?lm=1419784643" title="&nbsp;" alt="SK Slavia Prague" class="" /></a></td><td class="rechts hauptlink">€7.50m</td></tr>
<tr class="even">
<td class="zentriert">4</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/248393-1605984091.png?lm=1" title="Peter Olayinka" alt="Peter Olayinka" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Peter Olayinka" class="spielprofil_tooltip" id="248393" href="/peter-olayinka/profil/spieler/248393">Peter Olayinka</a></td></tr><tr><td>Left Winger</td></tr></table></td><td class="zentriert"><a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/startseite/verein/62/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/62.png?lm=1419784643" title="&nbsp;" alt="SK Slavia Prague" class="" /></a></td><td class="rechts hauptlink">€6.00m</td></tr>
<tr class="odd">
<td class="zentriert">5</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/234124-1581847698.jpg?lm=1" title="Simon Deli" alt="Simon Deli" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Simon Deli" class="spielprofil_tooltip" id="234124" href="/simon-deli/profil/spieler/234124">Simon Deli</a></td></tr><tr><td>Centre-Back</td></tr></table></td><td class="zentriert"><a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/startseite/verein/62/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/62.png?lm=1419784643" title="&nbsp;" alt="SK Slavia Prague" class="" /></a></td><td class="rechts hauptlink">€5.00m</td></tr>
</tbody>
</table>
<div class="keys" style="display:none" title="/slug/startseite/wettbewerb/TS1"><span>12000000</span><span>8000000</span><span>7500000</span><span>6000000</span><span>5000000</span></div>
</div></div>
<div class="footer no-border">
	<a title="View stats" href="/gambrinus-liga/marktwerte/wettbewerb/TS1">View stats</a></div></div>
</div>
</div>
        <div class="box tab-print">
            <div class="table-header">Table                Fortuna Liga                20/21            </div>
            <div class="responsive-table">
                <table>
                    <thead>
                    <tr>
                        <th class="rechts">#</th>
                        <th colspan="2">club</th>
                        <th class="zentriert">Matches</th>
                        <th class="zentriert">+/-</th>
                        <th class="zentriert">Pts</th>
                    </tr>
                    </thead>
                    <tbody>
                                            <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#afd179">1<span title="previous week 1.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/62.png?lm=1419784643" title="&nbsp;" alt="SK Slavia Prague" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="62" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2020">Slavia Prague</a>                                <a href="#"><img src="https://tmssl.akamaized.net/images/erfolge/mini/21.png?lm=1461847499" title="Czech Champion 19/20" alt="Czech Champion 19/20" class="tabelle-erfolg" /></a>                            </td>
                            <td class="zentriert">20</td>
                            <td class="zentriert">46</td>
                                                        <td class="zentriert">52</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#d6eab6">2<span title="previous week 2.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="197" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/197.png?lm=1474921587" title="&nbsp;" alt="AC Sparta Prague" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="197" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2020">Sparta Prague</a>                                <a href="#"><img src="https://tmssl.akamaized.net/images/erfolge/mini/341.png?lm=1461847499" title="Czech Cup Winner 19/20" alt="Czech Cup Winner 19/20" class="tabelle-erfolg" /></a>                            </td>
                            <td class="zentriert">20</td>
                            <td class="zentriert">19</td>
                                                        <td class="zentriert">44</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#a5cce9">3<span title="previous week 3.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="5544" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/5544.png?lm=1419785239" title="&nbsp;" alt="1.FC Slovácko" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="5544" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2020">Slovácko</a>                                                            </td>
                            <td class="zentriert">20</td>
                            <td class="zentriert">21</td>
                                                        <td class="zentriert">40</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#a5cce9">4<span title="previous week 4.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/spielplan/verein/1322/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/1322.png?lm=1551278724" title="&nbsp;" alt="FK Jablonec" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="1322" href="/fk-jablonec/spielplan/verein/1322/saison_id/2020">FK Jablonec</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">11</td>
                                                        <td class="zentriert">39</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:">5<span title="previous week 5.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/697.png?lm=1419784849" title="&nbsp;" alt="FC Slovan Liberec" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="697" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2020">Slovan Liberec</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">13</td>
                                                        <td class="zentriert">36</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:">6<span title="previous week 8.place" class="icons_sprite green-arrow-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="941" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/941.png?lm=1571347012" title="&nbsp;" alt="FC Viktoria Plzen" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="941" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2020">Viktoria Plzen</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">12</td>
                                                        <td class="zentriert">34</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:">7<span title="previous week 9.place" class="icons_sprite green-arrow-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="1496" href="/fk-pardubice/spielplan/verein/1496/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/1496.png?lm=1419786179" title="&nbsp;" alt="FK Pardubice" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="1496" href="/fk-pardubice/spielplan/verein/1496/saison_id/2020">FK Pardubice</a>                                <span title="Promoted to 1st league 19/20" class="icons_sprite icon-aufsteiger">&nbsp;</span>                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">-7</td>
                                                        <td class="zentriert">31</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:">8<span title="previous week 6.place" class="icons_sprite red-arrow-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="1321" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/1321.png?lm=1419785284" title="&nbsp;" alt="SK Dynamo Ceske Budejovice" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="1321" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2020">C. Budejovice</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">0</td>
                                                        <td class="zentriert">30</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:">9<span title="previous week 7.place" class="icons_sprite red-arrow-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="377" href="/fc-banik-ostrava/spielplan/verein/377/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/377.png?lm=1419584907" title="&nbsp;" alt="FC Banik Ostrava" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="377" href="/fc-banik-ostrava/spielplan/verein/377/saison_id/2020">Banik Ostrava</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">5</td>
                                                        <td class="zentriert">30</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:">10<span title="previous week 10.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="2311" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/2311.png?lm=1419785397" title="&nbsp;" alt="SK Sigma Olomouc" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="2311" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2020">Sigma Olomouc</a>                                                            </td>
                            <td class="zentriert">20</td>
                            <td class="zentriert">6</td>
                                                        <td class="zentriert">30</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:">11<span title="previous week 11.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="13726" href="/mfk-karvina/spielplan/verein/13726/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/13726.png?lm=1419785681" title="&nbsp;" alt="MFK Karvina" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="13726" href="/mfk-karvina/spielplan/verein/13726/saison_id/2020">MFK Karvina</a>                                                            </td>
                            <td class="zentriert">20</td>
                            <td class="zentriert">-7</td>
                                                        <td class="zentriert">25</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:">12<span title="previous week 12.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="715" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/715.png?lm=1547322604" title="&nbsp;" alt="FC Bohemians Prag 1905" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="715" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2020">Bohemians 1905</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">-4</td>
                                                        <td class="zentriert">24</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:">13<span title="previous week 13.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="5545" href="/fc-tescoma-zlin/spielplan/verein/5545/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/5545.png?lm=1419785784" title="&nbsp;" alt="FC FASTAV Zlin" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="5545" href="/fc-tescoma-zlin/spielplan/verein/5545/saison_id/2020">FC Zlin</a>                                                            </td>
                            <td class="zentriert">20</td>
                            <td class="zentriert">-9</td>
                                                        <td class="zentriert">22</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:">14<span title="previous week 14.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="814" href="/fk-teplice/spielplan/verein/814/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/814.png?lm=1419784933" title="&nbsp;" alt="FK Teplice" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="814" href="/fk-teplice/spielplan/verein/814/saison_id/2020">FK Teplice</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">-22</td>
                                                        <td class="zentriert">19</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:">15<span title="previous week 15.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="5225" href="/fc-zbrojovka-brunn/spielplan/verein/5225/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/5225.png?lm=1419785332" title="&nbsp;" alt="FC Zbrojovka Brno" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="5225" href="/fc-zbrojovka-brunn/spielplan/verein/5225/saison_id/2020">Zbrojovka Brno</a>                                <span title="Promoted to 1st league 19/20" class="icons_sprite icon-aufsteiger">&nbsp;</span>                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">-19</td>
                                                        <td class="zentriert">14</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#f8a7a3">16<span title="previous week 17.place" class="icons_sprite green-arrow-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="5546" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/5546.png?lm=1419784887" title="&nbsp;" alt="FK Mladá Boleslav" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="5546" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2020">Mladá Boleslav</a>                                                            </td>
                            <td class="zentriert">20</td>
                            <td class="zentriert">-14</td>
                                                        <td class="zentriert">13</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#f8a7a3">17<span title="previous week 16.place" class="icons_sprite red-arrow-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="2598" href="/1-fk-pribram/spielplan/verein/2598/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/2598.png?lm=1445329831" title="&nbsp;" alt="1.FK Pribram" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="2598" href="/1-fk-pribram/spielplan/verein/2598/saison_id/2020">1.FK Pribram</a>                                                            </td>
                            <td class="zentriert">20</td>
                            <td class="zentriert">-24</td>
                                                        <td class="zentriert">12</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#f8a7a3">18<span title="previous week 18.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a class="vereinprofil_tooltip" id="479" href="/slezsky-fc-opava/spielplan/verein/479/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/tiny/479.png?lm=1419786232" title="&nbsp;" alt="Slezsky FC Opava" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a class="vereinprofil_tooltip" id="479" href="/slezsky-fc-opava/spielplan/verein/479/saison_id/2020">SFC Opava</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">-27</td>
                                                        <td class="zentriert">12</td>
                        </tr>
                                            </tbody>
                </table>
            </div>
            <div class="table-footer">
                <a title="To complete table" href="/gambrinus-liga/tabelle/wettbewerb/TS1/saison_id/2020">To complete table</a>            </div>
        </div>
            <div class="box beliebtheit-vote">
    <div class="header">
        <span class="h2">
			Who do you want to win?			        </span>
    </div>
    <div class="content">
						<p class="beliebtheit-text">In this match you stick with...</p>
							<img src="https://tmssl.akamaized.net//images/beliebtheit/versus.png" alt="versus" class="beliebtheit-versus" />
			<a href="/beliebtheit/speichernVereine?verein_id_gewinner=377&verein_id_verlierer=814&kontinent=0&land=0&wettbewerb=TS1&typ=verein&verein_id_1=377&lieblingsverein=0" class="beliebtheit-wahl-verein beliebtheit-wahl-heim">
				<img src="https://tmssl.akamaized.net/images/wappen/headerRund/377.png?lm=1419584907" title="&nbsp;" alt="FC Banik Ostrava" class="" />FC Banik Ostrava			</a>
			<a href="/beliebtheit/speichernVereine?verein_id_gewinner=814&verein_id_verlierer=377&kontinent=0&land=0&wettbewerb=TS1&typ=verein&verein_id_1=377&lieblingsverein=0" class="beliebtheit-wahl-verein beliebtheit-wahl-gast">
				<img src="https://tmssl.akamaized.net/images/wappen/headerRund/814.png?lm=1419784933" title="&nbsp;" alt="FK Teplice" class="" />FK Teplice			</a>
			    </div>
</div>
<script type="text/javascript">//RWGzztV("rectangle2")</script>

<div class="werbung werbung-rectangle2">
	<!-- DFPV2 -->
	<div id="Rectangle2" >
	<script>
		googletag.cmd.push(function() { googletag.display('Rectangle2'); });
	</script>
	</div>
</div>
<span class="RWGzztV_end"></span>
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
<script type="text/javascript" src="https://tmssl.akamaized.net/assets/b7c5571cf8957553f95f6d9069eaed67/jui/js/jquery-ui.min.js?lm=1613568701"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/libs/micromodal.min.js?lm=1613568692"></script>
<script type="text/javascript">
/*<![CDATA[*/
	function initCss() {
	}
	var aktuelleUrl = 'https://www.transfermarkt.com/slug/startseite/wettbewerb/TS1'
	var loginUrl='/profil/login?referrer=https%3A%2F%2Fwww.transfermarkt.com%2Fslug%2Fstartseite%2Fwettbewerb%2FTS1';
	var notificationUrl='/notifications/liste';
	var privateNachrichtenUrl = '/privateNachrichten/liste'
	var favoritenUrl = '/favoriten/userFavoriten'
	var favoritenHandleUrl = '/favoriten/handle'
	var favoritEntfernenText = 'delete_favourite'
	var favoritHinzufuegenText = 'add_favourite'
	var vereinUrl = '/verein/userbox';
	var boxOpen = false;
	var titleString='Fortuna Liga 20/21 | Transfermarkt';
	var naviController = 'wettbewerb';
	var naviAction = 'startseite';
	var naviPath = 'slug/startseite/wettbewerb/TS1';
	var naviId = 'TS1';
	var naviSaison = '';
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
jQuery('#spieltagstabs').tabs({'active':1});
jQuery('#yw3').yiiGridView({'ajaxUpdate':['yw3'],'ajaxVar':'ajax','pagerClass':'pager','loadingClass':'grid\x2Dview\x2Dloading','filterClass':'filters','tableClass':'items','selectableRows':1,'enableHistory':false,'updateSelector':'\x7Bpage\x7D,\x20\x7Bsort\x7D','filterSelector':'\x7Bfilter\x7D'});

		letzteTransfersWettbewerbSlider = $('.letzteTransfersWettbewerbSlider').bxSlider({
			mode: 'fade',
			prevSelector: '.letzteTransfersWettbewerbSlider-prev',
			prevText: ' ',
			nextSelector: '.letzteTransfersWettbewerbSlider-next',
			nextText: ' ',
			pager: true,
			pagerType: 'short',
			pagerSelector: '.bxPagerCustom',
			responsive: true,
			adaptiveHeight: false,
			onSlideBefore: function(slideElement, oldIndex, newIndex) {
				if(!$.trim(slideElement.html())) {
					var url = slideElement.attr('data-src');
					slideElement.load(url);
				}
			},
		});

jQuery('#yw4').yiiGridView({'ajaxUpdate':['yw4'],'ajaxVar':'ajax','pagerClass':'pager','loadingClass':'grid\x2Dview\x2Dloading','filterClass':'filters','tableClass':'items','selectableRows':1,'enableHistory':false,'updateSelector':'\x7Bpage\x7D,\x20\x7Bsort\x7D','filterSelector':'\x7Bfilter\x7D'});
jQuery('#tabs').tabs({'active':1});

          $(".spielprofil_tooltip").tooltipster({'position':'right','arrowColor':'white','delay':'100','speed':0,'contentAsHTML':true,'interactive':true,'content':'\x0A\x09\x09\x09\x3Cimg\x20src\x3D\x22https\x3A\x2F\x2Ftmssl.akamaized.net\x2F\x2Fimages\x2Fspinner.gif\x22\x20style\x3D\x22vertical\x2Dalign\x3A\x20middle\x3B\x22\x20\x2F\x3E\x0A\x09\x09','functionBefore':function(origin, continueTooltip) { continueTooltip(); id_array = origin.context.id.split("/"); var spieler_id = id_array[0]; $.post( "/spieler/_profilTooltip", { spieler_id : spieler_id }, function(data) { if(data) { origin.tooltipster("update", data); } }); }});


          $(".vereinprofil_tooltip").tooltipster({'position':'right','arrowColor':'white','delay':'100','speed':0,'contentAsHTML':true,'interactive':true,'content':'\x0A\x09\x09\x09\x3Cimg\x20src\x3D\x22https\x3A\x2F\x2Ftmssl.akamaized.net\x2F\x2Fimages\x2Fspinner.gif\x22\x20style\x3D\x22vertical\x2Dalign\x3A\x20middle\x3B\x22\x20\x2F\x3E\x0A\x09\x09','functionBefore':function(origin, continueTooltip) { continueTooltip(); id_array = origin.context.id.split("/"); var verein_id = id_array[0]; $.post( "/verein/_profilTooltip", { verein_id : verein_id }, function(data) { if(data) { origin.tooltipster("update", data); } }); }});

});
/*]]>*/
</script>
</body>

</html>
`;

export const LEAGUE_DATA: SoccerBotResponse<SoccerBotTeam[]> = {
  ok: true,
  data: [
    { id: '62', name: 'Slavia Prague' },
    { id: '197', name: 'Sparta Prague' },
    { id: '941', name: 'Viktoria Plzen' },
    { id: '5546', name: 'Mladá Boleslav' },
    { id: '697', name: 'Slovan Liberec' },
    { id: '1322', name: 'FK Jablonec' },
    { id: '377', name: 'Banik Ostrava' },
    { id: '715', name: 'Bohemians 1905' },
    { id: '2311', name: 'Sigma Olomouc' },
    { id: '5225', name: 'Zbrojovka Brno' },
    { id: '5545', name: 'FC Zlin' },
    { id: '814', name: 'FK Teplice' },
    { id: '1496', name: 'FK Pardubice' },
    { id: '5544', name: 'Slovácko' },
    { id: '1321', name: 'C. Budejovice' },
    { id: '13726', name: 'MFK Karvina' },
    { id: '2598', name: '1.FK Pribram' },
    { id: '479', name: 'SFC Opava' }
  ]
}
