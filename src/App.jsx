import React from 'react';
// Re:Frame Landing Page - Deployment Trigger

function App() {
  return (
    <div className="bg-bg_cream text-main antialiased leading-relaxed selection:bg-highlight selection:text-white">
      <nav className="fixed w-full z-50 bg-bg_cream/90 backdrop-blur-md border-b border-main/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tighter text-main">Re:<span className="text-highlight">Frame</span></a>
          <ul className="hidden md:flex space-x-8 text-[15px] font-semibold text-main/80">
            <li><a href="#video" className="hover:text-highlight transition">Video Production</a></li>
            <li><a href="#education" className="hover:text-highlight transition">AI Education</a></li>
            <li><a href="#instructor" className="hover:text-highlight transition">Instructor</a></li>
            <li><a href="#contact" className="px-5 py-2 bg-btn_bg text-btn_text rounded-full hover:bg-highlight transition duration-300 shadow-md">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden bg-bg_cream">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-bg_cream z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-10 grayscale"></div>
        <div className="relative z-20 max-w-4xl mx-auto mt-10 animate-fade-in-up">
          <p className="text-highlight font-bold tracking-widest mb-5 text-sm md:text-base uppercase">Creative Studio & Media · AI Education</p>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-8 text-main tracking-tight">
            <span className="block mb-2 leading-tight">지금 이 순간</span>
            <span className="block leading-tight">
              <span className="relative inline-block">
                또 다른 이야기가
                <span className="absolute bottom-2 left-0 w-full h-3 bg-highlight/20 -z-10"></span>
              </span>
              {' '}시작됩니다
            </span>
          </h1>
          <p className="text-base md:text-2xl text-sub mb-10 font-medium">영상으로 삶을 담고, AI로 가능성을 엽니다.<br /><strong className="text-main font-bold">Re:Frame</strong>은 창작과 배움이 만나는 공간입니다.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#video" className="inline-block bg-white text-main border border-main/10 font-semibold py-4 px-10 rounded-full hover:bg-gray-50 transition duration-300 shadow-lg">영상 제작 알아보기</a>
            <a href="#education" className="inline-block bg-btn_bg text-btn_text font-semibold py-4 px-10 rounded-full hover:bg-highlight transition duration-300 shadow-lg">교육 과정 확인하기</a>
          </div>
        </div>
      </header>

      <section id="video" className="py-16 md:py-24 px-6 bg-bg_white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center md:text-left">
            <h3 className="text-highlight font-bold tracking-wider mb-2 text-sm uppercase">Production</h3>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-main">영상제작 프로세스</h2>
            <p className="text-xl text-sub max-w-2xl md:border-l-4 md:border-highlight md:pl-6 py-1 mx-auto md:mx-0 font-medium">단순한 기록을 넘어, <br className="md:hidden" />사람과 목적을 함께 담아내는 <br /><span className="text-main font-bold box-decoration-clone">기획 기반의 영상</span>을 만듭니다.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 md:gap-6 mb-24">
            <div className="bg-bg_cream p-5 md:p-8 rounded-2xl border border-main/5 hover:border-highlight transition group hover:-translate-y-2 duration-300 shadow-sm">
              <div className="text-highlight text-5xl font-bold mb-4 opacity-40 group-hover:opacity-100 transition">01</div>
              <h4 className="text-xl font-bold mb-3 text-main">상담 및 기획</h4>
              <p className="text-[15px] text-sub leading-relaxed">목적과 대상 분석,<br />메시지 및 콘셉트 도출</p>
            </div>
            <div className="bg-bg_cream p-5 md:p-8 rounded-2xl border border-main/5 hover:border-highlight transition group hover:-translate-y-2 duration-300 shadow-sm">
              <div className="text-highlight text-5xl font-bold mb-4 opacity-40 group-hover:opacity-100 transition">02</div>
              <h4 className="text-xl font-bold mb-3 text-main">프리 프로덕션</h4>
              <p className="text-[15px] text-sub leading-relaxed">스토리 설계, 촬영 구성,<br />공간(로케이션) 선정</p>
            </div>
            <div className="bg-bg_cream p-5 md:p-8 rounded-2xl border border-main/5 hover:border-highlight transition group hover:-translate-y-2 duration-300 shadow-sm">
              <div className="text-highlight text-5xl font-bold mb-4 opacity-40 group-hover:opacity-100 transition">03</div>
              <h4 className="text-xl font-bold mb-3 text-main">프로덕션</h4>
              <p className="text-[15px] text-sub leading-relaxed">전문 장비 촬영<br />및 현장 디렉팅</p>
            </div>
            <div className="bg-bg_cream p-5 md:p-8 rounded-2xl border border-main/5 hover:border-highlight transition group hover:-translate-y-2 duration-300 shadow-sm">
              <div className="text-highlight text-5xl font-bold mb-4 opacity-40 group-hover:opacity-100 transition">04</div>
              <h4 className="text-xl font-bold mb-3 text-main">포스트 프로덕션</h4>
              <p className="text-[15px] text-sub leading-relaxed">편집, 색보정, 모션그래픽,<br />사운드 설계</p>
            </div>
          </div>

          <div className="mb-24">
            <h3 className="text-3xl font-bold text-main mb-16 border-b-2 border-highlight/20 pb-4 inline-block pr-10">Portfolio</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">

              <div className="group">
                <h4 className="text-xl font-bold text-main mb-2 border-l-4 border-highlight pl-3">사업홍보영상</h4>
                <p className="text-sub mb-6 text-sm">사업과 프로젝트의 흐름을 정리해 이야기가 있는 영상으로 담아냅니다.</p>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://youtu.be/CNz83ArzqVg" target="_blank" rel="noreferrer" className="block aspect-video rounded-lg overflow-hidden border border-main/5 bg-gray-100 relative">
                    <img src="https://img.youtube.com/vi/CNz83ArzqVg/hqdefault.jpg" className="w-full h-full object-cover hover:scale-105 transition duration-500" alt="Portfolio 1" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><span className="text-white text-3xl drop-shadow-lg">▶</span></div>
                  </a>
                  <a href="https://youtu.be/Z8i6e6KFTfA" target="_blank" rel="noreferrer" className="block aspect-video rounded-lg overflow-hidden border border-main/5 bg-gray-100 relative">
                    <img src="https://img.youtube.com/vi/Z8i6e6KFTfA/maxresdefault.jpg" className="w-full h-full object-cover hover:scale-105 transition duration-500" alt="Portfolio 2" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><span className="text-white text-3xl drop-shadow-lg">▶</span></div>
                  </a>
                </div>
              </div>

              <div className="group">
                <h4 className="text-xl font-bold text-main mb-2 border-l-4 border-highlight pl-3">홍보 및 행사 기록</h4>
                <p className="text-sub mb-6 text-sm">브랜드의 가치와 현장의 생생한 분위기를 명확한 시각 언어로 전달합니다.</p>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://youtu.be/Ntc2OrfQcFg" target="_blank" rel="noreferrer" className="block aspect-video rounded-lg overflow-hidden border border-main/5 bg-gray-100 relative">
                    <img src="https://img.youtube.com/vi/Ntc2OrfQcFg/maxresdefault.jpg" className="w-full h-full object-cover hover:scale-105 transition duration-500" alt="Portfolio 2" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><span className="text-white text-3xl drop-shadow-lg">▶</span></div>
                  </a>
                  <a href="https://youtu.be/cN6GpNamVqY" target="_blank" rel="noreferrer" className="block aspect-video rounded-lg overflow-hidden border border-main/5 bg-gray-100 relative">
                    <img src="https://img.youtube.com/vi/cN6GpNamVqY/maxresdefault.jpg" className="w-full h-full object-cover hover:scale-105 transition duration-500" alt="Portfolio 3" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><span class="text-white text-3xl drop-shadow-lg">▶</span></div>
                  </a>
                </div>
              </div>

              <div className="group">
                <h4 className="text-xl font-bold text-main mb-2 border-l-4 border-highlight pl-3">라이프 스토리 / 아카이빙 영상</h4>
                <p className="text-sub mb-6 text-sm">개인의 역사와 공간의 기억. 시간이 흘러도 변치 않는 깊이 있는 이야기를 기록합니다.</p>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://youtu.be/FugWT34moKU" target="_blank" rel="noreferrer" className="block aspect-video rounded-lg overflow-hidden border border-main/5 bg-gray-100 relative">
                    <img src="https://img.youtube.com/vi/FugWT34moKU/maxresdefault.jpg" className="w-full h-full object-cover hover:scale-105 transition duration-500" alt="Portfolio 4" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><span class="text-white text-3xl drop-shadow-lg">▶</span></div>
                  </a>
                  <a href="https://youtu.be/hXY9X5arKek" target="_blank" rel="noreferrer" className="block aspect-video rounded-lg overflow-hidden border border-main/5 bg-gray-100 relative">
                    <img src="https://img.youtube.com/vi/hXY9X5arKek/maxresdefault.jpg" className="w-full h-full object-cover hover:scale-105 transition duration-500" alt="Portfolio 5" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><span class="text-white text-3xl drop-shadow-lg">▶</span></div>
                  </a>
                </div>
              </div>

              <div className="group">
                <h4 className="text-xl font-bold text-main mb-2 border-l-4 border-highlight pl-3">스토리 및 교육 과정</h4>
                <p className="text-sub mb-6 text-sm">결과물뿐만 아니라, 함께 성장하고 변화하는 배움의 흐름 그 자체를 소중한 과정으로 기록합니다.</p>
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://youtu.be/3HBOg_MCHko" target="_blank" rel="noreferrer" className="block aspect-video rounded-lg overflow-hidden border border-main/5 bg-gray-100 relative">
                    <img src="https://img.youtube.com/vi/3HBOg_MCHko/maxresdefault.jpg" className="w-full h-full object-cover hover:scale-105 transition duration-500" alt="Portfolio 6" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><span class="text-white text-3xl drop-shadow-lg">▶</span></div>
                  </a>
                  <a href="https://youtu.be/mCjiScOR_cY" target="_blank" rel="noreferrer" className="block aspect-video rounded-lg overflow-hidden border border-main/5 bg-gray-100 relative">
                    <img src="https://img.youtube.com/vi/mCjiScOR_cY/maxresdefault.jpg" className="w-full h-full object-cover hover:scale-105 transition duration-500" alt="Portfolio 7" />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none"><span className="text-white text-3xl drop-shadow-lg">▶</span></div>
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="bg-main text-white p-10 rounded-3xl shadow-xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-highlight opacity-30 blur-3xl rounded-full -mr-20 -mt-20"></div>
            <h4 className="text-2xl font-bold mb-8 relative z-10"><span className="text-highlight">Re:Frame</span> 영상은 이런 분들과 잘 맞습니다</h4>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto relative z-10">
              <div className="flex items-start bg-white/10 p-5 rounded-xl backdrop-blur-sm border border-white/5"><span className="text-highlight mr-4 text-xl">✓</span> <span className="text-gray-300">감성적이고 진정성 있는 영상 톤앤매너를 원하시는 분</span></div>
              <div className="flex items-start bg-white/10 p-5 rounded-xl backdrop-blur-sm border border-white/5"><span className="text-highlight mr-4 text-xl">✓</span> <span className="text-gray-300">사람 중심의 따뜻한 이야기를 담고 싶은 기관 및 개인</span></div>
              <div className="flex items-start bg-white/10 p-5 rounded-xl backdrop-blur-sm border border-white/5"><span class="text-highlight mr-4 text-xl">✓</span> <span class="text-gray-300">단순 정보 전달이 아닌 ‘메시지’와 ‘울림’을 전하고 싶은 분</span></div>
              <div className="flex items-start bg-white/10 p-5 rounded-xl backdrop-blur-sm border border-white/5"><span class="text-highlight mr-4 text-xl">✓</span> <span class="text-gray-300">지역, 교육, 사람의 가치를 콘텐츠로 기록하고 싶은 분</span></div>
            </div>
            <div className="mt-10 pt-8 border-t border-white/10 relative z-10"><p className="text-lg text-gray-400 italic font-medium">"Re:Frame은 기계적인 빠른 제작보다는,<br className="md:hidden" /> <span className="text-highlight font-bold not-italic">의미 있는 과정과 소통</span>을 더 중요하게 생각합니다."</p></div>
          </div>
        </div>
      </section>

      <section id="education" className="py-16 md:py-24 px-6 bg-bg_cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-highlight font-bold tracking-wider mb-2 text-sm uppercase">Education</h3>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-main">AI활용 & 영상제작 교육</h2>
            <p className="text-xl text-sub max-w-2xl mx-auto font-medium">"기술의 기능적 습득을 넘어, <br />올바른 가치관과 창의적 활용 능력을 함께 기릅니다."</p>
          </div>
          <div className="mb-10 border-l-4 border-highlight pl-4">
            <h3 className="text-2xl font-bold text-main">1. AI 기본 · 활용 과정</h3>
            <p className="text-sub mt-1">"누구나 이해할 수 있지만, 쉽게 잊히지 않는 AI 수업"</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-16">
            <div className="bg-white rounded-2xl border border-main/5 p-5 md:p-8 hover:border-highlight transition flex flex-col h-full shadow-sm hover:shadow-lg duration-300">
              <div className="mb-4"><span className="bg-sub text-white text-xs font-bold px-2 py-1 rounded">B-1</span><h4 className="text-xl font-bold text-main mt-2">생성형 AI 이해 (기초)</h4></div>
              <p className="text-sm text-sub mb-6 min-h-[40px]">AI를 처음 접하는 분들도 부담 없이 시작할 수 있는 과정</p>
              <ul className="space-y-2 text-[15px] text-sub mb-6 flex-grow"><li className="flex items-start"><span className="text-highlight mr-2">•</span> 생성형 AI의 개념 이해</li><li className="flex items-start"><span class="text-highlight mr-2">•</span> ChatGPT 기본 사용법</li><li className="flex items-start"><span class="text-highlight mr-2">•</span> 질문 방식에 따른 결과 차이</li><li className="flex items-start"><span class="text-highlight mr-2">•</span> 실제 사례 활용 체험</li></ul>
              <div className="pt-5 border-t border-gray-100 text-xs bg-gray-50 -mx-8 -mb-8 p-6 rounded-b-2xl"><p className="mb-1"><strong className="text-main">✅ 대상:</strong> 초보자, 공무원, 시니어</p><p><strong className="text-main">✅ 목표:</strong> “AI가 어렵지 않다”는 경험</p></div>
            </div>
            <div className="bg-white rounded-2xl border-2 border-highlight/30 p-5 md:p-8 hover:border-highlight transition flex flex-col h-full shadow-md relative overflow-hidden transform md:-translate-y-2">
              <div className="absolute top-0 right-0 bg-highlight text-white text-[10px] px-3 py-1 rounded-bl-lg font-bold">인기</div>
              <div className="mb-4"><span className="bg-btn_bg text-white text-xs font-bold px-2 py-1 rounded">B-2</span><h4 className="text-xl font-bold text-main mt-2">생성형 AI 활용 (실습)</h4></div>
              <p className="text-sm text-sub mb-6 min-h-[40px]">기본 개념 이해 후, 내 일에 직접 활용해보는 단계</p>
              <ul className="space-y-2 text-[15px] text-sub mb-6 flex-grow"><li className="flex items-start"><span className="text-highlight mr-2">•</span> 문서 작성 및 기획 활용</li><li className="flex items-start"><span class="text-highlight mr-2">•</span> 이미지/시각 자료 제작</li><li className="flex items-start"><span class="text-highlight mr-2">•</span> 음악/영상 생성 기초 체험</li><li className="flex items-start"><span class="text-highlight mr-2">•</span> 미니 프로젝트 진행</li></ul>
              <div className="pt-5 border-t border-highlight/10 text-xs bg-orange-50/50 -mx-8 -mb-8 p-6 rounded-b-2xl"><p className="mb-1"><strong className="text-main">✅ 대상:</strong> 실무자, 강사, 창작자</p><p><strong class="text-main">✅ 목표:</strong> “내 일에 바로 써먹는 AI”</p></div>
            </div>
            <div className="bg-white rounded-2xl border border-main/5 p-5 md:p-8 hover:border-highlight transition flex flex-col h-full shadow-sm hover:shadow-lg duration-300">
              <div className="mb-4"><span className="bg-sub text-white text-xs font-bold px-2 py-1 rounded">B-3</span><h4 className="text-xl font-bold text-main mt-2">AI 리터러시 (윤리)</h4></div>
              <p className="text-sm text-sub mb-6 min-h-[40px]">기능이 아닌 ‘태도와 기준’을 다루는 필수 과정</p>
              <ul className="space-y-2 text-[15px] text-sub mb-6 flex-grow"><li className="flex items-start"><span className="text-highlight mr-2">•</span> AI의 한계와 위험성</li><li class="flex items-start"><span class="text-highlight mr-2">•</span> 저작권 및 딥페이크 문제</li><li class="flex items-start"><span class="text-highlight mr-2">•</span> 책임 있는 AI 사용법</li><li class="flex items-start"><span class="text-highlight mr-2">•</span> 기술에 휘둘리지 않는 기준</li></ul>
              <div className="pt-5 border-t border-gray-100 text-xs bg-gray-50 -mx-8 -mb-8 p-6 rounded-b-2xl"><p className="mb-1"><strong className="text-main">✅ 대상:</strong> 학생, 교사, 시민</p><p><strong class="text-main">✅ 목표:</strong> “기술을 올바르게 쓰는 힘”</p></div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 mb-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between border border-main/10 shadow-sm">
            <h4 className="font-bold text-main mb-4 md:mb-0 md:mr-6 whitespace-nowrap">📌 운영 방식 (공통)</h4>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm text-sub font-medium">
              <span className="flex items-center"><span className="text-highlight mr-2">✔</span> 1~10회 기관 맞춤 설계</span>
              <span className="flex items-center"><span class="text-highlight mr-2">✔</span> 이론+실습+토론 병행</span>
              <span className="flex items-center"><span class="text-highlight mr-2">✔</span> PC/모바일 모두 가능</span>
              <span className="flex items-center"><span class="text-highlight mr-2">✔</span> 난이도 조절 가능</span>
            </div>
          </div>

          <div className="relative bg-main rounded-3xl p-8 md:p-12 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-highlight opacity-30 blur-3xl rounded-full -mr-20 -mt-20"></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-block bg-highlight text-white text-xs font-bold px-3 py-1 rounded-full mb-4">Re:Frame Signature</div>
                <h3 className="text-3xl font-bold text-white mb-4">2. 특화 과정 : AI 창작 수업</h3>
                <p className="text-xl text-highlight italic mb-8 font-medium">“삶과 감정을 기술로 확장합니다.<br />기술로 나를 다시 만나는 경험을 선물하세요.”</p>
                <ul className="space-y-3 text-gray-300 mb-8"><li className="flex items-start"><span className="text-highlight mr-2">✦</span> 나의 이야기, 기억, 공간, 감정을 AI로 시각화</li><li className="flex items-start"><span class="text-highlight mr-2">✦</span> 이미지 + 음악 + 영상 + 글을 결합한 스토리 생성</li><li className="flex items-start"><span class="text-highlight mr-2">✦</span> 나만의 작은 기록물 / 예술 프로젝트 제작</li><li className="flex items-start"><span class="text-highlight mr-2">✦</span> 사람 중심의 AI 활용과 깊이 있는 성찰</li></ul>
              </div>
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-md">
                <h4 className="text-white font-bold mb-4 border-b border-white/20 pb-2">수강 추천 대상</h4>
                <div className="flex flex-wrap gap-2 mb-6"><span className="bg-black/30 text-gray-200 text-xs px-3 py-1 rounded-full border border-white/10">창작자/예술가</span><span class="bg-black/30 text-gray-200 text-xs px-3 py-1 rounded-full border border-white/10">중장년 여성</span><span class="bg-black/30 text-gray-200 text-xs px-3 py-1 rounded-full border border-white/10">마을 활동가</span><span class="bg-black/30 text-gray-200 text-xs px-3 py-1 rounded-full border border-white/10">교육자</span></div>
                <div className="mt-6"><a href="#contact" className="block w-full bg-btn_bg hover:bg-highlight text-white text-center font-bold py-3 rounded-xl transition shadow-lg">시그니처 과정 문의하기</a></div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 border border-main/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-btn_bg to-highlight"></div>
            <h3 className="text-3xl font-bold text-main mb-8">3. 영상 크리에이터 과정 (CapCut)</h3>

            <div className="grid md:grid-cols-2 gap-12 mb-10">
              <div>
                <h4 className="text-xl font-bold text-btn_bg mb-4 flex items-center">
                  <span className="bg-btn_bg text-white text-xs px-2 py-1 rounded mr-2">STEP 1</span>
                  입문
                </h4>
                <ul className="space-y-3 text-sub font-medium">
                  <li className="flex items-start"><span className="text-highlight mr-2">✓</span> 내 손안의 편집실 – 컷 편집과 기본 구성 이해</li>
                  <li className="flex items-start"><span className="text-highlight mr-2">✓</span> 템플릿 활용</li>
                  <li className="flex items-start"><span className="text-highlight mr-2">✓</span> 자막, 트랜지션 기초 편집</li>
                </ul>
              </div>

              <div className="md:border-l md:border-gray-100 md:pl-12">
                <h4 className="text-xl font-bold text-highlight mb-4 flex items-center">
                  <span className="bg-highlight text-white text-xs px-2 py-1 rounded mr-2">STEP 2</span>
                  심화
                </h4>
                <ul className="space-y-3 text-sub font-medium">
                  <li className="flex items-start"><span className="text-highlight mr-2">✓</span> 고급 편집(장면 흐름과 리듬 설계)</li>
                  <li className="flex items-start"><span className="text-highlight mr-2">✓</span> 키프레임 애니메이션</li>
                  <li className="flex items-start"><span className="text-highlight mr-2">✓</span> 색 보정의 기본 이해와 활용</li>
                </ul>
              </div>
            </div>

            <div className="bg-bg_cream rounded-xl p-6 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-main border border-main/5">
              <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
                <span className="flex items-center"><span className="w-2 h-2 bg-btn_bg rounded-full mr-2"></span> 스마트폰 버전 / PC 버전 모두 가능</span>
                <span className="flex items-center"><span className="w-2 h-2 bg-btn_bg rounded-full mr-2"></span> 총 4회 ~ 10회 맞춤 설계 가능</span>
              </div>
              <p className="text-sub/70">학습자 수준, 목적, 시간에 따라 커리큘럼 회차는 유연하게 조정됩니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="instructor" className="py-24 px-6 bg-bg_white border-t border-main/5">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12 mb-20 border-b border-main/5 pb-20">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full border-4 border-highlight/20 overflow-hidden relative shadow-xl">
                <img src="/profile.png" alt="박선례 대표 프로필 사진" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-highlight font-bold tracking-wider mb-2 text-sm uppercase">Instructor</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-main">Re:Frame 대표 박선례</h2>
              <p className="text-sub leading-relaxed mb-8 text-base font-medium">영상 제작과 AI·디지털 교육을 전문으로 하는 Re:Frame 대표 박선례입니다.<br />15년간 영상으로 사람과 세상의 이야기를 담아왔으며,<br />10년 이상의 강의 경험을 통해 공공기관, 대학, 지역 커뮤니티를 중심으로<br />디지털 기초부터 생성형 AI 활용까지 폭넓은 교육을 진행하고 있습니다.<br /><span className="text-main font-bold border-b-2 border-highlight/30">누구나 기술의 흐름 속에서 자신만의 가능성을 찾을 수 있도록 돕고 있습니다.</span></p>
              <div className="bg-bg_cream rounded-xl p-4 border-l-4 border-highlight inline-block md:min-w-[400px]">
                <h4 className="font-bold text-main mb-3 text-sm">학력 및 자격</h4>
                <div className="mb-4">
                  <p className="text-sm font-bold text-main mb-1">전북대학교 교육대학원 평생교육 및 HRD 전공</p>
                  <p className="text-xs text-sub/80">석사논문: 「디지털 리터러시 교육에서 중장년 여성의 학습동기와 학업적 열의의 관계」</p>
                </div>
                <ul className="space-y-1 text-sm text-sub leading-tight"><li className="flex items-center"><span className="w-1.5 h-1.5 bg-highlight rounded-full mr-2"></span> AICE(AI 활용능력) BASIC – KT & 한국경제신문</li><li className="flex items-center"><span class="w-1.5 h-1.5 bg-highlight rounded-full mr-2"></span> 사회복지사 1급 – 보건복지부</li><li className="flex items-center"><span class="w-1.5 h-1.5 bg-highlight rounded-full mr-2"></span> 평생교육사 2급 – 교육부</li></ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full border-4 border-highlight/20 overflow-hidden relative shadow-xl">
                <img src="/instructor_park_seonmi.jpg" alt="박선미 강사 프로필 사진" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-highlight font-bold tracking-wider mb-2 text-sm uppercase">Instructor</h3>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-main">Re:Frame 전문 강사 박선미</h2>
              <p className="text-sub leading-relaxed mb-8 text-base font-medium">영상 제작과 미디어 리터러시 교육을 아우르는 Re:Frame 강사 박선미입니다.<br />2008년부터 약 17년간 미디어 센터와 학교 현장에서 다양한 계층을 만나온 베테랑 강사입니다.<br />특히 현재 전라북도교육청 미디어 리터러시 강사로서 청소년들이 디지털 세상을 올바르게 이해하고 소통할 수 있도록 이끌고 있으며,<br /><span className="text-main font-bold border-b-2 border-highlight/30">단편영화 연출 경험을 녹여낸 생생한 영상 제작 교육으로 누구나 자신만의 이야기를 미디어에 담을 수 있도록 돕고 있습니다.</span></p>
              <div className="bg-bg_cream rounded-xl p-4 border-l-4 border-highlight inline-block md:min-w-[400px]">
                <h4 className="font-bold text-main mb-3 text-sm">학력 및 자격</h4>
                <ul className="space-y-1 text-sm text-sub leading-tight">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-highlight rounded-full mr-2"></span> 원광대학교 사범대학 일어교육과 졸업 (학사)</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-highlight rounded-full mr-2"></span> 중등교원 2급 정교사 – 교육부</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-highlight rounded-full mr-2"></span> 디지털튜너 지도사 자격</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-highlight rounded-full mr-2"></span> 미디어 리터러시 강사 – 전북특별자치도교육청</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-highlight rounded-full mr-2"></span> 익산공공영상미디어센터 미디어교육 강사 (2008~현재)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-main text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">Let's Re:Frame Together</h2>
          <p className="text-gray-400 mb-10 text-lg">당신의 새로운 프레임을 함께 만듭니다.<br />프로젝트 의뢰부터 교육 강연 문의까지, 언제든 편하게 문의해 주세요.</p>
          <div className="inline-flex flex-col md:flex-row gap-8 bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl">
            <div className="text-left"><p className="text-xs text-highlight font-bold uppercase mb-2">Email</p><a href="mailto:contact@reframe.com" className="text-xl text-white font-medium hover:text-highlight transition">contact@reframe.com</a></div>
            <div className="hidden md:block w-px bg-white/10"></div>
            <div className="text-left"><p class="text-xs text-highlight font-bold uppercase mb-2">Phone</p><a href="tel:010-0000-0000" className="text-xl text-white font-medium hover:text-highlight transition">010-0000-0000</a></div>
          </div>
        </div>
      </section>
      <footer className="bg-[#1a1a1a] py-12 text-center text-sub text-xs border-t border-white/5"><div className="max-w-6xl mx-auto px-6"><p className="mb-4 text-white font-bold text-lg">Re:Frame</p><p>&copy; 2025 Re:Frame. All rights reserved.</p></div></footer>
    </div>
  );
}

export default App;
