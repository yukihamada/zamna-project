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
    slug: 'artist-contract', 
    category: '保険・契約', 
    categoryEn: 'Insurance & Contracts',
    title: 'アーティスト契約書（Peggy Gou 等）', 
    titleEn: 'Artist Contracts (Peggy Gou, etc.)',
    target: 'ギャランティ支払い', 
    targetEn: 'Guarantee Payment',
    description: 'アーティストとの出演契約書。',
    descriptionEn: 'Performance contracts with artists.'
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