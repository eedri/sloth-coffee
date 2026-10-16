(function () {
  "use strict";
  var D = window.SLOTH_DATA;
  var root = document.getElementById("app");

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

  /* answers: {mood, profile, need, flavor, alcohol} -> {drink, gin}. rng is injectable for tests. */
  function pickDrink(answers, rng) {
    rng = rng || Math.random;
    var vec = {};
    ["mood", "profile", "need", "flavor"].forEach(function (qid) {
      var opt = findOption(question(qid), answers[qid]);
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
    return { drink: best, gin: kind === "cocktail" && answers.alcohol === "gin" };
  }
  window.pickDrink = pickDrink;

  var step = 0;
  var answers = {};

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
    s.appendChild(el("h1", "sr-only", D.ui.brand + " – " + D.ui.slogan));
    s.appendChild(image("assets/logo.jpg", "logo", "Sloth Café – קפה עצלן"));
    s.appendChild(el("p", "lead", D.ui.welcomeText));
    var b = el("button", "btn primary", D.ui.start);
    b.type = "button";
    b.addEventListener("click", function () { step = 0; answers = {}; showQuestion(); });
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
    s.appendChild(el("p", "progress", D.ui.progress.replace("{n}", step + 1).replace("{total}", D.questions.length)));
    s.appendChild(el("h2", "q", q.title));
    s.appendChild(el("p", "hint", q.hint));

    var list = el("div", "options" + (q.spectrum ? " spectrum" : ""));
    q.options.forEach(function (o) {
      var b = el("button", "btn option", o.label);
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
      var back = el("button", "btn ghost", D.ui.back);
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
    s.appendChild(el("p", "intro", D.ui.resultIntro));
    var title = el("h2", "drink", d.en);
    title.dir = "ltr";
    s.appendChild(title);
    s.appendChild(el("p", "en", d.name));
    s.appendChild(el("p", "tagline", d.tagline));

    var roast = D.roast.mood[answers.mood] + " " + D.roast.profile[answers.profile];
    s.appendChild(el("p", "roast", roast));

    var parts;
    if (d.kind === "cocktail") {
      parts = ["קפה פילטר", "טוניק", d.syrup, d.bitters, r.gin ? "ג'ין" : "סירופ ג'וניפר"];
    } else {
      parts = ["V60", d.bitters];
    }
    s.appendChild(el("p", "recipe", parts.join(" · ")));

    var tag = d.kind === "cocktail" ? (r.gin ? D.ui.tagGin : D.ui.tagNoGin) : D.ui.tagCoffeeOnly;
    s.appendChild(el("span", "tag", tag));

    if (answers.alcohol === "nogin") s.appendChild(el("p", "note", D.ui.bittersNote));
    if (d.cookie) s.appendChild(el("p", "cookie", D.ui.cookieLabel + " " + d.cookie));

    s.appendChild(el("p", "bar-line", D.ui.showBar));
    var again = el("button", "btn primary", D.ui.again);
    again.type = "button";
    again.addEventListener("click", welcome);
    s.appendChild(again);
    setScreen(s);
  }

  welcome();
})();
