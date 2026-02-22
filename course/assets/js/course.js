// course/assets/js/course.js
function tokenKey(token, suffix) {
  return `course:${COURSE.name}:${token}:${suffix}`;
}

function setProgress(token, lessonIndex) {
  localStorage.setItem(tokenKey(token, "progress"), String(lessonIndex));
}

function getProgress(token) {
  const v = localStorage.getItem(tokenKey(token, "progress"));
  const n = Number(v);
  return Number.isFinite(n) ? n : 0; // 0 = ei aloitettu, 1 = lesson 1 valmis, jne.
}

function markLessonComplete(token, lessonIndex1based) {
  // Vain eteenpäin
  const current = getProgress(token);
  if (lessonIndex1based > current) setProgress(token, lessonIndex1based);
}

function lessonUrl(index1based, token) {
  return `lesson.html?step=${index1based}&token=${encodeURIComponent(token)}`;
}

function doneUrl(token) {
  return `done.html?token=${encodeURIComponent(token)}`;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function ensureWithinBounds(step) {
  const max = COURSE.lessons.length;
  if (!Number.isInteger(step) || step < 1) return 1;
  if (step > max) return max;
  return step;
}
