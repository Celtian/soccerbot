import { SoccerBotCountryCode2, SoccerBotCountryCode3 } from '../../../src/shared/countries';
import {
  SoccerBotFoot,
  SoccerBotPlayer,
  SoccerBotPositionGroup,
  SoccerBotResponse
} from '../../../src/shared/interfaces';

export const TEAM_HTML = `


<!DOCTYPE html>
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
<meta name="keywords" content="SK Slavia Prague,Czech Republic" />
<meta name="description" content="Slavia Praha at a glance: The detailed squad overview with all players and data in the season 25/26. " />
<meta property="og:type" content="article" />
<meta property="og:image" content="https://tmssl.akamaized.net/images/tm_logo.png" />
<meta property="og:description" content="" />
<meta property="og:title" content="SK Slavia Prague - Detailed squad 25/26 (Detailed view)" />
<meta property="twitter:title" content="SK Slavia Prague - Detailed squad 25/26 (Detailed view)" />
<meta property="og:url" content="https://www.transfermarkt.com/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="de" rel="alternate" href="https://www.transfermarkt.de/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="de-LU" rel="alternate" href="https://www.transfermarkt.de/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="de-AT" rel="alternate" href="https://www.transfermarkt.at/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="de-CH" rel="alternate" href="https://www.transfermarkt.ch/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="tr" rel="alternate" href="https://www.transfermarkt.com.tr/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="it-CH" rel="alternate" href="https://www.transfermarkt.it/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="it" rel="alternate" href="https://www.transfermarkt.it/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="pl" rel="alternate" href="https://www.transfermarkt.pl/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="en-GB" rel="alternate" href="https://www.transfermarkt.co.uk/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="en-IE" rel="alternate" href="https://www.transfermarkt.co.uk/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="es" rel="alternate" href="https://www.transfermarkt.es/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="es-ES" rel="alternate" href="https://www.transfermarkt.es/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="es-CL" rel="alternate" href="https://www.transfermarkt.es/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="es-VE" rel="alternate" href="https://www.transfermarkt.es/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="es-EC" rel="alternate" href="https://www.transfermarkt.es/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="es-CU" rel="alternate" href="https://www.transfermarkt.es/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="nl" rel="alternate" href="https://www.transfermarkt.nl/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="pt" rel="alternate" href="https://www.transfermarkt.pt/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="ru" rel="alternate" href="https://www.transfermarkt.world/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="fr-CH" rel="alternate" href="https://www.transfermarkt.fr/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="fr" rel="alternate" href="https://www.transfermarkt.fr/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="fr-CA" rel="alternate" href="https://www.transfermarkt.fr/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="fr-CI" rel="alternate" href="https://www.transfermarkt.fr/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="fr-LU" rel="alternate" href="https://www.transfermarkt.fr/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="fr-BE" rel="alternate" href="https://www.transfermarkt.fr/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="pt-BR" rel="alternate" href="https://www.transfermarkt.com.br/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="en-US" rel="alternate" href="https://www.transfermarkt.us/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="en-CA" rel="alternate" href="https://www.transfermarkt.us/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="en-IN" rel="alternate" href="https://www.transfermarkt.co.in/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="en-ZA" rel="alternate" href="https://www.transfermarkt.co.za/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="x-default" rel="alternate" href="https://www.transfermarkt.com/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="en" rel="alternate" href="https://www.transfermarkt.com/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="nl-BE" rel="alternate" href="https://www.transfermarkt.be/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="ro" rel="alternate" href="https://www.transfermarkt.ro/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="el-GR" rel="alternate" href="https://www.transfermarkt.gr/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="ko-KR" rel="alternate" href="https://www.transfermarkt.co.kr/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="es-AR" rel="alternate" href="https://www.transfermarkt.com.ar/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="es-MX" rel="alternate" href="https://www.transfermarkt.mx/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="es-CO" rel="alternate" href="https://www.transfermarkt.co/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="es-PE" rel="alternate" href="https://www.transfermarkt.pe/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="ms" rel="alternate" href="https://www.transfermarkt.my/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="ja" rel="alternate" href="https://www.transfermarkt.jp/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link hreflang="id" rel="alternate" href="https://www.transfermarkt.co.id/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-main.min.css?lm=1764863857" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/main_desktop.css?lm=1764863086" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-discover.min.css?lm=1764863857" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-button-list.min.css?lm=1764863857" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-link-list.min.css?lm=1764863857" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-print.min.css?lm=1764863857" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/vereinsseite.css?lm=1764863086" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-statistics.min.css?lm=1764863857" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-game-report.min.css?lm=1764863857" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-chosen.min.css?lm=1764863857" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/css/stylesheets/main.css?lm=1764863086" />
<link rel="stylesheet" type="text/css" href="https://tmssl.akamaized.net/styles/tm-club-profile.min.css?lm=1764863857" />
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
<script type="text/javascript" src="https://tmssl.akamaized.net/js/vendor/jquery.min.js?lm=1764863086"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/assets/b7c5571cf8957553f95f6d9069eaed67/jquery.ba-bbq.min.js?lm=1764863086"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/ads/tisoomi.com.min.js?lm=1764918002"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/main.js?lm=1764863086"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/chosen.ajaxaddition.jquery.js?lm=1764863086"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/functions.js?lm=1764863086"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/main_desktop.js?lm=1764863086"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/chosen.jquery.js?lm=1764863086"></script>

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
            <link rel="canonical" href="https://www.transfermarkt.com/sk-slavia-prag/kader/verein/62">
    </head>

<body class="desktop " itemscope itemtype="http://schema.org/WebPage" data-tm-tld="com" data-cmp-layer-id="910164" data-db-name="com-der-zauberzwerg">
    
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
    <script>
      googletag.cmd.push(() => {
        googletag.display("d_right_1");
        let has_d_right_1_refreshed = false;
        var observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.isIntersecting === true && !has_d_right_1_refreshed) {
              googletag.cmd.push(() => {
                console.info("%c [TM-ADs] IntersectionObserver renders d_right_1", "background: #282828; color: #bada55")
                googletag.pubads().refresh([ad_d_right_1]);
                has_d_right_1_refreshed = true;
              });
            }
          });
        }, { threshold: [0], rootMargin: "0px 0px 0px 0px" });
      observer.observe(document.querySelector("#d_right_1"));
      });
    </script>
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
                    <tm-userbox translations='{&quot;addFavorite&quot;:&quot;Add favourite&quot;,&quot;adminArea&quot;:&quot;Admin area&quot;,&quot;adminTools&quot;:&quot;Admin tools&quot;,&quot;allFavoriteLinkText&quot;:&quot;Go to all my favourite links&quot;,&quot;applyAsModOrDatascout&quot;:&quot;Apply as a moderator or datascout&quot;,&quot;checkAllNews&quot;:&quot;Check all news&quot;,&quot;checkAllRumours&quot;:&quot;Check all rumours&quot;,&quot;chooseYourDomain&quot;:&quot;Choose your domain&quot;,&quot;clickAgain&quot;:&quot;Click again to copy shortlink to your clipboard&quot;,&quot;clubBoard&quot;:&quot;Club forum&quot;,&quot;copied&quot;:&quot;Copied to your clipboard&quot;,&quot;copyLink&quot;:&quot;Link kopieren&quot;,&quot;createAccount&quot;:&quot;Create your account&quot;,&quot;createNewMessage&quot;:&quot;Create a new message&quot;,&quot;createShortlink&quot;:&quot;create a shortlink&quot;,&quot;createShortNews&quot;:&quot;Create memo&quot;,&quot;dashboard&quot;:&quot;Overview&quot;,&quot;dataAdministration&quot;:&quot;Data administration&quot;,&quot;debug&quot;:&quot;Debug&quot;,&quot;deleteAll&quot;:&quot;Delete all&quot;,&quot;deleteConfirm&quot;:&quot;Yes, delete all&quot;,&quot;editText&quot;:&quot;Edit&quot;,&quot;forgotPassword&quot;:&quot;Forgot password?&quot;,&quot;forgotUsername&quot;:&quot;Forgot username?&quot;,&quot;forgotLoginDetails&quot;:&quot;Forgot your login details?&quot;,&quot;forum&quot;:&quot;forum&quot;,&quot;groundhoppingTool&quot;:&quot;Groundhopping Tool&quot;,&quot;lastMatch&quot;:&quot;last match&quot;,&quot;signin&quot;:&quot;Log in&quot;,&quot;login&quot;:&quot;Login&quot;,&quot;logOut&quot;:&quot;Log out&quot;,&quot;manageFavorites&quot;:&quot;Manage favourites&quot;,&quot;marketValue&quot;:&quot;market value&quot;,&quot;matchplan&quot;:&quot;Schedule&quot;,&quot;messages&quot;:&quot;Private messages&quot;,&quot;myClub&quot;:&quot;My club&quot;,&quot;myClubText&quot;:&quot;With a Transfermarkt account you can register your favourite club and find all important information about your club (matches, news, quick links). &quot;,&quot;myDreamTeam&quot;:&quot;My dream team&quot;,&quot;myFavorites&quot;:&quot;My favourites&quot;,&quot;myFavoritesText&quot;:&quot;With a Transfermarkt account, you can save any page as a favourite and then access it with one click.&quot;,&quot;myProfile&quot;:&quot;My profile&quot;,&quot;news&quot;:&quot;News&quot;,&quot;newsAdministration&quot;:&quot;News administration&quot;,&quot;nextMatch&quot;:&quot;next match&quot;,&quot;noNewNotifications&quot;:&quot;No new notifications&quot;,&quot;notifications&quot;:&quot;Notifications&quot;,&quot;notificationsDeletedAutomatically&quot;:&quot;Note: Notifications are automatically deleted after 30 days.&quot;,&quot;notifyDeleteMessage&quot;:&quot;Private messages older than 45 days will be deleted from time to time (except for data scouts and moderators)&quot;,&quot;or&quot;:&quot;or&quot;,&quot;other&quot;:&quot;Miscellaneous&quot;,&quot;overview&quot;:&quot;overview&quot;,&quot;password&quot;:&quot;Password&quot;,&quot;playerRatings&quot;:&quot;Player ratings&quot;,&quot;playerWatchlist&quot;:&quot;Players Watchlist&quot;,&quot;profile&quot;:&quot;Profile&quot;,&quot;progDebug&quot;:&quot;Prog. depanare&quot;,&quot;progProfile&quot;:&quot;Prog. profile&quot;,&quot;registerNow&quot;:&quot;Sign up now&quot;,&quot;rememberMe&quot;:&quot;Remember me&quot;,&quot;removeFavorite&quot;:&quot;Delete favourite&quot;,&quot;rumors&quot;:&quot;Rumours&quot;,&quot;schedule&quot;:&quot;Schedule&quot;,&quot;setting&quot;:&quot;Settings&quot;,&quot;shortlink&quot;:&quot;Shortlink&quot;,&quot;shortLinkCreationError&quot;:&quot;An Error occured creating the shortlink.&quot;,&quot;shortLinkHasBeenCreated&quot;:&quot;Shortlink has been created an was copied to your clipboard&quot;,&quot;shortLinkIsBeingCreated&quot;:&quot;Creating shortlink ...&quot;,&quot;showAllMessages&quot;:&quot;Show all messages&quot;,&quot;totalMarketValue&quot;:&quot;Total market value&quot;,&quot;translation&quot;:&quot;Translation&quot;,&quot;username&quot;:&quot;Username&quot;,&quot;whyRegister&quot;:&quot;Why register?&quot;,&quot;Bitte korrigieren Sie die markierten Felder&quot;:&quot;Bitte korrigieren Sie die markierten Felder&quot;,&quot;mindestensDreiZeichen&quot;:&quot;Mindestens drei Zeichen&quot;,&quot;mindestensAchtZeichen&quot;:&quot;At least eight characters&quot;,&quot;pleaseCorrectFields&quot;:&quot;profil&quot;,&quot;minThreeCharacters&quot;:&quot;At least three characters&quot;,&quot;minEightCharacters&quot;:&quot;At least eight characters&quot;,&quot;noAtCharacter&quot;:&quot;The @ character is not allowed in the username&quot;}' page-title="SK Slavia Prague - Detailed squad 25/26 (Detailed view) | Transfermarkt" tld="com" />
                </div>
            </div>
        
        
                        <!-- mobile end -->
            <nav class="main-navbar">
                                    <a href="/" class="main-navbar__lp-link " onclick="tmEvent('hauptnavi', '/', 'DISCOVER')">
                        DISCOVER                    </a>
                                    <a href="/navigation/transfersundgeruechte" class="main-navbar__lp-link " onclick="tmEvent('hauptnavi', '/navigation/transfersundgeruechte', 'TRANSFERS & RUMOURS')">
                        TRANSFERS & RUMOURS                    </a>
                                    <a href="/navigation/marktwerte" class="main-navbar__lp-link " onclick="tmEvent('hauptnavi', '/navigation/marktwerte', 'MARKET VALUES')">
                        MARKET VALUES                    </a>
                                    <a href="/navigation/wettbewerbe" class="main-navbar__lp-link " onclick="tmEvent('hauptnavi', '/navigation/wettbewerbe', 'COMPETITIONS')">
                        COMPETITIONS                    </a>
                                    <a href="/navigation/statistiken" class="main-navbar__lp-link " onclick="tmEvent('hauptnavi', '/navigation/statistiken', 'STATISTICS')">
                        STATISTICS                    </a>
                                    <a href="/navigation/community" class="main-navbar__lp-link " onclick="tmEvent('hauptnavi', '/navigation/community', 'COMMUNITY')">
                        COMMUNITY                    </a>
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
                        href="/uefa-champions-league/startseite/wettbewerb/CL"
                        title="Champions League"
                        target=""
                        class="tm-button-list__list-item tm-button-list__list-item--big "
                        onclick="tmEvent('recommendations_recommendation', '/uefa-champions-league/startseite/wettbewerb/CL' , '1_1', 'buttonList');"
                    ><img
                            src="https://tmssl.akamaized.net//images/logo/homepageWappen150x150/cl.png?lm=1626810555"
                            alt="UEFA Champions League"
                            class="tm-button-list__image tm-button-list__image--big 1"
                            width="54"
                            height="36"
                        ></a></li><li><a
                        href="/premier-league/startseite/wettbewerb/GB1"
                        title="Premier League"
                        target=""
                        class="tm-button-list__list-item tm-button-list__list-item--big "
                        onclick="tmEvent('recommendations_recommendation', '/premier-league/startseite/wettbewerb/GB1' , '1_2', 'buttonList');"
                    ><img
                            src="https://tmssl.akamaized.net//images/logo/homepageWappen150x150/gb1.png?lm=1521104656"
                            alt="Premier League"
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
                        href="/serie-a/startseite/wettbewerb/IT1"
                        title="Serie A"
                        target=""
                        class="tm-button-list__list-item tm-button-list__list-item--big "
                        onclick="tmEvent('recommendations_recommendation', '/serie-a/startseite/wettbewerb/IT1' , '1_4', 'buttonList');"
                    ><img
                            src="https://tmssl.akamaized.net//images/logo/homepageWappen150x150/it1.png?lm=1656073460"
                            alt="Serie A"
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
                        href="/champions-league/startseite/pokalwettbewerb/CL"
                        title="UEFA Champions League"
                        target="_self"
                        class="tm-button-list__list-item tm-button-list__list-item--big "
                        onclick="tmEvent('recommendations_recommendation', '/champions-league/startseite/pokalwettbewerb/CL' , '1_6', 'buttonList');"
                    ><img
                            src="https://tmssl.akamaized.net//images/logo/homepageWappen150x150/fr1.png?lm=1732280518"
                            alt="Ligue 1"
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
    
    <tm-quick-select defaultCountry="172" defaultCompetition="TS1" defaultClub="62" defaultPlayer="" dropdown-visible="" translations='{"home":"Home","country":"Country","competition":"Competition","club":"Club","player":"Player","attack":"Striker","midfield":"Midfielder","defense":"Defender","goalkeeper":"Goalkeeper"}'>
    </tm-quick-select>
</div>

            
        
        <script type="text/javascript">//RWGzztV("billboard")</script>
<div class="ad-placement-note ad-placement-background werbung werbung-billboard"  data-ad-placement-note="Advertisement">
  <div id="d_top_1" style="min-width: 1024px; min-height: 250px;">
    <script>
      googletag.cmd.push(() => {
        googletag.display("d_top_1");
        let has_d_top_1_refreshed = false;
        var observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.isIntersecting === true && !has_d_top_1_refreshed) {
              googletag.cmd.push(() => {
                console.info("%c [TM-ADs] IntersectionObserver renders d_top_1", "background: #282828; color: #bada55")
                googletag.pubads().refresh([ad_d_top_1]);
                has_d_top_1_refreshed = true;
              });
            }
          });
        }, { threshold: [0], rootMargin: "0px 0px 0px 0px" });
      observer.observe(document.querySelector("#d_top_1"));
      });
    </script>
  </div>
</div>

<span class="RWGzztV_end"></span>


        
        <main id="tm-main">
            <header class="data-header">
    <div class="data-header__headline-container">
        <h1 class="data-header__headline-wrapper data-header__headline-wrapper--oswald">
            SK Slavia Prague        </h1>
    </div>
    <div class="data-header__badge-container">
                                    <a href="/sk-slavia-prague/erfolge/verein/62" title="Czech Champion" class="data-header__success-data">
                                            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://tmssl.akamaized.net//images/erfolge/header/21.png?lm=1461847499" title="Czech Champion" alt="Czech Champion" class="data-header__success-image lazy lazy" />                        
                    <span class="data-header__success-number">
                        8                    </span>
                </a>
                                <a href="/sk-slavia-prague/erfolge/verein/62" title="Intertoto-Cup Winner" class="data-header__success-data">
                                            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://tmssl.akamaized.net//images/erfolge/header/704.png?lm=1695400457" title="Intertoto-Cup Winner" alt="Intertoto-Cup Winner" class="data-header__success-image lazy lazy" />                        
                    <span class="data-header__success-number">
                        7                    </span>
                </a>
                                <a href="/sk-slavia-prague/erfolge/verein/62" title="Mitropacup" class="data-header__success-data">
                                            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://tmssl.akamaized.net//images/erfolge/header/147.png?lm=1520606997" title="Mitropacup" alt="Mitropacup" class="data-header__success-image lazy lazy" />                        
                    <span class="data-header__success-number">
                        1                    </span>
                </a>
                                <a href="/sk-slavia-prague/erfolge/verein/62" title="Czech Cup Winner" class="data-header__success-data">
                                            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://tmssl.akamaized.net//images/erfolge/header/341.png?lm=1632121640" title="Czech Cup Winner" alt="Czech Cup Winner" class="data-header__success-image lazy lazy" />                        
                    <span class="data-header__success-number">
                        7                    </span>
                </a>
                                <a href="/sk-slavia-prague/erfolge/verein/62" title="Champion of Czechoslovakia" class="data-header__success-data">
                                            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://tmssl.akamaized.net//images/erfolge/header/default.png?lm=1520606999" title="Champion of Czechoslovakia" alt="Champion of Czechoslovakia" class="data-header__success-image lazy lazy" />                        
                    <span class="data-header__success-number">
                        14                    </span>
                </a>
                                                                <a href="/sk-slavia-prague/erfolge/verein/62"
                       title="All titles & victories"
                       class="data-header__success-more"
                    >
                    </a>
                                                    </div>
            <div class="data-header__box--big">
            <a class="data-header__box__club-link" href="/fortuna-liga/startseite/wettbewerb/TS1">
                                    <img srcset="
                                    https://tmssl.akamaized.net//images/logo/homepageNewsLogo80x80/ts1.png?lm=1719989400 1x,
                                    https://tmssl.akamaized.net//images/logo/homepageWappen150x150/ts1.png?lm=1719989400 2x
                                " alt="Chance Liga" height="80" width="80" />
                                </a>
            <div class="data-header__club-info">
                <span class="data-header__club" itemprop="affiliation">
                    <a href="/fortuna-liga/startseite/wettbewerb/TS1">
                        Chance Liga                    </a>
                </span>
                                        <span class="data-header__label">
                            <strong>League level:</strong>                            <span class="data-header__content">
                                <a href="/fortuna-liga/startseite/wettbewerb/TS1">
                                    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://tmssl.akamaized.net//images/flagge/tiny/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen vm lazy lazy" />First Tier
                                </a>
                            </span>
                        </span>
                                            <span class="data-header__label">
                            Table position:
                            <span class="data-header__content">
                                <a href="/fortuna-liga/tabelle/wettbewerb/TS1" title="League table">1</a>                                </a>
                            </span>
                        </span>
                        <span class="data-header__label">
                            In league since:
                            <span class="data-header__content">
                                <a href="/sk-slavia-prague/platzierungen/verein/62" title="">35 years</a>
                            </span>
                        </span>
                                </div>
        </div>
            <div class="data-header__profile-container">
        <img src="https://tmssl.akamaized.net//images/wappen/head/62.png?lm=1659955223" title="SK Slavia Prague" alt="SK Slavia Prague" class="" />
    </div>
            <div class="data-header__box--small">

                        <a href="/sk-slavia-prague/kader/verein/62" class="data-header__market-value-wrapper"><span class="waehrung">€</span>106.58<span class="waehrung">m</span>            <p class="data-header__last-update">
                Total market value            </p>
            </a>
        </div>
            <div class="data-header__info-box ">
        <div class="data-header__details">
            <ul class="data-header__items">
                <li class="data-header__label">
                    Squad size:
                    <span itemprop="dataItem" class="data-header__content">
                        30                    </span>
                </li>
                <li class="data-header__label">
                    Average age:
                    <span itemprop="dataItem" class="data-header__content">
                        26.4                    </span>
                </li>
                <li class="data-header__label">
                    Foreigners:
                    <span itemprop="dataItem" class="data-header__content">
                        <a href="/sk-slavia-prague/legionaere/verein/62">12</a>&nbsp;&nbsp;<span class="tabellenplatz">40.0 %</span>                    </span>
                </li>
            </ul>
            <ul class="data-header__items">
                                    <li class="data-header__label">
                        National team players:
                        <span itemprop="dataItem" class="data-header__content">
                            <a href="/sk-slavia-prague/nationalspieler/verein/62">22</a>                        </span>
                    </li>
                    <li class="data-header__label">
                        Stadium:
                        <span itemprop="dataItem" class="data-header__content">
                            <a title="SK Slavia Prague" href="/sk-slavia-prag/stadion/verein/62">Fortuna Arena</a>&nbsp;&nbsp;<span class="tabellenplatz">19.370 Seats</span>                        </span>
                    </li>
                    <li class="data-header__label">
                        Current transfer record:
                        <span itemprop="dataItem" class="data-header__content">
                                                        <span class="greentext">
                                <a class="greentext" href="/sk-slavia-prague/transfers/verein/62/saison_id/2025">+€25.33m</a>                            </span>
                    </li>
                            </ul>
        </div>
    </div>
            <div class="data-header__toggle">
            <div class="data-header__toggle-icon">+</div>
            <ul class="data-header__list-clubs">
                <li>
                    <img src="https://tmssl.akamaized.net//images/wappen/tiny/62.png?lm=1659955223" title="SK Slavia Prague" alt="SK Slavia Prague" class="tiny_wappen" /><span><a title="SK Slavia Prague" href="/sk-slavia-prag/startseite/verein/62">SK Slavia Prague</a></span>                    </li><li>
                    <img src="https://tmssl.akamaized.net//images/wappen/tiny/6541.png?lm=1659955223" title="SK Slavia Prague B" alt="SK Slavia Prague B" class="tiny_wappen" /><span><a title="SK Slavia Prague B" href="/sk-slavia-prag-b/startseite/verein/6541">SK Slavia Prague B</a></span>                    </li><li>
                    <img src="https://tmssl.akamaized.net//images/wappen/tiny/131709.png?lm=1750104029" title="SK Slavia Prague U20" alt="SK Slavia Prague U20" class="tiny_wappen" /><span><a title="SK Slavia Prague U20" href="/sk-slavia-praha-u20/startseite/verein/131709">SK Slavia Prague U20</a></span>                    </li><li>
                    <img src="https://tmssl.akamaized.net//images/wappen/tiny/14340.png?lm=1659955223" title="SK Slavia Prague U19" alt="SK Slavia Prague U19" class="tiny_wappen" /><span><a title="SK Slavia Prague U19" href="/sk-slavia-prag-u19/startseite/verein/14340">SK Slavia Prague U19</a></span>                    </li><li>
                    <img src="https://tmssl.akamaized.net//images/wappen/tiny/76578.png?lm=1659955223" title="SK Slavia Prague UEFA U19" alt="SK Slavia Prague UEFA U19" class="tiny_wappen" /><span><a title="SK Slavia Prague UEFA U19" href="/sk-slavia-prag-uefa-u19/startseite/verein/76578">SK Slavia Prague UEFA U19</a></span>                    </li><li>
                    <img src="https://tmssl.akamaized.net//images/wappen/tiny/118342.png?lm=1714323008" title="SK Slavia Prague Youth" alt="SK Slavia Prague Youth" class="tiny_wappen" /><span><a title="SK Slavia Prague Youth" href="/sk-slavia-prag-jugend/startseite/verein/118342">SK Slavia Prague Youth</a></span>                    </li>            </ul>
        </div>
    </header>
<script type="text/javascript">
   const headerLinkList = document.querySelector('.data-header__toggle');
    if (headerLinkList) {
        headerLinkList.addEventListener('click', () => {
            headerLinkList.classList.toggle('data-header__toggle--active');
        })
    };
</script>
<a href="https://www.transfermarkt.com/world-cup-2026-draw-everything-you-need-to-know-time-pots-format-and-how-to-watch/view/news/463649"
        target="0"
    class="db mt10"
        onclick="tmEvent('banner', 'https://www.transfermarkt.com/world-cup-2026-draw-everything-you-need-to-know-time-pots-format-and-how-to-watch/view/news/463649', 'd-day-banner');"
>
    <img
        loading="lazy"
        src="https://dzjovqk3zamsg.cloudfront.net/world-cup-desktop.jpg"
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
    controller="verein"
    id="62"
    season="2025"
    section="verein"
    style="display: block; margin: 0 5px;"></tm-subnavigation>
<div class="row">
    <div class="large-12 columns">
            <script async src="/js/custom/tm-track-links.min.js" type="module"></script>
    <div class="box">
        <h2 class="content-box-headline">
            Squad SK Slavia Prague
                    </h2>
        <div id="statistik-infoblock">
                            <p class="info-content">
                    This page displays a detailed overview of the club's current squad. It shows all personal information about the players, including age, nationality, contract duration and market value. It also contains a table with average age, cumulative market value and average market value for each player position and overall.                </p>
                            <div class="content">
                <form action="/sk-slavia-prague/kader/verein/62/plus/1/galerie/0" method="get">                    <div class="row">
                        <div class="large-12 columns">
                            <table class="auflistung">
                                <tbody>
                                <tr>
                                    <td>
                                        Filter by season                                    </td>
                                    <td>
                                        <div class="inline-select">
                                            <select name="saison_id"
                                                    data-placeholder="Filter by season"
                                                    class="chzn-select" tabindex="0">
                                                                                                    <option
                                                         selected="selected"value="2025">25/26                                                    </option>
                                                                                                    <option
                                                        value="2024">24/25                                                    </option>
                                                                                                    <option
                                                        value="2023">23/24                                                    </option>
                                                                                                    <option
                                                        value="2022">22/23                                                    </option>
                                                                                                    <option
                                                        value="2021">21/22                                                    </option>
                                                                                                    <option
                                                        value="2020">20/21                                                    </option>
                                                                                                    <option
                                                        value="2019">19/20                                                    </option>
                                                                                                    <option
                                                        value="2018">18/19                                                    </option>
                                                                                                    <option
                                                        value="2017">17/18                                                    </option>
                                                                                                    <option
                                                        value="2016">16/17                                                    </option>
                                                                                                    <option
                                                        value="2015">15/16                                                    </option>
                                                                                                    <option
                                                        value="2014">14/15                                                    </option>
                                                                                                    <option
                                                        value="2013">13/14                                                    </option>
                                                                                                    <option
                                                        value="2012">12/13                                                    </option>
                                                                                                    <option
                                                        value="2011">11/12                                                    </option>
                                                                                                    <option
                                                        value="2010">10/11                                                    </option>
                                                                                                    <option
                                                        value="2009">09/10                                                    </option>
                                                                                                    <option
                                                        value="2008">08/09                                                    </option>
                                                                                                    <option
                                                        value="2007">07/08                                                    </option>
                                                                                                    <option
                                                        value="2006">06/07                                                    </option>
                                                                                                    <option
                                                        value="2005">05/06                                                    </option>
                                                                                                    <option
                                                        value="2004">04/05                                                    </option>
                                                                                                    <option
                                                        value="2003">03/04                                                    </option>
                                                                                                    <option
                                                        value="2002">02/03                                                    </option>
                                                                                                    <option
                                                        value="2001">01/02                                                    </option>
                                                                                                    <option
                                                        value="2000">00/01                                                    </option>
                                                                                                    <option
                                                        value="1999">99/00                                                    </option>
                                                                                                    <option
                                                        value="1998">98/99                                                    </option>
                                                                                                    <option
                                                        value="1997">97/98                                                    </option>
                                                                                                    <option
                                                        value="1996">96/97                                                    </option>
                                                                                                    <option
                                                        value="1995">95/96                                                    </option>
                                                                                                    <option
                                                        value="1994">94/95                                                    </option>
                                                                                                    <option
                                                        value="1993">93/94                                                    </option>
                                                                                                    <option
                                                        value="1992">92/93                                                    </option>
                                                                                                    <option
                                                        value="1991">91/92                                                    </option>
                                                                                                    <option
                                                        value="1990">90/91                                                    </option>
                                                                                                    <option
                                                        value="1989">89/90                                                    </option>
                                                                                                    <option
                                                        value="1987">87/88                                                    </option>
                                                                                                    <option
                                                        value="1986">86/87                                                    </option>
                                                                                                    <option
                                                        value="1985">85/86                                                    </option>
                                                                                                    <option
                                                        value="1984">84/85                                                    </option>
                                                                                                    <option
                                                        value="1983">83/84                                                    </option>
                                                                                                    <option
                                                        value="1982">82/83                                                    </option>
                                                                                                    <option
                                                        value="1981">81/82                                                    </option>
                                                                                                    <option
                                                        value="1979">79/80                                                    </option>
                                                                                                    <option
                                                        value="1978">78/79                                                    </option>
                                                                                                    <option
                                                        value="1977">77/78                                                    </option>
                                                                                                    <option
                                                        value="1976">76/77                                                    </option>
                                                                                                    <option
                                                        value="1975">75/76                                                    </option>
                                                                                                    <option
                                                        value="1974">74/75                                                    </option>
                                                                                                    <option
                                                        value="1973">73/74                                                    </option>
                                                                                                    <option
                                                        value="1972">72/73                                                    </option>
                                                                                                    <option
                                                        value="1970">70/71                                                    </option>
                                                                                                    <option
                                                        value="1969">69/70                                                    </option>
                                                                                                    <option
                                                        value="1968">68/69                                                    </option>
                                                                                                    <option
                                                        value="1967">67/68                                                    </option>
                                                                                                    <option
                                                        value="1966">66/67                                                    </option>
                                                                                                    <option
                                                        value="1965">65/66                                                    </option>
                                                                                                    <option
                                                        value="1963">63/64                                                    </option>
                                                                                                    <option
                                                        value="1958">58/59                                                    </option>
                                                                                                    <option
                                                        value="1957">57/58                                                    </option>
                                                                                                    <option
                                                        value="1950">50/51                                                    </option>
                                                                                                    <option
                                                        value="1949">49/50                                                    </option>
                                                                                                    <option
                                                        value="1948">48/49                                                    </option>
                                                                                                    <option
                                                        value="1947">47/48                                                    </option>
                                                                                                    <option
                                                        value="1946">46/47                                                    </option>
                                                                                                    <option
                                                        value="1945">45/46                                                    </option>
                                                                                                    <option
                                                        value="1944">44/45                                                    </option>
                                                                                                    <option
                                                        value="1943">43/44                                                    </option>
                                                                                                    <option
                                                        value="1942">42/43                                                    </option>
                                                                                                    <option
                                                        value="1941">41/42                                                    </option>
                                                                                                    <option
                                                        value="1940">40/41                                                    </option>
                                                                                                    <option
                                                        value="1939">39/40                                                    </option>
                                                                                                    <option
                                                        value="1938">38/39                                                    </option>
                                                                                                    <option
                                                        value="1937">37/38                                                    </option>
                                                                                                    <option
                                                        value="1936">36/37                                                    </option>
                                                                                                    <option
                                                        value="1935">35/36                                                    </option>
                                                                                                    <option
                                                        value="1934">34/35                                                    </option>
                                                                                                    <option
                                                        value="1933">33/34                                                    </option>
                                                                                                    <option
                                                        value="1932">32/33                                                    </option>
                                                                                                    <option
                                                        value="1931">31/32                                                    </option>
                                                                                                    <option
                                                        value="1930">30/31                                                    </option>
                                                                                                    <option
                                                        value="1929">1929/30                                                    </option>
                                                                                                    <option
                                                        value="1928">1928/29                                                    </option>
                                                                                                    <option
                                                        value="1927">1927/28                                                    </option>
                                                                                                    <option
                                                        value="1926">1926/27                                                    </option>
                                                                                                    <option
                                                        value="1925">1925/26                                                    </option>
                                                                                                    <option
                                                        value="1924">1924/25                                                    </option>
                                                                                                    <option
                                                        value="1923">1923/24                                                    </option>
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
        
<div class="tm-tabs">
    <a class="tm-tab" href="/sk-slavia-prague/kader/verein/62/saison_id/2025"><div class=""><span>Compact</span></div></a><a class="tm-tab tm-tab__active--parent" href="/sk-slavia-prague/kader/verein/62/saison_id/2025/plus/1"><div class=" tm-tab__active"><span>Detailed</span></div></a><a class="tm-tab" href="/sk-slavia-prague/kader/verein/62/saison_id/2025/galerie/1"><div class=""><span>Gallery</span></div></a></div>
        <div class="responsive-table">
            <div id="yw1" class="grid-view">
<div class="summary"></div>
<table class="items">
<thead>
<tr>
<th class="zentriert" id="yw1_c0"><a class="sort-link asc" href="/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1/sort/trikotNumber.desc">#</a></th><th id="yw1_c1"><a class="sort-link" href="/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1/sort/name">Player</a></th><th class="zentriert" id="yw1_c2"><a class="sort-link" href="/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1/sort/dateOfBirthTimestamp">Date of birth/Age</a></th><th class="zentriert" id="yw1_c3">Nat.</th><th class="zentriert" id="yw1_c4"><a class="sort-link" href="/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1/sort/size.desc">Height</a></th><th class="zentriert" id="yw1_c5"><a class="sort-link" href="/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1/sort/foot.desc">Foot</a></th><th class="zentriert" id="yw1_c6"><a class="sort-link" href="/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1/sort/teamMemberSinceTimestamp">Joined</a></th><th class="zentriert" id="yw1_c7">Signed from</th><th class="zentriert" id="yw1_c8"><a class="sort-link" href="/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1/sort/contractEndTimestamp">Contract</a></th><th class="rechts" id="yw1_c9"><a class="sort-link desc" href="/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1/sort/marketValueRaw">Market value</a></th></tr>
</thead>
<tbody>
<tr class="odd">
<td class="zentriert rueckennummer bg_Torwart" title="Goalkeeper"><div class=rn_nummer>36</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/242089-1716965449.jpg?lm=1" title="Jindrich Stanek" alt="Jindrich Stanek" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/jindrich-stanek/profil/spieler/242089">
                Jindrich Stanek            </a>
        </td>
    </tr>
    <tr>
        <td>
            Goalkeeper        </td>
    </tr>
</table>
</td><td class="zentriert">27/04/1996 (29)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,92m</td><td class="zentriert">right</td><td class="zentriert">05/01/2024</td><td class="zentriert"><a title="FC Viktoria Plzen: Ablöse €1.00m" href="/fc-viktoria-pilsen/startseite/verein/941/saison_id/2023"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/941.png?lm=1703858693" title="FC Viktoria Plzen" alt="FC Viktoria Plzen" class="" /></a></td><td class="zentriert">30/06/2029</td><td class="rechts hauptlink"><a href="/jindrich-stanek/marktwertverlauf/spieler/242089">€3.00m</a></td></tr>
<tr class="even">
<td class="zentriert rueckennummer bg_Torwart" title="Goalkeeper"><div class=rn_nummer>35</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/486605-1605982386.png?lm=1" title="Jakub Markovic" alt="Jakub Markovic" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/jakub-markovic/profil/spieler/486605">
                Jakub Markovic            </a>
        </td>
    </tr>
    <tr>
        <td>
            Goalkeeper        </td>
    </tr>
</table>
</td><td class="zentriert">13/07/2001 (24)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,87m</td><td class="zentriert">&nbsp;</td><td class="zentriert">07/01/2025</td><td class="zentriert"><a title="FC Banik Ostrava: Ablöse €400k" href="/fc-banik-ostrau/startseite/verein/377/saison_id/2024"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/377.png?lm=1419584907" title="FC Banik Ostrava" alt="FC Banik Ostrava" class="" /></a></td><td class="zentriert">30/06/2029</td><td class="rechts hauptlink"><a href="/jakub-markovic/marktwertverlauf/spieler/486605">€1.50m</a></td></tr>
<tr class="odd">
<td class="zentriert rueckennummer bg_Torwart" title="Goalkeeper"><div class=rn_nummer>1</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/189630-1697831368.png?lm=1" title="Ondrej Kolar" alt="Ondrej Kolar" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/ondrej-kolar/profil/spieler/189630">
                Ondrej Kolar<span title="No eligibility - until 29/01/2026 - UEFA Champions League - 8 matchdays" class="ausfall-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Goalkeeper        </td>
    </tr>
</table>
</td><td class="zentriert">17/10/1994 (31)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,93m</td><td class="zentriert">right</td><td class="zentriert">22/01/2018</td><td class="zentriert"><a title="FC Slovan Liberec: Ablöse €1.00m" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2017"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/697_1717277310.png?lm=1717277311" title=": Ablöse €1.00m" alt="FC Slovan Liberec" class="" /></a></td><td class="zentriert">30/06/2027</td><td class="rechts hauptlink"><a href="/ondrej-kolar/marktwertverlauf/spieler/189630">€125k</a></td></tr>
<tr class="even">
<td class="zentriert rueckennummer bg_Abwehr" title="Defender"><div class=rn_nummer>5</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/567738-1697831979.png?lm=1" title="Igoh Ogbu" alt="Igoh Ogbu" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/igoh-ogbu/profil/spieler/567738">
                Igoh Ogbu            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Back        </td>
    </tr>
</table>
</td><td class="zentriert">08/02/2000 (25)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/124.png?lm=1520611569" title="Nigeria" alt="Nigeria" class="flaggenrahmen" /></td><td class="zentriert">1,87m</td><td class="zentriert">right</td><td class="zentriert">06/01/2023</td><td class="zentriert"><a title="Lillestrøm SK: Ablöse €2.50m" href="/lillestrom-sk/startseite/verein/353/saison_id/2022"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/353.png?lm=1420642842" title="Lillestrøm SK" alt="Lillestrøm SK" class="" /></a></td><td class="zentriert">31/12/2027</td><td class="rechts hauptlink"><a href="/igoh-ogbu/marktwertverlauf/spieler/567738">€10.00m</a></td></tr>
<tr class="odd">
<td class="zentriert rueckennummer bg_Abwehr" title="Defender"><div class=rn_nummer>4</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/544149-1663596313.jpg?lm=1" title="David Zima" alt="David Zima" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/david-zima/profil/spieler/544149">
                David Zima            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Back        </td>
    </tr>
</table>
</td><td class="zentriert">08/11/2000 (25)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,92m</td><td class="zentriert">right</td><td class="zentriert">31/01/2024</td><td class="zentriert"><a title="Torino FC: Ablöse €4.00m" href="/fc-turin/startseite/verein/416/saison_id/2023"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/416.png?lm=1438548174" title="Torino FC" alt="Torino FC" class="" /></a></td><td class="zentriert">30/06/2028</td><td class="rechts hauptlink"><a href="/david-zima/marktwertverlauf/spieler/544149">€6.00m</a></td></tr>
<tr class="even">
<td class="zentriert rueckennummer bg_Abwehr" title="Defender"><div class=rn_nummer>27</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/534568-1697831971.png?lm=1" title="Tomas Vlcek" alt="Tomas Vlcek" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/tomas-vlcek/profil/spieler/534568">
                Tomas Vlcek            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Back        </td>
    </tr>
</table>
</td><td class="zentriert">28/02/2001 (24)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,81m</td><td class="zentriert">right</td><td class="zentriert">03/08/2020</td><td class="zentriert"><a title="SK Slavia Prague B: Ablöse -" href="/sk-slavia-prag-b/startseite/verein/6541/saison_id/2020"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/62_1717406701.png?lm=1717406702" title=": Ablöse -" alt="SK Slavia Prague B" class="" /></a></td><td class="zentriert">30/06/2027</td><td class="rechts hauptlink"><a href="/tomas-vlcek/marktwertverlauf/spieler/534568">€4.00m</a></td></tr>
<tr class="odd">
<td class="zentriert rueckennummer bg_Abwehr" title="Defender"><div class=rn_nummer>2</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/944827-1701469636.png?lm=1" title="Stepan Chaloupek" alt="Stepan Chaloupek" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/stepan-chaloupek/profil/spieler/944827">
                Stepan Chaloupek<span title="Yellow card suspension - until 06/12/2025 - Chance Liga - 1 matchday" class="ausfall-1-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Back        </td>
    </tr>
</table>
</td><td class="zentriert">08/03/2003 (22)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,88m</td><td class="zentriert">right</td><td class="zentriert">01/07/2024</td><td class="zentriert"><a title="FK Teplice: Ablöse €1.00m" href="/fk-teplice/startseite/verein/814/saison_id/2024"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/814.png?lm=1692778662" title="FK Teplice" alt="FK Teplice" class="" /></a></td><td class="zentriert">30/06/2028</td><td class="rechts hauptlink"><a href="/stepan-chaloupek/marktwertverlauf/spieler/944827">€3.00m</a></td></tr>
<tr class="even">
<td class="zentriert rueckennummer bg_Abwehr" title="Defender"><div class=rn_nummer>3</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/216278-1697831325.png?lm=1" title="Tomas Holes" alt="Tomas Holes" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/tomas-holes/profil/spieler/216278">
                Tomas Holes            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Back        </td>
    </tr>
</table>
</td><td class="zentriert">31/03/1993 (32)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,80m</td><td class="zentriert">right</td><td class="zentriert">01/07/2019</td><td class="zentriert"><a title="FK Jablonec: Ablöse €1.60m" href="/fk-jablonec/startseite/verein/1322/saison_id/2019"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/1322.png?lm=1551278724" title="FK Jablonec" alt="FK Jablonec" class="" /></a></td><td class="zentriert">30/06/2027</td><td class="rechts hauptlink"><a href="/tomas-holes/marktwertverlauf/spieler/216278">€1.80m</a></td></tr>
<tr class="odd">
<td class="zentriert rueckennummer bg_Abwehr" title="Defender"><div class=rn_nummer>18</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/129655-1697831625.png?lm=1" title="Jan Boril" alt="Jan Boril" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/jan-boril/profil/spieler/129655">
                Jan Boril<span title="Team captain" class="kapitaenicon-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Back        </td>
    </tr>
</table>
</td><td class="zentriert">11/01/1991 (34)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,75m</td><td class="zentriert">right</td><td class="zentriert">07/01/2016</td><td class="zentriert"><a title="FK Mlada Boleslav: Ablöse €350k" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2015"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/5546.png?lm=1419784887" title="FK Mlada Boleslav" alt="FK Mlada Boleslav" class="" /></a></td><td class="zentriert">30/06/2026</td><td class="rechts hauptlink"><a href="/jan-boril/marktwertverlauf/spieler/129655">€250k</a></td></tr>
<tr class="even">
<td class="zentriert rueckennummer bg_Abwehr" title="Defender"><div class=rn_nummer>33</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/343558-1701972525.png?lm=1" title="Ondrej Zmrzly" alt="Ondrej Zmrzly" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/ondrej-zmrzly/profil/spieler/343558">
                Ondrej Zmrzly<span title="No eligibility - until 29/01/2026 - UEFA Champions League - 8 matchdays" class="ausfall-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Left-Back        </td>
    </tr>
</table>
</td><td class="zentriert">22/04/1999 (26)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,85m</td><td class="zentriert">&nbsp;</td><td class="zentriert">05/01/2024</td><td class="zentriert"><a title="SK Sigma Olomouc: Ablöse €1.00m" href="/sk-sigma-olmutz/startseite/verein/2311/saison_id/2023"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/2311.png?lm=1419785397" title="SK Sigma Olomouc" alt="SK Sigma Olomouc" class="" /></a></td><td class="zentriert">30/06/2027</td><td class="rechts hauptlink"><a href="/ondrej-zmrzly/marktwertverlauf/spieler/343558">€2.00m</a></td></tr>
<tr class="odd">
<td class="zentriert rueckennummer bg_Abwehr" title="Defender"><div class=rn_nummer>12</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined from FC Vysocina Jihlava; date: 20/08/2025; fee: €1.20m" href="/fc-vysocina-jihlava/startseite/verein/7975/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/kaderquad/7975.png?lm=1565421712" title="FC Vysocina Jihlava" alt="FC Vysocina Jihlava" class="" /></a></span><a title="Joined from FC Vysocina Jihlava; date: 20/08/2025; fee: €1.20m" class="hide-for-small" href="/fc-vysocina-jihlava/startseite/verein/7975/saison_id/2025"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/1422277-1761231322.jpg?lm=1" title="Youssoupha Mbodji" alt="Youssoupha Mbodji" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/youssoupha-mbodji/profil/spieler/1422277">
                Youssoupha Mbodji            </a>
        </td>
    </tr>
    <tr>
        <td>
            Left-Back        </td>
    </tr>
</table>
</td><td class="zentriert">09/01/2004 (21)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/149.png?lm=1520611569" title="Senegal" alt="Senegal" class="flaggenrahmen" /></td><td class="zentriert">1,90m</td><td class="zentriert">left</td><td class="zentriert">20/08/2025</td><td class="zentriert"><a title="FC Vysocina Jihlava: Ablöse €1.20m" href="/fc-vysocina-jihlava/startseite/verein/7975/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/7975.png?lm=1565421712" title="FC Vysocina Jihlava" alt="FC Vysocina Jihlava" class="" /></a></td><td class="zentriert">30/06/2030</td><td class="rechts hauptlink"><a href="/youssoupha-mbodji/marktwertverlauf/spieler/1422277">€1.50m</a></td></tr>
<tr class="even">
<td class="zentriert rueckennummer bg_Abwehr" title="Defender"><div class=rn_nummer>37</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined from MSK Zilina; date: 01/07/2025; fee: ?" href="/msk-zilina/startseite/verein/1443/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/kaderquad/1443.png?lm=1737557020" title="MSK Zilina" alt="MSK Zilina" class="" /></a></span><a title="Joined from MSK Zilina; date: 01/07/2025; fee: ?" class="hide-for-small" href="/msk-zilina/startseite/verein/1443/saison_id/2025"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/610608-1699980353.png?lm=1" title="Dominik Javorcek" alt="Dominik Javorcek" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/dominik-javorcek/profil/spieler/610608">
                Dominik Javorcek<span title="No eligibility - until 29/01/2026 - UEFA Champions League - 8 matchdays" class="ausfall-table icons_sprite">&nbsp;</span><span title="Knee injury - Return expected on 15/02/2026" class="verletzt-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Left-Back        </td>
    </tr>
</table>
</td><td class="zentriert">02/11/2002 (23)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/154.png?lm=1520611569" title="Slovakia" alt="Slovakia" class="flaggenrahmen" /></td><td class="zentriert">1,83m</td><td class="zentriert">left</td><td class="zentriert">01/07/2025</td><td class="zentriert"><a title="MSK Zilina: Ablöse ?" href="/msk-zilina/startseite/verein/1443/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/1443.png?lm=1737557020" title="MSK Zilina" alt="MSK Zilina" class="" /></a></td><td class="zentriert">30/06/2029</td><td class="rechts hauptlink"><a href="/dominik-javorcek/marktwertverlauf/spieler/610608">€550k</a></td></tr>
<tr class="odd">
<td class="zentriert rueckennummer bg_Abwehr" title="Defender"><div class=rn_nummer>15</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/default.jpg?lm=1" title="Emmanuel Fully" alt="Emmanuel Fully" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/emmanuel-fully/profil/spieler/1174744">
                Emmanuel Fully<span title="No eligibility - until 29/01/2026 - UEFA Champions League - 8 matchdays" class="ausfall-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Left-Back        </td>
    </tr>
</table>
</td><td class="zentriert">20/03/2006 (19)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/95.png?lm=1520611569" title="Liberia" alt="Liberia" class="flaggenrahmen" /></td><td class="zentriert">1,86m</td><td class="zentriert">left</td><td class="zentriert"></td><td class="zentriert">&nbsp;</td><td class="zentriert">30/06/2029</td><td class="rechts hauptlink"><a href="/emmanuel-fully/marktwertverlauf/spieler/1174744">€500k</a></td></tr>
<tr class="even">
<td class="zentriert rueckennummer bg_Abwehr" title="Defender"><div class=rn_nummer>8</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined from Luton Town; date: 01/07/2025; fee: ?" href="/luton-town/startseite/verein/1031/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/kaderquad/1031.png?lm=1457723228" title="Luton Town" alt="Luton Town" class="" /></a></span><a title="Joined from Luton Town; date: 01/07/2025; fee: ?" class="hide-for-small" href="/luton-town/startseite/verein/1031/saison_id/2025"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/387191-1693899437.jpg?lm=1" title="Daiki Hashioka" alt="Daiki Hashioka" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/daiki-hashioka/profil/spieler/387191">
                Daiki Hashioka            </a>
        </td>
    </tr>
    <tr>
        <td>
            Right-Back        </td>
    </tr>
</table>
</td><td class="zentriert">17/05/1999 (26)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/77.png?lm=1520611569" title="Japan" alt="Japan" class="flaggenrahmen" /></td><td class="zentriert">1,84m</td><td class="zentriert">right</td><td class="zentriert">01/07/2025</td><td class="zentriert"><a title="Luton Town: Ablöse ?" href="/luton-town/startseite/verein/1031/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/1031.png?lm=1457723228" title="Luton Town" alt="Luton Town" class="" /></a></td><td class="zentriert">30/06/2029</td><td class="rechts hauptlink"><a href="/daiki-hashioka/marktwertverlauf/spieler/387191">€1.80m</a></td></tr>
<tr class="odd">
<td class="zentriert rueckennummer bg_Mittelfeld" title="Midfield"><div class=rn_nummer>10</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="On loan from PAOK Thessaloniki until 31/12/2025" href="/paok-thessaloniki/kadernaechstesaison/verein/1091/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/kaderquad/1091.png?lm=1562577576" title="PAOK Thessaloniki" alt="PAOK Thessaloniki" class="" /></a></span><a title="On loan from PAOK Thessaloniki until 31/12/2025" class="hide-for-small" href="/paok-thessaloniki/kadernaechstesaison/verein/1091/saison_id/2025"><img src="/images/icons/leihe_beta_kader.png" width="19px" height="19px" class="wechsel-symbol" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/580978-1697832160.png?lm=1" title="Christos Zafeiris" alt="Christos Zafeiris" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/christos-zafeiris/profil/spieler/580978">
                Christos Zafeiris            </a>
        </td>
    </tr>
    <tr>
        <td>
            Central Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">23/02/2003 (22)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/56.png?lm=1520611569" title="Greece" alt="Greece" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/125.png?lm=1520611569" title="Norway" alt="Norway" class="flaggenrahmen" /></td><td class="zentriert">1,73m</td><td class="zentriert">right</td><td class="zentriert">27/08/2025</td><td class="zentriert"><a title="PAOK Thessaloniki: Ablöse free transfer" href="/paok-thessaloniki/startseite/verein/1091/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/1091.png?lm=1562577576" title="PAOK Thessaloniki" alt="PAOK Thessaloniki" class="" /></a></td><td class="zentriert">31/12/2025</td><td class="rechts hauptlink"><a href="/christos-zafeiris/marktwertverlauf/spieler/580978">€11.00m</a></td></tr>
<tr class="even">
<td class="zentriert rueckennummer bg_Mittelfeld" title="Midfield"><div class=rn_nummer>19</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/401475-1697832150.png?lm=1" title="Oscar" alt="Oscar" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/oscar/profil/spieler/401475">
                Oscar<span title="Muscle injury - Return unknown" class="verletzt-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Central Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">19/07/1998 (27)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/95.png?lm=1520611569" title="Liberia" alt="Liberia" class="flaggenrahmen" /></td><td class="zentriert">1,74m</td><td class="zentriert">left</td><td class="zentriert">11/08/2019</td><td class="zentriert"><a title="FC Slovan Liberec: Ablöse €1.00m" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2019"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/697_1717277310.png?lm=1717277311" title=": Ablöse €1.00m" alt="FC Slovan Liberec" class="" /></a></td><td class="zentriert">30/06/2027</td><td class="rechts hauptlink"><a href="/oscar/marktwertverlauf/spieler/401475">€10.00m</a></td></tr>
<tr class="odd">
<td class="zentriert rueckennummer bg_Mittelfeld" title="Midfield"><div class=rn_nummer>23</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined from Twente Enschede FC; date: 01/07/2025; fee: €3.50m" href="/twente-enschede-fc/startseite/verein/317/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/kaderquad/317.png?lm=1610789581" title="Twente Enschede FC" alt="Twente Enschede FC" class="" /></a></span><a title="Joined from Twente Enschede FC; date: 01/07/2025; fee: €3.50m" class="hide-for-small" href="/twente-enschede-fc/startseite/verein/317/saison_id/2025"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/321204-1658219516.jpg?lm=1" title="Michal Sadílek" alt="Michal Sadílek" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/michal-sadilek/profil/spieler/321204">
                Michal Sadílek            </a>
        </td>
    </tr>
    <tr>
        <td>
            Central Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">31/05/1999 (26)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,69m</td><td class="zentriert">left</td><td class="zentriert">01/07/2025</td><td class="zentriert"><a title="Twente Enschede FC: Ablöse €3.50m" href="/fc-twente-enschede/startseite/verein/317/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/317.png?lm=1610789581" title="Twente Enschede FC" alt="Twente Enschede FC" class="" /></a></td><td class="zentriert">30/06/2028</td><td class="rechts hauptlink"><a href="/michal-sadilek/marktwertverlauf/spieler/321204">€8.00m</a></td></tr>
<tr class="even">
<td class="zentriert rueckennummer bg_Mittelfeld" title="Midfield"><div class=rn_nummer>16</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/1001305-1703614604.png?lm=1" title="David Moses" alt="David Moses" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/david-moses/profil/spieler/1001305">
                David Moses            </a>
        </td>
    </tr>
    <tr>
        <td>
            Central Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">20/01/2004 (21)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/124.png?lm=1520611569" title="Nigeria" alt="Nigeria" class="flaggenrahmen" /></td><td class="zentriert">1,71m</td><td class="zentriert">&nbsp;</td><td class="zentriert">01/01/2025</td><td class="zentriert"><a title="MFK Karvina: Ablöse ?" href="/mfk-karvina/startseite/verein/13726/saison_id/2024"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/13726.png?lm=1419785681" title="MFK Karvina" alt="MFK Karvina" class="" /></a></td><td class="zentriert">30/06/2029</td><td class="rechts hauptlink"><a href="/david-moses/marktwertverlauf/spieler/1001305">€7.00m</a></td></tr>
<tr class="odd">
<td class="zentriert rueckennummer bg_Mittelfeld" title="Midfield"><div class=rn_nummer>-</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Returned after loan spell with FK Jablonec; date: 30/06/2025; fee: End of loan" href="/fk-jablonec/startseite/verein/1322/saison_id/2024"><img src="https://tmssl.akamaized.net//images/wappen/kaderquad/1322.png?lm=1551278724" title="FK Jablonec" alt="FK Jablonec" class="" /></a></span><a title="Returned after loan spell with FK Jablonec; date: 30/06/2025; fee: End of loan" class="hide-for-small" href="/fk-jablonec/startseite/verein/1322/saison_id/2024"><img src="/images/icons/rueckkehr_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/147555-1697832142.png?lm=1" title="Petr Sevcik" alt="Petr Sevcik" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/petr-sevcik/profil/spieler/147555">
                Petr Sevcik<span title="No eligibility - until 29/01/2026 - UEFA Champions League - 8 matchdays" class="ausfall-table icons_sprite">&nbsp;</span><span title="Cruciate ligament surgery - Return expected on 31/12/2025" class="verletzt-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Central Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">04/05/1994 (31)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,72m</td><td class="zentriert">right</td><td class="zentriert">01/01/2019</td><td class="zentriert"><a title="FC Slovan Liberec: Ablöse €1.00m" href="/fc-slovan-liberec/startseite/verein/697/saison_id/2018"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/697_1717277310.png?lm=1717277311" title=": Ablöse €1.00m" alt="FC Slovan Liberec" class="" /></a></td><td class="zentriert">30/06/2026</td><td class="rechts hauptlink"><a href="/petr-sevcik/marktwertverlauf/spieler/147555">€300k</a></td></tr>
<tr class="even">
<td class="zentriert rueckennummer bg_Mittelfeld" title="Midfield"><div class=rn_nummer>21</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/493758-1697831504.png?lm=1" title="David Doudera" alt="David Doudera" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/david-doudera/profil/spieler/493758">
                David Doudera            </a>
        </td>
    </tr>
    <tr>
        <td>
            Right Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">31/05/1998 (27)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,75m</td><td class="zentriert">right</td><td class="zentriert">01/07/2022</td><td class="zentriert"><a title="FK Mlada Boleslav: Ablöse €530k" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2022"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/5546.png?lm=1419784887" title="FK Mlada Boleslav" alt="FK Mlada Boleslav" class="" /></a></td><td class="zentriert">30/06/2028</td><td class="rechts hauptlink"><a href="/david-doudera/marktwertverlauf/spieler/493758">€3.00m</a></td></tr>
<tr class="odd">
<td class="zentriert rueckennummer bg_Mittelfeld" title="Midfield"><div class=rn_nummer>17</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/292779-1697832390.png?lm=1" title="Lukas Provod" alt="Lukas Provod" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/lukas-provod/profil/spieler/292779">
                Lukas Provod            </a>
        </td>
    </tr>
    <tr>
        <td>
            Attacking Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">23/10/1996 (29)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,89m</td><td class="zentriert">left</td><td class="zentriert">01/01/2020</td><td class="zentriert"><a title="FC Viktoria Plzen B: Ablöse €770k" href="/fc-viktoria-pilsen-b/startseite/verein/8751/saison_id/2019"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/8751.png?lm=1703858693" title="FC Viktoria Plzen B" alt="FC Viktoria Plzen B" class="" /></a></td><td class="zentriert">30/06/2029</td><td class="rechts hauptlink"><a href="/lukas-provod/marktwertverlauf/spieler/292779">€8.00m</a></td></tr>
<tr class="even">
<td class="zentriert rueckennummer bg_Mittelfeld" title="Midfield"><div class=rn_nummer>7</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="On loan from Trabzonspor until 30/06/2026" href="/trabzonspor/kadernaechstesaison/verein/449/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/kaderquad/449.png?lm=1759324895" title="Trabzonspor" alt="Trabzonspor" class="" /></a></span><a title="On loan from Trabzonspor until 30/06/2026" class="hide-for-small" href="/trabzonspor/kadernaechstesaison/verein/449/saison_id/2025"><img src="/images/icons/leihe_beta_kader.png" width="19px" height="19px" class="wechsel-symbol" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/422281-1756296688.png?lm=1" title="Muhammed Cham" alt="Muhammed Cham" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/muhammed-cham/profil/spieler/422281">
                Muhammed Cham            </a>
        </td>
    </tr>
    <tr>
        <td>
            Attacking Midfield        </td>
    </tr>
</table>
</td><td class="zentriert">26/09/2000 (25)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/127.png?lm=1520611569" title="Austria" alt="Austria" class="flaggenrahmen" /></td><td class="zentriert">1,80m</td><td class="zentriert">left</td><td class="zentriert">30/08/2025</td><td class="zentriert"><a title="Trabzonspor: Ablöse €600k" href="/trabzonspor/startseite/verein/449/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/449.png?lm=1759324895" title="Trabzonspor" alt="Trabzonspor" class="" /></a></td><td class="zentriert">30/06/2026</td><td class="rechts hauptlink"><a href="/muhammed-cham/marktwertverlauf/spieler/422281">€5.50m</a></td></tr>
<tr class="odd">
<td class="zentriert rueckennummer bg_Sturm" title="Attack"><div class=rn_nummer>9</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/396235-1702842518.png?lm=1" title="Vasil Kusej" alt="Vasil Kusej" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/vasil-kusej/profil/spieler/396235">
                Vasil Kusej            </a>
        </td>
    </tr>
    <tr>
        <td>
            Left Winger        </td>
    </tr>
</table>
</td><td class="zentriert">24/05/2000 (25)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,68m</td><td class="zentriert">&nbsp;</td><td class="zentriert">07/01/2025</td><td class="zentriert"><a title="FK Mlada Boleslav: Ablöse €2.50m" href="/fk-mlada-boleslav/startseite/verein/5546/saison_id/2024"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/5546.png?lm=1419784887" title="FK Mlada Boleslav" alt="FK Mlada Boleslav" class="" /></a></td><td class="zentriert">31/12/2028</td><td class="rechts hauptlink"><a href="/vasil-kusej/marktwertverlauf/spieler/396235">€6.00m</a></td></tr>
<tr class="even">
<td class="zentriert rueckennummer bg_Sturm" title="Attack"><div class=rn_nummer>11</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined from Östers IF; date: 01/07/2025; fee: €3.00m" href="/osters-if/startseite/verein/1236/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/kaderquad/1236.png?lm=1738473701" title="Östers IF" alt="Östers IF" class="" /></a></span><a title="Joined from Östers IF; date: 01/07/2025; fee: €3.00m" class="hide-for-small" href="/osters-if/startseite/verein/1236/saison_id/2025"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/1238634-1761231424.jpg?lm=1" title="Youssoupha Sanyang" alt="Youssoupha Sanyang" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/youssoupha-sanyang/profil/spieler/1238634">
                Youssoupha Sanyang            </a>
        </td>
    </tr>
    <tr>
        <td>
            Left Winger        </td>
    </tr>
</table>
</td><td class="zentriert">31/08/2005 (20)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/52.png?lm=1520611569" title="The Gambia" alt="The Gambia" class="flaggenrahmen" /><br /><img src="https://tmssl.akamaized.net//images/flagge/verysmall/149.png?lm=1520611569" title="Senegal" alt="Senegal" class="flaggenrahmen" /></td><td class="zentriert">1,75m</td><td class="zentriert">left</td><td class="zentriert">01/07/2025</td><td class="zentriert"><a title="Östers IF: Ablöse €3.00m" href="/osters-if/startseite/verein/1236/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/1236.png?lm=1738473701" title="Östers IF" alt="Östers IF" class="" /></a></td><td class="zentriert">30/06/2030</td><td class="rechts hauptlink"><a href="/youssoupha-sanyang/marktwertverlauf/spieler/1238634">€2.50m</a></td></tr>
<tr class="odd">
<td class="zentriert rueckennummer bg_Sturm" title="Attack"><div class=rn_nummer>22</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/552059-1675433912.jpg?lm=1" title="Lukas Vorlicky" alt="Lukas Vorlicky" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/lukas-vorlicky/profil/spieler/552059">
                Lukas Vorlicky<span title="No eligibility - until 29/01/2026 - UEFA Champions League - 8 matchdays" class="ausfall-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Left Winger        </td>
    </tr>
</table>
</td><td class="zentriert">18/01/2002 (23)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,86m</td><td class="zentriert">right</td><td class="zentriert">01/07/2024</td><td class="zentriert"><a title="SK Slavia Prague B: Ablöse -" href="/sk-slavia-prag-b/startseite/verein/6541/saison_id/2024"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/6541.png?lm=1659955223" title="SK Slavia Prague B" alt="SK Slavia Prague B" class="" /></a></td><td class="zentriert">30/06/2027</td><td class="rechts hauptlink"><a href="/lukas-vorlicky/marktwertverlauf/spieler/552059">€500k</a></td></tr>
<tr class="even">
<td class="zentriert rueckennummer bg_Sturm" title="Attack"><div class=rn_nummer>26</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/108416-1719927663.jpg?lm=1" title="Ivan Schranz" alt="Ivan Schranz" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/ivan-schranz/profil/spieler/108416">
                Ivan Schranz<span title="unknown injury - Return unknown" class="verletzt-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Right Winger        </td>
    </tr>
</table>
</td><td class="zentriert">13/09/1993 (32)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/154.png?lm=1520611569" title="Slovakia" alt="Slovakia" class="flaggenrahmen" /></td><td class="zentriert">1,85m</td><td class="zentriert">right</td><td class="zentriert">01/07/2021</td><td class="zentriert"><a title="FK Jablonec: Ablöse free transfer" href="/fk-jablonec/startseite/verein/1322/saison_id/2021"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/1322.png?lm=1551278724" title="FK Jablonec" alt="FK Jablonec" class="" /></a></td><td class="zentriert">30/06/2026</td><td class="rechts hauptlink"><a href="/ivan-schranz/marktwertverlauf/spieler/108416">€1.00m</a></td></tr>
<tr class="odd">
<td class="zentriert rueckennummer bg_Sturm" title="Attack"><div class=rn_nummer>-</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Returned after loan spell with FK Teplice; date: 30/06/2025; fee: End of loan" href="/fk-teplice/startseite/verein/814/saison_id/2024"><img src="https://tmssl.akamaized.net//images/wappen/kaderquad/814.png?lm=1692778662" title="FK Teplice" alt="FK Teplice" class="" /></a></span><a title="Returned after loan spell with FK Teplice; date: 30/06/2025; fee: End of loan" class="hide-for-small" href="/fk-teplice/startseite/verein/814/saison_id/2024"><img src="/images/icons/rueckkehr_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/820611-1706253978.png?lm=1" title="Filip Horsky" alt="Filip Horsky" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/filip-horsky/profil/spieler/820611">
                Filip Horsky<span title="Cruciate ligament injury - Return unknown" class="verletzt-table icons_sprite">&nbsp;</span>            </a>
        </td>
    </tr>
    <tr>
        <td>
            Right Winger        </td>
    </tr>
</table>
</td><td class="zentriert">09/05/2003 (22)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,85m</td><td class="zentriert">right</td><td class="zentriert">01/07/2023</td><td class="zentriert"><a title="SK Slavia Prague B: Ablöse -" href="/sk-slavia-prag-b/startseite/verein/6541/saison_id/2023"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/6541.png?lm=1659955223" title="SK Slavia Prague B" alt="SK Slavia Prague B" class="" /></a></td><td class="zentriert">30/06/2027</td><td class="rechts hauptlink"><a href="/filip-horsky/marktwertverlauf/spieler/820611">€250k</a></td></tr>
<tr class="even">
<td class="zentriert rueckennummer bg_Sturm" title="Attack"><div class=rn_nummer>13</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/405855-1697832425.png?lm=1" title="Mojmír Chytil" alt="Mojmír Chytil" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/mojmir-chytil/profil/spieler/405855">
                Mojmír Chytil            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Forward        </td>
    </tr>
</table>
</td><td class="zentriert">29/04/1999 (26)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,87m</td><td class="zentriert">&nbsp;</td><td class="zentriert">01/07/2023</td><td class="zentriert"><a title="SK Sigma Olomouc: Ablöse €590k" href="/sk-sigma-olmutz/startseite/verein/2311/saison_id/2023"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/2311.png?lm=1419785397" title="SK Sigma Olomouc" alt="SK Sigma Olomouc" class="" /></a></td><td class="zentriert">30/06/2027</td><td class="rechts hauptlink"><a href="/mojmir-chytil/marktwertverlauf/spieler/405855">€3.50m</a></td></tr>
<tr class="odd">
<td class="zentriert rueckennummer bg_Sturm" title="Attack"><div class=rn_nummer>25</div></td><td class="posrela">
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/198614-1515072144.jpg?lm=1" title="Tomas Chory" alt="Tomas Chory" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/tomas-chory/profil/spieler/198614">
                Tomas Chory            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Forward        </td>
    </tr>
</table>
</td><td class="zentriert">26/01/1995 (30)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/172.png?lm=1520611569" title="Czech Republic" alt="Czech Republic" class="flaggenrahmen" /></td><td class="zentriert">1,99m</td><td class="zentriert">right</td><td class="zentriert">03/07/2024</td><td class="zentriert"><a title="FC Viktoria Plzen: Ablöse €3.00m" href="/fc-viktoria-pilsen/startseite/verein/941/saison_id/2024"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/941.png?lm=1703858693" title="FC Viktoria Plzen" alt="FC Viktoria Plzen" class="" /></a></td><td class="zentriert">30/06/2027</td><td class="rechts hauptlink"><a href="/tomas-chory/marktwertverlauf/spieler/198614">€3.00m</a></td></tr>
<tr class="even">
<td class="zentriert rueckennummer bg_Sturm" title="Attack"><div class=rn_nummer>31</div></td><td class="posrela"><span class="wechsel-kader-wappen hide-for-small"><a title="Joined from FC Banik Ostrava; date: 02/09/2025; fee: ?" href="/fc-banik-ostrava/startseite/verein/377/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/kaderquad/377.png?lm=1419584907" title="FC Banik Ostrava" alt="FC Banik Ostrava" class="" /></a></span><a title="Joined from FC Banik Ostrava; date: 02/09/2025; fee: ?" class="hide-for-small" href="/fc-banik-ostrava/startseite/verein/377/saison_id/2025"><img src="/images/icons/zugang_beta_kader.png" class="wechsel-symbol" width="19px" height="19px" /></a>
<table class="inline-table">
    <tr>
        <td rowspan="2">
            <img src="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" data-src="https://img.a.transfermarkt.technology/portrait/medium/446573-1618929021.jpg?lm=1" title="Erik Prekop" alt="Erik Prekop" class="bilderrahmen-fixed lazy lazy" />        </td>
        <td class="hauptlink">
            <a href="/erik-prekop/profil/spieler/446573">
                Erik Prekop            </a>
        </td>
    </tr>
    <tr>
        <td>
            Centre-Forward        </td>
    </tr>
</table>
</td><td class="zentriert">08/10/1997 (28)</td><td class="zentriert"><img src="https://tmssl.akamaized.net//images/flagge/verysmall/154.png?lm=1520611569" title="Slovakia" alt="Slovakia" class="flaggenrahmen" /></td><td class="zentriert">1,85m</td><td class="zentriert">left</td><td class="zentriert">02/09/2025</td><td class="zentriert"><a title="FC Banik Ostrava: Ablöse ?" href="/fc-banik-ostrau/startseite/verein/377/saison_id/2025"><img src="https://tmssl.akamaized.net//images/wappen/verysmall/377.png?lm=1419584907" title="FC Banik Ostrava" alt="FC Banik Ostrava" class="" /></a></td><td class="zentriert">30/06/2028</td><td class="rechts hauptlink"><a href="/erik-prekop/marktwertverlauf/spieler/446573">€1.00m</a></td></tr>
</tbody>
</table>
<div class="keys" style="display:none" title="/warri-wolves-fc/kader/verein/62/saison_id/2025/plus/1"><span>36</span><span>35</span><span>1</span><span>5</span><span>4</span><span>27</span><span>2</span><span>3</span><span>18</span><span>33</span><span>12</span><span>37</span><span>15</span><span>8</span><span>10</span><span>19</span><span>23</span><span>16</span><span>-</span><span>21</span><span>17</span><span>7</span><span>9</span><span>11</span><span>22</span><span>26</span><span>-</span><span>13</span><span>25</span><span>31</span></div>
</div>        </div>
            </div>
        </div>
    </div>

<script async src="/js/custom/tm-track-links.min.js" type="module"></script>

<div class="ad-placement-note ad-placement-background werbung werbung-fullsize_contentad"  data-ad-placement-note="Advertisement">
  <div id="d_bottom_1" style="min-width: 1024px; min-height: 250px;">
    <script>
      googletag.cmd.push(() => {
        googletag.display("d_bottom_1");
        let has_d_bottom_1_refreshed = false;
        var observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if(entry.isIntersecting === true && !has_d_bottom_1_refreshed) {
              googletag.cmd.push(() => {
                console.info("%c [TM-ADs] IntersectionObserver renders d_bottom_1", "background: #282828; color: #bada55")
                googletag.pubads().refresh([ad_d_bottom_1]);
                has_d_bottom_1_refreshed = true;
              });
            }
          });
        }, { threshold: [0], rootMargin: "500px 0px 0px 0px" });
      observer.observe(document.querySelector("#d_bottom_1"));
      });
    </script>
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
                        <a href="/betting/"
                onclick="tmEvent('footer', 'quick_links', '/betting/')"
               class="tm-footer__link tm-footer__link--arrow"
            >
                Betting            </a>
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
                <span class="tm-footer__headline tm-footer__headline--medium">&copy; Transfermarkt <span id="currentYear">2025</span></span>
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

<tm-consent type="pubmatic" no-checkbox embed="PHNjcmlwdCB0eXBlPSd0ZXh0L2phdmFzY3JpcHQnPgogICAgICAgICAgICAgICAgICAgICAgICB2YXIgUFdUPXt9OwogICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ29vZ2xldGFnID0gZ29vZ2xldGFnIHx8IHt9OwogICAgICAgICAgICAgICAgICAgICAgICBnb29nbGV0YWcuY21kID0gZ29vZ2xldGFnLmNtZCB8fCBbXTsKICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdwdFJhbiA9IGZhbHNlOwogICAgICAgICAgICAgICAgICAgICAgICBQV1QuanNMb2FkZWQgPSAoKSA9PiB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkR1BUKCk7CiAgICAgICAgICAgICAgICAgICAgICAgIH07CiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsb2FkR1BUID0gZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdwdFJhbikgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdwdFJhbiA9IHRydWU7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdhZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXNlU1NMID0gJ2h0dHBzOicgPT0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2w7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2Fkcy5zcmMgPSAodXNlU1NMID8gJ2h0dHBzOicgOiAnaHR0cDonKSArICcvL3NlY3VyZXB1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldC90YWcvanMvZ3B0LmpzJzsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGdhZHMsIG5vZGUpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICAgICAgICAgICAgICAvLyBGYWlsc2FmZSB0byBjYWxsIGdwdAogICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGxvYWRHUFQsIDUwMCk7CgogICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9ICcvL2Fkcy5wdWJtYXRpYy5jb20vQWRTZXJ2ZXIvanMvcHd0LzE2MzIyOS8xMDEwMyc7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZmlsZVZlcnNpb25JZCA9ICcnOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocHVybC5pbmRleE9mKCdwd3R2PScpPjApewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWdleHAgPSAvcHd0dj0oLio/KSgmfCQpL2c7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IHJlZ2V4cC5leGVjKHB1cmwpOwogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobWF0Y2hlcy5sZW5ndGggPj0gMiAmJiBtYXRjaGVzWzFdLmxlbmd0aCA+IDApewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVWZXJzaW9uSWQgPSAnLycrbWF0Y2hlc1sxXTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHd0YWRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3dGFkcy5hc3luYyA9IHRydWU7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3dGFkcy50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3dGFkcy5zcmMgPSB1cmwrcHJvZmlsZVZlcnNpb25JZCsnL3B3dC5qcyc7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3RhZHMsIG5vZGUpOwogICAgICAgICAgICAgICAgICAgICAgICB9KSgpOwogICAgICAgICAgICAgICAgICAgIDwvc2NyaXB0PgogICAgICAgICAgICAgICAgICAgIA=="></tm-consent><tm-consent type="googleadvertising" no-checkbox embed="PHNjcmlwdCAgc3JjPSJodHRwczovL3NlY3VyZXB1YmFkcy5nLmRvdWJsZWNsaWNrLm5ldC90YWcvanMvZ3B0LmpzIiBhc3luYz0iYXN5bmMiPjwvc2NyaXB0Pg=="></tm-consent>
<tm-consent type="googleadvertising" no-checkbox embed="PHNjcmlwdCAgc3JjPSJodHRwczovL2MuYW1hem9uLWFkc3lzdGVtLmNvbS9hYXgyL2Fwc3RhZy5qcyIgYXN5bmM9ImFzeW5jIj48L3NjcmlwdD4="></tm-consent>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/subnavigation/bundle.js"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/assets/aa69c6e9c51f1e811847082c63633956/gridview/jquery.yiigridview.js?lm=1764863086"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/custom/vendors.min.js?lm=1764863086"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/domain-switcher/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/quick-select-bar/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/userbox/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/live-match-count/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/domain-note/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/consent/bundle.js"></script>
<script type="text/javascript" src="https://tmsi.akamaized.net/js/svelte-components/modal/bundle.js"></script>
<script type="text/javascript" src="https://tmssl.akamaized.net/js/custom/tm-skyscraper.min.js?lm=1764863086"></script>
<script type="text/javascript">
/*<![CDATA[*/
	var loginUrl='/profil/login';
	var onlyDE = '';
	var onlyMobile = '';
	var onlyTablet = '';
	var getUserID = '';

jQuery(function($) {
jQuery('#yw1').yiiGridView({'ajaxUpdate':['yw1'],'ajaxVar':'ajax','pagerClass':'pager','loadingClass':'grid\x2Dview\x2Dloading','filterClass':'filters','tableClass':'items','selectableRows':1,'enableHistory':false,'updateSelector':'\x7Bpage\x7D,\x20\x7Bsort\x7D','filterSelector':'\x7Bfilter\x7D','afterAjaxUpdate':function() {window.LazyLoadInstance.update(); tmTrackingAndAds();  trackLinks();  document.dispatchEvent(new CustomEvent("tmInitTooltip"));}});
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
      id: '242089',
      name: 'Jindrich Stanek',
      jerseyNumber: 36,
      position: SoccerBotPositionGroup.GOALKEEPER,
      birthdate: '1996-04-27',
      height: 192,
      foot: SoccerBotFoot.RIGHT,
      joined: '2024-01-05',
      contractExpires: '2029-06-30',
      marketValue: 3000000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '486605',
      name: 'Jakub Markovic',
      jerseyNumber: 35,
      position: SoccerBotPositionGroup.GOALKEEPER,
      birthdate: '2001-07-13',
      height: 187,
      joined: '2025-01-07',
      contractExpires: '2029-06-30',
      marketValue: 1500000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '189630',
      name: 'Ondrej Kolar',
      jerseyNumber: 1,
      position: SoccerBotPositionGroup.GOALKEEPER,
      birthdate: '1994-10-17',
      height: 193,
      foot: SoccerBotFoot.RIGHT,
      joined: '2018-01-22',
      contractExpires: '2027-06-30',
      marketValue: 125000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '567738',
      name: 'Igoh Ogbu',
      jerseyNumber: 5,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '2000-02-08',
      height: 187,
      foot: SoccerBotFoot.RIGHT,
      joined: '2023-01-06',
      contractExpires: '2027-12-31',
      marketValue: 10000000,
      country: {
        databaseName: 'Nigeria',
        code2: SoccerBotCountryCode2.NG,
        code3: SoccerBotCountryCode3.NGA
      }
    },
    {
      id: '544149',
      name: 'David Zima',
      jerseyNumber: 4,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '2000-11-08',
      height: 192,
      foot: SoccerBotFoot.RIGHT,
      joined: '2024-01-31',
      contractExpires: '2028-06-30',
      marketValue: 6000000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '534568',
      name: 'Tomas Vlcek',
      jerseyNumber: 27,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '2001-02-28',
      height: 181,
      foot: SoccerBotFoot.RIGHT,
      joined: '2020-08-03',
      contractExpires: '2027-06-30',
      marketValue: 4000000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '944827',
      name: 'Stepan Chaloupek',
      jerseyNumber: 2,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '2003-03-08',
      height: 188,
      foot: SoccerBotFoot.RIGHT,
      joined: '2024-07-01',
      contractExpires: '2028-06-30',
      marketValue: 3000000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '216278',
      name: 'Tomas Holes',
      jerseyNumber: 3,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '1993-03-31',
      height: 180,
      foot: SoccerBotFoot.RIGHT,
      joined: '2019-07-01',
      contractExpires: '2027-06-30',
      marketValue: 1800000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
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
      contractExpires: '2026-06-30',
      marketValue: 250000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '343558',
      name: 'Ondrej Zmrzly',
      jerseyNumber: 33,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '1999-04-22',
      height: 185,
      joined: '2024-01-05',
      contractExpires: '2027-06-30',
      marketValue: 2000000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '1422277',
      name: 'Youssoupha Mbodji',
      jerseyNumber: 12,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '2004-01-09',
      height: 190,
      foot: SoccerBotFoot.LEFT,
      joined: '2025-08-20',
      contractExpires: '2030-06-30',
      marketValue: 1500000,
      country: {
        databaseName: 'Senegal',
        code2: SoccerBotCountryCode2.SN,
        code3: SoccerBotCountryCode3.SEN
      }
    },
    {
      id: '610608',
      name: 'Dominik Javorcek',
      jerseyNumber: 37,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '2002-11-02',
      height: 183,
      foot: SoccerBotFoot.LEFT,
      joined: '2025-07-01',
      contractExpires: '2029-06-30',
      marketValue: 550000,
      country: {
        databaseName: 'Slovakia',
        code2: SoccerBotCountryCode2.SK,
        code3: SoccerBotCountryCode3.SVK
      }
    },
    {
      id: '1174744',
      name: 'Emmanuel Fully',
      jerseyNumber: 15,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '2006-03-20',
      height: 186,
      foot: SoccerBotFoot.LEFT,
      contractExpires: '2029-06-30',
      marketValue: 500000,
      country: {
        databaseName: 'Liberia',
        code2: SoccerBotCountryCode2.LR,
        code3: SoccerBotCountryCode3.LBR
      }
    },
    {
      id: '387191',
      name: 'Daiki Hashioka',
      jerseyNumber: 8,
      position: SoccerBotPositionGroup.DEFENDER,
      birthdate: '1999-05-17',
      height: 184,
      foot: SoccerBotFoot.RIGHT,
      joined: '2025-07-01',
      contractExpires: '2029-06-30',
      marketValue: 1800000,
      country: {
        databaseName: 'Japan',
        code2: SoccerBotCountryCode2.JP,
        code3: SoccerBotCountryCode3.JPN
      }
    },
    {
      id: '580978',
      name: 'Christos Zafeiris',
      jerseyNumber: 10,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '2003-02-23',
      height: 173,
      foot: SoccerBotFoot.RIGHT,
      joined: '2025-08-27',
      contractExpires: '2025-12-31',
      marketValue: 11000000,
      country: {
        databaseName: 'Greece',
        code2: SoccerBotCountryCode2.GR,
        code3: SoccerBotCountryCode3.GRC
      }
    },
    {
      id: '401475',
      name: 'Oscar',
      jerseyNumber: 19,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1998-07-19',
      height: 174,
      foot: SoccerBotFoot.LEFT,
      joined: '2019-08-11',
      contractExpires: '2027-06-30',
      marketValue: 10000000,
      country: {
        databaseName: 'Liberia',
        code2: SoccerBotCountryCode2.LR,
        code3: SoccerBotCountryCode3.LBR
      }
    },
    {
      id: '321204',
      name: 'Michal Sadílek',
      jerseyNumber: 23,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1999-05-31',
      height: 169,
      foot: SoccerBotFoot.LEFT,
      joined: '2025-07-01',
      contractExpires: '2028-06-30',
      marketValue: 8000000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '1001305',
      name: 'David Moses',
      jerseyNumber: 16,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '2004-01-20',
      height: 171,
      joined: '2025-01-01',
      contractExpires: '2029-06-30',
      marketValue: 7000000,
      country: {
        databaseName: 'Nigeria',
        code2: SoccerBotCountryCode2.NG,
        code3: SoccerBotCountryCode3.NGA
      }
    },
    {
      id: '147555',
      name: 'Petr Sevcik',
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1994-05-04',
      height: 172,
      foot: SoccerBotFoot.RIGHT,
      joined: '2019-01-01',
      contractExpires: '2026-06-30',
      marketValue: 300000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '493758',
      name: 'David Doudera',
      jerseyNumber: 21,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1998-05-31',
      height: 175,
      foot: SoccerBotFoot.RIGHT,
      joined: '2022-07-01',
      contractExpires: '2028-06-30',
      marketValue: 3000000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '292779',
      name: 'Lukas Provod',
      jerseyNumber: 17,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '1996-10-23',
      height: 189,
      foot: SoccerBotFoot.LEFT,
      joined: '2020-01-01',
      contractExpires: '2029-06-30',
      marketValue: 8000000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '422281',
      name: 'Muhammed Cham',
      jerseyNumber: 7,
      position: SoccerBotPositionGroup.MIDFIELDER,
      birthdate: '2000-09-26',
      height: 180,
      foot: SoccerBotFoot.LEFT,
      joined: '2025-08-30',
      contractExpires: '2026-06-30',
      marketValue: 5500000,
      country: {
        databaseName: 'Austria',
        code2: SoccerBotCountryCode2.AT,
        code3: SoccerBotCountryCode3.AUT
      }
    },
    {
      id: '396235',
      name: 'Vasil Kusej',
      jerseyNumber: 9,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '2000-05-24',
      height: 168,
      joined: '2025-01-07',
      contractExpires: '2028-12-31',
      marketValue: 6000000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '1238634',
      name: 'Youssoupha Sanyang',
      jerseyNumber: 11,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '2005-08-31',
      height: 175,
      foot: SoccerBotFoot.LEFT,
      joined: '2025-07-01',
      contractExpires: '2030-06-30',
      marketValue: 2500000,
      country: {
        databaseName: 'Gambia',
        code2: SoccerBotCountryCode2.GM,
        code3: SoccerBotCountryCode3.GMB
      }
    },
    {
      id: '552059',
      name: 'Lukas Vorlicky',
      jerseyNumber: 22,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '2002-01-18',
      height: 186,
      foot: SoccerBotFoot.RIGHT,
      joined: '2024-07-01',
      contractExpires: '2027-06-30',
      marketValue: 500000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
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
      contractExpires: '2026-06-30',
      marketValue: 1000000,
      country: {
        databaseName: 'Slovakia',
        code2: SoccerBotCountryCode2.SK,
        code3: SoccerBotCountryCode3.SVK
      }
    },
    {
      id: '820611',
      name: 'Filip Horsky',
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '2003-05-09',
      height: 185,
      foot: SoccerBotFoot.RIGHT,
      joined: '2023-07-01',
      contractExpires: '2027-06-30',
      marketValue: 250000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '405855',
      name: 'Mojmír Chytil',
      jerseyNumber: 13,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '1999-04-29',
      height: 187,
      joined: '2023-07-01',
      contractExpires: '2027-06-30',
      marketValue: 3500000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '198614',
      name: 'Tomas Chory',
      jerseyNumber: 25,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '1995-01-26',
      height: 199,
      foot: SoccerBotFoot.RIGHT,
      joined: '2024-07-03',
      contractExpires: '2027-06-30',
      marketValue: 3000000,
      country: {
        databaseName: 'Czech Republic',
        code2: SoccerBotCountryCode2.CZ,
        code3: SoccerBotCountryCode3.CZE
      }
    },
    {
      id: '446573',
      name: 'Erik Prekop',
      jerseyNumber: 31,
      position: SoccerBotPositionGroup.ATTACKER,
      birthdate: '1997-10-08',
      height: 185,
      foot: SoccerBotFoot.LEFT,
      joined: '2025-09-02',
      contractExpires: '2028-06-30',
      marketValue: 1000000,
      country: {
        databaseName: 'Slovakia',
        code2: SoccerBotCountryCode2.SK,
        code3: SoccerBotCountryCode3.SVK
      }
    }
  ]
};
