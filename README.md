# 🎓 Salesforce Tasks com LWC

Este projeto contém uma série de tarefas desenvolvidas com **Lightning Web Components (LWC)** na plataforma **Salesforce**, voltadas para um aplicativo universitário fictício. O objetivo é aplicar boas práticas de desenvolvimento, personalização de interfaces e integração com APIs externas.

## 📌 Objetivo

Criar componentes LWC que substituem funcionalidades padrão do Salesforce, oferecendo uma experiência mais rica e personalizada para usuários do aplicativo da faculdade.

---

## 🧩 Funcionalidades Implementadas

### 1. 📋 Listagem de Alunos com Filtro de Matrícula
- Componente na página inicial que busca todos os alunos.
- Filtro por status de matrícula: **Ativa** ou **Inativa**.
- Criação do campo `Status__c` no objeto `Student__c`, caso não exista.

### 2. 🆕 Substituição de Botões de Criação de Registros
- Componentes LWC personalizados para criação de registros.
- Inclusão de campos obrigatórios de cada objeto.
- Pelo menos um componente inclui **campo de relacionamento** com outro objeto (ex: Student__c → Teacher__c).

### 3. 👨‍🏫 Visualização de Dados por Professor
- Componente que permite selecionar um professor.
- Exibe duas abas:
  - **Alunos**: lista de alunos que ele ministra.
  - **Disciplinas**: disciplinas associadas ao professor.
- Requer relacionamento entre os objetos `Teacher__c`, `Student__c` e `Module__c`.

### 4. 🏠 (Opcional) Preenchimento Automático de Endereço via CEP
- Campo de **CEP** no objeto `Student__c`.
- Integração com a [API ViaCEP](https://viacep.com.br/) para preenchimento automático de endereço.
- Utilização de `fetch()` no LWC para consumir a API.

---

## 🛠️ Tecnologias Utilizadas

- Salesforce Lightning Platform  
- Apex  
- LWC (Lightning Web Components)  
- SLDS (Salesforce Lightning Design System)  
- API REST (ViaCEP)  
- SOQL / SOSL  
- Git & GitHub  

---

## 📚 Links Úteis

- [Salesforce Lightning Design System](https://www.lightningdesignsystem.com/2e1ef8501/p/755aff-components)
- [API ViaCEP](https://viacep.com.br/)
- [Trailhead - Aprenda Salesforce](https://trailhead.salesforce.com/)
- [Documentação Oficial Salesforce](https://developer.salesforce.com/docs)

---

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias, correções ou novas funcionalidades.

---
