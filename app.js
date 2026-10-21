(function () {
  "use strict";
  var D = window.SLOTH_DATA;
  var EN = window.SLOTH_EN || {};
  var root = document.getElementById("app");

  /* Language: "he" (default, data.js) or "en" (data-en.js, falls back to Hebrew per string). */
  var lang = "he";
  try { if (localStorage.getItem("sloth-lang") === "en") lang = "en"; } catch (e) {}

  function pick(enValue, heValue) { return lang === "en" && enValue != null ? enValue : heValue; }
  function ui(key) { return pick(EN.ui && EN.ui[key], D.ui[key]); }
  function qText(q, field) { var e = EN.questions && EN.questions[q.id]; return pick(e && e[field], q[field]); }
  function optLabel(q, o) { var e = EN.questions && EN.questions[q.id]; return pick(e && e.options && e.options[o.id], o.label); }
  function drinkText(d, field) { var e = EN.drinks && EN.drinks[d.id]; return pick(e && e[field], d[field]); }
  function roastText(group, id) { var e = EN.roast && EN.roast[group]; return pick(e && e[id], D.roast[group][id]); }

  function applyLang() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    document.title = ui("title");
  }

  function setLang(l) {
    lang = l;
    try { localStorage.setItem("sloth-lang", l); } catch (e) {}
    applyLang();
    welcome();
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function findOption(q, id) {
    for (var i = 0; i < q.options.length; i++) if (q.options[i].id === id) return q.options[i];
    return null;
  }

  function question(id) {
    for (var i = 0; i < D.questions.length; i++) if (D.questions[i].id === id) return D.questions[i];
    return null;
  }

  /* answers: {questionId: optionId, ...} -> {drink}. rng is injectable for tests.
     Gin vs. juniper syrup is asked at the bar, not here. */
  function pickDrink(answers, rng) {
    rng = rng || Math.random;
    var vec = {};
    D.questions.forEach(function (q) {
      var opt = findOption(q, answers[q.id]);
      var w = (opt && opt.w) || {};
      for (var k in w) vec[k] = (vec[k] || 0) + w[k];
    });
    var kind = findOption(question("need"), answers.need).kind;
    var best = null, bestScore = -Infinity;
    D.drinks.forEach(function (d) {
      if (d.kind !== kind) return;
      var s = 0;
      for (var k in d.t) s += (vec[k] || 0) * d.t[k];
      s += rng() * 0.5; // small jitter: repeat visitors do not always get the same drink
      if (s > bestScore) { bestScore = s; best = d; }
    });
    return { drink: best };
  }
  window.pickDrink = pickDrink;

  function shuffle(list) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* The options one session sees for a question: `show` of the pool, shuffled.
     groupBy takes the same number from each group; always-options are kept. */
  function sessionOptions(q) {
    if (!q.show || q.show >= q.options.length) return shuffle(q.options);
    var chosen;
    if (q.groupBy) {
      var groups = {}, keys = [];
      q.options.forEach(function (o) {
        var k = o[q.groupBy];
        if (!groups[k]) { groups[k] = []; keys.push(k); }
        groups[k].push(o);
      });
      var per = Math.max(1, Math.floor(q.show / keys.length));
      chosen = [];
      keys.forEach(function (k) { chosen = chosen.concat(shuffle(groups[k]).slice(0, per)); });
    } else {
      var fixed = q.options.filter(function (o) { return o.always; });
      var rest = shuffle(q.options.filter(function (o) { return !o.always; }));
      chosen = fixed.concat(rest.slice(0, Math.max(0, q.show - fixed.length)));
    }
    return shuffle(chosen);
  }
  window.sessionOptions = sessionOptions;

  var step = 0;
  var answers = {};
  var shown = {};

  function setScreen(node) {
    root.textContent = "";
    root.appendChild(node);
    window.scrollTo(0, 0);
  }

  function image(src, cls, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.className = cls;
    img.alt = alt;
    return img;
  }

  function sloth() {
    return image("assets/sloth.jpg", "mini", "");
  }

  function welcome() {
    var s = el("section", "screen welcome");
    var tabs = el("div", "lang");
    tabs.setAttribute("role", "tablist");
    [["he", "עברית"], ["en", "English"]].forEach(function (pair) {
      var t = el("button", "lang-tab" + (lang === pair[0] ? " on" : ""), pair[1]);
      t.type = "button";
      t.lang = pair[0];
      t.setAttribute("role", "tab");
      t.setAttribute("aria-selected", lang === pair[0] ? "true" : "false");
      t.addEventListener("click", function () { if (lang !== pair[0]) setLang(pair[0]); });
      tabs.appendChild(t);
    });
    s.appendChild(tabs);
    s.appendChild(el("h1", "sr-only", ui("brand") + " – " + ui("slogan")));
    s.appendChild(image("assets/logo.jpg", "logo", "Sloth Café – קפה עצלן"));
    s.appendChild(el("p", "lead", ui("welcomeText")));
    var b = el("button", "btn primary", ui("start"));
    b.type = "button";
    b.addEventListener("click", function () {
      step = 0;
      answers = {};
      shown = {};
      D.questions.forEach(function (q) { shown[q.id] = sessionOptions(q); });
      showQuestion();
    });
    s.appendChild(b);
    setScreen(s);
  }

  function showQuestion() {
    var q = D.questions[step];
    var s = el("section", "screen");
    var bar = el("div", "bar");
    var fill = el("div", "fill");
    fill.style.width = (step / D.questions.length * 100) + "%";
    bar.appendChild(fill);
    s.appendChild(bar);
    s.appendChild(el("p", "progress", ui("progress").replace("{n}", step + 1).replace("{total}", D.questions.length)));
    s.appendChild(el("h2", "q", qText(q, "title")));
    s.appendChild(el("p", "hint", qText(q, "hint")));

    var list = el("div", "options");
    shown[q.id].forEach(function (o) {
      var b = el("button", "btn option", optLabel(q, o));
      b.type = "button";
      if (answers[q.id] === o.id) b.className += " picked";
      b.addEventListener("click", function () {
        answers[q.id] = o.id;
        b.className += " picked";
        setTimeout(next, 160);
      });
      list.appendChild(b);
    });
    s.appendChild(list);

    if (step > 0) {
      var back = el("button", "btn ghost", ui("back"));
      back.type = "button";
      back.addEventListener("click", function () { step--; showQuestion(); });
      s.appendChild(back);
    }
    setScreen(s);
  }

  function next() {
    step++;
    if (step >= D.questions.length) showResult(); else showQuestion();
  }

  function showResult() {
    var r = pickDrink(answers);
    var d = r.drink;
    var s = el("section", "screen result");
    s.appendChild(sloth());
    s.appendChild(el("p", "intro", ui("resultIntro")));
    var title = el("h2", "drink", d.en);
    title.dir = "ltr";
    s.appendChild(title);
    s.appendChild(el("p", "en", drinkText(d, "name")));
    s.appendChild(el("p", "tagline", drinkText(d, "tagline")));

    var roast = roastText("type", answers.type) + " " + roastText("day", answers.day);
    s.appendChild(el("p", "roast", roast));

    var parts;
    if (d.kind === "cocktail") {
      parts = [ui("recipeCoffee"), ui("recipeTonic"), drinkText(d, "syrup"), drinkText(d, "bitters"), ui("recipeSpirit")];
    } else {
      parts = ["V60", drinkText(d, "bitters")];
    }
    s.appendChild(el("p", "recipe", parts.join(" · ")));

    var tag = d.kind === "cocktail" ? ui("tagCocktail") : ui("tagCoffeeOnly");
    s.appendChild(el("span", "tag", tag));

    if (d.cookie) s.appendChild(el("p", "cookie", ui("cookieLabel") + " " + drinkText(d, "cookie")));

    s.appendChild(el("p", "bar-line", ui("showBar")));
    var again = el("button", "btn primary", ui("again"));
    again.type = "button";
    again.addEventListener("click", welcome);
    s.appendChild(again);
    setScreen(s);
  }

  applyLang();
  welcome();
})();
