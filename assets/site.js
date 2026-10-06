// China-marker marks and empty-frame handling. The page works without this file.
(function () {
  var NS = "http://www.w3.org/2000/svg";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canHover = window.matchMedia("(hover: hover)").matches;

  // Paths are drawn at the mark's real pixel size, so the nib stays the same
  // width on a phone and a desktop. Each one wobbles a few pixels, like a hand.
  // Small seeded random, so each frame gets its own hand but redraws the same way.
  function rng(seed) {
    return function () {
      seed = (seed + 0x6d2b79f5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  var shapes = {
    // Four separate strokes, one per side. Corners overshoot and stay open.
    box: function (w, h, r) {
      function j() {
        return (r() * 2 - 1) * 3;
      }
      // One side: a few low bends whose size grows with the side's length,
      // so a long stroke wanders like a hand instead of reading as a ruler.
      function side(x0, y0, x1, y1) {
        var len = Math.hypot(x1 - x0, y1 - y0);
        var amp = Math.max(2.5, Math.min(10, len * 0.007));
        var nx = -(y1 - y0) / len;
        var ny = (x1 - x0) / len;
        var bends = len > 500 ? 3 : 2;
        var d = "M" + (x0 + j()).toFixed(1) + " " + (y0 + j()).toFixed(1);
        for (var k = 1; k <= bends; k++) {
          var t0 = (k - 0.66) / bends;
          var t1 = (k - 0.33) / bends;
          var t2 = k / bends;
          var o0 = (r() * 2 - 1) * amp;
          var o1 = (r() * 2 - 1) * amp;
          var o2 = k === bends ? j() : (r() * 2 - 1) * amp * 0.6;
          d +=
            " C" + (x0 + (x1 - x0) * t0 + nx * o0).toFixed(1) + " " + (y0 + (y1 - y0) * t0 + ny * o0).toFixed(1) +
            " " + (x0 + (x1 - x0) * t1 + nx * o1).toFixed(1) + " " + (y0 + (y1 - y0) * t1 + ny * o1).toFixed(1) +
            " " + (x0 + (x1 - x0) * t2 + nx * o2).toFixed(1) + " " + (y0 + (y1 - y0) * t2 + ny * o2).toFixed(1);
        }
        return d;
      }
      return [side(-5, 7, w + 6, 5), side(w - 6, -4, w - 4, h + 5), side(w + 4, h - 6, -4, h - 5), side(7, h + 3, 5, -5)];
    },
    line: function (w, h) {
      return ["M1 " + h * 0.6 + " C" + w * 0.28 + " " + h * 0.25 + " " + w * 0.62 + " " + h * 0.85 + " " + (w - 1) + " " + h * 0.35];
    },
    ring: function (w, h) {
      return [
        "M" + w * 0.56 + " 3 C" + w * 0.86 + " 1 " + (w - 2) + " " + h * 0.28 + " " + (w - 3) + " " + h * 0.55 +
          " C" + (w - 5) + " " + (h - 2) + " " + w * 0.62 + " " + (h - 1) + " " + w * 0.42 + " " + (h - 2) +
          " C" + w * 0.14 + " " + (h - 4) + " 2 " + h * 0.72 + " 3 " + h * 0.42 +
          " C5 " + h * 0.12 + " " + w * 0.3 + " 2 " + w * 0.66 + " 6",
      ];
    },
  };

  var marks = [];

  function make(host, kind, cls) {
    var el = document.createElementNS(NS, "svg");
    el.setAttribute("aria-hidden", "true");
    el.setAttribute("focusable", "false");
    el.setAttribute("class", cls);
    host.appendChild(el);
    var seed = marks.length + 7;
    marks.push({ el: el, kind: kind, seed: seed });
    if (kind === "box") {
      // A hand never boxes square to the frame.
      el.style.transform = "rotate(" + ((rng(seed * 31)() - 0.5) * 1.6).toFixed(2) + "deg)";
    }
    return el;
  }

  function draw(m) {
    var rect = m.el.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    var w = Math.round(rect.width);
    var h = Math.round(rect.height);
    var r = rng(m.seed);
    m.el.setAttribute("viewBox", "0 0 " + w + " " + h);
    var ds = shapes[m.kind](w, h, r);
    var paths = m.el.querySelectorAll("path");
    ds.forEach(function (d, i) {
      var p = paths[i];
      if (!p) {
        p = document.createElementNS(NS, "path");
        p.setAttribute("pathLength", "1");
        if (m.kind === "box") {
          // Pressure changes from side to side; sides draw one after another.
          p.style.strokeWidth = (2.5 + r() * 1).toFixed(2) + "px";
          p.style.transitionDelay = (i * 0.11).toFixed(2) + "s";
        }
        m.el.appendChild(p);
      }
      p.setAttribute("d", d);
    });
  }

  document.querySelectorAll(".neg").forEach(function (neg) {
    make(neg, "box", "mark");
  });

  var inks = [];
  document.querySelectorAll(".u, .o").forEach(function (word) {
    var ring = word.classList.contains("o");
    inks.push(make(word, ring ? "ring" : "line", "ink-mark"));
  });

  function drawAll() {
    marks.forEach(draw);
  }
  drawAll();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawAll);
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(drawAll, 120);
  });

  // Missing screenshots show an empty frame instead of a broken image.
  document.querySelectorAll(".shot img").forEach(function (img) {
    function blank() {
      img.closest(".shot").classList.add("is-blank");
      // Never mark an empty frame as a keeper.
      var neg = img.closest(".neg");
      if (neg) neg.classList.remove("is-marked");
    }
    if (img.complete && img.naturalWidth === 0) blank();
    else img.addEventListener("error", blank);
  });

  // The print on a project page arrives boxed: it is the frame you picked.
  // A blank print stays unmarked.
  document.querySelectorAll(".print .neg").forEach(function (neg) {
    var img = neg.querySelector("img");
    function mark() {
      if (!neg.querySelector(".shot.is-blank")) neg.classList.add("is-marked");
    }
    if (img && !img.complete) img.addEventListener("load", mark);
    else setTimeout(mark, 250);
  });

  if (reduce || !("IntersectionObserver" in window)) return;

  // Word marks replay their stroke the first time they scroll into view.
  inks.forEach(function (m) {
    if (m.getBoundingClientRect().top > window.innerHeight * 0.9) m.classList.add("is-waiting");
  });
  var inkObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.remove("is-waiting");
        inkObserver.unobserve(e.target);
      });
    },
    { rootMargin: "0px 0px -15% 0px" }
  );
  inks.forEach(function (m) {
    if (m.classList.contains("is-waiting")) inkObserver.observe(m);
  });

  // On touch screens there is no hover, so frames get boxed as they cross mid-screen.
  if (canHover) return;
  var frameObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-marked");
        frameObserver.unobserve(e.target);
      });
    },
    { rootMargin: "-40% 0px -40% 0px" }
  );
  document.querySelectorAll(".sheet .neg:not(.is-marked)").forEach(function (neg) {
    frameObserver.observe(neg);
  });
})();
