(() => {
  "use strict";
  const lessons = window.IRZA_LESSONS || [];
  const questions = window.IRZA_QUESTIONS || [];
  const STORE_KEY = "irzaLearningWorkspace_v2";
  const defaults = { completedLessons: [], answers: {}, attempts: 0, lastLessonId: null, theme: "dark" };
  let state = loadState();
  let activeLessonId = null;
  let activeQuestionId = null;
  let selectedAnswer = null;
  let hintIndex = 0;
  let currentLessonFilter = "all";
  let currentQuestionFilter = "all";
  let searchTerm = "";
  let toastTimer = null;

  const $ = (id) => document.getElementById(id);
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"
  }[char]));
  const safeState = (value) => value && typeof value === "object" ? value : {};
  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
      return {
        ...defaults,
        ...safeState(saved),
        completedLessons: Array.isArray(saved.completedLessons) ? saved.completedLessons : [],
        answers: safeState(saved.answers)
      };
    } catch (_) {
      return { ...defaults };
    }
  }
  function saveState() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
    catch (_) { showToast("Penyimpanan browser tidak tersedia pada sesi ini."); }
  }
  function showToast(message) {
    const node = $("toast");
    if (!node) return;
    node.textContent = message;
    node.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => node.classList.remove("show"), 2400);
  }
  function isComplete(id) { return state.completedLessons.includes(id); }
  function checkedCount() { return Object.keys(state.answers).length; }
  function correctCount() {
    return Object.values(state.answers).filter((item) => item && item.correct).length;
  }
  function progressPercent() {
    return lessons.length ? Math.round((state.completedLessons.length / lessons.length) * 100) : 0;
  }

  const panelNames = {
    home:"Beranda", lessons:"Jalur materi", "lesson-detail":"Materi", practice:"Ruang latihan",
    quiz:"Latihan soal", progress:"Progres belajar", source:"Tentang sumber belajar"
  };
  function showView(view) {
    const panel = document.querySelector('[data-panel="' + view + '"]');
    if (!panel) return;
    document.querySelectorAll(".view-panel").forEach((node) => node.classList.toggle("active", node === panel));
    document.querySelectorAll(".nav-item, .mobile-nav button").forEach((node) => {
      const target = node.dataset.view;
      const activeTarget = view === "lesson-detail" ? "lessons" : view === "quiz" ? "practice" : view === "source" ? "home" : view;
      node.classList.toggle("active", target === activeTarget);
    });
    $("breadcrumbCurrent").textContent = panelNames[view] || "Workspace";
    if (view === "home") renderHome();
    if (view === "lessons") renderLessons();
    if (view === "practice") renderPractice();
    if (view === "progress") renderProgress();
    window.scrollTo({ top:0, behavior:"smooth" });
  }

  function renderHome() {
    const done = state.completedLessons.length;
    const answered = checkedCount();
    const accuracy = answered ? Math.round((correctCount() / answered) * 100) : null;
    $("statLessons").innerHTML = done + "<span>/" + lessons.length + "</span>";
    $("statQuestions").innerHTML = answered + "<span>/" + questions.length + "</span>";
    $("statAccuracy").innerHTML = (accuracy === null ? "—" : accuracy) + "<span>%</span>";
    $("statLessonsBar").style.width = (lessons.length ? (done / lessons.length) * 100 : 0) + "%";
    $("statQuestionsBar").style.width = (questions.length ? (answered / questions.length) * 100 : 0) + "%";
    $("statAccuracyBar").style.width = (accuracy === null ? 0 : accuracy) + "%";
    $("statLessonsText").textContent = done ? "Terus jaga ritme belajarmu" : "Mulai dari satu topik";
    $("statQuestionsText").textContent = answered ? "Satu langkah lebih terlatih" : "Latih cara berpikirmu";

    let recommended = lessons.find((item) => item.id === state.lastLessonId);
    if (!recommended || isComplete(recommended.id)) recommended = lessons.find((item) => !isComplete(item.id)) || lessons[0];
    if (recommended) {
      $("continueTitle").textContent = recommended.title;
      $("continueDescription").textContent = recommended.description;
      $("continueLabel").textContent = isComplete(recommended.id) ? "LANJUTKAN / ULANGI MATERI" : "RECOMMENDED NEXT STEP";
      $("openRecommended").dataset.lesson = recommended.id;
      $("continueLearning").dataset.lesson = recommended.id;
    }
    $("homeTopics").innerHTML = lessons.slice(0, 5).map((lesson) =>
      '<button class="topic-mini" data-open-lesson="' + lesson.id + '"><span class="topic-glyph">' + escapeHTML(lesson.glyph) +
      '</span><strong>' + escapeHTML(lesson.title) + '</strong><small>' + (isComplete(lesson.id) ? "Selesai ✓" : escapeHTML(lesson.category)) + '</small></button>'
    ).join("");
    $("navLessonCount").textContent = String(lessons.length);
  }

  function renderLessons() {
    const query = searchTerm.trim().toLowerCase();
    const filtered = lessons.filter((lesson) => {
      const matchesCategory = currentLessonFilter === "all" || lesson.category === currentLessonFilter;
      const matchesSearch = !query || (lesson.title + " " + lesson.description + " " + lesson.category).toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
    $("lessonResults").textContent = filtered.length + " topik";
    $("lessonGrid").innerHTML = filtered.length ? filtered.map((lesson, index) =>
      '<article class="lesson-card"><div class="lesson-card-top"><span class="lesson-glyph">' + escapeHTML(lesson.glyph) +
      '</span><span class="lesson-tag">' + escapeHTML(lesson.level) + '</span></div><h3>' + escapeHTML(lesson.title) +
      '</h3><p>' + escapeHTML(lesson.description) + '</p><div class="lesson-card-bottom"><span>◷ ' + escapeHTML(lesson.duration) +
      '</span><span class="' + (isComplete(lesson.id) ? "lesson-status" : "") + '">' + (isComplete(lesson.id) ? "SELESAI ✓" : "MATERI") +
      '</span></div><button class="lesson-open" data-open-lesson="' + lesson.id + '">' + (isComplete(lesson.id) ? "Buka ulang materi" : "Pelajari topik") + ' →</button></article>'
    ).join("") : '<div class="empty-state">Tidak ada topik yang cocok. Coba kata kunci lain.</div>';
  }

  function renderLessonDetail() {
    const lesson = lessons.find((item) => item.id === activeLessonId);
    if (!lesson) { showView("lessons"); return; }
    const related = questions.find((question) => question.topic === lesson.title);
    const done = isComplete(lesson.id);
    const concepts = lesson.concepts.map((item, index) =>
      '<div class="concept-item"><i>' + String(index + 1).padStart(2, "0") + '</i><div><strong>' + escapeHTML(item[0]) +
      '</strong><p>' + escapeHTML(item[1]) + '</p></div></div>'
    ).join("");
    const formulas = lesson.formulas.map((item) =>
      '<div class="formula-row"><div><strong>' + escapeHTML(item[0]) + '</strong><small>' + escapeHTML(item[2]) +
      '</small></div><code>' + escapeHTML(item[1]) + '</code></div>'
    ).join("");
    const methods = lesson.method.map((item, index) =>
      '<div class="method-row"><b>' + String(index + 1).padStart(2, "0") + '</b><span><strong>' +
      ["Baca situasi","Tentukan target","Pilih hubungan","Periksa hasil"][index] + '</strong><small>' + escapeHTML(item) + '</small></span></div>'
    ).join("");
    $("lessonDetail").innerHTML =
      '<div class="detail-hero"><div><div class="eyebrow">' + escapeHTML(lesson.level) + ' · ' + escapeHTML(lesson.category.toUpperCase()) +
      '</div><h1>' + escapeHTML(lesson.title) + '</h1><p>' + escapeHTML(lesson.intro) +
      '</p><div class="continue-meta" style="margin:14px 0 0"><span>◷ ' + escapeHTML(lesson.duration) + '</span><span>▤ Konsep dan rumus</span></div></div><div class="detail-number">' +
      escapeHTML(lesson.glyph) + '</div></div><div class="detail-layout"><article class="detail-main"><h2>Konsep utama</h2><div class="concept-list">' +
      concepts + '</div><h2>Rumus penting</h2><div class="formula-list">' + formulas +
      '</div><div class="detail-actions"><button class="button button-primary" id="markLessonDone">' + (done ? "Materi sudah selesai ✓" : "Tandai materi selesai") +
      '</button>' + (related ? '<button class="button button-quiet" id="relatedQuestion" data-question="' + related.id + '">Coba soal terkait →</button>' : "") +
      '</div></article><aside class="detail-aside"><div class="eyebrow">PROBLEM SOLVING</div><h3>Alur berpikir saat mengerjakan soal</h3><div class="method-list">' +
      methods + '</div><div class="bottom-note"><span>ⓘ</span><p>Jangan langsung memasukkan angka. Pastikan konsep dan satuan sudah sesuai.</p></div></aside></div>';
    $("markLessonDone").addEventListener("click", () => {
      if (!isComplete(lesson.id)) state.completedLessons.push(lesson.id);
      saveState();
      renderLessonDetail();
      showToast("Progres materi tersimpan.");
    });
    const relatedButton = $("relatedQuestion");
    if (relatedButton) relatedButton.addEventListener("click", () => openQuiz(relatedButton.dataset.question));
  }

  function openLesson(id) {
    const lesson = lessons.find((item) => item.id === id);
    if (!lesson) return;
    activeLessonId = id;
    state.lastLessonId = id;
    saveState();
    renderLessonDetail();
    showView("lesson-detail");
  }

  function renderPractice() {
    const filtered = questions.filter((question) => {
      const answered = Boolean(state.answers[question.id]);
      return currentQuestionFilter === "all" || (currentQuestionFilter === "answered" ? answered : !answered);
    });
    $("questionResults").textContent = filtered.length + " soal";
    $("questionList").innerHTML = filtered.length ? filtered.map((question, index) => {
      const result = state.answers[question.id];
      return '<article class="question-row"><div class="question-num">' + String(index + 1).padStart(2, "0") +
        '</div><div class="question-info"><strong>' + escapeHTML(question.title) + '</strong><small>' +
        escapeHTML(question.topic) + ' · ' + escapeHTML(question.level) + '</small></div><span class="question-state ' +
        (result ? "done" : "") + '">' + (result ? (result.correct ? "Tepat ✓" : "Sudah dicoba") : "Belum dicoba") +
        '</span><button class="question-start" data-question="' + question.id + '">' + (result ? "Ulangi" : "Mulai") + ' →</button></article>';
    }).join("") : '<div class="empty-state">Semua soal pada filter ini sudah ditinjau.</div>';
  }

  function openQuiz(id) {
    const question = questions.find((item) => item.id === id);
    if (!question) return;
    activeQuestionId = id;
    selectedAnswer = null;
    hintIndex = 0;
    renderQuiz();
    showView("quiz");
  }

  function renderQuiz() {
    const question = questions.find((item) => item.id === activeQuestionId);
    if (!question) { showView("practice"); return; }
    const previous = state.answers[question.id];
    $("quizContent").innerHTML =
      '<article class="quiz-card"><div class="quiz-top"><span class="quiz-type">LATIHAN · ' + escapeHTML(question.level.toUpperCase()) +
      '</span><span class="quiz-count">' + escapeHTML(question.topic) + '</span></div><h1>' + escapeHTML(question.prompt) +
      '</h1><p class="quiz-context">' + escapeHTML(question.context) +
      '</p><div class="quiz-options">' + question.choices.map((choice, index) =>
        '<button class="quiz-option" data-choice="' + index + '"><span class="option-letter">' + String.fromCharCode(65 + index) +
        '</span><span>' + escapeHTML(choice) + '</span></button>'
      ).join("") + '</div><div id="hintArea"></div><div id="feedbackArea"></div><div class="quiz-actions"><button class="button button-outline" id="showHint">Minta petunjuk</button><button class="button button-primary" id="checkAnswer">Periksa jawaban →</button></div>' +
      (previous ? '<div class="bottom-note"><span>↻</span><p>Kamu pernah mencoba soal ini. Hasil sebelumnya: ' + (previous.correct ? "tepat" : "belum tepat") + '. Percobaan baru akan memperbarui hasil tersimpan.</p></div>' : "") +
      '</article>';
    document.querySelectorAll(".quiz-option").forEach((button) => {
      button.addEventListener("click", () => {
        selectedAnswer = Number(button.dataset.choice);
        document.querySelectorAll(".quiz-option").forEach((node) => node.classList.toggle("selected", node === button));
      });
    });
    $("showHint").addEventListener("click", showHint);
    $("checkAnswer").addEventListener("click", checkAnswer);
  }

  function showHint() {
    const question = questions.find((item) => item.id === activeQuestionId);
    if (!question) return;
    const hint = question.hints[hintIndex];
    if (!hint) {
      showToast("Semua petunjuk sudah ditampilkan.");
      return;
    }
    $("hintArea").innerHTML = '<div class="quiz-hint"><strong>PETUNJUK ' + (hintIndex + 1) + ' / ' + question.hints.length +
      '</strong><p>' + escapeHTML(hint) + '</p></div>';
    hintIndex += 1;
    if (hintIndex >= question.hints.length) $("showHint").textContent = "Petunjuk terakhir ditampilkan";
    else $("showHint").textContent = "Petunjuk berikutnya (" + (hintIndex + 1) + "/" + question.hints.length + ")";
  }

  function checkAnswer() {
    const question = questions.find((item) => item.id === activeQuestionId);
    if (!question) return;
    if (selectedAnswer === null) {
      showToast("Pilih jawaban terlebih dahulu.");
      return;
    }
    const correct = selectedAnswer === question.answer;
    const old = state.answers[question.id];
    state.answers[question.id] = {
      selected: selectedAnswer,
      correct,
      attempts: (old ? old.attempts : 0) + 1
    };
    state.attempts += 1;
    saveState();
    const correctLabel = question.choices[question.answer];
    $("feedbackArea").innerHTML = '<div class="quiz-feedback ' + (correct ? "correct" : "incorrect") +
      '"><strong>' + (correct ? "Tepat. Penalaranmu sudah sesuai." : "Belum tepat. Mari periksa hubungan konsepnya.") +
      '</strong><p>' + (correct ? "Jawabanmu: " : "Jawaban yang tepat: ") + escapeHTML(correctLabel) +
      '</p><div class="quiz-explanation"><strong>Pembahasan</strong><p>' + escapeHTML(question.explanation) +
      '</p></div></div>';
    $("checkAnswer").textContent = "Coba soal lain →";
    $("checkAnswer").removeEventListener("click", checkAnswer);
    $("checkAnswer").addEventListener("click", () => showView("practice"));
    $("showHint").disabled = true;
    document.querySelectorAll(".quiz-option").forEach((node) => { node.disabled = true; });
    showToast(correct ? "Jawaban benar. Progres diperbarui." : "Jawaban diperiksa. Tetap lanjut belajar.");
  }

  function renderProgress() {
    const done = state.completedLessons.length;
    const answered = checkedCount();
    const correct = correctCount();
    const accuracy = answered ? Math.round((correct / answered) * 100) : 0;
    $("progressContent").innerHTML =
      '<div class="progress-overview"><article class="progress-panel"><div class="eyebrow">MATERI DIKUASAI</div><div class="progress-big">' + done +
      '<small> / ' + lessons.length + ' topik</small></div><div class="progress-track"><i style="width:' + progressPercent() +
      '%"></i></div><p>' + progressPercent() + '% dari jalur materi telah ditandai selesai.</p></article><article class="progress-panel"><div class="eyebrow">HASIL LATIHAN</div><div class="progress-big">' +
      (answered ? accuracy : "—") + '<small>' + (answered ? "% akurasi" : " belum ada hasil") +
      '</small></div><div class="progress-track"><i style="width:' + accuracy + '%"></i></div><p>' + correct + ' jawaban tepat dari ' + answered +
      ' soal yang sudah diperiksa.</p></article></div><article class="progress-panel"><h3>Perjalanan per topik</h3><div class="progress-detail-list">' +
      lessons.map((lesson) => '<div class="progress-detail-row"><span>' + escapeHTML(lesson.title) + '</span><small>' +
        (isComplete(lesson.id) ? "Selesai ✓" : "Belum selesai") + '</small></div>').join("") +
      '</div></article><article class="progress-panel" style="margin-top:14px"><h3>Ringkasan latihan</h3><div class="progress-detail-list">' +
      '<div class="progress-detail-row"><span>Total percobaan</span><small>' + state.attempts + '</small></div>' +
      '<div class="progress-detail-row"><span>Soal sudah dicoba</span><small>' + answered + ' / ' + questions.length + '</small></div>' +
      '<div class="progress-detail-row"><span>Jawaban tepat terakhir tersimpan</span><small>' + correct + '</small></div></div></article>';
  }

  function setTheme(theme) {
    state.theme = theme;
    document.body.classList.toggle("light-theme", theme === "light");
    $("themeToggle").textContent = theme === "light" ? "☼" : "◐";
    saveState();
  }

  document.addEventListener("click", (event) => {
    const viewButton = event.target.closest("[data-view]");
    if (viewButton) {
      showView(viewButton.dataset.view);
      return;
    }
    const lessonButton = event.target.closest("[data-open-lesson]");
    if (lessonButton) {
      openLesson(lessonButton.dataset.openLesson);
      return;
    }
    const questionButton = event.target.closest("[data-question]");
    if (questionButton) {
      openQuiz(questionButton.dataset.question);
      return;
    }
  });

  $("lessonFilters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    currentLessonFilter = button.dataset.filter;
    document.querySelectorAll("#lessonFilters .filter-pill").forEach((node) => node.classList.toggle("active", node === button));
    renderLessons();
  });
  $("questionFilters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-qfilter]");
    if (!button) return;
    currentQuestionFilter = button.dataset.qfilter;
    document.querySelectorAll("#questionFilters .filter-pill").forEach((node) => node.classList.toggle("active", node === button));
    renderPractice();
  });
  $("globalSearch").addEventListener("input", (event) => {
    searchTerm = event.target.value;
    showView("lessons");
    renderLessons();
  });
  $("globalSearch").addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.target.value = "";
      searchTerm = "";
      renderLessons();
      event.target.blur();
    }
  });
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      $("globalSearch").focus();
    }
  });
  $("continueLearning").addEventListener("click", () => openLesson($("continueLearning").dataset.lesson));
  $("openRecommended").addEventListener("click", () => openLesson($("openRecommended").dataset.lesson));
  $("themeToggle").addEventListener("click", () => setTheme(state.theme === "light" ? "dark" : "light"));
  $("sourceButton").addEventListener("click", () => showView("source"));
  $("resetProgress").addEventListener("click", () => {
    if (!window.confirm("Hapus seluruh progres belajar yang tersimpan pada browser ini?")) return;
    state = { ...defaults, completedLessons:[], answers:{}, attempts:0, lastLessonId:null, theme:state.theme };
    saveState();
    renderProgress();
    showToast("Progres lokal berhasil direset.");
  });
  const searchBox = document.querySelector(".search-box");
  document.querySelector(".search-box > span").addEventListener("click", () => {
    searchBox.classList.toggle("open");
    $("globalSearch").focus();
  });

  setTheme(state.theme === "light" ? "light" : "dark");
  renderHome();
  renderLessons();
  renderPractice();
  renderProgress();
  showView("home");
})();
