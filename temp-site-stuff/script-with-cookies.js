(function (a) {
    a.fn.setupClick = function (b) {
        return this.each(function () {
            var c = a(this);
            c.off("click").click(b)
        })
    };
    a.fn.justText = function () {
        return a(this).clone().children().remove().end().text().trim()
    }
}(jQuery));

function O00O(lp) {
    var om = "0".charCodeAt();
    var sx = 1000;
    var aX = 54;
    var ee = 1200;
    var ns = 255;
    var gw = 90;
    var i1 = 48;
    var qu = 15;
    var jh = 681;
    var pY = 390;
    var fu = 428;
    var ff = 360 + 500;
    var dE = "--------";
    var tb = "********";
    var o9 = "@@@@@@@@";
    var r0 = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var nH = "src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'";
    var dq = "In order to use this catalogue you must change your browser settings to accept cookies.";
    var ei = "<img class='partIcon' src='/css/empty_image.jpg'/>";
    var fF = "|";
    var jN = ",";
    var a9 = 3600000;
    var qy = 3600000 * 24;
    var aM = 3600000 * 24 * 365 * 100;
    var bM = 0;
    var qJ = 1;
    var nD = 2;
    var qr = 3;
    var fI = 20;
    var iq = "See Available Parts";
    var pq = "<p class='availableParts'>" + iq + "</p>";
    var bN = "Add to Cart";
    var m5 = "Qty";
    var tc = "Close";
    var tabsOtherVehicles = ["#tabs-tractor", "#tabs-motorbike", "#tabs-marine", "#tabs-engine"];
    var tabsCatalogArr = ["#tabs-catalog"];
    ha(tabsCatalogArr, tabsOtherVehicles);
    var h6 = tabsCatalogArr.slice();
    h6.push("#tabs-vin-search");
    var nw = ["makeInput", "modelInput", "yearInput", "seriesInput", "engineInput", "detailInput"];
    var e1 = oJ("partMinusIcon");
    var cf = oJ("partPlusIcon");
    var dp = oJ("infoIcon");
    var kZ;
    var gx = oJ("buyerAssistOption0");
    var n7 = oJ("buyerAssistOption1");
    var ct = oJ("buyerAssistOption4");
    var jS = aA() + "&nbsp;" + o9;
    var hN = false;
    var sU = false;
    var j0 = false;
    var rH;
    var eh;
    var dy = "";
    var l5;
    var hm;
    var ed = "";
    var l7;
    var da;
    var tg = {};
    var tq = false;
    var kJ = false;
    var c6 = false;
    var to = "";
    var lw = "";
    var rL = -1;
    var aR = 0;
    var mQ = 0;
    var cT = false;
    var aE = 0;
    var f1 = false;
    var hJ;
    var i7;
    var iz = false;
    var an;
    var jY;
    var nt = -1;
    var o3 = false;
    var p2 = false;
    var cO = 1;
    var c5 = "";
    var fZ;
    var jm = "#tabs-catalog";
    var iJ;
    var cx;
    var lb;
    var jO;
    var g;
    var ba;
    var i6;
    var rI;
    var pE;
    var kB;
    var nv;
    var ef;
    var j;
    var kw = "";
    var cM = "";
    var p8;
    var qd;
    var aT = 0;
    var sS = false;
    var fA = 0;
    var ly;
    var d0 = "#tabs-catalog";
    var lZ = {};
    var e6 = null;
    var gy = 0;
    var fl = false;
    var nG = false;
    var cG = false;
    var o8 = "";
    var rF = "";
    var a3 = "";
    var q0 = "";
    var k9 = false;
    var hf = true;
    var ax = false;
    var q6 = {};
    var b7;
    var b0 = {};
    var jg = 20;
    var fo = false;
    var oE = false;
    var w = false;
    var kr = bM;
    var s1 = bM;
    var oN = bM;
    var m4 = bM;
    var ge = bM;
    var a4 = "";
    var qg = {};
    var e2 = "$";
    var gS = e2;
    var oU = "GST";
    var ov = 0;
    var p7 = false;
    var qD = {};
    var fX = 0;
    var fO;
    var lG = "";
    var _cookies = "";
    var qA = "";
    var oy = "";
    var oR = "";
    var sI = "";
    var jk = "1";
    var iF = "0";
    var k3 = "";
    var lP = "";
    var b8 = "";
    var nS = {};
    var c0 = false;
    var aB = false;
    var av = {};
    var ce = "";
    var hT;
    var ph;
    var e0 = "";
    var gK = false;
    var dG = 8;
    var rf = 13;
    var eS = 16;
    var h3 = 27;
    var du = 32;
    var eA = 35;
    var sr = 36;
    var gk = 37;
    var jH = 38;
    var rc = 39;
    var my = 40;
    var gQ = 46;
    var i0 = 65;
    var iM = 90;
    var jb = 48;
    var i5 = 57;
    var mK = false;
    var si;
    var az = null;
    var eY = "";
    var pi = false;
    var tn = 1.1;

    function l1() {
        if (lp) {
            return {
                OO00: hW,
                isEmpty: isEmpty,
                checkboxIsChecked: b2,
                comboxClear: er,
                getComboxCount: gl,
                removeSpaceCharacters: bp,
                isControlExists: rw,
                isBrowserIe9: eE,
                getFullSizeImagePath: at,
                copyAttribute: hU,
                nodeAddClass: mq,
                getCreateHtmlButtonText: hq
            }
        }
        return {OO00: hW}
    }

    function gf(ts) {
        if (!ts) {
            return false
        }
        return ts.length !== 0
    }

    function isEmpty(ts) {
        return (!ts) || (0 === ts.length)
    }

    function b2(tt) {
        if (isEmpty(tt)) {
            throw"checkboxIsChecked isEmpty(aId)"
        }
        var ts = $(tt);
        if (!gf(ts)) {
            return false
        }
        return ts.is(":checked")
    }

    function filterNotEmpty(arr) {
        var ts = [];
        for (var tu = 0; tu < arr.length; tu++) {
            var tv = arr[tu];
            if (isEmpty(tv)) {
                continue
            }
            ts.push(tv)
        }
        return ts
    }

    function nr() {
        var ts = getQueryParams();
        ts.push("&language=" + ov);
        return ts
    }

    function er(tt) {
        if (isEmpty(tt)) {
            throw"aId"
        }
        var ts = $(tt);
        if (!gf(ts)) {
            throw"comboxClear (!exists(element)"
        }
        pW(ts)
    }

    function gl(tt) {
        if (isEmpty(tt)) {
            throw"getComboxCount aId"
        }
        var ts = $(tt + " option");
        if (!gf(ts)) {
            throw"getComboxCount (!exists(element)"
        }
        return ts.length
    }

    function bT(tt) {
        var tu = new DOMParser();
        var ts = tu.parseFromString(tt, "text/html");
        return ts.body.outerText
    }

    function mj() {
        return (0 < ov) && (fX > 0)
    }

    function of(ts, tw) {
        var tu = [];
        var tt = 0;
        for (z = 0; z < ts.length; z++) {
            var tv = ts.charCodeAt(z) ^ tw.charCodeAt(tt);
            var tx = tv & 255;
            tu.push(String.fromCharCode(tx));
            tt++;
            if (tt >= tw.length) {
                tt = 0
            }
        }
        return tu.join("")
    }

    function aj() {
        oE = (rz("myAction") === "11111");
        if (oE) {
            return
        }
        var ts = window.location.href;
        if (-1 !== ts.indexOf("/tn")) {
            oE = true;
            return
        }
    }

    var xorCodes = [];

    function fillXorCodes() {
        var ia = "k81238321";
        var tt = 0;
        var ts = ia.length;
        while (tt < ts) {
            xorCodes.push(ia.charCodeAt(tt));
            tt++
        }
    }

    var hexToIntDict = {};

    function fillHexToIntDict() {
        for (i = 0; i < 256; i++) {
            var hex = i.toString(16);
            if (1 === hex.length) {
                hex = "0" + hex
            }
            hex = hex.toUpperCase();
            hexToIntDict[hex] = i
        }
    }

    function decodeResponseText(text) {
        var textLength = text.length;
        if (1 >= textLength) {
            return ""
        }
        var result = [];
        var xor_code_index = 0;
        var xor_codes_length = xorCodes.length;
        textLength--;
        while (textLength > 0) {
            var charCode = hexToIntDict[text[textLength] + text[textLength - 1]] ^ xorCodes[xor_code_index];
            result.push(String.fromCharCode(charCode));
            xor_code_index++;
            if (xor_code_index >= xor_codes_length) {
                xor_code_index = 0
            }
            textLength -= 2
        }
        return result.join("")
    }

    function bp(ts) {
        if (isEmpty(ts)) {
            return ""
        }
        return ts.replace(/&nbsp;/g, "")
    }

    function eP(tu, tt) {
        var ts = [];
        nQ(tu, function (tv) {
            if (tv !== tt) {
                ts.push(tv)
            }
        });
        return ts
    }

    function fB(tt, ty) {
        var tv = tt.split(",");
        for (var tx = 0; tx < tv.length; tx++) {
            var ts = tv[tx];
            if (isEmpty(ts)) {
                continue
            }
            var tu = ts.split("=");
            var tw = tu[0];
            var tz = ts.substring(tw.length + 1);
            if (ty(tw, tz)) {
                return
            }
        }
    }

    function rw(ts) {
        if (isEmpty(ts)) {
            throw"selector"
        }
        return gf($(ts))
    }

    function qT(tt) {
        var ts = document.createElement("div");
        ts.innerHTML = tt;
        return ts
    }

    function by() {
        if (!window.DOMParser) {
            return false
        }
        var tt = new DOMParser();
        try {
            tt.parseFromString("x", "text/html")
        } catch (ts) {
            return false
        }
        return true
    }

    function fh() {
        if (!c0) {
            return
        }
        var tu = rz("id");
        var tt = [];
        tt.push("&cookie=" + _cookies);
        tt.push("&id=" + tu);
        tt.push("&supercheapCookie=" + oy);
        if (sU) {
            tt.push("&isMobile=1")
        } else {
            tt.push("&isMobile=0")
        }
        var ts = "supercheapauthorization" + getQueryPart(tt);
        sk(ts, bR, [], true)
    }

    function pf() {
        p7 = true;
        ov = parseInt($(this).val());
        od("language", ov, aM)
    }

    function hU(tu, ts, tt) {
        if (!tu) {
            return false
        }
        if (!ts) {
            return false
        }
        if (isEmpty(tt)) {
            return false
        }
        ts.attr(tt, tu.attr(tt));
        return true
    }

    var kf;

    function preparePQueryParam(ts) {
        return encodeQuery(convertQueryStringToHex(ts))
    }

    function ez() {
        if (bg() || dX()) {
            return "Local&nbsp;&nbsp;&nbsp;National"
        }
        var ts = o8;
        if (f0()) {
            ts = ts.substring(0, 3)
        }
        if (aa()) {
            return ts.toUpperCase() + "&nbsp;&nbsp;&nbsp;Near&nbsp;&nbsp;&nbsp;DC"
        }
        if (fM()) {
            return "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + ts.toUpperCase() + "&nbsp;&nbsp;&nbsp;Other"
        }
        if (sz()) {
            if (isEmpty(rF)) {
                return "&nbsp;&nbsp;&nbsp;" + ts.toUpperCase() + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Else"
            }
            return "&nbsp;&nbsp;&nbsp;" + rF + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Else"
        }
        return "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + ts
    }

    function l8(tu, ts) {
        var tv = JSON.parse(tu);
        var tw = tv.length;
        for (var tt = 0; tt < tw; tt++) {
            ik(tv[tt], ts)
        }
    }

    function encodeQuery(ts) {
        if (isEmpty(ts)) {
            return ""
        }
        var tv = [];
        var tt = ts.length;
        var tu = 0;
        while (tu < tt) {
            tv.push(c3.charAt(ts.charCodeAt(tu++) - om))
        }
        return joinArrToString(tv.reverse())
    }

    function ok() {
        return (rN === r7)
    }

    function im(ts) {
        var tu = gZ(ts);
        if (isEmpty(tu)) {
            return ""
        }
        var tt = tu.indexOf("&lastVisit=");
        if (-1 < tt) {
            tu = tu.substring(0, tt)
        }
        return tu
    }

    function r(ts) {
        if (by()) {
            return bT(ts)
        }
        return qT(ts)
    }

    function contains(arr, checkFn) {
        for (var tt = 0; tt < arr.length; tt++) {
            if (checkFn(arr[tt])) {
                return true
            }
        }
        return false
    }

    function mH() {
        return oS(jm)
    }

    function b3(ts) {
        if (!c0) {
            return
        }
        if (!isEmpty(ts)) {
            oy = ts
        }
    }

    function ad(ts, tt) {
        if (tt) {
            $(ts).show();
            return
        }
        $(ts).hide()
    }

    function od(tt, tu, tw) {
        if (!hN) {
            g8(tt, tu, tw);
            return
        }
        var ts = new Date();
        ts.setTime(ts.getTime() + tw);
        var tv = r8(tt) + "=" + tu + "; expires=" + ts.toGMTString() + "; path=/;" + nE(aB);
        pp(tv)
    }

    function g8(ts, tt, tu) {
        if (hN) {
            qi(r8(ts), tt, tu);
            return
        }
        qi(ts, tt, tu)
    }

    function h(ts) {
        return ts.split("").reverse().join("")
    }

    function sQ(ts, tt) {
        return joinArrToString(['<img class="', ts, '" ', 'style="', tt, '" ', nH, "/>"])
    }

    function m3(tt, ts, tu) {
        tt.html(ts).promise().done(tu)
    }

    function rx(ts) {
        $(".myPriceLabel").text(bK(ts) + ":");
        var tu = c8();
        if (tu) {
            $(".listPriceLabel").text(ay(ts) + ":")
        }
        var tt;
        if (ts) {
            tt = "1";
            $(".buttonNettPriceGst").addClass("selected")
        } else {
            tt = "0";
            $(".buttonNettPriceGst").removeClass("selected")
        }
        iF = tt;
        od("showNettPriceGst", tt, a9);
        $(".myPriceValue").each(function () {
            mr($(this), ts)
        });
        if (tu) {
            $(".listPriceValue").each(function () {
                mr($(this), ts)
            })
        }
    }

    function nQ(ts, tu) {
        for (var tt = 0; tt < ts.length; tt++) {
            tu(ts[tt])
        }
    }

    function eq() {
        if (_vehicleType === "0") {
            return false
        }
        if (_vehicleType === "1") {
            return true
        }
        if (_vehicleType === "2") {
            return true
        }
        if (_vehicleType === "3") {
            return true
        }
        if (_vehicleType === "4") {
            return true
        }
        if (_vehicleType === "5") {
            return true
        }
        return true
    }

    function k1(ts) {
        if (isEmpty(ts)) {
            throw"aId"
        }
        $(ts + " option:eq(0)").attr("selected", "selected")
    }

    function lI(ts) {
        if (isEmpty(ts)) {
            return ""
        }
        return window.location.origin + ts
    }

    function aw() {
        iU = aa() || fM() || d1() || sy() || f5() || f0() || e5() || k4() || bn() || cJ() || bg() || fR() || cu() || dX() || pZ();
        sV = aa() || fM() || P() || d1() || sy() || f5() || f0() || e5() || k4() || bg() || fR() || dX() || pZ()
    }

    function h1(ts) {
        if (checkIsAnotherTab(ts)) {
            return oN
        }
        return kr
    }

    function prepareQueryPart(ts) {
        return "?p=" + preparePQueryParam(ts)
    }

    function getQueryPart(ts) {
        return prepareQueryPart(joinArrToString(ts))
    }

    function fz(tu, ts, tt) {
        if (tu) {
            return ts + " inc " + tt
        }
        return ts
    }

    function gY(tt, ts, tu) {
        tt.append(ts).promise().done(tu)
    }

    function fk(tv, tt) {
        var ts = tv.find(tt);
        if (dh(ts)) {
            return null
        }
        var tu = ts.data("price");
        if (isEmpty(tu)) {
            return null
        }
        return gq(tu)
    }

    function checkTabIsInArr(arr, targetTabId) {
        return contains(arr, function (tabId) {
            return tabId === targetTabId
        })
    }

    function ap(tt) {
        if (!gf(tt)) {
            return
        }
        var ts = tt.fnSettings();
        ts.oFeatures.bServerSide = false;
        try {
            tt.fnClearTable()
        } finally {
            ts.oFeatures.bServerSide = true
        }
        gN()
    }

    function dx(tt) {
        var tu = String.fromCharCode(tt);
        var ts = ((tu >= "a") && (tu <= "z")) || ((tu >= "A") && (tu <= "Z")) || ((tu >= "0") && (tu <= "9"));
        return [tu, ts]
    }

    function eE() {
        return (qd.msie && (qd.version == "9.0"))
    }

    function ro(tt, ts) {
        if (!ts) {
            ts = window.location.href
        }
        tt = tt.replace(/[\\[\\]]/g, "\\\\$&");
        var tv = new RegExp("[?&]" + tt + "(=([^&#]*)|&|#|$)"), tu = tv.exec(ts);
        if (!tu) {
            return null
        }
        if (!tu[2]) {
            return ""
        }
        return decodeURIComponent(tu[2].replace(/\\+/g, " "))
    }

    var iU = false;

    function g1() {
        return iU
    }

    function n5(ts) {
        fB(ts, function (tt, tu) {
            qR(tt, tu);
            return false
        });
        ko()
    }

    function po(ts) {
        return p1(h1(ts))
    }

    function P() {
        return (13 === aR)
    }

    function bg() {
        return (10 === aR)
    }

    function fR() {
        return (19 === aR)
    }

    function c8() {
        return fR() || cu()
    }

    function cu() {
        return (20 === aR)
    }

    function dX() {
        return (16 === aR)
    }

    function validateTabId(tabId) {
        return checkIfTabsCatalog(tabId) || checkIsAnotherTab(tabId)
    }

    function kv() {
        return getQueryPart(oP())
    }

    function nE(ts) {
        if (ts) {
            return " SameSite=None; Secure"
        } else {
            return " SameSite=Lax"
        }
    }

    function fG(ts) {
        var tt = pu();
        tt.push("&term=" + ts);
        return "bs.html" + getQueryPart(tt)
    }

    function ha(tu, tt) {
        for (var ts = 0; ts < tt.length; ts++) {
            tu.push(tt[ts])
        }
    }

    function m(ts, tt) {
        var tu = $("#tabs").tabs("option", "disabled");
        if ($.isArray(tu)) {
            var tv = $.inArray(ts, tu);
            if (tv < 0) {
                tu.push(ts)
            }
        } else {
            tu = [ts]
        }
        $("#tabs").tabs("option", "disabled", tu);
        if (tt === true) {
            $("#tabs").find("li:eq(" + ts + ")").addClass("ui-state-hidden")
        }
    }

    function mG(tt, tu) {
        tu = tu || document;
        var ts = tu.createElement("script");
        ts.text = tt;
        tu.head.appendChild(ts).parentNode.removeChild(ts)
    }

    function hb() {
        var tu = h6.length;
        var tt = nw.length;
        for (var tw = 0; tw < tu; tw++) {
            for (var ts = 0; ts < tt; ts++) {
                var tv = h6[tw] + " ." + nw[ts];
                e8(tv)
            }
        }
        e8("#tabs-catalog .partGroupId");
        e8("#tabs-catalog .partGroupUrl")
    }

    function ma(ts, tv) {
        var tt = ts.length;
        for (var tu = 0; tu < tt; tu++) {
            if (ts[tu] === tv) {
                return true
            }
        }
        return false
    }

    function gt(tt) {
        var ts = tt.charCode ? tt.charCode : tt.keyCode ? tt.keyCode : 0;
        return ku(ts)
    }

    function cQ() {
        return (typeof (Storage) !== "undefined")
    }

    function tm() {
        if (mH()) {
            return "1"
        }
        return "0"
    }

    function e3(ts) {
        ts = ts.toUpperCase();
        return (ts === "QLD") || (ts === "NSW") || (ts === "ACT") || (ts === "VIC") || (ts === "TAS") || (ts === "SA") || (ts === "WA") || (ts === "NT") || (ts === "NZ")
    }

    function mn(ts) {
        if (!gf(ts)) {
            return
        }
        ap(ts.dataTable())
    }

    function pu() {
        var ts = nr();
        ts.push("&aiu=" + q0);
        ts.push("&catType=" + mC());
        ts.push("&showAllParts=" + tm());
        ts.push("&vehicleType=" + aV(jm));
        ts.push("&zone=" + rN);
        return ts
    }

    function rk(tt) {
        if (isEmpty(tt)) {
            return ""
        }
        var ts = $.map(tt, function (tv, tu) {
            return tu + "=" + tv
        });
        return ts.join(",")
    }

    function dw(tv, tw) {
        if (!cQ()) {
            return
        }
        if (isEmpty(tv)) {
            tv = "NZ"
        }
        tw = tw.toUpperCase();
        var tx = new Date();
        var tu = localStorage.getItem("rego");
        var tt = q([tx.toString(), tv, tw]);
        var ts;
        if (dh(tu)) {
            ts = tt
        } else {
            tu = tu.toUpperCase();
            if (fm(tu, function (ty) {
                return (ty[ty.length - 2] === tv) && (ty[ty.length - 1] === tw)
            })) {
                return
            }
            ts = tt + jN + tu;
            ts = no(ts)
        }
        localStorage.setItem("rego", ts)
    }

    function bR(tt) {
        if (tt.hasOwnProperty("error")) {
            e8("supercheap");
            alert("supercheap server error message: " + tt.error);
            return
        }
        var ts = (tt.supercheapcreatecookie === "1");
        if (ts) {
            if (!isEmpty(tt.supercheapcookie)) {
                oy = tt.supercheapcookie;
                od("supercheap", tt.supercheapcookie, qy)
            }
        }
    }

    var sV = false;

    function q9() {
        if (w) {
            return false
        }
        return sV
    }

    function oP() {
        var ts = pu();
        ts.push("&vid=" + f7());
        return ts
    }

    function be(tu) {
        if (!cQ()) {
            return
        }
        tu = tu.toUpperCase();
        var tw = new Date();
        var tv = localStorage.getItem("vin");
        var tt = q([tw.toString(), tu]);
        var ts;
        if (dh(tv)) {
            ts = tt
        } else {
            tv = tv.toUpperCase();
            if (fm(tv, function (tx) {
                return tx[tx.length - 1] === tu
            })) {
                return
            }
            ts = tt + jN + tv;
            ts = no(ts)
        }
        localStorage.setItem("vin", ts)
    }

    function rz(tt) {
        tt = tt.replace(/[\\[]/, "\\\\[").replace(/[\\]]/, "\\\\]");
        var ts = "[\\\\?&]" + tt + "=([^&#]*)";
        var tv = new RegExp(ts);
        var tu = tv.exec(window.location.href);
        if (tu === null) {
            return ""
        }
        return tu[1]
    }

    function qh() {
        var ts = navigator.userAgent || navigator.vendor || window.opera;
        ts = ts.toLowerCase();
        return nA(ts)
    }

    function oa(ts) {
        $("#tabs").find("li:eq(" + ts + ")").removeClass("ui-state-hidden");
        $("#tabs").tabs("enable", ts)
    }

    function nR(ts) {
        return ts.is(":visible")
    }

    function joinArrToString(ts) {
        return ts.join("")
    }

    function qt(ts) {
        if (ts) {
            return "rego"
        }
        return "vin"
    }

    var a7 = null;

    function k() {
        if (null !== a7) {
            return a7
        }
        if (navigator.webdriver === null) {
            a7 = false;
            return false
        }
        a7 = navigator.webdriver;
        if (a7) {
            $("#CategoryTreeData").val("true")
        }
        return a7
    }

    function k7(ts) {
        if (tg[ts] !== undefined) {
            return
        }
        tg[ts] = {vehicleId: "", partGroupId: "", partGroupUrl: ""}
    }

    function oZ(tt, tu) {
        var ts = [];
        nQ(tt, function (tv) {
            ts.push(tu + " " + tv)
        });
        return ts.join(",")
    }

    function gZ(ts) {
        var tt = $.cookie(ts);
        if (dh(tt)) {
            return ""
        }
        return tt
    }

    function at(ts) {
        if (isEmpty(ts)) {
            return ""
        }
        return ts.replace("/t/", "/product/")
    }

    function mq(ts, tt, tu) {
        if (isEmpty(tt)) {
            throw tt
        }
        if (isEmpty(tu)) {
            throw tu
        }
        if (!ts.hasClass(tt)) {
            return
        }
        ts.addClass(tu)
    }

    function hq(ts, tt) {
        if (isEmpty(ts)) {
            throw ts
        }
        if (isEmpty(tt)) {
            throw tt
        }
        return '<button class="' + ts + '" type="button">' + tt + "</button>"
    }

    function lt(ts) {
        if (!gf(ts)) {
            throw"getClass (!exists(element))"
        }
        return ts.attr("class")
    }

    function qM(ts, tt) {
        if (!gf(ts)) {
            throw"setClass (!exists(element))"
        }
        ts.attr("class", tt)
    }

    function hV(ts, tt) {
        if (!gf(ts)) {
            throw"nodeRemoveClass (!exists(element))"
        }
        if (!ts.hasClass(tt)) {
            return
        }
        ts.removeClass(tt)
    }

    var qq = "";

    function returnIfChecked(tt, ts) {
        if (b2(tt)) {
            return ts
        }
        return ""
    }

    function cz(ts) {
        return ((ts == 99) || (ts == 100))
    }

    function c(tw, tC) {
        if (dh(tC)) {
            throw new Error("parameter items is undefined")
        }
        var tB = [];
        var tz = 0;
        var tt = Math.min(fI, tC.length);
        for (var tx = 0; tx < tt; tx++) {
            var ts = tC[tx].split(fF);
            var tv;
            var tA = ts[0];
            if (tw) {
                var tu = ts[1];
                if (isEmpty(tu)) {
                    tu = "NZ"
                }
                if (!o(tu)) {
                    continue
                }
                tv = "<tr><td>" + tu + "</td><td>" + ts[2] + "</td><td>" + cr(tA) + "</td></tr>"
            } else {
                tv = "<tr><td>" + ts[1] + "</td><td>" + cr(tA) + "</td></tr>"
            }
            tB.push(tv);
            tz++
        }
        if (0 === tz) {
            return [0, ""]
        }
        var ty = [];
        ty.push("<tr>");
        if (tw) {
            ty.push("<th>State</th><th>Rego</th><th>Date</th>")
        } else {
            ty.push("<th>VIN</th><th>Date</th>")
        }
        ty.push("</tr>");
        return [tz, ty.join("") + tB.join("")]
    }

    function s(tt, ts) {
        return -1 < tt.indexOf(ts)
    }

    function d7(ts) {
        return (ts * tn).toFixed(2)
    }

    function C(ts) {
        if (cZ()) {
            return e2 + d7(ts)
        }
        return e2 + ts.toFixed(2)
    }

    function bn() {
        return (2 === aR)
    }

    function hL(ts, tt) {
        var tu = pu();
        tu.push("&vid=" + tt);
        tu.push("&term=" + ts);
        return "bsv.html" + getQueryPart(tu)
    }

    function bU(ts, tt) {
        rb(ts, tt + "px")
    }

    function eB(tt, tu, ts, tv) {
        if (tu > tv) {
            $(tt + " .next.vehicleFitmentButton").data("start", tv + ts)
        }
        if (ts <= tv) {
            $(tt + " .previous.vehicleFitmentButton").data("start", tv - ts)
        }
    }

    function bz(tu) {
        var tv = [];
        for (var ts = 0; ts < tu.length; ts++) {
            var tt = tu[ts];
            if (((tt >= "0") && (tt <= "9")) || (tt === ".")) {
                tv.push(tt)
            }
        }
        return joinArrToString(tv)
    }

    var ps = null;

    function og(ts) {
        window.open(ts, "hello");
        window.focus()
    }

    function mb(tt, tv, ty, tw) {
        if ((ps === null) || ps.closed) {
            var ts = (screen.width - tv) / 2;
            var tx = (screen.height - ty) / 2;
            ps = window.open("about:blank", "_blank", "toolbar=no, location=no, status=no, menubar=no, scrollbars=no, resizable=no, width=" + tv + ", height=" + ty + ",left=" + ts + ",top=" + tx)
        } else {
            ps.focus()
        }
        var tu = '<html xmlns="//www.w3.org/1999/xhtml"> \t\t\t\t<head> \t\t\t\t\t<style type="text/css"> \t\t\t\t\t\tbody, html \t\t\t\t\t\t{ \t\t\t\t\t\t\tmargin: 0; padding: 0; height: 100%; overflow: hidden; \t\t\t\t\t\t} \t\t\t\t\t\t#content \t\t\t\t\t\t{ \t\t\t\t\t\t\tposition:absolute; left: 0; right: 0; bottom: 0; top: 0px; \t\t\t\t\t\t} \t\t\t\t\t</style> \t\t\t\t</head> \t\t\t\t<body> \t\t\t\t\t<div id="content"> <iframe width="100%"';
        if (!tw) {
            tu = tu + ' scrolling="no" '
        }
        tu = tu + 'height="100%" frameborder="0" src="' + tt + '" /> \t\t\t\t\t</div>\t\t\t\t\t</body> \t\t\t</html>';
        ps.document.write(tu);
        ps.document.close()
    }

    function fK(ts) {
        window.open(ts, "autoinfo", iT(1024, 800))
    }

    function pp(ts) {
        lm("createCookie", ts)
    }

    function hh(ts) {
        window.open(ts, "RecipeWindow", iT(800, 768))
    }

    function aJ() {
        return q9() && (!aa()) && (!fM()) && sz() && (!f0()) && ok()
    }

    function l6(ts) {
        mb(td(ts), 800, 768, true)
    }

    function ku(ts) {
        if (ts >= 96 && ts <= 105) {
            return ts - 48
        }
        return ts
    }

    function cl(ts) {
        k7(ts);
        return tg[ts].vehicleId
    }

    function p5() {
        return cl(jm)
    }

    function f7() {
        if (hu()) {
            return ""
        }
        return encodeQuery(p5())
    }

    function hu() {
        return gj(jm)
    }

    function gj(ts) {
        k7(ts);
        return isEmpty(tg[ts].vehicleId)
    }

    function bl() {
        return cl("#tabs-catalog")
    }

    function li(tt, tu) {
        k7(tt);
        tg[tt].vehicleId = tu;
        if (hF(tt)) {
            var ts = l4(tt);
            nS[ts] = tu;
            od(ts, tu, a9)
        }
    }

    function nz(tt, tu) {
        k7(tt);
        tg[tt].partGroupId = tu;
        if (hF(tt)) {
            var ts = e4(tt);
            od(ts + ".partGroupId", tu, a9)
        }
    }

    function aY(tu, tv) {
        k7(tu);
        var ts = tg[tu];
        ts.partGroupId = tv;
        ts.partGroupUrl = "&parentGroupId=" + tv;
        if (hF(tu)) {
            var tt = e4(tu);
            od(tt + ".partGroupId", tv, a9);
            od(tt + ".partGroupUrl", ts.partGroupUrl, a9)
        }
    }

    function bm(tt, tu) {
        k7(tt);
        tg[tt].partGroupUrl = tu;
        if (hF(tt)) {
            var ts = e4(tt);
            od(ts + ".partGroupUrl", tu, a9)
        }
    }

    function mv(tt) {
        k7(tt);
        tg[tt].partGroupId = "";
        tg[tt].partGroupUrl = "";
        if (hF(tt)) {
            var ts = e4(tt);
            od(ts + ".partGroupId", "", a9);
            od(ts + ".partGroupUrl", "", a9)
        }
    }

    function cv(tt) {
        k7(tt);
        var ts = tg[tt].partGroupId;
        return ts
    }

    function kQ(ts) {
        k7(ts);
        return tg[ts].partGroupUrl
    }

    function eW(ts) {
        k7(ts);
        return isEmpty(tg[ts].partGroupUrl)
    }

    function V(ts) {
        li(jm, ts)
    }

    function bZ() {
        aW(jm)
    }

    function aW(tt) {
        k7(tt);
        tg[tt].vehicleId = "";
        av[tt] = "";
        var ts = l4(tt);
        e8(ts);
        nS[ts] = ""
    }

    function e4(ts) {
        return ts.substring(1)
    }

    function hr(tu, ts, tt) {
        if (dh(this.timeout_handles)) {
            this.timeout_handles = []
        }
        if (tu in this.timeout_handles) {
            clearTimeout(this.timeout_handles[tu])
        }
        this.timeout_handles[tu] = setTimeout(ts, tt)
    }

    function eO() {
        if (!mj()) {
            return
        }
        lN = qD["control.Thai.javascript._selectVehicleToDisplayParts"];
        tf = qD["control.Thai.javascript._noPartsFound"];
        bN = qD["control.Thai.desktop\\\\GetPartDetailInformation.scriban.ButtonPartAdd"];
        m5 = qD["control.Thai.javascript._qtyLabel"];
        tc = qD["control.Thai.javascript._closeButton"];
        iq = qD["control.Thai.javascript._available_parts"];
        pq = "<p class='availableParts'>" + iq + "</p>"
    }

    function sN() {
        $("body").css("visibility", "visible")
    }

    function jf() {
        var ts = window.navigator.userAgent;
        ts = ts.toLowerCase();
        return pQ(ts)
    }

    function nV(ts) {
        if (isEmpty(ts)) {
            ov = 0;
            od("language", ov, aM);
            return
        }
        ov = parseInt(ts);
        if (!isNaN(ov)) {
            return
        }
        ov = 0;
        od("language", ov, aM)
    }

    function aI(tt) {
        var ts = im("oscar");
        var tu = false;
        if (!isEmpty(tt)) {
            if (isEmpty(ts)) {
                qi("oscar", tt, aM)
            } else {
                if (tt !== ts) {
                    tt = ts;
                    tu = true
                }
            }
            e8("oscar");
            od("oscar", tt, aM);
            if (tu) {
                setTimeout(function () {
                    em("refreshBrowser")
                }, 1000)
            }
            return
        }
        if (isEmpty(ts)) {
            return
        }
        od("oscar", ts, aM)
    }

    var lO = "";
    var mP = "3.590.jpg";

    function h4(response, prepareForDataTablesUsage) {
        var decodedResult = decodeResponseText(response[0]);
        if (!prepareForDataTablesUsage) {
            return decodedResult
        }
        if (startsWith(decodedResult, '{"iTotalRecords":')) {
            return decodedResult
        }
        var tx = decodedResult.split("]");
        var totalRecordsCount = tx.length - 1;
        var dataTablesResult = '{"iTotalRecords":' + totalRecordsCount + ',"iTotalDisplayRecords":' + totalRecordsCount + ',"aaData":[' + decodedResult + "]}";
        return dataTablesResult
    }

    function sj(tu, tt) {
        var ts = [];
        nQ(tu, function (tv) {
            ts.push(tv + " " + tt)
        });
        return ts.join(",")
    }

    function kt(responseArr) {
        if (isEmpty(responseArr)) {
            return null
        }
        var tt = h4(responseArr, true);
        if (isEmpty(tt)) {
            return null
        }
        var tv = jQuery.parseJSON(tt);
        if (kP(tv.script)) {
            var ts = dF(tv.script);
            mG(ts, document)
        }
        return tv
    }

    function gT(tt) {
        if (isEmpty(tt)) {
            return null
        }
        var ts = h4(tt, false);
        if (isEmpty(ts)) {
            return null
        }
        var tu = jQuery.parseJSON(ts);
        return tu
    }

    function bi(tu) {
        if (isEmpty(tu)) {
            return
        }
        fX = 0;
        var ts = tu.split("AAAAAAAA");
        for (var tt = 0; tt < ts.length; tt++) {
            var tv = ts[tt];
            if (isEmpty(tv)) {
                continue
            }
            var tw = tv.split("BBBBBBBB");
            if (2 != tw.length) {
                console.log("generateTranslationDictionary invalid data " + tv);
                continue
            }
            qD[tw[0]] = tw[1];
            fX++
        }
    }

    function dh(ts) {
        if (null === ts) {
            return true
        }
        return typeof ts === "undefined"
    }

    function kP(ts) {
        if (null === ts) {
            return false
        }
        return !dh(ts)
    }

    function dF(tu) {
        var tt = tu;
        var tv = [];
        for (var ts = 0; ts < tt.length; ts += 2) {
            tv.push(String.fromCharCode(parseInt(tt.substr(ts, 2), 16)))
        }
        return tv.join("")
    }

    function l3(ts) {
        return s(ts, "fban/fbios;")
    }

    function startsWith(targetText, pattern) {
        return targetText.lastIndexOf(pattern, 0) === 0
    }

    var rW = false;

    function lD(tv) {
        var tt = gt(tv);
        var tu = true;
        var tw = true;
        if (tt === eS) {
            rW = true;
            return [tu, tw]
        }
        if (rW) {
            rW = false;
            tv.preventDefault();
            tw = false;
            return [tu, tw]
        }
        if ((tt === gQ) || (tt === gk) || (tt === rc) || (tt === sr) || (tt === eA)) {
            return [tu, tw]
        }
        if (tt === dG) {
            tu = false;
            return [tu, tw, tt]
        }
        if ((tt === jH) || (tt === my) || (tt === rf) || (tt === h3)) {
            tv.preventDefault();
            tu = false;
            return [tu, tw, tt]
        }
        if (((tt >= i0) && (tt <= iM)) || ((tt >= jb) && (tt <= i5))) {
            var ts = dx(tt);
            if (!ts[1]) {
                tv.preventDefault();
                tw = false;
                return [tu, tw]
            }
            tu = false;
            return [tu, tw, tt, ts[0]]
        }
        tv.preventDefault();
        tw = false;
        return [tu, tw]
    }

    function no(tt) {
        var ts = {};
        var ty = tt.split(jN);
        var tA = [];
        var tv = 0;
        for (var tu = 0; tu < ty.length; tu++) {
            var tz = ty[tu];
            var tw = tz.split(fF);
            var tx = tw[1] + "." + tw[2];
            if (tx in ts) {
                continue
            }
            tA.push(tz);
            ts[tx] = 1;
            tv++;
            if (tv > fI) {
                break
            }
        }
        return tA.join(jN)
    }

    function gL(tt, tv) {
        if (isEmpty(tt)) {
            return false
        }
        var ts = tt.split(".");
        if (ts.length !== 2) {
            return false
        }
        var tu = ts[0].trim();
        if (!ma(h6, tu)) {
            return false
        }
        var tw = ts[1].trim();
        if (tw === "partGroupId") {
            k7(tu);
            tg[tu].partGroupId = tv;
            return true
        }
        if (tw === "partGroupUrl") {
            k7(tu);
            tg[tu].partGroupUrl = tv;
            return true
        }
        return false
    }

    function d5(ts) {
        if (isEmpty(ts)) {
            return ""
        }
        return ts.slice(0, ts.length - 1)
    }

    var a6 = false;

    function bw() {
        new Good({timeout: 1000, callback: gX}).monitor()
    }

    function gX(ts) {
        a6 = ts.isBot
    }

    function ay(ts) {
        if (f0() || bg()) {
            return "RRP"
        }
        if (c8()) {
            return fz(ts, "List", oU)
        }
        if (f3() || P()) {
            return "Retail"
        }
        return "List Price"
    }

    function ks() {
        var tt = new Date();
        var ts = [tt.getMonth() + 1, tt.getDate(), tt.getFullYear()];
        var tw = [tt.getHours(), tt.getMinutes(), tt.getSeconds()];
        var tv = (tw[0] < 12) ? "AM" : "PM";
        tw[0] = (tw[0] < 12) ? tw[0] : tw[0] - 12;
        tw[0] = tw[0] || 12;
        for (var tu = 1; tu < 3; tu++) {
            if (tw[tu] < 10) {
                tw[tu] = "0" + tw[tu]
            }
        }
        return ts.join("/") + " " + tw.join(":") + " " + tv
    }

    function nA(ts) {
        if (s(ts, "ipad")) {
            return true
        }
        if (s(ts, "macintosh")) {
            try {
                document.createEvent("TouchEvent");
                return true
            } catch (tt) {
            }
        }
        return false
    }

    function kD(ts) {
        return isEmpty(qL[ts])
    }

    function mE(ts, tt) {
        qL[ts] = tt
    }

    function jK(ts) {
        return qL[ts]
    }

    function sz() {
        return !(e5() || k4() || bn() || pZ())
    }

    function sc(ts) {
        var tt = kv();
        if (ts) {
            return "bb.html" + tt
        }
        return "b.html" + tt
    }

    function hP() {
        return h1(jm)
    }

    function pQ(ts) {
        if (s(ts, "iphone")) {
            return true
        }
        if (s(ts, "ipad")) {
            return true
        }
        if (nA(ts)) {
            return true
        }
        return false
    }

    function qi(tt, tu, tv) {
        var ts = new Date();
        ts.setTime(ts.getTime() + tv);
        var tw = tt + "=" + tu + "; expires=" + ts.toGMTString() + "; " + nE(location.protocol === "https:");
        document.cookie = tw
    }

    function kA(ts, tu, tt) {
        if (isEmpty(ts)) {
            return null
        }
        return ts.split(tu).join(tt)
    }

    function bf(tv) {
        var tu, tt;
        var ts = "";
        for (tt = 0; tt < tv.length; tt++) {
            tu = tv.charCodeAt(tt).toString(16);
            ts += ("000" + tu).slice(-4)
        }
        return ts
    }

    function H(tv) {
        var tt;
        var tu = tv.match(/.{1,4}/g) || [];
        var ts = "";
        for (tt = 0; tt < tu.length; tt++) {
            ts += String.fromCharCode(parseInt(tu[tt], 16))
        }
        return ts
    }

    var pC = "";
    var hd = "";

    function pA(ts) {
    }

    function nT() {
        setTimeout(function () {
            v()
        }, 2000)
    }

    function v() {
        var ts = {
            excludes: {
                deviceMemory: true,
                language: true,
                enumerateDevices: true,
                userAgent: true,
                timezone: true,
                timezoneOffset: true,
                webdriver: true,
                fonts: true,
                fontsFlash: true
            }
        };
        Xa.get(ts, function (tx) {
            var tB = Xa.x64hash128(tx.map(function (tC) {
                return tC.value
            }).join(), 31);
            qq = tB;
            pC = bf(qq);
            var tA = [];
            var tt = "";
            for (var tz in tx) {
                var tu = tx[tz];
                var ty = tu.key;
                if (!((ty === "canvas") || (ty === "webgl"))) {
                    tA.push({key: ty, value: tu.value})
                }
                if (ty === "user_agent") {
                    hd = bf(tu.value)
                }
            }
            kf = qq + "|" + JSON.stringify(tA);
            var tv = bf(kf);
            var tw = 60 + Math.floor(Math.random() * 100);
            setTimeout(function () {
                $.post("gas", {p: tv}, pA)
            }, tw * 1000)
        })
    }

    function pe() {
        if (P()) {
            return "Trade"
        }
        if (fR() || cu()) {
            return "Trade Club"
        }
        if (f3()) {
            return "Nett"
        }
        return "My Price"
    }

    function checkIsAnotherTab(tabId) {
        if (sU) {
            return eq()
        }
        return checkTabIsInArr(tabsOtherVehicles, tabId)
    }

    function checkIfTabsCatalog(tabId) {
        return "#tabs-catalog" === tabId
    }

    function c4() {
        var ts = window.location.href;
        return s(ts, "/oscar/8888118888/")
    }

    function rd(ts, tt) {
        bw();
        if (!hN) {
            ko();
            return
        }
        try {
            e6 = new easyXDM.Socket({
                onReady: function () {
                    console.log("socket is ready");
                    ep()
                }, onMessage: function (tw, tv) {
                    l8(tw, ts);
                    tt();
                    console.log("Got a message from socket: ");
                    console.log(tw);
                    console.log(tv);
                }
            })
        } catch (tu) {
            console.log("Socket failed to connect");
            e6 = null;
            if (hN) {
                hN = false;
                ko()
            }
        }
    }

    function q(ts) {
        return ts.join(fF)
    }

    function gg(ts) {
        fl = true;
        if (!hN) {
            return
        }
        if (cG) {
            return
        }
        ax = true;
        lm("setDesktop", nc(ts));
        if (sS) {
            db()
        }
    }

    function hH(tt) {
        if (!hN) {
            return
        }
        var tu = parseInt(tt.value);
        var ts;
        if (jV) {
            ts = "#stockInfoPopup"
        } else {
            ts = "#partInfoPopup"
        }
        if (Q()) {
            tu += 200
        }
        rb($(ts), tu + "px").show();
        $("#partInfoPopupFullScreen").height(gy + 10000).fadeIn("slow");
        if (ts === "#stockInfoPopup") {
            return
        }
        if (rw(ts + " .tablePartDimension")) {
            setTimeout(function () {
                eT(ts)
            }, 100)
        }
    }

    function qR(ts, tt) {
        if (ts === "secure") {
            aB = (tt === "1");
            return
        }
        if (ts === "oscar") {
            aI(tt);
            return
        }
        if (ts === "oscarUseDesktop") {
            qA = tt;
            return
        }
        if (ts === "language") {
            nV(tt);
            return
        }
        if (ts === "supercheap") {
            b3(tt);
            return
        }
        if (ts === "partListScrollTopSaved") {
            nt = tt;
            if (isEmpty(nt)) {
                nt = -1
            } else {
                nt = parseInt(nt)
            }
            return
        }
        if (ts === "partNumber") {
            b8 = tt;
            return
        }
        if (ts === "partNumberKitSearch") {
            sI = tt;
            return
        }
        if (ts === "showNettPrice") {
            if (isEmpty(tt)) {
                jk = "1";
                od("showNettPrice", "1", a9)
            } else {
                jk = tt
            }
            return
        }
        if (ts === "showNettPriceGst") {
            if (isEmpty(iF)) {
                iF = "0";
                od("showNettPriceGst", "0", a9)
            } else {
                iF = tt
            }
            return
        }
        if (ts === "rego") {
            n2 = tt;
            return
        }
        if (ts === "vin") {
            hD = tt;
            return
        }
        if (ts === "vinRegoLastInput") {
            k3 = tt;
            return
        }
        if (ts === "state") {
            if (!isEmpty(tt)) {
                lP = tt
            }
            return
        }
        if (ts === "tabs-catalog") {
            nS["tabs-catalog"] = tt;
            return
        }
        if (ts === "tabs-catalog.selectedParentCategory") {
            nS["tabs-catalog.selectedParentCategory"] = tt;
            if (o3) {
                mE("#tabs-catalog", tt)
            }
            return
        }
        if (ts === "tabs-motorbike") {
            nS["tabs-motorbike"] = tt;
            return
        }
        if (ts === "tabs-motorbike.selectedParentCategory") {
            nS["tabs-motorbike.selectedParentCategory"] = tt;
            return
        }
        if (sU) {
            handleParantFrameMessageSetCookiesEachMobile(ts, tt);
            return
        }
        if (gL(ts, tt)) {
            return
        }
        ny(ts, tt)
    }

    function ik(tt, ts) {
        var tu = tt.command;
        if (isEmpty(tu)) {
            return
        }
        if ("useJsonFormat" === tu) {
            gg(ts);
            return
        }
        if ("hasAddToCartCallBack" === tu) {
            nG = true;
            return
        }
        if ("updateScrollTop" === tu) {
            hH(tt);
            return
        }
        if ("setParentGroupId" === tu) {
            mz = tt.value;
            return
        }
        if ("setSubGroupId" === tu) {
            mO = tt.value;
            return
        }
        if ("setCookies" === tu) {
            n5(tt.value);
            return
        }
        if ("rememberVehcileChoice" === tu) {
            jt();
            return
        }
        if ("setLocation" === tu) {
            ce = tt.value;
            return
        }
        if ("referrer" === tu) {
            e0 = tt.value;
            return
        }
        if ("updateSelect" === tu) {
            rq("#vehicleSelector", "#" + tt.id).selectBoxIt("selectOption", tt.value);
            return
        }
    }

    function nN() {
        em("saveScrollTop")
    }

    function db() {
        em("scrollTop")
    }

    function cH(ts) {
        if (fP()) {
            return
        }
        e6.postMessage(ts)
    }

    function ml(tu, tt, ts) {
        if (!cT) {
            return
        }
        if (fP()) {
            f4(tu, tt);
            return
        }
        nj(ts)
    }

    function mC() {
        if (sU) {
            return sA()
        }
        return d8()
    }

    function sA() {
        if (_vehicleType === "0") {
            return "1"
        }
        if (_vehicleType === "1") {
            return "9"
        }
        if (_vehicleType === "2") {
            return "5"
        }
        if (_vehicleType === "3") {
            return "13"
        }
        if (_vehicleType === "4") {
            return "2"
        }
        return "1"
    }

    function d8() {
        if ("#tabs-catalog" === jm) {
            return "1"
        }
        if ("#tabs-tractor" === jm) {
            return "9"
        }
        if ("#tabs-motorbike" === jm) {
            return "5"
        }
        if ("#tabs-marine" === jm) {
            return "13"
        }
        if ("#tabs-engine" === jm) {
            return "2"
        }
        return "1"
    }

    function oc(ts, tt) {
        var tv = {command: ts, value: tt};
        var tu = [];
        tu.push(tv);
        cH(JSON.stringify(tu))
    }

    function getQueryParams() {
        var ts = [getParamsFromCheckboxes("&")];
        ts.push("&scriptVersion=" + mP);
        ts.push("&cookie=" + _cookies);
        ts.push("&isBot=" + a6);
        ts.push("&amd=" + k());
        ts.push("&lllll=" + rj);
        if (pi) {
            ts.push("&gg=" + eY);
            az = null;
            eY = ""
        }
        return ts
    }

    var dJ = 35;
    var lc = false;

    function ti(tt) {
        if (lc) {
            return
        }
        lc = true;
        var ts = null;
        var tx = 0;
        var ty = 0;
        var tv = 0;
        var tw = 0;
        xhr = [];
        var tu = function () {
            pingProgress = tv / dJ;
            ts = new Date().getTime();
            xhr[0] = new XMLHttpRequest();
            xhr[0].onload = function () {
                if (tv === 0) {
                    ts = new Date().getTime()
                } else {
                    var tz = new Date().getTime() - ts;
                    try {
                        var tC = ab();
                        if (tC > 0 && tC < tz) {
                            tz = tC
                        }
                    } catch (tB) {
                        tt()
                    }
                    var tA = Math.abs(tz - tw);
                    if (tv === 1) {
                        tx = tz
                    } else {
                        tx = tx * 0.9 + tz * 0.1;
                        ty = tA > ty ? (ty * 0.2 + tA * 0.8) : (ty * 0.9 + tA * 0.1)
                    }
                    tw = tz
                }
                f8 = tx;
                pingStatus = tx.toFixed(2);
                jitterStatus = ty.toFixed(2);
                tv++;
                if (tv < dJ) {
                    tu()
                } else {
                    pingProgress = 1;
                    tt()
                }
            }.bind(this);
            xhr[0].onerror = function () {
                tt("ping failed");
                if (xhr_ignoreErrors === 1) {
                    tu()
                }
                if (tv < dJ) {
                    tu()
                } else {
                    tt()
                }
            }.bind(this);
            xhr[0].open("GET", "qq?r=" + Math.random(), true);
            xhr[0].send()
        }.bind(this);
        tu()
    }

    function os(ts, tu) {
        var tt;
        if (isEmpty(tu)) {
            tt = ts
        } else {
            tt = ts + "=" + tu
        }
        cH(tt)
    }

    function ry() {
        var ts = window.location.href;
        if (c0) {
            return s(ts, "&vide=")
        }
        var tt = isEmpty("");
        if (!tt) {
            return s(ts, "myAction=88888")
        }
        return s(ts, "qr=1")
    }

    function lm(ts, tt) {
        if (fl) {
            oc(ts, tt);
            return
        }
        os(ts, tt)
    }

    function dO(ts) {
        lm("partDetailInformation", ts)
    }

    var ah;

    function bh() {
        if (dh(ah)) {
            var ts = window.location.href;
            ah = s(ts, "qr=1")
        }
        return ah
    }

    function em(ts) {
        lm(ts, "")
    }

    function qF(tv) {
        var tu, tt;
        var ts = "";
        for (tt = 0; tt < tv.length; tt++) {
            tu = tv.charCodeAt(tt).toString(16);
            ts += ("000" + tu).slice(-4)
        }
        return ts
    }

    function pk(tv) {
        var tt;
        var tu = tv.match(/.{1,4}/g) || [];
        var ts = "";
        for (tt = 0; tt < tu.length; tt++) {
            ts += String.fromCharCode(parseInt(tu[tt], 16))
        }
        return ts
    }

    function oX(ts) {
        if (bH()) {
            jk = "0";
            od("showNettPrice", "0", a9);
            $(".buttonNettPrice").addClass("selected");
            kE();
            return
        }
        jk = "1";
        od("showNettPrice", "1", a9);
        rE();
        $(".buttonNettPrice").removeClass("selected")
    }

    function ej() {
        if (gP()) {
            return ".myPriceLabel, .myPriceValue, .myPrice"
        }
        return ".myPriceLabel, .myPriceValue, .myPrice, .price"
    }

    function kE() {
        $(ej()).addClass("hidden")
    }

    function rE() {
        $(ej()).removeClass("hidden")
    }

    function lJ(tt) {
        var ts = pu();
        ts.push("&term=" + tt);
        $.get("la" + getQueryPart(ts), function (tu) {
        })
    }

    function J(ts) {
        return nR($(ts))
    }

    function hF(ts) {
        return validateTabId(ts) || ("#tabs-merchandise" === ts) || ("#tabs-vin-search" === ts)
    }

    function cc() {
        var ts = encodeQuery(lO);
        if (hN) {
            return "z_1/" + ts
        }
        return "z_0/" + ts
    }

    function j1() {
        if (window.parent === window.top) {
            gK = false;
            return true
        }
        if (isEmpty(e0)) {
            gK = true;
            return false
        }
        if (startsWith(e0, "https://test.autoinfo.com.au/OscarUrl/") || startsWith(e0, "https://online.autoinfo.com.au/OscarUrl/")) {
            gK = false;
            return true
        }
        gK = true;
        return false
    }

    function nk(tt) {
        if (dh(tt)) {
            throw new Error("parameter someDate is undefined")
        }
        var ts = new Date();
        return (tt.getDate() === ts.getDate()) && (tt.getMonth() === ts.getMonth()) && (tt.getFullYear() === ts.getFullYear())
    }

    function m8() {
        if (fM()) {
            e2 = "&#3647;";
            gS = r(e2);
            oU = "VAT"
        }
    }

    var bx;

    function nj(ts) {
        bx = ts;
        lm("changeHeight", ts)
    }

    function mR(ts) {
        lm("updateSelect", ts)
    }

    function dW(ts) {
        lm("updateSelectMultiple", ts)
    }

    function oS(ts) {
        return nD === h1(ts)
    }

    function l4(ts) {
        return ts.substring(1)
    }

    function fC(ts) {
        mT($("#tabs"), ts)
    }

    function mT(tt, ts) {
        tt.tabs("option", "active", ts)
    }

    function fP() {
        return (null === e6)
    }

    function eZ() {
        return (null !== e6)
    }

    function bK(tt) {
        var ts = pe();
        return fz(tt, ts, oU)
    }

    function f3() {
        return aa() || fM() || P() || d1() || bg() || fR() || cu() || dX()
    }

    function kj(tt, tv, tu, ts, tw) {
        if (tu < ts) {
            $(tt + " .vehicleFitmentButton").hide();
            tw(tt, tv, 0, tu);
            return
        }
        $(tt + " .vehicleFitmentButton").show();
        $(tt + " .first.vehicleFitmentButton").setupClick(function (tx) {
            $(tt + " .previous.vehicleFitmentButton").data("start", 0);
            $(tt + " .next.vehicleFitmentButton").data("start", ts);
            tw(tt, tv, 0, ts);
            return false
        });
        $(tt + " .last.vehicleFitmentButton").setupClick(function (ty) {
            var tx = Math.floor(tu / ts) * ts;
            $(tt + " .previous.vehicleFitmentButton").data("start", tx - ts);
            $(tt + " .next.vehicleFitmentButton").data("start", tx);
            tw(tt, tv, tx, ts);
            return false
        });
        $(tt + " .previous.vehicleFitmentButton").data("start", 0).setupClick(function (tx) {
            var ty = parseInt($(tt + " .previous.vehicleFitmentButton").data("start"));
            tw(tt, tv, ty, ts);
            eB(tt, tu, ts, ty);
            return false
        });
        $(tt + " .next.vehicleFitmentButton").data("start", ts).setupClick(function (tx) {
            var ty = parseInt($(tt + " .next.vehicleFitmentButton").data("start"));
            tw(tt, tv, ty, ts);
            eB(tt, tu, ts, ty);
            return false
        });
        tw(tt, tv, 0, ts)
    }

    function dZ(ts) {
        if (J(ts)) {
            return $(ts).outerHeight(true)
        }
        return 0
    }

    function ac(ts) {
        return ts.outerHeight(true)
    }

    function rR() {
        q0 = rz("aiu").trim()
    }

    function ip(ts) {
        return jQuery.trim(jQuery(ts + " option:selected").text())
    }

    function oQ(tu) {
        if (dh(tu)) {
            throw new Error("parameter date is undefined")
        }
        var ts = tu.getHours();
        var tv = tu.getMinutes();
        var tt = ts >= 12 ? "pm" : "am";
        ts = ts % 12;
        ts = ts ? ts : 12;
        tv = tv < 10 ? "0" + tv : tv;
        var tw = ts + ":" + tv + " " + tt;
        return tw
    }

    function kI(ts) {
        rx(!cZ())
    }

    function d9(ts) {
        return jQuery(ts + " option:selected").index()
    }

    function iH() {
        return "WebkitAppearance" in document.documentElement.style
    }

    function pJ() {
        return bb() && ("au" === lG)
    }

    function pj() {
        return bb() && ("nz" === lG)
    }

    function bb() {
        return (fO === 1) || (fO === 2) || (fO === 3)
    }

    function pZ() {
        return (12 === aR)
    }

    function fm(tt, tv) {
        if (isEmpty(tt)) {
            return false
        }
        var tu = tt.split(jN);
        for (var tx = 0; tx < tu.length; tx++) {
            var ts = tu[tx];
            if (isEmpty(ts)) {
                continue
            }
            var tw = ts.split(fF);
            if (tv(tw)) {
                return true
            }
        }
        return false
    }

    function hA(ts) {
        return $(ts).outerWidth(true)
    }

    function lM() {
        if (iH()) {
            return jQuery("body").scrollTop()
        }
        return jQuery("html").scrollTop()
    }

    function cB() {
        if (iH()) {
            return jQuery("body").height()
        }
        return jQuery("html").height()
    }

    function iY() {
        return jQuery(document).scrollTop()
    }

    function pw(tt) {
        var ts = jQuery("#" + tt).offset();
        return ts.top
    }

    function jE(ts) {
        return _autoInfoElementHeight
    }

    function cZ() {
        if (isEmpty(iF)) {
            return false
        }
        return "1" === iF
    }

    function p1(ts) {
        return (ts === qJ) || kp(ts)
    }

    function kp(ts) {
        return (ts === nD) || (ts === qr)
    }

    function lz(ts) {
        return (ts === qJ)
    }

    function lH(tw, tx, tu, tt) {
        var tv = nr();
        tv.push("&s=" + tx);
        tv.push("&c=" + tu);
        tv.push("&p=", encodeQuery(tw));
        if (tt) {
            tv.push("&m=1")
        }
        var ts = "pl" + getQueryPart(tv);
        return ts
    }

    function shouldGoToServerToRequestCookie() {
        var ts = !isEmpty(lO);
        if (!ts) {
            if (isEmpty(_cookies)) {
                _cookies = im("oscar");
                console.log("debug shouldGoToServerToRequestCookie _cookie=" + _cookies)
            }
        }
        return ts
    }

    function hC(ty, tx) {
        var tt = 947;
        var ts = cB();
        var tu = iY();
        var tw = jQuery(window).height();
        var tv;
        if ((tu + tt) >= (ty + tx)) {
            tv = tu - 133 - 84
        } else {
            if (tu > ty) {
                tv = tu - 133
            } else {
                tv = 1
            }
        }
        if (tv <= 0) {
            tv = 10
        }
        return tv
    }

    function bH() {
        if (isEmpty(jk)) {
            return true
        }
        return "1" === jk
    }

    function rQ(tt) {
        if (isEmpty(tt)) {
            return
        }
        var ts = rz("lang");
        if (!isEmpty(ts)) {
            ts = ts.toLowerCase();
            if (ts === "thai") {
                ov = 1
            }
        }
        $("input[name='language']").change(pf);
        $("input:radio[name=language]").val([ov]);
        bi(tt);
        eO()
    }

    function gq(ts) {
        if (isEmpty(ts)) {
            return null
        }
        var tt = ts.toString();
        return kA(tt, gS, "")
    }

    function ab() {
        var ts = performance.getEntries();
        ts = ts[ts.length - 1];
        var tt = ts.responseStart - ts.requestStart;
        if (tt <= 0) {
            tt = ts.duration
        }
        return tt
    }

    function mr(ts, tu) {
        var tw = ts.data("price");
        if (isEmpty(tw)) {
            return
        }
        var tv;
        if (tu) {
            var tt = gq(tw);
            if (tt == "POA") {
                return
            }
            tv = e2 + d7(parseFloat(bz(tt)))
        } else {
            tv = e2 + gq(tw)
        }
        ts.html(tv)
    }

    function oJ(ts) {
        return joinArrToString(['<img class="', ts, '" ', nH, "/>"])
    }

    function aO(tu, tt, ts) {
        tu.replaceWith(tt).promise().done(ts)
    }

    function aA() {
        return joinArrToString(["<img class='noHelpIcon' ", nH, " />"])
    }

    function d1() {
        return (9 === aR)
    }

    function sy() {
        return (17 === aR)
    }

    function r8(ts) {
        return location.hostname + "." + hJ + "." + ts
    }

    function e8(ts) {
        var tt = r8(ts) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        if (location.protocol === "https:") {
            tt = tt + " SameSite=None; Secure"
        }
        pp(tt)
    }

    function nc(ts) {
        if (isEmpty(qA)) {
            return ts
        }
        return qA
    }

    function cp(ts) {
        return ts.clone().children().remove().end().text()
    }

    function convertQueryStringToHex(query) {
        query = query.replace(/&&&/g, "&");
        query = query.replace(/&&/g, "&");
        var tu = [];
        var ts = query.length;
        var tt = 0;
        while (tt < ts) {
            var hexSymbol = query.charCodeAt(tt++).toString(16);
            if (1 == hexSymbol.length) {
                tu.push("0")
            }
            tu.push(hexSymbol)
        }
        return joinArrToString(tu).toUpperCase()
    }

    function id(tw) {
        var ts = [];
        var tz = 0;
        while (1) {
            var tt = tw.indexOf("transateid=[", tz);
            if (tt === -1) {
                ts.push(tw.substring(tz));
                break
            }
            var ty = tt + "transateid=[".length;
            var tv = tw.indexOf("]", ty);
            if (tv === -1) {
                ts.push(tw.substring(tz));
                break
            }
            var tu = tw.substring(ty, tv);
            var tx = qD[tu];
            ts.push(tw.substring(tz, tt));
            ts.push(tx);
            tz = tv + 1
        }
        return joinArrToString(ts)
    }

    function sR(tt) {
        var tu = [];
        var ts = jg;
        while (0 < ts) {
            ts--;
            if (0 === tt.length) {
                break
            }
            tu.push(tt.shift())
        }
        if (0 === tu.length) {
            return ""
        }
        return tu.join(",")
    }

    function bc(ts) {
        var tt = $.cookie(ts);
        return (null !== tt)
    }

    var mp;

    function qp() {
        if (dh(mp)) {
            mp = ht()
        }
        return mp
    }

    function ht() {
        if (0 === mQ) {
            return false
        }
        if (!(aa() || P() || fM())) {
            return true
        }
        if ((a3 === "12690") || (a3 === "307638")) {
            return false
        }
        return true
    }

    function tr(ts) {
        var tt = "0";
        if (ts) {
            tt = "1"
        }
        lm("reload", tt)
    }

    function aa() {
        return (4 === aR)
    }

    function fM() {
        return (14 === aR)
    }

    var gO;

    function gP() {
        if (dh(gO)) {
            gO = f0() || aa() || fM() || d1() || bg() || fR() || cu() || (!ok())
        }
        return gO
    }

    function f0() {
        return (6 === aR)
    }

    function fE(ts) {
        return parseInt($(ts).val())
    }

    function iL(ts) {
        return parseInt($(ts).text())
    }

    function jt() {
        cy = true;
        if (!hN) {
            return
        }
        var tu = $("#WidgetMake").val();
        var tt = {
            id: "makeSelect",
            defaultText: "Select Make",
            optionList: qm("#vehicleSelector #makeSelect"),
            selectedValue: tu
        };
        var ts = [];
        ts.push(tt);
        ts.push({
            id: "modelSelect",
            defaultText: "Select Model",
            optionList: qm("#vehicleSelector #modelSelect"),
            selectedValue: $("#WidgetModel").val()
        });
        ts.push({
            id: "yearSelect",
            defaultText: "Select Year",
            optionList: qm("#vehicleSelector #yearSelect"),
            selectedValue: $("#WidgetYear").val()
        });
        ts.push({
            id: "seriesChassisSelect",
            defaultText: "Select Series Chassis",
            optionList: qm("#vehicleSelector #seriesChassisSelect"),
            selectedValue: $("#WidgetSeriesChassis").val()
        });
        ts.push({
            id: "engineSelect",
            defaultText: "Select Engine",
            optionList: qm("#vehicleSelector #engineSelect"),
            selectedValue: $("#WidgetEngine").val()
        });
        ts.push({
            id: "detailSelect",
            defaultText: "Select Detail",
            optionList: qm("#vehicleSelector #detailSelect"),
            selectedValue: $("#WidgetDetail").val()
        });
        dW(JSON.stringify(ts))
    }

    function qm(tt) {
        var ts = [];
        $(tt + " option").each(function () {
            var tu = {value: $(this).val(), text: $(this).text()};
            ts.push(tu)
        });
        return ts
    }

    function pW(ts) {
        if (dh(ts)) {
            return
        }
        ts.html("")
    }

    function bC() {
        var ts = window.navigator.userAgent;
        ts = ts.toLowerCase();
        if (l3(ts)) {
            return true
        }
        if (!pQ(ts)) {
            return false
        }
        return s(ts, "safari")
    }

    function e5() {
        return (7 === aR)
    }

    function ls(tx, ts, tu, tw, tt) {
        var tv = tx.responseText;
        if (isEmpty(tv)) {
            return
        }
        if (s(tv, "Unauthorised use has been detected")) {
            alert(tv);
            return
        }
        if (tv == "parsererror") {
            alert("DataTables warning: JSON data from server could not be parsed. This is caused by a JSON formatting error.");
            return
        }
        if (tv === "timeout") {
            alert("The server took too long to send the data.");
            return
        }
        if (tw) {
            if (s(tv, dq)) {
                if (rB()) {
                    return
                }
            }
            alert("Oscar Error:" + tv + " url=" + tt)
        }
    }

    function f5() {
        return (5 === aR)
    }

    function k4() {
        return (8 === aR)
    }

    function cJ() {
        return (18 === aR)
    }

    var rj = 0;

    function sk(ts, tw, tu, tt) {
        if (gK) {
            return
        }
        var tv = Date.now();
        return $.ajax({
            url: ts, dataType: "json", data: tu, success: function (tx) {
                var ty = Date.now();
                if (tv < ty) {
                    rj = ty - tv
                } else {
                    rj = tv - ty
                }
                tw(tx)
            }, error: function (tz, tx, ty) {
                ls(tz, tx, ty, tt, ts)
            }
        })
    }

    function ra(tt, tv, tu, ts) {
        if (gK) {
            return
        }
        return $.ajax({
            url: tt, dataType: "json", data: tu, success: function (tw) {
                tv(tw)
            }, error: ts
        })
    }

    function fS() {
        return po(jm)
    }

    var c3 = "F0CB9DAE16       543872";
    var k0;
    var pz;
    var mz;
    var mO;
    var cy = true;
    var sD = 0;
    var pI = 360;
    var lC = false;
    var cP;
    var W;
    var qY;
    var fH;
    var kd;
    var oD;
    var jL;
    var mm;
    var c9 = "1";
    var pU = "1";
    var j5 = {};
    var iN = "";
    var mF = false;
    var fq = "";
    var kF = "";
    var jA = "";
    var rp = "";
    var jn = [];
    var hG = [];
    var s8 = [];
    var fU = "";
    var p4 = "";
    var F = 0;
    var bW = 0;
    var rg = 0;
    var cW = "";
    var cF = "";
    var jo = 57;
    var j3 = 0;
    var ew = 0;
    var pl = {};
    var eJ = 343;
    var iP = "";
    var jQ = "";
    var bt;
    var gU;
    var tk;
    var kk;
    var hD = "";
    var n2 = "";
    var so = "";
    var pL = "";
    var lX = "";
    var h7 = "21";
    var hj = false;
    var eM = false;
    var r7 = "999999";
    var rN = r7;
    var g5;
    var tf = "NO PARTS FOUND";
    var lN = "Select vehicle to display parts";
    var sp = "Select Logbook Schedule from left";
    var eC = "Select options from left";
    var qw = "Select Repair Time Type from left";
    var on = false;
    var qL = {};
    var aN = false;
    var sH = "";
    var tl = 32;
    var lv = "";
    var f2 = "";
    var ms = false;
    var il = false;
    var g6 = 0;
    var nB = true;
    var ih = false;
    var hz = "";

    function buildRelativeQuery(selector, method) {
        var queryParams = getQueryParams();
        if (b2(selector + " .checkBoxChassis")) {
            queryParams.push("&ChassisFlag=1")
        }
        if (b2(selector + " .checkBoxSeries")) {
            queryParams.push("&SeriesFlag=1")
        }
        if (!isEmpty(hd)) {
            queryParams.push("&ua=" + hd)
        }
        queryParams.push("&ct=" + f8);
        var tabCode = getTabCodeByTabId(selector);
        if (!isEmpty(tabCode)) {
            queryParams.push("&t=" + tabCode)
        }
        if ("GetMakeList" == method) {
            queryParams.push("&0=make");
            return "a" + getQueryPart(queryParams)
        }
        var makerId = getMakerId(selector);
        if (isEmpty(makerId) || ("- Popular Makes -" == makerId) || ("- All Makes -" == makerId)) {
            return ""
        }
        queryParams.push("&1=");
        queryParams.push(makerId);
        if ("GetModelList" == method) {
            queryParams.push("&0=model");
            queryParams.push("&dt=" + $.now());
            return "a" + getQueryPart(queryParams)
        }
        var tz;
        var ty;
        if (cG) {
            tz = ip(selector + " #modelSelect");
            ty = $(selector + " #modelSelect").val()
        } else {
            tz = e9(selector + " .tableModel");
            ty = kz(selector + " .tableModel")
        }
        if (isEmpty(ty) || ("- Popular Models -" == tz) || ("- All Models -" == tz)) {
            return ""
        }
        ty = bp(ty);
        if (isEmpty(ty)) {
            return ""
        }
        queryParams.push("&2=");
        queryParams.push(ty);
        if ("GetSubModelList" == method) {
            queryParams.push("&0=submodel");
            return "a" + getQueryPart(queryParams)
        }
        queryParams.push("&3=");
        queryParams.push(cb());
        if ("GetYearList" == method) {
            queryParams.push("&0=year");
            return "a" + getQueryPart(queryParams)
        }
        var ts = cE(selector);
        if (isEmpty(ts)) {
            return ""
        }
        queryParams.push("&4=");
        queryParams.push(ts);
        if ("GetSeriesChassisList" == method) {
            queryParams.push("&0=series");
            if (cG) {
                queryParams.push("&ChassisFlag=" + c9 + "&SeriesFlag=" + pU)
            }
            return "a" + getQueryPart(queryParams)
        }
        ed = nX(selector);
        if (isEmpty(ed)) {
            return ""
        }
        queryParams.push("&5=");
        queryParams.push(ed);
        if (cG) {
            queryParams.push("&ChassisFlag=" + c9 + "&SeriesFlag=" + pU)
        }
        if ("GetEngineList" == method) {
            queryParams.push("&0=engine");
            return "a" + getQueryPart(queryParams)
        }
        var tu = dY(selector);
        if (isEmpty(tu)) {
            return ""
        }
        queryParams.push("&6=");
        queryParams.push(tu);
        if (method == "GetDetailList") {
            queryParams.push("&0=detail");
            return "a" + getQueryPart(queryParams)
        }
    }

    function getParamsFromCheckboxes(separator) {
        var ts = filterNotEmpty([
            returnIfChecked("#country_au", "AU=1"),
            returnIfChecked("#country_nz", "NZ=1"),
            returnIfChecked("#country_usa", "USA=1"),
            returnIfChecked("#country_japan", "JAPAN=1"),
            returnIfChecked("#country_thai", "THAI=1"),
            returnIfChecked("#country_aem", "AEM=1"),
            returnIfChecked("#vehicleTypePassengerVehicle", "VPV=1"),
            returnIfChecked("#vehicleTypeLightCommercial", "VLC=1"),
            returnIfChecked("#vehicleTypeMediumCommercial", "VMC=1"),
            returnIfChecked("#vehicleTypeHeavyCommercial", "VHC=1"),
            returnIfChecked("#vehicleGenerationNormal", "VGN=1"),
            returnIfChecked("#vehicleGenerationClassic", "VGC=1"),
            returnIfChecked("#vehicleGenerationCurrent", "VGR=1"),
            returnIfChecked("#diesel", "diesel=1"), "ZZZ=" + qq]).join(separator);
        return ts
    }

    function kG(ts) {
        return $(gd() + " li a").filter(function (tt) {
            return $(this).attr("id") === ts
        }).first()
    }

    function n4() {
        if (!fS()) {
            st(true);
            return
        }
        if (a0()) {
            if (mH() && (checkIsAnotherTab(jm) || ("0" === h7))) {
                st(true);
                return
            }
            if (!hu()) {
                af()
            }
            return
        }
        var tw = kQ(jm);
        var tt = qx(tw);
        if (isEmpty(tt)) {
            st(true);
            return
        }
        var tu = n(tt);
        var ts = kG(tt);
        if (dh(ts)) {
            st(true);
            return
        }
        if (0 === ts.length) {
            st(false);
            return
        }
        var tv = m7(tw);
        if (isEmpty(tv)) {
            aY(jm, tu);
            qE("#" + tu);
            eg();
            st(true);
            return
        }
        gA(ts);
        qE("#" + cv(jm))
    }

    function ji(tt, ts) {
        kK();
        var tw = $(tt);
        if (!gf(tw)) {
            return
        }
        var tu;
        try {
            tu = tw.dataTable()
        } catch (tv) {
            return
        }
        var tx = tu.fnSettings();
        if (null === tx) {
            return
        }
        tx.oLanguage.sEmptyTable = ts;
        $(tt + " *").off();
        tx.oFeatures.bServerSide = false;
        try {
            tu.fnClearTable()
        } finally {
            tx.oFeatures.bServerSide = true
        }
        gN();
        j6();
        $(tt + " thead").hide()
    }

    function o1(ts) {
        var tu = $(ts);
        if (!gf(tu)) {
            return
        }
        var tt = tu.dataTable();
        var tv = tt.fnSettings();
        tv.oLanguage.sEmptyTable = '<img src="//online.autoinfo.com.au/images/logos/ajax-loader.gif">';
        $(ts + " *").off();
        tv.oFeatures.bServerSide = false;
        try {
            tt.fnClearTable()
        } finally {
            tv.oFeatures.bServerSide = true
        }
    }

    function aS(tt, tx, ts) {
        var tu = mM(tt, mH());
        var tv = tu[0];
        var tw = tu[1];
        j4(tx, false);
        if (hu()) {
            return
        }
        if (isEmpty(tv)) {
            if (tw) {
                q5();
                st(true);
                return
            }
            n4(ts)
        }
    }

    function fy(ty, tt) {
        var tx = oS(ty);
        if (null === tt) {
            dT(tx, ty);
            return
        }
        if (rY()) {
            if (tx) {
                eg()
            }
        }
        pS(false);
        if (bE()) {
            s6()
        }
        if (!io()) {
            if (!km()) {
                n4();
                return
            }
        }
        var tv = gT(tt);
        var tw = (null === tv);
        if (!tw) {
            tw = isEmpty(tv.V)
        }
        if (tw) {
            dT(tx, ty);
            return
        }
        var ts = tv.V;
        var tu = "";
        if (mj()) {
            tu = id(ts)
        } else {
            tu = ts
        }
        mg(gd(), tu, function () {
            aS(ty, false, true)
        })
    }

    function s2(ts, tu, tv, tt) {
        $(ts + " img.partNumberVehicle").attr("src", lH(tu, tv, tt, false)).on("load", function () {
            sY(ts)
        })
    }

    function ki(tt, tw, tv) {
        var tu = parseInt(tv);
        var ts = 100;
        if (tt === "#partInfoPopup") {
            ts = 15
        } else {
            if (cT) {
                ts = 1000
            } else {
                ts = 3
            }
        }
        kj(tt, tw, tu, ts, s2)
    }

    function S(ts) {
        if (sd() || (!fN())) {
            $(jm + " .vehicleFitment").hide();
            return
        }
        dl(jm, ts)
    }

    function nU(tt, ts) {
        if (tt.status === "doNothing") {
            oL(ts);
            return
        }
        if (tt.status === "refreshBrowser") {
            if (!isEmpty(tt.message)) {
                kg();
                alert(tt.message)
            }
            em("refreshBrowser");
            return
        }
        if (tt.status === "deleteCookieRefreshBrowser") {
            e8("supercheap");
            if (!isEmpty(tt.message)) {
                kg();
                alert(tt.message)
            }
            setTimeout(function () {
                em("refreshBrowser")
            }, 2000);
            return
        }
        if (tt.status === "refreshClientBrowserWidget") {
            oL(ts);
            em("refresh");
            return
        }
        if (tt.status === "refreshClientBrowserWidgetRememberPosition") {
            oL(ts);
            hx(2);
            return
        }
        if (tt.status === "refreshWholePage") {
            oL(ts);
            hx(1);
            return
        }
        if (tt.status === "alert") {
            kg();
            alert(tt.message);
            return
        }
        if (tt.status === "silent") {
            oL(ts);
            return
        }
        alert(tt.status + " " + tt.message)
    }

    function nY(tG, tt, tu, ts, tE, tF, tx, tD, tA, tv, tB, tw) {
        if ((tG === "#partInfoPopup") || (tG === "#tabs-part-info")) {
            tD = $(tG + " .addOrderQuantityInput")
        } else {
            if (tD === undefined) {
                tD = $("#" + tt)
            }
        }
        var tC = tD.val();
        if (isEmpty(tC)) {
            alert("Error: buttonAddToCartClick isEmpty(sQuantity)");
            return
        }
        if (s(tC, "-")) {
            alert("Invalid quantity");
            return
        }
        if (s(tC, ".")) {
            alert("Invalid quantity");
            return
        }
        if (tC.length === 0) {
            alert("Invalid quantity");
            return
        }
        if (je()) {
            var tz = parseInt(tC);
            var ty = 0;
            if (tx !== "Call") {
                ty = parseInt(tx.replace("+", ""))
            }
            if (tz > ty) {
                lf(tE - 100);
                $("#waitingScreen button.add").setupClick(function (tH) {
                    fD(tG, tt, tu, ts, tE, tF, tC, false, tA, tv, tB, tw)
                });
                $("#waitingScreen button.cancel").setupClick(function (tH) {
                    fD(tG, tt, tu, ts, tE, tF, tC, true, tA, tv, tB, tw)
                });
                return
            }
        }
        fD(tG, tt, tu, ts, tE, tF, tC, false, tA, tv, tB, tw)
    }

    function aV(ts) {
        if ("#tabs-catalog" === ts) {
            return "0"
        }
        if ("#tabs-tractor" === ts) {
            return "1"
        }
        if ("#tabs-motorbike" === ts) {
            return "2"
        }
        if ("#tabs-marine" === ts) {
            return "3"
        }
        if ("#tabs-engine" === ts) {
            return "4"
        }
        if ("#tabs-merchandise" === ts) {
            return "5"
        }
        return ""
    }

    function aF(ts) {
        var tt = ts + " .tableSeriesChassis";
        h2(tt, hX, function () {
            iG(ts, tt)
        }, function (tu) {
            kl(tt, tu)
        }, function (tv) {
            var tu = this;
            rU(ts, tu);
            return 0
        }, ts + " .engineInput")
    }

    function n(ts) {
        if (isEmpty(ts)) {
            return ""
        }
        if (!s(ts, "&parentGroupId=")) {
            return ""
        }
        return ts.substring("&parentGroupId=".length, ts.length)
    }

    function oI(ts) {
        if (isEmpty(ts)) {
            return ""
        }
        if (!s(ts, "&subGroupId=")) {
            return ""
        }
        return ts.substring("&subGroupId=".length, ts.length)
    }

    function m7(tt) {
        if (isEmpty(tt)) {
            return ""
        }
        var ts = tt.indexOf("&subGroupId=");
        if (-1 == ts) {
            return ""
        }
        return tt.substring(ts, tt.length)
    }

    function n8(ts) {
        var tv = [];
        var tt = ts.length;
        var tu = 0;
        while (tu < tt) {
            tv.push(ts.charCodeAt(tu++))
        }
        return tv.join("")
    }

    function rr() {
        $("#vehiclesInMyGarageLabel").html(go(".tableGarage") + "  Vehicles in My Garage");
        $("#tabs-garage .tableGarage tbody .id").html("<button type='button' class='garagebutton'>Delete</button>").setupClick(function () {
            var tv = $(this).attr("id");
            var tu = $(this).parent();
            var tt = [getParamsFromCheckboxes("&")];
            tt.push("&0=deleteFromGarage");
            tt.push("&id=" + encodeQuery(tv));
            tt.push("&v=" + mP);
            var ts = "a" + getQueryPart(tt);
            sk(ts, function (tw) {
                tu.remove()
            })
        });
        $("#tabs-garage .tableGarage .shortUrl").remove();
        $("#tabs-garage .tableGarage .title").setupClick(function () {
            var ts = $(this).attr("shortUrl");
            if (!isEmpty(ts)) {
                oR = ts;
                nt = 0;
                od("page", oR, 5000);
                od("partListScrollTopSaved", 0, 5000)
            }
            cV()
        })
    }

    function rO() {
        var ts = "#tabs-garage .tableGarage";
        mn($(ts));
        var tu = $(ts).dataTable();
        var tt = tu.fnSettings();
        tt.oLanguage.sEmptyTable = "NO VEHICLES FOUND";
        tt.oFeatures.bServerSide = true;
        tt.sAjaxSource = "myg";
        tu.fnDraw()
    }

    function ix() {
        ib()
    }

    function qO() {
        var ts = ir(window.navigator.userAgent);
        qd = {};
        if (ts.browser) {
            qd[ts.browser] = true;
            qd.version = ts.version;
            qd.versionNumber = parseInt(ts.version)
        }
        if (ts.platform) {
            qd[ts.platform] = true
        }
        if (qd.android || qd.ipad || qd.iphone || qd["windows phone"]) {
            qd.mobile = true
        }
        if (qd.cros || qd.mac || qd.linux || qd.win) {
            qd.desktop = true
        }
        if (qd.chrome || qd.opr || qd.safari) {
            qd.webkit = true
        }
        if (qd.rv) {
            var tw = "msie";
            ts.browser = tw;
            qd[tw] = true
        }
        if (qd.opr) {
            var tu = "opera";
            ts.browser = tu;
            qd[tu] = true
        }
        if (qd.safari && qd.android) {
            var tt = "android";
            ts.browser = tt;
            qd[tt] = true
        }
        qd.name = ts.browser;
        qd.platform = ts.platform;
        var tv = navigator.userAgent.toLowerCase();
        aT = 0;
        qd.chrome = /chrome/.test(tv);
        oT(tv)
    }

    function j9(tA, tw) {
        $(mh("td.partNumber img.partPlusIcon, td.partNumber p.expandHideMessage, p.availableParts", tw)).setupClick(kX);
        $(tw + " tr.purpose td.partNumber").attr("colspan", nM());
        var ts = [{
            label: "Copy Part Number", action: function (tB) {
                q2(cp($(tB.target)))
            }
        }];
        if (rw("#tabs-feedback")) {
            ts.push({
                label: "Send Feedback about this listing: ", action: function (tB) {
                    sJ(cp($(tB.target)))
                }
            })
        }
        $(tw + " td.partNumber").contextPopup({items: ts});
        if (mS(tw)) {
            op(jm + " .tablePart", false);
            return
        }
        if (("#tabs-part" === tw) || ("#tabs-part2" === tw)) {
            var tu = (1 === tA.expand);
            op(jm + " .tablePart", tu)
        }
        var tv;
        if (sd()) {
            tv = "#tabs-crosspart";
            $("#partNumberTableImage").remove();
            var tx = joinArrToString(["<img id='partNumberTableImage' src='", c5, "'>"]);
            $(tx).appendTo("#tabs-crosspart #partNumberTableSection div.dataTables_wrapper");
            $("#tabs-crosspart #partNumberTableSection").hide().show().scrollTop(0).scrollLeft(0)
        } else {
            tv = tw
        }
        $(tv + " .partNoSelectButton," + tv + " .infoIcon," + tv + " .partIcon").setupClick(function () {
            rJ(tA, $(this).closest("tr"))
        });
        gE = $(tv + " .tablePart tbody tr:visible .partNoSelectButton").length;
        if (1 === gE) {
            var tz = $(tv + " .tablePart tbody tr:visible .partNoSelectButton");
            tz.click();
            var tt = $(tv + " .tablePart tbody tr.shouldBeHiddenChildren").length;
            if (0 === tt) {
                tz.hide()
            }
        }
        if (oE) {
            var ty = 416;
            if (1 == gE) {
                ty = 53
            } else {
                ty = 250
            }
            bU($(tv + " .partImageSection"), ty);
            G()
        }
    }

    function iy() {
        var ty = "popup";
        var tx = true;
        var tw = "";
        var tt = "#tabs";
        var ts = ["class", "id", "style", "on"];
        var tv = '<meta charset="utf-8" />,<meta http-equiv="X-UA-Compatible" content="IE=edge"/>';
        var tu = {mode: ty, popClose: tx, extraCss: tw, retainAttr: ts, extraHead: tv};
        $(tt).printArea(tu)
    }

    function dB() {
        var ts = function () {
            iy()
        };
        var tt = function () {
        };
        if (window.matchMedia) {
            var tu = window.matchMedia("print");
            tu.addListener(function (tv) {
                if (tv.matches) {
                    ts()
                } else {
                    tt()
                }
            })
        }
        window.onbeforeprint = ts;
        window.onafterprint = tt
    }

    function oT(ts) {
        if (qd.msie) {
            ts = qd.version;
            aT = ts.substring(0, ts.indexOf("."));
            return
        }
        if (qd.chrome) {
            sS = true;
            ts = ts.substring(ts.indexOf("chrome/") + 7);
            ts = ts.substring(0, ts.indexOf("."));
            aT = ts;
            qd.safari = false;
            return
        }
        if (qd.safari) {
            ts = ts.substring(ts.indexOf("safari/") + 7);
            ts = ts.substring(0, ts.indexOf("."));
            aT = ts;
            return
        }
        if (qd.mozilla) {
            if (navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
                ts = ts.substring(ts.indexOf("firefox/") + 8);
                ts = ts.substring(0, ts.indexOf("."));
                aT = ts
            } else {
            }
            return
        }
        if (qd.opera) {
            ts = ts.substring(ts.indexOf("version/") + 8);
            ts = ts.substring(0, ts.indexOf("."));
            aT = ts
        }
    }

    function ir(tu) {
        tu = tu.toLowerCase();
        var tt = /(opr)[\\/]([\\w.]+)/.exec(tu) || /(chrome)[ \\/]([\\w.]+)/.exec(tu) || /(version)[ \\/]([\\w.]+).*(safari)[ \\/]([\\w.]+)/.exec(tu) || /(webkit)[ \\/]([\\w.]+)/.exec(tu) || /(opera)(?:.*version|)[ \\/]([\\w.]+)/.exec(tu) || /(msie) ([\\w.]+)/.exec(tu) || tu.indexOf("trident") >= 0 && /(rv)(?::| )([\\w.]+)/.exec(tu) || tu.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\\w.]+)|)/.exec(tu) || [];
        var ts = /(ipad)/.exec(tu) || /(iphone)/.exec(tu) || /(android)/.exec(tu) || /(windows phone)/.exec(tu) || /(win)/.exec(tu) || /(mac)/.exec(tu) || /(linux)/.exec(tu) || /(cros)/i.exec(tu) || [];
        return {browser: tt[3] || tt[1] || "", version: tt[2] || "0", platform: ts[0] || ""}
    }

    function hw(ts) {
        if (!gf(ts)) {
            return
        }
        var tt = ts.dataTable({
            bPaginate: false,
            bFilter: false,
            bSort: false,
            bInfo: false,
            bDestroy: true,
            bServerSide: false,
            bProcessing: false,
            bAutoWidth: false,
            bDataEmptyAddOneRow: false,
            fnRowCallback: i9,
            fnCookieCallback: nF,
            fnDrawCallback: function (tv) {
                var tu = $(this);
                if (0 === tv.aoData.length) {
                    tu.hide();
                    return
                }
                tu.show();
                if (c1()) {
                    G()
                }
            },
            fnServerData: function (tu, tw, tx, tv) {
                tv.jqXHR = sk(tu, function (tz) {
                    var ty = kt(tz);
                    if (null === ty) {
                        return
                    }
                    tx(ty)
                }, [], true)
            },
        }).fnSettings().oLanguage.sEmptyTable = " "
    }

    function gF() {
        if (q6["#tabs-catalog"]) {
            return "#tabs-catalog"
        }
        if (q6["#tabs-tractor"]) {
            return "#tabs-tractor"
        }
        if (q6["#tabs-motorbike"]) {
            return "#tabs-motorbike"
        }
        if (q6["#tabs-marine"]) {
            return "#tabs-marine"
        }
        console.log("error getIntialTab");
        return "#tabs-catalog"
    }

    function r3(tt, ts, tu, tv) {
        if (mK) {
            bV()
        }
        $.get(tu, function (tw) {
            if (mK) {
                ig()
            }
            ll(tt, ts, tw, tv)
        })
    }

    function hM(tv, ts) {
        var tt = ts[12];
        var tu = joinArrToString(['<span class="box" id="', tt, '"><span class="filterMake">', ts[0], '</span><br /><span class="filterModel">', ts[1], '</span><br /><span class="filterSubModel">', ts[2], '</span><br /><span class="filterYear">', ts[3], '</span><br /><span class="filterCc">', ts[4], '</span><br /><span class="filterEngine">', ts[5], '</span><br /><span class="filterChassis">', ts[6], '</span><br /><span class="filterSeries">', ts[7], '</span><br /><span class="filterVin">', ts[8], '</span><br /><span class="filterBody">', ts[9], '</span><br /><span class="filterFuel">', ts[10], '</span><br /><span class="filterDrive">', ts[11], "</span></span>"]);
        tv.html(tu).setupClick(function (tw) {
            $(".ajaxscroll .selected").removeClass("selected");
            $("#" + tt).addClass("selected");
            n3("#tabs-advanced-search", tt, true)
        });
        if (1 == rH) {
            tv.children("span").addClass("selected")
        }
    }

    function cU(tu, ts) {
        var tt = gt(tu);
        if (tt === rf) {
            tu.preventDefault();
            if (!isEmpty(ts + " .partNumberInput")) {
                py(false, ts)
            }
            return
        }
        if (tt === h3) {
            tu.preventDefault();
            qX(ts);
            return
        }
    }

    function br() {
        bG();
        $("#tabs-vin-search .regoInput").val(a4);
        lv = "rego";
        n2 = "";
        a4 = "";
        hZ()
    }

    function oK(tt, ts) {
        if (dh(ts)) {
            tt.jstree("open_all");
            return
        }
        tt.jstree("open_all").promise().done(function () {
            ts()
        })
    }

    function eb(tu, tt, tv) {
        if (!tt) {
            return
        }
        var ts = tu.find(".partCategory");
        ts.attr("hiddencount", tv);
        ts.append(joinArrToString(["<div class='expand'>", cf, r0, "Click for More Brands (", tv, ")</div>"])).promise().done(function () {
            ts.find(".partPlusIcon, p.expandHideMessage, p.availableParts, div.expand").setupClick(kx)
        })
    }

    function pa() {
        var ts = $("#tabs-crosspart .partNumberInput").val();
        c5 = "";
        $("#partNumberTableSection").css("background-image", "none");
        if (isEmpty(ts)) {
            q4();
            return
        }
        if (lX === ts) {
            return
        }
        j6();
        lX = ts;
        var tu = $("#tabs-crosspart .partNumberTable").dataTable().fnSettings();
        tu.oLanguage.sEmptyTable = "NOTHING FOUND";
        tu.oFeatures.bServerSide = true;
        var tt = pu();
        tt.push("&search=" + ts);
        tu.sAjaxSource = "pc" + getQueryPart(tt);
        $("#tabs-crosspart .partNumberTable").dataTable().fnDraw()
    }

    function j7(ts) {
        var tt = $("#tr" + ts + "  > td.partPrice .ToBeUpdated");
        return isEmpty(tt)
    }

    function lL() {
        return $(jm + " .tablePart tbody tr:visible .partNoSelectButton").length > 1
    }

    function mY() {
        $("#tabs-vin-search .vinNumberInput").keydown(qU);
        $("#tabs-vin-search #vinNumberButtonSearch").setupClick(aZ);
        $("#tabs-vin-search #vinNumberButtonClear").setupClick(ib);
        dt();
        eL()
    }

    function dT(ts, tt) {
        if (ts) {
            $(tt + " .showAllParts").hide()
        }
        ji(tt + " .tablePart", tf)
    }

    function qB(ts) {
        return validateTabId(ts) || (ts === "#tabs-part-info") || (ts === "#vehicleSelector") || (ts === "#tabs-vin-search") || (ts === "#tabs-part")
    }

    function a(tx, ts, tw) {
        var tv = kQ(tx);
        var tt = Z(tv);
        if (isEmpty(tt)) {
            mv(tx);
            return [ts, tw]
        }
        var tu = m7(tv);
        if (isEmpty(tu)) {
            return ["#" + tt, tw]
        }
        return ["#" + tt + oI(tu), tw]
    }

    function iI() {
        $("#tabs-vin-search thead").remove();
        $("#tabs-vin-search .tableVinNumber .id").remove();
        $("#tabs-vin-search .tableVinNumber").removeClass("selected");
        var ts = $("#tabs-vin-search .tableVinNumber .title").setupClick(i4);
        if (lv === "rego") {
            od("rego", n2, a9);
            k3 = "rego";
            od("vinRegoLastInput", "rego", a9)
        } else {
            od("vin", hD, a9);
            k3 = "vin";
            od("vinRegoLastInput", "vin", a9)
        }
        ig();
        g6 = go("#tabs-vin-search .tableVinNumber");
        if (1 === g6) {
            ts.click();
            $("#tabs-vin-search div.divVinNumber").hide();
            dj(false);
            return
        }
        $("#tabs-vin-search div.divVinNumber").show();
        ek(true);
        if (ms) {
            l0()
        }
    }

    function iO(ts, tt) {
        if (tt === ts) {
            return
        }
        k0.jstree("close_node", "#" + tt);
        k0.jstree("deselect_node", "#" + tt)
    }

    function oV() {
        if (hu()) {
            $(jm + " div.tableMakeDiv").scrollTop(0);
            return
        }
        $(jm + " .tableMake").focus();
        if (checkIsAnotherTab(jm)) {
            tp(jm + " .tableMakeDiv")
        } else {
            debugger;
            qZ(jm + " .tableMakeDiv", ".tableMake")
        }
        qZ(jm + " .tableModelDiv", ".tableModel");
        qZ(jm + " .tableYearDiv", ".tableYear");
        qZ(jm + " .tableSeriesChassisDiv", ".tableSeriesChassis");
        qZ(jm + " .tableEngineDiv", ".tableEngine");
        qZ(jm + " .tableDetailDiv", ".tableDetail")
    }

    function B(ts) {
        if (0 === ts) {
            lS();
            return
        }
        if (1 === ts) {
            if (bb()) {
                nJ()
            }
            return
        }
    }

    function ox(ts) {
        $(ts + " .partBursonElseQtyValue").css({cursor: "pointer"}).setupClick(function (tw) {
            var tt = $(this);
            var tv = tt.data("part-number");
            var tu = tt.data("category");
            qs(tw.pageX, tw.pageY, tt.data("part-id"), tu, tv, 0)
        });
        $(ts + " .partBursonTotalQtyValue").css({cursor: "pointer"}).setupClick(function (tw) {
            var tt = $(this);
            var tv = tt.data("part-number");
            var tu = tt.data("category");
            qs(tw.pageX, tw.pageY, tt.data("part-id"), tu, tv, 1)
        })
    }

    function mL(tv, tw) {
        if (tw) {
            return
        }
        var tt = tv.node;
        var ts = tt.id;
        var tu = tt.a_attr.id;
        k0.find("li.jstree-open").each(function () {
            iO(ts, $(this).attr("id"))
        });
        kT(tu);
        eg()
    }

    function g3(ts) {
        k0 = jJ();
        if (dh(k0)) {
            console.log("setupTreeCore isUndefined(_treePartGroup)");
            return
        }
        si = k0.on("select_node.jstree", function (tt, tu) {
            lB(tu, ts)
        }).on("open_node.jstree", function (tt, tu) {
            mL(tu, ts)
        }).on("close_node.jstree", function (tt, tu) {
            if (!cT) {
                return
            }
        }).on("ready.jstree", function (tt, tu) {
            lF(ts)
        }).jstree({
            themes: {theme: "default", dots: true, icons: false},
            core: {rtl: false, animation: 0},
            plugins: ["core", "themes", "html_data"]
        })
    }

    function dr(tu, tt) {
        var ts = -1;
        var tv = false;
        $(tu).each(function () {
            if (tv) {
                return
            }
            var tw = $(this);
            ts++;
            if (tt) {
                if (tw.children("a").hasClass("jstree-clicked")) {
                    tv = true
                }
            } else {
                if (tw.hasClass("row_selected")) {
                    tv = true
                }
            }
        });
        if (tv) {
            return ts
        }
        return -1
    }

    function eG(ts) {
        if (!ts) {
            return
        }
        oK(k0, function () {
        })
    }

    function ec(ts) {
        var tt = gT(ts);
        if (null === tt) {
            return
        }
        b6(tt)
    }

    function kO(ts) {
        if (startsWith(ts, "#")) {
            return rw(ts)
        }
        return rw("#" + ts)
    }

    function pc(ts) {
        iJ = i6;
        if (!lZ[ts]) {
            lZ[ts] = true;
            q4()
        }
        G()
    }

    function sC(ts) {
        return joinArrToString(["<img class='helpIcon' id='", ts, "' ", nH, " />"])
    }

    function jq(ts) {
        if (isEmpty(ts)) {
            return true
        }
        if (1 == ts.length) {
            if (isEmpty(ts[0])) {
                return true
            }
        }
        return false
    }

    function hp(tt, ts) {
        if (ts) {
            $("#waitingScreen .addToCart").hide()
        } else {
            $("#waitingScreen .addToCart").show()
        }
        rb($("#waitingScreen").show(), tt + "px");
        $("#waitingScreen img").show();
        $("#waitingScreen p.status, #waitingScreen .question").hide()
    }

    function lf(ts) {
        $("#waitingScreen .addToCart").show();
        rb($("#waitingScreen").show(), ts + "px");
        $("#waitingScreen p.status, #waitingScreen img").hide();
        $("#waitingScreen .question").show()
    }

    function kg() {
        $("#waitingScreen").hide();
        $("#waitingScreen p.status").hide()
    }

    function mW(ts) {
        if (ts) {
            $("#waitingScreen .addToCart").hide()
        } else {
            $("#waitingScreen p.status").show()
        }
        $("#waitingScreen img").show()
    }

    function bV() {
        rb($("#waitingScreenSimple").show(), "200px");
        $("#waitingScreen img").show()
    }

    function ig() {
        $("#waitingScreenSimple").hide()
    }

    function jB() {
        ak();
        if (o3) {
            return
        }
        if (kD("#tabs-catalog") || rY()) {
            refreshTabSettings(0, jm)
        }
    }

    function iV() {
        cO = 3;
        if (0 < aE) {
            cO++
        }
        if (kJ) {
            cO++
        }
        if (ta()) {
            cO++
        }
        if (lh()) {
            if (0 < aE) {
                cO = 3
            } else {
                cO = 2
            }
        }
    }

    function D() {
        if (!rw("#ShowQrCode")) {
            return
        }
        $.getJSON(R(false), function (ts) {
            d6(ts, false)
        })
    }

    function t(tt, ts) {
        jP(tt);
        if (fq === "ShowPartInfo") {
            r3(false, ts + " .partInfo", to);
            return
        }
        if (fq === "ShowComparePart") {
            r3(true, ts + " .partInfo", lw, function (tu) {
                $(".closeIcon").setupClick(mw)
            });
            return
        }
    }

    function hI(ts, tv) {
        var tt = ts.eq(0).text();
        var tu = ts.eq(1).text();
        if (pJ()) {
            lP = tt;
            od("state", lP, a9);
            $("#license_plate_state").text(lP)
        } else {
            if (pj()) {
                $("#license_plate_state").text("NZ")
            }
        }
        if (tv) {
            s3()
        }
        $("#tabs-vin-search .regoInput").val(tu);
        if (fO === 1) {
            if (n2 === tu) {
                return
            }
        }
        nJ()
    }

    var gb = false;

    function O(tx) {
        if (oO(tx)) {
            em("refreshBrowser");
            return
        }
        var ts;
        $(".closeIcon").setupClick(mw);
        if (pz) {
            gb = true;
            ts = "#partInfoPopup";
            nx(ts);
            $(".closeIcon").text(tc);
            $(ts).css({height: "662px", width: "935px", left: "0"});
            $(ts + " .part_detail_category").css({width: "929px"});
            $(ts + " .closeIcon").css({left: "830px"});
            setTimeout(function () {
                eT("#partInfoPopup")
            }, 1000)
        } else {
            ts = "#tabs-part-info"
        }
        if (!pz) {
            $(ts + " .part_detail_category").height(40).css({
                "border-top-left-radius": 0,
                "border-top-right-radius": 0,
                "padding-left": 0,
                "padding-top": 0,
                left: "16px",
                top: "30px",
                width: "800px",
                "z-index": "0",
                height: "36px"
            });
            rb($(ts + " .closeIcon"), "28px")
        }
        setTimeout(function () {
            bU($("#partInfoPopup .partInfo .part_detail_price"), dZ("#partInfoPopup .partInfo div.part_detail_category") + dZ("#partInfoPopup .partInfo div.part_detail_partNo") + 34)
        }, 100);
        $(ts + " .buttonNettPrice").setupClick(oX);
        $(ts + " .buttonNettPriceGst").setupClick(kI);
        m1();
        var tt = $("#tabsPartDetailInformation").tabs().show();
        if (rw("#tabs-PartDetailInformation-TechnicalDocuments")) {
            $("#tabs-PartDetailInformation-TechnicalDocuments .partTechnicalNoteDescription").setupClick(mf)
        }
        if (rw("#tabs-PartDetailInformation-Specifications")) {
            hw($(ts + " .tablePartDimension"));
            pF(ts + " .partDimension", ts + " .tablePartDimension", $(ts + " .partDimension").attr("id"))
        }
        $(ts + " .tablePartImageList img").setupClick(function () {
            var tz = $(this);
            nL(tz, tz.closest(".partDetailImage").find(".mainImage"))
        });
        var ty = $(ts + " div.partId").text();
        var tw = $(ts + " div.partNo").text();
        if (fN()) {
            dl(ts, ty)
        }
        var tv = $(ts + " div.part_detail_category").text();
        if (mj()) {
            var tu = id(tv);
            $(ts + " div.part_detail_category").text(tu)
        }
        if (rw(ts + " .part_detail_price")) {
            if (bH()) {
                rE()
            } else {
                kE()
            }
            $(ts + " div.part_detail_price button.buttonPartAdd").setupClick(function (tz) {
                ke(tz, ts, ty, tw, tv, lI($(ts + " div.partDetailImage img.mainImage").attr("src")));
                return false
            })
        }
        if (j0) {
            j0 = false
        }
        bs(ts + " ", ty, tw);
        oB($(ts), false);
        if (hj) {
            ox(ts)
        }
    }

    function qV(ts) {
        sk(sc(false), function (tt) {
            fy(ts, tt)
        }, [], true)
    }

    function oC() {
        var ts = "#tabs-catalog";
        if (!q6[ts]) {
            return
        }
        rS(ts);
        if (!p8) {
            $(ts + " .engineInput").width(250);
            $(ts + " .detailInput").width(250)
        }
        if (jv(ts)) {
            $(ts + " .tableModelDiv").height(108);
            if (!gj(ts)) {
                $(ts + " .tableModelDiv .scrollDiv").height(85)
            }
            $(ts + " .tableSubModelDiv .scrollDiv").height(84)
        } else {
            mi(ts)
        }
        ja(ts + " .tableDetail");
        ja(ts + " .tableEngine");
        if (b2("#displayOptionAutoHideVehicleSelector")) {
            $(".showHideVehicleSelector").show();
            $(".showHideVehicleSelector").setupClick(function (tt) {
                if ($("#tabs-catalog .partSection").css("top") == "21px") {
                    $("#tabs-catalog .partSection").css("top", "")
                } else {
                    dj(true)
                }
                return false
            })
        } else {
            $(".showHideVehicleSelector").hide()
        }
    }

    function dd(tB, tA, tv, tt, tu, tw, tz, tx) {
        if (isEmpty(f2)) {
            lm("addToCart", "code=" + tB + ", qty=" + tA);
            return
        }
        var ty = "Qty=" + tA + ", PartNo=" + tB + ", BrandName=" + tv + ", Image=" + tw + ",Subcat=" + tt + ",SKU=" + tz + ",SKUkey=" + tx + ",";
        var ts = "pi" + prepareQueryPart("&partId=" + encodeQuery(tu) + "&cookie=" + _cookies + "&vehicle=" + f7() + "&vehicleType=" + aV(jm));
        $.getJSON(ts).done(function (tD) {
            var tC = bd(ty + tD.data);
            lm("addToCart2", tC)
        })
    }

    function am(tt, ts, tu) {
        tt.empty().promise().done(function () {
            tt.append(ts).promise().done(function () {
                tu()
            })
        })
    }

    function ru(ts) {
        return checkTabIsInArr(tabsOtherVehicles, ts)
    }

    function aL(ts) {
        $("#regoSaveState").hide();
        aQ();
        $("#registrationPlate").val("")
    }

    function r6(ts) {
        if (ts) {
            return "0 -53px"
        }
        return "0 -18px"
    }

    function s3() {
        $("table.history").hide()
    }

    function sY(ts) {
        $(ts + " .partNumberVehicle").show();
        setTimeout(function () {
            if ("#tabs-part" === ts) {
                gn(false);
                return
            }
            eT(ts)
        }, 1000)
    }

    function ae() {
        _imageMapUrl = $("#ImageMapUrl").val();
        aR = fE("#partslisttype");
        mQ = fE("#partsListPriceSource");
        fO = fE("#ShowRegoSearch");
        f2 = $("#CallBackInformation4").val();
        kr = fE("#categoryTreeType");
        s1 = fE("#categoryTreeTypeTractor");
        oN = fE("#CategoryTreeTypeMotorBike");
        jg = fE("#PartsListPriceQty");
        bt = fE("#ShowPartNumber");
        i7 = $("#PartUrlText").val();
        aE = fE("#ShowBrand");
        mF = !isEmpty($("#logoImageCustomer2").val());
        var ts = [];
        ts.push("<div class='moreDetail'>" + i7);
        ts.push(sQ("orderIcon", "vertical-align:bottom"));
        ts.push("</div>");
        kZ = joinArrToString(ts)
    }

    function sv(tt, ts) {
        if (lA(tt, ts, jS)) {
            return true
        }
        return lA(tt, ts, o9)
    }

    function mx() {
        var ts = $(this).parent();
        var tt = ts.parent();
        tt.find(".infoIcon").click();
        return false
    }

    function qW(tv, tu, tt, tw) {
        var ts = tu.find("." + tt);
        if (dh(ts)) {
            return tv
        }
        var tx = ts.text();
        if (tw) {
            tx = gq(tx)
        }
        tv.push("&" + tt + "=" + tx);
        return tv
    }

    function oB(tv, tu) {
        var ts = tv.find(".tablePartImageList tr").length;
        if (0 === ts) {
            return
        }
        var tt;
        if (tu) {
            tt = tv
        } else {
            tt = tv.find(".partDetailImage")
        }
        tt.setupClick(function (tw) {
            tj($(this), tw);
            tw.stopPropagation();
            tw.preventDefault();
            mo();
            return false
        });
        tv.find(".partDetailImage, .imageLeft,  .imageRight, .mainImage, .hiddenPartImage").unbind("dblclick").dblclick(function (tw) {
            mo();
            tw.stopPropagation();
            tw.preventDefault();
            return false
        })
    }

    function fg() {
        if (!Q()) {
            return
        }
        var ts = parseInt($("#CatType").val());
        if (-1 === ts) {
            return
        }
        if (1 === ts) {
            aW("#tabs-motorbike");
            return
        }
        if (5 === ts) {
            aW("#tabs-catalog");
            return
        }
    }

    function nW() {
        var tu = $("#CatTypePartGroupIdPairs").val();
        var tv = tu.split(",");
        for (var tt = 0; tt < tv.length; tt++) {
            var tw = tv[tt];
            if (!isEmpty(tw)) {
                var ts = tw.split("=");
                qg[ts[0]] = ts[1]
            }
        }
    }

    function cR(tv) {
        $("#tabsPartDetailBuyerAssist").tabs("disable", 2);
        var tt = $(this);
        var tw = oP();
        var tu = tt.data("agentid");
        var ty = tt.data("name");
        var tx = tt.data("uniqueid");
        tw.push("&agentid=" + tu);
        tw.push("&uniqueId=" + tx);
        tw.push("&guid=" + hJ);
        var ts = "bac.html" + getQueryPart(tw);
        bV();
        sk(ts, function (tz) {
            su(tz, ty)
        }, [], true);
        return false
    }

    function i2() {
        $(".historyLabel").hide();
        if ((fO === 0) || bb()) {
            if (cQ()) {
                $(".historyLabel").show()
            }
            $("#tabs-vin-search .regoInput").keydown(eR);
            $("#tabs-vin-search .regoButtonSearch").setupClick(hZ);
            $("#tabs-vin-search .regoButtonDetail").setupClick(cY);
            $("#regoExtraInformation .close").setupClick(p9);
            if (gC()) {
                $("#regoExtraInformation .savePlate").setupClick(et)
            } else {
                $("#regoExtraInformation .savePlate").hide()
            }
        } else {
            $("#tabs-vin-search .regoInput, #tabs-vin-search .regoButtonSearch").hide()
        }
        if (pJ()) {
            $("#regoSearchState .states button").setupClick(gr);
            $("#regoSearchState .close").setupClick(ga);
            var ts = $("#HiddenOptionState").val();
            if (!isEmpty(ts)) {
                lP = ts
            }
            od("state", lP, a9);
            $("#license_plate_state").text(lP)
        } else {
            if (pj()) {
                $("#license_plate_state").text("NZ")
            }
        }
        if (bb()) {
            $("#tabs-catalog .regoButtonSearch").setupClick(a2);
            $("#tabs-catalog .regoInput").keydown(bv);
            if (qd.mobile && !rw("#Responsive")) {
                $(".regoInput, table.history").css({left: "471px"});
                $(".regoButtonSearch").css({left: "643px"})
            } else {
                $(".regoInput").css({left: "733px"});
                $(".regoButtonSearch").css({left: "908px"});
                if (cQ()) {
                    $("#tabs-catalog .historyLabel").css({top: "-19px"}).setupClick(fL);
                    $("#tabs-vin-search .historyLabel").css({top: "2px"}).setupClick(ol)
                }
            }
        }
    }

    function ds() {
        return dp
    }

    function dD() {
        if (rw("#tabs-crosspart")) {
            lW()
        }
        cI();
        cK();
        ql();
        if (rw("#tabs-advanced-search")) {
            i8()
        }
        if (rw("#tabs-garage")) {
            sX()
        }
        if (rw("#tabs-shoppingCart")) {
            iR()
        }
        $(".standardTree .autodataLogBookButton").setupClick(jC);
        $(".standardTree .autodataRepair").setupClick(r1);
        $(".standardTree .autodataFault").setupClick(iE);
        $(".autodataLogFaultCodes input.faultSearch").setupClick(mA);
        y();
        lu()
    }

    function m1() {
        if (!mK) {
            return
        }
        var ts = $("#tabsPartDetailBuyerAssist").tabs().show();
        $("#tabsPartDetailBuyerAssist").tabs("disable", 1);
        $("#tabsPartDetailBuyerAssist").tabs("disable", 2);
        $("#buyerAssistAgentTable div.row div.options div.option").setupClick(aG);
        $("#buyerAssistAgentTable div.row div.contact, #buyerAssistAgentTable div.row div.agentLogo img").setupClick(cR);
        $("#partInfoPopup div.shoppingcartcount").setupClick(function () {
            window.location.href = "/OscarBuyerAssist/?guid=8888118888&uniqueid=" + q0;
            return false
        })
    }

    function aG(tv) {
        $("#tabsPartDetailBuyerAssist").tabs("disable", 1);
        var tt = $(this);
        var tw = oP();
        var tu = tt.data("agentid");
        var tz = tt.data("name");
        var ty = tt.data("uniqueid");
        var tx = tt.data("partid");
        tw.push("&agentid=" + tu);
        tw.push("&uniqueId=" + ty);
        tw.push("&partId=" + tx);
        tw.push("&guid=" + hJ);
        var ts = "bai.html" + getQueryPart(tw);
        bV();
        sk(ts, function (tA) {
            fa(tA, tz, tx, tu, ty)
        }, [], true);
        return false
    }

    function pv(tx, tz, ts, tu, tt, ty, tA, tv, tB) {
        if (tx.length === 0) {
            $(".buyerAssistInventoryAddToCart").hide();
            return
        }
        $(".buyerAssistInventoryAddToCart").show();
        var tw = tx[0];
        $(".buyerAssistInventoryAddToCart .buyPriceValue").text("$" + tw.NettPrice);
        $(".buyerAssistInventoryAddToCart .add").setupClick(function (tE) {
            hp(tE.pageY - 100);
            var tC = $("#tabs-PartDetailInformation-Buyer-Assist-Inventory .buyerAssistInventoryAddToCart .addOrderQuantityInput").val();
            var tF = oP();
            tF.push("&agentId=" + ts);
            tF.push("&agentName=" + tu);
            tF.push("&uniqueId=" + ty);
            tF.push("&partId=" + tz);
            tF.push("&guid=" + hJ);
            tF.push("&distributorId=" + tt);
            tF.push("&sku=" + tA);
            tF.push("&partNo=" + tv);
            tF.push("&orderQuantity=" + tC);
            tF.push("&description=" + tB);
            var tD = "baa.html" + getQueryPart(tF);
            $.getJSON(tD).done(function (tG) {
                nU(tG, false)
            }).fail(function (tI, tJ, tG) {
                ig();
                if (oO(tJ) || oO(tG)) {
                    em("refreshBrowser");
                    return
                }
                var tH = tJ + ", " + tG;
                alert("Request Failed: " + tH)
            });
            return false
        })
    }

    function gM(ts, tu, tt) {
        if (ts) {
            n1()
        } else {
            O(tt)
        }
        if (typeof tu === "function") {
            tu(ts);
            return
        }
    }

    function qI(tt) {
        var ts = jK(tt);
        if (!isEmpty(ts)) {
            return ts
        }
        return h7
    }

    function jd(tt, ts, tu) {
        var tv = decodeResponseText(tu);
        if (oO(tv)) {
            em("refreshBrowser");
            return
        }
        m3($("#stockInfoPopup .partInfo"), tv, function () {
            ow(tv, tt, ts)
        })
    }

    function r4() {
        return contains(tabsOtherVehicles, function (ts) {
            return rw(ts)
        })
    }

    function eU(tu, ts) {
        var tt = cv(ts);
        if (isEmpty(tt)) {
            return tu
        }
        tu[ts + ".partGroupId"] = tt;
        return tu
    }

    function b9() {
        if (-1 === ph) {
            return
        }
        fC(ph);
        if (jO === ph) {
            if (eM) {
                iA()
            }
            return
        }
        if (aC(jm)) {
            if (!hu()) {
                ak();
                if (ij()) {
                    rv = false;
                    $("#tabs-tractor .tableMakeDiv .jstree_demo_div").jstree("select_node", "makeClickedUniqueId");
                    return
                }
                return
            }
        }
        if (kD("#tabs-catalog")) {
            refreshTabSettings(0, jm);
            if (ij()) {
                $(jm + " div.tableMakeDiv").scrollTop(0)
            }
        }
    }

    function kT(ts) {
    }

    function jP(ts) {
        if (cT) {
            if (hN) {
                nN();
                return
            }
            nt = $("html,body").scrollTop();
            return
        }
        nt = $(ts + " .tablePartSection").scrollTop()
    }

    function iB(tv, tu, tx) {
        if (!tx) {
            tv = qW(tv, tu, "partBursonQtyValue", false);
            tv = qW(tv, tu, "partBursonElseQtyValue", false);
            tv = qW(tv, tu, "partBursonTotalQtyValue", false);
            tv = qW(tv, tu, "myPriceLabel", false);
            tv = qW(tv, tu, "myPriceValue", true);
            tv = qW(tv, tu, "listPriceLabel", false);
            tv = qW(tv, tu, "listPriceValue", true)
        }
        var tw = (e2 === "$");
        tv.push("&currencySymbolDefault=" + tw);
        var tt = fk(tu, ".myPriceValue");
        if (null !== tt) {
            tv.push("&price=" + tt)
        }
        var ts = fk(tu, ".listPriceValue");
        if (null !== ts) {
            tv.push("&listPrice=" + ts)
        }
        return tv
    }

    function pR(tt) {
        var ts;
        if (tt) {
            ts = {left: "733px", top: "39px", width: "211px"}
        } else {
            ts = {left: "4px", top: "65px", width: "452px"}
        }
        $("table.history").css(ts)
    }

    function h0(ts, tu, tt) {
        gY(ts, kZ, function () {
            ts.setupClick(function () {
                qS(tu, tt)
            });
            ts.find(".orderIcon").setupClick(function () {
                qS(tu, tt)
            })
        })
    }

    function cN(ts) {
        if (ts === ".makeInput") {
            return ".tableMakeDiv"
        }
        if (ts === ".modelInput") {
            return ".tableModelDiv"
        }
        if (ts === ".yearInput") {
            return ".tableYearDiv"
        }
        if (ts === ".seriesInput") {
            return ".tableSeriesChassisDiv"
        }
        if (ts === ".engineInput") {
            return ".tableEngineDiv"
        }
        if (ts === ".detailInput") {
            return ".tableDetailDiv"
        }
    }

    function k6(tu) {
        var tt = "";
        var tv = tu.style;
        var ts = window.getComputedStyle(tu, null);
        for (var tw in tv) {
            if (tv.hasOwnProperty(tw)) {
                tt += "  " + tw + " = '" + tv[tw] + "' > '" + ts[tw] + "'\\n"
            }
        }
        return tt
    }

    function K() {
        if (dh(mc)) {
            return
        }
        mc.close();
        mc = null
    }

    function ck(tt, ts) {
        var tu = tt.a;
        if (!isEmpty(tu)) {
            oR = tu;
            od("page", tu, a9);
            od("partListScrollTopSaved", nt, a9)
        }
        if (0 === ts) {
            return
        }
        if (1 === ts) {
            cV();
            return
        }
        if (2 === ts) {
            em("refreshScrollTopSaved")
        }
    }

    function ko() {
        if (!shouldGoToServerToRequestCookie()) {
            te();
            return
        }
        var ts = cc();
        $.ajax({
            url: ts, type: "GET", dataType: "html", success: function (tt) {
                fv(tt)
            }, error: function (tt, tv, tu) {
            }
        })
    }

    var rv = true;

    function ca(ts, tu) {
        var tt = ts + " .jstree_demo_div";
        $(tt).jstree().bind("select_node.jstree", function (tw, tx) {
            if (!rv) {
                rv = true;
                var tv = tx.node;
                return
            }
            dk(ts, tu, tx)
        }).delegate(".jstree-open>a", "click.jstree", function (tv) {
            $(tt).jstree("close_node", this, false)
        }).delegate(".jstree-closed>a", "click.jstree", function (tw) {
            var tx = $(this).position();
            var tv = false;
            $(tt).jstree("open_node", this, function () {
                setTimeout(function () {
                    if (tv) {
                        return
                    }
                    tv = true;
                    if (tx.top > 1) {
                        var ty = $(ts + " .tableMakeDiv");
                        ty.animate({scrollTop: ty.scrollTop() + tx.top}, 600)
                    }
                }, 1000)
            }, false)
        });
        ng()
    }

    function q7() {
        $("div.popper").hover(function (tu) {
            var tt = "#pop";
            var ts = $(this).html();
            if (!isEmpty(ts)) {
                if (ts.vehicleDetail > 112) {
                    $(tt).show().find("p").html(ts)
                }
            }
        }, function () {
            var ts = "#pop";
            $(ts).hide()
        });
        $("div.popper").mousemove(kN)
    }

    function ey(ts) {
        if (o4(ts)) {
            return h7
        }
        return ""
    }

    function pO() {
        gb = false;
        jV = false;
        $("#partInfoPopupFullScreen, #partInfoPopup, #stockInfoPopup").hide()
    }

    function su(tu, tw) {
        ig();
        $("#tabs-PartDetailInformation-Buyer-Assist-Contacts .contactTitle").text(tw);
        var tv = decodeResponseText(tu[0]);
        var tt = jQuery.parseJSON(tv);
        console.log("debug buyerAssistContact");
        console.log(tt);
        $("#buyerAssistContactTable").empty();
        var ts = [];
        tt.forEach(function (ty, tx, tz) {
            ts.push('<div class="row">');
            ts.push('<div class="name">' + ty.Name + "</div>");
            ts.push('<div class="address">');
            ts.push("<div>" + ty.Address1 + "</div>");
            ts.push("<div>" + ty.Address2 + "</div>");
            ts.push("<div>" + ty.State + "</div>");
            ts.push("<div>" + ty.Phone + "</div>");
            ts.push("<div>" + ty.Email + "</div>");
            ts.push("</div>");
            ts.push("</div>")
        });
        $("#buyerAssistContactTable").append(ts.join(""));
        $("#tabsPartDetailBuyerAssist").tabs("enable", 1);
        mT($("#tabsPartDetailBuyerAssist"), 1)
    }

    function gA(ts) {
        if (dh(ts)) {
            return
        }
        if (ts.hasClass("jstree-leaf") || ts.hasClass("jstree-open")) {
            return
        }
        k0.jstree("open_node", ts)
    }

    function R(ts) {
        var tt = pu();
        if (!hu()) {
            tt.push("&page=" + oR)
        }
        tt.push("&location=" + preparePQueryParam(ce));
        tt.push("&activeTab=" + au(jm));
        tt.push("&isOneTimeOnly=" + ts);
        return "qr.html" + getQueryPart(tt)
    }

    function n1() {
        var ts;
        if (pz) {
            ts = "#partInfoPopup";
            $(ts + " .closeIcon").text(tc)
        } else {
            ts = "#tabs-part-info"
        }
        $(ts + " .closeIcon").setupClick(mw);
        $(ts + " .partDetailImage").each(function (tt) {
            oB($(this), true)
        })
    }

    function mM(tv, tu) {
        var tt = qI(tv);
        var ts = cv(tv);
        if (isEmpty(ts)) {
            mv(tv);
            return [tt, tu]
        }
        return a(tv, tt, tu)
    }

    function iA() {
        var ts = rz("REGO");
        if (isEmpty(ts)) {
            return
        }
        setTimeout(function () {
            cm(ts.toUpperCase())
        }, 2000)
    }

    function lA(tu, tt, ts) {
        if (!startsWith(tt, ts)) {
            return false
        }
        tt = tt.substring(ts.length);
        $(".autodataSubCats").replaceWith(tt);
        tu.html("");
        return true
    }

    function fa(tx, tw, tA, ts, tz) {
        ig();
        var tC = decodeResponseText(tx[0]);
        var ty = jQuery.parseJSON(tC);
        $("#tabs-PartDetailInformation-Buyer-Assist-Inventory .inventoryTitle").text(tw);
        var tu = -1;
        var tB = "";
        var tv = "";
        var tD = $("#partInfoPopup div.partInfo div.part_detail_category").text();
        if (ty.StockList.length > 0) {
            var tt = rT(ty.StockList);
            tu = tt[0];
            tB = tt[1];
            tv = tt[2]
        }
        pv(ty.PriceList, tA, ts, tw, tu, tz, tB, tv, tD);
        $("#tabsPartDetailBuyerAssist").tabs("enable", 2);
        mT($("#tabsPartDetailBuyerAssist"), 2)
    }

    function hZ() {
        $("#regoExtraInformation").hide();
        var ts = $("#tabs-vin-search .regoInput").val();
        if (pj()) {
            if (n2 === ts) {
                return false
            }
        }
        if (pJ()) {
            $("#regoSearchState").show()
        } else {
            nJ()
        }
        return false
    }

    function d6(tu, ts) {
        var tt = gT(tu);
        if (null === tt) {
            return
        }
        if (ts) {
            m6()
        }
        $("#qrPopup img.qrImage").attr("src", tt.a);
        $("#qrPopup").show()
    }

    function cr(ts) {
        if (dh(ts)) {
            throw new Error("parameter sDate is undefined")
        }
        if (isEmpty(ts)) {
            throw new Error("parameter sDate is isEmpty")
        }
        var tt = new Date(ts);
        if (nk(tt)) {
            return oQ(tt)
        }
        return oQ(tt) + " " + tt.getDate() + "/" + (tt.getMonth() + 1) + "/" + tt.getFullYear()
    }

    function gh(tt, ts) {
        if (hD === ts) {
            return
        }
        mD()
    }

    function hQ() {
        return cs() && dN()
    }

    function cA(ts) {
        var tt = av[jm];
        if (tt === undefined) {
            return false
        }
        return tt.substring(0, ts.length) === ts
    }

    function rK(ts) {
        ts.partNumber = b8;
        ts.partNumberKitSearch = sI;
        return ts
    }

    function rZ() {
        $("#qrPopup").hide();
        K()
    }

    function nd(tt, tu) {
        var ts = 0;
        if (!isEmpty(tu)) {
            ts = tu.offset().top - ($(tt).height() / 2);
            if (ts < 0) {
                ts = 0
            }
        }
        $(tt + " .scrollDiv").scrollTop(ts)
    }

    function re() {
        if (!cQ()) {
            return
        }
    }

    function h8(tt, tu) {
        var ts = tt.eq(0).text();
        $("#tabs-vin-search .vinNumberInput").val(ts);
        if (tu) {
            s3()
        }
        mD()
    }

    function dz(ts, tt, tx) {
        var tB = $(ts + " ." + tt);
        var tw = tB.val();
        if (isEmpty(tw)) {
            return
        }
        var tC = tw.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, "\\\\$&");
        if (isEmpty(tC)) {
            return
        }
        var tv = ts + " " + cN("." + tt);
        var ty;
        var tu;
        if (tx) {
            ty = tv + " > div ul";
            tu = " li.jstree-leaf"
        } else {
            ty = tv + " table";
            tu = "tr"
        }
        var tz;
        var tA = false;
        if (tB.hasClass("makeInput") || tB.hasClass("modelInput")) {
            tz = new RegExp("^" + tC, "i")
        } else {
            if (tB.hasClass("yearInput") || tB.hasClass("seriesInput") || tB.hasClass("engineInput") || tB.hasClass("detailInput")) {
                tz = new RegExp(tC, "i")
            }
        }
        if (tx) {
            oK($(tv + " .jstree_demo_div"))
        } else {
            $(ty + " " + tu + ".row_selected").removeClass("row_selected")
        }
        bj(ty, tu, tA, tx, tz, true);
        if (tx) {
            d3(ty, tv, tA)
        }
    }

    function hg(ts, tt) {
        $(ts + " img.partNumberVehicle").attr("src", tt).on("load", function () {
            sY(ts)
        })
    }

    function pm(tv) {
        var tw = {};
        if (rw("#tabs-vin-search")) {
            tw = ch(tw, "#tabs-vin-search")
        }
        nQ(tabsCatalogArr, function (tx) {
            if (q6[tx]) {
                tw = hK(tw, tx)
            }
        });
        if (rw("#tabs-part")) {
            tw = rK(tw)
        }
        tw.tab = jm;
        var ts = "," + rk(tw);
        if (isEmpty(ts)) {
            return ""
        }
        var tu = getParamsFromCheckboxes(",") + ts + ",partListScrollTopSaved=" + nt + o6();
        var tt = nr();
        tt.push("&0=" + tv);
        tt.push("&redirectUrl=" + tu);
        return "a" + getQueryPart(tt)
    }

    function dC(tt, ts) {
        if (!isEmpty(ts)) {
            if (kO(ts)) {
                return [ts, false]
            }
            mv(jm)
        }
        return mM(tt, mH())
    }

    function cg(tw) {
        if (!cT) {
            if (!km()) {
                return
            }
        }
        jW(tw);
        if ((jm === "#tabs-part-info") || (!rw("#tabs-catalog"))) {
            return
        }
        if (cT) {
            if (!g9()) {
                iS($(jm + " .partSection"), gy);
                iS($(jm + " .tablePartSectionCollapse"), gy)
            }
        }
        var ts = rw(jm + " .logoImageAutoInfoSection");
        if (!ts) {
            return
        }
        var tv = bF();
        if (tv) {
            rb($(jm + " .logoImageAutoInfoSection"), dQ())
        } else {
            rb($(jm + " .logoImageAutoInfoSection"), jG())
        }
        if (cT) {
            return
        }
        if (fS() && (!s0())) {
            var tt = false;
            if (tw) {
                tt = !km()
            } else {
                tt = true
            }
            var tu = 0;
            if (tt) {
                if (tv) {
                    tu = lk()
                } else {
                    tu = g0()
                }
            } else {
                tu = 20
            }
            r9($(jm + " " + gd()), tu)
        }
    }

    function aC(ts) {
        return contains(tabsCatalogArr, function (tt) {
            return tt === ts
        })
    }

    function rT(ts) {
        $("#buyerAssistInventoryTable").empty();
        var tt = ['<table id="buyerAssistInventory" class="display" style="width:100%">', "<thead>", "<tr>", "<th>Qty</th>", "<th>Location</th>", "</tr>", "</thead>", "<tbody>"];
        var tv = -1;
        var tw = "";
        var tu = "";
        ts.forEach(function (ty, tx, tz) {
            tv = ty.DistributorId;
            tw = ty.Sku;
            tu = ty.PartNo;
            tt.push("<tr>");
            tt.push("<td>" + ty.Qoh + "</td>");
            tt.push("<td>" + ty.LocationName + "</td>");
            tt.push("</tr>")
        });
        tt.push("</tbody>");
        tt.push("</table>");
        $("#buyerAssistInventoryTable").append(tt.join(""));
        $("#buyerAssistInventory").dataTable({
            bDeferRender: true,
            bPaginate: false,
            bFilter: false,
            bSort: false,
            bInfo: false,
            bDestroy: true,
            bProcessing: false,
            bAutoWidth: false
        });
        return [tv, tw, tu]
    }

    var mc = null;

    function m6() {
        if (!window.EventSource) {
            return
        }
        if (kP(mc)) {
            return
        }
        mc = new EventSource("/OscarWebApi/api/event");
        mc.addEventListener("expired", function (ts) {
            $.getJSON(R(true), d6)
        })
    }

    function fT(tt) {
        if (null === tt) {
            return
        }
        var ts = decodeResponseText(tt.V);
        aO($(pt(".autodataLogBookTree")), ts, md)
    }

    function lF(tv) {
        eG(tv);
        if (hu()) {
            return
        }
        var tu = mH();
        if (tu) {
            rD().addClass("jstree-no-clicked").show();
            pS(false)
        }
        var ts = cv(jm);
        if (isEmpty(ts)) {
            if (rY()) {
                if (tu) {
                    lU();
                    pS(false);
                    return
                }
            }
        }
        if (tu) {
            eg()
        }
        if (isEmpty(ts)) {
            var tt = mM(jm, tu);
            ts = tt[0];
            if (isEmpty(ts)) {
                return
            }
        }
        k0.jstree("select_node", ts);
        y()
    }

    function di(tu, tt, tv) {
        if (!tv) {
            tu = qW(tu, tt, "myPriceLabel", false)
        }
        var ts = tt.find(".partPrice font b");
        if (isEmpty(ts)) {
            return tu
        }
        var tw = ts.text();
        tu.push("&price=" + tw);
        return tu
    }

    function s4(tt, tz) {
        if (!cQ()) {
            return
        }
        if (isEmpty(tz)) {
            s3();
            return
        }
        var tu = localStorage.getItem(qt(tt));
        if (isEmpty(tu)) {
            s3();
            return
        }
        tz = tz.toUpperCase();
        tu = tu.toUpperCase();
        var tx = tu.split(",");
        var tA = [];
        var tw = 0;
        for (var tv = 0; tv < tx.length; tv++) {
            var ts = tx[tv].split(fF);
            var ty;
            if (tt) {
                ty = ts[2]
            } else {
                ty = ts[1]
            }
            if (startsWith(ty, tz)) {
                tA.push(tx[tv]);
                tw++;
                if (tw >= fI) {
                    break
                }
            }
        }
        if (tA.length === 0) {
            s3();
            return
        }
        tw = rC(tt, tA);
        if (0 === tw) {
            return
        }
        $("table.history tr").click(function () {
            if (0 === $(this).index()) {
                return
            }
            if (tt) {
                hI($(this).children(), true)
            } else {
                h8($(this).children(), true)
            }
        })
    }

    function hx(ts) {
        var tt = pm("getUrl");
        if (isEmpty(tt)) {
            return
        }
        $.getJSON(tt, function (tu) {
            ck(tu, ts)
        })
    }

    var sZ = {};

    function qj() {
        var tu = h6.length;
        var tt = nw.length;
        for (var tw = 0; tw < tu; tw++) {
            for (var ts = 0; ts < tt; ts++) {
                var tv = h6[tw] + " ." + nw[ts];
                sZ[tv] = 1
            }
        }
    }

    function o2() {
        jV = false;
        $("#stockInfoPopup").hide();
        if (!gb) {
            $("#partInfoPopupFullScreen").hide()
        }
    }

    function fV() {
        if (!k9) {
            return true
        }
        if (isEmpty(q0)) {
            return false
        }
        if ("0" === q0) {
            return false
        }
        return true
    }

    function m0() {
        if (!fV()) {
            return false
        }
        return rw(pt(".standardTree .autodataLogBookButton"))
    }

    function rA() {
        if (!fV()) {
            return false
        }
        return rw(pt(".standardTree .autodataRepair"))
    }

    function le() {
        if (!fV()) {
            return false
        }
        return rw(pt(".standardTree .autodataFault"))
    }

    function ol(ts) {
        if (!cQ()) {
            return
        }
        if (J("#tabs-vin-search table.history")) {
            s3();
            return
        }
        qz(true)
    }

    function op(tv, tx) {
        var ts = dP(tv);
        var tz = (("#tabs-part .tablePart" === tv) || ("#tabs-part2 .tablePart" === tv));
        var tt = sa();
        if (!isEmpty(tt)) {
            $(tv + " .partNumber").css("width", tt)
        }
        $(tv + " tr.purpose td.partNumber span.label").removeClass("label");
        $(tv + " .addOrderQuantityInput").keydown(s9);
        var ty = [];
        ty.push(".partHidden, .partPriority, .partId, .partNotes, .partQuantity, .partElseQuantity, .partOrderQuantity, .partAddOrderQuantity, .pictureSmallHeight, .pictureSmallWidth, .pictureLargeHeight, .pictureLargeWidth, .imageCount, .picturePath, .technicalNotePath, .partUrl, .partChildren, .ExpandHideMessage, .toBeDeleted, .purpose .partPcq, .purpose .partBrand, .purpose .partPrice, .purpose td:not([class]), .hasChildren, .vendorLogoImagePath, .pictureList");
        if (w) {
            ty.push(",.partBrand, .partPrice, .partPcq");
            $(tv + " .partNumber").css({width: "648px"})
        }
        if (tz || (tv == "#tabs-catalog .tablePart") || (tv == "#tabs-tractor .tablePart") || (tv == "#tabs-motorbike .tablePart") || (tv == "#tabs-marine .tablePart") || (tv == "#tabs-engine .tablePart")) {
            if (!gv()) {
                ty.push(", .VendorLinkText")
            }
        }
        if (0 === aE) {
            ty.push(", .partBrand");
            $(tv + " .VendorLinkText").css("width", "90px")
        }
        if (fR() || cu()) {
            ty.push(", .partBursonQty")
        }
        if (q9()) {
            $(tv + " .partPcq").removeClass("partPcq").addClass("partBursonQty").text("");
            ty.push(",tr.purpose td.partBursonQty")
        } else {
            if ((!ts) && (!cu())) {
                ty.push(", .partPcq, .partNotes, td:not([class])")
            }
        }
        if (!kJ) {
            ty.push(", .partAdd");
            if (!c6) {
                ty.push(", .partQuantity, .partElseQuantity, .partOrderQuantity");
                if (!c4()) {
                    ty.push(",.partPrice")
                }
            }
        }
        if (ts) {
            ty.push(",.description, .barCode, .partnoSelect");
            $(tv + " .helpIcon").setupClick(ci);
            $(".buttonNettPrice").setupClick(oX);
            $(".buttonNettPriceGst").setupClick(kI)
        }
        if (rw("#expandassociatedparts") || tx || w) {
            $(tv + " .partPlusIcon").click()
        }
        if (rw("#ExpandPlaceholderParts") || tx || w) {
            $(tv + " .partNumber .partPlusIcon").click()
        }
        if (ts) {
            gn(false);
            if (b2("#displayOptionAutoHideVehicleSelector")) {
                dj(true)
            } else {
                rl(jm)
            }
        }
        if (g1()) {
            ty.push(", .description, .barCode");
            if (f5()) {
                $(".tablePart td.partPcq").css({"vertical-align": "top"})
            }
            if (aa() || fM() || f5() || d1() || sy() || bg() || fR() || cu() || dX() || pZ()) {
                $(".tablePart td.partPcq .partBursonQtyValue, .tablePart td.partBursonQty .partBursonQtyValue").css({width: "27px"})
            }
            if (f0()) {
                $(".tablePart td.partPcq .partBursonQtyValue, .tablePart td.partBursonQty .partBursonQtyValue").css({width: "38px"})
            }
            if (k4()) {
                $(".tablePart td.partPcq .partBursonQtyValue, .tablePart td.partBursonQty .partBursonQtyValue").css({width: "70px"})
            }
            nC(tv);
            qo(tv)
        }
        if (tz) {
            ty.push(", .description")
        }
        if (!w) {
            if (g2()) {
                ty.push(",.partPrice, .partBursonQty, .partBrand, .partPicture, .partNumber, .partPcq")
            }
        }
        if (tz) {
            if (!cu()) {
                $(".partNumberSearch td.partPrice").css({width: "128px"})
            }
            if ("#tabs-part .tablePart" === tv) {
                gn(false)
            }
        }
        var tu = $("#AssociatedPartsTitleColor").val();
        if (!isEmpty(tu)) {
            $(".expandHideMessage").css("color", tu)
        }
        if (!ts) {
            var tw = (q9() || cu()) && p8 && sz() && g9();
            ad(tv + " tr.categoryLine", tw);
            if (tw) {
                $(".buttonNettPrice").setupClick(oX);
                $(".buttonNettPriceGst").setupClick(kI)
            }
        }
        if (mK) {
            $(tv + " .buyerAssistOption0," + tv + " .buyerAssistOption1," + tv + " .buyerAssistOption4").setupClick(mx)
        }
        var tA = joinArrToString(ty);
        $(tv).find(tA).remove();
        $(tv + " tbody tr td:not([class])").remove()
    }

    function e() {
        if (!rw("#ShowQrCode")) {
            return
        }
        $.getJSON(R(true), function (ts) {
            d6(ts, true)
        })
    }

    function eH(tv, ts, tw) {
        var tu = $("#tr" + ts);
        if (isEmpty(tu)) {
            return tv
        }
        if (!tw) {
            if (!isEmpty(f2)) {
                tv.push("&SKU=" + tu.data("SKU"));
                tv.push("&SKUkey=" + tu.data("SKUkey"))
            }
        }
        var tt = tu.find(".myPriceValue");
        if (isEmpty(tt)) {
            return di(tv, tu, tw)
        }
        return iB(tv, tu, tw)
    }

    function rC(tv, ts) {
        $("table.history th, table.history tr").remove();
        var tu = c(tv, ts);
        if (0 === tu[0]) {
            $("table.history").hide();
            return 0
        }
        var tt = $("table.history tbody");
        tt.append(tu[1]);
        $("table.history").show();
        pR(tv);
        return tu[0]
    }

    function sO(tt, ty) {
        var ts = "#" + ty.oldPanel.attr("id");
        var tz = "#" + ty.newPanel.attr("id");
        rm();
        var tA = true;
        if (ts === "#tabs-option") {
            tA = nB;
            nB = true
        } else {
            tA = oH(ts)
        }
        if (tz !== "#tabs-option") {
            if (tA) {
                if (isEmpty(cl(tz))) {
                    var tx = l4(tz);
                    var tu = nS[tx];
                    if (isEmpty(tu)) {
                        tA = false
                    } else {
                        li(tz, tu)
                    }
                }
            }
        }
        var tw = ("#tabs-part-info" === ts) || ("#tabs-part" === ts) || ("#tabs-part2" === ts);
        if (tw) {
            m(rI, true);
            bP()
        }
        if ("#tabs-option" === ts) {
            fx("#tabs-catalog", false)
        }
        jm = tz;
        od("activeTab", au(jm), a9);
        var tv = false;
        if (mS(tz)) {
            if (d0 != tz) {
                tv = true;
                d0 = tz
            }
        }
        if (validateTabId(tz)) {
            k5(tz, tA, tv);
            if (p7) {
                p7 = false
            }
            return
        }
        if ("#tabs-general-merchandise" === tz) {
            iJ = tk;
            if (tv) {
                $(".partSection").appendTo($(tz));
                rb($(".partSection"), mt())
            }
            G();
            return
        }
        if ("#tabs-advanced-search" === tz) {
            iJ = lb;
            if (tv) {
                $(".partSection").appendTo($(tz));
                qv()
            }
            G();
            return
        }
        if ("#tabs-vin-search" === tz) {
            mX(tv, tz);
            gn(false);
            return
        }
        if (("#tabs-part" === tz) || ("#tabs-part2" === tz)) {
            o5(tz);
            return
        }
        if ("#tabs-garage" === tz) {
            iJ = kB;
            rO();
            G();
            return
        }
        if ("#tabs-shoppingCart" === tz) {
            iJ = nv;
            d2();
            G();
            return
        }
        if ("#tabs-crosspart" === tz) {
            pc(tz);
            return
        }
        if ("#tabs-feedback" === tz) {
            G();
            return
        }
        if ("#tabs-part-info" === tz) {
            t(ts, tz);
            G();
            return
        }
        if ("#tabs-option" === tz) {
            if (cT) {
                $("#displayOptionFilter").hide()
            }
            return
        }
    }

    function rm() {
        $("#regoSearchState").hide();
        $("#regoExtraInformation").hide();
        ih = true;
        s3()
    }

    function ny(ts, tt) {
        if (pP(ts)) {
            $(ts).val(tt);
            return
        }
    }

    function lj() {
        var tt = -1;
        if (!isEmpty(k3)) {
            var ts = k3;
            if ("vin" === ts) {
                tt = 0
            } else {
                if ("rego" === ts) {
                    tt = 1
                }
            }
        }
        if (!isEmpty(hD)) {
            $(".vinSearch .vinNumberInput").val(hD)
        } else {
            if (0 === tt) {
                tt = -1
            }
        }
        if (!isEmpty(n2)) {
            $(".vinSearch .regoInput").val(n2);
            if (pJ()) {
                if (!isEmpty(lP)) {
                    var tu = lP;
                    if (!isEmpty(tu)) {
                        $("#license_plate_state").text(tu)
                    }
                }
            }
        } else {
            if (1 === tt) {
                tt = -1
            }
        }
        return tt
    }

    function cm(tt) {
        bG();
        var ts = rz("State");
        if (isEmpty(ts) || (!e3(ts))) {
            a4 = tt;
            $("#tabs-vin-search .regoInput").val(a4);
            if (pJ()) {
                $("#regoSearchState").show();
                return
            }
        }
        a4 = tt;
        $("#tabs-vin-search .regoInput").val(a4);
        lP = ts.toUpperCase();
        $("#license_plate_state").text(lP);
        od("state", lP, a9);
        lT(a4, lP)
    }

    function tp(ts) {
        var tt = $(ts + " ul.jstree-container-ul li.jstree-open ul.jstree-children li[aria-selected='true']").first();
        nd(ts, tt)
    }

    function bj(ty, tv, tu, tt, tx, ts) {
        var tw = 0;
        $(ty + " " + tv).each(function () {
            if (qa($(this), tu, tt, tx, ts)) {
                tw++
            }
        });
        return tw
    }

    function mN() {
        $(pt(".autodataLogBook, .autodataLogRepairTimes, .autodataLogFaultCodes")).hide()
    }

    function dS() {
        if (cT) {
            if (hN) {
                mI();
                return
            }
            if (nt === -1) {
                return
            }
            $("html,body").animate({scrollTop: nt}, "slow");
            kK();
            return
        }
        if (nt === -1) {
            return
        }
        $(jm + " .tablePartSection").animate({scrollTop: nt}, "slow");
        kK()
    }

    function jT(tx) {
        var ts = tx.split(";");
        var tv = ts[0];
        var tt = ts[1];
        var ty = "";
        if (!bH()) {
            ty = " hidden"
        }
        var tw = cZ();
        var tu = [];
        tu.push("<div class='myPrice" + ty + "'>");
        tu.push("<span class='myPriceLabel" + ty + "'>" + bK(tw) + ":</span>");
        tu.push("<span class='myPriceValue" + ty + "' data-price='" + tv + "'>");
        tu.push(C(parseFloat(tv)));
        tu.push("</span></div>");
        tu.push("<div class='listPrice'>");
        tu.push("<span class='listPriceLabel'>" + ay(tw) + ":</span>");
        tu.push("<span class='listPriceValue' data-price='" + tt + "'>");
        tu.push(C(parseFloat(tt)));
        tu.push("</span></div>");
        return tu.join("")
    }

    function qc(ts) {
        qz(false)
    }

    function rU(tt, tv) {
        $(tt + " .engineInput").show();
        var tw = $("td", tv);
        var ts = $(tw[0]).text();
        if ("SHOW ALL" !== ts) {
            var tu = $(tw[1]).text();
            if ("." !== tu) {
                ts = joinArrToString([ts, "--", tu])
            }
        }
        ed = ts;
        pd()
    }

    function qo(tt) {
        if (0 === mQ) {
            return
        }
        var ts = sR(b7);
        if ("" === ts) {
            return
        }
        var tv = nr();
        tv.push("&c=" + kw);
        tv.push("&et=" + o8);
        tv.push("&ci=" + a3);
        tv.push("&s=" + ts);
        tv.push("&p=" + cM);
        tv.push("&v=" + f7());
        tv.push("&zo=" + rN);
        var tu = $.post("r", {p: preparePQueryParam(joinArrToString(tv))});
        tu.done(function (tw) {
            jx(tt, tw)
        }).fail(function (tw) {
        })
    }

    function gR() {
        var tv = "#tabs-vin-search";
        var tu = $(tv + " table.history tr").length - 1;
        if (2 >= tu) {
            return
        }
        var tt = gp(tv + " table.history tr");
        if (tt === -1) {
            tt = 0
        }
        if (tt === tu) {
            return
        }
        $(tv + " table.history tr").removeClass("row_selected");
        var ts = tt + 2;
        $(tv + " table.history tr:nth-of-type(" + ts + ")").addClass("row_selected")
    }

    function gp(tt) {
        var ts = $(tt + "[class='row_selected']");
        return $(tt).index(ts)
    }

    function ho() {
        return (0 === aR)
    }

    function ch(tv, ts) {
        var tt = $(ts + " .vinSearch .vinNumberInput").val();
        if (!isEmpty(tt)) {
            tv.vin = tt;
            var tu = cl(ts);
            tv.vinVehicleId = tu;
            return eU(tv, ts)
        }
        return mu(tv, ts)
    }

    function kc() {
        return (1 == aR)
    }

    function rG() {
        return ho() || kc()
    }

    function lh() {
        return (3 == aR)
    }

    function mX(ts, tt) {
        iJ = jO;
        if (!ts) {
            return
        }
        $(".partSection").appendTo($(tt));
        oe(tt);
        if (!isEmpty(a4)) {
            br();
            return
        }
        var tu = lj();
        if (isEmpty($(".vinSearch .vinNumberInput").val()) && isEmpty($(".vinSearch .regoInput").val())) {
            setTimeout(function () {
                bG()
            }, 100);
            return
        }
        if (hu()) {
            B(tu);
            return
        }
        n3(jm, p5(), false)
    }

    function gr(ts) {
        $("#regoSearchState").hide();
        lP = $(this).val();
        if (isEmpty(lP)) {
            alert("Error: regoSearchStateButtonClick isEmpty(_stateCookie)");
            return
        }
        $("#license_plate_state").text(lP);
        od("state", lP, a9);
        nJ()
    }

    function fY(ts) {
        var tt = av[jm];
        if (tt === undefined) {
            av[jm] = ts;
            return false
        }
        if (tt === ts) {
            return true
        }
        av[jm] = ts;
        return false
    }

    function gH() {
        b8 = im(r8("partNumber"));
        sI = im(r8("partNumberKitSearch"));
        n2 = im(r8("rego"));
        hD = im(r8("vin"));
        lP = im(r8("state"));
        k3 = im(r8("vinRegoLastInput"))
    }

    function ep() {
        oR = $("#pagecookie").val()
    }

    function qk(tt) {
        var ts = tt.which;
        return ts !== null ? ts : tt.keyCode
    }

    function pG() {
        b7 = [];
        b0 = {}
    }

    function qz(tv) {
        if (!cQ()) {
            return
        }
        if (tv) {
            $("#tabs-vin-search .regoInput").focus()
        } else {
            $("#tabs-vin-search .vinNumberInput").focus()
        }
        var ts = localStorage.getItem(qt(tv));
        if (isEmpty(ts)) {
            return
        }
        ts = ts.toUpperCase();
        var tt = ts.split(",");
        var tu = rC(tv, tt);
        if (0 === tu) {
            return
        }
        $("table.history tr").click(function () {
            if (0 === $(this).index()) {
                return
            }
            if (tv) {
                hI($(this).children(), true)
            } else {
                h8($(this).children(), true)
            }
        })
    }

    function fL(ts) {
        fC(jO);
        setTimeout(function () {
            qz(true)
        }, 200)
    }

    function sm(ts) {
        if (ts === "NO PARTS FOUND") {
            return joinArrToString(["<td COLSPAN=3 class='partCategory'>", ts, "</td>"])
        }
        if (bg() || dX()) {
            var tt = 4;
            var tu = 2;
            if (u()) {
                tt = 3;
                tu = 3
            }
            return joinArrToString(["<td COLSPAN=" + tu + " class='partCategory'>", ts, "</td><td COLSPAN=" + tt + " class='boldFont'>" + Y() + "</td>"])
        }
        return joinArrToString(["<td COLSPAN=3 class='partCategory'>", ts, "</td><td COLSPAN=4 class='boldFont'>" + Y() + "</td>"])
    }

    function n0(ts) {
        debugger;
        h2(ts + " .tableMake", ot, function () {
            sK();
            var tt = go(ts + " .tableMake");
            if (1 == tt) {
                kW(ts + " .tableMake");
                sW(ts)
            }
        }, function (tt) {
            kl(ts + " .tableMake", tt)
        }, function () {
            return sW(ts)
        }, ts + " .modelInput")
    }

    function sW(ts) {
        $(ts + " .modelInput").show();
        $(ts + " .modelInput").focus();
        return iv(ts, 0, "GetModelList", ts + " .tableModel")
    }

    function oe(ts) {
        if (po(ts)) {
            $(ts + " .standardTree .searchTree").show()
        } else {
            $(ts + " .standardTree .searchTree").hide()
        }
        if (r4()) {
            var tt = h1(ts);
            if (tt === qJ) {
                kb()
            }
        }
    }

    function af() {
        aY(jm, h7);
        qE("#" + h7);
        eg()
    }

    function gC() {
        return (fO === 1) || (fO === 2)
    }

    function qn(ts, tt) {
        sD = 0;
        ji(ts, lN);
        o1(ts);
        var tv = $(ts).dataTable();
        var tu = tv.fnSettings();
        tu.oLanguage.sEmptyTable = tf;
        tu.oFeatures.bServerSide = true;
        tu.sAjaxSource = tt;
        tv.fnDraw()
    }

    function fQ(tu, ts) {
        w = tu;
        pl = {};
        j3 = 0;
        ew = 0;
        if (hu()) {
            return
        }
        var tx = oP();
        tx.push("&customerAccount=" + a3);
        tx.push("&uniqueId=" + kw);
        var tv = $("#CategoryTreeData").val();
        if (!a7) {
            if (tv === "true") {
                a7 = true
            }
        }
        tx.push("&lh=" + tv);
        var tw;
        if (tu) {
            if (ts) {
                if (fY(p5())) {
                    return
                }
            }
            tw = "pll.html"
        } else {
            if (dm()) {
                if (ts) {
                    if (fY(p5())) {
                        return
                    }
                }
                tw = "p.html";
                if (s0()) {
                    tx = nb(tx)
                }
                if (hS()) {
                    tx = qC(tx)
                }
            } else {
                var tt = kQ(jm);
                if (ts) {
                    if (fY(p5() + "." + tt)) {
                        return
                    }
                }
                tw = "g.html";
                tx.push(tt)
            }
        }
        tx.push("&timestamp=" + ks());
        tw += getQueryPart(tx);
        if (cy) {
            if (qB(jm)) {
                hx(0)
            }
        }
        pG();
        lx(jm + " .tablePart", tw)
    }

    function sw(tt) {
        var tu = tt.get(0);
        var ts = tu.childNodes[0];
        return ts.innerText
    }

    function pb(ts, tu, tt) {
        tt(tu);
        $(ts + " .modelInput").show();
        iv(ts, 0, "GetModelList", ts + " .tableModel")
    }

    function q5() {
        if (!mH()) {
            rD().hide();
            return
        }
        rD().show().removeClass("jstree-no-clicked").addClass("jstree-clicked")
    }

    function rD() {
        return $(pt(".showAllParts"))
    }

    function oh() {
        return bn() || cJ() || k4() || lh() || g1() || bg() || fR() || cu() || dX() || (cT && rG())
    }

    function ll(tt, ts, tu, tw) {
        var tv = decodeResponseText(tu);
        if (e2 !== "$") {
            tv = tv.replace(/\\$/g, e2)
        }
        m3($(ts), tv, function () {
            gM(tt, tw, tv)
        })
    }

    function j2() {
        var tv = $(pt(".autodataSelect")).find(":selected");
        var ty = tv.text();
        if (startsWith(ty, "--")) {
            return false
        }
        fU = tv.data("mid-code");
        p4 = tv.data("schedule-id");
        kF = tv.data("master-schedule-sequence");
        jA = tv.data("standard-time");
        if (0 === parseFloat(jA)) {
            jA = ""
        }
        rp = tv.data("standard-time-automatic");
        if (0 === parseFloat(rp)) {
            rp = ""
        }
        bm(jm, "");
        var tt = false;
        jn = [];
        hG = [];
        s8 = [];
        var tu = $(pt(".autodataSelectSpecial")).find(":selected");
        ty = tu.text();
        if (startsWith(ty, "--")) {
            return false
        }
        var tx = tu.data("secondary-schedule-sequence");
        if (isEmpty(tx)) {
            jn = [];
            hG = [];
            s8 = [];
            return true
        }
        tt = true;
        jn.push(tu.data("secondary-schedule-sequence"));
        var tw = tu.data("standard-time");
        if (0 < parseFloat(tw)) {
            hG.push(tw)
        }
        var ts = tu.data("standard-time-automatic");
        if (0 < parseFloat(tw)) {
            s8.push(ts)
        }
        return tt
    }

    function s6() {
        $.getJSON("lbh.html" + kv(), nu)
    }

    function mV() {
        var tu = "#tabs-vin-search";
        var tt = gp(tu + " table.history tr");
        if (-1 === tt) {
            tt = 0
        } else {
            if (tt <= 1) {
                return
            }
        }
        $(tu + " table.history tr").removeClass("row_selected");
        var ts = tt;
        $(tu + " table.history tr:nth-of-type(" + ts + ")").addClass("row_selected")
    }

    function lY(ts) {
        var tt = decodeResponseText(ts.a);
        mg(pt(".autodataLogRepairTimes .treePartGroup"), tt, fb)
    }

    function fv(ts) {
        if (isEmpty(ts)) {
            return
        }
        _cookies = ts;
        console.log("Cookies from fv() at 6466");
        if (hN) {
            od("oscar", ts, aM);
            if (ry()) {
                em("refreshBrowser");
                return
            }
        } else {
            qi("oscar", ts, aM)
        }
        te()
    }

    function jc() {
        var tt = $(pt(".autodataLogRepairTimes .treePartGroup"));
        var ts = tt.position();
        var tv = ts.top;
        var tw = tv + tt.height() + fw();
        var tu = dZ(jm + " div.tablePartSection table.tablePart");
        if (tw >= tu) {
            return tw
        }
        return tu
    }

    function sF(ts) {
        return ts.substring(ts.lastIndexOf("/") + 1)
    }

    function aD(ts) {
        h2(ts + " .tableSubModel", ot, function () {
            en(ts)
        }, function (tt) {
            kl(ts + " .tableSubModel", tt)
        }, function () {
            $(ts + " .yearInput").show();
            return iv(ts, 2, "GetYearList", ts + " .tableYear")
        }, ts + " .yearInput")
    }

    function fb() {
        $(pt(".autodataLogRepairTimes")).show();
        $(pt(".standardTree, .autodataLogBookTree, .autodataLogRepairTimes .find")).hide();
        $("#partInfoPopupFullScreen, #partInfoPopup").hide();
        var ts = jX(pt(".autodataLogRepairTimes"), true);
        rb($(pt(".autodataLogRepairTimes .treePartGroup")), ts + "px");
        fn(pt(".autodataLogRepairTimes .treePartGroup"));
        $(pt(".autodataLogRepairTimes .autodataRepair")).addClass("jstree-clicked");
        T();
        jl();
        gn(false)
    }

    function dl(ts, tv) {
        $(ts + " .vehicleFitment").show();
        var tu = [];
        tu.push("&v=" + mP);
        tu.push("&cookie=" + _cookies);
        tu.push("&p=", encodeQuery(tv));
        var tt = "plc" + getQueryPart(tu);
        $.get(tt, function (tw) {
            ki(ts, tv, tw)
        }, "html")
    }

    function h5(tt, tu) {
        var tv = oP();
        tv.push("&midCode=" + tt);
        tv.push("&scheduleId=" + tu);
        var ts = "lbs.html" + getQueryPart(tv);
        sk(ts, function (tw) {
            fT(tw)
        }, [], true)
    }

    function qa(tw, tv, tu, tx, tt) {
        tw.removeClass("hide");
        if (!tv) {
            var ts;
            if (tu) {
                ts = tw.children("a").first().text().trim()
            } else {
                ts = "";
                tw.children("td").each(function () {
                    if (!isEmpty(ts)) {
                        ts = ts + " "
                    }
                    ts = ts + $(this).html()
                })
            }
            if (!tx.test(ts)) {
                if (tu) {
                    tw.addClass("hide")
                } else {
                    tw.hide()
                }
                return false
            }
        }
        if (!tu) {
            tw.show()
        }
        if (tt) {
            tw.addClass("row_selected")
        }
        return true
    }

    function ga(ts) {
        $("#regoSearchState").hide()
    }

    function gv() {
        return (cT && lC) || lh()
    }

    function ld(tt) {
        var tB = $.parseXML(tt);
        var tz = $(tB);
        var tu = [{gui: "registration", xmlName: "licenceplate"}, {gui: "make", xmlName: "make"}, {
            gui: "model",
            xmlName: "model"
        }, {gui: "submodel", xmlName: "submodel"}, {gui: "year", xmlName: "year"}, {
            gui: "vin",
            xmlName: "VIN"
        }, {gui: "chassis", xmlName: "chassisnumber"}, {gui: "engine", xmlName: "enginenumber"}, {
            gui: "body",
            xmlName: "bodystyle"
        }, {gui: "cc", xmlName: "cc"}, {gui: "country", xmlName: "countryoforigin"}, {
            gui: "fuel",
            xmlName: "fueltype"
        }, {gui: "transmission", xmlName: "transmission"}, {
            gui: "usedimport",
            xmlName: "usedimport"
        }, {gui: "vehicleid", xmlName: "vehicleid"},];
        var ty = 0;
        var tw = 0;
        var tv = 0;
        for (ty = 0; ty < tu.length; ty++) {
            var tD = tu[ty];
            var tC = "#regoExtraInformation .line ." + tD.gui;
            var ts = tz.find(tD.xmlName).text().trim();
            var tx = $(tC);
            var tA = tx.parent();
            if (isEmpty(ts)) {
                tA.hide();
                continue
            }
            tv++;
            if (tD.xmlName === "vehicleid") {
                if (!tq) {
                    tA.hide();
                    continue
                }
            }
            tx.text(ts);
            tA.show();
            bU(tA, tw);
            tw += 13
        }
        if (2 === tv) {
            return false
        }
        iS($("#regoExtraInformation .content"), tw + 13);
        iS($("#regoExtraInformation"), tw + 13 + 80);
        rb($("#regoExtraInformation .bottom .savePlate"), tw + 13 + 53);
        rb($("#regoExtraInformation .bottom .close"), tw + 13 + 53);
        return true
    }

    function mk() {
        return J(pt(".standardTree"))
    }

    function eX(tz, tF, tu, tG, ty, tB, tv, tt, tH, tA, tx, tw) {
        var ts = null;
        if (!tG) {
            if (!(gv())) {
                if (!cu()) {
                    ts = $(lo(tB, tu));
                    if (kJ && (!cu())) {
                        ts.append(fs(tu, tv, tt, tH, tA, tw))
                    }
                }
            }
        }
        if ("0.00" === tz) {
            tF.html(iu(tu));
            if (!tG) {
                tF.append(ts)
            }
            return
        }
        if ("-1" === tz) {
            if (ty) {
                tF.html(pq)
            } else {
                tF.html("")
            }
            return
        }
        if ("-2" === tz) {
            tF.html("");
            return
        }
        var tC;
        if (startsWith(tz, "-3;")) {
            tC = tz.split(";");
            var tI = tC[1];
            var tD = parseInt(tI, 10);
            if (0 === tD) {
                tF.html(gx)
            } else {
                if ((1 === tD) || (2 === tD)) {
                    tF.html(n7)
                } else {
                    if ((3 === tD) || (4 === tD)) {
                        tF.html(ct)
                    } else {
                        tF.html(gx)
                    }
                }
            }
            return
        }
        var tE = "";
        if (tG) {
            tE = "<span class='myPriceLabel'>Price:</span>&nbsp;"
        }
        if (fR() || cu()) {
            tF.html(jT(tz))
        } else {
            tF.html(tE + '<font size="2"><b>' + e2 + tz + "</b></font>")
        }
        if (tG) {
            return
        }
        if (gv()) {
            h0(tF, tx, tH);
            return
        }
        if (null !== ts) {
            tF.append(ts)
        }
    }

    function jM(ts) {
        return ts.substring(0, ts.lastIndexOf("."))
    }

    function rB() {
        console.log("handleCookiePolicyError");
        if (!hN) {
            return true
        }
        if (!bC()) {
            return false
        }
        return true
    }

    function dn(tA, tu, tF, ty, tG, tI, tH, tw, tz, tE, ts, tv, tD, tC, tB, tt) {
        if (2 === tG) {
            j6();
            l6(tu);
            return
        }
        if (oh()) {
            r5(tE, tw, tF, tu, !isEmpty(tI.text()), ts, tv, tD, tC, tB, tt);
            return
        }
        if (!isEmpty(tI.text())) {
            $(tA + ".formNotes").show();
            $(tA + ".buttonNotes").setupClick(function () {
                l6(tu)
            })
        } else {
            $(tA + ".formNotes").hide()
        }
        $(".partImage").remove();
        pF(tA + ".partDimension", tA + ".tablePartDimension", tu);
        if (!isEmpty(tH)) {
            $(".partImageSectionDiv").empty();
            $(tH).appendTo(".partImageSectionDiv");
            $(".partImageSectionDiv .partImage").setupClick(function () {
                r5(tE, tw, tF, tu, !isEmpty(tI.text()), ts, tv, tD, tC, tB, tt)
            });
            if (1 < tz) {
                $(".partClickImageForLagerViewLabel").text("(Click Image to view multiple images)")
            } else {
                $(".partClickImageForLagerViewLabel").text("(Click Image For Larger View)")
            }
            $(".partClickImageForLagerViewLabel").show()
        } else {
            $(".partClickImageForLagerViewLabel").hide()
        }
        bs(tA, tu, tF);
        if (!isEmpty(ty)) {
            var tx = ty;
            $(".partNumberLabel").html(joinArrToString(["<a href='", tx, "'", 'target="_blank">', "Part Number: ", bp(tF), "</a>"]));
            $(".MoreInfo").show().data("isVisible", true);
            $(".MoreInfo a").attr("href", function () {
                return tx
            }).attr("target", "_blank");
            $(".MoreInfo .orderIcon").setupClick(function () {
                og(tx)
            })
        } else {
            $(".partNumberLabel").text("Part Number: " + bp(tF));
            $(".MoreInfo").hide().data("isVisible", false)
        }
        $(".partNumberLabel").show();
        if (cT) {
            rb($(jm + " #partImageSection"), $("html,body").scrollTop())
        }
    }

    function tj(tD, tA) {
        var tt = tD.offset().left;
        var tz = tD.find(".mainImage");
        var tw = tz.offset().left;
        var tC = tw - tt + tz.width() / 2;
        var tB = tA.pageX - tt;
        if (tB < 100) {
            return
        }
        var tv = tD.find(".tablePartImageList");
        var tu = tv.find("tr").length;
        var ty = a1(tv);
        if (-1 === ty) {
            ty = 0
        }
        if (tB < tC) {
            if (0 === ty) {
                ty = tu - 1
            } else {
                ty--
            }
        } else {
            if ((ty + 1) === tu) {
                ty = 0
            } else {
                ty++
            }
        }
        ty++;
        tD.find(".imageCountText").text(ty + " of " + tu);
        tv.find(".selected").removeClass("selected");
        var tx = tv.find("tr:nth-child(" + ty + ")");
        tx.find("td.partImage").addClass("selected");
        var ts = tx.find("img");
        cD(ts.attr("src"), tz);
        cd(tx, tv, tD.find(".tablePartImageListDivChild"))
    }

    function qN(tG, tB, t2, t3, ts, tH) {
        var tQ = parseInt(tB[4]);
        var ty = (tQ === 100);
        var tZ = tB[5];
        var tO = tB[14];
        var tt = gI(tZ);
        var t5 = -1 !== tZ.indexOf(tb);
        if (t5) {
            tZ = tZ.replace(tb, "")
        }
        var ua = startsWith(tZ, dE);
        if (ua) {
            tZ = tZ.substring(8);
            var tI = $(pt(".autodataLogBook ul li")).last();
            tI.append("<div class='Grade'>" + tZ + "</div>")
        }
        var tD = g9();
        if (tD) {
            if (!ty) {
                if (isEmpty(tO)) {
                    tG.html("<td colspan='7' class='tooManyLines'> <center style='font-size:17px;font-weight: bold;margin:24px 0 24px 0;'>" + tZ + "</center></td>");
                    return
                }
            }
        }
        var t0 = tB[6];
        var t6 = tB[8];
        var tR = tB[9];
        var tX = tB[12];
        if (!isEmpty(tO)) {
            tG.attr("id", "tr" + tO)
        }
        var uc = parseInt(tB[19]);
        var tv = tB[20];
        var tM = tB[22];
        var tA = (1 === parseInt(tB[23]));
        var tF = tB[24];
        var tE = tB[25];
        var tT = tB[28];
        var tz = tB[29];
        t2.addClass("toBeDeleted");
        t3.addClass("partHidden");
        var tU = tH.eq(2).addClass("partPicture");
        tH.eq(3).addClass("partPriority");
        tH.eq(4).addClass("partPriority");
        var tJ = tH.eq(5).addClass("partNumber");
        var t9 = tH.eq(6).addClass("partBrand");
        var ub = tH.eq(7).addClass("partPcq");
        tH.eq(8).addClass("partNotes");
        var tY = tH.eq(9).addClass("partPrice");
        tH.eq(10).addClass("partQuantity");
        tH.eq(11).addClass("partElseQuantity");
        var t8 = tH.eq(12).addClass("toOrderQty");
        tH.eq(13).addClass("partAddOrderQuantity");
        tH.eq(14).addClass("partId");
        var t7 = tH.eq(15).addClass("pictureSmallHeight");
        var tL = tH.eq(16).addClass("pictureSmallWidth");
        tH.eq(17).addClass("pictureLargeHeight");
        tH.eq(18).addClass("pictureLargeWidth");
        tH.eq(19).addClass("imageCount");
        tH.eq(20).addClass("picturePath");
        var tW = tH.eq(21).addClass("technicalNotePath");
        tH.eq(22).addClass("partUrl");
        tH.eq(23).addClass("hasChildren");
        tH.eq(24).addClass("vendorLogoImagePath");
        if (ty) {
            tH.eq(25).addClass("toBeDeleted");
            tH.eq(26).addClass("toBeDeleted")
        } else {
            tH.eq(25).addClass("description");
            tH.eq(26).addClass("barCode")
        }
        var tP = tH.eq(27);
        tH.eq(28).addClass("pictureList");
        tH.eq(29).addClass("ExpandHideMessage");
        var tN = tH.eq(30);
        tN.addClass("VendorLinkText");
        var tx = tB[0].substring(1, tB[0].length);
        var t1 = [];
        t1.push("<td class='partNumber' data-category='");
        t1.push(tx);
        t1.push("'>");
        if ((!ty) && jp()) {
            t1.push("Product SKU Code:&nbsp;")
        }
        t1.push("<span class='label'>");
        t1.push(tZ);
        t1.push("</span>");
        if (!cz(tQ)) {
            if (!isEmpty(t6)) {
                t1.push("<div class='div_partNotes'>");
                t1.push(t6);
                t1.push("</div>")
            }
        }
        if (!w) {
            if (kJ || c6 || mK) {
                if (ua) {
                    pW(tY)
                } else {
                    if (t5) {
                        if (tA) {
                            tY.html(pq)
                        } else {
                            pW(tY)
                        }
                    } else {
                        eX(tR, tY, tO, e5(), tA, tX, t0, tx, tt, t6, tM, lI(at(tv)))
                    }
                }
            } else {
                if (lh()) {
                    if (!ty) {
                        if (t5) {
                            if (tA) {
                                tN.html(pq)
                            }
                        }
                    }
                }
            }
            if (2 == aE) {
                dR(tF, t0, t9)
            }
        }
        if (tD) {
            if (!ty) {
                tP.replaceWith("<td class='partnoSelect'><button type='button' class='partNoSelectButton' id='partNoSelectButton " + tO + "'>Select</button></td>")
            }
        }
        if (fr(ty, t5)) {
            if (lh()) {
                h0(tN, tM, tt)
            }
            if (!w) {
                if (mK) {
                    ub.attr("colspan", 2)
                }
            }
        } else {
            if (!w) {
                if (!lh()) {
                    ub.attr("colspan", 2)
                }
            }
            if (!lh()) {
                tN.addClass("toBeDeleted")
            }
        }
        var tV = 0;
        var tw = !isEmpty(tB[2]);
        if (tw) {
            tV = parseInt(tB[2]);
            if (0 === tV) {
                tw = false
            }
        }
        var tu = parseInt(tB[3]);
        tG.addClass(tu.toString());
        if (0 < tu) {
            tG.addClass("hiddenChildren shouldBeHiddenChildren")
        } else {
            if (ts) {
                tG.addClass("hidden shouldBeHidden")
            }
        }
        tU.text("");
        var t4 = dp;
        if (tw) {
            if (!ty) {
                if (rw("#ShowPartLogo") && !isEmpty(tv)) {
                    tG.height(aX)
                }
                tU.html(t4 + de(tv))
            }
            if (1 === tV) {
                var tK = t7.text();
                var tC = tL.text();
                if (!isEmpty(tK) && !isEmpty(tC)) {
                    var tS = b4(at(tv));
                    t4 = joinArrToString([t4, "<center><img class='partImage' width='", tC, "' height='", tK, "' src='", tS, "'></center>"])
                }
            }
        } else {
            if (!ty) {
                if ("-2" !== tR) {
                    tU.html(t4 + de(""))
                }
            }
            if (!cz(tQ)) {
                tG.height(18)
            }
        }
        $("<td class='partChildren'></td>").insertAfter(tU);
        if (tA) {
            t1.push("<div class='expand'>" + cf + "<p class='expandHideMessage'>Click for ");
            t1.push(tz);
            t1.push("</p></div>")
        }
        t1.push("</td>");
        tJ.replaceWith(joinArrToString(t1));
        if (tQ < 3) {
            tG.addClass("boldFont")
        }
        if (ty) {
            tG.addClass("purpose")
        }
        gm(jm + " ", tO, tZ, tM, tU, tV, tW, t4, tv.replace("/t/", "/product/"), uc, tT, tx, t0, tF, tX, t6, t5);
        t8.addClass("partOrderQuantity")
    }

    function te() {
        fh();
        nT();
        if (cG) {
            sg("#vehicleSelector")
        } else {
            ar()
        }
        sK();
        if (cG) {
            return
        }
        fg();
        var tt = fS();
        if (tt) {
            j4(false, true)
        }
        if (!hN) {
            gH()
        }
        var ts = p5();
        if (isEmpty(ts)) {
            refreshTabSettings(0, jm)
        }
        if (q6["#tabs-catalog"]) {
            if (!isEmpty(ts)) {
                var tu = $.cookie(jm + " .standardTree .searchTree .codeInput");
                if (null !== tu) {
                    if (!isEmpty(tu)) {
                        $(jm + " .standardTree .searchTree .codeInput").val(tu);
                        nh()
                    }
                }
            }
        }
        if (o3) {
            if (A()) {
                n3(jm, ts, false)
            }
        }
        if (isEmpty(hT)) {
            jB();
            return
        }
        b9()
    }

    function fs(ts, tt, tw, tv, tx, tu) {
        return g5.clone().setupClick(function (ty) {
            kL(ty, $(this), ts, tt, tw, tv, tx, tu);
            return false
        })
    }

    function r5(tz, tw, tA, tu, tD, ts, tv, ty, tC, tx, tt) {
        if (jm === "#tabs-part2") {
            return
        }
        if (!j7(tu)) {
            return
        }
        if (isEmpty(tz)) {
            tz = tw
        }
        tv = tv.replace(/&/g, "aaaaaaaa");
        var tB = [];
        tB.push("&aiu=" + q0);
        tB.push("&language=" + ov);
        tB.push("&amd=" + k());
        tB.push("&partNumber=" + bp(tA));
        tB.push("&pictureList=" + tz);
        tB.push("&partId=" + tu);
        tB.push("&category=" + ts);
        tB.push("&guid=" + hJ);
        tB.push("&brand=" + tv);
        tB.push("&brandLogo=" + ty);
        tB.push("&toOrderQuantity=" + tC);
        tB.push("&c=" + kw);
        tB.push("&et=" + o8);
        tB.push("&ci=" + a3);
        tB.push("&p=" + cM);
        tB.push("&footNote=" + tx);
        tB.push("&v=" + mP);
        tB.push("&cookie=" + _cookies);
        tB.push("&showNettPrice=" + jk);
        tB.push("&showNettPriceGst=" + iF);
        tB.push("&isPlaceHolderExpandParts=" + tt);
        if (tD) {
            tB.push("&TechnicalNotesUrl=" + td(tu))
        }
        tB = eH(tB, tu, tt);
        fq = "ShowPartInfo";
        to = "/oscar/pd" + getQueryPart(tB);
        lw = "";
        if (pz) {
            r3(false, "#partInfoPopup .partInfo", to);
            return
        }
        oa(rI);
        fC(rI)
    }

    function dk(ts, tw, tv) {
        if (0 < tv.node.children.length) {
            refreshTabSettings(0, ts);
            $(ts + " .modelInput").hide();
            return
        }
        var tt = tv.node;
        var tu = tt.data.id;
        pb(ts, tu, tw)
    }

    function oi(tv, tu) {
        if (tu) {
            if (J(tv + " .partNumberVehicle")) {
                return mZ(tv + " .partNumberVehicleTableSection") + 60
            }
            return -1
        }
        var tt = $(tv + " img.partNumberVehicle");
        if (tt === undefined) {
            return 0
        }
        var ts = tt.get(0);
        if (ts === undefined) {
            return 0
        }
        var tw = ts.height;
        if (0 === tw) {
            return 0
        }
        if (tv === "#partInfoPopup") {
            return tw + 80
        }
        return tw
    }

    function nq() {
        $(".closeIcon, #ClosePlate").setupClick(mw);
        var ts = "#partInfoPopup";
        nx(ts);
        if (!isEmpty(lP)) {
            $("#partInfoPopup .states input[type=radio][value=" + lP + "]").prop("checked", true)
        }
        $(".closeIcon").text(tc);
        $(ts).css({height: "251px", width: "430px", left: "0"});
        $("#partInfoPopup .part_detail_category").css({width: "430px"});
        $("#partInfoPopup .closeIcon").css({left: "312px"});
        $("#SavePlate").setupClick(nO);
        $("#partInfoPopup").css({left: "230px"});
        if (ky()) {
            if (!isEmpty(n2)) {
                $("#registrationPlate").val(n2)
            }
        }
    }

    function sM(ts, tt) {
        if (!rw(ts)) {
            return tt
        }
        bU($(ts), tt);
        tt += 19;
        return tt
    }

    function kb() {
        var tt = pu();
        var ts = "fulltree" + getQueryPart(tt);
        $.get(ts, function (tu) {
            mg(gd(), tu, function () {
                aS(jm, false, false)
            })
        })
    }

    function au(ts) {
        if ("#tabs-catalog" === ts) {
            return "0"
        }
        if ("#tabs-tractor" === ts) {
            return "1"
        }
        if ("#tabs-motorbike" === ts) {
            return "2"
        }
        if ("#tabs-marine" === ts) {
            return "3"
        }
        if ("#tabs-engine" === ts) {
            return "4"
        }
        if ("#tabs-general-merchandise" === ts) {
            return "5"
        }
        if ("#tabs-vin-search" === ts) {
            return "6"
        }
        if ("#tabs-advanced-search" === ts) {
            return "7"
        }
        if ("#tabs-part" === ts) {
            return "8"
        }
        if ("#tabs-crosspart" === ts) {
            return "9"
        }
        if ("#tabs-option" === ts) {
            return "10"
        }
        if ("#tabs-feedback" === ts) {
            return "11"
        }
        return ""
    }

    function mw() {
        if (pz) {
            pO();
            return
        }
        fC(iJ);
        dS()
    }

    function hE() {
        var tt = $("#feedBackName").val();
        if (isEmpty(tt)) {
            alert("Please input your name.");
            return false
        }
        var tw = $("#feedBackEmailAddress").val();
        if (isEmpty(tw)) {
            alert("Please input your email address.");
            return false
        }
        var tx = $("#feedBackYourFeedback").val().slice(0, sx);
        if (isEmpty(tx)) {
            alert("Please input your feedback.");
            return false
        }
        var tu = "on";
        if (b2("#feedbackReplyCheckBox")) {
            tu = "on"
        } else {
            tu = "off"
        }
        $("#buttonFeedback").prop("disabled", true);
        var tv = pu();
        tv.push("&feedBackName=" + tt);
        tv.push("&feedBackEmailAddress=" + tw);
        tv.push("&feedBackYourFeedback=" + encodeURI(tx));
        tv.push("&feedbackCheckboxReply=" + tu);
        var ts = "SubmitFeedback" + getQueryPart(tv);
        $.get(ts, function (ty) {
            $("#buttonFeedback").prop("disabled", false);
            alert(ty);
            $("#feedBackYourFeedback").val("");
            $("#feedBackName").val("");
            $("#feedBackEmailAddress").val("")
        });
        return false
    }

    function he() {
        return aa()
    }

    function eF(ts) {
        if (1 > parseFloat(ts)) {
            if (aa()) {
                return "Call"
            }
            return "0"
        }
        return ts
    }

    function gn(ts) {
        hr("setPageHeight", function () {
            cg(ts)
        }, 200)
    }

    function en(ts) {
        sK();
        kW(ts + " .tableSubModel");
        jy(ts + " .tableYear", buildRelativeQuery(ts, "GetYearList"))
    }

    function qC(ts) {
        ts.push("&subCatId=" + iP);
        ts.push("&subCatDescription=" + jQ);
        return ts
    }

    function hi() {
        if (ky()) {
            return jh
        }
        if (c1()) {
            var ts = dZ(jm + " div.part_detail_category") + dZ(jm + " div.part_detail_partNo") + dZ(jm + " div.partImageSectionOption") + dZ(jm + " div.partDetailImage") + dZ(jm + " table.tablePartDimension");
            if (ts > 0) {
                return ts + 100
            }
            return jh
        }
        if (g9() || sd()) {
            if (g9()) {
                if (oE) {
                    if (!lL()) {
                        return 219
                    }
                    return 450
                }
            }
            return jh
        }
        if (s0() && (dZ(pt(".autodataLogBookTree")) > 0)) {
            return mZ(pt(".autodataLogBookTree")) + fw() + 277
        }
        if (J(pt(".standardTree")) && (dZ(pt(".standardTree .treePartGroup")) > 0)) {
            return mZ(pt(".standardTree .treePartGroup")) + fw() + 277
        }
        if (J(pt(".autodataLogRepairTimes")) && (dZ(pt(".autodataLogRepairTimes .treePartGroup")) > 0)) {
            return mZ(pt(".autodataLogRepairTimes .treePartGroup")) + fw() + 277
        }
        return jh
    }

    function fp(ts, tu) {
        if (jv(ts)) {
            $(ts + " .tableModelDiv").height(108);
            $(ts + " .tableModelDiv .scrollDiv").height(85)
        } else {
            $(ts + " .tableModelDiv").height(210)
        }
        sK();
        var tt = go(tu);
        if (!nn(tt)) {
            return
        }
        $(ts + " .yearInput").show();
        kW(tu);
        jy(ts + " .tableSubModel", buildRelativeQuery(ts, "GetSubModelList"))
    }

    function oz() {
        if (fO === 0) {
            console.log("Error: getLicensePlateState _showRegoSearch === 0");
            return "invalid"
        }
        if (!isEmpty(lP)) {
            return lP
        }
        if (pj()) {
            return ""
        }
        lP = $("#license_plate_state").text();
        if (isEmpty(lP)) {
            console.log("Error: getLicensePlateState isEmpty(_stateCookie)");
            return "invalid"
        }
        return lP
    }

    function eT(tu) {
        var tz = rw(tu + " .comparePartTitleSection");
        if (tz) {
            if (!cT) {
                return
            }
            var ts = 700;
            $(tu).css({height: ts + "px"});
            ml(ts, true, ts + 80);
            return
        }
        var tA = 0;
        if (J(tu + " .tablePartDimension")) {
            tA = $(tu + " .tablePartDimension").height()
        }
        var tv = oi(tu, false);
        tA = eN(tv, tA);
        var tB = $("#tablePartTechnicalNoteListDiv").height();
        tA = eN(tB, tA);
        if (!cT) {
            if (tA > 370) {
                tA = 370
            }
        }
        if (tA < 134) {
            return
        }
        var ty = tA;
        if (rw(tu + " .partDetailImage")) {
            ty += 379
        } else {
            ty += 130
        }
        var tt = $(tu);
        var tw = 0;
        if (tu === "#tabs-part-info") {
            tw = 200
        } else {
            ty += 200;
            tt.css({height: ty + "px"});
            var tx = tt.css("top");
            if (!isEmpty(tx)) {
                if ("auto" === tx) {
                } else {
                    tw = parseInt(tx, 10)
                }
            }
        }
        ty += tw;
        $(tu + " .partDimension, #tabsPartDetailInformation").css({height: tA + "px"});
        if (!cT) {
            return
        }
        if (bx > ty) {
            return
        }
        ml(ty, true, ty + 80)
    }

    function eN(tt, ts) {
        if (tt >= ts) {
            return tt
        }
        return ts
    }

    function aQ() {
        $("#regoSaveState .states button").css({"background-color": ""})
    }

    function eu(ts, tt) {
        if (mj()) {
            tt = id(tt)
        }
        if (ts) {
            return sm(tt)
        }
        if (lh()) {
            return joinArrToString(["<td COLSPAN=5 class='partCategory'>", tt, "</td>"])
        }
        return joinArrToString(["<td COLSPAN=7 class='partCategory'>", tt, "</td>"])
    }

    function gs(tx, tw, tt) {
        $(tx).show();
        var tv = $(tw);
        cS(tv, tw);
        var tu = tv.dataTable();
        var ts = tu.fnSettings();
        ts.oFeatures.bServerSide = true;
        ts.oLanguage.sEmptyTable = " ";
        ts.sAjaxSource = tt;
        tu.fnDraw()
    }

    function aq(ts) {
        var tt = ts + " .tableEngine";
        h2(tt, ot, function () {
            lR(ts, tt)
        }, function (tu) {
            kl(tt, tu)
        }, function () {
            $(ts + " .detailInput").show();
            return iv(ts, 5, "GetDetailList", ts + " .tableDetail")
        }, ts + " .detailInput")
    }

    function et(tv) {
        if (isEmpty(lP)) {
            alert("Missing state value");
            return
        }
        lP = lP.trim();
        var tw = $("#tabs-vin-search .regoInput").val();
        if (isEmpty(tw)) {
            alert("Missing rego");
            return
        }
        if (hu()) {
            alert("Please select a vehicle");
            return
        }
        var tt = $("#partInfoPopup div.vehicleId").text();
        var tu = ["&guid=" + hJ, "&vehicleId=" + f7(), "&state=" + lP, "&registrationPlate=" + tw, "&aiu=" + q0, "&cookie=" + _cookies];
        var ts = "/oscar/rsq" + getQueryPart(tu);
        sk(ts, function (tx) {
            if (tx.V === "ok") {
                $("#regoExtraInformation .savePlate").hide();
                alert("Save Vehicle against Rego Plate successfull.")
            }
        }, [], true);
        return false
    }

    function getTabCodeByTabId(tabId) {
        if ("#tabs-catalog" === tabId) {
            return "0"
        }
        if ("#tabs-tractor" === tabId) {
            return "1"
        }
        if ("#tabs-motorbike" === tabId) {
            return "2"
        }
        if ("#tabs-marine" === tabId) {
            return "3"
        }
        if ("#tabs-engine" === tabId) {
            return "4"
        }
        return ""
    }

    function mo() {
        if (document.selection && document.selection.empty) {
            document.selection.empty();
            return
        }
        if (window.getSelection) {
            var ts = window.getSelection();
            ts.removeAllRanges()
        }
    }

    function o(ts) {
        if ("au" === lG) {
            if (p2) {
                return true
            }
            return "NZ" !== ts
        }
        if ("nz" === lG) {
            return "NZ" === ts
        }
        return false
    }

    function o5(ts) {
        iJ = g;
        if (!lZ[ts]) {
            lZ[ts] = true;
            qX();
            setTimeout(function () {
                if (!isEmpty(b8)) {
                    $("#tabs-part .partNumberInput").val(b8);
                    py("1" === sI, "#tabs-part")
                }
            }, 100)
        }
        if (isEmpty($(ts + " .partNumberInput").val())) {
            qX();
            G()
        } else {
            $(".partClickImageForLagerViewLabel,.partNumberLabel, .holdPartForComparisonFormDiv").show();
            if (true === $(ts + " .MoreInfo").data("isVisible")) {
                $(ts + " .MoreInfo").show()
            }
            gn(false)
        }
    }

    function jW(tw) {
        if (g9()) {
            pT();
            return
        }
        if (tw) {
            gy = pY;
            G();
            return
        }
        if ((jm === "#tabs-feedback") || (jm === "#tabs-garage") || (jm === "#tabs-shoppingCart")) {
            G();
            return
        }
        if (jm === "#tabs-vin-search") {
            if ($("#tabs-vin-search .tablePart tbody tr").length < 2) {
                G();
                return
            }
        }
        if (jm === "#tabs-part-info") {
            partNumberVehicleHeight = oi(jm, false);
            if (partNumberVehicleHeight < 40) {
                G();
                return
            }
            gy = partNumberVehicleHeight;
            ml(gy, true, gy + 280);
            return
        }
        if (hu()) {
            G();
            return
        }
        var tu = dZ(jm + " div.tablePartSection table.tablePart");
        tu += 28;
        var ts = mB();
        if (tu < ts) {
            tu = ts
        }
        gy = tu;
        if (fS()) {
            if (!s0()) {
                var tt = dZ(jm + " .standardTree .jstree-container-ul");
                var tv = dZ(jm + " .logoImageAutoInfoSection");
                tt = $(jm + " .treePartGroup").position().top + tt + tv;
                if (tt > tu) {
                    gy = tt
                }
            }
        }
        ml(gy, true, gy + 280)
    }

    function qG() {
        fZ = $("#tabs").tabs({
            activate: function (ts, tt) {
                sO(ts, tt)
            }
        });
        if (!q6["#tabs-catalog"]) {
            m(0, true)
        }
        $("#displayOptionAutoHideVehicleSelector").change(function () {
            fx("#tabs-catalog", false)
        })
    }

    function qf(ts) {
        if (checkIfTabsCatalog(ts)) {
            return qJ !== kr
        }
        return qJ !== oN
    }

    function h2(tx, tt, tv, tu, ts, ty) {
        var tw = $(tx).dataTable({
            bDeferRender: true,
            bPaginate: false,
            bFilter: false,
            bSort: false,
            bInfo: false,
            bDestroy: true,
            bProcessing: false,
            bAutoWidth: false,
            fnRowCallback: tt,
            fnServerData: function (tz, tB, tC, tA) {
                debugger;
                tA.jqXHR = sk(tz, function (tE) {
                    debugger;
                    var tD = kt(tE);
                    if (null === tD) {
                        return
                    }
                    if (tD.iTotalDisplayRecords === 0) {
                        return
                    }
                    tC(tD);
                    tv()
                }, [], true)
            },
            fnCookieCallback: nF
        });
        tw.fnSettings().oLanguage.sEmptyTable = " ";
        $(tx + " tbody").setupClick(tu);
        $(tx).on("click", "tbody tr", ts).on("keydown", function (tz) {
            c7(tz, ts, ty)
        })
    }

    function hY(ts, tw, tt) {
        tt.attr("src", tw);
        var tv = 400;
        var tu = 700;
        if (fq === "ShowComparePart") {
            tu = 330;
            tv = 330
        }
        jU(tt, ts, tv, tu)
    }

    function pB(tv, tt, tx, tw, ts) {
        tt.preventDefault();
        var tz;
        if (ts) {
            tz = tx + " > li > ul > li:visible"
        } else {
            tz = tx + " tr:visible"
        }
        var tu = dr(tz, ts);
        if (-1 === tu) {
            if (ts) {
                $(tv + " .modelInput").val("").hide()
            }
            return
        }
        if (ts) {
            var ty = $(tz + " > a.jstree-clicked").text().trim();
            if (isEmpty(ty)) {
                $(tv + " .modelInput").val("").hide();
                return
            }
            pb(tv, ty, function (tA) {
                kd = tA
            });
            $(tv + " .modelInput").focus()
        } else {
            r2($(tx), tw)
        }
    }

    function jX(tt, ts) {
        var tu = gi(tt, ts);
        tu += 4;
        bU($(tt + " .poweredByAutoData"), tu);
        tu += 40;
        return tu
    }

    function je() {
        return aa() || fM() || d1() || sy() || f0() || pZ() || k4()
    }

    function ng() {
    }

    function a2() {
        a4 = $("#tabs-catalog .regoInput").val();
        if (isEmpty(a4)) {
            return
        }
        fC(jO)
    }

    function lg(tt) {
        var tv = "";
        var ts = aa();
        var tu = "";
        if (ts || fM()) {
            tv = "<div class='partBursonQtyValue boldFont'>" + eF(tt.Quantity) + "</div>";
            if (ts) {
                tv = tv + "<div class='partBursonElseQtyValue' data-part-id='" + tt.Id + "'>" + tt.ElseQuantity + "</div>"
            }
            return tv + "<div class='partBursonTotalQtyValue' data-part-id='" + tt.Id + "'>" + tt.TotalQuantity + "</div>"
        }
        if (c6) {
            tv = tv + "<div class='partBursonQtyValue boldFont'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + tt.Quantity + "</div>"
        } else {
            if (!e5()) {
                tv = tv + "<div class='partBursonQtyValue boldFont'>" + tt.Quantity + "</div>"
            }
        }
        if (sz()) {
            tv = tv + "<div class='partBursonElseQtyValue boldFont' data-part-id='" + tt.Id + "'>" + tt.TotalQuantity + "</div>"
        }
        return tv
    }

    function iv(ts, tt, tv, tw) {
        refreshTabSettings(tt, ts);
        sH = "";
        var tu = buildRelativeQuery(ts, tv);
        if (isEmpty(tu)) {
            return
        }
        jy(tw, tu);
        return 0
    }

    function refreshTabSettings(ts, tabId) {
        var tabIdIsValid = validateTabId(tabId);
        if (ts < 6) {
            aW(tabId);
            $(tabId + " .detailInput").val("");
            f9(tabId, "#detailSelect", ".tableDetail", "Select Detail")
        }
        if (ts < 5) {
            if (tabIdIsValid) {
                $(tabId + " .engineInput").val("");
                $(tabId + " .detailInput").hide()
            }
            f9(tabId, "#engineSelect", ".tableEngine", "Select Engine")
        }
        if (ts < 4) {
            if (tabIdIsValid) {
                $(tabId + " .seriesInput").val("");
                $(tabId + " .engineInput").hide()
            }
            f9(tabId, "#seriesChassisSelect", ".tableSeriesChassis", "Select Series Chassis")
        }
        if (ts < 3) {
            mv(jm);
            if (tabIdIsValid) {
                $(tabId + " .yearInput").val("");
                $(tabId + " .seriesInput").hide()
            }
            f9(tabId, "#yearSelect", ".tableYear", "Select Year")
        }
        if (ts < 2) {
            mv(jm);
            f9(tabId, "#subModelSelect", ".tableSubModel", "");
            if (jv(tabId)) {
                $(tabId + " .tableModelDiv").height(85)
            }
        }
        if (ts < 1) {
            mv(jm);
            if (tabIdIsValid) {
                $(tabId + " .modelInput").val("");
                $(tabId + " .yearInput").val("");
                $(tabId + " .yearInput").hide()
            }
            f9(tabId, "#modelSelect", ".tableModel", "Select Model");
            if (jv(tabId)) {
                $(tabId + " .tableModelDiv").height(108)
            }
        }
        if (cG) {
            return
        }
        if (ts < 7) {
            s5();
            ju();
            sE();
            if (mH()) {
                rD().hide()
            }
            ji(tabId + " .tablePart", lN);
            if (ky()) {
                dj(false)
            } else {
                ek(false)
            }
        }
    }

    function dm() {
        return s0() || hS() || eW(jm) || (!fS())
    }

    function aH() {
        $("#regoExtraInformation .line .registration").text("");
        $("#regoExtraInformation .line .make").text("");
        $("#regoExtraInformation .line .model").text("");
        $("#regoExtraInformation .line .submodel").text("");
        $("#regoExtraInformation .line .year").text("");
        $("#regoExtraInformation .line .vin").text("");
        $("#regoExtraInformation .line .chassis").text("");
        $("#regoExtraInformation .line .engine").text("");
        $("#regoExtraInformation .line .body").text("");
        $("#regoExtraInformation .line .cc").text("");
        $("#regoExtraInformation .line .country").text("");
        $("#regoExtraInformation .line .fuel").text("");
        $("#regoExtraInformation .line .transmission").text("");
        $("#regoExtraInformation .line .usedimport").text("");
        $("#regoExtraInformation .line .vehicleid").text("");
        $("#regoExtraInformation .savePlate").hide()
    }

    function hK(tz, ts) {
        var tw = getMakerId(ts);
        if (isEmpty(tw)) {
            return tz
        }
        var tu = hc(ts);
        if (isEmpty(tu)) {
            return tz
        }
        var tt = kH();
        var ty = cE(ts);
        if (isEmpty(ty)) {
            return tz
        }
        sSeriesChassis = nX(ts);
        if (isEmpty(sSeriesChassis)) {
            return tz
        }
        var tx = dY(ts);
        if (isEmpty(tx)) {
            return tz
        }
        sDetail = E(ts);
        if (isEmpty(sDetail)) {
            return tz
        }
        var tv;
        if (cG) {
            tv = s7(ts)
        } else {
            tv = cl(ts)
        }
        tz[ts + ".make"] = tw;
        tz[ts + ".model"] = tu;
        tz[ts + ".subModel"] = tt;
        tz[ts + ".year"] = ty;
        tz[ts + ".SeriesFlag"] = returnIfChecked(ts + " .checkBoxSeries", "1");
        tz[ts + ".ChassisFlag"] = returnIfChecked(ts + " .checkBoxChassis", "1");
        tz[ts + ".series"] = sSeriesChassis;
        tz[ts + ".engine"] = tx;
        tz[ts + ".detail"] = sDetail;
        tz[ts + ".vehicle"] = encodeQuery(tv);
        tz[ts + ".t"] = aV(ts);
        return eU(tz, ts)
    }

    function kn() {
        return "#tabs-general-merchandise" == jm
    }

    function sn(tE, tF, tu, ty, tx, tC, ts) {
        var tH = qk(tE);
        var tz;
        var tt;
        if (ty) {
            tz = tu + " > div ul";
            tt = " li.jstree-leaf"
        } else {
            tz = tu + " table";
            tt = "tr"
        }
        refreshTabSettings(tx, tC);
        rt(tC, tx);
        if (dV(tH)) {
            d4(tC, tE, tz, tH, ty);
            return
        }
        var tw = e4(ts.replace(/\\s+/g, ""));
        var tA;
        var tB = false;
        if (27 === tH) {
            tB = true;
            tF.val("");
            tE.preventDefault()
        } else {
            var tv = tF.val();
            if (isEmpty(tv)) {
                tB = true;
                e8(tw)
            } else {
                var tG = tv.replace(/[-[\\]{}()*+?.,\\\\^$|#\\s]/g, "\\\\$&");
                if (isEmpty(tG)) {
                    tB = true
                }
                if (tF.hasClass("makeInput") || tF.hasClass("modelInput")) {
                    tA = new RegExp("^" + tG, "i")
                } else {
                    if (tF.hasClass("yearInput") || tF.hasClass("seriesInput") || tF.hasClass("engineInput") || tF.hasClass("detailInput")) {
                        tA = new RegExp(tG, "i")
                    }
                }
                od(tw, tG, a9)
            }
        }
        if (ty) {
            oK($(tu + " .jstree_demo_div"))
        } else {
            $(tz + " " + tt + ".row_selected").removeClass("row_selected")
        }
        var tD = bj(tz, tt, tB, ty, tA, false);
        if (ty) {
            d3(tz, tu, tB);
            if (2 === tD) {
                $(tz + " " + tt + " :visible").first().click();
                $(tC + " .modelInput").focus()
            }
        } else {
            if (1 === tD) {
                $(tz + " " + tt + " :visible").click()
            }
        }
    }

    function bS(ts) {
        mg(ts, "<ul/>", function () {
            aS(jm, false, false)
        })
    }

    function gd() {
        return jm + " .standardTree .treePartGroup"
    }

    function jJ() {
        return $(gd())
    }

    function rV() {
        return jm + " .autodataLogBookTree"
    }

    function ob() {
        return $(rV())
    }

    function cs() {
        return checkIfTabsCatalog(jm)
    }

    function jy(tv, tu) {
        var tt = $(tv).dataTable();
        var ts = tt.fnSettings();
        ts.oFeatures.bServerSide = true;
        ts.iDraw = 0;
        ts.sAjaxSource = tu;
        tt.fnDraw()
    }

    function iG(ts, tu) {
        var tt = go(tu);
        if ((1 === tt) || (2 === tt)) {
            $(ts + " .engineInput").show();
            fe(tu);
            ed = "SHOW ALL";
            pd();
            $(ts + " .engineInput").focus();
            return
        }
        $(ts + " .seriesInput").focus()
    }

    function f9(tx, ts, tv, tw) {
        var tt;
        if (cG) {
            tt = tx + " " + ts;
            if (rw(tt)) {
                var tu = $(tt);
                tu.selectBoxIt({defaultText: tw, autoWidth: false});
                dv(tu).remove()
            }
        } else {
            tt = tx + " " + tv;
            mn($(tt))
        }
    }

    function bd(tv) {
        var tz = l2();
        var tw = tv.split(",");
        var tt = tw.length;
        var ts = "";
        for (var ty = 0; ty < tt; ty++) {
            var tu = tw[ty];
            if (isEmpty(tu)) {
                continue
            }
            tu = tu.trim();
            itemPair = tu.split("=");
            var tx = itemPair[0];
            if (tx in tz) {
                if (!isEmpty(ts)) {
                    ts = ts + ","
                }
                ts = ts + tu
            }
        }
        return ts
    }

    function oH(ts) {
        return ("#tabs-part-info" === ts) || ("#tabs-part" === ts) || ("#tabs-part2" === ts) || ("#tabs-crosspart" === ts) || ("#tabs-feedback" === ts) || validateTabId(ts) || ("#tabs-vin-search" === ts)
    }

    function I(tt, ts) {
        if (ts) {
            $(tt + ".holdPartForComparisonCheckBoxDiv").show();
            $(tt + ".holdPartForComparisonCheckBox").removeAttr("checked");
            $(tt + ".compareWithHeldPartButtonDiv").hide();
            return
        }
        $(tt + ".holdPartForComparisonCheckBoxDiv").hide();
        $(tt + ".compareWithHeldPartButtonDiv").show();
        j0 = true
    }

    function nb(ts) {
        $(pt(".autodataLogBook ul")).empty();
        ts.push("&midCode=" + fU);
        ts.push("&scheduleId=" + p4);
        ts.push("&masterScheduleSequence=" + kF);
        ts.push("&masterScheduleSequenceStandardTime=" + jA);
        ts.push("&masterScheduleSequenceStandardTimeAutomatic=" + rp);
        if (0 < jn.length) {
            ts.push("&secondaryScheduleSequence=" + jn.join(","))
        }
        if (0 < hG.length) {
            ts.push("&secondaryScheduleSequenceStandardTime=" + hG.join(","))
        }
        if (0 < s8.length) {
            ts.push("&secondaryScheduleSequenceStandardTimeAutomatic=" + s8.join(","))
        }
        return ts
    }

    function rt(ts, tt) {
        if (1 > tt) {
            $(ts + " .modelInput").hide()
        }
        if (3 > tt) {
            $(ts + " .yearInput").hide()
        }
        if (4 > tt) {
            $(ts + " .seriesInput").hide()
        }
        if (5 > tt) {
            $(ts + " .engineInput").hide()
        }
        if (6 > tt) {
            $(ts + " .detailInput").hide()
        }
    }

    function cS(ts, tu) {
        if (!gf(ts)) {
            return
        }
        var tt = ts.dataTable({
            bPaginate: false,
            bFilter: false,
            bSort: false,
            bInfo: false,
            bDestroy: true,
            bServerSide: false,
            bProcessing: false,
            bAutoWidth: false,
            bDataEmptyAddOneRow: false,
            fnRowCallback: i9,
            fnCookieCallback: nF,
            fnDrawCallback: function (tw) {
                var tv = $(this);
                pN(tv, tw, tu)
            },
            fnServerData: function (tv, tx, ty, tw) {
                tw.jqXHR = sk(tv, function (tA) {
                    var tz = kt(tA);
                    if (null === tz) {
                        return
                    }
                    ty(tz)
                }, [], true)
            },
        }).fnSettings().oLanguage.sEmptyTable = " "
    }

    function pN(ts, tu, tt) {
        if (0 === tu.aoData.length) {
            ts.hide();
            return
        }
        ts.show();
        $(tt + " tbody tr td a").setupClick(function () {
            mb($(this).attr("href"), 800, 768, true);
            return false
        });
        if ($("#tabs-part2 .partImageTechnicalNoteList .tablePartTechnicalNoteList tbody tr td a").length < 1) {
            $("#tabs-part2 .partImageTechnicalNoteList").hide()
        } else {
            $("#tabs-part2 .partImageTechnicalNoteList").show()
        }
        G()
    }

    function bo(tabId, code, method, selector) {
        refreshTabSettings(code, tabId);
        var query = buildRelativeQuery(tabId, method);
        if (isEmpty(query)) {
            return 0
        }
        $.getJSON(query, function (responseArr) {
            N(tabId, selector, responseArr, method)
        }).done(function () {
        }).fail(function (tx, tz, ty) {
            if (tz === "parsererror") {
                if (-1 !== tx.responseText.indexOf(dq)) {
                    if (rB()) {
                        return 0
                    }
                }
            }
        }).always(function () {
        });
        return 0
    }

    function gD() {
        if (!(gP() || f5())) {
            return ""
        }
        var ts = [];
        if (b()) {
            ts.push("<button class='buttonNettPriceGst");
            if (cZ()) {
                ts.push(" selected")
            }
            ts.push("' type='button'>+/- " + oU + "</button>")
        }
        ts.push("<button class='buttonNettPrice");
        if (!bH()) {
            ts.push(" selected")
        }
        ts.push("' type='button'>H/S</button>");
        return joinArrToString(ts)
    }

    function L() {
        q6["#tabs-catalog"] = rw("#ShowAutomotive");
        q6["#tabs-tractor"] = rw("#ShowTractor");
        q6["#tabs-motorbike"] = rw("#ShowMotorBike");
        q6["#tabs-marine"] = rw("#ShowMarine");
        cT = rw("#DynamicPageHeight");
        pz = rw("#IsPartInfoPopup");
        kJ = rw("#ShowPrice");
        mK = rw("#ShowBuyerAssist");
        c6 = rw("#ShowQuantity");
        lC = rw("#AllowOrderPart");
        iz = rw("#IsPartUrlPopup");
        p8 = rw("#IsNarrowTheme");
        gU = rw("#CategoryTreeFind");
        mm = rw("#showallmodel");
        kk = rw("#showsubmodel");
        hj = rw("#ShowElseWhereStock");
        eM = rw("#AllowUrlRegoSearch");
        tq = rw("#ShowVehicleId");
        p2 = rw("#AllowNz");
        on = !(rw("#expandassociatedparts") || rw("#ExpandPlaceholderParts"));
        fo = rw("#ShowPartSearchVehicles");
        aN = rw("div.find");
        if (aN) {
            jh += 30
        }
    }

    function lR(ts, tt) {
        sK();
        ja(tt);
        var tu = go(tt);
        if (1 != tu) {
            $(ts + " .engineInput").show().focus();
            return
        }
        $(ts + " .detailInput").show();
        kW(tt);
        jy(ts + " .tableDetail", buildRelativeQuery(ts, "GetDetailList"));
        $(ts + " .detailInput").focus()
    }

    function kL(ty, tE, tt, tu, ts, tF, tz, tv) {
        var tC = null;
        var tx = "";
        var tG = tE.closest("tr");
        var tA = "";
        var tw = "";
        if (null !== tG) {
            var tD = tG.children(".partPrice");
            if (!isEmpty(f2)) {
                tA = tG.data("SKU");
                tw = tG.data("SKUkey")
            }
            tC = tD.children(".addOrderQuantity").children(".addOrderQuantityInput");
            var tB = tG.find(".partBursonQtyValue");
            if (null !== tB) {
                tx = tB.text()
            }
        }
        nY(jm, tt, tu, ts, ty.pageY, tF, tx, tC, tz, tv, tA, tw);
        if (!dh(tC)) {
            tC.focus()
        }
    }

    function cL(ts) {
        h2(ts + " .tableYear", ot, function () {
            dA(ts)
        }, function (tt) {
            kl(ts + " .tableYear", tt)
        }, function () {
            $(ts + " .seriesInput").show();
            return iv(ts, 3, "GetSeriesChassisList", ts + " .tableSeriesChassis")
        }, ts + " .seriesInput")
    }

    function eD(tt, ts, tv) {
        if (isEmpty(ts)) {
            return
        }
        var tu = ts.length;
        tt.width(tu * 12);
        var tw = tv.pageX - 40;
        if (20 < tu) {
            tw = tv.pageX - 100
        }
        rb(tt, tv.pageY - 80).css("left", tw);
        tt.show().find("p").html(ts)
    }

    var jV = false;

    function ow(tw, tv, tt) {
        if (oO(tw)) {
            em("refreshBrowser");
            return
        }
        var ts = "#stockInfoPopup";
        if ((tv === 0) && (tt === 0)) {
            tv = 757;
            tt = 348
        }
        tv -= 350;
        $("#partInfoPopupFullScreen").height(gy + 10000).fadeIn("slow");
        $(ts + " .closeIcon").setupClick(o2);
        var tu = dZ(jm + " div.tablePartSection table.tablePart");
        if ((tu - tt) < 330) {
            tt -= 400
        }
        if (tt < 0) {
            tt = 5
        }
        jV = true;
        var tx = dZ(ts + " .storeList table") + 60;
        $(ts).css({top: tt + "px", left: tv + "px", height: "1px", width: "200px", "background-color": "white"}).show();
        $(ts + " .closeIcon").css({left: "94px"});
        setTimeout(function () {
            var ty = dZ(ts + " .storeList table") + 100;
            $(ts).css({height: ty + "px"}).show();
            $("#waitingScreenText").hide()
        }, 10)
    }

    function pn() {
        $(pt(".autodataLogFaultCodes")).show();
        $("#partInfoPopupFullScreen, #partInfoPopup").hide();
        $(pt(".standardTree, .autodataLogBookTree, .autodataLogRepairTimes, .autodataLogFaultCodes .treePartGroup")).hide();
        var tt = $(pt(".autodataLogFaultCodes .autodataReturn"));
        var ts = tt.position().top;
        ts += ac(tt) * 1.5;
        $(".troubleCodeInput").css({top: ts + "px", position: "absolute"});
        $(".findLabel").css({left: "17px", top: (ts + 2) + "px",});
        $(".troubleCodeInput").css({left: "53px", width: "70px"});
        $(".faultSearch").css({top: (ts - 1) + "px", left: "127px"});
        ts += 20;
        rb($(pt(".autodataLogFaultCodes .treePartGroup")), ts + "px");
        fn(pt(".autodataLogFaultCodes .treePartGroup"));
        T()
    }

    function ke(tA, tw, tB, tz, ts, tv) {
        var tu = $(tw + " div.part_detail_price div.brand").text();
        var ty = "";
        var tD;
        var tE = $(tw + " div.FootNote").justText();
        var tt = $(tw + " span.Grade").text();
        if (!isEmpty(tt)) {
            tE = tE + "<span class='Grade'>" + tt + "</span>"
        }
        var tC = $(tw + " div.sku").text();
        var tx = $(tw + " div.skukey").text();
        nY(tw, tB, tu, ts, tA.pageY, tz, ty, tD, tE, tv, tC, tx);
        $(tw + " .addOrderQuantityInput").focus()
    }

    function co() {
        gn(false)
    }

    function gu() {
        mN();
        pS(false);
        if (ky()) {
            mD();
            return
        }
        gV(false)
    }

    function pg() {
        return on
    }

    function nO(tx) {
        var ts = $("#regoSaveState .states button").filter(function () {
            var ty = "rgb(173, 216, 230)";
            var tz = $(this).css("background-color");
            return (tz == ty)
        });
        if (dh(ts) || (ts.length < 1)) {
            alert("Please select a state");
            return false
        }
        lP = ts[0].value;
        lP = lP.trim();
        od("state", lP, a9);
        var tv = $("#registrationPlate").val();
        if (isEmpty(tv)) {
            alert("Please Enter Registration Plate");
            return false
        }
        var tu = $("#partInfoPopup div.vehicleId").text();
        var tw = ["guid=" + hJ, "vehicleId=" + f7(), "state=" + lP, "registrationPlate=" + tv, "aiu=" + q0, "cookie=" + _cookies];
        var tt = "/oscar/rsp" + getQueryPart(tw);
        sk(tt, function (ty) {
            if (ty.V === "ok") {
                aL()
            }
        }, [], true);
        return false
    }

    function a1(tt) {
        var ts = -1;
        tt.find("tr td.partImage").each(function (tu) {
            if (ts != -1) {
                return
            }
            if ($(this).hasClass("selected")) {
                ts = tu
            }
        });
        return ts
    }

    function bv(tu) {
        $("#regoSearchState").hide();
        tu.preventDefault();
        fC(jO);
        $("#tabs-vin-search .regoInput").focus();
        var tt = gt(tu);
        if (tt === h3) {
            tu.preventDefault();
            $("#tabs-catalog .regoInput").val("");
            $("#tabs-vin-search .regoInput").val();
            return
        }
        if (tt === rf) {
            a2();
            return
        }
        if (tt === my) {
            qz(true);
            return
        }
        var ts = dx(tt);
        if (ts[1]) {
            setTimeout(function () {
                var tv = $("#tabs-catalog .regoInput").val() + ts[0];
                $("#tabs-vin-search .regoInput").val(tv);
                s4(true, tv)
            }, 200)
        }
    }

    function m2(tw, tv) {
        var ts = {};
        for (var tu in tw) {
            ts[tu] = tw[tu]
        }
        for (var tt in tv) {
            ts[tt] = tv[tt]
        }
        return ts
    }

    function U(tu, tx, tt, tw, ts) {
        var tv = $(tu).first();
        tv.unbind("keyup").bind("keyup", function (ty) {
            sn(ty, tv, tx, tt, tw, ts, tu)
        });
        if (!o3) {
            tv.hide()
        }
    }

    function l0() {
        if (1 === g6) {
            bU($("#regoExtraInformation"), 94)
        } else {
            bU($("#regoExtraInformation"), 222)
        }
        $("#regoExtraInformation").show()
    }

    function A() {
        return cx === ph
    }

    function kR() {
        $("#regoSaveState").show()
    }

    function dc(tt) {
        var tu = jz(tt + " .tableSeriesChassis");
        var ts = tu.children("td.Series").text();
        if ("SHOW ALL" !== ts) {
            var tv = tu.children("td.Chassis").text();
            if ("." !== tv) {
                ts = joinArrToString([ts, "--", tv])
            }
        }
        return ts
    }

    function fJ(ts, tt) {
        return $(ts + " option").eq(tt).val()
    }

    function sg(ts) {
        fl = true;
        var tt = false;
        var tz = -1;
        if (!isEmpty($("#WidgetMake").val())) {
            tz = parseInt($("#WidgetMake").val());
            tt = (-1 != tz)
        }
        if (tt) {
            dL(ts + " #makeSelect", "Select Make", tz).change(function () {
                bo(ts, 0, "GetModelList", "#modelSelect")
            });
            var ty = parseInt($("#WidgetModel").val());
            j5.model = fJ(ts + " #modelSelect", ty);
            sL(ts, dL(ts + " #modelSelect", "Select Model", ty));
            var tv = parseInt($("#WidgetYear").val());
            j5.year = fJ(ts + " #yearSelect", tv);
            hl(ts, dL(ts + " #yearSelect", "Select Year", tv));
            var tx = parseInt($("#WidgetSeriesChassis").val());
            j5.seriesChassis = fJ(ts + " #seriesChassisSelect", tx);
            cw(ts, fd(ts + " #seriesChassisSelect", tx));
            var tw = parseInt($("#WidgetEngine").val());
            j5.engine = fJ(ts + " #engineSelect", tw);
            nP(ts, fd(ts + " #engineSelect", tw));
            var tu = parseInt($("#WidgetDetail").val());
            j5.detail = fJ(ts + " #detailSelect", tu);
            a5(fd(ts + " #detailSelect", tu))
        } else {
            fd(ts + " #makeSelect", "Select Make").change(function () {
                bo(ts, 0, "GetModelList", "#modelSelect")
            });
            oY(ts + " #modelSelect", "Select Model");
            oY(ts + " #yearSelect", "Select Year");
            oY(ts + " #seriesChassisSelect", "Select Series Chassis");
            oY(ts + " #engineSelect", "Select Engine");
            oY(ts + " #detailSelect", "Select Detail")
        }
        $("#FindPart").setupClick(j8);
        if (eQ()) {
            $("#FindPart").show()
        } else {
            $("#FindPart").hide()
        }
        $("html, body").height(80).width(720)
    }

    function cY() {
        if (nR($("#regoExtraInformation"))) {
            $("#regoExtraInformation").hide();
            return
        }
        l0()
    }

    function jv(ts) {
        return kk && checkIfTabsCatalog(ts)
    }

    function fN() {
        return fo && (!oE)
    }

    function mD() {
        s3();
        bV();
        var ts = "#tabs-vin-search .tableVinNumber";
        mn($(ts));
        refreshTabSettings(0, "#tabs-vin-search");
        clearTimeout(ly);
        ly = setTimeout(pK, 600);
        return false
    }

    function aZ() {
        var ts = $("#tabs-vin-search .vinNumberInput").val();
        if (hD === ts) {
            return false
        }
        lS();
        return false
    }

    function df() {
        if (j0) {
            j0 = false;
            l7 = undefined
        }
    }

    function ib() {
        $("table.history").hide();
        kh();
        kY();
        k3 = "";
        e8("vinRegoLastInput");
        q1();
        bG();
        G()
    }

    function lS() {
        kY();
        var ts = $("#tabs-vin-search .vinNumberInput").val();
        if (isEmpty(ts)) {
            hD = "";
            q1();
            ig();
            return
        }
        if (6 > ts.length) {
            hD = "";
            q1();
            alert("Please enter more than 5 characters to search.");
            ig();
            return
        }
        lv = "vin";
        hD = ts;
        var tu = $("#tabs-vin-search .tableVinNumber").show().dataTable();
        var tt = tu.fnSettings();
        tt.oLanguage.sEmptyTable = " ";
        tt.oFeatures.bServerSide = true;
        tt.sAjaxSource = lV();
        tu.fnDraw()
    }

    function b() {
        return !(bg() || dX() || f5())
    }

    function kh() {
        bZ();
        hD = "";
        e8("vin");
        $("#tabs-vin-search .vinNumberInput").val("")
    }

    function ta() {
        if (pZ()) {
            return true
        }
        return !q9()
    }

    function oO(ts) {
        if (isEmpty(ts)) {
            return false
        }
        return -1 !== ts.indexOf("connection expired")
    }

    function b5() {
        ae();
        L();
        var ts = "";
        li("#tabs-catalog", ts);
        jr("#tabs-vin-search");
        o3 = (!isEmpty(ts)) && (!startsWith(ts, "{#"));
        rN = rz("zone");
        if (isEmpty(rN)) {
            rN = r7
        }
        aw();
        m8();
        if (nD === kr) {
            h7 = $("#CategoryTreeDefaultPartgroup").val()
        }
        nW();
        var tt = $("#TaxRate").val();
        if (!isEmpty(tt)) {
            tn = parseFloat(tt) * 0.01 + 1
        }
        if (iz) {
            an = fE("#parturlpopupwidth");
            jY = fE("#parturlpopupheight")
        }
        iV()
    }

    function pK() {
        lS()
    }

    function lV() {
        var ts = pu();
        ts.push("&" + getParamsFromCheckboxes("&"));
        ts.push(se("&vin=", "#tabs-vin-search .vinNumberInput"));
        return "vv" + getQueryPart(ts)
    }

    function r2(tu, ts) {
        var tt = jQuery.Event("keydown");
        tt.which = ts;
        tt.keyCode = ts;
        tu.trigger(tt)
    }

    function qU(tx) {
        $("#regoSearchState").hide();
        var tu = true;
        var ts = $("#tabs-vin-search .vinNumberInput").val();
        var tv = lD(tx);
        var tw = tv[0];
        if (tw) {
            var tz = tv[1];
            return tz
        }
        var tt = tv[2];
        if (tt === dG) {
            tu = false;
            ts = d5(ts)
        }
        if (tt === rf) {
            gh(tx, ts);
            return
        }
        if (tt === h3) {
            ib();
            return
        }
        if (tt === jH) {
            var ty = J("table.history");
            if (ty) {
                s3()
            }
            return
        }
        if (tt === my) {
            qc(tx);
            return
        }
        if (tu) {
            ts = ts + tv[3]
        }
        if (isEmpty(ts)) {
            return
        }
        if (17 > ts.length) {
            s4(false, ts);
            return
        }
        if (hD === ts) {
            return
        }
        mD()
    }

    function jZ(tw, ts, tu) {
        var tx;
        if (tu) {
            tx = tw + " > li > ul > li:visible"
        } else {
            tx = tw + " tr:visible"
        }
        var tv = dr(tx, tu);
        var tt = $(tx).length;
        if (ts) {
            if (-1 === tv) {
                tv = 0
            } else {
                if ((tv + 1) === tt) {
                    return
                }
                tv++
            }
        } else {
            if (-1 === tv) {
                tv = 0
            } else {
                if (tv === 0) {
                    return
                }
                tv--
            }
        }
        if (tu) {
            $(tw + " > li > ul > li:visible > a.jstree-clicked").removeClass("jstree-clicked");
            $(tx).eq(tv).children("a").addClass("jstree-clicked")
        } else {
            $(tw + " tr.row_selected").removeClass("row_selected");
            $(tx).eq(tv).addClass("row_selected")
        }
    }

    function qZ(ts, tt) {
        var tu = $(ts + " " + tt + " tr.row_selected").first();
        nd(ts, tu)
    }

    function p9(ts) {
        $("#regoExtraInformation").hide()
    }

    function c1() {
        return "#tabs-part-info" === jm
    }

    function q1() {
        mn($("#tabs-vin-search .tableVinNumber"));
        $("#tabs-vin-search .tableVinNumber").hide();
        refreshTabSettings(0, "#tabs-vin-search");
        $("#tabs-vin-search div.divVinNumber").hide();
        dj(false)
    }

    function mg(ts, tt, tu) {
        fn(ts);
        $(ts).jstree("destroy");
        $(ts).empty().append(tt).promise().done(function () {
            tu();
            ng()
        })
    }

    function mh(tt, tv) {
        var tu = tt.split(",");
        var ts = [];
        tu.forEach(function (tw) {
            ts.push(tv + " " + tw)
        });
        return ts.join()
    }

    function pt(ts) {
        return mh(ts, jm)
    }

    function jr(ts) {
        var tt = l4(ts);
        var tu = nS[tt];
        if (isEmpty(tu)) {
            return
        }
        li(ts, tu)
    }

    var qH;

    function nh() {
        clearTimeout(qH);
        qH = setTimeout(function () {
            var tt = l4(jm);
            var tu = tt + ".standardTree.searchTree.codeInput";
            var ts = $(jm + " .standardTree .searchTree .codeInput").val();
            nS[tu] = ts;
            od(tu, ts, a9);
            iQ("#tabs-catalog", kz(jm + " .tableDetail"), ts)
        }, 600)
    }

    function hO() {
        bV();
        var ts = "#tabs-vin-search .tableVinNumber";
        mn($(ts));
        refreshTabSettings(0, "#tabs-vin-search");
        if (pJ()) {
            $("#regoSearchState").show()
        } else {
            clearTimeout(ly);
            ly = setTimeout(pr, 600)
        }
        return false
    }

    function pr() {
        nJ()
    }

    function ie(ts) {
        var tt = ts + " .tableDetail";
        h2(tt, ot, function () {
            sK();
            ja(tt);
            var tu = go(tt);
            if (1 != tu) {
                return
            }
            kW(tt);
            gV(false);
            $(ts + " .detailInput").blur()
        }, function (tu) {
            kl(tt, tu)
        }, function () {
            gV(true)
        }, "")
    }

    function nJ() {
        var ts = oz();
        if (ts === "invalid") {
            alert("Please select a state");
            return
        }
        kh();
        var tt = $("#tabs-vin-search .regoInput").val();
        if (isEmpty(tt)) {
            n2 = "";
            q1();
            ig();
            return
        }
        lT(tt, ts)
    }

    function lT(tv, tu) {
        lv = "rego";
        bV();
        n2 = tv;
        hz = tu;
        var tt = $("#tabs-vin-search .tableVinNumber").show().dataTable();
        var ts = tt.fnSettings();
        ts.oLanguage.sEmptyTable = " ";
        ts.oFeatures.bServerSide = true;
        ts.sAjaxSource = e7(tu);
        tt.fnDraw()
    }

    function e7(tt) {
        var ts = pu();
        ts.push("&" + getParamsFromCheckboxes("&"));
        ts.push(se("&rego=", "#tabs-vin-search .regoInput"));
        if (!isEmpty(tt)) {
            ts.push("&state=" + tt)
        }
        return "vv" + getQueryPart(ts)
    }

    function rY() {
        if (("#tabs-catalog" === jm) || ("#tabs-vin-search" === jm)) {
            return (nD === kr) && ("0" === h7)
        }
        if (("#tabs-tractor" === jm) || ("#tabs-marine" === jm) || ("#tabs-engine" === jm)) {
            return (nD === s1)
        }
        if ("#tabs-motorbike" === jm) {
            return (nD === oN)
        }
        return false
    }

    function rP() {
        var ts = 0;
        if (il) {
            ts += 18
        }
        var tt = false;
        if (s0()) {
            tt = true;
            ts += dZ(pt(".autodataLogBook .autodataLogBookButton"))
        }
        if (rA()) {
            tt = true;
            ts += dZ(pt(".autodataLogBook .autodataRepair"))
        }
        if (le()) {
        }
        if (tt) {
            ts += dZ(pt(".autodataLogBook .autodataReturn"));
            ts += dZ(pt(".autodataLogBook .poweredByAutoData"));
            if (J(pt(".autodataLogBookTree"))) {
                ts = dZ(pt(".autodataLogBookTree")) + $(pt(".autodataLogBookTree")).position().top
            }
        }
        return ts
    }

    function pD(tt, tu, ts) {
        if (null === tt) {
            jJ().empty();
            return
        }
        if (kP(si)) {
            jJ().jstree(true).destroy()
        }
        m3(jJ(), tt.V, function () {
            aS(jm, tu, ts)
        })
    }

    function gJ(ts) {
        var tt = ts + " .tableModel";
        h2(tt, ot, function () {
            fp(ts, tt)
        }, function (tu) {
            kl(ts + " .tableModel", tu)
        }, function () {
            $(ts + " .yearInput").show();
            return iv(ts, 1, "GetSubModelList", ts + " .tableSubModel")
        }, ts + " .yearInput")
    }

    function sP(tt, tu, ts) {
        if (!gf(tt)) {
            return
        }
        rb(tt, tu);
        iS(tt, ts)
    }

    function cV() {
        top.location.href = "http://autoinfo.com.au/testcatalogue_automotive.htm"
    }

    function o4(ts) {
        if (!checkIfTabsCatalog(ts) && ("#tabs-vin-search" !== ts)) {
            return false
        }
        return oS(ts) && ("0" !== h7)
    }

    function td(tt) {
        var ts = nr();
        ts.push("&value=" + encodeQuery(tt));
        ts.push("&guid=" + hJ);
        return "/oscar/st" + getQueryPart(ts)
    }

    function ky() {
        return "#tabs-vin-search" == jm
    }

    function l2() {
        var tu = f2.split(",");
        var tv = {};
        for (var ts = 0; ts < tu.length; ts++) {
            var tt = tu[ts];
            if (isEmpty(tt)) {
                continue
            }
            tt = tt.trim();
            if (isEmpty(tt)) {
                continue
            }
            tv[tt] = 1
        }
        return tv
    }

    function ij() {
        return cP === ph
    }

    function iu(tv) {
        var tu = bg() || fR() || cu() || dX();
        var tt = bn() || cJ() || sy() || tu;
        var ts = [];
        if (tt) {
            ts.push("<span>")
        }
        ts.push('<font size="2"><b>');
        if (g1()) {
            ts.push("<span class='ToBeUpdated' data-id='");
            ts.push(tv);
            ts.push("'>...</span>")
        } else {
            ts.push("POA")
        }
        ts.push("</b></font>");
        if (tt) {
            if (!tu) {
                ts.push('&nbsp;<font class="priceEach">Each</font>')
            }
            ts.push("</span>")
        }
        return joinArrToString(ts)
    }

    function kY() {
        bZ();
        n2 = "";
        e8("rego");
        $("#tabs-vin-search .regoInput").val("");
        if (pj()) {
            $("#license_plate_state").text("NZ")
        } else {
            $("#license_plate_state").text("")
        }
    }

    function rS(ts) {
        var tt = ru(ts);
        if (!tt) {
            n0(ts)
        }
        U(ts + " .makeInput", ts + " .tableMakeDiv", tt, 0, ts);
        gJ(ts);
        aD(ts);
        cL(ts);
        aF(ts);
        aq(ts);
        ie(ts);
        U(ts + " .modelInput", ts + " .tableModelDiv", false, 1, ts);
        U(ts + " .yearInput", ts + " .tableYearDiv", false, 3, ts);
        U(ts + " .seriesInput", ts + " .tableSeriesChassisDiv", false, 4, ts);
        U(ts + " .engineInput", ts + " .tableEngineDiv", false, 5, ts);
        U(ts + " .detailInput", ts + " .tableDetailDiv", false, 6, ts);
        $(ts + " .makeInput").first().show()
    }

    function jF() {
        if (f5()) {
            $(".tablePart td.partPcq").css({"vertical-align": "top"})
        }
        if (he()) {
            $(".tablePart td.partBursonQty .partBursonQtyValue, .tablePart td.partBursonQty .partBursonElseQtyValue, .tablePart td.partBursonQty .partBursonTotalQtyValue").css({width: "27px"})
        } else {
            if (aa() || fM() || f5() || d1()) {
                $(".tablePart td.partPcq .partBursonQtyValue, .tablePart td.partBursonQty .partBursonQtyValue").css({width: "27px"})
            }
            if (f0() || sz()) {
                $(".tablePart td.partPcq .partBursonQtyValue, .tablePart td.partBursonQty .partBursonQtyValue, .tablePart td.partBursonQty .partBursonElseQtyValue").css({width: "40px"})
            }
        }
        if (k4()) {
            $(".tablePart td.partPcq .partBursonQtyValue, .tablePart td.partBursonQty .partBursonQtyValue").css({
                width: "70px",
                top: "11px"
            })
        }
        if (hj) {
            $(jm + " .partBursonElseQtyValue").css({cursor: "pointer"}).setupClick(function (tw) {
                var tt = $(this);
                var tv = tt.closest("tr").find("> td.partNumber").first();
                var ts = sw(tv);
                var tu = tv.data("category");
                qs(tw.pageX, tw.pageY, tt.data("part-id"), tu, ts, 0)
            });
            $(jm + " .partBursonTotalQtyValue").css({cursor: "pointer"}).setupClick(function (tw) {
                var tt = $(this);
                var tv = tt.closest("tr").find("> td.partNumber").first();
                var ts = sw(tv);
                var tu = tv.data("category");
                qs(tw.pageX, tw.pageY, tt.data("part-id"), tu, ts, 1)
            })
        }
    }

    function j4(ts, tt) {
        if (tt) {
            if (qJ === kr) {
                if (!rw(gd())) {
                    return
                }
            }
        }
        g3(ts);
        if (!cT) {
            iK()
        }
        k0.show()
    }

    function hS() {
        if (!fV()) {
            return false
        }
        return J(pt(".autodataLogFaultCodes"))
    }

    function aK() {
        return km() && mH()
    }

    function lu() {
        $("#regoSaveState .states button").setupClick(function (tt) {
            aQ();
            var ts = $(this);
            ts.css({"background-color": "lightblue"})
        });
        $("#regoSaveState .SavePlate").setupClick(nO);
        $("#regoSaveState .close").setupClick(aL);
        $(".regoSaveButton").setupClick(kR).hide()
    }

    function u() {
        return (0 < aE)
    }

    function el() {
        $("body").on("contextmenu", "img", function (ts) {
            return false
        })
    }

    function qs(tv, tu, tz, tx, tw, ts) {
        $("#waitingScreenText p").text("Retrieving Stock");
        $("#waitingScreenText").css({
            top: tu + "px",
            left: (tv - 350) + "px",
            width: "200px",
            "background-color": "white"
        }).show();
        tx = tx.replace("&", "||||||||");
        var ty = nr();
        ty.push("&partId=" + tz);
        ty.push("&guid=" + hJ);
        ty.push("&c=" + kw);
        ty.push("&et=" + o8);
        ty.push("&ci=" + a3);
        ty.push("&category=" + tx);
        ty.push("&partNumber=" + tw);
        ty.push("&location=" + ts);
        var tt = "/oscar/es" + getQueryPart(ty);
        $.get(tt, function (tA) {
            jd(tv, tu, tA)
        })
    }

    function qv() {
        refreshTabSettings(0, "#tabs-advanced-search");
        x(0, null);
        ek(false)
    }

    function bG() {
        kh();
        kY();
        lS();
        refreshTabSettings(0, "#tabs-vin-search");
        dj(false)
    }

    function rh() {
        if (cT) {
            if (hN) {
                return document.getElementById("wrapper")
            } else {
                return $("html,body")
            }
        }
        return $(jm + " .tablePartSection")
    }

    function bP() {
        $(".ShowImageListMainImage").attr("src", "")
    }

    function mf() {
        var tt = $(this);
        var ts = tt.attr("reference");
        hh(ts)
    }

    function nF(tt, tv, tu, ts) {
        return ""
    }

    function q2(tt) {
        var ts = document.createElement("input");
        document.body.appendChild(ts);
        ts.setAttribute("value", tt);
        ts.select();
        document.execCommand("copy");
        document.body.removeChild(ts)
    }

    function eR(tx) {
        $("#regoSearchState").hide();
        if (!pj()) {
            $("#license_plate_state").text("")
        }
        $("#tabs-vin-search .regoButtonDetail").hide();
        $("#regoExtraInformation").hide();
        aH();
        var tz = J("table.history");
        var tt = true;
        var tw = $("#tabs-vin-search .regoInput").val();
        var tu = lD(tx);
        var tv = tu[0];
        if (tv) {
            var ty = tu[1];
            return ty
        }
        var ts = tu[2];
        if (ts === dG) {
            tt = false;
            tw = d5(tw)
        }
        if (ts === jH) {
            if (tz) {
                s3()
            }
            return true
        }
        if (ts === my) {
            qz(true);
            return true
        }
        if (ts === rf) {
            q1();
            $("table.history").hide();
            if (isEmpty(tw)) {
                return true
            }
            if (fO === 1) {
                if (n2 === tw) {
                    return true
                }
            }
            if ((fO === 2) || (fO === 3)) {
                hZ()
            } else {
                hO()
            }
            return true
        }
        if (ts === h3) {
            ix();
            return
        }
        if (tt) {
            tw = tw + tu[3]
        }
        if (isEmpty(tw)) {
            if (tz) {
                s3()
            }
            return
        }
        s4(true, tw)
    }

    function hn() {
        if (!rw(jm + " .tablePartDimension")) {
            return
        }
        mn($(jm + " .tablePartDimension"));
        $(jm + " .partDimension").hide()
    }

    function ii() {
        if (oE) {
            mn($(jm + " .tablePartTechnicalNoteList"));
            $(jm + " .tablePartTechnicalNoteListDiv").hide()
        }
    }

    function lo(tt, ts) {
        if (c6) {
            if ("1" === tt) {
                return ""
            }
            return joinArrToString(['<p class="pcqValue" id="', ts, '" >', tt, " req</p>"])
        }
        return joinArrToString(['<div class="addOrderQuantity"><font color="black" class="qtyLabel">', m5, '&nbsp;</font><input class="addOrderQuantityInput" type="text" id="', ts, '" value="', tt, '" maxlength="2" /></div>&nbsp;'])
    }

    function gi(tt, ts) {
        var tu = tl;
        if (rw(".logoImageCustomerSection")) {
            tu += $(".logoImageCustomerSection img").height()
        }
        if (rw(jm + " div.qr")) {
            tu = sM(jm + " div.qr", tu);
            tu += 19
        }
        if (ts) {
            tu = sM(tt + " .autodataLogBookButton", tu);
            tu = sM(tt + " .autodataRepair", tu);
            tu = sM(tt + " .autodataFault", tu)
        }
        tu = sM(tt + " .showLubeCheck", tu);
        if (ts) {
            tu = sM(tt + " .autodataReturn", tu)
        }
        return tu
    }

    function k5(tv, tu, tt) {
        sH = "";
        if (tt) {
            $(".partSection").appendTo($(tv))
        }
        var ts = true;
        oe(tv);
        if (checkIfTabsCatalog(tv)) {
            iJ = cx;
            if (!tu) {
                jy(tv + " .tableMake", buildRelativeQuery(tv, "GetMakeList"))
            }
            $(tv + " .makeInput").focus()
        } else {
            if ("#tabs-tractor" === tv) {
                iJ = cP;
                ts = isEmpty(kd)
            } else {
                if ("#tabs-motorbike" === tv) {
                    iJ = W;
                    ts = isEmpty(oD)
                } else {
                    if ("#tabs-marine" === tv) {
                        iJ = qY;
                        ts = isEmpty(jL)
                    }
                }
            }
        }
        if (tt) {
            ek(false)
        }
        if (checkIfTabsCatalog(tv)) {
            if (mF) {
                eV(tv, $("#logoImageCustomer").val(), $("#logoImageCustomerWidth").val(), $("#logoImageCustomerHeight").val())
            }
        } else {
            if (mF) {
                eV(tv, $("#logoImageCustomer2").val(), $("#logoImageCustomerWidth2").val(), $("#logoImageCustomerHeight2").val())
            }
        }
        if (hu()) {
            if (ts) {
                refreshTabSettings(0, tv)
            } else {
                gV(false)
            }
        } else {
            n3(jm, p5(), false)
        }
    }

    function gN() {
    }

    function dV(ts) {
        return (13 === ts) || (40 === ts) || (38 === ts)
    }

    function kK() {
        nt = -1
    }

    function j6() {
        hn();
        ii();
        $(jm + " .partImage").remove();
        $(".partClickImageForLagerViewLabel,.partNumberLabel,.MoreInfo, .holdPartForComparisonFormDiv").hide();
        $(jm + " .formNotes").hide();
        $(jm + " #formVendor").hide()
    }

    function lE() {
        $(".searchTree .find").removeAttr("style")
    }

    function d2() {
        var ts = "#tabs-shoppingCart .tableShoppingCart";
        mn($(ts));
        var tu = $(ts).dataTable();
        var tt = tu.fnSettings();
        tt.oLanguage.sEmptyTable = "NO ITEMS FOUND";
        tt.oFeatures.bServerSide = true;
        tt.sAjaxSource = "sc";
        tu.fnDraw()
    }

    function h9(ts, tu, tv, tt) {
        ef = tv;
        tt.jqXHR = sk(ts, sb, tu, true)
    }

    function qQ(ts) {
        ig();
        if (jq(ts)) {
            setTimeout(function () {
                alert("Cannot find any result.")
            }, 100);
            return
        }
        if (typeof (ts.aaData) !== "undefined") {
            var tt = ts.aaData[0];
            if (!isEmpty(tt)) {
                if (-1 !== tt.indexOf("Error:")) {
                    if (oO(tt)) {
                        em("refreshBrowser");
                        return
                    }
                    setTimeout(function () {
                        alert(tt)
                    }, 100);
                    return
                }
            }
        }
        if (0 === ts.iTotalRecords) {
            setTimeout(function () {
                if (lv === "rego") {
                    alert("No results found for REGO Plate/State combination.")
                } else {
                    alert("Cannot find any result.")
                }
            }, 100);
            return
        }
        if (lv === "rego") {
            dw(hz, n2)
        } else {
            if (lv === "vin") {
                be(hD)
            }
        }
        ms = false;
        if (typeof (ts.xml) !== "undefined") {
            ms = true;
            if (!ld(ts.xml)) {
                ms = false
            }
        }
        if (ms) {
            if ((1 < ts.iTotalRecords) && gC()) {
                $("#regoExtraInformation .savePlate").show()
            } else {
                $("#regoExtraInformation .savePlate").hide()
            }
            $("#tabs-vin-search .regoButtonDetail").show()
        } else {
            $("#tabs-vin-search .regoButtonDetail").hide()
        }
        j(ts);
        iI()
    }

    function go(ts) {
        return $(ts + " tbody tr").length
    }

    function dj(tt) {
        var ts = qb();
        if (tt) {
            ic(ts, ev(), oG(), ao)
        } else {
            rb(ts, ev());
            iS(ts, oG());
            ao()
        }
    }

    function rn() {
        if (!j1()) {
            return
        }
        eO();
        em("hideAutoinfoWaitingLogo");
        var tu = h6.length;
        var tt = nw.length;
        for (var tw = 0; tw < tu; tw++) {
            var tv = h6[tw];
            if (!aC(tv)) {
                continue
            }
            for (var ts = 0; ts < tt; ts++) {
                dz(tv, nw[ts], ru(tv))
            }
        }
    }

    function cI() {
        if (!q6["#tabs-tractor"]) {
            return
        }
        rS("#tabs-tractor");
        kd = $("#tabs-tractor .jstree_demo_div li a.jstree-clicked").text();
        ca("#tabs-tractor", function (ts) {
            kd = ts
        });
        $("#tabs-tractor .makeInput").width(209);
        $("#tabs-tractor .tableModelDiv").height(210);
        $("#tabs-tractor .detailInput").width(102);
        mi("#tabs-tractor")
    }

    function fx(ts, tu) {
        var tt = $(ts + " .partSection");
        if (tu) {
            ic(tt, mt(), gG(), bY)
        } else {
            rb(tt, mt());
            iS(tt, gG());
            ln(ts)
        }
    }

    function ek(ts) {
        fx(jm, ts)
    }

    function g7() {
        return $("#tabs-catalog .partSection")
    }

    function bE() {
        return m0() || rA() || le()
    }

    function qb() {
        return $(jm + " .partSection")
    }

    function ic(tt, ts, tu, tv) {
        if (!gf(tt)) {
            return
        }
        tv();
        iS(tt, tu);
        tt.animate({top: ts + "px"}, ee)
    }

    function d4(tu, tt, tw, tv, ts) {
        if (13 === tv) {
            pB(tu, tt, tw, tv, ts);
            return
        }
        if (40 === tv) {
            tt.preventDefault();
            jZ(tw, true, ts);
            return
        }
        if (38 === tv) {
            tt.preventDefault();
            jZ(tw, false, ts);
            return
        }
    }

    function r9(ts, tt) {
        iS(ts, tt)
    }

    function fd(tt, tv) {
        var ts = $(tt);
        var tu = ts.selectBoxIt({defaultText: tv, autoWidth: false});
        ts.val(tv);
        return tu
    }

    function dL(tu, tw, tt) {
        var ts = $(tu);
        var tv = ts.selectBoxIt({defaultText: tw, autoWidth: false});
        dv(tv).selectOption(tt);
        return tv
    }

    function oY(ts, tu) {
        var tt = $(ts).selectBoxIt({defaultText: tu, autoWidth: false, populate: [tu]});
        return tt
    }

    function pP(ts) {
        return (sZ[ts] === 1)
    }

    function rq(ts, tt) {
        if (tt == "#makeSelect") {
            return fd(ts + " " + tt, "Select Make")
        }
        if (tt == "#modelSelect") {
            return fd(ts + " " + tt, "Select Model")
        }
        if (tt == "#yearSelect") {
            return fd(ts + " #yearSelect", "Select Year")
        }
        if (tt == "#seriesChassisSelect") {
            return fd(ts + " #seriesChassisSelect", "Select Series Chassis")
        }
        if (tt == "#engineSelect") {
            return fd(ts + " #engineSelect", "Select Engine")
        }
        if (tt == "#detailSelect") {
            return fd(ts + " #detailSelect", "Select Detail")
        }
    }

    function fD(tF, tu, tv, tt, tC, tE, tB, ty, tz, tw, tA, tx) {
        hp(tC - 100);
        var tD = "aPartId=" + tu + "&d=" + f7() + "&aQuantity=" + tB + "&c=" + kw + "&partName=" + tv + " " + tt + "&et=" + o8 + "&ci=" + a3 + "&p=" + cM + "&aiu=" + q0 + "&subcat=" + tt + "&footNote=" + tz + "&cookie=" + _cookies;
        if (c0) {
            if (isEmpty(oy)) {
                kg();
                alert("Please refresh the browser. Missing supercheap cookie.");
                return
            }
            tD += ("&supercheapcookie=" + oy)
        }
        var ts = "ShoppingCart/AddOrderLine";
        if ((!nG) || ty) {
            if (ty) {
                tD = tD + "&statics=2"
            } else {
                if (!nG) {
                    tD = tD + "&statics=0"
                }
            }
            ts = ts + prepareQueryPart(tD);
            $.getJSON(ts).done(function (tG) {
                nU(tG, ty)
            }).fail(function (tI, tJ, tG) {
                kg();
                if (oO(tJ) || oO(tG)) {
                    em("refreshBrowser");
                    return
                }
                var tH = tJ + ", " + tG;
                alert("Request Failed: " + tH)
            });
            return
        }
        tD = tD + "&statics=1";
        ts = ts + prepareQueryPart(tD);
        $.getJSON(ts).done(function (tG) {
            dd(tE, tB, tv, tt, tu, tw, tA, tx);
            kg()
        }).fail(function (tI, tJ, tG) {
            kg();
            if (oO(tJ) || oO(tG)) {
                em("refreshBrowser");
                return
            }
            var tH = tJ + ", " + tG;
            alert("Request Failed: " + tH)
        })
    }

    function pT() {
        if (!cT) {
            return
        }
        if (oE) {
            gy = mZ(jm + " .partImageSection") + 6
        } else {
            var tu = 60;
            var tt = oi(jm, false);
            if (0 > tt) {
                tt = 0
            }
            var ts = pI + 40;
            $(".partNumberSearch .partNumberVehicleTableSection").css({top: ts + "px"});
            $(".partNumberSearch .vehicleFitment").css({top: (ts - 10) + "px"});
            gy = tu + pI + tt + 120;
            if (gy < ff) {
                gy = ff
            }
        }
        ml(gy, false, gy)
    }

    function m9(selector, tA, responseArr, method) {
        var tH = kt(responseArr);
        if (null === tH) {
            return
        }
        var tD = dv(tA);
        var tC = [];
        var tv = tH.aaData.length;
        var tB = 0;
        for (var ty = 0; ty < tv; ty++) {
            value = tH.aaData[ty];
            var tt;
            var tG;
            if ("GetYearList" == method) {
                tG = value[1];
                tt = value[1]
            } else {
                if ("GetSeriesChassisList" == method) {
                    if (isEmpty(value[1]) || ("." == value[1])) {
                        tt = value[0]
                    } else {
                        tt = value[0] + "--" + value[1]
                    }
                    tG = tt
                } else {
                    tG = value[0];
                    tt = value[1].replace(/&nbsp;/g, " ")
                }
            }
            var tx = {value: tG, text: tt};
            if (hN) {
                tC.push(tx)
            }
            tD.add(tx);
            tB++
        }
        if (hN) {
            var ts = selector.replace("#", "");
            var tF = {id: ts, defaultText: tD.options.defaultText, optionList: tC, selectedValue: ""};
            var tE = JSON.stringify(tF);
            mR(tE)
        }
        return tB
    }

    function mu(tv, ts) {
        var tu = $(ts + " .vinSearch .regoInput").val();
        if (isEmpty(tu)) {
            return tv
        }
        tv.rego = tu;
        var tt = cl(ts);
        tv.regoVehicleId = tt;
        if (!pJ()) {
            return eU(tv, ts)
        }
        if (isEmpty(lP)) {
            return eU(tv, ts)
        }
        tv.state = lP;
        return eU(tv, ts)
    }

    function gW() {
        $(".searchTree .codeInput").val("");
        nh();
        return false
    }

    function g2() {
        if (!fV()) {
            return false
        }
        return J(pt(".autodataLogRepairTimes"))
    }

    function sL(ts, tt) {
        if (!N.modelSelectChanged) {
            N.modelSelectChanged = true;
            tt.change(function (tu) {
                j5.model = $(this).val();
                bo(ts, 2, "GetYearList", "#yearSelect")
            })
        }
    }

    function hl(ts, tt) {
        if (!N.yearSelectChanged) {
            N.yearSelectChanged = true;
            tt.change(function (tu) {
                j5.year = $(this).val();
                bo(ts, 3, "GetSeriesChassisList", "#seriesChassisSelect")
            })
        }
    }

    function cw(ts, tt) {
        if (!N.seriesChassisSelectChanged) {
            N.seriesChassisSelectChanged = true;
            tt.change(function (tu) {
                j5.seriesChassis = $(this).val();
                bo(ts, 4, "GetEngineList", "#engineSelect")
            })
        }
    }

    function nP(ts, tt) {
        if (!N.engineSelectChanged) {
            N.engineSelectChanged = true;
            $("#engineSelectSelectBoxItText").css("max-width", "");
            tt.change(function (tu) {
                j5.engine = $(this).val();
                bo(ts, 5, "GetDetailList", "#detailSelect")
            })
        }
    }

    function a5(ts) {
        if (!N.detailSelectChanged) {
            N.detailSelectChanged = true;
            $("#detailSelectSelectBoxItText").css("max-width", "");
            ts.change(function (tt) {
                j5.detail = $(this).val();
                qK()
            })
        }
    }

    N.modelSelectChanged = false;
    N.yearSelectChanged = false;
    N.seriesChassisSelectChanged = false;
    N.engineSelectChanged = false;
    N.detailSelectChanged = false;

    function N(tabId, selector, responseArr, method) {
        var ty = rq(tabId, selector);
        var tx = dv(ty);
        var tt = m9(selector, ty, responseArr, method);
        if (selector == "#modelSelect") {
            sL(tabId, ty);
            if (1 == tt) {
                tx.selectOption(0)
            }
        }
        if (selector == "#yearSelect") {
            hl(tabId, ty);
            if (2 == tt) {
                tx.selectOption(0)
            }
        }
        if (selector == "#seriesChassisSelect") {
            cw(tabId, ty);
            if (2 == tt) {
                tx.selectOption(0)
            }
        }
        if (selector == "#engineSelect") {
            nP(tabId, ty);
            if (1 == tt) {
                tx.selectOption(0)
            }
        }
        if (selector == "#detailSelect") {
            a5(ty);
            if (1 == tt) {
                tx.selectOption(0)
            }
        }
        qK()
    }

    function qK() {
        var ts = $("#FindPart");
        var tt = $("#FindPartDiv");
        lK.working = eQ();
        if (lK.working) {
            ts.show()
        } else {
            ts.hide()
        }
    }

    function ni(ts, tu) {
        var tt = tu.parents();
        ts.find("li.jstree-open").each(function () {
            var tv = $(this).attr("id");
            if (!tt.is("#" + tv)) {
                ts.jstree("close_node", "#" + tv)
            }
        })
    }

    function ft() {
        var ts = "#partInfoPopup";
        $("#partInfoPopup .part_detail_category").css({width: "929px"});
        $("#partInfoPopup .closeIcon").css({left: "830px"});
        $(".closeIcon").setupClick(mw);
        nx(ts);
        $(".closeIcon").text(tc);
        $(ts).css({height: nZ() + "px", width: "935px", left: "0"});
        $("#variantList li").setupClick(p0)
    }

    function p0(tv) {
        var tw = $(this).attr("id");
        if (isEmpty(tw)) {
            alert("midCodeListLiRepairTimesClick idCsv is empty");
            return
        }
        var ts = tw.split(",");
        if (2 != ts.length) {
            alert("midCodeListLiRepairTimesClick invalid idCsv=" + tw);
            return
        }
        var tt = ts[0];
        var tu = ts[1];
        ou(tt, tu)
    }

    function p(tt) {
        var ts = h6.length;
        for (var tu = 0; tu < ts; tu++) {
            if (tt === h6[tu]) {
                return true
            }
        }
        return false
    }

    function ou(tt, tu) {
        var tv = oP();
        tv.push("&midCode=" + tt);
        tv.push("&scheduleId=" + tu);
        var ts = "lbr.html" + getQueryPart(tv);
        sk(ts, lY, [], true)
    }

    function cd(ty, tt, tv) {
        var tz = ty.first();
        var ts = tt.parent().height();
        var tx = tz.height();
        var tu = tz.position().top;
        var tw = tv.scrollTop();
        if ((tu + tx) < tw) {
            tv.scrollTop(tu);
            return
        }
        if (tu > (tw + ts)) {
            tv.scrollTop(tu);
            return
        }
    }

    function kz(ts) {
        return jz(ts).children("td").attr("id")
    }

    function na() {
        var ts = "#partInfoPopup";
        $("#partInfoPopup .part_detail_category").css({width: "929px"});
        $("#partInfoPopup .closeIcon").css({left: "830px"});
        $(".closeIcon").setupClick(mw);
        nx(ts);
        $(".closeIcon").text(tc);
        $(ts).css({height: nZ() + "px", width: "935px", left: "0"});
        $("#variantList li").setupClick(or)
    }

    function j8() {
        if (!eQ()) {
            return
        }
        var tv = {};
        tv = hK(tv, "#vehicleSelector");
        var tt = rk(tv);
        tt = tt.replace(/#vehicleSelector/g, "#tabs-catalog");
        var ts = "," + tt + ",cookie=" + _cookies;
        if (!dh(mz)) {
            ts = ts + ",parentGroupId=" + mz
        }
        if (!dh(mO)) {
            ts = ts + ",subGroupId=" + mO
        }
        var tu = "a" + getQueryPart(["&0=findPart&p=", "scriptVersion=", mP, ts]);
        $.getJSON(tu, function (tw) {
            var tx = tw.a;
            if (!isEmpty(tx)) {
                oR = tx;
                od("page", tx, a9);
                cV()
            }
        })
    }

    function st(ts) {
        fQ(false, ts)
    }

    function gI(tt) {
        if (isEmpty(tt)) {
            return ""
        }
        var ts = tt.indexOf("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        if (-1 === ts) {
            return tt
        }
        return tt.substring(0, ts)
    }

    function fc(ts) {
        var tu = false;
        var tt = n6();
        if (m0()) {
            tt += 18;
            tu = true
        }
        if (rA()) {
            tt += 18;
            tu = true
        }
        if (le()) {
            tt += 18;
            tu = true
        }
        if (tu) {
            if (ts) {
                tt += 18
            }
            tt += 18
        }
        if (hS()) {
            tt += 20
        }
        if (gU) {
            tt += 24
        }
        return tt
    }

    function Y() {
        if (fR() || cu()) {
            return gD()
        }
        return ez() + gD()
    }

    function al(ts) {
        if (!j2()) {
            return
        }
        st(false)
    }

    function la(tt) {
        var tu = $(this).attr("id");
        if (isEmpty(tu)) {
            alert("midCodeListLiFaultCodeClick idCsv is empty");
            return
        }
        var ts = tu.split(",");
        if (2 != ts.length) {
            alert("midCodeListLiFaultCodeClick invalid idCsv=" + tu);
            return
        }
        fU = ts[0];
        p4 = ts[1];
        pn()
    }

    function ak() {
        if (!p(jm)) {
            return
        }
        setTimeout(oV, 300)
    }

    function dN() {
        return J("#partInfoPopupFullScreen")
    }

    function ja(ts) {
        $(ts).on("click", "tbody tr font", function (tt) {
            pH(ts, tt.target.parentNode.parentNode)
        })
    }

    function y() {
        if (rw("#ShowQrCode")) {
            $("button.qr").show().setupClick(D);
            $("button.qr1").show().setupClick(e);
            $(".closeIconQr").setupClick(rZ)
        } else {
            $("button.qr, button.qr1").hide()
        }
    }

    function s5() {
        $("#vehicleTitle").text("");
        bZ();
        pG();
        $(".addToGarageButton, .regoSaveButton").hide();
        lE();
        G()
    }

    function mZ(ts) {
        if (!rw(ts)) {
            return 0
        }
        return dZ(ts) + $(ts).position().top
    }

    function kS() {
        var ts = "#partInfoPopup";
        $("#partInfoPopup .part_detail_category").css({width: "929px"});
        $("#partInfoPopup .closeIcon").css({left: "830px"});
        $(".closeIcon").setupClick(mw);
        nx(ts);
        $(".closeIcon").text(tc);
        $(ts).css({height: nZ() + "px", width: "935px", left: "0"});
        $("#variantList li").setupClick(la)
    }

    function sa() {
        if (q9()) {
            if (p8) {
                if (sz()) {
                    if (g9()) {
                        return "270px"
                    }
                    if (aa() || fM()) {
                        return "350px"
                    }
                    if (0 === aE) {
                        return "435px"
                    }
                    return "365px"
                }
                return "380px"
            }
            if (sz() || oh()) {
                return "420px"
            }
            return "270px"
        }
        if (0 === aE) {
            if ((!gv()) && oh()) {
                return "565px"
            }
            if (p8) {
                if (oh()) {
                    return "470px"
                }
                return "374px"
            }
            if (oh()) {
                return "525px"
            }
            return "360px"
        }
        if (2 === aE) {
            if (gv()) {
                if (lh()) {
                    if (p8) {
                        return "380px"
                    }
                    return "440px"
                }
                return "380px"
            }
            if (oh()) {
                if (p8) {
                    if (kJ) {
                        if (cu()) {
                            return "337px"
                        }
                        return "400px"
                    }
                    return "493px"
                }
                return "400px"
            }
            if (p8) {
                return "270px"
            }
            return "270px"
        }
        return ""
    }

    function cq() {
        if (!cT) {
            return pX()
        }
        if (g2()) {
            return jc() - fw()
        }
        if (0 === gy) {
            return pX()
        }
        if ((pY === gy) || (487 === gy)) {
            return pX()
        }
        var ts = d(gy);
        var tt = rP();
        if (tt >= ts) {
            return tt
        }
        return ts
    }

    function py(tt, ts) {
        var tu = $(ts + " .partNumberInput").val().trim();
        if (isEmpty(tu)) {
            dU();
            if (tt) {
                pL = ""
            } else {
                so = ""
            }
            return
        }
        var tx;
        var tw = "pp";
        if (oE) {
            lJ(tu);
            if (startsWith(tu.toLowerCase(), "tsb-")) {
                dU();
                $(ts + " .tablePartSection").hide();
                $(ts + " .partImageSection").show().css({top: "53px", width: "940px", left: "2px"});
                $(ts + " .partTechnicalNoteListSingle").show();
                tx = nr();
                tx.push("&aiu=" + q0);
                tx.push("&search=" + tu);
                var tv = "tns" + getQueryPart(tx);
                gs(ts + " .partTechnicalNoteListSingle .tablePartTechnicalNoteListDiv", ts + " .partTechnicalNoteListSingle .tablePartTechnicalNoteList", tv);
                return
            }
        }
        if (tt) {
            tw = "pk";
            so = "";
            if (pL === tu) {
                return
            }
            pL = tu;
            sI = "1";
            b8 = tu;
            od("partNumberKitSearch", "1", a9);
            od("partNumber", tu, a9)
        } else {
            pL = "";
            if (so === tu) {
                return
            }
            so = tu;
            sI = "0";
            b8 = tu;
            od("partNumberKitSearch", "0", a9);
            od("partNumber", tu, a9)
        }
        dU();
        $(ts + " .tablePartSection").show();
        $(ts + " .partTechnicalNoteListSingle").hide();
        if (cy) {
            if (qB(jm)) {
                hx(0)
            }
        }
        tx = pu();
        tx.push("&search=" + tu);
        lx(ts + " .tablePart", tw + getQueryPart(tx))
    }

    function n6() {
        return parseInt($("#CategoryTreeTopBase").val())
    }

    function Q() {
        return (40 == rL) || (55 == rL) || (188 == rL) || (189 == rL)
    }

    function b4(tt) {
        var ts = tt.indexOf("?");
        if (-1 === ts) {
            return tt + "?c=" + _cookies
        }
        return tt + "&c=" + _cookies
    }

    function oj() {
        return (74 == rL) || (123 == rL)
    }

    function dH() {
        $(pt(".autodataLogFaultCodes .autodataReturn")).setupClick(gu);
        var ts = $(pt(".autodataLogFaultCodes .treePartGroup"));
        ts.jstree({
            themes: {theme: "default", dots: true, icons: false},
            core: {rtl: false, animation: 0},
            ui: {select_limit: 1, initially_select: [""]},
            plugins: ["core", "themes", "html_data", "ui"]
        }).bind("select_node.jstree", cn).on("loaded.jstree", function () {
            oK(ts);
            gn(false)
        })
    }

    function cn(tu, tv) {
        var ts = tv.node;
        var tw = ts.id;
        if (isEmpty(tw)) {
            return
        }
        var tt = ts.text;
        iP = tw;
        jQ = tt.trim();
        st(true)
    }

    function Z(ts) {
        return n(qx(ts))
    }

    function nu(tt) {
        var ts = gT(tt);
        F = 0;
        bW = 0;
        rg = 0;
        cW = "";
        cF = "";
        if (null === ts) {
            pS(false);
            return
        }
        F = ts.LogbookServicing;
        if (-1 === F) {
            pS(false);
            return
        }
        if (1 === F) {
            cW = ts.LogBookServicingMid
        }
        rg = ts.MidCodeCount;
        if (rA()) {
            bW = ts.RepairCount;
            if (1 === bW) {
                cF = ts.RepairTimesMid
            }
        }
        pS(true)
    }

    function T() {
        $(pt(".autodataLogBookButton")).setupClick(jC);
        $(pt(".autodataRepair")).setupClick(r1);
        $(pt(".autodataFault")).setupClick(iE);
        $(pt(".autodataReturn")).setupClick(gu)
    }

    function bJ() {
        var ts = "";
        if (isEmpty(ts)) {
            ts = h7
        }
        var tt = gF();
        var tv = ts;
        if (!isEmpty(h7)) {
            var tu = h1(tt);
            if (nD === tu) {
                tv = h7
            }
        }
        mE(tt, tv);
        bm(tt, "&parentGroupId=" + tv.replace("#", ""))
    }

    function jC(tt) {
        ji(jm + " .tablePart", sp);
        if (1 < F) {
            $.get("lbv.html" + kv(), function (tu) {
                m3($("#partInfoPopup .partInfo"), decodeResponseText(tu), na)
            });
            return
        }
        if (1 === F) {
            var ts = cW.split(",");
            if (1 < ts.length) {
                h5(ts[0], ts[1])
            }
        }
    }

    function md() {
        $(pt(".autodataLogBook")).show();
        $(pt(".standardTree, .autodataLogRepairTimes, .autodataLogFaultCodes")).hide();
        $("#partInfoPopupFullScreen, #partInfoPopup").hide();
        var ts = jX(pt(".autodataLogBook"), true);
        rb($(pt(".autodataLogBookTree")), ts + "px");
        $(pt(".autodataLogBook .autodataLogBookButton")).addClass("jstree-clicked");
        T();
        $(pt(".autodataSelect")).change(me);
        $(pt(".autodataSelectSpecial")).change(al);
        $(pt(".autodataSummary a")).hide()
    }

    function cK() {
        var ts = "#tabs-motorbike";
        if (!q6[ts]) {
            return
        }
        if (!gj(ts)) {
            aW(ts)
        }
        rS(ts);
        oD = $(ts + " .jstree_demo_div li a.jstree-clicked").text();
        ca(ts, function (tt) {
            oD = tt
        });
        $(ts + " .makeInput").width(136);
        if (p8) {
            $(ts + " .engineInput").width(193);
            $(ts + " .detailInput").width(213)
        } else {
            $(ts + " .tableDetailDiv").width(298);
            $(ts + " .engineInput").width(193);
            $(ts + " .detailInput").width(272)
        }
        mi(ts)
    }

    function nZ() {
        var tt = $("#variantList li").length;
        var ts = tt * 17 + 100;
        return ts
    }

    function c7(tt, ts, tw) {
        var tu = gt(tt);
        var tv;
        var tx;
        if (rf === tu) {
            iN = "";
            ts();
            if (!isEmpty(tw)) {
                $(tw).focus()
            }
            return
        }
        if (dG === tu) {
            if (!isEmpty(iN)) {
                iN = iN.substring(0, iN.length - 1);
                ka(iN, tt.target.id, ts)
            }
            return
        }
        if (h3 === tu) {
            iN = "";
            return
        }
        if (((65 <= tu) && (90 >= tu)) || ((48 <= tu) && (57 >= tu)) || (du === tu)) {
            if (!isEmpty(iN)) {
                iN = iN + String.fromCharCode(tu)
            } else {
                iN = String.fromCharCode(tu)
            }
            ka(iN, tt.target.id, ts);
            return
        }
    }

    function i4() {
        var ts = $(this);
        var tt = ts.attr("id");
        $("#tabs-vin-search .tableVinNumber tr.selected").removeClass("selected");
        ts.parent().addClass("selected");
        if (ih) {
            ih = false
        } else {
            if (cA(tt)) {
                return
            }
        }
        sH = "";
        n3("#tabs-vin-search", tt, true)
    }

    function cj(ts) {
        if (ts in b0) {
            return
        }
        b0[ts] = 1;
        b7.push(ts)
    }

    function ex() {
        var tt = $(this);
        var ts = tt.attr("data-id");
        cj(ts)
    }

    function nC(ts) {
        pG();
        var tt;
        if (pg()) {
            tt = ts + " tbody > tr:not(.shouldBeHidden, .shouldBeHiddenChildren)"
        } else {
            tt = ts + " tbody > tr"
        }
        tt = tt + " > td.partPrice .ToBeUpdated";
        $(tt).each(ex)
    }

    function ka(tv, tt, ts) {
        if (tv.length === 0) {
            return
        }
        $("#" + tt + " tr.row_selected").removeClass("row_selected");
        var tu = $("#" + tt + " td").filter(function (tw) {
            return startsWith($(this).text(), tv)
        }).first();
        tu.parent().addClass("row_selected");
        div = $("#" + tt).parent().parent();
        div.scrollTop(tu.prop("offsetTop") - div.height() / 2)
    }

    function fn(ts) {
        $(ts).css("height", "")
    }

    function s0() {
        if (!fV()) {
            return false
        }
        return J(pt(".autodataLogBook"))
    }

    function fw() {
        return $(pt(".logoImageAutoInfoSection")).height()
    }

    function lx(ts, tt) {
        var tu = ts + "." + tt;
        if (tu === sH) {
            return
        }
        sH = tu;
        if (!aJ() || cu()) {
            qn(ts, tt);
            return
        }
        if (!isEmpty(rF)) {
            qn(ts, tt);
            return
        }
        if (isEmpty(o8)) {
            console.log("displayPartListInternal _storeCode is empty");
            return
        }
        $.get("stal/" + o8, function (tv) {
            rF = tv;
            qn(ts, tt)
        })
    }

    function mA(ts) {
        var tt = $(pt(".autodataLogFaultCodes input.troubleCodeInput")).val();
        if (isEmpty(tt)) {
            return
        }
        nm(tt)
    }

    function hk(ts, tu, tv, tt) {
        j = tv;
        tt.jqXHR = sk(ts, b1, [], true)
    }

    function gB(ts) {
        oM(ts + " .tablePart");
        hw($(ts + ".tablePartDimension"));
        $(ts + " .partNumberInput").keydown(function (tt) {
            cU(tt, ts)
        });
        $(ts + " .partNumberButtonClear").setupClick(function (tt) {
            qX(ts)
        });
        $(ts + " .partNumberButtonSearch").setupClick(function () {
            py(false, ts)
        });
        $(ts + " .partNumberButtonKitSearch").setupClick(function () {
            py(true, ts)
        });
        j6();
        if (!fN()) {
            $(ts + " .vehicleFitment").hide()
        }
    }

    function kN(tu) {
        var tt = "#pop";
        if ($(tt).css("display") == "none") {
            return
        }
        var ts = "150px";
        if (bF()) {
            ts = "50px"
        }
        rb($(tt), ts).css("left", "250px")
    }

    function sd() {
        return "#tabs-crosspart" === jm
    }

    function eV(tu, tw, tt, ts) {
        var tv = $(tu + " .logoImageCustomerSection img");
        tv.attr("src", tw);
        tv.width(tt);
        tv.height(ts)
    }

    function dP(ts) {
        return ("#tabs-catalog .tablePart" == ts) || ("#tabs-motorbike .tablePart" == ts) || ("#tabs-tractor .tablePart" == ts) || ("#tabs-marine .tablePart" == ts) || ("#tabs-advanced-search .tablePart" == ts) || ("#tabs-vin-search .tablePart" == ts)
    }

    function G() {
        var ts = hi();
        ml(ts, true, ts);
        gy = pY;
        rb($(jm + " .logoImageAutoInfoSection"), pX());
        if (cT) {
            iS($(jm + " .partSection"), gy)
        }
        if (g9()) {
            if (!oE) {
                iS($(jm + " .tablePartSectionCollapse"), 360)
            }
        } else {
            iS($(jm + " .tablePartSectionCollapse"), gy)
        }
    }

    function iD() {
        kw = rz("id");
        o8 = rz("et");
        if (pZ()) {
            o8 = "Melbourne"
        }
        rR();
        cM = rz("price_code");
        a3 = rz("ci")
    }

    function qS(tt, ts) {
        if (isEmpty(tt)) {
            dO(ts)
        } else {
            if (iz) {
                mb(tt, an, jY, false)
            } else {
                og(tt)
            }
        }
        var tv = nr();
        tv.push("&aiu=" + q0);
        tv.push("&partNumber=" + ts);
        var tu = "vo" + getQueryPart(tv);
        sk(tu, function (tw) {
        }, [], true)
    }

    function fW(tt, tu, tv, tA) {
        if (0 === tv) {
            c5 = tu[17]
        }
        var ts = $("td", tt);
        var tz = ts.eq(0);
        tz.addClass("partPicture");
        ts.eq(1).addClass("partnoXrefPartNumber");
        ts.eq(2).addClass("partnoBrand");
        ts.eq(3).addClass("partnoPartNumber");
        ts.eq(4).addClass("partnoDescription");
        ts.eq(5).addClass("partnoBarcode");
        var tx = tu[6];
        if (!isEmpty(tx)) {
            var tw = "partNoSelectButton " + tx;
            ts.eq(6).replaceWith("<td class='partnoSelect'><button type='button' class='partNoSelectButton' id='" + tw + "'>Select</button></td>");
            var ty = parseInt(tu[16]);
            if (0 < ty) {
                tz.append(dp)
            }
        }
        return tt
    }

    function nl(tt, ts) {
        if (km() && (kQ(jm) == this.id)) {
            bm(jm, "");
            ju();
            st(true);
            return
        }
        nz(jm, ts);
        bm(jm, tt);
        st(!ih);
        if (ih) {
            ih = false
        }
    }

    function eK() {
        var tu = f7();
        if (isEmpty(tu)) {
            return
        }
        var tt = oP();
        var ts = "v.html" + prepareQueryPart(tt.join(""));
        sk(ts, function (tv) {
            var tw = kt(tv);
            if (null === tw) {
                return
            }
            b6(tw)
        }, [], true)
    }

    function n3(tw, tv, ts) {
        if (ts) {
            if (fY(tv)) {
                return
            }
        }
        refreshTabSettings(6, tw);
        if (hF(tw)) {
            var tu = l4(tw);
            nS[tu] = tv;
            od(tu, tv, a9)
        }
        V(tv);
        if (isEmpty(tv)) {
            return
        }
        if (rw("#vehicleTitle")) {
            rX()
        }
        if (!po(tw)) {
            pS(false);
            n4();
            return
        }
        if (qf(tw)) {
            qV(tw);
            return
        }
        if (!km()) {
            $(pt(".standardTree")).show();
            pS(false);
            if (bE()) {
                s6()
            }
            n4();
            var tt = $(tw + " .standardTree .searchTree .codeInput").val();
            if (!isEmpty(tt)) {
                oK(jJ())
            }
            return
        }
        aS(tw, false, ts)
    }

    function d3(tu, tt, ts) {
        $(tu + " > li").each(function () {
            var tv = $(this);
            if (!ts) {
                var tw = tv.children("ul");
                var tx = tw.children("li:not(.hide)");
                if (0 === tx.length) {
                    tv.hide();
                    return
                }
            }
            tv.show()
        });
        $(tu + " > li ul li:not(.hide)").show();
        $(tu + " > li ul li.hide").hide();
        oK($(tt + " .jstree_demo_div"))
    }

    function rJ(tT, tW) {
        var tv = 1;
        var tU;
        var tP = jm + " ";
        var tE = sd();
        if (tE) {
            tv = 7;
            tU = true
        } else {
            tU = (0 < aE)
        }
        $(tP + ".partNoSelectRow").removeClass("partNoSelectRow");
        tW.addClass("partNoSelectRow");
        var tF = tW.find("button.partNoSelectButton").attr("id");
        var tH = tF.indexOf(" ");
        var tZ = tF.substring(tH + 1, tF.length);
        var tO = false;
        var tt;
        if (!tU) {
            tv--
        }
        var tV;
        if (tE) {
            tV = 6
        } else {
            tV = 14
        }
        for (tH = 0; tH < tT.aaData.length; tH++) {
            tt = tT.aaData[tH];
            if (tt[tV] === tZ) {
                tO = true;
                break
            }
        }
        if (!tO) {
            alert("cannot find partid in array");
            return
        }
        var tG = tt[7];
        if (!tE) {
            tG = tt[5]
        }
        $(tP + ".partNumberLabel").show();
        var ty = -1 !== tG.indexOf(tb);
        if (ty) {
            tG = tG.replace(tb, "")
        }
        $(tP + ".partNumberLabel").text("Part number: " + bp(tG));
        var tz;
        var tI;
        var tN;
        var tK;
        var tC;
        var tY;
        var tw;
        var tX;
        var ts;
        var tS = "";
        var tJ;
        if (tE) {
            tJ = tt[6];
            tv = 3;
            tz = parseInt(tt[tv + 5]);
            tI = tt[tv + 6];
            tK = tt[tv + 7];
            tC = tt[tv + 8];
            tY = tt[tv + 9];
            tw = tt[tv + 10];
            tX = tt[tv + 11];
            ts = tt[tv + 12]
        } else {
            tz = parseInt(tt[19]);
            tI = tt[20];
            tJ = tt[14];
            tK = tt[15];
            tC = tt[16];
            tY = tt[17];
            tw = tt[18];
            tN = tt[28];
            ts = tt[21];
            tS = tt[22]
        }
        bs(tP, tJ, tG);
        $(tP + " .partImageSectionCollapse").show();
        var tB = 0;
        var tR = 0;
        if (rw(tP + " .tablePartSectionCollapse")) {
            var tu = $(tP + " .tablePartSectionCollapse");
            tB = tu.position().left;
            tR = tu.width()
        } else {
            var tQ = $(tP + " #partNumberTableSection");
            tB = tQ.position().left;
            tR = tQ.width()
        }
        tB = tB + tR;
        if (hN) {
            tB += 13
        } else {
            tB += 12
        }
        if (oE) {
            tB = 2;
            $(tP + " .partImageSection").css("left", tB + "px").css("width", "940px");
            $(tP + " .tablePartSection").css("width", "940px")
        } else {
            if (tR < 740) {
                $(tP + " .partImageSection").css("left", tB + "px").css("width", "220px")
            } else {
                $(tP + " .partImageSection").css("left", tB + "px").css("width", "214px");
                $(tP + " .partDimension").css("width", "214px")
            }
        }
        $(tP + " .partNumberLabel").html("Part Number: " + bp(tG));
        if (!isEmpty(tS)) {
            $(tP + " .MoreInfo").show().data("isVisible", true);
            $(tP + " .MoreInfo .orderIcon, " + tP + ".MoreInfo #MoreInfoA").setupClick(function () {
                og(tS)
            })
        } else {
            $(tP + " .MoreInfo").hide().data("isVisible", false)
        }
        var tA = tI;
        if (oE) {
            var tD = nr();
            tD.push("&partId=" + encodeQuery(tZ));
            var tM = "GetPartTechnicalNoteList" + getQueryPart(tD);
            gs(tP + ".tablePartTechnicalNoteListDiv", tP + ".tablePartTechnicalNoteList", tM)
        } else {
            pF(tP + ".partDimension", tP + ".tablePartDimension", tZ)
        }
        $(".partImage").remove();
        if (0 < tz) {
            var tx = b4(tI.replace("/t/", "/product/"));
            var tL = joinArrToString(["<center><img class='partImage' width='", tC, "' height='", tK, "' src='", tx, "'></center>"]);
            $(tL).appendTo(tP + ".partImageSectionDiv");
            $(tP + ".partImage").setupClick(function () {
                if (isEmpty(tN)) {
                    tN = tx
                }
                var t0 = "";
                r5(tN, tA, tG, tJ, (0 < ts), "", "", "", 1, t0, ty)
            });
            if (1 < tz) {
                $(tP + ".partClickImageForLagerViewLabel").text("(Click Image to view multiple images)")
            } else {
                $(tP + ".partClickImageForLagerViewLabel").text("(Click Image For Larger View)")
            }
            $(tP + ".partClickImageForLagerViewLabel").show()
        } else {
            $(tP + ".partClickImageForLagerViewLabel").hide()
        }
        if (0 < ts) {
            $(tP + ".formNotes").show();
            $(tP + ".buttonNotes").setupClick(function () {
                l6(tZ);
                return false
            })
        } else {
            $(tP + ".formNotes").hide()
        }
        if (!tE) {
            S(tZ)
        }
    }

    function rX() {
        sk("v.html" + kv(), function (ts) {
            ec(ts)
        }, [], true)
    }

    function jx(ts, tx) {
        var tw = gT(tx);
        if (null !== tw) {
            try {
                var tt = tw.status;
                if (startsWith(tt, "Error:")) {
                    if (oO(tt)) {
                        em("refreshBrowser");
                        return
                    }
                    alert(tt);
                    return
                }
            } catch (tv) {
            }
            var ty = tw.length;
            for (var tu = 0; tu < ty; tu++) {
                l9(ts, tw[tu])
            }
        }
        jF();
        if (0 === b7.length) {
            if (bH()) {
                rE()
            } else {
                kE()
            }
            gn(false);
            return
        }
        qo(ts)
    }

    function l9(tv, ty) {
        var tu = $(tv + " tbody > tr > td.partPrice .ToBeUpdated[data-id='" + ty.Id + "']");
        var tw = ty.Price0;
        var tx = tw.toFixed(2);
        var tA;
        var tB;
        var tz = "";
        if (gP()) {
            tA = e2 + tx;
            tz = "POA";
            if (tw > 0) {
                tz = C(tw)
            }
            var ts = "POA";
            if (ty.Price1 > 0) {
                ts = e2 + ty.Price1.toFixed(2)
            }
            if (bH()) {
                tB = "<div class='myPrice'>"
            } else {
                tB = "<div class='myPrice hidden'>"
            }
            var tt = cZ();
            tB = tB + "<span class='myPriceLabel'>" + bK(tt) + ":</span><span class='myPriceValue' data-price='" + tA + "'>" + tz + "</span></div><div class='listPrice'><span class='listPriceLabel'>" + ay(tt) + ":</span><span class='listPriceValue'>" + ts + "</span></div>"
        } else {
            if (!c6) {
                tz = "POA"
            }
            if (tw > 0) {
                tz = e2 + tx
            }
            tA = tx;
            tB = "<div>&nbsp;</div><div>" + tz + "</div>"
        }
        if (qp()) {
            tu.html(tB).removeClass("ToBeUpdated").addClass("price")
        } else {
            tu.html("&nbsp;").removeClass("ToBeUpdated").addClass("price")
        }
        var tE = tu.closest("tr");
        if (null === tE) {
            return
        }
        var tD = tE.find("input.addOrderQuantityInput");
        if (null !== tD) {
            tD.data("price", tA)
        }
        if (!isEmpty(f2)) {
            if (ty.hasOwnProperty("SkuKey")) {
                tE.data("SKUkey", ty.SkuKey)
            }
            if (ty.hasOwnProperty("Sku")) {
                tE.data("SKU", ty.Sku)
            }
        }
        var tC = tE.children(".partBursonQty");
        if (null === tC) {
            return
        }
        tC.html(lg(ty))
    }

    function it(tx, tu, tv, tw, tt) {
        if (s0()) {
            if (sv(tx, tu)) {
                return
            }
        }
        var ts = (q9() || cu()) && (0 === tt) && (!g2());
        am(tx, eu(ts, tu), function () {
            eb(tx, tv, tw)
        });
        tx.addClass("categoryLine").addClass("-1");
        sD++
    }

    function ql() {
        if (!q6["#tabs-marine"]) {
            return
        }
        rS("#tabs-marine");
        jL = $("#tabs-marine .jstree_demo_div li a.jstree-clicked").text();
        ca("#tabs-marine", function (ts) {
            jL = ts
        });
        $("#tabs-marine .makeInput").width(124);
        if (p8) {
            $("#tabs-marine .engineInput").width(193);
            $("#tabs-marine .detailInput").width(213)
        } else {
            $("#tabs-marine .tableDetailDiv").width(298);
            $("#tabs-marine .engineInput").width(193);
            $("#tabs-marine .detailInput").width(272)
        }
        mi("#tabs-marine")
    }

    function cD(tv, tt) {
        var tu = at(tv);
        var ts = new Image();
        ts.onload = function () {
            hY(ts, tu, tt)
        };
        ts.src = tu
    }

    function nx(ts) {
        if (hN) {
            em("getScrollTop");
            return
        }
        var tt = lM() + 200;
        rb($(ts), tt + "px").show();
        $("#partInfoPopupFullScreen").height(gy + 10000).fadeIn("slow")
    }

    function jG() {
        if (g2()) {
            return jc() - fw()
        }
        var ts = cq();
        if (s0()) {
            return ts
        }
        if (ts <= pX()) {
            return pX()
        }
        return ts
    }

    function k2() {
        if (cT) {
            if (0 === gy) {
                return dg()
            }
            return d(gy)
        }
        return dg()
    }

    function dQ() {
        var ts = k2();
        if (ts <= pX()) {
            return pX()
        }
        return ts
    }

    function gG() {
        if (g9()) {
            return ff
        }
        if (cT) {
            if (0 === gy) {
                return qe()
            }
            return gy
        }
        return qe()
    }

    function lk() {
        if (cT) {
            if (0 === gy) {
                return jw()
            }
            return gy
        }
        return jw()
    }

    var f8 = "";

    function oo() {
        var tB = performance.timing.navigationStart;
        var tA = performance.timing.redirectStart - tB;
        var tx = performance.timing.redirectEnd - tB;
        var tC = performance.timing.domainLookupStart - tB;
        var ty = performance.timing.domainLookupEnd - tB;
        var ts = performance.timing.connectStart - tB;
        var tt = performance.timing.connectEnd - tB;
        var tz = performance.timing.requestStart - tB;
        var tv = performance.timing.responseStart - tB;
        var tu = performance.timing.responseEnd - tB;
        f8 = tv - tz;
        var tw = 10 + Math.floor(Math.random() * 10);
        setTimeout(function () {
            ti(function () {
            })
        }, tw)
    }

    function g4(ts) {
        if (!gf(ts)) {
            throw"getElementBottom (!exists(element))"
        }
        return ts.position().top + ts.outerHeight(true)
    }

    function bs(tv, ts, tu) {
        df();
        $(tv + ".holdPartForComparisonFormDiv").show();
        var tt = (dh(l7)) || (l7 === ts);
        if (tt) {
            $(tv + ".holdPartForComparisonCheckBox").setupClick(function () {
                if (b2(tv + ".holdPartForComparisonCheckBox")) {
                    l7 = ts;
                    da = tu
                } else {
                    l7 = undefined
                }
            })
        } else {
            $(tv + ".compareWithHeldPartButton").setupClick(function () {
                iX(tv, l7, da, ts, tu)
            })
        }
        I(tv, tt)
    }

    function f(tt) {
        $(".part_row_selected").removeClass("part_row_selected");
        var ts = $(tt.target);
        if (38 < ts.text().length) {
            ts.addClass("part_row_selected");
            ts.parent().addClass("part_row_selected");
            ts.parent().parent().addClass("part_row_selected")
        }
        return 0
    }

    function dK(ts, tu, tt) {
        $(ts).keydown(function (tv) {
            if (tt !== undefined) {
                tt()
            }
            px(tv, tu)
        })
    }

    function a0() {
        return isEmpty(kQ(jm))
    }

    function eg() {
        if (!mH()) {
            rD().hide();
            return
        }
        rD().show().removeClass("jstree-clicked").addClass("jstree-no-clicked")
    }

    function qE(ts) {
        if (!fS()) {
            return
        }
        k0.jstree("select_node", ts)
    }

    function dv(ts) {
        return ts.data("selectBox-selectBoxIt")
    }

    function b6(ts) {
        $("#vehicleTitle").text(ts.VehicleTitle);
        if (ky()) {
            if (isEmpty($(".vinSearch .vinNumberInput").val())) {
                return
            }
        }
        if (fO < 2) {
            $(".addToGarageButton").show()
        }
        if (gC()) {
            $(".regoSaveButton").show()
        }
    }

    function qx(tt) {
        if (isEmpty(tt)) {
            return ""
        }
        var ts = tt.indexOf("&subGroupId=");
        if (-1 === ts) {
            return tt
        }
        return tt.substring(0, ts)
    }

    function oG() {
        if (cT) {
            if (0 === gy) {
                return oF()
            }
            return gy
        }
        return oF()
    }

    function pM(tu, tx, ts) {
        var tt = pg();
        if (tt) {
            pG()
        }
        var ty = dM(tu);
        var tv = tu.next("tr");
        while (tv && (tv.length > 0)) {
            var tw = dM(tv);
            if (-1 == tw) {
                break
            }
            if (tw <= ty) {
                break
            }
            if (tt && ts) {
                tv.find("td.partPrice .ToBeUpdated").each(ex)
            }
            if (((ty + 1) == tw) || (!ts)) {
                tx(tv)
            }
            tv = tv.next("tr")
        }
        if (tt) {
            qo(jm + " .tablePart")
        }
    }

    function hB(ts) {
        var tt = ts.indexOf(" ");
        var tu = ts.substring(tt + 1, ts.length);
        $.getJSON("ShoppingCart/DeleteOrderLine?aPartId=" + tu + "&v=" + mP, function (tv) {
            d2()
        })
    }

    function ai() {
        if (hu()) {
            return
        }
        if (isEmpty(dy)) {
            return
        }
        var tu = $(gd() + " li a.jstree-clicked");
        var ts = tu.attr("id");
        if (ts === undefined) {
            ts = ""
        } else {
            ts = ts.replace(/&/g, ",")
        }
        var tv = dy.replace("Filter?", "").replace(/&/g, ",");
        var tt = ["Search/GetUrl?a=1&p=", tv, ",v=", mP, ",vehicle=", p5(), ts].join("");
        $.getJSON(tt, function (tw) {
            q2(tw.a)
        })
    }

    function x(ts, tt) {
        rs(ts);
        sk(dy, function (tv) {
            rH = tv.iTotalRecords;
            $("#searchResultsLabel").text(tv.iTotalRecords + " Results");
            eh = tv.aaData;
            if (0 === ts) {
                $("#vehicleList").ajaxScroll({
                    horizontal: true,
                    batchNum: l5,
                    batchSize: 1,
                    maxOffset: rH,
                    updateBatch: hR
                })
            } else {
                var tu = eh[0];
                hM(tt, tu)
            }
            if (1 == rH) {
                n3("#tabs-advanced-search", eh[0][12], true)
            }
        }, [], true)
    }

    function sh(ts, tt) {
        if ("Part Number Search" === ts) {
            g = tt;
            return
        }
        if ("Part Number Search 2" === ts) {
            ba = tt;
            return
        }
        if ("General Merchandise" === ts) {
            tk = tt;
            return
        }
        if ("Cross Reference" === ts) {
            i6 = tt;
            return
        }
        if ("Part Info" === ts) {
            rI = tt;
            m(rI, true);
            return
        }
        if ("Automotive" === ts) {
            cx = tt;
            iJ = cx;
            return
        }
        if ("Industrial / Agricultural" === ts) {
            cP = tt;
            return
        }
        if ("Motorbike" === ts) {
            W = tt;
            return
        }
        if ("Marine" === ts) {
            qY = tt;
            return
        }
        if ("Engine" === ts) {
            fH = tt;
            return
        }
        if ("Advanced Search" === ts) {
            lb = tt;
            return
        }
        if ("Feedback" === ts) {
            pE = tt;
            return
        }
        if ("My garage" === ts) {
            kB = tt;
            return
        }
        ts = ts.toLowerCase();
        if ((ts.indexOf("vin") !== -1) || (ts.indexOf("rego") !== -1)) {
            jO = tt;
            return
        }
    }

    function dI() {
        var tw = $("#tabs >ul >li >a");
        var tt = tw.length;
        var tx = false;
        if (document.body.innerText) {
            tx = true
        }
        var tu;
        for (tu = 0; tu < tt; ++tu) {
            var tv = tw[tu];
            var ts;
            if (tx) {
                ts = tv.innerText
            } else {
                ts = tv.innerHTML.replace(/\\&lt;br\\&gt;/gi, "\\n").replace(/(&lt;([^&gt;]+)&gt;)/gi, "")
            }
            sh(ts, tu)
        }
    }

    function bk() {
        $(".closeIcon").setupClick(mw);
        if (hN) {
            em("getScrollTop")
        } else {
            var ts = lM() + 200;
            if (ts < 0) {
                ts = 5
            }
            rb($("#partInfoPopup"), ts + "px").show();
            $("#partInfoPopupFullScreen").height(gy + 10000).fadeIn("slow")
        }
        $("#partInfoPopup").css({height: "400px", width: "660px", left: "126px"});
        $("#partInfoPopup .partInfo").css({width: "662px"});
        $("#partInfoPopup .part_detail_category").css({width: "654px"});
        $("#partInfoPopup .closeIcon").css({left: "554px"});
        $(".closeIcon").text(tc);
        rb($("#partInfoPopup .logoImageAutoInfoSection"), "104px")
    }

    function jl() {
        var ts = $(pt(".autodataLogRepairTimes .treePartGroup"));
        ts.jstree({
            themes: {theme: "default", dots: true, icons: false},
            core: {rtl: false, animation: 0},
            ui: {select_limit: 1, initially_select: [""]},
            plugins: ["core", "themes", "html_data", "ui"]
        }).bind("select_node.jstree", oW).bind("open_node.jstree", function (tv, tw) {
            var tu = "#" + tw.node.id + " > .jstree-ocl";
            var tt = tw.node.id;
            ts.find("li.jstree-open").each(function () {
                var tx = $(this).attr("id");
                if (tx != tt) {
                    ts.jstree("close_node", "#" + tx);
                    ts.jstree("deselect_node", "#" + tx)
                }
            });
            gn(false)
        }).bind("close_node.jstree", function (tt, tu) {
            if (!cT) {
                return
            }
            setTimeout(function () {
                gn(false)
            }, 100)
        });
        ts.show()
    }

    function oW(ts, tt) {
        var tu = tt.node.id;
        ni($(pt(".autodataLogRepairTimes .treePartGroup")), $("#" + tu));
        l(tu)
    }

    function se(tt, ts) {
        var tu = $(ts).val();
        if (isEmpty(tu)) {
            return ""
        }
        return tt + tu
    }

    function hR(tu) {
        var tt = parseInt(tu.attr("offset"));
        if (tt >= rH) {
            return
        }
        if (tt >= (hm + eh.length)) {
            x(tt, tu);
            return
        }
        var ts = eh[tt - hm];
        hM(tu, ts)
    }

    function c2() {
        pW($("#vehicleList"));
        ji("#tabs-advanced-search .tablePart", lN)
    }

    function q8(ts) {
        $(ts).val("")
    }

    function X() {
        q8("#searchMakeField");
        q8("#searchModelField");
        q8("#searchSubModelField");
        q8("#searchYearField");
        q8("#searchCcField");
        q8("#searchEngineField");
        q8("#searchChassisField");
        q8("#searchSeriesField");
        k1("#narrowSearchSelectBody");
        k1("#narrowSearchSelectFuel");
        k1("#narrowSearchSelectDrive");
        k1("#narrowSearchSelectCyls");
        k1("#narrowSearchSelectAspr");
        k1("#narrowSearchSelectCam");
        $("#buttonRefine").css("background-color", "");
        c2()
    }

    function bL(tt) {
        if ("PartInfo" === tt) {
            return rI
        }
        if ("Garage" === tt) {
            return kB
        }
        var ts = parseInt(tt);
        if (0 === ts) {
            return cx
        }
        if (1 === ts) {
            return cP
        }
        if (2 === ts) {
            return W
        }
        if (3 === ts) {
            return qY
        }
        if (4 === ts) {
            return fH
        }
        if (5 === ts) {
            return tk
        }
        if (6 === ts) {
            return jO
        }
        if (7 === ts) {
            return lb
        }
        if (8 === ts) {
            return g
        }
        if (9 === ts) {
            return i6
        }
        if (11 === ts) {
            return pE
        }
        return cx
    }

    function px(tu, tt) {
        var ts = gt(tu);
        if (ts === rf) {
            tu.preventDefault();
            if (!isEmpty(tt)) {
                $(tt).focus()
            }
            c2();
            x(0, null);
            return
        }
        if (ts === h3) {
            tu.preventDefault();
            X();
            return
        }
    }

    function jI() {
        var ts = pm("addToGarage");
        if (isEmpty(ts)) {
            return
        }
        $.getJSON(ts, function (tt) {
        })
    }

    function nL(tx, tu) {
        var tw = tx.closest(".tablePartImageList");
        tw.find(".selected").removeClass("selected");
        var tv = tx;
        tv.addClass("selected");
        cD(tv.data("src"), tu);
        var ts = a1(tw);
        if (-1 === ts) {
            return
        }
        ts++;
        var tt = tw.find("tr").length;
        tw.closest(".partDetailImage").find(".imageCountText").text(ts + " of " + tt)
    }

    function jj() {
        $("#feedBackYourFeedback").keyup(function () {
            ss(this, sx)
        });
        $("#formFeedback").submit(hE)
    }

    function iX(tv, tx, ty, tu, tw) {
        df();
        I(tv, true);
        fq = "ShowComparePart";
        var tt = pu();
        tt.push("&partId1=" + encodeQuery(tx));
        tt.push("&partNumber1=" + ty);
        tt.push("&partId2=" + encodeQuery(tu));
        tt.push("&partNumber2=" + tw);
        lw = "comparePart.html" + getQueryPart(tt);
        to = "";
        if (pz) {
            r3(true, "#partInfoPopup .partInfo", lw);
            setTimeout(function () {
                eT("#partInfoPopup")
            }, 1000);
            return
        }
        var ts = $("#tabs").tabs("option", "active");
        if (ts === rI) {
            r3(true, "#tabs-part-info .partInfo", lw, function (tz) {
                $(".closeIcon").setupClick(mw)
            });
            return
        }
        oa(rI);
        fC(rI)
    }

    function o7(ts) {
        return ts.css("top")
    }

    function bQ(ts) {
        return ts.position().top
    }

    function iK() {
        if (!fS()) {
            return
        }
        fA = 945
    }

    function i8() {
        oM("#tabs-advanced-search .tablePart");
        $("#buttonHide").setupClick(es);
        $("#buttonClear").setupClick(lQ);
        $("#buttonClearNarrowSearch").setupClick(kq);
        $("#buttonRefine").setupClick(hy);
        dK("#searchVinField", "#buttonVinSearch", X);
        dK("#searchMakeField", "#searchModelField", q3);
        dK("#searchModelField", "#searchSubModelField", q3);
        dK("#searchSubModelField", "#searchYearField", q3);
        dK("#searchYearField", "#searchCcField", q3);
        dK("#searchCcField", "#searchEngineField", q3);
        dK("#searchEngineField", "#searchChassisField", q3);
        dK("#searchChassisField", "#searchSeriesField", q3);
        dK("#searchSeriesField", "#buttonSearch", q3);
        $(".narrowSearch-select").change(function (ts) {
            $("#buttonRefine").css("background-color", "red");
            c2();
            x(0, null)
        });
        $("#formAdvancedSearch, #formVinSearch").submit(function () {
            c2();
            x(0, null);
            return false
        });
        $("#advancedSearchNarrowSearchSection").hide()
    }

    function jp() {
        return bt === 3
    }

    function sE() {
        if (!fS()) {
            return
        }
        fU = "";
        p4 = "";
        _masterScheduleId = "";
        _secondaryScheduleIdList = [];
        pW(ob());
        mN();
        pS(false);
        if (!km()) {
            jR();
            return
        }
        eg();
        pW(k0);
        gy = 0;
        if (!cT) {
            r9(k0, 0)
        }
        $(pt(".standardTree")).show()
    }

    function me() {
        if (!j2()) {
            return
        }
        st(false)
    }

    function l(ts) {
        if (isEmpty(ts)) {
            return
        }
        w = false;
        lx(jm + " .tablePart", joinArrToString(["pr_", ts, ".html"]) + kv())
    }

    function hy() {
        $("#advancedSearchNarrowSearchSection").show()
    }

    function lQ() {
        X();
        x(0, null)
    }

    function es() {
        $("#advancedSearchNarrowSearchSection").hide()
    }

    function kq() {
        $("#buttonRefine").css("background-color", "");
        k1("#narrowSearchSelectBody");
        k1("#narrowSearchSelectFuel");
        k1("#narrowSearchSelectDrive");
        k1("#narrowSearchSelectCyls");
        k1("#narrowSearchSelectAspr");
        k1("#narrowSearchSelectCam");
        c2();
        x(0, null)
    }

    function q3() {
        q8("#searchVinField")
    }

    function sq() {
        window.location = "ShoppingCart"
    }

    function mI() {
        em("recoverScrollTop")
    }

    function f4(tt, ts) {
        $("html").css("width", "1000px");
        $("html").css("height", "100%").css("overflow-y", "scroll");
        if (ts) {
            if (!g9()) {
                iS($(jm + " .tablePartSection"), tt)
            }
        }
        iS($("#tabs"), "100%")
    }

    function mJ(tw, tx, tz, tB) {
        var tt = tx[0];
        var ts = tx[5];
        var tA = tx[2];
        var tu = $("td", tw);
        var tv = tu.eq(0);
        tv.replaceWith("<td class='partPicture'/>");
        if (rw("#ShowPartLogo") && !isEmpty(tt)) {
            tv.append(de(tt))
        }
        tu.eq(1).addClass("partNumber");
        var ty = tu.eq(2).addClass("partBrand");
        dR(tA, "", ty);
        tu.eq(3).addClass("partPrice");
        tu.eq(4).addClass("partQuantity");
        tu.eq(5).addClass("deleteButton").html('<button type="button" class="ShoppingCartLineDelete" id="ShoppingCartLineDelete ' + ts + '">Delete</button>').find(".ShoppingCartLineDelete").setupClick(function () {
            var tC = $(this).attr("id");
            hB(tC)
        })
    }

    function bD() {
        if (hN) {
            od("oscarUseDesktop", "0", 3600000000)
        } else {
            od("oscarUseDesktop", "0", 3600000000);
            window.location.href = window.location.href
        }
    }

    function lW() {
        $("#tabs-crosspart .partNumberTable").dataTable({
            bPaginate: false,
            bFilter: false,
            bSort: false,
            bInfo: false,
            bDestroy: true,
            bServerSide: false,
            bProcessing: false,
            bAutoWidth: false,
            fnRowCallback: fW,
            fnServerData: h9,
            fnCookieCallback: nF
        });
        $("#tabs-crosspart .partNumberTable").dataTable().fnSettings().oLanguage.sEmptyTable = "NOTHING FOUND";
        hw($(".tablePartDimension"));
        $("#tabs-crosspart .partNumberInput").keydown(function (tt) {
            var ts = gt(tt);
            if (ts === rf) {
                tt.preventDefault();
                if (!isEmpty("#tabs-crosspart .partNumberInput")) {
                    pa()
                }
                return
            }
            if (ts === h3) {
                tt.preventDefault();
                q4();
                return
            }
        });
        $("#tabs-crosspart .partNumberButtonClear").setupClick(function () {
            q4()
        });
        $("#tabs-crosspart .partNumberButtonSearch").setupClick(function () {
            pa()
        });
        j6()
    }

    function eQ() {
        if (isEmpty(getMakerId("#vehicleSelector"))) {
            return false
        }
        if (isEmpty(hc("#vehicleSelector"))) {
            return false
        }
        if (isEmpty(cE("#vehicleSelector"))) {
            return false
        }
        if (isEmpty(nX("#vehicleSelector"))) {
            return false
        }
        if (isEmpty(dY("#vehicleSelector"))) {
            return false
        }
        if (isEmpty(s7("#vehicleSelector"))) {
            return false
        }
        return true
    }

    function kV(tu, tv, tw, tz) {
        var tt = $("td", tu);
        var tx = tv[0];
        var ts = tv[2];
        var tA = tt.eq(1).addClass("title");
        tA.attr("id", ts);
        tA.attr("shortUrl", tx);
        tt.eq(0).addClass("shortUrl");
        var ty = tt.eq(2).addClass("id");
        ty.attr("id", ts)
    }

    function ag(tw, tx, tz, tA) {
        var tv = $("td", tw);
        var ts = tv.eq(0);
        var tu = tv.eq(1);
        var tB = ts.parent();
        var tt = tx[0];
        var ty = ("1" === tx[1]);
        if (!startsWith(tt, "-")) {
            it(tB, tt, ty, tx[2], tA);
            return tw
        }
        qN(tB, tx, ts, tu, ty, tv);
        return tw
    }

    function iE(ts) {
        ji(jm + " .tablePart", eC);
        $(pt(".standardTree, .autodataLogBook, .autodataLogRepairTimes")).hide();
        if (1 < rg) {
            $.get("lbrv.html" + kv(), function (tt) {
                m3($("#partInfoPopup .partInfo"), decodeResponseText(tt), kS)
            });
            return
        }
        if (1 == rg) {
            pn();
            return
        }
    }

    function pS(tu) {
        var tt = pt(".standardTree .autodataLogBookButton, .standardTree .autodataRepair, .standardTree .autodataFault");
        if (tu) {
            T();
            $(tt).show()
        } else {
            $(tt).hide()
        }
        if (!lz(h1(jm))) {
            $(pt(".standardTree .find")).hide()
        }
        var tv = gi(pt(".standardTree"), tu);
        if (aN) {
            var ts = pt(".searchTree .find");
            tv += 2;
            bU($(ts), tv);
            tv += 24
        }
        if (rw(pt(".showAllParts")) && J(pt(".showAllParts"))) {
            bU($(pt(".showAllParts")), tv);
            tv += 18
        }
        rb(jJ(), tv + "px")
    }

    function dR(tv, tt, ts) {
        if (isEmpty(tv)) {
            return
        }
        var tu = joinArrToString(["<img class='brandImage' data-brand='", tt, "' src='", tv, "'/>"]);
        var tw = "#brandpop";
        ts.html(tu).setupClick(function (tx) {
            eD($(tw), tt, tx)
        }).hover(function (tx) {
        }, function () {
            var tx = $(tw);
            tx.hide()
        })
    }

    function de(ts) {
        if (isEmpty(ts)) {
            return ei
        }
        if (!(ts in pl)) {
            j3++;
            pl[ts] = true;
            $('<img src="' + ts + '">').on("load", function () {
                ew++;
                if (ew == j3) {
                    gn(false)
                }
            })
        }
        return joinArrToString(["<img class='partIcon' src='", ts, "'/>"])
    }

    function sJ(ts) {
        var tu = pu();
        tu.push("&vid=" + encodeQuery(bl()));
        var tt = "v.html" + getQueryPart(tu);
        sk(tt, function (tv) {
            qP(ts, jQuery.parseJSON(decodeResponseText(tv[0])))
        })
    }

    function qP(ts, tw) {
        var tt = $(gd() + " .jstree-clicked");
        var tv = "";
        if (tt.length !== 0) {
            tv = tt.text()
        }
        var tu = joinArrToString(["Feedback is about vehicle ", tw.VehicleId, " ", tw.VehicleTitle, " Part Number ", ts]);
        if (!isEmpty(tv)) {
            tu = joinArrToString([tu, " in Part Type: ", tv])
        }
        $("#feedBackYourFeedback").val(tu);
        fC(pE)
    }

    function dU() {
        c5 = "";
        var ts = jm + " ";
        $(ts + "#partNumberTableImage").remove();
        ji(ts + " .tablePart", lN);
        $(ts + " .partNumberVehicle").replaceWith(oJ("partNumberVehicle"));
        $(ts + " .partNumberVehicle").hide();
        j6()
    }

    function qX(ts) {
        so = "";
        pL = "";
        q8(ts + " .partNumberInput");
        dU()
    }

    function q4() {
        lX = "";
        c5 = "";
        $("#tabs-crosspart #partNumberTableSection").attr("style", "");
        q8("#tabs-crosspart .partNumberInput");
        mn($("#tabs-crosspart .partNumberTable"));
        $("#tabs-crosspart #partNumberTableImage").remove();
        j6()
    }

    function nm(tu) {
        var tt = oP();
        tt.push("&midCode=" + fU);
        tt.push("&text=" + tu);
        var ts = "lbf.html" + getQueryPart(tt);
        sk(ts, bu, [], true)
    }

    function bu(ts) {
        mg(pt(".autodataLogFaultCodes .treePartGroup"), ts.a, dH)
    }

    function lq(tt, ts) {
        return $("td", tt).eq(ts)
    }

    function gm(tz, tu, tE, tx, tI, tF, tH, tG, tw, ty, tD, ts, tv, tC, tB, tA, tt) {
        tI.find(".partIcon,.infoIcon").setupClick(function () {
            dn(tz, tu, tE, tx, tF, tH, tG, tw, ty, tD, ts, tv, tC, tB, tA, tt)
        })
    }

    function jU(tt, tu, tA, ty) {
        var tw = tu.height;
        var tx = tu.width;
        var ts = Math.round(tx * tA / tw);
        var tz = 0;
        var tv = 0;
        if (ts <= ty) {
            tw = tA;
            tx = ts;
            tz = Math.round((ty - tx) / 2)
        } else {
            tw = Math.round(tw * ty / tx);
            tx = ty;
            tv = Math.round((tA - tw) / 2)
        }
        tt.height(tw);
        tt.width(tx);
        tt.css({left: tz, top: tv})
    }

    lK.working = false;

    function lK(tu, tt, ts, tv) {
        if (!lK.working) {
            return
        }
        ts.css("background-color", tt);
        setTimeout(function () {
            lK(tt, tu, ts, tv)
        }, tv)
    }

    function s9(ts) {
        if ($.inArray(ts.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 || (ts.keyCode == 65 && (ts.ctrlKey === true || ts.metaKey === true)) || (ts.keyCode >= 35 && ts.keyCode <= 40)) {
            return
        }
        if ((ts.shiftKey || (ts.keyCode < 48 || ts.keyCode > 57)) && (ts.keyCode < 96 || ts.keyCode > 105)) {
            ts.preventDefault()
        }
    }

    function getMakerId(ts) {
        if (cG) {
            return $(ts + " #makeSelect").val()
        }
        if ("#tabs-tractor" === ts) {
            return kd
        }
        if ("#tabs-motorbike" === ts) {
            return oD
        }
        if ("#tabs-marine" === ts) {
            return jL
        }
        return kz(ts + " .tableMake")
    }

    function hc(ts) {
        if (cG) {
            sModel = j5.model
        } else {
            sModel = kz(ts + " .tableModel")
        }
        sModel = bp(sModel);
        return sModel
    }

    function kH() {
        if (cG) {
            return "ALL"
        }
        return cb()
    }

    function cE(ts) {
        if (cG) {
            return j5.year
        }
        return e9(ts + " .tableYear")
    }

    function dY(ts) {
        if (cG) {
            return j5.engine
        }
        return kz(ts + " .tableEngine")
    }

    function s7(ts) {
        if (cG) {
            return j5.detail
        }
        return kz(ts + " .tableDetail")
    }

    function E(ts) {
        if (cG) {
            return $(ts + " #detailSelectSelectBoxItText").text().replace(/,/g, "@")
        }
        return s7(ts)
    }

    function nX(ts) {
        if (cG) {
            return j5.seriesChassis
        }
        return dc(ts)
    }

    function iT(tt, ts) {
        return "height=" + ts + ",width=" + tt + ",left=10,top=10,resizable=yes,scrollbars=no,toolbar=no,menubar=no,location=no,directories=no,status=no,titlebar=no"
    }

    function r1(tt) {
        ji(jm + " .tablePart", qw);
        if (1 < bW) {
            $.get("lbrv.html" + kv(), function (tu) {
                m3($("#partInfoPopup .partInfo"), decodeResponseText(tu), ft)
            });
            return
        }
        if (1 === bW) {
            var ts = cF.split(",");
            if (ts.length > 1) {
                ou(ts[0], ts[1])
            }
        }
    }

    function oM(ts) {
        if (isEmpty(ts)) {
            throw"setupPartListTable isEmpty(selector)"
        }
        $(ts).dataTable({
            bDeferRender: true,
            bPaginate: false,
            bFilter: false,
            bSort: false,
            bInfo: false,
            bDestroy: true,
            bServerSide: false,
            bProcessing: false,
            bAutoWidth: false,
            bStateSave: false,
            sDom: '<"H"fr>t<"F"iS>',
            fnRowCallback: ag,
            fnServerData: hk,
            fnCookieCallback: nF
        });
        $(ts + " tbody").setupClick(f)
    }

    function cC(ts, tu, tv, tt) {
        j = tv;
        tt.jqXHR = sk(ts, qQ, tu, true)
    }

    function dt() {
        $("#tabs-vin-search .tableVinNumber").dataTable({
            bPaginate: false,
            bFilter: false,
            bSort: false,
            bInfo: false,
            bDestroy: true,
            bServerSide: false,
            bProcessing: false,
            bAutoWidth: false,
            fnRowCallback: aU,
            fnServerData: cC,
            fnCookieCallback: nF
        })
    }

    function aU(tw, tv, tu, tt) {
        var ts = $("td", tw);
        var tx = tv[1];
        ts.eq(0).addClass("title").attr("id", tx);
        ts.eq(1).addClass("id")
    }

    function iR() {
        $("#tabs-shoppingCart .tableShoppingCart").dataTable({
            bPaginate: false,
            bFilter: false,
            bSort: false,
            bInfo: false,
            bDestroy: true,
            bServerSide: false,
            bProcessing: false,
            bAutoWidth: false,
            fnRowCallback: mJ,
            fnServerData: hk,
            fnCookieCallback: nF
        })
    }

    function sX() {
        $("#tabs-garage .tableGarage").dataTable({
            bPaginate: false,
            bFilter: false,
            bSort: false,
            bInfo: false,
            bDestroy: true,
            bServerSide: false,
            bProcessing: false,
            bAutoWidth: false,
            fnRowCallback: kV,
            fnServerData: hk,
            fnCookieCallback: nF
        })
    }

    function kl(tt, ts) {
        sH = "";
        pH(tt, ts.target.parentNode)
    }

    function pH(tt, ts) {
        iZ(tt);
        $(ts).addClass("row_selected")
    }

    function iZ(ts) {
        $(ts + " tbody tr").removeClass("row_selected")
    }

    function jz(ts) {
        return $(ts + " tbody tr.row_selected").first()
    }

    function e9(ts) {
        return jz(ts).children("td.DisplayText").text()
    }

    function i3() {
        $(".ShoppingCartLineDelete").setupClick(function () {
            var ts = $(this).attr("id");
            var tt = ts.indexOf(" ");
            var tu = ts.substring(tt + 1, ts.length);
            $.getJSON("ShoppingCart/DeleteOrderLine?aPartId=" + tu + "&v=" + mP, function (tv) {
                location.reload()
            })
        });
        $(".ShoppingCartLineQuantity").change(function () {
            var ts = $(this).attr("id");
            var tt = ts.indexOf(" ");
            var tu = ts.substring(tt + 1, ts.length);
            var tv = $(this).val();
            $.getJSON("ShoppingCart/AddOrderLine?aPartId=" + tu + "&aQuantity=" + tv + "&v=" + mP + "&aiu=" + q0, function (tw) {
                location.reload()
            })
        })
    }

    function fj() {
        refreshTabSettings(0, "#tabs-catalog");
        jy("#tabs-catalog .tableMake", buildRelativeQuery("#tabs-catalog", "GetMakeList"))
    }

    function sG(ts) {
        var tt = buildRelativeQuery(ts, "GetSeriesChassisList");
        if (isEmpty(tt)) {
            return
        }
        jy(ts + " .tableSeriesChassis", tt)
    }

    function dA(ts) {
        sK();
        var tt = go(ts + " .tableYear");
        if (2 === tt) {
            kW(ts + " .tableYear");
            $(ts + " .seriesInput").show();
            sG(ts);
            $(ts + " .seriesInput").focus();
            return
        }
        $(ts + " .yearInput").focus()
    }

    function rM() {
        refreshTabSettings(3, jm);
        sG(jm)
    }

    function pd() {
        refreshTabSettings(4, jm);
        var ts = buildRelativeQuery(jm, "GetEngineList");
        if (isEmpty(ts)) {
            return ""
        }
        jy(jm + " .tableEngine", ts)
    }

    function gV(ts) {
        var tt = kz(jm + " .tableDetail");
        if (ts) {
            if (cA(tt)) {
                return
            }
        }
        n3(jm, tt, ts)
    }

    function cb() {
        var ts = kz(jm + " .tableSubModel");
        if (isEmpty(ts)) {
            ts = "no_sub_model"
        }
        return ts
    }

    function rs(tt) {
        l5 = 10;
        hm = tt;
        var ts = nr();
        ts.push("&offset=" + tt);
        ts.push("&batchNumber=" + l5);
        ts.push("&", getParamsFromCheckboxes("&"));
        ts.push(se("&make=", "#searchMakeField"));
        ts.push(se("&model=", "#searchModelField"));
        ts.push(se("&subModel=", "#searchSubModelField"));
        ts.push(se("&year=", "#searchYearField"));
        ts.push(se("&cc=", "#searchCcField"));
        ts.push(se("&engine=", "#searchEngineField"));
        ts.push(se("&chassis=", "#searchChassisField"));
        ts.push(se("&series=", "#searchSeriesField"));
        ts.push(se("&body=", "#narrowSearchSelectBody"));
        ts.push(se("&fuel=", "#narrowSearchSelectFuel"));
        ts.push(se("&drive=", "#narrowSearchSelectDrive"));
        ts.push(se("&cylinder=", "#narrowSearchSelectCyls"));
        ts.push(se("&aspiration=", "#narrowSearchSelectAspr"));
        ts.push(se("&cam=", "#narrowSearchSelectCam"));
        ts.push(se("&vin=", "#searchVinField"));
        dy = "f" + getQueryPart(ts)
    }

    function mS(ts) {
        return validateTabId(ts) || ("#tabs-advanced-search" === ts) || ("#tabs-vin-search" === ts) || ("#tabs-general-merchandise" === ts)
    }

    function mi(ts) {
        $(ts + " .tableModelDiv").height("210px");
        $(ts + " .subModelLabel").hide();
        $(ts + " .tableSubModelDiv").hide()
    }

    function ot(tv, tu, tt, ts) {
        var tw = tu[0];
        $("td:eq(0)", tv).addClass("deleted");
        $("td:eq(1)", tv).addClass("DisplayText").attr("id", tw);
        return tv
    }

    function sK() {
        $(".deleted").remove()
    }

    function hX(tv, tu, tt, ts) {
        $("td:eq(0)", tv).addClass("Series");
        $("td:eq(1)", tv).addClass("Chassis");
        return tv
    }

    function kW(ts) {
        iZ(ts);
        fe(ts)
    }

    function fe(ts) {
        $(ts + " tbody tr:first").addClass("row_selected")
    }

    function ju() {
        if (!fS()) {
            return
        }
        if (dh(k0)) {
            k0 = jJ()
        }
        k0.jstree("close_all");
        eg()
    }

    function lB(tv, tx) {
        var ts = tv.node;
        if (startsWith(ts.text, "<button type=")) {
            return
        }
        k0.jstree("toggle_node", ts);
        var tu = ts.a_attr.id;
        if (-1 === tu.indexOf("&subGroupId=")) {
            var tt = l4(jm);
            var tw = tt + ".selectedParentCategory";
            nS[tw] = tu;
            od(tw, tu, a9);
            mE(jm, tu.replace("&parentGroupId=", ""))
        }
        nl(tu, ts.id);
        kT(tu);
        if (tx) {
            return
        }
        eg()
    }

    function bq(tv, tw, tt) {
        var tu = pg();
        if (tu) {
            pG()
        }
        var ts = tv.parent().next();
        while (ts && (ts.length > 0)) {
            if (ts.hasClass("categoryLine")) {
                break
            }
            if (tu && tt) {
                ts.find("td.partPrice .ToBeUpdated").each(ex)
            }
            tw(ts);
            ts = ts.next()
        }
        if (tu) {
            qo(jm + " .tablePart")
        }
    }

    function sl(ts) {
        mq(ts, "shouldBeHidden", "hidden")
    }

    function kx() {
        var tv;
        var tx = $(this);
        var tz = lt(tx);
        if (tz === "expand") {
            tv = tx
        } else {
            tv = tx.parent()
        }
        var tt = tv.parent();
        var tw = tt.attr("hiddencount");
        var tu;
        var ts = true;
        var ty = "";
        if (0 < tt.find("img.partPlusIcon").length) {
            tu = bX;
            ty = e1 + r0 + "Hide"
        } else {
            if (0 < tt.find("img.partMinusIcon").length) {
                ts = false;
                if (eE()) {
                    return
                }
                tu = sl;
                ty = cf + r0 + "Click for More Brands (" + tw + ")"
            }
        }
        ty = "<div class='expand'>" + ty + "</div>";
        bq(tt, tu, ts);
        aO(tv, ty, function () {
            tt.find(".partPlusIcon, .partMinusIcon, p.expandHideMessage, p.availableParts, div.expand").setupClick(kx)
        });
        gn(false)
    }

    function dM(ts) {
        if (ts.hasClass("-1")) {
            return -1
        }
        if (ts.hasClass("0")) {
            return 0
        }
        if (ts.hasClass("1")) {
            return 1
        }
        if (ts.hasClass("2")) {
            return 2
        }
        if (ts.hasClass("3")) {
            return 3
        }
        if (ts.hasClass("4")) {
            return 4
        }
        if (ts.hasClass("5")) {
            return 5
        }
        alert("getNodeLevel missing level")
    }

    function bX(ts) {
        hV(ts, "hidden")
    }

    function iC(ts) {
        hV(ts, "hiddenChildren")
    }

    function n9(ts) {
        mq(ts, "shouldBeHiddenChildren", "hiddenChildren")
    }

    function kX() {
        var tD = $(this);
        var tw = lt(tD);
        if (isEmpty(tw)) {
            alert("partChildrenIconClick isEmpty(sClass)");
            return
        }
        var ts;
        var tB;
        var tv = (tw === "availableParts");
        if (tv) {
            var tE = tD.parent().parent();
            tB = tE.find("td.partNumber div.expand");
            ts = tB.children("img");
            tw = lt(ts)
        } else {
            tB = tD.parent();
            if (tB.hasClass("partCategory")) {
                return
            }
            var tt = (tw === "expandHideMessage");
            if (tt) {
                ts = tB.children("img");
                tw = lt(ts)
            } else {
                ts = tD
            }
        }
        var tA = tB.children(".expandHideMessage");
        var ty = tB.parent().parent();
        var tC = tA.text();
        var tu = true;
        var tz;
        var tx = (tw == "partPlusIcon");
        if (tx) {
            tz = iC;
            tw = "partMinusIcon";
            tC = tC.replace("Click for", "Hide");
            ty.find("p.availableParts").text("")
        } else {
            if (eE()) {
                return
            }
            tz = n9;
            tw = "partPlusIcon";
            tC = tC.replace("Hide", "Click for");
            ty.find("p.availableParts").text(iq);
            tu = false
        }
        pM(ty, tz, tu);
        qM(ts, tw);
        tA.text(tC);
        gn(false)
    }

    function i9(tv, tu, tt, ts) {
        var tw = $("td:eq(0)", tv).parent();
        $("td:eq(0)", tv).addClass("dimensionDescription");
        $("td:eq(1)", tv).addClass("dimensionValue");
        return tv
    }

    function hs() {
        fK("//www.autoinfo.com.au/")
    }

    function aP() {
        fK("//autoinfo.com.au/fairuse.htm")
    }

    function lU() {
        ju();
        jR();
        if (mH()) {
            rD().addClass("jstree-clicked").removeClass("jstree-no-clicked")
        }
        mE(jm, "");
        mv(jm);
        st(true)
    }

    function eL() {
        var ts = 67;
        rb($("#tabs-vin-search div.divVinNumber"), ts + "px")
    }

    function eo() {
        var ts = 64 + dZ(jm + " div.divVinNumber");
        return ts
    }

    function mt() {
        if (ky()) {
            return eo()
        }
        if (kn()) {
            return 20
        }
        return 252
    }

    function oF() {
        if (ky()) {
            return 570
        }
        return 619
    }

    function qe() {
        if (ky()) {
            return fu
        }
        if (g9()) {
            return ff
        }
        return pY
    }

    function mB() {
        if (g2()) {
            return jc()
        }
        if (s0()) {
            return rP() + fw()
        }
        if (J(pt(".autodataLogFaultCodes"))) {
            return 1000
        }
        if (bF()) {
            return oF()
        }
        return qe()
    }

    function ev() {
        if (ky()) {
            return eo()
        }
        return 21
    }

    function d(ts) {
        return ts - i1 + 14
    }

    function kU(tt) {
        var ts = tt + ns - i1 - jo;
        if (ts < eJ) {
            return eJ
        }
        return ts
    }

    function pX() {
        var ts = 0;
        if (cT) {
            var tt = jm + " .standardTree .treePartGroup";
            if (rw(tt)) {
                ts = mZ(tt)
            }
            if (J(jm + " .autodataLogRepairTimes")) {
                ts = mZ(jm + " .autodataLogRepairTimes .treePartGroup")
            }
            if (aN) {
                ts += 25
            }
            if (ts < 360) {
                ts = 360
            }
            return ts
        }
        ts = 357;
        if (aN) {
            ts += 25
        }
        return ts
    }

    function dg() {
        return d(oG())
    }

    function g0() {
        if (ky()) {
            return fA
        }
        return fA
    }

    function jw() {
        if (ky()) {
            return fA + gw - 20
        }
        return kU(fA)
    }

    function np() {
        return 230
    }

    function lr() {
        return 230
    }

    function ss(tu, tt) {
        var ts = $(tu).val().length;
        if (ts > tt) {
            $(tu).val($(tu).val().slice(0, tt))
        } else {
            $("#feedbackLabelLimit").text("Feedback is limited to " + tt.toString() + " characters. There is " + (tt - ts).toString() + " characters left.")
        }
    }

    function ci(tt) {
        var ts = "/oscar/h?subCat=" + $(this).attr("id");
        $("#partInfoPopup .partInfo").load(ts, bk)
    }

    function or(tv) {
        var tw = $(this).attr("id");
        if (isEmpty(tw)) {
            alert("midCodeListLiClick idCsv is empty");
            return
        }
        var ts = tw.split(",");
        if (2 != ts.length) {
            alert("midCodeListLiClick invalid idCsv=" + tw);
            return
        }
        var tt = ts[0];
        var tu = ts[1];
        h5(tt, tu)
    }

    function bF() {
        var ts = qb();
        return ev() == bQ(ts)
    }

    function ao() {
        iS($(jm + " .tablePartSectionCollapse"), oG());
        if (!cT) {
            if (fS()) {
                iS($(jm + " " + gd()), lk())
            }
        }
        rb($(jm + " .logoImageAutoInfoSection"), dQ());
        iS($(jm + " .partImageSectionCollapse"), oG());
        kM(lr(), gG())
    }

    function ln(ts) {
        if (ky()) {
            eL()
        }
        if (!cT) {
            if (po(ts)) {
                if (km()) {
                } else {
                    iS($(ts + " " + gd()), g0())
                }
            }
        }
        rl(ts);
        rb($(ts + " .logoImageAutoInfoSection"), jG());
        kM(np(), 145)
    }

    function rl(tt) {
        if (("#tabs-part" === jm) || ("#tabs-part2" === jm)) {
            return
        }
        var ts = gG();
        iS($(tt + " .tablePartSectionCollapse"), ts);
        iS($(tt + " .partImageSectionCollapse"), ts)
    }

    function bY() {
        ln(jm)
    }

    function kM(tu, ts) {
        var tt = $(jm + " .partDimension");
        sP(tt, tu, ts)
    }

    function nn(ts) {
        return ((1 == ts) && (!mm)) || (mm && (2 == ts))
    }

    function pF(ty, tx, tu) {
        $(ty).show();
        var tw = $(tx);
        hw(tw);
        var tt = tw.dataTable();
        var ts = tt.fnSettings();
        ts.oFeatures.bServerSide = true;
        ts.oLanguage.sEmptyTable = " ";
        var tv = pu();
        tv.push("&partId=" + tu);
        ts.sAjaxSource = "GetPartDimensionList" + getQueryPart(tv);
        tt.fnDraw()
    }

    function ea() {
        mY();
        i2()
    }

    var gE = 0;

    function b1(ts) {
        var tt = jm;
        $(tt + " .toBeDeleted").remove();
        if ("#tabs-garage" === tt) {
            j(ts);
            rr();
            return
        }
        if ("#tabs-shoppingCart" === tt) {
            j(ts);
            return
        }
        ts = kt(ts);
        if (null === ts) {
            return
        }
        j(ts);
        j9(ts, tt)
    }

    function sb(ts) {
        ef(ts);
        var tt;
        if (sd()) {
            tt = "#tabs-crosspart";
            $(tt + " #partNumberTableSection thead tr th.partPicture").remove();
            if (!isEmpty(c5)) {
                $(tt + " #partNumberTableSection").css("background-image", "url(" + c5 + ")")
            }
            $("#tabs-crosspart #partNumberTableSection").hide().show().scrollTop(0).scrollLeft(0)
        } else {
            tt = jm
        }
        $(tt + " .partNoSelectButton," + tt + " .infoIcon," + tt + " .partIcon").setupClick(function () {
            rJ(ts, $(this).closest("tr"))
        });
        if (1 == ts.iTotalRecords) {
            $(tt + " .partNoSelectButton").click()
        }
    }

    function oL(ts) {
        mW(ts);
        setTimeout(function () {
            kg()
        }, 2000)
    }

    function iQ(tv, tu, ts) {
        console.log("debug searchVehicleSelectCategoryList aTabSelector=" + tv + " term=" + ts);
        if (!po(tv)) {
            return
        }
        var tt = "";
        if (qf(tv)) {
            if (gj(tv)) {
                return
            }
            tt = hL(ts, tu)
        } else {
            tt = fG(ts)
        }
        ra(tt, function (tw) {
            pD(tw, !isEmpty(ts), false)
        }, [], function (ty, tw, tx) {
            jJ().empty()
        })
    }

    function jR() {
        if (!fS()) {
            return
        }
        if (!io()) {
            return
        }
        k0.jstree("deselect_all")
    }

    function nM() {
        if (g9()) {
            return 6
        }
        return cO
    }

    function mU() {
        return "." + mz + "." + mO
    }

    function cX(ts) {
        if ("modelSelect" == ts) {
            return $.cookie("model" + mU())
        }
        if ("yearSelect" == ts) {
            return $.cookie("year" + mU())
        }
        if ("seriesChassisSelect" == ts) {
            return $.cookie("series" + mU())
        }
        if ("engineSelect" == ts) {
            return $.cookie("engine" + mU())
        }
        if ("detailSelect" == ts) {
            return $.cookie("detail" + mU())
        }
        return ""
    }

    function g9() {
        return ("#tabs-part" === jm) || ("#tabs-part2" === jm)
    }

    function io() {
        return !dh(k0)
    }

    function rb(ts, tt) {
        return ts.css("top", tt)
    }

    function km() {
        var ts = hP();
        return (ts === nD) || (ts === qr)
    }

    function fr(ts, tt) {
        return (!ts) && (!tt) && ((cT && rG()) || lh())
    }

    function o6() {
        var tt = $(gd() + " li a.jstree-clicked");
        var ts = tt.attr("id");
        if (ts === undefined) {
            return ""
        }
        return ts.replace(/&/g, ",")
    }

    function iS(tt, ts) {
        if (dh(tt)) {
            return tt
        }
        return tt.css("height", ts)
    }

    function ar() {
        dB();
        kg();
        ig();
        il = rw(".autodataLogBook .showLubeCheck");
        b5();
        if (!oE) {
            bJ()
        }
        if (o3) {
            sE();
            aW("#tabs-tractor")
        }
        lZ["#tabs-part"] = false;
        lZ["#tabs-part2"] = false;
        lZ["#tabs-crosspart"] = false;
        $(".mobileSite").setupClick(bD);
        if (!u()) {
            $(".VendorLinkText").css("width", "330px")
        }
        if (cT) {
            var ts = sj(tabsCatalogArr, ".tablePartSection");
            $(ts + ", #tabs-advanced-search .tablePartSection, #tabs-vin-search .tablePartSection").css("overflow-y", "hidden")
        } else {
            $(".partNumberVehicleTableSection").css("overflow", "auto").height("180px")
        }
        $(".vehicleFitmentButton").hide();
        f1 = Q() || oj() || g1();
        if (f1) {
            iD()
        } else {
            if (c4()) {
                rR()
            }
        }
        q7();
        hw($(".tablePartDimension"));
        re();
        if (rw("#tabs-part")) {
            gB("#tabs-part")
        }
        if (rw("#tabs-part2")) {
            gB("#tabs-part2")
        }
        rQ($("#Translation").val());
        g5 = $(hq("buttonPartAdd", bN));
        $('#countryFilter input[type="checkbox"], #vehicleTypeFilter input[type="checkbox"]').change(function () {
            nB = false
        });
        qG();
        jj();
        $(".showAllParts").hide().setupClick(lU);
        $(".AutoinfoLogoUrl").setupClick(hs);
        $(".FairUsePolicy").setupClick(aP);
        $(".vehicleOption").change(fj);
        $("#buttonGoToShoppingCart").setupClick(sq);
        $(".partClickImageForLagerViewLabel").hide();
        $(".holdPartForComparisonFormDiv").hide();
        $(".formNotes").hide();
        $("#formVendor").hide();
        oC();
        if (!oE) {
            dD()
        }
        $(".checkBoxChassis").setupClick(rM);
        $(".checkBoxSeries").setupClick(rM);
        if (!kJ) {
            $("#buttonGoToShoppingCart").hide()
        }
        oM("#tabs-catalog .tablePart");
        j6();
        $("#formVendor").hide();
        if (rw("#tabs-vin-search")) {
            ea()
        }
        fi();
        if (oh()) {
            $(".tablePartSection").css("width", "724px");
            $(".partImageSection").css("left", "890px").hide();
            var tv = parseInt("724px".replace("px", ""));
            if (tv > 740) {
                $(".partNumberSearch .partImageSection").css("left", "786px").css("width", "214px");
                $(".partNumberSearch .partDimension").css("width", "214px")
            } else {
                $(".partNumberSearch .partImageSection").css("left", "705px").css("width", "278px")
            }
        }
        if (0 === aE) {
            $(".partNumber").css("width", "170px");
            $(".partBrand").hide()
        }
        if (sS) {
            var tt = parseInt(aT);
            if (tt < 37) {
                $(".tablePart").css("left", "-16px")
            }
        }
        $("#tabs").show();
        dI();
        ph = bL(hT);
        if (fS()) {
            ng()
        }
        var tw = isEmpty("");
        if (tw) {
            if (f1) {
                dS()
            }
        } else {
            if (oE) {
                fC(ba);
                $("#tabs-part2 .partNumberInput").val("").promise().done(function () {
                    setTimeout(function () {
                        py(false, "#tabs-part2")
                    }, 100)
                })
            } else {
                if (g === ph) {
                    fC(g);
                    $("#tabs-part .partNumberInput").val("").promise().done(function () {
                        setTimeout(function () {
                            py(false, "#tabs-part")
                        }, 100)
                    })
                }
            }
        }
        $(".addToGarageButton").setupClick(jI).hide();
        $(".showLubeCheck").setupClick(function (tx) {
            fQ(true, true)
        });
        gn(true);
        if (oE) {
            jm = "#tabs-part2";
            rl(jm)
        } else {
            if (!tw) {
                if (g === ph) {
                    jm = "#tabs-part";
                    rl(jm)
                }
            }
        }
        k9 = rw("#UseAutoinfoUniqueId");
        if (!cT) {
            if (!km()) {
                iS($(".standardTree .treePartGroup"), eJ + "px")
            }
        }
        $(".standardTree .searchTree .codeInput").on("input", nh);
        $(".searchTree .clear").setupClick(gW);
        $(".registrationPlateDiv .regoInput").css({left: ""});
        $("#tabs-part .tablePartSection").css({height: pI + "px"});
        rb($(".partNumberSearch .partNumberVehicleTableSection"), pI + "px");
        rb($(".partNumberSearch .vehicleFitment"), (pI + 20) + "px");
        el();
        if (r4()) {
        }
        if (pi) {
            var tu = $(document);
            tu.mousemove(function (tA) {
                var ty = 0;
                var tD = az === null;
                if (tD) {
                    az = Date.now()
                } else {
                    var tz = Date.now();
                    ty = tz - az;
                    var tC = Math.floor(ty / 1000);
                    if (tC > 10) {
                        tD = true;
                        eY = ""
                    }
                    az = tz
                }
                var tx = tA.clientX;
                var tE = tA.clientY;
                var tB = ty + "_" + tx + "_" + tE;
                if (tD) {
                    eY = tB
                } else {
                    eY = eY + "-" + tB
                }
            })
        }
    }

    function fi() {
        if (qh()) {
            jD();
            return
        }
        gz()
    }

    function gz() {
        $("#tabs-catalog .regoInput").css({top: "-18px", "font-size": "26px"});
        $("#tabs-catalog .regoButtonSearch").css({top: "-4px",});
        $(".svgContainer text").css({"font-size": "10px",})
    }

    function jD() {
        $("#tabs-catalog .regoInput").css({top: "-16px", "font-size": "14px", width: "150px"});
        $("#tabs-catalog .regoButtonSearch").css({top: "-8px",});
        $(".svgContainer text").css({"font-size": "6px",})
    }

    function hW() {
        var ts = window.location.href;
        c0 = ((-1 != ts.indexOf("/oscar/scanz44/ss")) || (-1 != ts.indexOf("/oscar/scaau88/ss")));
        _cookies = rz("c");
        if (dh(console)) {
            this.console = {
                log: function () {
                }
            }
        }
        if (lp) {
            return
        }
        if (!(rw("#tabs") || rw("#vehicleSelector"))) {
            return
        }
        hN = (window.self !== window.top);
        ce = window.location.href;
        qO();
        hf = rw("#CheckIeVersion");
        aj();
        if (oE) {
            iS($("#tabs-part2 .tablePartSection, #tabs-part2 .partImageSection"), 160)
        }
        if (qd.msie) {
            if (!hf) {
                if ((aT == "6") || (aT == "7")) {
                    alert("Please update to Internet Explorer 9 or higher alternatively use Google Chrome or Firefox, Internet Explorer 6 & Internet Explorer 7 & Internet Explorer 8 are no longer supported.");
                    return
                }
            }
        }
        if (c0) {
            if ((-1 != ts.indexOf("/oscar/scanz44/ss?id=&")) || (-1 != ts.indexOf("/oscar/scaau88/ss?id=&"))) {
                alert("Please refresh the page. Missing id the href is " + ts);
                return
            }
        }
        $("#partInfoPopupFullScreen, #partInfoPopup, #regoSearchState, #regoExtraInformation, #regoSaveState, #tabs-vin-search .regoButtonDetail, #waitingScreenText, #qrPopup, #stockInfoPopup").hide();
        $("#partInfoPopupFullScreen").setupClick(pO);
        fillXorCodes();
        fillHexToIntDict();
        hT = $("#ActiveTab").val();
        hJ = $("#guid").val();
        lG = $("#country").val();
        cG = rw("#vehicleSelector");
        rL = parseInt($("#distributorid").val());
        qj();
        rd("1", rn)
    }

    return l1()
}

$(document).ready(function () {
    var a = new O00O();
    a.OO00()
})