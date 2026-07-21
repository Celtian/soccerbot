import { SoccerBotResponse, SoccerBotTeam } from '../../../src/shared/interfaces';

export const LEAGUE_HTML = `<!DOCTYPE html>
<html lang="en">

<head>

<script type="text/javascript" data-description="sourcepoint stub code">
    !function () { var e = function () { var e, t = "__tcfapiLocator", a = [], n = window; for (; n;) { try { if (n.frames[t]) { e = n; break } } catch (e) { } if (n === window.top) break; n = n.parent } e || (!function e() { var a = n.document, r = !!n.frames[t]; if (!r) if (a.body) { var i = a.createElement("iframe"); i.style.cssText = "display:none", i.name = t, a.body.appendChild(i) } else setTimeout(e, 5); return !r }(), n.__tcfapi = function () { for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r]; if (!n.length) return a; if ("setGdprApplies" === n[0]) n.length > 3 && 2 === parseInt(n[1], 10) && "boolean" == typeof n[3] && (e = n[3], "function" == typeof n[2] && n[2]("set", !0)); else if ("ping" === n[0]) { var i = { gdprApplies: e, cmpLoaded: !1, cmpStatus: "stub" }; "function" == typeof n[2] && n[2](i) } else a.push(n) }, n.addEventListener("message", (function (e) { var t = "string" == typeof e.data, a = {}; try { a = t ? JSON.parse(e.data) : e.data } catch (e) { } var n = a.__tcfapiCall; n && window.__tcfapi(n.command, n.version, (function (a, r) { var i = { __tcfapiReturn: { returnValue: a, success: r, callId: n.callId } }; t && (i = JSON.stringify(i)), e.source.postMessage(i, "*") }), n.parameter) }), !1)) }; "undefined" != typeof module ? module.exports = e : e() }();
</script>
<script data-description="sourcepoint configuration">
window._sp_ = {
    config: {"accountId":1254,"propertyId":7427,"gdpr":{"consentLanguage":"en","targetingParams":{"acps":"false"}},"baseEndpoint":"https://cdn.privacy-mgmt.com","isSPA":true,"cpPropertyId":"7a84b340"}}
</script>
<script src="https://cdn.privacy-mgmt.com/wrapperMessagingWithoutDetection.js" async></script>
<script type="text/javascript" data-description="contentpass integration">
    (function() {
        var cpBaseUrl = 'https://cp.transfermarkt.com';
        var cpController = cpBaseUrl + '/now.js';
        var cpPropertyId = '7a84b340';

        !function(C,o,n,t,P,a,s){C['CPObject']=n;C[n]||(C[n]=function(){
        (C[n].q=C[n].q||[]).push(arguments)});C[n].l=+new Date;a=o.createElement(t);
        s=o.getElementsByTagName(t)[0];a.src=P;s.parentNode.insertBefore(a,s)}
        (window,document,'cp','script',cpController);

        !function(C,o,n,t,P){if(!C[n].patched){cp('extension','authenticate');P=C[n].q.push;
        C[n].q.push=function(a){if(a[0]==='authenticate'){if((o['cookie']||'').indexOf('_cpauthhint=')===-1&&
        !(C['localStorage']||{})['_cpuser']&&C.location.href.toLowerCase().indexOf('cpauthenticated')===-1){
        t={isLoggedIn:function(){return false;},hasValidSubscription:function(){return false;}};
        (typeof a[1]==='function'&&a[1](null,t));C[n].afp=true;P.apply(C[n].q,[['authenticate',null]]);
        return t;}}P.apply(C[n].q,[a]);}}}
        (window,document,'cp',false);

        cp('create', cpPropertyId, {
        baseUrl: cpBaseUrl
        });

        cp('render', {
        onFullConsent: function() {
            console.log('[DEMO] onFullConsent');
        }
        })
    })()
</script>

<script type="text/javascript" data-description="contentpass sourcepoint fast path">
(function () {
    cp('authenticate', function(err, user) {
        if (err || (!user.isLoggedIn() && !user.hasValidSubscription())) {
        // console.log('[SPCP] Taking fast path');
        (function spExecMsg() {
            if (window._sp_ && window._sp_.executeMessaging) {
            if (!window._sp_.config.isSPA) {
                // console.warn('[SPCP] Sourcepoint not in SPA mode!');
            } else if (window._sp_.version) {
                // console.log('[SPCP] Sourcepoint already running');
            } else {
                // console.log('[SPCP] Starting Sourcepoint');
                window._sp_.executeMessaging();
            }
            } else {
            // console.log('[SPCP] Sourcepoint not loaded yet. Retrying.');
            setTimeout(spExecMsg, 10);
            }
        })();
        }
    });
    })();
</script>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    <link rel="shortcut icon" sizes="16x16" href="/favicon-16x16.png">
    <link rel="shortcut icon" sizes="192x192" href="/android-chrome-192x192.png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=2.0, user-scalable=no" />
<meta name="keywords" content="Chance Liga,Czech Republic" />
<meta name="description" content="This is the page for the Chance Liga, with an overview of fixtures, tables, dates, squads, market values, statistics and history." />
<meta property="og:type" content="article" />
<meta property="og:image" content="https://tmssl.akamaized.net/images/tm_logo.png" />
<meta property="og:description" content="" />
<meta property="og:title" content="Chance Liga 26/27" />
<meta property="twitter:title" content="Chance Liga 26/27" />
<meta property="og:url" content="https://www.transfermarkt.com/slug/startseite/wettbewerb/TS1" />
<link hreflang="de" rel="alternate" href="https://www.transfermarkt.de/slug/startseite/wettbewerb/TS1" />
<link hreflang="de-LU" rel="alternate" href="https://www.transfermarkt.de/slug/startseite/wettbewerb/TS1" />
<link hreflang="de-AT" rel="alternate" href="https://www.transfermarkt.at/slug/startseite/wettbewerb/TS1" />
<link hreflang="de-CH" rel="alternate" href="https://www.transfermarkt.ch/slug/startseite/wettbewerb/TS1" />
<link hreflang="tr" rel="alternate" href="https://www.transfermarkt.com.tr/slug/startseite/wettbewerb/TS1" />
<link hreflang="it-CH" rel="alternate" href="https://www.transfermarkt.it/slug/startseite/wettbewerb/TS1" />
<link hreflang="it" rel="alternate" href="https://www.transfermarkt.it/slug/startseite/wettbewerb/TS1" />
<link hreflang="pl" rel="alternate" href="https://www.transfermarkt.pl/slug/startseite/wettbewerb/TS1" />
<link hreflang="en-GB" rel="alternate" href="https://www.transfermarkt.co.uk/slug/startseite/wettbewerb/TS1" />
<link hreflang="en-IE" rel="alternate" href="https://www.transfermarkt.co.uk/slug/startseite/wettbewerb/TS1" />
<link hreflang="es" rel="alternate" href="https://www.transfermarkt.es/slug/startseite/wettbewerb/TS1" />
<link hreflang="es-ES" rel="alternate" href="https://www.transfermarkt.es/slug/startseite/wettbewerb/TS1" />
<link hreflang="es-CL" rel="alternate" href="https://www.transfermarkt.es/slug/startseite/wettbewerb/TS1" />
<link hreflang="es-VE" rel="alternate" href="https://www.transfermarkt.es/slug/startseite/wettbewerb/TS1" />
<link hreflang="es-EC" rel="alternate" href="https://www.transfermarkt.es/slug/startseite/wettbewerb/TS1" />
<link hreflang="es-CU" rel="alternate" href="https://www.transfermarkt.es/slug/startseite/wettbewerb/TS1" />
<link hreflang="nl" rel="alternate" href="https://www.transfermarkt.nl/slug/startseite/wettbewerb/TS1" />
<link hreflang="pt" rel="alternate" href="https://www.transfermarkt.pt/slug/startseite/wettbewerb/TS1" />
<link hreflang="ru" rel="alternate" href="https://www.transfermarkt.world/slug/startseite/wettbewerb/TS1" />
<link hreflang="fr-CH" rel="alternate" href="https://www.transfermarkt.fr/slug/startseite/wettbewerb/TS1" />
<link hreflang="fr" rel="alternate" href="https://www.transfermarkt.fr/slug/startseite/wettbewerb/TS1" />
<link hreflang="fr-CA" rel="alternate" href="https://www.transfermarkt.fr/slug/startseite/wettbewerb/TS1" />
<link hreflang="fr-CI" rel="alternate" href="https://www.transfermarkt.fr/slug/startseite/wettbewerb/TS1" />
<link hreflang="fr-LU" rel="alternate" href="https://www.transfermarkt.fr/slug/startseite/wettbewerb/TS1" />
<link hreflang="fr-BE" rel="alternate" href="https://www.transfermarkt.fr/slug/startseite/wettbewerb/TS1" />
<link hreflang="pt-BR" rel="alternate" href="https://www.transfermarkt.com.br/slug/startseite/wettbewerb/TS1" />
<link hreflang="en-US" rel="alternate" href="https://www.transfermarkt.us/slug/startseite/wettbewerb/TS1" />
<link hreflang="en-CA" rel="alternate" href="https://www.transfermarkt.us/slug/startseite/wettbewerb/TS1" />
<link hreflang="en-IN" rel="alternate" href="https://www.transfermarkt.co.in/slug/startseite/wettbewerb/TS1" />
<link hreflang="en-ZA" rel="alternate" href="https://www.transfermarkt.co.za/slug/startseite/wettbewerb/TS1" />
<link hreflang="x-default" rel="alternate" href="https://www.transfermarkt.com/slug/startseite/wettbewerb/TS1" />
<link hreflang="en" rel="alternate" href="https://www.transfermarkt.com/slug/startseite/wettbewerb/TS1" />
<link hreflang="nl-BE" rel="alternate" href="https://www.transfermarkt.be/slug/startseite/wettbewerb/TS1" />
<link hreflang="ro" rel="alternate" href="https://www.transfermarkt.ro/slug/startseite/wettbewerb/TS1" />
<link hreflang="el-GR" rel="alternate" href="https://www.transfermarkt.gr/slug/startseite/wettbewerb/TS1" />
<link hreflang="ko-KR" rel="alternate" href="https://www.transfermarkt.co.kr/slug/startseite/wettbewerb/TS1" />
<link hreflang="es-AR" rel="alternate" href="https://www.transfermarkt.com.ar/slug/startseite/wettbewerb/TS1" />
<link hreflang="es-MX" rel="alternate" href="https://www.transfermarkt.mx/slug/startseite/wettbewerb/TS1" />
<link hreflang="es-CO" rel="alternate" href="https://www.transfermarkt.co/slug/startseite/wettbewerb/TS1" />
<link hreflang="es-PE" rel="alternate" href="https://www.transfermarkt.pe/slug/startseite/wettbewerb/TS1" />
<link hreflang="ja" rel="alternate" href="https://www.transfermarkt.jp/slug/startseite/wettbewerb/TS1" />
<link hreflang="id" rel="alternate" href="https://www.transfermarkt.co.id/slug/startseite/wettbewerb/TS1" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-main.min.css?lm=1784646862" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/main_desktop.css?lm=1784646003" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-discover.min.css?lm=1784646862" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-button-list.min.css?lm=1784646862" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-link-list.min.css?lm=1784646862" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-print.min.css?lm=1784646862" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-competition.min.css?lm=1784646862" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-statistics.min.css?lm=1784646862" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-chosen.min.css?lm=1784646862" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/main.css?lm=1784646003" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/wettbewerb.css?lm=1784646003" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-club-profile.min.css?lm=1784646862" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/spieltagsbox.css?lm=1784646003" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/livespieltag.css?lm=1784646003" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/jquery-ui-custom.css?lm=1784646003" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/jquery.bxslider.min.css?lm=1784646003" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/jquery.custom.bxslider.css?lm=1784646003" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-popularity.min.css?lm=1784646862" />
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
.fav-voting__home {
    animation-name: heim;
    animation-duration: 4s;
}
.fav-voting__visitor {
    animation-name: gast;
    animation-duration: 4s;
}
/*]]>*/
</style>
<style type="text/css">
/*<![CDATA[*/

                .ad-placement-background {
                    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxODk2IDgwNyI+CiAgPHBhdGggZD0iTTEwNTYuMyA1MzIuNGMwLTE3LjEtMTUuMy0yOS4yLTMyLTMzLjktMTEuNS0zLjItNjUuNi0xMC42LTExNi45IDAtMTQuNiAzLTYxLjUgMTkuNy02MC43IDM4LjQuNSAxMC42IDE4LjQgMTEuOSAyNS43IDExLjkgMzguNyAwIDQ5LjEtMjIuNyA4Mi42LTIyLjdzMjcuMi0xLjQgMjcuMiAxNC44LTMzLjMgMjEuNS0zNy4yIDIyYy0xNy40IDIuNC04NC42IDEyLjQtMTA4LjYgMjUuMy0zNi40IDE5LjUtNDcgNDAuNi00NyA1Mi42IDAgMzcuNyA1MC43IDQwLjYgNzEuNyA0MC42IDMxLjQgMCA0NS42LTEwLjkgNzEuNy0xMC45czMyLjYgNi41IDQyIDYuOWM3LjMuMyAxMy45LTEuNCAxOS45LTMuMyAxNy4yLTUuNSAxOC4yLTIzLjEgMjMuMy0zNC42IDExLjEtMjUuNSAyMS42LTUxLjMgMzEuMS03Ny4yIDMuNC05LjkgNy4zLTE5LjggNy4zLTI5LjlabS0xNDQuOCAxMDljLTYuNyAxLjUtOS44IDIuMS0xNy40IDIuNC04LjUuMy0yNi43LTMuNS0yNi43LTE1LjMgMC0yNC40IDYzLjUtMzMuMiA3Mi43LTMzLjIgMTEuMi0uNCAxOC4zIDIuNyAxOC4zIDkuOSAwIDIwLjgtNDQuNiAzNS43LTQ2LjkgMzYuMlpNNzkzLjkgNTA3LjVjLTQ0LjctMjcuOS0xMDcuMiA1LTEzMC41IDUtMzEuOCAwLTMwLjctMTIuOC02NC44LTE1LTY5LTQuMS05MCAxMi4yLTEwNS4yIDEyLjJzLTkuMy04LjMtMjEuNS02LjdjLTEzLjMgMi4yLTE1LjUgNS0xOS4xIDEwLTQuNSA2LjMtNTMuNSAxMzguOC01Ni41IDE0Ni4xLTExLjEgMjYuMyA1NS43IDI5LjUgNzAuOCA4LjcgMzkuNy01NC45IDMwLjktMTE0LjIgODAuOS0xMjMuOSAxMS44LTIuMyAyMi4zLTIuNiAzMC40IDkuMWwuNC44YzcuMiAxMy4zLTUuNCAzOS44LTEzLjggNjAuNS00LjEgMTAtMTYuNiA0Mi43LTE1LjUgNTQgMS45IDIxLjEgNjYuOCAxNC4xIDc1LjYtMi4xIDE5LjMtMzUuNiAyMy4xLTk2LjkgNDQuMS0xMTMuNCAyNS42LTIwIDQ5LjItNC43IDUxLjMgNC41IDQuMiAxOC4yLTEzLjUgNTIuNy0yMyA3Mi44LTEzLjQgMjguNS03LjMgNTEuMSAyNyA1MS4yIDExLjQgMCAyNy00LjQgMzMuNy0xNC4xIDUuNy04LjMgMTQuNS0zMS42IDI3LjQtNjYuNSAxNC4xLTM4LjEgMjkuMi04MCA4LjMtOTMuMVpNMTIzNSA1MTQuMmMtMS40LTExLTEyLTE1LjYtMjEuMS0xNS4yLTYuNC4yLTE4LjggNS4yLTI4LjYgNS4yLTEwLjcgMC0xNS4yLTIuMS0yOS43LTQuNy0xNy41LTMuMi0zMy4yLTIuNi00My43IDAtMTYuMiA0LTI4LjcgMjAtMzIuMSAzMi44LTUuOCAyMS0xNi42IDQyLjQtMjQuNyA2My4zLTguNyAyMi41LTIzLjcgNjIuMi0yNC40IDcwLjEtLjYgNi45IDcuMiAxNS43IDE1LjIgMTUuNyAwIDAgMzEgLjMgMzcuMS0uMiAyNS0yLjIgMzQuNi0zNi4yIDQwLjMtNTAuNiA0LjctMTEuNyA5LjUtMjQgMTQuMi0zNS42IDMuMS03LjcgNy4zLTE5LjEgMTYuMS0yNy4zIDE3LjItMTYgMzcuNi0xNiA1Ni4zLTIwLjggMTYuOS00LjQgMjYuOC0xOSAyNS4yLTMyLjZaIiBmaWxsPSIjZDdkN2Q3Ii8+CiAgPHBhdGggZD0iTTM3LjcgNDEuOXY3MjEuN2gxODA5LjhWNDEuOUgzNy43Wm0xNzg5LjEgNzAxSDU4LjNWNjIuNWgxNzY4LjV2NjgwLjRaIiBmaWxsPSIjZDdkN2Q3Ii8+CiAgPHBhdGggZD0iTTE2MzIuNCA0OTUuOGMtNy44LTMuMS0xNS4yLTYuMi0xMy42LTE0LjIgMy0xNC41IDQuMy0yNC4zLjctMzAuNC0zLjYtNi0xMi4yLTguMy0yOC45LTcuOC0yNi43LjgtMzYuMiA3LjktNDIgMTcuMS01LjkgOS4xLTguMiAyMC4zLTIwLjQgMjkuMi03LjUgNS40LTE1LjkgNy45LTIzIDExLjItNy4xIDMuMy0xNC44IDguOC0xNC44IDE2LjMuMSA4LjQgNSAxMC45IDEwLjEgMTMuOCA1IDIuOSAxMC4yIDUuMyAxMC43IDEwLjguMyAxNi42LTcuOCAzNS43LTE2IDU0LjYtOC4zIDE4LjgtMTYuNyAzNy4zLTE2LjkgNTIuOC0xLjYgMzYuOSA0Ni43IDMxLjkgNTguMSAzMiAxNi4yLS4yIDU3LjkgMi40IDU4LjYtMjkuOCAwLTktNy43LTEyLTE1LjItMTUuMi03LjUtMy4zLTE0LjgtNi44LTE0LjEtMTYuOS4zLTMuNCA1LjQtMTguNSAxMS0zMy44IDUuNi0xNS4zIDExLjctMzAuNiAxMy45LTM0LjMgNi4yLTEwLjQgMjAuOC0xNS40IDMzLjgtMjAuNCAxMy01IDI0LjQtMTAgMjQuNC0yMC40cy04LjMtMTEuMy0xNi4xLTE0LjVaTTE0MDcuOSA1MDkuNmMtMTMuOCA1LTc3LjUgNDktODguMiAzNC41LTguMy0xNC4xIDMxLjctNzguMyAyNS44LTkwLjgtNy45LTE2LjYtNDQuMi05LTUyLjUtNS0xNS4xIDcuMy0yMC4xIDI0LjgtMjUuNyAzOC44LTEwLjcgMjYuOC02NS42IDE2Ny44LTY4LjkgMTc4LjMtNS42IDE3LjkgNTQuNyAzMCA3NC44LTE2LjcgNi4zLTE0LjUgMjQuNi0zMi4zIDQwLjktMzIuMyAzMS45IDAgMjYuNyA2My43IDcwLjQgNjQuNyA0LjggMCAyMy41LjUgMzYuNy01LjcgMjMuNC0xMS4xLTI4LTc2LjUtMjgtOTYuNnM4Ni44LTU3LjEgNzkuNi02Ny43Yy05LjItMTMuNS00Ny45LTcuNy02NS0xLjVaIiBmaWxsPSIjZDdkN2Q3Ii8+CiAgPHBhdGggZD0iTTMzMC41IDQxMS43WiIgZmlsbD0iI2I0MTAxZiIvPgogIDxwYXRoIGQ9Ik0xNDI0LjQgMjUyLjZoNDAuM2M0LjIgMCAzMiAwIDMxLjMtMTYuOC0uNi0xMy41LTE4LjctMTcuNS0zMy44LTE3LjYtMTIuOS0uMi01NC4yIDYuNS01NC4yIDIzLjZzNS42IDkuOSAxNi41IDEwLjlaTTU3My40IDI4Mi44Yy05LjIgMC03Mi43IDguOC03Mi43IDMzLjJzMTguMiAxNS43IDI2LjcgMTUuM2M3LjYtLjMgMTAuNy0uOSAxNy40LTIuMyAyLjMtLjUgNDYuOS0xNS40IDQ2LjktMzYuMnMtNy4xLTEwLjMtMTguMy05LjlaIiBmaWxsPSIjZDdkN2Q3Ii8+CiAgPHBhdGggZmlsbD0iI2FmMjAwOSIgZD0iTTM0MC40IDc1NC4xeiIvPgogIDxwYXRoIGQ9Ik0zNzcuMiA3MDYuOGMtNi0yMS42LTI1LjktMzYuMS00OC4zLTM1LjItMy44LjEtNy41LjctMTEuMSAxLjctMjUuNiA3LjItNDAuNiAzMy45LTMzLjQgNTkuNSA2LjEgMjEuNiAyNS45IDM2LjEgNDguMyAzNS4yIDMuOC0uMiA3LjUtLjcgMTEuMS0xLjggMTIuNC0zLjUgMjIuNy0xMS42IDI5LTIyLjggNi4zLTExLjIgNy45LTI0LjIgNC40LTM2LjdabS0xNS40IDMwLjVjLTQuNyA4LjMtMTIuMyAxNC4zLTIxLjQgMTYuOC0yLjcuOC01LjUgMS4yLTguMiAxLjNoLTEuNGMtMTYgMC0yOS45LTEwLjUtMzQuMy0yNi0uOS0zLjItMS4zLTYuNC0xLjMtOS42IDAtMTUuNiAxMC4zLTI5LjkgMjYtMzQuMyAyLjctLjcgNS41LTEuMiA4LjItMS4zaDEuNGMxNS45IDAgMjkuOSAxMC41IDM0LjIgMjYgLjkgMy4yIDEuMyA2LjQgMS4zIDkuNiAwIDYtMS42IDEyLTQuNiAxNy40WiIgZmlsbD0iI2Q3ZDdkNyIvPgogIDxwYXRoIGZpbGw9IiNhZjIwMDkiIGQ9Ik0zMjEuMiA2ODUuNXpNMzMwLjQgMzA4LjV6TTMyMy4yIDMwOS43eiIvPgogIDxwYXRoIGQ9Ik0xODA2LjggODEuOEg3OC4zVjQwNmgxNjZjLTM3LjkgMTYuNS03OC4yIDM0LjEtOTEuOCA0MC0xNC40IDYuMS0yMi4xIDIyLjEtMTcuOSAzNy4yIDMuOCAxMy40IDE2LjEgMjIuOCAzMCAyMi44aDEuMmMyLjQgMCA0LjgtLjUgNy4yLTEuMSAxLS4zIDIuMi0uNiAzLjUtMS4xaC4zYzAtLjEgNjgtMzAuOCA2OC0zMC44bC05LjIgMjIuOEwxOTMuOSA1OThsLS4yLjVjLTIuMiA2LjItMi41IDEyLjgtLjcgMTkgMy44IDEzLjYgMTUuOCAyMi44IDI5LjkgMjIuOGgxLjJjLjcgMCAxLjUgMCAyLjEtLjJsLTM0LjQgODQuN3MtMTMuNyAyOC45IDE0LjUgNDEuMWMzMy4xIDE0LjMgNDMuNi0xOC40IDQzLjYtMTguNGw4MC44LTE5OC44IDQxLjItMTAxLjUgMTQuNCA1LjgtMTQuMiAzNC45LTEgMi43LS4yLjljLTEuMiA1LjEtMS4xIDEwLjUuMyAxNS42IDMuOCAxMy40IDE2LjEgMjIuOCAzMCAyMi44aDEuMWMyIDAgNS0uMyA4LjEtMS40IDEwLjctMy43IDE2LjMtOS4yIDIwLjYtMjAuNWwyNS4zLTYyLjJjMi4yLTUuNCA0LTExLjUgMS43LTE5LjQtMi40LTguNy03LjctMTUuMS0xNS0xOC4xbC0uNC0uMmMtLjUtLjItMS4yLS41LTItLjhsLTMuMi0xLjNoMTM2OS40VjgxLjhaTTM0Mi4zIDE4Ni45YzEwLjUtMi42IDI2LjItMy4yIDQzLjcgMCAxNC41IDIuNiAxOSA0LjcgMjkuNyA0LjcgOS44IDAgMjUuNS00LjggMzEuOS00LjkgOC42LS4xIDIxLjUgMi42IDIxLjUgMTQuM3MtMTUuMSAzMC40LTI5IDMzLjdjLTE4LjggNC42LTM5IDQuMy01Ni4xIDIwLjMtOC44IDguMi0xMyAxOS42LTE2LjEgMjcuMy0zIDcuNS02LjEgMTUuMy05LjIgMjMtNS42LTQuNC0xMi4zLTcuNS0xOS42LTguNy0uNSAwLTEuMS0uMi0xLjctLjNoLS4yYy0uNSAwLTEtLjEtMS41LS4ySDMzMGMtMi42IDAtNS4yLjQtNy43IDEtLjguMi0xLjcuNC0yLjUuNi0xLjQuNC0yLjguOS00LjEgMS40cy0yLjcgMS4xLTMuOSAxLjhjLS42LjMtMS4zLjctMS45IDEtNi44IDMuOS0xMi41IDkuNi0xNi40IDE2LjYtNC4zIDcuNi02LjIgMTYuMi01LjUgMjQuNy4yIDIuOS43IDUuOCAxLjUgOC42LjIuOC41IDEuNS43IDIuMyAwIC4yLjEuMy4yLjUuMi42LjQgMS4yLjcgMS44IDAgLjEuMS4yLjIuNGwuOSAyLjFjMS44IDMuNyA0LjEgNy4yIDYuOCAxMC4yaC0yMi43Yy04IDAtMTUuOC04LjgtMTUuMi0xNS43LjctNy45IDE1LjgtNDcuNSAyNC40LTcwLjEgOC0yMC45IDE4LjktNDIuMyAyNC43LTYzLjMgMy41LTEyLjcgMTUuOS0yOC44IDMyLjEtMzIuOFptMjAuNiAxNTIuOWMwIDEzLjctOSAyNi4zLTIyLjggMzAuMS0yLjQuNy00LjggMS03LjIgMS4xaC0xLjNjLTE0IDAtMjYuMy05LjItMzAuMS0yMi44LS44LTIuOC0xLjItNS42LTEuMi04LjQgMC0xMy43IDktMjYuMyAyMi44LTMwLjEgMi4zLS43IDQuOC0xIDcuMi0xLjFoMS4zYzE0IDAgMjYuMiA5LjMgMzAgMjIuOS44IDIuOCAxLjIgNS42IDEuMiA4LjRabS0xNzUuNCAyOWMtMTEuNC0uMS01OS43IDQuOS01OC4xLTMyIC4yLTE1LjQgOC42LTMzLjkgMTYuOS01Mi44IDguMy0xOC44IDE2LjQtMzcuOSAxNi01NC42LS41LTUuNi01LjctOC0xMC43LTEwLjgtNS0yLjktMTAtNS40LTEwLjEtMTMuOCAwLTcuNSA3LjYtMTMgMTQuNy0xNi4zIDcuMS0zLjMgMTUuNi01LjggMjMtMTEuMiAxMi4zLTguOSAxNC42LTIwLjEgMjAuNC0yOS4yIDUuOS05LjEgMTUuMy0xNi4yIDQyLjEtMTcuMSAxNi44LS41IDI1LjMgMS43IDI4LjkgNy44IDMuNiA2IDIuMyAxNS44LS43IDMwLjQtMS42IDggNS44IDExLjEgMTMuNiAxNC4yIDcuOCAzLjIgMTYuMSA2LjMgMTYuMSAxNC41cy0xMS40IDE1LjUtMjQuNCAyMC40Yy0xMyA1LTI3LjUgOS45LTMzLjggMjAuNC0yLjIgMy43LTguMyAxOS0xMy45IDM0LjMtNS42IDE1LjMtMTAuOCAzMC40LTExIDMzLjgtLjcgMTAuMSA2LjYgMTMuNiAxNC4xIDE2LjkgNy41IDMuMyAxNS4yIDYuMyAxNS4yIDE1LjItLjcgMzIuMi00Mi4zIDI5LjctNTguNiAyOS44Wm0zNiAyNTguOGgtLjhjLTguMyAwLTE1LjYtNS41LTE3LjgtMTMuNi0uNS0xLjctLjctMy4zLS43LTUgMC0yLjEuNC00LjMgMS4xLTYuM3MzNy05MC42IDM3LTkwLjZsMzQuMSAxMy45LTM2LjcgOTAuMmMtMi4yIDUuMi02LjcgOS4xLTEyLjIgMTAuNy0xLjMuNC0yLjQuNy00IC44Wm0xNC40IDExNS4zYy0yLjUgNi4xLTYuNiAxMC40LTEyLjcgMTIuMS0xLjQuNC0yLjkuNi00LjMuN2gtLjhjLTguMyAwLTE1LjEtNS40LTE3LjQtMTMuNC0uNS0xLjctLjctMy40LS43LTUuMSAwLTEuNS4yLTMgLjYtNC41cy4zLTEuMy4zLTEuM2wuNy0yIDgxLjItMTk5LjkgMzQuMSAxMy45LTgxIDE5OS41Wk00MzguNCA0MjBjMi4xLjkgMy44IDIuMyA1IDQuMSAxLjIgMS43IDIuMSAzLjcgMi42IDUuNy40IDEuMy42IDIuNi42IDMuOCAwIDIuMy0uNyA0LjYtMS44IDcuNGwtMjUuNCA2Mi40Yy0xLjQgMy44LTIuOCA2LjUtNC44IDguNi0yIDIuMS00LjYgMy40LTguMSA0LjYtMS41LjUtMyAuNy00LjQuN2gtLjhjLTguNCAwLTE1LjctNS41LTE3LjktMTMuNi0uNS0xLjYtLjctMy4zLS43LTVzLjItMi45LjUtNC4zdi0uMmwuNy0xLjggMTguOC00Ni4zLTM3LjYtMTUuMy00MS4yIDEwMS41LTc1LjctMzAuOC0xLjEtLjUgMjEuMy01Mi42LTk2LjMgNDMuNWMtLjguMy0xLjUuNS0yLjIuNy0xLjQuNC0yLjguNi00LjMuN2gtLjhjLTguMyAwLTE1LjctNS41LTE3LjktMTMuNi0uNS0xLjctLjctMy40LS43LTUgMC03LjMgNC40LTE0LjIgMTEuNC0xNy4yIDI0LjctMTAuNyAxMzUuNS01OSAxNjMuMi03MS4xIDQtMS43IDYuMi0yLjcgNi4zLTIuNyAzLjMtMS40IDYuOC0yLjEgMTAuMi0yLjJoMS4yYzQgMCA3LjIuOCAxMS42IDIuNnM4Ni4zIDM1LjEgODYuMyAzNS4xYy43LjIgMS40LjYgMi4xLjlabTE4OS41LTU4LjRjLTYgMS45LTEyLjYgMy43LTE5LjkgMy4zLTkuNS0uNC0zOS42LTYuOS00Mi02LjktMjYuMSAwLTQwLjMgMTAuOS03MS43IDEwLjlzLTcxLjctMi44LTcxLjctNDAuNiAxMC42LTMzLjEgNDctNTIuNmMyNC0xMi45IDkxLjItMjIuOSAxMDguNi0yNS4zIDMuOS0uNSAzNy4yLTMuMSAzNy4yLTIycy0yMS43LTE0LjktMjcuMi0xNC45Yy0zMy41IDAtNDMuOSAyMi44LTgyLjYgMjIuOHMtMjUuMi0xLjItMjUuNy0xMS45Yy0uOC0xOC42IDQ2LjEtMzUuMyA2MC43LTM4LjMgNTEuMy0xMC42IDEwNS41LTMuMiAxMTYuOSAwIDE2LjcgNC42IDMyIDE2LjggMzIgMzMuOXMtMy45IDIwLTcuMyAyOS45Yy05LjQgMjYtMTkuOSA1MS43LTMxIDc3LjItNS4xIDExLjUtNi4xIDI5LTIzLjMgMzQuNVptMjE2LjYgNy4xYy05LjEgMC0yOS4yIDEuNC0yOS4xLTE0LjcgMC0xMC4zIDM1LjYtODQuNSAzNS42LTEwNC40cy0xNi4yLTIyLjMtMjguMi0yMi4zYy0yOC42IDAtNTEuMSAyMC4yLTYzLjIgNTYuMS02LjcgMjAtMjMuMiA1OS43LTI4IDY2LjktMTAuNSAxNS41LTI3IDE4LjYtNDAuOCAxOC42cy0yOC42LS4yLTI4LjYtMTcuMyAyMy45LTY0LjYgMjcuMy03Mi41YzUuNy0xMy41IDE0LjMtMzcuNiAyMC4xLTUxLjYgMTMuNy0zMy40IDE4LjYtMzguMiA1Mi0zOC43IDEwLjUtLjEgMjguNSA1LjIgNDUgNC44IDIxLjQtLjUgNDYuOS05LjIgNjguNy04LjkgMTUuOC4yIDU4IC43IDU5LjggMzQuMS45IDE2LTI3LjcgNzYuMy0zNC43IDk0LjktMTguMiA0OC40LTE4LjggNTQuOS01NS45IDU0LjlabTE4Ni43LTEzMy42YzEuMSAyNS42IDEyNC41IDguMyAxMTYuMyA2MC42LTE0LjYgOTIuOC0yMjcuNiA4NS45LTIzNi43IDQyLjQtMi4xLTEwLjIgMTguMi0yNiAzNi4zLTI1LjMgMjQuNiAxIDM3LjEgMTcuNiA2My43IDE3LjZzNTEuNS0yLjQgNTMuMS0yMWMuOS0xMC43LTIwLjUtMTQuNi0zNi41LTE2LjMtMTExLjUtMTEuNC03Ny43LTYwLTcwLTY5LjkgNDUuMS01OC4yIDIwOC40LTUwIDIwOC40LTE3LjJzLTI5LjcgMjcuMS00Ni41IDIyLjNjLTI2LjctNy42LTg5LjMtMjAuNS04OC4xIDYuN1ptMjU0LjIgNWMtNi4zIDEwLjEtOS4zIDIyLjEtMTMuNCAzMi42LTguNiAyMi4xLTE4LjggNDMuMi0yNi4xIDY1LjMtOS4xIDI3LjQtMzEgMzEtNDkuNyAzMXMtMzEuNiAwLTMxLjYtMTUuOSA0MC42LTk1IDQwLjYtMTE0LjgtMjIuMy0xNy40LTIyLjMtMjguMyA4LjYtMTQuMiAxNi43LTE3LjhjOS4xLTQgMjIuOS03LjEgMzAuOS0xOC44IDI2LjktMzkuMSA1NC44LTUwLjggOTQuNC01MC44czQ0LjMgMTEuOCA0NC40IDE1LjdjLjcgMjIuOS0zMy43IDI3LjktNDYuNyAzNS44LTEuNiAxLTMuNyAzLjgtMy43IDYuMiAwIDEwLjEgMjIuOCA3LjIgMjIuOCAyMS44cy0zOC4yIDI0LjEtNDEuOSAyNS40Yy01LjIgMi0xMC43IDYuNy0xNC4zIDEyLjRabTEzMy4xIDkxLjdjMzMuMyAwIDU4LjgtMjUuOCA4My44LTI1LjhzMjguMiA0LjQgMjguMiAxNi44LTMwLjEgMjQuNy0zOC45IDI5LjNjLTE5LjMgMTAuMS04Ny44IDI1LjMtMTMzLjggMTAuNS01OS0xOS02NC4yLTU5LjctMzUuMy0xMDcuOSAzMC44LTUxLjMgOTUtNzMuMiAxNTIuOC03My4yczg2LjYgMTEgOTIuMyA1OS45YzEuOCAxNS41LTIgMjkuMi0xNi44IDM3LjYtMTkuOCAxMS4yLTExNi42IDEtMTQ1LjUgNi4xLTExLjEgMi0yNS4xIDYuOS0yNS4xIDIwLjRzMjMuOSAyNi4zIDM4LjMgMjYuM1ptMzExLjgtOTcuNmMtMTguNyA0LjgtMzkuMSA0LjgtNTYuMyAyMC44LTguOCA4LjItMTMgMTkuNi0xNi4xIDI3LjMtNC43IDExLjYtOS41IDIzLjktMTQuMiAzNS42LTUuNyAxNC40LTE1LjMgNDguNC00MC4zIDUwLjYtNiAuNS0zNy4xLjItMzcuMS4yLTggMC0xNS44LTguOC0xNS4yLTE1LjguNy03LjkgMTUuOC00Ny42IDI0LjQtNzAuMSA4LTIwLjkgMTguOS00Mi4zIDI0LjctNjMuMyAzLjUtMTIuNyAxNS45LTI4LjggMzIuMS0zMi44IDEwLjUtMi42IDI2LjItMy4yIDQzLjcgMCAxNC41IDIuNiAxOSA0LjcgMjkuNyA0LjcgOS44IDAgMjIuMi01IDI4LjYtNS4yIDkuMS0uMyAxOS43IDQuMyAyMS4xIDE1LjIgMS43IDEzLjYtOC4zIDI4LjItMjUuMiAzMi42WiIgZmlsbD0iI2Q3ZDdkNyIvPgogIDxwYXRoIGZpbGw9IiNhZjIwMDkiIGQ9Ik0yMjUuMiA3NTV6Ii8+Cjwvc3ZnPgo=);
                    background-size: 143px 61px;
                    background-repeat: no-repeat;
                    background-position: center 20px;
                }
/*]]>*/
</style>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/vendor/jquery.min.js?lm=1784646003"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/assets/b7c5571cf8957553f95f6d9069eaed67/jquery.ba-bbq.min.js?lm=1784646003"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/jquery.bxslider.js?lm=1784646003"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/ads/tisoomi.com.min.js?lm=1784666100"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/wettbewerb.js?lm=1784646003"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/jquery-ui-1.10.4.custom.min.js?lm=1784646003"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/wettbewerbGeruechte.js?lm=1784646003"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/main.js?lm=1784646003"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/chosen.ajaxaddition.jquery.js?lm=1784646003"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/functions.js?lm=1784646003"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/main_desktop.js?lm=1784646003"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/chosen.jquery.js?lm=1784646003"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/consent/bundle.js"></script>
<script type="text/javascript">
/*<![CDATA[*/
console.info("%c [TM-ADs] Initialize Ads on domain .com (wettbewerb/startseite)", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Tisoomi is active -> add Tisoomi script", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Render slot PerformPlayer (/58778164/d_content_1) for google", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Wrap ad container with Tisoomi for format PerformPlayer", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Render slot rectangle1 (/58778164/d_side_1) for google", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Wrap ad container with Tisoomi for format rectangle1", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Render slot rectangle2 (/58778164/d_side_2) for google", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Wrap ad container with Tisoomi for format rectangle2", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Render slot skyscraper (/58778164/d_right_1) for google", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Wrap ad container with Tisoomi for format skyscraper", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Render slot billboard (/58778164/d_top_1) for google", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Wrap ad container with Tisoomi for format billboard", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Render slot fullsize_contentad (/58778164/d_bottom_1) for google", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Wrap ad container with Tisoomi for format fullsize_contentad", "background: #282828; color: #bada55")
    var oddsServe = function(placement,competition,match,node) {
        if (!node){
            var s=document.readyState==='loading'?document.getElementsByTagName('script'):[];
            node=s.length?s[s.length-1].parentNode:null;
        }
        oddsServe.queue.push({contentUnitId:placement,competition:competition,match:match,node:node});
    }

    oddsServe.onInit=function(callbacks){
        if (typeof window.__tcfapi === 'function') {
            __tcfapi('addEventListener', 2, function(tcdata, success) {
                let tcf20compatibleString;
                if(success) {
                    if (tcdata.eventStatus === 'useractioncomplete') {
                        tcf20compatibleString = tcdata.tcString;
                    } else if (tcdata.eventStatus === 'tcloaded') {
                        tcf20compatibleString = tcdata.tcString;
                    }
                    callbacks.setGdprOptions({
                        gdpr:1,
                        gdpr_pd:1,
                        gdpr_consent:tcf20compatibleString,
                    });
                }
            });
        } else {
            console.warn('E2: __tcfapi not found');
        }
    };
    oddsServe.options={gdpr_wait:true};
    oddsServe.queue=[];
console.info("%c [TM-ADs] Add adslot configuration for 6 ad slots PerformPlayer | rectangle1 | rectangle2 | skyscraper | billboard | fullsize_contentad", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Adslots without configuration: content_spezial | fireplace | skyscraper-left-bound | skyscraperbtf | richmedia | 1by1px", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Register slots with JS vendor lib", "background: #282828; color: #bada55")
window.addEventListener('load', () => {
  const offset = window.matchMedia('(max-width: 768px)').matches ? 80 : 120;
  document.querySelectorAll('[data-sticky]').forEach(node => {
    const parent = node.parentElement;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        parent.style.position = 'sticky';
        parent.style.top = \`\${offset}px\`;
        parent.style.zIndex = 12000000;
        setTimeout(() => {
          parent.style.removeProperty('position');
          parent.style.removeProperty('top');
          parent.style.removeProperty('z-index');
        }, parseInt(node.dataset?.sticky) || 3000);
        observer.unobserve(parent);
      }
    }, { rootMargin: \`-\${offset}px 0px 0px 0px\`, threshold: 1 });
    observer.observe(parent);
  });
});

console.info("%c [TM-ADs] Render ad slots js for googleinhouse", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Added external ad script https://securepubads.g.doubleclick.net/tag/js/gpt.js for googleadvertising on wettbewerbe_rest", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Added external ad script https://tmsi.akamaized.net/js/ad-setup/prebid/prebid.js for googleadvertising on wettbewerbe_rest", "background: #282828; color: #bada55")
console.info("%c [TM-ADs] Added external ad script https://tmsi.akamaized.net/js/ad-setup/prebid/scripts/com.js for googleadvertising on wettbewerbe_rest", "background: #282828; color: #bada55")
/*]]>*/
</script>
<title>Chance Liga 26/27 | Transfermarkt</title>
    <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-152x152.png">

<script type="text/javascript">
   tmData = {
       loggedIn : "0",
       tmTraffic: "0",
   };
</script>
<script>
    const urlParams = new URLSearchParams(window.location.search);
    let utmVars = {
        eVar1: urlParams.get('utm_campaign'),
        eVar6: urlParams.get('utm_source'),
        eVar24: urlParams.get('utm_medium')
    };
    Object.keys(utmVars).forEach((k) => utmVars[k] == null && delete utmVars[k]);

    window.tmAnalyticsDataLayer = window.tmAnalyticsDataLayer || [];
    window.tmAnalytics = {
        dimensions: {
            eVar11: 'Chance Liga (TS1)',
			eVar12: 'Czech Republic',
			eVar10: 'https://www.transfermarkt.com/fortuna-liga/startseite/wettbewerb/TS1',
			...utmVars,
            evar19: window.location.href,
            eVar35 : '',
			eVar37 : '',
    },
    properties: {
        prop2: 'statistik',
		prop3: 'wettbewerb',
		prop4: 'startseite',
		prop5: 'TS1',
		prop14: 'statistik_wettbewerb_startseite_TS1',
		prop9: window.location.hostname,
        prop10: window.location.href,
        prop1 : 'false',
    },
    pageDetails: {
        pageViews: {
            value: 1
        },
        isErrorPage: 'false',
            isHomepage: 'false',
            name: 'Chance Liga 26/27 | Transfermarkt',
            URL: window.location.href,
            server: 'prod-tm-web-server-12101'
    },
    };

function tmEventForLink(category, aTag, label) {
    const url = new URL(aTag.href);
    const link = url.pathname + url.search;
    tmEvent(category, link, label);
}

function tmEvent(category, action, label, detail = '') {
    if (typeof gtag === 'function') {
        gtag('event',
            action,
            {
                'event_category': category,
                'event_label': label
            }
        );
    }

    const ev = {
        event: 'tmEvent',
        tmEvent: {
            customDimensions: {
                eVars: {
                    ...tmAnalytics.dimensions
                },
                props: {
                    prop6: category,
                    prop7: action,
                    prop8: label,
                    prop17: detail,
                    ...tmAnalytics.properties
                }
            },
            event1to100: {
                event7: {
                    value: 1
                },
                event8: null,
            },
            session: {
                web: {
                    webInteraction: {
                        linkClicks: {
                            value: 1
                        }
                    },
                    webPageDetails: {
                        ...tmAnalytics.pageDetails,
                        ...{
                            pageViews: {
                                value: null
                            }
                        }
                    }
                }
            }
        }
    };

     if (!window._satellite) {
        once = false;
        window._satellite = { _monitors: [{
            ruleTriggered: (e) => {
                if (once) {
                    return;
                }
                once = true;
                setTimeout(() => {
                    tmAnalyticsDataLayer.push(ev);
                    tmAnalyticsDataLayer.push(function (dl) {
                        const state = dl.getState();
                    });
                }, 1);
            }
        }] };
    } else {
        tmAnalyticsDataLayer.push(ev);
        tmAnalyticsDataLayer.push(function (dl) {
            const state = dl.getState();
        });
    }
}
function tmTrackingAndAds() {
    if (typeof gtag === 'function') {
        gtag("event", "page_view", {
            page_path: "/jsContent" + window.location.pathname
        });
    }

    tmAnalyticsDataLayer.push({
        event: 'tmTrackingAndAds',
        tmTrackingAndAds: {
            customDimensions: {
                eVars: tmAnalytics.dimensions,
                props: tmAnalytics.properties
            },
            event1to100: {
                event7: null,
                event8: {
                    value: 1
                }
            },
            session: {
                web: {
                    webInteraction: {
                        linkClicks: {
                            value: null
                        }
                    },
                    webPageDetails: {
                        ...tmAnalytics.pageDetails,
                        ...{
                            pageViews: {
                                value: 1
                            }
                        }
                    }
                }
            }
        }
    });
    tmAnalyticsDataLayer.push(function (dl) {
        const state = dl.getState();
    });
}
function tmTiming(value, name, event_category, event_label) {
    console.log('tmTiming', value, name, event_category, event_label);
}

        !function(e,a,n,t){var i=e.head;if(i){
            if (a) return;
            var o=e.createElement("style");
            o.id="alloy-prehiding",o.innerText=n,i.appendChild(o),setTimeout(function(){o.parentNode&&o.parentNode.removeChild(o)},t)}}
        (document, document.location.href.indexOf("adobe_authoring_enabled") !== -1, ".personalization-container { opacity: 0 !important }", 3000);

            !function(n,o){o.forEach(function(o){n[o]||((n.__alloyNS=n.__alloyNS||
                []).push(o),n[o]=function(){var u=arguments;return new Promise(
                function(i,l){n[o].q.push([i,l,u])})},n[o].q=[])})}
            (window,["alloy"]);
</script>
<tm-consent
    type="adobe"
    no-checkbox
    embed="PHNjcmlwdCBhc3luYyBzcmM9Imh0dHBzOi8vYXNzZXRzLmFkb2JlZHRtLmNvbS83Y2FkY2E5NWRkOWEvY2Q0YWI4ODRkMjMxL2xhdW5jaC0wMTI3MmI0MDBjNjUubWluLmpzIj48L3NjcmlwdD4=">
</tm-consent>

    <script type="text/javascript" src="https://tmssl.akamaized.net//ads/ads.js"></script>
    <script type="text/javascript">
        window.tmGaId = "UA-3816204-13";

        function sendIvwData() {}
    </script>
            <link rel="canonical" href="https://www.transfermarkt.com/fortuna-liga/startseite/wettbewerb/TS1">
    </head>

<body class="desktop " itemscope itemtype="http://schema.org/WebPage" data-tm-tld="com" data-cmp-layer-id="910164" data-db-name="com-der-zauberzwerg" >

                <tm-domain-note></tm-domain-note>
        <div id="main">
                    <button id="back-to-top" title="Nach oben">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.795" height="10.009" viewBox="0 0 17.795 10.009">
                    <path id="angle-up" d="M20.683,17.01a1.112,1.112,0,0,1-.786-.326l-7-7-7,7a1.112,1.112,0,1,1-1.573-1.573l7.785-7.785a1.112,1.112,0,0,1,1.573,0l7.785,7.785a1.112,1.112,0,0,1-.786,1.9Z" transform="translate(-4 -7)" fill="#fff"/>
                </svg>
            </button>
            <div class="werbung-skyscraper-left-bound-container">
                            </div>
            <div class="werbung-skyscraper-container">
                <script type="text/javascript">//RWGzztV("skyscraper")</script>
<div class="ad-placement-note werbung werbung-skyscraper"  data-ad-placement-note="Advertisement">
  <div id="d_right_1" style="min-height: 600px;">
  </div>
</div>

<span class="RWGzztV_end"></span>
            </div>

            <div class="werbung-skyscraperbtf-container">
                            </div>

        <div id="tm-overlay"></div>

                    <div class="tm-header__box">
                <!-- logo  -->
                <a href="/" class="tm-header__logo" onclick="tmEvent('hauptnavi', '/', 'TM-Logo');">
                    <img src="https://tmsi.akamaized.net/head/tm_logo_rebrush.svg"
                         height="62"
                         width="156"
                         title="Transfermarkt"
                         alt="Transfermarkt"
                    >
                </a>

                <!-- domainswitcher  -->
                <div class="domin-swicher">
                    <tm-domain-switcher
                        tld="com"
                        translations='{&quot;chooseYourDomain&quot;:&quot;Choose your domain&quot;}'></tm-domain-switcher>
                </div>

                <!-- live -->
                <tm-live-match-count
                    class="tm-header__live"
                    auto-request                    content='{&quot;liveMatches&quot;:&quot;Live matches&quot;,&quot;liveMatch&quot;:&quot;Live maches&quot;,&quot;live&quot;:&quot;Live&quot;}'></tm-live-match-count>

                <!-- Search -->
                                    <div class="tm-header__search " id="schnellsuche-platz">
                        <form name="schnellsuche" id="schnellsuche" class="tm-header__form" action="/schnellsuche/ergebnis/schnellsuche">
                            <input type="text" name="query" class="tm-header__input--search-field" onClick="" placeholder="Enter your search term" autocorrect="off" spellcheck="false" value="" />
                            <button type="submit" value="" class="tm-header__input--search-send" alt="Search">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18">
                                    <path d="M17.825,16.847 L14.28,13.303 C17.072,9.987 16.756,5.061 13.563,2.13 C10.37,-0.8 5.435,-0.695 2.37,2.37 C-0.695,5.435 -0.8,10.37 2.13,13.563 C5.061,16.756 9.987,17.072 13.303,14.28 L16.847,17.825 C17.121,18.069 17.538,18.057 17.797,17.797 C18.057,17.538 18.069,17.121 17.825,16.847 z M1.418,8.108 C1.417,4.413 4.412,1.417 8.107,1.416 C11.802,1.415 14.798,4.411 14.799,8.106 C14.799,11.801 11.804,14.797 8.108,14.797 C4.414,14.797 1.419,11.803 1.418,8.108 z" fill="#000" />
                                </svg>
                            </button>
                        </form>
                        <a href="/detailsuche/spielerdetail/suche" title="to detailed player search" id="detailsuche-head" class="tm-header__search-detail">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0, 0, 18, 18">
                                <path d="M3.138,3.558 C3.137,1.593 4.727,0 6.69,0 C8.652,-0 10.243,1.592 10.243,3.556 C10.243,5.521 8.653,7.113 6.69,7.113 C4.729,7.113 3.138,5.522 3.138,3.558 z M8.233,13.187 C8.261,11.778 8.861,10.442 9.893,9.486 C9.967,9.418 9.997,9.315 9.971,9.219 C9.946,9.119 9.863,9.044 9.76,9.03 C9.331,8.938 8.893,8.893 8.454,8.895 L4.906,8.895 C3.583,8.808 2.286,9.298 1.35,10.239 C0.414,11.179 -0.07,12.479 0.021,13.804 C-0.085,14.656 0.209,15.509 0.817,16.114 C1.425,16.72 2.279,17.009 3.13,16.897 L9.266,16.897 C9.372,16.895 9.467,16.831 9.508,16.732 C9.549,16.634 9.527,16.521 9.453,16.444 C8.665,15.544 8.232,14.387 8.236,13.191 z M17.805,17.804 C17.68,17.93 17.511,18 17.334,18 C17.158,18 16.989,17.93 16.864,17.804 L15.237,16.177 C13.686,17.242 11.58,16.949 10.378,15.501 C9.176,14.052 9.274,11.926 10.604,10.594 C11.934,9.263 14.058,9.165 15.505,10.368 C16.952,11.571 17.244,13.68 16.181,15.233 L17.805,16.866 C18.065,17.126 18.065,17.548 17.805,17.808 z M15.484,13.182 C15.484,11.911 14.455,10.881 13.186,10.881 C11.917,10.881 10.888,11.911 10.888,13.182 C10.888,14.452 11.917,15.482 13.186,15.482 C14.455,15.482 15.484,14.452 15.484,13.182 z" fill="#000" />
                            </svg>
                        </a>
                                            </div>

                <!-- login button -->
                <div class="tm-header__login">
                    <tm-userbox translations='{&quot;addFavorite&quot;:&quot;Add favourite&quot;,&quot;adminArea&quot;:&quot;Admin area&quot;,&quot;adminTools&quot;:&quot;Admin tools&quot;,&quot;allFavoriteLinkText&quot;:&quot;Go to all my favourite links&quot;,&quot;applyAsModOrDatascout&quot;:&quot;Apply as a moderator or datascout&quot;,&quot;checkAllNews&quot;:&quot;Check all news&quot;,&quot;checkAllRumours&quot;:&quot;Check all rumours&quot;,&quot;chooseYourDomain&quot;:&quot;Choose your domain&quot;,&quot;clickAgain&quot;:&quot;Click again to copy shortlink to your clipboard&quot;,&quot;clubBoard&quot;:&quot;Club forum&quot;,&quot;confirm&quot;:&quot;Alright&quot;,&quot;copied&quot;:&quot;Copied to your clipboard&quot;,&quot;copyLink&quot;:&quot;copy link&quot;,&quot;createAccount&quot;:&quot;Create your account&quot;,&quot;createNewMessage&quot;:&quot;Create a new message&quot;,&quot;createShortlink&quot;:&quot;create a shortlink&quot;,&quot;createShortNews&quot;:&quot;Create memo&quot;,&quot;dashboard&quot;:&quot;Overview&quot;,&quot;dataAdministration&quot;:&quot;Data administration&quot;,&quot;debug&quot;:&quot;Debug&quot;,&quot;deleteAll&quot;:&quot;Delete all&quot;,&quot;deleteConfirm&quot;:&quot;Yes, delete all&quot;,&quot;editText&quot;:&quot;Edit&quot;,&quot;forgotPassword&quot;:&quot;Forgot password?&quot;,&quot;forgotUsername&quot;:&quot;Forgot username?&quot;,&quot;forgotLoginDetails&quot;:&quot;Forgot your login details?&quot;,&quot;forum&quot;:&quot;forum&quot;,&quot;groundhoppingTool&quot;:&quot;Groundhopping Tool&quot;,&quot;lastMatch&quot;:&quot;last match&quot;,&quot;signin&quot;:&quot;Log in&quot;,&quot;login&quot;:&quot;Login&quot;,&quot;logOut&quot;:&quot;Log out&quot;,&quot;manageFavorites&quot;:&quot;Manage favourites&quot;,&quot;marketValue&quot;:&quot;market value&quot;,&quot;matchplan&quot;:&quot;Schedule&quot;,&quot;messages&quot;:&quot;Private messages&quot;,&quot;myClub&quot;:&quot;My club&quot;,&quot;myClubText&quot;:&quot;With a Transfermarkt account you can register your favourite club and find all important information about your club (matches, news, quick links). &quot;,&quot;myDreamTeam&quot;:&quot;My dream team&quot;,&quot;myFavorites&quot;:&quot;My favourites&quot;,&quot;myFavoritesText&quot;:&quot;With a Transfermarkt account, you can save any page as a favourite and then access it with one click.&quot;,&quot;myProfile&quot;:&quot;My profile&quot;,&quot;news&quot;:&quot;News&quot;,&quot;newsAdministration&quot;:&quot;News administration&quot;,&quot;nextMatch&quot;:&quot;next match&quot;,&quot;noNewNotifications&quot;:&quot;No new notifications&quot;,&quot;notifications&quot;:&quot;Notifications&quot;,&quot;notificationsDeletedAutomatically&quot;:&quot;Note: Notifications are automatically deleted after 30 days.&quot;,&quot;notifyDeleteMessage&quot;:&quot;Private messages older than 45 days will be deleted from time to time (except for data scouts and moderators)&quot;,&quot;or&quot;:&quot;or&quot;,&quot;other&quot;:&quot;Miscellaneous&quot;,&quot;overview&quot;:&quot;overview&quot;,&quot;password&quot;:&quot;Password&quot;,&quot;playerRatings&quot;:&quot;Player ratings&quot;,&quot;playerWatchlist&quot;:&quot;Players Watchlist&quot;,&quot;postponed&quot;:&quot;postponed&quot;,&quot;profile&quot;:&quot;Profile&quot;,&quot;progDebug&quot;:&quot;Prog. depanare&quot;,&quot;progProfile&quot;:&quot;Prog. profile&quot;,&quot;registerNow&quot;:&quot;Sign up now&quot;,&quot;rememberMe&quot;:&quot;Remember me&quot;,&quot;removeFavorite&quot;:&quot;Delete favourite&quot;,&quot;rumors&quot;:&quot;Rumours&quot;,&quot;schedule&quot;:&quot;Schedule&quot;,&quot;sessionExpired&quot;:&quot;Your session on Transfermarkt has expired. Please log in again.&quot;,&quot;sessionExpiredTitle&quot;:&quot;Session Expired&quot;,&quot;setting&quot;:&quot;Settings&quot;,&quot;shortlink&quot;:&quot;Shortlink&quot;,&quot;shortLinkCreationError&quot;:&quot;An Error occured creating the shortlink.&quot;,&quot;shortLinkHasBeenCreated&quot;:&quot;Shortlink has been created an was copied to your clipboard&quot;,&quot;shortLinkIsBeingCreated&quot;:&quot;Creating shortlink ...&quot;,&quot;showAllMessages&quot;:&quot;Show all messages&quot;,&quot;totalMarketValue&quot;:&quot;Total market value&quot;,&quot;translation&quot;:&quot;Translation&quot;,&quot;username&quot;:&quot;Username&quot;,&quot;whyRegister&quot;:&quot;Why register?&quot;,&quot;Bitte korrigieren Sie die markierten Felder&quot;:&quot;Please correct the highlighted fields&quot;,&quot;mindestensDreiZeichen&quot;:&quot;At least three characters&quot;,&quot;mindestensAchtZeichen&quot;:&quot;At least eight characters&quot;,&quot;pleaseCorrectFields&quot;:&quot;profil&quot;,&quot;minThreeCharacters&quot;:&quot;At least three characters&quot;,&quot;minEightCharacters&quot;:&quot;At least eight characters&quot;,&quot;noAtCharacter&quot;:&quot;The @ character is not allowed in the username&quot;,&quot;agentProfile&quot;:&quot;My Agency Profile&quot;}' page-title="Chance Liga 26/27 | Transfermarkt" tld="com" agent-profile=""  />
                </div>
            </div>


                        <!-- mobile end -->
            <nav class="main-navbar">
                                    <a href="/" class="main-navbar__lp-link " onclick="tmEvent('hauptnavi', '/', 'DISCOVER')">
                        DISCOVER                    </a>
                                    <a href="/weltmeisterschaft/startseite/pokalwettbewerb/FIWC" class="main-navbar__lp-link " onclick="tmEvent('hauptnavi', '/weltmeisterschaft/startseite/pokalwettbewerb/FIWC', 'World Cup 2026')">
                        World Cup 2026                    </a>
                                    <a href="/navigation/transfersundgeruechte" class="main-navbar__lp-link " onclick="tmEvent('hauptnavi', '/navigation/transfersundgeruechte', 'TRANSFERS & RUMOURS')">
                        TRANSFERS & RUMOURS                    </a>
                                    <a href="/navigation/marktwerte" class="main-navbar__lp-link " onclick="tmEvent('hauptnavi', '/navigation/marktwerte', 'MARKET VALUES')">
                        MARKET VALUES                    </a>
                                    <a href="/navigation/wettbewerbe" class="main-navbar__lp-link " onclick="tmEvent('hauptnavi', '/navigation/wettbewerbe', 'COMPETITIONS')">
                        COMPETITIONS                    </a>
                                    <a href="/navigation/statistiken" class="main-navbar__lp-link " onclick="tmEvent('hauptnavi', '/navigation/statistiken', 'STATISTICS')">
                        STATISTICS                    </a>
                                    <a href="/navigation/community" class="main-navbar__lp-link " onclick="tmEvent('hauptnavi', '/navigation/community', 'FORUM')">
                        FORUM                    </a>
                                    <a href="/navigation/gaming" class="main-navbar__lp-link " onclick="tmEvent('hauptnavi', '/navigation/gaming', 'GAMING')">
                        GAMING                    </a>
                                <div class="main-navbar__details">
                    <div class="hamburger">
                        <em></em>
                    </div>
                    <div class="dropdown-layer"></div>
                    <div class="main-navbar__dropdown">
                                                            <div class="recommendation">


                            <div class="tm-discover__hero-container tm-discover__hero-container-grid tm-discover-container-grid">

                                    <section class="tm-button-list__wrapper tm-button-list__wrapper--two-thirds  "><span class="tm-discover__h2">Recommendations</span><ul class="tm-button-list"><li><a
                        href="/world-cup/startseite/wettbewerb/FIWC"
                        title="World Cup"
                        target=""
                        class="tm-button-list__list-item tm-button-list__list-item--big "
                        onclick="tmEvent('recommendations_recommendation', '/world-cup/startseite/wettbewerb/FIWC' , '1_1', 'buttonList');"
                    ><img
                            src="https://tmssl.akamaized.net//images/logo/homepageWappen150x150/fiwc.png?lm=1747989919"
                            alt="World Cup"
                            class="tm-button-list__image tm-button-list__image--big 1"
                            width="54"
                            height="36"
                        ></a></li><li><a
                        href="/uefa-champions-league/startseite/wettbewerb/CL"
                        title="UEFA Champions League"
                        target=""
                        class="tm-button-list__list-item tm-button-list__list-item--big "
                        onclick="tmEvent('recommendations_recommendation', '/uefa-champions-league/startseite/wettbewerb/CL' , '1_2', 'buttonList');"
                    ><img
                            src="https://tmssl.akamaized.net//images/logo/homepageWappen150x150/cl.png?lm=1626810555"
                            alt="UEFA Champions League"
                            class="tm-button-list__image tm-button-list__image--big 1"
                            width="54"
                            height="36"
                        ></a></li><li><a
                        href="/laliga/startseite/wettbewerb/ES1"
                        title="LaLiga"
                        target=""
                        class="tm-button-list__list-item tm-button-list__list-item--big "
                        onclick="tmEvent('recommendations_recommendation', '/laliga/startseite/wettbewerb/ES1' , '1_3', 'buttonList');"
                    ><img
                            src="https://tmssl.akamaized.net//images/logo/homepageWappen150x150/es1.png?lm=1725974302"
                            alt="LaLiga"
                            class="tm-button-list__image tm-button-list__image--big 1"
                            width="54"
                            height="36"
                        ></a></li><li><a
                        href="/premier-league/startseite/wettbewerb/GB1"
                        title="Premier League"
                        target=""
                        class="tm-button-list__list-item tm-button-list__list-item--big "
                        onclick="tmEvent('recommendations_recommendation', '/premier-league/startseite/wettbewerb/GB1' , '1_4', 'buttonList');"
                    ><img
                            src="https://tmssl.akamaized.net//images/logo/homepageWappen150x150/gb1.png?lm=1521104656"
                            alt="Premier League"
                            class="tm-button-list__image tm-button-list__image--big 1"
                            width="54"
                            height="36"
                        ></a></li><li><a
                        href="/bundesliga/startseite/wettbewerb/L1"
                        title="Bundesliga"
                        target=""
                        class="tm-button-list__list-item tm-button-list__list-item--big "
                        onclick="tmEvent('recommendations_recommendation', '/bundesliga/startseite/wettbewerb/L1' , '1_5', 'buttonList');"
                    ><img
                            src="https://tmssl.akamaized.net//images/logo/homepageWappen150x150/l1.png?lm=1525905518"
                            alt="Bundesliga"
                            class="tm-button-list__image tm-button-list__image--big 1"
                            width="54"
                            height="36"
                        ></a></li><li><a
                        href="/serie-a/startseite/wettbewerb/IT1"
                        title="Serie A"
                        target=""
                        class="tm-button-list__list-item tm-button-list__list-item--big "
                        onclick="tmEvent('recommendations_recommendation', '/serie-a/startseite/wettbewerb/IT1' , '1_6', 'buttonList');"
                    ><img
                            src="https://tmssl.akamaized.net//images/logo/homepageWappen150x150/it1.png?lm=1656073460"
                            alt="Serie A"
                            class="tm-button-list__image tm-button-list__image--big 1"
                            width="54"
                            height="36"
                        ></a></li></ul></section>




                                    <section class="tm-button-list__wrapper tm-button-list__wrapper--one-third  tm-button-list__desktop"><span class="tm-discover__h2">Player agents</span><ul class="tm-button-list"><li><a
                        href="/agent-support/beraterIndex/berater"
                        title="Agent support"
                        target="_self"
                        class="tm-button-list__list-item tm-button-list__list-item--big tm-button-list__agent"
                        onclick="tmEvent('recommendations_recommendation', '/agent-support/beraterIndex/berater' , '2_1', 'buttonList');"
                    ><img
                            src="https://tmsi.akamaized.net/rebrush/navigation/agent-support.webp"
                            alt=""
                            class="tm-button-list__image tm-button-list__image--big tm-button-list__image--country tm-button-list__image--border"
                            width="54"
                            height="36"
                        >Agent<br>support</a></li><li><a
                        href="/berater/beraterfirmenuebersicht/berater"
                        title="Agent statistics"
                        target="_self"
                        class="tm-button-list__list-item tm-button-list__list-item--big tm-button-list__agent"
                        onclick="tmEvent('recommendations_recommendation', '/berater/beraterfirmenuebersicht/berater' , '2_2', 'buttonList');"
                    ><img
                            src="https://tmsi.akamaized.net/rebrush/navigation/agent-statistic.webp"
                            alt=""
                            class="tm-button-list__image tm-button-list__image--big tm-button-list__image--country tm-button-list__image--border"
                            width="54"
                            height="36"
                        >Agent<br>statistics</a></li><li><a
                        href="/premium-service/berater"
                        title="Premium service"
                        target="_self"
                        class="tm-button-list__list-item tm-button-list__list-item--big tm-button-list__agent"
                        onclick="tmEvent('recommendations_recommendation', '/premium-service/berater' , '2_3', 'buttonList');"
                    ><img
                            src="https://tmsi.akamaized.net/rebrush/navigation/premium-service.webp"
                            alt=""
                            class="tm-button-list__image tm-button-list__image--big tm-button-list__image--country tm-button-list__image--border"
                            width="54"
                            height="36"
                        >Premium<br>service</a></li></ul></section>





<section class="tm-link-list-container tm-link-list--full ">
        <div
        class="tm-link-list-element"
        role="navigation"
        aria-label=""
    >


                                            <ul
    class="tm-link-list-unordered   recommendation__links"
>
            <li
            class="tm-link-list-item"
        >
                            <a
                    class="tm-link__arrow  "
                    href="/statistik/neuestetransfers"
                    title="Latest transfers"
                    target="_self"
                    onclick="tmEvent('recommendations_recommendation', '/statistik/neuestetransfers' , '3_1','linkList');"
                >
                    Latest transfers
                </a>
                    </li>
            <li
            class="tm-link-list-item"
        >
                            <a
                    class="tm-link__arrow  "
                    href="/rumour-mill/detail/forum/154"
                    title="Rumour Mill"
                    target="_self"
                    onclick="tmEvent('recommendations_recommendation', '/rumour-mill/detail/forum/154' , '3_2','linkList');"
                >
                    Rumour Mill
                </a>
                    </li>
            <li
            class="tm-link-list-item"
        >
                            <a
                    class="tm-link__arrow  "
                    href="/aktuell/newsarchiv"
                    title="All news"
                    target="_self"
                    onclick="tmEvent('recommendations_recommendation', '/aktuell/newsarchiv' , '3_3','linkList');"
                >
                    All news
                </a>
                    </li>
            <li
            class="tm-link-list-item"
        >
                            <a
                    class="tm-link__arrow  "
                    href="/whatsMyValue"
                    title="What's my value?"
                    target="_self"
                    onclick="tmEvent('recommendations_recommendation', '/whatsMyValue' , '3_4','linkList');"
                >
                    What's my value?
                </a>
                    </li>
            <li
            class="tm-link-list-item"
        >
                            <a
                    class="tm-link__arrow  "
                    href="/spieler-statistik/wertvollstespieler/marktwertetop"
                    title="Most valuable players in the world"
                    target="_self"
                    onclick="tmEvent('recommendations_recommendation', '/spieler-statistik/wertvollstespieler/marktwertetop' , '3_5','linkList');"
                >
                    Most valuable players in the world
                </a>
                    </li>
    </ul>
                                            <ul
    class="tm-link-list-unordered   recommendation__links"
>
            <li
            class="tm-link-list-item"
        >
                            <a
                    class="tm-link__arrow  "
                    href="/spieler-statistik/wertvollstemannschaften/marktwertetop"
                    title="Most valuable clubs in the world"
                    target="_self"
                    onclick="tmEvent('recommendations_recommendation', '/spieler-statistik/wertvollstemannschaften/marktwertetop' , '3_6','linkList');"
                >
                    Most valuable clubs in the world
                </a>
                    </li>
            <li
            class="tm-link-list-item"
        >
                            <a
                    class="tm-link__arrow  "
                    href="/marktwertanalyse/detail/forum/357"
                    title="Market value analysis"
                    target="_self"
                    onclick="tmEvent('recommendations_recommendation', '/marktwertanalyse/detail/forum/357' , '3_7','linkList');"
                >
                    Market value analysis
                </a>
                    </li>
            <li
            class="tm-link-list-item"
        >
                            <a
                    class="tm-link__arrow  "
                    href="/statistik/vertragslosespieler"
                    title="Free agents"
                    target="_self"
                    onclick="tmEvent('recommendations_recommendation', '/statistik/vertragslosespieler' , '3_8','linkList');"
                >
                    Free agents
                </a>
                    </li>
            <li
            class="tm-link-list-item"
        >
                            <a
                    class="tm-link__arrow  "
                    href="/statistik/endendevertraege"
                    title="Contracts ending"
                    target="_self"
                    onclick="tmEvent('recommendations_recommendation', '/statistik/endendevertraege' , '3_9','linkList');"
                >
                    Contracts ending
                </a>
                    </li>
            <li
            class="tm-link-list-item"
        >
                            <a
                    class="tm-link__arrow  "
                    href="/betting/"
                    title="Betting"
                    target="_self"
                    onclick="tmEvent('recommendations_recommendation', '/betting/' , '3_10','linkList');"
                >
                    Betting
                </a>
                    </li>
    </ul>
                        </div>

    </section>




                                    <section class="tm-button-list__wrapper tm-button-list__wrapper--full  tm-button-list__mobile"><span class="tm-discover__h2">Player agents</span><ul class="tm-button-list"><li><a
                        href="/agent-support/beraterIndex/berater"
                        title="Agent support"
                        target="_self"
                        class="tm-button-list__list-item tm-button-list__list-item--big tm-button-list__agent"
                        onclick="tmEvent('recommendations_recommendation', '/agent-support/beraterIndex/berater' , '4_1', 'buttonList');"
                    ><img
                            src="https://tmsi.akamaized.net/rebrush/navigation/agent-support.webp"
                            alt=""
                            class="tm-button-list__image tm-button-list__image--big tm-button-list__image--country tm-button-list__image--border"
                            width="54"
                            height="36"
                        >Agent<br>support</a></li><li><a
                        href="/berater/beraterfirmenuebersicht/berater"
                        title="Agent statistics"
                        target="_self"
                        class="tm-button-list__list-item tm-button-list__list-item--big tm-button-list__agent"
                        onclick="tmEvent('recommendations_recommendation', '/berater/beraterfirmenuebersicht/berater' , '4_2', 'buttonList');"
                    ><img
                            src="https://tmsi.akamaized.net/rebrush/navigation/agent-statistic.webp"
                            alt=""
                            class="tm-button-list__image tm-button-list__image--big tm-button-list__image--country tm-button-list__image--border"
                            width="54"
                            height="36"
                        >Agent<br>statistics</a></li><li><a
                        href="/premium-service/berater"
                        title="Premium service"
                        target="_self"
                        class="tm-button-list__list-item tm-button-list__list-item--big tm-button-list__agent"
                        onclick="tmEvent('recommendations_recommendation', '/premium-service/berater' , '4_3', 'buttonList');"
                    ><img
                            src="https://tmsi.akamaized.net/rebrush/navigation/premium-service.webp"
                            alt=""
                            class="tm-button-list__image tm-button-list__image--big tm-button-list__image--country tm-button-list__image--border"
                            width="54"
                            height="36"
                        >Premium<br>service</a></li></ul></section>

                    </div>

    </div>
                                                </div>
                </div>
            </nav>

            <div class="quick-select-wrapper">

    <tm-quick-select defaultCountry="172" defaultCompetition="TS1" defaultClub="" defaultPlayer="" dropdown-visible="" translations='{"home":"Home","country":"Country","competition":"Competition","club":"Club","player":"Player","attack":"Striker","midfield":"Midfielder","defense":"Defender","goalkeeper":"Goalkeeper"}'>
    </tm-quick-select>
</div>



        <script type="text/javascript">//RWGzztV("billboard")</script>
<div class="ad-placement-note ad-placement-background werbung werbung-billboard"  data-ad-placement-note="Advertisement">
  <div id="d_top_1" style="min-width: 1024px; min-height: 250px;">
  </div>
</div>

<span class="RWGzztV_end"></span>



        <main id="tm-main">

<header class="data-header">
    <div class="data-header__headline-container">
                    <h1 class="data-header__headline-wrapper data-header__headline-wrapper--oswald">
                Chance Liga            </h1>
                </div>
    <div class="data-header__box--big">
                    <a class="data-header__box__club-link" href="/wettbewerbe/national/wettbewerbe/172">
                                    <img src="https://tmssl.akamaized.net//images/flagge/begegnungslider/172.png?lm=1520611569" alt="
                    Czech Republic" width="80" class="data-header__box__flag">
                                </a>
                    <div class="data-header__club-info">
            <span class="data-header__club" itemprop="affiliation">
                <a href="/wettbewerbe/national/wettbewerbe/172">
                    Czech Republic                </a>
            </span>
            <span class="data-header__label">
                League level:                <span itemprop="dataItem" class="data-header__content">
                    First Tier                </span>
            </span>
                            <span class="data-header__label">
                    Reigning champion:
                    <span itemprop="dataItem" class="data-header__content">
                        <a title="SK Slavia Prague" href="/sk-slavia-prague/startseite/verein/62">SK Slavia Prague</a>                    </span>
                </span>
                                    <span class="data-header__label">
                        Record-holding champions:
                        <span itemprop="dataItem" class="data-header__content">
                            <a title="AC Sparta Prague" href="/ac-sparta-prague/startseite/verein/197">AC Sparta Prague</a>&nbsp;&nbsp;<span class="data-header__content">38&nbsp;</span><span class="data-header__content">time(s)</span>                        </span>
                    </span>
                                                        <span class="data-header__label">
                        UEFA coefficient:
                        <span itemprop="dataItem" class="data-header__content">
                            <a href="/uefa/5jahreswertung/statistik">10. Pos.</a>&nbsp;&nbsp;<span class="data-header__content">43.025 </span><span class="data-header__content">Points</span>                        </span>
                    </span>
                                            </div>
    </div>
    <div class="data-header__profile-container">
        <img src="https://tmssl.akamaized.net//images/logo/header/ts1.png?lm=1719989400" title="Chance Liga" alt="Chance Liga" class="" />    </div>
            <div class="data-header__box--small">
            <a href="" class="data-header__market-value-wrapper">
                <span class="waehrung">€</span>429.69<span class="waehrung">m</span>                <p class="data-header__last-update">
                    Total Market Value                </p>
            </a>
        </div>
            <div class="data-header__info-box">
        <div class="data-header__details">
            <ul class="data-header__items">
                <li class="data-header__label">
                    Number of teams:
                    <span itemprop="dataItem" class="data-header__content">
                        16 teams                    </span>
                </li>
                <li class="data-header__label">
                    Players:
                    <span itemprop="dataItem" class="data-header__content">
                        498                    </span>
                </li>
                <li class="data-header__label">
                    Foreigners:
                    <span itemprop="dataItem" class="data-header__content">
                        <a href="/chance-liga/gastarbeiter/wettbewerb/TS1">197&nbsp;Players</a>&nbsp;&nbsp;<span class="tabellenplatz">39.6%</span>                    </span>
                </li>
            </ul>
            <ul class="data-header__items">
                <li class="data-header__label">
                    &oslash;-Market value:                    <span itemprop="dataItem" class="data-header__content">
                        €863k                    </span>
                </li>
                <li class="data-header__label">
                                            &oslash;-Age:
                                            <span itemprop="dataItem" class="data-header__content">
                        25.8                    </span>
                </li>
                                <li class="data-header__label">
                    Most valuable player:
                    <span itemprop="dataItem" class="data-header__content">
                        <a title="Stepan Chaloupek" href="/stepan-chaloupek/profil/spieler/944827">Stepan Chaloupek</a>&nbsp;&nbsp;<span class="tabellenplatz">€10.00m</span>                    </span>
                </li>
                            </ul>
        </div>

    </div>
</header>
<a href="https://www.transfermarkt.com/barcelona-4th-arsenal-14th-which-clubs-have-had-most-world-cup-winners-in-history-/view/news/483215"
        target="1"
    class="db mt10"
        onclick="tmEvent('banner', 'https://www.transfermarkt.com/barcelona-4th-arsenal-14th-which-clubs-have-had-most-world-cup-winners-in-history-/view/news/483215', 'd-day-banner');"
>
    <img
        loading="lazy"
        src="https://dzjovqk3zamsg.cloudfront.net/wc-winners-desktop-banner.jpg"
        width="1034"
        height="99"
        alt="deadline-day banner"
    >
</a>

<script type="text/javascript">
    (() => {
        const cookies = document.cookie
            .split(';')
            .map(c => c.trim().split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
        const isContentPassUser = cookies?._cpauthhint !== undefined;
        if (isContentPassUser) {
            const adNodes = document.querySelectorAll('.ad-placement-note');
            adNodes.forEach(node => node.remove());
        }
    })();
</script><tm-subnavigation
    controller="wettbewerb"
    id="TS1"
    season="2026"
    section="wettbewerb"
    style="display: block; margin: 0 5px;">
</tm-subnavigation>
<div id="wettbewerbsstartseite" class="row wettbewerbsstartseite">
    <div class="large-8 columns">
        <div class="box">
    <h2 class="content-box-headline">Info</h2>
    <p class="info-content">
        On the competition startpage, the participating teams of one season (selectable in the drop-down menu) are to begin with listed based on the total market value. In addition to news, a matchday overview and the list of goalscorers, the table offers further information.    </p>
    <div class="content">
        <form action="/chance-liga/startseite/wettbewerb/TS1/plus/" method="get">        <div class="row">
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
                                             selected="selected"value="2026">26/27</option>
                                                                                <option
                                            value="2025">25/26</option>
                                                                                <option
                                            value="2024">24/25</option>
                                                                                <option
                                            value="2023">23/24</option>
                                                                                <option
                                            value="2022">22/23</option>
                                                                                <option
                                            value="2021">21/22</option>
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
        Clubs - Chance Liga 26/27    </h2>


    <div class="show-for-small show-for-pad">
<div class="tm-tabs">
    <a class="tm-tab tm-tab__active--parent" href="/chance-liga/startseite/wettbewerb/TS1/saison_id/2026"><div class=" tm-tab__active"><span>Compact</span></div></a><a class="tm-tab" href="/chance-liga/startseite/wettbewerb/TS1/saison_id/2026/plus/1"><div class=""><span>Detailed</span></div></a></div>
</div>
    <div class="responsive-table">
        <div id="yw1" class="grid-view">
<div class="summary"></div>
<table class="items">
<thead>
<tr>
<th colspan="2" id="yw1_c0">Club</th><th class="hide" id="yw1_c1"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/name">name</a></th><th class="zentriert" id="yw1_c2"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/anzahl_spieler_hidden.desc">Squad</a></th><th class="zentriert" id="yw1_c3"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/alter_durchschnitt.desc">&oslash; age</a></th><th class="zentriert" id="yw1_c4"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/legionaere.desc">Foreigners</a></th><th class="rechts" id="yw1_c5"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/marktwert_schnitt_anzeige.desc">&oslash; market value</a></th><th class="rechts" id="yw1_c6"><a class="sort-link" href="/slug/startseite/wettbewerb/TS1/sort/marktwert_gesamt_anzeige.desc">Total market value</a></th></tr>
</thead>
<tfoot>
<tr>
<td colspan="2">&nbsp;</td><td class="hide">&nbsp;</td><td class="zentriert">498</td><td class="zentriert">25.8 Years</td><td class="zentriert">197</td><td class="rechts">€863k</td><td class="rechts">€429.69m</td></tr>
</tfoot>
<tbody>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="SK Slavia Prague" href="/sk-slavia-prag/startseite/verein/62/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/62.png?lm=1659955223" title="SK Slavia Prague" alt="SK Slavia Prague" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="SK Slavia Prague" href="/sk-slavia-prag/startseite/verein/62/saison_id/2026">SK Slavia Prague</a> <a href="#"><img src="https://tmssl.akamaized.net//images/erfolge/mini/21.png?lm=1461847499" title="Czech Champion 25/26" alt="Czech Champion 25/26" class="tabelle-erfolg" /></a></td><td class="zentriert"><a title="SK Slavia Prague" href="/sk-slavia-prague/kader/verein/62/saison_id/2026">41</a></td><td class="zentriert">24.4</td><td class="zentriert">23</td><td class="rechts">€3.05m</td><td class="rechts"><a title="SK Slavia Prague" href="/sk-slavia-prague/kader/verein/62/saison_id/2026">€125.15m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="AC Sparta Prague" href="/ac-sparta-prag/startseite/verein/197/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/197.png?lm=1705397331" title="AC Sparta Prague" alt="AC Sparta Prague" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="AC Sparta Prague" href="/ac-sparta-prag/startseite/verein/197/saison_id/2026">AC Sparta Prague</a> </td><td class="zentriert"><a title="AC Sparta Prague" href="/ac-sparta-prague/kader/verein/197/saison_id/2026">33</a></td><td class="zentriert">25.2</td><td class="zentriert">20</td><td class="rechts">€2.42m</td><td class="rechts"><a title="AC Sparta Prague" href="/ac-sparta-prague/kader/verein/197/saison_id/2026">€79.90m</a></td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/startseite/verein/941/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/941.png?lm=1703858693" title="FC Viktoria Plzen" alt="FC Viktoria Plzen" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/startseite/verein/941/saison_id/2026">FC Viktoria Plzen</a> </td><td class="zentriert"><a title="FC Viktoria Plzen" href="/fc-viktoria-plzen/kader/verein/941/saison_id/2026">30</a></td><td class="zentriert">25.1</td><td class="zentriert">14</td><td class="rechts">€1.98m</td><td class="rechts"><a title="FC Viktoria Plzen" href="/fc-viktoria-plzen/kader/verein/941/saison_id/2026">€59.50m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/startseite/verein/2311/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/2311.png?lm=1419785397" title="SK Sigma Olomouc" alt="SK Sigma Olomouc" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/startseite/verein/2311/saison_id/2026">SK Sigma Olomouc</a> </td><td class="zentriert"><a title="SK Sigma Olomouc" href="/sk-sigma-olomouc/kader/verein/2311/saison_id/2026">36</a></td><td class="zentriert">24.7</td><td class="zentriert">18</td><td class="rechts">€846k</td><td class="rechts"><a title="SK Sigma Olomouc" href="/sk-sigma-olomouc/kader/verein/2311/saison_id/2026">€30.45m</a></td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/697.png?lm=1717277296" title="FC Slovan Liberec" alt="FC Slovan Liberec" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2026">FC Slovan Liberec</a> </td><td class="zentriert"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/kader/verein/697/saison_id/2026">32</a></td><td class="zentriert">24.9</td><td class="zentriert">13</td><td class="rechts">€791k</td><td class="rechts"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/kader/verein/697/saison_id/2026">€25.30m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="FC Banik Ostrava" href="/fc-banik-ostrau/startseite/verein/377/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/377.png?lm=1419584907" title="FC Banik Ostrava" alt="FC Banik Ostrava" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FC Banik Ostrava" href="/fc-banik-ostrau/startseite/verein/377/saison_id/2026">FC Banik Ostrava</a> </td><td class="zentriert"><a title="FC Banik Ostrava" href="/fc-banik-ostrava/kader/verein/377/saison_id/2026">31</a></td><td class="zentriert">25.2</td><td class="zentriert">12</td><td class="rechts">€594k</td><td class="rechts"><a title="FC Banik Ostrava" href="/fc-banik-ostrava/kader/verein/377/saison_id/2026">€18.43m</a></td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="FK Jablonec" href="/fk-jablonec/startseite/verein/1322/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/1322.png?lm=1781115661" title="FK Jablonec" alt="FK Jablonec" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FK Jablonec" href="/fk-jablonec/startseite/verein/1322/saison_id/2026">FK Jablonec</a> </td><td class="zentriert"><a title="FK Jablonec" href="/fk-jablonec/kader/verein/1322/saison_id/2026">31</a></td><td class="zentriert">26.9</td><td class="zentriert">16</td><td class="rechts">€465k</td><td class="rechts"><a title="FK Jablonec" href="/fk-jablonec/kader/verein/1322/saison_id/2026">€14.43m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="FK Pardubice" href="/fk-pardubice/startseite/verein/1496/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/1496.png?lm=1784379942" title="FK Pardubice" alt="FK Pardubice" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FK Pardubice" href="/fk-pardubice/startseite/verein/1496/saison_id/2026">FK Pardubice</a> </td><td class="zentriert"><a title="FK Pardubice" href="/fk-pardubice/kader/verein/1496/saison_id/2026">31</a></td><td class="zentriert">24.5</td><td class="zentriert">14</td><td class="rechts">€431k</td><td class="rechts"><a title="FK Pardubice" href="/fk-pardubice/kader/verein/1496/saison_id/2026">€13.36m</a></td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="FC Hradec Kralove" href="/fc-hradec-kralove/startseite/verein/1897/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/1897.png?lm=1783290132" title="FC Hradec Kralove" alt="FC Hradec Kralove" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FC Hradec Kralove" href="/fc-hradec-kralove/startseite/verein/1897/saison_id/2026">FC Hradec Kralove</a> </td><td class="zentriert"><a title="FC Hradec Kralove" href="/fc-hradec-kralove/kader/verein/1897/saison_id/2026">28</a></td><td class="zentriert">26.9</td><td class="zentriert">7</td><td class="rechts">€411k</td><td class="rechts"><a title="FC Hradec Kralove" href="/fc-hradec-kralove/kader/verein/1897/saison_id/2026">€11.50m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="FC Zbrojovka Brno" href="/fc-zbrojovka-brunn/startseite/verein/5225/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/5225.png?lm=1781723374" title="FC Zbrojovka Brno" alt="FC Zbrojovka Brno" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FC Zbrojovka Brno" href="/fc-zbrojovka-brunn/startseite/verein/5225/saison_id/2026">FC Zbrojovka Brno</a> <a href="#"><img src="https://tmssl.akamaized.net//images/erfolge/mini/1003.png?lm=1693206052" title="Czech 2nd Division Champion 25/26" alt="Czech 2nd Division Champion 25/26" class="tabelle-erfolg" /></a><span title="Promoted to 1st league 25/26" class="icons_sprite icon-aufsteiger">&nbsp;</span></td><td class="zentriert"><a title="FC Zbrojovka Brno" href="/fc-zbrojovka-brno/kader/verein/5225/saison_id/2026">33</a></td><td class="zentriert">26.8</td><td class="zentriert">9</td><td class="rechts">€282k</td><td class="rechts"><a title="FC Zbrojovka Brno" href="/fc-zbrojovka-brno/kader/verein/5225/saison_id/2026">€9.30m</a></td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/5546.png?lm=1419784887" title="FK Mlada Boleslav" alt="FK Mlada Boleslav" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2026">FK Mlada Boleslav</a> </td><td class="zentriert"><a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/kader/verein/5546/saison_id/2026">27</a></td><td class="zentriert">24.9</td><td class="zentriert">4</td><td class="rechts">€327k</td><td class="rechts"><a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/kader/verein/5546/saison_id/2026">€8.83m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="FK Teplice" href="/fk-teplice/startseite/verein/814/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/814.png?lm=1692778662" title="FK Teplice" alt="FK Teplice" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FK Teplice" href="/fk-teplice/startseite/verein/814/saison_id/2026">FK Teplice</a> </td><td class="zentriert"><a title="FK Teplice" href="/fk-teplice/kader/verein/814/saison_id/2026">32</a></td><td class="zentriert">25.5</td><td class="zentriert">9</td><td class="rechts">€266k</td><td class="rechts"><a title="FK Teplice" href="/fk-teplice/kader/verein/814/saison_id/2026">€8.53m</a></td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="1.FC Slovacko" href="/1-fc-slovacko/startseite/verein/5544/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/5544.png?lm=1419785239" title="1.FC Slovacko" alt="1.FC Slovacko" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="1.FC Slovacko" href="/1-fc-slovacko/startseite/verein/5544/saison_id/2026">1.FC Slovacko</a> </td><td class="zentriert"><a title="1.FC Slovacko" href="/1-fc-slovacko/kader/verein/5544/saison_id/2026">28</a></td><td class="zentriert">26.9</td><td class="zentriert">13</td><td class="rechts">€258k</td><td class="rechts"><a title="1.FC Slovacko" href="/1-fc-slovacko/kader/verein/5544/saison_id/2026">€7.23m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="FC Zlin" href="/fc-fastav-zlin/startseite/verein/5545/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/5545.png?lm=1732137350" title="FC Zlin" alt="FC Zlin" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="FC Zlin" href="/fc-fastav-zlin/startseite/verein/5545/saison_id/2026">FC Zlin</a> </td><td class="zentriert"><a title="FC Zlin" href="/fc-zlin/kader/verein/5545/saison_id/2026">28</a></td><td class="zentriert">27.1</td><td class="zentriert">10</td><td class="rechts">€238k</td><td class="rechts"><a title="FC Zlin" href="/fc-zlin/kader/verein/5545/saison_id/2026">€6.68m</a></td></tr>
<tr class="odd">
<td class="zentriert no-border-rechts"><a title="SK Artis Brno" href="/sk-lisen/startseite/verein/24325/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/24325.png?lm=1749064964" title="SK Artis Brno" alt="SK Artis Brno" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="SK Artis Brno" href="/sk-lisen/startseite/verein/24325/saison_id/2026">SK Artis Brno</a> <span title="Promoted to 1st league 25/26" class="icons_sprite icon-aufsteiger">&nbsp;</span></td><td class="zentriert"><a title="SK Artis Brno" href="/sk-artis-brno/kader/verein/24325/saison_id/2026">32</a></td><td class="zentriert">27.2</td><td class="zentriert">10</td><td class="rechts">€189k</td><td class="rechts"><a title="SK Artis Brno" href="/sk-artis-brno/kader/verein/24325/saison_id/2026">€6.05m</a></td></tr>
<tr class="even">
<td class="zentriert no-border-rechts"><a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/startseite/verein/715/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/715.png?lm=1646734219" title="Bohemians Prague 1905" alt="Bohemians Prague 1905" class="tiny_wappen" /></a></td><td class="hauptlink no-border-links"><a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/startseite/verein/715/saison_id/2026">Bohemians Prague 1905</a> </td><td class="zentriert"><a title="Bohemians Prague 1905" href="/bohemians-prague-1905/kader/verein/715/saison_id/2026">25</a></td><td class="zentriert">27.5</td><td class="zentriert">5</td><td class="rechts">€203k</td><td class="rechts"><a title="Bohemians Prague 1905" href="/bohemians-prague-1905/kader/verein/715/saison_id/2026">€5.08m</a></td></tr>
</tbody>
</table>
<div class="keys" style="display:none" title="/slug/startseite/wettbewerb/TS1"><span>&lt;a title=&quot;SK Slavia Prague&quot; href=&quot;/sk-slavia-prag/startseite/verein/62/saison_id/2026&quot;&gt;SK Slavia Prague&lt;/a&gt;</span><span>&lt;a title=&quot;AC Sparta Prague&quot; href=&quot;/ac-sparta-prag/startseite/verein/197/saison_id/2026&quot;&gt;AC Sparta Prague&lt;/a&gt;</span><span>&lt;a title=&quot;FC Viktoria Plzen&quot; href=&quot;/fc-viktoria-pilsen/startseite/verein/941/saison_id/2026&quot;&gt;FC Viktoria Plzen&lt;/a&gt;</span><span>&lt;a title=&quot;SK Sigma Olomouc&quot; href=&quot;/sk-sigma-olmutz/startseite/verein/2311/saison_id/2026&quot;&gt;SK Sigma Olomouc&lt;/a&gt;</span><span>&lt;a title=&quot;FC Slovan Liberec&quot; href=&quot;/fc-slovan-liberec/startseite/verein/697/saison_id/2026&quot;&gt;FC Slovan Liberec&lt;/a&gt;</span><span>&lt;a title=&quot;FC Banik Ostrava&quot; href=&quot;/fc-banik-ostrau/startseite/verein/377/saison_id/2026&quot;&gt;FC Banik Ostrava&lt;/a&gt;</span><span>&lt;a title=&quot;FK Jablonec&quot; href=&quot;/fk-jablonec/startseite/verein/1322/saison_id/2026&quot;&gt;FK Jablonec&lt;/a&gt;</span><span>&lt;a title=&quot;FK Pardubice&quot; href=&quot;/fk-pardubice/startseite/verein/1496/saison_id/2026&quot;&gt;FK Pardubice&lt;/a&gt;</span><span>&lt;a title=&quot;FC Hradec Kralove&quot; href=&quot;/fc-hradec-kralove/startseite/verein/1897/saison_id/2026&quot;&gt;FC Hradec Kralove&lt;/a&gt;</span><span>&lt;a title=&quot;FC Zbrojovka Brno&quot; href=&quot;/fc-zbrojovka-brunn/startseite/verein/5225/saison_id/2026&quot;&gt;FC Zbrojovka Brno&lt;/a&gt;</span><span>&lt;a title=&quot;FK Mlada Boleslav&quot; href=&quot;/fk-mlada-boleslav/startseite/verein/5546/saison_id/2026&quot;&gt;FK Mlada Boleslav&lt;/a&gt;</span><span>&lt;a title=&quot;FK Teplice&quot; href=&quot;/fk-teplice/startseite/verein/814/saison_id/2026&quot;&gt;FK Teplice&lt;/a&gt;</span><span>&lt;a title=&quot;1.FC Slovacko&quot; href=&quot;/1-fc-slovacko/startseite/verein/5544/saison_id/2026&quot;&gt;1.FC Slovacko&lt;/a&gt;</span><span>&lt;a title=&quot;FC Zlin&quot; href=&quot;/fc-fastav-zlin/startseite/verein/5545/saison_id/2026&quot;&gt;FC Zlin&lt;/a&gt;</span><span>&lt;a title=&quot;SK Artis Brno&quot; href=&quot;/sk-lisen/startseite/verein/24325/saison_id/2026&quot;&gt;SK Artis Brno&lt;/a&gt;</span><span>&lt;a title=&quot;Bohemians Prague 1905&quot; href=&quot;/fc-bohemians-prag-1905/startseite/verein/715/saison_id/2026&quot;&gt;Bohemians Prague 1905&lt;/a&gt;</span></div>
</div>    </div>
    <div class="table-footer">
        <a title="To table of market values" href="/fortuna-liga/marktwerteverein/wettbewerb/TS1">To table of market values</a>    </div>
</div>

<script async src="/js/custom/tm-track-links.min.js" type="module"></script>

<div id="wettbewerbSpieltagsbox"
     class="box sptg-print swiper-container">
    <div class="swiper-wrapper" id="spieltagstabs">
<ul>
<li class="two-tabs "><a href="#spieltagtabs-1">Current matchday</a></li>
<li class="two-tabs "><a href="#spieltagtabs-2">Next matchday</a></li>
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
                        <tr class="begegnungZeile" id="4901913" data-id="4901913">
                <td class="hide-for-small zeit al">
            Sat                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2026-07-25">25/07/2026</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2026">Viktoria Plzeň</a>                            </span>
                            <span class="vereinswappen">
                              <a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/941.png?lm=1703858693" title="FC Viktoria Plzen" alt="FC Viktoria Plzen" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901913"><span class="matchresult">5:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/697.png?lm=1717277296" title="FC Slovan Liberec" alt="FC Slovan Liberec" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2026">Slovan Liberec</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901913' data-gameday='1' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="4901918" data-id="4901918">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Zlin" href="/fc-fastav-zlin/spielplan/verein/5545/saison_id/2026">Zlin</a>                            </span>
                            <span class="vereinswappen">
                              <a title="FC Zlin" href="/fc-fastav-zlin/spielplan/verein/5545/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/5545.png?lm=1732137350" title="FC Zlin" alt="FC Zlin" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901918"><span class="matchresult">5:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="FC Banik Ostrava" href="/fc-banik-ostrau/spielplan/verein/377/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/377.png?lm=1419584907" title="FC Banik Ostrava" alt="FC Banik Ostrava" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="FC Banik Ostrava" href="/fc-banik-ostrau/spielplan/verein/377/saison_id/2026">Banik Ostrava</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901918' data-gameday='1' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="4901919" data-id="4901919">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FK Teplice" href="/fk-teplice/spielplan/verein/814/saison_id/2026">Teplice</a>                            </span>
                            <span class="vereinswappen">
                              <a title="FK Teplice" href="/fk-teplice/spielplan/verein/814/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/814.png?lm=1692778662" title="FK Teplice" alt="FK Teplice" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901919"><span class="matchresult">5:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/715.png?lm=1646734219" title="Bohemians Prague 1905" alt="Bohemians Prague 1905" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2026">Bohemians 1905</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901919' data-gameday='1' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="4901920" data-id="4901920">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Zbrojovka Brno" href="/fc-zbrojovka-brunn/spielplan/verein/5225/saison_id/2026">Zbrojovka Brno</a>                            </span>
                            <span class="vereinswappen">
                              <a title="FC Zbrojovka Brno" href="/fc-zbrojovka-brunn/spielplan/verein/5225/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/5225.png?lm=1781723374" title="FC Zbrojovka Brno" alt="FC Zbrojovka Brno" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901920"><span class="matchresult">8:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="AC Sparta Prague" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/197.png?lm=1705397331" title="AC Sparta Prague" alt="AC Sparta Prague" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="AC Sparta Prague" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2026">Sparta Prague</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901920' data-gameday='1' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="4901916" data-id="4901916">
                <td class="hide-for-small zeit al">
            Sun                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2026-07-26">26/07/2026</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="SK Slavia Prague" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2026">Slavia Praha</a>                            </span>
                            <span class="vereinswappen">
                              <a title="SK Slavia Prague" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/62.png?lm=1659955223" title="SK Slavia Prague" alt="SK Slavia Prague" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901916"><span class="matchresult">3:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/5544.png?lm=1419785239" title="1.FC Slovacko" alt="1.FC Slovacko" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2026">Slovacko</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901916' data-gameday='1' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="4901915" data-id="4901915">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FK Jablonec" href="/fk-jablonec/spielplan/verein/1322/saison_id/2026">Jablonec</a>                            </span>
                            <span class="vereinswappen">
                              <a title="FK Jablonec" href="/fk-jablonec/spielplan/verein/1322/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/1322.png?lm=1781115661" title="FK Jablonec" alt="FK Jablonec" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901915"><span class="matchresult">5:30 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/2311.png?lm=1419785397" title="SK Sigma Olomouc" alt="SK Sigma Olomouc" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2026">Sigma Olomouc</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901915' data-gameday='1' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="4901917" data-id="4901917">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Hradec Kralove" href="/fc-hradec-kralove/spielplan/verein/1897/saison_id/2026">Hradec Kralove</a>                            </span>
                            <span class="vereinswappen">
                              <a title="FC Hradec Kralove" href="/fc-hradec-kralove/spielplan/verein/1897/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/1897.png?lm=1783290132" title="FC Hradec Kralove" alt="FC Hradec Kralove" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901917"><span class="matchresult">8:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/1496.png?lm=1784379942" title="FK Pardubice" alt="FK Pardubice" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496/saison_id/2026">Pardubice</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901917' data-gameday='1' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="4901914" data-id="4901914">
                <td class="hide-for-small zeit al">
            Mon                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2026-07-27">27/07/2026</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="SK Artis Brno" href="/sk-lisen/spielplan/verein/24325/saison_id/2026">Artis Brno</a>                            </span>
                            <span class="vereinswappen">
                              <a title="SK Artis Brno" href="/sk-lisen/spielplan/verein/24325/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/24325.png?lm=1749064964" title="SK Artis Brno" alt="SK Artis Brno" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901914"><span class="matchresult">6:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/5546.png?lm=1419784887" title="FK Mlada Boleslav" alt="FK Mlada Boleslav" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2026">Mlada Boleslav</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901914' data-gameday='1' data-competition='TS1'></span>                </td>
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

        <a title="Chance Liga" href="/chance-liga/spieltag/wettbewerb/TS1/spieltag/1/saison_id/2026">All games from matchday 1</a>    </div>
    <div class="footer-links">
    <a title="Chance Liga" href="/chance-liga/gesamtspielplan/wettbewerb/TS1/saison_id/2026">All fixtures & results</a></div>
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
                        <tr class="begegnungZeile" id="4901963" data-id="4901963">
                <td class="hide-for-small zeit al">
            Fri                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2026-07-31">31/07/2026</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="AC Sparta Prague" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2026">Sparta Prague</a>                            </span>
                            <span class="vereinswappen">
                              <a title="AC Sparta Prague" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/197.png?lm=1705397331" title="AC Sparta Prague" alt="AC Sparta Prague" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901963"><span class="matchresult">7:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="FC Zlin" href="/fc-fastav-zlin/spielplan/verein/5545/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/5545.png?lm=1732137350" title="FC Zlin" alt="FC Zlin" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="FC Zlin" href="/fc-fastav-zlin/spielplan/verein/5545/saison_id/2026">Zlin</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901963' data-gameday='2' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="4901962" data-id="4901962">
                <td class="hide-for-small zeit al">
            Sat                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2026-08-01">01/08/2026</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2026">Slovan Liberec</a>                            </span>
                            <span class="vereinswappen">
                              <a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/697.png?lm=1717277296" title="FC Slovan Liberec" alt="FC Slovan Liberec" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901962"><span class="matchresult">5:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="FK Teplice" href="/fk-teplice/spielplan/verein/814/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/814.png?lm=1692778662" title="FK Teplice" alt="FK Teplice" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="FK Teplice" href="/fk-teplice/spielplan/verein/814/saison_id/2026">Teplice</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901962' data-gameday='2' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="4901965" data-id="4901965">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Banik Ostrava" href="/fc-banik-ostrau/spielplan/verein/377/saison_id/2026">Banik Ostrava</a>                            </span>
                            <span class="vereinswappen">
                              <a title="FC Banik Ostrava" href="/fc-banik-ostrau/spielplan/verein/377/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/377.png?lm=1419584907" title="FC Banik Ostrava" alt="FC Banik Ostrava" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901965"><span class="matchresult">5:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="SK Slavia Prague" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/62.png?lm=1659955223" title="SK Slavia Prague" alt="SK Slavia Prague" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="SK Slavia Prague" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2026">Slavia Praha</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901965' data-gameday='2' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="4901967" data-id="4901967">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2026">Slovacko</a>                            </span>
                            <span class="vereinswappen">
                              <a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/5544.png?lm=1419785239" title="1.FC Slovacko" alt="1.FC Slovacko" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901967"><span class="matchresult">5:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="SK Artis Brno" href="/sk-lisen/spielplan/verein/24325/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/24325.png?lm=1749064964" title="SK Artis Brno" alt="SK Artis Brno" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="SK Artis Brno" href="/sk-lisen/spielplan/verein/24325/saison_id/2026">Artis Brno</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901967' data-gameday='2' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="4901961" data-id="4901961">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2026">Viktoria Plzeň</a>                            </span>
                            <span class="vereinswappen">
                              <a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/941.png?lm=1703858693" title="FC Viktoria Plzen" alt="FC Viktoria Plzen" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901961"><span class="matchresult">8:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="FC Zbrojovka Brno" href="/fc-zbrojovka-brunn/spielplan/verein/5225/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/5225.png?lm=1781723374" title="FC Zbrojovka Brno" alt="FC Zbrojovka Brno" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="FC Zbrojovka Brno" href="/fc-zbrojovka-brunn/spielplan/verein/5225/saison_id/2026">Zbrojovka Brno</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901961' data-gameday='2' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="4901968" data-id="4901968">
                <td class="hide-for-small zeit al">
            Sun                    <span class="spielzeitpunkt">
                    <a href="/aktuell/waspassiertheute/aktuell/new/datum/2026-08-02">02/08/2026</a>
                    </span>                </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2026">Sigma Olomouc</a>                            </span>
                            <span class="vereinswappen">
                              <a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/2311.png?lm=1419785397" title="SK Sigma Olomouc" alt="SK Sigma Olomouc" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901968"><span class="matchresult">3:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/5546.png?lm=1419784887" title="FK Mlada Boleslav" alt="FK Mlada Boleslav" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2026">Mlada Boleslav</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901968' data-gameday='2' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="4901964" data-id="4901964">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2026">Bohemians 1905</a>                            </span>
                            <span class="vereinswappen">
                              <a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/715.png?lm=1646734219" title="Bohemians Prague 1905" alt="Bohemians Prague 1905" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901964"><span class="matchresult">5:30 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="FC Hradec Kralove" href="/fc-hradec-kralove/spielplan/verein/1897/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/1897.png?lm=1783290132" title="FC Hradec Kralove" alt="FC Hradec Kralove" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="FC Hradec Kralove" href="/fc-hradec-kralove/spielplan/verein/1897/saison_id/2026">Hradec Kralove</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901964' data-gameday='2' data-competition='TS1'></span>                </td>
            </tr>

                        <tr class="begegnungZeile" id="4901966" data-id="4901966">
                <td class="hide-for-small zeit al">
                            </td>
                <td class="spieltagsthread home-sst hide-for-small">
                                    </td>
                <td class="verein-heim">
                            <span class="vereinsname">
                                <a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496/saison_id/2026">Pardubice</a>                            </span>
                            <span class="vereinswappen">
                              <a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/1496.png?lm=1784379942" title="FK Pardubice" alt="FK Pardubice" class="" /></a>                            </span>
                </td>
                <td class="ergebnis">
                            <span class="ergebnis">
                                <a title="To the preview" href="/spielbericht/index/spielbericht/4901966"><span class="matchresult">8:00 PM</span></a>                            </span>
                </td>
                <td class="verein-gast">
                            <span class="vereinswappen">
                                <a title="FK Jablonec" href="/fk-jablonec/spielplan/verein/1322/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/homepage/1322.png?lm=1781115661" title="FK Jablonec" alt="FK Jablonec" class="" /></a>                            </span>
                            <span class="vereinsname">
                                <a title="FK Jablonec" href="/fk-jablonec/spielplan/verein/1322/saison_id/2026">Jablonec</a>                            </span>
                </td>
                <td class="spieltagsthread hide-for-small">
                                    </td>
                <td class="zentriert quotenzelle hide-for-small" onclick="tmEvent('werbung','click','wettbewerbsset');">
                    <span class='oddsServe' data-match='4901966' data-gameday='2' data-competition='TS1'></span>                </td>
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

        <a title="Chance Liga" href="/chance-liga/spieltag/wettbewerb/TS1/spieltag/2/saison_id/2026">All games from matchday 2</a>    </div>
    <div class="footer-links">
    <a title="Chance Liga" href="/chance-liga/gesamtspielplan/wettbewerb/TS1/saison_id/2026">All fixtures & results</a></div>
</table>
</div>
</div>
</div>
    </div>

<div class="ad-placement-note ad-placement-background werbung werbung-PerformPlayer"  data-ad-placement-note="Advertisement">
  <div id="d_content_1" style="min-width: 679px; min-height: 382px;">
  </div>
</div>


<div class="box tab-print">
    <div class="content-box-headline ">
Table Chance Liga</div>
<div id="yw2" class="grid-view">
<div class="summary"></div>
<table class="items">
<thead>
<tr>
<th class="rechts" id="yw2_c0">#</th><th colspan="2" id="yw2_c1">Club</th><th class="zentriert" id="yw2_c2"><span class="icons_sprite icon-einsaetze-table-header" title="Matches">&nbsp;</span></th><th class="zentriert" id="yw2_c3">+/-</th><th class="zentriert" id="yw2_c4">Pts</th></tr>
</thead>
<tbody>
<tr>
<td class="rechts hauptlink" style='background-color: #c3dc9a'>1 </td><td class="zentriert no-border-rechts"><a title="SK Slavia Prague" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/62.png?lm=1659955223" title="SK Slavia Prague" alt="SK Slavia Prague" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="SK Slavia Prague" href="/sk-slavia-prag/spielplan/verein/62/saison_id/2026">Slavia Praha</a><a href="#"><img src="https://tmssl.akamaized.net//images/erfolge/mini/21.png?lm=1461847499" title="Czech Champion 2026" alt="Czech Champion 2026" class="tabelle-erfolg" /></a>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
<tr>
<td class="rechts hauptlink" style='background-color: #c3dc9a'>1 </td><td class="zentriert no-border-rechts"><a title="AC Sparta Prague" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/197.png?lm=1705397331" title="AC Sparta Prague" alt="AC Sparta Prague" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="AC Sparta Prague" href="/ac-sparta-prag/spielplan/verein/197/saison_id/2026">Sparta Prague</a>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
<tr>
<td class="rechts hauptlink" style='background-color: #c3dc9a'>1 </td><td class="zentriert no-border-rechts"><a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/941.png?lm=1703858693" title="FC Viktoria Plzen" alt="FC Viktoria Plzen" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="FC Viktoria Plzen" href="/fc-viktoria-pilsen/spielplan/verein/941/saison_id/2026">Viktoria Plzeň</a>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
<tr>
<td class="rechts hauptlink" style='background-color: #c3dc9a'>1 </td><td class="zentriert no-border-rechts"><a title="FC Hradec Kralove" href="/fc-hradec-kralove/spielplan/verein/1897/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/1897.png?lm=1783290132" title="FC Hradec Kralove" alt="FC Hradec Kralove" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="FC Hradec Kralove" href="/fc-hradec-kralove/spielplan/verein/1897/saison_id/2026">Hradec Kralove</a>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
<tr>
<td class="rechts hauptlink" style='background-color: #c3dc9a'>1 </td><td class="zentriert no-border-rechts"><a title="FK Jablonec" href="/fk-jablonec/spielplan/verein/1322/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/1322.png?lm=1781115661" title="FK Jablonec" alt="FK Jablonec" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="FK Jablonec" href="/fk-jablonec/spielplan/verein/1322/saison_id/2026">Jablonec</a>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
<tr>
<td class="rechts hauptlink" style='background-color: #c3dc9a'>1 </td><td class="zentriert no-border-rechts"><a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/697.png?lm=1717277296" title="FC Slovan Liberec" alt="FC Slovan Liberec" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="FC Slovan Liberec" href="/fc-slovan-liberec/spielplan/verein/697/saison_id/2026">Slovan Liberec</a>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
<tr>
<td class="rechts hauptlink" style='background-color: #bdd9ef'>1 </td><td class="zentriert no-border-rechts"><a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/2311.png?lm=1419785397" title="SK Sigma Olomouc" alt="SK Sigma Olomouc" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="SK Sigma Olomouc" href="/sk-sigma-olmutz/spielplan/verein/2311/saison_id/2026">Sigma Olomouc</a>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
<tr>
<td class="rechts hauptlink" style='background-color: #bdd9ef'>1 </td><td class="zentriert no-border-rechts"><a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/1496.png?lm=1784379942" title="FK Pardubice" alt="FK Pardubice" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="FK Pardubice" href="/fk-pardubice/spielplan/verein/1496/saison_id/2026">Pardubice</a>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
<tr>
<td class="rechts hauptlink" style='background-color: #bdd9ef'>1 </td><td class="zentriert no-border-rechts"><a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/715.png?lm=1646734219" title="Bohemians Prague 1905" alt="Bohemians Prague 1905" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="Bohemians Prague 1905" href="/fc-bohemians-prag-1905/spielplan/verein/715/saison_id/2026">Bohemians 1905</a>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
<tr>
<td class="rechts hauptlink" style='background-color: #bdd9ef'>1 </td><td class="zentriert no-border-rechts"><a title="FK Teplice" href="/fk-teplice/spielplan/verein/814/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/814.png?lm=1692778662" title="FK Teplice" alt="FK Teplice" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="FK Teplice" href="/fk-teplice/spielplan/verein/814/saison_id/2026">Teplice</a>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
<tr>
<td class="rechts hauptlink" style='background-color: #f8cfcd'>1 </td><td class="zentriert no-border-rechts"><a title="FC Zlin" href="/fc-fastav-zlin/spielplan/verein/5545/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/5545.png?lm=1732137350" title="FC Zlin" alt="FC Zlin" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="FC Zlin" href="/fc-fastav-zlin/spielplan/verein/5545/saison_id/2026">Zlin</a>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
<tr>
<td class="rechts hauptlink" style='background-color: #f8cfcd'>1 </td><td class="zentriert no-border-rechts"><a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/5546.png?lm=1419784887" title="FK Mlada Boleslav" alt="FK Mlada Boleslav" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="FK Mlada Boleslav" href="/fk-mlada-boleslav/spielplan/verein/5546/saison_id/2026">Mlada Boleslav</a>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
<tr>
<td class="rechts hauptlink" style='background-color: #f8cfcd'>1 </td><td class="zentriert no-border-rechts"><a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/5544.png?lm=1419785239" title="1.FC Slovacko" alt="1.FC Slovacko" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="1.FC Slovacko" href="/1-fc-slovacko/spielplan/verein/5544/saison_id/2026">Slovacko</a>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
<tr>
<td class="rechts hauptlink" style='background-color: #f8cfcd'>1 </td><td class="zentriert no-border-rechts"><a title="FC Banik Ostrava" href="/fc-banik-ostrau/spielplan/verein/377/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/377.png?lm=1419584907" title="FC Banik Ostrava" alt="FC Banik Ostrava" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="FC Banik Ostrava" href="/fc-banik-ostrau/spielplan/verein/377/saison_id/2026">Banik Ostrava</a>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
<tr>
<td class="rechts hauptlink" style='background-color: #f8cfcd'>1 </td><td class="zentriert no-border-rechts"><a title="FC Zbrojovka Brno" href="/fc-zbrojovka-brunn/spielplan/verein/5225/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/5225.png?lm=1781723374" title="FC Zbrojovka Brno" alt="FC Zbrojovka Brno" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="FC Zbrojovka Brno" href="/fc-zbrojovka-brunn/spielplan/verein/5225/saison_id/2026">Zbrojovka Brno</a><a href="#"><img src="https://tmssl.akamaized.net//images/erfolge/mini/1003.png?lm=1693206052" title="Czech 2nd Division Champion 2026" alt="Czech 2nd Division Champion 2026" class="tabelle-erfolg" /></a><span title="Promoted to 1st league 2026" class="icons_sprite icon-aufsteiger">&nbsp;</span>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
<tr>
<td class="rechts hauptlink" style='background-color: #f8cfcd'>1 </td><td class="zentriert no-border-rechts"><a title="SK Artis Brno" href="/sk-lisen/spielplan/verein/24325/saison_id/2026"><img src="https://tmssl.akamaized.net//images/wappen/tiny/24325.png?lm=1749064964" title="SK Artis Brno" alt="SK Artis Brno" class="tiny_wappen" /></a></td>
        <td class="no-border-links hauptlink">
            <a title="SK Artis Brno" href="/sk-lisen/spielplan/verein/24325/saison_id/2026">Artis Brno</a><span title="Promoted to 1st league 2026" class="icons_sprite icon-aufsteiger">&nbsp;</span>
        </td><td class="zentriert">0</td><td class="zentriert">0</td><td class="zentriert">0</td></tr>
</tbody>
</table>
<div class="keys" style="display:none" title="/slug/startseite/wettbewerb/TS1"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span></div>
</div><div class="table-footer">
    <a title="To complete table" href="/fortuna-liga/tabelle/wettbewerb/TS1/saison_id/2026">To complete table</a></div>
</div>

<section class="box">
    <div class="content-box-headline">
        Transfermarkt Videos    </div>
    <div class="p10">
        <tm-consent
            type="showheroes"
            no-checkbox
            embed="PHNjcmlwdCBkYXRhLXdpZD0iYXV0byIgdHlwZT0idGV4dC9qYXZhc2NyaXB0IiBzcmM9Imh0dHBzOi8vY29udGVudC52aXJhbGl6ZS50di9kaXNwbGF5Lz96aWQ9QUFGc20zRHpGdkVlZDZsXyZhbXA7dT1odHRwcyUzQSUyRiUyRnd3dy50cmFuc2Zlcm1hcmt0LmNvbSUyRnNsdWclMkZzdGFydHNlaXRlJTJGd2V0dGJld2VyYiUyRlRTMSI+PC9zY3JpcHQ+"
        >
        </tm-consent>
    </div>
</section>
    </div>
    <div class="large-4 columns">
        <script type="text/javascript">//RWGzztV("rectangle1")</script>
<div class="ad-placement-note ad-placement-background werbung werbung-rectangle1"  data-ad-placement-note="Advertisement">
  <div id="d_side_1" style="min-width: 336px; min-height: 280px;">
  </div>
</div>

<span class="RWGzztV_end"></span>

        <tm-transfer-window-widget
            competition-id="TS1"
            locale="en"
            translations='{&quot;status&quot;:&quot;Status&quot;,&quot;open&quot;:&quot;open&quot;,&quot;closed&quot;:&quot;closed&quot;,&quot;day&quot;:&quot;Day&quot;,&quot;days&quot;:&quot;Days&quot;,&quot;closesIn&quot;:&quot;closes in&quot;,&quot;closedSince&quot;:&quot;Closed since&quot;,&quot;opensIn&quot;:&quot;Opens in&quot;,&quot;endsToday&quot;:&quot;Ends today&quot;,&quot;today&quot;:&quot;Today&quot;,&quot;transferWindowOverview&quot;:&quot;Transfer window overview&quot;,&quot;currentTransferWindow&quot;:&quot;Current transfer window&quot;}'></tm-transfer-window-widget>


        <tm-market-value-update
            competition-id="TS1"
            locale="en"
            translations='{&quot;headline&quot;:&quot;Market value update&quot;,&quot;nextUpdate&quot;:&quot;Next update&quot;}'></tm-market-value-update>

                <tm-data-scouts-box
            translation='{&quot;headline&quot;:{&quot;singular&quot;:&quot;Responsible data scout:&quot;,&quot;plural&quot;:&quot;Responsible data scouts:&quot;},&quot;wanted&quot;:{&quot;headline&quot;:&quot;Data scout for&quot;,&quot;cta&quot;:&quot;Apply now as data scout!&quot;}}'
            competition-id="TS1"
            competition-logo="https://tmssl.akamaized.net//images/logo/medium/ts1.png?lm=1719989400"
            competition-name="Chance Liga"
            tld="com"></tm-data-scouts-box>
        <a href="https://www.transfermarkt.com/betting/sites/"
            data-ad-placement-note="Advertisement"
        target="_self"
    class="ad-placement-note ad-placement-note--centered db mt10"
        onclick="tmEvent('werbung', 'click', 'e2_betting_subsite');"
>
    <img
        loading="lazy"
        src="https://tmsi.akamaized.net/banner/Banner-betting-TM-website-competition-COM.webp?lm=1739441343"
        width="auto"
        height="auto"
        alt="betting sites"
    >
</a>

<script type="text/javascript">
    (() => {
        const cookies = document.cookie
            .split(';')
            .map(c => c.trim().split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
        const isContentPassUser = cookies?._cpauthhint !== undefined;
        if (isContentPassUser) {
            const adNodes = document.querySelectorAll('.ad-placement-note');
            adNodes.forEach(node => node.remove());
        }
    })();
</script><tm-latest-transfers
    link-mode="transfers"
    size="medium"
    widget-title="Latest transfers"
    competition-id="TS1"
    >
</tm-latest-transfers>                <tm-relevant-news type="competition" id="287"></tm-relevant-news>
                        <div class="box">
                <tm-statistic identifier="marketvalue" translations='{&quot;headline&quot;:&quot;Most valuable players in the league&quot;,&quot;playerPosition&quot;:&quot;Player\\/Position&quot;,&quot;club&quot;:&quot;club&quot;,&quot;marketValue&quot;:&quot;market value&quot;,&quot;link&quot;:&quot;View stats&quot;}' tracking="wettbewerb_startseite_desktop" competitionId="TS1"
                    tld="com">
                </tm-statistic>
            </div>
            <div class="box box-slider geruechte-print" style="max-height: 334px;overflow: hidden;">
        <div class="container">
            <span class="geruechteWettbewerbSlider-prev"></span>
            <p class="text"><span>Top rumours</span></p>
            <span class="geruechteWettbewerbSlider-next"></span>
        </div>
        <div class="clearer">
            <ul class="geruechteWettbewerbSlider slider-list">
                                    <li class="slider-list" data-src="/chance-liga/geruechte/wettbewerbAjax/TS1/board_id/154/thread_id/1197645">
                        <div>
    <div class="container-foto text-center">
        <img src="https://img.a.transfermarkt.technology/portrait/medium/803049-1764432914.png?lm=1" title="Ermin Mahmic" alt="Ermin Mahmic" class="bilderrahmen max-medium-foto" />    </div>
    <div class="container-inhalt">
        <div class="container-hauptinfo">
            <a title="Ermin Mahmic" href="/ermin-mahmic/profil/spieler/803049">Ermin Mahmic</a>        </div>
        <div class="container-zusatzinfo">
            <b>Age:</b> 21 Years&nbsp;
            <img src="https://tmssl.akamaized.net//images/flagge/tiny/24.png?lm=1569523290" title="Bosnia-Herzegovina" alt="Bosnia-Herzegovina" class="flaggenrahmen" /><br />
            <b>Position:</b> Attacking Midfield<br />
            <b>Market value:</b> €5.00m<br />
        </div>
        <div class="container-transferwappen">
            <div class="text-center container-wappen">
                <a title="FC Slovan Liberec" href="/fc-slovan-liberec/transfers/verein/697"><img src="https://tmssl.akamaized.net//images/wappen/medium/697.png?lm=1717277296" title="FC Slovan Liberec" alt="FC Slovan Liberec" class="" /></a>            </div>
            <div class="text-center container-pfeil">
                <span class="icons_sprite wechsel-pfeil-slider">&nbsp;</span>
            </div>
            <div class="text-center container-wappen">
                <a title="Eintracht Frankfurt" href="/eintracht-frankfurt/transfers/verein/24"><img src="https://tmssl.akamaized.net//images/wappen/medium/24.png?lm=1700074979" title="Eintracht Frankfurt" alt="Eintracht Frankfurt" class="" /></a>            </div>
            <div class="clearer"></div>
        </div>
    </div>
    <div class="clearer"></div>
</div>
<div class="container-footer">
    <div class="text-center wahrscheinlichkeit">
        <div class="wahrscheinlichkeits-text">
                            58<span class="prozentzeichen">%
                        <br><span class="icons_sprite wertung-sinkend" title="Rating went down">&nbsp</span></span>
        </div>
    </div>
    <div class="text-left container-diskussion">
        <a onclick="tmEvent(&quot;wettbewerb&quot;, &quot;click&quot;, &quot;participate_in_rumour_discussion&quot;)" href="https://www.transfermarkt.com/will-ermin-mahmic-join-eintracht-frankfurt-/thread/forum/154/thread_id/1197645/post_id/3382433#3382433">Participate in discussion</a><span class="mitdiskutieren">0</span>
    </div>
</div>
                    </li>
                                        <li class="slider-list" data-src="/chance-liga/geruechte/wettbewerbAjax/TS1/board_id/154/thread_id/1197647">
                                            </li>
                                        <li class="slider-list" data-src="/chance-liga/geruechte/wettbewerbAjax/TS1/board_id/154/thread_id/1198757">
                                            </li>
                                        <li class="slider-list" data-src="/chance-liga/geruechte/wettbewerbAjax/TS1/board_id/154/thread_id/1197648">
                                            </li>
                                </ul>
        </div>
        <div class="footer bxPagerParent">
            <span class="bxPagerCustomGeruechte">
                <a title="To rumour overview" href="/fortuna-liga/geruechte/wettbewerb/TS1">To rumour overview</a>            </span>
        </div>
    </div>
        <section class="fav-voting">
        <header class="fav-voting__header">
            <h2 class="fav-voting__headline">
                Who do you want to win?                            </h2>
        </header>
        <div class="fav-voting__content">
                            <p class="fav-voting__question fav-voting__question--text-favorite">
                    In this match you stick with...                </p>

            <div class="fav-voting__wrapper">
                <a href="/beliebtheit/speichernVereine?verein_id_gewinner=24325&verein_id_verlierer=5546&kontinent=0&land=0&wettbewerb=TS1&typ=verein&verein_id_1=24325&lieblingsverein=0" class="fav-voting__link-club">
                    <img src="https://tmssl.akamaized.net//images/wappen/headerRund/24325.png?lm=1749064964" title="SK Artis Brno" alt="SK Artis Brno" class="" />                    <div class="fav-voting__name">
                        SK Artis Brno                    </div>
                </a>
                <img src="https://tmssl.akamaized.net//images/beliebtheit/versus.png" alt="versus" class="fav-voting__versus-image" width="39" height="35" />
                <a href="/beliebtheit/speichernVereine?verein_id_gewinner=5546&verein_id_verlierer=24325&kontinent=0&land=0&wettbewerb=TS1&typ=verein&verein_id_1=24325&lieblingsverein=0" class="fav-voting__link-club">
                    <img src="https://tmssl.akamaized.net//images/wappen/headerRund/5546.png?lm=1419784887" title="FK Mlada Boleslav" alt="FK Mlada Boleslav" class="" />                    <div class="fav-voting__name">
                        FK Mlada Boleslav                    </div>
                </a>
            </div>
        </div>
    </section>
    <script type="text/javascript">//RWGzztV("rectangle2")</script>
<div class="ad-placement-note ad-placement-background werbung werbung-rectangle2"  data-ad-placement-note="Advertisement">
  <div id="d_side_2" style="min-width: 336px; min-height: 280px;">
  </div>
</div>

<span class="RWGzztV_end"></span>
    </div>
</div>
    <div class="row">
        <div class="large-12 columns">
            <div id="recommender" class="box" >
    <div class="OUTBRAIN" data-src="" data-widget-id="AR_1" data-ob-template="DE_Transfermarkt.de" ></div>
    <tm-consent
        no-checkbox
        type="outbrain"
        embed="PHNjcmlwdCB0eXBlPSJ0ZXh0L2phdmFzY3JpcHQiIGFzeW5jPSJhc3luYyIgc3JjPSIvL3dpZGdldHMudGVhZHMteG8uY29tL291dGJyYWluLmpzIj48L3NjcmlwdD4=">
    </tm-consent>
</div>
        </div>
    </div>

<div class="ad-placement-note ad-placement-background werbung werbung-fullsize_contentad"  data-ad-placement-note="Advertisement">
  <div id="d_bottom_1" style="min-width: 1024px; min-height: 250px;">
  </div>
</div>


        </main>
        <footer class="tm-footer">
               <section class="tm-footer__section-quick-links">
        <strong class="tm-footer__headline tm-footer__headline--large">
            Quick Links        </strong>
        <div class="tm-footer__link-wrapper">
            <a href="/spieler-statistik/wertvollstespieler/marktwertetop"
               onclick="tmEvent('footer', 'quick_links', '/spieler-statistik/wertvollstespieler')"
               class="tm-footer__link tm-footer__link--arrow"
            >
                Most valuable players in the world            </a>
            <a href="/statistik/neuestetransfers"
                onclick="tmEvent('footer', 'quick_links', '/statistik/neuestetransfers')"
               class="tm-footer__link tm-footer__link--arrow"
            >
                Latest transfers            </a>
            <a href="/geruechte/aktuellegeruechte/statistik"
                onclick="tmEvent('footer', 'quick_links', '/statistik/aktuellegeruechte')"
               class="tm-footer__link tm-footer__link--arrow"
            >
                Latest rumours            </a>
            <a href="/spieler-statistik/marktwertaenderungen/marktwertetop"
                onclick="tmEvent('footer', 'quick_links', '/spieler-statistik/marktwertaenderungen/marktwertetop')"
               class="tm-footer__link tm-footer__link--arrow"
            >
                Latest market value updates            </a>
            <a href="/statistik/weltrangliste"
                onclick="tmEvent('footer', 'quick_links', '/statistik/weltrangliste')"
               class="tm-footer__link tm-footer__link--arrow"
            >
                FIFA World ranking            </a>
                        <a href="/betting/sites/"
                onclick="tmEvent('footer', 'quick_links', '/betting/sites/')"
               class="tm-footer__link tm-footer__link--arrow"
            >
                Best betting sites            </a>
                    </div>
    </section>
                <section class="tm-footer__section-involved">
            <strong class="tm-footer__headline tm-footer__headline--large">
                Be Involved            </strong>
            <div class="tm-footer__link-wrapper">
                <a href="/intern/paten"
                    onclick="tmEvent('footer', 'be_involved', 'mods_data_scouts')"
                   class="tm-footer__link tm-footer__link--arrow"
                >
                    Mods & Data Scouts                </a>
                <a href="/profil/bewerbung"
                    onclick="tmEvent('footer', 'be_involved', 'apply_mod_datascout')"
                   class="tm-footer__link tm-footer__link--arrow"
                >
                    Apply as Mod or Datascout                </a>
                <a href="/intern/elfGebote"
                    onclick="tmEvent('footer', 'be_involved', '11_commandments')"
                   class="tm-footer__link tm-footer__link--arrow"
                >
                    11 commandments                </a>
                <a href="/intern/fehlermelden"
                    onclick="tmEvent('footer', 'be_involved', 'found_mistake')"
                   class="tm-footer__link tm-footer__link--arrow"
                >
                    Found a mistake?                </a>
            </div>
        </section>
        <section class="tm-footer__section-career">
            <strong class="tm-footer__headline tm-footer__headline--large">
                Career            </strong>
            <div class="tm-footer__link-wrapper">
                                <a href="/intern/tmteam"
                   class="tm-footer__link tm-footer__link--arrow"
                   onclick="tmEvent('footer', 'career', 'contact')"
                >
                    Contact                </a>
            </div>
        </section>
        <section class="tm-footer__section-about">
            <strong class="tm-footer__headline tm-footer__headline--large">
                About Us            </strong>
            <div class="tm-footer__link-wrapper">
                <a href="/intern/tmteam"
                   onclick="tmEvent('footer', 'about_us', 'tm_team')"
                   class="tm-footer__link tm-footer__link--arrow"
                >
                    TM-Team                </a>
                <a href="/intern/faq"
                   onclick="tmEvent('footer', 'about_us', 'faq')"
                   class="tm-footer__link tm-footer__link--arrow"
                >
                    FAQ                </a>
            </div>
        </section>
            <section class="tm-footer__section-social">
        <strong class="tm-footer__headline
            ">
            Social media        </strong>
        <div class="tm-footer__social-wrapper">
                        <a href="https://www.instagram.com/transfermarkt_official/"
                   target="_blank"
                   class="tm-footer__link-social"
                   onclick="tmEvent('footer', 'social_media', 'instagram')"
                >
                    <img src="https://tmsi.akamaized.net/icons/socialMedia/instaRebrush.svg"
                         alt="instagram"
                         width="28"
                         height="28"
                         class="tm-footer__icon-social"
                    >
                </a>
                <a href="https://www.facebook.com/transfermarkt.global"
                   target="_blank"
                   class="tm-footer__link-social"
                   onclick="tmEvent('footer', 'social_media', 'facebook')">
                    <img src="https://tmsi.akamaized.net/icons/socialMedia/fbRebrush.svg"
                         alt="facebook"
                         width="25"
                         height="25"
                         class="tm-footer__icon-social"
                    >
                </a>
                <a href="https://www.whatsapp.com/channel/0029Va6Kevx47XeF0gE99J35"
                   target="_blank"
                   class="tm-footer__link-social"
                   onclick="tmEvent('footer', 'social_media', 'whatsapp')"
                >
                    <img src="https://tmsi.akamaized.net/icons/socialMedia/whatsappRebrush.svg"
                         alt="whatsapp"
                         width="28"
                         height="28"
                         class="tm-footer__icon-social"
                    >
                </a>
                <a href="https://twitter.com/TMuk_news"
                   target="_blank"
                   class="tm-footer__link-social"
                   onclick="tmEvent('footer', 'social_media', 'x')">
                    <img src="https://tmsi.akamaized.net/icons/socialMedia/twitter_rebrush.svg"
                         alt="x"
                         width="28"
                         height="28"
                         class="tm-footer__icon-social"
                    >
                </a>
                <a href="https://www.threads.net/@transfermarkt_official"
                   target="_blank"
                   class="tm-footer__link-social"
                   onclick="tmEvent('footer', 'social_media', 'threads')"
                >
                    <img src="https://tmsi.akamaized.net/icons/socialMedia/threadsRebrush.svg"
                         alt="threads"
                         width="28"
                         height="28"
                         class="tm-footer__icon-social"
                    >
                </a>
                <a href="https://www.tiktok.com/@transfermarkt"
                   target="_blank"
                   class="tm-footer__link-social"
                   onclick="tmEvent('footer', 'social_media', 'tiktok')"
                >
                    <img src="https://tmsi.akamaized.net/icons/socialMedia/tiktokRebrush.svg"
                         alt="tiktok"
                         width="28"
                         height="28"
                         class="tm-footer__icon-social"
                    >
                </a>
                <a href="https://www.youtube.com/@TransfermarktEnglish"
                   target="_blank"
                   class="tm-footer__link-social"
                   onclick="tmEvent('footer', 'social_media', 'youtube')"
                >
                    <img src="https://tmsi.akamaized.net/icons/socialMedia/RebrushYoutube.svg"
                         alt="youtube"
                         width="28"
                         height="28"
                         class="tm-footer__icon-social"
                    >
                </a>
                <a href="https://t.me/transfermarkt_off"
                   target="_blank"
                   class="tm-footer__link-social"
                   onclick="tmEvent('footer', 'social_media', 'telegram')"
                >
                    <img src="https://tmsi.akamaized.net/icons/socialMedia/telegramRebrush.svg"
                         alt="telegram"
                         width="28"
                         height="28"
                         class="tm-footer__icon-social"
                    >
                </a>
                        </div>
    </section>
                </footer>
                <div id="menue_overlay"></div>
    </div>
    <section class="tm-footer__mobile tm-footer__transfermarkt-info">
        <section class="tm-footer__section-desktop-width">
                            <section class="tm-footer__section-company-links">
                    <span class="tm-footer__headline tm-footer__headline--medium">
                        Transfermarkt Company Projects                    </span>
                    <div class="tm-footer__project-wrapper">
                        <a href="/wahretabelle"
                           onclick="tmEvent('footer', 'projects', 'wahretabelle')"
                           class="tm-footer__link"
                        >
                            Wahretabelle                        </a>
                        <a href="https://www.soccerdonna.de/"
                           onclick="tmEvent('footer', 'projects', 'soccerdonna')"
                           class="tm-footer__link"
                        >
                            Soccerdonna.de                        </a>
                        <a href="https://scoutastic.com/de/"
                           onclick="tmEvent('footer', 'projects', 'scoutastic')"
                           class="tm-footer__link"
                        >
                            Scoutastic.com                        </a>
                    </div>
                </section>
                        <section class="tm-footer__section-company-infos">
                <span class="tm-footer__headline tm-footer__headline--medium">&copy; Transfermarkt <span id="currentYear">2026</span></span>
                <div class="tm-footer__company-wrapper">
                    <a
                    href="/intern/impressum"
                    class="tm-footer__link tm-footer__link--blue"
                    onclick="tmEvent('footer', 'officials', 'impressum')"
                    >
                        Legal notice                    </a>
                    <a
                        href="/intern/web/datenschutz"
                        class="tm-footer__link tm-footer__link--blue"
                        onclick="tmEvent('footer', 'officials', 'data_protection')"
                        >
                        Data protection                    </a>
                    <a
                        href="javascript:void(0)"
                        class="cmp-link tm-footer__link tm-footer__link--blue"
                        onclick="tmEvent('footer', 'officials', 'privacy')"
                    >
                        Privacy                    </a>
                    <a
                        href="javascript:void(0)"
                        class="revoke-tracking tm-footer__link tm-footer__link--blue"
                        onclick="tmEvent('footer', 'officials', 'tracking_revocation')"
                    >
                        Revoke Tracking                    </a>
                    <a
                        href="/intern/anb"
                        class="tm-footer__link tm-footer__link--blue"
                        onclick="tmEvent('footer', 'officials', 'general_conduct_of_use')"
                        >
                        Site policy                    </a>
                                                <a
                                href="https://tmsi.akamaized.net/media-kit/TM_Pitchdeck_WC26_Sales_final_ENG.pdf"
                                target="_blank"
                                class="tm-footer__link tm-footer__link--blue"
                                onclick="tmEvent('footer', 'officials', 'media-kit')"
                                >
                                Media Kit                            </a>
                                    </div>
            </section>
        </section>
    </section>
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

            <script>
            document.addEventListener('DOMContentLoaded', function() {
                var cnt = document.querySelectorAll('div.large-4.columns').length;
                if (cnt == 1) {
                    var sidebarDiv = document.querySelector('div.large-4.columns');
                    if (sidebarDiv !== null) {
                        var sidebar = document.getElementById('werbung_recommender_sidebar_wrapper');
                        sidebarDiv.appendChild(sidebar);
                        sidebar.style.display = 'block';
                    }
                }
            });
        </script>
        <div id="werbung_recommender_sidebar_wrapper" style="display: none;">
                    </div>
    <tm-consent type="adition" no-checkbox embed="PHNjcmlwdCBzcmM9Imh0dHBzOi8vY3JlYXRpdmUtY2RuLm9kZHNzZXJ2ZS5jb20vbG9hZGVyLmpzP3B1Ymxpc2hlcj10bSIgYXN5bmM9ImFzeW5jIj48L3NjcmlwdD4="></tm-consent><tm-consent type='adrenalead' no-checkbox embed='PHNjcmlwdCB0eXBlPSd0ZXh0L2phdmFzY3JpcHQnPgogICAgICAgICAgICB3aW5kb3cuX25BZHpxPXdpbmRvdy5fbkFkenF8fFtdOyhmdW5jdGlvbigpewogICAgICAgICAgICB3aW5kb3cuX25BZHpxLnB1c2goWydzZXRJZHMnLCdkNWE0YzFhNzU4Njc4YTUxJ10pOwogICAgICAgICAgICB2YXIgZT0naHR0cHM6Ly9ub3RpZnB1c2guY29tL3NjcmlwdHMvJzsKICAgICAgICAgICAgdmFyIHQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7CiAgICAgICAgICAgIHQudHlwZT0ndGV4dC9qYXZhc2NyaXB0JzsKICAgICAgICAgICAgdC5kZWZlcj10cnVlOwogICAgICAgICAgICB0LmFzeW5jPXRydWU7CiAgICAgICAgICAgIHQuc3JjPWUrJ25hZHotc2RrLmpzJzsKICAgICAgICAgICAgdmFyIHM9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOwogICAgICAgICAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQscyl9KSgpOwogICAgICAgIDwvc2NyaXB0Pg=='></tm-consent>
        <tm-modal id="tm-modal-revoke-tracking" additionalClose="Close">
        <div class="tm-modal__headline">Revoke Tracking</div>
        <p class="tm-modal__text">Sie haben erfolgreich Ihre Einwilligung in die Nutzung von Transfermarkt mit Tracking und Cookies widerrufen. Sie können sich jetzt zwischen dem Contentpass-Abo und der Nutzung mit personalisierter Werbung, Cookies und Tracking entscheiden.</p>
    </tm-modal>


<tm-consent type="googleadvertising" no-checkbox embed="PHNjcmlwdCAgc3JjPSJodHRwczovL3NlY3VyZXB1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldC90YWcvanMvZ3B0LmpzIiBhc3luYz0iYXN5bmMiPjwvc2NyaXB0Pg=="></tm-consent>
<tm-consent type="googleadvertising" no-checkbox embed="PHNjcmlwdCAgc3JjPSJodHRwczovL3Rtc2kuYWthbWFpemVkLm5ldC9qcy9hZC1zZXR1cC9wcmViaWQvcHJlYmlkLmpzIiBhc3luYz0iYXN5bmMiPjwvc2NyaXB0Pg=="></tm-consent>
<tm-consent type="googleadvertising" no-checkbox embed="PHNjcmlwdCAgc3JjPSJodHRwczovL3Rtc2kuYWthbWFpemVkLm5ldC9qcy9hZC1zZXR1cC9wcmViaWQvc2NyaXB0cy9jb20uanMiIGFzeW5jPSJhc3luYyI+PC9zY3JpcHQ+"></tm-consent>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/subnavigation/bundle.js"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/assets/aa69c6e9c51f1e811847082c63633956/gridview/jquery.yiigridview.js?lm=1784646003"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/assets/b7c5571cf8957553f95f6d9069eaed67/jui/js/jquery-ui.min.js?lm=1784646003"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/transfer-window-widget/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/market-value-update/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/data-scouts/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/latest-transfers/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/relevant-news/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/statistic/bundle.js"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/custom/vendors.min.js?lm=1784646003"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/domain-switcher/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/quick-select-bar/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/userbox/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/live-match-count/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/domain-note/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/modal/bundle.js"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/custom/tm-skyscraper.min.js?lm=1784646003"></script>
<script type="text/javascript">
/*<![CDATA[*/
	var loginUrl='/profil/login';
	var onlyDE = '';
	var onlyMobile = '';
	var onlyTablet = '';
	var getUserID = '';

oddsServe("8b7ecddd3b6e5b2a65deb466d60355a7", -1);
jQuery(function($) {
jQuery('#yw1').yiiGridView({'ajaxUpdate':['yw1'],'ajaxVar':'ajax','pagerClass':'pager','loadingClass':'grid\\x2Dview\\x2Dloading','filterClass':'filters','tableClass':'items','selectableRows':1,'enableHistory':false,'updateSelector':'\\x7Bpage\\x7D,\\x20\\x7Bsort\\x7D','filterSelector':'\\x7Bfilter\\x7D','afterAjaxUpdate':function() {window.LazyLoadInstance.update(); tmTrackingAndAds(); trackLinks(); document.dispatchEvent(new CustomEvent("tmInitTooltip"));}});
jQuery('#spieltagstabs').tabs({'active':0});
jQuery('#yw2').yiiGridView({'ajaxUpdate':['yw2'],'ajaxVar':'ajax','pagerClass':'pager','loadingClass':'grid\\x2Dview\\x2Dloading','filterClass':'filters','tableClass':'items','selectableRows':1,'enableHistory':false,'updateSelector':'\\x7Bpage\\x7D,\\x20\\x7Bsort\\x7D','filterSelector':'\\x7Bfilter\\x7D'});
});
/*]]>*/
</script>
</body>

</html>
`;

export const LEAGUE_DATA: SoccerBotResponse<SoccerBotTeam[]> = {
  ok: true,
  data: [
    {
      id: '62',
      name: 'SK Slavia Prague'
    },
    {
      id: '197',
      name: 'AC Sparta Prague'
    },
    {
      id: '941',
      name: 'FC Viktoria Plzen'
    },
    {
      id: '2311',
      name: 'SK Sigma Olomouc'
    },
    {
      id: '697',
      name: 'FC Slovan Liberec'
    },
    {
      id: '377',
      name: 'FC Banik Ostrava'
    },
    {
      id: '1322',
      name: 'FK Jablonec'
    },
    {
      id: '1496',
      name: 'FK Pardubice'
    },
    {
      id: '1897',
      name: 'FC Hradec Kralove'
    },
    {
      id: '5225',
      name: 'FC Zbrojovka Brno'
    },
    {
      id: '5546',
      name: 'FK Mlada Boleslav'
    },
    {
      id: '814',
      name: 'FK Teplice'
    },
    {
      id: '5544',
      name: '1.FC Slovacko'
    },
    {
      id: '5545',
      name: 'FC Zlin'
    },
    {
      id: '24325',
      name: 'SK Artis Brno'
    },
    {
      id: '715',
      name: 'Bohemians Prague 1905'
    }
  ]
};
