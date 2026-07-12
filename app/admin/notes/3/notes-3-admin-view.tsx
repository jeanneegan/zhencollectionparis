"use client";

import { AdminPageHeader } from "@/app/components/admin-data-table";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 border-b border-stone-200 pb-2 text-sm font-medium tracking-[0.04em] text-stone-900">
      {children}
    </h2>
  );
}

function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="rounded-sm border border-[#5a2323]/20 bg-[#5a2323]/[0.04] px-5 py-4 text-[15px] leading-[1.75] text-stone-800">
      {children}
    </blockquote>
  );
}

function FlowBlock({ children }: { children: string }) {
  return (
    <div className="overflow-x-auto rounded-sm border border-stone-200 bg-stone-50/80">
      <pre className="p-4 text-[11px] leading-[1.55] text-stone-700">{children}</pre>
    </div>
  );
}

const builders = [
  { role: "🎨 艺术家（Artists）", identity: "创造者（Creators）" },
  { role: "🧭 策展人（Curators）", identity: "连接者（Connectors）" },
  { role: "✍️ 评论家（Critics）", identity: "记录者与诠释者（Interpreters）" },
  { role: "🖼️ 画廊（Galleries）", identity: "合作伙伴（Partners）" },
  {
    role: "❤️ 收藏家（Collectors）",
    identity: "文明守护者（Guardians of Civilization）",
  },
  {
    role: "🏛️ 博物馆 / 文化机构",
    identity: "公共记忆守护者（Institutional Guardians）",
  },
  { role: "📚 出版人与媒体", identity: "传播者（Publishers）" },
  { role: "👥 公众", identity: "见证者（Witnesses）" },
];

const actions = [
  "艺术家对话（Conversations）",
  "艺术家护照（Artist Passport）",
  "作品护照（Artwork Passport）",
  "策展（Curating）",
  "线上展览（Online Exhibitions）",
  "季度展（Quarterly Exhibitions）",
  "年度展（Annual Exhibition）",
  "出版（Éditions）",
  "作品陪伴（Artwork Stewardship）",
  "作品借展（Artwork Loan Network）",
  "研究与档案（Research & Archive）",
  "教育与讲座（Education）",
  "跨文明交流（Cross-cultural Exchange）",
];

const products = [
  {
    name: "Artist Passport（艺术家护照）",
    service: "艺术家",
    charge: "艺术家",
  },
  {
    name: "Artwork Passport（作品护照）",
    service: "艺术家 / 收藏家",
    charge: "艺术家（建立）+ 收藏家（持续维护，可选）",
  },
  {
    name: "Conversations（艺术家对话）",
    service: "艺术家",
    charge: "艺术家",
  },
  {
    name: "Gallery Connection（专业连接）",
    service: "艺术家 ↔ 画廊",
    charge: "艺术家",
  },
  {
    name: "Curator Connection（策展人连接）",
    service: "艺术家 ↔ 策展人",
    charge: "艺术家",
  },
  {
    name: "Critic Connection（评论家连接）",
    service: "艺术家 ↔ 评论家",
    charge: "艺术家",
  },
  {
    name: "Professional Connection（专业人士连接）",
    service: "艺术家 ↔ 专业人士",
    charge: "艺术家",
  },
  {
    name: "Online Exhibition（线上展）",
    service: "艺术家",
    charge: "艺术家",
  },
  {
    name: "Quarterly Exhibition（季度展）",
    service: "艺术家 / 公众",
    charge: "艺术家、合作机构",
  },
  {
    name: "Annual Exhibition（年度展）",
    service: "艺术家 / 公众",
    charge: "艺术家、赞助方、合作机构",
  },
  {
    name: "Éditions（出版）",
    service: "艺术家 / 公众",
    charge: "艺术家（画册）、公众（购买出版物）",
  },
  {
    name: "Artwork Stewardship（作品陪伴）",
    service: "收藏家",
    charge: "收藏家",
  },
  {
    name: "Artwork Sales（作品销售）",
    service: "艺术家 / 收藏家",
    charge: "成交服务费（按协议）",
  },
  {
    name: "Artwork Loan（作品借展）",
    service: "博物馆、企业、学校等",
    charge: "借展机构",
  },
  {
    name: "Collector Membership（收藏家会员）",
    service: "收藏家",
    charge: "收藏家",
  },
  {
    name: "Corporate Curating（企业策展）",
    service: "企业",
    charge: "企业",
  },
  {
    name: "Professional Database（专业数据库）",
    service: "画廊、机构、专业人士",
    charge: "专业会员",
  },
];

const revenueReinvestment = [
  "艺术家",
  "策展人",
  "评论家",
  "出版",
  "展览",
  "数据库",
  "数字平台",
  "作品陪伴",
  "跨文明交流",
];

const memoryPyramid = `共同记忆

        ↑
持续陪伴

        ↑
出版 · 展览 · 评论 · 借展 · 收藏

        ↑
作品护照

        ↑
艺术家对话

        ↑
艺术创作`;

export function Notes3AdminView() {
  return (
    <article>
      <AdminPageHeader
        title="巴黎臻藏 V1 商业生态图"
        description="巴黎臻藏内部战略笔记 — 可长期扩展的商业生态地图。"
      />

      <div className="space-y-4 text-sm leading-[1.85] text-stone-700">
        <p>
          现在，我们可以把它写成<strong className="font-medium text-stone-900">巴黎臻藏 V1 商业生态图</strong>
          。不是商业计划书，而是一张以后几十年都可以不断扩展的地图。
        </p>
      </div>

      <SectionHeading>Zhen Collection Paris（巴黎臻藏）</SectionHeading>

      <div className="mt-4 space-y-4">
        <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-stone-500">
          使命（Mission）
        </h3>
        <QuoteBlock>
          <p>以艺术为载体，建设跨文明的共同记忆。</p>
          <p className="mt-3 text-sm text-stone-600">
            Building Shared Memory Across Civilizations Through Art.
          </p>
        </QuoteBlock>
      </div>

      <SectionHeading>共同建设者（Builders）</SectionHeading>
      <p className="mt-4 text-sm leading-[1.85] text-stone-700">
        每一个角色都不是「客户」，而是共同建设者。
      </p>
      <div className="mt-4 overflow-x-auto rounded-sm border border-stone-200">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-stone-200 bg-stone-50/80">
            <tr>
              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-stone-500">
                角色
              </th>
              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-stone-500">
                在巴黎臻藏中的身份
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {builders.map((row) => (
              <tr key={row.role} className="transition-colors hover:bg-stone-50/60">
                <td className="px-4 py-3 text-stone-800">{row.role}</td>
                <td className="px-4 py-3 text-stone-600">{row.identity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeading>行动（Actions）</SectionHeading>
      <p className="mt-4 text-sm leading-[1.85] text-stone-700">
        这些行动共同建设跨文明共同记忆。
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-stone-600">
        {actions.map((action) => (
          <li key={action}>{action}</li>
        ))}
      </ul>

      <SectionHeading>产品（Products）</SectionHeading>
      <div className="mt-4 overflow-x-auto rounded-sm border border-stone-200">
        <table className="min-w-[720px] text-left text-sm">
          <thead className="border-b border-stone-200 bg-stone-50/80">
            <tr>
              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-stone-500">
                产品
              </th>
              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-stone-500">
                服务对象
              </th>
              <th className="px-4 py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-stone-500">
                收费对象
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {products.map((row) => (
              <tr key={row.name} className="transition-colors hover:bg-stone-50/60">
                <td className="px-4 py-3 font-medium text-stone-800">{row.name}</td>
                <td className="px-4 py-3 text-stone-600">{row.service}</td>
                <td className="px-4 py-3 text-stone-600">{row.charge}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionHeading>收入</SectionHeading>
      <p className="mt-4 text-sm leading-[1.85] text-stone-700">所有收入持续投入：</p>
      <ul className="mt-4 list-inside list-disc space-y-2 text-sm text-stone-600">
        {revenueReinvestment.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <SectionHeading>最终形成</SectionHeading>
      <div className="mt-4">
        <FlowBlock>{memoryPyramid}</FlowBlock>
      </div>
    </article>
  );
}
