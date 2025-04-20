'use client';

import { useLanguage } from '@/app/contexts/LanguageContext';

export default function SafetyPlanContent() {
  const { language } = useLanguage();

  return (
    <div className="space-y-8 prose prose-invert max-w-none">
      <div className="bg-gradient-to-r from-red-800/70 to-orange-700/70 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {language === 'en' ? 'ZAMNA HAWAII 2026 SAFETY PLAN' : 'ZAMNA HAWAII 2026 安全計画'}
        </h1>
        <p className="text-center text-lg opacity-90">
          {language === 'en' 
            ? 'Comprehensive Safety & Emergency Response Plan' 
            : '包括的な安全・緊急対応計画'}
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Introduction & Purpose' : '序論と目的'}
        </h2>
        <p>
          {language === 'en'
            ? 'This Safety Plan outlines the comprehensive safety measures and emergency response procedures for ZAMNA Hawaii 2026, to be held at Kakaʻako Waterfront Park on October 3, 2026. The primary objective is to ensure the safety and security of all attendees, staff, artists, and vendors while complying with all local, state, and federal regulations.'
            : 'この安全計画は、2026年10月3日にカカアコ・ウォーターフロント・パークで開催されるZAMNA Hawaii 2026の包括的な安全対策と緊急対応手順を概説しています。主な目的は、すべての参加者、スタッフ、アーティスト、ベンダーの安全とセキュリティを確保しながら、地方、州、連邦のすべての規制に準拠することです。'}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Event Overview' : 'イベント概要'}
        </h2>
        <ul className="space-y-2">
          <li><strong>{language === 'en' ? 'Date:' : '日付：'}</strong> {language === 'en' ? 'October 3, 2026 (Backup: October 4, 2026)' : '2026年10月3日（予備日：2026年10月4日）'}</li>
          <li><strong>{language === 'en' ? 'Hours:' : '時間：'}</strong> {language === 'en' ? '2:00 PM - 10:00 PM' : '午後2時〜午後10時'}</li>
          <li><strong>{language === 'en' ? 'Location:' : '場所：'}</strong> {language === 'en' ? 'Kakaʻako Waterfront Park, Honolulu, Hawaii' : 'カカアコ・ウォーターフロント・パーク、ホノルル、ハワイ'}</li>
          <li><strong>{language === 'en' ? 'Expected Attendance:' : '予想来場者数：'}</strong> 5,000</li>
          <li><strong>{language === 'en' ? 'Event Type:' : 'イベントタイプ：'}</strong> {language === 'en' ? 'Electronic Dance Music (EDM) Festival' : '電子ダンスミュージック（EDM）フェスティバル'}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Safety Team Organization' : '安全チーム組織'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Command Structure' : 'コマンド構造'}
            </h3>
            <ul className="list-disc pl-6">
              <li><strong>{language === 'en' ? 'Safety Director:' : '安全ディレクター：'}</strong> {language === 'en' ? 'Michael Wong - Overall responsibility for safety operations' : 'マイケル・ウォン - 安全運営の全体的な責任'}</li>
              <li><strong>{language === 'en' ? 'Security Manager:' : 'セキュリティマネージャー：'}</strong> {language === 'en' ? 'David Kealoha - Manages security personnel and operations' : 'デビッド・ケアロハ - セキュリティ人員と運営を管理'}</li>
              <li><strong>{language === 'en' ? 'Medical Director:' : '医療ディレクター：'}</strong> {language === 'en' ? 'Dr. Sarah Johnson - Oversees all medical services' : 'サラ・ジョンソン医師 - すべての医療サービスを監督'}</li>
              <li><strong>{language === 'en' ? 'Fire Safety Officer:' : '防火安全責任者：'}</strong> {language === 'en' ? 'Robert Nakamura - Manages fire prevention and response' : 'ロバート・ナカムラ - 火災予防と対応を管理'}</li>
              <li><strong>{language === 'en' ? 'Crowd Management Supervisor:' : '群衆管理スーパーバイザー：'}</strong> {language === 'en' ? 'Lisa Chen - Oversees crowd flow and density' : 'リサ・チェン - 群衆の流れと密度を監督'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Command Center' : 'コマンドセンター'}
            </h3>
            <p>
              {language === 'en'
                ? 'A centralized Command Center will be established at the northwest corner of the park, equipped with:'
                : '集中コマンドセンターが公園の北西の角に設置され、以下を装備しています：'}
            </p>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Multi-channel radio communications system' : '多チャンネル無線通信システム'}</li>
              <li>{language === 'en' ? 'Video surveillance monitoring of key areas' : '主要エリアのビデオ監視モニタリング'}</li>
              <li>{language === 'en' ? 'Direct lines to emergency services' : '緊急サービスへの直通回線'}</li>
              <li>{language === 'en' ? 'Weather monitoring equipment' : '気象監視装置'}</li>
              <li>{language === 'en' ? 'Incident tracking and documentation systems' : 'インシデント追跡および文書化システム'}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Security Plan' : 'セキュリティ計画'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Security Staffing' : 'セキュリティスタッフ配置'}
            </h3>
            <p>
              {language === 'en'
                ? 'Total security personnel: 75 (1:67 ratio to attendees)'
                : '総セキュリティ人員：75名（参加者に対して1:67の比率）'}
            </p>
            <ul className="list-disc pl-6">
              <li><strong>{language === 'en' ? 'Perimeter Security:' : '周辺セキュリティ：'}</strong> 20 {language === 'en' ? 'staff' : '名'}</li>
              <li><strong>{language === 'en' ? 'Stage Security:' : 'ステージセキュリティ：'}</strong> 15 {language === 'en' ? 'staff' : '名'}</li>
              <li><strong>{language === 'en' ? 'VIP Area:' : 'VIPエリア：'}</strong> 8 {language === 'en' ? 'staff' : '名'}</li>
              <li><strong>{language === 'en' ? 'Entrance/Exit Points:' : '入口/出口ポイント：'}</strong> 12 {language === 'en' ? 'staff' : '名'}</li>
              <li><strong>{language === 'en' ? 'Roaming Teams:' : '巡回チーム：'}</strong> 15 {language === 'en' ? 'staff' : '名'}</li>
              <li><strong>{language === 'en' ? 'Command Center:' : 'コマンドセンター：'}</strong> 5 {language === 'en' ? 'staff' : '名'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Access Control' : 'アクセス制御'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'RFID wristbands for all attendees, staff, and vendors' : 'すべての参加者、スタッフ、ベンダー用のRFIDリストバンド'}</li>
              <li>{language === 'en' ? 'Color-coded credentials with different access levels' : '異なるアクセスレベルを持つ色分けされた認証'}</li>
              <li>{language === 'en' ? 'Bag checks and security screening at all entrances' : 'すべての入口でのバッグチェックとセキュリティスクリーニング'}</li>
              <li>{language === 'en' ? 'Prohibited items: weapons, glass, outside alcohol, illegal substances, drones, professional cameras (without credentials)' : '禁止品目：武器、ガラス、外部アルコール、違法物質、ドローン、プロ用カメラ（認証なし）'}</li>
              <li>{language === 'en' ? 'Re-entry allowed with proper wristband scanning' : '適切なリストバンドスキャンによる再入場可能'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Security Measures' : 'セキュリティ対策'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Continuous perimeter monitoring' : '継続的な周辺監視'}</li>
              <li>{language === 'en' ? 'CCTV coverage of key areas' : '主要エリアのCCTV監視'}</li>
              <li>{language === 'en' ? 'Plainclothes security personnel within crowd' : '群衆内の私服セキュリティ人員'}</li>
              <li>{language === 'en' ? 'Coordination with Honolulu Police Department (4 officers on-site)' : 'ホノルル警察署との連携（現場に4名の警官）'}</li>
              <li>{language === 'en' ? 'Regular security sweeps of venue' : '会場の定期的なセキュリティスイープ'}</li>
              <li>{language === 'en' ? 'Secure storage for production equipment and artist gear' : '制作機器とアーティスト機材の安全な保管'}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Medical Plan' : '医療計画'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Medical Staffing' : '医療スタッフ配置'}
            </h3>
            <p>
              {language === 'en'
                ? 'Total medical personnel: 20'
                : '総医療人員：20名'}
            </p>
            <ul className="list-disc pl-6">
              <li><strong>{language === 'en' ? 'Physicians:' : '医師：'}</strong> 2</li>
              <li><strong>{language === 'en' ? 'Registered Nurses:' : '正看護師：'}</strong> 6</li>
              <li><strong>{language === 'en' ? 'EMTs/Paramedics:' : 'EMT/救急救命士：'}</strong> 8</li>
              <li><strong>{language === 'en' ? 'Medical Coordinators:' : '医療コーディネーター：'}</strong> 4</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Medical Facilities' : '医療施設'}
            </h3>
            <ul className="list-disc pl-6">
              <li><strong>{language === 'en' ? 'Main Medical Tent:' : 'メインメディカルテント：'}</strong> {language === 'en' ? 'Located near the main entrance, equipped for triage and treatment of common festival-related issues' : 'メイン入口近くに位置し、一般的なフェスティバル関連の問題のトリアージと治療のための装備'}</li>
              <li><strong>{language === 'en' ? 'Secondary Medical Station:' : 'セカンダリメディカルステーション：'}</strong> {language === 'en' ? 'Located near the main stage' : 'メインステージ近くに位置'}</li>
              <li><strong>{language === 'en' ? 'VIP Medical Station:' : 'VIPメディカルステーション：'}</strong> {language === 'en' ? 'Located in the VIP area' : 'VIPエリアに位置'}</li>
              <li><strong>{language === 'en' ? 'Roaming Medical Teams:' : '巡回医療チーム：'}</strong> 3 {language === 'en' ? 'teams of 2 EMTs each' : 'チーム（各2名のEMT）'}</li>
              <li><strong>{language === 'en' ? 'Ambulance Staging:' : '救急車ステージング：'}</strong> 2 {language === 'en' ? 'dedicated ambulances on-site' : '専用救急車が現場に'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Medical Equipment & Supplies' : '医療機器と備品'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'AEDs at all medical stations and Command Center' : 'すべての医療ステーションとコマンドセンターにAED'}</li>
              <li>{language === 'en' ? 'Trauma kits, oxygen, and basic medications' : 'トラウマキット、酸素、基本的な薬'}</li>
              <li>{language === 'en' ? 'Cooling stations and heat-related illness treatment supplies' : '冷却ステーションと熱関連疾患治療用品'}</li>
              <li>{language === 'en' ? 'Stretchers and wheelchairs for patient transport' : '患者輸送用のストレッチャーと車椅子'}</li>
              <li>{language === 'en' ? 'Documentation systems for patient tracking' : '患者追跡のための文書化システム'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Hospital Coordination' : '病院連携'}
            </h3>
            <p>
              {language === 'en'
                ? 'Primary receiving hospitals have been notified of the event:'
                : '主要受け入れ病院にイベントが通知されています：'}
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Queen's Medical Center:</strong> 3.2 {language === 'en' ? 'miles from venue' : 'マイル（会場から）'}</li>
              <li><strong>Straub Medical Center:</strong> 2.8 {language === 'en' ? 'miles from venue' : 'マイル（会場から）'}</li>
              <li><strong>Kapiolani Medical Center:</strong> 3.5 {language === 'en' ? 'miles from venue' : 'マイル（会場から）'}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Fire Safety Plan' : '防火安全計画'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Fire Prevention Measures' : '火災予防対策'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'All structures, tents, and stages will meet NFPA 101 and local fire codes' : 'すべての構造物、テント、ステージはNFPA 101および地域の火災コードを満たす'}</li>
              <li>{language === 'en' ? 'Flame-retardant certification for all fabric materials' : 'すべての布材料の難燃性認証'}</li>
              <li>{language === 'en' ? 'Proper spacing between structures to prevent fire spread' : '火災の拡大を防ぐための構造物間の適切な間隔'}</li>
              <li>{language === 'en' ? 'Regular inspection of electrical systems and generators' : '電気システムと発電機の定期的な検査'}</li>
              <li>{language === 'en' ? 'Designated smoking areas with proper disposal containers' : '適切な廃棄容器を備えた指定喫煙エリア'}</li>
              <li>{language === 'en' ? 'Pyrotechnic effects will be managed by licensed professionals with proper permits' : '花火効果は適切な許可を持つ免許を持つプロフェッショナルによって管理される'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Fire Response Equipment' : '火災対応機器'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Fire extinguishers (ABC type) placed throughout the venue at maximum 75-foot intervals' : '消火器（ABC型）が会場全体に最大75フィート間隔で配置'}</li>
              <li>{language === 'en' ? 'Fire extinguishers at all electrical distribution points, generators, and stage areas' : 'すべての電気配電ポイント、発電機、ステージエリアに消火器'}</li>
              <li>{language === 'en' ? 'Fire blankets at food vendor locations' : '食品ベンダーの場所に防火毛布'}</li>
              <li>{language === 'en' ? 'Access to fire hydrants kept clear at all times' : '消火栓へのアクセスは常に確保'}</li>
              <li>{language === 'en' ? 'Fire lanes maintained throughout the venue' : '会場全体に消防車線を維持'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Fire Department Coordination' : '消防署連携'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Honolulu Fire Department will conduct pre-event inspection' : 'ホノルル消防署がイベント前の検査を実施'}</li>
              <li>{language === 'en' ? 'Two fire department personnel will be on-site during the event' : 'イベント中は2名の消防署員が現場に常駐'}</li>
              <li>{language === 'en' ? 'Fire apparatus access routes clearly marked and maintained' : '消防車両のアクセス経路は明確に表示され維持される'}</li>
              <li>{language === 'en' ? 'Nearest fire station: Kakaʻako Fire Station (0.8 miles from venue)' : '最寄りの消防署：カカアコ消防署（会場から0.8マイル）'}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Crowd Management Plan' : '群衆管理計画'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Venue Capacity & Flow' : '会場収容力と流れ'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Total venue capacity: 7,500 (maintaining 67% occupancy for comfort and safety)' : '総会場収容力：7,500人（快適さと安全のために67％の占有率を維持）'}</li>
              <li>{language === 'en' ? 'Main stage area capacity: 3,500' : 'メインステージエリア収容力：3,500人'}</li>
              <li>{language === 'en' ? 'Secondary stage area capacity: 1,500' : 'セカンダリステージエリア収容力：1,500人'}</li>
              <li>{language === 'en' ? 'One-way traffic flow implemented in high-congestion areas' : '混雑エリアでは一方通行の流れを実施'}</li>
              <li>{language === 'en' ? 'Minimum 10-foot-wide pathways maintained throughout venue' : '会場全体に最低10フィート幅の通路を維持'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Entrance & Exit Strategy' : '入場と退場戦略'}
            </h3>
            <ul className="list-disc pl-6">
              <li><strong>{language === 'en' ? 'Main Entrance:' : 'メイン入口：'}</strong> {language === 'en' ? '12 security lanes with metal detectors and bag check' : '金属探知機とバッグチェック付きの12のセキュリティレーン'}</li>
              <li><strong>{language === 'en' ? 'VIP Entrance:' : 'VIP入口：'}</strong> {language === 'en' ? '4 dedicated security lanes' : '4つの専用セキュリティレーン'}</li>
              <li><strong>{language === 'en' ? 'Staff/Vendor Entrance:' : 'スタッフ/ベンダー入口：'}</strong> {language === 'en' ? '2 dedicated security lanes' : '2つの専用セキュリティレーン'}</li>
              <li><strong>{language === 'en' ? 'Emergency Exits:' : '非常口：'}</strong> {language === 'en' ? '8 additional exit-only points around perimeter' : '周囲に8つの追加の出口専用ポイント'}</li>
              <li>{language === 'en' ? 'All exits clearly marked with illuminated signage' : 'すべての出口は照明付き標識で明確に表示'}</li>
              <li>{language === 'en' ? 'Exit gates minimum width: 8 feet' : '出口ゲートの最小幅：8フィート'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Crowd Monitoring' : '群衆モニタリング'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Elevated observation posts at strategic locations' : '戦略的な場所に高架観測ポスト'}</li>
              <li>{language === 'en' ? 'CCTV monitoring of high-density areas' : '高密度エリアのCCTV監視'}</li>
              <li>{language === 'en' ? 'Real-time crowd density monitoring system' : 'リアルタイムの群衆密度監視システム'}</li>
              <li>{language === 'en' ? 'Staff equipped with counters at entry/exit points' : '入口/出口ポイントにカウンターを装備したスタッフ'}</li>
              <li>{language === 'en' ? 'Regular density reports to Command Center' : 'コマンドセンターへの定期的な密度レポート'}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Emergency Response Plan' : '緊急対応計画'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Emergency Scenarios & Responses' : '緊急シナリオと対応'}
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-800/30 rounded-lg overflow-hidden">
                <thead className="bg-gray-700/50">
                  <tr>
                    <th className="px-4 py-2 text-left">{language === 'en' ? 'Scenario' : 'シナリオ'}</th>
                    <th className="px-4 py-2 text-left">{language === 'en' ? 'Code' : 'コード'}</th>
                    <th className="px-4 py-2 text-left">{language === 'en' ? 'Response Actions' : '対応アクション'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="px-4 py-3">{language === 'en' ? 'Medical Emergency' : '医療緊急事態'}</td>
                    <td className="px-4 py-3">Code Blue</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Dispatch medical team, clear area, establish treatment zone' : '医療チームの派遣、エリアの確保、治療ゾーンの設立'}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">{language === 'en' ? 'Fire' : '火災'}</td>
                    <td className="px-4 py-3">Code Red</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Evacuate affected area, deploy fire response team, notify fire department' : '影響を受けるエリアの避難、消防対応チームの展開、消防署への通知'}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">{language === 'en' ? 'Severe Weather' : '悪天候'}</td>
                    <td className="px-4 py-3">Code Black</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Suspend activities, direct to sheltered areas or evacuate if necessary' : '活動の中断、必要に応じて避難所エリアへの誘導または避難'}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">{language === 'en' ? 'Security Threat' : 'セキュリティ脅威'}</td>
                    <td className="px-4 py-3">Code Yellow</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Isolate threat, deploy security response team, coordinate with police' : '脅威の隔離、セキュリティ対応チームの展開、警察との連携'}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">{language === 'en' ? 'Missing Person' : '行方不明者'}</td>
                    <td className="px-4 py-3">Code Green</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Gather description, search teams deployed, monitor exits' : '説明の収集、検索チームの展開、出口の監視'}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">{language === 'en' ? 'Structural Issue' : '構造的問題'}</td>
                    <td className="px-4 py-3">Code Orange</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Clear affected area, assess damage, implement repairs or closure' : '影響を受けるエリアの確保、損傷の評価、修理または閉鎖の実施'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Evacuation Plan' : '避難計画'}
            </h3>
            <p>
              {language === 'en'
                ? 'In the event a full or partial evacuation is required:'
                : '完全または部分的な避難が必要な場合：'}
            </p>
            <ol className="list-decimal pl-6">
              <li>{language === 'en' ? 'Decision to evacuate will be made by Safety Director in consultation with Event Director and relevant authorities' : '避難の決定は、イベントディレクターおよび関連当局と協議の上、安全ディレクターによって行われる'}</li>
              <li>{language === 'en' ? 'Announcement will be made from all stages and via staff radios' : 'すべてのステージとスタッフの無線を通じてアナウンスが行われる'}</li>
              <li>{language === 'en' ? 'All entertainment will cease immediately' : 'すべてのエンターテイメントは直ちに停止する'}</li>
              <li>{language === 'en' ? 'House lights will be raised if applicable' : '該当する場合は会場の照明が上げられる'}</li>
              <li>{language === 'en' ? 'Staff will direct attendees to nearest exit using predetermined routes' : 'スタッフは事前に決められた経路を使用して参加者を最寄りの出口に誘導する'}</li>
              <li>{language === 'en' ? 'Security will ensure all areas are cleared' : 'セキュリティはすべてのエリアが確保されていることを確認する'}</li>
              <li>{language === 'en' ? 'Assembly points established at:' : '集合場所の設立場所：'}</li>
            </ol>
            <ul className="list-disc pl-10 mt-2">
              <li>{language === 'en' ? 'Primary: Parking lot across Ala Moana Blvd' : '主要：アラモアナ通りを渡った駐車場'}</li>
              <li>{language === 'en' ? 'Secondary: Gateway Park (east of venue)' : '二次：ゲートウェイパーク（会場の東）'}</li>
              <li>{language === 'en' ? 'Tertiary: Kewalo Basin Harbor (west of venue)' : '三次：ケワロベイスンハーバー（会場の西）'}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Weather Monitoring & Response' : '気象監視と対応'}
        </h2>
        <div className="space-y-4">
          <p>
            {language === 'en'
              ? 'Hawaii\'s weather can change rapidly. The following measures will be implemented:'
              : 'ハワイの天候は急速に変化する可能性があります。以下の対策が実施されます：'}
          </p>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Monitoring Systems' : '監視システム'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Professional meteorologist contracted for event-specific forecasting' : 'イベント固有の予報のために契約されたプロの気象学者'}</li>
              <li>{language === 'en' ? 'Weather radar monitoring in Command Center' : 'コマンドセンターでの気象レーダー監視'}</li>
              <li>{language === 'en' ? 'Lightning detection system with 30-mile radius' : '30マイル半径の雷検出システム'}</li>
              <li>{language === 'en' ? 'Wind speed monitors at stage structures' : 'ステージ構造物での風速モニター'}</li>
              <li>{language === 'en' ? 'Direct line to National Weather Service' : '国立気象サービスへの直通回線'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Weather Thresholds & Actions' : '気象閾値とアクション'}
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-gray-800/30 rounded-lg overflow-hidden">
                <thead className="bg-gray-700/50">
                  <tr>
                    <th className="px-4 py-2 text-left">{language === 'en' ? 'Condition' : '状態'}</th>
                    <th className="px-4 py-2 text-left">{language === 'en' ? 'Threshold' : '閾値'}</th>
                    <th className="px-4 py-2 text-left">{language === 'en' ? 'Action' : 'アクション'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  <tr>
                    <td className="px-4 py-3">{language === 'en' ? 'Lightning' : '雷'}</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Within 8 miles' : '8マイル以内'}</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Suspend stage activities, shelter attendees' : 'ステージ活動の中断、参加者の避難'}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">{language === 'en' ? 'High Winds' : '強風'}</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Sustained 25+ mph' : '持続的な時速25マイル以上'}</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Secure loose items, monitor structures' : '緩い物品の固定、構造物の監視'}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">{language === 'en' ? 'High Winds' : '強風'}</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Sustained 35+ mph' : '持続的な時速35マイル以上'}</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Lower/secure stage equipment, possible evacuation' : 'ステージ機器の下降/固定、避難の可能性'}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">{language === 'en' ? 'Heavy Rain' : '大雨'}</td>
                    <td className="px-4 py-3">{language === 'en' ? '0.5+ inches per hour' : '1時間あたり0.5インチ以上'}</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Open covered areas, monitor ground conditions' : '覆われたエリアを開放、地面の状態を監視'}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">{language === 'en' ? 'Flash Flood' : '鉄砲水'}</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Warning issued' : '警告発令'}</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Evacuate low-lying areas, possible event suspension' : '低地の避難、イベント中断の可能性'}</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">{language === 'en' ? 'Extreme Heat' : '極端な暑さ'}</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Heat index 95°F+' : '熱指数95°F以上'}</td>
                    <td className="px-4 py-3">{language === 'en' ? 'Activate cooling stations, increase water distribution' : '冷却ステーションの活性化、水の配布増加'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Communication Plan' : 'コミュニケーション計画'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Internal Communications' : '内部コミュニケーション'}
            </h3>
            <ul className="list-disc pl-6">
              <li><strong>{language === 'en' ? 'Primary:' : '主要：'}</strong> {language === 'en' ? 'Multi-channel radio system with dedicated emergency channel' : '専用緊急チャンネルを備えた多チャンネル無線システム'}</li>
              <li><strong>{language === 'en' ? 'Secondary:' : '二次：'}</strong> {language === 'en' ? 'Mobile phone network with pre-programmed contacts' : '事前にプログラムされた連絡先を持つモバイル電話ネットワーク'}</li>
              <li><strong>{language === 'en' ? 'Tertiary:' : '三次：'}</strong> {language === 'en' ? 'Runner system with designated staff' : '指定されたスタッフによるランナーシステム'}</li>
              <li>{language === 'en' ? 'All key staff will have laminated contact cards with emergency numbers' : 'すべての主要スタッフは緊急番号を記載したラミネート加工された連絡先カードを持つ'}</li>
              <li>{language === 'en' ? 'Regular radio checks conducted every hour' : '毎時間定期的な無線チェックを実施'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Public Address System' : '公共アドレスシステム'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Main stage PA system with override capability for emergency announcements' : '緊急アナウンスのためのオーバーライド機能を備えたメインステージPAシステム'}</li>
              <li>{language === 'en' ? 'Secondary stage with independent PA system' : '独立したPAシステムを備えたセカンダリステージ'}</li>
              <li>{language === 'en' ? 'Distributed speakers throughout venue for announcements' : 'アナウンスのための会場全体に分散したスピーカー'}</li>
              <li>{language === 'en' ? 'Pre-recorded emergency messages in English and Japanese' : '英語と日本語での事前録音された緊急メッセージ'}</li>
              <li>{language === 'en' ? 'Battery backup for all PA systems' : 'すべてのPAシステムのバッテリーバックアップ'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'External Communications' : '外部コミュニケーション'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Direct lines to emergency services (police, fire, EMS)' : '緊急サービス（警察、消防、EMS）への直通回線'}</li>
              <li>{language === 'en' ? 'Designated liaison officers for each emergency service' : '各緊急サービスの指定連絡担当官'}</li>
              <li>{language === 'en' ? 'Media relations team for public information' : '公共情報のためのメディア関係チーム'}</li>
              <li>{language === 'en' ? 'Social media team for attendee updates' : '参加者の更新のためのソーシャルメディアチーム'}</li>
              <li>{language === 'en' ? 'Event app with push notification capability for emergency alerts' : '緊急アラートのためのプッシュ通知機能を備えたイベントアプリ'}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Training & Briefings' : 'トレーニングとブリーフィング'}
        </h2>
        <div className="space-y-4">
          <p>
            {language === 'en'
              ? 'All staff will receive appropriate training prior to the event:'
              : 'すべてのスタッフはイベント前に適切なトレーニングを受けます：'}
          </p>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Pre-Event Training' : 'イベント前トレーニング'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'General safety orientation for all staff (2 weeks prior)' : 'すべてのスタッフのための一般的な安全オリエンテーション（2週間前）'}</li>
              <li>{language === 'en' ? 'Role-specific training for security, medical, and fire teams' : 'セキュリティ、医療、消防チームのための役割固有のトレーニング'}</li>
              <li>{language === 'en' ? 'Evacuation procedures and emergency response drills' : '避難手順と緊急対応訓練'}</li>
              <li>{language === 'en' ? 'Radio protocol and communication procedures' : '無線プロトコルとコミュニケーション手順'}</li>
              <li>{language === 'en' ? 'CPR and basic first aid for key staff' : '主要スタッフのためのCPRと基本的な応急処置'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Day-of-Event Briefings' : 'イベント当日のブリーフィング'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'All-staff safety briefing (6:00 AM)' : 'すべてのスタッフの安全ブリーフィング（午前6時）'}</li>
              <li>{language === 'en' ? 'Department-specific briefings' : '部門固有のブリーフィング'}</li>
              <li>{language === 'en' ? 'Weather update and specific concerns for the day' : 'その日の天気の更新と特定の懸念事項'}</li>
              <li>{language === 'en' ? 'Distribution of event-day contact sheets and maps' : 'イベント当日の連絡先シートと地図の配布'}</li>
              <li>{language === 'en' ? 'Radio check and communication test' : '無線チェックとコミュニケーションテスト'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Tabletop Exercises' : '図上演習'}
            </h3>
            <p>
              {language === 'en'
                ? 'Prior to the event, the following scenarios will be simulated with key staff:'
                : 'イベント前に、主要スタッフと共に以下のシナリオがシミュレーションされます：'}
            </p>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Mass casualty incident' : '大量傷病者事故'}</li>
              <li>{language === 'en' ? 'Severe weather evacuation' : '悪天候避難'}</li>
              <li>{language === 'en' ? 'Stage structure failure' : 'ステージ構造の故障'}</li>
              <li>{language === 'en' ? 'Fire response' : '火災対応'}</li>
              <li>{language === 'en' ? 'Lost child/vulnerable person' : '迷子/弱者'}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Documentation & Reporting' : '文書化と報告'}
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Incident Documentation' : 'インシデント文書化'}
            </h3>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'All incidents will be documented using standardized forms' : 'すべてのインシデントは標準化されたフォームを使用して文書化される'}</li>
              <li>{language === 'en' ? 'Medical incidents will include patient care reports' : '医療インシデントには患者ケアレポートが含まれる'}</li>
              <li>{language === 'en' ? 'Security incidents will include witness statements when applicable' : 'セキュリティインシデントには該当する場合、目撃者の証言が含まれる'}</li>
              <li>{language === 'en' ? 'Photographic documentation when appropriate and legal' : '適切かつ合法的な場合の写真による文書化'}</li>
              <li>{language === 'en' ? 'All documentation will be collected at Command Center' : 'すべての文書はコマンドセンターで収集される'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Post-Event Reporting' : 'イベント後の報告'}
            </h3>
            <p>
              {language === 'en'
                ? 'Within 72 hours of event conclusion, the following reports will be compiled:'
                : 'イベント終了後72時間以内に、以下のレポートが編集されます：'}
            </p>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Comprehensive safety summary' : '包括的な安全サマリー'}</li>
              <li>{language === 'en' ? 'Medical treatment log and statistics' : '医療治療ログと統計'}</li>
              <li>{language === 'en' ? 'Security incident summary' : 'セキュリティインシデントサマリー'}</li>
              <li>{language === 'en' ? 'Weather conditions throughout event' : 'イベント全体の気象条件'}</li>
              <li>{language === 'en' ? 'Recommendations for future improvements' : '将来の改善のための推奨事項'}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold">
              {language === 'en' ? 'Regulatory Reporting' : '規制報告'}
            </h3>
            <p>
              {language === 'en'
                ? 'Required reports will be filed with the following agencies:'
                : '以下の機関に必要なレポートが提出されます：'}
            </p>
            <ul className="list-disc pl-6">
              <li>{language === 'en' ? 'Honolulu Fire Department' : 'ホノルル消防署'}</li>
              <li>{language === 'en' ? 'Honolulu Police Department' : 'ホノルル警察署'}</li>
              <li>{language === 'en' ? 'Hawaii Department of Health' : 'ハワイ保健局'}</li>
              <li>{language === 'en' ? 'Hawaii Community Development Authority' : 'ハワイコミュニティ開発局'}</li>
              <li>{language === 'en' ? 'City & County of Honolulu Department of Emergency Management' : 'ホノルル市・郡緊急管理局'}</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold border-b border-gray-700 pb-2">
          {language === 'en' ? 'Approvals & Certifications' : '承認と認証'}
        </h2>
        <div className="mt-6 p-6 border border-gray-600 rounded-lg">
          <p className="mb-4">
            {language === 'en'
              ? 'This Safety Plan has been reviewed and approved by:'
              : 'この安全計画は以下によってレビューおよび承認されています：'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold">{language === 'en' ? 'Event Director:' : 'イベントディレクター：'}</p>
              <p className="italic">Yuki Hamada</p>
              <p className="mt-4">{language === 'en' ? 'Date:' : '日付：'} _______________</p>
              <p>{language === 'en' ? 'Signature:' : '署名：'} _______________</p>
            </div>
            <div>
              <p className="font-semibold">{language === 'en' ? 'Safety Director:' : '安全ディレクター：'}</p>
              <p className="italic">Michael Wong</p>
              <p className="mt-4">{language === 'en' ? 'Date:' : '日付：'} _______________</p>
              <p>{language === 'en' ? 'Signature:' : '署名：'} _______________</p>
            </div>
            <div>
              <p className="font-semibold">{language === 'en' ? 'Honolulu Fire Department:' : 'ホノルル消防署：'}</p>
              <p className="italic">_______________</p>
              <p className="mt-4">{language === 'en' ? 'Date:' : '日付：'} _______________</p>
              <p>{language === 'en' ? 'Signature:' : '署名：'} _______________</p>
            </div>
            <div>
              <p className="font-semibold">{language === 'en' ? 'Honolulu Police Department:' : 'ホノルル警察署：'}</p>
              <p className="italic">_______________</p>
              <p className="mt-4">{language === 'en' ? 'Date:' : '日付：'} _______________</p>
              <p>{language === 'en' ? 'Signature:' : '署名：'} _______________</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-8 text-center text-sm opacity-70">
        <p>
          {language === 'en'
            ? 'This Safety Plan is a living document and may be updated as needed prior to the event. The most current version will be maintained at the Command Center during the event.'
            : 'この安全計画は生きた文書であり、イベント前に必要に応じて更新される場合があります。最新バージョンはイベント中にコマンドセンターで維持されます。'}
        </p>
        <p className="mt-2">
          {language === 'en'
            ? 'Last Updated: April 20, 2025'
            : '最終更新日：2025年4月20日'}
        </p>
      </div>
    </div>
  );
}