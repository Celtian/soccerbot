import { SoccerBotResponse, SoccerBotTeam } from '../../../src/shared/interfaces';

export const LEAGUE_HTML = `

<!DOCTYPE html>
<html lang="en">
<head>
                        <!-- Google tag - web (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-E3L03BVYXZ"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-E3L03BVYXZ');
            </script>
            
    <meta charset="utf-8">
                            
    <title>Aktuální tabulky Divize A, 2024-2025  | fotbalunas.cz</title>
    <meta name="description" content="FOTBALUNAS.CZ - fotky, tipování, hodnocení, komentáře a mnoho dalšího na nejčtenějším místě českého internetu o amatérském fotbalu."/>
    <meta property="og:title" content="Aktuální tabulky Divize A, 2024-2025   |  fotbalunas.cz" />
    <meta property="og:type" content="website" />

    
            <meta property="og:image" content="https://www.fotbalunas.cz/build/images/fb-logo.png" />
        <meta property="og:image:width" content="635" />
        <meta property="og:image:height" content="353" />
        <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta name="facebook-domain-verification" content="3gptai48cymn28phzcb28aqw2zvn45" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/postscribe/2.0.6/postscribe.min.js"></script>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="/build/241.069aa3e8.css"><link rel="stylesheet" href="/build/134.c5a577bc.css"><link rel="stylesheet" href="/build/app_responsive.9e823bf4.css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet">
    
            <script src="/build/runtime.b3205f0c.js" defer></script><script src="/build/384.4f44e064.js" defer></script><script src="/build/383.913960c0.js" defer></script><script src="/build/349.73226630.js" defer></script><script src="/build/509.65354ee3.js" defer></script><script src="/build/134.730dcf18.js" defer></script><script src="/build/app_responsive.d7866d71.js" defer></script>
    
    <script>
        var googletag = googletag || {};
        googletag.cmd = googletag.cmd || [];
        var isMobileLoaded = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
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
            <img height="1" width="1" src="https://www.facebook.com/tr?id=548604218816887&ev=PageView&noscript=1"/>
        </noscript>
        <!-- End Facebook Pixel Code -->
    
    
                                    

            <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments);},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m);
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-61729515-1', 'auto');
            ga('send', 'pageview');
        </script>
    
                <script async='async' src='https://www.googletagservices.com/tag/js/gpt.js'></script>
    <script type='text/javascript'>
        if (isMobileLoaded === false) {
            googletag.cmd.push(function () {
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
                                googletag.pubads().setTargeting("url", "tabulky/soutez/31");
                                googletag.pubads().collapseEmptyDivs();
                googletag.enableServices();
            });
        }
    </script>
<script>
    if (isMobileLoaded) {
        googletag.cmd.push(function () {
            googletag.defineOutOfPageSlot('/16240546/v08_m00', 'div-gpt-ad-1710894922492-0').addService(googletag.pubads());
            googletag.defineSlot('/16240546/v08_m01', [[300, 250], [300, 300], [480, 320], [480, 480]], 'div-gpt-ad-1710894398744-0').addService(googletag.pubads());
            googletag.defineSlot('/16240546/v08_m04', [[300, 250], [300, 300], [480, 320], [480, 480]], 'div-gpt-ad-1710895093149-0').addService(googletag.pubads());
            googletag.defineSlot('/16240546/v08_m05', [[300, 250], [300, 300], [480, 320], [480, 480]], 'div-gpt-ad-1710895264860-0').addService(googletag.pubads());
            googletag.defineSlot('/16240546/v08_m06', [[300, 250], [300, 300], [480, 320], [480, 480]], 'div-gpt-ad-1710896817282-0').addService(googletag.pubads());
            googletag.defineSlot('/16240546/v08_m07', [[480, 320], [300, 250], [480, 480], [300, 300]], 'div-gpt-ad-1710927467465-0').addService(googletag.pubads());
            googletag.pubads().enableSingleRequest();
            googletag.pubads().setTargeting("url", "tabulky/soutez/31");
            googletag.pubads().collapseEmptyDivs();
            googletag.enableServices();
        });
    }
</script>
<!-- Ads blocker warning -->
<script async src="https://fundingchoicesmessages.google.com/i/pub-4972628753481982?ers=1" nonce="YBFWEZcmGWp05T4nTL4zOA"></script><script nonce="YBFWEZcmGWp05T4nTL4zOA">(function() {function signalGooglefcPresent() {if (!window.frames['googlefcPresent']) {if (document.body) {const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe);} else {setTimeout(signalGooglefcPresent, 0);}}}signalGooglefcPresent();})();</script>
<!-- End Ads blocker warning -->
    
</head>
<body >

<div class="d-none d-md-block">
    <script>
        if (isMobileLoaded === false) {
            document.write("<div class='skin' id='skin' style='margin:0 auto;width:1000px;'>"
                + "<div class='fotbalunas-skin-wrap' id='fotbalunas-skin-wrap' style='margin:0 auto; width:1000px;'>"
                + "<table id='' align='center' style='margin:0 auto;'>"
                + "<tr><td id='leader-creative-content' style='height:210px;'></td></tr>"
                + "</table>"
                + "</div>"
                + "</div>");
        }
    </script>
    <div id='adw_branding_skin' style='margin: auto; width: 1000px; height:0px; position: relative;'>
        <script>
            if (isMobileLoaded === false) {
                googletag.cmd.push(function () {
                    googletag.display('adw_branding_skin');
                });
            }
        </script>
    </div>
</div>
<div class="d-block d-md-none d-flex justify-content-center mobile-ads mobile-ads-no-margin">
    <!-- /16240546/v08_m00 -->
    <div id='div-gpt-ad-1710894922492-0'>
        <script>
            if (isMobileLoaded) {
                googletag.cmd.push(function () {
                    googletag.display('div-gpt-ad-1710894922492-0');
                });
            }
        </script>
    </div>
</div>

            <div class="row g-0">
            <div class="col-12">
                <div class="d-block d-md-none d-flex justify-content-center mobile-ads mobile-ads-no-margin mobile-ads-top">
    <!-- /16240546/v08_m01 -->
    <div id='div-gpt-ad-1710894398744-0' class="mobile-ads-300-250">
        <script>
            if (isMobileLoaded) {
                googletag.cmd.push(function () {
                    googletag.display('div-gpt-ad-1710894398744-0');
                });
            }
        </script>
    </div>
</div>
            </div>
        </div>
    
                        <div class="d-block d-md-none mobile-nav-sticky sticky-top">
                <div class="mobile-nav">
                    <ul class="nav header-nav flex-nowrap">
                        <li class="nav-item">
                            <a href="/clanky/celostatni/" class="nav-link text-nowrap" title="Celostátní články - výběr nejzajímavějších událostí, které přesahují jednotlivé soutěže a regiony">Články</a>
                        </li>
                                                                                                                                                            <li class="nav-item">
                            <a href="/tip-liga/?soutez=31" class="nav-link text-nowrap" title="Interaktivní přehled - tipujte na výsledky fotbalových utkání z libovolné soutěže napříč celou ČR">TIP liga</a>
                        </li>
                        <li class="nav-item">
                            <a href="/diskuze/?soutez=31" class="nav-link text-nowrap" title="Přehled všech diskuzí z celé ČR - vyjádřete svůj názor, hodnoťte hráče, rozhodčí, zázemí, ... na fotbalunas.cz!">Diskuze</a>
                        </li>
                        <li class="nav-item">
                            <a href="/online?soutez=31" class="nav-link text-nowrap">Online</a>
                        </li>
                                            </ul>
                </div>
            </div>
            
    <div class="content-block">

<div class="container container-shaddow">
    <div class="container-box">

        <header>
        <div class="d-none d-md-block">
    <div class="row">
        <div class="col-md-1 col-2">
            <a href="/" class="navbar-brand">
                <img src="/build/images/fotbalunas-logo-jednobarevne-png24.png" alt="Fotbalunas.cz" style="width: 94px; max-width: 94px !important;" />
            </a>
        </div>
        <div class="col-md-11 col-10">
            <div class="row">
                <div class="col-12 text-end">
                    <div class="header-social text-end mt-1 mb-3 d-flex align-items-start justify-content-end">
                        <a href="https://www.instagram.com/fotbalunas/" class="novinka-1 mt-2"><img src="/build/images/sleduj-nas-do-hlavicky4.png" alt="Sleduj fotbalunas.cz"></a>
                        <a class="s-f-logo ms-2" target="_blank" href="https://www.facebook.com/fotbalunas"><img src="/build/images/f.png" /></a>
                        <a class="s-i-logo ms-2" target="_blank" href="https://www.instagram.com/fotbalunas"><img src="/build/images/i.png" /></a>
                        <a class="s-t-logo ms-2" target="_blank" href="https://www.twitter.com/fotbalunas"><img src="/build/images/t.png" /></a>
                        <a class="s-y-logo ms-2" target="_blank" href="https://www.youtube.com/channel/UCFU6cBXYYSGiK_NjbIGVSAw"><img src="/build/images/y.png" /></a>
                    </div>
                </div>
                <div class="col-12">
                    <div class="row">
                        <div class="col-md-12 col-12">
                            <div class="d-flex justify-content-end float-end">
                                <div class="d-none d-md-block">
    <div class="registrovana-sekce-bar mb-2">
                    <a class="btn btn-default btn-warning btn-sm sync" href="/registrovana-sekce/" title="Registrovaná sekce"><i class="fa fa-user"></i> Přihlásit - <strong>Staň se součástí komunity</strong></a>
            </div>
    <div class="clear"></div>
</div>
                                <div class="search-icon-toggle btn btn-sm btn-outline-secondary ms-2 pe-3 ps-3" data-bs-toggle="collapse" aria-expanded="false" aria-controls="searchForm" data-toggle-on-click="#searchForm">
                                    <i class="fa fa-search"></i>
                                </div>
                                <div class="form-group search-form position-absolute mt-4 z-3 collapse" id="searchForm" role="search">
                                    <form role="search" id="search" action="/hledat/" method="get">
                                        <input type="search" name="s" class="form-control" placeholder="Vyhledávání..." value="" />
                                        <button class="btn btn-default" type="submit" alt="Odeslat"><span class="fa fa-search white"></span></button>
                                    </form>
                                </div>
                            </div>

                                                        <ul class="nav header-nav ps-3">
                                <li class="nav-item">
                                    <a href="/clanky/celostatni/" class="nav-link ps-2 pe-2" title="Celostátní články - výběr nejzajímavějších událostí, které přesahují jednotlivé soutěže a regiony">Články</a>
                                </li>
                                                                                                                                                                                                            <li class="nav-item">
                                    <a href="/tip-liga/?soutez=31" class="nav-link ps-2 pe-2" title="Interaktivní přehled - tipujte na výsledky fotbalových utkání z libovolné soutěže napříč celou ČR">TIP liga</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/diskuze/?soutez=31" class="nav-link ps-2 pe-2" title="Přehled všech diskuzí z celé ČR - vyjádřete svůj názor, hodnoťte hráče, rozhodčí, zázemí, ... na fotbalunas.cz!">Diskuze</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/online?soutez=31" class="nav-link ps-2 pe-2">Online</a>
                                </li>
                                                            </ul>
                                                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="d-block d-md-none header-mobile fixed-top vw-100">
    <div class="row g-0">
        <div class="col-3">
            <a href="/" class="navbar-brand">
                <img src="/build/images/fotbalunas-logo-jednobarevne-png24.png" alt="Fotbalunas.cz" />
            </a>
        </div>
        <div class="col-9 text-end d-flex align-items-center justify-content-end header-icons">
            <a href="/registrovana-sekce/" title="Registrovaná sekce" class="btn btn-default"><i class="fa fa-user"></i></a>
            <a href="javascript: return;" class="search-icon-toggle btn btn-default" data-bs-toggle="collapse" aria-expanded="false" aria-controls="searchFormMobile" data-toggle-on-click="#searchFormMobile">
                <i class="fa fa-search"></i>
            </a>
            <a href="javascript: return;" class="search-icon-toggle btn btn-default" data-bs-toggle="collapse" aria-expanded="false" aria-controls="navigationForMobile" data-toggle-on-click="#navigationForMobile">
                <i class="fa fa-bars"></i>
            </a>
        </div>
    </div>
    <div class="search-form header-search-form collapse" id="searchFormMobile" role="search">
        <form role="search" id="search" action="/hledat/" method="get">
            <div class="input-group">
                <input type="search" name="s" class="form-control" placeholder="Vyhledávání..." value="" />
                <button class="btn btn-default" type="submit" alt="Odeslat"><span class="fa fa-arrow-right"></span></button>
            </div>
        </form>
    </div>
    <div class="header-mobile-menu collapse" id="navigationForMobile" role="navigation">
        <div class="mobile-menu-social">
            Sledujte nás: &nbsp;
            <a target="_blank" href="https://www.facebook.com/fotbalunas" class="badge">Facebook</a>
            <a target="_blank" href="https://www.instagram.com/fotbalunas" class="badge">Instagram</a>
            <a target="_blank" href="https://www.twitter.com/fotbalunas" class="badge">Twitter</a>
            <a target="_blank" href="https://www.youtube.com/channel/UCFU6cBXYYSGiK_NjbIGVSAw" class="badge">YouTube</a>
        </div>
        <div class="mobile-menu-separator"></div>
        <ul class="row nav g-0">
            <li class="nav-item col-6">
                <a href="/clanky/celostatni/" class="nav-link" title="Celostátní články - výběr nejzajímavějších událostí, které přesahují jednotlivé soutěže a regiony">Články</a>
            </li>
                                                                    <li class="nav-item col-6">
                <a href="/tip-liga/?soutez=31" class="nav-link" title="Interaktivní přehled - tipujte na výsledky fotbalových utkání z libovolné soutěže napříč celou ČR">TIP liga</a>
            </li>
            <li class="nav-item col-6">
                <a href="/diskuze/?soutez=31" class="nav-link" title="Přehled všech diskuzí z celé ČR - vyjádřete svůj názor, hodnoťte hráče, rozhodčí, zázemí, ... na fotbalunas.cz!">Diskuze</a>
            </li>
                    </ul>
        <div class="mobile-menu-separator"></div>
        <ul class="row nav g-0">
                        <li class="nav-item col-6"><a href="/prehled/prazsky/" class="nav-link">Pražský</a></li>
                        <li class="nav-item col-6"><a href="/prehled/stredocesky/" class="nav-link">Středočeský</a></li>
                        <li class="nav-item col-6"><a href="/prehled/jihocesky/" class="nav-link">Jihočeský</a></li>
                        <li class="nav-item col-6"><a href="/prehled/plzensky/" class="nav-link">Plzeňský</a></li>
                        <li class="nav-item col-6"><a href="/prehled/karlovarsky/" class="nav-link">Karlovarský</a></li>
                        <li class="nav-item col-6"><a href="/prehled/ustecky/" class="nav-link">Ústecký</a></li>
                        <li class="nav-item col-6"><a href="/prehled/liberecky/" class="nav-link">Liberecký</a></li>
                        <li class="nav-item col-6"><a href="/prehled/kralovehradecky/" class="nav-link">Královéhradecký</a></li>
                        <li class="nav-item col-6"><a href="/prehled/pardubicky/" class="nav-link">Pardubický</a></li>
                        <li class="nav-item col-6"><a href="/prehled/vysocina/" class="nav-link">Vysočina</a></li>
                        <li class="nav-item col-6"><a href="/prehled/jihomoravsky/" class="nav-link">Jihomoravský</a></li>
                        <li class="nav-item col-6"><a href="/prehled/olomoucky/" class="nav-link">Olomoucký</a></li>
                        <li class="nav-item col-6"><a href="/prehled/zlinsky/" class="nav-link">Zlínský</a></li>
                        <li class="nav-item col-6"><a href="/prehled/moravskoslezsky/" class="nav-link">Moravskoslezský</a></li>
                        <li class="nav-item col-6"><a href="/prehled/esport/" class="nav-link">eSport</a></li>
                        <li class="nav-item col-6"><a href="/prehled/UFoL/" class="nav-link">Univerzitní fotbalová liga</a></li>
                    </ul>
        <div class="mobile-menu-separator"></div>
        <ul class="row nav g-0">
            <li class="nav-item col-6"><a href="/o-projektu/" class="nav-link">O projektu</a></li>
            <li class="nav-item col-6"><a href="/kariera/" class="nav-link">Kariéra</a></li>
            <li class="nav-item col-6"><a href="/reklama/" class="nav-link">Reklama</a></li>
            <li class="nav-item col-6"><a href="/kontakt/" class="nav-link">Kontakty</a></li>
        </ul>
        <div class="mobile-menu-separator"></div>
        <div class="p-3 text-end">
            <a href="javascript: return;" data-bs-toggle="collapse" aria-expanded="false" aria-controls="navigationForMobile" data-toggle-on-click="#navigationForMobile">
                <i class="fa fa-times me-1"></i> ZAVŘÍT
            </a>
        </div>
    </div>
</div>
    </header>
                        <div class="d-none d-md-block" >
        <div class="nav-secondary secondary-menu">
            <ul class="nav">
                <li class="nav-item">
                    <a href="/soutez/31/" class="nav-link text-nowrap">Soutěž</a>
                </li>
                <li class="nav-item">
                    <a href="/rozlosovani/soutez/31" class="nav-link text-nowrap">Rozlosování</a>
                </li>
                <li class="nav-item">
                    <a href="/aktualni-vysledky/soutez/31/" class="nav-link text-nowrap">Aktuální kolo</a>
                </li>
                <li class="nav-item">
                    <a href="/tabulky/soutez/31" class="nav-link text-nowrap">Tabulka</a>
                </li>
                <li class="nav-item">
                    <a href="/statistiky/soutez/31" class="nav-link text-nowrap">Hráčské statistiky</a>
                </li>
                <li class="nav-item">
                    <a href="/expert-tipy/soutez/31/" class="nav-link text-nowrap">Expert tipy</a>
                </li>
                <li class="nav-item">
                    <a href="/sestavy-kola/soutez/31/" class="nav-link text-nowrap">Sestavy kola</a>
                </li>
                <li class="nav-item">
                    <a href="/hraci-kola/soutez/31/" class="nav-link text-nowrap">Hráči kola</a>
                </li>
                <li class="nav-item">
                    <a href="/rozhovory/soutez/31/" class="nav-link text-nowrap">Rozhovory</a>
                </li>
                <li class="nav-item">
                    <a href="/soutez/31/diskuze/" class="nav-link text-nowrap">Diskuze k souteži</a>
                </li>
            </ul>
        </div>
        <div class="header-breadcrumb mt-2 mb-2">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item ms-auto">
                        <a href="/">fotbalunas.cz</a>
                    </li>
                                                            <li class="breadcrumb-item active" aria-current="page">
                        <a href="/soutez/31/">
                            Divize
                                                            sk. A
                                                    </a>
                    </li>
                </ol>
            </nav>
        </div>
    </div>

    <div class="d-block d-md-none" >
        <div class="mobile-subnav nav-secondary">
            <ul class="nav header-subnav flex-nowrap">
                <li class="nav-item">
                    <a href="/soutez/31/" class="nav-link text-nowrap">Soutěž</a>
                </li>
                <li class="nav-item">
                    <a href="/rozlosovani/soutez/31" class="nav-link text-nowrap">Rozlosování</a>
                </li>
                <li class="nav-item">
                    <a href="/aktualni-vysledky/soutez/31/" class="nav-link text-nowrap">Aktuální kolo</a>
                </li>
                <li class="nav-item">
                    <a href="/tabulky/soutez/31" class="nav-link text-nowrap">Tabulka</a>
                </li>
                <li class="nav-item">
                    <a href="/statistiky/soutez/31" class="nav-link text-nowrap">Hráčské statistiky</a>
                </li>
                <li class="nav-item">
                    <a href="/expert-tipy/soutez/31/" class="nav-link text-nowrap">Expert tipy</a>
                </li>
                <li class="nav-item">
                    <a href="/sestavy-kola/soutez/31/" class="nav-link text-nowrap">Sestavy kola</a>
                </li>
                <li class="nav-item">
                    <a href="/hraci-kola/soutez/31/" class="nav-link text-nowrap">Hráči kola</a>
                </li>
                <li class="nav-item">
                    <a href="/rozhovory/soutez/31/" class="nav-link text-nowrap">Rozhovory</a>
                </li>
                <li class="nav-item">
                    <a href="/soutez/31/diskuze/" class="nav-link text-nowrap">Diskuze k souteži</a>
                </li>
            </ul>
        </div>
        <div class="header-breadcrumb p-2">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb m-0">
                    <li class="breadcrumb-item">
                        <a href="/">fotbalunas.cz</a>
                    </li>
                                                            <li class="breadcrumb-item active" aria-current="page">
                        <a href="/soutez/31/">
                            Divize
                                                            sk. A
                                                    </a>
                    </li>
                </ol>
            </nav>
        </div>
    </div>

    
    <section class="content">
            <div class="content-block">
        <h1>Divize A</h1>
    </div>

    <div class="d-none d-md-block pt-3 pb-3">
	<div id="fultop-1000-100" class="rtb height-90">
		<div id='adw_midboard'>
			<script>
				if (isMobileLoaded === false) {
					googletag.cmd.push(function () {
						googletag.display('adw_midboard');
					});
				}
			</script>
		</div>
	</div>
</div>

    <div class="row g-0 g-md-4">
        <div class="col-md-8 col-12">
            <div class="content-block">
                                <div class="d-flex justify-content-between mb-4 align-items-center">
                    <h2 class="p-0">2024-2025</h2>
                    <div class="dropdown">
                        <button type="button" class="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown" href="#">
                            Výběr sezóny
                        </button>
                        <div class="dropdown-menu">
                                                            <a class="dropdown-item active" href="/tabulky/soutez/31/2024-2025">2024-2025</a>
                                                            <a class="dropdown-item " href="/tabulky/soutez/31/2023-2024">2023-2024</a>
                                                            <a class="dropdown-item " href="/tabulky/soutez/31/2022-2023">2022-2023</a>
                                                            <a class="dropdown-item " href="/tabulky/soutez/31/2021-2022">2021-2022</a>
                                                            <a class="dropdown-item " href="/tabulky/soutez/31/2020-2021">2020-2021</a>
                                                            <a class="dropdown-item " href="/tabulky/soutez/31/2019-2020">2019-2020</a>
                                                            <a class="dropdown-item " href="/tabulky/soutez/31/2018-2019">2018-2019</a>
                                                            <a class="dropdown-item " href="/tabulky/soutez/31/2017-2018">2017-2018</a>
                                                            <a class="dropdown-item " href="/tabulky/soutez/31/2016-2017">2016-2017</a>
                                                            <a class="dropdown-item " href="/tabulky/soutez/31/2015-2016">2015-2016</a>
                                                            <a class="dropdown-item " href="/tabulky/soutez/31/2014-2015">2014-2015</a>
                                                    </div>
                    </div>
                </div>

                    <div class="table-responsive">
        <table class="table table-striped table-hover table-condensed table-responsive table-widget">
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
                        <td><a href="/tym/57">SK Aritma Praha</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">26</td>
                        <td class="text-center">3</td>
                        <td class="text-center">1</td>
                        <td class="text-center">78:20</td>
                        <td class="text-center">81</td>
                        <td class="text-center">0</td>
                    </tr>
                                    <tr>
                        <td class="text-center">2</td>
                        <td><a href="/tym/50">FK Králův Dvůr</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">24</td>
                        <td class="text-center">2</td>
                        <td class="text-center">4</td>
                        <td class="text-center">93:22</td>
                        <td class="text-center">74</td>
                        <td class="text-center">0</td>
                    </tr>
                                    <tr>
                        <td class="text-center">3</td>
                        <td><a href="/tym/834">FK Komárov</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">18</td>
                        <td class="text-center">6</td>
                        <td class="text-center">6</td>
                        <td class="text-center">68:36</td>
                        <td class="text-center">60</td>
                        <td class="text-center">0</td>
                    </tr>
                                    <tr>
                        <td class="text-center">4</td>
                        <td><a href="/tym/1210">TJ Ligmet Milín</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">16</td>
                        <td class="text-center">5</td>
                        <td class="text-center">9</td>
                        <td class="text-center">53:35</td>
                        <td class="text-center">53</td>
                        <td class="text-center">0</td>
                    </tr>
                                    <tr>
                        <td class="text-center">5</td>
                        <td><a href="/tym/224">FK Spartak Soběslav</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">16</td>
                        <td class="text-center">4</td>
                        <td class="text-center">10</td>
                        <td class="text-center">59:44</td>
                        <td class="text-center">52</td>
                        <td class="text-center">0</td>
                    </tr>
                                    <tr>
                        <td class="text-center">6</td>
                        <td><a href="/tym/63">FK Slavoj Český Krumlov</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">12</td>
                        <td class="text-center">7</td>
                        <td class="text-center">11</td>
                        <td class="text-center">52:48</td>
                        <td class="text-center">43</td>
                        <td class="text-center">0</td>
                    </tr>
                                    <tr>
                        <td class="text-center">7</td>
                        <td><a href="/tym/220">TJ Hluboká nad Vltavou</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">11</td>
                        <td class="text-center">7</td>
                        <td class="text-center">12</td>
                        <td class="text-center">37:38</td>
                        <td class="text-center">40</td>
                        <td class="text-center">0</td>
                    </tr>
                                    <tr>
                        <td class="text-center">8</td>
                        <td><a href="/tym/55">SK Hořovice</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">12</td>
                        <td class="text-center">4</td>
                        <td class="text-center">14</td>
                        <td class="text-center">41:49</td>
                        <td class="text-center">40</td>
                        <td class="text-center">0</td>
                    </tr>
                                    <tr>
                        <td class="text-center">9</td>
                        <td><a href="/tym/4938">FK Příbram B</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">10</td>
                        <td class="text-center">9</td>
                        <td class="text-center">11</td>
                        <td class="text-center">52:50</td>
                        <td class="text-center">39</td>
                        <td class="text-center">0</td>
                    </tr>
                                    <tr>
                        <td class="text-center">10</td>
                        <td><a href="/tym/69">FC Rokycany</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">10</td>
                        <td class="text-center">6</td>
                        <td class="text-center">14</td>
                        <td class="text-center">36:51</td>
                        <td class="text-center">36</td>
                        <td class="text-center">0</td>
                    </tr>
                                    <tr>
                        <td class="text-center">11</td>
                        <td><a href="/tym/59">SK Senco Doubravka</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">9</td>
                        <td class="text-center">8</td>
                        <td class="text-center">13</td>
                        <td class="text-center">57:62</td>
                        <td class="text-center">35</td>
                        <td class="text-center">0</td>
                    </tr>
                                    <tr>
                        <td class="text-center">12</td>
                        <td><a href="/tym/5205">TJ Přeštice</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">9</td>
                        <td class="text-center">5</td>
                        <td class="text-center">16</td>
                        <td class="text-center">47:62</td>
                        <td class="text-center">32</td>
                        <td class="text-center">0</td>
                    </tr>
                                    <tr>
                        <td class="text-center">13</td>
                        <td><a href="/tym/3714">SK Petřín Plzeň B</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">8</td>
                        <td class="text-center">6</td>
                        <td class="text-center">16</td>
                        <td class="text-center">40:70</td>
                        <td class="text-center">30</td>
                        <td class="text-center">0</td>
                    </tr>
                                    <tr>
                        <td class="text-center">14</td>
                        <td><a href="/tym/3728">TJ Jiskra Domažlice B</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">7</td>
                        <td class="text-center">5</td>
                        <td class="text-center">18</td>
                        <td class="text-center">38:75</td>
                        <td class="text-center">26</td>
                        <td class="text-center">0</td>
                    </tr>
                                    <tr>
                        <td class="text-center">15</td>
                        <td><a href="/tym/230">FK Jindřichův Hradec 1910</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">5</td>
                        <td class="text-center">6</td>
                        <td class="text-center">19</td>
                        <td class="text-center">31:61</td>
                        <td class="text-center">21</td>
                        <td class="text-center">0</td>
                    </tr>
                                    <tr>
                        <td class="text-center">16</td>
                        <td><a href="/tym/3732">SK Slavia Vejprnice</a></td>
                        <td class="text-center">30</td>
                        <td class="text-center">4</td>
                        <td class="text-center">3</td>
                        <td class="text-center">23</td>
                        <td class="text-center">23:82</td>
                        <td class="text-center">15</td>
                        <td class="text-center">0</td>
                    </tr>
                            </tbody>
        </table>
    </div>

                <p class="text-center text-md-start">
                    <a class="btn btn-default btn-sm" href="/soutez/31/">
                        <i class="fa fa-arrow-up"></i> Zpět na soutěz
                    </a>
                </p>

                <div class="d-block d-md-none d-flex justify-content-center mobile-ads pt-3 pb-3">
    <!-- /16240546/v08_m04 -->
    <div id='div-gpt-ad-1710895093149-0' class="mobile-ads-300-250">
        <script>
            if (isMobileLoaded) {
                googletag.cmd.push(function () {
                    googletag.display('div-gpt-ad-1710895093149-0');
                });
            }
        </script>
    </div>
</div>

            </div>
        </div>
        <div class="col-md-4 col-12">
            <div class="boxLeftWidget">
        <div class="content-block">
                <div id="commentsWidget">
            
<div class="comment-small-widget">
    <h4 class="title">Nejnovější události</h4>                                    <a href="/zapas/521723/" class="comment p-2">
                            <span class="name">j. rychal</span>
                <span class="pull-right text-small">20:41 13.6.2025</span>
                <span class="text">
                    <b>Tip:</b> výhra domácích Hořovice
                </span>
            </a>
                                <a href="/zapas/521724/" class="comment p-2">
                            <span class="name">j. rychal</span>
                <span class="pull-right text-small">20:41 13.6.2025</span>
                <span class="text">
                    <b>Tip:</b> remíza Milín - Aritma
                </span>
            </a>
                                <a href="/zapas/521725/" class="comment p-2">
                            <span class="name">j. rychal</span>
                <span class="pull-right text-small">20:41 13.6.2025</span>
                <span class="text">
                    <b>Tip:</b> výhra domácích Přeštice
                </span>
            </a>
                                <a href="/zapas/521726/" class="comment p-2">
                            <span class="name">j. rychal</span>
                <span class="pull-right text-small">20:41 13.6.2025</span>
                <span class="text">
                    <b>Tip:</b> remíza Č. Krumlov - Soběslav
                </span>
            </a>
                                <a href="/zapas/521727/" class="comment p-2">
                            <span class="name">j. rychal</span>
                <span class="pull-right text-small">20:41 13.6.2025</span>
                <span class="text">
                    <b>Tip:</b> výhra domácích Komárov
                </span>
            </a>
            </div>
        </div>
                    <h4 class="mb-md-3">Rozhovory</h4>
    <ul class="list-group list-group-flush mb-box">
        <li class="list-group-item border-0 p-0 pb-3">
            <a href="/rozhovor/13116/rozhovor-s-hracem-kola-29-kolo-divize-a-2024-2025">Sezónu začal v Příbrami B proti Milínu a v posledním zápase sezóny skóroval poprvé za Milín, to je sezónní příběh Jakuba Matouše</a>
        </li>
        <li class="list-group-item border-0 p-0 pb-3">
            <a href="/rozhovor/13071/rozhovor-s-hracem-kola-28-kolo-divize-a-2024-2025-rozhovor-s-hracem-kola-28-kolo-divize-a-2024-2025">Na velkou bránu jsem hattrick doposud nedal, říká hráč posledních dvou kol Ondřej Soukup</a>
        </li>
        <li class="list-group-item border-0 p-0 ">
            <a href="/rozhovor/12965/rozhovor-s-hracem-kola-26-kolo-divize-a-2024-2025-rozhovor-s-hracem-kola-26-kolo-divize-a-2024-2025">Podzim mi hodně dal, s kolegy z brány si rozumím, hlásí Daniel Skokánek</a>
        </li>
    </ul>
        <div class="d-none d-md-block">
    <div id='adw_rectangle3'>
        <script>
            if (isMobileLoaded === false) {
                googletag.cmd.push(function () {
                    googletag.display('adw_rectangle3');
                });
            }
        </script>
    </div>
</div>
            <table class="table table-striped table-hover table-condensed mb-box mt-md-3 table-widget">
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
                    <td><a href="/tym/57">SK Aritma Praha</a></td>
                    <td class="text-center">30</td>
                    <td class="text-center">78:20</td>
                    <td class="text-center">81</td>
                </tr>
                            <tr>
                    <td class="text-center">2</td>
                    <td><a href="/tym/50">FK Králův Dvůr</a></td>
                    <td class="text-center">30</td>
                    <td class="text-center">93:22</td>
                    <td class="text-center">74</td>
                </tr>
                            <tr>
                    <td class="text-center">3</td>
                    <td><a href="/tym/834">FK Komárov</a></td>
                    <td class="text-center">30</td>
                    <td class="text-center">68:36</td>
                    <td class="text-center">60</td>
                </tr>
                            <tr>
                    <td class="text-center">4</td>
                    <td><a href="/tym/1210">TJ Ligmet Milín</a></td>
                    <td class="text-center">30</td>
                    <td class="text-center">53:35</td>
                    <td class="text-center">53</td>
                </tr>
                            <tr>
                    <td class="text-center">5</td>
                    <td><a href="/tym/224">FK Spartak Soběslav</a></td>
                    <td class="text-center">30</td>
                    <td class="text-center">59:44</td>
                    <td class="text-center">52</td>
                </tr>
                    </tbody>
    </table>
    <p class="text-center mb-box">
        <a href="/tabulky/soutez/31" class="btn btn-sm btn-green">Zobrazit celou tabulku</a>
    </p>
            <table class="table table-striped table-hover table-condensed mb-box table-widget">
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
                        <a href="/hrac/180990">Kryštof Krátký</a>
                    </td>
                    <td class="text-center">
                        24
                    </td>
                </tr>
                                                <tr>
                    <td class="text-center">2</td>
                    <td>
                        <a href="/hrac/138308">Filip Vaněk</a>
                    </td>
                    <td class="text-center">
                        23
                    </td>
                </tr>
                                                <tr>
                    <td class="text-center">3</td>
                    <td>
                        <a href="/hrac/168155">Václav Kadlec</a>
                    </td>
                    <td class="text-center">
                        16
                    </td>
                </tr>
                                                <tr>
                    <td class="text-center">4</td>
                    <td>
                        <a href="/hrac/196521">Nikolas Wacker</a>
                    </td>
                    <td class="text-center">
                        14
                    </td>
                </tr>
                                                <tr>
                    <td class="text-center">5</td>
                    <td>
                        <a href="/hrac/179902">Oliver Polanský</a>
                    </td>
                    <td class="text-center">
                        13
                    </td>
                </tr>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </tbody>
    </table>
    <p class="text-center mb-box">
        <a href="/statistiky/soutez/31/strelci" class="btn btn-sm btn-green">Zobrazit celou tabulku</a>
    </p>
        <table class="table table-striped table-hover table-condensed mb-box table-widget">
    <thead>
    <tr>
        <th></th>
        <th>Jméno</th>
        <th class="text-center">ZB</th>
        <th class="text-center">Ú</th>
        <th class="text-center">BE</th>
    </tr>
    </thead>
    <tbody>
                                        <tr>
                    <td class="text-center">1</td>
                    <td><a href="/profil/61309">David Novák</a></td>
                    <td class="text-center">140</td>
                    <td class="text-center">60,3%</td>
                    <td class="text-center">0</td>
                </tr>
                                                <tr>
                    <td class="text-center">2</td>
                    <td><a href="/profil/41333">Michal Franc</a></td>
                    <td class="text-center">137</td>
                    <td class="text-center">57,3%</td>
                    <td class="text-center">1</td>
                </tr>
                                                <tr>
                    <td class="text-center">3</td>
                    <td><a href="/profil/19383">Karel Chovánek</a></td>
                    <td class="text-center">136</td>
                    <td class="text-center">58,1%</td>
                    <td class="text-center">0</td>
                </tr>
                                                <tr>
                    <td class="text-center">4</td>
                    <td><a href="/profil/16498">Ladislav Beran</a></td>
                    <td class="text-center">134</td>
                    <td class="text-center">56,5%</td>
                    <td class="text-center">0</td>
                </tr>
                                                <tr>
                    <td class="text-center">5</td>
                    <td><a href="/profil/22973">jaroslav rychal</a></td>
                    <td class="text-center">130</td>
                    <td class="text-center">56,0%</td>
                    <td class="text-center">0</td>
                </tr>
                            </tbody>
</table>
<p class="text-center mb-box">
    <a href="/tip-liga/?grid_filter%5Bsoutez%5D%5B0%5D=31&amp;grid_filter%5Bsezona%5D%5B0%5D=11" class="btn btn-sm btn-green">Zobrazit celou tabulku</a>
</p>
        <div id="inner-container-reklama-sekce4" class="pinned-container d-none d-md-block">
            <div class="pinned">
                <div class="d-none d-md-block">
    <div id='adw_rectangle4'>
        <script>
            if (isMobileLoaded === false) {
                googletag.cmd.push(function () {
                    googletag.display('adw_rectangle4');
                });
            }
        </script>
    </div>
</div>
            </div>
        </div>
    </div>
    </div>
        </div>
    </div>
    </section>

        <div class="d-none d-md-block">
	<div id='adw_footboard'>
		<script>
			if (isMobileLoaded === false) {
				googletag.cmd.push(function () {
					googletag.display('adw_footboard');
				});
			}
		</script>
	</div>
</div>
    <div class="d-block d-md-none d-flex justify-content-center mobile-ads">
    <!-- /16240546/v08_m07 -->
    <div id='div-gpt-ad-1710927467465-0' class="mobile-ads-300-250">
        <script>
            if (isMobileLoaded) {
                googletag.cmd.push(function () {
                    googletag.display('div-gpt-ad-1710927467465-0');
                });
            }
        </script>
    </div>
</div>
    
    </div>
        <footer>
        <ul class="nav footer-navigation">
            <li class="nav-item"><a href="/o-projektu/" class="nav-link">O projektu</a></li>
            <li class="nav-item"><a href="/kariera/" class="nav-link">Kariéra</a></li>
            <li class="nav-item"><a href="/reklama/" class="nav-link">Reklama</a></li>
            <li class="nav-item"><a href="/kontakt/" class="nav-link">Kontakty</a></li>
        </ul>
                    <p class="text-md-end text-center small footer-copyright m-0">
                <a href="/podminky-uziti/">Všeobecné podmínky portálu fotbalunas.cz</a> |
                &copy; Copyright <a href="http://www.kpksport.cz" title="KPK sport s.r.o.">KPK sport s.r.o.</a>
                Jakékoliv užití obsahu včetně převzetí, šíření či dalšího zpřístupňování článků a fotografií je
                bez souhlasu KPK sport, s.r.o. zakázáno.<br />
                Provozovatelem serveru fotbalunas.cz je KPK sport, s.r.o.
            </p>
            </footer>
    </div>


</body>
</html>
`;

export const LEAGUE_DATA: SoccerBotResponse<SoccerBotTeam[]> = {
  ok: true,
  data: [
    { id: '57', name: 'SK Aritma Praha' },
    { id: '50', name: 'FK Králův Dvůr' },
    { id: '834', name: 'FK Komárov' },
    { id: '1210', name: 'TJ Ligmet Milín' },
    { id: '224', name: 'FK Spartak Soběslav' },
    { id: '63', name: 'FK Slavoj Český Krumlov' },
    { id: '220', name: 'TJ Hluboká nad Vltavou' },
    { id: '55', name: 'SK Hořovice' },
    { id: '4938', name: 'FK Příbram B' },
    { id: '69', name: 'FC Rokycany' },
    { id: '59', name: 'SK Senco Doubravka' },
    { id: '5205', name: 'TJ Přeštice' },
    { id: '3714', name: 'SK Petřín Plzeň B' },
    { id: '3728', name: 'TJ Jiskra Domažlice B' },
    { id: '230', name: 'FK Jindřichův Hradec 1910' },
    { id: '3732', name: 'SK Slavia Vejprnice' }
  ]
};
