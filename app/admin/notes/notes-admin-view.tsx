"use client";

import { AdminPageHeader } from "@/app/components/admin-data-table";

const ecosystemDiagram = `                              巴黎臻藏
                  Zhen Collection Paris
        国际艺术共同体 · International Art Community
────────────────────────────────────────────────────────────

                      第一阶段｜Selection
                         艺术家申请
                              │
              中国艺术家               国际艺术家
                     │                    │
                     └──────┬─────────────┘
                            │
                     专业评审（收费）
              评论家｜策展人｜画廊主参与评估
                            │
                        邀请加入
                            │
────────────────────────────────────────────────────────────

              第二阶段｜International Artist Program

                     建立国际身份（收费）

          Artist Passport（艺术家护照）
          Artwork Passport（作品护照）
          三语档案
          官方采访
          创作陈述
          国际传播

                            │
────────────────────────────────────────────────────────────

                  第三阶段｜Editorial

              巴黎臻藏原创内容持续产生

       艺术家对话
       评论文章
       策展文章
       视频
       Newsletter
       出版

                            │
────────────────────────────────────────────────────────────

                第四阶段｜Curated Exhibition

                 国际线上策展（持续）

        中国艺术家      ×      国际艺术家

        评论家        策展人        公众参与

                            │
────────────────────────────────────────────────────────────

              第五阶段｜Professional Network

      巴黎画廊
      中国画廊
      收藏家
      博物馆
      品牌
      艺术机构

            （巴黎臻藏负责国际连接）

                            │
────────────────────────────────────────────────────────────

                    第六阶段｜Sales

             收藏咨询

                    ↓

      合作画廊销售          巴黎臻藏销售

              ↓                    ↓

          巴黎臻藏获得业务佣金

────────────────────────────────────────────────────────────

              第七阶段｜Collection Passport

              收藏家获得作品档案

      收藏记录
      收藏故事
      收藏时间
      展览记录
      评论记录

────────────────────────────────────────────────────────────

               第八阶段｜Living Archive

             作品继续成长

      新评论
      新展览
      新出版
      新收藏
      转售
      博物馆收藏

────────────────────────────────────────────────────────────

                     巴黎臻藏真正保存的是

      艺术家
            ↓
      作品
            ↓
      评论
            ↓
      策展
            ↓
      收藏
            ↓
      转售
            ↓
      共同理解
            ↓
      共同体记忆`;

const valueChainDiagram = `艺术家
     │
评论家
     │
策展人
     │
画廊
     │
收藏家
     │
公众
     │
作品
     │
共同理解
     │
共同体记忆`;

const projectBudgetDiagram = `艺术家付款

↓

巴黎臻藏

↓

评论家稿费

↓

策展人

↓

翻译

↓

摄影

↓

设计

↓

网站

↓

行政

↓

国际传播`;

const revenueSources = [
  {
    title: "① 专业评审费（Professional Review）",
    body: "艺术家申请 → 法国专业人士评估。",
  },
  {
    title: "② 国际艺术发展计划（主要收入）",
    body: "录取以后，建立国际档案、Artist Passport、Artwork Passport、对话、翻译、国际传播。",
  },
  {
    title: "③ 线上策展",
    body: "可以包含在年度计划内，也可以做专题策展。",
  },
  {
    title: "④ 销售佣金",
    body: "作品成交，巴黎臻藏收取 Commission。若通过合作画廊，画廊支付 Business Development Fee。",
  },
  {
    title: "⑤ 转售佣金",
    body: "收藏家再次出售，巴黎臻藏继续获得佣金。",
  },
  {
    title: "⑥ 出版",
    body: "画册、电子书、版权。",
  },
  {
    title: "⑦ 国际合作",
    body: "品牌、机构、博物馆、政府项目、教育、论坛。",
  },
];

function DiagramBlock({ children }: { children: string }) {
  return (
    <div className="overflow-x-auto rounded-sm border border-stone-200 bg-stone-50/80">
      <pre className="p-4 text-[11px] leading-[1.55] text-stone-700">{children}</pre>
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 border-b border-stone-200 pb-2 text-sm font-medium tracking-[0.04em] text-stone-900">
      {children}
    </h2>
  );
}

export function NotesAdminView() {
  return (
    <article>
      <AdminPageHeader
        title="笔记 1"
        description="巴黎臻藏商业模式与共同体生态 — 内部战略笔记。"
      />

      <div className="space-y-4 text-sm leading-[1.85] text-stone-700">
        <p>
          聊到今天，<strong className="font-medium text-stone-900">巴黎臻藏已经不是一个「卖画平台」了。</strong>
        </p>
        <p>
          它实际上是一个<strong className="font-medium text-stone-900">国际艺术共同体（International Art Community）</strong>
          ，而商业收入只是这个共同体运转的结果。
        </p>
        <p>以下是一个完整的商业生态模型。</p>
      </div>

      <SectionHeading>商业生态</SectionHeading>
      <div className="mt-4">
        <DiagramBlock>{ecosystemDiagram}</DiagramBlock>
      </div>

      <SectionHeading>收入来源</SectionHeading>
      <ul className="mt-4 space-y-4">
        {revenueSources.map((item) => (
          <li key={item.title} className="rounded-sm border border-stone-200 px-4 py-4">
            <h3 className="text-sm font-medium text-stone-900">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.body}</p>
          </li>
        ))}
      </ul>

      <SectionHeading>支出</SectionHeading>
      <div className="mt-4 space-y-4 text-sm leading-[1.85] text-stone-700">
        <p>
          艺术家的钱，其实不是给某一个人，而是进入 <strong className="font-medium text-stone-900">Project Budget</strong>：
        </p>
        <DiagramBlock>{projectBudgetDiagram}</DiagramBlock>
        <p>
          所以，巴黎臻藏不是「拿钱」，而是<strong className="font-medium text-stone-900">组织整个国际专业团队。</strong>
        </p>
      </div>

      <SectionHeading>核心发现</SectionHeading>
      <div className="mt-4 space-y-4 text-sm leading-[1.85] text-stone-700">
        <p>商业模式已经不是：</p>
        <blockquote className="border-l-2 border-stone-300 pl-4 text-stone-600">
          艺术家 → 平台 → 收藏家。
        </blockquote>
        <p>而是：</p>
        <DiagramBlock>{valueChainDiagram}</DiagramBlock>
        <p>
          <strong className="font-medium text-stone-900">作品只是这个生态的起点。</strong>
          真正不断积累、不断增值的，是围绕作品持续产生的共同理解。
        </p>
        <blockquote className="rounded-sm border border-[#5a2323]/20 bg-[#5a2323]/[0.04] px-5 py-4 text-[15px] leading-[1.75] text-stone-800">
          巴黎臻藏不是建立一个艺术品交易平台，而是建立一个持续创造共同理解、并珍藏共同体记忆的国际艺术共同体。
        </blockquote>
        <p>
          如果这句话成立，那么筛选制度、国际档案、线上策展、评论、销售、藏品记录、转售，都会自然成为这个共同体运转的一部分，而不是彼此孤立的业务。
        </p>
      </div>
    </article>
  );
}
