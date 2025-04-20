'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';

export default function HTAGrantContent() {
  const { t } = useLanguage();

  return (
    <div className="space-y-12">
      {/* Title Card */}
      <div className="bg-gradient-to-r from-emerald-700/60 to-sky-700/60 p-10 rounded-2xl shadow-lg relative overflow-hidden">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
          HTA 補助金申請フォーム（テンプレート）
        </h1>
        <p className="text-center mt-4 text-gray-200 max-w-3xl mx-auto">
          Hawaii Tourism Authority Grant Application Template
        </p>
        <div className="absolute -top-10 -right-10 w-56 h-56 bg-teal-400 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Submission Info */}
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl shadow-lg text-gray-200 space-y-4">
        <p>
          <strong>提出先</strong>: Hawaii Tourism Authority (HTA)<br />
          <strong>用途</strong>: Community Enrichment / Signature Events / Sports Events Program いずれか
        </p>
      </section>

      {/* Form Sections rendered in prose */}
      <section className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl shadow-lg prose prose-invert max-w-none lg:prose-lg">
        <h2>0. 申請タイプ</h2>
        <pre>
☐ Community Enrichment Program (CEP)
☐ Signature Events Program (SEP)
☐ Sports Events Program (SP)
        </pre>
        <hr />
        <h2>1. 申請団体情報 — Applicant Information</h2>
        {/* Table HTML */}
        <table>
          <thead><tr><th>項目 / Field</th><th>記入欄 / Entry</th></tr></thead>
          <tbody>
            <tr><td>法人名 / Organization</td><td></td></tr>
            <tr><td>代表者氏名 / Authorized Signatory</td><td></td></tr>
            <tr><td>事業形態 / Entity Type</td><td>例: 501(c)(3) Non‑Profit / For‑Profit Corp. / Govt. Agency</td></tr>
            <tr><td>EIN / 日本法人番号</td><td></td></tr>
            <tr><td>住所 / Address</td><td></td></tr>
            <tr><td>電話 / Phone</td><td></td></tr>
            <tr><td>Email</td><td></td></tr>
            <tr><td>ウェブサイト / Website</td><td></td></tr>
          </tbody>
        </table>
        <hr />
        <h2>2. 担当者情報 — Contact Person</h2>
        <table>
          <thead><tr><th>Field</th><th>Entry</th></tr></thead>
          <tbody>
            <tr><td>氏名 / Name</td><td></td></tr>
            <tr><td>役職 / Title</td><td></td></tr>
            <tr><td>直通電話 / Direct Phone</td><td></td></tr>
            <tr><td>Email</td><td></td></tr>
          </tbody>
        </table>
        <hr />
        <h2>3. プロジェクト概要 — Project Overview</h2>
        <table>
          <thead><tr><th>項目</th><th>記入欄</th></tr></thead>
          <tbody>
            <tr><td>プロジェクト名 / Project Title</td><td></td></tr>
            <tr><td><strong>実施日 / Event Dates</strong></td><td><strong>2026‑10‑03 (Main) / 2026‑10‑04 (Backup)</strong></td></tr>
            <tr><td>開催場所 / Venue</td><td>Kakaʻako Waterfront Park, Honolulu, HI</td></tr>
            <tr><td>想定来場者数 / Expected Attendance</td><td>5,000</td></tr>
            <tr><td>主要コンセプト / Core Concept</td><td>Island‑tech Eden EDM Festival</td></tr>
            <tr><td>HTA 重点領域との整合 / Alignment w/ HTA Priorities</td><td>例: 観光の質向上・文化保存・地域経済活性化</td></tr>
          </tbody>
        </table>
        <hr />
        <h2>4. 目標 & 成果指標 — Objectives & KPIs</h2>
        <table>
          <thead><tr><th>目標 / Objective</th><th>測定指標 / KPI</th><th>目標値 / Target</th></tr></thead>
          <tbody>
            <tr><td>地元経済への直接支出</td><td>Direct Visitor Spending (USD)</td><td>$3.0 M</td></tr>
            <tr><td>観光客数</td><td>Out‑of‑State Attendees (#)</td><td>2,000</td></tr>
            <tr><td>文化体験提供回数</td><td>Cultural Activations (#)</td><td>10</td></tr>
            <tr><td>CO₂ 削減量</td><td>Carbon Reduction (t)</td><td>20</td></tr>
          </tbody>
        </table>
        <hr />
        <h2>5. 詳細スケジュール — Timeline</h2>
        <table>
          <thead><tr><th>Phase</th><th>Date Range</th><th>Key Activities</th></tr></thead>
          <tbody>
            <tr><td>Planning</td><td>2026‑06‑01 – 2026‑08‑31</td><td>Permits, artist booking, marketing launch</td></tr>
            <tr><td>Execution</td><td><strong>2026‑10‑03 – 2026‑10‑03</strong> (10‑04 reserve)</td><td>Festival day (backup day if needed)</td></tr>
            <tr><td>Reporting</td><td>2026‑10‑04 – 2026‑11‑03</td><td>KPI collection, financial audit, final report</td></tr>
          </tbody>
        </table>
        <hr />
        <h2>6. 予算 — Budget</h2>
        <h3>6.1 収入 — Revenue</h3>
        <table>
          <thead><tr><th>Source</th><th>Amount (USD)</th></tr></thead>
          <tbody>
            <tr><td><strong>HTA Grant Requested</strong></td><td><strong>$100,000</strong></td></tr>
            <tr><td>Corporate Sponsorship</td><td>$500,000</td></tr>
            <tr><td>Ticket Sales</td><td>$900,000</td></tr>
            <tr><td>Merchandise &amp; F&amp;B</td><td>$150,000</td></tr>
            <tr><td>その他 / Other</td><td>$50,000</td></tr>
            <tr><td><strong>合計 / Total Revenue</strong></td><td><strong>$1,700,000</strong></td></tr>
          </tbody>
        </table>
        <blockquote>
          <p>注: HTA の過去実績に照らし、5,000 人規模イベントの妥当ライン（$90k–$120k）を申請額に設定。</p>
        </blockquote>

        <h3>6.2 支出 — Expenses</h3>
        <table>
          <thead><tr><th>Category</th><th>Amount (USD)</th><th>% of Total</th></tr></thead>
          <tbody>
            <tr><td>会場費 / Venue &amp; Permits</td><td>250,000</td><td>14.7 %</td></tr>
            <tr><td>アーティスト費 / Talent</td><td>600,000</td><td>35.3 %</td></tr>
            <tr><td>スタッフ &amp; 運営 / Operations</td><td>300,000</td><td>17.6 %</td></tr>
            <tr><td>マーケティング / Marketing</td><td>150,000</td><td>8.8 %</td></tr>
            <tr><td>サステナビリティ / Sustainability</td><td>80,000</td><td>4.7 %</td></tr>
            <tr><td>保険 / Insurance</td><td>40,000</td><td>2.4 %</td></tr>
            <tr><td>安全対策 / Security &amp; Medical</td><td>120,000</td><td>7.1 %</td></tr>
            <tr><td>その他 / Contingency</td><td>160,000</td><td>9.4 %</td></tr>
            <tr><td><strong>合計 / Total Expenses</strong></td><td><strong>$1,700,000</strong></td><td>100 %</td></tr>
          </tbody>
        </table>
        <hr />
        <h2>7. カルチャー & コミュニティ貢献 — Cultural & Community Impact</h2>
        <ul>
          <li>Hawaiian cultural performances (Hula, ʻUkulele workshops)</li>
          <li>Local food vendors prioritizing farm‑to‑table produce</li>
          <li>Free daytime yoga & wellness sessions for residents</li>
          <li>100 local volunteers & 50 paid part‑time positions</li>
        </ul>
        <hr />
        <h2>8. サステナビリティ計画 — Sustainability Plan</h2>
        <ul>
          <li>100 % renewable power via bio‑diesel & solar hybrids</li>
          <li>Comprehensive recycling / composting stations (goal 80 % landfill diversion)</li>
          <li>Carbon offset program in partnership with <strong>Carbon Partner Sponsor</strong> (20 t)</li>
          <li>Reusable RFID wristbands & digital tickets (paperless)</li>
        </ul>
        <hr />
        <h2>9. 過去実績 — Past Performance</h2>
        <table>
          <thead><tr><th>Event</th><th>Year</th><th>Attendance</th><th>KPI Achievements</th></tr></thead>
          <tbody>
            <tr><td>Zamna Mexico</td><td>2024</td><td>17,500</td><td>Profit 19 %, 92 % sat.</td></tr>
            <tr><td>Zamna Barcelona</td><td>2023</td><td>20,000</td><td>85 % int'l guests</td></tr>
          </tbody>
        </table>
        <hr />
        <h2>10. 承認 & 提出 — Certification & Submission</h2>
        <p>I hereby certify that the information in this application is true and correct …</p>
        <pre>
署名 / Signature: ___________________________

氏名（活字体）/ Printed Name: ___________________________

役職 / Title: ___________________________

日付 / Date: ____ / ____ / 2026
        </pre>
        <p><strong>提出方法</strong>: PDF 1 部を <a className="text-blue-400" href="mailto:grants@gohta.net">grants@gohta.net</a> へメール。件名「HTA Grant Application – &lt;Project Name&gt;」。</p>
        <hr />
        <h2>付録 & チェックリスト</h2>
        <ul className="list-none pl-0">
          <li>[ ] IRS Determination Letter / NPO 証明</li>
          <li>[ ] オーデット・フィナンシャルステートメント（過去 2 年）</li>
          <li>[ ] W‑9 または W‑8BEN‑E フォーム</li>
          <li>[ ] イベントレイアウト図 & 安全計画</li>
          <li>[ ] Letters of Support (地元団体・自治体)
          </li>
          <li>[ ] その他 HTA が要求する書類</li>
        </ul>
      </section>
    </div>
  );
} 