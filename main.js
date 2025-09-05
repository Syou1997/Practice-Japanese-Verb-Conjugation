/* ====== 動詞データ（lesson1〜20 例／21〜50 空） ====== */
const LESSONS = {
  1: [
    { masu:"食べます", dictionary:"食べる", potential:"食べられます", passive:"食べられます", causative:"食べさせます", causativePassive:"食べさせられます",teform:"食べて" },
    { masu:"飲みます", dictionary:"飲む", potential:"飲めます", passive:"飲まれます", causative:"飲ませます", causativePassive:"飲ませられます",teform:"飲んで" }
  ],
  2: [
    { masu:"書きます", dictionary:"書く", potential:"書けます", passive:"書かれます", causative:"書かせます", causativePassive:"書かせられます",teform:"書いて" }
  ],
  3: [
    { masu:"行きます", dictionary:"行く", potential:"行けます", passive:"行かれます", causative:"行かせます", causativePassive:"行かせられます",teform:"行って" },
    { masu:"来ます", dictionary:"来る", potential:"来られます", passive:"来られます", causative:"来させます", causativePassive:"来させられます",teform:"来て" },
    { masu:"見ます", dictionary:"見る", potential:"見られます", passive:"見られます", causative:"見させます", causativePassive:"見させられます",teform:"見せて" }
  ],
  4: [
    { masu:"読みます", dictionary:"読む", potential:"読めます", passive:"読まれます", causative:"読ませます", causativePassive:"読ませられます",teform:"食べて" },
    { masu:"聞きます", dictionary:"聞く", potential:"聞けます", passive:"聞かれます", causative:"聞かせます", causativePassive:"聞かせられます",teform:"食べて" },
    { masu:"話します", dictionary:"話す", potential:"話せます", passive:"話されます", causative:"話させます", causativePassive:"話させられます",teform:"食べて" }
  ],
  5: [
    { masu:"買います", dictionary:"買う", potential:"買えます", passive:"買われます", causative:"買わせます", causativePassive:"買わせられます",teform:"食べて" },
    { masu:"売ります", dictionary:"売る", potential:"売れます", passive:"売られます", causative:"売らせます", causativePassive:"売らせられます",teform:"食べて" },
    { masu:"使います", dictionary:"使う", potential:"使えます", passive:"使われます", causative:"使わせます", causativePassive:"使わせられます",teform:"食べて" }
  ],
  6: [
    { masu:"作ります", dictionary:"作る", potential:"作れます", passive:"作られます", causative:"作らせます", causativePassive:"作らせられます" },
    { masu:"待ちます", dictionary:"待つ", potential:"待てます", passive:"待たれます", causative:"待たせます", causativePassive:"待たせられます" },
    { masu:"持ちます", dictionary:"持つ", potential:"持てます", passive:"持たれます", causative:"持たせます", causativePassive:"持たせられます" }
  ],
  7: [
    { masu:"立ちます", dictionary:"立つ", potential:"立てます", passive:"立たれます", causative:"立たせます", causativePassive:"立たせられます" },
    { masu:"座ります", dictionary:"座る", potential:"座れます", passive:"座られます", causative:"座らせます", causativePassive:"座らせられます" },
    { masu:"歩きます", dictionary:"歩く", potential:"歩けます", passive:"歩かれます", causative:"歩かせます", causativePassive:"歩かせられます" }
  ],
  8: [
    { masu:"走ります", dictionary:"走る", potential:"走れます", passive:"走られます", causative:"走らせます", causativePassive:"走らせられます" },
    { masu:"泳ぎます", dictionary:"泳ぐ", potential:"泳げます", passive:"泳がれます", causative:"泳がせます", causativePassive:"泳がせられます" },
    { masu:"飛びます", dictionary:"飛ぶ", potential:"飛べます", passive:"飛ばれます", causative:"飛ばせます", causativePassive:"飛ばせられます" }
  ],
  9: [
    { masu:"寝ます", dictionary:"寝る", potential:"寝られます", passive:"寝られます", causative:"寝させます", causativePassive:"寝させられます" },
    { masu:"起きます", dictionary:"起きる", potential:"起きられます", passive:"起きられます", causative:"起きさせます", causativePassive:"起きさせられます" },
    { masu:"休みます", dictionary:"休む", potential:"休めます", passive:"休まれます", causative:"休ませます", causativePassive:"休ませられます" }
  ],
  10: [
    { masu:"勉強します", dictionary:"勉強する", potential:"勉強できる", passive:"勉強される", causative:"勉強させる", causativePassive:"勉強させられる" },
    { masu:"運動します", dictionary:"運動する", potential:"運動できる", passive:"運動される", causative:"運動させる", causativePassive:"運動させられる" },
    { masu:"掃除します", dictionary:"掃除する", potential:"掃除できる", passive:"掃除される", causcausative:"掃除させる", causativePassive:"掃除させられる" }
  ],
  11: [
    { masu:"料理します", dictionary:"料理する", potential:"料理できる", passive:"料理される", causative:"料理させる", causativePassive:"料理させられる" },
    { masu:"運転します", dictionary:"運転する", potential:"運転できる", passive:"運転される", causative:"運転させる", causativePassive:"運転させられる" },
    { masu:"練習します", dictionary:"練習する", potential:"練習できる", passive:"練習される", causative:"練習させる", causativePassive:"練習させられる" }
  ],
  12: [
    { masu:"始めます", dictionary:"始める", potential:"始められます", passive:"始められます", causative:"始めさせます", causativePassive:"始めさせられます" },
    { masu:"終わります", dictionary:"終わる", potential:"終われます", passive:"終わられます", causative:"終わらせます", causativePassive:"終わらせられます" },
    { masu:"続けます", dictionary:"続ける", potential:"続けられます", passive:"続けられます", causative:"続けさせます", causativePassive:"続けさせられます" }
  ],
  13: [
    { masu:"開けます", dictionary:"開ける", potential:"開けられます", passive:"開けられます", causative:"開けさせます", causativePassive:"開けさせられます" },
    { masu:"閉めます", dictionary:"閉める", potential:"閉められます", passive:"閉められます", causative:"閉めさせます", causativePassive:"閉めさせられます" },
    { masu:"押します", dictionary:"押す", potential:"押せます", passive:"押されます", causative:"押させます", causativePassive:"押させられます" }
  ],
  14: [
    { masu:"乗ります", dictionary:"乗る", potential:"乗れます", passive:"乗られます", causative:"乗らせます", causativePassive:"乗らせられます" },
    { masu:"降ります", dictionary:"降りる", potential:"降りられます", passive:"降りられます", causative:"降りさせます", causativePassive:"降りさせられます" },
    { masu:"歩きます", dictionary:"歩く", potential:"歩けます", passive:"歩かれます", causative:"歩かせます", causativePassive:"歩かせられます" }
  ],
  15: [
    { masu:"働きます", dictionary:"働く", potential:"働けます", passive:"働かれます", causative:"働かせます", causativePassive:"働かせられます" },
    { masu:"休みます", dictionary:"休む", potential:"休めます", passive:"休まれます", causative:"休ませます", causativePassive:"休ませられます" },
    { masu:"遊びます", dictionary:"遊ぶ", potential:"遊べます", passive:"遊ばれます", causative:"遊ばせます", causativePassive:"遊ばせられます" }
  ],
  16: [
    { masu:"会います", dictionary:"会う", potential:"会えます", passive:"会われます", causative:"会わせます", causativePassive:"会わせられます" },
    { masu:"教えます", dictionary:"教える", potential:"教えられます", passive:"教えられます", causative:"教えさせます", causativePassive:"教えさせられます" },
    { masu:"習います", dictionary:"習う", potential:"習えます", passive:"習われます", causative:"習わせます", causativePassive:"習わせられます" }
  ],
  17: [
    { masu:"送ります", dictionary:"送る", potential:"送れます", passive:"送られます", causative:"送らせます", causativePassive:"送らせられます" },
    { masu:"貸します", dictionary:"貸す", potential:"貸せます", passive:"貸されます", causative:"貸させます", causativePassive:"貸させられます" },
    { masu:"借ります", dictionary:"借りる", potential:"借りられます", passive:"借りられます", causative:"借りさせます", causativePassive:"借りさせられます" }
  ],
  18: [
    { masu:"入ります", dictionary:"入る", potential:"入れます", passive:"入られます", causative:"入らせます", causativePassive:"入らせられます" },
    { masu:"出ます", dictionary:"出る", potential:"出られます", passive:"出られます", causative:"出させます", causativePassive:"出させられます" },
    { masu:"帰ります", dictionary:"帰る", potential:"帰れます", passive:"帰られます", causative:"帰らせます", causativePassive:"帰らせられます" }
  ],
  19: [
    { masu:"歌います", dictionary:"歌う", potential:"歌えます", passive:"歌われます", causative:"歌わせます", causativePassive:"歌わせられます" },
    { masu:"踊ります", dictionary:"踊る", potential:"踊れます", passive:"踊られます", causative:"踊らせます", causativePassive:"踊らせられます" },
    { masu:"描きます", dictionary:"描く", potential:"描けます", passive:"描かれます", causative:"描かせます", causativePassive:"描かせられます" }
  ],
  20: [
    { masu:"考えます", dictionary:"考える", potential:"考えられます", passive:"考えられます", causative:"考えさせます", causativePassive:"考えさせられます" },
    { masu:"知ります", dictionary:"知る", potential:"知れます", passive:"知られます", causative:"知らせます", causativePassive:"知らされます" },
    { masu:"思います", dictionary:"思う", potential:"思えます", passive:"思われます", causative:"思わせます", causativePassive:"思わせられます" }
  ],
  21: [],22: [],23: [],24: [],25: [],26: [],27: [],28: [],29: [],30: [],
  31: [],32: [],33: [],34: [],35: [],36: [],37: [],38: [],39: [],40: [],
  41: [],42: [],43: [],44: [],45: [],46: [],47: [],48: [],49: [],50: []
};

/* ====== 共通ユーティリティ ====== */
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

document.addEventListener("DOMContentLoaded", () => {
  if ($('#lessonSelect')) initHome();
  if ($('#card')) initGame();
});

/* ====== ホーム画面 ====== */
function initHome() {
  const lessonSelect = $('#lessonSelect');
  const btnStart = $('#btnStart');
  const homeError = $('#homeError');
  const noDataDialog = $('#noDataDialog');
  const noDataClose = $('#noDataClose');

  for (let i = 1; i <= 50; i++) {
    const opt = document.createElement('option');
    opt.value = i; opt.textContent = `レッスン${i}`;
    lessonSelect.appendChild(opt);
  }

  const checks = $$('input[name="target"]');
  checks.forEach(chk => {
    chk.addEventListener('change', () => {
      if (chk.checked) checks.forEach(o => { if (o !== chk) o.checked = false; });
      updateStartButton();
    });
  });

  btnStart.addEventListener('click', () => {
    const lesson = parseInt(lessonSelect.value || '1', 10);
    const picked = checks.find(c => c.checked);

    if (!picked) {
      homeError.textContent = "変換ターゲットを1つ選んでください。";
      return;
    }

    const hasData = (LESSONS[lesson] || []).length > 0;
    if (!hasData) {
      if (typeof noDataDialog?.showModal === 'function') {
        noDataDialog.showModal();
      } else {
        alert("このレッスンには動詞がありません。");
      }
      return;
    }

    const params = new URLSearchParams({
      lesson,
      picked: picked.value,
      shuffle: $('#shuffleToggle')?.checked ? '1' : '0'
    });
    location.href = `game.html?${params}`;
  });

  noDataClose?.addEventListener('click', () => noDataDialog.close());

  function updateStartButton() {
    const picked = checks.find(c => c.checked);
    btnStart.disabled = !picked; // 無単語でも押せる→モーダルで通知
  }
  updateStartButton();
}

/* ====== ゲーム画面 ====== */
function initGame() {
  const sp = new URLSearchParams(location.search);
  const lesson = parseInt(sp.get('lesson') || '1', 10);
  const target = sp.get('picked') || 'dictionary';
  const shuffleFlag = sp.get('shuffle') === '1';

  const card = $('#card'),
        front = $('#cardFront'),
        back = $('#cardBack');
  const inner = card.querySelector('.flip-card-inner'); // ★ 用於監聽翻轉動畫結束
  const btnPrev = $('#btnPrev'), btnNext = $('#btnNext');
  const progress = $('#progress'), fill = $('#pbarFill');
  const wordSelect = $('#wordSelect');

  // Audio elements
  const bgmEl   = $('#bgm');
  const seFlip  = $('#seFlip');
  const sePrev  = $('#sePrev');
  const seNext  = $('#seNext');
  const btnBgm  = $('#btnBgm');
  const seToggle= $('#seToggle');
  const seVol   = $('#seVol');
  const bgmVol  = $('#bgmVol');

  // 設定（記憶）
  seToggle.checked = (localStorage.getItem('cfg.seOn') !== '0');
  seVol.value = Number(localStorage.getItem('cfg.seVol') ?? 0.6);
  bgmVol.value = Number(localStorage.getItem('cfg.bgmVol') ?? 0.35);
  let seOn = seToggle.checked;

  // BGM 初期化
  if (bgmEl) {
    bgmEl.volume = Number(bgmVol.value);
    bgmEl.preload = 'auto';
  }

  // 効果音初期化（基準音量保持，播放時 clone）
  const baseSeVolume = Number(seVol.value); // 現在未直接使用，但保留

  function playSE(el) {
    if (!seOn || !el) return;
    const p = el.cloneNode(true);
    p.volume = Number(seVol.value);
    p.play().catch(() => { /* 移動端末の未許可時は無視 */ });
  }

  // デッキ
  const base = (LESSONS[lesson] || []).map((v, i) => ({ id: `${lesson}:${i}`, front: v.masu, back: v[target] }));
  if (!base.length) { alert("このレッスンには動詞がありません。"); location.href = 'index.html'; return; }
  const deck = shuffleFlag ? shuffle(base) : base;

  let idx = 0, showingFront = true;

  function render() {
    const it = deck[idx];
    front.textContent = it.front;
    back.textContent = it.back;
    progress.textContent = `進捗：${idx + 1}/${deck.length}（レッスン${lesson}）`;
    fill.style.width = ((idx + 1) / deck.length * 100) + '%';
    if (wordSelect) wordSelect.value = idx;
  }
  function ensureFront() { showingFront = true; card.classList.remove('flipped'); }

  function flip() {
    showingFront = !showingFront;
    card.classList.toggle('flipped', !showingFront);
    playSE(seFlip);
  }

  // ★ 統一的換卡流程：若目前是背面，先翻回正面，等動畫結束再換卡
  function go(delta) {
    const advance = () => {
      idx = (idx + delta + deck.length) % deck.length;
      ensureFront(); // 新卡片一開始保持正面
      render();
      playSE(delta > 0 ? seNext : sePrev);
    };

    if (!showingFront) {
      // 先翻回正面
      ensureFront();
      const onEnd = (e) => {
        if (e.propertyName !== 'transform') return; // 僅處理翻轉完成
        inner.removeEventListener('transitionend', onEnd);
        advance();
      };
      inner.addEventListener('transitionend', onEnd);
    } else {
      advance();
    }
  }

  card.addEventListener('click', flip);
  card.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip(); }
    else if (e.key === 'ArrowLeft') { go(-1); }
    else if (e.key === 'ArrowRight') { go(1); }
  });
  btnPrev.addEventListener('click', () => go(-1));
  btnNext.addEventListener('click', () => go(1));
  $('#btnExit')?.addEventListener('click', () => location.href = 'index.html');

  // 単語ドロップダウン
  deck.forEach((it, i) => {
    const opt = document.createElement('option');
    opt.value = i; opt.textContent = `${i + 1}. ${it.front}`;
    wordSelect.appendChild(opt);
  });
  wordSelect.addEventListener('change', () => { idx = +wordSelect.value; ensureFront(); render(); });

  // BGM / SE UI
  btnBgm.addEventListener('click', () => {
    if (!bgmEl) return;
    if (bgmEl.paused) {
      bgmEl.play().then(() => {
        btnBgm.textContent = '♪ BGM 停止';
      }).catch(() => { /* 使用者未互動時可能被阻擋 */ });
    } else {
      bgmEl.pause();
      btnBgm.textContent = '♪ BGM 再生';
    }
  });
  seToggle.addEventListener('change', () => {
    seOn = seToggle.checked;
    localStorage.setItem('cfg.seOn', seOn ? '1' : '0');
  });
  seVol.addEventListener('input', () => {
    localStorage.setItem('cfg.seVol', String(seVol.value));
  });
  bgmVol.addEventListener('input', () => {
    if (bgmEl) bgmEl.volume = Number(bgmVol.value);
    localStorage.setItem('cfg.bgmVol', String(bgmVol.value));
  });

  render();
  setTimeout(() => card.focus(), 60);
}

/* ====== 補助：シャッフル ====== */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = (Math.random() * (i + 1)) | 0;
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
