// How-to-play card for Look Again (hub intro hook, see CONTRACT.md). Static, no case data; the example never shows a photo.
const TX = {
  en: { title: '🔎 Look Again', clue: 'Clue 1', hint: '💡 Hint → +1',
    steps: ['A real FBI wanted case. Start with one clue.', 'Pick what kind of case it is.', 'Right on clue 1: +3. After the 💡 hint: +1.'] },
  zh: { title: '🔎 再看一眼', clue: '線索 1', hint: '💡 看提示 → +1',
    steps: ['一件真實的 FBI 通緝案，先給你一條線索。', '猜猜這是哪種案子。', '只看線索 1 就猜中 +3；看了 💡 提示再猜中 +1。'] }
};
function example(t) {
  const b = e => `<span style="text-align:center;padding:.3em 0;border-radius:.4em;background:#1b2027;border:1px solid #ffffff38">${e}</span>`;
  return `<div aria-hidden="true" style="display:flex;flex-direction:column;gap:.35em;font-size:.85em">
<div style="border-radius:.5em;background:#f3ecd9;color:#222;padding:.4em .6em;display:flex;flex-direction:column;gap:.3em">
<div style="display:flex;justify-content:space-between;font-weight:800;font-size:.85em"><span>🔎 ${t.clue}</span><span style="background:#ffb000;border-radius:999px;padding:0 .5em">+3</span></div>
<span style="display:block;height:.45em;width:92%;background:#0003;border-radius:.3em"></span><span style="display:block;height:.45em;width:64%;background:#0003;border-radius:.3em"></span>
<span style="align-self:flex-start;font-size:.85em;font-weight:700;border:1px dashed #0006;border-radius:.4em;padding:.05em .45em">${t.hint}</span></div>
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.35em">${['💻', '💰', '🕵️', '🚨'].map(b).join('')}</div></div>`;
}
// Short landscape screens: the hub card hides the picture (the steps carry the rules); standalone pages lay it out side by side.
const wrap = h => `<style>@media (orientation:landscape) and (max-height:520px){.m-look .mx-look{display:none}}</style><div class="mx-look">${h}</div>`;
export function intro(lang) {
  const t = TX[lang === 'zh' ? 'zh' : 'en'];
  return { title: t.title, steps: t.steps.slice(), example: wrap(example(t)) };
}
export default intro;
