import { SoccerBotResponse, SoccerBotTeam } from '../../../src/shared/interfaces';

export const LEAGUE_HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Tables - Czech Liga - Czech Republic - Results, fixtures, tables and news - Soccerway</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Tables - Czech Liga - Czech Republic - Results, fixtures, tables and news - Soccerway" />
  <meta name="keywords" content="Tables - Czech Liga - Czech Republic - Results, fixtures, tables and news - Soccerway, soccer, football, soccer results, soccer tables, soccer fixtures, soccer statistics, soccer teams, soccer players, soccer news, football results, football tables, football fixtures, football statistics, football teams, football players, football news" />
  <meta name="verify-v1" content="YZMe1orngFPI/VHY1nG15dA7JJApmh8u0hkegWp64g8=" />
  <meta name="alexaVerifyID" content="njeQixLcgBgQ9UllN0-IbVYAz1M" />

    <meta name="apple-itunes-app" content="app-id=445839722" />

  <link rel="canonical" href="https://int.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" />



    <link rel="alternate" href="https://id.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="id-ID" />
  <link rel="alternate" href="https://cn.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="zh-CN" />
  <link rel="alternate" href="https://de.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="de-DE" />
  <link rel="alternate" href="https://au.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="en-AU" />
  <link rel="alternate" href="https://ca.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="en-CA" />
  <link rel="alternate" href="https://gh.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="en-GH" />
  <link rel="alternate" href="https://ie.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="en-IE" />
  <link rel="alternate" href="https://ke.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="en-KE" />
  <link rel="alternate" href="https://my.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="en-MY" />
  <link rel="alternate" href="https://ng.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="en-NG" />
  <link rel="alternate" href="https://nr.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="en-SE" />
  <link rel="alternate" href="https://sg.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="en-SG" />
  <link rel="alternate" href="https://za.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="en-ZA" />
  <link rel="alternate" href="https://uk.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="en-GB" />
  <link rel="alternate" href="https://us.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="en-US" />
  <link rel="alternate" href="https://es.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="es-ES" />
  <link rel="alternate" href="https://el.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="es-MX" />
  <link rel="alternate" href="https://fr.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="fr-FR" />
  <link rel="alternate" href="https://gr.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="el-GR" />
  <link rel="alternate" href="https://it.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="it-IT" />
  <link rel="alternate" href="https://kr.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="ko-KR" />
  <link rel="alternate" href="https://nl.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="nl-NL" />
  <link rel="alternate" href="https://pl.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="pl-PL" />
  <link rel="alternate" href="https://pt.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="pt-PT" />
  <link rel="alternate" href="https://br.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="pt-BR" />
  <link rel="alternate" href="https://ro.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="ro-RO" />
  <link rel="alternate" href="https://th.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="th-TH" />
  <link rel="alternate" href="https://tr.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="tr-TR" />
  <link rel="alternate" href="https://ru.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="ru-RU" />
  <link rel="alternate" href="https://ar.soccerway.com/national/country-slug/team-slug/20202021/regular-season/r59164/tables/" hreflang="ar-SA" />


  <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/media/img/touch-icons/apple-touch-icon-152x152-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/media/img/touch-icons/apple-touch-icon-144x144-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/media/img/touch-icons/apple-touch-icon-120x120-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/media/img/touch-icons/apple-touch-icon-114x114-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/media/img/touch-icons/apple-touch-icon-76x76-precomposed.png">
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/media/img/touch-icons/apple-touch-icon-72x72-precomposed.png">
  <link rel="apple-touch-icon-precomposed" href="/media/img/touch-icons/apple-touch-icon-precomposed.png">

  <link href="/media/v1.5.4/css/redesign.css" rel="stylesheet">

  <script type="text/javascript" charset="utf-8">
  /* <![CDATA[ */
  var Config = (function() {
    var settings = {"cookie_domain":".soccerway.com","ajax_path":"\/a","ajax_block_path":"\/b","live_update_path":"\/lu","l10n_cookie_name":"sw_l10m","betting_disabled_countries":["hk","cn","sa","tr","us"],"l10n":"int","default_l10n":"int","base_domain":"soccerway.com","valid_l10ns":["id","cn","de","au","ca","gh","int","ie","ke","my","ng","nr","sg","za","uk","us","es","el","fr","gr","it","kr","nl","pl","pt","br","ro","th","tr","ru","ar"],"localization_groups":{"arg":"el","cl":"el","co":"el","ec":"el","cr":"el","sv":"el","gt":"el","hn":"el","ni":"el","pa":"el","mx":"el","pe":"el","uy":"el","ve":"el","bo":"el","cu":"el","do":"el","py":"el","is":"nr","no":"nr","se":"nr","dk":"nr","fi":"nr","fo":"nr","sy":"ar","iq":"ar","lb":"ar","jo":"ar","kw":"ar","bh":"ar","qa":"ar","ae":"ar","sa":"ar","om":"ar","ye":"ar","eg":"ar","tn":"ar","ly":"ar","dz":"ar","ma":"ar","mr":"ar","sd":"ar","td":"ar","er":"ar","dj":"ar","so":"ar","ar":"ar"},"geo_script":"\/\/geo.soccerway.com\/","username_cookie_name":"sw_username","media_server_url":"\/media\/v1.5.4","widget_black_list":["AF","AS","AO","BH","BI","KH","TD","CN","TW","CG","CD","EG","ER","GF","GP","GU","GW","HT","HK","ID","IR","IQ","IL","JP","JO","KW","LB","LY","MQ","MC","MM","NL","KP","OM","PS","PH","PR","QA","SA","SG","SO","SD","SY","TJ","TR","TM","AE","US","VI","UZ","VE","YE","ZW","TH"],"widget_white_list":["GB","DE","NG","GH","IE","ZA","KE","NO","SE","FI","DK"],"widget_language_codes_mapping":{"UK":"EN","NG":"EN","ZA":"EN","KE":"EN","GH":"EN","IE":"EN","NR":"EN"}};

    return {
      get: function(key) {
        return settings[key];
      }
    };
  })();
  /* ]]> */
</script>

  <!-- Google Tag Manager -->
<noscript>
  <iframe src="//www.googletagmanager.com/ns.html?id=GTM-TPT4XLP"
   height="0" width="0" style="display:none;visibility:hidden">
 </iframe>
</noscript>
<script type="text/javascript">
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TPT4XLP');
</script>
<!-- End Google Tag Manager -->

<script type="text/javascript">
  (function() {
    function getEplayerVideoInfo(e) {
      if (typeof(e.data) === 'string' && (e.data.indexOf('onEplayerVideoStarted') >= 0)) {

        dataLayer.push({
          'videoStarted': true
        });

        window.removeEventListener('message', getEplayerVideoInfo);
      }
    }

    window.addEventListener('message', getEplayerVideoInfo);
  })();

  function gtmSetUserId(UID){
      var expires = new Date();
      expires.setTime(expires.getTime() + 36500*24*60*60*1000);
      Cookie.set('UID', UID, {expires: expires, domain: '.soccerway.com'});
  }

  function gtmDownloadiPhone(){
    dataLayer.push({
      'event': 'download',
      'action':'download - iphone'
    });
  }

  function SetPerformIDEventSentSession(){
  }

</script>

  <!-- Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->
<script async=true>
(function() {
  // var host = window.location.hostname;
  var host = 'soccerway.com';
  var element = document.createElement('script');
  var firstScript = document.getElementsByTagName('script')[0];
  var url = 'https://quantcast.mgr.consensu.org'
    .concat('/choice/', 'W8gnNu7FFEkY6', '/', host, '/choice.js')
  var uspTries = 0;
  var uspTriesLimit = 3;
  element.async = true;
  element.src = url;

  firstScript.parentNode.insertBefore(element, firstScript);

  function makeStub() {
    var TCF_LOCATOR_NAME = '__tcfapiLocator';
    var queue = [];
    var win = window;
    var cmpFrame;

    function addFrame() {
      var doc = win.document;
      var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);

      if (!otherCMP) {
        if (doc.body) {
          var iframe = doc.createElement('iframe');

          iframe.style.cssText = 'display:none';
          iframe.name = TCF_LOCATOR_NAME;
          doc.body.appendChild(iframe);
        } else {
          setTimeout(addFrame, 5);
        }
      }
      return !otherCMP;
    }

    function tcfAPIHandler() {
      var gdprApplies;
      var args = arguments;

      if (!args.length) {
        return queue;
      } else if (args[0] === 'setGdprApplies') {
        if (
          args.length > 3 &&
          args[2] === 2 &&
          typeof args[3] === 'boolean'
        ) {
          gdprApplies = args[3];
          if (typeof args[2] === 'function') {
            args[2]('set', true);
          }
        }
      } else if (args[0] === 'ping') {
        var retr = {
          gdprApplies: gdprApplies,
          cmpLoaded: false,
          cmpStatus: 'stub'
        };

        if (typeof args[2] === 'function') {
          args[2](retr);
        }
      } else {
        queue.push(args);
      }
    }

    function postMessageEventHandler(event) {
      var msgIsString = typeof event.data === 'string';
      var json = {};

      try {
        if (msgIsString) {
          json = JSON.parse(event.data);
        } else {
          json = event.data;
        }
      } catch (ignore) {}

      var payload = json.__tcfapiCall;

      if (payload) {
        window.__tcfapi(
          payload.command,
          payload.version,
          function(retValue, success) {
            var returnMsg = {
              __tcfapiReturn: {
                returnValue: retValue,
                success: success,
                callId: payload.callId
              }
            };
            if (msgIsString) {
              returnMsg = JSON.stringify(returnMsg);
            }
            event.source.postMessage(returnMsg, '*');
          },
          payload.parameter
        );
      }
    }

    while (win) {
      try {
        if (win.frames[TCF_LOCATOR_NAME]) {
          cmpFrame = win;
          break;
        }
      } catch (ignore) {}

      if (win === window.top) {
        break;
      }
      win = win.parent;
    }
    if (!cmpFrame) {
      addFrame();
      win.__tcfapi = tcfAPIHandler;
      win.addEventListener('message', postMessageEventHandler, false);
    }
  };

  makeStub();

  var uspStubFunction = function() {
    var arg = arguments;
    if (typeof window.__uspapi !== uspStubFunction) {
      setTimeout(function() {
        if (typeof window.__uspapi !== 'undefined') {
          window.__uspapi.apply(window.__uspapi, arg);
        }
      }, 500);
    }
  };

  var checkIfUspIsReady = function() {
    uspTries++;
    if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
      console.warn('USP is not accessible');
    } else {
      clearInterval(uspInterval);
    }
  };

  if (typeof window.__uspapi === 'undefined') {
    window.__uspapi = uspStubFunction;
    var uspInterval = setInterval(checkIfUspIsReady, 6000);
  }
})();
</script>
<!-- End Quantcast Choice. Consent Manager Tag v2.0 (for TCF 2.0) -->

  <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/yui/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" type="text/css" charset="utf-8" />

<link rel="stylesheet" href="/media/v1.5.4/css/white_labels/soccerway.css" type="text/css" charset="utf-8" />
<link rel="stylesheet" href="/media/v1.5.4/img/flags/16x16/plain/map.css" type="text/css" charset="utf-8" />
<link rel="stylesheet" href="/media/v1.5.4/img/flags/24x24/plain/map.css" type="text/css" charset="utf-8" />
<link rel="stylesheet" href="/media/v1.5.4/css/pikaday.css" type="text/css" charset="utf-8" />
<link rel="stylesheet" href="/media/v1.5.4/css/perfect-scrollbar.css" type="text/css" charset="utf-8" />
<!--[if IE]>
<link rel="stylesheet" href="/media/v1.5.4/css/ie.css" type="text/css" charset="utf-8" />
<![endif]-->
<link rel="stylesheet" href="/media/v1.5.4/css/soccerway.css" type="text/css" charset="utf-8" />
<link rel="stylesheet" href="/widgetproxy/css/betting-widget.css" type="text/css" charset="utf-8" />

<script src="/media/v1.5.4/js/jsonp.js" type="text/javascript" charset="utf-8"></script>
<script src="/media/v1.5.4/js/pikaday.js" type="text/javascript" charset="utf-8"></script>
<script src="/media/v1.5.4/js/perfect-scrollbar.js" type="text/javascript" charset="utf-8"></script>
<script src="/media/v1.5.4/js/ejs.js" type="text/javascript" charset="utf-8"></script>
<script src="/media/v1.5.4/js/sort-orders.js" type="text/javascript" charset="utf-8"></script>
<script src="/media/v1.5.4/js/shaLib.js" type="text/javascript" charset="utf-8"></script>

<script src="/widgetproxy/js/betting-widget.js" type="text/javascript" charset="utf-8"></script>
<script src="/media/v1.5.4/js/betting_widget_wrapper.js" type="text/javascript" charset="utf-8"></script>

<script src="/media/v1.5.4/js/moment.js"></script>
<script src="/media/v1.5.4/js/moment-timezone-with-data.js"></script>

<script src="//ajax.googleapis.com/ajax/libs/prototype/1.7.0.0/prototype.js" type="text/javascript"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" type="text/javascript"></script>
<script type="text/javascript">
if (this.$ && this.$.fn && this.$.fn.jquery) {
  jQuery = this.$.noConflict();
}
</script>

<script src="/media/v1.5.4/js/all-min.js" type="text/javascript"></script>


  <script type="text/javascript" charset="utf-8">
  L10nManager.initialize();
</script>


  <script type="text/javascript" charset="utf-8">
  /* <![CDATA[ */
  dateFormat.i18n = {
  	dayNames: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    monthNames: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]
  };
  /* ]]> */
</script>

  <div class="block_blue_kai block  clearfix" id="block_blue_kai_11">
  <!-- Begin BlueKai Tag -->
<script type="text/javascript">

  var blueKaiCalls = (function() {
    var page_type = 'competition';
    var page_primary_tag = "Tables$$$Czech Liga$$$Czech Republic$$$Results, fixtures, tables and news$$$Soccerway".split(',')[0];
    var user_country_code = 'int';
    var user_language_code = 'en';
    var blueKaiCalls = [];

    blueKaiCalls.push({
      bk_call: 'bk_addPageCtx',
      name: 'page_type',
      value: page_type
    });

    blueKaiCalls.push({
      bk_call: 'bk_addPageCtx',
      name: 'page_primary_tag',
      value: convertPrimaryTag(page_primary_tag, page_type)
    });

    blueKaiCalls.push({
      bk_call: 'bk_addPageCtx',
      name: 'user_country_code',
      value: user_country_code
    });

    blueKaiCalls.push({
      bk_call: 'bk_addPageCtx',
      name: 'user_language_code',
      value: user_language_code
    });

    return blueKaiCalls;
  })();


  window.bk_async = function(bkCall) {
    bk_allow_multiple_calls = true;
    bk_use_multiple_iframes = true;

    if(arguments.length > 0) {
      switch(bkCall.bk_call){
        case 'bk_addEmailHash':
          window[bkCall.bk_call](bkCall.value);
          break;
        default:
          window[bkCall.bk_call](bkCall.name, bkCall.value);
          break;
      }
    } else {
      blueKaiCalls.forEach(function(bkCall) {
        window[bkCall.bk_call](bkCall.name, bkCall.value);
      });

      blueKaiCalls = [];
      blueKaiCalls.push = function(blueKaiCall) {
        window.bk_async(blueKaiCall);
      };
    }

    BKTAG.doTag(53977, 1);
  };

  (function() {
    var scripts = document.getElementsByTagName('script')[0];
    var s = document.createElement('script');
    s.async = true;
    s.src = "//tags.bkrtx.com/js/bk-coretag.js";
    scripts.parentNode.insertBefore(s, scripts);
  }());

  /**
   * sending different page_primary_tag depending on page_type
   *
   * @param {string} primaryTag
   * @param {string} pageType
   * @return {string}
   */
  function convertPrimaryTag(primaryTag, pageType) {
    switch (pageType) {
      case 'player':
        return ' ';

      case 'competition':
        return parseCompetitionName('team-slug');

      case 'match':
        return primaryTag.split('$$$').join(' ') + ' ' + parseCompetitionName('team-slug');

      case 'team':
        return primaryTag.split('$$$')[1];

      default:
        return primaryTag.replace('$$$', ' - ');
    }
  }

  function parseCompetitionName(str) {
    str = str.split('-').join(' ');

    //to title case
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    });
  }
</script>
<!-- End BlueKai Tag -->

</div>
<script type="text/javascript" charset="utf-8">
 (function() {
    var block = new Block('block_blue_kai_11', 'block_blue_kai', null);



    TimestampFormatter.format('block_blue_kai_11');
  })();
</script>
  <div class="block_ad_dfp block  clearfix" id="block_ad_dfp_12">
  <script>
  var googletag = googletag || {};
  googletag.cmd = googletag.cmd || [];

  (function () {
    var gads = document.createElement('script');
    gads.async = true;
    gads.type = 'text/javascript';
    var useSSL = 'https:' == document.location.protocol;
    gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
    var node = document.getElementsByTagName('script')[0];
    node.parentNode.insertBefore(gads, node);
  })();

  var dfpCall = function(idAnsii) {
    googletag.cmd.push(function () {
      googletag.enableServices();
    });
  };

  var dfpSetDefaults = function() {
    googletag.pubads().setTargeting('language', ['int']);
    googletag.pubads().setTargeting('Display_SW_G ender', ['men']);
    googletag.pubads().setTargeting('amznslots', [window.amzValues]);
    googletag.pubads().disableInitialLoad();
    googletag.pubads().collapseEmptyDivs(true);
    googletag.pubads().enableSingleRequest();
    googletag.pubads().setCentering(true);
    googletag.pubads().enableLazyLoad();
  };


  var dfpRegister = function() {
    googletag.cmd.push(function () {
      var mapping = googletag.sizeMapping().
        addSize([1000, 400], [[300, 600], [300, 250]]). // Desktop & Tablet
        addSize([0, 0], []). // Smaller than desktop
        build();

      googletag.defineSlot('/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/bottom_mpu', [[300, 600], [300, 250]], 'div-gpt-ad-1478706130315-0')
        .setTargeting('Display_Ad_Position', ['BTF'])
        .setTargeting('Display_Ad_Size', ['Bottom_MPU'])
        .setTargeting('optacore_compID', ['82'])
        // DFP values only for match page
        .setTargeting('Display_KW_Test', [''])
        .defineSizeMapping(mapping)
        .addService(googletag.pubads());

      var mapping = googletag.sizeMapping().
        addSize([1000, 400], []). // Desktop & Tablet
        addSize([0, 0], [300, 250]). // Smaller than desktop
        build();

      googletag.defineSlot('/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/bottom_mpu', [[300, 250]], 'div-gpt-ad-1478706130315-0-1')
        .setTargeting('Display_Ad_Position', ['BTF'])
        .setTargeting('Display_Ad_Size', ['Bottom_MPU'])
        .setTargeting('optacore_compID', ['82'])
        // DFP values only for match page
        .setTargeting('Display_KW_Test', [''])
        .defineSizeMapping(mapping)
        .addService(googletag.pubads());

      googletag.defineOutOfPageSlot('/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/high_impact', 'div-gpt-ad-1478706130315-1')
        .setTargeting('Display_Ad_Position', ['ATF'])
        .setTargeting('Display_Ad_Size', ['High_Impact'])
        .setTargeting('optacore_compID', ['82'])
        // DFP values only for match page
        .setTargeting('Display_KW_Test', [''])
        .addService(googletag.pubads());

      var mapping = googletag.sizeMapping().
        addSize([1024, 400], [1, 1]). // Desktop
        addSize([0, 0], []). // Smaller than desktop
        build();

      googletag.defineSlot('/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/skin', [1, 1], 'div-gpt-ad-1478706130315-3')
        .setTargeting('Display_Ad_Position', ['ATF'])
        .setTargeting('Display_Ad_Size', ['Skin'])
        .setTargeting('optacore_compID', ['82'])
        // DFP values only for match page
        .setTargeting('Display_KW_Test', [''])
        .defineSizeMapping(mapping)
        .addService(googletag.pubads());

      var mapping = googletag.sizeMapping().
        addSize([970, 500], [[728, 90], [970, 250], [970, 90]]). // Desktop
        addSize([728, 500], [728, 90]). // Tablet
        addSize([0, 0], [[320, 50], [300, 50], [300, 100], [320, 100]]).
        build();

      googletag.defineSlot('/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/top_banner', [[728, 90], [970, 250], [970, 90], [320, 50], [300, 50], [300, 100], [320, 100]], 'div-gpt-ad-1478706130315-4')
        .setTargeting('Display_Ad_Position', ['ATF'])
        .setTargeting('Display_Ad_Size', ['Top_Banner'])
        .setTargeting('optacore_compID', ['82'])
        // DFP values only for match page
        .setTargeting('Display_KW_Test', [''])
        .defineSizeMapping(mapping)
        .addService(googletag.pubads());

      var mapping = googletag.sizeMapping().
        addSize([1000, 400], [300, 100]). // Desktop
        addSize([0, 0], []). // Smaller than desktop
        build();

      googletag.defineSlot('/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/top_button', [[300, 100]], 'div-gpt-ad-1478706130315-5')
        .setTargeting('Display_Ad_Position', ['ATF'])
        .setTargeting('Display_Ad_Size', ['Top_Button'])
        .setTargeting('optacore_compID', ['82'])
        // DFP values only for match page
        .setTargeting('Display_KW_Test', [''])
        .defineSizeMapping(mapping)
        .addService(googletag.pubads());

      var mapping = googletag.sizeMapping().
        addSize([1000, 400], [[300, 600], [300, 250]]). // Desktop
        addSize([0, 0], []). // Smaller than desktop
        build();

      googletag.defineSlot('/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/top_mpu', [[300, 600], [300, 250]], 'div-gpt-ad-1478706130315-6')
        .setTargeting('Display_Ad_Position', ['ATF'])
        .setTargeting('Display_Ad_Size', ['Top_MPU'])
        .setTargeting('optacore_compID', ['82'])
        // DFP values only for match page
        .setTargeting('Display_KW_Test', [''])
        .defineSizeMapping(mapping)
        .addService(googletag.pubads());

      var mapping = googletag.sizeMapping().
        addSize([1000, 400], []). // Desktop
        addSize([0, 0], [300, 250]). // Smaller than desktop
        build();

      googletag.defineSlot('/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/top_mpu', [[300, 600], [300, 250]], 'div-gpt-ad-1478706130315-6-1')
        .setTargeting('Display_Ad_Position', ['ATF'])
        .setTargeting('Display_Ad_Size', ['Top_MPU'])
        .setTargeting('optacore_compID', ['82'])
        // DFP values only for match page
        .setTargeting('Display_KW_Test', [''])
        .defineSizeMapping(mapping)
        .addService(googletag.pubads());


      var mapping = googletag.sizeMapping().
        addSize([600, 400], [[160, 600], [120, 600]]). // Desktop
        addSize([0, 0], []). // Smaller than desktop
        build();

        googletag.defineSlot('/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/top_skyscraper', [[160, 600], [120, 600]], 'div-gpt-ad-1478706130315-7')
          .setTargeting('Display_Ad_Position', ['ATF'])
          .setTargeting('Display_Ad_Size', ['Top_Skyscraper'])
          .setTargeting('optacore_compID', ['82'])
          .setTargeting('Display_KW_Test', [''])
          .defineSizeMapping(mapping)
          .addService(googletag.pubads());

      dfpSetDefaults();
    })
  };


// Debounced resize based on width change
window.swwidth = jQuery(window).width();
window.swdb = null;

window.onresize = function(evt) {
  clearTimeout(window.swdb);
  window.swdb = setTimeout(function(){
      var width = jQuery(window).width();

      if(window.swwidth !== width){
        window.swwidth = width;
        googletag.pubads().refresh();
      }
   }, 300);
};


</script>

</div>
<script type="text/javascript" charset="utf-8">
 (function() {
    var block = new Block('block_ad_dfp_12', 'block_ad_dfp', null);



    TimestampFormatter.format('block_ad_dfp_12');
  })();
</script>

  <script type='text/javascript'>
  function waitForApiReady(attempt) {
    var att = attempt || 0;
    setTimeout(function() {
      if(googletag.apiReady) {
        googletag.cmd.push(function () {
            apstag.setDisplayBids();
            googletag.pubads().refresh();
        });
      } else if(att < 10) {
          waitForApiReady(++att);
      }
    }, 300);
  }

  var isToLoadAmazon=true;
  ! function (a9, a, p, s, t, A, g) {

    if (a[a9]) return;

    function q(c, r) {
      a[a9]._Q.push([c, r])
    }

    a[a9] = {
      init: function () {
        q("i", arguments)
      },
      fetchBids: function () {
        q("f", arguments)
      },
      setDisplayBids: function () { },
      targetingKeys: function () {
        return []
      },
      _Q: []
    };
    A = p.createElement(s);

    /** ADDED TO HANDLE AMAZON SCRIPT LOAD ISSUES **/
    var loadScriptTimeout = 1000;
    function forceDFPLoad(isToForce) {
      if (isToForce) {
        window.googletag.cmd.push(function () { window.googletag.pubads().refresh(); });
        isToLoadAmazon=false;
      }
    }

    let timeoutID = setTimeout(() => {
          forceDFPLoad(true);
  }, loadScriptTimeout)

    A.addEventListener('error', () => {
      if (timeoutID !== null) {
      clearTimeout(timeoutID);
      timeoutID = null;
      forceDFPLoad(true);
    }
  })
    A.addEventListener('load', () => {
      if (timeoutID !== null) {
      clearTimeout(timeoutID)
      timeoutID = null
      forceDFPLoad(false);
    }
  })

    A.async = !0;
    A.src = t;
    g = p.getElementsByTagName(s)[0];
    g.parentNode.insertBefore(A, g)
  }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");

  function parseSizeMappings(sizeMappings) {
    try {
      // get current window dimensions
      var sd = [jQuery(window).height(), jQuery(window).width()];

      // filter mappings that are valid by confirming that the current screen dimensions
      // are both greater than or equal to the breakpoint [x, y] minimums specified in the first position in the mapping
      var validMappings = sizeMappings.filter(
          function (m) {
            return m[0][0] <= sd[0] && m[0][1] <= sd[1]
          });

      // return the leftmost mapping's sizes or an empty array
      return validMappings.length > 0 ? validMappings[0][1] : [];
    } catch (e) {
      console.log('error parsing sizeMappings:')
      console.log(sizeMappings);
      console.log(e);
      // fallback to last size mapping supplied
      return sizeMappings[sizeMappings.length - 1][1];
    }
  }

  if(isToLoadAmazon){
    var bidTimeout=2000;

    // initialize apstag and have apstag set bids on the googletag slots when they are returned to the page
    apstag.init({
      pubID: '3117',
      adServer: 'googletag',
      bidTimeout: bidTimeout
    });

    var slotsHome = [{
      slotID: 'div-gpt-ad-1478705684761-0',
      slotName: '/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/homepage/bottom_mpu',
      sizes: [[300, 600], [300, 250]]
    },
    {
      slotID: 'div-gpt-ad-1478705684761-0-1',
      slotName: '/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/homepage/bottom_mpu',
      sizes: [[300, 600], [300, 250]]
    },
    {
      slotID: 'div-gpt-ad-1478705684761-4',
      slotName: '/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/homepage/top_banner',
      sizes:  [[728, 90], [970, 250], [970, 90], [320,50], [300, 50], [300, 100], [320, 100]]
    },
    {
      slotID: 'div-gpt-ad-1478705684761-5',
      slotName: '/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/homepage/top_button',
      sizes: [[300, 100]]
    },
    {
      slotID: 'div-gpt-ad-1478705684761-6',
      slotName: '/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/homepage/top_mpu',
      sizes: [[300, 600], [300, 250]]
    },
    {
      slotID: 'div-gpt-ad-1478705684761-6-1',
      slotName: '/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/homepage/top_mpu',
      sizes: [[300, 600], [300, 250]]
    }];

    var slotsUnlessHome = [{
      slotID: 'div-gpt-ad-1478706130315-0',
      slotName: '/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/bottom_mpu',
      sizes: [[300, 600], [300, 250]]
    },
    {
      slotID: 'div-gpt-ad-1478706130315-0',
      slotName: '/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/bottom_mpu',
      sizes: [[300, 250]]
    },
    {
      slotID: 'div-gpt-ad-1478706130315-4',
      slotName: '/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/top_banner',
      sizes: [[970, 90], [728, 90], [970, 250], [320,50], [300, 50], [300, 100], [320, 100]]
    },
    {
      slotID: 'div-gpt-ad-1478706130315-5',
      slotName: '/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/top_button',
      sizes: [[300, 100]]
    },
    {
      slotID: 'div-gpt-ad-1478706130315-6',
      slotName: '/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/top_mpu',
      sizes: [[300, 600], [300, 250]]
    },
    {
      slotID: 'div-gpt-ad-1478706130315-6-1',
      slotName: '/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/top_mpu',
      sizes: [[300, 600], [300, 250]]
    }];

    var slotsUnlessMatchPage = [{
      slotID: 'div-gpt-ad-1478706130315-7',
      slotName: '/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/top_skyscraper',
      sizes: [[160, 600], [120, 600]]
    }];

    var slotsMatchPage = [{
      slotID: 'div-gpt-ad-1518689173131-0',
      slotName: '/67970281/DISPLAY_THIRDPARTY_GBL/soccerway/homepage/Sponsorbar_1000x70_Betting',
      sizes:  [[1000,70]]
    }];

    var slotsArray = [];


      slotsArray = slotsArray.concat(slotsUnlessHome);
        slotsArray = slotsArray.concat(slotsUnlessMatchPage);


    dfpRegister();

    function run() {
      dfpCall();

      // request the bids for the four googletag slots
      apstag.fetchBids({
        slots: slotsArray
      }, function (bids) {
        // set apstag bids, then trigger the first request to DFP
        if(googletag.apiReady) {
          googletag.cmd.push(function () {
            apstag.setDisplayBids();
            googletag.pubads().refresh();
          });
        } else {
          waitForApiReady();
        }
      });
    }

    __tcfapi('addEventListener', 2, function(tcData, success){
      if(tcData.gdprApplies === false) {
        run();
      }
      else if(success && ['tcloaded','useractioncomplete'].indexOf(tcData.eventStatus) > -1) {
        if(tcData.tcString) {
          run();
        }
      }
    });
  }
</script>


  <script type="text/javascript" charset="utf-8">
    document.domain = Config.get('base_domain');
  </script>



  <link href="/media/v1.5.4/css/responsive.css" rel="stylesheet">
</head>
<body id="page_competition" data-user-country-code="">
  <div id="top-bar" class="language-picker">
  	<div class="container clearfix">
                <ul class="group">
          <li>
            <a href="https://id.soccerway.com" data-l10n="id"  onclick="L10nManager.process('id', true);return false;"><span class="flag-id"></span>Bahasa - Indonesia</a>
          </li>
          <li>
            <a href="https://cn.soccerway.com" data-l10n="cn"  onclick="L10nManager.process('cn', true);return false;"><span class="flag-cn"></span>Chinese (simplified)</a>
          </li>
          <li>
            <a href="https://de.soccerway.com" data-l10n="de"  onclick="L10nManager.process('de', true);return false;"><span class="flag-de"></span>Deutsch</a>
          </li>
          <li>
            <a href="https://au.soccerway.com" data-l10n="au"  onclick="L10nManager.process('au', true);return false;"><span class="flag-au"></span>English - Australia</a>
          </li>
          <li>
            <a href="https://ca.soccerway.com" data-l10n="ca"  onclick="L10nManager.process('ca', true);return false;"><span class="flag-ca"></span>English - Canada</a>
          </li>
          <li>
            <a href="https://gh.soccerway.com" data-l10n="gh"  onclick="L10nManager.process('gh', true);return false;"><span class="flag-gh"></span>English - Ghana</a>
          </li>
          <li>
            <a href="https://int.soccerway.com" data-l10n="int"  onclick="L10nManager.process('int', true);return false;"><span class="flag-int"></span>English - International</a>
          </li>
        </ul>
        <ul class="group">
          <li>
            <a href="https://ie.soccerway.com" data-l10n="ie"  onclick="L10nManager.process('ie', true);return false;"><span class="flag-ie"></span>English - Ireland</a>
          </li>
          <li>
            <a href="https://ke.soccerway.com" data-l10n="ke"  onclick="L10nManager.process('ke', true);return false;"><span class="flag-ke"></span>English - Kenya</a>
          </li>
          <li>
            <a href="https://my.soccerway.com" data-l10n="my"  onclick="L10nManager.process('my', true);return false;"><span class="flag-my"></span>English - Malaysia</a>
          </li>
          <li>
            <a href="https://ng.soccerway.com" data-l10n="ng"  onclick="L10nManager.process('ng', true);return false;"><span class="flag-ng"></span>English - Nigeria</a>
          </li>
          <li>
            <a href="https://nr.soccerway.com" data-l10n="nr"  onclick="L10nManager.process('nr', true);return false;"><span class="flag-nr"></span>English - Nordics</a>
          </li>
          <li>
            <a href="https://sg.soccerway.com" data-l10n="sg"  onclick="L10nManager.process('sg', true);return false;"><span class="flag-sg"></span>English - Singapore</a>
          </li>
          <li>
            <a href="https://za.soccerway.com" data-l10n="za"  onclick="L10nManager.process('za', true);return false;"><span class="flag-za"></span>English - South Africa</a>
          </li>
        </ul>
        <ul class="group">
          <li>
            <a href="https://uk.soccerway.com" data-l10n="uk"  onclick="L10nManager.process('uk', true);return false;"><span class="flag-uk"></span>English - United Kingdom</a>
          </li>
          <li>
            <a href="https://us.soccerway.com" data-l10n="us"  onclick="L10nManager.process('us', true);return false;"><span class="flag-us"></span>English - United States</a>
          </li>
          <li>
            <a href="https://es.soccerway.com" data-l10n="es"  onclick="L10nManager.process('es', true);return false;"><span class="flag-es"></span>Español - Español</a>
          </li>
          <li>
            <a href="https://el.soccerway.com" data-l10n="el"  onclick="L10nManager.process('el', true);return false;"><span class="flag-el"></span>Español - LATAM</a>
          </li>
          <li>
            <a href="https://fr.soccerway.com" data-l10n="fr"  onclick="L10nManager.process('fr', true);return false;"><span class="flag-fr"></span>Français</a>
          </li>
          <li>
            <a href="https://gr.soccerway.com" data-l10n="gr"  onclick="L10nManager.process('gr', true);return false;"><span class="flag-gr"></span>Greek</a>
          </li>
          <li>
            <a href="https://it.soccerway.com" data-l10n="it"  onclick="L10nManager.process('it', true);return false;"><span class="flag-it"></span>Italiano</a>
          </li>
        </ul>
        <ul class="group">
          <li>
            <a href="https://kr.soccerway.com" data-l10n="kr"  onclick="L10nManager.process('kr', true);return false;"><span class="flag-kr"></span>Korean</a>
          </li>
          <li>
            <a href="https://nl.soccerway.com" data-l10n="nl"  onclick="L10nManager.process('nl', true);return false;"><span class="flag-nl"></span>Nederlands</a>
          </li>
          <li>
            <a href="https://pl.soccerway.com" data-l10n="pl"  onclick="L10nManager.process('pl', true);return false;"><span class="flag-pl"></span>Polski</a>
          </li>
          <li>
            <a href="https://pt.soccerway.com" data-l10n="pt"  onclick="L10nManager.process('pt', true);return false;"><span class="flag-pt"></span>Português</a>
          </li>
          <li>
            <a href="https://br.soccerway.com" data-l10n="br"  onclick="L10nManager.process('br', true);return false;"><span class="flag-br"></span>Brazil</a>
          </li>
          <li>
            <a href="https://ro.soccerway.com" data-l10n="ro"  onclick="L10nManager.process('ro', true);return false;"><span class="flag-ro"></span>Româna</a>
          </li>
          <li>
            <a href="https://th.soccerway.com" data-l10n="th"  onclick="L10nManager.process('th', true);return false;"><span class="flag-th"></span>Thai</a>
          </li>
        </ul>
        <ul class="group">
          <li>
            <a href="https://tr.soccerway.com" data-l10n="tr"  onclick="L10nManager.process('tr', true);return false;"><span class="flag-tr"></span>Türkçe</a>
          </li>
          <li>
            <a href="https://ru.soccerway.com" data-l10n="ru"  onclick="L10nManager.process('ru', true);return false;"><span class="flag-ru"></span>Русский</a>
          </li>
          <li>
            <a href="https://ar.soccerway.com" data-l10n="ar"  onclick="L10nManager.process('ar', true);return false;"><span class="flag-ar"></span>العربية</a>
          </li>
        </ul>

  	</div>
  </div>

  <header id="site-header">

<div id="logo-bar" class="container big-localized-int">
  <a href="/" id="logo" class="localized-int">Soccerway</a>

  <form accept-charset="utf-8" method="get" action="/search/" id="search">
    <div id="search-input-wrap">
      <input type="text" id="search-input" value="Search" name="q" minlength="3">
      <div id="search-input-submit">&nbsp;</div>
    </div>
    <input type="hidden" value="all" name="module">
  </form>

	<div class="language-picker-trigger">
		<span class="wrap-flag"><span class="flag-int"></span></span>
		<span class="indicator"></span>
	</div>

</div>

  </header>

  <header id="site-header-mobile">

<div id="logo-bar" class="container big-localized-int">
  <a href="/" id="logo" class="localized-int">Soccerway</a>

	<div class="language-picker-trigger">
		<span class="wrap-flag"><span class="flag-int"></span></span>
		<span class="indicator"></span>
	</div>

</div>

<script>
	jQuery('.language-picker-trigger').click(function () {
		jQuery('body').toggleClass('opened-language-picker');
	});
</script>

  </header>


      <div id="navigation_desktop">
  <nav id="main" class="container">
    <ul class="clearfix t_l">
      <li class="t_l">
        <a href="/" class="t_l">Fixtures</a>
      </li>

      <li class="t_l h_d  has-submenu ">
        <a href="/competitions/" class="t_l">Competitions</a>
      <div class="submenu col_3 clearfix">
          <div class="col">
            <ul>
              <li class="title">Club Domestic</li>
              <li><a href="/national/england/premier-league/c8/"><span class="flag_16 left_16 england_16_left"></span>Premier League</a></li>
              <li><a href="/national/italy/serie-a/c13/"><span class="flag_16 left_16 italy_16_left"></span>Serie A</a></li>
              <li><a href="/national/spain/primera-division/c7/"><span class="flag_16 left_16 spain_16_left"></span>La Liga</a></li>
              <li><a href="/national/germany/bundesliga/c9/"><span class="flag_16 left_16 germany_16_left"></span>Bundesliga</a></li>
              <li><a href="/national/france/ligue-1/c16/"><span class="flag_16 left_16 france_16_left"></span>Ligue 1</a></li>
              <li><a href="/national/netherlands/eredivisie/c1/"><span class="flag_16 left_16 netherlands_16_left"></span>Eredivisie</a></li>
              <li><a href="/national/turkey/super-lig/c19/"><span class="flag_16 left_16 turkey_16_left"></span>Süper Lig</a></li>
              <li><a href="/national/portugal/portuguese-liga-/c63/"><span class="flag_16 left_16 portugal_16_left"></span>Primeira Liga</a></li>
              <li><a href="/national/england/championship/c70/"><span class="flag_16 left_16 england_16_left"></span>Championship</a></li>
              <li><a href="/national/brazil/serie-a/c26/"><span class="flag_16 left_16 brazil_16_left"></span>Serie A</a></li>
            </ul>
            <a href="/competitions/club-domestic/" class="all">View all</a>
          </div>
          <div class="col first-group">
            <ul>
              <li class="title">Club International</li>
              <li class="sub-title">Europe</li>
              <li><a href="/international/europe/uefa-champions-league/c10/"><span class="flag_16 left_16 europe_16_left"></span>Champions League</a></li>
              <li><a href="/international/europe/uefa-cup/c18/"><span class="flag_16 left_16 europe_16_left"></span>Europa League</a></li>
              <li><a href="/international/europe/uefa-super-cup/c211/"><span class="flag_16 left_16 europe_16_left"></span>Super Cup</a></li>
              <li class="sub-title">Asia</li>
              <li><a href="/international/asia/afc-champions-league/c251/"><span class="flag_16 left_16 asia_16_left"></span>Champions League</a></li>
              <li><a href="/international/asia/afc-cup/c253/"><span class="flag_16 left_16 asia_16_left"></span>AFC Cup</a></li>
              <li class="sub-title">South America</li>
              <li><a href="/international/south-america/copa-libertadores/c241/"><span class="flag_16 left_16 south-america_16_left"></span>CONMEBOL Libertadores</a></li>
              <li><a href="/international/south-america/copa-sudamericana/c297/"><span class="flag_16 left_16 south-america_16_left"></span>CONMEBOL Sudamericana</a></li>
            </ul>
            <a href="/competitions/club-international/" class="all">View all</a>
          </div>
          <div class="col first-group">
            <ul>
              <li class="title">National</li>
              <li><a href="/international/world/world-cup/c72/" title="World Cup"><span class="flag_16 left_16 world_16_left"></span>World Cup</a></li>
              <li><a href="/international/world/olympics/c221/" title="Olympics"><span class="flag_16 left_16 world_16_left"></span>Olympics</a></li>
              <li><a href="/international/europe/european-championships/c25/" title="European Championship"><span class="flag_16 left_16 europe_16_left"></span>Euro 2016</a></li>
              <li><a href="/international/south-america/copa-america/c288/" title="Copa America"><span class="flag_16 left_16 south-america_16_left"></span>Copa America</a></li>
              <li><a href="/international/nc-america/concacaf-gold-cup/c247/" title="Concacaf Gold Cup"><span class="flag_16 left_16 nc-america_16_left"></span>Gold Cup</a></li>
              <li><a href="/international/asia/asian-cup/c250/" title="AFC Asian Cup"><span class="flag_16 left_16 asia_16_left"></span>AFC Asian Cup</a></li>
              <li><a href="/international/africa/africa-cup-of-nations/c385/" title="Africa Cup of Nations"><span class="flag_16 left_16 africa_16_left"></span>Africa Cup of Nations</a></li>
              <li><a href="/international/world/confederations-cup/c246/" title="Confederations Cup"><span class="flag_16 left_16 world_16_left"></span>Confederations Cup</a></li>
              <li><a href="/international/world/u20-world-cup/c274/" title="U20 World Cup"><span class="flag_16 left_16 world_16_left"></span>U20 World Cup</a></li>
              <li><a href="/international/europe/uefa-u21-championship/c280/" title="UEFA U21 Championship"><span class="flag_16 left_16 europe_16_left"></span>Euro U21 Champ</a></li>
            </ul>
            <a href="/competitions/national/" class="all">View all</a>
          </div>
          <div class="col first-group">
            <ul>
              <li class="title">Youth</li>
              <li class="sub-title">National</li>
              <li><a href="/international/world/u20-world-cup/c274/" title="U20 World Cup"><span class="flag_16 left_16 world_16_left"></span>U20 World Cup</a></li>
              <li><a href="/international/world/u17-world-cup/c365/" title="U17 World Cup"><span class="flag_16 left_16 world_16_left"></span>U17 World Cup</a></li>
              <li><a href="/international/europe/uefa-u21-championship/c280/" title="UEFA U21 Championship"><span class="flag_16 left_16 europe_16_left"></span>UEFA U21 Championship</a></li>
              <li><a href="/international/europe/uefa-u19-championship/c819/" title="UEFA U19 Championship"><span class="flag_16 left_16 europe_16_left"></span>UEFA U19 Championship</a></li>
              <li><a href="/international/south-america/sudamericano-u20/c512/" title="Sudamericano U20"><span class="flag_16 left_16 south-america_16_left"></span>Sudamericano U20</a></li>
              <li class="sub-title">Club</li>
              <li><a href="/national/england/u21-premier-league/c1058/" title="U21 Premier League Division 1"><span class="flag_16 left_16 england_16_left"></span>U21 Premier League Division 1</a></li>
              <li><a href="/national/italy/campionato-nazionale-primavera/c952/" title="Campionato Primavera 1"><span class="flag_16 left_16 italy_16_left"></span>Campionato Primavera 1</a></li>
              <li><a href="/national/germany/u-19-bundesliga/c945/" title="U19 Bundesliga"><span class="flag_16 left_16 germany_16_left"></span>U19 Bundesliga</a></li>
            </ul>
            <a href="/competitions/youth/" class="all">View all</a>
          </div>
        </div>
      </li>
      <li class="t_l h_d has-submenu">
        <a href="/teams/" class="t_l">Teams</a>
        <div class="submenu col_5 clearfix">
          <div class="col">
            <ul>
              <li class="title">Club teams</li>
              <li><a href="/teams/spain/futbol-club-barcelona/2017/"><span class="flag_16 left_16 spain_16_left"></span>Barcelona</a></li>
              <li><a href="/teams/spain/real-madrid-club-de-futbol/2016/"><span class="flag_16 left_16 spain_16_left"></span>Real Madrid</a></li>
              <li><a href="/teams/england/manchester-united-fc/662/"><span class="flag_16 left_16 england_16_left"></span>Manchester United</a></li>
              <li><a href="/teams/england/arsenal-fc/660/"><span class="flag_16 left_16 england_16_left"></span>Arsenal</a></li>
              <li><a href="/teams/england/liverpool-fc/663/"><span class="flag_16 left_16 england_16_left"></span>Liverpool</a></li>
              <a href="/teams/club-teams/" class="all">View all</a>
            </ul>
          </div>
          <div class="col">
            <ul class="group">
              <li><a href="/teams/italy/fc-internazionale-milano/1244/"><span class="flag_16 left_16 italy_16_left"></span>Internazionale</a></li>
              <li><a href="/teams/italy/ac-milan/1240/"><span class="flag_16 left_16 italy_16_left"></span>Milan</a></li>
              <li><a href="/teams/germany/fc-bayern-munchen/961/"><span class="flag_16 left_16 germany_16_left"></span>Bayern Munich</a></li>
              <li><a href="/teams/portugal/futebol-clube-do-porto/1678/"><span class="flag_16 left_16 portugal_16_left"></span>Porto</a></li>
              <li><a href="/teams/argentina/boca-juniors/95/"><span class="flag_16 left_16 argentina_16_left"></span>Boca Juniors</a></li>
            </ul>
          </div>
          <div class="col first-group">
            <ul>
              <li class="title">National Teams</li>
              <li><a href="/teams/spain/spain/2137/"><span class="flag_16 left_16 spain_16_left"></span>Spain</a></li>
              <li><a href="/teams/netherlands/netherlands/1552/"><span class="flag_16 left_16 netherlands_16_left"></span>Netherlands</a></li>
              <li><a href="/teams/germany/germany/1037/"><span class="flag_16 left_16 germany_16_left"></span>Germany</a></li>
              <li><a href="/teams/england/england/774/"><span class="flag_16 left_16 england_16_left"></span>England</a></li>
              <li><a href="/teams/brazil/brazil/349/"><span class="flag_16 left_16 brazil_16_left"></span>Brazil</a></li>
              <a href="/teams/national-teams/" class="all">View all</a>
            </ul>
          </div>
          <div class="col">
            <ul class="group">
              <li><a href="/teams/argentina/argentina/132/"><span class="flag_16 left_16 argentina_16_left"></span>Argentina</a></li>
              <li><a href="/teams/italy/italy/1318/"><span class="flag_16 left_16 italy_16_left"></span>Italy</a></li>
              <li><a href="/teams/portugal/portugal/1772/"><span class="flag_16 left_16 portugal_16_left"></span>Portugal</a></li>
              <li><a href="/teams/france/france/944/"><span class="flag_16 left_16 france_16_left"></span>France</a></li>
              <li><a href="/teams/russia/russia/1878/"><span class="flag_16 left_16 russia_16_left"></span>Russia</a></li>
            </ul>
          </div>
          <div class="col first-group">
            <ul>
              <li class="title">More</li>
              <li><a href="/teams/rankings/fifa/">FIFA Rankings</a></li>
              <li><a href="/teams/comparison/">H2H Comparison</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li class="t_l h_d">
        <a href="/players/" class="t_l">Players</a>
      </li>
      <li class="t_l h_d b365">
        <a href="https://www.bet365.com/olp/open-account?affiliate=365_00996288" target="_blank" rel="nofollow" class="t_l"><img src="/media/v1.5.4/img/betting/bet365_menu.png" height="45"></a>
      </li>
    </ul>
  </nav>
</div>
<div id="navigation_mobile">
  <nav id="main" class="container">
    <ul class="clearfix t_l">
      <li class="t_l">
        <div class="mobile-search-button" onclick="jQuery('#mobile-searchbox').toggle()"></div>
      </li>

      <li class="t_l">
        <a href="/" class="t_l">Fixtures</a>
      </li>

      <li class="t_l h_d  has-submenu ">
        <a href="/competitions/" class="t_l" style="padding: 0;">Competitions</a>
      <div class="submenu col_3 clearfix">
          <div class="col">
            <ul>
              <li class="title">Club Domestic</li>
              <li><a href="/national/england/premier-league/c8/"><span class="flag_16 left_16 england_16_left"></span>Premier League</a></li>
              <li><a href="/national/italy/serie-a/c13/"><span class="flag_16 left_16 italy_16_left"></span>Serie A</a></li>
              <li><a href="/national/spain/primera-division/c7/"><span class="flag_16 left_16 spain_16_left"></span>La Liga</a></li>
              <li><a href="/national/germany/bundesliga/c9/"><span class="flag_16 left_16 germany_16_left"></span>Bundesliga</a></li>
              <li><a href="/national/france/ligue-1/c16/"><span class="flag_16 left_16 france_16_left"></span>Ligue 1</a></li>
              <li><a href="/national/netherlands/eredivisie/c1/"><span class="flag_16 left_16 netherlands_16_left"></span>Eredivisie</a></li>
              <li><a href="/national/turkey/super-lig/c19/"><span class="flag_16 left_16 turkey_16_left"></span>Süper Lig</a></li>
              <li><a href="/national/portugal/portuguese-liga-/c63/"><span class="flag_16 left_16 portugal_16_left"></span>Primeira Liga</a></li>
              <li><a href="/national/england/championship/c70/"><span class="flag_16 left_16 england_16_left"></span>Championship</a></li>
              <li><a href="/national/brazil/serie-a/c26/"><span class="flag_16 left_16 brazil_16_left"></span>Serie A</a></li>
            </ul>
            <a href="/competitions/club-domestic/" class="all">View all</a>
          </div>
          <div class="col first-group">
            <ul>
              <li class="title">Club International</li>
              <li class="sub-title">Europe</li>
              <li><a href="/international/europe/uefa-champions-league/c10/"><span class="flag_16 left_16 europe_16_left"></span>Champions League</a></li>
              <li><a href="/international/europe/uefa-cup/c18/"><span class="flag_16 left_16 europe_16_left"></span>Europa League</a></li>
              <li><a href="/international/europe/uefa-super-cup/c211/"><span class="flag_16 left_16 europe_16_left"></span>Super Cup</a></li>
              <li class="sub-title">Asia</li>
              <li><a href="/international/asia/afc-champions-league/c251/"><span class="flag_16 left_16 asia_16_left"></span>Champions League</a></li>
              <li><a href="/international/asia/afc-cup/c253/"><span class="flag_16 left_16 asia_16_left"></span>AFC Cup</a></li>
              <li class="sub-title">South America</li>
              <li><a href="/international/south-america/copa-libertadores/c241/"><span class="flag_16 left_16 south-america_16_left"></span>CONMEBOL Libertadores</a></li>
              <li><a href="/international/south-america/copa-sudamericana/c297/"><span class="flag_16 left_16 south-america_16_left"></span>CONMEBOL Sudamericana</a></li>
            </ul>
            <a href="/competitions/club-international/" class="all">View all</a>
          </div>
          <div class="col first-group">
            <ul>
              <li class="title">National</li>
              <li><a href="/international/world/world-cup/c72/" title="World Cup"><span class="flag_16 left_16 world_16_left"></span>World Cup</a></li>
              <li><a href="/international/world/olympics/c221/" title="Olympics"><span class="flag_16 left_16 world_16_left"></span>Olympics</a></li>
              <li><a href="/international/europe/european-championships/c25/" title="European Championship"><span class="flag_16 left_16 europe_16_left"></span>Euro 2016</a></li>
              <li><a href="/international/south-america/copa-america/c288/" title="Copa America"><span class="flag_16 left_16 south-america_16_left"></span>Copa America</a></li>
              <li><a href="/international/nc-america/concacaf-gold-cup/c247/" title="Concacaf Gold Cup"><span class="flag_16 left_16 nc-america_16_left"></span>Gold Cup</a></li>
              <li><a href="/international/asia/asian-cup/c250/" title="AFC Asian Cup"><span class="flag_16 left_16 asia_16_left"></span>AFC Asian Cup</a></li>
              <li><a href="/international/africa/africa-cup-of-nations/c385/" title="Africa Cup of Nations"><span class="flag_16 left_16 africa_16_left"></span>Africa Cup of Nations</a></li>
              <li><a href="/international/world/confederations-cup/c246/" title="Confederations Cup"><span class="flag_16 left_16 world_16_left"></span>Confederations Cup</a></li>
              <li><a href="/international/world/u20-world-cup/c274/" title="U20 World Cup"><span class="flag_16 left_16 world_16_left"></span>U20 World Cup</a></li>
              <li><a href="/international/europe/uefa-u21-championship/c280/" title="UEFA U21 Championship"><span class="flag_16 left_16 europe_16_left"></span>Euro U21 Champ</a></li>
            </ul>
            <a href="/competitions/national/" class="all">View all</a>
          </div>
          <div class="col first-group">
            <ul>
              <li class="title">Youth</li>
              <li class="sub-title">National</li>
              <li><a href="/international/world/u20-world-cup/c274/" title="U20 World Cup"><span class="flag_16 left_16 world_16_left"></span>U20 World Cup</a></li>
              <li><a href="/international/world/u17-world-cup/c365/" title="U17 World Cup"><span class="flag_16 left_16 world_16_left"></span>U17 World Cup</a></li>
              <li><a href="/international/europe/uefa-u21-championship/c280/" title="UEFA U21 Championship"><span class="flag_16 left_16 europe_16_left"></span>UEFA U21 Championship</a></li>
              <li><a href="/international/europe/uefa-u19-championship/c819/" title="UEFA U19 Championship"><span class="flag_16 left_16 europe_16_left"></span>UEFA U19 Championship</a></li>
              <li><a href="/international/south-america/sudamericano-u20/c512/" title="Sudamericano U20"><span class="flag_16 left_16 south-america_16_left"></span>Sudamericano U20</a></li>
              <li class="sub-title">Club</li>
              <li><a href="/national/england/u21-premier-league/c1058/" title="U21 Premier League Division 1"><span class="flag_16 left_16 england_16_left"></span>U21 Premier League Division 1</a></li>
              <li><a href="/national/italy/campionato-nazionale-primavera/c952/" title="Campionato Primavera 1"><span class="flag_16 left_16 italy_16_left"></span>Campionato Primavera 1</a></li>
              <li><a href="/national/germany/u-19-bundesliga/c945/" title="U19 Bundesliga"><span class="flag_16 left_16 germany_16_left"></span>U19 Bundesliga</a></li>
            </ul>
            <a href="/competitions/youth/" class="all">View all</a>
          </div>
        </div>
      </li>
      <li class="t_l h_d" style="position: relative; background: none!important;">
        <span href="javascript:;" onclick="jQuery('#navigation-mobile-more').toggle();" class="navigation-mobile-more-link">...</span>
        <div id="navigation-mobile-more">
          <a href="/teams/">Teams</a>
          <a href="/players/">Players</a>
          <a href="https://www.bet365.com/olp/open-account?affiliate=365_00996288" class="b365-more" target="_blank" rel="nofollow" class="t_l"><img src="/media/v1.5.4/img/betting/bet365_menu.png" width="75"></a>
        </div>
      </li>
      <li class="t_l h_d"  id="mobile-searchbox" style="display: none; clear: both; position: relative; background: none!important; margin-left: 10px; margin-bottom: 10px;">
        <form accept-charset="utf-8" method="get" action="/search/" id="search-mobile" style="margin-left: 0; margin-top: 0;">
          <div id="search-input-wrap">
            <input type="text" id="search-input-mobile" value="Search" name="q" minlength="3">
            <div id="search-input-submit-mobile">&nbsp;</div>
          </div>
          <input type="hidden" value="all" name="module">
        </form>
      </li>
    </ul>
  </nav>
</div>

<script type="text/javascript">
  (function(){
    // delay submenu hovers
    var timer;
    $('main').select('li.h_d').each(function(el){
      el.observe('mouseenter', function(evt){
        var that = this;
        timer = window.setTimeout(function(){
          that.addClassName('active');
        }, 250);
      });
      el.observe('mouseleave', function(evt){
        window.clearTimeout(timer);
        el.removeClassName('active');
      });
    });

    var searchbox = $('search-input-submit');
    var searchinput = $('search-input');
    Event.observe(searchbox, 'click', function(event){ $('search').submit();});
    Event.observe(searchinput, 'focus', function(event){ if( searchinput.value == 'Search') searchinput.value = '';});
    Event.observe(searchinput, 'blur', function(event){ if( searchinput.value.trim() == '') searchinput.value = 'Search';});

    var searchboxmobile = $('search-input-submit-mobile');
    var searchinputmobile = $('search-input-mobile');
    Event.observe(searchboxmobile, 'click', function(event){ $('search-mobile').submit();});
    Event.observe(searchinputmobile, 'focus', function(event){ if( searchinputmobile.value == 'Search') searchinputmobile.value = '';});
    Event.observe(searchinputmobile, 'blur', function(event){ if( searchinputmobile.value.trim() == '') searchinputmobile.value = 'Search';});
  })();
</script>

      <div id="doc4" class="yui-t6">
        <div id="hd">
          <div class="block_navbar block block-nomb clearfix" id="block_navbar_27">
  <div id="navbar" class="clearfix">
  <div id="navbar-left">
    <select size="1" class="first  nav-select" onchange="window.location.href = $F(this);" data-plugin="customDropdown">
    <option value="" selected="selected">Popular</option>

      <option value="/national/england/premier-league/c8/">Premier League</option><option value="/national/germany/bundesliga/c9/">Bundesliga</option><option value="/national/italy/serie-a/c13/">Serie A</option><option value="/national/spain/primera-division/c7/">La Liga</option><option value="/national/france/ligue-1/c16/">Ligue 1</option><option value="/national/netherlands/eredivisie/c1/">Eredivisie</option><option value="/national/turkey/super-lig/c19/">Süper Lig</option><option value="/national/russia/premier-league/c121/">Premier League</option><option value="/national/portugal/portuguese-liga-/c63/">Primeira Liga</option><option value="/national/scotland/premier-league/c43/">Premiership</option><option value="/national/belgium/pro-league/c24/">First Division A</option><option value="/international/europe/uefa-champions-league/c10/">UEFA Champions League</option><option value="/international/europe/uefa-cup/c18/">UEFA Europa League</option><option value="/international/europe/wc-qualifying-europe/c224/">WC Qualification Europe</option>

    </select>
    <select size="1" class="  nav-select" onchange="window.location.href = $F(this);" data-plugin="customDropdown">
    <option value="" selected="selected">Club Domestic (1493)</option>

      <option value="/national/afghanistan/a8/">Afghanistan (1)</option><option value="/national/albania/a9/">Albania (8)</option><option value="/national/algeria/a10/">Algeria (5)</option><option value="/national/andorra/a12/">Andorra (5)</option><option value="/national/angola/a13/">Angola (2)</option><option value="/national/antigua-and-barbuda/a15/">Antigua and Barbuda (1)</option><option value="/national/argentina/a16/">Argentina (21)</option><option value="/national/armenia/a17/">Armenia (4)</option><option value="/national/aruba/a18/">Aruba (2)</option><option value="/national/australia/a19/">Australia (91)</option><option value="/national/austria/a20/">Austria (21)</option><option value="/national/azerbaijan/a21/">Azerbaijan (5)</option><option value="/national/bahrain/a23/">Bahrain (7)</option><option value="/national/bangladesh/a24/">Bangladesh (2)</option><option value="/national/barbados/a25/">Barbados (2)</option><option value="/national/belarus/a26/">Belarus (12)</option><option value="/national/belgium/a27/">Belgium (23)</option><option value="/national/belize/a28/">Belize (1)</option><option value="/national/benin/a29/">Benin (1)</option><option value="/national/bermuda/a30/">Bermuda (1)</option><option value="/national/bhutan/a31/">Bhutan (2)</option><option value="/national/bolivia/a32/">Bolivia (3)</option><option value="/national/bosnia-herzegovina/a33/">Bosnia and Herzegovina (4)</option><option value="/national/botswana/a34/">Botswana (1)</option><option value="/national/brazil/a35/">Brazil (96)</option><option value="/national/british-virgin-islands/a36/">British Virgin Islands (1)</option><option value="/national/brunei-darussalam/a37/">Brunei Darussalam (1)</option><option value="/national/bulgaria/a38/">Bulgaria (9)</option><option value="/national/burkina-faso/a39/">Burkina Faso (1)</option><option value="/national/burundi/a40/">Burundi (1)</option><option value="/national/cambodia/a41/">Cambodia (2)</option><option value="/national/cameroon/a42/">Cameroon (3)</option><option value="/national/canada/a43/">Canada (7)</option><option value="/national/cape-verde-islands/a44/">Cape Verde Islands (1)</option><option value="/national/cayman-islands/a45/">Cayman Islands (1)</option><option value="/national/chad/a47/">Chad (1)</option><option value="/national/chile/a48/">Chile (9)</option><option value="/national/china-pr/a49/">China PR (6)</option><option value="/national/chinese-taipei/a50/">Chinese Taipei (5)</option><option value="/national/colombia/a51/">Colombia (9)</option><option value="/national/congo/a52/">Congo (1)</option><option value="/national/congo-dr/a53/">Congo DR (1)</option><option value="/national/cook-islands/a54/">Cook Islands (1)</option><option value="/national/costa-rica/a55/">Costa Rica (5)</option><option value="/national/cote-divoire/a60/">Côte d'Ivoire (1)</option><option value="/national/croatia/a56/">Croatia (8)</option><option value="/national/cuba/a57/">Cuba (1)</option><option value="/national/curacao/a139/">Curaçao (2)</option><option value="/national/cyprus/a58/">Cyprus (11)</option><option value="/national/czech-republic/a59/">Czech Republic (13)</option><option value="/national/denmark/a61/">Denmark (16)</option><option value="/national/djibouti/a62/">Djibouti (1)</option><option value="/national/dominican-republic/a64/">Dominican Republic (1)</option><option value="/national/ecuador/a65/">Ecuador (7)</option><option value="/national/egypt/a66/">Egypt (4)</option><option value="/national/el-salvador/a67/">El Salvador (4)</option><option value="/national/england/a68/">England (81)</option><option value="/national/estonia/a71/">Estonia (18)</option><option value="/national/swaziland/a183/">Eswatini (1)</option><option value="/national/ethiopia/a72/">Ethiopia (1)</option><option value="/national/faroe-islands/a73/">Faroe Islands (9)</option><option value="/national/fiji/a74/">Fiji (5)</option><option value="/national/finland/a75/">Finland (15)</option><option value="/national/france/a76/">France (17)</option><option value="/national/french-guyana/a231/">French Guiana (2)</option><option value="/national/gabon/a77/">Gabon (1)</option><option value="/national/gambia/a78/">Gambia (1)</option><option value="/national/georgia/a79/">Georgia (8)</option><option value="/national/germany/a80/">Germany (44)</option><option value="/national/ghana/a81/">Ghana (4)</option><option value="/national/gibraltar/a226/">Gibraltar (4)</option><option value="/national/greece/a82/">Greece (12)</option><option value="/national/grenada/a83/">Grenada (1)</option><option value="/national/guadeloupe/a227/">Guadeloupe (1)</option><option value="/national/guam/a84/">Guam (1)</option><option value="/national/guatemala/a85/">Guatemala (4)</option><option value="/national/guinea/a86/">Guinea (1)</option><option value="/national/guyana/a88/">Guyana (1)</option><option value="/national/haiti/a89/">Haiti (3)</option><option value="/national/honduras/a90/">Honduras (2)</option><option value="/national/hong-kong/a91/">Hong Kong (9)</option><option value="/national/hungary/a92/">Hungary (15)</option><option value="/national/iceland/a93/">Iceland (32)</option><option value="/national/india/a94/">India (12)</option><option value="/national/indonesia/a95/">Indonesia (11)</option><option value="/national/iran/a96/">Iran (5)</option><option value="/national/iraq/a97/">Iraq (1)</option><option value="/national/israel/a99/">Israel (16)</option><option value="/national/italy/a100/">Italy (22)</option><option value="/national/jamaica/a101/">Jamaica (2)</option><option value="/national/japan/a102/">Japan (18)</option><option value="/national/jordan/a103/">Jordan (5)</option><option value="/national/kazakhstan/a104/">Kazakhstan (6)</option><option value="/national/kenya/a105/">Kenya (4)</option><option value="/national/korea-republic/a107/">Korea Republic (9)</option><option value="/national/kosovo/a249/">Kosovo (5)</option><option value="/national/kuwait/a108/">Kuwait (7)</option><option value="/national/kyrgyzstan/a109/">Kyrgyz Republic (2)</option><option value="/national/laos/a110/">Laos (1)</option><option value="/national/latvia/a111/">Latvia (7)</option><option value="/national/lebanon/a112/">Lebanon (4)</option><option value="/national/lesotho/a113/">Lesotho (1)</option><option value="/national/liberia/a114/">Liberia (1)</option><option value="/national/libya/a115/">Libya (2)</option><option value="/national/liechtenstein/a116/">Liechtenstein (1)</option><option value="/national/lithuania/a117/">Lithuania (7)</option><option value="/national/luxembourg/a118/">Luxembourg (8)</option><option value="/national/macao/a119/">Macao (1)</option><option value="/national/madagascar/a121/">Madagascar (1)</option><option value="/national/malawi/a122/">Malawi (1)</option><option value="/national/malaysia/a123/">Malaysia (8)</option><option value="/national/maldives/a124/">Maldives (1)</option><option value="/national/mali/a125/">Mali (1)</option><option value="/national/malta/a126/">Malta (14)</option><option value="/national/martinique/a229/">Martinique (1)</option><option value="/national/mauritania/a127/">Mauritania (1)</option><option value="/national/mauritius/a128/">Mauritius (1)</option><option value="/national/mexico/a129/">Mexico (13)</option><option value="/national/moldova/a130/">Moldova (7)</option><option value="/national/mongolia/a131/">Mongolia (2)</option><option value="/national/montenegro/a225/">Montenegro (5)</option><option value="/national/morocco/a133/">Morocco (3)</option><option value="/national/mozambique/a134/">Mozambique (1)</option><option value="/national/myanmar/a135/">Myanmar (1)</option><option value="/national/nepal/a137/">Nepal (2)</option><option value="/national/netherlands/a138/">Netherlands (36)</option><option value="/national/new-caledonia/a140/">New Caledonia (1)</option><option value="/national/new-zealand/a141/">New Zealand (7)</option><option value="/national/nicaragua/a142/">Nicaragua (4)</option><option value="/national/niger/a143/">Niger (1)</option><option value="/national/nigeria/a144/">Nigeria (1)</option><option value="/national/macedonia-fyr/a120/">North Macedonia (6)</option><option value="/national/northern-ireland/a145/">Northern Ireland (17)</option><option value="/national/norway/a146/">Norway (16)</option><option value="/national/oman/a147/">Oman (3)</option><option value="/national/pakistan/a148/">Pakistan (2)</option><option value="/national/palestine/a149/">Palestine (4)</option><option value="/national/panama/a150/">Panama (3)</option><option value="/national/papua-new-guinea/a151/">Papua New Guinea (1)</option><option value="/national/paraguay/a152/">Paraguay (4)</option><option value="/national/peru/a153/">Peru (7)</option><option value="/national/philippines/a154/">Philippines (4)</option><option value="/national/poland/a155/">Poland (15)</option><option value="/national/portugal/a156/">Portugal (17)</option><option value="/national/puerto-rico/a157/">Puerto Rico (1)</option><option value="/national/qatar/a158/">Qatar (8)</option><option value="/national/ireland-republic/a98/">Republic of Ireland (12)</option><option value="/national/reunion/a223/">Réunion (1)</option><option value="/national/romania/a159/">Romania (10)</option><option value="/national/russia/a160/">Russia (14)</option><option value="/national/rwanda/a161/">Rwanda (1)</option><option value="/national/samoa/a162/">Samoa (1)</option><option value="/national/san-marino/a163/">San Marino (3)</option><option value="/national/sao-tome-e-principe/a187/">São Tomé e Príncipe (1)</option><option value="/national/saudi-arabia/a164/">Saudi Arabia (9)</option><option value="/national/scotland/a165/">Scotland (34)</option><option value="/national/senegal/a166/">Senegal (1)</option><option value="/national/serbia/a224/">Serbia (7)</option><option value="/national/serbia-and-montenegro/a167/">Serbia and Montenegro (6)</option><option value="/national/sierra-leone/a169/">Sierra Leone (1)</option><option value="/national/singapore/a170/">Singapore (5)</option><option value="/national/slovakia/a171/">Slovakia (9)</option><option value="/national/slovenia/a172/">Slovenia (9)</option><option value="/national/solomon-islands/a173/">Solomon Islands (1)</option><option value="/national/somalia/a174/">Somalia (1)</option><option value="/national/south-africa/a175/">South Africa (11)</option><option value="/national/spain/a176/">Spain (19)</option><option value="/national/sri-lanka/a177/">Sri Lanka (1)</option><option value="/national/st-kitts-and-nevis/a178/">St. Kitts and Nevis (1)</option><option value="/national/sudan/a181/">Sudan (1)</option><option value="/national/surinam/a182/">Suriname (3)</option><option value="/national/sweden/a184/">Sweden (16)</option><option value="/national/switzerland/a185/">Switzerland (15)</option><option value="/national/syria/a186/">Syria (1)</option><option value="/national/tahiti/a188/">Tahiti (1)</option><option value="/national/tajikistan/a189/">Tajikistan (1)</option><option value="/national/tanzania/a190/">Tanzania (1)</option><option value="/national/thailand/a191/">Thailand (7)</option><option value="/national/togo/a192/">Togo (1)</option><option value="/national/trinidad-and-tobago/a194/">Trinidad and Tobago (7)</option><option value="/national/tunisia/a195/">Tunisia (4)</option><option value="/national/turkey/a196/">Turkey (36)</option><option value="/national/turkmenistan/a197/">Turkmenistan (1)</option><option value="/national/turks-and-caicos-islands/a198/">Turks and Caicos Islands (1)</option><option value="/national/uganda/a200/">Uganda (3)</option><option value="/national/ukraine/a201/">Ukraine (12)</option><option value="/national/united-arab-emirates/a202/">United Arab Emirates (13)</option><option value="/national/uruguay/a204/">Uruguay (7)</option><option value="/national/united-states/a203/">USA (41)</option><option value="/national/uzbekistan/a205/">Uzbekistan (9)</option><option value="/national/venezuela/a207/">Venezuela (5)</option><option value="/national/vietnam/a208/">Vietnam (12)</option><option value="/national/wales/a209/">Wales (5)</option><option value="/national/yemen/a210/">Yemen (3)</option><option value="/national/zambia/a211/">Zambia (1)</option><option value="/national/zimbabwe/a212/">Zimbabwe (1)</option>

    </select>
    <select size="1" class="  nav-select" onchange="window.location.href = $F(this);" data-plugin="customDropdown">
    <option value="" selected="selected">Club International (90)</option>


      <optgroup label="Africa">
        <option value="/international/africa/caf-champions-league/c256/">CAF Champions League</option><option value="/international/africa/caf-confederation-cup/c536/">CAF Confederation Cup</option><option value="/international/africa/caf-super-cup/c710/">CAF Super Cup</option><option value="/international/africa/cecafa-club-cup/c1809/">CECAFA Club Cup</option><option value="/international/africa/sportpesa-super-cup/c1805/">SportPesa Super Cup</option>
      </optgroup>
      <optgroup label="Asia">
        <option value="/international/asia/afc-champions-league/c251/">AFC Champions League</option><option value="/international/asia/afc-cup/c253/">AFC Cup</option><option value="/international/asia/gulf-clubs-championship/c773/">GCC Champions League</option><option value="/international/asia/afc-womens-club-championship/c2068/">AFC Women's Club Championship</option><option value="/international/asia/2-of-2-context-dz2-norway-suramadu-super-cup/c1703/">Suramadu Super Cup</option><option value="/international/asia/afc-presidents-cup/c713/">AFC President's Cup</option>
      </optgroup>
      <optgroup label="Europe">
        <option value="/international/europe/uefa-champions-league/c10/">UEFA Champions League</option><option value="/international/europe/uefa-cup/c18/">UEFA Europa League</option><option value="/international/europe/uefa-europa-conference-league/c2187/">UEFA Europa Conference League</option><option value="/international/europe/uefa-super-cup/c211/">UEFA Super Cup</option><option value="/international/europe/algarve-football-cup/c1692/">Algarve Football Cup</option><option value="/international/europe/fnl-cup/c1678/">FNL Cup</option><option value="/international/europe/premier-league-international-cup/c1423/">Premier League International Cup</option><option value="/international/europe/uefa-youth-league/c1154/">UEFA Youth League</option><option value="/international/europe/uefa-womens-champions-league/c336/">UEFA Women's Champions League</option><option value="/international/europe/united-by-womens-football/c1707/">United by Women's Football</option><option value="/international/europe/trofeo-angelo-dossena/c1717/">Trofeo Angelo Dossena</option><option value="/international/europe/uefa-intertoto-cup/c245/">UEFA Intertoto Cup</option><option value="/international/europe/the-nextgen-series/c977/">The NextGen Series</option><option value="/international/europe/setanta-cup/c244/">Setanta Cup</option><option value="/international/europe/baltic-league/c539/">Baltic League</option><option value="/international/europe/baltic-champions-cup/c902/">Baltic Champions Cup</option><option value="/international/europe/scandinavian-royal-league/c164/">Scandinavian Royal League</option><option value="/international/europe/bene-super-cup/c942/">BeNe Women's Super Cup</option>
      </optgroup>
      <optgroup label="N/C America">
        <option value="/international/nc-america/concacaf-champions-league/c255/">Concacaf Champions League</option><option value="/international/nc-america/concacaf-league/c1550/">Concacaf League</option><option value="/international/nc-america/cfu-club-championship/c704/">Concacaf Caribbean Club Championship</option><option value="/international/nc-america/concacaf-caribbean-club-shield/c1861/">Concacaf Caribbean Club Shield</option><option value="/international/nc-america/concacaf-league-play-off/c1862/">Concacaf League Play-off</option><option value="/international/nc-america/campeones-cup/c1729/">Campeones Cup</option><option value="/international/nc-america/leagues-cup/c1927/">Leagues Cup</option><option value="/international/nc-america/cup-winners-cup/c784/">Cup Winners Cup</option><option value="/international/nc-america/giants-cup/c754/">Giants Cup</option><option value="/international/nc-america/super-liga/c517/">Super Liga</option><option value="/international/nc-america/uncaf-clubs-cup/c319/">UNCAF Clubs Cup</option>
      </optgroup>
      <optgroup label="Oceania">
        <option value="/international/oceania/ofc-champions-league/c278/">OFC Champions League</option>
      </optgroup>
      <optgroup label="South America">
        <option value="/international/south-america/copa-libertadores/c241/">CONMEBOL Libertadores</option><option value="/international/south-america/copa-sudamericana/c297/">CONMEBOL Sudamericana</option><option value="/international/south-america/recopa-sudamericana/c345/">CONMEBOL Recopa</option><option value="/international/south-america/copa-libertadores-u20/c1038/">CONMEBOL Libertadores U20</option><option value="/international/south-america/copa-libertadores-femenina/c770/">CONMEBOL Libertadores Femenina</option><option value="/international/south-america/cuadrangular-internacional/c1867/">Cuadrangular Internacional - Copa 45 Anos</option><option value="/international/south-america/cuadrangular-vina-del-mar/c1866/">Cuadrangular Vina del Mar</option>
      </optgroup>
      <optgroup label="World">
        <option value="/international/world/fifa-club-world-cup/c284/">FIFA Club World Cup</option><option value="/international/world/club-friendlies/c732/">Club Friendlies</option><option value="/international/world/hybrid-friendlies/c1182/">Hybrid Friendlies</option><option value="/international/world/arab-champions-league/c533/">Arab Club Champions Cup</option><option value="/international/world/arena-cup/c1673/">Arena Cup</option><option value="/international/world/audi-cup/c1442/">Audi Cup</option><option value="/international/world/copa-euroamericana/c1365/">Copa EuroAmericana</option><option value="/international/world/copa-iberica/c1945/">Copa Ibérica</option><option value="/international/world/emirates-cup/c1407/">Emirates Cup</option><option value="/international/world/florida-cup/c1503/">Florida Cup</option><option value="/international/world/inter-continental-cup/c167/">Inter Continental Cup</option><option value="/international/world/international-champions-cup/c1148/">International Champions Cup</option><option value="/international/world/istria-winter-cup/c1672/">Istria Winter Cup</option><option value="/international/world/j-league-asia-challenge/c1517/">J.League Asia Challenge</option><option value="/international/world/jleague-world-challenge/c1568/">J.League World Challenge</option><option value="/international/world/pan-pacific-championship/c711/">Pan-Pacific Championship</option><option value="/international/world/premier-league-asia-trophy/c1444/">Premier League Asia Trophy</option><option value="/international/world/superopa-euroamerican/c1434/">Supercopa Euroamericana</option><option value="/international/world/suruga-bank-championship/c836/">J.League Cup / Copa Sudamericana Championship</option><option value="/international/world/the-atlantic-cup/c1314/">The Atlantic Cup</option><option value="/international/world/winter-cup/c1518/">Winter Cup</option><option value="/international/world/world-pro-soccer-classic/c1329/">World Pro Soccer Classic</option><option value="/international/world/olympics-intercontinental-play-offs-women/c1899/">Olympics Intercontinental Play-offs Women</option><option value="/international/world/lunar-new-year-cup/c1873/">Lunar New Year Cup</option><option value="/international/world/u23-club-friendlies/c1820/">U23 Club Friendlies</option><option value="/international/world/u21-club-friendlies/c1819/">U21 Club Friendlies</option><option value="/international/world/u20-club-friendlies/c1818/">U20 Club Friendlies</option><option value="/international/world/u19-club-friendlies/c1817/">U19 Club Friendlies</option><option value="/international/world/u18-club-friendlies/c1816/">U18 Club Friendlies</option><option value="/international/world/u17-club-friendlies/c1815/">U17 Club Friendlies</option><option value="/international/world/u16-club-friendlies/c1821/">U16 Club Friendlies</option><option value="/international/world/alkass-international-cup/c2061/">Alkass International Cup</option><option value="/international/world/mls-generation-cup/c1469/">MLS Generation Cup</option><option value="/international/world/youth-viareggio-cup/c1313/">Youth Viareggio Cup</option><option value="/international/world/brasileiro-u20/c1125/">Copa RS U20</option><option value="/international/world/club-friendlies-women/c1183/">Club Friendlies Women</option><option value="/international/world/womens--international-champions-cup/c1811/">Women's International Champions Cup</option><option value="/international/world/turkish-womens-cup/c1748/">Turkish Women's Cup</option><option value="/international/world/womens-friendship-tournament/c1829/">Women's Friendship Tournament</option><option value="/international/world/hybrid-friendlies-women/c1311/">Hybrid Friendlies Women</option><option value="/international/world/youth-club-friendlies-women/c1371/">Youth Club Friendlies Women</option><option value="/international/world/youth-club-friendlies/c1306/">Youth Club Friendlies</option>
      </optgroup>
    </select>
    <select size="1" class=" last nav-select" onchange="window.location.href = $F(this);" data-plugin="customDropdown">
    <option value="" selected="selected">National Teams (214)</option>


      <optgroup label="Africa">
        <option value="/international/africa/africa-cup-of-nations/c385/">Africa Cup of Nations</option><option value="/international/africa/africa-cup-of-nations-qualification/c1004/">Africa Cup of Nations Qualification</option><option value="/international/africa/wc-qualifying-africa/c228/">WC Qualification Africa</option><option value="/international/africa/african-nations-championship/c695/">African Nations Championship</option><option value="/international/africa/wafu-cup-of-nations/c1708/">WAFU Cup of Nations</option><option value="/international/africa/all-africa-games/c913/">All Africa Games</option><option value="/international/africa/u23-cup-of-nations/c1452/">Africa U23 Cup of Nations</option><option value="/international/africa/caf-u20-championship/c828/">Africa U20 Cup of Nations</option><option value="/international/africa/africa-u20-cup-of-nations-qualification/c2136/">Africa U20 Cup of Nations Qualification</option><option value="/international/africa/caf-u17-championship/c830/">Africa U17 Cup of Nations</option><option value="/international/africa/africa-u17-cup-of-nations-qualification/c2137/">Africa U17 Cup of Nations Qualification</option><option value="/international/africa/caf-championship--wc-qualifying-africa/c769/">Africa Women Cup of Nations</option><option value="/international/africa/-womens-olympic-qualifying-caf/c1461/">Women's Olympic Qualifying CAF</option><option value="/international/africa/cecafa-senior-challenge-cup/c877/">CECAFA Senior Challenge Cup</option><option value="/international/africa/cecafa-u20-championship/c2166/">CECAFA U20 Championship</option><option value="/international/africa/cecafa-womens-senior-challenge-cup/c1490/">CECAFA Women's Senior Challenge Cup</option><option value="/international/africa/cosafa-cup/c1571/">COSAFA Cup</option><option value="/international/africa/cosafa-u20-championship/c1740/">COSAFA U20 Championship</option><option value="/international/africa/cosafa-womens-cup/c1844/">COSAFA Women's Cup</option><option value="/international/africa/cosafa-womens-u20-cup/c1944/">COSAFA Women's U20 Cup</option><option value="/international/africa/uniffac-womens-tournament/c2069/">UNIFFAC Women's Tournament</option><option value="/international/africa/unaf-womens-tournament/c2070/">UNAF Women's Tournament</option><option value="/international/africa/caf-u20-womens-championship/c1308/">U20 Women's World Cup Qualification Africa</option><option value="/international/africa/u17-womens-world-cup-qualification-africa/c1679/">U17 Women's World Cup Qualification Africa</option><option value="/international/africa/nile-basin-tournament/c898/">Nile Basin Tournament</option>
      </optgroup>
      <optgroup label="Asia">
        <option value="/international/asia/asian-cup/c250/">AFC Asian Cup</option><option value="/international/asia/asian-cup-qualification/c1060/">Asian Cup Qualification</option><option value="/international/asia/wc-qualifying-asia/c229/">WC Qualification Asia</option><option value="/international/asia/asian-games/c490/">Asian Games</option><option value="/international/asia/asean-football-championship/c511/">AFF Championship</option><option value="/international/asia/south-asian-football-federation-championship/c844/">SAFF Championship</option><option value="/international/asia/west-asian-federation-championship/c841/">WAFF Championship</option><option value="/international/asia/east-asian-football-championship/c815/">EAFF E-1 Football Championship</option><option value="/international/asia/afc-solidarity-cup/c1492/">AFC Solidarity Cup</option><option value="/international/asia/gulf-cup/c516/">Gulf Cup of Nations</option><option value="/international/asia/afc-u23-asian-cup/c1431/">AFC U23 Asian Cup</option><option value="/international/asia/afc-u23-championship-qualification/c2128/">AFC U23 Asian Cup Qualification</option><option value="/international/asia/gulf-olympic-cup/c1084/">Gulf Olympic Teams Cup</option><option value="/international/asia/southeast-asian-games/c969/">Southeast Asian Games</option><option value="/international/asia/afc-u22-asian-cup/c1018/">AFC U22 Championship</option><option value="/international/asia/aff-u22-championship/c2083/">AFF U22 Championship</option><option value="/international/asia/afc-u20-asian-cup/c2153/">AFC U20 Asian Cup</option><option value="/international/asia/hassanal-bolkiah-trophy/c1778/">Hassanal Bolkiah Trophy</option><option value="/international/asia/afc-u20-asian-cup-qualification/c2154/">AFC U20 Asian Cup Qualification</option><option value="/international/asia/afc-u19-championship/c831/">AFC U19 Championship</option><option value="/international/asia/aff-u19-championship/c1121/">AFF U19 Championship</option><option value="/international/asia/saff-u18-championship/c1968/">SAFF U18 Championship</option><option value="/international/asia/afc-u17-asian-cup/c2151/">AFC U17 Asian Cup</option><option value="/international/asia/gulf-cup-u17/c1067/">Gulf Cup U17</option><option value="/international/asia/afc-u17-asian-cup-qualification/c2152/">AFC U17 Asian Cup Qualification</option><option value="/international/asia/afc-u17-championship/c834/">AFC U16 Championship</option><option value="/international/asia/aff-u16-championship/c1144/">AFF U16 Championship</option><option value="/international/asia/asian-cup--wc-qualifying/c766/">AFC Women's Asian Cup</option><option value="/international/asia/asian-cup-women-qualification/c1132/">Women's Asian Cup Qualification</option><option value="/international/asia/womens-olympic-qualifying-asia/c1433/">Women's Olympic Qualifying Asia</option><option value="/international/asia/asian-games-women/c869/">Women's Asian Games</option><option value="/international/asia/southeast-asian-games-women/c1178/">Southeast Asian Games Women</option><option value="/international/asia/eaff-east-asian-cup/c1098/">EAFF E-1 Football Championship Women</option><option value="/international/asia/aff-womens-championship/c1062/">AFF Women's Championship</option><option value="/international/asia/saff-womens-championship/c1061/">SAFF Women's Championship</option><option value="/international/asia/waff-women-championship/c1352/">WAFF Women's Championship</option><option value="/international/asia/afc-u20-womens-championship/c2098/">AFC U20 Women's Asian Cup</option><option value="/international/asia/afc-u20-womens-championship-qualification/c2100/">AFC U20 Women's Asian Cup Qualification</option><option value="/international/asia/afc-u19-womens-championship/c1103/">AFC U19 Women's Championship</option><option value="/international/asia/afc-u17-womens-championship/c2099/">AFC U17 Women's Asian Cup</option><option value="/international/asia/afc-u7-womens-championship-qualification/c2101/">AFC U17 Women's Asian Cup Qualification</option><option value="/international/asia/afc-u17-womens-championship/c1102/">AFC U16 Women's Championship</option><option value="/international/asia/aff-u15-championship/c2084/">AFF U15 Women's Championship</option><option value="/international/asia/airmarine-cup/c1913/">Airmarine Cup</option><option value="/international/asia/m-150-cup-u23/c1741/">M-150 Cup U23</option><option value="/international/asia/merlion-cup-u22/c1931/">Merlion Cup U22</option><option value="/international/asia/vietnamese-international-u21-championship/c1746/">Vietnamese International U21 Championship</option><option value="/international/asia/east-asian-games/c1172/">East Asian Games</option><option value="/international/asia/east-asian-games-women/c1173/">Women's East Asian Games</option><option value="/international/asia/afc-challenge-cup/c417/">AFC Challenge Cup</option><option value="/international/asia/nehru-cup/c843/">Nehru Cup</option>
      </optgroup>
      <optgroup label="Europe">
        <option value="/international/europe/european-championships/c25/">European Championship</option><option value="/international/europe/european-championship-qualification/c1000/">EC Qualification</option><option value="/international/europe/wc-qualifying-europe/c224/">WC Qualification Europe</option><option value="/international/europe/uefa-nations-league/c1661/">UEFA Nations League</option><option value="/international/europe/baltic-cup/c825/">Baltic Cup</option><option value="/international/europe/uefa-u21-championship/c280/">UEFA U21 Championship</option><option value="/international/europe/uefa-u21-championship-qualification/c2118/">UEFA U21 Championship Qualification</option><option value="/international/europe/uefa-u19-championship/c819/">UEFA U19 Championship</option><option value="/international/europe/uefa-u19-championship-qualification/c2119/">UEFA U19 Championship Qualification</option><option value="/international/europe/uefa-u17-championship/c821/">UEFA U17 Championship</option><option value="/international/europe/uefa-u17-championship-qualification/c2103/">UEFA U17 Championship Qualification</option><option value="/international/europe/u20-elite-league/c1698/">U20 Elite League</option><option value="/international/europe/lobanovsky-memorial-u21/c1934/">Lobanovsky Memorial U21</option><option value="/international/europe/uefa-womens-championship/c268/">UEFA Women's Championship</option><option value="/international/europe/womens-wc-qualifying-europe/c364/">Women's WC Qualification Europe</option><option value="/international/europe/-womens-olympic-qualifying-uefa/c1463/">Women's Olympic Qualifying UEFA Play-off</option><option value="/international/europe/uefa-u19-championship-women/c820/">UEFA U19 Championship Women</option><option value="/international/europe/uefa-u17-championship-women/c822/">UEFA U17 Championship Women</option><option value="/international/europe/uefa-u17-championship-women-qualification/c2104/">UEFA U17 Championship Women Qualification</option><option value="/international/europe/baltic-womens-cup/c1715/">Baltic Women's Cup</option><option value="/international/europe/latvian-federation-cup/c1737/">Latvian Federation Cup</option><option value="/international/europe/torneio-internacional-algarve-u17/c1336/">Torneio Internacional Algarve U17</option><option value="/international/europe/centenary-shield-u18-schoolboys/c1339/">Centenary Shield U18 Schoolboys</option><option value="/international/europe/nations-cup/c895/">Nations Cup</option>
      </optgroup>
      <optgroup label="N/C America">
        <option value="/international/nc-america/concacaf-gold-cup/c247/">Concacaf Gold Cup</option><option value="/international/nc-america/concacaf-gold-cup-play-offs/c1432/">Concacaf Gold Cup Qualification</option><option value="/international/nc-america/wc-qualifying-concacaf/c227/">WC Qualification Concacaf</option><option value="/international/nc-america/concacaf-nations-league/c1728/">Concacaf Nations League</option><option value="/international/nc-america/concacaf-nations-league-qualification/c1731/">Concacaf Nations League Qualification</option><option value="/international/nc-america/copa-centroamericana/c510/">Copa Centroamericana</option><option value="/international/nc-america/caribbean-cup/c755/">Caribbean Cup</option><option value="/international/nc-america/concacaf-confederations-cup-play-off/c1447/">Concacaf Confederations Cup Play-off</option><option value="/international/nc-america/olympic-qualifying-concacaf/c747/">Olympic Qualifying Concacaf</option><option value="/international/nc-america/ca-games/c1115/">CA Games</option><option value="/international/nc-america/concacaf-u20/c515/">Concacaf U20</option><option value="/international/nc-america/concacaf-u20-qualification/c2138/">Concacaf U20 Qualification</option><option value="/international/nc-america/concacaf-u17/c749/">Concacaf U17</option><option value="/international/nc-america/concacaf-u17-qualification/c2139/">Concacaf U17 Qualification</option><option value="/international/nc-america/womens-wc-qualifying-concacaf/c742/">Women's WC Qualification Concacaf</option><option value="/international/nc-america/womens-olympic-qualifying-concacaf/c748/">Concacaf Women’s Olympic Qualifying</option><option value="/international/nc-america/ca-games-womens/c1116/">CA Women's Games</option><option value="/international/nc-america/cfu-womens-challenge-series/c1755/">CFU Women's Challenge Series</option><option value="/international/nc-america/concacaf-womens-u20/c750/">Concacaf Women's U20</option><option value="/international/nc-america/concacaf-womens-u20-qualification/c2108/">Concacaf Women's U20 Qualification</option><option value="/international/nc-america/concacaf-womens-u17/c751/">Concacaf Women's U17</option><option value="/international/nc-america/concacaf-nations-cup/c753/">Concacaf Nations Cup</option><option value="/international/nc-america/copa-america-qualifying/c1454/">Copa America Qualification</option><option value="/international/nc-america/pre-concacaf-championships/c758/">Pre-Concacaf Championships</option><option value="/international/nc-america/womens-caribbean-cup/c1361/">Women's Caribbean Cup</option>
      </optgroup>
      <optgroup label="Oceania">
        <option value="/international/oceania/ofc-nations-cup/c1041/">OFC Nations Cup</option><option value="/international/oceania/wc-qualifying-oceania/c230/">WC Qualification Oceania</option><option value="/international/oceania/pacific-games/c947/">Pacific Games</option><option value="/international/oceania/olympic-qualifying-oceania/c2031/">Olympic Qualifying Oceania</option><option value="/international/oceania/ofc-u20-championship/c925/">OFC U20 Championship</option><option value="/international/oceania/ofc-u19-championship/c1808/">OFC U19 Championship</option><option value="/international/oceania/ofc-u17-championship/c900/">OFC U17 Championship</option><option value="/international/oceania/ofc-u16-championship/c1793/">OFC U16 Championship</option><option value="/international/oceania/womens-wc-qualifying-oceania/c483/">Women's WC Qualification Oceania</option><option value="/international/oceania/womens-pacific-games/c1464/">Women's Pacific Games</option><option value="/international/oceania/womens-olympic-qualifying-ofc/c1462/">Women's Olympic Qualifying OFC Play-off</option><option value="/international/oceania/ofc-u20-womens-championship/c1335/">OFC U20 Women's Championship</option><option value="/international/oceania/ofc-u19-womens-championship/c1896/">OFC U19 Women's Championship</option>
      </optgroup>
      <optgroup label="South America">
        <option value="/international/south-america/copa-america/c288/">Copa America</option><option value="/international/south-america/wc-qualifying-south-america/c225/">WC Qualification South America</option><option value="/international/south-america/conmebol-pre-olympic-tournament/c2035/">CONMEBOL Pre-Olympic Tournament</option><option value="/international/south-america/sudamericano-u20/c512/">Sudamericano U20</option><option value="/international/south-america/sudamericano-u17/c818/">Sudamericano U17</option><option value="/international/south-america/south-american-youth-games/c1342/">South American Youth Games</option><option value="/international/south-america/womens-wc-qualifying-south-america/c369/">Copa America Femenina</option><option value="/international/south-america/south-american-games/c1341/">South American Women's Games</option><option value="/international/south-america/bolivarian-games-women/c1739/">Bolivarian Games Women</option><option value="/international/south-america/sudamericano-u20-femenino/c1008/">Sudamericano U20 Femenino</option><option value="/international/south-america/sudamericano-u17-femenino/c1015/">Sudamericano U17 Femenino</option>
      </optgroup>
      <optgroup label="World">
        <option value="/international/world/world-cup/c72/">World Cup</option><option value="/international/world/confederations-cup/c246/">Confederations Cup</option><option value="/international/world/olympics/c221/">Olympics</option><option value="/international/world/wc-qualifying-intercontinental-play-offs/c375/">WC Qualification Intercontinental Play-offs</option><option value="/international/world/olympics-intercontinental-play-offs/c1451/">Olympics Intercontinental Play-offs</option><option value="/international/world/friendlies/c430/">Friendlies</option><option value="/international/world/non-fifa-friendlies/c1605/">Non-FIFA Friendlies</option><option value="/international/world/pan-arab-games/c988/">Pan Arab Games</option><option value="/international/world/kirin-cup/c275/">Kirin Cup</option><option value="/international/world/china-cup/c1502/">China Cup</option><option value="/international/world/bangabandhu-gold-cup/c1848/">Bangabandhu Gold Cup</option><option value="/international/world/intercontinental-cup/c1803/">Intercontinental Cup</option><option value="/international/world/kings-cup/c1705/">King's Cup</option><option value="/international/world/u20-world-cup/c274/">U20 World Cup</option><option value="/international/world/u17-world-cup/c365/">U17 World Cup</option><option value="/international/world/under-23-friendlies/c1541/">U23 National Team Friendlies</option><option value="/international/world/under-22-friendlies/c1542/">U22 National Team Friendlies</option><option value="/international/world/under-21-friendlies/c1543/">U21 National Team Friendlies</option><option value="/international/world/under-20-friendlies/c1544/">U20 National Team Friendlies</option><option value="/international/world/under-19-friendlies/c1545/">U19 National Team Friendlies</option><option value="/international/world/under-18-friendlies/c1546/">U18 National Team Friendlies</option><option value="/international/world/under-17-friendlies/c1547/">U17 National Team Friendlies</option><option value="/international/world/under-16-friendlies/c1548/">U16 National Team Friendlies</option><option value="/international/world/-u15-national-team-friendlies/c1601/">U15 National Team Friendlies</option><option value="/international/world/world-youth-festival-toulon/c281/">World Youth Festival Toulon</option><option value="/international/world/cotif-tournament/c1486/">COTIF Tournament</option><option value="/international/world/mediterranean-games/c1767/">Mediterranean Games</option><option value="/international/world/pan-american-games/c760/">Pan American Games</option><option value="/international/world/islamic-solidarity-games/c1751/">Islamic Solidarity Games</option><option value="/international/world/cac-games/c759/">CAC Games</option><option value="/international/world/granatkin-memorial-/c1504/">Granatkin Memorial </option><option value="/international/world/tournoi-u20-4-nations/c1525/">Tournoi U20 4 Nations</option><option value="/international/world/arab-u20-championship/c1053/">U20 Arab Championship</option><option value="/international/world/arab-u17-championship/c1049/">U17 Arab Championship</option><option value="/international/world/bolivarian-games-men/c1738/">Bolivarian Games Men</option><option value="/international/world/womens-world-cup/c368/">Women's World Cup</option><option value="/international/world/olympics-women/c645/">Olympics Women</option><option value="/international/world/womens-wc-qualifying-intercontinental-play-offs-/c876/">Women's WC Qualification Intercontinental Play-offs </option><option value="/international/world/womens-pan-american-games/c774/">Women's Pan American Games</option><option value="/international/world/cac-games-women/c816/">CAC Women's Games</option><option value="/international/world/friendly-women/c456/">Friendlies Women</option><option value="/international/world/algarve-cup/c415/">Algarve Cup</option><option value="/international/world/tournoi-de-france/c2046/">Tournoi de France</option><option value="/international/world/aphrodite-cup/c1706/">Aphrodite Cup</option><option value="/international/world/cyprus-cup/c1014/">Cyprus Women's Cup</option><option value="/international/world/ffa-cup-of-nations/c1860/">FFA Cup of Nations</option><option value="/international/world/four-nations-tournament/c1639/">Four Nations Tournament</option><option value="/international/world/istria-womens-cup/c1560/">Istria Women's Cup</option><option value="/international/world/pinatar-cup/c2055/">Pinatar Cup</option><option value="/international/world/shebelieves-cup/c1519/">SheBelieves Cup</option><option value="/international/world/tournament-of-nations/c1564/">Tournament of Nations</option><option value="/international/world/torneio-uber-internacional-feminino-de-selecoes/c1967/">Torneio Internacional Feminino de Seleções</option><option value="/international/world/yongchuan-tournament/c1633/">Yongchuan Tournament</option><option value="/international/world/u20-womens-world-cup/c455/">U20 Women's World Cup</option><option value="/international/world/u17-womens-world-cup/c832/">U17 Women's World Cup</option><option value="/international/world/u21-national-team-friendlies-women/c2037/">U21 National Team Friendlies Women</option><option value="/international/world/youth-friendlies-women/c1337/">Youth Friendlies Women</option><option value="/international/world/u23-national-team-friendlies-women/c1613/">U23 National Team Friendlies Women</option><option value="/international/world/u20-national-team-friendlies-women/c1611/">U20 National Team Friendlies Women</option><option value="/international/world/u19-national-team-friendlies-women/c1608/">U19 National Team Friendlies Women</option><option value="/international/world/u18-national-team-friendlies-women/c1612/">U18 National Team Friendlies Women</option><option value="/international/world/u17-national-team-friendlies-women/c1606/">U17 National Team Friendlies Women</option><option value="/international/world/u16-national-team-friendlies-women/c1609/">U16 National Team Friendlies Women</option><option value="/international/world/u15-national-team-friendlies-women/c2030/">U15 National Team Friendlies Women</option><option value="/international/world/youth-friendlies/c1266/">Youth Friendlies</option>
      </optgroup>
    </select>

    <select size="1" class="last nav-select" onchange="window.location.href = $F(this);" data-plugin="customDropdown">
    <option value="" selected="selected">Czech Republic (14)</option>
    <option value="/national/czech-republic/czech-liga/c82/">Czech Liga</option>
    <option value="/national/czech-republic/2-liga/c83/">FNL</option>
    <option value="/national/czech-republic/3-ligy/c84/">3. liga</option>
    <option value="/national/czech-republic/4-ligy/c633/">4. liga</option>
    <option value="/national/czech-republic/cup/c199/">Cup</option>
    <option value="/national/czech-republic/super-cup/c824/">Super Cup</option>
    <option value="/national/czech-republic/play-offs-12/c1929/">Play-offs 1/2</option>
    <option value="/national/czech-republic/juniorska-liga/c1065/">Juniorská Liga</option>
    <option value="/national/czech-republic/u19-league/c1071/">1. Liga U19</option>
    <option value="/national/czech-republic/1-liga/c330/">1. Liga Women</option>
    <option value="/national/czech-republic/2-liga-women/c653/">2. Liga Women</option>
    <option value="/national/czech-republic/cup-women/c667/">Women's Cup</option>
    <option value="/national/czech-republic/play-offs-12/c938/">Women's Play-offs 1/2</option>
    <option value="/national/czech-republic/club-friendlies/">Club Friendlies</option>
    </select>
  </div>

  <div id="navbar-right">
	<div class="block_ad ad_navbar_right block clearfix" >

</div>


  </div>
</div>

</div>
<script type="text/javascript" charset="utf-8">
 (function() {
    var block = new Block('block_navbar_27', 'block_navbar', null);



    TimestampFormatter.format('block_navbar_27');
  })();
</script>
        </div>
          <div class="banner-content non-uk">
            <div id="top-right-banner container">
              <div class="block_ad ad_header block clearfix" >
      <!-- /67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/top_banner -->
    <div id='div-gpt-ad-1478706130315-4'>
        <script>
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1478706130315-4'); });
        </script>
    </div>

</div>

            </div>
          </div>
        <div id="bd">
          <div id="subheading" style="position: relative;">
  <h1><span class="flag_24 left_24 czech-republic_24_left"></span>Czech Liga</h1>

	    <div id="submenu-container">

      <div class="clearfix" id="submenu" style="background: url(/media/v1.5.4/img/flags/230x70/59.png) top right no-repeat;">
  <ul>
    <li class=""><a href="/national/czech-republic/czech-liga/20202021/regular-season/r59164/">Summary</a></li><li class=""><a href="/national/czech-republic/czech-liga/20202021/regular-season/r59164/matches/">Matches</a></li><li class="current"><a href="/national/czech-republic/czech-liga/20202021/regular-season/r59164/tables/">Tables</a></li><li class=""><a href="/national/czech-republic/czech-liga/20202021/regular-season/r59164/players/">Players</a></li><li class=""><a href="/national/czech-republic/czech-liga/20202021/regular-season/r59164/venues/">Venues</a></li><li class=""><a href="/national/czech-republic/czech-liga/c82/archive/">Archive</a></li>
  </ul>
</div>
        <div class="submenu_dropdown">
        <select name="season_id" id="season_id_selector" class="dropdown-selector" size="1" style="max-width: 125px;">
  <option value="/national/czech-republic/czech-liga/20202021/s19160/" selected="selected">2020/2021</option><option value="/national/czech-republic/czech-liga/20192020/s17791/">2019/2020</option><option value="/national/czech-republic/czech-liga/20182019/s16052/">2018/2019</option><option value="/national/czech-republic/czech-liga/20172018/s14183/">2017/2018</option><option value="/national/czech-republic/czech-liga/20162017/s12617/">2016/2017</option><option value="/national/czech-republic/czech-liga/20152016/s11708/">2015/2016</option><option value="/national/czech-republic/czech-liga/20142015/s10095/">2014/2015</option><option value="/national/czech-republic/czech-liga/20132014/s8533/">2013/2014</option><option value="/national/czech-republic/czech-liga/20122013/s7112/">2012/2013</option><option value="/national/czech-republic/czech-liga/2011-2012/s6055/">2011/2012</option><option value="/national/czech-republic/czech-liga/2010-2011/s5184/">2010/2011</option><option value="/national/czech-republic/czech-liga/2009-2010/s3497/">2009/2010</option><option value="/national/czech-republic/czech-liga/2008-2009/s2853/">2008/2009</option><option value="/national/czech-republic/czech-liga/2007-2008/s2161/">2007/2008</option><option value="/national/czech-republic/czech-liga/2006-2007/s1625/">2006/2007</option><option value="/national/czech-republic/czech-liga/2005-2006/s1163/">2005/2006</option><option value="/national/czech-republic/czech-liga/2004-2005/s722/">2004/2005</option><option value="/national/czech-republic/czech-liga/2003-2004/s534/">2003/2004</option><option value="/national/czech-republic/czech-liga/2002-2003/s533/">2002/2003</option><option value="/national/czech-republic/czech-liga/2001-2002/s532/">2001/2002</option><option value="/national/czech-republic/czech-liga/2000-2001/s531/">2000/2001</option><option value="/national/czech-republic/czech-liga/1999-2000/s530/">1999/2000</option><option value="/national/czech-republic/czech-liga/1998-1999/s529/">1998/1999</option><option value="/national/czech-republic/czech-liga/1997-1998/s528/">1997/1998</option><option value="/national/czech-republic/czech-liga/1996-1997/s527/">1996/1997</option><option value="/national/czech-republic/czech-liga/1995-1996/s526/">1995/1996</option><option value="/national/czech-republic/czech-liga/1994-1995/s525/">1994/1995</option>
</select>



<script type="text/javascript" charset="utf-8">
  /* <![CDATA[ */
  $$('.dropdown-selector').invoke('observe', 'change', function() {
    window.location.href = $F(this);
  });
  /* ]]> */
</script>
        </div>

    </div>
</div>

<div id="yui-main">
  <div class="yui-b">
    <div class="clearfix">
      <div class="small-column">
				<div class=" clearfix block_competition_left_tree-wrapper redesign" id="page_match_1_block_competition_left_tree_2-wrapper">
  <div class="header-wrapper">
    <h2 class="header-label">
      Czech Republic
    </h2>
  </div>
  <div class="content plain ">
    <div class="block_competition_left_tree real-content clearfix " id="page_match_1_block_competition_left_tree_2">
      <div class="redesign">
  <ul class="left-tree">
    <li class="expanded current odd">
      <a href="/national/czech-republic/czech-liga/c82/" class="" title="Czech Liga">Czech Liga</a>
      <ul class="level-1 expanded">
        <li class="leaf current">
          <a href="/national/czech-republic/czech-liga/20202021/s19160/">2020/2021</a>
        </li>
      </ul>
    </li>
    <li class="  even">
      <a href="/national/czech-republic/2-liga/c83/" class="" title="FNL">FNL</a>
    </li>
    <li class="  odd">
      <a href="/national/czech-republic/3-ligy/c84/" class="" title="3. liga">3. liga</a>
    </li>
    <li class="  even">
      <a href="/national/czech-republic/4-ligy/c633/" class="" title="4. liga">4. liga</a>
    </li>
    <li class="  odd">
      <a href="/national/czech-republic/cup/c199/" class="" title="Cup">Cup</a>
    </li>
    <li class="  even">
      <a href="/national/czech-republic/super-cup/c824/" class="" title="Super Cup">Super Cup</a>
    </li>
    <li class="  odd">
      <a href="/national/czech-republic/play-offs-12/c1929/" class="" title="Play-offs 1/2">Play-offs 1/2</a>
    </li>
    <li class="  even">
      <a href="/national/czech-republic/juniorska-liga/c1065/" class="" title="Juniorská Liga">Juniorská Liga</a>
    </li>
    <li class="  odd">
      <a href="/national/czech-republic/u19-league/c1071/" class="" title="1. Liga U19">1. Liga U19</a>
    </li>
    <li class="  even">
      <a href="/national/czech-republic/1-liga/c330/" class="" title="1. Liga Women">1. Liga Women</a>
    </li>
    <li class="  odd">
      <a href="/national/czech-republic/2-liga-women/c653/" class="" title="2. Liga Women">2. Liga Women</a>
    </li>
    <li class="  even">
      <a href="/national/czech-republic/cup-women/c667/" class="" title="Women's Cup">Women's Cup</a>
    </li>
    <li class="  odd">
      <a href="/national/czech-republic/play-offs-12/c938/" class="" title="Women's Play-offs 1/2">Women's Play-offs 1/2</a>
    </li>
    <li class=" even">
      <a href="/national/czech-republic/club-friendlies/" class="">Club Friendlies</a>
    </li>
  </ul>
</div>

    </div>
  </div>
</div>


				<div class="block_ad ad_top_skyscraper block clearfix" >
      <!-- /67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/top_skyscraper -->
    <div id='div-gpt-ad-1478706130315-7' style='height:600px; width:120px;'>
        <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1478706130315-7'); });
        </script>
    </div>

</div>

			</div>
      <div class="content-column ">

      <div id="div-gpt-ad-1478706130315-6-1">
    <script>
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1478706130315-6-1'); });
    </script>
</div>



    <div class="block_fresh8 fresh8_offers block clearfix" >
  <!-- Begin: Fresh8 placement --> <div id="f8-005"></div><!-- End: Fresh8 placement -->

</div>





    <link rel="stylesheet" href="https://secure.widget.cloud.opta.net/v3/css/v3.football.opta-widgets.css">
<link rel="stylesheet" href="https://secure.widget.cloud.opta.net/v3/css/v3.universal.opta-widgets.css">

<script src="https://secure.widget.cloud.opta.net/v3/v3.opta-widgets.js"></script>

<script>
  var opta_settings = {
    subscription_id: '255c52c136b85a77d0f6d8d2f4de2d71',
    language: 'en_GB',
    timezone: moment.tz.guess(),
    config_obj: {
      "football": {
        "image": {
          "premium_banner": "/media/v1.5.4/img/hoarding-soccerway.png"
        }
      }
    },
    load_when_visible: false,
    language: 'en_GB',
    outlet_key: '',
    subscription_id: '255c52c136b85a77d0f6d8d2f4de2d71',
    timezone: moment.tz.guess()
  };
</script>
        <h2 id="dazn_video_title" class="hidden"><a href="/video/" class="dazn_video_title_link">Video: <span></span></a></h2>
    <div id="opta_widget_container" class="opta-dazn-video-widget">
      <opta-widget
        widget="dazn_video"
        template="normal"
        outlet_key="15nnn3ryay00o1jdw53766bhot"
        competition=""
        season=""
        folder="universal"
        sport="football"
        show_title="false"
        breakpoints="400"
        dazn_player_id=""
        video_id=""
        widget_id="videoPlayer"
        load="false"
      >
      </opta-widget>
      <script>
      (function(){
        function getVideoPlayerId()
        {
          var edition = "int";
          var cookie_namespace = 'sway:' + edition;
          var cookie_name = 'vvws'; // Video Views
          var video_views = Opta.storage.getItem(cookie_name, cookie_namespace, 'number', true) || 0;
          var playerId = [
            '7cf4bea96ebbb8e30cf9e99535', // STP - Flyaway - Audio5 - NoAddcontent
            '124c73e58d738642406d16ded5', // CTP - Flyaway - Audio50 - NoAddcontent
            '25a9528a84f648881593cc2a06' // CTP - 16:9 - Audio50 - NoAddcontent
          ];

          if (video_views <= 9) {
            Opta.storage.setItem(cookie_name, video_views + 1, 86400, cookie_namespace);
          }

          // video_views starts index 0
          if(edition === 'uk'){
            return playerId[0];
          }
          else if(edition === 'int'){
            if(video_views < 4) {
                return playerId[0];
            }
            if(video_views < 8) {
                return playerId[1];
            }
            return playerId[2];
          }
          else {
            switch (video_views) {
                case 0:
                    return playerId[0];
                case 1:
                    return playerId[1];
                default:
                    return playerId[2];
            }
          }
        }

        if(!Opta('opta-widget[widget="dazn_video"]').attr('dazn_player_id')){
          var player_id = getVideoPlayerId();
          Opta('opta-widget[widget="dazn_video"]').attr('dazn_player_id', player_id);
        }

        Opta.events.subscribe('widget.drawn', function(data, sub){
          if(data.widget.attr.widget === 'dazn_video') {
            dataLayer.push({event: 'dazn-video-drawn', dazn_player_id: data.widget.attr.dazn_player_id });
          }
        });
      })()
      </script>
    </div>

        <div id="opta_widget_container" class="opta-dazn-video-index-widget">
      <opta-widget
        widget="dazn_video_index"
        template="normal"
        outlet_key="15nnn3ryay00o1jdw53766bhot"
        competition="bu1l7ckihyr0errxw61p0m05"
        mfl_sport_id="289u5typ3vp4ifwh5thalohmq"
        season="1"
        team=""
        data_type="comp"
        sport="football"
        folder="universal"
        limit="3"
        video_link="/video/"
        show_teaser="false"
        show_title="false"
        breakpoints="400, 700"
      >
      </opta-widget>
    </div>
    <script>
      Opta.events.subscribe('widget.drawn', function (widget) {
        if (widget.widget.attr.widget === 'dazn_video_index') {
          var links = Opta('.opta-dazn-video-index-widget .Opta-Video-Preview > a');
          Opta('.opta-dazn-video-index-widget').on('click', '.Opta-MatchLink, .Opta-TeamLink', function (evt) {
            var video_id = Opta(this).parent().data('id'),
              widget_tags = Opta('.opta-dazn-video-widget opta-widget');

              Opta('#dazn_video_title a').text("Videos: Czech Liga");
              Opta('#dazn_video_title a').attr('href', Opta(this).attr('href'));
              Opta('#dazn_video_title').removeClass('hidden');
            if (widget_tags.length > 0) {
              evt.preventDefault();
              Opta(widget_tags[0]).attr({
                video_id: video_id,
                load: 'true'
              });
              Opta.start();
            }
          });
          if (links.length > 0) {
            links[0].click();
          }
        }
      });
    </script>



    <div class="block_dazn block  clearfix" id="page_competition_1_block_dazn_6">


</div>
<script type="text/javascript" charset="utf-8">
 (function() {
    var block = new Block('page_competition_1_block_dazn_6', 'block_dazn', null);



    TimestampFormatter.format('page_competition_1_block_dazn_6');
  })();
</script>





    <div class="redesign">
  <div class="block  clearfix block_competition_tables-wrapper body-table header-wrapper" id="page_competition_1_block_competition_tables_10-wrapper">
    <h2 class="header-label">
      <span class="tables-icon"></span>
      Tables
    </h2>

    <div class="dropdown">
      <select id="page_competition_1_block_competition_tables_10-select-league" data-plugin="customDropdown" autocomplete="off">
        <option id="page_competition_1_block_competition_tables_10_1_1" value="page_competition_1_block_competition_tables_10_1_1" selected="selected">League table</option>
        <option id="page_competition_1_block_competition_tables_10_1_2" value="page_competition_1_block_competition_tables_10_1_2" >Half-time</option>
        <option id="page_competition_1_block_competition_tables_10_1_3" value="page_competition_1_block_competition_tables_10_1_3" >Wide</option>
        <option id="page_competition_1_block_competition_tables_10_1_4" value="page_competition_1_block_competition_tables_10_1_4" >Form</option>
        <option id="page_competition_1_block_competition_tables_10_1_5" value="page_competition_1_block_competition_tables_10_1_5" >Over/under</option>
        <option id="page_competition_1_block_competition_tables_10_1_6" value="page_competition_1_block_competition_tables_10_1_6" >Attendance</option>
      </select>
    </div>

    <div class="content  " style="clear: both;">
      <div class="block_competition_tables real-content clearfix  redesign" id="page_competition_1_block_competition_tables_10">
        <div class="block_competition_league_table block block-nomb clearfix" id="page_competition_1_block_competition_tables_10_block_competition_league_table_1">
  <form action="/teams/comparison/" method="get" accept-charset="utf-8">
  <table class="leaguetable sortable table detailed-table" id="page_competition_1_block_competition_tables_10_block_competition_league_table_1_table" data-round_id="59164">
    <thead>
      <tr class="sub-head">
        <th title="Rank" class="sortasc sortdefaultasc">#</th>
        <th class="direction nosort">&nbsp;</th>
        <th class="text team sortdefaultasc">Team</th>

        <th class="number total mp"><acronym title="Matches played">MP</acronym></th>

        <th class="number total won total_won"><acronym title="Wins">W</acronym></th>
        <th class="number total drawn total_drawn"><acronym title="Draws">D</acronym></th>
        <th class="number total lost total_lost"><acronym title="Losses">L</acronym></th>
        <th class="number total gf total_gf"><acronym title="Goals for">F</acronym></th>
        <th class="number total ga total_ga"><acronym title="Goals against">A</acronym></th>















        <th class="number gd"><acronym title="Goal difference">D</acronym></th>
        <th class="number points"><acronym title="Points">P</acronym></th>

        <th class="form nosort">Last 5 matches</th>

        <th class="compare"><acronym title="Head 2 Head">H2H</acronym></th>
      </tr>
    </thead>
    <tbody>
      <tr class="odd   team_rank"  id="team_rank_row_533" data-team_id="533">
        <td class="rank rank-light-green">1</td>
        <td class="direction">
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/sk-slavia-praha/533/" title="Slavia Praha">Slavia Praha</a></td>

        <td class="number total mp">20</td>
        <td class="number total won total_won">16</td>
        <td class="number total drawn total_drawn">4</td>
        <td class="number total lost total_lost">0</td>
        <td class="number total gf total_gf">58</td>
        <td class="number total ga total_ga">12</td>















        <td class="number gd">+46</td>
        <td class="number points">52</td>

        <td class="form">
          <a href="/matches/2021/02/21/czech-republic/czech-liga/fk-teplice/sk-slavia-praha/3331138/" class="form-icon form-draw " title="Teplice - Slavia Praha 1 - 1">D</a>
          <a href="/matches/2021/02/13/czech-republic/czech-liga/sk-slavia-praha/fk-pardubice/3331126/" class="form-icon form-win " title="Slavia Praha - Pardubice 3 - 0">W</a>
          <a href="/matches/2021/02/07/czech-republic/czech-liga/1fk-pribram/sk-slavia-praha/3331124/" class="form-icon form-draw " title="Příbram - Slavia Praha 3 - 3">D</a>
          <a href="/matches/2021/01/31/czech-republic/czech-liga/sk-slavia-praha/fk-jablonec-97/3331109/" class="form-icon form-win " title="Slavia Praha - Jablonec 3 - 0">W</a>
          <a href="/matches/2021/01/27/czech-republic/czech-liga/fc-tescoma-zlin/sk-slavia-praha/3331067/" class="form-icon form-win last" title="Zlín - Slavia Praha 2 - 6">W</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="533" />
        </td>
      </tr>
      <tr class="even   team_rank"  id="team_rank_row_532" data-team_id="532">
        <td class="rank rank-light-green">2</td>
        <td class="direction">
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/ac-sparta-praha/532/" title="Sparta Praha">Sparta Praha</a></td>

        <td class="number total mp">20</td>
        <td class="number total won total_won">14</td>
        <td class="number total drawn total_drawn">2</td>
        <td class="number total lost total_lost">4</td>
        <td class="number total gf total_gf">43</td>
        <td class="number total ga total_ga">24</td>















        <td class="number gd">+19</td>
        <td class="number points">44</td>

        <td class="form">
          <a href="/matches/2021/02/20/czech-republic/czech-liga/fc-tescoma-zlin/ac-sparta-praha/3331140/" class="form-icon form-win " title="Zlín - Sparta Praha 0 - 3">W</a>
          <a href="/matches/2021/02/14/czech-republic/czech-liga/ac-sparta-praha/mfk-karvina/3331132/" class="form-icon form-win " title="Sparta Praha - Karviná 4 - 3">W</a>
          <a href="/matches/2021/02/07/czech-republic/czech-liga/sk-sigma-olomouc/ac-sparta-praha/3331121/" class="form-icon form-win " title="Sigma Olomouc - Sparta Praha 2 - 3">W</a>
          <a href="/matches/2021/01/30/czech-republic/czech-liga/ac-sparta-praha/bohemians-1905/3331110/" class="form-icon form-loss " title="Sparta Praha - Bohemians 1905 0 - 1">L</a>
          <a href="/matches/2021/01/24/czech-republic/czech-liga/ac-sparta-praha/fk-mlada-boleslav/3331101/" class="form-icon form-win last" title="Sparta Praha - Mladá Boleslav 1 - 0">W</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="532" />
        </td>
      </tr>
      <tr class="odd   team_rank"  id="team_rank_row_2986" data-team_id="2986">
        <td class="rank rank-light-blue">3</td>
        <td class="direction">
          <img src="/media/v1.5.4/img/delta_plus.gif" width="7" height="4" title="Previous rank: 4" alt="Previous rank: 4" />
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/1-fc-slovacko/2986/" title="Slovácko">Slovácko</a></td>

        <td class="number total mp">20</td>
        <td class="number total won total_won">12</td>
        <td class="number total drawn total_drawn">4</td>
        <td class="number total lost total_lost">4</td>
        <td class="number total gf total_gf">39</td>
        <td class="number total ga total_ga">18</td>















        <td class="number gd">+21</td>
        <td class="number points">40</td>

        <td class="form">
          <a href="/matches/2021/02/24/czech-republic/czech-liga/fk-jablonec-97/1-fc-slovacko/3331117/" class="form-icon form-win " title="Jablonec - Slovácko 0 - 3">W</a>
          <a href="/matches/2021/02/20/czech-republic/czech-liga/1fk-pribram/1-fc-slovacko/3331139/" class="form-icon form-win " title="Příbram - Slovácko 1 - 4">W</a>
          <a href="/matches/2021/02/12/czech-republic/czech-liga/1-fc-slovacko/fk-teplice/3331128/" class="form-icon form-win " title="Slovácko - Teplice 2 - 0">W</a>
          <a href="/matches/2021/01/30/czech-republic/czech-liga/1-fc-slovacko/sk-dynamo-ceske-budejovice/3331114/" class="form-icon form-draw " title="Slovácko - České Budějovice 0 - 0">D</a>
          <a href="/matches/2021/01/23/czech-republic/czech-liga/bohemians-1905/1-fc-slovacko/3331103/" class="form-icon form-win last" title="Bohemians 1905 - Slovácko 1 - 3">W</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="2986" />
        </td>
      </tr>
      <tr class="even   team_rank"  id="team_rank_row_540" data-team_id="540">
        <td class="rank rank-light-blue">4</td>
        <td class="direction">
          <img src="/media/v1.5.4/img/delta_min.gif" width="7" height="4" title="Previous rank: 3" alt="Previous rank: 3" />
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/fk-jablonec-97/540/" title="Jablonec">Jablonec</a></td>

        <td class="number total mp">21</td>
        <td class="number total won total_won">12</td>
        <td class="number total drawn total_drawn">3</td>
        <td class="number total lost total_lost">6</td>
        <td class="number total gf total_gf">36</td>
        <td class="number total ga total_ga">25</td>















        <td class="number gd">+11</td>
        <td class="number points">39</td>

        <td class="form">
          <a href="/matches/2021/02/27/czech-republic/czech-liga/sfc-opava/fk-jablonec-97/3331149/" class="form-icon form-win " title="Opava - Jablonec 0 - 1">W</a>
          <a href="/matches/2021/02/24/czech-republic/czech-liga/fk-jablonec-97/1-fc-slovacko/3331117/" class="form-icon form-loss " title="Jablonec - Slovácko 0 - 3">L</a>
          <a href="/matches/2021/02/19/czech-republic/czech-liga/fk-jablonec-97/fk-mlada-boleslav/3331136/" class="form-icon form-draw " title="Jablonec - Mladá Boleslav 1 - 1">D</a>
          <a href="/matches/2021/02/14/czech-republic/czech-liga/fc-banik-ostrava/fk-jablonec-97/3331130/" class="form-icon form-loss " title="Baník Ostrava - Jablonec 2 - 1">L</a>
          <a href="/matches/2021/01/31/czech-republic/czech-liga/sk-slavia-praha/fk-jablonec-97/3331109/" class="form-icon form-loss last" title="Slavia Praha - Jablonec 3 - 0">L</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="540" />
        </td>
      </tr>
      <tr class="odd   team_rank"  id="team_rank_row_537" data-team_id="537">
        <td class="rank ">5</td>
        <td class="direction">
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/fc-slovan-liberec/537/" title="Slovan Liberec">Slovan Liberec</a></td>

        <td class="number total mp">21</td>
        <td class="number total won total_won">10</td>
        <td class="number total drawn total_drawn">6</td>
        <td class="number total lost total_lost">5</td>
        <td class="number total gf total_gf">32</td>
        <td class="number total ga total_ga">19</td>















        <td class="number gd">+13</td>
        <td class="number points">36</td>

        <td class="form">
          <a href="/matches/2021/02/26/czech-republic/czech-liga/fc-slovan-liberec/fk-pardubice/3331145/" class="form-icon form-win " title="Slovan Liberec - Pardubice 4 - 1">W</a>
          <a href="/matches/2021/02/21/czech-republic/czech-liga/mfk-karvina/fc-slovan-liberec/3331137/" class="form-icon form-draw " title="Karviná - Slovan Liberec 1 - 1">D</a>
          <a href="/matches/2021/02/17/czech-republic/czech-liga/fc-slovan-liberec/fc-tescoma-zlin/3331108/" class="form-icon form-win " title="Slovan Liberec - Zlín 1 - 0">W</a>
          <a href="/matches/2021/02/14/czech-republic/czech-liga/fc-slovan-liberec/sk-dynamo-ceske-budejovice/3331127/" class="form-icon form-draw " title="Slovan Liberec - České Budějovice 0 - 0">D</a>
          <a href="/matches/2021/02/06/czech-republic/czech-liga/fc-viktoria-plzen/fc-slovan-liberec/3331118/" class="form-icon form-win last" title="Viktoria Plzen - Slovan Liberec 0 - 2">W</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="537" />
        </td>
      </tr>
      <tr class="even   team_rank"  id="team_rank_row_546" data-team_id="546">
        <td class="rank ">6</td>
        <td class="direction">
          <img src="/media/v1.5.4/img/delta_plus.gif" width="7" height="4" title="Previous rank: 8" alt="Previous rank: 8" />
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/fc-viktoria-plzen/546/" title="Viktoria Plzen">Viktoria Plzen</a></td>

        <td class="number total mp">21</td>
        <td class="number total won total_won">10</td>
        <td class="number total drawn total_drawn">4</td>
        <td class="number total lost total_lost">7</td>
        <td class="number total gf total_gf">38</td>
        <td class="number total ga total_ga">26</td>















        <td class="number gd">+12</td>
        <td class="number points">34</td>

        <td class="form">
          <a href="/matches/2021/02/27/czech-republic/czech-liga/1fc-brno/fc-viktoria-plzen/3331147/" class="form-icon form-win " title="Zbrojovka Brno - Viktoria Plzen 0 - 1">W</a>
          <a href="/matches/2021/02/21/czech-republic/czech-liga/fc-viktoria-plzen/bohemians-1905/3331135/" class="form-icon form-win " title="Viktoria Plzen - Bohemians 1905 3 - 1">W</a>
          <a href="/matches/2021/02/14/czech-republic/czech-liga/fk-mlada-boleslav/fc-viktoria-plzen/3331129/" class="form-icon form-draw " title="Mladá Boleslav - Viktoria Plzen 2 - 2">D</a>
          <a href="/matches/2021/02/06/czech-republic/czech-liga/fc-viktoria-plzen/fc-slovan-liberec/3331118/" class="form-icon form-loss " title="Viktoria Plzen - Slovan Liberec 0 - 2">L</a>
          <a href="/matches/2021/01/31/czech-republic/czech-liga/fc-banik-ostrava/fc-viktoria-plzen/3331112/" class="form-icon form-win last" title="Baník Ostrava - Viktoria Plzen 0 - 2">W</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="546" />
        </td>
      </tr>
      <tr class="odd   team_rank"  id="team_rank_row_11132" data-team_id="11132">
        <td class="rank ">7</td>
        <td class="direction">
          <img src="/media/v1.5.4/img/delta_plus.gif" width="7" height="4" title="Previous rank: 9" alt="Previous rank: 9" />
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/fk-pardubice/11132/" title="Pardubice">Pardubice</a></td>

        <td class="number total mp">21</td>
        <td class="number total won total_won">9</td>
        <td class="number total drawn total_drawn">4</td>
        <td class="number total lost total_lost">8</td>
        <td class="number total gf total_gf">21</td>
        <td class="number total ga total_ga">28</td>















        <td class="number gd">-7</td>
        <td class="number points">31</td>

        <td class="form">
          <a href="/matches/2021/02/26/czech-republic/czech-liga/fc-slovan-liberec/fk-pardubice/3331145/" class="form-icon form-loss " title="Slovan Liberec - Pardubice 4 - 1">L</a>
          <a href="/matches/2021/02/20/czech-republic/czech-liga/fk-pardubice/fc-banik-ostrava/3331142/" class="form-icon form-win " title="Pardubice - Baník Ostrava 3 - 2">W</a>
          <a href="/matches/2021/02/13/czech-republic/czech-liga/sk-slavia-praha/fk-pardubice/3331126/" class="form-icon form-loss " title="Slavia Praha - Pardubice 3 - 0">L</a>
          <a href="/matches/2021/02/07/czech-republic/czech-liga/fk-teplice/fk-pardubice/3331119/" class="form-icon form-win " title="Teplice - Pardubice 0 - 1">W</a>
          <a href="/matches/2021/01/30/czech-republic/czech-liga/fk-pardubice/1fk-pribram/3331115/" class="form-icon form-win last" title="Pardubice - Příbram 1 - 0">W</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="11132" />
        </td>
      </tr>
      <tr class="even   team_rank"  id="team_rank_row_534" data-team_id="534">
        <td class="rank ">8</td>
        <td class="direction">
          <img src="/media/v1.5.4/img/delta_plus.gif" width="7" height="4" title="Previous rank: 10" alt="Previous rank: 10" />
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/sk-sigma-olomouc/534/" title="Sigma Olomouc">Sigma Olomouc</a></td>

        <td class="number total mp">20</td>
        <td class="number total won total_won">7</td>
        <td class="number total drawn total_drawn">9</td>
        <td class="number total lost total_lost">4</td>
        <td class="number total gf total_gf">29</td>
        <td class="number total ga total_ga">23</td>















        <td class="number gd">+6</td>
        <td class="number points">30</td>

        <td class="form">
          <a href="/matches/2021/02/20/czech-republic/czech-liga/sk-sigma-olomouc/1fc-brno/3331141/" class="form-icon form-win " title="Sigma Olomouc - Zbrojovka Brno 1 - 0">W</a>
          <a href="/matches/2021/02/14/czech-republic/czech-liga/bohemians-1905/sk-sigma-olomouc/3331125/" class="form-icon form-draw " title="Bohemians 1905 - Sigma Olomouc 0 - 0">D</a>
          <a href="/matches/2021/02/07/czech-republic/czech-liga/sk-sigma-olomouc/ac-sparta-praha/3331121/" class="form-icon form-loss " title="Sigma Olomouc - Sparta Praha 2 - 3">L</a>
          <a href="/matches/2021/02/02/czech-republic/czech-liga/fk-mlada-boleslav/sk-sigma-olomouc/3331113/" class="form-icon form-draw " title="Mladá Boleslav - Sigma Olomouc 1 - 1">D</a>
          <a href="/matches/2021/01/23/czech-republic/czech-liga/sk-sigma-olomouc/sfc-opava/3331105/" class="form-icon form-win last" title="Sigma Olomouc - Opava 4 - 1">W</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="534" />
        </td>
      </tr>
      <tr class="odd   team_rank"  id="team_rank_row_531" data-team_id="531">
        <td class="rank ">9</td>
        <td class="direction">
          <img src="/media/v1.5.4/img/delta_min.gif" width="7" height="4" title="Previous rank: 6" alt="Previous rank: 6" />
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/fc-banik-ostrava/531/" title="Baník Ostrava">Baník Ostrava</a></td>

        <td class="number total mp">21</td>
        <td class="number total won total_won">8</td>
        <td class="number total drawn total_drawn">6</td>
        <td class="number total lost total_lost">7</td>
        <td class="number total gf total_gf">26</td>
        <td class="number total ga total_ga">21</td>















        <td class="number gd">+5</td>
        <td class="number points">30</td>

        <td class="form">
          <a href="/matches/2021/02/27/czech-republic/czech-liga/fc-banik-ostrava/fk-teplice/3331150/" class="form-icon form-draw " title="Baník Ostrava - Teplice 1 - 1">D</a>
          <a href="/matches/2021/02/20/czech-republic/czech-liga/fk-pardubice/fc-banik-ostrava/3331142/" class="form-icon form-loss " title="Pardubice - Baník Ostrava 3 - 2">L</a>
          <a href="/matches/2021/02/14/czech-republic/czech-liga/fc-banik-ostrava/fk-jablonec-97/3331130/" class="form-icon form-win " title="Baník Ostrava - Jablonec 2 - 1">W</a>
          <a href="/matches/2021/02/05/czech-republic/czech-liga/sk-dynamo-ceske-budejovice/fc-banik-ostrava/3331116/" class="form-icon form-loss " title="České Budějovice - Baník Ostrava 1 - 0">L</a>
          <a href="/matches/2021/01/31/czech-republic/czech-liga/fc-banik-ostrava/fc-viktoria-plzen/3331112/" class="form-icon form-loss last" title="Baník Ostrava - Viktoria Plzen 0 - 2">L</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="531" />
        </td>
      </tr>
      <tr class="even   team_rank"  id="team_rank_row_538" data-team_id="538">
        <td class="rank ">10</td>
        <td class="direction">
          <img src="/media/v1.5.4/img/delta_min.gif" width="7" height="4" title="Previous rank: 7" alt="Previous rank: 7" />
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/sk-dynamo-ceske-budejovice/538/" title="České Budějovice">České Budějovice</a></td>

        <td class="number total mp">21</td>
        <td class="number total won total_won">7</td>
        <td class="number total drawn total_drawn">9</td>
        <td class="number total lost total_lost">5</td>
        <td class="number total gf total_gf">25</td>
        <td class="number total ga total_ga">25</td>















        <td class="number gd">+0</td>
        <td class="number points">30</td>

        <td class="form">
          <a href="/matches/2021/02/27/czech-republic/czech-liga/bohemians-1905/sk-dynamo-ceske-budejovice/3331144/" class="form-icon form-draw " title="Bohemians 1905 - České Budějovice 1 - 1">D</a>
          <a href="/matches/2021/02/21/czech-republic/czech-liga/sk-dynamo-ceske-budejovice/sfc-opava/3331134/" class="form-icon form-loss " title="České Budějovice - Opava 0 - 1">L</a>
          <a href="/matches/2021/02/14/czech-republic/czech-liga/fc-slovan-liberec/sk-dynamo-ceske-budejovice/3331127/" class="form-icon form-draw " title="Slovan Liberec - České Budějovice 0 - 0">D</a>
          <a href="/matches/2021/02/05/czech-republic/czech-liga/sk-dynamo-ceske-budejovice/fc-banik-ostrava/3331116/" class="form-icon form-win " title="České Budějovice - Baník Ostrava 1 - 0">W</a>
          <a href="/matches/2021/01/30/czech-republic/czech-liga/1-fc-slovacko/sk-dynamo-ceske-budejovice/3331114/" class="form-icon form-draw last" title="Slovácko - České Budějovice 0 - 0">D</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="538" />
        </td>
      </tr>
      <tr class="odd   team_rank"  id="team_rank_row_2784" data-team_id="2784">
        <td class="rank ">11</td>
        <td class="direction">
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/mfk-karvina/2784/" title="Karviná">Karviná</a></td>

        <td class="number total mp">20</td>
        <td class="number total won total_won">6</td>
        <td class="number total drawn total_drawn">7</td>
        <td class="number total lost total_lost">7</td>
        <td class="number total gf total_gf">24</td>
        <td class="number total ga total_ga">31</td>















        <td class="number gd">-7</td>
        <td class="number points">25</td>

        <td class="form">
          <a href="/matches/2021/02/21/czech-republic/czech-liga/mfk-karvina/fc-slovan-liberec/3331137/" class="form-icon form-draw " title="Karviná - Slovan Liberec 1 - 1">D</a>
          <a href="/matches/2021/02/14/czech-republic/czech-liga/ac-sparta-praha/mfk-karvina/3331132/" class="form-icon form-loss " title="Sparta Praha - Karviná 4 - 3">L</a>
          <a href="/matches/2021/02/06/czech-republic/czech-liga/mfk-karvina/sfc-opava/3331120/" class="form-icon form-win " title="Karviná - Opava 3 - 1">W</a>
          <a href="/matches/2021/01/30/czech-republic/czech-liga/fk-teplice/mfk-karvina/3331107/" class="form-icon form-draw " title="Teplice - Karviná 2 - 2">D</a>
          <a href="/matches/2021/01/23/czech-republic/czech-liga/mfk-karvina/sk-slavia-praha/3331106/" class="form-icon form-loss last" title="Karviná - Slavia Praha 1 - 3">L</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="2784" />
        </td>
      </tr>
      <tr class="even   team_rank"  id="team_rank_row_550" data-team_id="550">
        <td class="rank ">12</td>
        <td class="direction">
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/bohemians-1905/550/" title="Bohemians 1905">Bohemians 1905</a></td>

        <td class="number total mp">21</td>
        <td class="number total won total_won">6</td>
        <td class="number total drawn total_drawn">6</td>
        <td class="number total lost total_lost">9</td>
        <td class="number total gf total_gf">23</td>
        <td class="number total ga total_ga">27</td>















        <td class="number gd">-4</td>
        <td class="number points">24</td>

        <td class="form">
          <a href="/matches/2021/02/27/czech-republic/czech-liga/bohemians-1905/sk-dynamo-ceske-budejovice/3331144/" class="form-icon form-draw " title="Bohemians 1905 - České Budějovice 1 - 1">D</a>
          <a href="/matches/2021/02/21/czech-republic/czech-liga/fc-viktoria-plzen/bohemians-1905/3331135/" class="form-icon form-loss " title="Viktoria Plzen - Bohemians 1905 3 - 1">L</a>
          <a href="/matches/2021/02/14/czech-republic/czech-liga/bohemians-1905/sk-sigma-olomouc/3331125/" class="form-icon form-draw " title="Bohemians 1905 - Sigma Olomouc 0 - 0">D</a>
          <a href="/matches/2021/02/06/czech-republic/czech-liga/bohemians-1905/1fc-brno/3331123/" class="form-icon form-win " title="Bohemians 1905 - Zbrojovka Brno 2 - 1">W</a>
          <a href="/matches/2021/01/30/czech-republic/czech-liga/ac-sparta-praha/bohemians-1905/3331110/" class="form-icon form-win last" title="Sparta Praha - Bohemians 1905 0 - 1">W</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="550" />
        </td>
      </tr>
      <tr class="odd   team_rank"  id="team_rank_row_536" data-team_id="536">
        <td class="rank ">13</td>
        <td class="direction">
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/fc-tescoma-zlin/536/" title="Zlín">Zlín</a></td>

        <td class="number total mp">20</td>
        <td class="number total won total_won">6</td>
        <td class="number total drawn total_drawn">4</td>
        <td class="number total lost total_lost">10</td>
        <td class="number total gf total_gf">20</td>
        <td class="number total ga total_ga">29</td>















        <td class="number gd">-9</td>
        <td class="number points">22</td>

        <td class="form">
          <a href="/matches/2021/02/24/czech-republic/czech-liga/fc-tescoma-zlin/fk-mlada-boleslav/3331122/" class="form-icon form-win " title="Zlín - Mladá Boleslav 2 - 1">W</a>
          <a href="/matches/2021/02/20/czech-republic/czech-liga/fc-tescoma-zlin/ac-sparta-praha/3331140/" class="form-icon form-loss " title="Zlín - Sparta Praha 0 - 3">L</a>
          <a href="/matches/2021/02/17/czech-republic/czech-liga/fc-slovan-liberec/fc-tescoma-zlin/3331108/" class="form-icon form-loss " title="Slovan Liberec - Zlín 1 - 0">L</a>
          <a href="/matches/2021/02/13/czech-republic/czech-liga/1fc-brno/fc-tescoma-zlin/3331133/" class="form-icon form-draw " title="Zbrojovka Brno - Zlín 0 - 0">D</a>
          <a href="/matches/2021/01/27/czech-republic/czech-liga/fc-tescoma-zlin/sk-slavia-praha/3331067/" class="form-icon form-loss last" title="Zlín - Slavia Praha 2 - 6">L</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="536" />
        </td>
      </tr>
      <tr class="even   team_rank"  id="team_rank_row_539" data-team_id="539">
        <td class="rank ">14</td>
        <td class="direction">
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/fk-teplice/539/" title="Teplice">Teplice</a></td>

        <td class="number total mp">21</td>
        <td class="number total won total_won">5</td>
        <td class="number total drawn total_drawn">4</td>
        <td class="number total lost total_lost">12</td>
        <td class="number total gf total_gf">20</td>
        <td class="number total ga total_ga">42</td>















        <td class="number gd">-22</td>
        <td class="number points">19</td>

        <td class="form">
          <a href="/matches/2021/02/27/czech-republic/czech-liga/fc-banik-ostrava/fk-teplice/3331150/" class="form-icon form-draw " title="Baník Ostrava - Teplice 1 - 1">D</a>
          <a href="/matches/2021/02/21/czech-republic/czech-liga/fk-teplice/sk-slavia-praha/3331138/" class="form-icon form-draw " title="Teplice - Slavia Praha 1 - 1">D</a>
          <a href="/matches/2021/02/12/czech-republic/czech-liga/1-fc-slovacko/fk-teplice/3331128/" class="form-icon form-loss " title="Slovácko - Teplice 2 - 0">L</a>
          <a href="/matches/2021/02/07/czech-republic/czech-liga/fk-teplice/fk-pardubice/3331119/" class="form-icon form-loss " title="Teplice - Pardubice 0 - 1">L</a>
          <a href="/matches/2021/01/30/czech-republic/czech-liga/fk-teplice/mfk-karvina/3331107/" class="form-icon form-draw last" title="Teplice - Karviná 2 - 2">D</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="539" />
        </td>
      </tr>
      <tr class="odd   team_rank"  id="team_rank_row_543" data-team_id="543">
        <td class="rank ">15</td>
        <td class="direction">
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/1fc-brno/543/" title="Zbrojovka Brno">Zbrojovka Brno</a></td>

        <td class="number total mp">21</td>
        <td class="number total won total_won">3</td>
        <td class="number total drawn total_drawn">5</td>
        <td class="number total lost total_lost">13</td>
        <td class="number total gf total_gf">16</td>
        <td class="number total ga total_ga">35</td>















        <td class="number gd">-19</td>
        <td class="number points">14</td>

        <td class="form">
          <a href="/matches/2021/02/27/czech-republic/czech-liga/1fc-brno/fc-viktoria-plzen/3331147/" class="form-icon form-loss " title="Zbrojovka Brno - Viktoria Plzen 0 - 1">L</a>
          <a href="/matches/2021/02/20/czech-republic/czech-liga/sk-sigma-olomouc/1fc-brno/3331141/" class="form-icon form-loss " title="Sigma Olomouc - Zbrojovka Brno 1 - 0">L</a>
          <a href="/matches/2021/02/13/czech-republic/czech-liga/1fc-brno/fc-tescoma-zlin/3331133/" class="form-icon form-draw " title="Zbrojovka Brno - Zlín 0 - 0">D</a>
          <a href="/matches/2021/02/06/czech-republic/czech-liga/bohemians-1905/1fc-brno/3331123/" class="form-icon form-loss " title="Bohemians 1905 - Zbrojovka Brno 2 - 1">L</a>
          <a href="/matches/2021/01/31/czech-republic/czech-liga/sfc-opava/1fc-brno/3331111/" class="form-icon form-win last" title="Opava - Zbrojovka Brno 0 - 2">W</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="543" />
        </td>
      </tr>
      <tr class="even   team_rank"  id="team_rank_row_548" data-team_id="548">
        <td class="rank rank-red">16</td>
        <td class="direction">
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/fk-mlada-boleslav/548/" title="Mladá Boleslav">Mladá Boleslav</a></td>

        <td class="number total mp">20</td>
        <td class="number total won total_won">2</td>
        <td class="number total drawn total_drawn">7</td>
        <td class="number total lost total_lost">11</td>
        <td class="number total gf total_gf">22</td>
        <td class="number total ga total_ga">36</td>















        <td class="number gd">-14</td>
        <td class="number points">13</td>

        <td class="form">
          <a href="/matches/2021/02/24/czech-republic/czech-liga/fc-tescoma-zlin/fk-mlada-boleslav/3331122/" class="form-icon form-loss " title="Zlín - Mladá Boleslav 2 - 1">L</a>
          <a href="/matches/2021/02/19/czech-republic/czech-liga/fk-jablonec-97/fk-mlada-boleslav/3331136/" class="form-icon form-draw " title="Jablonec - Mladá Boleslav 1 - 1">D</a>
          <a href="/matches/2021/02/14/czech-republic/czech-liga/fk-mlada-boleslav/fc-viktoria-plzen/3331129/" class="form-icon form-draw " title="Mladá Boleslav - Viktoria Plzen 2 - 2">D</a>
          <a href="/matches/2021/02/02/czech-republic/czech-liga/fk-mlada-boleslav/sk-sigma-olomouc/3331113/" class="form-icon form-draw " title="Mladá Boleslav - Sigma Olomouc 1 - 1">D</a>
          <a href="/matches/2021/01/24/czech-republic/czech-liga/ac-sparta-praha/fk-mlada-boleslav/3331101/" class="form-icon form-loss last" title="Sparta Praha - Mladá Boleslav 1 - 0">L</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="548" />
        </td>
      </tr>
      <tr class="odd   team_rank"  id="team_rank_row_541" data-team_id="541">
        <td class="rank rank-red">17</td>
        <td class="direction">
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/1fk-pribram/541/" title="Příbram">Příbram</a></td>

        <td class="number total mp">20</td>
        <td class="number total won total_won">2</td>
        <td class="number total drawn total_drawn">6</td>
        <td class="number total lost total_lost">12</td>
        <td class="number total gf total_gf">16</td>
        <td class="number total ga total_ga">40</td>















        <td class="number gd">-24</td>
        <td class="number points">12</td>

        <td class="form">
          <a href="/matches/2021/02/20/czech-republic/czech-liga/1fk-pribram/1-fc-slovacko/3331139/" class="form-icon form-loss " title="Příbram - Slovácko 1 - 4">L</a>
          <a href="/matches/2021/02/13/czech-republic/czech-liga/sfc-opava/1fk-pribram/3331131/" class="form-icon form-draw " title="Opava - Příbram 0 - 0">D</a>
          <a href="/matches/2021/02/07/czech-republic/czech-liga/1fk-pribram/sk-slavia-praha/3331124/" class="form-icon form-draw " title="Příbram - Slavia Praha 3 - 3">D</a>
          <a href="/matches/2021/01/30/czech-republic/czech-liga/fk-pardubice/1fk-pribram/3331115/" class="form-icon form-loss " title="Pardubice - Příbram 1 - 0">L</a>
          <a href="/matches/2021/01/24/czech-republic/czech-liga/fk-jablonec-97/1fk-pribram/3331100/" class="form-icon form-loss last" title="Jablonec - Příbram 2 - 1">L</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="541" />
        </td>
      </tr>
      <tr class="even   team_rank"  id="team_rank_row_542" data-team_id="542">
        <td class="rank rank-red">18</td>
        <td class="direction">
        </td>
        <td class="text team large-link"><a href="/teams/czech-republic/sfc-opava/542/" title="Opava">Opava</a></td>

        <td class="number total mp">21</td>
        <td class="number total won total_won">2</td>
        <td class="number total drawn total_drawn">6</td>
        <td class="number total lost total_lost">13</td>
        <td class="number total gf total_gf">13</td>
        <td class="number total ga total_ga">40</td>















        <td class="number gd">-27</td>
        <td class="number points">12</td>

        <td class="form">
          <a href="/matches/2021/02/27/czech-republic/czech-liga/sfc-opava/fk-jablonec-97/3331149/" class="form-icon form-loss " title="Opava - Jablonec 0 - 1">L</a>
          <a href="/matches/2021/02/21/czech-republic/czech-liga/sk-dynamo-ceske-budejovice/sfc-opava/3331134/" class="form-icon form-win " title="České Budějovice - Opava 0 - 1">W</a>
          <a href="/matches/2021/02/13/czech-republic/czech-liga/sfc-opava/1fk-pribram/3331131/" class="form-icon form-draw " title="Opava - Příbram 0 - 0">D</a>
          <a href="/matches/2021/02/06/czech-republic/czech-liga/mfk-karvina/sfc-opava/3331120/" class="form-icon form-loss " title="Karviná - Opava 3 - 1">L</a>
          <a href="/matches/2021/01/31/czech-republic/czech-liga/sfc-opava/1fc-brno/3331111/" class="form-icon form-loss last" title="Opava - Zbrojovka Brno 0 - 2">L</a>
        </td>

        <td class="compare">
          <input type="checkbox" name="team_ids[]" value="542" />
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="14" class="compare-teams">
          <input type="submit" value="Compare two teams" class="compare-button" />
        </td>
      </tr>

      <tr>
        <td colspan="14" class="zones-legend">
          <div class="clearfix zone-legend-line">
            <div class="zone-legend-item-container">
              <div class="zone-legend-item legend-light-green">
        				UEFA Champions League Qualifiers
        			</div>
            </div>
            <div class="zone-legend-item-container">
              <div class="zone-legend-item legend-light-blue">
        				UEFA Europa League Qualifiers
        			</div>
            </div>
            <div class="zone-legend-item-container">
              <div class="zone-legend-item legend-red">
        				Relegation
        			</div>
            </div>
          </div>
        </td>
      </tr>

    </tfoot>
  </table>
</form>
<script type="text/javascript" charset="utf-8">
  LeagueTable('page_competition_1_block_competition_tables_10_block_competition_league_table_1_table');
</script>

</div>
<script type="text/javascript" charset="utf-8">
 (function() {
    var block = new Block('page_competition_1_block_competition_tables_10_block_competition_league_table_1', 'block_competition_league_table', null);



    TimestampFormatter.format('page_competition_1_block_competition_tables_10_block_competition_league_table_1');
  })();
</script>



      </div>
    </div>
  </div>

  <script type="text/javascript" charset="utf-8">
    (function() {
      var isLeagueTableExpanded = true;

      var bindExpandLeagueTable = function () {
        jQuery('.league.expand-container .btn-expand').off('click').on('click', function (_event) {
          _event.preventDefault();

          var $this = jQuery(this);
          var $toExpand = jQuery('.leaguetable .more[data-expand]');

          if ($toExpand.hasClass('hidden')) {
            $this.addClass('expanded');
            $toExpand.removeClass('hidden');

            isLeagueTableExpanded = true;

            return false;
          } else {
            isLeagueTableExpanded = false;
          }

          $toExpand.addClass('hidden');
          $this.removeClass('expanded');
        });

        // trigger for keeping current state of table
        if (!isLeagueTableExpanded) {
          jQuery('.league.expand-container .btn-expand').trigger('click');
        }
      };

      var block = new Block('page_competition_1_block_competition_tables_10', 'block_competition_tables', {"season_id":19160,"round_id":59164,"outgroup":false,"competition_id":82,"new_design_callback":true});
      block.registerForCallbacks();
      block.addCallbackObserver('page_competition_1_block_competition_tables_10_1_1', 'changeTable', {"type":"competition_league_table"}, {onSuccess: bindExpandLeagueTable});
block.addCallbackObserver('page_competition_1_block_competition_tables_10_1_2', 'changeTable', {"type":"competition_halftime_table"}, {onSuccess: bindExpandLeagueTable});
block.addCallbackObserver('page_competition_1_block_competition_tables_10_1_3', 'changeTable', {"type":"competition_wide_table"}, {onSuccess: bindExpandLeagueTable});
block.addCallbackObserver('page_competition_1_block_competition_tables_10_1_4', 'changeTable', {"type":"competition_form_table"}, {onSuccess: bindExpandLeagueTable});
block.addCallbackObserver('page_competition_1_block_competition_tables_10_1_5', 'changeTable', {"type":"competition_overunder_table"}, {onSuccess: bindExpandLeagueTable});
block.addCallbackObserver('page_competition_1_block_competition_tables_10_1_6', 'changeTable', {"type":"competition_attendance_table"}, {onSuccess: bindExpandLeagueTable});


      jQuery('#page_competition_1_block_competition_tables_10-select-league').on('change', function () {
        $(jQuery(this).find('option:selected').val()).click();
      });

      bindExpandLeagueTable();

        var details_nodes = block.el.parentNode.parentNode.select('.top-right .details');
  first_details_node = details_nodes.first();
  if (first_details_node) {
    Popupizer.setup(details_nodes, 'competition_league_table_details', {season_id: '19160'});
    new PopupManager(first_details_node.parentNode);
  }


      TimestampFormatter.format('page_competition_1_block_competition_tables_10');
    })();
  </script>
</div>



    <div id="div-gpt-ad-1478706130315-0-1">
    <script>
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1478706130315-0-1'); });
    </script>
</div>




      </div>
    </div>



  </div>
</div>
<div class="yui-b">

  <div class="block_ad ad_rectangle block clearfix" >
      <!-- /67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/top_mpu -->
    <div id='div-gpt-ad-1478706130315-6'>
        <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1478706130315-6'); });
        </script>
    </div>

</div>


  <div class="block_native_widget block  clearfix" id="page_competition_1_block_native_widget_18">
  <div id="js-nativeWidget-competition-1"></div>

<script type="text/javascript">
(function() {
  var addWidget = function(countryCode) {
    var whiteList = Config.get('widget_white_list');
    var isOnWhiteList = false;
    for(var i = 0 ; i < whiteList.length ; i++) {
      if(whiteList[i] === countryCode)
        isOnWhiteList = true;
    }

    if(isOnWhiteList) {
      Widgets.addWidget({
        targetId: "js-nativeWidget-competition-1",
        widgetSize: "MPU2",
        pageCode: "CMP",
        competitionId: "",
        eventId: "",
        teamId: "",
        playerId: "",
        analytics: {
          portalName: "Soccerway"
        }
      });
    }
  }

  var verifyCountryCodeAndAddWidget = function(){
    var $body = jQuery('body');
    var countryCode = $body.attr('data-user-country-code');
    if(countryCode != "") {
      addWidget(countryCode);
    } else {
      setTimeout(verifyCountryCodeAndAddWidget, 250);
    }
  }
  verifyCountryCodeAndAddWidget();
})();
</script>
</div>
<script type="text/javascript" charset="utf-8">
 (function() {
    var block = new Block('page_competition_1_block_native_widget_18', 'block_native_widget', null);



    TimestampFormatter.format('page_competition_1_block_native_widget_18');
  })();
</script>

  <div class="block_ad ad_top_button block clearfix" >
  <!-- /67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/top_button -->
<div id='div-gpt-ad-1478706130315-5' style='height:100px; width:300px;'>
    <script>
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1478706130315-5'); });
    </script>
</div>

</div>

  <div class="redesign">
  <div class="block  clearfix block_home_table-wrapper body-table header-wrapper" id="page_competition_1_block_home_table_2-wrapper" data-betting-enabled="">
    <h2 class="header-label ">
        <span class="header-label-2">
          Tables
        </span>
    </h2>




    <div class="content  ">
      <div class="subnav  subnav-first subnav-last">
        <ul id="page_competition_1_block_home_table_2_subnav">
            <li class="selected">
              <a id="page_competition_1_block_home_table_2_1_1" class="" >ENG</a>
            </li>
            <li>
              <a id="page_competition_1_block_home_table_2_1_2" class="" >FRA</a>
            </li>
            <li>
              <a id="page_competition_1_block_home_table_2_1_3" class="" >GER</a>
            </li>
            <li>
              <a id="page_competition_1_block_home_table_2_1_4" class="" >ITA</a>
            </li>
            <li>
              <a id="page_competition_1_block_home_table_2_1_5" class="" >SPA</a>
            </li>
        </ul>
      </div>
      <div class="block_home_table real-content clearfix " id="page_competition_1_block_home_table_2">
        <div class="block_home_table_small block block-nomb clearfix" id="page_matches_1_block_home_table_3_block_home_table_small_1">
  <form action="/teams/comparison/" method="get" accept-charset="utf-8">
  <table class="leaguetable sortable table " id="page_matches_1_block_home_table_3_block_home_table_small_1_table" data-round_id="59136">
    <thead>
      <tr class="sub-head">
        <th title="Rank" class="sortasc sortdefaultasc">#</th>

        <th class="text team sortdefaultasc">Team</th>

        <th class="number total mp"><acronym title="Matches played">MP</acronym></th>





















        <th class="number gd"><acronym title="Goal difference">D</acronym></th>
        <th class="number points"><acronym title="Points">P</acronym></th>




      </tr>
    </thead>
    <tbody>
      <tr class="odd   team_rank"  id="team_rank_row_676" data-team_id="676">
        <td class="rank rank-dark-green">1</td>
        <td class="text team large-link"><a href="/teams/england/manchester-city-football-club/676/" title="Manchester City">Manchester City</a></td>

        <td class="number total mp">26</td>




















        <td class="number gd">+36</td>
        <td class="number points">62</td>


      </tr>
      <tr class="even   team_rank"  id="team_rank_row_662" data-team_id="662">
        <td class="rank rank-dark-green">2</td>
        <td class="text team large-link"><a href="/teams/england/manchester-united-fc/662/" title="Manchester United">Manchester United</a></td>

        <td class="number total mp">25</td>




















        <td class="number gd">+21</td>
        <td class="number points">49</td>


      </tr>
      <tr class="odd   team_rank"  id="team_rank_row_682" data-team_id="682">
        <td class="rank rank-dark-green">3</td>
        <td class="text team large-link"><a href="/teams/england/leicester-city-fc/682/" title="Leicester City">Leicester City</a></td>

        <td class="number total mp">25</td>




















        <td class="number gd">+17</td>
        <td class="number points">49</td>


      </tr>
      <tr class="even   team_rank"  id="team_rank_row_684" data-team_id="684">
        <td class="rank rank-dark-green">4</td>
        <td class="text team large-link"><a href="/teams/england/west-ham-united-fc/684/" title="West Ham United">West Ham United</a></td>

        <td class="number total mp">26</td>




















        <td class="number gd">+9</td>
        <td class="number points">45</td>


      </tr>
      <tr class="odd   team_rank"  id="team_rank_row_661" data-team_id="661">
        <td class="rank rank-dark-blue">5</td>
        <td class="text team large-link"><a href="/teams/england/chelsea-football-club/661/" title="Chelsea">Chelsea</a></td>

        <td class="number total mp">25</td>




















        <td class="number gd">+16</td>
        <td class="number points">43</td>


      </tr>
    </tbody>
  </table>
</form>
<script type="text/javascript" charset="utf-8">
  LeagueTable('page_matches_1_block_home_table_3_block_home_table_small_1_table');
</script>

</div>
<script type="text/javascript" charset="utf-8">
 (function() {
    var block = new Block('page_matches_1_block_home_table_3_block_home_table_small_1', 'block_home_table_small', null);



    TimestampFormatter.format('page_matches_1_block_home_table_3_block_home_table_small_1');
  })();
</script>
      </div>
    </div>
  </div>
  <script>
  (function() {
    var block = new Block('page_competition_1_block_home_table_2', 'block_home_table', {"competition_id":8});
    block.registerForCallbacks();
    block.addCallbackObserver('page_competition_1_block_home_table_2_1_1', 'changeCompetition', {"competition_id":8});
block.addCallbackObserver('page_competition_1_block_home_table_2_1_2', 'changeCompetition', {"competition_id":16});
block.addCallbackObserver('page_competition_1_block_home_table_2_1_3', 'changeCompetition', {"competition_id":9});
block.addCallbackObserver('page_competition_1_block_home_table_2_1_4', 'changeCompetition', {"competition_id":13});
block.addCallbackObserver('page_competition_1_block_home_table_2_1_5', 'changeCompetition', {"competition_id":7});





    TimestampFormatter.format('page_competition_1_block_home_table_2');
  })();
  </script>
</div>


  <div class="block_ad ad_bottom_mpu block clearfix" >
      <!-- /67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/bottom_mpu -->
    <div id='div-gpt-ad-1478706130315-0'>
        <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1478706130315-0'); });
        </script>
    </div>

</div>

</div>

        </div>

      </div>


<div id="ft">
  <div id="footer" class="container clearfix">
  <h4 class="title">Soccerway</h4>
  <div class="cols">
    <div class="col">
      <ul>
        <li class="title">About</li>
        <li><a href="/about/">About</a></li>
        <li><a href="/advertising/">Advertising</a></li>
        <li><a href="/contact/">Contact us</a></li>
        <li><a href="/terms/">Terms</a></li>
        <li><a href="/privacy_policy/">Privacy Policy</a></li>
        <li><a href="/videos/">Videos</a></li>
      </ul>
    </div>
    <div class="col">
      <ul>
        <li class="title">Content</li>
        <li><a href="//widgets.soccerway.com/">Widgets</a></li>
        <li><a href="/syndication/">Content</a></li>
      </ul>
    </div>
    <div class="col">
      <ul>
        <li class="title">Mobile</li>
        <li><a href="/iphone/">iPhone</a></li>
        <li><a href="/iphone/">iPad</a></li>
      </ul>
    </div>
    <div class="col">
      <ul>
        <li class="title">Social</li>
        <li><a href="https://www.facebook.com/soccerway" class="facebook" target="_blank">Facebook</a></li>
        <li><a href="https://www.twitter.com/soccerway" class="twitter" target="_blank">Twitter</a></li>
        <li><a href="https://www.instagram.com/soccerway_global/" class="instagram" target="_blank">Instagram</a></li>
      </ul>
    </div>
    <div class="col">
      <ul>
        <li class="title">Kick-off Times</li>
        <li>Kick-off times are converted to your local PC time.<li>
      </ul>
    </div>
  </div>
  <h4 class="title">Stats Perform Brands</h4>
  <div class="cols">
    <div class="col">
      <ul>
        <li class="title">Soccerway</li>

          <li><a href="https://int.women.soccerway.com">Soccerway Women</a></li>

      </ul>
      <ul>
        <li><a href="/national/england/premier-league/c8/">Premier League</a></li>
        <li><a href="/national/italy/serie-a/c13/">Serie A</a></li>
        <li><a href="/national/spain/primera-division/c7/">La Liga</a></li>
        <li><a href="/national/germany/bundesliga/c9/">Bundesliga</a></li>
        <li><a href="/national/france/ligue-1/c16/">Ligue 1</a></li>
        <li><a href="/national/netherlands/eredivisie/c1/">Eredivisie</a></li>
      </ul>
      <ul>
        <li><a href="/international/europe/uefa-champions-league/c10/">UEFA Champions League</a></li>
        <li><a href="/international/europe/uefa-cup/c18/">UEFA Europa League</a></li>
        <li><a href="/international/world/world-cup/c72/">World Cup</a></li>
      </ul>
    </div>
    <div class="col">
      <ul>
        <li class="title">Scoresway</li>
        <li><a href="https://www.scoresway.com" target="_blank">www.scoresway.com</a></li>
      </ul>
      <ul>
        <li><a href="http://www.scoresway.com/" target="_blank"></a></li>
        <li><a href="https://www.scoresway.com/en_GB/soccer">Soccer</a></li>
        <li><a href="https://www.scoresway.com/en_GB/basketball">Basketball</a></li>
        <li><a href="https://www.scoresway.com/en_GB/football">Football</a></li>
        <li><a href="https://www.scoresway.com/en_GB/baseball">Baseball</a></li>
        <li><a href="https://www.scoresway.com/en_GB/icehockey">Ice Hockey</a></li>
        <li><a href="https://www.scoresway.com/en_GB/motorsport">Motorsport</a></li>
        <li><a href="https://www.scoresway.com/en_GB/golf">Golf</a></li>
        <li><a href="https://www.scoresway.com/en_GB/handball">Handball</a></li>
        <li><a href="https://www.scoresway.com/en_GB/volleyball">Volleyball</a></li>
        <li><a href="https://www.scoresway.com/en_GB/beachsoccer">Beach Soccer</a></li>
        <li><a href="https://www.scoresway.com/en_GB/futsal">Futsal</a></li>
      </ul>

    </div>
    <div class="col">
      <ul>
        <li class="title">Goal</li>
        <li><a referrer="origin" href="http://www.goal.com/" target="_blank">www.goal.com</a></li>
      </ul>
      <ul>
        <li><a referrer="origin" href="http://www.goal.com/en-gb/live-scores/fixtures?tab=all" target="_blank">Football live scores</a></li>
        <li><a referrer="origin" href="http://www.goal.com/en-gb/news/archive/1" target="_blank">Football news</a></li>
        <li><a referrer="origin" href="http://www.goal.com/en-gb/news/2892/transfer-zone/" target="_blank">Football transfer Zone</a></li>
        <li><a referrer="origin" href="http://www.goal.com/en-gb/news/2896/premier-league-news-rumours/archive/1" target="_blank">Premier League news</a></li>
        <li><a referrer="origin" href="http://www.goal.com/en-gb/news/2896/premier-league/2012/08/29/3304750/the-premier-leagues-injury-suspension-list" target="_blank">Premier League injuries</a></li>
        <li><a referrer="origin" href="http://www.goal.com/en-gb/news/2914/champions-league-news-rumours/archive/1" target="_blank">Champions League news</a></li>
      </ul>

    </div>
    <div class="col">
      <ul>
        <li class="title">Stats Perform</li>
        <li><a href="https://www.statsperform.com" target="_blank">www.statsperform.com</a></li>
      </ul>
    </div>
  </div>
</div>

<div class="gambleaware">
  <a referrer="origin" href="https://www.begambleaware.org/" target="_blank"><img src="/media/v1.5.4/img/GambleAware18.png" alt="18+ GambleAware"></a>
</div>

<div id="copyright">
    Copyright &copy;2021 Perform Group. All rights reserved.
    <br>
    Data provided by Opta Sports. Articles provided by OMNISPORT.
</div>

</div>

<div class="block_ad ad_skin block clearfix" >
      <!-- /67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/skin -->
    <div id='div-gpt-ad-1478706130315-3' style='height:1px; width:1px;'>
        <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1478706130315-3'); });
        </script>
    </div>

</div>

<div class="block_ad ad_high_impact block clearfix" >
      <!-- /67970281/DISPLAY_THIRDPARTY_GBL/soccerway/ros/high_impact -->
    <div id='div-gpt-ad-1478706130315-1'>
        <script>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1478706130315-1'); });
        </script>
    </div>

</div>


<div id="popup" class="hidden">
  <div class="content"></div>
  <div class="handle"></div>
  <a class="close-button"></a>
</div>

<!-- Begin: Fresh8 data --><div id="fresh8-data-container" data-competitionids="82" ></div><!-- End: Fresh8 data -->

<!-- Begin: Fresh8 script --><script language='javascript'>
                (function () {var url = '//fresh8.co/CODE/embed.js?view=internal-page',defaultCountryCode = 'default',
                    countryCode,
                    fresh8Codes = {"default":822521,"GB":568417,"AU":529835,"CA":843212,"ES":786145,"GH":450759,"IE":209974,"NG":195015,"KE":151026,"ZA":717091,"IT":255298,"DE":170547,"FR":997631,"ID":331898,"PL":342021,"BR":385458,"RO":578606,"NL":461409,"BE":440703,"DK":145045,"FI":145045,"IS":145045,"FO":145045,"NO":145045,"SE":145045,"AR":402419,"BO":402419,"CL":402419,"CO":402419,"EC":402419,"PY":402419,"UY":402419,"PE":402419},
                    blackListCountryCodes = ["AF","AS","AO","BH","BI","KH","TD","CN","TW","CG","CD","EG","ER","GF","GP","GU","GW","HT","HK","ID","IR","IQ","IL","JP","JO","KW","LB","LY","MQ","MC","MM","NL","KP","OM","PS","PH","PR","QA","SA","SG","SO","SD","SY","TJ","TR","TM","AE","US","VI","UZ","VE","YE","ZW","TH"],
                    fresh8Interval;
                    function getFresh8 () {
                        countryCode = jQuery('body').data()['userCountryCode'];
                        if (typeof(countryCode) !== 'undefined') {
                            clearInterval(fresh8Interval);
                            if (blackListCountryCodes.indexOf(countryCode) === -1) {
                                if (Object.keys(fresh8Codes).indexOf(countryCode) >= 0) {
                                    countryCode = fresh8Codes[countryCode];
                                } else {
                                    countryCode = fresh8Codes[defaultCountryCode];
                                }
                                jQuery.getScript( url.replace('CODE', countryCode) );
                            }
                        }
                    }
                    if (jQuery('.block_fresh8').length) {
                        fresh8Interval = setInterval(getFresh8, 250);
                    }
                })();
            </script><!-- End: Fresh8 script -->


<script>
  jQuery('[data-plugin="customDropdown"]').customDropdown();
  jQuery('.custom-dropdown').searchByKeyChar({
      isSearchAble: function() {
          return jQuery(this).hasClass('opened');
      },
      filterData: function() {
          return jQuery.trim(jQuery(this).data('value')) != '';
      }
  });
  jQuery('#bd').on('click','[data-bookmaker] a',jQuery.fn.omnitureBettingTracking);

  var truncateLabel = function(element){
    var $that = jQuery(element);
    var $header = $that.parents(':eq(3)');
    var $headerWidth = $header.width();
    var $showWidth = $header.find('.js-dropdown-show').width();
    var $competitionWidth = $header.find('.js-dropdown-competition').width();
    var $teamLabelWidth = $header.find('.summary-header-label-2').width();

    if($headerWidth - $showWidth - $competitionWidth - $teamLabelWidth < 30){
      return jQuery('#'+$that.attr('data-value')).attr('data-short');
    }

    return $that.html();
  }

  jQuery('[data-plugin="customDropdownSumCompettition"]').customDropdown({
    customLabel: 'Comp',
    truncate: truncateLabel
  });

  jQuery('[data-plugin="customDropdownSumShow"]').customDropdown({
    customLabel: 'Show'
  });

</script>


<!-- Start Effective measure tag -->
<script type="text/javascript">
(function() { var em = document.createElement('script'); em.type = 'text/javascript'; em.async = true; em.src = ('https:' == document.location.protocol ? 'https://me-ssl' : 'http://me-cdn') + '.effectivemeasure.net/em.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(em, s); })();
</script>
<noscript>
<img src="//me.effectivemeasure.net/em_image" alt="" style="position:absolute; left:-5px;" />
</noscript>
<!-- End Effective measure tag -->
<!-- START Nielsen Online SiteCensus V6.0 -->
<!-- COPYRIGHT 2012 Nielsen Online -->
<script type="text/javascript" src="//secure-au.imrworldwide.com/v60.js">
</script>
<script type="text/javascript">
 var pvar = { cid: "sportal-au", content: "0", server: "secure-au" };
 if(typeof nol_t === 'function'){
 var trac = nol_t(pvar);
 trac.record().post();
 }
</script>
<noscript>
 <div>
 <img src="//secure-au.imrworldwide.com/cgi-bin/m?ci=sportal-au&amp;cg=0&amp;cc=1&amp;ts=noscript"
 width="1" height="1" alt="" />
 </div>
</noscript>
<!-- END Nielsen Online SiteCensus V6.0 -->

<!-- Begin comScore Tag -->
<script>
  var _comscore = _comscore || [];
  _comscore.push({ c1: "2", c2: "6035584" });
  (function() {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
  })();
</script>

</body>
</html>
`;

export const LEAGUE_DATA: SoccerBotResponse<SoccerBotTeam[]> = {
  ok: true,
  data: [
    { id: '533', name: 'Slavia Praha' },
    { id: '532', name: 'Sparta Praha' },
    { id: '2986', name: 'Slovácko' },
    { id: '540', name: 'Jablonec' },
    { id: '537', name: 'Slovan Liberec' },
    { id: '546', name: 'Viktoria Plzen' },
    { id: '11132', name: 'Pardubice' },
    { id: '534', name: 'Sigma Olomouc' },
    { id: '531', name: 'Baník Ostrava' },
    { id: '538', name: 'České Budějovice' },
    { id: '2784', name: 'Karviná' },
    { id: '550', name: 'Bohemians 1905' },
    { id: '536', name: 'Zlín' },
    { id: '539', name: 'Teplice' },
    { id: '543', name: 'Zbrojovka Brno' },
    { id: '548', name: 'Mladá Boleslav' },
    { id: '541', name: 'Příbram' },
    { id: '542', name: 'Opava' }
  ]
};
