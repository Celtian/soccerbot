import { SoccerBotResponse, SoccerBotTeam } from '../../../src/shared/interfaces';

export const LEAGUE_HTML = `

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
<meta name="keywords" content="Fortuna Liga,Czech Republic" />
<meta name="description" content="This is the page for the Fortuna Liga, with an overview of fixtures, tables, dates, squads, market values, statistics and history." />
<meta property="og:type" content="article" />
<meta property="og:image" content="https://tmssl.akamaized.net/images/tm_logo.png" />
<meta property="og:description" content="" />
<meta property="og:title" content="Fortuna Liga 21/22" />
<meta property="og:url" content="https://www.transfermarkt.com/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="de" rel="alternate" href="https://www.transfermarkt.de/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="de-LU" rel="alternate" href="https://www.transfermarkt.de/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="de-AT" rel="alternate" href="https://www.transfermarkt.at/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="de-CH" rel="alternate" href="https://www.transfermarkt.ch/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="tr" rel="alternate" href="https://www.transfermarkt.com.tr/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="it-CH" rel="alternate" href="https://www.transfermarkt.it/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="it" rel="alternate" href="https://www.transfermarkt.it/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="pl" rel="alternate" href="https://www.transfermarkt.pl/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="en-GB" rel="alternate" href="https://www.transfermarkt.co.uk/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="en-IE" rel="alternate" href="https://www.transfermarkt.co.uk/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="es" rel="alternate" href="https://www.transfermarkt.es/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="es-ES" rel="alternate" href="https://www.transfermarkt.es/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="es-CL" rel="alternate" href="https://www.transfermarkt.es/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="es-VE" rel="alternate" href="https://www.transfermarkt.es/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="es-PE" rel="alternate" href="https://www.transfermarkt.es/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="es-EC" rel="alternate" href="https://www.transfermarkt.es/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="es-CU" rel="alternate" href="https://www.transfermarkt.es/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="nl" rel="alternate" href="https://www.transfermarkt.nl/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="pt" rel="alternate" href="https://www.transfermarkt.pt/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="ru" rel="alternate" href="https://www.transfermarkt.ru/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="fr-CH" rel="alternate" href="https://www.transfermarkt.fr/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="fr" rel="alternate" href="https://www.transfermarkt.fr/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="fr-CA" rel="alternate" href="https://www.transfermarkt.fr/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="fr-CI" rel="alternate" href="https://www.transfermarkt.fr/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="fr-LU" rel="alternate" href="https://www.transfermarkt.fr/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="fr-BE" rel="alternate" href="https://www.transfermarkt.fr/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="pt-BR" rel="alternate" href="https://www.transfermarkt.com.br/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="en-US" rel="alternate" href="https://www.transfermarkt.us/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="en-CA" rel="alternate" href="https://www.transfermarkt.us/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="en-IN" rel="alternate" href="https://www.transfermarkt.co.in/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="en-ZA" rel="alternate" href="https://www.transfermarkt.co.za/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="x-default" rel="alternate" href="https://www.transfermarkt.com/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="en" rel="alternate" href="https://www.transfermarkt.com/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="nl-BE" rel="alternate" href="https://www.transfermarkt.be/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="es-AR" rel="alternate" href="https://www.transfermarkt.com.ar/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="es-MX" rel="alternate" href="https://www.transfermarkt.mx/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="es-CO" rel="alternate" href="https://www.transfermarkt.co/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="ms" rel="alternate" href="https://www.transfermarkt.my/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="ja" rel="alternate" href="https://www.transfermarkt.jp/fortuna-liga/startseite/wettbewerb/TS1" />
<link hreflang="id" rel="alternate" href="https://www.transfermarkt.co.id/fortuna-liga/startseite/wettbewerb/TS1" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/menue.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-main.min.css?lm=1645174278" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/main.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/main_desktop.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/chosen.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/print.css?_sn=1?lm=1645174342" media="print" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/wettbewerb.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/statistiken.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/wettbewerb.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/gridview.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/spieltagsbox.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/livespieltag.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/assets/b7c5571cf8957553f95f6d9069eaed67/jui/css/base/jquery-ui.css?lm=1645174347" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/jquery-ui-1.10.4.custom.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/jquery-ui-1.10.4.tm-theme.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/jquery.bxslider.min.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/jquery.custom.bxslider.css?lm=1645174342" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/beliebtheit.css?lm=1645174342" />
<style type="text/css">
/*<![CDATA[*/
@keyframes heim {
    0%   {width: 0%;}
    100% {width: 0%}
}
@keyframes gast {
    0%   {width: 0%;}
    100% {width: 0%}
}
.beliebtheit-vote-heim {
    animation-name: heim;
    animation-duration: 4s;
}
.beliebtheit-vote-gast {
    animation-name: gast;
    animation-duration: 4s;
}
/*]]>*/
</style>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/vendor/jquery.min.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/assets/b7c5571cf8957553f95f6d9069eaed67/jquery.ba-bbq.min.js?lm=1645174347"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/jquery.bxslider.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/wettbewerb.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/jquery-ui-1.10.4.custom.min.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/wettbewerbGeruechte.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/main.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/chosen.ajaxaddition.jquery.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/functions.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/main_desktop.js?lm=1645174332"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/chosen.jquery.js?lm=1645174332"></script>
<script type="text/javascript">
/*<![CDATA[*/
var adition = adition || {};
adition.srq = adition.srq || [];
(function() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = (document.location.protocol === "https:" ? "https:" : "http:") + "//imagesrv.adition.com/js/srp.js";
    script.charset = "utf-8";
    script.async = true;
    var firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(script, firstScript);
})()
adition.srq.push(function(api) {
    // Configure modules ...
    api.modules.setLoadingTimeout(5000);
    api.registerAdfarm("ad1.adfarm1.adition.com");
    api.configureRenderSlot("oddsServe").setContentunitId(4382869);
    api.configureRenderSlot("oddsServe").setProfile("TS1");
    api.consentService.enableConsentPull();
    api.load().completeRendering();
})

/*]]>*/
</script>
<title>Fortuna Liga 21/22 | Transfermarkt</title>
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
                'content_group2': 'wettbewerb',
                'content_group3': 'startseite',
                'content_group4': 'TS1',
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

            <link rel="canonical" href="https://www.transfermarkt.com/fortuna-liga/startseite/wettbewerb/TS1">
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
                            googletag.pubads().setTargeting("cg1", ["wettbewerb"]);
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
                                    16 teams                                </td>
                            </tr>
                            <tr>
                                <th>Players:</th>
                                <td>
                                    445                                </td>
                            </tr>
                            <tr>
                                <th>Foreigners:</th>
                                <td>
                                    <a href="/fortuna-liga/gastarbeiter/wettbewerb/TS1">106&nbsp;Players</a>&nbsp;&nbsp;<span class="tabellenplatz">23.8%</span>                                </td>
                            </tr>
                                                            <tr>
                                    <th>&oslash;-Market value:</th>
                                    <td>
                                        €561Th.                                    </td>
                                </tr>
                                                        </table>
                    </div>
                    <div class="list">
                        <table class="profilheader">
                                                            <tr>
                                    <th>UEFA coefficient:</th>
                                    <td>
                                        <a href="/uefa/5jahreswertung/statistik">17. Pos.</a>&nbsp;&nbsp;<span class="tabellenplatz">26.800 </span><span class="tabellenplatz">Points</span>                                    </td>
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
                                    26.2                                </td>
                            </tr>
                                                            <tr>
                                    <th>Reigning champion:</th>
                                    <td>
                                        <a title="SK Slavia Prague" href="/sk-slavia-prague/startseite/verein/62">SK Slavia Prague</a>                                    </td>
                                </tr>
                                                                <tr>
                                    <th>Most valuable player:</th>
                                    <td>
                                        <a title="Adam Hlozek" href="/adam-hlozek/profil/spieler/552057">Adam Hlozek</a>&nbsp;&nbsp;<span class="tabellenplatz">€19.00m</span>                                    </td>
                                </tr>
                                                        </table>
                    </div>
                </div>
                                    <div class="marktwert">
                        Total Market Value:<br /><span><a href=""><span class="waehrung">€</span>249.65<span class="waehrung">m</span></a></span>                    </div>
                                </div>
        </div>
    </div>
</div>
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
        data-controller="wettbewerb"
        data-action="startseite"
        data-path="fortuna-liga/startseite/wettbewerb/TS1"
        data-id="TS1"
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
                                                                <li id="overview" class="first-button aktiv ">
                                        <a name="SubNavi" href="/fortuna-liga/startseite/wettbewerb/TS1/saison_id/2021" class="tm-subnav-item megamenu" onClick="tmEvent('subnavigation_wettbewerb','click','title_uebersicht');
">Overview</a>
                                                                            </li>
                                                                        <li id="tables" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="tm-subnav-item megamenu_drop" onClick="tmEvent('subnavigation_wettbewerb','click','tabellen');
">Tables</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/></div></div>                                    </li>
                                                                        <li id="transfers" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="tm-subnav-item megamenu_drop" onClick="tmEvent('subnavigation_wettbewerb','click','title_transfers');
">Transfers</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/></div></div>                                    </li>
                                                                        <li id="market-values" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="tm-subnav-item megamenu_drop" onClick="tmEvent('subnavigation_wettbewerb','click','title_marktwerte');
">Market Values</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/></div></div>                                    </li>
                                                                        <li id="players" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="tm-subnav-item megamenu_drop" onClick="tmEvent('subnavigation_wettbewerb','click','title_spieler');
">Players</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/></div></div>                                    </li>
                                                                        <li id="clubs" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="tm-subnav-item megamenu_drop" onClick="tmEvent('subnavigation_wettbewerb','click','title_vereine');
">Clubs</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/></div></div>                                    </li>
                                                                        <li id="information-amp-facts" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="tm-subnav-item megamenu_drop" onClick="tmEvent('subnavigation_wettbewerb','click','daten_und_fakten');
">Information & facts</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/></div></div>                                    </li>
                                                                        <li id="history" class="  ">
                                        <a name="SubNavi" href="#subnavi" class="tm-subnav-item megamenu_drop" onClick="tmEvent('subnavigation_wettbewerb','click','title_historie');
">History</a>
                                        <div class="dropdown_fullwidth " title=""><div><img src="https://tmsi.akamaized.net/icons/tm_spinner_inverted.min.svg" width="40" height="40" class="navigation-loading-spinner"/></div></div>                                    </li>
                                                                        <li id="news" class="  ">
                                        <a name="SubNavi" href="/fortuna-liga/news/wettbewerb/TS1" class="tm-subnav-item megamenu" onClick="tmEvent('subnavigation_wettbewerb','click','title_news');
">News</a>
                                                                            </li>
                                                                        <li id="subnavi-edit" class="  subnavi-edit">
                                        <a name="SubNavi" href="#subnavi" class="tm-subnav-item megamenu_drop" onClick="tmEvent('subnavigation_wettbewerb','click','edit');
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

    <div id="wettbewerbsstartseite" class="row wettbewerbsstartseite">
    <div class="large-8 columns">
		<div class="box">
    <h2 class="content-box-headline">Info</h2>
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
                                             selected="selected"value="2021">21/22</option>
                                                                                <option
                                            value="2020">20/21</option>
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
    <h2 class="content-box-headline">
        Clubs - Fortuna Liga 21/22    </h2>


    <div class="show-for-small show-for-pad">
<div class="tm-tabs">
    <a class="tm-tab tm-tab__active--parent" href="/fortuna-liga/startseite/wettbewerb/TS1/saison_id/2021"><div class=" tm-tab__active"><span>Compact</span></div></a><a class="tm-tab" href="/fortuna-liga/startseite/wettbewerb/TS1/saison_id/2021/plus/1"><div class=""><span>Detailed</span></div></a></div>
</div>
    <div class="responsive-table">
        <div id="yw1" class="grid-view">
<div class="summary"></div>
<table class="items">
<thead>
<tr>
<th colspan="2" id="yw1_c0">club</th><th class="hide" id="yw1_c1"><a class="sort-link" href="/fortuna-liga/startseite/wettbewerb/TS1/sort/name">name</a></th><th class="zentriert" id="yw1_c2"><a class="sort-link" href="/fortuna-liga/startseite/wettbewerb/TS1/sort/anzahl_spieler_hidden.desc">Squad</a></th><th class="zentriert" id="yw1_c3"><a class="sort-link" href="/fortuna-liga/startseite/wettbewerb/TS1/sort/alter_durchschnitt.desc">&oslash; age</a></th><th class="zentriert" id="yw1_c4"><a class="sort-link" href="/fortuna-liga/startseite/wettbewerb/TS1/sort/legionaere.desc">Foreigners</a></th><th class="rechts" id="yw1_c5"><a class="sort-link" href="/fortuna-liga/startseite/wettbewerb/TS1/sort/marktwert_schnitt_anzeige.desc">&oslash; market value</a></th><th class="rechts" id="yw1_c6"><a class="sort-link" href="/fortuna-liga/startseite/wettbewerb/TS1/sort/marktwert_gesamt_anzeige.desc">Total market value</a></th></tr>
</thead>
<tfoot>
<tr>
<td colspan="2">&nbsp;</td><td class="hide">&nbsp;</td><td class="zentriert">445</td><td class="zentriert">26.2 Years</td><td class="zentriert">106</td><td class="rechts">€561Th.</td><td class="rechts">€249.65m</td></tr>
</tfoot>
<tbody>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="SK Slavia Prague" href="/sk-slavia-prag/startseite/verein/62/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/62.png?lm=1615070422" title=" " alt="SK Slavia Prague" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="SK Slavia Prague" href="/sk-slavia-prag/startseite/verein/62/saison_id/2021">SK Slavia Prague</a> <a href="#"><img src="https://tmssl.akamaized.net/images/erfolge/mini/21.png?lm=1461847499" title="Czech Champion 20/21" alt="Czech Champion 20/21" class="tabelle-erfolg" /></a><a href="#"><img src="https://tmssl.akamaized.net/images/erfolge/mini/341.png?lm=1632121640" title="Czech Cup Winner 20/21" alt="Czech Cup Winner 20/21" class="tabelle-erfolg" /></a></td><td class="zentriert"><a title="SK Slavia Prague" href="/sk-slavia-prague/kader/verein/62/saison_id/2021">30</a></td><td class="zentriert">26.2</td><td class="zentriert">13</td><td class="rechts">€2.43m</td><td class="rechts"><a title="SK Slavia Prague" href="/sk-slavia-prague/kader/verein/62/saison_id/2021">€72.95m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="AC Sparta Prague" href="/ac-sparta-prag/startseite/verein/197/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/197.png?lm=1623871758" title=" " alt="AC Sparta Prague" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="AC Sparta Prague" href="/ac-sparta-prag/startseite/verein/197/saison_id/2021">AC Sparta Prague</a> </td><td class="zentriert"><a title="AC Sparta Prague" href="/ac-sparta-prague/kader/verein/197/saison_id/2021">29</a></td><td class="zentriert">24.5</td><td class="zentriert">6</td><td class="rechts">€1.86m</td><td class="rechts"><a title="AC Sparta Prague" href="/ac-sparta-prague/kader/verein/197/saison_id/2021">€53.98m</a></td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/startseite/verein/941/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/941.png?lm=1571347012" title=" " alt="FC Viktoria Plzen" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/startseite/verein/941/saison_id/2021">FC Viktoria Plzen</a> </td><td class="zentriert"><a title="FC Viktoria Plzen" href="/fc-viktoria-plzen/kader/verein/941/saison_id/2021">27</a></td><td class="zentriert">26.4</td><td class="zentriert">6</td><td class="rechts">€834Th.</td><td class="rechts"><a title="FC Viktoria Plzen" href="/fc-viktoria-plzen/kader/verein/941/saison_id/2021">€22.53m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/startseite/verein/2311/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/2311.png?lm=1419785397" title=" " alt="SK Sigma Olomouc" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/startseite/verein/2311/saison_id/2021">SK Sigma Olomouc</a> </td><td class="zentriert"><a title="SK Sigma Olomouc" href="/sk-sigma-olomouc/kader/verein/2311/saison_id/2021">29</a></td><td class="zentriert">25.7</td><td class="zentriert">5</td><td class="rechts">€337Th.</td><td class="rechts"><a title="SK Sigma Olomouc" href="/sk-sigma-olomouc/kader/verein/2311/saison_id/2021">€9.78m</a></td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="FC Banik Ostrava" href="/fc-banik-ostrau/startseite/verein/377/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/377.png?lm=1419584907" title=" " alt="FC Banik Ostrava" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FC Banik Ostrava" href="/fc-banik-ostrau/startseite/verein/377/saison_id/2021">FC Banik Ostrava</a> </td><td class="zentriert"><a title="FC Banik Ostrava" href="/fc-banik-ostrava/kader/verein/377/saison_id/2021">24</a></td><td class="zentriert">25.7</td><td class="zentriert">6</td><td class="rechts">€406Th.</td><td class="rechts"><a title="FC Banik Ostrava" href="/fc-banik-ostrava/kader/verein/377/saison_id/2021">€9.75m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/697.png?lm=1419784849" title=" " alt="FC Slovan Liberec" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2021">FC Slovan Liberec</a> </td><td class="zentriert"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/kader/verein/697/saison_id/2021">30</a></td><td class="zentriert">24.3</td><td class="zentriert">15</td><td class="rechts">€303Th.</td><td class="rechts"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/kader/verein/697/saison_id/2021">€9.08m</a></td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="1.FC Slovacko" href="/1-fc-slovacko/startseite/verein/5544/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/5544.png?lm=1419785239" title=" " alt="1.FC Slovacko" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="1.FC Slovacko" href="/1-fc-slovacko/startseite/verein/5544/saison_id/2021">1.FC Slovacko</a> </td><td class="zentriert"><a title="1.FC Slovacko" href="/1-fc-slovacko/kader/verein/5544/saison_id/2021">22</a></td><td class="zentriert">27.9</td><td class="zentriert">5</td><td class="rechts">€388Th.</td><td class="rechts"><a title="1.FC Slovacko" href="/1-fc-slovacko/kader/verein/5544/saison_id/2021">€8.53m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="FK Jablonec" href="/fk-jablonec/startseite/verein/1322/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/1322.png?lm=1551278724" title=" " alt="FK Jablonec" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FK Jablonec" href="/fk-jablonec/startseite/verein/1322/saison_id/2021">FK Jablonec</a> </td><td class="zentriert"><a title="FK Jablonec" href="/fk-jablonec/kader/verein/1322/saison_id/2021">27</a></td><td class="zentriert">26.4</td><td class="zentriert">4</td><td class="rechts">€300Th.</td><td class="rechts"><a title="FK Jablonec" href="/fk-jablonec/kader/verein/1322/saison_id/2021">€8.10m</a></td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/startseite/verein/715/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/715.png?lm=1547322604" title=" " alt="Bohemians Prague 1905" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/startseite/verein/715/saison_id/2021">Bohemians Prague 1905</a> </td><td class="zentriert"><a title="Bohemians Prague 1905" href="/bohemians-prague-1905/kader/verein/715/saison_id/2021">32</a></td><td class="zentriert">26.4</td><td class="zentriert">3</td><td class="rechts">€252Th.</td><td class="rechts"><a title="Bohemians Prague 1905" href="/bohemians-prague-1905/kader/verein/715/saison_id/2021">€8.08m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/5546.png?lm=1419784887" title=" " alt="FK Mlada Boleslav" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2021">FK Mlada Boleslav</a> </td><td class="zentriert"><a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/kader/verein/5546/saison_id/2021">26</a></td><td class="zentriert">24.9</td><td class="zentriert">2</td><td class="rechts">€273Th.</td><td class="rechts"><a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/kader/verein/5546/saison_id/2021">€7.10m</a></td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="MFK Karvina" href="/mfk-karvina/startseite/verein/13726/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/13726.png?lm=1419785681" title=" " alt="MFK Karvina" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="MFK Karvina" href="/mfk-karvina/startseite/verein/13726/saison_id/2021">MFK Karvina</a> </td><td class="zentriert"><a title="MFK Karvina" href="/mfk-karvina/kader/verein/13726/saison_id/2021">29</a></td><td class="zentriert">25.1</td><td class="zentriert">15</td><td class="rechts">€239Th.</td><td class="rechts"><a title="MFK Karvina" href="/mfk-karvina/kader/verein/13726/saison_id/2021">€6.93m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="FK Teplice" href="/fk-teplice/startseite/verein/814/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/814.png?lm=1419784933" title=" " alt="FK Teplice" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FK Teplice" href="/fk-teplice/startseite/verein/814/saison_id/2021">FK Teplice</a> </td><td class="zentriert"><a title="FK Teplice" href="/fk-teplice/kader/verein/814/saison_id/2021">31</a></td><td class="zentriert">26.5</td><td class="zentriert">5</td><td class="rechts">€215Th.</td><td class="rechts"><a title="FK Teplice" href="/fk-teplice/kader/verein/814/saison_id/2021">€6.65m</a></td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/startseite/verein/1321/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/1321.png?lm=1419785284" title=" " alt="SK Dynamo Ceske Budejovice" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/startseite/verein/1321/saison_id/2021">SK Dynamo Ceske Budejovice</a> </td><td class="zentriert"><a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/kader/verein/1321/saison_id/2021">23</a></td><td class="zentriert">25.5</td><td class="zentriert">9</td><td class="rechts">€288Th.</td><td class="rechts"><a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/kader/verein/1321/saison_id/2021">€6.63m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="FC Hradec Kralove" href="/fc-hradec-kralove/startseite/verein/1897/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/1897.png?lm=1419785163" title=" " alt="FC Hradec Kralove" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FC Hradec Kralove" href="/fc-hradec-kralove/startseite/verein/1897/saison_id/2021">FC Hradec Kralove</a> <span title="Promoted to 1st league 20/21" class="icons_sprite icon-aufsteiger">&nbsp;</span></td><td class="zentriert"><a title="FC Hradec Kralove" href="/fc-hradec-kralove/kader/verein/1897/saison_id/2021">30</a></td><td class="zentriert">24.3</td><td class="zentriert">1</td><td class="rechts">€219Th.</td><td class="rechts"><a title="FC Hradec Kralove" href="/fc-hradec-kralove/kader/verein/1897/saison_id/2021">€6.58m</a></td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="FK Pardubice" href="/fk-pardubice/startseite/verein/1496/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/1496.png?lm=1419786179" title=" " alt="FK Pardubice" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FK Pardubice" href="/fk-pardubice/startseite/verein/1496/saison_id/2021">FK Pardubice</a> </td><td class="zentriert"><a title="FK Pardubice" href="/fk-pardubice/kader/verein/1496/saison_id/2021">28</a></td><td class="zentriert">24.0</td><td class="zentriert">3</td><td class="rechts">€235Th.</td><td class="rechts"><a title="FK Pardubice" href="/fk-pardubice/kader/verein/1496/saison_id/2021">€6.58m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="FC Fastav Zlin" href="/fc-fastav-zlin/startseite/verein/5545/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/5545.png?lm=1419785784" title=" " alt="FC Fastav Zlin" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FC Fastav Zlin" href="/fc-fastav-zlin/startseite/verein/5545/saison_id/2021">FC Fastav Zlin</a> </td><td class="zentriert"><a title="FC Fastav Zlin" href="/fc-fastav-zlin/kader/verein/5545/saison_id/2021">28</a></td><td class="zentriert">26.7</td><td class="zentriert">8</td><td class="rechts">€230Th.</td><td class="rechts"><a title="FC Fastav Zlin" href="/fc-fastav-zlin/kader/verein/5545/saison_id/2021">€6.45m</a></td></tr>
</tbody>
</table>
<div class="keys" style="display:none" title="/fortuna-liga/startseite/wettbewerb/TS1"><span>&lt;a title=&quot;SK Slavia Prague&quot; href=&quot;/sk-slavia-prag/startseite/verein/62/saison_id/2021&quot;&gt;SK Slavia Prague&lt;/a&gt;</span><span>&lt;a title=&quot;AC Sparta Prague&quot; href=&quot;/ac-sparta-prag/startseite/verein/197/saison_id/2021&quot;&gt;AC Sparta Prague&lt;/a&gt;</span><span>&lt;a title=&quot;FC Viktoria Plzen&quot; href=&quot;/fc-viktoria-pilsen/startseite/verein/941/saison_id/2021&quot;&gt;FC Viktoria Plzen&lt;/a&gt;</span><span>&lt;a title=&quot;SK Sigma Olomouc&quot; href=&quot;/sk-sigma-olmutz/startseite/verein/2311/saison_id/2021&quot;&gt;SK Sigma Olomouc&lt;/a&gt;</span><span>&lt;a title=&quot;FC Banik Ostrava&quot; href=&quot;/fc-banik-ostrau/startseite/verein/377/saison_id/2021&quot;&gt;FC Banik Ostrava&lt;/a&gt;</span><span>&lt;a title=&quot;FC Slovan Liberec&quot; href=&quot;/fc-slovan-liberec/startseite/verein/697/saison_id/2021&quot;&gt;FC Slovan Liberec&lt;/a&gt;</span><span>&lt;a title=&quot;1.FC Slovacko&quot; href=&quot;/1-fc-slovacko/startseite/verein/5544/saison_id/2021&quot;&gt;1.FC Slovacko&lt;/a&gt;</span><span>&lt;a title=&quot;FK Jablonec&quot; href=&quot;/fk-jablonec/startseite/verein/1322/saison_id/2021&quot;&gt;FK Jablonec&lt;/a&gt;</span><span>&lt;a title=&quot;Bohemians Prague 1905&quot; href=&quot;/fc-bohemians-prag-1905/startseite/verein/715/saison_id/2021&quot;&gt;Bohemians Prague 1905&lt;/a&gt;</span><span>&lt;a title=&quot;FK Mlada Boleslav&quot; href=&quot;/fk-mlada-boleslav/startseite/verein/5546/saison_id/2021&quot;&gt;FK Mlada Boleslav&lt;/a&gt;</span><span>&lt;a title=&quot;MFK Karvina&quot; href=&quot;/mfk-karvina/startseite/verein/13726/saison_id/2021&quot;&gt;MFK Karvina&lt;/a&gt;</span><span>&lt;a title=&quot;FK Teplice&quot; href=&quot;/fk-teplice/startseite/verein/814/saison_id/2021&quot;&gt;FK Teplice&lt;/a&gt;</span><span>&lt;a title=&quot;SK Dynamo Ceske Budejovice&quot; href=&quot;/sk-dynamo-ceske-budejovice/startseite/verein/1321/saison_id/2021&quot;&gt;SK Dynamo Ceske Budejovice&lt;/a&gt;</span><span>&lt;a title=&quot;FC Hradec Kralove&quot; href=&quot;/fc-hradec-kralove/startseite/verein/1897/saison_id/2021&quot;&gt;FC Hradec Kralove&lt;/a&gt;</span><span>&lt;a title=&quot;FK Pardubice&quot; href=&quot;/fk-pardubice/startseite/verein/1496/saison_id/2021&quot;&gt;FK Pardubice&lt;/a&gt;</span><span>&lt;a title=&quot;FC Fastav Zlin&quot; href=&quot;/fc-fastav-zlin/startseite/verein/5545/saison_id/2021&quot;&gt;FC Fastav Zlin&lt;/a&gt;</span></div>
</div>    </div>
    <div class="table-footer">
        <a title="To table of market values" href="/fortuna-liga/marktwerteverein/wettbewerb/TS1">To table of market values</a>    </div>
</div>

<script async src="/js/custom/tm-track-links.min.js" type="module"></script>
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
                <th class="oddsServe-heading" data-competition="TS1"></th>            </tr>
            </thead>
			            <tr class="begegnungZeile" id="3601990" data-id="3601990">
                <td class="hide-for-small zeit al">
            Sat                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2022-02-12">Feb 12, 2022</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Hradec Kralove" href="/fc-hradec-kralove/spielplan/verein/1897/saison_id/2021">Hradec Kralove</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="FC Hradec Kralove" href="/fc-hradec-kralove/spielplan/verein/1897/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1897.png?lm=1419785163" title="&nbsp;" alt="FC Hradec Kralove" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3601990"><span class="matchresult finished">2:2</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1321.png?lm=1419785284" title="&nbsp;" alt="SK Dynamo Ceske Budejovice" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2021">C. Budejovice</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3601990' data-gameday='21' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3601992" data-id="3601992">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2021">Bohemians 1905</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/715.png?lm=1547322604" title="&nbsp;" alt="Bohemians Prague 1905" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3601992"><span class="matchresult finished">1:0</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FC Fastav Zlin" href="/fc-fastav-zlin/spielplan/verein/5545/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5545.png?lm=1419785784" title="&nbsp;" alt="FC Fastav Zlin" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="FC Fastav Zlin" href="/fc-fastav-zlin/spielplan/verein/5545/saison_id/2021">Fastav Zlin</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3601992' data-gameday='21' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3601996" data-id="3601996">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Banik Ostrava" href="/fc-banik-ostrau/spielplan/verein/377/saison_id/2021">Banik Ostrava</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="FC Banik Ostrava" href="/fc-banik-ostrau/spielplan/verein/377/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/377.png?lm=1419584907" title="&nbsp;" alt="FC Banik Ostrava" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3601996"><span class="matchresult finished">2:4</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FK Teplice" href="/fk-teplice/spielplan/verein/814/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/814.png?lm=1419784933" title="&nbsp;" alt="FK Teplice" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="FK Teplice" href="/fk-teplice/spielplan/verein/814/saison_id/2021">Teplice</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3601996' data-gameday='21' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3601993" data-id="3601993">
                <td class="hide-for-small zeit al">
            Sun                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2022-02-13">Feb 13, 2022</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="MFK Karvina" href="/mfk-karvina/spielplan/verein/13726/saison_id/2021">MFK Karvina</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="MFK Karvina" href="/mfk-karvina/spielplan/verein/13726/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/13726.png?lm=1419785681" title="&nbsp;" alt="MFK Karvina" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3601993"><span class="matchresult finished">1:1</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FK Jablonec" href="/fk-jablonec/spielplan/verein/1322/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1322.png?lm=1551278724" title="&nbsp;" alt="FK Jablonec" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="FK Jablonec" href="/fk-jablonec/spielplan/verein/1322/saison_id/2021">FK Jablonec</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3601993' data-gameday='21' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3601994" data-id="3601994">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2021">Slovacko</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5544.png?lm=1419785239" title="&nbsp;" alt="1.FC Slovacko" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3601994"><span class="matchresult finished">0:1</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="SK Slavia Prague" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/62.png?lm=1615070422" title="&nbsp;" alt="SK Slavia Prague" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="SK Slavia Prague" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2021">Slavia Prague</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3601994' data-gameday='21' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3601995" data-id="3601995">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2021">Sigma Olomouc</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/2311.png?lm=1419785397" title="&nbsp;" alt="SK Sigma Olomouc" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3601995"><span class="matchresult finished">2:1</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5546.png?lm=1419784887" title="&nbsp;" alt="FK Mlada Boleslav" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2021">Mlada Boleslav</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3601995' data-gameday='21' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3601989" data-id="3601989">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="AC Sparta Prague" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2021">Sparta Prague</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="AC Sparta Prague" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/197.png?lm=1623871758" title="&nbsp;" alt="AC Sparta Prague" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Match report" class="ergebnis-link" href="/spielbericht/index/spielbericht/3601989"><span class="matchresult finished">2:2</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/941.png?lm=1571347012" title="&nbsp;" alt="FC Viktoria Plzen" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2021">Viktoria Plzen</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3601989' data-gameday='21' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3601991" data-id="3601991">
                <td class="hide-for-small zeit al">
            Wed                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2022-03-09">Mar 9, 2022</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2021">Slovan Liberec</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/697.png?lm=1419784849" title="&nbsp;" alt="FC Slovan Liberec" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3601991"><span class="matchresult">4:30 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1496.png?lm=1419786179" title="&nbsp;" alt="FK Pardubice" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496/saison_id/2021">FK Pardubice</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3601991' data-gameday='21' data-competition='TS1'></span>                </td>
            </tr>

                              <tr>
      			<td style="text-align: right;" colspan="12">
              <span class="oddsServe-legal"></span>
            </td>
      		</tr>
                <tr>
            <td class="text-rechts footer p0" colspan="10">

</div>
    <div class="footer-links fl">

		<a title="Fortuna Liga" href="/fortuna-liga/spieltag/wettbewerb/TS1/spieltag/21/saison_id/2021">All games from matchday 21</a>    </div>
	<div class="footer-links">
	<a title="Fortuna Liga" href="/fortuna-liga/gesamtspielplan/wettbewerb/TS1/saison_id/2021">All fixtures & results</a></div>
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
                <th class="oddsServe-heading" data-competition="TS1"></th>            </tr>
            </thead>
			            <tr class="begegnungZeile" id="3602005" data-id="3602005">
                <td class="hide-for-small zeit al">
            Sat                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2022-02-19">Feb 19, 2022</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496/saison_id/2021">FK Pardubice</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1496.png?lm=1419786179" title="&nbsp;" alt="FK Pardubice" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Score Center" class="ergebnis-link live-ergebnis" href="/ticker/begegnung/live/3602005"><span class="matchresult finished noSheet">0:0</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FC Hradec Kralove" href="/fc-hradec-kralove/spielplan/verein/1897/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1897.png?lm=1419785163" title="&nbsp;" alt="FC Hradec Kralove" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="FC Hradec Kralove" href="/fc-hradec-kralove/spielplan/verein/1897/saison_id/2021">Hradec Kralove</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602005' data-gameday='22' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3602008" data-id="3602008">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Banik Ostrava" href="/fc-banik-ostrau/spielplan/verein/377/saison_id/2021">Banik Ostrava</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="FC Banik Ostrava" href="/fc-banik-ostrau/spielplan/verein/377/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/377.png?lm=1419584907" title="&nbsp;" alt="FC Banik Ostrava" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Score Center" class="ergebnis-link live-ergebnis" href="/ticker/begegnung/live/3602008"><span class="matchresult finished noSheet">1:0</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/2311.png?lm=1419785397" title="&nbsp;" alt="SK Sigma Olomouc" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2021">Sigma Olomouc</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602008' data-gameday='22' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3602010" data-id="3602010">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Fastav Zlin" href="/fc-fastav-zlin/spielplan/verein/5545/saison_id/2021">Fastav Zlin</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="FC Fastav Zlin" href="/fc-fastav-zlin/spielplan/verein/5545/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5545.png?lm=1419785784" title="&nbsp;" alt="FC Fastav Zlin" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="Score Center" class="ergebnis-link live-ergebnis" href="/ticker/begegnung/live/3602010"><span class="matchresult finished noSheet">1:0</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5544.png?lm=1419785239" title="&nbsp;" alt="1.FC Slovacko" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2021">Slovacko</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602010' data-gameday='22' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3602007" data-id="3602007">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2021">C. Budejovice</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1321.png?lm=1419785284" title="&nbsp;" alt="SK Dynamo Ceske Budejovice" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3602007"><span class="matchresult">6:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/941.png?lm=1571347012" title="&nbsp;" alt="FC Viktoria Plzen" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2021">Viktoria Plzen</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602007' data-gameday='22' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3602006" data-id="3602006">
                <td class="hide-for-small zeit al">
            Sun                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2022-02-20">Feb 20, 2022</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FK Jablonec" href="/fk-jablonec/spielplan/verein/1322/saison_id/2021">FK Jablonec</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="FK Jablonec" href="/fk-jablonec/spielplan/verein/1322/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1322.png?lm=1551278724" title="&nbsp;" alt="FK Jablonec" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3602006"><span class="matchresult">3:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="AC Sparta Prague" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/197.png?lm=1623871758" title="&nbsp;" alt="AC Sparta Prague" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="AC Sparta Prague" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2021">Sparta Prague</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602006' data-gameday='22' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3602011" data-id="3602011">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FK Teplice" href="/fk-teplice/spielplan/verein/814/saison_id/2021">Teplice</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="FK Teplice" href="/fk-teplice/spielplan/verein/814/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/814.png?lm=1419784933" title="&nbsp;" alt="FK Teplice" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3602011"><span class="matchresult">3:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="MFK Karvina" href="/mfk-karvina/spielplan/verein/13726/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/13726.png?lm=1419785681" title="&nbsp;" alt="MFK Karvina" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="MFK Karvina" href="/mfk-karvina/spielplan/verein/13726/saison_id/2021">MFK Karvina</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602011' data-gameday='22' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3602012" data-id="3602012">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2021">Mlada Boleslav</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5546.png?lm=1419784887" title="&nbsp;" alt="FK Mlada Boleslav" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3602012"><span class="matchresult">3:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/697.png?lm=1419784849" title="&nbsp;" alt="FC Slovan Liberec" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2021">Slovan Liberec</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602012' data-gameday='22' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3602009" data-id="3602009">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="SK Slavia Prague" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2021">Slavia Prague</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="SK Slavia Prague" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/62.png?lm=1615070422" title="&nbsp;" alt="SK Slavia Prague" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3602009"><span class="matchresult">6:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/715.png?lm=1547322604" title="&nbsp;" alt="Bohemians Prague 1905" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2021">Bohemians 1905</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602009' data-gameday='22' data-competition='TS1'></span>                </td>
            </tr>

                              <tr>
      			<td style="text-align: right;" colspan="12">
              <span class="oddsServe-legal"></span>
            </td>
      		</tr>
                <tr>
            <td class="text-rechts footer p0" colspan="10">

</div>
    <div class="footer-links fl">

		<a title="Fortuna Liga" href="/fortuna-liga/spieltag/wettbewerb/TS1/spieltag/22/saison_id/2021">All games from matchday 22</a>    </div>
	<div class="footer-links">
	<a title="Fortuna Liga" href="/fortuna-liga/gesamtspielplan/wettbewerb/TS1/saison_id/2021">All fixtures & results</a></div>
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
                <th class="oddsServe-heading" data-competition="TS1"></th>            </tr>
            </thead>
			            <tr class="begegnungZeile" id="3602024" data-id="3602024">
                <td class="hide-for-small zeit al">
            Sat                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2022-02-26">Feb 26, 2022</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2021">Slovan Liberec</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/697.png?lm=1419784849" title="&nbsp;" alt="FC Slovan Liberec" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3602024"><span class="matchresult">3:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FK Jablonec" href="/fk-jablonec/spielplan/verein/1322/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1322.png?lm=1551278724" title="&nbsp;" alt="FK Jablonec" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="FK Jablonec" href="/fk-jablonec/spielplan/verein/1322/saison_id/2021">FK Jablonec</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602024' data-gameday='23' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3602026" data-id="3602026">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2021">Slovacko</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5544.png?lm=1419785239" title="&nbsp;" alt="1.FC Slovacko" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3602026"><span class="matchresult">3:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5546.png?lm=1419784887" title="&nbsp;" alt="FK Mlada Boleslav" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2021">Mlada Boleslav</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602026' data-gameday='23' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3602028" data-id="3602028">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2021">Bohemians 1905</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/715.png?lm=1547322604" title="&nbsp;" alt="Bohemians Prague 1905" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3602028"><span class="matchresult">3:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FC Banik Ostrava" href="/fc-banik-ostrau/spielplan/verein/377/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/377.png?lm=1419584907" title="&nbsp;" alt="FC Banik Ostrava" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="FC Banik Ostrava" href="/fc-banik-ostrau/spielplan/verein/377/saison_id/2021">Banik Ostrava</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602028' data-gameday='23' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3602022" data-id="3602022">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2021">Viktoria Plzen</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/941.png?lm=1571347012" title="&nbsp;" alt="FC Viktoria Plzen" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3602022"><span class="matchresult">6:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1496.png?lm=1419786179" title="&nbsp;" alt="FK Pardubice" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496/saison_id/2021">FK Pardubice</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602022' data-gameday='23' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3602021" data-id="3602021">
                <td class="hide-for-small zeit al">
            Sun                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2022-02-27">Feb 27, 2022</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="MFK Karvina" href="/mfk-karvina/spielplan/verein/13726/saison_id/2021">MFK Karvina</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="MFK Karvina" href="/mfk-karvina/spielplan/verein/13726/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/13726.png?lm=1419785681" title="&nbsp;" alt="MFK Karvina" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3602021"><span class="matchresult">3:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1321.png?lm=1419785284" title="&nbsp;" alt="SK Dynamo Ceske Budejovice" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2021">C. Budejovice</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602021' data-gameday='23' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3602025" data-id="3602025">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Hradec Kralove" href="/fc-hradec-kralove/spielplan/verein/1897/saison_id/2021">Hradec Kralove</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="FC Hradec Kralove" href="/fc-hradec-kralove/spielplan/verein/1897/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1897.png?lm=1419785163" title="&nbsp;" alt="FC Hradec Kralove" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3602025"><span class="matchresult">3:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="SK Slavia Prague" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/62.png?lm=1615070422" title="&nbsp;" alt="SK Slavia Prague" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="SK Slavia Prague" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2021">Slavia Prague</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602025' data-gameday='23' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3602027" data-id="3602027">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2021">Sigma Olomouc</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/2311.png?lm=1419785397" title="&nbsp;" alt="SK Sigma Olomouc" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3602027"><span class="matchresult">3:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FK Teplice" href="/fk-teplice/spielplan/verein/814/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/814.png?lm=1419784933" title="&nbsp;" alt="FK Teplice" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="FK Teplice" href="/fk-teplice/spielplan/verein/814/saison_id/2021">Teplice</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602027' data-gameday='23' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="3602023" data-id="3602023">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
					                </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="AC Sparta Prague" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2021">Sparta Prague</a>                            </span>
                    <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="AC Sparta Prague" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/197.png?lm=1623871758" title="&nbsp;" alt="AC Sparta Prague" class="" /></a></a>
                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3602023"><span class="matchresult">6:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FC Fastav Zlin" href="/fc-fastav-zlin/spielplan/verein/5545/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5545.png?lm=1419785784" title="&nbsp;" alt="FC Fastav Zlin" class="" /></a>                                </a>
                            </span>
                    <span class="vereinsname">
                                <a title="FC Fastav Zlin" href="/fc-fastav-zlin/spielplan/verein/5545/saison_id/2021">Fastav Zlin</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
					                </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='3602023' data-gameday='23' data-competition='TS1'></span>                </td>
            </tr>

                              <tr>
      			<td style="text-align: right;" colspan="12">
              <span class="oddsServe-legal"></span>
            </td>
      		</tr>
                <tr>
            <td class="text-rechts footer p0" colspan="10">

</div>
    <div class="footer-links fl">

		<a title="Fortuna Liga" href="/fortuna-liga/spieltag/wettbewerb/TS1/spieltag/23/saison_id/2021">All games from matchday 23</a>    </div>
	<div class="footer-links">
	<a title="Fortuna Liga" href="/fortuna-liga/gesamtspielplan/wettbewerb/TS1/saison_id/2021">All fixtures & results</a></div>
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
                    <th class="oddsServe-heading" data-competition="TS1"></th>                </tr>
                </thead>
                <tbody>
									                    <tr class="begegnungZeile" id="">
					                        <td class="hide-for-small zeit al">
							Tue                        <span class="spielzeitpunkt">
                            <a href="/aktuell/waspassiertheute/aktuell/new/datum/2022-02-22">
                                Feb 22, 2022                            </a>
                        </span>
								                        </td>
						                    <td class="spieltagsthread home-sst hide-for-small">
						                    </td>
                    <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496">FK Pardubice</a>                            </span>
                        <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1496.png?lm=1419786179" title="&nbsp;" alt="FK Pardubice" class="" /></a></a>
                            </span>
                    </td>
                    <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3601970"><span class="matchresult">5:00 PM</span></a>                            </span>
                    </td>
                    <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544"><img src="https://tmssl.akamaized.net/images/wappen/homepage/5544.png?lm=1419785239" title="&nbsp;" alt="1.FC Slovacko" class="" /></a>                                </a>
                            </span>
                        <span class="vereinsname">
                                <a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544">Slovacko</a>                            </span>
                    </td>
                    <td class="spieltagsthread hide-for-small">
						                    </td>
                    <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','begegnungsbox');">
                        <span class='oddsServe' data-match='3601970' data-gameday='20' data-competition='TS1'></span>                        </td>
                    </td>
                    </tr>

                    					                    <tr class="begegnungZeile" id="">
					                        <td class="hide-for-small zeit al">
							Wed                        <span class="spielzeitpunkt">
                            <a href="/aktuell/waspassiertheute/aktuell/new/datum/2022-03-09">
                                Mar 9, 2022                            </a>
                        </span>
								                        </td>
						                    <td class="spieltagsthread home-sst hide-for-small">
						                    </td>
                    <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697">Slovan Liberec</a>                            </span>
                        <span class="vereinswappen">
                                <a title="name_mittel"
                                   href="#"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697"><img src="https://tmssl.akamaized.net/images/wappen/homepage/697.png?lm=1419784849" title="&nbsp;" alt="FC Slovan Liberec" class="" /></a></a>
                            </span>
                    </td>
                    <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/3601991"><span class="matchresult">4:30 PM</span></a>                            </span>
                    </td>
                    <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="name_mittel">
                                    <a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496"><img src="https://tmssl.akamaized.net/images/wappen/homepage/1496.png?lm=1419786179" title="&nbsp;" alt="FK Pardubice" class="" /></a>                                </a>
                            </span>
                        <span class="vereinsname">
                                <a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496">FK Pardubice</a>                            </span>
                    </td>
                    <td class="spieltagsthread hide-for-small">
						                    </td>
                    <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','begegnungsbox');">
                        <span class='oddsServe' data-match='3601991' data-gameday='21' data-competition='TS1'></span>                        </td>
                    </td>
                    </tr>

                                    <tr>
                    <td colspan="7" class="text-rechts footer">
                        <a href="/fortuna-liga/gesamtspielplan/wettbewerb/TS1/saison_id/2021">
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
	<h2 class="content-box-headline">Top goalscorers</h2>
	<div id="yw3" class="grid-view">
<div class="summary"></div>
<table class="items">
<thead>
<tr>
<th class="zentriert" id="yw3_c0">#</th><th id="yw3_c1">player</th><th class="zentriert" id="yw3_c2"><a class="sort-link" href="/fortuna-liga/startseite/wettbewerb/TS1/sort/age">Age</a></th><th class="zentriert" id="yw3_c3">club</th><th class="zentriert" id="yw3_c4"><a class="sort-link" href="/fortuna-liga/startseite/wettbewerb/TS1/sort/tore.desc">Goals</a></th></tr>
</thead>
<tbody>
<tr class="odd">
<td class="zentriert">1</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/412638-1617369787.png?lm=1" title="Ladislav Almasi" alt="Ladislav Almasi" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Ladislav Almasi" href="/ladislav-almasi/profil/spieler/412638">Ladislav Almasi</a></td></tr><tr><td>Centre-Forward</td></tr></table></td><td class="zentriert">22</td><td class="zentriert"><a title="FC Banik Ostrava" href="/fc-banik-ostrau/startseite/verein/377/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/377.png?lm=1419584907" title="&nbsp;" alt="FC Banik Ostrava" class="" /></a></td><td class="zentriert hauptlink">10</td></tr>
<tr class="even">
<td class="zentriert">2</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/s_198395_235_2013_07_16_1.jpg?lm=1" title="Jean-David Beauguel" alt="Jean-David Beauguel" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Jean-David Beauguel" href="/jean-david-beauguel/profil/spieler/198395">Jean-David Beauguel</a></td></tr><tr><td>Centre-Forward</td></tr></table></td><td class="zentriert">29</td><td class="zentriert"><a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/startseite/verein/941/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/941.png?lm=1571347012" title="&nbsp;" alt="FC Viktoria Plzen" class="" /></a></td><td class="zentriert hauptlink">10</td></tr>
<tr class="odd">
<td class="zentriert">3</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/248355-1642494403.jpg?lm=1" title="Vaclav Jurecka" alt="Vaclav Jurecka" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Vaclav Jurecka" href="/vaclav-jurecka/profil/spieler/248355">Vaclav Jurecka</a></td></tr><tr><td>Centre-Forward</td></tr></table></td><td class="zentriert">27</td><td class="zentriert"><a title="1.FC Slovacko" href="/1-fc-slovacko/startseite/verein/5544/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/5544.png?lm=1419785239" title="&nbsp;" alt="1.FC Slovacko" class="" /></a></td><td class="zentriert hauptlink">10</td></tr>
<tr class="even">
<td class="zentriert">4</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/334802-1642595050.png?lm=1" title="Jan Kuchta" alt="Jan Kuchta" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Jan Kuchta" href="/jan-kuchta/profil/spieler/334802">Jan Kuchta</a></td></tr><tr><td>Centre-Forward</td></tr></table></td><td class="zentriert">24</td><td class="zentriert"><a title="SK Slavia Prague" href="/sk-slavia-prag/startseite/verein/62/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/62.png?lm=1615070422" title="&nbsp;" alt="SK Slavia Prague" class="" /></a></td><td class="zentriert hauptlink">9</td></tr>
<tr class="odd">
<td class="zentriert">5</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/585985-1642494192.jpg?lm=1" title="Fortune Bassey" alt="Fortune Bassey" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Fortune Bassey" href="/fortune-bassey/profil/spieler/585985">Fortune Bassey</a></td></tr><tr><td>Centre-Forward</td></tr></table></td><td class="zentriert">23</td><td class="zentriert"><a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/startseite/verein/1321/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/1321.png?lm=1419785284" title="&nbsp;" alt="SK Dynamo Ceske Budejovice" class="" /></a></td><td class="zentriert hauptlink">9</td></tr>
</tbody>
</table>
<div class="keys" style="display:none" title="/fortuna-liga/startseite/wettbewerb/TS1"><span>1000000</span><span>2000000</span><span>650000</span><span>5000000</span><span>1000000</span></div>
</div>	<div class="content-link">
		<a title="View stats" href="/fortuna-liga/torschuetzenliste/wettbewerb/TS1/saison_id/2021">View stats</a>	</div>
</div>
<div id="recommender" class="box" >
    <div class="OUTBRAIN" data-src="" data-widget-id="AR_1" data-ob-template="DE_Transfermarkt.de" ></div>
	<script type="text/javascript" src="https://widgets.outbrain.com/outbrain.js"></script>
</div>
    </div>
    <div class="large-4 columns">
		<div class="werbung werbung-rectangle1"><!-- /58778164/Desktop-MediumRectangle-1 -->
                        <div id="div-gpt-ad-1621526463511-0" style="min-width: 300px; min-height: 250px;">
                          <script>
                            googletag.cmd.push(function() { googletag.display("div-gpt-ad-1621526463511-0"); });
                          </script>
                        </div></div>        <tm-data-scouts translation='{&quot;headline&quot;:{&quot;singular&quot;:&quot;Responsible data scout:&quot;,&quot;plural&quot;:&quot;Responsible data scouts:&quot;}}' competition-id="TS1"></tm-data-scouts>
        <div class="box">
    <div id="tabs">
<ul>
<li class="three-tabs"><a href="#tabs-1">News</a></li>
<li class="three-tabs"><a href="#tabs-2">Transfers</a></li>
<li class="three-tabs"><a href="#tabs-3">Market values</a></li>
</ul>
<div id="tabs-1">    <h2 class="content-box-headline">More News</h2>
    <div class="news-content-box">
         <a
    class="news-content-box__link"
    href="/market-values-czechia-hlozek-increases-again-slavia-prague-on-the-up/view/news/397195"
    onclick="tmEvent('Button', 'click' , 'wettbewerb_profil_news_1_4');"
>
    <div class="news-content-box__img">
        <img title="Adam Hlozek - Source: imago images" alt="Adam Hlozek" class=" lazy" data-src="https://img.a.transfermarkt.technology/portrait/medium/552057-1637591571.jpg?lm=1">    </div>
    <div class="news-content-box__flex-container">
        <span class="news-content-box__header">
                        Update Fortuna Liga        </span>
        <p class="news-content-box__paragraph">
            Market values Czechia: Hlozek increases again - Slavia Prague on the up        </p>
    </div>
</a>
 <a
    class="news-content-box__link"
    href="/daniel-samek-following-in-the-footsteps-of-soucek-amp-kral-at-slavia-starter-at-the-age-of-17/view/news/396466"
    onclick="tmEvent('Button', 'click' , 'wettbewerb_profil_news_2_4');"
>
    <div class="news-content-box__img">
        <img title="Daniel Samek - Source: www.slavia.cz" alt="Daniel Samek" class=" lazy" data-src="https://img.a.transfermarkt.technology/portrait/medium/671542-1632250182.png?lm=1">    </div>
    <div class="news-content-box__flex-container">
        <span class="news-content-box__header">
                        Talents Calendar        </span>
        <p class="news-content-box__paragraph">
            Daniel Samek: Following in the footsteps of Soucek & Kral at Slavia - Starter at the age of 17        </p>
    </div>
</a>
 <a
    class="news-content-box__link"
    href="/market-values-czech-republic-stanciu-new-in-top-5-slavia-with-13-players-in-top-15/view/news/388120"
    onclick="tmEvent('Button', 'click' , 'wettbewerb_profil_news_3_4');"
>
    <div class="news-content-box__img">
        <img title="Nicolae Stanciu - Source: www.slavia.cz" alt="Nicolae Stanciu" class=" lazy" data-src="https://img.a.transfermarkt.technology/portrait/medium/148372-1632250404.png?lm=1">    </div>
    <div class="news-content-box__flex-container">
        <span class="news-content-box__header">
                        Update Fortuna Liga        </span>
        <p class="news-content-box__paragraph">
            Market values Czech Republic: Stanciu new in top 5 - Slavia with 13 players in top 15        </p>
    </div>
</a>
 <a
    class="news-content-box__link"
    href="/market-values-czech-republic-slavia-biggest-winner-top-provider-provod-gains/view/news/383719"
    onclick="tmEvent('Button', 'click' , 'wettbewerb_profil_news_4_4');"
>
    <div class="news-content-box__img">
        <img title="Lukas Provod - Source: www.slavia.cz" alt="Lukas Provod" class=" lazy" data-src="https://img.a.transfermarkt.technology/portrait/medium/292779-1632250531.png?lm=1">    </div>
    <div class="news-content-box__flex-container">
        <span class="news-content-box__header">
                        Intermediary update Fortuna Liga        </span>
        <p class="news-content-box__paragraph">
            Market values Czech Republic: Slavia biggest winner - Top provider Provod gains        </p>
    </div>
</a>
    </div>
    <div class="footer">
        <a href="/fortuna-liga/news/wettbewerb/TS1">View all news</a>    </div>

    </div>
<div id="tabs-2">	<div class="box-slider">
		<div class="container">
			<span class="letzteTransfersWettbewerbSlider-prev"></span>
			<p class="text"><span>Latest transfers</span></p>
			<span class="letzteTransfersWettbewerbSlider-next"></span>
		</div>
		<div class="clearer" style="max-height:269px;overflow:hidden;">
			<ul class="letzteTransfersWettbewerbSlider slider-list">
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3752168">
						<div>
	<div class="container-foto text-center">
		<img src="https://img.a.transfermarkt.technology/portrait/medium/default.jpg?lm=1" title="Pavel Osmancik" alt="Pavel Osmancik" class="bilderrahmen max-medium-foto" />	</div>
	<div class="container-inhalt">
		<div class="container-hauptinfo">
			<a title="Pavel Osmancik" href="/pavel-osmancik/profil/spieler/620155">Pavel Osmancik</a>		</div>
		<div class="container-zusatzinfo">
			<b>Age:</b> 21 Years&nbsp;
			<img src="https://tmssl.akamaized.net/images/flagge/tiny/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /><br />
			<b>Position:</b> Centre-Forward<br />
			<b>Market value:</b> €200Th.<br />
		</div>
		<div class="container-hauptfact">
            <b>Fee:</b> <b>loan transfer</b> 		</div>
		<div class="container-transferwappen">
			<div class="text-center container-wappen">
				<a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/transfers/verein/715"><img src="https://tmssl.akamaized.net/images/wappen/medium/715.png?lm=1547322604" title="&nbsp;" alt="Bohemians Prague 1905" class="" /></a>			</div>
			<div class="text-center container-pfeil">
				<span class="icons_sprite wechsel-pfeil-slider">&nbsp;</span>
			</div>
			<div class="text-center container-wappen">
				<a title="FK Viktoria Zizkov" href="/fk-viktoria-zizkov/transfers/verein/892"><img src="https://tmssl.akamaized.net/images/wappen/medium/892.png?lm=1484436113" title="&nbsp;" alt="FK Viktoria Zizkov" class="" /></a>			</div>
			<div class="clearer"></div>
		</div>
	</div>
</div>
					</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3396963">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3750204">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3750106">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3750073">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3681786">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3664027">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3748528">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3744914">
											</li>
									<li class="slider-list" data-src="/fortuna-liga/transfers/wettbewerbAjax/TS1/trans_id/3743991">
											</li>
							</ul>
		</div>
		<div class="footer bxPagerParent">
			<span class="bxPagerCustom"></span><a title="View complete list" href="/fortuna-liga/letztetransfers/wettbewerb/TS1">View complete list</a>		</div>
	</div>
</div>
<div id="tabs-3"><div class="container">
	<h2 class="content-box-headline">Most valuable players in the league</h2>
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
<td class="zentriert">1</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/552057-1637591571.jpg?lm=1" title="Adam Hlozek" alt="Adam Hlozek" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Adam Hlozek" href="/adam-hlozek/profil/spieler/552057">Adam Hlozek</a></td></tr><tr><td>Second Striker</td></tr></table></td><td class="zentriert"><a title="AC Sparta Prague" href="/ac-sparta-prag/startseite/verein/197/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/197.png?lm=1623871758" title="&nbsp;" alt="AC Sparta Prague" class="" /></a></td><td class="rechts hauptlink">€19.00m</td></tr>
<tr class="even">
<td class="zentriert">2</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/216278-1632250076.png?lm=1" title="Tomas Holes" alt="Tomas Holes" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Tomas Holes" href="/tomas-holes/profil/spieler/216278">Tomas Holes</a></td></tr><tr><td>Defensive Midfield</td></tr></table></td><td class="zentriert"><a title="SK Slavia Prague" href="/sk-slavia-prag/startseite/verein/62/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/62.png?lm=1615070422" title="&nbsp;" alt="SK Slavia Prague" class="" /></a></td><td class="rechts hauptlink">€7.00m</td></tr>
<tr class="odd">
<td class="zentriert">3</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/148372-1632250404.png?lm=1" title="Nicolae Stanciu" alt="Nicolae Stanciu" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Nicolae Stanciu" href="/nicolae-stanciu/profil/spieler/148372">Nicolae Stanciu</a></td></tr><tr><td>Attacking Midfield</td></tr></table></td><td class="zentriert"><a title="SK Slavia Prague" href="/sk-slavia-prag/startseite/verein/62/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/62.png?lm=1615070422" title="&nbsp;" alt="SK Slavia Prague" class="" /></a></td><td class="rechts hauptlink">€7.00m</td></tr>
<tr class="even">
<td class="zentriert">4</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/248393-1632250522.png?lm=1" title="Peter Olayinka" alt="Peter Olayinka" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Peter Olayinka" href="/peter-olayinka/profil/spieler/248393">Peter Olayinka</a></td></tr><tr><td>Left Winger</td></tr></table></td><td class="zentriert"><a title="SK Slavia Prague" href="/sk-slavia-prag/startseite/verein/62/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/62.png?lm=1615070422" title="&nbsp;" alt="SK Slavia Prague" class="" /></a></td><td class="rechts hauptlink">€7.00m</td></tr>
<tr class="odd">
<td class="zentriert">5</td><td><table class=inline-table><tr><td rowspan=2><a href="#"><img src="https://img.a.transfermarkt.technology/portrait/small/189630-1632249371.png?lm=1" title="Ondrej Kolar" alt="Ondrej Kolar" class="bilderrahmen-fixed" /></a></td><td class=hauptlink><a title="Ondrej Kolar" href="/ondrej-kolar/profil/spieler/189630">Ondrej Kolar</a></td></tr><tr><td>Goalkeeper</td></tr></table></td><td class="zentriert"><a title="SK Slavia Prague" href="/sk-slavia-prag/startseite/verein/62/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/verysmall/62.png?lm=1615070422" title="&nbsp;" alt="SK Slavia Prague" class="" /></a></td><td class="rechts hauptlink">€6.00m</td></tr>
</tbody>
</table>
<div class="keys" style="display:none" title="/fortuna-liga/startseite/wettbewerb/TS1"><span>19000000</span><span>7000000</span><span>7000000</span><span>7000000</span><span>6000000</span></div>
</div></div>
<div class="footer no-border">
	<a title="View stats" href="/fortuna-liga/marktwerte/wettbewerb/TS1">View stats</a></div>
</div>
</div>
</div>
        <div class="box tab-print">
            <div class="content-box-headline">Table                Fortuna Liga                21/22            </div>
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
                                style="background-color:#c3dc9a">1<span title="previous week 2.place" class="icons_sprite green-arrow-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="SK Slavia Prague" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/62.png?lm=1615070422" title="&nbsp;" alt="SK Slavia Prague" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="SK Slavia Prague" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2021">Slavia Prague</a>                                <a href="#"><img src="https://tmssl.akamaized.net/images/erfolge/mini/21.png?lm=1461847499" title="Czech Champion 20/21" alt="Czech Champion 20/21" class="tabelle-erfolg" /></a><a href="#"><img src="https://tmssl.akamaized.net/images/erfolge/mini/341.png?lm=1632121640" title="Czech Cup Winner 20/21" alt="Czech Cup Winner 20/21" class="tabelle-erfolg" /></a>                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">37</td>
                                                        <td class="zentriert">51</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#c3dc9a">2<span title="previous week 1.place" class="icons_sprite red-arrow-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/941.png?lm=1571347012" title="&nbsp;" alt="FC Viktoria Plzen" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2021">Viktoria Plzen</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">24</td>
                                                        <td class="zentriert">51</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#c3dc9a">3<span title="previous week 3.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="AC Sparta Prague" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/197.png?lm=1623871758" title="&nbsp;" alt="AC Sparta Prague" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="AC Sparta Prague" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2021">Sparta Prague</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">24</td>
                                                        <td class="zentriert">47</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#c3dc9a">4<span title="previous week 4.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="FC Banik Ostrava" href="/fc-banik-ostrau/spielplan/verein/377/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/377.png?lm=1419584907" title="&nbsp;" alt="FC Banik Ostrava" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="FC Banik Ostrava" href="/fc-banik-ostrau/spielplan/verein/377/saison_id/2021">Banik Ostrava</a>                                                            </td>
                            <td class="zentriert">22</td>
                            <td class="zentriert">16</td>
                                                        <td class="zentriert">42</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#c3dc9a">5<span title="previous week 5.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/5544.png?lm=1419785239" title="&nbsp;" alt="1.FC Slovacko" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2021">Slovacko</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">14</td>
                                                        <td class="zentriert">39</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#c3dc9a">6<span title="previous week 8.place" class="icons_sprite green-arrow-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="FC Hradec Kralove" href="/fc-hradec-kralove/spielplan/verein/1897/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/1897.png?lm=1419785163" title="&nbsp;" alt="FC Hradec Kralove" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="FC Hradec Kralove" href="/fc-hradec-kralove/spielplan/verein/1897/saison_id/2021">Hradec Kralove</a>                                <span title="Promoted to 1st league 20/21" class="icons_sprite icon-aufsteiger">&nbsp;</span>                            </td>
                            <td class="zentriert">22</td>
                            <td class="zentriert">-3</td>
                                                        <td class="zentriert">27</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#bdd9ef">7<span title="previous week 7.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/1321.png?lm=1419785284" title="&nbsp;" alt="SK Dynamo Ceske Budejovice" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="SK Dynamo Ceske Budejovice" href="/sk-dynamo-ceske-budejovice/spielplan/verein/1321/saison_id/2021">C. Budejovice</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">-4</td>
                                                        <td class="zentriert">27</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#bdd9ef">8<span title="previous week 6.place" class="icons_sprite red-arrow-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/5546.png?lm=1419784887" title="&nbsp;" alt="FK Mlada Boleslav" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2021">Mlada Boleslav</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">-1</td>
                                                        <td class="zentriert">26</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#bdd9ef">9<span title="previous week 10.place" class="icons_sprite green-arrow-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/2311.png?lm=1419785397" title="&nbsp;" alt="SK Sigma Olomouc" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2021">Sigma Olomouc</a>                                                            </td>
                            <td class="zentriert">22</td>
                            <td class="zentriert">2</td>
                                                        <td class="zentriert">25</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#bdd9ef">10<span title="previous week 11.place" class="icons_sprite green-arrow-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="FC Fastav Zlin" href="/fc-fastav-zlin/spielplan/verein/5545/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/5545.png?lm=1419785784" title="&nbsp;" alt="FC Fastav Zlin" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="FC Fastav Zlin" href="/fc-fastav-zlin/spielplan/verein/5545/saison_id/2021">Fastav Zlin</a>                                                            </td>
                            <td class="zentriert">22</td>
                            <td class="zentriert">-12</td>
                                                        <td class="zentriert">25</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#f8cfcd">11<span title="previous week 9.place" class="icons_sprite red-arrow-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/697.png?lm=1419784849" title="&nbsp;" alt="FC Slovan Liberec" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2021">Slovan Liberec</a>                                                            </td>
                            <td class="zentriert">20</td>
                            <td class="zentriert">-10</td>
                                                        <td class="zentriert">24</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#f8cfcd">12<span title="previous week 13.place" class="icons_sprite green-arrow-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/715.png?lm=1547322604" title="&nbsp;" alt="Bohemians Prague 1905" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2021">Bohemians 1905</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">-17</td>
                                                        <td class="zentriert">21</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#f8cfcd">13<span title="previous week 12.place" class="icons_sprite red-arrow-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="FK Jablonec" href="/fk-jablonec/spielplan/verein/1322/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/1322.png?lm=1551278724" title="&nbsp;" alt="FK Jablonec" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="FK Jablonec" href="/fk-jablonec/spielplan/verein/1322/saison_id/2021">FK Jablonec</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">-19</td>
                                                        <td class="zentriert">20</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#f8cfcd">14<span title="previous week 14.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/1496.png?lm=1419786179" title="&nbsp;" alt="FK Pardubice" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496/saison_id/2021">FK Pardubice</a>                                                            </td>
                            <td class="zentriert">20</td>
                            <td class="zentriert">-17</td>
                                                        <td class="zentriert">18</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#f8cfcd">15<span title="previous week 15.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="FK Teplice" href="/fk-teplice/spielplan/verein/814/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/814.png?lm=1419784933" title="&nbsp;" alt="FK Teplice" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="FK Teplice" href="/fk-teplice/spielplan/verein/814/saison_id/2021">Teplice</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">-15</td>
                                                        <td class="zentriert">17</td>
                        </tr>
                                                <tr>
                            <td class="rechts hauptlink nowrap"
                                style="background-color:#f8cfcd">16<span title="previous week 16.place" class="icons_sprite grey-block-ten">&nbsp;</span></td>
                            <td class="zentriert no-border-rechts"><a title="MFK Karvina" href="/mfk-karvina/spielplan/verein/13726/saison_id/2021"><img src="https://tmssl.akamaized.net/images/wappen/tiny/13726.png?lm=1419785681" title="&nbsp;" alt="MFK Karvina" class="tiny_wappen" /></a></td>
                            <td class="no-border-links hauptlink">
                                <a title="MFK Karvina" href="/mfk-karvina/spielplan/verein/13726/saison_id/2021">MFK Karvina</a>                                                            </td>
                            <td class="zentriert">21</td>
                            <td class="zentriert">-19</td>
                                                        <td class="zentriert">9</td>
                        </tr>
                                            </tbody>
                </table>
            </div>
            <div class="table-footer">
                <a title="To complete table" href="/fortuna-liga/tabelle/wettbewerb/TS1/saison_id/2021">To complete table</a>            </div>
        </div>
                <div class="box box-slider geruechte-print" style="max-height: 334px;overflow: hidden;">
        <div class="container">
            <span class="geruechteWettbewerbSlider-prev"></span>
            <p class="text"><span>Top rumours</span></p>
            <span class="geruechteWettbewerbSlider-next"></span>
        </div>
        <div class="clearer">
            <ul class="geruechteWettbewerbSlider slider-list">
                                    <li class="slider-list" data-src="/fortuna-liga/geruechte/wettbewerbAjax/TS1/board_id/343/thread_id/8195">
                        <div>
	<div class="container-foto text-center">
		<img src="https://img.a.transfermarkt.technology/portrait/medium/148372-1632250404.png?lm=1" title="Nicolae Stanciu" alt="Nicolae Stanciu" class="bilderrahmen max-medium-foto" />	</div>
	<div class="container-inhalt">
		<div class="container-hauptinfo">
			<a title="Nicolae Stanciu" href="/nicolae-stanciu/profil/spieler/148372">Nicolae Stanciu</a>		</div>
		<div class="container-zusatzinfo">
			<b>Age:</b> 28 Years&nbsp;
			<img src="https://tmssl.akamaized.net/images/flagge/tiny/140.png?lm=1520611569" title="Romania" alt="Romania" class="flaggenrahmen" /><br />
			<b>Position:</b> Attacking Midfield<br />
			<b>Market value:</b> €7.00m<br />
		</div>
		<div class="container-transferwappen">
			<div class="text-center container-wappen">
				<a title="SK Slavia Prague" href="/sk-slavia-prag/transfers/verein/62"><img src="https://tmssl.akamaized.net/images/wappen/medium/62.png?lm=1615070422" title="&nbsp;" alt="SK Slavia Prague" class="" /></a>			</div>
			<div class="text-center container-pfeil">
				<span class="icons_sprite wechsel-pfeil-slider">&nbsp;</span>
			</div>
			<div class="text-center container-wappen">
				<a title="Wuhan FC" href="/wuhan-fc/transfers/verein/6450"><img src="https://tmssl.akamaized.net/images/wappen/medium/6450.png?lm=1618561221" title="&nbsp;" alt="Wuhan FC" class="" /></a>			</div>
			<div class="clearer"></div>
		</div>
	</div>
	<div class="clearer"></div>
</div>
<div class="container-footer">
	<div class="text-center wahrscheinlichkeit">
		<div class="wahrscheinlichkeits-text">35<span class="prozentzeichen">%<br><span class="icons_sprite wertung-sinkend" title="Rating went down">&nbsp</span></span></div>
	</div>
	<div class="text-left container-diskussion">
		<a href="https://www.transfermarkt.com/wuhan-fc-interested-in-nicolae-stanciu/thread/forum/343/thread_id/8195/post_id/9604#9604">Participate in discussion</a><span class="mitdiskutieren">1</span>
	</div>
</div>                    </li>
                                </ul>
        </div>
        <div class="footer bxPagerParent">
            <span class="bxPagerCustomGeruechte">
                <a title="To rumour overview" href="/fortuna-liga/geruechte/wettbewerb/TS1">To rumour overview</a>            </span>
        </div>
    </div>
    <div class="box beliebtheit-vote">
    <span class="content-box-headline">
        Who do you want to win?            </span>

    <div class="content">
						<p class="beliebtheit-text">In this match you stick with...</p>
							<img src="https://tmssl.akamaized.net//images/beliebtheit/versus.png" alt="versus" class="beliebtheit-versus" />
			<a href="/beliebtheit/speichernVereine?verein_id_gewinner=5545&verein_id_verlierer=5544&kontinent=0&land=0&wettbewerb=TS1&typ=verein&verein_id_1=5545&lieblingsverein=0" class="beliebtheit-wahl-verein beliebtheit-wahl-heim">
				<img src="https://tmssl.akamaized.net/images/wappen/headerRund/5545.png?lm=1419785784" title="&nbsp;" alt="FC Fastav Zlin" class="" />FC Fastav Zlin			</a>
			<a href="/beliebtheit/speichernVereine?verein_id_gewinner=5544&verein_id_verlierer=5545&kontinent=0&land=0&wettbewerb=TS1&typ=verein&verein_id_1=5545&lieblingsverein=0" class="beliebtheit-wahl-verein beliebtheit-wahl-gast">
				<img src="https://tmssl.akamaized.net/images/wappen/headerRund/5544.png?lm=1419785239" title="&nbsp;" alt="1.FC Slovacko" class="" />1.FC Slovacko			</a>
			    </div>
</div>
<div class="werbung werbung-rectangle2"><!-- /58778164/Desktop-MediumRectangle-2 -->
                        <div id="div-gpt-ad-1621528018930-0" style="min-width: 300px; min-height: 250px;">
                          <script>
                            googletag.cmd.push(function() { googletag.display("div-gpt-ad-1621528018930-0"); });
                          </script>
                        </div></div>    </div>
</div>

<tm-language-hint></tm-language-hint>

<div class="werbung-skyscraper-container">
    </div>

<div class="werbung-skyscraperbtf-container">
    </div>


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

	<!-- Adition -->
	<div id="oddsServe" >
	<script type="text/javascript">
		adition.srq.push(function(api) {
			api.renderSlot("oddsServe");
		})
	</script>
	</div>

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
<script type="text/javascript" src="https://tmssl.akamaized.net/assets/b7c5571cf8957553f95f6d9069eaed67/jui/js/jquery-ui.min.js?lm=1645174347"></script>
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
});
/*]]>*/
</script>
</body>
</html>

`;

export const LEAGUE_DATA: SoccerBotResponse<SoccerBotTeam[]> = {
  ok: true,
  data: [
    { id: '62', name: 'SK Slavia Prague' },
    { id: '197', name: 'AC Sparta Prague' },
    { id: '941', name: 'FC Viktoria Plzen' },
    { id: '2311', name: 'SK Sigma Olomouc' },
    { id: '377', name: 'FC Banik Ostrava' },
    { id: '697', name: 'FC Slovan Liberec' },
    { id: '5544', name: '1.FC Slovacko' },
    { id: '1322', name: 'FK Jablonec' },
    { id: '715', name: 'Bohemians Prague 1905' },
    { id: '5546', name: 'FK Mlada Boleslav' },
    { id: '13726', name: 'MFK Karvina' },
    { id: '814', name: 'FK Teplice' },
    { id: '1321', name: 'SK Dynamo Ceske Budejovice' },
    { id: '1897', name: 'FC Hradec Kralove' },
    { id: '1496', name: 'FK Pardubice' },
    { id: '5545', name: 'FC Fastav Zlin' }
  ]
};
