/**
 * Animated cutaway of the full Puracator clean cycle, on one synchronized
 * 18-second CSS timeline (every element animates over the same duration, so
 * the phases stay in lockstep):
 *
 *   1. 0–16%   The Purascope is fed into the drain — no dismantling
 *   2. 16–44%  The 5-bar water ring strips biofilm; debris is flushed out
 *              to the back stack
 *   3. 44–70%  Saturated steam pasteurises the inner wall, venting up the
 *              stack
 *   4. 70–100% On the return pass, Goldshield GS75 coats the pipe to
 *              inhibit regrowth
 *
 * Pure SVG + CSS — no JS, no libraries. Under prefers-reduced-motion the
 * global freeze leaves the base styles showing: a clear static diagram of
 * the cleaned, coated pipe.
 */
export function CleanCycle() {
  return (
    <div className="cc-panel relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-deep to-ink p-5 shadow-glow sm:p-8">
      <style>{ccStyles}</style>

      <div className="mb-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-aqua">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-aqua" />
          The full cycle
        </span>
        <span className="hidden text-[0.7rem] font-medium uppercase tracking-widest text-mist/50 sm:block">
          Cutaway view · loops
        </span>
      </div>

      <svg
        viewBox="0 0 920 400"
        className="w-full"
        role="img"
        aria-label="Animation of the Puracator cycle: the Purascope enters the drain, a 5-bar water ring flushes biofilm and debris out to the back stack, saturated steam pasteurises the inner pipe wall, and Goldshield GS75 is applied on the return pass to coat and protect the pipe"
      >
        <defs>
          <linearGradient id="ccPipe" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0e8a7c" stopOpacity="0.35" />
            <stop offset="0.5" stopColor="#0a3531" stopOpacity="0.95" />
            <stop offset="1" stopColor="#0e8a7c" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="ccPipeV" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#0e8a7c" stopOpacity="0.35" />
            <stop offset="0.5" stopColor="#0a3531" stopOpacity="0.95" />
            <stop offset="1" stopColor="#0e8a7c" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="ccRing" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2dd4bf" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
          <linearGradient id="ccCoatG" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#2dd4bf" />
            <stop offset="1" stopColor="#a3e635" />
          </linearGradient>
        </defs>

        {/* ---- back stack (vertical pipe, vents up, drains down) ---- */}
        <rect x="652" y="34" width="60" height="332" rx="12" fill="url(#ccPipeV)" stroke="rgba(45,212,191,0.3)" />
        <rect x="664" y="44" width="36" height="312" fill="#04211e" />
        <text x="726" y="60" className="cc-label">Vent ↑</text>
        <text x="726" y="352" className="cc-label">Back stack · to drain ↓</text>

        {/* vent steam wisps */}
        <g className="cc-vent cc-v1">
          <path d="M676 36 q-7 -12 0 -22 q7 -9 0 -18" fill="none" stroke="#eafaf6" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g className="cc-vent cc-v2">
          <path d="M692 36 q6 -11 0 -20 q-6 -9 0 -17" fill="none" stroke="#eafaf6" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* ---- horizontal drain pipe (cutaway) ---- */}
        <rect x="90" y="150" width="600" height="80" rx="14" fill="url(#ccPipe)" stroke="rgba(45,212,191,0.3)" />
        <rect x="102" y="162" width="580" height="56" fill="#04211e" />
        <text x="92" y="136" className="cc-label">Drain entry — nothing dismantled</text>

        {/* steam glow filling the cavity */}
        <rect className="cc-glow" x="102" y="162" width="580" height="56" fill="url(#ccRing)" />

        {/* ---- biofilm & scale on the inner wall ---- */}
        <g className="cc-grime">
          <ellipse cx="180" cy="166" rx="46" ry="7" fill="#4a3a1c" />
          <ellipse cx="300" cy="215" rx="60" ry="8" fill="#54401d" />
          <ellipse cx="420" cy="165" rx="52" ry="6.5" fill="#4a3a1c" />
          <ellipse cx="545" cy="216" rx="55" ry="7.5" fill="#54401d" />
          <ellipse cx="620" cy="166" rx="34" ry="6" fill="#4a3a1c" />
        </g>
        {/* blockage + loose debris flushed out to the stack */}
        <ellipse className="cc-block" cx="430" cy="198" rx="26" ry="13" fill="#5b451f" />
        <circle className="cc-deb cc-d1" cx="250" cy="206" r="5" fill="#6b5326" />
        <circle className="cc-deb cc-d2" cx="380" cy="174" r="4" fill="#5b451f" />
        <circle className="cc-deb cc-d3" cx="470" cy="208" r="4.5" fill="#6b5326" />
        <circle className="cc-deb cc-d4" cx="320" cy="187" r="3.5" fill="#5b451f" />

        {/* ---- GS75 protective coat, applied on the return pass ---- */}
        <g className="cc-coat">
          <rect x="102" y="162" width="580" height="6" rx="3" fill="url(#ccCoatG)" />
          <rect x="102" y="212" width="580" height="6" rx="3" fill="url(#ccCoatG)" />
        </g>

        {/* ---- saturated steam inside the pipe ---- */}
        <g className="cc-steam">
          <path className="cc-wave" d="M140 176 q30 -8 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0" fill="none" stroke="#eafaf6" strokeWidth="2.5" strokeLinecap="round" />
          <path className="cc-wave" d="M140 190 q30 8 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0" fill="none" stroke="#eafaf6" strokeWidth="3" strokeLinecap="round" />
          <path className="cc-wave" d="M140 204 q30 -8 60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0 t60 0" fill="none" stroke="#eafaf6" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* ---- 5-bar water rings, emitted at the Purascope head ---- */}
        <g transform="translate(580 0)">
          <circle className="cc-ring cc-r1" cx="0" cy="190" r="20" fill="none" stroke="url(#ccRing)" strokeWidth="3.5" />
          <circle className="cc-ring cc-r2" cx="0" cy="190" r="20" fill="none" stroke="url(#ccRing)" strokeWidth="3.5" />
          <circle className="cc-ring cc-r3" cx="0" cy="190" r="20" fill="none" stroke="url(#ccRing)" strokeWidth="3.5" />
        </g>

        {/* ---- the Purascope ---- */}
        <g className="cc-lance">
          <rect x="-648" y="185" width="640" height="10" rx="5" fill="#cfe9e4" opacity="0.9" />
          <circle cx="0" cy="190" r="11" fill="#eafaf6" />
          <circle cx="0" cy="190" r="11" fill="none" stroke="#22d3ee" strokeWidth="2.5" />
          {/* GS75 chip rides the head on the return pass */}
          <g className="cc-chip-gs">
            <rect x="-34" y="140" width="68" height="26" rx="13" fill="#a3e635" />
            <text x="0" y="158" textAnchor="middle" fontWeight="700" fontSize="14" fill="#1a2e05" fontFamily="Inter, sans-serif">GS75</text>
          </g>
        </g>

        {/* phase chips */}
        <g className="cc-chip-bar">
          <rect x="540" y="118" width="80" height="26" rx="13" fill="rgba(45,212,191,0.15)" stroke="rgba(45,212,191,0.5)" />
          <text x="580" y="136" textAnchor="middle" fontWeight="700" fontSize="13" fill="#2dd4bf" fontFamily="Inter, sans-serif">5 bar</text>
        </g>
        <g className="cc-chip-steam">
          <rect x="330" y="118" width="150" height="26" rx="13" fill="rgba(234,250,246,0.12)" stroke="rgba(234,250,246,0.4)" />
          <text x="405" y="136" textAnchor="middle" fontWeight="700" fontSize="13" fill="#eafaf6" fontFamily="Inter, sans-serif">Saturated steam</text>
        </g>

        {/* completion shield (outer group takes the mobile up-scale so it
            doesn't fight the inner pop animation's transform) */}
        <g className="cc-shield-scale">
          <g className="cc-shield">
            <rect x="255" y="256" width="270" height="34" rx="17" fill="rgba(163,230,53,0.14)" stroke="rgba(163,230,53,0.45)" />
            <path d="M278 265 l6 6 10 -11" fill="none" stroke="#a3e635" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <text x="304" y="278" fontWeight="700" fontSize="14" fill="#a3e635" fontFamily="Inter, sans-serif">Protected for months</text>
          </g>
        </g>
      </svg>

      {/* phase captions — each lights up during its window */}
      <ol className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4">
        {[
          ["01", "Insert the Purascope", "cc-cap1"],
          ["02", "5-bar water ring → stack", "cc-cap2"],
          ["03", "Saturated steam", "cc-cap3"],
          ["04", "GS75 coat on return", "cc-cap4"],
        ].map(([n, label, cls]) => (
          <li key={cls} className={`cc-cap ${cls} border-t-2 border-white/10 pt-2.5`}>
            <span className="block text-xs font-bold text-aqua">{n}</span>
            <span className="text-[0.8rem] font-semibold leading-snug text-mist">{label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

const D = "18s"; // master loop — every animation shares it so phases stay in sync

const ccStyles = `
.cc-panel .cc-label{font:500 12px Inter,sans-serif;fill:rgba(234,250,246,.45);letter-spacing:.04em}

/* base styles double as the reduced-motion static diagram */
.cc-lance{animation:ccLance ${D} ease-in-out infinite;transform:translateX(340px)}
.cc-grime{transform-box:fill-box;transform-origin:100% 50%;opacity:.35;animation:ccGrime ${D} linear infinite}
.cc-block{opacity:0;animation:ccBlock ${D} linear infinite}
.cc-deb{opacity:0;animation-duration:${D};animation-timing-function:linear;animation-iteration-count:infinite}
.cc-d1{animation-name:ccD1}.cc-d2{animation-name:ccD2}.cc-d3{animation-name:ccD3}.cc-d4{animation-name:ccD4}
.cc-ring{transform-box:fill-box;transform-origin:center;opacity:0;animation-duration:${D};animation-timing-function:ease-out;animation-iteration-count:infinite}
.cc-r1{animation-name:ccR1}.cc-r2{animation-name:ccR2}.cc-r3{animation-name:ccR3}
.cc-steam .cc-wave{stroke-dasharray:8 12;opacity:.4;animation:ccSteam ${D} linear infinite,ccDash 1.1s linear infinite}
.cc-glow{opacity:.08;animation:ccGlow ${D} linear infinite}
.cc-vent{opacity:0;animation-duration:${D};animation-timing-function:ease-out;animation-iteration-count:infinite}
.cc-v1{animation-name:ccV1}.cc-v2{animation-name:ccV2}
.cc-coat{transform-box:fill-box;transform-origin:100% 50%;opacity:1;animation:ccCoat ${D} ease-in-out infinite}
.cc-chip-gs{opacity:0;animation:ccChipGs ${D} linear infinite}
.cc-chip-bar{opacity:0;animation:ccChipBar ${D} linear infinite}
.cc-chip-steam{opacity:0;animation:ccChipSteam ${D} linear infinite}
.cc-shield{transform-box:fill-box;transform-origin:center;opacity:0;animation:ccShield ${D} ease-out infinite}
.cc-cap{opacity:.45;animation-duration:${D};animation-iteration-count:infinite}
.cc-cap1{animation-name:ccCap1}.cc-cap2{animation-name:ccCap2}
.cc-cap3{animation-name:ccCap3}.cc-cap4{animation-name:ccCap4}

@keyframes ccLance{0%,3%{transform:translateX(150px)}14%,70%{transform:translateX(580px)}95%,100%{transform:translateX(150px)}}
@keyframes ccGrime{0%{transform:scaleX(1);opacity:0}3%,16%{transform:scaleX(1);opacity:.85}44%,100%{transform:scaleX(.02);opacity:0}}
@keyframes ccBlock{0%{transform:none;opacity:0}2%,18%{transform:none;opacity:.9}30%{transform:translateX(246px);opacity:.9}36%,100%{transform:translate(246px,120px);opacity:0}}
@keyframes ccD1{0%{transform:none;opacity:0}2%,20%{transform:none;opacity:.9}28%{transform:translateX(426px);opacity:.9}34%,100%{transform:translate(426px,130px);opacity:0}}
@keyframes ccD2{0%{transform:none;opacity:0}2%,24%{transform:none;opacity:.9}30%{transform:translateX(296px);opacity:.9}36%,100%{transform:translate(296px,140px);opacity:0}}
@keyframes ccD3{0%{transform:none;opacity:0}2%,28%{transform:none;opacity:.9}34%{transform:translateX(206px);opacity:.9}40%,100%{transform:translate(206px,120px);opacity:0}}
@keyframes ccD4{0%{transform:none;opacity:0}2%,32%{transform:none;opacity:.9}38%{transform:translateX(356px);opacity:.9}44%,100%{transform:translate(356px,130px);opacity:0}}
@keyframes ccR1{0%,16%{transform:scale(.4);opacity:0}18%{opacity:.9}26%,100%{transform:translateX(56px) scale(1.6);opacity:0}}
@keyframes ccR2{0%,25%{transform:scale(.4);opacity:0}27%{opacity:.9}35%,100%{transform:translateX(56px) scale(1.6);opacity:0}}
@keyframes ccR3{0%,34%{transform:scale(.4);opacity:0}36%{opacity:.9}44%,100%{transform:translateX(56px) scale(1.6);opacity:0}}
@keyframes ccSteam{0%,44%{opacity:0}48%,64%{opacity:.85}70%,100%{opacity:0}}
@keyframes ccDash{to{stroke-dashoffset:-40}}
@keyframes ccGlow{0%,44%{opacity:0}50%,66%{opacity:.2}74%,100%{opacity:.07}}
@keyframes ccV1{0%,47%{transform:none;opacity:0}52%,62%{opacity:.8}68%,100%{transform:translateY(-22px);opacity:0}}
@keyframes ccV2{0%,51%{transform:none;opacity:0}56%,64%{opacity:.7}70%,100%{transform:translateY(-20px);opacity:0}}
@keyframes ccCoat{0%,70%{transform:scaleX(0);opacity:0}72%{opacity:1}95%,100%{transform:scaleX(1);opacity:1}}
@keyframes ccChipGs{0%,71%{opacity:0}74%,92%{opacity:1}96%,100%{opacity:0}}
@keyframes ccChipBar{0%,15%{opacity:0}18%,42%{opacity:1}46%,100%{opacity:0}}
@keyframes ccChipSteam{0%,45%{opacity:0}49%,66%{opacity:1}71%,100%{opacity:0}}
@keyframes ccShield{0%,92%{transform:scale(.7);opacity:0}97%,100%{transform:scale(1);opacity:1}}
@keyframes ccCap1{0%,1%{opacity:.45}2%,15%{opacity:1}17%,100%{opacity:.45}}
@keyframes ccCap2{0%,16%{opacity:.45}18%,43%{opacity:1}45%,100%{opacity:.45}}
@keyframes ccCap3{0%,44%{opacity:.45}46%,69%{opacity:1}71%,100%{opacity:.45}}
@keyframes ccCap4{0%,70%{opacity:.45}72%,99%{opacity:1}100%{opacity:.45}}

/* ---- mobile: the whole 920-unit scene shrinks below ~40% scale, so the
   fine-print labels become unreadable — hide them (the phase captions below
   carry the story) and scale the info chips up. The chips' animations only
   drive opacity, so a static transform is safe; the shield gets its scale on
   the wrapper group. ---- */
@media (max-width:640px){
  .cc-panel .cc-label{display:none}
  .cc-chip-bar{transform-box:fill-box;transform-origin:100% 100%;transform:scale(1.55)}
  .cc-chip-steam{transform-box:fill-box;transform-origin:50% 100%;transform:scale(1.55)}
  .cc-chip-gs{transform-box:fill-box;transform-origin:50% 100%;transform:scale(1.45)}
  .cc-shield-scale{transform-box:fill-box;transform-origin:center;transform:scale(1.45)}
}
`;
