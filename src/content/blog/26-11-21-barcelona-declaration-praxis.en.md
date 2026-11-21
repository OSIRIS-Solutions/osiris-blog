---
title: "What the Barcelona Declaration means for research institutions in practice"
description: "Open research information takes more than a statement of commitment. How institutions can rethink infrastructure, research assessment and the recognition of diverse contributions to research."
pubDate: 2026-11-21
language: "en"
category: "Open Science"
authors:
  - jkoblitz
tags: [Open Science, Research Information, Research Assessment, Barcelona Declaration, CoARA]
draft: false
---

Open research matters. Most people in the research community can quickly agree on that. Research information should be transparent, research contributions should be assessed fairly, and publicly funded infrastructures should be as open as possible.

Things become more difficult when these principles have to inform actual decisions.

Institutions go back to asking for the Journal Impact Factor™ from Clarivate’s subscription-based Journal Citation Reports™. This citation-based journal metric relies on data that is not openly accessible or freely reusable, making its calculation difficult to verify independently using open data. Researchers are still judged primarily by their publication lists. Research information remains locked in systems whose data cannot be freely reused and whose analyses cannot be independently verified. And once again, someone asks for all information in OSIRIS to be hidden from everyone by default: “Not everyone needs to be able to see that.” We commit to openness while continuing to work within familiar closed structures.

This is precisely why the [Barcelona Declaration on Open Research Information](https://barcelona-declaration.org/) matters. It goes beyond calling for more Open Science. It addresses an underlying issue: the information we use to make research visible, guide institutional decisions and assess research.

In November, I will be speaking at the Barcelona Declaration conference in Berlin on **“Lowering Barriers to Open Research Information Beyond Large Universities”**. My contribution addresses a question that has stayed with me throughout the development of OSIRIS: how can smaller and non-university research institutions put open research information into practice when they lack large CRIS teams, dedicated data stewards, extensive library infrastructure or substantial IT budgets?

Before research information can be open, it has to be manageable for an institution. But before we discuss how to achieve that, we first need to understand what open research information actually means.

## What is open research information?

Research information is information **about** research. It includes metadata on publications, research data and software, as well as information about projects, funding, people, organisations, infrastructures and other research activities. It helps us understand who is working on what, which outputs have emerged and how research is connected.

This information is open when it is freely accessible and can be reused without unnecessary restrictions. Ideally, it is also machine-readable and can be linked using open standards and persistent identifiers such as DOIs, ORCID iDs or ROR IDs. If these terms are unfamiliar, our [guide to persistent identifiers](/blog/26-08-19_identifier-kompassen/) explains what they mean and how they are used.

This does not mean that every piece of information must become public. Personal, confidential and security-sensitive data clearly need protection. The familiar principle applies: **as open as possible, as closed as necessary.** Sensitive data in particular require careful consideration of which information can actually be made openly accessible.

The Barcelona Declaration sets out four central commitments: making openness the default, working with services and systems that enable open research information, supporting the sustainability of open infrastructures, and taking collective action to support the transition from closed to open research information. These commitments may initially sound abstract. For research institutions, however, they have very concrete implications. Those are the implications I want to explore here.

## 1. Openness must inform procurement and system selection

A research information system is not a neutral repository. Its technical and contractual conditions determine what an institution can do with its own information.

Can it export all relevant data in full? Is there a documented interface? Does the system support established identifiers? Can the data be reused in other applications, on research portals or for the institution’s own analyses? Is it possible to understand how indicators and classifications are produced? And what happens to the data when the institution changes its provider or system?

These questions belong in the requirements specification, rather than at the end of a procurement process. The Barcelona Declaration explicitly requires systems for the internal management of research information to allow relevant information to be exported and made open using standard protocols and identifiers.

In practice, institutions need to:

- require open, documented interfaces,
- ensure complete exports and clear rights of use,
- use persistent identifiers consistently,
- assess dependencies on individual providers,
- and make openness a quality criterion in procurement and contracts.

Open source can be an important part of this. But open software alone does not guarantee open research information. A proprietary system may also support open exports. What matters is whether the data, interfaces, standards and rights of use actually support openness, and whether the institution retains control over its information. These requirements need to be considered and explicitly requested during procurement.

## 2. Research assessment must not depend on black boxes

Research information is collected for much more than populating websites. It influences funding allocation, strategy, career decisions and institutional assessments. This makes it essential to understand the basis on which decisions are made.

The Barcelona Declaration criticises the fact that a substantial share of research information is locked in proprietary infrastructures. Errors, gaps and biases can be difficult to identify or correct. Analyses have limited reproducibility when the underlying data cannot be openly scrutinised.

A useful example is the Journal Impact Factor™ from Clarivate’s Journal Citation Reports™. This indicator describes a journal’s average citation performance over a particular period. Clarivate publishes the calculation method, and subscribers can inspect the underlying lists of publications and citations. The data itself, however, is not open: sharing and reuse are subject to licence conditions. According to Clarivate, institutions that want to automatically import journal metadata and indicators such as the Journal Impact Factor™ into their own systems through the [Web of Science Journals API](https://developer.clarivate.com/apis/wos-journal) need an additional paid licence. One institution we work with reported costs of around €7,500 per year for this access in their case. This is an individual reported price, not a published list price. The calculation is therefore documented, but it cannot readily be reproduced independently using freely available data.

This does not make every journal-level analysis inherently useless. The Journal Impact Factor™ describes a journal, however, rather than the quality of an individual article, a person’s contribution or the scientific and societal value of a particular output. [Even Clarivate cautions](https://clarivate.com/academia-government/scientific-and-academic-research/research-funding-analytics/journal-citation-reports/) against using the Journal Impact Factor™ as a proxy for assessing individual contributions, researchers or institutions. An institution should not make its assessment approach dependent on an indicator that is unsuitable for the purpose and whose underlying data cannot be openly reused.

Yet I encounter the same contradiction again and again: everyone agrees that open research and responsible assessment are important. The next question is whether OSIRIS could display the Journal Impact Factor™ after all.

Change therefore requires more than agreement with open principles. It requires a willingness to question familiar routines and indicators.

In practice, ease of use can help prompt this reflection: when alternative indicators can be imported automatically through open interfaces instead of being maintained manually, some institutions begin to reconsider whether they need the Journal Impact Factor™ at all. Making open alternatives the default and thus easier to use can turn agreement with open principles into a change in everyday practice.

## 3. More open information can support a broader view of research contributions

Criticism of proprietary metrics is only one part of the discussion. The more important question is: **what do we want to make visible and recognise instead?**

The [Coalition for Advancing Research Assessment (CoARA)](https://coara.eu/) addresses precisely this question. Its *Agreement on Reforming Research Assessment* calls for recognition of the diversity of research outputs, activities and practices. Assessment should rely primarily on qualitative judgement, supported by the responsible use of quantitative indicators. CoARA also calls for abandoning inappropriate uses of publication- and journal-based metrics, particularly the Journal Impact Factor™ and the h-index.

The Barcelona Declaration and CoARA approach the issue from different but closely connected perspectives:

- The Barcelona Declaration asks **which information** underpins decisions and whether that information is open, transparent and reusable.
- CoARA asks **how** research contributions are assessed and which contributions receive recognition.

The two belong together. We cannot fundamentally change research assessment if our information systems continue to represent research almost exclusively through publications. And open metadata alone will not automatically make assessment fairer if we simply use it to reproduce the same old indicators.

## 4. Research is more than a publication list

This question also matters to me personally. In my previous work as a researcher at the DSMZ, I published journal articles, of course. But a substantial part of my work also involved developing open-source software, preparing datasets, providing databases and creating digital tools for other researchers.

These contributions enable research. They save other people time, make analyses reproducible, provide structured knowledge and create a basis for new questions. Well-documented, accessible and machine-readable data are becoming even more important in the age of artificial intelligence.

But how do we measure the impact of a database? How do we assess software used in numerous laboratories? How do we make it visible that someone has spent years curating data, maintaining standards, writing documentation or building a community?

Perhaps “measuring” is not even the first question. We first need to be able to **record and describe these contributions and attribute them to the people involved**. Only then can we discuss how to assess their scientific or societal impact appropriately.

This is also a matter of recognition. If a research information system only counts conventional journal articles, many people remain invisible: software developers, data curators, technical staff, infrastructure teams and community managers. Even when software or datasets are recorded, often only one responsible person is named. The different roles and contributions behind an output disappear.

Software, data and databases are only part of the picture. Many researchers make contributions that require considerable time, expertise and commitment but receive little visibility in traditional assessment systems. These include training and supervising early-career researchers, reviewing journal articles and grant proposals, serving on scientific committees, science communication, knowledge transfer and the long-term development of shared infrastructures.

Open research information can change this, provided we model it accordingly. Alongside different output types, systems need to represent activities, contributor roles, identifiers and relationships. A dataset should be linkable to the people involved, the associated software, a project, an infrastructure and the resulting publications. Supervision, peer review and committee work also need to be visible as contributions in their own right. The purpose is to represent research more fully and fairly, rather than simply producing more numbers.

## 5. Smaller and non-university institutions must not be left behind

Discussions about open research information often implicitly assume a large university with its own library, CRIS department, IT team, research management staff and specialist data stewards. The research landscape is much more diverse.

Germany alone has **around 1,000 public and publicly funded non-university research institutions**. This is a rounded indication of scale: [Destatis refers to “around 1,000” in its reporting on 2023](https://www.destatis.de/DE/Presse/Pressemitteilungen/2025/03/PD25_084_218.html), while [Research in Germany describes “over 1,000”](https://www.research-in-germany.org/research-landscape/why-germany/research-funding-system/government-funding.html). The wording and reference periods differ, so this should not be read as an exact count for 2024. For comparison, Destatis records [**422 higher education institutions in the winter semester 2024/25**](https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bildung-Forschung-Kultur/Hochschulen/Tabellen/hochschulen-hochschularten.html), including universities and other types of higher education institutions.

The official category “Government and private non-profit institutions” captures a substantial part of research outside higher education. Its research capacity is considerable when compared with the higher education sector:

| Indicator | Government and private non-profit institutions | Higher education |
| --- | --- | --- |
| [R&D personnel, 2024 (full-time equivalents)](https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bildung-Forschung-Kultur/Forschung-Entwicklung/Tabellen/personal-forschung-entwicklung.html) | **125,237** | **159,350** |
| [Intramural R&D expenditure, 2024](https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bildung-Forschung-Kultur/Forschung-Entwicklung/Tabellen/forschung-entwicklung-sektoren.html) | **€20.442 billion** | **€24.104 billion** |

These figures describe R&D personnel and expenditure, rather than total institutional headcounts or funding received. Nor does “non-university” automatically mean “small”: the sector ranges from small, highly specialised institutes to research centres with several thousand employees, and encompasses basic and applied research across different disciplines and institutional missions.

These institutions are rightly expected to report transparently, support open science, meet new demands for visibility and accountability, and respond to developments in artificial intelligence. Yet many lack a dedicated research information team, substantial budgets or the staff needed to maintain complex information infrastructures.

The first barrier is therefore often operational capacity rather than a lack of willingness.

The transition to open research information will only succeed if these institutions are actively enabled to participate. Simply asking them to be open is not enough. Solutions need to be manageable for small teams. They need to deliver tangible benefits in everyday work quickly, rather than adding further documentation requirements. And institutions need communities where they can share configurations, experience and established practices. **Enabling this sector to participate means bringing substantial research capacity and a diversity of disciplines, missions and institutional perspectives into open research information.**

## What we have learned from developing OSIRIS

OSIRIS grew out of a specific need at a non-university research institute. From the outset, the aim was to organise research information effectively with limited resources. This experience points to several conditions that can make it easier to get started with open research information:

### Lightweight infrastructure

A system should not require an institution to build a large specialist team before it can begin. Installation, configuration and ongoing operation need to be feasible with realistic resources. Modularity helps: institutions do not need to introduce every feature at once.

### Open interfaces by default

Research information must remain available for further use. This is why OSIRIS integrates open infrastructures such as ORCID, Crossref, DataCite and OpenAlex. Open APIs allow information to be reused, for example in research portals, reports or an institution’s own analyses. This improves interoperability and reduces dependence on proprietary systems.

OpenAlex is regularly criticised for its data quality, and there are valid reasons for that criticism. Openness does not guarantee error-free data. It does, however, make it possible to inspect records, report errors and contribute to improvements. In OpenAlex, for example, researchers can correct their own author profiles, while other data errors can be [reported for correction with supporting evidence](https://help.openalex.org/how-to/fixing-data-errors/). The important distinction is that the weaknesses of open data are visible and can, in principle, be addressed collectively. Open data does not have to be perfect to offer that possibility.

### Immediate local value

Openness should bring benefits to the people doing the work. The information collected needs to help institutions and researchers themselves, through less duplicate data entry, clearer overviews, public research profiles or analyses such as the Research Spectrum. When open metadata creates immediate local value, an abstract commitment becomes a useful working tool.

### Pragmatic governance

An open system still needs clear responsibilities. Who can edit which information? Which data becomes public? How are errors corrected? What quality requirements apply? Governance does not have to be complicated, but these questions need answers.

### A community that shares experience

Institutes should be able to build on each other’s solutions. In the OSIRIS community, institutions can contribute their requirements, share configurations and learn from one another. This shared practice is just as important as the open source code. Policy and infrastructure become effective when people exchange experience and develop solutions together.

## Seven practical steps for research institutions

Implementing the Barcelona Declaration does not have to begin with a large transformation project. Institutions can start where they already use research information:

1. **Map decision-making processes:** Where does research information inform reporting, evaluations, funding allocation, recruitment and promotion, or strategy?
2. **Review data sources:** Which information comes from open sources, which comes from closed databases, and which is maintained manually in several places?
3. **Broaden the range of contributions represented:** Alongside publications, do systems make software, data, infrastructures, knowledge transfer, teaching, scientific services and community work visible?
4. **Question metrics:** Is an indicator suitable for the purpose? Are its underlying data and calculation transparent? What qualitative information is missing?
5. **Make openness a requirement:** Exports, APIs, open standards and persistent identifiers should be requirements for new systems and contracts.
6. **Begin with one use case:** A public research portal, a report or the recording of software and datasets can provide a realistic starting point.
7. **Share experience:** Exchanging knowledge with other institutions prevents duplicate effort and helps everyone learn from mistakes and approaches that work.

This does not mean replacing every closed system overnight. The Barcelona Declaration itself frames the transition as a collective process. What matters is setting a direction and considering, with each new decision, whether it brings us closer to openness or reinforces existing dependencies. The next contract renewal or introduction of a new system might be an opportunity to put open principles into practice consistently.

## Openness takes shape in decisions

For research institutions, the Barcelona Declaration goes well beyond a political statement. It concerns very practical questions: which systems do we procure? Which data sources do we fund? Which information do we make accessible? How do we assess research? Which contributions do we recognise? And who can participate in this transition at all?

For me, its particular value lies in connecting openness with responsibility. When research information influences careers, resources and institutional strategy, it must be open to scrutiny. If we want to support Open Science, we cannot measure its success exclusively with closed data. And if we want to recognise diverse contributions to research, our information systems need to make that diversity visible in the first place.

Open research information is therefore a means to more transparent decisions, digital sovereignty and a research culture that recognises publications alongside data, infrastructures, peer review and the people behind them.

Most of us already support these goals. The crucial question is which of our next decisions will put them into practice.

---

The **2026 Conference of the Barcelona Declaration on Open Research Information** takes place on **24 and 25 November 2026** at the Leibniz Association headquarters in Berlin and online. The conference theme is “Aligning policy and practical implementation”. Further information and online registration are available on the [Barcelona Declaration conference website](https://barcelona-declaration.org/conference_2026_berlin/).

## Sources and further reading

- [Barcelona Declaration: preamble and commitments](https://barcelona-declaration.org/preamble/)
- [Barcelona Declaration: background and context](https://barcelona-declaration.org/background_and_context/)
- [CoARA: Agreement on Reforming Research Assessment](https://coara.eu/agreement/the-agreement-full-text/)
- [Clarivate: responsible use of the Journal Impact Factor™](https://clarivate.com/academia-government/scientific-and-academic-research/research-funding-analytics/journal-citation-reports/)
- [Clarivate: access to and licensing of the Web of Science Journals API](https://developer.clarivate.com/apis/wos-journal)
- [German Federal Statistical Office: R&D personnel by sector](https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bildung-Forschung-Kultur/Forschung-Entwicklung/Tabellen/personal-forschung-entwicklung.html)
