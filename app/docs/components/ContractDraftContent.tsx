'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import PDFDownloadButton from '@/app/components/PDFDownloadButton';

export default function ContractDraftContent() {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">
          {language === 'en' ? 'Zamna-Local Entity Contract Draft' : 'Zamna・現地法人間契約書ドラフト'}
        </h1>
        <PDFDownloadButton 
          contentId="contract-content" 
          filename={language === 'en' ? 'zamna-contract-draft.pdf' : 'zamna-契約書ドラフト.pdf'}
        />
      </div>
      
      <div id="contract-content" className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 text-white">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">
            {language === 'en' ? 'Heads of Agreement' : '共同制作・興行契約書'}
          </h2>
          <p className="text-gray-300">
            {language === 'en' ? 'Draft 1 – Bilingual (EN ⇄ JP)' : 'ドラフト 1 – バイリンガル (EN ⇄ JP)'}
          </p>
        </div>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '0. Project' : '0. プロジェクト'}
          </h3>
          <p className="mb-2">
            {language === 'en' 
              ? '"ZAMNA HAWAII 2026" and subsequent annual editions' 
              : 'ZAMNA HAWAII 2026 ならびに以降の年次開催（以下「本フェス」 ）'}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '1. Parties' : '1. 当事者'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full mb-4">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Role' : '役割'}</th>
                  <th className="text-left py-2 px-4">{language === 'en' ? 'English Entity' : '英語表記'}</th>
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Japanese Description' : '日本語表記'}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">{language === 'en' ? 'Global Brand-Owner' : 'グローバルブランド所有者'}</td>
                  <td className="py-2 px-4">Zamna Global S.L. (Spain)</td>
                  <td className="py-2 px-4">{language === 'en' ? 'Spanish entity Zamna Global S.L.' : 'スペイン法人 Zamna Global S.L.（以下「Zamna」 ）'}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">{language === 'en' ? 'Holding Company (SPV)' : '持株会社 (SPV)'}</td>
                  <td className="py-2 px-4">ZAMNA HAWAII HOLDINGS LLC (Hawaii)</td>
                  <td className="py-2 px-4">{language === 'en' ? 'Hawaii-established SPV' : 'ハワイ州設立 SPV ZAMNA HAWAII HOLDINGS LLC（以下「HD」 ）'}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">{language === 'en' ? 'Operating Company' : '運営会社'}</td>
                  <td className="py-2 px-4">Aloha Beats Ops LLC (100% HD-owned)</td>
                  <td className="py-2 px-4">{language === 'en' ? 'HD 100% subsidiary' : 'HD 100% 子会社 Aloha Beats Ops LLC（以下「Ops」 ）'}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-300 italic">
            {language === 'en' 
              ? 'Language clause: English and Japanese are equally authoritative.' 
              : '言語優先: 本書は英語・日本語いずれも正文とする。'}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '2. Purpose' : '2. 目的'}
          </h3>
          <p className="mb-2">
            {language === 'en' 
              ? 'To co-produce, promote and operate an annual EDM festival in Hawai\'i, creating a long-term, sustainable business model beneficial to both the global brand and the local economy.' 
              : '当事者は、ハワイにおいて毎年 EDM フェスを共同制作・興行し、グローバルブランドと地域経済双方に利益をもたらす長期持続型モデルを構築する。'}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '3. Definitions' : '3. 用語定義'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full mb-4">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Term' : '用語'}</th>
                  <th className="text-left py-2 px-4">{language === 'en' ? 'EN Definition' : '英語定義'}</th>
                  <th className="text-left py-2 px-4">{language === 'en' ? 'JP Definition' : '日本語定義'}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">Gross Revenue</td>
                  <td className="py-2 px-4">All cash income: tickets, VIP tables, cash sponsorships, merch, streaming, etc.</td>
                  <td className="py-2 px-4">チケット・VIP・スポンサー現金・物販・配信等、本フェス由来の全売上</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">Pass-through Cost</td>
                  <td className="py-2 px-4">Artist fees, rentals, travel, insurance at 100% actuals, zero mark-up</td>
                  <td className="py-2 px-4">アーティスト料、機材、渡航・保険など実費100%、マークアップ不可</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">Production Arrangements</td>
                  <td className="py-2 px-4">Outsourcing & contracting of stage, sound, light, SFX</td>
                  <td className="py-2 px-4">ステージ・音響・照明・特殊効果等の外注・契約業務</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">Management Fee</td>
                  <td className="py-2 px-4">Up to 10% of actuals when Zamna or Ops handles Production Arrangements</td>
                  <td className="py-2 px-4">制作関連調達を代行した際に実費×10%上限で請求可</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">DP (Distributable Profit)</td>
                  <td className="py-2 px-4">Gross Revenue − Pass-through Cost − Management Fee</td>
                  <td className="py-2 px-4">総収入 − パススルー原価 − 管理フィー</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">Artist Budget Cap</td>
                  <td className="py-2 px-4">Annual ceiling USD 1.8M (CPI review every 3 yrs)</td>
                  <td className="py-2 px-4">年度上限 180 万ドル（CPI で 3 年毎見直し）</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">Baseline Cap</td>
                  <td className="py-2 px-4">USD 125 × Approved Capacity (CPI-adjusted yearly)</td>
                  <td className="py-2 px-4">初年度「125 USD × 承認定員」。毎年CPI＋原価指数で改定</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '4. Term & Automatic Renewal' : '4. 契約期間・自動継続'}
          </h3>
          <p className="mb-2">
            {language === 'en' ? 'Initial Term: 1 Jul 2025 – 30 Jun 2030 (5 years).' : '初期間は 2025/7/1〜2030/6/30。'}
          </p>
          <p className="mb-2">
            {language === 'en' 
              ? 'Auto-Renewal: Contract extends 5 years if the average DP margin ≥ 15% over the latest 3 fiscal years.' 
              : '直近 3 事業年度平均 DP 利益率が 15%以上なら 5 年自動延長。'}
          </p>
          <p className="mb-2">
            {language === 'en' 
              ? 'If below 15%, either Party may serve written notice 12 months prior to expiry to renegotiate or terminate.' 
              : '15% 未満の場合は両当事者いずれも 12 か月前通知で終了・再協議可。'}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '5. Role Split' : '5. 役割分担'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full mb-4">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Function' : '機能'}</th>
                  <th className="text-left py-2 px-4">Zamna (Global)</th>
                  <th className="text-left py-2 px-4">Ops (Local)</th>
                  <th className="text-left py-2 px-4">HD (HoldCo)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">{language === 'en' ? 'Brand & Global SNS' : 'ブランド・グローバルSNS'}</td>
                  <td className="py-2 px-4">{language === 'en' ? 'Owns trademarks, posts global promo' : '商標所有、グローバルプロモ投稿'}</td>
                  <td className="py-2 px-4">—</td>
                  <td className="py-2 px-4">—</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">{language === 'en' ? 'Artists' : 'アーティスト'}</td>
                  <td className="py-2 px-4">{language === 'en' ? 'Headliners ≤ 50% set-time' : 'ヘッドライナー ≤ 50%セットタイム'}</td>
                  <td className="py-2 px-4">{language === 'en' ? 'Local acts ≥ 50%' : 'ローカルアクト ≥ 50%'}</td>
                  <td className="py-2 px-4">—</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">{language === 'en' ? 'Production' : '制作'}</td>
                  <td className="py-2 px-4">{language === 'en' ? 'Design Stage spec & supervision' : 'ステージ仕様設計・監督'}</td>
                  <td className="py-2 px-4">{language === 'en' ? 'Vendor selection & site ops' : 'ベンダー選定・現場運営'}</td>
                  <td className="py-2 px-4">—</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">{language === 'en' ? 'Permitting' : '許可取得'}</td>
                  <td className="py-2 px-4">{language === 'en' ? 'Templates & best practice' : 'テンプレート・ベストプラクティス'}</td>
                  <td className="py-2 px-4">{language === 'en' ? 'State/County filings' : '州・郡への申請'}</td>
                  <td className="py-2 px-4">—</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">{language === 'en' ? 'Finance' : '財務'}</td>
                  <td className="py-2 px-4">—</td>
                  <td className="py-2 px-4">{language === 'en' ? 'Daily cash-up' : '日次現金集計'}</td>
                  <td className="py-2 px-4">{language === 'en' ? 'Holds bank, distributes profit' : '銀行口座保有、利益分配'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '6. Fee Structure' : '6. 費用・フィー体系'}
          </h3>
          
          <h4 className="text-lg font-medium mt-4 mb-2">
            {language === 'en' ? '6.1 Artist Mark-up (Zamna)' : '6.1 アーティストマークアップ'}
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full mb-4">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Raw Cost' : '原価'}</th>
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Mark-up %' : 'マークアップ %'}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">≤ 99,999 USD</td>
                  <td className="py-2 px-4">15%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">100,000–199,999</td>
                  <td className="py-2 px-4">10%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">≥ 200,000</td>
                  <td className="py-2 px-4">5%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            {language === 'en' 
              ? 'Invoice must show raw & mark-up; Ops must countersign.' 
              : '原価とマークアップ額を同一請求書に記載し Ops が承認。'}
          </p>
          
          <h4 className="text-lg font-medium mt-4 mb-2">
            {language === 'en' ? '6.2 Savings Bonus' : '6.2 節約ボーナス'}
          </h4>
          <p className="mb-4">
            {language === 'en' 
              ? 'If actual artist spend < budget cap, 40% of the delta is paid to Zamna, 60% adds to DP.' 
              : '実績が予算未満の場合、差額の 40% を Zamna ボーナス、60% を DP へ。'}
          </p>
          
          <h4 className="text-lg font-medium mt-4 mb-2">
            {language === 'en' ? '6.3 Management Fee' : '6.3 管理フィー'}
          </h4>
          <p className="mb-4">
            {language === 'en' 
              ? 'Up to 10% of actuals when Production Arrangements are outsourced by Zamna or Ops; initially set to 0% and requires mutual written amendment to activate.' 
              : '当面 0%、変更時は書面合意。'}
          </p>
          
          <h4 className="text-lg font-medium mt-4 mb-2">
            {language === 'en' ? '6.4 Production Cost Cap' : '6.4 制作コストキャップ'}
          </h4>
          <ol className="list-decimal pl-6 mb-4">
            <li className="mb-1">{language === 'en' ? 'Cap = Baseline Cap × Approved Capacity.' : 'キャップ = 基本キャップ × 承認定員。'}</li>
            <li className="mb-1">{language === 'en' ? 'Revised each January by CPI + prior-year cost index.' : '毎年1月にCPI + 前年コスト指数で改定。'}</li>
            <li className="mb-1">{language === 'en' ? 'Costs forecast above the cap are for Zamna\'s account.' : '超過見込み分は Zamna 自己負担。'}</li>
          </ol>
          
          <h4 className="text-lg font-medium mt-4 mb-2">
            {language === 'en' ? '6.5 Brand Compensation Option' : '6.5 ブランド対価の選択制'}
          </h4>
          <p className="mb-2">
            {language === 'en' 
              ? 'Advance Model: If Zamna fronts ≥ 50% of Pass-through Cost, Zamna receives 3% of Gross Revenue.' 
              : 'Zamnaが原価の 50% 以上前払いする場合、売上 3% を受領。'}
          </p>
          <p className="mb-2">
            {language === 'en' 
              ? 'Profit-Share Model: If Ops/HD cover costs, Zamna takes no sales royalty and earns only from DP split (see §7).' 
              : '原価を Ops/HD が負担する場合、Zamna は売上ロイヤリティなし。'}
          </p>
          <p className="mb-4">
            {language === 'en' 
              ? 'Choice must be fixed 12 months before each edition.' 
              : 'モデル選択は開催 12 か月前までに確定。'}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '7. Profit Split' : '7. 利益配分'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full mb-4">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-4">{language === 'en' ? 'DP Margin' : 'DP利益率'}</th>
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Local (HD/Ops)' : 'ローカル (HD/Ops)'}</th>
                  <th className="text-left py-2 px-4">Zamna</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">0–10%</td>
                  <td className="py-2 px-4">80%</td>
                  <td className="py-2 px-4">20%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">10–20%</td>
                  <td className="py-2 px-4">60%</td>
                  <td className="py-2 px-4">40%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">≥ 20%</td>
                  <td className="py-2 px-4">50%</td>
                  <td className="py-2 px-4">50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '8. Payment Flow' : '8. 支払フロー'}
          </h3>
          
          <h4 className="text-lg font-medium mt-4 mb-2">
            {language === 'en' ? '8.1 If Advance Model is elected' : '8.1 前払いモデルの場合'}
          </h4>
          <ol className="list-decimal pl-6 mb-4">
            <li className="mb-1">{language === 'en' ? 'Contract Effective → Zamna deposits 20% to Ops for artist advances.' : '契約発効 → Zamna が Ops に 20% 入金（アーティスト前払い用）。'}</li>
            <li className="mb-1">{language === 'en' ? 'Load-in (T-14) → extra 40%.' : '搬入開始 (T-14) → さらに 40%。'}</li>
            <li className="mb-1">{language === 'en' ? 'D+5 → remaining 40% + Mark-ups + Savings Bonus + 3% royalty.' : 'D+5 → 残り 40% + マークアップ + 節約ボーナス + 3% ロイヤリティ。'}</li>
          </ol>
          
          <h4 className="text-lg font-medium mt-4 mb-2">
            {language === 'en' ? '8.2 If Profit-Share Model is elected' : '8.2 利益分配モデルの場合'}
          </h4>
          <ol className="list-decimal pl-6 mb-4">
            <li className="mb-1">{language === 'en' ? 'Ops pays suppliers directly.' : 'Ops がサプライヤーに直接支払い。'}</li>
            <li className="mb-1">{language === 'en' ? 'D+5 → DP is calculated, split per §7 + Mark-ups + Savings Bonus.' : 'D+5 → DP計算、§7に基づき分配 + マークアップ + 節約ボーナス。'}</li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '9. Governance' : '9. ガバナンス'}
          </h3>
          <p className="mb-2">
            {language === 'en' ? 'Board = Zamna 3, Local 3, Independent CPA 1.' : '取締役会 = Zamna 3名、ローカル 3名、独立公認会計士 1名。'}
          </p>
          <p className="mb-2">
            {language === 'en' ? 'Change Orders > 25,000 USD need dual sign (Zamna PM & Ops CFO).' : '25,000 USD 超の変更指示は双方署名要（Zamna PM & Ops CFO）。'}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '10. Risk Allocation' : '10. リスク分担'}
          </h3>
          <p className="mb-2">
            {language === 'en' ? 'See Schedule A.' : '別紙 A 参照。'}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '11. Mutual Earn-out' : '11. 相互アーンアウト'}
          </h3>
          <p className="mb-2">
            {language === 'en' ? 'Put (Zamna): From 1 Jul 2035 Zamna may sell its 49% stake at EBITDA × 5.' : 'プット（Zamna）：2035年7月1日以降、Zamna は 49% 持分を EBITDA × 5 で売却可能。'}
          </p>
          <p className="mb-2">
            {language === 'en' ? 'Call (Local): Local has right of first refusal on the same multiple.' : 'コール（ローカル）：ローカルは同倍率で先買権を有する。'}
          </p>
          <p className="mb-2">
            {language === 'en' ? 'Payable lump-sum or 3-year instalment @ 5% p.a.' : '一括払いまたは3年分割（年利5%）で支払い。'}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '12. Exclusivity & IP' : '12. 排他・知財'}
          </h3>
          <p className="mb-2">
            {language === 'en' ? 'Zamna shall not stage a competing EDM festival in Hawai\'i during the Term.' : 'Zamna は期間中ハワイで競合フェスを開催しない。'}
          </p>
          <p className="mb-2">
            {language === 'en' ? 'HD may use the "ZAMNA HAWAII" mark in JP & HI for 3 years royalty-free.' : 'HD は商標を 3 年間無償使用可。'}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '13. Sunset Review' : '13. サンセット再協議'}
          </h3>
          <p className="mb-2">
            {language === 'en' ? 'If DP margin < 12% three consecutive years, Parties renegotiate fees & splits.' : 'DP利益率が3年連続12%未満の場合、当事者はフィーと分配率を再協議する。'}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '14. Confidentiality' : '14. 秘密保持'}
          </h3>
          <p className="mb-2">
            {language === 'en' ? 'Breach → actual damages + liquidated damages 100,000 USD.' : '違反 → 実損害 + 違約金 100,000 USD。'}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '15. Termination Notice' : '15. 通知'}
          </h3>
          <p className="mb-2">
            {language === 'en' ? 'Unless otherwise notified 12 months prior, the contract renews per §3.' : '12か月前に別段の通知がない限り、契約は§3に基づき更新される。'}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? '16. Governing Law & Dispute' : '16. 準拠法・紛争'}
          </h3>
          <p className="mb-2">
            {language === 'en' ? 'Hawai\'i Law; Honolulu Arbitration Center, 3-member panel, English.' : 'ハワイ州法；ホノルル仲裁センター、3名パネル、英語。'}
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? 'Signature' : '署名'}
          </h3>
          <p className="mb-2">
            {language === 'en' ? 'Executed via e-signature (PDF).' : '電子署名 PDF により締結。'}
          </p>
          <div className="grid grid-cols-2 gap-8 mt-6">
            <div>
              <p className="mb-4">Zamna Global S.L.</p>
              <p className="mb-2">By: _____________</p>
              <p>Date: ______ 2025</p>
            </div>
            <div>
              <p className="mb-4">ZAMNA HAWAII HOLDINGS LLC</p>
              <p className="mb-2">By: _____________</p>
              <p>Date: ______ 2025</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-3 border-b border-white/20 pb-2">
            {language === 'en' ? 'Schedule A – Risk Table' : '別紙 A リスク分担'}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full mb-4">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Risk' : 'リスク'}</th>
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Bearer' : '負担者'}</th>
                  <th className="text-left py-2 px-4">{language === 'en' ? 'Note' : '備考'}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">{language === 'en' ? 'Permit delays' : '許可遅延'}</td>
                  <td className="py-2 px-4">Ops</td>
                  <td className="py-2 px-4">{language === 'en' ? 'Only filing cost; contract terminable if CP unmet' : '申請費用のみ；条件未達成で契約解除可'}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">{language === 'en' ? 'Cost overrun beyond cap' : 'キャップ超過コスト'}</td>
                  <td className="py-2 px-4">Zamna</td>
                  <td className="py-2 px-4">{language === 'en' ? 'Pays all above cap' : 'キャップ超過分全額負担'}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">{language === 'en' ? 'Artist no-show' : 'アーティスト不参加'}</td>
                  <td className="py-2 px-4">{language === 'en' ? 'Booking party' : '予約当事者'}</td>
                  <td className="py-2 px-4">{language === 'en' ? '3% contingency + replacement' : '3%予備費 + 代替アーティスト'}</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">{language === 'en' ? 'Weather / Force Majeure' : '天候/不可抗力'}</td>
                  <td className="py-2 px-4">{language === 'en' ? 'Insurance first, remainder split by DP ratio' : '保険優先、残りはDP比率で分担'}</td>
                  <td className="py-2 px-4">-</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-2 px-4">{language === 'en' ? 'Ticket shortfall' : 'チケット売上不足'}</td>
                  <td className="py-2 px-4">{language === 'en' ? 'DP ratio per §7' : '§7のDP比率'}</td>
                  <td className="py-2 px-4">-</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-right text-sm text-gray-400 mt-4">Draft 1 – 26 Apr 2025</p>
        </section>
      </div>
    </div>
  );
}