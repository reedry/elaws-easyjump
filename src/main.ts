import * as Sizzle from "sizzle";

var cmd = "";
var timer: number;
var Scroller: Window | HTMLElement = window;
var margin = 25;

window.onload = function () {
  if (location.href.indexOf("viewContents") == -1) {
    const elm = document.getElementById("right_content") ?? document.body;
    Scroller = elm;
    margin += getAbsolutePositionTop(elm);
  }
  let cmd_popup = document.createElement("div");
  document.body.appendChild(cmd_popup);
  cmd_popup.id = "easyjump_cmd_popup";
  cmd_popup.style.display = "none";
};

document.onkeydown = function (event) {
  const c = event.key;
  if ("0123456789".indexOf(c) != -1) {
    cmd += c;
    if (scrollToArticle(Number(cmd))) {
      clearTimeout(timer);
      timer = setTimeout(resetCmd, 2000);
      setPopupText(cmd);
    } else { // if not match
      clearTimeout(timer);
      resetCmd();
    }
  } else { // non-number keys
    cmd = "";
    clearTimeout(timer);
    resetCmd();
  }
};

function scrollToArticle(n: number): boolean {
  let elms = Sizzle(makeSelector(n));
  if (elms.length > 0) {
    let pos = getAbsolutePositionTop(elms[0]);
    let dist = pos - margin;
    debug([dist, pos, margin]);
    Scroller.scrollTo(0, dist);
    return true;
  } else {
    return false;
  }
}

function makeSelector(n: number): string {
  return ".ArticleTitle:contains('" + toKanjiNumeral(n) + "')";
}

const KANJIS = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九'];

function toKanjiNumeral(n: number): string {
  let ret = "";
  ret += makeDigit(Math.floor(n / 1000), '千');
  n = n % 1000;
  ret += makeDigit(Math.floor(n / 100), '百');
  n = n % 100;
  ret += makeDigit(Math.floor(n / 10), '十');
  n = n % 10;
  if (n != 0) ret += KANJIS[n];
  return ret;
}

function makeDigit(n: number, c: string): string {
  if (n == 0) return "";
  if (n == 1) return c;
  return KANJIS[n] + c;
}

function getAbsolutePositionTop(elm: Element): number {
  return elm.getBoundingClientRect().top + window.pageYOffset;
}

function resetCmd(): void {
  cmd = "";
  hidePopup();
}

function hidePopup(): void {
  let popup = document.getElementById("easyjump_cmd_popup");
  if (popup) popup.style.display = "none";
}

function setPopupText(s: string): void {
  let popup = document.getElementById("easyjump_cmd_popup");
  if (popup) {
    popup.style.display = "inline";
    popup.innerText = s;
  }
}

function debug(s: any): void {
  console.log(s);
  // TODO: debug popup
}
