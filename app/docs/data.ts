export interface Doc {
  slug: string;
  category: string;
  categoryEn: string;
  title: string;
  titleEn: string;
  target: string;
  targetEn: string;
  description: string;
  descriptionEn: string;
}

export const docs: Doc[] = [
  { 
    slug: 'venue-comparison', 
    category: '会場・構造', 
    categoryEn: 'Venue & Structure',
    title: 'Zamna Hawaii 2026 会場比較', 
    titleEn: 'Venue Comparison for Zamna Hawaii 2026',
    target: 'HCDA・企画', 
    targetEn: 'HCDA & Planning',
    description: 'オアフ島の主要会場4箇所の比較と選定指針。',
    descriptionEn: 'Comparison of 4 major venues on Oʻahu with selection guidelines.'
  },
  { 
    slug: 'noise-variance-form', 
    category: '許可申請セット', 
    categoryEn: 'Permit & Compliance',
    title: 'Noise Variance 正式申請フォーム（DOH-Noise）', 
    titleEn: 'Noise Variance Official Application Form (DOH-Noise)',
    target: 'DOH', 
    targetEn: 'Department of Health',
    description: 'サウンド SPL 上限・測定体制を記した DOH フォーム DNR-N1。',
    descriptionEn: 'DOH form DNR-N1 detailing sound SPL limits and measurement protocols.'
  },
  { 
    slug: 'tent-permit', 
    category: '許可申請セット', 
    categoryEn: 'Permit & Compliance',
    title: 'Tent / Membrane Structure Permit（HFD）', 
    titleEn: 'Tent / Membrane Structure Permit (HFD)',
    target: 'Honolulu Fire Dept.', 
    targetEn: 'Honolulu Fire Department',
    description: 'メイン＆VIP テント用の Fire Tent Permit（HFD-T）。構造図と難燃証明の添付。',
    descriptionEn: 'Fire Tent Permit (HFD-T) for main & VIP tents with structural diagrams and flame resistance certifications.'
  },
  { 
    slug: 'drone-pyro-waiver', 
    category: '許可申請セット', 
    categoryEn: 'Permit & Compliance',
    title: 'Drone / Pyro SFX Waiver（FAA 及び HFD）', 
    titleEn: 'Drone / Pyro SFX Waiver (FAA and HFD)',
    target: 'FAA・HFD', 
    targetEn: 'FAA & Honolulu Fire Department',
    description: 'ドローン撮影・花火・火柱用の FAA 7711-2 & HFD Fireworks Display Permit。',
    descriptionEn: 'FAA 7711-2 & HFD Fireworks Display Permit for drone filming, fireworks, and flame effects.'
  },
  { 
    slug: 'ada-plan', 
    category: '許可申請セット', 
    categoryEn: 'Permit & Compliance',
    title: 'ADA Accessibility Plan', 
    titleEn: 'ADA Accessibility Plan',
    target: 'HCDA', 
    targetEn: 'Hawaii Community Development Authority',
    description: 'スロープ経路、車椅子席、視覚障がい者向け案内などを図示した計画書。',
    descriptionEn: 'Plan illustrating ramp routes, wheelchair seating, and guidance for visually impaired attendees.'
  },
  { 
    slug: 'ems-plan', 
    category: '運営', 
    categoryEn: 'Safety & Operations',
    title: 'Emergency Medical Services (EMS) Plan', 
    titleEn: 'Emergency Medical Services (EMS) Plan',
    target: 'HFD・医療チーム', 
    targetEn: 'HFD & Medical Team',
    description: '医務ステーション配置、搬送フロー、オンサイト医師/ALS隊員数の詳細計画。',
    descriptionEn: 'Detailed plan for medical station placement, transport flow, and onsite physician/ALS personnel numbers.'
  },
  { 
    slug: 'severe-weather-sop', 
    category: '運営', 
    categoryEn: 'Safety & Operations',
    title: 'Severe Weather & Evacuation SOP', 
    titleEn: 'Severe Weather & Evacuation SOP',
    target: 'HCDA・HPD・スタッフ', 
    targetEn: 'HCDA, HPD & Staff',
    description: '雷雨／高波／地震時の中断・再開基準と連絡手順のタイムライン。',
    descriptionEn: 'Suspension and resumption criteria for thunderstorms/high waves/earthquakes with communication procedure timeline.'
  },
  { 
    slug: 'communications-matrix', 
    category: '運営', 
    categoryEn: 'Safety & Operations',
    title: 'Communications Matrix', 
    titleEn: 'Communications Matrix',
    target: '全スタッフ', 
    targetEn: 'All Staff',
    description: '無線チャンネル一覧、指揮系統、緊急コード表。',
    descriptionEn: 'Radio channel list, chain of command, and emergency code chart.'
  },
  { 
    slug: 'liquor-caterer-application', 
    category: '許可申請セット', 
    categoryEn: 'Food & Beverage',
    title: 'Liquor Caterer License Application Packet', 
    titleEn: 'Liquor Caterer License Application Packet',
    target: 'Liquor Commission', 
    targetEn: 'Liquor Commission',
    description: 'Special-Event Permit（LC-SV）申請書とサーバーカード一覧。',
    descriptionEn: 'Special-Event Permit (LC-SV) application and server card list.'
  },
  { 
    slug: 'food-self-inspection', 
    category: '許可申請セット', 
    categoryEn: 'Food & Beverage',
    title: 'Temporary Food Establishment Self-Inspection Forms', 
    titleEn: 'Temporary Food Establishment Self-Inspection Forms',
    target: 'DOH (Food Safety)', 
    targetEn: 'Department of Health (Food Safety)',
    description: 'ベンダーごとの DOH "Form 501"（シンク・温度管理チェックリスト）。',
    descriptionEn: 'DOH "Form 501" (sink and temperature management checklist) for each vendor.'
  },
  { 
    slug: 'endorsement-page', 
    category: '保険・契約', 
    categoryEn: 'Insurance & Legal',
    title: 'Endorsement Page（Additional Insured）', 
    titleEn: 'Endorsement Page (Additional Insured)',
    target: '保険会社・HCDA', 
    targetEn: 'Insurance Company & HCDA',
    description: 'State/Honolulu/HCDA を追記した ADDL INSRD エンドースメント。',
    descriptionEn: 'ADDL INSRD endorsement listing State/Honolulu/HCDA as additional insured.'
  },
  { 
    slug: 'vendor-cois', 
    category: '保険・契約', 
    categoryEn: 'Insurance & Legal',
    title: 'Vendor COIs & Hold-Harmless Agreements', 
    titleEn: 'Vendor COIs & Hold-Harmless Agreements',
    target: 'ベンダー管理', 
    targetEn: 'Vendor Management',
    description: 'LED／ステージ／電源会社など高リスクベンダーの保険証書と免責同意書。',
    descriptionEn: 'Insurance certificates and hold-harmless agreements for high-risk vendors like LED/stage/power companies.'
  },
  { 
    slug: 'volunteer-waiver', 
    category: '保険・契約', 
    categoryEn: 'Insurance & Legal',
    title: 'Volunteer Waiver & Release Form', 
    titleEn: 'Volunteer Waiver & Release Form',
    target: 'ボランティア管理', 
    targetEn: 'Volunteer Management',
    description: '労災適用外ボランティアの同意書（在住者・留学生で2種）。',
    descriptionEn: 'Consent forms for volunteers not covered by workers\' compensation (2 types for residents and international students).'
  },
  { 
    slug: 'detailed-budget', 
    category: '企画・資金', 
    categoryEn: 'Finance & Reporting',
    title: 'Detailed CapEx / OpEx Budget v4 (live tracker)', 
    titleEn: 'Detailed CapEx / OpEx Budget v4 (live tracker)',
    target: 'Zamna & HD', 
    targetEn: 'Zamna & HD',
    description: 'HCDA 監査時に突合される行レベル台帳。',
    descriptionEn: 'Line-level ledger used for reconciliation during HCDA audits.'
  },
  { 
    slug: 'tax-clearance', 
    category: '企画・資金', 
    categoryEn: 'Finance & Reporting',
    title: 'Tax Clearance & GET License Copies', 
    titleEn: 'Tax Clearance & GET License Copies',
    target: '州税務局・HTA', 
    targetEn: 'State Tax Office & HTA',
    description: '州税務局から発行される6か月有効の Tax Clearance と GET ライセンスコピー。',
    descriptionEn: 'Six-month valid Tax Clearance issued by the State Tax Office and GET license copies.'
  },
  { 
    slug: 'sustainability-assessment', 
    category: '環境・リサイクル', 
    categoryEn: 'Sustainability',
    title: 'Sustainability Impact Assessment', 
    titleEn: 'Sustainability Impact Assessment',
    target: 'HTA・スポンサーPR', 
    targetEn: 'HTA & Sponsor PR',
    description: 'CO₂ 排出試算・廃棄物 80% diversion の計算根拠。',
    descriptionEn: 'Calculation basis for CO₂ emission estimates and 80% waste diversion.'
  },
  { 
    slug: 'economic-impact-template', 
    category: '事後', 
    categoryEn: 'Post-Event',
    title: 'Economic Impact Report Template', 
    titleEn: 'Economic Impact Report Template',
    target: 'HTA・スポンサー', 
    targetEn: 'HTA & Sponsors',
    description: '宿泊客アンケート＋SafeGraph 人流データを取り込むフォーマット。',
    descriptionEn: 'Format incorporating accommodation guest surveys and SafeGraph foot traffic data.'
  },
  { 
    slug: 'contract-draft', 
    category: '保険・契約', 
    categoryEn: 'Insurance & Contracts',
    title: 'Zamna・現地法人間契約書ドラフト', 
    titleEn: 'Zamna-Local Entity Contract Draft',
    target: '契約管理', 
    targetEn: 'Contract Management',
    description: 'Zamnaと現地法人間の共同制作・興行契約書ドラフト（英日バイリンガル）',
    descriptionEn: 'Heads of Agreement draft between Zamna and local entity (bilingual EN-JP)'
  },
  { 
    slug: 'business-plan', 
    category: '企画・資金', 
    categoryEn: 'Planning & Funding',
    title: '最新ビジネスプラン／P&Lサマリー', 
    titleEn: 'Latest Business Plan & P/L Summary',
    target: '社内稟議・スポンサー説明', 
    targetEn: 'Internal Approval & Sponsor Description',
    description: 'イベント全体のビジネスプランと損益計算をサマリー形式で掲載しています。',
    descriptionEn: 'This document summarizes the business plan and profit and loss calculation for the entire event.'
  },
  { 
    slug: 'sponsor-proposal', 
    category: '企画・資金', 
    categoryEn: 'Planning & Funding',
    title: 'スポンサー提案書（Founding／Carbon Tier 等）', 
    titleEn: 'Sponsor Proposal (Founding/Carbon Tier etc.)',
    target: '企業スポンサー', 
    targetEn: 'Corporate Sponsor',
    description: '企業スポンサー向け提案書テンプレート。',
    descriptionEn: 'Sponsor proposal template for corporate sponsors.'
  },
  { 
    slug: 'hta-grant', 
    category: '企画・資金', 
    categoryEn: 'Planning & Funding',
    title: 'HTA 補助金申請フォーム', 
    titleEn: 'HTA Grant Application Form',
    target: 'HTA', 
    targetEn: 'Hawaii Tourism Authority',
    description: 'ハワイ州観光局への補助金申請に使用するフォームです。',
    descriptionEn: 'Form used for grant application to the Hawaii Tourism Authority.'
  },
  { 
    slug: 'site-plan', 
    category: '会場・構造', 
    categoryEn: 'Venue & Structure',
    title: 'Site Plan CAD／PDF（最終レイアウト）', 
    titleEn: 'Site Plan CAD/PDF (Final Layout)',
    target: 'HCDA・消防', 
    targetEn: 'HCDA & Fire Department',
    description: '会場最終レイアウト図面 CAD / PDF。',
    descriptionEn: 'Final venue layout drawings in CAD/PDF format.'
  },
  { 
    slug: 'utilities-plan', 
    category: '会場・構造', 
    categoryEn: 'Venue & Structure',
    title: '電源・配線・トイレ／ゴミ配置図', 
    titleEn: 'Power, Wiring, Restroom & Waste Station Layout',
    target: 'HCDA・消防・DOH', 
    targetEn: 'HCDA, Fire Department & DOH',
    description: '電源、配線、トイレ、ゴミステーションの配置図です。',
    descriptionEn: 'Layout diagram for power sources, wiring, restrooms, and waste stations.'
  },
  { 
    slug: 'structure-engineering', 
    category: '会場・構造', 
    categoryEn: 'Venue & Structure',
    title: '構造エンジニアリング図（トラス荷重計算付き）', 
    titleEn: 'Structural Engineering Drawings (with Truss Load Calculations)',
    target: 'HCDA', 
    targetEn: 'Hawaii Community Development Authority',
    description: 'ステージトラス構造計算書を含む図面セット。',
    descriptionEn: 'Drawing set including stage truss structural calculations.'
  },
  { 
    slug: 'cover-letter', 
    category: '許可申請セット', 
    categoryEn: 'Permit Application Set',
    title: 'Cover Letter（英語）', 
    titleEn: 'Cover Letter (English)',
    target: 'HCDA', 
    targetEn: 'Hawaii Community Development Authority',
    description: 'HCDA 提出用カバーレター。',
    descriptionEn: 'Cover letter for HCDA submission.'
  },
  { 
    slug: 'hcda-permit', 
    category: '許可申請セット', 
    categoryEn: 'Permit Application Set',
    title: 'HCDA Commercial Event Permit 申請書', 
    titleEn: 'HCDA Commercial Event Permit Application',
    target: 'HCDA', 
    targetEn: 'Hawaii Community Development Authority',
    description: 'HCDA 商業イベント許可申請書。',
    descriptionEn: 'HCDA commercial event permit application form.'
  },
  { 
    slug: 'crowd-fire-plan', 
    category: '許可申請セット', 
    categoryEn: 'Permit Application Set',
    title: 'Crowd & Fire Safety Plan', 
    titleEn: 'Crowd & Fire Safety Plan',
    target: 'Honolulu Fire Dept.', 
    targetEn: 'Honolulu Fire Department',
    description: '群集および消防安全計画。',
    descriptionEn: 'Crowd management and fire safety plan.'
  },
  { 
    slug: 'noise-plan', 
    category: '許可申請セット', 
    categoryEn: 'Permit Application Set',
    title: 'Noise Mitigation Plan', 
    titleEn: 'Noise Mitigation Plan',
    target: 'DOH (Noise Variance)', 
    targetEn: 'Department of Health (Noise Variance)',
    description: '騒音対策プラン。',
    descriptionEn: 'Plan for noise mitigation measures.'
  },
  { 
    slug: 'liquor-plan', 
    category: '許可申請セット', 
    categoryEn: 'Permit Application Set',
    title: 'Liquor Service Plan', 
    titleEn: 'Liquor Service Plan',
    target: 'Liquor Commission', 
    targetEn: 'Liquor Commission',
    description: '酒類提供計画。',
    descriptionEn: 'Plan for alcoholic beverage service.'
  },
  { 
    slug: 'food-permit', 
    category: '許可申請セット', 
    categoryEn: 'Permit Application Set',
    title: 'Temporary Food Establishment 申請＋ベンダー一覧', 
    titleEn: 'Temporary Food Establishment Application + Vendor List',
    target: 'DOH (Food Safety)', 
    targetEn: 'Department of Health (Food Safety)',
    description: '一時食品営業許可申請書とベンダー一覧。',
    descriptionEn: 'Temporary food establishment permit application and vendor list.'
  },
  { 
    slug: 'insurance-certificate', 
    category: '保険・契約', 
    categoryEn: 'Insurance & Contracts',
    title: 'Insurance Certificate（GL 10 M／Liquor 5 M）', 
    titleEn: 'Insurance Certificate (GL $10M/Liquor $5M)',
    target: 'すべての許可添付', 
    targetEn: 'All Permit Attachments',
    description: '保険証書（一般 10M / 酒類 5M）。',
    descriptionEn: 'Insurance certificate (General Liability $10M / Liquor $5M).'
  },
  { 
    slug: 'vendor-mou', 
    category: '保険・契約', 
    categoryEn: 'Insurance & Contracts',
    title: 'ベンダー MOUs／見積書（LED・ドローン等）', 
    titleEn: 'Vendor MOUs/Quotes (LED, Drone, etc.)',
    target: '契約管理', 
    targetEn: 'Contract Management',
    description: '主要ベンダーとの MOU および見積書。',
    descriptionEn: 'MOUs and quotes with key vendors.'
  },
  { 
    slug: 'sponsorship-agreement', 
    category: '保険・契約', 
    categoryEn: 'Insurance & Contracts',
    title: 'スポンサーシップ契約書（テンプレート）', 
    titleEn: 'Event Sponsorship Agreement (Template)',
    target: 'スポンサー管理', 
    targetEn: 'Sponsor Management',
    description: 'イベントスポンサーとの契約書テンプレート（2026年版）。',
    descriptionEn: 'Contract template for event sponsors (2026 version).'
  },
  { 
    slug: 'artist-contract', 
    category: '保険・契約', 
    categoryEn: 'Insurance & Contracts',
    title: 'アーティスト契約書（テンプレート）', 
    titleEn: 'Artist Performance Agreement (Template)',
    target: 'ギャランティ支払い', 
    targetEn: 'Guarantee Payment',
    description: 'アーティストとの出演契約書テンプレート（2026年版）。',
    descriptionEn: 'Performance contract template for artists (2026 version).'
  },
  { 
    slug: 'staff-handbook', 
    category: '運営', 
    categoryEn: 'Operations',
    title: 'Staff Handbook（スタッフマニュアル）', 
    titleEn: 'Staff Handbook',
    target: 'スタッフ教育', 
    targetEn: 'Staff Training',
    description: 'イベントスタッフ向けの総合マニュアル。',
    descriptionEn: 'Comprehensive manual for event staff.'
  },
  { 
    slug: 'security-roster', 
    category: '運営', 
    categoryEn: 'Operations',
    title: 'Security & Medical Roster（スタッフ名簿）', 
    titleEn: 'Security & Medical Roster',
    target: '消防・警備当局', 
    targetEn: 'Fire & Security Authorities',
    description: '警備および医療スタッフ名簿。',
    descriptionEn: 'Security and medical staff roster.'
  },
  { 
    slug: 'traffic-plan', 
    category: '運営', 
    categoryEn: 'Operations',
    title: 'Traffic / Shuttle Plan（TIA 抜粋）', 
    titleEn: 'Traffic/Shuttle Plan (TIA Excerpt)',
    target: 'HPD／HCDA', 
    targetEn: 'Honolulu Police Department/HCDA',
    description: '交通・シャトル計画。',
    descriptionEn: 'Traffic and shuttle transportation plan.'
  },
  { 
    slug: 'rehearsal-check', 
    category: '運営', 
    categoryEn: 'Operations',
    title: 'Rehearsal Checklist & Tech Schedule', 
    titleEn: 'Rehearsal Checklist & Tech Schedule',
    target: 'オペレーション管理', 
    targetEn: 'Operations Management',
    description: 'リハーサルチェックリストとテックスケジュール。',
    descriptionEn: 'Rehearsal checklist and technical schedule.'
  },
  { 
    slug: 'safety-plan', 
    category: '運営', 
    categoryEn: 'Operations',
    title: 'Safety Plan（安全計画）', 
    titleEn: 'Safety Plan',
    target: '全スタッフ', 
    targetEn: 'All Staff',
    description: 'イベント全体の安全計画と緊急時対応マニュアル。',
    descriptionEn: 'Comprehensive safety plan and emergency response manual for the event.'
  },
  { 
    slug: 'waste-contract', 
    category: '環境・リサイクル', 
    categoryEn: 'Environment & Recycling',
    title: 'Waste & Recycling Contract＋90%目標書', 
    titleEn: 'Waste & Recycling Contract + 90% Target Document',
    target: 'HCDA・DOH', 
    targetEn: 'HCDA & Department of Health',
    description: '廃棄物契約および 90% リサイクル目標書。',
    descriptionEn: 'Waste contract and 90% recycling target document.'
  },
  { 
    slug: 'green-cert', 
    category: '環境・リサイクル', 
    categoryEn: 'Environment & Recycling',
    title: 'Green Event 認証申請書／Carbon Offset 証明', 
    titleEn: 'Green Event Certification Application/Carbon Offset Certification',
    target: 'HTA・スポンサーPR', 
    targetEn: 'HTA & Sponsor PR',
    description: 'グリーンイベント認証申請とカーボンオフセット証明。',
    descriptionEn: 'Green event certification application and carbon offset certification.'
  },
  { 
    slug: 'post-report', 
    category: '事後', 
    categoryEn: 'Post-Event',
    title: 'Post‑Event Report（実施報告・来場実数）', 
    titleEn: 'Post-Event Report (Implementation Report & Actual Attendance)',
    target: 'HCDA・HTA', 
    targetEn: 'HCDA & Hawaii Tourism Authority',
    description: 'イベント実施報告書と来場者数。',
    descriptionEn: 'Event implementation report and actual attendance figures.'
  },
  { 
    slug: 'recycle-rate', 
    category: '事後', 
    categoryEn: 'Post-Event',
    title: 'リサイクル率レポート', 
    titleEn: 'Recycling Rate Report',
    target: 'HCDA／DOH', 
    targetEn: 'HCDA/Department of Health',
    description: 'リサイクル率レポート。',
    descriptionEn: 'Report on recycling rate achievements.'
  },
  { 
    slug: 'dp-sheet', 
    category: '事後', 
    categoryEn: 'Post-Event',
    title: 'DP（Distributable Profit）計算シート', 
    titleEn: 'DP (Distributable Profit) Calculation Sheet',
    target: 'Zamna & HD', 
    targetEn: 'Zamna & HD',
    description: '利益分配計算シート。',
    descriptionEn: 'Profit distribution calculation sheet.'
  },
]; 