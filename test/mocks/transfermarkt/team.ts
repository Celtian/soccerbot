import {
  SoccerBotCountry,
  SoccerBotFoot,
  SoccerBotPlayer,
  SoccerBotPositionGroup,
  SoccerBotResponse
} from '../../../src/shared/interfaces';

export const TEAM_HTML = `

<!DOCTYPE html>
<html class="no-js" lang="en">
<head>

<script type="text/javascript">
    !function () { var e = function () { var e, t = "__tcfapiLocator", a = [], n = window; for (; n;) { try { if (n.frames[t]) { e = n; break } } catch (e) { } if (n === window.top) break; n = n.parent } e || (!function e() { var a = n.document, r = !!n.frames[t]; if (!r) if (a.body) { var i = a.createElement("iframe"); i.style.cssText = "display:none", i.name = t, a.body.appendChild(i) } else setTimeout(e, 5); return !r }(), n.__tcfapi = function () { for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r]; if (!n.length) return a; if ("setGdprApplies" === n[0]) n.length > 3 && 2 === parseInt(n[1], 10) && "boolean" == typeof n[3] && (e = n[3], "function" == typeof n[2] && n[2]("set", !0)); else if ("ping" === n[0]) { var i = { gdprApplies: e, cmpLoaded: !1, cmpStatus: "stub" }; "function" == typeof n[2] && n[2](i) } else a.push(n) }, n.addEventListener("message", (function (e) { var t = "string" == typeof e.data, a = {}; try { a = t ? JSON.parse(e.data) : e.data } catch (e) { } var n = a.__tcfapiCall; n && window.__tcfapi(n.command, n.version, (function (a, r) { var i = { __tcfapiReturn: { returnValue: a, success: r, callId: n.callId } }; t && (i = JSON.stringify(i)), e.source.postMessage(i, "*") }), n.parameter) }), !1)) }; "undefined" != typeof module ? module.exports = e : e() }();
</script>
<script>
window._sp_ = {
    config: {"accountId":1254,"propertyId":7427,"gdpr":{"consentLanguage":"en"},"baseEndpoint":"https://cdn.privacy-mgmt.com"}}
</script>
<script src="https://cdn.privacy-mgmt.com/wrapperMessagingWithoutDetection.js" async></script>
    <meta charset="utf-8" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" sizes="16x16" href="/favicon-16x16.png">
    <link rel="shortcut icon" sizes="192x192" href="/android-chrome-192x192.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=no" />
<meta name="keywords" content="SK Slavia Prague,Czech Republic" />
<meta name="description" content="Slavia Prague at a glance: The detailed squad overview with all players and data in the season Overall statistics of current season. " />
<meta property="og:type" content="article" />
<meta property="og:image" content="https://tmssl.akamaized.net/images/tm_logo.png" />
<meta property="og:description" content="" />
<meta property="og:title" content="SK Slavia Prague - Detailed squad 21/22 (Detailed view)" />
<meta property="og:url" content="https://www.transfermarkt.com/slug/kader/verein/62/plus/1" />
<link hreflang="de" rel="alternate" href="https://www.transfermarkt.de/slug/kader/verein/62/plus/1" />
<link hreflang="de-LU" rel="alternate" href="https://www.transfermarkt.de/slug/kader/verein/62/plus/1" />
<link hreflang="de-AT" rel="alternate" href="https://www.transfermarkt.at/slug/kader/verein/62/plus/1" />
<link hreflang="de-CH" rel="alternate" href="https://www.transfermarkt.ch/slug/kader/verein/62/plus/1" />
<link hreflang="tr" rel="alternate" href="https://www.transfermarkt.com.tr/slug/kader/verein/62/plus/1" />
<link hreflang="it-CH" rel="alternate" href="https://www.transfermarkt.it/slug/kader/verein/62/plus/1" />
<link hreflang="it" rel="alternate" href="https://www.transfermarkt.it/slug/kader/verein/62/plus/1" />
<link hreflang="pl" rel="alternate" href="https://www.transfermarkt.pl/slug/kader/verein/62/plus/1" />
<link hreflang="en-GB" rel="alternate" href="https://www.transfermarkt.co.uk/slug/kader/verein/62/plus/1" />
<link hreflang="en-IE" rel="alternate" href="https://www.transfermarkt.co.uk/slug/kader/verein/62/plus/1" />
<link hreflang="es" rel="alternate" href="https://www.transfermarkt.es/slug/kader/verein/62/plus/1" />
<link hreflang="es-ES" rel="alternate" href="https://www.transfermarkt.es/slug/kader/verein/62/plus/1" />
<link hreflang="es-CL" rel="alternate" href="https://www.transfermarkt.es/slug/kader/verein/62/plus/1" />
<link hreflang="es-VE" rel="alternate" href="https://www.transfermarkt.es/slug/kader/verein/62/plus/1" />
<link hreflang="es-PE" rel="alternate" href="https://www.transfermarkt.es/slug/kader/verein/62/plus/1" />
<link hreflang="es-EC" rel="alternate" href="https://www.transfermarkt.es/slug/kader/verein/62/plus/1" />
<link hreflang="es-CU" rel="alternate" href="https://www.transfermarkt.es/slug/kader/verein/62/plus/1" />
<link hreflang="nl" rel="alternate" href="https://www.transfermarkt.nl/slug/kader/verein/62/plus/1" />
<link hreflang="pt" rel="alternate" href="https://www.transfermarkt.pt/slug/kader/verein/62/plus/1" />
<link hreflang="ru" rel="alternate" href="https://www.transfermarkt.ru/slug/kader/verein/62/plus/1" />
<link hreflang="fr-CH" rel="alternate" href="https://www.transfermarkt.fr/slug/kader/verein/62/plus/1" />
<link hreflang="fr" rel="alternate" href="https://www.transfermarkt.fr/slug/kader/verein/62/plus/1" />
<link hreflang="fr-CA" rel="alternate" href="https://www.transfermarkt.fr/slug/kader/verein/62/plus/1" />
<link hreflang="fr-CI" rel="alternate" href="https://www.transfermarkt.fr/slug/kader/verein/62/plus/1" />
<link hreflang="fr-LU" rel="alternate" href="https://www.transfermarkt.fr/slug/kader/verein/62/plus/1" />
<link hreflang="fr-BE" rel="alternate" href="https://www.transfermarkt.fr/slug/kader/verein/62/plus/1" />
<link hreflang="pt-BR" rel="alternate" href="https://www.transfermarkt.com.br/slug/kader/verein/62/plus/1" />
<link hreflang="en-US" rel="alternate" href="https://www.transfermarkt.us/slug/kader/verein/62/plus/1" />
<link hreflang="en-CA" rel="alternate" href="https://www.transfermarkt.us/slug/kader/verein/62/plus/1" />
<link hreflang="en-IN" rel="alternate" href="https://www.transfermarkt.co.in/slug/kader/verein/62/plus/1" />
<link hreflang="en-ZA" rel="alternate" href="https://www.transfermarkt.co.za/slug/kader/verein/62/plus/1" />
<link hreflang="x-default" rel="alternate" href="https://www.transfermarkt.com/slug/kader/verein/62/plus/1" />
<link hreflang="en" rel="alternate" href="https://www.transfermarkt.com/slug/kader/verein/62/plus/1" />
<link hreflang="nl-BE" rel="alternate" href="https://www.transfermarkt.be/slug/kader/verein/62/plus/1" />
<link hreflang="es-AR" rel="alternate" href="https://www.transfermarkt.com.ar/slug/kader/verein/62/plus/1" />
<link hreflang="es-MX" rel="alternate" href="https://www.transfermarkt.mx/slug/kader/verein/62/plus/1" />
<link hreflang="es-CO" rel="alternate" href="https://www.transfermarkt.co/slug/kader/verein/62/plus/1" />
<link hreflang="ms" rel="alternate" href="https://www.transfermarkt.my/slug/kader/verein/62/plus/1" />
<link hreflang="ja" rel="alternate" href="https://www.transfermarkt.jp/slug/kader/verein/62/plus/1" />
<link hreflang="id" rel="alternate" href="https://www.transfermarkt.co.id/slug/kader/verein/62/plus/1" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/menue.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-main.min.css?lm=1645174278" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/main.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/main_desktop.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/chosen.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/print.css?_sn=1?lm=1645174342" media="print" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/vereinsseite.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/spielbericht.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/statistiken.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/meintm.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/verein.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/gridview.css?lm=1645174342" />
<script type="text/javascript" src="https://tmssl.akamaized.net/js/vendor/jquery.min.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/assets/b7c5571cf8957553f95f6d9069eaed67/jquery.ba-bbq.min.js?lm=1645174347"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/main.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/chosen.ajaxaddition.jquery.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/functions.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/main_desktop.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/chosen.jquery.js?lm=1645174332"></script>
<title>SK Slavia Prague - Detailed squad 21/22 (Detailed view) | Transfermarkt</title>
    <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-152x152.png">
                <link rel="preload" href="//data-84a0f3455d.transfermarkt.com/iomm/latest/manager/base/es6/bundle.js" as="script" id="IOMmBundle">
            <link rel="preload" href="//data-84a0f3455d.transfermarkt.com/iomm/latest/bootstrap/loader.js" as="script">
            <script type="text/javascript" src="//data-84a0f3455d.transfermarkt.com/iomm/latest/bootstrap/loader.js"></script>

<script type="text/javascript">
   tmData = {
       loggedIn : "0",
       tmTraffic: "0",
   };
</script>
<script>// Set to the same value as the web property used on the site
		var gaProperty = 'UA-3816204-13';

		// Disable tracking if the opt-out cookie exists.
		var disableStr = 'ga-disable-' + gaProperty;
		if (document.cookie.indexOf(disableStr + '=true') > -1) {
			window[disableStr] = true;
		}

		// Opt-out function
		function gaOptout() {
			document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
			window[disableStr] = true;
		}</script>
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-3816204-13"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag() { dataLayer.push(arguments); }
   gtag('set', 'linker', { 'domains': [/^transfermarkt\.(com|de|nl|it|at|ch|es|fr|com\.tr|pt|tv|pl|co\.uk)$/]});
   gtag('js', new Date());
   gtag('set',
  {
    'custom_map': {
                    'dimension1': 'loggedIn',
                    'dimension2': 'tmTraffic'
                }
  });
        gtag('config', 'UA-3816204-13', {
                'anonymize_ip': true,
                'transport_type': 'beacon',
                'content_group1': 'statistik',
                'content_group2': 'verein',
                'content_group3': 'kader',
                'content_group4': '62',
                'loggedIn': tmData.loggedIn,
                'tmTraffic': tmData.tmTraffic
            });
   function tmEvent(category, action, label) {
                gtag('event',
                    action,
                    {
                        'event_category': category,
                        'event_label': label
                    }
                );
            }

            function tmTiming(value, name, event_category, event_label) {
                gtag('event', 'timing_complete', {
                    name,
                    value,
                    event_category,
                    event_label
                });
            }

	</script>    <script type="text/javascript" src="https://tmssl.akamaized.net//ads/ads.js"></script>
    <script type="text/javascript">
        window.tmGaId = "UA-3816204-13";
    </script>

            <link rel="canonical" href="https://www.transfermarkt.com/sk-slavia-prag/kader/verein/62">
    <!--Tisoomi-->
    <div class="werbung werbung-header"><!-- Start GPT Tag -->
                        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
                        <script>
                          window.googletag = window.googletag || {cmd: []};
                          googletag.cmd.push(function() {
                            googletag.defineSlot("/58778164/Desktop-Billboard-1", [[960, 90], [970, 250], [950, 90], [728, 90], [970, 90]], "div-gpt-ad-1621524903956-0")
                            .addService(googletag.pubads());
                            googletag.defineSlot("/58778164/Desktop-MediumRectangle-1", [[300, 250], [336, 280]], "div-gpt-ad-1621526463511-0")
                            .addService(googletag.pubads());
                            googletag.defineSlot("/58778164/Desktop-Skyscraper-1", [[160, 600], [336, 280], [300, 250], [300, 600]], "div-gpt-ad-1621527521939-0")
                            .addService(googletag.pubads());
                            googletag.defineSlot("/58778164/Desktop-MediumRectangle-2", [[336, 280], [300, 250]], "div-gpt-ad-1621528018930-0")
                            .addService(googletag.pubads());
                            googletag.defineSlot("/58778164/Desktop-Skyscraper-2",  [[300, 250], [336, 280], [160, 600], [300, 600]], "div-gpt-ad-1621528123398-0")
                            .addService(googletag.pubads());
                            googletag.defineSlot("/58778164/Desktop-Billboard-2",  [[950, 90], [970, 250], [728, 90], [970, 90], [960, 90]], "div-gpt-ad-1621528173524-0")
                            .addService(googletag.pubads());
                             googletag.pubads().enableLazyLoad({
                                fetchMarginPercent: 500,
                                renderMarginPercent: 200,
                                mobileScaling: 2.0});
                            googletag.pubads().setCentering(true);
                            googletag.pubads().enableSingleRequest();
                            googletag.pubads().setTargeting("cg1", ["verein"]);
                            googletag.pubads().setTargeting("URL", "www.transfermarkt.com");
                            googletag.enableServices();
                          });
                        </script>
                        <!-- End GPT Tag --></div></head>

<body class="" itemscope itemtype="http://schema.org/WebPage" data-tm-tld="com" data-cmp-layer-id="575843">

        <div id="navibalken" class="navibalken hide-for-small"></div>
        <div id="main">
                            <header class="tm-header">
                                <div class="tm-header__box">
                    <a href="/">
                        <img class="icon-logo" src="https://tmsi.akamaized.net/head/transfermarkt_logo.svg" height="62" width="156" title="Transfermarkt" alt="Transfermarkt">
                    </a>
                    <tm-domainswitcher open-list="false" tld="com"></tm-domainswitcher>
                        <div class="tm-header__social-box">
		                <a href="https://www.facebook.com/Transfermarkt.global" target="_blank" class="header__social-link" onclick="tmEvent('SM-Icons_Header','click','Facebook');
">
                    <img src="https://tmsi.akamaized.net/icons/socialMedia/fb_icon_hover.svg" width="20" height="20" class="header__icon header__icon--facebook">
                </a>
                <a href="https://twitter.com/TMuk_news" target="_blank" class="header__social-link" onclick="tmEvent('SM-Icons_Header','click','Twitter');
">
                    <img src="https://tmsi.akamaized.net/icons/socialMedia/twitter_icon_hover.svg" width="20" height="20" class="header__icon header__icon--twitter">
                </a>
                <a href="http://instagram.com/transfermarkt_official" target="_blank" class="header__social-link" onclick="tmEvent('SM-Icons_Header','click','Instagram');
">
                    <img src="https://tmsi.akamaized.net/icons/socialMedia/instagram_icon_hover.svg" width="20" height="20" class="header__icon header__icon--instagram">
                </a>
                <a href="/intern/rssguide" target="_blank" class="header__social-link" onclick="tmEvent('SM-Icons_Header','click','RSS');
">
                    <img src="https://tmsi.akamaized.net/icons/socialMedia/rss_icon_hover.svg" width="20" height="20" class="header__icon header__icon--rss">
                </a>
				    </div>
                        <div class="tm-header__input-wrapper " id="schnellsuche-platz">
                            <form name="schnellsuche" id="schnellsuche" class="tm-header__form" action="/schnellsuche/ergebnis/schnellsuche">
                                <input type="text"
                                       name="query"
                                       class="tm-header__input--search-field"
                                       onClick=""
                                       placeholder="Enter search term"
                                       autocorrect="off"
                                       spellcheck="false"
                                       value=""
                                />
                                <input type="submit" value="" class="tm-header__input--search-send" alt="search" />
                            </form>
                            <a href="/detailsuche/spielerdetail/suche" title="to the player detail search" id="detailsuche-head" class="tm-header__search-detail">
                                <img src="https://tmsi.akamaized.net/icons/search_icon_plus_blue_white.svg" alt="search" class="tm-header__icon-detail-search" height="26" width="26">
                            </a>
                        </div>
                                        </div>

                <div class="row hide-on-print navihalter ">
                    <div class="page_wrapper">
                        <div class="large-12 columns megamenu_container megamenu_dark_bar megamenu_dark">
                                                            <a href="/" class="sticky-logo hide-for-small">
                                    <span title="Transfermarkt" class="tm_svg"></span>
                                </a>
                                                        <ul class="megamenu" id="mainmenue" itemscope="itemscope" itemtype="http://www.schema.org/SiteNavigationElement">
    <li id="mobile_hauptmenu_button">
                <ul id="hauptmenuepunkte">
                                    <li id="naviid_news" class="megamenu_drop_list">
                        <a class="megamenu_drop tm-main-nav-el"
                                                       onClick="tmEvent('News','click','menu');
">
                            News                        </a>
                                                <div class="dropdown_fullwidth">
                            <div class="col_12 menue_main_col">
                                                                    <img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/>
                                                                </div>
                            <div class="col_3 menue_right_col hide-for-small">
                            </div>
                        </div>
                                            </li>
                                            <li id="naviid_transfers" class="megamenu_drop_list">
                        <a class="megamenu_drop tm-main-nav-el"
                                                       onClick="tmEvent('Transfers & Gerüchte','click','menu');
">
                            Transfers & rumours                        </a>
                                                <div class="dropdown_fullwidth">
                            <div class="col_12 menue_main_col">
                                                                    <img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/>
                                                                </div>
                            <div class="col_3 menue_right_col hide-for-small">
                            </div>
                        </div>
                                            </li>
                                            <li id="naviid_marktwerte" class="megamenu_drop_list">
                        <a class="megamenu_drop tm-main-nav-el"
                                                       onClick="tmEvent('Marktwerte','click','menu');
">
                            Market values                        </a>
                                                <div class="dropdown_fullwidth">
                            <div class="col_12 menue_main_col">
                                                                    <img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/>
                                                                </div>
                            <div class="col_3 menue_right_col hide-for-small">
                            </div>
                        </div>
                                            </li>
                                            <li id="naviid_wettbewerbe" class="aktiv megamenu_drop_list">
                        <a class="megamenu_drop tm-main-nav-el"
                                                       onClick="tmEvent('Wettbewerbe','click','menu');
">
                            Competitions                        </a>
                                                <div class="dropdown_fullwidth">
                            <div class="col_12 menue_main_col">
                                                                    <img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/>
                                                                </div>
                            <div class="col_3 menue_right_col hide-for-small">
                            </div>
                        </div>
                                            </li>
                                            <li id="naviid_foren" class="megamenu_drop_list">
                        <a class="megamenu_drop tm-main-nav-el"
                             href="/uebersicht/index/forum/com"                            onClick="tmEvent('Foren','click','menu');
">
                            Forums                        </a>
                                            </li>
                                            <li id="naviid_meintm" class="megamenu_drop_list">
                        <a class="megamenu_drop tm-main-nav-el"
                                                       onClick="tmEvent('MeinTM','click','menu');
">
                            My TM                        </a>
                                                <div class="dropdown_fullwidth">
                            <div class="col_12 menue_main_col">
                                                                    <img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/>
                                                                </div>
                            <div class="col_3 menue_right_col hide-for-small">
                            </div>
                        </div>
                                            </li>
                                            <li class="">
                        <a href="/ticker/index/live" class="live-navilink"
                           onClick="tmEvent('Live','click','menu');
">Live                            <tm-live-match-counter auto-request="true" content='["Live match", "live matches"]'></tm-live-match-counter>
                        </a>
                                            </li>
                            </ul>
    </li>
</ul>

                                                        <form name="schnellsuche" id="schnellsuche-sticky" class="noclose sticky-suche" action="/schnellsuche/ergebnis/schnellsuche">
                                <input type="text" name="query" class="header-suche" onClick="" placeholder="Enter search term" />
                                <input type="image" class="header-suche-abschicken" src="https://tmssl.akamaized.net//images/suchicon.png" alt="search" />
                            </form>
                            <a href="/detailsuche/spielerdetail/suche" title="to the player detail search" id="detailsuche-head" class="header-suche-detailsuche">
                                <span class="icon-detailsuche"></span>
                            </a>
                                                            <a
                                    id="arrow-up-xy"
                                    href="#"
                                >
                                    <svg style="fill: white; width: 20px; height: 20px;" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                         width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                        <g>
                            <path d="M78.016,49.132L51.961,12.714c-0.471-0.66-1.233-1.049-2.043-1.051c-0.006,0-0.006,0-0.006,0
                                c-0.815,0.002-1.575,0.396-2.048,1.059L21.977,49.14c-0.546,0.767-0.616,1.776-0.183,2.612c0.426,0.835,1.292,1.361,2.236,1.361
                                h12.183l-0.001,32.709c0,1.39,1.125,2.515,2.516,2.515l22.541-0.001c1.389,0.001,2.515-1.124,2.516-2.517l0-32.705h12.187
                                c0.94,0,1.803-0.53,2.237-1.367C78.641,50.911,78.566,49.9,78.016,49.132z"/>
                        </g>
                        </svg>
                                </a>

                            <div class="tm-login " id="login" onClick="tmEvent('login','click','sign_in_button');
">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 fill="#FFF" width="100px" height="100px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve" class="tm-login__image">
        <g>
            <path d="M80.161,60.441l-15.66-7.47l-6.622-3.159c2.892-1.822,5.241-4.634,6.778-8.022c1.22-2.69,1.946-5.734,1.946-8.99
                c0-1.827-0.29-3.562-0.694-5.236C63.94,19.453,57.605,13.477,50,13.477c-7.461,0-13.701,5.763-15.792,13.645
                c-0.482,1.808-0.815,3.688-0.815,5.68c0,3.459,0.808,6.684,2.181,9.489c1.587,3.254,3.94,5.937,6.804,7.662l-6.342,2.953
                l-16.168,7.53c-1.404,0.658-2.327,2.242-2.327,4.011v15.062v2.703c0,2.381,1.659,4.312,3.708,4.312h57.505
                c2.048,0,3.708-1.93,3.708-4.312v-2.703V64.446C82.46,62.683,81.552,61.114,80.161,60.441z"/>
        </g>
    </svg>
    <span class="tm-login__cta">
        Log in    </span>
</div>
                        </div>
                    </div>
                </div>

                <div class="row popuphalter">
                        <div id="loginbox" class="small-12"></div>
<div id="registerbox"></div>
<div id="passwortVergessenBox"></div>
                </div>

                                                            <div class="row">
                            <div id="breadcrumb" class="large-12 columns">
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

                <div class="werbung werbung-billboard"><!-- /58778164/Desktop-Billboard-1 -->
                        <div id="div-gpt-ad-1621524903956-0" style="min-width: 728px; min-height: 90px;">
                          <script>
                            googletag.cmd.push(function() { googletag.display("div-gpt-ad-1621524903956-0"); });
                          </script>
                        </div></div>            </header>

            <div class="werbung-skyscraperbtf-container">
                <div class="werbung werbung-skyscraperbtf"><!-- /58778164/Desktop-Skyscraper-2 -->
                        <div id="div-gpt-ad-1621528123398-0" style="min-width: 160px; min-height: 250px;">
                          <script>
                            googletag.cmd.push(function() { googletag.display("div-gpt-ad-1621528123398-0"); });
                          </script>
                        </div></div>            </div>



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
                                            <img src="https://tmssl.akamaized.net/images/erfolge/header/21.png?lm=1461847499" title="Czech Champion" alt="Czech Champion" class="dataErfolgImage" />                                            <span class="dataErfolgAnzahl">7</span>
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
                                            <img src="https://tmssl.akamaized.net/images/erfolge/header/341.png?lm=1632121640" title="Czech Cup Winner" alt="Czech Cup Winner" class="dataErfolgImage" />                                            <span class="dataErfolgAnzahl">6</span>
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
                                30                            </span>
                            </p>
                            <p>
                                <span class="dataItem">Average age:</span>
                            <span class="dataValue">
                                26.2                            </span>
                            </p>
                            <p>
                                <span class="dataItem"> Foreigners:</span>
                            <span class="dataValue">
                                 <a href="/sk-slavia-prague/legionaere/verein/62">13</a>&nbsp;&nbsp;<span class="tabellenplatz">43.3 %</span>                            </span>
                            </p>
                        </div>
                        <div class="dataDaten">
                                                            <p>
                                    <span class="dataItem">National team players:</span>
                                    <span class="dataValue">
                                    <a href="/sk-slavia-prague/nationalspieler/verein/62">16</a>                                    </span>
                                </p>
                                <p>
                                    <span class="dataItem">Stadium:</span>
                                    <span class="dataValue">
                                    <a title="SK Slavia Prague" href="/sk-slavia-prag/stadion/verein/62">Sinobo Stadium</a>&nbsp;&nbsp;<span class="tabellenplatz">19.370 Seats</span>                                    </span>
                                </p>
                                <p>
                                    <span class="dataItem">Current transfer record:</span>
                                    <span class="dataValue">
                                                                                <span class="greentext">
                                            <a class="greentext" href="/sk-slavia-prague/transfers/verein/62/saison_id/2021">+€14.99m</a>                                        </span>
                                    </span>
                                </p>

                        </div>
                        <div class="dataTrikot">

                        </div>
                    </div>
                </div>
                <div class="dataBild ">
                    <img src="https://tmssl.akamaized.net/images/wappen/head/62.png?lm=1615070422" title="&nbsp;" alt="SK Slavia Prague" class="" />                </div>
                                    <div class="dataZusatzbox">
                        <div class="dataZusatzImage">

                            <a href="/fortuna-liga/startseite/wettbewerb/TS1">
                                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://tmssl.akamaized.net/images/logo/mediumquad/ts1.png?lm=1547491735" title="Fortuna Liga" alt="Fortuna Liga" class="lazy lazy" />                            </a>
                        </div>
                        <div class="dataZusatzDaten">
                        <span class="hauptpunkt">
                            <a href="/fortuna-liga/startseite/wettbewerb/TS1">
                                Fortuna Liga                            </a><br />
                        </span>
                                                <span class="mediumpunkt">
                            League level:
                            <a href="/fortuna-liga/startseite/wettbewerb/TS1">
                                <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://tmssl.akamaized.net/images/flagge/tiny/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen vm lazy lazy" />First Tier                            </a>
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
                                title="">3 years</a>
                        </span>
                            <br/>
                        <span class="mediumpunkt">

                        </span>

                        </div>
                    </div>
                                                    <div class="dataMarktwert">
                                                <a href="/sk-slavia-prague/kader/verein/62"><span class="waehrung">€</span>72.95<span class="waehrung">m</span>                        <p>Total market value</p></a>
                    </div>
                                                    <div id="listeVerknupfterVereine">
                        <div id="weitereVereine">+</div>
                        <div id="alleTemsVerein" class="noclose">
                            <img src="https://tmssl.akamaized.net/images/wappen/tiny/62.png?lm=1615070422" title="&nbsp;" alt="SK Slavia Prague" class="tiny_wappen" /><span><a title="SK Slavia Prague" href="/sk-slavia-prag/startseite/verein/62">SK Slavia Prague</a></span><br /><img src="https://tmssl.akamaized.net/images/wappen/tiny/6541.png?lm=1615070422" title="&nbsp;" alt="SK Slavia Prague B" class="tiny_wappen" /><span><a title="SK Slavia Prague B" href="/sk-slavia-prag-b/startseite/verein/6541">SK Slavia Prague B</a></span><br /><img src="https://tmssl.akamaized.net/images/wappen/tiny/14340.png?lm=1615070423" title="&nbsp;" alt="SK Slavia Prague U19" class="tiny_wappen" /><span><a title="SK Slavia Prague U19" href="/sk-slavia-prag-u19/startseite/verein/14340">SK Slavia Prague U19</a></span><br /><img src="https://tmssl.akamaized.net/images/wappen/tiny/73624.png?lm=1615070423" title="&nbsp;" alt="SK Slavia Prague U17" class="tiny_wappen" /><span><a title="SK Slavia Prague U17" href="/sk-slavia-prag-u17/startseite/verein/73624">SK Slavia Prague U17</a></span><br /><img src="https://tmssl.akamaized.net/images/wappen/tiny/76578.png?lm=1615070423" title="&nbsp;" alt="SK Slavia Prag UEFA U19" class="tiny_wappen" /><span><a title="SK Slavia Prag UEFA U19" href="/sk-slavia-prag-uefa-u19/startseite/verein/76578">SK Slavia Prag UEFA U19</a></span><br />                        </div>
                    </div>
                            </div>
                            <div class="dataErfolge show-for-small">
                                            <a href="/sk-slavia-prague/erfolge/verein/62"
                           title="Czech Champion">
                            <div class="dataErfolg">
                                <img src="https://tmssl.akamaized.net/images/erfolge/header/21.png?lm=1461847499" title="Czech Champion" alt="Czech Champion" class="dataErfolgImage" />                                <span class="dataErfolgAnzahl">7</span>
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
                                <img src="https://tmssl.akamaized.net/images/erfolge/header/341.png?lm=1632121640" title="Czech Cup Winner" alt="Czech Cup Winner" class="dataErfolgImage" />                                <span class="dataErfolgAnzahl">6</span>
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
    <a href="https://www.transfermarkt.com/whatsMyValue"
   class="db mt10"
   onclick="tmEvent('banner', 'https://www.transfermarkt.com/whatsMyValue', 'd-day-banner');">
    <img
        src="https://dzjovqk3zamsg.cloudfront.net/WMV_NEW_0222_Banner_Desktop_EN.jpg"
        width="1034"
        height="99"
        alt="deadline-day banner">
</a>
    <div
        class="row hide-on-print"
        id="subnavi"
        data-season=""
        data-controller="verein"
        data-action="kader"
        data-path="slug/kader/verein/62/plus/1"
        data-id="62"
        >
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
                                                                <li id="overview" class="first-button  ">
                                        <a name="SubNavi" href="/sk-slavia-prag/startseite/verein/62/saison_id/2021" class="tm-subnav-item megamenu" onClick="tmEvent('subnavigation_verein','click','uebersicht');
">Overview</a>
                                                                            </li>
                                                                        <li id="squad" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="tm-subnav-item megamenu_drop" onClick="tmEvent('subnavigation_verein','click','kader');
">Squad</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/></div></div>                                    </li>
                                                                        <li id="fixtures" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="tm-subnav-item megamenu_drop" onClick="tmEvent('subnavigation_verein','click','spielplan');
">Fixtures</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/></div></div>                                    </li>
                                                                        <li id="transfers-amp-rumours" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="tm-subnav-item megamenu_drop" onClick="tmEvent('subnavigation_verein','click','transfers-amp-geruchte');
">Transfers & rumours</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/></div></div>                                    </li>
                                                                        <li id="information-amp-facts" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="tm-subnav-item megamenu_drop" onClick="tmEvent('subnavigation_verein','click','daten_und_fakten');
">Information & facts</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/></div></div>                                    </li>
                                                                        <li id="stadium" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="tm-subnav-item megamenu_drop" onClick="tmEvent('subnavigation_verein','click','stadion');
">Stadium</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/></div></div>                                    </li>
                                                                        <li id="history" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="tm-subnav-item megamenu_drop" onClick="tmEvent('subnavigation_verein','click','historie');
">History</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/></div></div>                                    </li>
                                                                        <li id="news" class="  ">
                                        <a name="SubNavi" href="/sk-slavia-prag/news/verein/62" class="tm-subnav-item megamenu" onClick="tmEvent('subnavigation_verein','click','news');
">News</a>
                                                                            </li>
                                                                        <li id="subnavi-edit" class="  subnavi-edit">
                                        <a name="SubNavi" href="#subnavi" class="tm-subnav-item megamenu_drop" onClick="tmEvent('subnavigation_verein','click','edit');
"></a>
                                        <div class="dropdown_fullwidth gasthinweis" title="Log in or register now"><div><img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/></div></div>                                    </li>
                                                            </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <script>
        var stickySubTop = $('#subnavigation').offset().top;
        stickySubTop = stickySubTop - 60;
        var main = $(".content__main");
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

<div class="teilen-desktop-link" name="teilen-desktop" onClick="tmEvent('teilen-desktop','click','teilen');
">
    <ul>
                <li><a href="mailto:?to=&subject=Squad&body=https%3A%2F%2Fwww.transfermarkt.com%2Fslug%2Fkader%2Fverein%2F62%2Fplus%2F1" class="MailToLink" name="teilen-mail-desktop" onClick="tmEvent('teilen-mail-desktop','click','teilen');
"><img src="https://tmsi.akamaized.net/icons/mail-schwarz.svg" alt="Mail" /></a></li>
        <li><a href="https://twitter.com/share?url=https%3A%2F%2Fwww.transfermarkt.com%2Fslug%2Fkader%2Fverein%2F62%2Fplus%2F1&text=Squad" target="_blank" class="TwitterLink" name="teilen-twitter-desktop" onClick="tmEvent('teilen-twitter-desktop','click','teilen');
"><img src="https://tmsi.akamaized.net/icons/Twitter-Blau.svg" alt="Twitter" /></a></li>
        <li><a href="http://www.facebook.com/share.php?u=https%3A%2F%2Fwww.transfermarkt.com%2Fslug%2Fkader%2Fverein%2F62%2Fplus%2F1" target="_blank" class="FacebookLink" name="teilen-facebook-desktop" onClick="tmEvent('teilen-facebook-desktop','click','teilen');
"><img src="https://tmsi.akamaized.net/icons/Facebook-Blau.svg" alt="Facebook" /></a></li>
    </ul>
</div>                        <a class="button dropdown toggler statistik-toggler dnu hide-for-small" data-toggle="statistik-infoblock"></a>
                    </div>
                </div>
                <div id="statistik-infoblock">
                    <p class="info-content">
                        This page displays a detailed overview of the club's current squad. It shows all personal information about the players, including age, nationality, contract duration and market value. It also contains a table with average age, cumulative market value and average market value for each player position and overall.                    </p>
                    <div class="content">
                                                    <div class="content">
                                <form action="/sk-slavia-prague/kader/verein/62/plus/1/galerie/0" method="get">                                <div class="row">
                                    <div class="large-12 columns">
                                        <table class="auflistung">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Filter by season                                                    </td>
                                                    <td>
                                                        <div class="inline-select">
                                                            <select name="saison_id" data-placeholder="Filter by season" class="chzn-select" tabindex="0">
                                                                                                                                    <option  selected="selected"value="2021">21/22                                                                    </option>
                                                                                                                                    <option value="2020">20/21                                                                    </option>
                                                                                                                                    <option value="2019">19/20                                                                    </option>
                                                                                                                                    <option value="2018">18/19                                                                    </option>
                                                                                                                                    <option value="2017">17/18                                                                    </option>
                                                                                                                                    <option value="2016">16/17                                                                    </option>
                                                                                                                                    <option value="2015">15/16                                                                    </option>
                                                                                                                                    <option value="2014">14/15                                                                    </option>
                                                                                                                                    <option value="2013">13/14                                                                    </option>
                                                                                                                                    <option value="2012">12/13                                                                    </option>
                                                                                                                                    <option value="2011">11/12                                                                    </option>
                                                                                                                                    <option value="2010">10/11                                                                    </option>
                                                                                                                                    <option value="2009">09/10                                                                    </option>
                                                                                                                                    <option value="2008">08/09                                                                    </option>
                                                                                                                                    <option value="2007">07/08                                                                    </option>
                                                                                                                                    <option value="2006">06/07                                                                    </option>
                                                                                                                                    <option value="2005">05/06                                                                    </option>
                                                                                                                                    <option value="2004">04/05                                                                    </option>
                                                                                                                                    <option value="2003">03/04                                                                    </option>
                                                                                                                                    <option value="2002">02/03                                                                    </option>
                                                                                                                                    <option value="2001">01/02                                                                    </option>
                                                                                                                                    <option value="2000">00/01                                                                    </option>
                                                                                                                                    <option value="1999">99/00                                                                    </option>
                                                                                                                                    <option value="1998">98/99                                                                    </option>
                                                                                                                                    <option value="1997">97/98                                                                    </option>
                                                                                                                                    <option value="1996">96/97                                                                    </option>
                                                                                                                                    <option value="1995">95/96                                                                    </option>
                                                                                                                                    <option value="1994">94/95                                                                    </option>
                                                                                                                                    <option value="1993">93/94                                                                    </option>
                                                                                                                                    <option value="1992">92/93                                                                    </option>
                                                                                                                                    <option value="1991">91/92                                                                    </option>
                                                                                                                                    <option value="1990">90/91                                                                    </option>
                                                                                                                                    <option value="1989">89/90                                                                    </option>
                                                                                                                                    <option value="1987">87/88                                                                    </option>
                                                                                                                                    <option value="1986">86/87                                                                    </option>
                                                                                                                                    <option value="1985">85/86                                                                    </option>
                                                                                                                                    <option value="1984">84/85                                                                    </option>
                                                                                                                                    <option value="1983">83/84                                                                    </option>
                                                                                                                                    <option value="1982">82/83                                                                    </option>
                                                                                                                                    <option value="1981">81/82                                                                    </option>
                                                                                                                                    <option value="1979">79/80                                                                    </option>
                                                                                                                                    <option value="1978">78/79                                                                    </option>
                                                                                                                                    <option value="1977">77/78                                                                    </option>
                                                                                                                                    <option value="1976">76/77                                                                    </option>
                                                                                                                                    <option value="1975">75/76                                                                    </option>
                                                                                                                                    <option value="1974">74/75                                                                    </option>
                                                                                                                                    <option value="1973">73/74                                                                    </option>
                                                                                                                                    <option value="1972">72/73                                                                    </option>
                                                                                                                                    <option value="1970">70/71                                                                    </option>
                                                                                                                                    <option value="1969">69/70                                                                    </option>
                                                                                                                                    <option value="1968">68/69                                                                    </option>
                                                                                                                                    <option value="1967">67/68                                                                    </option>
                                                                                                                                    <option value="1966">66/67                                                                    </option>
                                                                                                                                    <option value="1965">65/66                                                                    </option>
                                                                                                                                    <option value="1963">63/64                                                                    </option>
                                                                                                                                    <option value="1958">58/59                                                                    </option>
                                                                                                                                    <option value="1957">57/58                                                                    </option>
                                                                                                                                    <option value="1950">50/51                                                                    </option>
                                                                                                                                    <option value="1949">49/50                                                                    </option>
                                                                                                                                    <option value="1948">48/49                                                                    </option>
                                                                                                                                    <option value="1947">47/48                                                                    </option>
                                                                                                                                    <option value="1946">46/47                                                                    </option>
                                                                                                                                    <option value="1945">45/46                                                                    </option>
                                                                                                                                    <option value="1944">44/45                                                                    </option>
                                                                                                                                    <option value="1943">43/44                                                                    </option>
                                                                                                                                    <option value="1942">42/43                                                                    </option>
                                                                                                                                    <option value="1941">41/42                                                                    </option>
                                                                                                                                    <option value="1940">40/41                                                                    </option>
                                                                                                                                    <option value="1939">39/40                                                                    </option>
                                                                                                                                    <option value="1938">38/39                                                                    </option>
                                                                                                                                    <option value="1937">37/38                                                                    </option>
                                                                                                                                    <option value="1936">36/37                                                                    </option>
                                                                                                                                    <option value="1935">35/36                                                                    </option>
                                                                                                                                    <option value="1934">34/35                                                                    </option>
                                                                                                                                    <option value="1933">33/34                                                                    </option>
                                                                                                                                    <option value="1932">32/33                                                                    </option>
                                                                                                                                    <option value="1931">31/32                                                                    </option>
                                                                                                                                    <option value="1930">30/31                                                                    </option>
                                                                                                                                    <option value="1929">1929/30                                                                    </option>
                                                                                                                                    <option value="1928">1928/29                                                                    </option>
                                                                                                                                    <option value="1927">1927/28                                                                    </option>
                                                                                                                                    <option value="1926">1926/27                                                                    </option>
                                                                                                                                    <option value="1925">1925/26                                                                    </option>
                                                                                                                                    <option value="1924">1924/25                                                                    </option>
                                                                                                                                    <option value="1923">1923/24                                                                    </option>
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

<div class="tm-tabs">
    <a class="tm-tab" href="/sk-slavia-prague/kader/verein/62/saison_id/2021"><div class=""><span>Compact</span></div></a><a class="tm-tab tm-tab__active--parent" href="/sk-slavia-prague/kader/verein/62/saison_id/2021/plus/1"><div class=" tm-tab__active"><span>Detailed</span></div></a><a class="tm-tab" href="/sk-slavia-prague/kader/verein/62/saison_id/2021/galerie/1"><div class=""><span>Gallery</span></div></a></div>
                <div class="responsive-table">
                    <div id="yw1" class="grid-view">
<div class="summary"></div>
<table class="items">
<thead>
<tr>
<th class="zentriert" id="yw1_c0"><a class="sort-link asc" href="/slug/kader/verein/62/plus/1/sort/trikotNumber.desc">#</a></th><th id="yw1_c1">player</th><th class="zentriert" id="yw1_c2"><a class="sort-link" href="/slug/kader/verein/62/plus/1/sort/age">Date of birth / Age</a></th><th class="zentriert" id="yw1_c3">Nat.</th><th class="zentriert" id="yw1_c4"><a class="sort-link" href="/slug/kader/verein/62/plus/1/sort/size.desc">Height</a></th><th class="zentriert" id="yw1_c5"><a class="sort-link" href="/slug/kader/verein/62/plus/1/sort/foot.desc">Foot</a></th><th class="zentriert" id="yw1_c6"><a class="sort-link" href="/slug/kader/verein/62/plus/1/sort/teamMemberSinceTimestamp">Joined</a></th><th class="zentriert" id="yw1_c7">Signed from</th><th class="zentriert" id="yw1_c8"><a class="sort-link" href="/slug/kader/verein/62/plus/1/sort/contractEndTimestamp">Contract</a></th><th class="rechts" id="yw1_c9"><a class="sort-link desc" href="/slug/kader/verein/62/plus/1/sort/marketValueRaw">Market value</a></th></tr>
</thead>
<tbody>
<tr class="odd">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Torwart"><div class=rn_nummer>1</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/189630-1632249371.png?lm=1" title="Ondrej Kolar" alt="Ondrej Kolar" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/ondrej-kolar/profil/spieler/189630">
                Ondrej Kolar            </a>
        </td>
    </tr>
    <tr>
        <td>
            Goalkeeper        </td>
    </tr>
</table>
</td><td class="zentriert">Oct 17, 1994(27)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,93 m</td><td class="zentriert">right</td><td class="zentriert">Jan 22, 2018</td><td class="zentriert"><a title="FC Slovan Liberec: Ablöse €1.00m" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2017"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/697.png?lm=1419784849" title=": Ablöse €1.00m" alt="FC Slovan Liberec" class="" /></a></td><td class="zentriert">Jun 30, 2024</td><td class="rechts hauptlink">€6.00m</td></tr>
<tr class="even">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Torwart"><div class=rn_nummer>28</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined from SK Sigma Olomouc; date: Jul 12, 2021; fee: €390Th." href="/sk-sigma-olomouc/startseite/verein/2311/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/2311.png?lm=1419785397" title="Joined from SK Sigma Olomouc; date: Jul 12, 2021; fee: €390Th." alt="SK Sigma Olomouc" class="" /></a></span><a title="Joined from SK Sigma Olomouc; date: Jul 12, 2021; fee: €390Th." class="hide-for-small" href="/sk-sigma-olomouc/startseite/verein/2311/saison_id/2021"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/240536-1632249419.png?lm=1" title="Ales Mandous" alt="Ales Mandous" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/ales-mandous/profil/spieler/240536">
                Ales Mandous            </a>
        </td>
    </tr>
    <tr>
        <td>
            Goalkeeper        </td>
    </tr>
</table>
</td><td class="zentriert">Apr 21, 1992(29)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,88 m</td><td class="zentriert">&nbsp;</td><td class="zentriert">Jul 12, 2021</td><td class="zentriert"><a title="SK Sigma Olomouc: Ablöse €390Th." href="/sk-sigma-olmutz/startseite/verein/2311/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/2311.png?lm=1419785397" title=": Ablöse €390Th." alt="SK Sigma Olomouc" class="" /></a></td><td class="zentriert">Jun 30, 2026</td><td class="rechts hauptlink">€2.00m</td></tr>
<tr class="odd">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Torwart"><div class=rn_nummer>31</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/70625-1632249450.png?lm=1" title="Premysl Kovar" alt="Premysl Kovar" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/premysl-kovar/profil/spieler/70625">
                Premysl Kovar<span title="No eligibility - until Feb 25, 2022 - UEFA Europa Conference League - 8 matchdays" class="ausfall-9-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Goalkeeper        </td>
    </tr>
</table>
</td><td class="zentriert">Oct 14, 1985(36)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,87 m</td><td class="zentriert">right</td><td class="zentriert">Jan 1, 2017</td><td class="zentriert"><a title="Cherno More Varna: Ablöse €200Th." href="/cherno-more-varna/startseite/verein/967/saison_id/2016"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/967.png?lm=1416145122" title=": Ablöse €200Th." alt="Cherno More Varna" class="" /></a></td><td class="zentriert">Jun 30, 2022</td><td class="rechts hauptlink">€50Th.</td></tr>
<tr class="even">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>30</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined as a winter arrival from: FC Slovan Liberec; date: Jan 1, 2022; fee: €800Th." href="/fc-slovan-liberec/startseite/verein/697/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/697.png?lm=1419784849" title="Joined as a winter arrival from: FC Slovan Liberec; date: Jan 1, 2022; fee: €800Th." alt="FC Slovan Liberec" class="" /></a></span><a title="Joined as a winter arrival from: FC Slovan Liberec; date: Jan 1, 2022; fee: €800Th." class="hide-for-small" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2021"><img src="/images/icons/winterzugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/213975-1632249666.png?lm=1" title="Taras Kacharaba" alt="Taras Kacharaba" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/taras-kacharaba/profil/spieler/213975">
                Taras Kacharaba            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Back        </td>
    </tr>
</table>
</td><td class="zentriert">Jan 7, 1995(27)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/177.png?lm=1520611569" title="Ukraine" alt="Ukraine" class="flaggenrahmen" /></td><td class="zentriert">1,89 m</td><td class="zentriert">right</td><td class="zentriert">Jan 1, 2022</td><td class="zentriert"><a title="FC Slovan Liberec: Ablöse €800Th." href="/fc-slovan-liberec/startseite/verein/697/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/697.png?lm=1419784849" title=": Ablöse €800Th." alt="FC Slovan Liberec" class="" /></a></td><td class="zentriert">Dec 31, 2024</td><td class="rechts hauptlink">€1.50m</td></tr>
<tr class="odd">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>4</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined from BK Häcken; date: Jul 21, 2021; fee: €600Th." href="/bk-hacken/startseite/verein/1109/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/1109.png?lm=1406273241" title="Joined from BK Häcken; date: Jul 21, 2021; fee: €600Th." alt="BK Häcken" class="" /></a></span><a title="Joined from BK Häcken; date: Jul 21, 2021; fee: €600Th." class="hide-for-small" href="/bk-hacken/startseite/verein/1109/saison_id/2021"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/585068-1632249622.png?lm=1" title="Aiham Ousou" alt="Aiham Ousou" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/aiham-ousou/profil/spieler/585068">
                Aiham Ousou            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Back        </td>
    </tr>
</table>
</td><td class="zentriert">Jan 9, 2000(22)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/147.png?lm=1520611569" title="Sweden" alt="Sweden" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net/images/flagge/verysmall/163.png?lm=1520611569" title="Syria" alt="Syria" class="flaggenrahmen" /></td><td class="zentriert">1,86 m</td><td class="zentriert">right</td><td class="zentriert">Jul 21, 2021</td><td class="zentriert"><a title="BK Häcken: Ablöse €600Th." href="/bk-hacken/startseite/verein/1109/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/1109.png?lm=1406273241" title=": Ablöse €600Th." alt="BK Häcken" class="" /></a></td><td class="zentriert">Jun 30, 2026</td><td class="rechts hauptlink">€1.20m</td></tr>
<tr class="even">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>15</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/35699-1632249692.png?lm=1" title="Ondrej Kudela" alt="Ondrej Kudela" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/ondrej-kudela/profil/spieler/35699">
                Ondrej Kudela<span title="Ankle Injury - Return expected on Mar 2, 2022" class="verletzt-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Back        </td>
    </tr>
</table>
</td><td class="zentriert">Mar 26, 1987(34)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,82 m</td><td class="zentriert">right</td><td class="zentriert">Jan 19, 2018</td><td class="zentriert"><a title="FC Slovan Liberec: Ablöse €400Th." href="/fc-slovan-liberec/startseite/verein/697/saison_id/2017"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/697.png?lm=1419784849" title=": Ablöse €400Th." alt="FC Slovan Liberec" class="" /></a></td><td class="zentriert">Jun 30, 2022</td><td class="rechts hauptlink">€1.00m</td></tr>
<tr class="odd">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>6</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined as a winter arrival from: SK Dynamo Ceske Budejovice; date: Jan 5, 2022; fee: €500Th." href="/sk-dynamo-ceske-budejovice/startseite/verein/1321/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/1321.png?lm=1419785284" title="Joined as a winter arrival from: SK Dynamo Ceske Budejovice; date: Jan 5, 2022; fee: €500Th." alt="SK Dynamo Ceske Budejovice" class="" /></a></span><a title="Joined as a winter arrival from: SK Dynamo Ceske Budejovice; date: Jan 5, 2022; fee: €500Th." class="hide-for-small" href="/sk-dynamo-ceske-budejovice/startseite/verein/1321/saison_id/2021"><img src="/images/icons/winterzugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/668557-1614143109.png?lm=1" title="Maksym Taloverov" alt="Maksym Taloverov" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/maksym-taloverov/profil/spieler/668557">
                Maksym Taloverov            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Back        </td>
    </tr>
</table>
</td><td class="zentriert">Jun 28, 2000(21)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/177.png?lm=1520611569" title="Ukraine" alt="Ukraine" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net/images/flagge/verysmall/141.png?lm=1520611569" title="Russia" alt="Russia" class="flaggenrahmen" /></td><td class="zentriert">1,95 m</td><td class="zentriert">right</td><td class="zentriert">Jan 5, 2022</td><td class="zentriert"><a title="SK Dynamo Ceske Budejovice: Ablöse €500Th." href="/sk-dynamo-ceske-budejovice/startseite/verein/1321/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/1321.png?lm=1419785284" title=": Ablöse €500Th." alt="SK Dynamo Ceske Budejovice" class="" /></a></td><td class="zentriert">Dec 31, 2026</td><td class="rechts hauptlink">€750Th.</td></tr>
<tr class="even">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>2</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/263431-1632249681.png?lm=1" title="David Hovorka" alt="David Hovorka" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/david-hovorka/profil/spieler/263431">
                David Hovorka<span title="Cruciate Ligament Surgery - Return expected on Mar 15, 2022" class="verletzt-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Back        </td>
    </tr>
</table>
</td><td class="zentriert">Aug 7, 1993(28)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,79 m</td><td class="zentriert">right</td><td class="zentriert">Jul 1, 2019</td><td class="zentriert"><a title="FK Jablonec: Ablöse €1.20m" href="/fk-jablonec/startseite/verein/1322/saison_id/2019"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/1322.png?lm=1551278724" title=": Ablöse €1.20m" alt="FK Jablonec" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€500Th.</td></tr>
<tr class="odd">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>19</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/401475-1632249612.png?lm=1" title="Oscar Dorley" alt="Oscar Dorley" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/oscar-dorley/profil/spieler/401475">
                Oscar Dorley            </a>
        </td>
    </tr>
    <tr>
        <td>
            Left-Back        </td>
    </tr>
</table>
</td><td class="zentriert">Jul 19, 1998(23)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/95.png?lm=1520611569" title="Liberia" alt="Liberia" class="flaggenrahmen" /></td><td class="zentriert">1,74 m</td><td class="zentriert">left</td><td class="zentriert">Aug 11, 2019</td><td class="zentriert"><a title="FC Slovan Liberec: Ablöse €1.00m" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2019"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/697.png?lm=1419784849" title=": Ablöse €1.00m" alt="FC Slovan Liberec" class="" /></a></td><td class="zentriert">Jun 30, 2025</td><td class="rechts hauptlink">€3.50m</td></tr>
<tr class="even">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>18</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/129655-1632249595.png?lm=1" title="Jan Boril" alt="Jan Boril" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/jan-boril/profil/spieler/129655">
                Jan Boril<span title="No eligibility - until Feb 25, 2022 - UEFA Europa Conference League - 2 matchdays" class="ausfall-9-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Left-Back        </td>
    </tr>
</table>
</td><td class="zentriert">Jan 11, 1991(31)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,75 m</td><td class="zentriert">right</td><td class="zentriert">Jan 7, 2016</td><td class="zentriert"><a title="FK Mlada Boleslav: Ablöse €350Th." href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2015"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/5546.png?lm=1419784887" title=": Ablöse €350Th." alt="FK Mlada Boleslav" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€1.80m</td></tr>
<tr class="odd">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>33</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined as a winter arrival from: FK Mlada Boleslav; date: Feb 10, 2022; fee: €1.00m" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/5546.png?lm=1419784887" title="Joined as a winter arrival from: FK Mlada Boleslav; date: Feb 10, 2022; fee: €1.00m" alt="FK Mlada Boleslav" class="" /></a></span><a title="Joined as a winter arrival from: FK Mlada Boleslav; date: Feb 10, 2022; fee: €1.00m" class="hide-for-small" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2021"><img src="/images/icons/winterzugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/500054-1628533418.jpg?lm=1" title="David Jurasek" alt="David Jurasek" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/david-jurasek/profil/spieler/500054">
                David Jurasek<span title="Yellow card suspension - until Feb 21, 2022 - Fortuna Liga - 1 matchday" class="ausfall-1-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Left-Back        </td>
    </tr>
</table>
</td><td class="zentriert">Aug 7, 2000(21)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,83 m</td><td class="zentriert">left</td><td class="zentriert">Feb 10, 2022</td><td class="zentriert"><a title="FK Mlada Boleslav: Ablöse €1.00m" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/5546.png?lm=1419784887" title=": Ablöse €1.00m" alt="FK Mlada Boleslav" class="" /></a></td><td class="zentriert">Jun 30, 2026</td><td class="rechts hauptlink">€400Th.</td></tr>
<tr class="even">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Abwehr"><div class=rn_nummer>5</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/452607-1632249586.png?lm=1" title="Alexander Bah" alt="Alexander Bah" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/alexander-bah/profil/spieler/452607">
                Alexander Bah            </a>
        </td>
    </tr>
    <tr>
        <td>
            Right-Back        </td>
    </tr>
</table>
</td><td class="zentriert">Dec 9, 1997(24)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/39.png?lm=1520611569" title="Denmark" alt="Denmark" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net/images/flagge/verysmall/52.png?lm=1520611569" title="The Gambia" alt="The Gambia" class="flaggenrahmen" /></td><td class="zentriert">1,83 m</td><td class="zentriert">right</td><td class="zentriert">Jan 5, 2021</td><td class="zentriert"><a title="SönderjyskE: Ablöse €1.75m" href="/sonderjyske/startseite/verein/5817/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/5817.png?lm=1518117723" title=": Ablöse €1.75m" alt="SönderjyskE" class="" /></a></td><td class="zentriert">Jun 30, 2025</td><td class="rechts hauptlink">€6.00m</td></tr>
<tr class="odd">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>3</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/216278-1632250076.png?lm=1" title="Tomas Holes" alt="Tomas Holes" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/tomas-holes/profil/spieler/216278">
                Tomas Holes            </a>
        </td>
    </tr>
    <tr>
        <td>
            Defensive Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">Mar 31, 1993(28)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,80 m</td><td class="zentriert">&nbsp;</td><td class="zentriert">Jul 1, 2019</td><td class="zentriert"><a title="FK Jablonec: Ablöse €1.60m" href="/fk-jablonec/startseite/verein/1322/saison_id/2019"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/1322.png?lm=1551278724" title=": Ablöse €1.60m" alt="FK Jablonec" class="" /></a></td><td class="zentriert">Jun 30, 2026</td><td class="rechts hauptlink">€7.00m</td></tr>
<tr class="even">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>13</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Internal transfer: SK Slavia Prague B; date: Jul 1, 2021" href="/sk-slavia-prague-b/startseite/verein/6541/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/6541.png?lm=1615070422" title="Internal transfer: SK Slavia Prague B; date: Jul 1, 2021" alt="SK Slavia Prague B" class="" /></a></span><a title="Internal transfer: SK Slavia Prague B; date: Jul 1, 2021" class="hide-for-small" href="/sk-slavia-prague-b/startseite/verein/6541/saison_id/2021"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/671542-1632250182.png?lm=1" title="Daniel Samek" alt="Daniel Samek" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/daniel-samek/profil/spieler/671542">
                Daniel Samek            </a>
        </td>
    </tr>
    <tr>
        <td>
            Defensive Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">Feb 19, 2004(18)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,84 m</td><td class="zentriert">right</td><td class="zentriert">Jul 1, 2021</td><td class="zentriert"><a title="SK Slavia Prague B: Ablöse -" href="/sk-slavia-prag-b/startseite/verein/6541/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/6541.png?lm=1615070422" title=": Ablöse -" alt="SK Slavia Prague B" class="" /></a></td><td class="zentriert">-</td><td class="rechts hauptlink">€2.20m</td></tr>
<tr class="odd">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>25</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/186380-1632250091.png?lm=1" title="Jakub Hromada" alt="Jakub Hromada" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/jakub-hromada/profil/spieler/186380">
                Jakub Hromada<span title="No eligibility - until Feb 25, 2022 - UEFA Europa Conference League - 8 matchdays" class="ausfall-9-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Defensive Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">May 25, 1996(25)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/154.png?lm=1520611569" title="Slovakia" alt="Slovakia" class="flaggenrahmen" /></td><td class="zentriert">1,80 m</td><td class="zentriert">right</td><td class="zentriert">Jul 1, 2017</td><td class="zentriert"><a title="UC Sampdoria: Ablöse €500Th." href="/sampdoria-genua/startseite/verein/1038/saison_id/2017"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/1038.png?lm=1520934353" title=": Ablöse €500Th." alt="UC Sampdoria" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€1.50m</td></tr>
<tr class="even">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>24</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Returned after loan spell with FK Mlada Boleslav; date: Jun 30, 2021; fee: End of loan" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/5546.png?lm=1419784887" title="Returned after loan spell with FK Mlada Boleslav; date: Jun 30, 2021; fee: End of loan" alt="FK Mlada Boleslav" class="" /></a></span><a title="Returned after loan spell with FK Mlada Boleslav; date: Jun 30, 2021; fee: End of loan" class="hide-for-small" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2020"><img src="/images/icons/rueckkehr_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/303440-1632251192.png?lm=1" title="Laco Takacs" alt="Laco Takacs" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/laco-takacs/profil/spieler/303440">
                Laco Takacs<span title="No eligibility - until Feb 25, 2022 - UEFA Europa Conference League - 2 matchdays" class="ausfall-9-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Defensive Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">Jul 15, 1996(25)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,93 m</td><td class="zentriert">&nbsp;</td><td class="zentriert">Jan 1, 2020</td><td class="zentriert"><a title="FK Mlada Boleslav: Ablöse €1.00m" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2019"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/5546.png?lm=1419784887" title=": Ablöse €1.00m" alt="FK Mlada Boleslav" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€750Th.</td></tr>
<tr class="odd">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>23</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/147555-1632250191.png?lm=1" title="Petr Sevcik" alt="Petr Sevcik" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/petr-sevcik/profil/spieler/147555">
                Petr Sevcik            </a>
        </td>
    </tr>
    <tr>
        <td>
            Central Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">May 4, 1994(27)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,72 m</td><td class="zentriert">right</td><td class="zentriert">Jan 1, 2019</td><td class="zentriert"><a title="FC Slovan Liberec: Ablöse €1.00m" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2018"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/697.png?lm=1419784849" title=": Ablöse €1.00m" alt="FC Slovan Liberec" class="" /></a></td><td class="zentriert">Jun 30, 2025</td><td class="rechts hauptlink">€3.50m</td></tr>
<tr class="even">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>27</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/179236-1632250250.png?lm=1" title="Ibrahim Traoré" alt="Ibrahim Traoré" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/ibrahim-traore/profil/spieler/179236">
                Ibrahim Traoré            </a>
        </td>
    </tr>
    <tr>
        <td>
            Central Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">Sep 16, 1988(33)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/38.png?lm=1520611569" title="Cote d'Ivoire" alt="Cote d'Ivoire" class="flaggenrahmen" /></td><td class="zentriert">1,87 m</td><td class="zentriert">right</td><td class="zentriert">Jan 1, 2019</td><td class="zentriert"><a title="FC Fastav Zlin: Ablöse €200Th." href="/fc-fastav-zlin/startseite/verein/5545/saison_id/2018"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/5545.png?lm=1419785784" title=": Ablöse €200Th." alt="FC Fastav Zlin" class="" /></a></td><td class="zentriert">Jun 30, 2022</td><td class="rechts hauptlink">€1.00m</td></tr>
<tr class="odd">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>21</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined from LASK; date: Jul 5, 2021; fee: €1.00m" href="/lask/startseite/verein/413/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/413.png?lm=1569950442" title="Joined from LASK; date: Jul 5, 2021; fee: €1.00m" alt="LASK" class="" /></a></span><a title="Joined from LASK; date: Jul 5, 2021; fee: €1.00m" class="hide-for-small" href="/lask/startseite/verein/413/saison_id/2021"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/422950-1632250258.png?lm=1" title="Mads Emil Madsen" alt="Mads Emil Madsen" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/mads-emil-madsen/profil/spieler/422950">
                Mads Emil Madsen            </a>
        </td>
    </tr>
    <tr>
        <td>
            Central Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">Jan 14, 1998(24)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/39.png?lm=1520611569" title="Denmark" alt="Denmark" class="flaggenrahmen" /></td><td class="zentriert">1,89 m</td><td class="zentriert">left</td><td class="zentriert">Jul 5, 2021</td><td class="zentriert"><a title="LASK: Ablöse €1.00m" href="/lask/startseite/verein/413/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/413.png?lm=1569950442" title=": Ablöse €1.00m" alt="LASK" class="" /></a></td><td class="zentriert">Dec 31, 2025</td><td class="rechts hauptlink">€600Th.</td></tr>
<tr class="even">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>8</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/234153-1632250277.png?lm=1" title="Lukas Masopust" alt="Lukas Masopust" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/lukas-masopust/profil/spieler/234153">
                Lukas Masopust<span title="Muscle Injury - Return unknown" class="verletzt-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Right Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">Feb 12, 1993(29)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,79 m</td><td class="zentriert">right</td><td class="zentriert">Jan 1, 2019</td><td class="zentriert"><a title="FK Jablonec: Ablöse €590Th." href="/fk-jablonec/startseite/verein/1322/saison_id/2018"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/1322.png?lm=1551278724" title=": Ablöse €590Th." alt="FK Jablonec" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€3.50m</td></tr>
<tr class="odd">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>-</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joining: Wuhan Three Towns; date: Mar 14, 2022; fee: €4.00m" href="/wuhan-three-towns/kadernaechstesaison/verein/70657/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/70657.png?lm=1552050693" title="Joining: Wuhan Three Towns; date: Mar 14, 2022; fee: €4.00m" alt="Wuhan Three Towns" class="" /></a></span><a title="Joining: Wuhan Three Towns; date: Mar 14, 2022; fee: €4.00m" class="hide-for-small" href="/wuhan-three-towns/kadernaechstesaison/verein/70657/saison_id/2021"><img src="/images/icons/abgang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/148372-1632250404.png?lm=1" title="Nicolae Stanciu" alt="Nicolae Stanciu" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/nicolae-stanciu/profil/spieler/148372">
                Nicolae Stanciu            </a>
        </td>
    </tr>
    <tr>
        <td>
            Attacking Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">May 7, 1993(28)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/140.png?lm=1520611569" title="Romania" alt="Romania" class="flaggenrahmen" /></td><td class="zentriert">1,70 m</td><td class="zentriert">right</td><td class="zentriert">Jul 4, 2019</td><td class="zentriert"><a title="Al-Ahli Jeddah: Ablöse €4.00m" href="/al-ahli-dschidda/startseite/verein/18487/saison_id/2019"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/18487.png?lm=1407562631" title=": Ablöse €4.00m" alt="Al-Ahli Jeddah" class="" /></a></td><td class="zentriert">-</td><td class="rechts hauptlink">€7.00m</td></tr>
<tr class="even">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Mittelfeld"><div class=rn_nummer>32</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/321195-1632250413.png?lm=1" title="Ondrej Lingr" alt="Ondrej Lingr" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/ondrej-lingr/profil/spieler/321195">
                Ondrej Lingr            </a>
        </td>
    </tr>
    <tr>
        <td>
            Attacking Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">Oct 7, 1998(23)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,75 m</td><td class="zentriert">right</td><td class="zentriert">Aug 6, 2020</td><td class="zentriert"><a title="MFK Karvina: Ablöse €450Th." href="/mfk-karvina/startseite/verein/13726/saison_id/2020"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/13726.png?lm=1419785681" title=": Ablöse €450Th." alt="MFK Karvina" class="" /></a></td><td class="zentriert">Jun 30, 2024</td><td class="rechts hauptlink">€2.00m</td></tr>
<tr class="odd">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Sturm"><div class=rn_nummer>9</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/248393-1632250522.png?lm=1" title="Peter Olayinka" alt="Peter Olayinka" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/peter-olayinka/profil/spieler/248393">
                Peter Olayinka            </a>
        </td>
    </tr>
    <tr>
        <td>
            Left Winger        </td>
    </tr>
</table>
</td><td class="zentriert">Nov 16, 1995(26)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/124.png?lm=1520611569" title="Nigeria" alt="Nigeria" class="flaggenrahmen" /></td><td class="zentriert">1,88 m</td><td class="zentriert">right</td><td class="zentriert">Jul 21, 2018</td><td class="zentriert"><a title="KAA Gent: Ablöse €3.20m" href="/kaa-gent/startseite/verein/157/saison_id/2018"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/157.png?lm=1442954733" title=": Ablöse €3.20m" alt="KAA Gent" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€7.00m</td></tr>
<tr class="even">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Sturm"><div class=rn_nummer>17</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/292779-1632250531.png?lm=1" title="Lukas Provod" alt="Lukas Provod" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/lukas-provod/profil/spieler/292779">
                Lukas Provod<span title="Cruciate Ligament Rupture - Return expected on Mar 31, 2022" class="verletzt-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Left Winger        </td>
    </tr>
</table>
</td><td class="zentriert">Oct 23, 1996(25)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,89 m</td><td class="zentriert">left</td><td class="zentriert">Jan 1, 2020</td><td class="zentriert"><a title="FC Viktoria Plzen B: Ablöse €770Th." href="/fc-viktoria-pilsen-b/startseite/verein/8751/saison_id/2019"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/8751.png?lm=1571347012" title=": Ablöse €770Th." alt="FC Viktoria Plzen B" class="" /></a></td><td class="zentriert">Jun 30, 2026</td><td class="rechts hauptlink">€5.00m</td></tr>
<tr class="odd">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Sturm"><div class=rn_nummer>10</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined from AC Sparta Prague; date: Jul 1, 2021; fee: free transfer" href="/ac-sparta-prague/startseite/verein/197/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/197.png?lm=1623871758" title="Joined from AC Sparta Prague; date: Jul 1, 2021; fee: free transfer" alt="AC Sparta Prague" class="" /></a></span><a title="Joined from AC Sparta Prague; date: Jul 1, 2021; fee: free transfer" class="hide-for-small" href="/ac-sparta-prague/startseite/verein/197/saison_id/2021"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/322800-1632250540.png?lm=1" title="Srdjan Plavsic" alt="Srdjan Plavsic" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/srdjan-plavsic/profil/spieler/322800">
                Srdjan Plavsic            </a>
        </td>
    </tr>
    <tr>
        <td>
            Left Winger        </td>
    </tr>
</table>
</td><td class="zentriert">Dec 3, 1995(26)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/215.png?lm=1520611569" title="Serbia" alt="Serbia" class="flaggenrahmen" /></td><td class="zentriert">1,66 m</td><td class="zentriert">left</td><td class="zentriert">Jul 1, 2021</td><td class="zentriert"><a title="AC Sparta Prague: Ablöse free transfer" href="/ac-sparta-prag/startseite/verein/197/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/197.png?lm=1623871758" title=": Ablöse free transfer" alt="AC Sparta Prague" class="" /></a></td><td class="zentriert">Jun 30, 2024</td><td class="rechts hauptlink">€1.20m</td></tr>
<tr class="even">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Sturm"><div class=rn_nummer>20</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined as a winter arrival from: FC Banik Ostrava; date: Jan 21, 2022; fee: €1.20m" href="/fc-banik-ostrava/startseite/verein/377/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/377.png?lm=1419584907" title="Joined as a winter arrival from: FC Banik Ostrava; date: Jan 21, 2022; fee: €1.20m" alt="FC Banik Ostrava" class="" /></a></span><a title="Joined as a winter arrival from: FC Banik Ostrava; date: Jan 21, 2022; fee: €1.20m" class="hide-for-small" href="/fc-banik-ostrava/startseite/verein/377/saison_id/2021"><img src="/images/icons/winterzugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/default.jpg?lm=1" title="Yira Sor" alt="Yira Sor" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/yira-sor/profil/spieler/673382">
                Yira Sor            </a>
        </td>
    </tr>
    <tr>
        <td>
            Right Winger        </td>
    </tr>
</table>
</td><td class="zentriert">Jul 24, 2000(21)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/124.png?lm=1520611569" title="Nigeria" alt="Nigeria" class="flaggenrahmen" /></td><td class="zentriert">1,74 m</td><td class="zentriert">right</td><td class="zentriert">Jan 21, 2022</td><td class="zentriert"><a title="FC Banik Ostrava: Ablöse €1.20m" href="/fc-banik-ostrau/startseite/verein/377/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/377.png?lm=1419584907" title=": Ablöse €1.20m" alt="FC Banik Ostrava" class="" /></a></td><td class="zentriert">Dec 31, 2026</td><td class="rechts hauptlink">€500Th.</td></tr>
<tr class="odd">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Sturm"><div class=rn_nummer>22</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="On loan from Club Brugge KV until Jun 30, 2022" href="/club-brugge-kv/kadernaechstesaison/verein/2282/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/2282.png?lm=1448474251" title="On loan from Club Brugge KV until Jun 30, 2022" alt="Club Brugge KV" class="" /></a></span><a title="On loan from Club Brugge KV until Jun 30, 2022" class="hide-for-small" href="/club-brugge-kv/kadernaechstesaison/verein/2282/saison_id/2021"><img src="/images/icons/leihe_beta_kader.png" width="19px" height="19px" class="wechsel-symbol" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/178469-1632250587.png?lm=1" title="Michael Krmencik" alt="Michael Krmencik" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/michael-krmencik/profil/spieler/178469">
                Michael Krmencik            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Forward        </td>
    </tr>
</table>
</td><td class="zentriert">Mar 15, 1993(28)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,91 m</td><td class="zentriert">right</td><td class="zentriert">Jul 23, 2021</td><td class="zentriert"><a title="Club Brugge KV: Ablöse ?" href="/fc-brugge/startseite/verein/2282/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/2282.png?lm=1448474251" title=": Ablöse ?" alt="Club Brugge KV" class="" /></a></td><td class="zentriert">Jun 30, 2022</td><td class="rechts hauptlink">€2.50m</td></tr>
<tr class="even">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Sturm"><div class=rn_nummer>26</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined from FK Jablonec; date: Jul 1, 2021; fee: free transfer" href="/fk-jablonec/startseite/verein/1322/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/1322.png?lm=1551278724" title="Joined from FK Jablonec; date: Jul 1, 2021; fee: free transfer" alt="FK Jablonec" class="" /></a></span><a title="Joined from FK Jablonec; date: Jul 1, 2021; fee: free transfer" class="hide-for-small" href="/fk-jablonec/startseite/verein/1322/saison_id/2021"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/108416-1632250610.png?lm=1" title="Ivan Schranz" alt="Ivan Schranz" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/ivan-schranz/profil/spieler/108416">
                Ivan Schranz            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Forward        </td>
    </tr>
</table>
</td><td class="zentriert">Sep 13, 1993(28)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/154.png?lm=1520611569" title="Slovakia" alt="Slovakia" class="flaggenrahmen" /></td><td class="zentriert">1,85 m</td><td class="zentriert">right</td><td class="zentriert">Jul 1, 2021</td><td class="zentriert"><a title="FK Jablonec: Ablöse free transfer" href="/fk-jablonec/startseite/verein/1322/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/1322.png?lm=1551278724" title=": Ablöse free transfer" alt="FK Jablonec" class="" /></a></td><td class="zentriert">Jun 30, 2024</td><td class="rechts hauptlink">€2.00m</td></tr>
<tr class="odd">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Sturm"><div class=rn_nummer>11</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/81390-1632250618.png?lm=1" title="Stanislav Tecl" alt="Stanislav Tecl" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/stanislav-tecl/profil/spieler/81390">
                Stanislav Tecl            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Forward        </td>
    </tr>
</table>
</td><td class="zentriert">Sep 1, 1990(31)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,81 m</td><td class="zentriert">right</td><td class="zentriert">Jan 24, 2017</td><td class="zentriert"><a title="FK Jablonec: Ablöse €550Th." href="/fk-jablonec/startseite/verein/1322/saison_id/2016"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/1322.png?lm=1551278724" title=": Ablöse €550Th." alt="FK Jablonec" class="" /></a></td><td class="zentriert">Jun 30, 2023</td><td class="rechts hauptlink">€500Th.</td></tr>
<tr class="even">
<td title="$data-&gt;getPositionDisplay()" class="zentriert rueckennummer bg_Sturm"><div class=rn_nummer>14</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined as a winter arrival from: FK Mlada Boleslav; date: Feb 10, 2022; fee: €1.15m" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/kaderquad/5546.png?lm=1419784887" title="Joined as a winter arrival from: FK Mlada Boleslav; date: Feb 10, 2022; fee: €1.15m" alt="FK Mlada Boleslav" class="" /></a></span><a title="Joined as a winter arrival from: FK Mlada Boleslav; date: Feb 10, 2022; fee: €1.15m" class="hide-for-small" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2021"><img src="/images/icons/winterzugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/default.jpg?lm=1" title="Daniel Fila" alt="Daniel Fila" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/daniel-fila/profil/spieler/666268">
                Daniel Fila<span title="No eligibility - until Feb 25, 2022 - UEFA Europa Conference League - 2 matchdays" class="ausfall-9-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Forward        </td>
    </tr>
</table>
</td><td class="zentriert">Aug 21, 2002(19)</td><td class="zentriert"><img src="https://tmssl.akamaized.net/images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,90 m</td><td class="zentriert">left</td><td class="zentriert">Feb 10, 2022</td><td class="zentriert"><a title="FK Mlada Boleslav: Ablöse €1.15m" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/5546.png?lm=1419784887" title=": Ablöse €1.15m" alt="FK Mlada Boleslav" class="" /></a></td><td class="zentriert">Jun 30, 2026</td><td class="rechts hauptlink">€500Th.</td></tr>
</tbody>
</table>
<div class="keys" style="display:none" title="/slug/kader/verein/62/plus/1"><span>1</span><span>28</span><span>31</span><span>30</span><span>4</span><span>15</span><span>6</span><span>2</span><span>19</span><span>18</span><span>33</span><span>5</span><span>3</span><span>13</span><span>25</span><span>24</span><span>23</span><span>27</span><span>21</span><span>8</span><span>-</span><span>32</span><span>9</span><span>17</span><span>10</span><span>20</span><span>22</span><span>26</span><span>11</span><span>14</span></div>
</div>                </div>
            </div>
            </div>
    </div>

<script async src="/js/custom/tm-track-links.min.js" type="module"></script>

<tm-language-hint></tm-language-hint>

<div class="werbung-skyscraper-container">
    <div class="werbung werbung-skyscraper"><!-- /58778164/Desktop-Skyscraper-1 -->
                        <div id="div-gpt-ad-1621527521939-0" style="min-width: 160px; min-height: 250px;">
                          <script>
                            googletag.cmd.push(function() { googletag.display("div-gpt-ad-1621527521939-0"); });
                          </script>
                        </div></div></div>

<div class="werbung-skyscraperbtf-container">
    <div class="werbung werbung-skyscraperbtf"><!-- /58778164/Desktop-Skyscraper-2 -->
                        <div id="div-gpt-ad-1621528123398-0" style="min-width: 160px; min-height: 250px;">
                          <script>
                            googletag.cmd.push(function() { googletag.display("div-gpt-ad-1621528123398-0"); });
                          </script>
                        </div></div></div>


<div class="tm-footer">
            <a href="/"
           class="tm-footer__logo">
          <img src="https://tmsi.akamaized.net/head/transfermarkt_logo.svg" alt="Transfermarkt" height="33" width="80"/>
        </a>
      <ul class="tm-footer__links">
    <li class="tm-footer__links-item">
      <a href="/intern/impressum">
          legal notice      </a>
    </li>
    <li class="tm-footer__links-item">
      <a href="/intern/web/datenschutz">
          privacy      </a>
    </li>
    <li class="tm-footer__links-item">
      <a href="javascript:void(0)" class="cmp-link">
          Privacy      </a>
    </li>
    <li class="tm-footer__links-item">
      <a href="/intern/anb">
          general terms of use      </a>
    </li>
    <li class="tm-footer__links-item">
      <a href="/intern/tmteam">
          The TM Team      </a>
    </li>
                        <li class="tm-footer__links-item">
      <a href="/intern/faq">
          FAQ      </a>
    </li>
    <li class="tm-footer__links-item">
      <a href="/intern/fehlermelden">
          Found a mistake?      </a>
    </li>
  </ul>
</div>
                <div id="menue_overlay" style="display: none;"></div>
    </div>
        <!-- SZM VERSION="2.0" -->
    <script type="text/javascript">
        var iam_data = {
"st":"transfer",
"cp":"ausland_co.uk_r",
"co":""
}
    </script>
    <!--/SZM -->
        <script type="module">
        var defaultOptions={tracking:!0,refreshAds:!0};export var refreshAd=function(){var e,n;[ASCDP.hasOwnProperty("adS"),null===(e=ASCDP.adS)||void 0===e?void 0:e.hasOwnProperty("reloadAds"),"function"==typeof(null===(n=ASCDP.adS)||void 0===n?void 0:n.reloadAds)].every(function(e){return e})&&ASCDP.adS.reloadAds()};export var TmTrackingAndAds=function(e,n){void 0===n&&(n=defaultOptions);var r=["tabelle","reiter","forum"].includes(e)?e:"";n.tracking&&(gtag("event","page_view",{page_path:"/jsContent"+window.location.pathname}),sendIvwData(r)),n.refreshAds&&"undefined"!=typeof ASCDP&&refreshAd()};window.tmTrackingAndAds=function(e,n){return TmTrackingAndAds(e,n)};
    </script>
        <script type="text/javascript">
        if(typeof IOMm === 'function') {
            IOMm('configure', { st: iam_data.st, dn: 'data-84a0f3455d.transfermarkt.com', mh:5 });
            IOMm('pageview', { cp: iam_data.cp, co: iam_data.co });
        } else {
            console.warn('IOMm is not defined');
        }
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

    <script type="module" src="https://tmsi.akamaized.net/js/globals/tm-global-elements.esm.js" defer></script><script nomodule="" src="https://tmsi.akamaized.net/js/globals/tm-global-elements.js" defer></script>
    <tm-language-hint></tm-language-hint>

        <div class="werbung-skyscraper-container">
            <div class="werbung werbung-skyscraper"><!-- /58778164/Desktop-Skyscraper-1 -->
                        <div id="div-gpt-ad-1621527521939-0" style="min-width: 160px; min-height: 250px;">
                          <script>
                            googletag.cmd.push(function() { googletag.display("div-gpt-ad-1621527521939-0"); });
                          </script>
                        </div></div>        </div>

        <div class="werbung-skyscraperbtf-container">
            <div class="werbung werbung-skyscraperbtf"><!-- /58778164/Desktop-Skyscraper-2 -->
                        <div id="div-gpt-ad-1621528123398-0" style="min-width: 160px; min-height: 250px;">
                          <script>
                            googletag.cmd.push(function() { googletag.display("div-gpt-ad-1621528123398-0"); });
                          </script>
                        </div></div>        </div>
<script type="text/javascript" src="https://tmssl.akamaized.net/assets/aa69c6e9c51f1e811847082c63633956/gridview/jquery.yiigridview.js?lm=1645174346"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/libs/micromodal.min.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/libs/intersection-observer.min.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/libs/lazyload.min.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/custom/tm-menu.min.js?lm=1645174332"></script>
<script type="text/javascript">
/*<![CDATA[*/
function skyscraperSwitch() {
                const firstAd = document.getElementsByClassName("werbung-skyscraper");
                const secondAd = document.getElementsByClassName("werbung-skyscraperbtf")
                if (this.scrollY > 699) {
                    firstAd[0].style.visibility = "hidden";
                    secondAd[0].style.position = "fixed";
                    secondAd[0].style.top = "40px";
                } else {
                    firstAd[0].style.visibility = "visible";
                    secondAd[0].style.position = "relative";
                    secondAd[0].style.top = "unset";
                }
            }
            window.addEventListener("scroll", skyscraperSwitch, false);
	var loginUrl='/profil/login';
	var onlyDE = '';
	var onlyMobile = '';
	var onlyTablet = '';
	var getUserID = '';

function sendIvwData(typ) {
    if(typ == 'tabelle') {
        var iam_data = {
"st":"transfer",
"cp":"ausland_co.uk_r_t",
"co":""
}

    }else if(typ == 'reiter') {
        var iam_data = {
"st":"transfer",
"cp":"ausland_co.uk_r_r",
"co":""
}

    }else if(typ == 'forum') {
        var iam_data = {
"st":"transfer",
"cp":"ausland_co.uk_r_forum",
"co":""
}

    }else {
        var iam_data = {
"st":"transfer",
"cp":"ausland_co.uk_r_s",
"co":""
}

    }
    if(typeof IOMm === 'function') {
        IOMm('pageview', { cp: iam_data.cp, co: iam_data.co });
    }
}
jQuery(function($) {
jQuery('#yw1').yiiGridView({'ajaxUpdate':['yw1'],'ajaxVar':'ajax','pagerClass':'pager','loadingClass':'grid\x2Dview\x2Dloading','filterClass':'filters','tableClass':'items','selectableRows':1,'enableHistory':false,'updateSelector':'\x7Bpage\x7D,\x20\x7Bsort\x7D','filterSelector':'\x7Bfilter\x7D','afterAjaxUpdate':function() {window.LazyLoadInstance.update(); tmTrackingAndAds(); trackLinks(); document.dispatchEvent(new CustomEvent("tmInitTooltip"));}});
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
      marketValue: 6000000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '240536',
      name: 'Ales Mandous',
      jerseyNumber: 28,
      position: SoccerBotPositionGroup.GOALKEEPER,
      birthdate: '1992-04-21',
      height: 188,
      foot: undefined,
      joined: '2021-07-12',
      contractExpires: '2026-06-30',
      marketValue: 2000000,
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
      contractExpires: '2022-06-30',
      marketValue: 50000,
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
      joined: '2022-01-01',
      contractExpires: '2024-12-31',
      marketValue: 1500000,
      country: SoccerBotCountry.UKRAINE
    },
    {
      id: '585068',
      name: 'Aiham Ousou',
      jerseyNumber: 4,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '2000-01-09',
      height: 186,
      foot: SoccerBotFoot.RIGHT,
      joined: '2021-07-21',
      contractExpires: '2026-06-30',
      marketValue: 1200000,
      country: SoccerBotCountry.SWEDEN
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
      marketValue: 1000000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '668557',
      name: 'Maksym Taloverov',
      jerseyNumber: 6,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '2000-06-28',
      height: 195,
      foot: SoccerBotFoot.RIGHT,
      joined: '2022-01-05',
      contractExpires: '2026-12-31',
      marketValue: 750000,
      country: SoccerBotCountry.UKRAINE
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
      marketValue: 500000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '401475',
      name: 'Oscar Dorley',
      jerseyNumber: 19,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '1998-07-19',
      height: 174,
      foot: SoccerBotFoot.LEFT,
      joined: '2019-08-11',
      contractExpires: '2025-06-30',
      marketValue: 3500000,
      country: SoccerBotCountry.LIBERIA
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
      marketValue: 1800000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '500054',
      name: 'David Jurasek',
      jerseyNumber: 33,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '2000-08-07',
      height: 183,
      foot: SoccerBotFoot.LEFT,
      joined: '2022-02-10',
      contractExpires: '2026-06-30',
      marketValue: 400000,
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
      marketValue: 6000000,
      country: SoccerBotCountry.DENMARK
    },
    {
      id: '216278',
      name: 'Tomas Holes',
      jerseyNumber: 3,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1993-03-31',
      height: 180,
      foot: undefined,
      joined: '2019-07-01',
      contractExpires: '2026-06-30',
      marketValue: 7000000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '671542',
      name: 'Daniel Samek',
      jerseyNumber: 13,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '2004-02-19',
      height: 184,
      foot: SoccerBotFoot.RIGHT,
      joined: '2021-07-01',
      contractExpires: undefined,
      marketValue: 2200000,
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
      marketValue: 1500000,
      country: SoccerBotCountry.SLOVAKIA
    },
    {
      id: '303440',
      name: 'Laco Takacs',
      jerseyNumber: 24,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1996-07-15',
      height: 193,
      foot: undefined,
      joined: '2020-01-01',
      contractExpires: '2023-06-30',
      marketValue: 750000,
      country: SoccerBotCountry.CZECH_REPUBLIC
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
      contractExpires: '2025-06-30',
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
      marketValue: 1000000,
      country: SoccerBotCountry.IVORY_COAST
    },
    {
      id: '422950',
      name: 'Mads Emil Madsen',
      jerseyNumber: 21,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1998-01-14',
      height: 189,
      foot: SoccerBotFoot.LEFT,
      joined: '2021-07-05',
      contractExpires: '2025-12-31',
      marketValue: 600000,
      country: SoccerBotCountry.DENMARK
    },
    {
      id: '234153',
      name: 'Lukas Masopust',
      jerseyNumber: 8,
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
      id: '148372',
      name: 'Nicolae Stanciu',
      jerseyNumber: undefined,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1993-05-07',
      height: 170,
      foot: SoccerBotFoot.RIGHT,
      joined: '2019-07-04',
      contractExpires: undefined,
      marketValue: 7000000,
      country: SoccerBotCountry.ROMANIA
    },
    {
      id: '321195',
      name: 'Ondrej Lingr',
      jerseyNumber: 32,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1998-10-07',
      height: 175,
      foot: SoccerBotFoot.RIGHT,
      joined: '2020-08-06',
      contractExpires: '2024-06-30',
      marketValue: 2000000,
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
      marketValue: 7000000,
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
      contractExpires: '2026-06-30',
      marketValue: 5000000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '322800',
      name: 'Srdjan Plavsic',
      jerseyNumber: 10,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '1995-12-03',
      height: 166,
      foot: SoccerBotFoot.LEFT,
      joined: '2021-07-01',
      contractExpires: '2024-06-30',
      marketValue: 1200000,
      country: SoccerBotCountry.SERBIA
    },
    {
      id: '673382',
      name: 'Yira Sor',
      jerseyNumber: 20,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '2000-07-24',
      height: 174,
      foot: SoccerBotFoot.RIGHT,
      joined: '2022-01-21',
      contractExpires: '2026-12-31',
      marketValue: 500000,
      country: SoccerBotCountry.NIGERIA
    },
    {
      id: '178469',
      name: 'Michael Krmencik',
      jerseyNumber: 22,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '1993-03-15',
      height: 191,
      foot: SoccerBotFoot.RIGHT,
      joined: '2021-07-23',
      contractExpires: '2022-06-30',
      marketValue: 2500000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '108416',
      name: 'Ivan Schranz',
      jerseyNumber: 26,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '1993-09-13',
      height: 185,
      foot: SoccerBotFoot.RIGHT,
      joined: '2021-07-01',
      contractExpires: '2024-06-30',
      marketValue: 2000000,
      country: SoccerBotCountry.SLOVAKIA
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
      marketValue: 500000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    },
    {
      id: '666268',
      name: 'Daniel Fila',
      jerseyNumber: 14,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '2002-08-21',
      height: 190,
      foot: SoccerBotFoot.LEFT,
      joined: '2022-02-10',
      contractExpires: '2026-06-30',
      marketValue: 500000,
      country: SoccerBotCountry.CZECH_REPUBLIC
    }
  ]
};
