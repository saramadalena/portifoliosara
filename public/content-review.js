(() => {
  const replacements = [
    ['Estratégia, criação e execução integradas ', 'Atuo entre estratégia e execução, conectando comunicação, conteúdo, marca e canais às necessidades das pessoas e do negócio.'],
    ['do posicionamento de marca à produção de conteúdo, conectando comunicação, identidade e resultado.', ''],
    ['Projetos reais,', 'Projetos em diferentes contextos e'],
    ['resultados mensuráveis.', 'entregas multidisciplinares.'],
    ['Estrutura: ', 'Estrutura: '],
    ['Contexto · Desafio · Estratégia', 'Contexto · atuação'],
    ['Execução · Resultados', 'evidências · resultados'],

    ['Colocando ordem nos canais internos e mostrando a força da marca no mercado.', 'Comunicação em uma estrutura corporativa de múltiplos públicos, áreas e canais.'],
    ['O Grupo SADA reúne mais de 30 marcas e é o maior grupo de logística e transporte de veículos da América Latina, com operações em 4 estados e +8.000 colaboradores. A área de comunicação estava em processo de estruturação, sem processos definidos, sem padronização editorial e com presença digital incipiente.', 'No Grupo SADA, atuei como Analista de Marketing na Gerência de Comunicação e Marketing, em uma estrutura formada por diferentes empresas, áreas e públicos. Meu trabalho acontecia de forma transversal e em equipe, com responsabilidades principalmente em comunicação digital, canais, comunicação interna e projetos atendidos pela Gerência.'],
    ['Unificar a comunicação institucional de um grupo diversificado, fortalecer a presença digital das marcas, dar visibilidade às iniciativas ESG e criar processos sustentáveis de comunicação', 'Atuar em diferentes frentes de comunicação e marketing, organizando conteúdos, canais e demandas conforme os objetivos da área e as necessidades dos públicos'],
    ['Desenvolvimento de identidade editorial para canais institucionais (Instagram e LinkedIn), estratégia de cobertura de eventos com foco em autoridade e pertencimento, campanha de voluntariado corporativo integrada entre canais internos e externos, e padronização de fluxos, POPs e processos de comunicação.', 'Planejamento e gestão de redes sociais, calendário editorial, publicação, monitoramento e indicadores, com apoio do MLabs, RD Station, Salesforce e gestores dos próprios canais.'],
    ['Toquei a comunicação interna, o e-mail marketing e a presença nas redes sociais. Na Intermodal 2024, coloquei os próprios colaboradores como porta-vozes do estande no LinkedIn e Instagram, gerando recorde de alcance.', 'Atuei em comunicação interna, e-mail marketing, redes sociais e demandas da Gerência. Na Intermodal 2024, minha responsabilidade esteve concentrada na comunicação digital, com cobertura antes, durante e depois do evento.'],
    ['Presença digital reestruturada, processos de comunicação padronizados e iniciativas ESG com alcance mensurável e reconhecimento interno.', 'Canais mais organizados, acompanhamento de indicadores e crescimento orgânico de engajamento nas redes institucionais em 2024.'],
    ['No Grupo SADA, trabalhei na área de Comunicação e Marketing assumindo a responsabilidade pela comunicação interna, institucional, corporativa e pelas frentes de marketing digital. Tive uma vivência bastante ampla e diversa no ecossistema da companhia: em muitas iniciativas atuei diretamente do planejamento à execução operacional (como na criação de campanhas no RD Station, gestão de chamados via Salesforce, desdobramento de pautas de ESG e gestão de redes sociais); em outras frentes corporativas mais amplas, acompanhei de perto o alinhamento de estratégias e processos ao lado de equipes multidisciplinares. Essa bagagem me permitiu compreender a complexidade de uma grande corporação e garantir que a comunicação servisse como uma ponte eficiente entre as diretrizes do negócio, os colaboradores e o mercado.', 'No Grupo SADA, atuei em uma estrutura corporativa de grande porte, com trabalho transversal e em equipe. Minha experiência reuniu comunicação digital, canais, comunicação interna, campanhas, processos e indicadores, sempre conectando demandas da Gerência às necessidades dos públicos internos e externos.'],

    ['Comunicação interna, endomarketing e identidade digital ', 'Comunicação, marca e produtos em tecnologia para saúde.'],
    ['de ponta a ponta.', ''],
    ['A SPDATA é uma empresa de tecnologia para saúde com produtos voltados à gestão de clínicas e hospitais. Sem endomarketing estruturado e sem ações de cultura organizacional, o time não se sentia conectado aos valores e às decisões da empresa. Ao mesmo tempo, a presença digital dos produtos não comunicava os diferenciais técnicos de forma clara.', 'Na SPDATA, empresa de soluções ERP para o setor de saúde, atuei em Comunicação e Marketing em um contexto de estruturação da área. Em parte desse período, tive autonomia sobre as demandas de comunicação, com suporte de liderança e validação da gestora de RH.'],
    ['Criar uma comunicação interna que aproximasse as pessoas da liderança, valorizasse o time e colocasse a cultura da empresa em evidência', 'Conduzir demandas de marca, comunicação interna, endomarketing, conteúdos e materiais institucionais a partir dos briefings recebidos'],
    ['enquanto padronizava a presença digital das duas linhas de produto com identidade visual diferenciada por público.', 'com acompanhamento das etapas até a finalização e validação.'],
    ['Desenvolvimento da campanha SPDATA&Você: identidade visual própria, linha editorial focada em pessoas e benefícios. Redesenho da identidade digital por produto', 'Campanha SPDATA & Você, conteúdos internos, materiais de endomarketing e organização visual das linhas de produto'],
    ['paleta fria/tech para SPDATA (B2B hospitalar) e paleta quente/humanizada para Minha Clínica (clínicas menores).', 'preservando a relação com a marca institucional.'],
    ['Organizei a comunicação interna e o endomarketing. Fiz a campanha institucional que valorizou a equipe, aproximou os colaboradores da diretoria e foi elogiada pelo CEO. Padronizei a cara da empresa nas redes e criei a linguagem visual das linhas de produtos B2B de saúde.', 'A partir dos briefings, desenhava a solução de comunicação e acompanhava as etapas da entrega até a finalização e validação. Também preparava e operava lives pelo Microsoft Teams em campanhas internas e apresentações corporativas.'],
    ['Campanha reconhecida pela liderança pelo impacto cultural. Presença digital padronizada e linguagem visual diferenciada por produto', 'A comunicação ganhou mais vida e passou a despertar maior interesse do público interno, com materiais mais consistentes para comunicação interna, marca e produtos'],
    ['tecnologia médica falando direto com quem precisa entender.', 'sem perder clareza para os diferentes públicos.'],
    ['Na SPDATA, empresa focada no desenvolvimento de software ERP para a área médica, atuei na estruturação da comunicação interna, no relacionamento com parceiros e no suporte institucional ao público interno e fornecedores. Conduzi projetos essenciais para a organização da marca, como o desenvolvimento de identidades para as linhas de produtos da empresa, padronização de peças comerciais, apresentações executivas e campanhas de endomarketing voltadas para a cultura organizacional. Foi uma experiência centrada em aproximar a linguagem de tecnologia do público final, garantindo clareza, consistência visual e um alinhamento direto entre a comunicação e a liderança.', 'Na SPDATA, tive autonomia na condução de demandas de Comunicação e Marketing, com suporte e validação da gestora de RH. Conduzi entregas de comunicação interna, endomarketing, marca, produtos, apresentações e materiais institucionais e comerciais, acompanhando o processo do briefing à finalização.'],
    ['Campanha do Crachá', 'Sua ID chegou!'],
    ['Ação de comunicação interna para adesão ao novo crachá de acesso por RFID. Visual consistente com a linha de endomarketing, linguagem direta e orientada a ação.', 'Campanha relacionada à chegada e ao uso do crachá pelos colaboradores, com orientações sobre identificação e segurança individual e coletiva.'],
    ['Branding Digital & Produtos', 'Produtos e outros materiais'],
    ['Traduzindo tecnologia médica pra gente de verdade.', 'Comunicação para produtos e públicos de saúde.'],
    ['Dois produtos, dois públicos, duas identidades visuais. Padronizei a presença digital das linhas SPDATA e Minha Clínica com linguagem diferenciada por público', 'O trabalho com as linhas de produtos envolveu a organização visual de diferentes soluções, preservando sua relação com a marca institucional'],
    ['Redes sociais, comunicação de produto e site institucional', 'Materiais internos, comunicação de produto e canais digitais'],
    ['Conceito, identidade e execução da campanha SPDATA&Você', 'Conteúdos e materiais da campanha SPDATA & Você'],
    ['elogiada pelo CEO.', 'com retorno positivo da liderança.'],
    ['Identidade visual por produto', 'Organização visual de produtos'],

    ['Freelance de Marketing, Branding e Conteúdo', 'move.e'],
    ['Do posicionamento de startups ao relatório de ESG: comunicação que serve pra quem decide.', 'Comunicação, Branding, conteúdo e materiais estratégicos.'],
    ['Startup de tecnologia com solução voltada à gestão e mensuração de indicadores ASG para empresas de médio e grande porte. Com produto em estágio de validação, a empresa não tinha posicionamento institucional definido nem narrativa estruturada para o mercado.', 'Entre julho e outubro de 2025, desenvolvi projetos de comunicação contratados e administrados pela move.e. A experiência reuniu Branding, conteúdo, materiais corporativos, apresentações, comunicação institucional e projetos relacionados a eventos.'],
    ['Construir do zero o posicionamento institucional da marca, criar a arquitetura de mensagens e desenvolver materiais de comunicação para relacionamento com stakeholders, captação de investidores e aproximação com clientes potenciais.', 'Traduzir uma solução de tecnologia e gestão ASG em uma narrativa institucional clara, organizando mensagens e materiais para diferentes públicos de relacionamento.'],
    ['Diagnóstico de posicionamento e análise de mercado. Definição de arquitetura de mensagens por público (investidores, clientes corporativos, parceiros). Desenvolvimento de narrativa institucional com foco em proposta de valor, diferenciação e credibilidade.', 'Organização de mensagens, narrativa institucional, materiais corporativos e conteúdos relacionados à agenda ASG e ESG.'],
    ['Desenvolvi do zero a identidade visual, o guia de marca e as apresentações para colocar a startup de pé no mercado de sustentabilidade e atrair parceiros. Fiz a ponte com investidores e parceiros na Expo Favela 2025 e cuidei dos materiais de relacionamento com cada público.', 'Desenvolvi materiais de comunicação e posicionamento para apoiar a apresentação da solução. Na Expo Favela 2025, participei da representação institucional da move.e e produzi conteúdos de cobertura e bastidores.'],
    ['Arquitetura de mensagens estruturada', 'Organização de mensagens'],
    ['A startup saiu do zero com marca, posicionamento e materiais prontos para conversar com investidores, clientes e parceiros', 'A move.e passou a contar com materiais institucionais mais claros para relacionamento com investidores, clientes e parceiros'],
    ['Consultoria Estratégica', 'move.e'],
    ['Startup de Tecnologia', 'Tecnologia e gestão ASG'],
    ['Arquitetura de Mensagens', 'Organização de Mensagens'],
    ['Comunicação com Stakeholders', 'Comunicação para stakeholders'],
    ['Consultoria', 'Materiais corporativos'],
    ['Documentos institucionais desenvolvidos para posicionamento da marca e relacionamento com investidores, clientes e parceiros.', 'Materiais desenvolvidos para apoiar o posicionamento da solução e o relacionamento com diferentes públicos.'],
    ['Posicionamento estruturado, narrativa pronta para o mercado.', 'Mensagens organizadas, materiais mais claros para o mercado.'],

    ['Cuidando da comunicação de duas unidades e da mantenedora sem firula, no ritmo da escola.', 'Comunicação para diferentes públicos da comunidade escolar.'],
    ['Instituição de ensino tradicional com duas unidades (Funcionários e Anchieta) e uma mantenedora. A comunicação acontecia de forma fragmentada, sem padronização entre canais', 'Atuação na comunicação das duas unidades do Colégio Arnaldo (Funcionários e Anchieta) e da instituição, com produção de conteúdo, campanhas, eventos, canais digitais e atendimento a diferentes demandas'],
    ['cada área puxando para o seu lado e o fluxo de demandas correndo o tempo todo.', 'em uma rotina de grande volume e diferentes públicos.'],
    ['Atender duas unidades e a mantenedora ao mesmo tempo, sem perder o ritmo do dia a dia escolar. O desafio era manter a comunicação funcionando', 'Atender demandas simultâneas de professores, coordenações, diretorias, áreas administrativas, gráfica, agência e assessoria de imprensa, mantendo a comunicação funcionando'],
    ['redes, site, campanhas, eventos, impressos', 'redes, site, campanhas, eventos e impressos'],
    ['Atuação na linha de frente: atendimento direto às áreas internas, produção de conteúdo multimídia, gestão das redes sociais e do site WordPress, e campanha anual de captação e rematrícula com identidade visual consistente entre os diferentes pontos de contato.', 'Produção de peças gráficas, fotografias, vídeos e materiais para campanhas educacionais, religiosas, socioemocionais, eventos e ações de captação, além de publicação operacional em redes sociais e atualizações pontuais no WordPress.'],
    ['Atendi professores, diretores e famílias de frente. Fiz de tudo um pouco: criei campanha de rematrícula, rodei jornal interno, fotografei evento e mantive as redes e o site atualizados, mesmo no ritmo corrido do dia a dia.', 'Apoiei eventos internos e externos, produzi materiais em diferentes formatos e atendia demandas de áreas e públicos diversos da comunidade escolar.'],
    ['Campanhas de captação executadas', 'Unidades atendidas'],
    ['Identidade editorial estruturada', 'Rotina de alto volume'],
    ['Comunicação das duas unidades funcionando sem travar, campanhas de rematrícula no ar e as redes e o site sempre atualizados', 'Produção, publicação e atualização de conteúdos em diferentes formatos, atendendo duas unidades e a instituição'],
    ['mesmo com o volume alto de demandas do dia a dia escolar.', 'em uma rotina de grande volume e temas muito diferentes.'],
    ['Auxiliar de Comunicação', 'Assistente de Comunicação'],
    ['No Colégio Arnaldo, minha atuação era bastante dinâmica e descentralizada, atendendo de forma simultânea as duas unidades (Funcionários e Anchieta) e a instituição mantenedora na coordenação de comunicação. Eu atuava na linha de frente do atendimento interno, oferecendo suporte direto a professores, diretores, coordenadores e áreas administrativas, além da ponte com agência, gráfica e assessoria de imprensa. Minha rotina envolvia a produção multimídia e o desenvolvimento gráfico de ponta a ponta para campanhas pedagógicas, eventos institucionais, ações religiosas, pautas socioemocionais e a campanha anual de captação e rematrícula. Em mídias digitais, fazia a gestão e alimentação de redes como Instagram, Facebook, YouTube e Flickr, além da atualização de conteúdos do site em WordPress. Era uma operação de "pé no chão": priorizando o fluxo constante de informações e projetos que vinham das coordenações e dos professores.', 'No Colégio Arnaldo, atendia as unidades Funcionários e Anchieta e a instituição, em uma rotina de grande volume e diferentes públicos. Produzia peças gráficas, fotografias, vídeos e materiais para campanhas educacionais, religiosas, socioemocionais, eventos e captação. Nas redes sociais, minha atuação era operacional, com recebimento e publicação de conteúdos enviados pelas áreas, além de atualizações pontuais no WordPress.'],

    ['Toda demanda começa com escuta ativa. Entendo o contexto, os públicos e os objetivos antes de propor qualquer solução. Comunicação descontextualizada não resolve', 'Toda demanda começa com leitura de contexto. Entendo quem precisa falar, com quem, por qual canal e para qual necessidade. Comunicação descontextualizada não resolve'],
    ['Fluxos, POPs e padrões editoriais garantem que a comunicação funcione além de um projeto pontual. Estruturo processos que sustentam resultados no longo prazo.', 'Fluxos, POPs, padrões editoriais e acompanhamento de indicadores ajudam a comunicação a funcionar com mais consistência na rotina.'],
    ['Publicitária formada pela ', 'Publicitária e especialista em Comunicação e Marketing pela '],
    ['Mais de ', 'Trajetória com '],
    [' estruturando áreas, processos e narrativas para empresas que precisam falar com clareza.', ' em diferentes estruturas, segmentos e públicos, conectando criação, conteúdo, marca e canais.'],
    ['Vivência integrada com ', 'Vivência em comunicação corporativa, conteúdo, marca e canais, com interface com '],
    ['Atuação que conecta diagnóstico, estratégia, criação e execução', 'Atuação que combina criação, organização e leitura de contexto'],
    ['marketing', 'Comunicação e Marketing'],
    ['branding', 'marca'],
    ['consultoria estratégica', 'projetos de comunicação']
  ]

  const applyText = (value) => {
    let next = value
    replacements.forEach(([from, to]) => {
      next = next.split(from).join(to)
    })
    next = next.replace(/\bCases\b/g, 'Projetos')
    next = next.replace(/\bcases\b/g, 'projetos')
    next = next.replace(/\bCase\b/g, 'Projeto')
    next = next.replace(/\bcase\b/g, 'projeto')
    next = next.replace(/Ver projeto/g, 'Ver projeto')
    next = next.replace(/Todos os projetos/g, 'Todos os projetos')
    next = next.replace(/SPDATA&Você/g, 'SPDATA & Você')
    next = next.replace(/\u2014/g, ',')
    next = next.replace(/\s+,/g, ',')
    next = next.replace(/,\s+,/g, ',')
    next = next.replace(/\s{2,}/g, ' ')
    return next
  }

  const walkText = (root) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement
        if (!parent) return NodeFilter.FILTER_REJECT
        const tag = parent.tagName
        if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'NOSCRIPT') return NodeFilter.FILTER_REJECT
        return NodeFilter.FILTER_ACCEPT
      }
    })
    const nodes = []
    while (walker.nextNode()) nodes.push(walker.currentNode)
    nodes.forEach((node) => {
      const before = node.nodeValue || ''
      const after = applyText(before)
      if (after !== before) node.nodeValue = after
    })
  }

  const applyAttributes = () => {
    document.querySelectorAll('img[alt]').forEach((img) => {
      const before = img.getAttribute('alt') || ''
      const after = applyText(before)
      if (after !== before) img.setAttribute('alt', after)
    })
    document.querySelectorAll('[title]').forEach((el) => {
      const before = el.getAttribute('title') || ''
      const after = applyText(before)
      if (after !== before) el.setAttribute('title', after)
    })
  }

  const applyMeta = () => {
    document.documentElement.lang = 'pt-BR'
    document.title = 'Sara Madalena | Comunicação e Marketing'
    const meta = document.querySelector('meta[name="description"]') || document.createElement('meta')
    meta.setAttribute('name', 'description')
    meta.setAttribute('content', 'Portfólio de Sara Madalena Silva, profissional de Comunicação e Marketing.')
    if (!meta.parentElement) document.head.appendChild(meta)
  }

  let scheduled = false
  const apply = () => {
    scheduled = false
    applyMeta()
    if (document.body) {
      walkText(document.body)
      applyAttributes()
    }
  }

  const schedule = () => {
    if (scheduled) return
    scheduled = true
    window.requestAnimationFrame(apply)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', schedule)
  } else {
    schedule()
  }

  const observer = new MutationObserver(schedule)
  observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true })
  ;[100, 400, 900, 1500].forEach((ms) => window.setTimeout(schedule, ms))
})()
