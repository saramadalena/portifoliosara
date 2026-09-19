import { useState, useEffect } from 'react'
import profilePhotoColor from './imports/perfil-2-2026-m_dia.jpg'
import profilePhotoPEB from './imports/perfil-2-peb-2026.png'
import heroPhotoPEB from './imports/hero.jpeg'
import contatoPhotoColor from './imports/contato.jpg'
import startupCapa from './imports/capa-registro-expo.JPG'
import startupAcao from './imports/move-expo-a__o.JPG'
import spdataVoce1 from './imports/spdata_voce__1_.png'
import spdataVoce2 from './imports/spdata_voce__2_.png'
import spdataVoce4 from './imports/spdata_voce__4_.png'
import spdataVoce5 from './imports/spdata_voce__5_.png'
import spdataVoce8 from './imports/spdata_voce__8_.png'
import spdataCI1 from './imports/CI__1_.png'
import spdataCI2 from './imports/CI__2_.png'
import spdataCI3 from './imports/CI__3_.png'
import spdataCI4 from './imports/CI__4_.png'
import spdataCI5 from './imports/CI__5_.png'
import spdataCI6 from './imports/CI__6_.png'
import spdataRS1 from './imports/ID-RS__1_.png'
import spdataCracha2 from './imports/campanha-crach___2_.png'
import spdataCracha3 from './imports/campanha-crach___3_.png'
import caseSadaRedes from './imports/rs-sada-0001.jpg'
import caseSadaIntermodal from './imports/rs-sada-0002.jpg'
import caseDiaV1 from './imports/Prancheta_1.png'
import caseDiaV2 from './imports/Prancheta_2.png'
import caseDiaV3 from './imports/Prancheta_3.png'
import imgDiaVCapa from './imports/CAPA.jpg'
import imgDiaVAcao from './imports/dia_v-em-a_ao.jpg'
import imgPNMC from './imports/PNMC.jpg'
import imgSIPAT from './imports/sesmt.jpg'
import imgMidia from './imports/snapinsta-1785864318001.jpg'
import imgVolei from './imports/snapinsta-1785864810341.jpg'
import imgConecta from './imports/concta.jpg'
import imgTrend from './imports/trend.jpg'
import imgPremio from './imports/premio-vol-elisa_REDES_v02.jpg'
import imgSnap2 from './imports/snapinsta-1785864790753.jpg'
import imgEquipeIntermodal from './imports/equipe-intermodal.png'
import imgConviteInter from './imports/Convite-inter.jpg'
import imgEntrev1 from './imports/Entrev-1.png'
import imgEntrev2 from './imports/Entrev-2.png'
import imgEntrev3 from './imports/Entrevi-3.png'
import imgEntrev4 from './imports/Entrev-4.png'
import startupCapaNova from './imports/1-capa.jpg'
import arnaldo50Anos1 from './imports/50-anchieta-18__1_.jpg'
import arnaldo50Anos2 from './imports/50-anchieta-18__2_.png'
import arnaldoCiencias1 from './imports/ciencias-naturais-19-19__1_.jpg'
import arnaldoCiencias3 from './imports/ciencias-naturais-19-19__3_.jpg'
import arnaldoMatriculas2jpg from './imports/matriculas-17-18__2_.jpg'
import arnaldoMatriculas2png from './imports/matriculas-17-18__2_.png'
import arnaldoMatriculas3 from './imports/matriculas-17-18__3_.jpg'
import arnaldoMatriculas4 from './imports/matriculas-17-18__4_.jpg'
import arnaldoMatriculas5 from './imports/matriculas-17-18__5_.png'
import pdfOnePage from './imports/one-page-Vport-2.pdf'
import pdfSumario from './imports/sumario-executivo-conceito-portV-2.pdf'

// ─── TOKENS ──────────────────────────────────────────────────────────────────
const T = {
  bg: '#F5F5F3',
  white: '#ffffff',
  ink: '#1A1A1A',
  inkMid: '#4A4A4A',
  inkLight: '#909090',
  rule: '#D8D8D6',
  ruleLight: '#EBEBEA',
  navy: '#000080',
  magenta: '#FF007F',
  yellow: '#FFFF00',
}

// ─── DATA ────────────────────────────────────────────────────────────────────

type CaseItem = {
  id: number; num: string; empresa: string; subtitulo: string; periodo: string; cor: string
  imagens: string[]; contexto: string; desafio: string; estrategia: string; execucao: string
  resultados: { valor: string; label: string }[]; resultadoTexto: string; narrativa?: string
}

const cases: CaseItem[] = [
  {
    id: 1, num: '01', empresa: 'Grupo SADA',
    subtitulo: 'Comunicação e Marketing em uma estrutura corporativa de múltiplos públicos, áreas e negócios.',
    periodo: '2022–2025', cor: T.navy,
    imagens: [caseSadaRedes, caseSadaIntermodal, caseDiaV1, caseDiaV2, caseDiaV3],
    contexto: 'No Grupo SADA, atuei em Comunicação e Marketing em uma estrutura corporativa ampla, formada por diferentes empresas, segmentos, áreas, públicos e necessidades de comunicação. Minha atuação acontecia de forma transversal e em equipe, conectando planejamento, conteúdo, campanhas, canais internos e externos e acompanhamento de performance.',
    desafio: 'Atender diferentes demandas de comunicação em uma estrutura corporativa complexa, articulando públicos, áreas, canais e formatos com consistência, organização e adequação a cada contexto.',
    estrategia: 'Planejamento editorial, redação e produção de conteúdo, gestão de canais, participação em campanhas e projetos, comunicação interna, desdobramentos visuais e acompanhamento de indicadores, com interface entre áreas internas, fornecedores, stakeholders e equipe de Comunicação e Marketing.',
    execucao: 'Atuei no planejamento, redação e produção de textos e conteúdos, publicação e acompanhamento de canais, comunicação interna, suporte a lives corporativas e desdobramentos de design a partir de identidades e direcionamentos já definidos. Na Intermodal 2024, minha responsabilidade esteve concentrada no planejamento da frente de comunicação digital e da cobertura antes, durante e depois do evento.',
    resultados: [
      { valor: '+23%', label: 'Engajamento no Instagram (2024)' },
      { valor: '+18%', label: 'Crescimento da comunidade no LinkedIn' },
      { valor: '36,2%', label: 'Abertura média no RD Station' },
      { valor: '+3 mil', label: 'Usuários cadastrados no GOintegro' },
      { valor: '57,5%', label: 'Média de usuários ativos no GOintegro' },
    ],
    resultadoTexto: 'Atuação conectando planejamento e execução em diferentes frentes de Comunicação e Marketing, com acompanhamento de canais, processos e indicadores em uma estrutura corporativa ampla.',
    narrativa: 'No Grupo SADA, atuei em Comunicação e Marketing de forma transversal e em equipe. Minha rotina conectava planejamento editorial, redação e produção de conteúdo, campanhas, canais internos e externos, comunicação interna, desdobramentos visuais, processos e leitura de indicadores. A interface com diferentes áreas, fornecedores, stakeholders e profissionais da equipe fazia parte da construção e execução das entregas.',
  },
  {
    id: 2, num: '02', empresa: 'SPDATA',
    subtitulo: 'Comunicação interna, endomarketing e identidade digital — de ponta a ponta.',
    periodo: '2021–2022', cor: T.magenta,
    imagens: [spdataVoce5, spdataVoce1, spdataVoce2, spdataVoce4, spdataVoce8, spdataCracha2, spdataCracha3, spdataCI2, spdataCI1, spdataCI6],
    contexto: 'A SPDATA é uma empresa de tecnologia para saúde com produtos voltados à gestão de clínicas e hospitais. Sem endomarketing estruturado e sem ações de cultura organizacional, o time não se sentia conectado aos valores e às decisões da empresa. Ao mesmo tempo, a presença digital dos produtos não comunicava os diferenciais técnicos de forma clara.',
    desafio: 'Criar uma comunicação interna que aproximasse as pessoas da liderança, valorizasse o time e colocasse a cultura da empresa em evidência — enquanto padronizava a presença digital das duas linhas de produto com identidade visual diferenciada por público.',
    estrategia: 'Desenvolvimento da campanha SPDATA&Você: identidade visual própria, linha editorial focada em pessoas e benefícios. Redesenho da identidade digital por produto — paleta fria/tech para SPDATA (B2B hospitalar) e paleta quente/humanizada para Minha Clínica (clínicas menores).',
    execucao: 'Organizei a comunicação interna e o endomarketing. Fiz a campanha institucional que valorizou a equipe, aproximou os colaboradores da diretoria e foi elogiada pelo CEO. Padronizei a cara da empresa nas redes e criei a linguagem visual das linhas de produtos B2B de saúde.',
    resultados: [
      { valor: '1', label: 'Campanha de endomarketing completa' },
      { valor: '2', label: 'Identidades visuais por produto' },
      { valor: '100%', label: 'Consistência visual entre canais' },
    ],
    resultadoTexto: 'Campanha reconhecida pela liderança pelo impacto cultural. Presença digital padronizada e linguagem visual diferenciada por produto — tecnologia médica falando direto com quem precisa entender.',
    narrativa: 'Na SPDATA, empresa focada no desenvolvimento de software ERP para a área médica, atuei na estruturação da comunicação interna, no relacionamento com parceiros e no suporte institucional ao público interno e fornecedores. Conduzi projetos essenciais para a organização da marca, como o desenvolvimento de identidades para as linhas de produtos da empresa, padronização de peças comerciais, apresentações executivas e campanhas de endomarketing voltadas para a cultura organizacional. Foi uma experiência centrada em aproximar a linguagem de tecnologia do público final, garantindo clareza, consistência visual e um alinhamento direto entre a comunicação e a liderança.',
  },
  {
    id: 3, num: '03', empresa: 'Freelance de Marketing, Branding e Conteúdo',
    subtitulo: 'Do posicionamento de startups ao relatório de ESG: comunicação que serve pra quem decide.',
    periodo: '2024–2025', cor: T.navy,
    imagens: [startupCapaNova],
    contexto: 'Startup de tecnologia com solução voltada à gestão e mensuração de indicadores ASG para empresas de médio e grande porte. Com produto em estágio de validação, a empresa não tinha posicionamento institucional definido nem narrativa estruturada para o mercado.',
    desafio: 'Construir do zero o posicionamento institucional da marca, criar a arquitetura de mensagens e desenvolver materiais de comunicação para relacionamento com stakeholders, captação de investidores e aproximação com clientes potenciais.',
    estrategia: 'Diagnóstico de posicionamento e análise de mercado. Definição de arquitetura de mensagens por público (investidores, clientes corporativos, parceiros). Desenvolvimento de narrativa institucional com foco em proposta de valor, diferenciação e credibilidade.',
    execucao: 'Desenvolvi do zero a identidade visual, o guia de marca e as apresentações para colocar a startup de pé no mercado de sustentabilidade e atrair parceiros. Fiz a ponte com investidores e parceiros na Expo Favela 2025 e cuidei dos materiais de relacionamento com cada público.',
    resultados: [
      { valor: '1', label: 'Arquitetura de mensagens estruturada' },
      { valor: '3', label: 'Públicos mapeados' },
    ],
    resultadoTexto: 'A startup saiu do zero com marca, posicionamento e materiais prontos para conversar com investidores, clientes e parceiros — cada um na sua linguagem.',
  },
  {
    id: 4, num: '04', empresa: 'Colégio Arnaldo',
    subtitulo: 'Cuidando da comunicação de duas unidades e da mantenedora sem firula, no ritmo da escola.',
    periodo: '2018–2019', cor: T.magenta,
    imagens: [arnaldoMatriculas3, arnaldoMatriculas4, arnaldo50Anos1, arnaldo50Anos2, arnaldoCiencias1, arnaldoCiencias3],
    contexto: 'Instituição de ensino tradicional com duas unidades (Funcionários e Anchieta) e uma mantenedora. A comunicação acontecia de forma fragmentada, sem padronização entre canais — cada área puxando para o seu lado e o fluxo de demandas correndo o tempo todo.',
    desafio: 'Atender duas unidades e a mantenedora ao mesmo tempo, sem perder o ritmo do dia a dia escolar. O desafio era manter a comunicação funcionando — redes, site, campanhas, eventos, impressos — com equipe enxuta e um volume alto de demandas simultâneas vindas de professores, coordenadores e diretores.',
    estrategia: 'Atuação na linha de frente: atendimento direto às áreas internas, produção de conteúdo multimídia, gestão das redes sociais e do site WordPress, e campanha anual de captação e rematrícula com identidade visual consistente entre os diferentes pontos de contato.',
    execucao: 'Atendi professores, diretores e famílias de frente. Fiz de tudo um pouco: criei campanha de rematrícula, rodei jornal interno, fotografei evento e mantive as redes e o site atualizados, mesmo no ritmo corrido do dia a dia.',
    resultados: [
      { valor: '2', label: 'Campanhas de captação executadas' },
      { valor: '1', label: 'Identidade editorial estruturada' },
    ],
    resultadoTexto: 'Comunicação das duas unidades funcionando sem travar, campanhas de rematrícula no ar e as redes e o site sempre atualizados — mesmo com o volume alto de demandas do dia a dia escolar.',
    narrativa: 'No Colégio Arnaldo, minha atuação era bastante dinâmica e descentralizada, atendendo de forma simultânea as duas unidades (Funcionários e Anchieta) e a instituição mantenedora na coordenação de comunicação. Eu atuava na linha de frente do atendimento interno, oferecendo suporte direto a professores, diretores, coordenadores e áreas administrativas, além da ponte com agência, gráfica e assessoria de imprensa. Minha rotina envolvia a produção multimídia e o desenvolvimento gráfico de ponta a ponta para campanhas pedagógicas, eventos institucionais, ações religiosas, pautas socioemocionais e a campanha anual de captação e rematrícula. Em mídias digitais, fazia a gestão e alimentação de redes como Instagram, Facebook, YouTube e Flickr, além da atualização de conteúdos do site em WordPress. Era uma operação de "pé no chão": priorizando o fluxo constante de informações e projetos que vinham das coordenações e dos professores.',
  },
]

const formaDeTrabalhar = [
  { num: '01', titulo: 'Diagnóstico antes de entrega', descricao: 'Toda demanda começa com escuta ativa. Entendo o contexto, os públicos e os objetivos antes de propor qualquer solução. Comunicação descontextualizada não resolve — ela só ocupa espaço.', cor: T.navy },
  { num: '02', titulo: 'Estratégia integrada', descricao: 'Conecto o que a liderança precisa comunicar com o que o público precisa entender. Isso exige visão sistêmica, alinhamento entre áreas e clareza na arquitetura de mensagens.', cor: T.magenta },
  { num: '03', titulo: 'Processo com consistência', descricao: 'Fluxos, POPs e padrões editoriais garantem que a comunicação funcione além de um projeto pontual. Estruturo processos que sustentam resultados no longo prazo.', cor: T.navy },
  { num: '04', titulo: 'Criação com critério', descricao: 'Domino as ferramentas de criação e uso esse domínio a serviço da estratégia, não como fim em si mesmo. A estética sempre serve à mensagem.', cor: T.magenta },
]

const competencias = [
  { grupo: 'Comunicação & Estratégia', cor: T.navy, itens: ['Branding', 'Comunicação Corporativa', 'Comunicação Institucional', 'Comunicação Interna', 'Endomarketing', 'Planejamento de Comunicação', 'Gestão de Campanhas', 'Storytelling', 'Copywriting', 'Posicionamento de Marca'] },
  { grupo: 'Marketing Digital & Performance', cor: T.magenta, itens: ['Meta Business Suite', 'Google Ads', 'LinkedIn Ads', 'RD Station', 'MLabs', 'Google Analytics', 'SEO / SMO', 'Salesforce'] },
  { grupo: 'Design & Multimídia', cor: T.navy, itens: ['Photoshop', 'Illustrator', 'InDesign', 'Premiere', 'CorelDRAW', 'Canva', 'CapCut'] },
  { grupo: 'Processos & Governança', cor: T.magenta, itens: ['Monitoramento de Indicadores', 'Padronização de Processos', 'POPs', 'Monday', 'Trello', 'Apoio a Auditorias ISO'] },
]

const timeline = [
  { ano: '2025', cargo: 'Freelance de Marketing, Branding e Conteúdo', empresa: 'Autônoma', atual: true },
  { ano: '2022–25', cargo: 'Analista de Marketing', empresa: 'Grupo SADA' },
  { ano: '2021–22', cargo: 'Analista de Comunicação e Marketing', empresa: 'SPDATA' },
  { ano: '2020', cargo: 'Analista de Marketing', empresa: 'Polycare' },
  { ano: '2019', cargo: 'Analista de Marketing', empresa: 'Qualitycert' },
  { ano: '2018–19', cargo: 'Auxiliar de Comunicação', empresa: 'Colégio Arnaldo' },
]

// ─── GRAPHIC PRIMITIVES ───────────────────────────────────────────────────────

// Cabeçalho editorial de seção: número grande em fundo + label + linha conectora
const sectionIconMap: Record<string, SiteIconName> = {
  '01': 'cases', '02': 'method', '03': 'skills',
  '04': 'about', '05': 'contact', '06': 'blog',
}

function SectionHead({ n, label, color = T.navy, light = false }: { n: string; label: string; color?: string; light?: boolean }) {
  const iconName = sectionIconMap[n] ?? 'cases'
  const ghostOpacity = light ? 0.07 : 0.06
  return (
    <div style={{ position: 'relative', marginBottom: '48px' }}>
      {/* ícone fantasma */}
      <div style={{ position: 'absolute', top: '-20px', left: '-6px', opacity: ghostOpacity, pointerEvents: 'none', userSelect: 'none' }}>
        <SiteIcon name={iconName} size={84} color={light ? '#fff' : T.ink} />
      </div>
      {/* linha + ícone + label */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '32px', height: '1px', backgroundColor: color }} />
        <SiteIcon name={iconName} size={13} color={color} />
        <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color }}>
          {label}
        </span>
        <div style={{ flex: 1, height: '1px', backgroundColor: light ? 'rgba(255,255,255,0.1)' : T.ruleLight }} />
      </div>
    </div>
  )
}

// Bloco de seção de case com marcador tipográfico
function CaseBlock({ label, cor, children }: { label: string; cor: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
        <span style={{ width: '8px', height: '1px', backgroundColor: cor }} />
        <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: cor, flexShrink: 0 }} />
        <span style={{ width: '8px', height: '1px', backgroundColor: cor }} />
        <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: cor }}>
          {label}
        </span>
      </div>
      <div style={{ marginLeft: '26px', paddingLeft: '14px', borderLeft: `1px solid ${T.ruleLight}` }}>
        {children}
      </div>
    </div>
  )
}

// Mosaico editorial de imagens
function Mosaic({ images, cor }: { images: string[]; cor: string }) {
  if (images.length === 0) {
    return (
      <div style={{ border: `1px solid ${T.rule}`, backgroundColor: T.bg, padding: '32px', marginBottom: '32px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex', gap: '4px' }}>
          {[0, 1, 2].map(i => <span key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: i === 0 ? cor : T.rule }} />)}
        </div>
        <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: cor, marginBottom: '10px' }}>
          Materiais disponíveis sob solicitação
        </p>
        <p style={{ fontSize: '13px', fontWeight: 300, color: T.inkLight, lineHeight: 1.7, margin: 0 }}>
          Projeto com entregáveis estratégicos documentados — posicionamento, arquitetura de mensagens, relatórios e apresentações executivas.
        </p>
      </div>
    )
  }
  if (images.length >= 5) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3px' }}>
          <div style={{ overflow: 'hidden', backgroundColor: '#ddd' }}>
            <img src={images[0]} alt="" style={{ width: '100%', height: '260px', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.45s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.025)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {images.slice(1, 3).map((img, i) => (
              <div key={i} style={{ overflow: 'hidden', backgroundColor: '#ddd', flex: 1 }}>
                <img src={img} alt="" style={{ width: '100%', height: '128px', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.45s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3px' }}>
          {images.slice(2, 5).map((img, i) => (
            <div key={i} style={{ overflow: 'hidden', backgroundColor: '#ddd' }}>
              <img src={img} alt="" style={{ width: '100%', height: '140px', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.45s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
            </div>
          ))}
        </div>
      </div>
    )
  }
  // 3 imagens
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginBottom: '32px' }}>
      <div style={{ overflow: 'hidden', backgroundColor: '#ddd' }}>
        <img src={images[0]} alt="" style={{ width: '100%', height: '280px', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.45s ease' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }}>
        {images.slice(1).map((img, i) => (
          <div key={i} style={{ overflow: 'hidden', backgroundColor: '#ddd' }}>
            <img src={img} alt="" style={{ width: '100%', height: '180px', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.45s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
          </div>
        ))}
      </div>
    </div>
  )
}

// Número de resultado com acento
function ResultNum({ valor, label, cor }: { valor: string; label: string; cor: string }) {
  return (
    <div style={{ position: 'relative', paddingTop: '4px' }}>
      <div style={{ width: '20px', height: '2px', backgroundColor: cor, marginBottom: '6px' }} />
      <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: cor, margin: '0 0 3px', lineHeight: 1, letterSpacing: '-0.02em' }}>{valor}</p>
      <p style={{ fontSize: '10px', fontWeight: 400, color: T.inkLight, margin: 0, lineHeight: 1.4, letterSpacing: '0.02em' }}>{label}</p>
    </div>
  )
}

// ─── NARRATIVA BLOCK ─────────────────────────────────────────────────────────

function NarrativaBlock({ texto, cor, cargo }: { texto: string; cor: string; cargo: string }) {
  return (
    <div style={{ borderTop: `1px solid ${cor}`, padding: '32px 36px 36px', backgroundColor: T.bg, position: 'relative', overflow: 'hidden' }}>
      <span style={{ position: 'absolute', top: '-10px', left: '28px', fontFamily: 'Playfair Display, serif', fontSize: '80px', color: cor, opacity: 0.10, lineHeight: 1, userSelect: 'none' }}>"</span>
      <p style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: cor, margin: '0 0 16px' }}>Perspectiva · {cargo}</p>
      <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.88, color: T.inkMid, margin: 0, maxWidth: '680px', fontStyle: 'italic', position: 'relative', zIndex: 1 }}>
        {texto}
      </p>
    </div>
  )
}

// ─── INTERMODAL CASE ──────────────────────────────────────────────────────────

export function IntermodalCase({ onBack }: { onBack: () => void }) {
  return (
    <div style={{ backgroundColor: T.white }}>

      {/* Barra de retorno */}
      <div style={{ padding: '16px 28px', borderBottom: `1px solid ${T.ruleLight}`, display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: T.bg }}>
        <button onClick={onBack} style={{
          display: 'inline-flex', alignItems: 'center', gap: '7px',
          background: 'none', border: 'none', padding: 0, cursor: 'pointer',
          fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: T.inkMid, fontFamily: 'Inter, sans-serif',
          transition: 'color 0.18s',
        }}
          onMouseEnter={e => (e.currentTarget.style.color = T.navy)}
          onMouseLeave={e => (e.currentTarget.style.color = T.inkMid)}>
          ← Grupo SADA
        </button>
        <span style={{ width: '1px', height: '10px', backgroundColor: T.rule }} />
        <span style={{ fontSize: '9px', fontWeight: 400, letterSpacing: '0.14em', color: T.inkLight }}>Intermodal South America 2024</span>
      </div>

      {/* ── HERO ── */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '340px', backgroundColor: '#060612' }}>
        <img src={caseSadaIntermodal} alt="Intermodal South America 2024"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', opacity: 0.88 }} />
        {/* overlay em gradiente diagonal — dá dinamismo sem perder a imagem */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(0,0,128,0.70) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0) 100%)' }} />

        {/* texto sobre o hero */}
        <div style={{ position: 'absolute', inset: 0, padding: '32px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', margin: '0 0 10px' }}>
            Grupo SADA · Evento · São Paulo
          </p>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(20px, 2.4vw, 30px)',
            fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em',
            color: '#fff', margin: '0 0 12px', maxWidth: '480px',
          }}>
            Intermodal South America 2024
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '28px', height: '2px', backgroundColor: T.magenta }} />
            <p style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.65)', margin: 0 }}>
              Estratégia digital · Cobertura · Conteúdo · Mensuração
            </p>
          </div>
        </div>
      </div>

      {/* ── CONTEXTO + ESTRATÉGIA — duas colunas ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', borderBottom: `1px solid ${T.ruleLight}` }}>

        {/* Contexto */}
        <div style={{ padding: '36px 32px 36px 36px', borderRight: `1px solid ${T.ruleLight}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '11px', fontWeight: 700, color: T.ruleLight, letterSpacing: '0.1em' }}>01</span>
            <span style={{ width: '20px', height: '1px', backgroundColor: T.rule }} />
            <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: T.inkLight }}>Contexto</span>
          </div>
          <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: T.inkMid, margin: 0 }}>
            A Intermodal South America reuniu os principais agentes do setor de logística e mobilidade. O desafio era ampliar a presença digital do Grupo SADA durante o evento e transformar a participação presencial em conteúdo relevante para os canais institucionais.
          </p>
        </div>

        {/* Estratégia */}
        <div style={{ padding: '36px 36px 36px 32px', backgroundColor: T.bg }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '11px', fontWeight: 700, color: T.ruleLight, letterSpacing: '0.1em' }}>02</span>
            <span style={{ width: '20px', height: '1px', backgroundColor: T.rule }} />
            <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: T.inkLight }}>Estratégia</span>
          </div>
          <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.85, color: T.inkMid, margin: '0 0 20px' }}>
            Estruturei uma cobertura integrada, conectando planejamento editorial, roteiro, produção audiovisual e conteúdos em tempo real.
          </p>
          {/* disciplinas — chips internos */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {['Planejamento editorial', 'Roteiro', 'Produção audiovisual', 'Conteúdo em tempo real'].map(d => (
              <span key={d} style={{ fontSize: '9px', fontWeight: 400, color: T.navy, padding: '3px 10px', border: `1px solid rgba(0,0,128,0.25)`, whiteSpace: 'nowrap' }}>{d}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── EXECUÇÃO ── */}
      <div style={{ borderBottom: `1px solid ${T.ruleLight}` }}>
        {/* label */}
        <div style={{ padding: '28px 36px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '11px', fontWeight: 700, color: T.ruleLight, letterSpacing: '0.1em' }}>03</span>
            <span style={{ width: '20px', height: '1px', backgroundColor: T.rule }} />
            <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: T.inkLight }}>Execução</span>
          </div>
          <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.82, color: T.inkMid, margin: '0 0 24px', maxWidth: '520px' }}>
            Desenvolvimento do roteiro, organização da pauta, acompanhamento da produção, publicação dos conteúdos e desdobramentos para Instagram e LinkedIn.
          </p>
        </div>

        {/* galeria de execução — Intermodal + posts reais */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3px' }}>
          {/* Imagem principal: conteúdo da campanha Intermodal */}
          <div style={{ overflow: 'hidden', backgroundColor: '#080810', minHeight: '220px' }}>
            <img src={caseSadaIntermodal} alt="Campanha digital Intermodal — Grupo SADA"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.55s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
          </div>
          {/* Posts publicados: redes sociais da Intermodal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <div style={{ overflow: 'hidden', backgroundColor: '#0a200a', flex: 1 }}>
              <img src={caseSadaRedes} alt="Posts Instagram — Intermodal 2024"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.55s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
            </div>
            <div style={{ overflow: 'hidden', backgroundColor: '#0a200a', flex: 1 }}>
              <img src={imgMidia} alt="Cobertura de mídia — Intermodal"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.55s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
            </div>
          </div>
        </div>

        {/* legenda */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3px' }}>
          {[
            'Campanha digital · Conteúdos publicados durante o evento',
            'Posts institucionais e repercussão na mídia',
          ].map(l => (
            <div key={l} style={{ padding: '10px 16px', backgroundColor: T.bg, borderTop: `1px solid ${T.ruleLight}` }}>
              <p style={{ fontSize: '10px', fontWeight: 300, color: T.inkLight, margin: 0 }}>{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── RESULTADOS ── */}
      <div style={{ backgroundColor: T.white }}>
        {/* label */}
        <div style={{ padding: '32px 36px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '11px', fontWeight: 700, color: T.ruleLight, letterSpacing: '0.1em' }}>04</span>
            <span style={{ width: '20px', height: '1px', backgroundColor: T.rule }} />
            <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: T.inkLight }}>Resultados</span>
          </div>
          <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.82, color: T.inkMid, margin: '14px 0 0', maxWidth: '480px' }}>
            A estratégia ampliou a visibilidade da participação do Grupo SADA no evento e gerou crescimento expressivo de alcance nos canais institucionais.
          </p>
        </div>

        {/* métricas — dois blocos grandes */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', margin: '0 36px 36px', border: `1px solid ${T.ruleLight}` }}>
          <div style={{ padding: '32px 32px 28px', borderRight: `1px solid ${T.ruleLight}`, borderTop: `3px solid ${T.navy}` }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', color: T.navy, margin: '0 0 10px' }}>+112%</p>
            <p style={{ fontSize: '13px', fontWeight: 500, color: T.ink, margin: '0 0 5px' }}>Alcance no Instagram</p>
            <p style={{ fontSize: '11px', fontWeight: 300, color: T.inkLight, margin: 0, lineHeight: 1.55 }}>Resultado da cobertura digital durante o período do evento</p>
          </div>
          <div style={{ padding: '32px 32px 28px', borderTop: `3px solid ${T.ruleLight}` }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(40px, 5vw, 60px)', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', color: T.navy, margin: '0 0 10px' }}>+93%</p>
            <p style={{ fontSize: '13px', fontWeight: 500, color: T.ink, margin: '0 0 5px' }}>Alcance no LinkedIn</p>
            <p style={{ fontSize: '11px', fontWeight: 300, color: T.inkLight, margin: 0, lineHeight: 1.55 }}>Resultado da cobertura digital durante o período do evento</p>
          </div>
        </div>

        {/* nota de contexto */}
        <div style={{ margin: '0 36px 40px', padding: '16px 20px', backgroundColor: T.bg, borderLeft: `2px solid ${T.ruleLight}` }}>
          <p style={{ fontSize: '11px', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.7, color: T.inkLight, margin: 0 }}>
            Os indicadores refletem o desempenho dos conteúdos publicados durante a estratégia de cobertura da Intermodal South America 2024 — não representam crescimento permanente dos canais.
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── SADA CASE — PORTFÓLIO EDITORIAL ─────────────────────────────────────────

function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 999,
      backgroundColor: 'rgba(0,0,0,0.92)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'zoom-out',
    }}>
      <img src={src} alt="" onClick={e => e.stopPropagation()} style={{
        maxWidth: 'min(92vw, 900px)', maxHeight: '90vh',
        objectFit: 'contain', display: 'block',
        boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
      }} />
      <button onClick={onClose} style={{
        position: 'absolute', top: '20px', right: '24px',
        background: 'none', border: 'none', color: 'rgba(255,255,255,0.55)',
        fontSize: '30px', lineHeight: 1, cursor: 'pointer', fontFamily: 'Inter, sans-serif',
        transition: 'color 0.15s',
      }}
        onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
        ×
      </button>
    </div>
  )
}

function SadaCaseDetail({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <div style={{ backgroundColor: T.white }}>

      {/* Barra de retorno */}
      <div style={{ padding: '14px 28px', borderBottom: `1px solid ${T.ruleLight}`, display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: T.bg }}>
        <button onClick={onBack} style={{ display:'inline-flex',alignItems:'center',gap:'7px',background:'none',border:'none',padding:0,cursor:'pointer',fontSize:'10px',fontWeight:500,letterSpacing:'0.12em',textTransform:'uppercase',color:T.inkMid,fontFamily:'Inter, sans-serif',transition:'color 0.18s' }}
          onMouseEnter={e=>(e.currentTarget.style.color=T.navy)} onMouseLeave={e=>(e.currentTarget.style.color=T.inkMid)}>
          ← Todos os cases
        </button>
        <span style={{ width:'1px',height:'10px',backgroundColor:T.rule }} />
        <span style={{ fontSize:'9px',fontWeight:400,letterSpacing:'0.14em',color:T.inkLight }}>Grupo SADA</span>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          TELA 1 — VISÃO GERAL
      ══════════════════════════════════════════════════════════════════════ */}

      {/* Foto principal: foto de grupo — CAPA */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '360px', backgroundColor: '#111' }}>
        <img src={imgDiaVCapa} alt="Grupo SADA (Campanha Dia V)"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.12) 55%, rgba(0,0,0,0) 100%)' }} />
        <div style={{ position: 'absolute', bottom: '28px', left: '36px' }}>
          <div style={{ display:'flex',alignItems:'center',gap:'8px' }}>
            <CaseIcon id={1} size={13} color="rgba(255,255,255,0.75)" />
            <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>Grupo SADA · 2022–2025</span>
          </div>
        </div>
      </div>

      {/* Bloco de texto: título + contexto + chips + resultado macro */}
      <div style={{ padding: '40px 36px 44px', borderBottom: `1px solid ${T.ruleLight}` }}>

        {/* Título */}
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(22px, 2.6vw, 32px)',
          fontWeight: 600, lineHeight: 1.18, letterSpacing: '-0.02em',
          color: T.ink, margin: '0 0 16px',
        }}>
          Grupo SADA
          <br />
          <span style={{ fontWeight: 400, fontStyle: 'italic' }}>Comunicação Digital e Marketing</span>
        </h2>

        {/* Texto principal */}
        <p style={{ fontSize: '13px', fontWeight: 300, lineHeight: 1.82, color: T.inkMid, margin: '0 0 28px', maxWidth: '520px' }}>
          Atuação em Comunicação e Marketing conectando planejamento, conteúdo, campanhas, canais, comunicação interna e acompanhamento de performance em uma estrutura corporativa de múltiplos públicos e áreas.
        </p>

        {/* Contexto */}
        <div style={{ borderLeft: `2px solid ${T.ruleLight}`, paddingLeft: '16px', marginBottom: '32px', maxWidth: '480px' }}>
          <p style={{ fontSize: '12px', fontWeight: 300, lineHeight: 1.78, color: T.inkLight, margin: 0 }}>
            Minha atuação acontecia de forma transversal e em equipe, com interface entre áreas internas, fornecedores, stakeholders e profissionais da equipe de Comunicação e Marketing, em frentes com responsabilidades distribuídas entre os envolvidos.
          </p>
        </div>

        {/* Chips: Minha atuação */}
        <div style={{ marginBottom: '36px' }}>
          <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.inkLight, margin: '0 0 12px' }}>Minha atuação</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {['Planejamento editorial', 'Redação e produção textual', 'Conteúdo multimídia', 'Gestão de canais', 'Comunicação interna', 'Campanhas', 'Indicadores', 'Design de desdobramento'].map(chip => (
              <span key={chip} style={{
                fontSize: '11px', fontWeight: 400, color: T.ink,
                padding: '5px 13px', border: `1px solid ${T.rule}`,
                whiteSpace: 'nowrap',
              }}>{chip}</span>
            ))}
          </div>
        </div>

        {/* Resultado macro */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', paddingTop: '28px', borderTop: `1px solid ${T.ruleLight}` }}>
          <div>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '44px', fontWeight: 700, lineHeight: 1,
              letterSpacing: '-0.04em', color: T.navy, margin: '0 0 6px',
            }}>+23%</p>
            <p style={{ fontSize: '12px', fontWeight: 300, lineHeight: 1.65, color: T.inkMid, margin: '0 0 8px', maxWidth: '320px' }}>
              Evolução do engajamento no Instagram em 2024, na comparação com o período anterior.
            </p>
            <p style={{ fontSize: '10px', fontWeight: 300, color: T.inkLight, margin: 0, letterSpacing: '0.02em' }}>
              Indicador de contexto do canal, acompanhado em conjunto com alcance, interações, cliques e volume de publicações
            </p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          TELA 2 — FRENTES E EVIDÊNCIAS
      ══════════════════════════════════════════════════════════════════════ */}
      <div style={{ backgroundColor: T.white, borderTop: `1px solid ${T.ruleLight}` }}>
        <div style={{ padding: '40px 36px 28px' }}>
          <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: T.inkLight, margin: '0 0 14px' }}>Atuação integrada</p>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.015em', color: T.ink, margin: '0 0 12px' }}>
            Uma estratégia, diferentes pontos de contato.
          </h3>
          <p style={{ fontSize: '12px', fontWeight: 300, lineHeight: 1.78, color: T.inkMid, margin: 0, maxWidth: '480px' }}>
            Planejamento, redação e produção de conteúdo, gestão de canais, campanhas, comunicação interna, desdobramentos visuais e acompanhamento de indicadores em diferentes frentes da comunicação.
          </p>
        </div>

        {/* ── MOSAICO ── */}

        {/* Grid 1:1 — linha 1: 4 quadrados */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3px', marginBottom: '3px' }}>
          {[
            { src: imgSIPAT, alt: 'SIPAT (Segurança no Trabalho)', label: 'SIPAT · Segurança', pos: 'center 20%' },
            { src: imgPNMC, alt: 'Programa Na Mão Certa', label: 'Programa Na Mão Certa', pos: 'center top' },
            { src: imgMidia, alt: 'Grupo SADA na Mídia', label: 'Assessoria e PR', pos: 'center 15%' },
            { src: imgPremio, alt: 'Prêmio Voluntária Elisa', label: 'Prêmio Voluntária Elisa', pos: 'center' },
          ].map(item => (
            <div key={item.alt} onClick={() => setLightbox(item.src)} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1/1', cursor: 'zoom-in' }}>
              <img src={item.src} alt={item.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: item.pos, display: 'block', transition: 'transform 0.55s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.04) 42%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: '10px', left: '12px', right: '8px' }}>
                <p style={{ fontSize: '9px', fontWeight: 300, color: 'rgba(255,255,255,0.78)', margin: 0, lineHeight: 1.4 }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Grid 1:1 — linha 2: 4 quadrados */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3px' }}>
          {[
            { src: imgVolei, alt: 'SADA Vôlei', label: 'SADA Vôlei', pos: 'center 20%' },
            { src: imgConecta, alt: 'Conecta (Escola Corporativa)', label: 'Conecta · Escola Corporativa', pos: 'center' },
            { src: imgTrend, alt: 'Trend', label: 'Trend', pos: 'center' },
            { src: imgSnap2, alt: 'Conteúdo institucional', label: 'Conteúdo institucional', pos: 'center' },
          ].map(item => (
            <div key={item.alt} onClick={() => setLightbox(item.src)} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1/1', cursor: 'zoom-in' }}>
              <img src={item.src} alt={item.alt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: item.pos, display: 'block', transition: 'transform 0.55s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.04) 42%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: '10px', left: '12px', right: '8px' }}>
                <p style={{ fontSize: '9px', fontWeight: 300, color: 'rgba(255,255,255,0.78)', margin: 0, lineHeight: 1.4 }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}

        {/* Legenda geral */}
        <div style={{ padding: '10px 20px', backgroundColor: T.bg, borderTop: `1px solid ${T.ruleLight}`, display: 'flex', alignItems: 'baseline', gap: '12px' }}>
          <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: T.navy, margin: 0 }}>Comunicação corporativa</p>
          <span style={{ width: '1px', height: '10px', backgroundColor: T.rule, display: 'inline-block' }} />
          <p style={{ fontSize: '10px', fontWeight: 300, color: T.inkLight, margin: 0 }}>Diversas frentes, uma narrativa integrada</p>
        </div>

        {/* Fluxo de atuação */}
        <div style={{ padding: '28px 36px', borderTop: `1px solid ${T.ruleLight}` }}>
          <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.inkLight, margin: '0 0 12px' }}>Como eu atuava</p>
          <p style={{ fontSize: '12px', fontWeight: 300, lineHeight: 1.78, color: T.inkMid, margin: '0 0 16px', maxWidth: '520px' }}>
            O trabalho partia do contexto e das demandas de comunicação, passava pelo planejamento e pela articulação com as áreas envolvidas e seguia para redação, produção, publicação e acompanhamento. A leitura dos indicadores alimentava ajustes e aprendizados para as próximas entregas.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
            {['Contexto e demandas', 'Planejamento', 'Conteúdo e produção', 'Canais e campanhas', 'Públicos', 'Indicadores e aprendizados'].map((etapa, i, arr) => (
              <React.Fragment key={etapa}>
                <span style={{ fontSize: '10px', fontWeight: 400, color: T.ink, padding: '5px 10px', border: `1px solid ${T.rule}`, backgroundColor: T.white }}>{etapa}</span>
                {i < arr.length - 1 && <span style={{ fontSize: '10px', color: T.inkLight }}>→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Design de desdobramento */}
        <div style={{ padding: '28px 36px', borderTop: `1px solid ${T.ruleLight}` }}>
          <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.inkLight, margin: '0 0 12px' }}>Design aplicado à comunicação</p>
          <p style={{ fontSize: '12px', fontWeight: 300, lineHeight: 1.78, color: T.inkMid, margin: 0, maxWidth: '520px' }}>
            Na SADA, minha atuação em design esteve principalmente nos desdobramentos. A partir de identidades, conceitos e direcionamentos já definidos para campanhas e projetos, desenvolvia e adaptava peças para diferentes formatos, canais e necessidades de comunicação, preservando consistência visual e adequação ao contexto de cada entrega.
          </p>
        </div>

        {/* Canais, processos e comunicação interna */}
        <div style={{ padding: '28px 36px', borderTop: `1px solid ${T.ruleLight}` }}>
          <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.inkLight, margin: '0 0 14px' }}>Canais e operação</p>
          <p style={{ fontSize: '12px', fontWeight: 300, lineHeight: 1.78, color: T.inkMid, margin: '0 0 18px', maxWidth: '520px' }}>
            Além das redes sociais, atuei em comunicações via RD Station para bases com mais de 2,4 mil destinatários e no ecossistema interno do GOintegro, com mais de 3 mil usuários cadastrados. A rotina também envolvia Salesforce para triagem e acompanhamento de demandas, trabalho com SLAs e participação na criação e melhoria de fluxos e POPs.
          </p>
          <p style={{ fontSize: '12px', fontWeight: 300, lineHeight: 1.78, color: T.inkMid, margin: 0, maxWidth: '520px' }}>
            Na comunicação interna, participei de campanhas, produção de textos e conteúdos, interface com áreas e suporte às lives corporativas, conectando conteúdo, organização e execução.
          </p>
        </div>

        {/* Frase de fechamento */}
        <div style={{ padding: '20px 36px 32px' }}>
          <p style={{ fontSize: '11px', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.7, color: T.inkLight, margin: 0, maxWidth: '480px' }}>
            Minha atuação combinava responsabilidades próprias e trabalho em equipe, conectando conteúdo, canais, campanhas, processos e públicos em diferentes necessidades de comunicação.
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          INTERMODAL SOUTH AMERICA 2024
      ══════════════════════════════════════════════════════════════════════ */}
      <div style={{ borderTop: `1px solid ${T.rule}`, backgroundColor: T.white }}>

        {/* Cabeçalho */}
        <div style={{ padding: '36px 36px 28px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '20px' }}>
          <div>
            <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: T.inkLight, margin: '0 0 10px' }}>Projeto em destaque</p>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(16px, 1.8vw, 22px)', fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.015em', color: T.ink, margin: '0 0 10px' }}>
              Intermodal South America 2024
            </h3>
            <p style={{ fontSize: '12px', fontWeight: 300, color: T.inkMid, margin: 0, lineHeight: 1.75, maxWidth: '400px' }}>
              Planejamento da frente de comunicação digital, com gestão de mídias sociais e canais, calendário de publicações e cobertura antes, durante e depois do evento, incluindo Feed, Stories, Reels e vídeos.
            </p>
          </div>
          <div style={{ flexShrink: 0, display: 'flex', gap: '6px', paddingTop: '4px' }}>
            <span style={{ padding: '4px 12px', backgroundColor: T.navy, color: '#fff', fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>São Paulo</span>
            <span style={{ padding: '4px 12px', border: `1px solid ${T.rule}`, color: T.inkMid, fontSize: '9px', fontWeight: 400, backgroundColor: T.bg }}>Mar · 2024</span>
          </div>
        </div>

        {/* Foto da equipe + convite */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '3px', marginBottom: '3px', alignItems: 'stretch' }}>
          <div onClick={() => setLightbox(imgEquipeIntermodal)}
            style={{ position: 'relative', overflow: 'hidden', height: '220px', cursor: 'zoom-in' }}>
            <img src={imgEquipeIntermodal} alt="Equipe Grupo SADA (Intermodal 2024)"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', display: 'block', transition: 'transform 0.55s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)' }} />
            <div style={{ position: 'absolute', bottom: '14px', left: '16px' }}>
              <p style={{ fontSize: '10px', fontWeight: 300, color: 'rgba(255,255,255,0.8)', margin: 0 }}>Equipe Grupo SADA no estande (Intermodal 2024)</p>
            </div>
          </div>
          <div onClick={() => setLightbox(imgConviteInter)}
            style={{ width: '220px', position: 'relative', overflow: 'hidden', cursor: 'zoom-in', flexShrink: 0 }}>
            <img src={imgConviteInter} alt="Convite Intermodal 2024"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', transition: 'transform 0.45s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
          </div>
        </div>

        {/* 4 vídeos — entrevistas */}
        <div style={{ padding: '20px 36px 36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ width: '16px', height: '1px', backgroundColor: T.navy }} />
            <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: T.navy }}>Conteúdo audiovisual · YouTube Shorts</span>
            <div style={{ flex: 1, height: '1px', backgroundColor: T.ruleLight }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
            {[
              { src: imgEntrev1, label: 'Entrevista 01', name: 'Marcela Araujo', role: 'Analista Comercial', desc: 'Experiência na feira', url: 'https://youtube.com/shorts/uFWPXXPHZvI' },
              { src: imgEntrev2, label: 'Entrevista 02', name: 'Michel Veloso', role: 'Gerente de Logística', desc: 'Visão de mercado na feira', url: 'https://youtube.com/shorts/bI0RPlr1sBI' },
              { src: imgEntrev3, label: 'Entrevista 03', name: 'Rafael Torres', role: 'Gestor de Comunicação e Marketing', desc: 'Importância da feira para o Grupo', url: 'https://youtube.com/shorts/qd37imNmO0U' },
              { src: imgEntrev4, label: 'Aftermovie 04', name: 'Murillo Esperandio', role: 'Executivo de Carga Geral', desc: 'Experiência gerada na feira', url: 'https://youtube.com/shorts/Zorb3uOKYn4' },
            ].map(v => (
              <a key={v.url} href={v.url} target="_blank" rel="noopener noreferrer"
                style={{ textDecoration: 'none', display: 'block', position: 'relative', overflow: 'hidden', aspectRatio: '9/16', backgroundColor: '#111', flexShrink: 0 }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement
                  const play = e.currentTarget.querySelector('.play-btn') as HTMLElement
                  if (img) img.style.transform = 'scale(1.05)'
                  if (play) play.style.opacity = '1'
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement
                  const play = e.currentTarget.querySelector('.play-btn') as HTMLElement
                  if (img) img.style.transform = 'scale(1)'
                  if (play) play.style.opacity = '0.72'
                }}>
                <img src={v.src} alt={v.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block', transition: 'transform 0.45s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.15) 45%, transparent 100%)' }} />
                {/* Botão play */}
                <div className="play-btn" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.72, transition: 'opacity 0.22s' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)', border: '1.5px solid rgba(255,255,255,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                      <polygon points="2,1 13,8 2,15" fill="white" />
                    </svg>
                  </div>
                </div>
                {/* Info */}
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px' }}>
                  <p style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.50)', margin: '0 0 4px' }}>{v.label}</p>
                  <p style={{ fontSize: '11px', fontWeight: 600, color: '#fff', margin: '0 0 2px', lineHeight: 1.25 }}>{v.name}</p>
                  <p style={{ fontSize: '9px', fontWeight: 300, color: 'rgba(255,255,255,0.65)', margin: '0 0 5px', lineHeight: 1.35 }}>{v.role}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/><polygon points="4,3 7.5,5 4,7" fill="rgba(255,255,255,0.6)"/></svg>
                    <span style={{ fontSize: '8px', fontWeight: 400, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}>YouTube Shorts</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Resultados da cobertura digital da Intermodal */}
      <div style={{ padding: '28px 36px 36px', borderTop: `1px solid ${T.ruleLight}`, backgroundColor: T.bg }}>
        <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: T.inkLight, margin: '0 0 16px' }}>Cobertura digital · resultados</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', backgroundColor: T.ruleLight, border: `1px solid ${T.ruleLight}` }}>
          {[
            ['+112%', 'alcance no Instagram'],
            ['+93%', 'alcance no LinkedIn'],
            ['59.246', 'interações'],
            ['38', 'Stories publicados'],
          ].map(([valor, label]) => (
            <div key={label} style={{ padding: '20px', backgroundColor: T.white }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, lineHeight: 1, color: T.navy, margin: '0 0 7px' }}>{valor}</p>
              <p style={{ fontSize: '10px', fontWeight: 300, lineHeight: 1.5, color: T.inkMid, margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '11px', fontWeight: 400, lineHeight: 1.6, color: T.inkMid, margin: '14px 0 6px', maxWidth: '540px' }}>
          1.559 de média de interações por Story.
        </p>
        <p style={{ fontSize: '10px', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.65, color: T.inkLight, margin: 0, maxWidth: '540px' }}>
          Resultados da cobertura digital da Intermodal 2024. A variação de alcance compara março de 2024 com janeiro de 2024, referência utilizada pela área.
        </p>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          TELA 3 — RESULTADOS E DESTAQUE
      ══════════════════════════════════════════════════════════════════════ */}
      <div style={{ borderTop: `1px solid ${T.rule}`, backgroundColor: T.white }}>
        <div style={{ padding: '40px 36px 36px' }}>
          {/* Eyebrow */}
          <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: T.inkLight, margin: '0 0 14px' }}>Resultados</p>
          {/* Título */}
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(18px, 2vw, 24px)', fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.015em', color: T.ink, margin: '0 0 32px' }}>
            Comunicação orientada por consistência e desempenho.
          </h3>

          {/* Layout: foto pequena à esquerda + cards empilhados à direita */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '36px', alignItems: 'stretch' }}>

            {/* Foto Dia V — ação */}
            <div onClick={() => setLightbox(imgDiaVAcao)}
              style={{ overflow: 'hidden', position: 'relative', aspectRatio: '3/4', cursor: 'zoom-in' }}>
              <img src={imgDiaVAcao} alt="Dia V em Ação"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', display: 'block', transition: 'transform 0.55s ease' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)' }} />
              <div style={{ position: 'absolute', bottom: '14px', left: '16px' }}>
                <p style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', margin: '0 0 3px' }}>ESG · Voluntariado</p>
                <p style={{ fontSize: '11px', fontWeight: 300, color: 'rgba(255,255,255,0.85)', margin: 0 }}>Dia V (Ação nos territórios)</p>
              </div>
            </div>

            {/* Cards empilhados */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '24px 22px', backgroundColor: T.bg, borderTop: `2px solid ${T.navy}`, flex: 1 }}>
                <p style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '48px', fontWeight: 700, lineHeight: 1,
                  letterSpacing: '-0.04em', color: T.navy, margin: '0 0 10px',
                }}>+23%</p>
                <p style={{ fontSize: '12px', fontWeight: 400, color: T.ink, margin: '0 0 5px', lineHeight: 1.45 }}>Evolução do engajamento no Instagram em 2024, na comparação com o período anterior.</p>
                <p style={{ fontSize: '10px', fontWeight: 300, color: T.inkLight, margin: 0 }}>Período com 27% menos publicações</p>
              </div>
              <div style={{ padding: '24px 22px', backgroundColor: T.bg, borderTop: `2px solid ${T.ruleLight}`, flex: 1 }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '34px', fontWeight: 700, lineHeight: 1, letterSpacing: '-0.04em', color: T.navy, margin: '0 0 8px' }}>+18%</p>
                <p style={{ fontSize: '12px', fontWeight: 500, color: T.ink, margin: '0 0 6px', lineHeight: 1.45 }}>Crescimento da comunidade no LinkedIn entre janeiro e julho de 2024.</p>
                <p style={{ fontSize: '10px', fontWeight: 300, color: T.inkLight, margin: 0 }}>108,8 mil → 128,4 mil seguidores</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── INDICADORES DE CANAIS ── */}
      <div style={{ padding: '36px', backgroundColor: T.white, borderTop: `1px solid ${T.rule}` }}>
        <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: T.inkLight, margin: '0 0 12px' }}>Indicadores de canais · 2024</p>
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(17px, 1.9vw, 22px)', fontWeight: 600, lineHeight: 1.3, color: T.ink, margin: '0 0 22px' }}>Leitura de performance como parte da rotina.</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', backgroundColor: T.ruleLight, border: `1px solid ${T.ruleLight}` }}>
          {[
            ['1,69 milhão', 'impressões no Instagram · jan–jul/24'],
            ['531 mil', 'contas alcançadas no Instagram · jan–jul/24'],
            ['36,2%', 'taxa média de abertura no RD Station · 1º semestre'],
            ['57,5%', 'média de usuários ativos no GOintegro · 1º semestre'],
          ].map(([valor, label]) => (
            <div key={label} style={{ padding: '22px', backgroundColor: T.bg }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, lineHeight: 1, color: T.navy, margin: '0 0 8px' }}>{valor}</p>
              <p style={{ fontSize: '10px', fontWeight: 300, lineHeight: 1.55, color: T.inkMid, margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '10px', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.65, color: T.inkLight, margin: '14px 0 0', maxWidth: '540px' }}>
          Os indicadores apresentam a evolução e o alcance dos canais no período e não são atribuídos a uma única ação ou pessoa.
        </p>
      </div>

      {/* ── ANÁLISE DE REDES SOCIAIS 2025 ── */}
      <div style={{ padding: '36px', backgroundColor: T.bg, borderTop: `1px solid ${T.rule}` }}>
        <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: T.inkLight, margin: '0 0 12px' }}>Estudo estratégico · 2025</p>
        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(17px, 1.9vw, 22px)', fontWeight: 600, lineHeight: 1.3, color: T.ink, margin: '0 0 12px' }}>Análise e direcionamento de Redes Sociais</h3>
        <p style={{ fontSize: '12px', fontWeight: 300, lineHeight: 1.78, color: T.inkMid, margin: '0 0 16px', maxWidth: '540px' }}>
          A partir do histórico e dos dados dos canais, desenvolvi uma análise e uma proposta de direcionamento para as redes sociais em 2025. O estudo contemplou públicos de Instagram e LinkedIn, desempenho dos canais, concorrentes, SWOT, personas, tom de voz, SMO, objetivos de conteúdo, editorias, sugestões de pautas e indicadores.
        </p>
        <p style={{ fontSize: '11px', fontWeight: 300, lineHeight: 1.7, color: T.inkLight, margin: 0, maxWidth: '540px' }}>
          Os dados foram extraídos dos canais e de ferramentas como MLabs. O planejamento apresentado nesse material não chegou à etapa de implementação.
        </p>
      </div>

      {/* ── NARRATIVA ── */}
      {cases[0].narrativa && <NarrativaBlock texto={cases[0].narrativa} cor={T.navy} cargo="Analista de Marketing" />}

      {/* ── NAVEGAÇÃO ── */}
      <div style={{ padding: '20px 36px', backgroundColor: T.white, borderTop: `1px solid ${T.rule}`, display:'flex', alignItems:'center', justifyContent:'space-between', gap:'12px', flexWrap:'wrap' }}>
        <button onClick={onBack} style={{ display:'inline-flex',alignItems:'center',gap:'8px',padding:'9px 20px',background:'none',border:`1px solid ${T.rule}`,color:T.inkMid,fontSize:'11px',cursor:'pointer',fontFamily:'Inter, sans-serif',letterSpacing:'0.06em',textTransform:'uppercase',transition:'all 0.18s' }}
          onMouseEnter={e=>{e.currentTarget.style.borderColor=T.navy;e.currentTarget.style.color=T.navy}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor=T.rule;e.currentTarget.style.color=T.inkMid}}>
          ← Todos os cases
        </button>
        <button onClick={onNext} style={{ display:'inline-flex',alignItems:'center',gap:'8px',padding:'9px 20px',backgroundColor:T.navy,border:`1px solid ${T.navy}`,color:T.white,fontSize:'11px',cursor:'pointer',fontFamily:'Inter, sans-serif',letterSpacing:'0.06em',textTransform:'uppercase' }}>
          Próximo case →
        </button>
      </div>
    </div>
  )
}

// ─── CASE GALLERY ────────────────────────────────────────────────────────────

function useBreakpoint() {
  const [w, setW] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280)
  useEffect(() => {
    const fn = () => setW(window.innerWidth)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return {
    isMobile: w < 640,
    isTablet: w >= 640 && w < 1024,
    isDesktop: w >= 1024,
    isWide: w >= 1440,
    w,
  }
}

// Ícone temático por case (id)
function CaseIcon({ id, size = 24, color = 'currentColor' }: { id: number; size?: number; color?: string }) {
  const s = size
  const sw = size < 20 ? 1.2 : 1.5
  if (id === 1) return ( // SADA — logística / transporte
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="1" y="7" width="13" height="10" rx="1" stroke={color} strokeWidth={sw}/>
      <path d="M14 10h5l3 4v3h-8V10z" stroke={color} strokeWidth={sw} strokeLinejoin="round"/>
      <circle cx="5.5" cy="18.5" r="1.5" stroke={color} strokeWidth={sw}/>
      <circle cx="18.5" cy="18.5" r="1.5" stroke={color} strokeWidth={sw}/>
      <line x1="1" y1="11" x2="14" y2="11" stroke={color} strokeWidth={sw}/>
    </svg>
  )
  if (id === 2) return ( // SPDATA — pessoas / endomarketing
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="9" cy="7" r="3.5" stroke={color} strokeWidth={sw}/>
      <path d="M2 20c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
      <circle cx="18" cy="8" r="2.5" stroke={color} strokeWidth={sw}/>
      <path d="M16 20c0-2.209 1.343-4 3-4" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
      <path d="M8 12.5c1.5 1 3.5 1 5 0" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
    </svg>
  )
  if (id === 3) return ( // Freelancer — consultoria / estratégia
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={sw}/>
      <line x1="12" y1="2" x2="12" y2="6" stroke={color} strokeWidth={sw}/>
      <line x1="12" y1="18" x2="12" y2="22" stroke={color} strokeWidth={sw}/>
      <line x1="2" y1="12" x2="6" y2="12" stroke={color} strokeWidth={sw}/>
      <line x1="18" y1="12" x2="22" y2="12" stroke={color} strokeWidth={sw}/>
      <circle cx="12" cy="12" r="2.5" fill={color}/>
      <line x1="12" y1="12" x2="17" y2="7" stroke={color} strokeWidth={sw}/>
    </svg>
  )
  // id === 4 — Colégio Arnaldo — educação
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 3L2 8l10 5 10-5-10-5z" stroke={color} strokeWidth={sw} strokeLinejoin="round"/>
      <path d="M6 10.5v5.5c0 1.5 2.686 3 6 3s6-1.5 6-3v-5.5" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
      <line x1="22" y1="8" x2="22" y2="14" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
      <circle cx="22" cy="15" r="1" fill={color}/>
    </svg>
  )
}

// Ícones do site — seções, método, pilares, steps (mesmo traço dos CaseIcons)
type SiteIconName =
  | 'cases' | 'method' | 'skills' | 'about' | 'contact' | 'blog'
  | 'diagnose' | 'strategy' | 'process' | 'create'
  | 'attention' | 'production' | 'campaign' | 'digital'
  | 'marketing' | 'branding' | 'experience' | 'channels'

function SiteIcon({ name, size = 24, color = 'currentColor' }: { name: SiteIconName; size?: number; color?: string }) {
  const s = size
  const sw = size < 20 ? 1.2 : 1.5
  switch (name) {
    // ── Seções principais ──────────────────────────────────────────────────────
    case 'cases': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="9" height="9" rx="1" stroke={color} strokeWidth={sw}/>
        <rect x="13" y="2" width="9" height="9" rx="1" stroke={color} strokeWidth={sw}/>
        <rect x="2" y="13" width="9" height="9" rx="1" stroke={color} strokeWidth={sw}/>
        <rect x="13" y="13" width="9" height="9" rx="1" stroke={color} strokeWidth={sw}/>
      </svg>
    )
    case 'method': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9.5" stroke={color} strokeWidth={sw}/>
        <circle cx="12" cy="12" r="2" fill={color}/>
        <line x1="12" y1="2.5" x2="12" y2="5" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
        <line x1="12" y1="19" x2="12" y2="21.5" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
        <line x1="2.5" y1="12" x2="5" y2="12" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
        <line x1="19" y1="12" x2="21.5" y2="12" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
        <line x1="12" y1="12" x2="16" y2="8" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
      </svg>
    )
    case 'skills': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke={color} strokeWidth={sw} strokeLinejoin="round"/>
      </svg>
    )
    case 'about': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke={color} strokeWidth={sw}/>
        <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
      </svg>
    )
    case 'contact': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="1.5" stroke={color} strokeWidth={sw}/>
        <polyline points="2,5 12,13 22,5" stroke={color} strokeWidth={sw} strokeLinejoin="round"/>
      </svg>
    )
    case 'blog': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M11 4H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke={color} strokeWidth={sw} strokeLinejoin="round"/>
      </svg>
    )
    // ── Método / formaDeTrabalhar ──────────────────────────────────────────────
    case 'diagnose': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <circle cx="10.5" cy="10.5" r="7" stroke={color} strokeWidth={sw}/>
        <line x1="15.8" y1="15.8" x2="21" y2="21" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
        <line x1="10.5" y1="7.5" x2="10.5" y2="13.5" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
        <line x1="7.5" y1="10.5" x2="13.5" y2="10.5" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
      </svg>
    )
    case 'strategy': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <circle cx="5" cy="19" r="2" stroke={color} strokeWidth={sw}/>
        <circle cx="19" cy="5" r="2" stroke={color} strokeWidth={sw}/>
        <circle cx="5" cy="5" r="2" stroke={color} strokeWidth={sw}/>
        <circle cx="19" cy="19" r="2" stroke={color} strokeWidth={sw}/>
        <circle cx="12" cy="12" r="2" fill={color}/>
        <line x1="7" y1="17" x2="10.5" y2="13.5" stroke={color} strokeWidth={sw}/>
        <line x1="7" y1="7" x2="10.5" y2="10.5" stroke={color} strokeWidth={sw}/>
        <line x1="17" y1="7" x2="13.5" y2="10.5" stroke={color} strokeWidth={sw}/>
        <line x1="17" y1="17" x2="13.5" y2="13.5" stroke={color} strokeWidth={sw}/>
      </svg>
    )
    case 'process': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="5" rx="1" stroke={color} strokeWidth={sw}/>
        <rect x="3" y="10" width="18" height="5" rx="1" stroke={color} strokeWidth={sw}/>
        <rect x="3" y="17" width="11" height="4" rx="1" stroke={color} strokeWidth={sw}/>
        <line x1="7" y1="5.5" x2="17" y2="5.5" stroke={color} strokeWidth={sw * 0.7} strokeLinecap="round"/>
        <line x1="7" y1="12.5" x2="17" y2="12.5" stroke={color} strokeWidth={sw * 0.7} strokeLinecap="round"/>
      </svg>
    )
    case 'create': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M2 20c2-4 6-8 10-8" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
        <path d="M12 12c0-5 8-10 10-10-2 2-5 10-10 10z" stroke={color} strokeWidth={sw} strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="1.5" fill={color}/>
        <line x1="2" y1="22" x2="6" y2="18" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
      </svg>
    )
    // ── Methodology steps (Arnaldo) ────────────────────────────────────────────
    case 'attention': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke={color} strokeWidth={sw} strokeLinejoin="round"/>
        <line x1="9" y1="10" x2="9" y2="10.01" stroke={color} strokeWidth={sw + 0.5} strokeLinecap="round"/>
        <line x1="12" y1="10" x2="12" y2="10.01" stroke={color} strokeWidth={sw + 0.5} strokeLinecap="round"/>
        <line x1="15" y1="10" x2="15" y2="10.01" stroke={color} strokeWidth={sw + 0.5} strokeLinecap="round"/>
      </svg>
    )
    case 'production': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="17" width="20" height="4" rx="1" stroke={color} strokeWidth={sw}/>
        <rect x="4" y="11" width="16" height="4" rx="1" stroke={color} strokeWidth={sw}/>
        <rect x="6" y="5" width="12" height="4" rx="1" stroke={color} strokeWidth={sw}/>
      </svg>
    )
    case 'campaign': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <path d="M3 11V13h4l5 5V6l-5 5H3z" stroke={color} strokeWidth={sw} strokeLinejoin="round"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
      </svg>
    )
    case 'digital': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="1.5" stroke={color} strokeWidth={sw}/>
        <line x1="8" y1="21" x2="16" y2="21" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
        <line x1="12" y1="17" x2="12" y2="21" stroke={color} strokeWidth={sw}/>
        <line x1="6" y1="8" x2="9" y2="11" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
        <line x1="9" y1="8" x2="6" y2="11" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
        <line x1="13" y1="9.5" x2="17" y2="9.5" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
        <line x1="13" y1="12" x2="16" y2="12" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
      </svg>
    )
    // ── Pilares do hero ────────────────────────────────────────────────────────
    case 'marketing': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <polyline points="22,20 15,13 9,17 2,10" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="16,20 22,20 22,14" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
    case 'branding': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke={color} strokeWidth={sw} strokeLinejoin="round"/>
        <polygon points="12,7 17,10 17,14 12,17 7,14 7,10" stroke={color} strokeWidth={sw} strokeLinejoin="round"/>
      </svg>
    )
    case 'experience': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke={color} strokeWidth={sw}/>
        <polyline points="12,6 12,12 16,14" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="5" cy="12" r="1.5" fill={color}/>
        <circle cx="19" cy="12" r="1.5" fill={color}/>
      </svg>
    )
    case 'channels': return (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2" fill={color}/>
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
        <path d="M7.76 7.76a6 6 0 0 0 0 8.49" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14" stroke={color} strokeWidth={sw} strokeLinecap="round"/>
      </svg>
    )
    default: return null
  }
}

function CaseCard({ c, cover, gradient, onClick, fullWidth = false }: {
  c: CaseItem; cover: string | null; gradient: string; onClick: () => void; fullWidth?: boolean
}) {
  const [hov, setHov] = useState(false)
  const { isMobile } = useBreakpoint()
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
      style={{ cursor: 'pointer', overflow: 'hidden', backgroundColor: T.white, boxShadow: hov ? '0 8px 40px rgba(0,0,0,0.10)' : 'none', transition: 'box-shadow 0.22s', WebkitTapHighlightColor: 'transparent' }}>
      <div style={{ height: fullWidth ? '220px' : isMobile ? '240px' : '300px', position: 'relative', overflow: 'hidden', background: gradient }}>
        {cover && <img src={cover} alt={c.empresa} style={{ width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top',display:'block',transform: hov ? 'scale(1.05)' : 'scale(1)',transition:'transform 0.6s ease' }} />}
        <div style={{ position:'absolute',inset:0,background: cover ? 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.16) 55%, transparent 100%)' : 'linear-gradient(135deg,rgba(0,0,0,0.30) 0%,rgba(0,0,0,0) 100%)' }} />
        {/* ícone fantasma no fundo */}
        <div style={{ position:'absolute',top:'10px',left:'14px',opacity:0.12,pointerEvents:'none',userSelect:'none' }}>
          <CaseIcon id={c.id} size={68} color="white" />
        </div>
        {/* ícone de abertura */}
        <div style={{ position:'absolute',top:'16px',right:'16px',width:'36px',height:'36px',border:`1px solid rgba(255,255,255,${hov ? '0.80' : '0.45'})`,backgroundColor: hov ? 'rgba(255,255,255,0.14)' : 'rgba(0,0,0,0.18)',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 0.22s' }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><line x1="1" y1="11" x2="11" y2="1" stroke="white" strokeWidth="1.5"/><polyline points="5,1 11,1 11,7" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/></svg>
        </div>
        <div style={{ position:'absolute',bottom:'18px',left:'18px',right:'18px' }}>
          <p style={{ fontFamily:'Playfair Display, serif',fontSize: isMobile ? '18px' : '21px',fontWeight:600,color:'#fff',margin:'0 0 5px',lineHeight:1.2,letterSpacing:'-0.01em' }}>{c.empresa}</p>
          <p style={{ fontSize:'11px',fontWeight:300,color:'rgba(255,255,255,0.72)',margin:0,lineHeight:1.4 }}>{c.subtitulo}</p>
        </div>
      </div>
      {/* barra inferior */}
      <div style={{ padding:'14px 18px',backgroundColor: hov ? T.bg : T.white,borderTop:`2px solid ${hov ? c.cor : T.ruleLight}`,display:'flex',alignItems:'center',justifyContent:'space-between',minHeight:'52px',transition:'all 0.22s' }}>
        <div style={{ display:'flex',alignItems:'center',gap:'10px' }}>
          <CaseIcon id={c.id} size={16} color={c.cor} />
          <span style={{ width:'1px',height:'12px',backgroundColor:T.rule,flexShrink:0 }} />
          <span style={{ fontSize:'10px',fontWeight:300,color:T.inkLight }}>{c.periodo}</span>
        </div>
        <div style={{ display:'flex',alignItems:'center',gap:'6px' }}>
          <span style={{ fontSize:'9px',fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color: hov ? c.cor : T.inkLight,transition:'color 0.22s' }}>Ver case</span>
          <svg width="14" height="9" viewBox="0 0 14 9" fill="none" style={{ transition:'transform 0.22s',transform: hov ? 'translateX(3px)' : 'none' }}><line x1="0" y1="4.5" x2="11" y2="4.5" stroke={hov ? c.cor : T.inkLight} strokeWidth="1.5"/><polyline points="7,1 11,4.5 7,8" fill="none" stroke={hov ? c.cor : T.inkLight} strokeWidth="1.5" strokeLinejoin="round"/></svg>
        </div>
      </div>
    </div>
  )
}

function CaseGallery({ onOpen }: { onOpen: (id: number) => void }) {
  const { isMobile, isTablet } = useBreakpoint()
  const covers: (string | null)[] = [
    imgDiaVCapa,
    spdataVoce5,
    startupCapa,
    startupCapaNova,
  ]
  const gradients = [
    `linear-gradient(135deg, ${T.navy} 0%, #000050 100%)`,
    `linear-gradient(135deg, ${T.magenta} 0%, #7a0040 100%)`,
    `linear-gradient(135deg, #1a2a45 0%, #0d1a2e 100%)`,
    `linear-gradient(135deg, ${T.magenta} 0%, #7a0040 100%)`,
  ]
  const cols = isMobile ? '1fr' : isTablet ? '1fr 1fr' : '1fr 1fr'

  return (
    <div style={{ display: 'grid', gridTemplateColumns: cols, gap: '2px', borderTop: `1px solid ${T.rule}` }}>
      {cases.map((c, i) => (
        <CaseCard key={c.id} c={c} cover={covers[i]} gradient={gradients[i]} onClick={() => onOpen(i)} />
      ))}
    </div>
  )
}

// ─── METHODOLOGY FLOW ────────────────────────────────────────────────────────

const methodStepIcon: Record<string, SiteIconName> = {
  'Atendimento': 'attention', 'Produção': 'production',
  'Campanha': 'campaign', 'Gestão Digital': 'digital',
}

function MethodologyFlow({ steps, cor }: { steps: { label: string; desc: string }[]; cor: string }) {
  const { isMobile } = useBreakpoint()
  return (
    <div style={{ display:'flex',flexDirection: isMobile ? 'column' : 'row',position:'relative' }}>
      {!isMobile && <div style={{ position:'absolute',top:'19px',left:`${100/steps.length/2}%`,right:`${100/steps.length/2}%`,height:'1px',backgroundColor:T.ruleLight,zIndex:0 }} />}
      {steps.map((step, i) => {
        const iconName = methodStepIcon[step.label] ?? 'process'
        const active = i === 0
        return (
          <div key={i} style={{ flex:1,display:'flex',flexDirection: isMobile ? 'row' : 'column',alignItems: isMobile ? 'flex-start' : 'center',gap: isMobile ? '14px' : 0,padding: isMobile ? '14px 0' : '0 8px',borderBottom: isMobile && i<steps.length-1 ? `1px solid ${T.ruleLight}` : 'none',textAlign: isMobile ? 'left' : 'center',position:'relative',zIndex:1 }}>
            <div style={{ width:'40px',height:'40px',borderRadius:'50%',flexShrink:0,border:`1.5px solid ${active?cor:T.rule}`,backgroundColor: active?cor:T.white,display:'flex',alignItems:'center',justifyContent:'center',marginBottom: isMobile?0:'12px' }}>
              <SiteIcon name={iconName} size={18} color={active ? '#fff' : T.inkLight} />
            </div>
            <div>
              <p style={{ fontSize:'11px',fontWeight:600,color:T.ink,margin:'0 0 3px' }}>{step.label}</p>
              <p style={{ fontSize:'10px',fontWeight:300,color:T.inkLight,margin:0,lineHeight:1.55 }}>{step.desc}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ─── SPDATA GALLERY DATA ──────────────────────────────────────────────────────

type GalleryItem = { src: string; label: string; tag: string }

const arnaldoGallery: GalleryItem[] = [
  { src: arnaldoMatriculas2jpg, label: 'Campanha de Rematrícula 2017/18', tag: 'Captação' },
  { src: arnaldoMatriculas2png, label: 'Rematrícula — Variação',          tag: 'Captação' },
  { src: arnaldoMatriculas3,    label: 'Rematrícula — Arte 03',           tag: 'Captação' },
  { src: arnaldoMatriculas4,    label: 'Rematrícula — Arte 04',           tag: 'Captação' },
  { src: arnaldoMatriculas5,    label: 'Rematrícula — Arte 05',           tag: 'Captação' },
  { src: arnaldo50Anos1,        label: 'Campanha 50 Anos — Anchieta',     tag: 'Institucional' },
  { src: arnaldo50Anos2,        label: 'Campanha 50 Anos — Arte',         tag: 'Institucional' },
  { src: arnaldoCiencias1,      label: 'Ciências Naturais 2019',          tag: 'Evento' },
  { src: arnaldoCiencias3,      label: 'Ciências Naturais — Peça',        tag: 'Evento' },
]

const spdataGallery: GalleryItem[] = [
  { src: spdataVoce5, label: 'Juntos, Somos Melhores', tag: 'SPDATA&Você' },
  { src: spdataVoce1, label: 'SPDATA de Vantagens', tag: 'SPDATA&Você' },
  { src: spdataVoce2, label: 'Compromisso', tag: 'SPDATA&Você' },
  { src: spdataVoce4, label: 'Pesquisa de Clima 2021', tag: 'SPDATA&Você' },
  { src: spdataVoce8, label: 'Atitude', tag: 'SPDATA&Você' },
  { src: spdataCI2,  label: 'Boas-vindas — Novos Colaboradores', tag: 'Comunicação Interna' },
  { src: spdataCI1,  label: 'SPDATA Carreiras — Promoção', tag: 'Comunicação Interna' },
  { src: spdataCI6,  label: 'Aniversariantes do Dia', tag: 'Comunicação Interna' },
  { src: spdataCI4,  label: 'Palestra — Colaboração', tag: 'Comunicação Interna' },
  { src: spdataCI3,  label: 'Comunicado Interno', tag: 'Comunicação Interna' },
  { src: spdataCI5,  label: 'Certificação SBIS — SGH', tag: 'Comunicação Interna' },
  { src: spdataCracha2, label: 'Campanha Crachá — Identidade', tag: 'Campanha Interna' },
  { src: spdataCracha3, label: 'Campanha Crachá — RFID', tag: 'Campanha Interna' },
  { src: spdataRS1,  label: 'Dia da Ciência e Tecnologia', tag: 'Identidade Digital' },
]

// ─── PIECE CAROUSEL ───────────────────────────────────────────────────────────

function PieceCarousel({ items, cor }: { items: GalleryItem[]; cor: string }) {
  const [page, setPage] = useState(0)
  const [lightbox, setLightbox] = useState<string | null>(null)
  const { isMobile, isTablet } = useBreakpoint()
  const perPage = isMobile ? 1 : isTablet ? 2 : 3
  const pages = Math.ceil(items.length / perPage)

  const prev = () => setPage(p => Math.max(0, p - 1))
  const next = () => setPage(p => Math.min(pages - 1, p + 1))
  const visible = items.slice(page * perPage, (page + 1) * perPage)

  return (
    <div>
      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}

      {/* Grade de cards — contain para ver a peça inteira */}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${perPage}, 1fr)`, gap: '3px' }}>
        {visible.map((item, i) => (
          <div key={`${page}-${i}`} style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              onClick={() => setLightbox(item.src)}
              style={{ height: '300px', backgroundColor: T.white, border: `1px solid ${T.ruleLight}`, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-in', flexShrink: 0, position: 'relative', overflow: 'hidden' }}>
              <img src={item.src} alt={item.label}
                style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block', transition: 'transform 0.35s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              {/* ícone zoom */}
              <div style={{ position: 'absolute', bottom: '8px', right: '8px', width: '24px', height: '24px', backgroundColor: 'rgba(0,0,0,0.12)', borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="4" cy="4" r="3" stroke="white" strokeWidth="1.2"/><line x1="6.5" y1="6.5" x2="9" y2="9" stroke="white" strokeWidth="1.2"/></svg>
              </div>
            </div>
            <div style={{ padding: '9px 12px 11px', backgroundColor: T.bg, borderTop: `2px solid ${i === 0 ? cor : T.ruleLight}` }}>
              <p style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: cor, margin: '0 0 2px' }}>{item.tag}</p>
              <p style={{ fontSize: '11px', fontWeight: 400, color: T.ink, margin: 0, lineHeight: 1.35 }}>{item.label}</p>
            </div>
          </div>
        ))}
        {/* slots vazios na última página */}
        {Array.from({ length: perPage - visible.length }).map((_, i) => (
          <div key={`empty-${i}`} style={{ height: '300px', backgroundColor: T.bg, border: `1px solid ${T.ruleLight}` }} />
        ))}
      </div>

      {/* Controles */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0 4px', borderTop: `1px solid ${T.ruleLight}`, marginTop: '3px' }}>
        <span style={{ fontSize: '10px', fontWeight: 300, color: T.inkLight, letterSpacing: '0.04em' }}>
          {page * perPage + 1}–{Math.min((page + 1) * perPage, items.length)}&nbsp;
          <span style={{ color: T.ruleLight }}>/ {items.length}</span>
        </span>

        {/* dots */}
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
          {Array.from({ length: pages }).map((_, i) => (
            <button key={i} onClick={() => setPage(i)} style={{
              width: i === page ? '18px' : '6px', height: '6px', borderRadius: '3px',
              backgroundColor: i === page ? cor : T.rule, border: 'none', cursor: 'pointer',
              padding: 0, transition: 'all 0.25s',
            }} />
          ))}
        </div>

        {/* arrows */}
        <div style={{ display: 'flex', gap: '4px' }}>
          <button onClick={prev} disabled={page === 0} style={{
            width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: `1px solid ${page === 0 ? T.ruleLight : T.rule}`, backgroundColor: 'transparent',
            cursor: page === 0 ? 'default' : 'pointer', color: page === 0 ? T.ruleLight : T.inkMid,
            fontSize: '15px', fontFamily: 'Inter, sans-serif', transition: 'all 0.18s',
          }}>←</button>
          <button onClick={next} disabled={page === pages - 1} style={{
            width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: `1px solid ${page === pages - 1 ? T.ruleLight : cor}`,
            backgroundColor: page === pages - 1 ? 'transparent' : cor,
            cursor: page === pages - 1 ? 'default' : 'pointer',
            color: page === pages - 1 ? T.ruleLight : '#fff',
            fontSize: '15px', fontFamily: 'Inter, sans-serif', transition: 'all 0.18s',
          }}>→</button>
        </div>
      </div>
    </div>
  )
}

// ─── SIMPLE CASE DETAIL ──────────────────────────────────────────────────────

const caseMethodology: Record<number, { label: string; desc: string }[]> = {
  3: [
    { label: 'Atendimento', desc: 'Interface direta com professores, coordenadores e diretores das duas unidades' },
    { label: 'Produção', desc: 'Materiais gráficos, multimídia e digitais para campanhas e eventos' },
    { label: 'Campanha', desc: 'Rematrícula e captação com identidade visual consistente' },
    { label: 'Gestão Digital', desc: 'Redes sociais, site WordPress e relacionamento com fornecedores' },
  ],
}

// ─── SPDATA CASE DETAIL ───────────────────────────────────────────────────────

function SpdataCaseDetail({ onBack }: { onBack: () => void }) {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const c = cases[1]

  const voceImages = [
    { src: spdataVoce5, label: 'Juntos, Somos Melhores' },
    { src: spdataVoce1, label: 'SPDATA de Vantagens' },
    { src: spdataVoce2, label: 'Compromisso' },
    { src: spdataVoce4, label: 'Pesquisa de Clima' },
    { src: spdataVoce8, label: 'Atitude' },
  ]

  const crachaCampanha = [
    { src: spdataCracha2, label: 'Campanha Crachá — Identidade' },
    { src: spdataCracha3, label: 'Campanha Crachá — RFID' },
  ]

  return (
    <div style={{ backgroundColor: T.white }}>
      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}

      {/* Barra de retorno */}
      <div style={{ padding: '14px 28px', borderBottom: `1px solid ${T.ruleLight}`, display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: T.bg }}>
        <button onClick={onBack} style={{ display:'inline-flex',alignItems:'center',gap:'7px',background:'none',border:'none',padding:0,cursor:'pointer',fontSize:'10px',fontWeight:500,letterSpacing:'0.12em',textTransform:'uppercase',color:T.inkMid,fontFamily:'Inter, sans-serif',transition:'color 0.18s' }}
          onMouseEnter={e=>(e.currentTarget.style.color=T.magenta)} onMouseLeave={e=>(e.currentTarget.style.color=T.inkMid)}>
          ← Todos os cases
        </button>
        <span style={{ width:'1px',height:'10px',backgroundColor:T.rule }} />
        <span style={{ fontSize:'9px',fontWeight:400,letterSpacing:'0.14em',color:T.inkLight }}>SPDATA · Campanha SPDATA&Você</span>
      </div>

      {/* ── HERO ── */}
      <div style={{ position:'relative', overflow:'hidden', height:'360px', backgroundColor:'#1a0030' }}>
        <img src={spdataVoce5} alt="SPDATA&Você — Juntos, Somos Melhores"
          style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block', opacity:0.85 }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(120deg, rgba(180,0,90,0.65) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0) 100%)' }} />
        <div style={{ position:'absolute', inset:0, padding:'32px 36px', display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
          <div style={{ display:'flex',alignItems:'center',gap:'8px',margin:'0 0 10px' }}>
            <CaseIcon id={2} size={13} color="rgba(255,255,255,0.55)" />
            <span style={{ fontSize:'9px',fontWeight:700,letterSpacing:'0.26em',textTransform:'uppercase',color:'rgba(255,255,255,0.55)' }}>SPDATA · 2021–2022</span>
          </div>
          <h2 style={{ fontFamily:'Playfair Display, serif', fontSize:'clamp(20px,2.4vw,30px)', fontWeight:700, lineHeight:1.15, letterSpacing:'-0.02em', color:'#fff', margin:'0 0 12px', maxWidth:'480px' }}>
            Campanha SPDATA&Você
          </h2>
          <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
            <div style={{ width:'28px', height:'2px', backgroundColor:T.magenta }} />
            <p style={{ fontSize:'12px', fontWeight:300, color:'rgba(255,255,255,0.65)', margin:0 }}>
              Endomarketing · Cultura Organizacional · Comunicação Interna
            </p>
          </div>
        </div>
      </div>

      {/* ── VISÃO GERAL ── */}
      <div style={{ padding:'40px 36px 44px', borderBottom:`1px solid ${T.ruleLight}` }}>
        <h2 style={{ fontFamily:'Playfair Display, serif', fontSize:'clamp(22px,2.6vw,32px)', fontWeight:600, lineHeight:1.18, letterSpacing:'-0.02em', color:T.ink, margin:'0 0 16px' }}>
          SPDATA<br/>
          <span style={{ fontWeight:400, fontStyle:'italic' }}>Aproximando o time da cultura da empresa.</span>
        </h2>
        <p style={{ fontSize:'13px', fontWeight:300, lineHeight:1.82, color:T.inkMid, margin:'0 0 28px', maxWidth:'520px' }}>
          {c.contexto}
        </p>
        <div style={{ borderLeft:`2px solid ${T.ruleLight}`, paddingLeft:'16px', marginBottom:'32px', maxWidth:'480px' }}>
          <p style={{ fontSize:'12px', fontWeight:300, lineHeight:1.78, color:T.inkLight, margin:0 }}>
            {c.desafio}
          </p>
        </div>
        <div style={{ marginBottom:'36px' }}>
          <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:T.inkLight, margin:'0 0 12px' }}>Minha atuação</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
            {['Endomarketing', 'Comunicação Interna', 'Cultura Organizacional', 'Identidade Visual', 'Campanha', 'Eventos'].map(chip => (
              <span key={chip} style={{ fontSize:'11px', fontWeight:400, color:T.ink, padding:'5px 13px', border:`1px solid ${T.rule}`, whiteSpace:'nowrap' }}>{chip}</span>
            ))}
          </div>
        </div>
        <div style={{ display:'flex', alignItems:'flex-start', gap:'20px', paddingTop:'28px', borderTop:`1px solid ${T.ruleLight}` }}>
          <div>
            <p style={{ fontFamily:'Playfair Display, serif', fontSize:'44px', fontWeight:700, lineHeight:1, letterSpacing:'-0.04em', color:T.magenta, margin:'0 0 6px' }}>1</p>
            <p style={{ fontSize:'12px', fontWeight:300, lineHeight:1.65, color:T.inkMid, margin:'0 0 6px', maxWidth:'320px' }}>
              Campanha de endomarketing completa — do conceito às peças — reconhecida pela liderança.
            </p>
            <p style={{ fontSize:'10px', fontWeight:300, color:T.inkLight, margin:0 }}>Campanha SPDATA&Você · Comunicação interna · Pesquisa de clima</p>
          </div>
        </div>
      </div>

      {/* ── CAMPANHA SPDATA&VOCÊ ── */}
      <div style={{ backgroundColor:T.white, borderTop:`1px solid ${T.ruleLight}` }}>
        <div style={{ padding:'40px 36px 28px', display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:'20px' }}>
          <div>
            <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.26em', textTransform:'uppercase', color:T.inkLight, margin:'0 0 10px' }}>Campanha em destaque</p>
            <h3 style={{ fontFamily:'Playfair Display, serif', fontSize:'clamp(18px,2vw,24px)', fontWeight:600, lineHeight:1.25, letterSpacing:'-0.015em', color:T.ink, margin:'0 0 12px' }}>
              SPDATA&Você
            </h3>
            <p style={{ fontSize:'12px', fontWeight:300, lineHeight:1.78, color:T.inkMid, margin:0, maxWidth:'480px' }}>
              {c.estrategia}
            </p>
          </div>
          <span style={{ padding:'4px 12px', backgroundColor:T.magenta, color:'#fff', fontSize:'9px', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', flexShrink:0 }}>2021–2022</span>
        </div>

        {/* 5 peças SPDATA&Você */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:'3px', marginBottom:'3px' }}>
          {voceImages.map(item => (
            <div key={item.label} onClick={() => setLightbox(item.src)}
              style={{ position:'relative', overflow:'hidden', aspectRatio:'1/1', cursor:'zoom-in', backgroundColor:'#f4f4f4' }}>
              <img src={item.src} alt={item.label}
                style={{ width:'100%', height:'100%', objectFit:'contain', objectPosition:'center', display:'block', transition:'transform 0.45s ease' }}
                onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.05)')}
                onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)' }} />
              <div style={{ position:'absolute', bottom:'8px', left:'10px', right:'8px' }}>
                <p style={{ fontSize:'8px', fontWeight:300, color:'rgba(255,255,255,0.85)', margin:0 }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding:'10px 20px', backgroundColor:T.bg, borderTop:`1px solid ${T.ruleLight}`, display:'flex', alignItems:'baseline', gap:'12px' }}>
          <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:T.magenta, margin:0 }}>SPDATA&Você</p>
          <span style={{ width:'1px', height:'10px', backgroundColor:T.rule, display:'inline-block' }} />
          <p style={{ fontSize:'10px', fontWeight:300, color:T.inkLight, margin:0 }}>Campanha de endomarketing · identidade visual, conteúdo e distribuição interna</p>
        </div>
      </div>

      {/* ── CAMPANHA CRACHÁ ── */}
      <div style={{ borderTop:`1px solid ${T.rule}`, backgroundColor:T.white }}>
        <div style={{ padding:'36px 36px 24px' }}>
          <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.26em', textTransform:'uppercase', color:T.inkLight, margin:'0 0 10px' }}>Ação interna em destaque</p>
          <h3 style={{ fontFamily:'Playfair Display, serif', fontSize:'clamp(16px,1.8vw,22px)', fontWeight:600, lineHeight:1.25, letterSpacing:'-0.015em', color:T.ink, margin:'0 0 10px' }}>
            Campanha do Crachá
          </h3>
          <p style={{ fontSize:'12px', fontWeight:300, lineHeight:1.75, color:T.inkMid, margin:0, maxWidth:'480px' }}>
            Ação de comunicação interna para adesão ao novo crachá de acesso por RFID. Visual consistente com a linha de endomarketing, linguagem direta e orientada a ação.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3px' }}>
          {crachaCampanha.map(item => (
            <div key={item.label} onClick={() => setLightbox(item.src)}
              style={{ position:'relative', overflow:'hidden', aspectRatio:'4/3', cursor:'zoom-in', backgroundColor:'#f0f0f0' }}>
              <img src={item.src} alt={item.label}
                style={{ width:'100%', height:'100%', objectFit:'contain', objectPosition:'center', display:'block', transition:'transform 0.45s ease' }}
                onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.04)')}
                onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 55%)' }} />
              <div style={{ position:'absolute', bottom:'10px', left:'12px', right:'8px' }}>
                <p style={{ fontSize:'9px', fontWeight:300, color:'rgba(255,255,255,0.85)', margin:0 }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding:'10px 20px', backgroundColor:T.bg, borderTop:`1px solid ${T.ruleLight}` }}>
          <p style={{ fontSize:'10px', fontWeight:300, color:T.inkLight, margin:0 }}>Ação de adesão ao novo sistema de crachá RFID · peças de comunicação interna</p>
        </div>
      </div>

      {/* ── BRANDING DIGITAL & PRODUTOS ── */}
      <div style={{ borderTop:`1px solid ${T.rule}`, backgroundColor:T.white }}>
        <div style={{ padding:'40px 36px 28px' }}>
          <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.26em', textTransform:'uppercase', color:T.inkLight, margin:'0 0 14px' }}>Branding Digital & Produtos</p>
          <h3 style={{ fontFamily:'Playfair Display, serif', fontSize:'clamp(18px,2vw,24px)', fontWeight:600, lineHeight:1.25, letterSpacing:'-0.015em', color:T.ink, margin:'0 0 12px' }}>
            Traduzindo tecnologia médica pra gente de verdade.
          </h3>
          <p style={{ fontSize:'12px', fontWeight:300, lineHeight:1.78, color:T.inkMid, margin:'0 0 24px', maxWidth:'480px' }}>
            Dois produtos, dois públicos, duas identidades visuais. Padronizei a presença digital das linhas SPDATA e Minha Clínica com linguagem diferenciada por público — paleta fria/tech para B2B hospitalar, paleta quente/humanizada para clínicas menores.
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2px', marginBottom:'28px' }}>
            <div style={{ padding:'18px', borderTop:`3px solid ${T.navy}`, backgroundColor:T.bg }}>
              <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:T.navy, margin:'0 0 6px' }}>SPDATA</p>
              <p style={{ fontSize:'11px', fontWeight:400, color:T.ink, margin:'0 0 4px' }}>Hospitais & Clínicas · B2B</p>
              <p style={{ fontSize:'11px', fontWeight:300, color:T.inkLight, margin:0, lineHeight:1.55 }}>Paleta fria, tech. Comunicação técnica e institucional.</p>
            </div>
            <div style={{ padding:'18px', borderTop:`3px solid ${T.magenta}`, backgroundColor:T.bg }}>
              <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.16em', textTransform:'uppercase', color:T.magenta, margin:'0 0 6px' }}>Minha Clínica</p>
              <p style={{ fontSize:'11px', fontWeight:400, color:T.ink, margin:'0 0 4px' }}>Clínicas menores · B2B</p>
              <p style={{ fontSize:'11px', fontWeight:300, color:T.inkLight, margin:0, lineHeight:1.55 }}>Paleta quente, humanizada. Linguagem acessível.</p>
            </div>
          </div>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'3px', marginBottom:'3px' }}>
          {[spdataCI1, spdataCI6, spdataCI4, spdataCI3].map((src, i) => (
            <div key={i} onClick={() => setLightbox(src)}
              style={{ position:'relative', overflow:'hidden', aspectRatio:'1/1', cursor:'zoom-in', backgroundColor:'#f0f0f0' }}>
              <img src={src} alt=""
                style={{ width:'100%', height:'100%', objectFit:'contain', objectPosition:'center', display:'block', transition:'transform 0.55s ease' }}
                onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.06)')}
                onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')} />
            </div>
          ))}
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'3px' }}>
          {[spdataCI5, spdataCI2, spdataRS1, spdataCracha3].map((src, i) => (
            <div key={i} onClick={() => setLightbox(src)}
              style={{ position:'relative', overflow:'hidden', aspectRatio:'1/1', cursor:'zoom-in', backgroundColor:'#f0f0f0' }}>
              <img src={src} alt=""
                style={{ width:'100%', height:'100%', objectFit:'contain', objectPosition:'center', display:'block', transition:'transform 0.55s ease' }}
                onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.06)')}
                onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')} />
            </div>
          ))}
        </div>
        <div style={{ padding:'10px 20px', backgroundColor:T.bg, borderTop:`1px solid ${T.ruleLight}`, display:'flex', alignItems:'baseline', gap:'12px' }}>
          <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:T.navy, margin:0 }}>Identidade Digital</p>
          <span style={{ width:'1px', height:'10px', backgroundColor:T.rule, display:'inline-block' }} />
          <p style={{ fontSize:'10px', fontWeight:300, color:T.inkLight, margin:0 }}>Redes sociais, comunicação de produto e site institucional</p>
        </div>
      </div>

      {/* ── RESULTADOS ── */}
      <div style={{ borderTop:`1px solid ${T.rule}`, backgroundColor:T.white }}>
        <div style={{ padding:'40px 36px 36px' }}>
          <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.26em', textTransform:'uppercase', color:T.inkLight, margin:'0 0 14px' }}>Resultados</p>
          <h3 style={{ fontFamily:'Playfair Display, serif', fontSize:'clamp(18px,2vw,24px)', fontWeight:600, lineHeight:1.25, letterSpacing:'-0.015em', color:T.ink, margin:'0 0 28px' }}>
            Cultura, pessoas e marca alinhadas.
          </h3>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2px', margin:'0 0 28px' }}>
            {[
              { label:'Campanha de endomarketing', desc:'Conceito, identidade e execução da campanha SPDATA&Você — elogiada pelo CEO.', cor:T.magenta },
              { label:'Identidade visual por produto', desc:'Linguagem diferenciada para SPDATA hospitalar e Minha Clínica, com consistência entre canais.', cor:T.ruleLight },
            ].map((s,i) => (
              <div key={i} style={{ padding:'22px 20px', borderTop:`3px solid ${s.cor}`, backgroundColor:T.bg }}>
                <p style={{ fontSize:'12px', fontWeight:600, color:T.ink, margin:'0 0 6px' }}>{s.label}</p>
                <p style={{ fontSize:'11px', fontWeight:300, color:T.inkMid, margin:0, lineHeight:1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ padding:'16px 20px', backgroundColor:T.bg, borderLeft:`2px solid ${T.magenta}` }}>
            <p style={{ fontSize:'12px', fontWeight:400, fontStyle:'italic', lineHeight:1.72, color:T.inkMid, margin:0 }}>
              {c.resultadoTexto}
            </p>
          </div>
        </div>
      </div>

      {/* ── NARRATIVA ── */}
      {cases[1].narrativa && <NarrativaBlock texto={cases[1].narrativa} cor={T.magenta} cargo="Analista de Comunicação e Marketing — SPDATA" />}

      {/* ── NAVEGAÇÃO ── */}
      <div style={{ padding:'20px 36px', backgroundColor:T.white, borderTop:`1px solid ${T.rule}` }}>
        <button onClick={onBack} style={{ display:'inline-flex',alignItems:'center',gap:'8px',padding:'9px 20px',background:'none',border:`1px solid ${T.rule}`,color:T.inkMid,fontSize:'11px',cursor:'pointer',fontFamily:'Inter, sans-serif',letterSpacing:'0.06em',textTransform:'uppercase',transition:'all 0.18s' }}
          onMouseEnter={e=>{e.currentTarget.style.borderColor=T.magenta;e.currentTarget.style.color=T.magenta}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor=T.rule;e.currentTarget.style.color=T.inkMid}}>
          ← Todos os cases
        </button>
      </div>
    </div>
  )
}

// ─── STARTUP CASE DETAIL (move.e) ────────────────────────────────────────────

function StartupCaseDetail({ onBack }: { onBack: () => void }) {
  const [lightbox, setLightbox] = useState<string | null>(null)
  const c = cases[2]
  const { isMobile } = useBreakpoint()

  const docs = [
    { title: 'One-Page Institucional', desc: 'Síntese do posicionamento, proposta de valor e diferenciais competitivos da move.e.', tag: 'Posicionamento', pdf: pdfOnePage },
    { title: 'Sumário Executivo', desc: 'Documento estratégico com conceito, arquitetura de mensagens e narrativa para stakeholders.', tag: 'Estratégia', pdf: pdfSumario },
  ]

  return (
    <div style={{ backgroundColor: T.white }}>
      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}

      {/* Barra de retorno */}
      <div style={{ padding: '14px 28px', borderBottom: `1px solid ${T.ruleLight}`, display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: T.bg }}>
        <button onClick={onBack} style={{ display:'inline-flex',alignItems:'center',gap:'7px',background:'none',border:'none',padding:0,cursor:'pointer',fontSize:'10px',fontWeight:500,letterSpacing:'0.12em',textTransform:'uppercase',color:T.inkMid,fontFamily:'Inter, sans-serif',transition:'color 0.18s' }}
          onMouseEnter={e=>(e.currentTarget.style.color=T.navy)} onMouseLeave={e=>(e.currentTarget.style.color=T.inkMid)}>
          ← Todos os cases
        </button>
        <span style={{ width:'1px',height:'10px',backgroundColor:T.rule }} />
        <span style={{ fontSize:'9px',fontWeight:400,letterSpacing:'0.14em',color:T.inkLight }}>Consultoria Estratégica · move.e</span>
      </div>

      {/* ── HERO ── */}
      <div style={{ position:'relative', overflow:'hidden', height: isMobile ? '280px' : '380px', backgroundColor:'#0a0a0a' }}>
        <img src={startupAcao} alt="move.e — Expo Favela 2025"
          style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 35%', display:'block', opacity:0.88 }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(120deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.30) 50%, rgba(0,0,0,0) 100%)' }} />
        <div style={{ position:'absolute', inset:0, padding: isMobile ? '24px 20px' : '32px 36px', display:'flex', flexDirection:'column', justifyContent:'flex-end' }}>
          <div style={{ display:'flex',alignItems:'center',gap:'8px',margin:'0 0 10px' }}>
            <CaseIcon id={3} size={13} color="rgba(255,255,255,0.55)" />
            <span style={{ fontSize:'9px',fontWeight:700,letterSpacing:'0.26em',textTransform:'uppercase',color:'rgba(255,255,255,0.55)' }}>Freelance de Marketing, Branding e Conteúdo · 2024–2025</span>
          </div>
          <h2 style={{ fontFamily:'Playfair Display, serif', fontSize:'clamp(22px,2.6vw,34px)', fontWeight:700, lineHeight:1.15, letterSpacing:'-0.02em', color:'#fff', margin:'0 0 12px', maxWidth:'520px' }}>
            move.e
          </h2>
          <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
            <div style={{ width:'28px', height:'2px', backgroundColor:T.yellow }} />
            <p style={{ fontSize:'12px', fontWeight:300, color:'rgba(255,255,255,0.65)', margin:0 }}>
              Posicionamento · Narrativa Institucional · Comunicação para Stakeholders
            </p>
          </div>
        </div>
      </div>

      {/* ── VISÃO GERAL ── */}
      <div style={{ padding: isMobile ? '32px 20px 36px' : '40px 36px 44px', borderBottom:`1px solid ${T.ruleLight}` }}>
        <h2 style={{ fontFamily:'Playfair Display, serif', fontSize:'clamp(20px,2.4vw,30px)', fontWeight:600, lineHeight:1.18, letterSpacing:'-0.02em', color:T.ink, margin:'0 0 16px' }}>
          Consultoria Estratégica<br/>
          <span style={{ fontWeight:400, fontStyle:'italic' }}>Startup de Tecnologia — Gestão ASG</span>
        </h2>
        <p style={{ fontSize:'13px', fontWeight:300, lineHeight:1.82, color:T.inkMid, margin:'0 0 24px', maxWidth:'520px' }}>
          {c.contexto}
        </p>
        <div style={{ borderLeft:`2px solid ${T.ruleLight}`, paddingLeft:'16px', marginBottom:'32px', maxWidth:'480px' }}>
          <p style={{ fontSize:'12px', fontWeight:300, lineHeight:1.78, color:T.inkLight, margin:0 }}>
            {c.desafio}
          </p>
        </div>
        <div style={{ marginBottom:'36px' }}>
          <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.22em', textTransform:'uppercase', color:T.inkLight, margin:'0 0 12px' }}>Minha atuação</p>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
            {['Posicionamento de Marca', 'Arquitetura de Mensagens', 'Narrativa Institucional', 'Comunicação com Stakeholders', 'ESG', 'Consultoria'].map(chip => (
              <span key={chip} style={{ fontSize:'11px', fontWeight:400, color:T.ink, padding:'5px 13px', border:`1px solid ${T.rule}`, whiteSpace:'nowrap' }}>{chip}</span>
            ))}
          </div>
        </div>
        <div style={{ paddingTop:'28px', borderTop:`1px solid ${T.ruleLight}` }}>
          <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
            {['Posicionamento de marca', 'Arquitetura de mensagens por público', 'Materiais institucionais', 'Narrativa para stakeholders'].map(tag => (
              <span key={tag} style={{ fontSize:'11px', fontWeight:400, color:T.inkMid, padding:'5px 13px', border:`1px solid ${T.rule}` }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── ATUAÇÃO — fotos da Expo ── */}
      <div style={{ backgroundColor:T.white, borderTop:`1px solid ${T.ruleLight}` }}>
        <div style={{ padding: isMobile ? '32px 20px 20px' : '40px 36px 24px' }}>
          <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.26em', textTransform:'uppercase', color:T.inkLight, margin:'0 0 14px' }}>Atuação integrada</p>
          <h3 style={{ fontFamily:'Playfair Display, serif', fontSize:'clamp(17px,1.8vw,22px)', fontWeight:600, lineHeight:1.25, letterSpacing:'-0.015em', color:T.ink, margin:'0 0 10px' }}>
            Cobertura da Expo Favela 2025.
          </h3>
          <p style={{ fontSize:'12px', fontWeight:300, lineHeight:1.78, color:T.inkMid, margin:0, maxWidth:'480px' }}>
            {c.execucao}
          </p>
        </div>

        {/* Duas fotos lado a lado */}
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap:'3px' }}>
          {[
            { src: startupCapa,  label: 'Equipe move.e — Estande Expo Favela 2025', pos: 'center 20%' },
            { src: startupAcao,  label: 'Ação no estande — atendimento a visitantes',  pos: 'center 15%' },
          ].map(item => (
            <div key={item.label} onClick={() => setLightbox(item.src)}
              style={{ position:'relative', overflow:'hidden', aspectRatio: isMobile ? '4/3' : '3/2', cursor:'zoom-in', backgroundColor:'#111' }}>
              <img src={item.src} alt={item.label}
                style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition: item.pos, display:'block', transition:'transform 0.55s ease' }}
                onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.04)')}
                onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)' }} />
              <div style={{ position:'absolute', bottom:'14px', left:'16px', right:'12px' }}>
                <p style={{ fontSize:'10px', fontWeight:300, color:'rgba(255,255,255,0.80)', margin:0, lineHeight:1.4 }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding:'10px 20px', backgroundColor:T.bg, borderTop:`1px solid ${T.ruleLight}`, display:'flex', alignItems:'baseline', gap:'12px' }}>
          <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:T.navy, margin:0 }}>Expo Favela 2025</p>
          <span style={{ width:'1px', height:'10px', backgroundColor:T.rule, display:'inline-block' }} />
          <p style={{ fontSize:'10px', fontWeight:300, color:T.inkLight, margin:0 }}>São Paulo · Cobertura e representação institucional da move.e</p>
        </div>

        {/* ── REELS INSTAGRAM ── */}
        <div style={{ padding: isMobile ? '28px 20px 20px' : '36px 36px 24px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'20px' }}>
            <div style={{ width:'16px', height:'1px', backgroundColor:T.navy }} />
            <span style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.20em', textTransform:'uppercase', color:T.navy }}>Conteúdo audiovisual · Instagram Reels</span>
            <div style={{ flex:1, height:'1px', backgroundColor:T.ruleLight }} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap:'10px' }}>
            {[
              { id:'DNf0ROqx1gI', label:'Reel 01' },
              { id:'DMQs6XsxXvu', label:'Reel 02' },
              { id:'DMiGuykRYfD', label:'Reel 03' },
              { id:'DMTnJ-2x-Fq', label:'Reel 04' },
            ].map(reel => (
              <div key={reel.id} style={{ position:'relative', aspectRatio:'9/16', overflow:'hidden', backgroundColor:'#111' }}>
                <iframe
                  src={`https://www.instagram.com/p/${reel.id}/embed/`}
                  style={{ width:'100%', height:'100%', border:'none', display:'block' }}
                  allowFullScreen
                  scrolling="no"
                  title={`move.e — ${reel.label}`}
                />
              </div>
            ))}
          </div>
          <div style={{ marginTop:'10px', padding:'10px 16px', backgroundColor:T.bg, borderLeft:`2px solid ${T.ruleLight}` }}>
            <p style={{ fontSize:'10px', fontWeight:300, color:T.inkLight, margin:0, lineHeight:1.6 }}>
              Reels produzidos para o Instagram da move.e durante a Expo Favela 2025 — cobertura, bastidores e narrativa institucional.
            </p>
          </div>
        </div>
      </div>

      {/* ── MATERIAIS ESTRATÉGICOS ── */}
      <div style={{ borderTop:`1px solid ${T.rule}`, backgroundColor:T.white }}>
        <div style={{ padding: isMobile ? '32px 20px 24px' : '36px 36px 24px' }}>
          <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.26em', textTransform:'uppercase', color:T.inkLight, margin:'0 0 10px' }}>Materiais estratégicos</p>
          <p style={{ fontSize:'12px', fontWeight:300, lineHeight:1.75, color:T.inkMid, margin:0, maxWidth:'480px' }}>
            Documentos institucionais desenvolvidos para posicionamento da marca e relacionamento com investidores, clientes e parceiros.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap:'3px', margin: isMobile ? '0 20px 32px' : '0 36px 36px' }}>
          {docs.map(doc => (
            <div key={doc.title} style={{ backgroundColor:T.bg, borderTop:`2px solid ${T.navy}`, display:'flex', flexDirection:'column', overflow:'hidden' }}>
              {/* Preview do PDF */}
              <div style={{ position:'relative', width:'100%', height: isMobile ? '280px' : '360px', overflow:'hidden', backgroundColor:'#e8e8e6' }}>
                <iframe
                  src={`${doc.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  style={{ width:'100%', height:'100%', border:'none', display:'block' }}
                  title={doc.title}
                />
              </div>
              {/* Info + botão */}
              <div style={{ padding:'20px 22px', display:'flex', flexDirection:'column', gap:'10px' }}>
                <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                  <svg width="16" height="20" viewBox="0 0 18 22" fill="none">
                    <rect x="1" y="1" width="12" height="20" rx="1" stroke={T.navy} strokeWidth="1.2"/>
                    <path d="M13 1l4 4v16H5" stroke={T.navy} strokeWidth="1.2"/>
                    <line x1="4" y1="8" x2="10" y2="8" stroke={T.navy} strokeWidth="1"/>
                    <line x1="4" y1="11" x2="10" y2="11" stroke={T.navy} strokeWidth="1"/>
                    <line x1="4" y1="14" x2="8" y2="14" stroke={T.navy} strokeWidth="1"/>
                  </svg>
                  <div>
                    <p style={{ fontSize:'8px', fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:T.navy, margin:'0 0 1px' }}>{doc.tag}</p>
                    <p style={{ fontSize:'13px', fontWeight:600, color:T.ink, margin:0 }}>{doc.title}</p>
                  </div>
                </div>
                <p style={{ fontSize:'11px', fontWeight:300, lineHeight:1.70, color:T.inkMid, margin:0 }}>{doc.desc}</p>
                <a href={doc.pdf} target="_blank" rel="noopener noreferrer"
                  style={{ display:'inline-flex', alignItems:'center', gap:'7px', padding:'8px 16px', backgroundColor:T.navy, color:'#fff', fontSize:'10px', fontWeight:600, letterSpacing:'0.10em', textTransform:'uppercase', textDecoration:'none', alignSelf:'flex-start', transition:'background-color 0.18s' }}
                  onMouseEnter={e=>(e.currentTarget.style.backgroundColor=T.magenta)}
                  onMouseLeave={e=>(e.currentTarget.style.backgroundColor=T.navy)}>
                  Abrir PDF
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><line x1="1" y1="9" x2="9" y2="1" stroke="currentColor" strokeWidth="1.5"/><polyline points="4,1 9,1 9,6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RESULTADOS ── */}
      <div style={{ borderTop:`1px solid ${T.rule}`, backgroundColor:T.white }}>
        <div style={{ padding: isMobile ? '32px 20px 36px' : '40px 36px 40px' }}>
          <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.26em', textTransform:'uppercase', color:T.inkLight, margin:'0 0 14px' }}>Resultados</p>
          <h3 style={{ fontFamily:'Playfair Display, serif', fontSize:'clamp(17px,1.8vw,22px)', fontWeight:600, lineHeight:1.25, letterSpacing:'-0.015em', color:T.ink, margin:'0 0 24px' }}>
            Posicionamento estruturado, narrativa pronta para o mercado.
          </h3>
          <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap:'2px', marginBottom:'28px' }}>
            {[
              { label:'Mensagens por público', desc:'Investidores, clientes corporativos e parceiros — cada um com narrativa e materiais específicos.', cor:T.navy },
              { label:'Entregáveis estratégicos', desc:c.resultadoTexto, cor:T.ruleLight },
            ].map((s,i) => (
              <div key={i} style={{ padding:'22px 20px', backgroundColor:T.bg, borderTop:`3px solid ${s.cor}` }}>
                <p style={{ fontSize:'12px', fontWeight:600, color:T.ink, margin:'0 0 8px' }}>{s.label}</p>
                <p style={{ fontSize:'11px', fontWeight:300, color:T.inkMid, margin:0, lineHeight:1.72 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── NAVEGAÇÃO ── */}
      {/* ── RELATÓRIO ESG ── */}
      <div style={{ borderTop:`1px solid ${T.rule}`, backgroundColor:'#060f08' }}>
        <div style={{ padding: isMobile ? '32px 20px 28px' : '40px 36px 28px' }}>
          <p style={{ fontSize:'9px', fontWeight:700, letterSpacing:'0.26em', textTransform:'uppercase', color:'rgba(100,200,120,0.65)', margin:'0 0 14px' }}>Dentro do projeto · Relatório de Sustentabilidade</p>
          <h3 style={{ fontFamily:'Playfair Display, serif', fontSize:'clamp(17px,1.8vw,22px)', fontWeight:600, lineHeight:1.25, letterSpacing:'-0.015em', color:'#fff', margin:'0 0 12px' }}>
            Economia Circular Fotovoltaica & ESG
          </h3>
          <p style={{ fontSize:'12px', fontWeight:300, lineHeight:1.78, color:'rgba(255,255,255,0.60)', margin:'0 0 28px', maxWidth:'480px' }}>
            Transformei dados densos de sustentabilidade, legislação e regionalização em um material visual simples de ler — com rigor técnico, clareza executiva e proteção das informações sensíveis do cliente do setor de energia.
          </p>
          <div style={{ display:'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap:'2px', marginBottom:'24px' }}>
            {[
              { val:'5', label:'Regiões do Brasil mapeadas', color:'#2d6e40' },
              { val:'17', label:'ODSs referenciados', color:'#1a4a28' },
              { val:'1', label:'Relatório executivo estruturado', color:'#2d6e40' },
            ].map((s, i) => (
              <div key={i} style={{ padding:'20px', borderTop:`3px solid ${s.color}`, backgroundColor:'rgba(255,255,255,0.04)' }}>
                <p style={{ fontFamily:'Playfair Display, serif', fontSize:'40px', fontWeight:700, lineHeight:1, letterSpacing:'-0.04em', color:'rgba(100,200,120,0.90)', margin:'0 0 6px' }}>{s.val}</p>
                <p style={{ fontSize:'11px', fontWeight:300, color:'rgba(255,255,255,0.55)', margin:0, lineHeight:1.5 }}>{s.label}</p>
              </div>
            ))}
          </div>
          <div style={{ padding:'14px 18px', borderLeft:'2px solid #2d6e40', backgroundColor:'rgba(255,255,255,0.04)' }}>
            <p style={{ fontSize:'11px', fontWeight:300, lineHeight:1.75, color:'rgba(255,255,255,0.55)', margin:0 }}>
              Material estratégico entregue com clareza visual, rigor técnico e proteção das informações sensíveis do cliente.
            </p>
          </div>
        </div>
      </div>

      {/* ── NAVEGAÇÃO ── */}
      <div style={{ padding:'20px 36px', backgroundColor:T.bg, borderTop:`1px solid ${T.rule}` }}>
        <button onClick={onBack} style={{ display:'inline-flex',alignItems:'center',gap:'8px',padding:'9px 20px',background:'none',border:`1px solid ${T.rule}`,color:T.inkMid,fontSize:'11px',cursor:'pointer',fontFamily:'Inter, sans-serif',letterSpacing:'0.06em',textTransform:'uppercase',transition:'all 0.18s' }}
          onMouseEnter={e=>{e.currentTarget.style.borderColor=T.navy;e.currentTarget.style.color=T.navy}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor=T.rule;e.currentTarget.style.color=T.inkMid}}>
          ← Todos os cases
        </button>
      </div>
    </div>
  )
}

function SimpleCaseDetail({ caseIndex, onBack }: { caseIndex: number; onBack: () => void }) {
  const c = cases[caseIndex]
  const { isMobile } = useBreakpoint()
  const steps = caseMethodology[caseIndex] || []

  return (
    <div style={{ backgroundColor: T.white }}>
      {/* Barra de retorno */}
      <div style={{ padding:'14px 28px',borderBottom:`1px solid ${T.ruleLight}`,display:'flex',alignItems:'center',gap:'12px',backgroundColor:T.bg }}>
        <button onClick={onBack} style={{ display:'inline-flex',alignItems:'center',gap:'7px',background:'none',border:'none',padding:0,cursor:'pointer',fontSize:'10px',fontWeight:500,letterSpacing:'0.12em',textTransform:'uppercase',color:T.inkMid,fontFamily:'Inter, sans-serif',transition:'color 0.18s' }}
          onMouseEnter={e=>(e.currentTarget.style.color=T.navy)} onMouseLeave={e=>(e.currentTarget.style.color=T.inkMid)}>
          ← Todos os cases
        </button>
        <span style={{ width:'1px',height:'10px',backgroundColor:T.rule }} />
        <span style={{ fontSize:'9px',fontWeight:400,letterSpacing:'0.14em',color:T.inkLight }}>{c.empresa}</span>
      </div>

      {/* Capa — imagem hero quando disponível */}
      {c.imagens.length > 0 && (
        <div style={{ position:'relative',overflow:'hidden',height: isMobile?'260px':'360px',backgroundColor:'#0a1a2a' }}>
          <img src={c.imagens[0]} alt={c.empresa}
            style={{ width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top',display:'block' }} />
          <div style={{ position:'absolute',inset:0,background:'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.10) 55%, rgba(0,0,0,0) 100%)' }} />
          <div style={{ position:'absolute',bottom:'24px',left: isMobile?'20px':'36px',display:'flex',gap:'8px',flexWrap:'wrap' }}>
            <span style={{ padding:'4px 14px',backgroundColor:c.cor,color:'#fff',fontSize:'10px',fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase' }}>{c.empresa}</span>
            <span style={{ padding:'4px 14px',backgroundColor:'rgba(0,0,0,0.35)',color:'rgba(255,255,255,0.75)',fontSize:'10px',backdropFilter:'blur(6px)' }}>{c.periodo}</span>
          </div>
          {!isMobile && <span style={{ position:'absolute',top:'20px',right:'28px',fontFamily:'Playfair Display, serif',fontSize:'96px',fontWeight:700,color:'rgba(255,255,255,0.07)',lineHeight:1,letterSpacing:'-0.04em',userSelect:'none' }}>{c.num}</span>}
        </div>
      )}

      {/* Hero — texto */}
      <div style={{ padding: isMobile?'32px 20px 28px':'40px 36px 36px',borderBottom:`1px solid ${T.ruleLight}`,position:'relative',overflow:'hidden',backgroundColor:T.bg }}>
        {c.imagens.length === 0 && <div style={{ position:'absolute',inset:0,backgroundImage:`linear-gradient(${T.ruleLight} 1px,transparent 1px),linear-gradient(90deg,${T.ruleLight} 1px,transparent 1px)`,backgroundSize:'40px 40px',opacity:0.35,pointerEvents:'none' }} />}
        <div style={{ position:'relative',display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:'20px',flexWrap:'wrap' }}>
          <div style={{ flex:1,minWidth:'260px' }}>
            {c.imagens.length === 0 && (
              <div style={{ display:'flex',gap:'8px',marginBottom:'16px',flexWrap:'wrap' }}>
                <span style={{ padding:'4px 14px',backgroundColor:c.cor,color:'#fff',fontSize:'10px',fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase' }}>{c.empresa}</span>
                <span style={{ padding:'4px 14px',border:`1px solid ${T.rule}`,color:T.inkMid,fontSize:'10px',backgroundColor:T.white }}>{c.periodo}</span>
              </div>
            )}
            <h2 style={{ fontFamily:'Playfair Display, serif',fontSize:'clamp(20px,2.4vw,30px)',fontWeight:700,lineHeight:1.2,letterSpacing:'-0.02em',margin:'0 0 14px',color:T.ink }}>{c.subtitulo}</h2>
            <p style={{ fontSize:'13px',fontWeight:300,lineHeight:1.82,color:T.inkMid,margin:0,maxWidth:'520px' }}>{c.contexto}</p>
          </div>
          {!isMobile && <div style={{ opacity:0.12,flexShrink:0 }}><CaseIcon id={c.id} size={80} color={c.cor} /></div>}
        </div>
      </div>

      {/* Metodologia aplicada */}
      <div style={{ padding: isMobile?'28px 20px':'32px 36px',backgroundColor:T.white,borderBottom:`1px solid ${T.ruleLight}` }}>
        <p style={{ fontSize:'9px',fontWeight:700,letterSpacing:'0.22em',textTransform:'uppercase',color:T.inkLight,margin:'0 0 24px' }}>Metodologia aplicada</p>
        <MethodologyFlow steps={steps} cor={c.cor} />
      </div>

      {/* Desafio + Estratégia + Execução */}
      <div style={{ display:'grid',gridTemplateColumns: isMobile?'1fr':'1fr 1fr',gap:0,borderBottom:`1px solid ${T.ruleLight}` }}>
        <div style={{ padding: isMobile?'28px 20px':'32px 28px 32px 36px',borderRight: isMobile?'none':`1px solid ${T.ruleLight}`,borderBottom: isMobile?`1px solid ${T.ruleLight}`:'none' }}>
          <CaseBlock label="Desafio" cor={c.cor}><p style={{ fontSize:'13px',fontWeight:300,lineHeight:1.82,color:T.inkMid,margin:0 }}>{c.desafio}</p></CaseBlock>
          <CaseBlock label="Estratégia" cor={c.cor}><p style={{ fontSize:'13px',fontWeight:300,lineHeight:1.82,color:T.inkMid,margin:0 }}>{c.estrategia}</p></CaseBlock>
        </div>
        <div style={{ padding: isMobile?'28px 20px':'32px 36px 32px 28px' }}>
          <CaseBlock label="Execução" cor={c.cor}><p style={{ fontSize:'13px',fontWeight:300,lineHeight:1.82,color:T.inkMid,margin:0 }}>{c.execucao}</p></CaseBlock>
        </div>
      </div>

      {/* Evidências visuais — carrossel */}
      <div style={{ borderBottom:`1px solid ${T.ruleLight}` }}>
        <div style={{ padding: isMobile?'28px 20px 16px':'32px 36px 16px', display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:'12px' }}>
          <p style={{ fontSize:'9px',fontWeight:700,letterSpacing:'0.22em',textTransform:'uppercase',color:T.inkLight,margin:0 }}>Peças produzidas</p>
          <p style={{ fontSize:'10px',fontWeight:300,color:T.inkLight,margin:0 }}>
            {caseIndex === 1
              ? 'Campanha SPDATA&Você · Comunicação Interna · Identidade Digital'
              : 'Campanhas de captação · Eventos institucionais · Comunicação multimídia'}
          </p>
        </div>
        <div style={{ padding: isMobile?'0 20px 24px':'0 36px 28px' }}>
          {caseIndex === 1
            ? <PieceCarousel items={spdataGallery} cor={c.cor} />
            : caseIndex === 3
              ? <PieceCarousel items={arnaldoGallery} cor={c.cor} />
              : <Mosaic images={c.imagens.length > 0 ? c.imagens.slice(1) : []} cor={c.cor} />
          }
        </div>
      </div>

      {/* Resultados */}
      <div style={{ padding: isMobile?'28px 20px 36px':'36px 36px 40px',backgroundColor:T.white,borderTop:`1px solid ${T.rule}` }}>
        <p style={{ fontSize:'9px',fontWeight:700,letterSpacing:'0.22em',textTransform:'uppercase',color:T.inkLight,margin:'0 0 24px' }}>Resultados</p>
        <div style={{ borderTop:`1px solid ${T.rule}`,paddingTop:'20px',position:'relative',marginBottom:'32px' }}>
          <span style={{ position:'absolute',top:'10px',left:'-2px',fontFamily:'Playfair Display, serif',fontSize:'40px',color:c.cor,opacity:0.15,lineHeight:1 }}>"</span>
          <p style={{ fontSize:'13px',fontWeight:400,lineHeight:1.72,color:T.inkMid,margin:0,fontStyle:'italic',paddingLeft:'12px' }}>{c.resultadoTexto}</p>
        </div>
        <button onClick={onBack} style={{ display:'inline-flex',alignItems:'center',gap:'8px',padding:'9px 20px',background:'none',border:`1px solid ${T.rule}`,color:T.inkMid,fontSize:'11px',cursor:'pointer',fontFamily:'Inter, sans-serif',letterSpacing:'0.06em',textTransform:'uppercase',transition:'all 0.18s' }}
          onMouseEnter={e=>{e.currentTarget.style.borderColor=T.navy;e.currentTarget.style.color=T.navy}}
          onMouseLeave={e=>{e.currentTarget.style.borderColor=T.rule;e.currentTarget.style.color=T.inkMid}}>
          ← Todos os cases
        </button>
      </div>
      {c.narrativa && <NarrativaBlock texto={c.narrativa} cor={c.cor} cargo="Assistente de Comunicação" />}
    </div>
  )
}

// ─── CASE DETAIL ROUTER ──────────────────────────────────────────────────────

function CaseDetailRouter({ id, onBack, onOpenCase }: { id: number; onBack: () => void; onOpenCase: (id: number) => void }) {
  if (id === 0) return <SadaCaseDetail onBack={onBack} onNext={() => onOpenCase(1)} />
  if (id === 1) return <SpdataCaseDetail onBack={onBack} />
  if (id === 2) return <StartupCaseDetail onBack={onBack} />
  if (id === 3) return <SimpleCaseDetail caseIndex={3} onBack={onBack} />
  return <SimpleCaseDetail caseIndex={id} onBack={onBack} />
}

// ─── BLOG ────────────────────────────────────────────────────────────────────

type BlogPost = { id: number; title: string; excerpt: string; category: string; date: string; readTime: string }

const blogPosts: BlogPost[] = [
  { id: 1, title: 'Como estruturar comunicação corporativa do zero', excerpt: 'Quando a comunicação acontece em silos — cada área falando por conta própria, sem linha editorial, sem padrão — o ruído vira cultura. O que aprendi estruturando áreas do zero em empresas de diferentes portes.', category: 'Comunicação Corporativa', date: 'Ago 2025', readTime: '5 min' },
  { id: 2, title: 'Branding interno: por que a identidade começa antes do cliente', excerpt: 'Antes de falar com o mercado, a marca precisa fazer sentido para quem trabalha dentro dela. Como o endomarketing sustenta a consistência de marca a longo prazo.', category: 'Branding', date: 'Jul 2025', readTime: '4 min' },
  { id: 3, title: 'ESG na comunicação: do relatório ao conteúdo', excerpt: 'Transformar dados de ESG em narrativa não é simplificar — é traduzir. Como conectar indicadores de impacto com a linguagem dos diferentes públicos de uma empresa.', category: 'ESG', date: 'Jun 2025', readTime: '6 min' },
]

function BlogCard({ post, onSelect }: { post: BlogPost; onSelect: () => void }) {
  const [hov, setHov] = useState(false)
  return (
    <div onClick={onSelect} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ backgroundColor:T.white,cursor:'pointer',padding:'32px 28px',borderTop:`2px solid ${hov?T.magenta:T.ruleLight}`,transition:'all 0.2s' }}>
      <div style={{ display:'flex',alignItems:'center',gap:'8px',marginBottom:'16px',flexWrap:'wrap' }}>
        <span style={{ fontSize:'9px',fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',color:T.magenta }}>{post.category}</span>
        <span style={{ width:'1px',height:'10px',backgroundColor:T.rule }} />
        <span style={{ fontSize:'9px',fontWeight:300,color:T.inkLight }}>{post.date}</span>
        <span style={{ fontSize:'9px',fontWeight:300,color:T.inkLight }}>· {post.readTime}</span>
      </div>
      <h3 style={{ fontFamily:'Playfair Display, serif',fontSize:'17px',fontWeight:600,lineHeight:1.3,letterSpacing:'-0.01em',color:T.ink,margin:'0 0 12px' }}>{post.title}</h3>
      <p style={{ fontSize:'12px',fontWeight:300,lineHeight:1.78,color:T.inkMid,margin:'0 0 20px' }}>{post.excerpt}</p>
      <div style={{ display:'flex',alignItems:'center',gap:'6px',color: hov?T.magenta:T.inkLight,transition:'color 0.18s' }}>
        <span style={{ fontSize:'10px',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase' }}>Ler artigo</span>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><line x1="0" y1="4" x2="9" y2="4" stroke="currentColor" strokeWidth="1.5"/><polyline points="6,1 9,4 6,7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
      </div>
    </div>
  )
}

function BlogListing({ onSelect, onBack }: { onSelect: (id: number) => void; onBack: () => void }) {
  const { isMobile, isTablet } = useBreakpoint()
  return (
    <div style={{ minHeight:'calc(100vh - 56px)',backgroundColor:T.bg }}>
      <div style={{ padding: isMobile?'48px 20px 36px':'64px 48px 48px',borderBottom:`1px solid ${T.rule}`,backgroundColor:T.white }}>
        <button onClick={onBack} style={{ display:'inline-flex',alignItems:'center',gap:'7px',background:'none',border:'none',padding:'0 0 28px',cursor:'pointer',fontSize:'10px',fontWeight:500,letterSpacing:'0.12em',textTransform:'uppercase',color:T.inkLight,fontFamily:'Inter, sans-serif',transition:'color 0.18s' }}
          onMouseEnter={e=>(e.currentTarget.style.color=T.magenta)} onMouseLeave={e=>(e.currentTarget.style.color=T.inkLight)}>
          ← Portfólio
        </button>
        <SectionHead n="06" label="Blog" color={T.magenta} />
        <h1 style={{ fontFamily:'Playfair Display, serif',fontSize:'clamp(26px,2.8vw,40px)',fontWeight:700,lineHeight:1.12,letterSpacing:'-0.03em',margin:'0 0 12px',color:T.ink }}>
          Reflexões sobre{' '}
          <em style={{ fontStyle:'italic',fontWeight:400,color:T.magenta }}>comunicação e estratégia.</em>
        </h1>
        <p style={{ fontSize:'14px',fontWeight:300,color:T.inkLight,margin:0,lineHeight:1.7 }}>Artigos sobre comunicação corporativa, branding, ESG e estratégia de conteúdo.</p>
      </div>
      <div style={{ padding: isMobile?'32px 20px':'48px 48px',display:'grid',gridTemplateColumns: isMobile?'1fr':isTablet?'1fr 1fr':'1fr 1fr 1fr',gap:'2px' }}>
        {blogPosts.map(post => <BlogCard key={post.id} post={post} onSelect={() => onSelect(post.id)} />)}
      </div>
    </div>
  )
}

function BlogArticle({ id, onBack }: { id: number; onBack: () => void }) {
  const post = blogPosts.find(p => p.id === id)!
  const { isMobile } = useBreakpoint()
  return (
    <div style={{ minHeight:'calc(100vh - 56px)',backgroundColor:T.bg }}>
      <div style={{ padding:'14px 28px',borderBottom:`1px solid ${T.ruleLight}`,display:'flex',alignItems:'center',gap:'12px',backgroundColor:T.white }}>
        <button onClick={onBack} style={{ display:'inline-flex',alignItems:'center',gap:'7px',background:'none',border:'none',padding:0,cursor:'pointer',fontSize:'10px',fontWeight:500,letterSpacing:'0.12em',textTransform:'uppercase',color:T.inkMid,fontFamily:'Inter, sans-serif' }}>
          ← Blog
        </button>
        <span style={{ width:'1px',height:'10px',backgroundColor:T.rule }} />
        <span style={{ fontSize:'9px',fontWeight:700,letterSpacing:'0.14em',textTransform:'uppercase',color:T.magenta }}>{post.category}</span>
      </div>
      <div style={{ maxWidth:'720px',margin:'0 auto',padding: isMobile?'40px 24px':'64px 48px' }}>
        <p style={{ fontSize:'9px',fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',color:T.inkLight,margin:'0 0 16px' }}>{post.date} · {post.readTime} de leitura</p>
        <h1 style={{ fontFamily:'Playfair Display, serif',fontSize:'clamp(22px,2.4vw,34px)',fontWeight:700,lineHeight:1.18,letterSpacing:'-0.025em',color:T.ink,margin:'0 0 24px' }}>{post.title}</h1>
        <div style={{ width:'40px',height:'3px',backgroundColor:T.magenta,marginBottom:'32px' }} />
        <p style={{ fontSize:'16px',fontWeight:300,lineHeight:1.85,color:T.inkMid,margin:'0 0 36px' }}>{post.excerpt}</p>
        <div style={{ padding:'28px 24px',border:`1.5px dashed ${T.ruleLight}`,marginBottom:'32px',backgroundColor:T.white }}>
          <p style={{ fontSize:'10px',fontWeight:600,letterSpacing:'0.14em',textTransform:'uppercase',color:T.inkLight,margin:'0 0 6px' }}>Corpo do artigo</p>
          <p style={{ fontSize:'11px',fontWeight:300,color:T.inkLight,margin:0,lineHeight:1.55 }}>O conteúdo completo do artigo será adicionado aqui. A estrutura suporta subtítulos, imagens, citações em destaque e múltiplos parágrafos.</p>
        </div>
        <div style={{ padding:'40px 24px',backgroundColor:T.white,border:`1px solid ${T.ruleLight}`,marginBottom:'36px',display:'flex',alignItems:'center',justifyContent:'center',gap:'12px' }}>
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none"><rect x="1" y="1" width="18" height="14" rx="1" stroke={T.rule} strokeWidth="1.5"/><circle cx="6.5" cy="5.5" r="1.5" fill={T.rule}/><polyline points="1,11 7,6 11,10 14,7 19,11" fill="none" stroke={T.rule} strokeWidth="1.5" strokeLinejoin="round"/></svg>
          <span style={{ fontSize:'10px',fontWeight:300,color:T.inkLight }}>Imagem do artigo</span>
        </div>
        <button onClick={onBack} style={{ display:'inline-flex',alignItems:'center',gap:'8px',padding:'9px 20px',background:'none',border:`1px solid ${T.rule}`,color:T.inkMid,fontSize:'11px',cursor:'pointer',fontFamily:'Inter, sans-serif',letterSpacing:'0.06em',textTransform:'uppercase' }}>
          ← Voltar ao Blog
        </button>
      </div>
    </div>
  )
}

// NavLink
function NavLink({ href, children, onClick }: { href: string; children: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  const [hov, setHov] = useState(false)
  return (
    <a href={href} onClick={onClick} style={{ fontSize:'11px',fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',textDecoration:'none',color: hov?T.navy:T.inkLight,transition:'color 0.18s',paddingBottom:'2px',borderBottom: hov?`1px solid ${T.navy}`:'1px solid transparent',minHeight:'44px',display:'inline-flex',alignItems:'center' }} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      {children}
    </a>
  )
}

// Menu mobile drawer
function MobileMenu({ open, onClose, onBlog, onCase, onNav }: { open: boolean; onClose: () => void; onBlog: () => void; onCase: () => void; onNav: (id: string) => void }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  if (!open) return null
  const item = (label: string, handler: () => void) => (
    <button onClick={() => { handler(); onClose() }} style={{ display:'block',width:'100%',textAlign:'left',padding:'18px 28px',background:'none',border:'none',borderBottom:`1px solid ${T.ruleLight}`,fontSize:'15px',fontWeight:500,letterSpacing:'0.06em',textTransform:'uppercase',color:T.ink,cursor:'pointer',fontFamily:'Inter, sans-serif',minHeight:'56px' }}>
      {label}
    </button>
  )
  return (
    <>
      <div onClick={onClose} style={{ position:'fixed',inset:0,backgroundColor:'rgba(0,0,0,0.5)',zIndex:200,backdropFilter:'blur(4px)' }} />
      <div style={{ position:'fixed',top:0,right:0,bottom:0,width:'min(320px, 90vw)',backgroundColor:T.white,zIndex:201,display:'flex',flexDirection:'column',boxShadow:'-8px 0 40px rgba(0,0,0,0.12)',overflowY:'auto' }}>
        <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 20px 16px 28px',borderBottom:`1px solid ${T.rule}` }}>
          <span style={{ fontSize:'11px',fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',color:T.inkLight }}>Menu</span>
          <button onClick={onClose} style={{ width:'44px',height:'44px',display:'flex',alignItems:'center',justifyContent:'center',background:'none',border:'none',cursor:'pointer',color:T.inkMid,fontSize:'20px' }}>×</button>
        </div>
        <nav style={{ flex:1 }}>
          {item('Cases', onCase)}
          {item('Método', () => onNav('forma'))}
          {item('Competências', () => onNav('competencias'))}
          {item('Sobre', () => onNav('sobre'))}
          {item('Blog', onBlog)}
          {item('Contato', () => onNav('contato'))}
        </nav>
        <div style={{ padding:'24px 28px',borderTop:`1px solid ${T.rule}` }}>
          <p style={{ fontFamily:'Playfair Display, serif', fontSize:'13px',fontWeight:700,color:T.ink,margin:'0 0 4px' }}>Sara Madalena Silva</p>
          <p style={{ fontSize:'10px',fontWeight:300,color:T.inkLight,margin:0,lineHeight:1.6 }}>comunicacao.saramada@gmail.com</p>
        </div>
      </div>
    </>
  )
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [openCase, setOpenCase] = useState<number | null>(null)
  const [blogView, setBlogView] = useState(false)
  const [blogArticleId, setBlogArticleId] = useState<number | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { isMobile, isTablet, isWide } = useBreakpoint()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [openCase, blogView, blogArticleId])

  const gridBg = {
    backgroundImage: `linear-gradient(${T.ruleLight} 1px, transparent 1px), linear-gradient(90deg, ${T.ruleLight} 1px, transparent 1px)`,
    backgroundSize: '40px 40px',
  }

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpenCase(null)
    setBlogView(false)
    setBlogArticleId(null)
  }

  const navEl = (
    <>
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onBlog={() => { setBlogView(true); setBlogArticleId(null); setOpenCase(null) }}
        onCase={() => { setOpenCase(null); setBlogView(false); setBlogArticleId(null); setTimeout(() => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' }), 50) }}
        onNav={(id) => { setOpenCase(null); setBlogView(false); setBlogArticleId(null); setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50) }}
      />
      <nav style={{ position:'fixed',top:0,left:0,right:0,zIndex:100,height:'56px',padding: isMobile?'0 16px':'0 48px',display:'flex',alignItems:'center',justifyContent:'space-between',backgroundColor: scrolled?'rgba(245,245,243,0.97)':T.white,borderBottom:`1px solid ${T.rule}`,backdropFilter: scrolled?'blur(16px)':'none',transition:'all 0.3s ease' }}>
        <a href="#" onClick={goHome} style={{ textDecoration:'none',display:'flex',alignItems:'center',gap:'10px',minHeight:'44px' }}>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="1" y="1" width="20" height="20" stroke={T.navy} strokeWidth="1.2"/>
            <text x="11" y="15.5" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="11" fontWeight="700" fill={T.magenta} letterSpacing="-0.5">SM</text>
          </svg>
          <span style={{ fontFamily:'Playfair Display, serif', fontSize:'15px',fontWeight:700,color:T.ink,letterSpacing:'0.01em' }}>Sara Madalena</span>
        </a>
        {!isMobile && (
          <div style={{ display:'flex',gap:'28px',alignItems:'center' }}>
            <NavLink href="#cases" onClick={(e)=>{e.preventDefault();setOpenCase(null);setBlogView(false);setBlogArticleId(null);setTimeout(()=>document.getElementById('cases')?.scrollIntoView({behavior:'smooth'}),50)}}>Cases</NavLink>
            <NavLink href="#forma" onClick={(e)=>{e.preventDefault();setOpenCase(null);setBlogView(false);setBlogArticleId(null);setTimeout(()=>document.getElementById('forma')?.scrollIntoView({behavior:'smooth'}),50)}}>Método</NavLink>
            {!isTablet && <NavLink href="#competencias" onClick={(e)=>{e.preventDefault();setOpenCase(null);setBlogView(false);setBlogArticleId(null);setTimeout(()=>document.getElementById('competencias')?.scrollIntoView({behavior:'smooth'}),50)}}>Competências</NavLink>}
            <NavLink href="#sobre" onClick={(e)=>{e.preventDefault();setOpenCase(null);setBlogView(false);setBlogArticleId(null);setTimeout(()=>document.getElementById('sobre')?.scrollIntoView({behavior:'smooth'}),50)}}>Sobre</NavLink>
            <button onClick={()=>{setBlogView(true);setBlogArticleId(null);setOpenCase(null)}} style={{ fontSize:'11px',fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:T.inkLight,background:'none',border:'none',cursor:'pointer',fontFamily:'Inter, sans-serif',padding:0,transition:'color 0.18s',minHeight:'44px' }} onMouseEnter={e=>(e.currentTarget.style.color=T.navy)} onMouseLeave={e=>(e.currentTarget.style.color=T.inkLight)}>Blog</button>
            <a href="#contato" onClick={(e)=>{e.preventDefault();setOpenCase(null);setBlogView(false);setBlogArticleId(null);setTimeout(()=>document.getElementById('contato')?.scrollIntoView({behavior:'smooth'}),50)}} style={{ display:'inline-flex',alignItems:'center',gap:'6px',padding:'9px 18px',backgroundColor:T.navy,color:'#fff',fontSize:'11px',fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',textDecoration:'none',transition:'background-color 0.18s',minHeight:'44px' }}
              onMouseEnter={e=>(e.currentTarget.style.backgroundColor=T.magenta)} onMouseLeave={e=>(e.currentTarget.style.backgroundColor=T.navy)}>
              Contato <span style={{ fontSize:'14px',lineHeight:1 }}>→</span>
            </a>
          </div>
        )}
        {isMobile && (
          <button onClick={() => setMenuOpen(true)} style={{ width:'44px',height:'44px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'5px',background:'none',border:'none',cursor:'pointer',padding:0 }}>
            <span style={{ width:'22px',height:'1.5px',backgroundColor:T.ink,display:'block' }} />
            <span style={{ width:'22px',height:'1.5px',backgroundColor:T.ink,display:'block' }} />
            <span style={{ width:'14px',height:'1.5px',backgroundColor:T.ink,display:'block',alignSelf:'flex-start',marginLeft:'4px' }} />
          </button>
        )}
      </nav>
    </>
  )

  const footerEl = (
    <footer style={{ backgroundColor:T.ink,padding: isMobile?'20px 20px':'24px 48px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'12px' }}>
      <div style={{ display:'flex',alignItems:'center',gap:'14px',flexWrap:'wrap' }}>
        <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
          <rect x="1" y="1" width="20" height="20" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2"/>
          <text x="11" y="15.5" textAnchor="middle" fontFamily="Playfair Display, serif" fontSize="11" fontWeight="700" fill={T.magenta} letterSpacing="-0.5">SM</text>
        </svg>
        <span style={{ fontFamily:'Playfair Display, serif', fontSize:'15px',fontWeight:700,color:'#fff',letterSpacing:'0.01em' }}>Sara Madalena</span>
        <span style={{ width:'1px',height:'14px',backgroundColor:'rgba(255,255,255,0.15)' }} />
        {['Marketing & Estratégia','Branding & Posicionamento','Conteúdo & Narrativa','Comunicação Corporativa'].map((tag, i) => (
          <span key={tag} style={{ fontSize:'10px',fontWeight:300,color: i % 2 === 0 ? 'rgba(255,255,255,0.38)' : T.magenta, letterSpacing:'0.04em', whiteSpace:'nowrap' }}>
            {tag}{i < 3 ? <span style={{ color:'rgba(255,255,255,0.15)',margin:'0 8px' }}>·</span> : null}
          </span>
        ))}
      </div>
      <div style={{ display:'flex',alignItems:'center',gap:'16px' }}>
        <span style={{ fontSize:'9px',fontWeight:600,letterSpacing:'0.14em',textTransform:'uppercase',color:T.magenta }}>comunicacao.saramada@gmail.com</span>
        <span style={{ fontSize:'10px',color:'rgba(255,255,255,0.2)' }}>© 2025</span>
      </div>
    </footer>
  )

  // ── CASE ABERTO ──
  if (openCase !== null) {
    return (
      <div style={{ backgroundColor:T.bg,color:T.ink,fontFamily:'Inter, sans-serif',minHeight:'100vh' }}>
        {navEl}
        <div style={{ paddingTop:'56px' }}>
          <CaseDetailRouter id={openCase} onBack={() => setOpenCase(null)} onOpenCase={(id) => setOpenCase(id)} />
        </div>
        {footerEl}
      </div>
    )
  }

  // ── BLOG ──
  if (blogView) {
    return (
      <div style={{ backgroundColor:T.bg,color:T.ink,fontFamily:'Inter, sans-serif',minHeight:'100vh' }}>
        {navEl}
        <div style={{ paddingTop:'56px' }}>
          {blogArticleId !== null
            ? <BlogArticle id={blogArticleId} onBack={() => setBlogArticleId(null)} />
            : <BlogListing onSelect={(id) => setBlogArticleId(id)} onBack={() => setBlogView(false)} />
          }
        </div>
        {footerEl}
      </div>
    )
  }

  // ── PORTFÓLIO ──
  return (
    <div style={{ backgroundColor: T.bg, color: T.ink, fontFamily: 'Inter, sans-serif', minHeight: '100vh' }}>
      {navEl}

      {/* ── HERO ── */}
      <section id="hero" style={{ height:'100vh',minHeight:'640px',paddingTop:'56px',display:'grid',gridTemplateColumns: isMobile?'1fr':'1fr 1fr',backgroundColor:T.white,overflow:'hidden' }}>
        {/* coluna esquerda */}
        <div style={{ display:'flex',flexDirection:'column',justifyContent:'center',padding: isMobile?'40px 24px':'56px 52px 56px 48px',borderRight: isMobile?'none':`1px solid ${T.rule}`,position:'relative',overflowY: isMobile?'auto':'visible' }}>
          <div style={{ position: 'absolute', inset: 0, ...gridBg, opacity: 0.35, pointerEvents: 'none' }} />

          <div style={{ position: 'relative' }}>
            {/* identificador com círculo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '36px' }}>
              <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3.5" fill={T.magenta} /></svg>
              <span style={{ width: '48px', height: '1px', backgroundColor: T.magenta }} />
              <span style={{ fontFamily:'Playfair Display, serif', fontSize: '14px', fontWeight: 600, color: T.magenta }}>
                Sara Madalena Silva
              </span>
            </div>

            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(24px, 2.6vw, 36px)',
              fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.025em',
              margin: '0 0 8px', color: T.ink,
            }}>
              <em style={{ fontStyle: 'italic', fontWeight: 400, color: T.navy }}>Marketing</em>,{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 400, color: T.magenta }}>Branding</em>{' '}
              e Conteúdo.
            </h1>

            {/* traço amarelo — único uso de yellow, pequeno e intencionado */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', margin: '20px 0' }}>
              <div style={{ width: '40px', height: '3px', backgroundColor: T.yellow }} />
              <div style={{ width: '8px', height: '3px', backgroundColor: T.rule }} />
              <div style={{ width: '4px', height: '3px', backgroundColor: T.rule }} />
            </div>

            <p style={{ fontSize: '15px', fontWeight: 300, lineHeight: 1.82, color: T.inkMid, margin: '0 0 32px', maxWidth: '420px' }}>
              Estratégia, criação e execução integradas — do posicionamento de marca à produção de conteúdo, conectando comunicação, identidade e resultado.
            </p>

            {/* 4 pilares de atuação */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginBottom: '36px' }}>
              {[
                { icon: 'marketing' as SiteIconName, label: 'Marketing & Estratégia', cor: T.navy },
                { icon: 'branding' as SiteIconName, label: 'Branding & Posicionamento', cor: T.magenta },
                { icon: 'experience' as SiteIconName, label: 'Conteúdo & Narrativa', cor: T.navy },
                { icon: 'channels' as SiteIconName, label: 'Comunicação Corporativa', cor: T.magenta },
              ].map((pilar) => (
                <div key={pilar.label} style={{ padding: '14px 16px', backgroundColor: T.bg, borderTop: `2px solid ${pilar.cor}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SiteIcon name={pilar.icon} size={15} color={pilar.cor} />
                  <span style={{ fontSize: '11px', fontWeight: 500, color: T.ink, lineHeight: 1.3 }}>{pilar.label}</span>
                </div>
              ))}
            </div>

            <a href="#cases" style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '13px 28px', backgroundColor: T.navy, color: '#fff',
              fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none', transition: 'background-color 0.18s',
            }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = T.magenta)}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = T.navy)}>
              Ver projetos
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><line x1="0" y1="5" x2="11" y2="5" stroke="currentColor" strokeWidth="1.5" /><polyline points="7,1 11,5 7,9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </div>

        {/* coluna direita — foto */}
        {!isMobile && (
          <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#bbb' }}>
            <img src={heroPhotoPEB} alt="Sara Madalena Silva" style={{ width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top',display:'block' }} />
            <div style={{ position: 'absolute', inset: 0, ...gridBg, opacity: 0.04, pointerEvents: 'none' }} />
            <div style={{ position:'absolute',bottom:'28px',right:'28px',display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'4px' }}>
              <div style={{ width:'1px',height:'32px',backgroundColor:'rgba(255,255,255,0.3)' }} />
              <span style={{ fontSize:'9px',fontWeight:600,letterSpacing:'0.18em',textTransform:'uppercase',color:'rgba(255,255,255,0.45)' }}>Marketing · Branding · Conteúdo</span>
            </div>
          </div>
        )}
      </section>

      {/* ── CASES ── */}
      <section id="cases" style={{ backgroundColor:T.bg,borderTop:`1px solid ${T.rule}` }}>
        <div style={{ padding: isMobile?'48px 24px 0':isWide?'64px 80px 0':'64px 48px 0',position:'relative',overflow:'hidden',maxWidth: isWide?'1600px':'none',margin:'0 auto' }}>
          <SectionHead n="01" label="Cases" color={T.navy} />
          <div style={{ display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:'24px',paddingBottom:'40px',flexWrap:'wrap' }}>
            <h2 style={{ fontFamily:'Playfair Display, serif',fontSize:'clamp(26px,2.8vw,40px)',fontWeight:700,lineHeight:1.1,letterSpacing:'-0.03em',margin:0,color:T.ink,maxWidth:'560px' }}>
              Projetos reais,{' '}
              <em style={{ fontStyle:'italic',fontWeight:400,color:T.magenta }}>resultados mensuráveis.</em>
            </h2>
            {!isMobile && <p style={{ fontSize:'12px',fontWeight:300,color:T.inkLight,maxWidth:'260px',lineHeight:1.75,margin:0,textAlign:'right',flexShrink:0 }}>Estrutura: <em>Contexto · Desafio · Estratégia<br/>Execução · Resultados</em></p>}
          </div>
        </div>
        <CaseGallery onOpen={(id) => setOpenCase(id)} />
      </section>

      {/* ── FORMA DE TRABALHAR ── */}
      <section id="forma" style={{ backgroundColor:T.white,borderTop:`1px solid ${T.rule}`,padding: isMobile?'48px 24px':isWide?'80px 80px':'72px 48px' }}>
        <div style={{ display:'grid',gridTemplateColumns: isMobile?'1fr':isTablet?'1fr':'260px 1fr',gap: isMobile||isTablet?'32px':'64px',maxWidth:'1200px',margin:'0 auto' }}>
          <div style={{ paddingTop:'4px' }}>
            <SectionHead n="02" label="Método" color={T.magenta} />
            <h2 style={{ fontFamily:'Playfair Display, serif',fontSize:'clamp(22px,2.2vw,34px)',fontWeight:700,lineHeight:1.18,letterSpacing:'-0.025em',margin:'0 0 16px',color:T.ink }}>
              Minha forma<br/><em style={{ fontStyle:'italic',fontWeight:400,color:T.magenta }}>de trabalhar.</em>
            </h2>
            <p style={{ fontSize:'13px',fontWeight:300,lineHeight:1.75,color:T.inkLight,margin:0 }}>Princípios que guiam cada projeto, do diagnóstico à entrega final.</p>
          </div>
          {(() => {
            const methodIcons: SiteIconName[] = ['diagnose', 'strategy', 'process', 'create']
            return (
              <div style={{ display:'grid',gridTemplateColumns: isMobile?'1fr':'1fr 1fr',gap:'1px',backgroundColor:T.rule }}>
                {formaDeTrabalhar.map((item, idx) => (
                  <div key={item.num} style={{ backgroundColor:T.white,padding: isMobile?'28px 20px':'36px 32px',position:'relative',overflow:'hidden',transition:'background-color 0.18s' }}
                    onMouseEnter={e=>(e.currentTarget.style.backgroundColor=T.bg)} onMouseLeave={e=>(e.currentTarget.style.backgroundColor=T.white)}>
                    {/* ícone fantasma */}
                    <div style={{ position:'absolute',top:'8px',right:'10px',opacity:0.05,pointerEvents:'none',userSelect:'none' }}>
                      <SiteIcon name={methodIcons[idx]} size={72} color={T.ink} />
                    </div>
                    <div style={{ display:'flex',alignItems:'center',gap:'10px',marginBottom:'16px' }}>
                      <SiteIcon name={methodIcons[idx]} size={18} color={item.cor} />
                      <svg width="24" height="6" viewBox="0 0 24 6" style={{ flexShrink:0 }}><line x1="0" y1="3" x2="20" y2="3" stroke={item.cor} strokeWidth="1"/><polyline points="16,1 20,3 16,5" fill="none" stroke={item.cor} strokeWidth="1" strokeLinejoin="round"/></svg>
                    </div>
                    <h3 style={{ fontSize:'15px',fontWeight:600,lineHeight:1.3,marginBottom:'10px',color:T.ink }}>{item.titulo}</h3>
                    <p style={{ fontSize:'13px',fontWeight:300,lineHeight:1.82,color:T.inkMid,margin:0 }}>{item.descricao}</p>
                  </div>
                ))}
              </div>
            )
          })()}
        </div>
      </section>

      {/* ── COMPETÊNCIAS ── */}
      <section id="competencias" style={{ backgroundColor:T.bg,borderTop:`1px solid ${T.rule}`,padding: isMobile?'48px 24px':isWide?'80px 80px':'72px 48px' }}>
        <div style={{ maxWidth:'1200px',margin:'0 auto' }}>
          <SectionHead n="03" label="Competências" color={T.navy} />
          <div style={{ display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:'40px',gap:'24px',flexWrap:'wrap' }}>
            <h2 style={{ fontFamily:'Playfair Display, serif',fontSize:'clamp(22px,2.2vw,34px)',fontWeight:700,lineHeight:1.1,letterSpacing:'-0.025em',margin:0,color:T.ink }}>
              Técnicas e <em style={{ fontStyle:'italic',fontWeight:400,color:T.navy }}>ferramentas.</em>
            </h2>
            {!isMobile && <p style={{ fontSize:'12px',fontWeight:300,color:T.inkLight,maxWidth:'240px',lineHeight:1.7,margin:0,textAlign:'right',flexShrink:0 }}>Do planejamento estratégico à execução — em todas as frentes.</p>}
          </div>
          <div style={{ display:'grid',gridTemplateColumns: isMobile?'1fr':isTablet?'1fr 1fr':'1fr 1fr',gap:'2px',backgroundColor:T.rule }}>
            {competencias.map((grupo) => (
              <div key={grupo.grupo} style={{ backgroundColor:T.white,padding: isMobile?'24px 20px':'32px 28px',position:'relative' }}>
                <div style={{ display:'flex',alignItems:'center',gap:'8px',marginBottom:'20px',paddingBottom:'14px',borderBottom:`1px solid ${T.ruleLight}` }}>
                  <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3.5" fill="none" stroke={grupo.cor} strokeWidth="1.5"/><circle cx="4" cy="4" r="1.5" fill={grupo.cor}/></svg>
                  <p style={{ fontSize:'9px',fontWeight:700,letterSpacing:'0.18em',textTransform:'uppercase',color:grupo.cor,margin:0 }}>{grupo.grupo}</p>
                </div>
                <div style={{ display:'flex',flexWrap:'wrap',gap:'6px' }}>
                  {grupo.itens.map((item) => (
                    <span key={item} style={{ fontSize:'11px',fontWeight:300,color:T.inkMid,padding: isMobile?'7px 14px':'5px 12px',border:`1px solid ${T.ruleLight}`,backgroundColor:T.bg,letterSpacing:'0.02em',lineHeight:1.4 }}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" style={{ backgroundColor:T.white,borderTop:`1px solid ${T.rule}`,padding: isMobile?'48px 24px':isWide?'80px 80px':'72px 48px' }}>
        <div style={{ maxWidth:'1200px',margin:'0 auto' }}>
          <SectionHead n="04" label="Sobre" color={T.magenta} />
          <div style={{ display:'grid',gridTemplateColumns: isMobile?'1fr':'1fr 1fr',gap: isMobile?'40px':'72px',alignItems:'start' }}>

            {/* esquerda */}
            <div>
              <h2 style={{ fontFamily:'Playfair Display, serif',fontSize:'clamp(22px,2.2vw,34px)',fontWeight:700,lineHeight:1.18,letterSpacing:'-0.025em',margin:'0 0 24px',color:T.ink }}>
                Sara Madalena Silva.<br/><em style={{ fontStyle:'italic',fontWeight:400,color:T.magenta }}>Estratégia, criação e execução.</em>
              </h2>
              <p style={{ fontSize:'14px',fontWeight:300,lineHeight:1.85,color:T.inkMid,marginBottom:'14px' }}>
                Publicitária formada pela <strong style={{ fontWeight:600,color:T.ink }}>PUC Minas</strong>, com <strong style={{ fontWeight:600,color:T.ink }}>MBA em Comunicação e Marketing</strong>. Mais de <strong style={{ fontWeight:600,color:T.ink }}>10 anos</strong> estruturando áreas, processos e narrativas para empresas que precisam falar com clareza.
              </p>
              <p style={{ fontSize:'14px',fontWeight:300,lineHeight:1.85,color:T.inkMid,marginBottom:'32px' }}>
                Vivência integrada com <em>RH, Educação Corporativa, ESG, Compliance e LGPD</em>. Atuação que conecta diagnóstico, estratégia, criação e execução — sempre com foco em consistência e resultado.
              </p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '36px' }}>
                {['PUC Minas', 'MBA Comunicação e Marketing', 'Contagem, MG', 'B2B & B2C'].map((tag) => (
                  <span key={tag} style={{ padding: '5px 12px', border: `1px solid ${T.rule}`, fontSize: '11px', fontWeight: 400, color: T.inkMid, backgroundColor: T.bg, letterSpacing: '0.02em' }}>
                    {tag}
                  </span>
                ))}
              </div>
              {/* foto */}
              <div style={{ maxWidth: '280px', position: 'relative' }}>
                <div style={{ overflow: 'hidden', border: `1px solid ${T.rule}` }}>
                  <img src={contatoPhotoColor} alt="Sara Madalena Silva"
                    style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
                </div>
                {/* seta decorativa */}
                <div style={{ position: 'absolute', bottom: '-12px', right: '-12px', width: '24px', height: '24px', backgroundColor: T.magenta, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><line x1="1" y1="9" x2="9" y2="1" stroke="white" strokeWidth="1.5" /><polyline points="4,1 9,1 9,6" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round" /></svg>
                </div>
              </div>
            </div>

            {/* direita: trajetória */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
                <div style={{ width: '16px', height: '1px', backgroundColor: T.navy }} />
                <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: T.navy }}>Trajetória profissional</span>
                <div style={{ flex: 1, height: '1px', backgroundColor: T.ruleLight }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '44px' }}>
                {timeline.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', paddingBottom: '20px' }}>
                    {/* linha do tempo com conectores */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: '20px' }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <circle cx="6" cy="6" r="5" fill="none" stroke={item.atual ? T.magenta : T.rule} strokeWidth="1.5" />
                        {item.atual && <circle cx="6" cy="6" r="2.5" fill={T.magenta} />}
                      </svg>
                      {i < timeline.length - 1 && <div style={{ width: '1px', flex: 1, backgroundColor: T.ruleLight, marginTop: '5px' }} />}
                    </div>
                    <div style={{ paddingBottom: '4px' }}>
                      <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: item.atual ? T.magenta : T.inkLight, marginBottom: '3px' }}>
                        {item.ano}{item.atual && ' · atual'}
                      </p>
                      <p style={{ fontSize: '14px', fontWeight: item.atual ? 600 : 400, color: item.atual ? T.ink : T.inkMid, marginBottom: '1px' }}>
                        {item.cargo}
                      </p>
                      <p style={{ fontSize: '12px', fontWeight: 300, color: T.inkLight, margin: 0 }}>{item.empresa}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* indicadores */}
              <div style={{ borderTop:`1px solid ${T.rule}`,paddingTop:'36px' }}>
                <div style={{ display:'flex',alignItems:'center',gap:'10px',marginBottom:'24px' }}>
                  <div style={{ width:'16px',height:'1px',backgroundColor:T.navy }} />
                  <span style={{ fontSize:'9px',fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',color:T.navy }}>Indicadores</span>
                  <div style={{ flex:1,height:'1px',backgroundColor:T.ruleLight }} />
                </div>
                <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'20px' }}>
                  {[
                    {n:'+10',l:'anos de experiência, buscando consistência e assertividade na comunicação',cor:T.navy},
                    {n:'+33%',l:'de abertura de comunicados internos em 2024, atingindo a meta estabelecida',cor:T.magenta},
                    {n:'+7%',l:'de engajamento no Instagram e LinkedIn, com aumento perceptível de 2023 para 2024',cor:T.navy},
                  ].map(s=><ResultNum key={s.l} valor={s.n} label={s.l} cor={s.cor}/>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" style={{ backgroundColor:T.bg,borderTop:`1px solid ${T.rule}`,padding: isMobile?'48px 24px':isWide?'80px 80px':'72px 48px' }}>
        <div style={{ maxWidth:'1200px',margin:'0 auto' }}>
          <SectionHead n="05" label="Contato" color={T.navy} />
          <div style={{ display:'grid',gridTemplateColumns: isMobile?'1fr':'1fr 1fr',gap: isMobile?'40px':'80px',alignItems:'start' }}>
            <div>
              <h2 style={{ fontFamily:'Playfair Display, serif',fontSize:'clamp(28px,3.5vw,52px)',fontWeight:700,lineHeight:1.05,letterSpacing:'-0.035em',margin:'0 0 20px',color:T.ink }}>
                Tem um projeto?<br/><em style={{ fontStyle:'italic',fontWeight:400,color:T.magenta }}>Vamos conversar.</em>
              </h2>
              <p style={{ fontSize:'14px',fontWeight:300,lineHeight:1.8,color:T.inkMid,maxWidth:'340px',margin:0 }}>
                Aberta a projetos de <strong style={{ fontWeight:500,color:T.ink }}>marketing</strong>, <strong style={{ fontWeight:500,color:T.ink }}>branding</strong>, produção de conteúdo, comunicação corporativa e consultoria estratégica.
              </p>
            </div>
            <div style={{ paddingTop:'4px' }}>
              {[
                {
                  label:'Email', value:'comunicacao.saramada@gmail.com', href:'mailto:comunicacao.saramada@gmail.com', cor:T.navy,
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><polyline points="2,4 12,13 22,4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
                },
                {
                  label:'LinkedIn', value:'silvamsara', href:'https://www.linkedin.com/in/saramadalena/', cor:T.navy,
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/><line x1="7" y1="10" x2="7" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="7" cy="7" r="1" fill="currentColor"/><path d="M11 10v7M11 13c0-1.66 1.34-3 3-3s3 1.34 3 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
                },
                {
                  label:'Behance', value:'silvamsara', href:'https://www.behance.net/silvamsara', cor:T.magenta,
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M2 5h8.5C12.43 5 14 6.57 14 8.5S12.43 12 10.5 12H2V5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M2 12h9.5C13.43 12 15 13.57 15 15.5S13.43 19 11.5 19H2V12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><line x1="17" y1="6" x2="23" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M23 13.5c0-2.49-2.01-4.5-4.5-4.5S14 11.01 14 13.5c0 2.49 2.01 4.5 4.5 4.5 1.74 0 3.26-.99 4.02-2.44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
                },
              ].map((item) => (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  style={{ display:'flex',alignItems:'center',justifyContent:'space-between',padding: isMobile?'22px 0':'20px 0',borderBottom:`1px solid ${T.rule}`,textDecoration:'none',color:'inherit',transition:'padding-left 0.22s',minHeight:'64px' }}
                  onMouseEnter={e=>(e.currentTarget.style.paddingLeft='10px')} onMouseLeave={e=>(e.currentTarget.style.paddingLeft='0')}>
                  <div style={{ display:'flex', alignItems:'center', gap:'16px' }}>
                    <div style={{ width:'40px', height:'40px', borderRadius:'50%', border:`1px solid ${item.cor}22`, backgroundColor:`${item.cor}0d`, display:'flex', alignItems:'center', justifyContent:'center', color:item.cor, flexShrink:0, transition:'background-color 0.18s' }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontSize:'9px',fontWeight:700,letterSpacing:'0.2em',textTransform:'uppercase',color:item.cor,margin:'0 0 3px' }}>{item.label}</p>
                      <p style={{ fontSize:'15px',fontWeight:400,color:T.ink,margin:0 }}>{item.value}</p>
                    </div>
                  </div>
                  <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><line x1="0" y1="6" x2="14" y2="6" stroke={item.cor} strokeWidth="1.5"/><polyline points="10,2 14,6 10,10" fill="none" stroke={item.cor} strokeWidth="1.5" strokeLinejoin="round"/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {footerEl}
    </div>
  )
}
