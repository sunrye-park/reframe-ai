import React, { useEffect, useRef, useState } from 'react';

// ── 네트워크 캔버스 배경 ───────────────────────────────────────
function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const dots = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2 + 1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.forEach(d => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(192, 84, 64, ${0.13 * (1 - dist / 160)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      dots.forEach(d => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(192, 84, 64, 0.22)';
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
    />
  );
}

// ── 히어로 애니메이션 태그 ─────────────────────────────────────
const WORDS = ['Claude', 'Prompt', 'AI', 'Creative', 'Vibe Coding', '협업', '교육'];

export default function App() {
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setWordIdx(i => (i + 1) % WORDS.length);
    }, 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="bg-bg_cream text-main antialiased"
      style={{ fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif" }}
    >

      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg_cream/90 backdrop-blur-sm border-b border-main/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">
            Re:<span className="text-accent">Frame</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-main/75">
            <li><a href="#about"     className="hover:text-accent transition">소개</a></li>
            <li><a href="#education" className="hover:text-accent transition">교육 과정</a></li>
            <li><a href="#vibe"      className="hover:text-accent transition">바이브 코딩</a></li>
            <li><a href="#contact"   className="hover:text-accent transition">문의</a></li>
          </ul>
          <div className="flex items-center gap-1">
            <button className="bg-main text-white text-xs font-bold px-3 py-1.5 rounded-full">KR</button>
            <button className="text-main/50 text-xs font-bold px-3 py-1.5 rounded-full hover:bg-main/5 transition">EN</button>
          </div>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-bg_cream overflow-hidden">
        <NetworkCanvas />
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 animate-fade-in-up">

          {/* 애니메이션 태그 목록 */}
          <div className="flex flex-wrap gap-2 mb-8">
            {WORDS.map((word, i) => (
              <span
                key={word}
                className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-500 ${
                  i === wordIdx
                    ? 'bg-accent text-white scale-105'
                    : 'bg-main/8 text-main/40'
                }`}
              >
                {word}
              </span>
            ))}
          </div>

          {/* 배지 */}
          <div className="inline-block bg-accent text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            AI Utilization Instructor
          </div>

          {/* 헤드라인 */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-3 text-main">
            AI, 어렵지 않아요.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-accent">천천히, 제대로 배우는</span> AI 교육.
          </h2>
          <p className="text-sub text-xl mb-10">
            도구를 익히고, AI와 함께 생각하는 힘을 키웁니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#education"
              className="bg-accent text-white px-7 py-3 rounded-full font-semibold hover:bg-[#a84030] transition shadow-sm"
            >
              커리큘럼 보기
            </a>
            <a
              href="#about"
              className="bg-main text-white px-7 py-3 rounded-full font-semibold hover:bg-[#444] transition shadow-sm"
            >
              프로필 보기
            </a>
          </div>

          {/* 아래 화살표 */}
          <div className="mt-14">
            <span className="text-accent text-2xl animate-bounce inline-block">↓</span>
          </div>
        </div>
      </section>

      {/* ── 소개 (ABOUT) ──────────────────────────────────────── */}
      <section id="about" className="py-20 px-6 bg-bg_cream">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">

          {/* 왼쪽: 학력 및 자격 카드 */}
          <div className="bg-white rounded-2xl p-8 border border-main/8 shadow-sm">
            <h3 className="text-accent font-bold text-sm mb-6 flex items-center gap-2">
              🎓 학력 및 자격
            </h3>
            <div className="mb-5">
              <p className="font-bold text-main text-lg leading-tight">전북대학교 교육대학원</p>
              <p className="text-sub text-sm mt-0.5">평생교육 및 HRD 전공 (석사)</p>
            </div>
            <div className="bg-bg_cream rounded-xl p-4 mb-6">
              <p className="text-xs font-bold text-accent mb-2 tracking-wider">THESIS</p>
              <p className="text-sm text-main leading-relaxed">
                「디지털 리터러시 교육에서 중장년 여성의 학습동기와 학업적 열의의 관계」
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-sub">
              <span className="flex items-center gap-1.5">🏆 AICE Basic (KT)</span>
              <span className="flex items-center gap-1.5">📖 평생교육사 2급</span>
              <span className="flex items-center gap-1.5">🎓 디지털 튜터</span>
            </div>
            <div>
              <p className="text-xs font-semibold text-sub/70 mb-3 uppercase tracking-wider">Activity Tags</p>
              <div className="flex flex-wrap gap-2">
                {['AI활용 입문', 'AI활용 심화', 'AI크리에이터', '바이브 코딩'].map(tag => (
                  <span key={tag} className="border border-accent/40 text-accent text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 오른쪽: 테라코타 인용 카드 */}
          <div className="bg-accent rounded-2xl p-10 flex items-center">
            <p className="text-white text-2xl leading-[1.45]" style={{ fontFamily: "'Nanum Myeongjo', serif" }}>
              도구를 익히고,<br />
              AI와 함께 생각하는 힘을<br />
              키웁니다.<br />
              사용하는 것이 시작이라면,<br />
              협업은 완성입니다.
            </p>
          </div>
        </div>
      </section>

      {/* ── 교육 과정 ─────────────────────────────────────────── */}
      <section id="education" className="py-20 px-6 bg-card_bg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-main mb-3">맞춤형 AI 활용 교육 과정</h2>
            <p className="text-sub">대상과 목적에 맞는 단계별 AI 교육</p>
          </div>

          {/* B-1 / B-2 / B-3 */}
          <div className="grid md:grid-cols-3 gap-4 mb-5">
            {/* B-1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="font-bold text-main text-lg mb-1">B-1</p>
              <h3 className="text-xl font-bold text-main mb-1">생성형 AI 이해 (기초)</h3>
              <p className="text-xs text-sub mb-4">초보자·시니어</p>
              <p className="text-accent font-medium italic mb-2">AI가 친구처럼 느껴지게.</p>
              <p className="text-sm text-sub">ChatGPT 기초, 프롬프팅, 실생활 활용</p>
            </div>

            {/* B-2 인기 */}
            <div className="bg-accent rounded-2xl p-8 shadow-md relative">
              <span className="absolute top-4 right-4 bg-white text-accent text-xs font-bold px-2.5 py-1 rounded-full">
                인기 ⭐
              </span>
              <p className="font-bold text-white text-lg mb-1">B-2</p>
              <h3 className="text-xl font-bold text-white mb-1">생성형 AI 활용 (실습)</h3>
              <p className="text-xs text-white/70 mb-4">직장인·크리에이터</p>
              <p className="text-white font-medium italic mb-2">내 일의 혁신 파트너.</p>
              <p className="text-sm text-white/80">문서, 이미지, 음악/영상 제작</p>
            </div>

            {/* B-3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="font-bold text-main text-lg mb-1">B-3</p>
              <h3 className="text-xl font-bold text-main mb-1">AI 리터러시 (윤리)</h3>
              <p className="text-xs text-sub mb-4">학생·시민</p>
              <p className="text-accent font-medium italic mb-2">기술을 올바르게 쓰는 힘.</p>
              <p className="text-sm text-sub">윤리, 저작권, 딥페이크</p>
            </div>
          </div>

          {/* 운영 방식 안내 바 */}
          <div className="bg-white rounded-xl px-8 py-4 text-sm text-sub text-center mb-12 shadow-sm">
            📌 1~10회 기관 맞춤 설계 · 이론+실습+토론 병행 · PC/모바일 모두 가능 · 난이도 조절 가능
          </div>

          {/* 시그니처 과정 */}
          <div className="rounded-2xl overflow-hidden grid md:grid-cols-2 shadow-lg">
            <div className="bg-[#2A2825] p-10 flex flex-col justify-center">
              <span className="bg-accent text-white text-xs px-3 py-1 rounded-full font-medium w-fit mb-4">
                시그니처
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">AI로 나만의 작품을 만듭니다.</h3>
              <p className="text-[#AAA] text-sm leading-relaxed mb-6">
                음악과 영상을 전공한 강사가 직접 설계한 AI 창작 수업입니다.<br />
                이미지, 영상, 음악 —<br />
                세 가지 도구로 당신의 이야기를 표현하세요.
              </p>
              <a
                href="#contact"
                className="bg-accent text-white px-6 py-3 rounded-full text-sm font-semibold w-fit hover:bg-[#a84030] transition"
              >
                나만의 기록 만들기
              </a>
            </div>
            <div className="overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}character-collage.png`}
                alt="AI 창작 수업"
                className="w-full h-full object-cover min-h-[260px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 바이브 코딩 ───────────────────────────────────────── */}
      <section id="vibe" className="py-20 px-6 bg-bg_cream">
        <div className="max-w-6xl mx-auto">

          {/* 제목 + 이미지 */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-main mb-1">
                바이브 코딩<br />
                <span className="text-4xl">with Claude</span>
                <span className="ml-3 bg-accent text-white text-xs px-2.5 py-1 rounded-full align-middle font-medium">신규</span>
              </h2>
              <p className="text-sub mt-3">코딩 몰라도 OK. Claude와 함께 앱 만들기.</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src={`${import.meta.env.BASE_URL}character-collage.png`}
                alt="바이브 코딩 with Claude"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>

          {/* 과정 3개 */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-accent rounded-2xl p-8">
              <span className="text-white text-xs font-bold bg-white/20 px-2 py-1 rounded mb-4 inline-block">FEATURED</span>
              <div className="text-white text-2xl mb-3 font-mono">&lt;&gt;</div>
              <h3 className="text-xl font-bold text-white mb-2">입문 과정</h3>
              <p className="text-white/80 text-sm">코딩 몰라도 OK. Claude와 함께 앱 만들기.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-accent text-2xl mb-3">🚀</div>
              <h3 className="text-xl font-bold text-main mb-2">심화 과정</h3>
              <p className="text-sub text-sm">실전 프로젝트로 포트폴리오 완성</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-accent text-2xl mb-3">👥</div>
              <h3 className="text-xl font-bold text-main mb-2">핵심인력 과정</h3>
              <p className="text-sub text-sm">전북 강사 네트워크 대상</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 인용 (QUOTE) ─────────────────────────────────────── */}
      <section className="py-20 px-6 bg-bg_cream">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-10 text-center border border-main/5 shadow-sm">
            <div className="text-4xl mb-6">💭</div>
            <h3 className="text-2xl font-bold text-main mb-6">처음엔 저도 부담스러웠어요</h3>
            <p className="text-sub leading-relaxed mb-6">
              AI라는 단어 자체가 낯설고 어색했던 때가 있었어요.<br />
              하지만 하나씩 시도하면서,<br />
              이건 사람과 AI의 진짜 협업이라는 걸 깨달았습니다.
            </p>
            <p className="text-accent italic font-medium mb-3">
              "이 길을 직접 걸어왔기에, 제가 경험한 그대로를 가르칩니다."
            </p>
            <p className="text-main font-bold">— 박선례</p>
          </div>
        </div>
      </section>

      {/* ── CONTACT / FOOTER ─────────────────────────────────── */}
      <footer id="contact" className="bg-bg_dark py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-3 leading-snug">
                함께 기술을<br />
                Re:<span className="text-accent">Frame</span> 하세요.
              </h2>
              <p className="text-[#888] text-sm mt-2">강의 또는 협업 관련 문의는 이메일로 연락해주세요.</p>
            </div>
            <div className="space-y-4">
              <a
                href="mailto:sunryepark12@gmail.com"
                className="flex items-center gap-4 bg-[#3A3733] rounded-xl px-6 py-4 hover:bg-[#443F3B] transition"
              >
                <span className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white text-lg">✉</span>
                <div>
                  <p className="text-xs text-[#888] mb-0.5">Email</p>
                  <p className="text-white font-medium">sunryepark12@gmail.com</p>
                </div>
              </a>
              <a
                href="https://www.threads.net/@slowsoyang"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-[#3A3733] rounded-xl px-6 py-4 hover:bg-[#443F3B] transition"
              >
                <span className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg">@</span>
                <div>
                  <p className="text-xs text-[#888] mb-0.5">Threads</p>
                  <p className="text-white font-medium">@slowsoyang</p>
                </div>
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-[#555] text-sm">
            © 2026 Re:Frame. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
