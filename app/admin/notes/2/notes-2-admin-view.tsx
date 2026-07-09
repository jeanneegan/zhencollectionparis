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

function QuestionBlock({
  question,
  before,
  after,
}: {
  question: string;
  before: string;
  after: string;
}) {
  return (
    <div className="rounded-sm border border-stone-200 px-4 py-4">
      <h3 className="text-sm font-medium text-stone-900">{question}</h3>
      <p className="mt-3 text-sm text-stone-500">
        以前：<span className="text-stone-600">{before}</span>
      </p>
      <p className="mt-2 text-sm text-stone-700">
        今天：<span className="font-medium text-stone-900">{after}</span>
      </p>
    </div>
  );
}

const revenueFlows = [
  {
    title: "艺术家付费",
    flow: `艺术家付费

↓

建立国际档案

↓

更多人理解`,
  },
  {
    title: "线上展",
    flow: `线上展

↓

更多文化交流

↓

更多理解`,
  },
  {
    title: "销售",
    flow: `销售

↓

作品进入新的生命

↓

新的收藏家

↓

新的评论

↓

新的理解`,
  },
  {
    title: "转售",
    flow: `转售

↓

作品继续传播

↓

新的文明语境

↓

新的理解`,
  },
];

export function Notes2AdminView() {
  return (
    <article>
      <AdminPageHeader
        title="笔记 2"
        description="巴黎臻藏逻辑统一与使命定位 — 内部战略笔记。"
      />

      <div className="space-y-4 text-sm leading-[1.85] text-stone-700">
        <p>
          <strong className="font-medium text-stone-900">我也有这种感觉。</strong>
        </p>
        <p>
          而且我觉得，今天是巴黎臻藏真正成熟的一天。因为我们不是又想了一个功能，而是
          <strong className="font-medium text-stone-900">整个逻辑统一了。</strong>
        </p>
      </div>

      <SectionHeading>四个核心问题</SectionHeading>
      <p className="mt-4 text-sm leading-[1.85] text-stone-700">
        以前，其实有一个问题一直没有解决：<strong className="font-medium text-stone-900">为什么是艺术？</strong>
        如果只是卖画、办展、采访，那和很多平台没有本质区别。今天，我觉得答案出来了。
      </p>
      <div className="mt-4">
        <QuoteBlock>艺术不是目的，而是文明交流最自然的媒介。</QuoteBlock>
      </div>

      <div className="mt-6 space-y-4">
        <QuestionBlock
          question="为什么记录？"
          before="建立档案。"
          after="因为理解会随着时间不断生长。记录不是为了证明，而是为了保存理解成长的过程。"
        />
        <QuestionBlock
          question="为什么收藏？"
          before="收藏作品。"
          after="收藏共同记忆。"
        />
        <QuestionBlock
          question="为什么商业？"
          before="卖画。"
          after="每一笔收入，都对应共同理解的一次成长。"
        />
      </div>

      <SectionHeading>各方为何参与</SectionHeading>
      <ul className="mt-4 space-y-4 text-sm leading-[1.85] text-stone-700">
        <li className="rounded-sm border border-stone-200 px-4 py-4">
          <h3 className="font-medium text-stone-900">艺术家为什么付费？</h3>
          <p className="mt-2 text-stone-600">
            因为巴黎臻藏帮助他：建立国际身份、建立国际信用、建立国际连接，最后让作品不断产生新的理解。
          </p>
        </li>
        <li className="rounded-sm border border-stone-200 px-4 py-4">
          <h3 className="font-medium text-stone-900">收藏家为什么加入？</h3>
          <p className="mt-2 text-stone-600">
            不是为了买画，而是让自己的收藏继续参与文明交流。
          </p>
        </li>
        <li className="rounded-sm border border-stone-200 px-4 py-4">
          <h3 className="font-medium text-stone-900">评论家为什么写？</h3>
          <p className="mt-2 text-stone-600">不是为了评价，而是让作品继续被理解。</p>
        </li>
        <li className="rounded-sm border border-stone-200 px-4 py-4">
          <h3 className="font-medium text-stone-900">画廊为什么合作？</h3>
          <p className="mt-2 text-stone-600">不是为了竞争，而是共同推动作品进入新的文化。</p>
        </li>
      </ul>

      <SectionHeading>商业模式的自然涌现</SectionHeading>
      <div className="mt-4 space-y-4 text-sm leading-[1.85] text-stone-700">
        <p>于是，商业模式自然就出来了。不是为了收费而收费，而是：</p>
        <QuoteBlock>每一笔收入，都对应共同理解的一次成长。</QuoteBlock>
      </div>

      <div className="mt-6 space-y-4">
        {revenueFlows.map((item) => (
          <div key={item.title}>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.1em] text-stone-500">
              {item.title}
            </p>
            <FlowBlock>{item.flow}</FlowBlock>
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm leading-[1.85] text-stone-700">
        商业收入，全部来自：<strong className="font-medium text-stone-900">理解不断继续。</strong>
      </p>

      <SectionHeading>使命</SectionHeading>
      <div className="mt-4 space-y-4 text-sm leading-[1.85] text-stone-700">
        <p>巴黎臻藏，可以有一句真正属于自己的使命：</p>
        <QuoteBlock>
          <p>我们不是收藏作品。</p>
          <p className="mt-3">
            我们珍藏的是，作品在人与人之间不断生成的共同理解，以及这些理解共同构成的文明记忆。
          </p>
        </QuoteBlock>
        <p>这句话已经把以下全部统一起来了：</p>
        <ul className="list-inside list-disc space-y-1 text-stone-600">
          <li>为什么做平台</li>
          <li>为什么做采访</li>
          <li>为什么做评论</li>
          <li>为什么做线上展</li>
          <li>为什么卖画</li>
          <li>为什么记录藏品</li>
          <li>为什么允许作品不断转售</li>
        </ul>
      </div>

      <SectionHeading>平台真正的中心</SectionHeading>
      <div className="mt-4 space-y-4 text-sm leading-[1.85] text-stone-700">
        <p>
          认识两年多，看着巴黎臻藏从一个「帮助法国艺术家进入中国」的想法，慢慢变成今天这个样子。
          今天最大的突破，不是商业模式，而是<strong className="font-medium text-stone-900">终于找到了平台真正的「中心」。</strong>
        </p>
        <p>以前，中心是：艺术家，或者作品，或者中法交流。</p>
        <p>今天，中心变成了：</p>
        <QuoteBlock>理解（Understanding）</QuoteBlock>
        <p>艺术只是媒介。作品只是载体。平台只是组织者。</p>
        <p>
          <strong className="font-medium text-stone-900">
            真正不断成长、不断被珍藏的，是人与人之间持续生成的理解。
          </strong>
        </p>
        <p>
          这个中心足够深，也足够稳定。它能够支撑巴黎臻藏未来增加新的国家、新的艺术形式、新的合作伙伴，而不需要改变它最核心的理念。
        </p>
      </div>
    </article>
  );
}
