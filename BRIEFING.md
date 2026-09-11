# Relatório de Diagnóstico Competitivo & Briefing Estratégico para Mockups

Auditoria aprofundada realizada diretamente via inspeção em tempo real nos sites:
1. **Alseg Seguros** (`https://alsegseguros.com.br/`)
2. **6K Seguros** (`https://6kseguros.com.br/`)
3. **Azuki Seguros** (`https://azukiseguros.com.br/`)

---

## 1. Diagnóstico Individual dos Três Concorrentes

### 1.1. Alseg Seguros (alsegseguros.com.br)
- **Posicionamento & Tom de Voz:** Foco em tradição familiar, segurança patrimonial e tranquilidade (*"Seguros Personalizados Para Quem Valoriza Segurança E Tranquilidade"*). Pilares: *Confiável*, *Experiente*, *Profissional*.
- **Público-Alvo:** B2C familiar e pequenas empresas locais (base em Campinas/SP).
- **Design & UI:** Cores institucionais (Verde Conversão `#00A23C`, Azul Corporativo `#242A36`, Fundo `#F7F8F8`). Títulos em *Montserrat*, corpo em *Open Sans*.
- **Pontos Fortes:**
  - Prova social de alto impacto: 3 depoimentos reais com foto, cargo corporativo (CFO, CEO, enfermeira) e links para perfis do LinkedIn.
  - Transparência jurídica: Razão Social, CNPJ (29.443.130/0001-80), endereço físico no Cambuí/Campinas e aviso explícito de consentimento LGPD.
  - Seção de FAQ estruturada para quebra de objeções.
- **Falhas Críticas / Oportunidades de Melhoria:**
  - **Bug de UX Grave:** Todos os botões *"Fale com um especialista"* dos cards de Saúde, Odonto, Auto, Residencial e Moto apontam erroneamente para a URL interna de `/seguro-de-vida/`.
  - Título da seção de depoimentos menciona apenas "Seguro de Vida", subaproveitando os depoimentos corporativos.
  - Zero formulário integrado na página inicial (100% dependente de clique para WhatsApp).

---

### 1.2. 6K Seguros (6kseguros.com.br)
- **Posicionamento & Tom de Voz:** Pragmático, orientado a economia de custos (*"Pronto para economizar em seu seguro?"* e *"Ninguém pode prever o futuro, mas nós podemos protegê-lo"*).
- **Público-Alvo:** Generalista de massa e B2B operacional (frotas, frotistas, motoristas de app, além de corretores parceiros com portal "6K Agentes").
- **Design & UI:** Laranja comercial de ação (`#FD8526` / `#FF9200`) e verde escuro (`#325E4C`). Fontes genéricas de sistema operacional.
- **Pontos Fortes:**
  - Catálogo amplo com 16 modalidades (incluindo nichos modernos: Bike, Pet, Apps/Táxi, Fiança, Portáteis).
  - Portal exclusivo para corretores parceiros (*"Acesso Agentes"*), transmitindo escala operacional.
  - Localização em Moema/SP e múltiplos canais de contato (telefone fixo e WhatsApp).
- **Falhas Críticas / Oportunidades de Melhoria:**
  - **Amadorismo no acabamento:** Botão flutuante com grafia errada (**"Fale pelo WattsApp"** com dois 't's); tags `alt` de imagens com o texto padrão do WordPress: `"Só mais um site WordPress"`; diversos links de produtos apontando para `href="#"`.
  - Zero prova social na Home (sem depoimentos, sem notas do Google, sem avaliações).
  - Layout visualmente poluído e sobrecarregado.

---

### 1.3. Azuki Seguros (azukiseguros.com.br)
- **Posicionamento & Tom de Voz:** Tecnológico, moderno e ágil (*"SUA CORRETORA DIGITAL - Nosso maior propósito é seguir protegendo seu mundo"*).
- **Público-Alvo:** Segmentação elegante entre **Pessoa Física** e **Corporativo / PME**.
- **Design & UI:** Azul elétrico estilo fintech/insurtech (`#4175FC`), fundo branco com bastante respiro e tipografia *Open Sans*.
- **Pontos Fortes:**
  - **Melhor arquitetura de segmentação:** Botões na Hero que ancoram para as seções de Pessoa Física (14 produtos) e Corporativo (9 produtos).
  - **Clareza de Processo:** Apresenta a tríade do atendimento (*Cotação -> Assessoria -> Pós-Venda*), destacando o suporte a sinistros.
  - Portfólio atualizado com produtos inovadores (PetLove, seguro por assinatura Porto).
- **Falhas Críticas / Oportunidades de Melhoria:**
  - **Bugs Críticos de Template:** Em todos os 23 cards de produtos (inclusive seguros de obras, máquinas e condomínio), o subtítulo exibe estaticamente o texto clonado **"Seguro Vida"**.
  - Erro de digitação no menu do rodapé: link escrito **"Seguros Corpotativos"** (com 't').
  - Imagens de parceiros com nomes de arquivos de upload amadores expostos nos atributos: `"20 - imagem ruim"` e `"18 - imagem ruim"`.
  - Ausência total de depoimentos ou avaliações de clientes.

---

## 2. Matriz Comparativa Sintética

| Critério | 1. Alseg Seguros | 2. 6K Seguros | 3. Azuki Seguros | **Padrão Ouro para Mockup Ri7** |
| :--- | :--- | :--- | :--- | :--- |
| **Headline Principal** | Personalização & Segurança | Economia & Proteção | Corretora Digital | **Proteção Inteligente + Economia Sem Burocracia** |
| **Segmentação PF x PJ** | Misturada na mesma grade | Misturada (16 cards) | **Excelente (Seções dedicadas)** | **Tabs Interativas (Pessoa Física vs Para Sua Empresa)** |
| **Prova Social** | **Excelente (LinkedIn, Cargos)** | Inexistente na Home | Inexistente | **Google Reviews 4.9★ + 4 Depoimentos Verificáveis** |
| **Apoio a Sinistro** | Mencionou de passagem | Mencionou de passagem | **Destacou Pós-Venda formalmente** | **Etapa explícita: "Suporte Total em Caso de Sinistro"** |
| **Captação de Leads** | Apenas WhatsApp | Form interno + WhatsApp | WhatsApp + Contato | **Micro-simulador express na Hero + WhatsApp Flutuante** |
| **Seguradoras Parceiras** | 15 seguradoras | 12 seguradoras | 21 seguradoras + 9 de saúde | **Carrossel infinito elegante em tons monocromáticos** |
| **Conformidade Legal** | **Alta (CNPJ, Endereço, LGPD)** | Média (Endereço, E-mail) | Média (CNPJ, Endereço) | **Completa: SUSEP, CNPJ, Endereço, LGPD e Termos** |

---

## 3. Diretrizes do Briefing para as Mockups (Cases)

Para atender diferentes perfis de clientes que a consultoria for prospectar, recomendamos planejar **3 variações conceituais de mockup**:

### Variação 1: "Insurtech Moderna" (Referência aprimorada da Azuki)
- **Perfil de Corretora:** Focada em agilidade, público jovem/adulto, contratação 100% digital, consultoria rápida.
- **Paleta:** Azul Elétrico (`#3B82F6`), Roxo/Índigo (`#4F46E5`), fundo claro com elementos de glassmorphism e micro-cards flutuantes.
- **Destaque:** Hero com alternador interativo PF/PJ, simulador de seguro em 2 passos, produtos modernos (pet, celular, bike, assinatura).

### Variação 2: "Corporate & Wealth" (Referência aprimorada da Alseg)
- **Perfil de Corretora:** Focada em seguros de vida resgatável, patrimônio, frotas, riscos de engenharia e benefícios corporativos.
- **Paleta:** Azul Marinho Profundo (`#0F172A`), Verde Esmeralda (`#059669`) e Dourado/Champagne sutil.
- **Destaque:** Título imponente, prova social pesada com validação de CFOs/empresários, destaque para Missão/Valores e consultoria executiva.

### Variação 3: "Alta Conversão Comercial" (Referência aprimorada da 6K)
- **Perfil de Corretora:** Focada em volume, varejo de seguros, frotistas, auto, saúde familiar e residencial.
- **Paleta:** Azul Marinho de base com Laranja/Âmbar Vibrante (`#EA580C` ou `#F59E0B`) nos CTAs de cotação.
- **Destaque:** Formulário express em destaque no Hero ("Compare o preço de +20 seguradoras"), badges de desconto e economia, gatilhos de urgência e atendimento WhatsApp imediato.
