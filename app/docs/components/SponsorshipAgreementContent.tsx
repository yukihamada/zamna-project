'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';
import PDFDownloadButton from '@/app/components/PDFDownloadButton';

export default function SponsorshipAgreementContent() {
  const { language } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {language === 'en' ? 'Event Sponsorship Agreement (Template)' : 'イベントスポンサーシップ契約書（テンプレート）'}
        </h1>
        <PDFDownloadButton 
          contentId="sponsorship-agreement-content" 
          fileName={language === 'en' ? 'Event_Sponsorship_Agreement_Template' : 'イベントスポンサーシップ契約書_テンプレート'}
        />
      </div>

      <div id="sponsorship-agreement-content" className="prose prose-invert max-w-none">
        {language === 'en' ? (
          <>
            <h1>EVENT SPONSORSHIP AGREEMENT (Template)</h1>

            <p><strong>This Sponsorship Agreement (the &ldquo;Agreement&rdquo;)</strong> is entered into as of the <strong>___ day of __________ 202__</strong> (the &ldquo;Effective Date&rdquo;) by and between:</p>

            <h2>1. EVENT ORGANIZER</h2>
            <p>
              Zamna Hawaii LLC (&ldquo;Organizer&rdquo;)<br />
              1001 Bishop St, Honolulu, HI 96813<br />
              Representative: ______________________<br />
              Email: contracts@zamna‑hawaii.com
            </p>

            <h2>2. SPONSOR</h2>
            <p>
              Legal Entity: ______________________ (&ldquo;Sponsor&rdquo;)<br />
              Address: ______________________<br />
              Representative: ______________________<br />
              Email: ______________________
            </p>

            <p>Organizer and Sponsor may each be referred to herein individually as a &ldquo;Party&rdquo; and collectively as the &ldquo;Parties.&rdquo;</p>

            <hr />

            <h2>1. EVENT DETAILS</h2>
            <ul>
              <li><strong>Event Name:</strong> Zamna Hawaii 2026</li>
              <li><strong>Dates:</strong> 3 October 2026 (Main) / 4 October 2026 (Reserve)</li>
              <li><strong>Venue:</strong> Kakaʻako Waterfront Park, Honolulu, Hawaiʻi</li>
              <li><strong>Estimated Attendance:</strong> 5,000 persons</li>
            </ul>

            <h2>2. SPONSORSHIP TIER & BENEFITS</h2>
            <p>2.1 <em>Tier.</em> Sponsor agrees to participate as <strong>__________ Tier (e.g., Founding / Carbon / Platinum / Gold / Silver / Bronze)</strong>.</p>
            <p>2.2 <em>Benefits.</em> Organizer shall provide the benefits corresponding to the selected tier as outlined in <strong>Exhibit A (Benefits Schedule)</strong>, including but not limited to:</p>
            <ul>
              <li>Logo placement on event marketing assets;</li>
              <li>On‑site branding and signage;</li>
              <li>Hospitality passes and ticket allocation;</li>
              <li>Digital and social media mentions;</li>
              <li>Category exclusivity (if applicable).</li>
            </ul>
            <p>2.3 <em>Substitutions.</em> Organizer reserves the right to substitute comparable benefits of equal value upon prior written notice to Sponsor.</p>

            <h2>3. SPONSORSHIP FEE & PAYMENT TERMS</h2>
            <p>3.1 <em>Fee.</em> Sponsor shall pay Organizer a total sponsorship fee of <strong>USD __________</strong> (&ldquo;Fee&rdquo;).</p>
            <p>3.2 <em>Schedule.</em> Unless otherwise agreed:</p>
            <ul>
              <li>50 % of the Fee due within 15 days of Agreement execution (non‑refundable deposit).</li>
              <li>50 % balance due no later than 15 days prior to the Event start date.</li>
            </ul>
            <p>3.3 <em>Late Payments.</em> Late payments accrue interest at 1 % per month or the maximum rate permitted by law.</p>

            <h2>4. TERM & TERMINATION</h2>
            <p>4.1 <em>Term.</em> This Agreement commences on the Effective Date and terminates 30 days after Organizer&apos;s delivery of the post‑event sponsorship report (&ldquo;Term&rdquo;).</p>
            <p>4.2 <em>Cancellation by Sponsor.</em> If Sponsor cancels:</p>
            <ul>
              <li>≥ 60 days before Event → forfeits deposit;</li>
              <li>&lt; 60 days before Event → full Fee payable.</li>
            </ul>
            <p>4.3 <em>Cancellation by Organizer.</em> If Organizer cancels the Event for reasons other than Force Majeure, Organizer shall refund all Fees paid within 30 days.</p>

            <h2>5. FORCE MAJEURE</h2>
            <p>Neither Party shall be liable for failure or delay caused by events beyond its reasonable control including, but not limited to, acts of God, government regulation, epidemic, or natural disaster (&ldquo;Force Majeure&rdquo;). Organizer may reschedule the Event within 12 months; Sponsor benefits roll over or, if rescheduling is not possible, Organizer refunds Fees less non‑recoverable costs (not to exceed 25 %).</p>

            <h2>6. INTELLECTUAL PROPERTY & BRAND USAGE</h2>
            <p>6.1 <em>IP License to Organizer.</em> Sponsor grants Organizer a non‑exclusive, royalty‑free, worldwide license to use Sponsor&apos;s name, logos, and trademarks (&ldquo;Marks&rdquo;) solely for fulfilling the sponsorship benefits during the Term.</p>
            <p>6.2 <em>IP License to Sponsor.</em> Organizer grants Sponsor a limited license to use the Zamna Hawaii name and logo for promotional activities directly related to the Event, subject to brand guidelines (Exhibit B).</p>

            <h2>7. CONFIDENTIALITY</h2>
            <p>Both Parties shall keep the financial terms and any proprietary information confidential for 3 years following the Term, except as required by law.</p>

            <h2>8. COMPLIANCE & REPRESENTATIONS</h2>
            <p>8.1 Sponsor warrants that its products/services and marketing materials comply with all applicable laws and do not infringe third‑party rights.</p>
            <p>8.2 Organizer agrees to stage the Event in compliance with HCDA permits, DOH regulations, and city ordinances.</p>

            <h2>9. INDEMNIFICATION & LIABILITY</h2>
            <p>Each Party (&ldquo;Indemnifying Party&rdquo;) shall indemnify and hold harmless the other Party against claims arising from the Indemnifying Party&apos;s negligence, willful misconduct, or breach of this Agreement. Liability of either Party shall not exceed the Fee, except for claims involving death, personal injury, or IP infringement.</p>

            <h2>10. INSURANCE</h2>
            <p>Organizer shall maintain general liability insurance of at least USD 10 million per occurrence naming Sponsor as Additional Insured. Organizer shall furnish a certificate of insurance at least 30 days prior to the Event.</p>

            <h2>11. GOVERNING LAW & DISPUTE RESOLUTION</h2>
            <p>This Agreement is governed by the laws of the State of Hawaiʻi. Any dispute not resolved by good‑faith negotiations within 30 days shall be submitted to binding arbitration in Honolulu under the rules of the American Arbitration Association. Judgment on the award may be entered in any court of competent jurisdiction.</p>

            <h2>12. MISCELLANEOUS</h2>
            <p>12.1 Entire Agreement constitutes the final, complete understanding of the Parties.</p>
            <p>12.2 Amendments require written approval signed by both Parties.</p>
            <p>12.3 Assignment prohibited without prior written consent (except corporate reorganization).</p>
            <p>12.4 Counterparts and electronic signatures are deemed originals.</p>

            <hr />

            <h3>SIGNATURES</h3>

            <h4>ORGANIZER</h4>
            <pre>
Signature: ___________________________
Name: ___________________________
Title: ___________________________
Date: ____ / ____ / 202__
            </pre>

            <h4>SPONSOR</h4>
            <pre>
Signature: ___________________________
Name: ___________________________
Title: ___________________________
Date: ____ / ____ / 202__
            </pre>

            <hr />

            <h3>EXHIBIT A — Benefits Schedule (Sample Outline)</h3>

            <table>
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Rights & Benefits</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Founding Partner</td>
                  <td>Event co‑title &ldquo;Zamna Hawaii presented by ___&rdquo;; Main Stage naming; 200 GA + 50 VIP tickets; full branding of VIP lounge; logo on all media; 20 backstage passes; optional revenue share 2 %.</td>
                </tr>
                <tr>
                  <td>Carbon Partner</td>
                  <td>Naming of Carbon Neutral Lounge; 100 GA + 30 VIP tickets; 30 m² tech showcase booth; logo on sustainability reports.</td>
                </tr>
                <tr>
                  <td>Platinum</td>
                  <td>Large logo on LED walls; 60 GA + 12 VIP tickets; category exclusivity.</td>
                </tr>
                <tr>
                  <td>Gold</td>
                  <td>Medium logo placements; 30 GA + 6 VIP tickets.</td>
                </tr>
                <tr>
                  <td>Silver</td>
                  <td>Small logo placements; 10 GA tickets.</td>
                </tr>
                <tr>
                  <td>Bronze</td>
                  <td>Website logo; social media shout‑out; 6 GA tickets.</td>
                </tr>
              </tbody>
            </table>

            <h3>EXHIBIT B — Brand Usage Guidelines</h3>
            <p><em>(Attach Zamna brand book or link)</em></p>
          </>
        ) : (
          <>
            <h1>イベントスポンサーシップ契約書（テンプレート）</h1>

            <p><strong>本スポンサーシップ契約書（以下「本契約」）</strong>は、<strong>202__年__月__日</strong>（以下「発効日」）に以下の当事者間で締結されます：</p>

            <h2>1. イベント主催者</h2>
            <p>
              Zamna Hawaii LLC（以下「主催者」）<br />
              1001 Bishop St, Honolulu, HI 96813<br />
              担当者: ______________________<br />
              Eメール: contracts@zamna‑hawaii.com
            </p>

            <h2>2. スポンサー</h2>
            <p>
              法人名: ______________________ （以下「スポンサー」）<br />
              住所: ______________________<br />
              担当者: ______________________<br />
              Eメール: ______________________
            </p>

            <p>主催者とスポンサーは、それぞれ「当事者」、総称して「両当事者」と呼ぶことがあります。</p>

            <hr />

            <h2>1. イベント詳細</h2>
            <ul>
              <li><strong>イベント名:</strong> Zamna Hawaii 2026</li>
              <li><strong>開催日:</strong> 2026年10月3日（メイン）/ 2026年10月4日（予備日）</li>
              <li><strong>会場:</strong> カカアコ・ウォーターフロント・パーク、ホノルル、ハワイ州</li>
              <li><strong>想定来場者数:</strong> 5,000人</li>
            </ul>

            <h2>2. スポンサーシップ区分と特典</h2>
            <p>2.1 <em>区分</em>：スポンサーは<strong>__________区分（例：ファウンディング / カーボン / プラチナ / ゴールド / シルバー / ブロンズ）</strong>として参加することに同意します。</p>
            <p>2.2 <em>特典</em>：主催者は、<strong>別紙A（特典一覧）</strong>に記載された選択区分に対応する特典を提供するものとします。これには以下を含みますが、これらに限定されません：</p>
            <ul>
              <li>イベントマーケティング素材へのロゴ掲載</li>
              <li>会場内でのブランディングと看板設置</li>
              <li>招待パスとチケット配分</li>
              <li>デジタルおよびソーシャルメディアでの言及</li>
              <li>カテゴリー独占権（該当する場合）</li>
            </ul>
            <p>2.3 <em>代替</em>：主催者は、スポンサーに事前に書面で通知することにより、同等の価値を持つ比較可能な特典に代替する権利を留保します。</p>

            <h2>3. スポンサーシップ料金と支払条件</h2>
            <p>3.1 <em>料金</em>：スポンサーは主催者に対し、合計<strong>USD __________</strong>（以下「料金」）のスポンサーシップ料金を支払うものとします。</p>
            <p>3.2 <em>スケジュール</em>：別段の合意がない限り：</p>
            <ul>
              <li>契約締結後15日以内に料金の50％（返金不可の前金）</li>
              <li>イベント開始日の15日前までに残りの50％</li>
            </ul>
            <p>3.3 <em>遅延支払</em>：支払遅延には、月1％または法律で認められる最大利率の利息が発生します。</p>

            <h2>4. 契約期間と解除</h2>
            <p>4.1 <em>期間</em>：本契約は発効日に開始し、主催者がイベント後のスポンサーシップレポートを提出してから30日後に終了します（以下「契約期間」）。</p>
            <p>4.2 <em>スポンサーによるキャンセル</em>：スポンサーがキャンセルした場合：</p>
            <ul>
              <li>イベントの60日以上前 → 前金没収</li>
              <li>イベントの60日未満前 → 全額支払い義務</li>
            </ul>
            <p>4.3 <em>主催者によるキャンセル</em>：主催者が不可抗力以外の理由でイベントをキャンセルした場合、主催者は30日以内に支払われた全料金を返金するものとします。</p>

            <h2>5. 不可抗力</h2>
            <p>いずれの当事者も、天災、政府規制、疫病、自然災害など、合理的な制御を超えた事象（以下「不可抗力」）によって引き起こされた不履行または遅延について責任を負わないものとします。主催者は12ヶ月以内にイベントを再スケジュールすることができます；スポンサー特典は繰り越されるか、再スケジュールが不可能な場合、主催者は回収不能なコスト（25％を超えない）を差し引いた料金を返金します。</p>

            <h2>6. 知的財産権とブランド使用</h2>
            <p>6.1 <em>主催者へのIP使用許諾</em>：スポンサーは、契約期間中にスポンサーシップ特典を履行する目的に限り、スポンサーの名称、ロゴ、商標（以下「マーク」）を使用するための非独占的、無償、世界的なライセンスを主催者に付与します。</p>
            <p>6.2 <em>スポンサーへのIP使用許諾</em>：主催者は、イベントに直接関連するプロモーション活動のために、ブランドガイドライン（別紙B）に従うことを条件に、Zamna Hawaiiの名称とロゴを使用する限定的なライセンスをスポンサーに付与します。</p>

            <h2>7. 機密保持</h2>
            <p>両当事者は、法律で要求される場合を除き、契約期間終了後3年間、財務条件および専有情報を機密に保持するものとします。</p>

            <h2>8. 遵守と表明</h2>
            <p>8.1 スポンサーは、その製品/サービスおよびマーケティング資料が適用されるすべての法律に準拠し、第三者の権利を侵害しないことを保証します。</p>
            <p>8.2 主催者は、HCDA許可、DOH規制、および市条例に準拠してイベントを開催することに同意します。</p>

            <h2>9. 補償と責任</h2>
            <p>各当事者（以下「補償当事者」）は、補償当事者の過失、故意の不正行為、または本契約違反から生じる請求に対して、相手方当事者を補償し、無害に保つものとします。死亡、人身傷害、またはIP侵害に関する請求を除き、いずれの当事者の責任も料金を超えないものとします。</p>

            <h2>10. 保険</h2>
            <p>主催者は、スポンサーを追加被保険者として指名する、発生あたり少なくとも1,000万米ドルの一般賠償責任保険を維持するものとします。主催者は、イベントの少なくとも30日前に保険証明書を提出するものとします。</p>

            <h2>11. 準拠法と紛争解決</h2>
            <p>本契約はハワイ州法に準拠します。30日以内に誠実な交渉によって解決されない紛争は、アメリカ仲裁協会の規則に基づきホノルルでの拘束力のある仲裁に付託されるものとします。裁定に対する判決は、管轄権を有する裁判所に提出することができます。</p>

            <h2>12. 雑則</h2>
            <p>12.1 完全合意は、両当事者の最終的かつ完全な理解を構成します。</p>
            <p>12.2 修正には両当事者が署名した書面による承認が必要です。</p>
            <p>12.3 事前の書面による同意なしに譲渡は禁止されています（企業再編を除く）。</p>
            <p>12.4 副本および電子署名は原本とみなされます。</p>

            <hr />

            <h3>署名</h3>

            <h4>主催者</h4>
            <pre>
署名: ___________________________
氏名: ___________________________
役職: ___________________________
日付: ____ / ____ / 202__
            </pre>

            <h4>スポンサー</h4>
            <pre>
署名: ___________________________
氏名: ___________________________
役職: ___________________________
日付: ____ / ____ / 202__
            </pre>

            <hr />

            <h3>別紙A — 特典一覧（サンプル概要）</h3>

            <table>
              <thead>
                <tr>
                  <th>区分</th>
                  <th>権利と特典</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ファウンディングパートナー</td>
                  <td>イベント共同タイトル「Zamna Hawaii presented by ___」；メインステージネーミング；一般チケット200枚＋VIPチケット50枚；VIPラウンジの完全ブランディング；すべてのメディアにロゴ掲載；バックステージパス20枚；オプションの収益シェア2％。</td>
                </tr>
                <tr>
                  <td>カーボンパートナー</td>
                  <td>カーボンニュートラルラウンジのネーミング；一般チケット100枚＋VIPチケット30枚；30m²のテクノロジーショーケースブース；サステナビリティレポートにロゴ掲載。</td>
                </tr>
                <tr>
                  <td>プラチナ</td>
                  <td>LEDウォールに大きなロゴ；一般チケット60枚＋VIPチケット12枚；カテゴリー独占権。</td>
                </tr>
                <tr>
                  <td>ゴールド</td>
                  <td>中サイズのロゴ掲載；一般チケット30枚＋VIPチケット6枚。</td>
                </tr>
                <tr>
                  <td>シルバー</td>
                  <td>小サイズのロゴ掲載；一般チケット10枚。</td>
                </tr>
                <tr>
                  <td>ブロンズ</td>
                  <td>ウェブサイトにロゴ掲載；ソーシャルメディアでの紹介；一般チケット6枚。</td>
                </tr>
              </tbody>
            </table>

            <h3>別紙B — ブランド使用ガイドライン</h3>
            <p><em>（Zamnaブランドブックまたはリンクを添付）</em></p>
          </>
        )}
      </div>
    </div>
  );
}