---
sidebar_position: 1
---

# MAAP Chatbot Framework [WIP]

### Introduction 
The [MongoDB AI Applications Program (MAAP)](https://www.mongodb.com/services/consulting/ai-applications-program) chatbot framework is a set of libraries that you can use to build your RAG Application
using MongoDB and [Atlas Vector Search](https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-overview/) and associated MAAP partners

The repo offers the flexibility to its user to set up the rag application by simiply configuring a yaml file(details see below). The repo offers the users the flexibilty to choose from various option available through partners program. The following modules of RAG are made configurable
1. Data loaders
2. Embedding Models
3. Chat LLM Models
4. Post query Reranker


### Reference Architecture Diagram
Below given is the reference architecture of the framework with various components. 


![alt text](MAAP_Arch.png)

#### Overview of Advanced RAG Approaches

1. **Data Loading**

    Applications based on Large Language Models (LLMs) often involve extracting data from databases or files, such as PDFs, and converting it into a format usable by LLMs. The pivotal component here is the data source, containing private knowledge or content obtained.

2. **Data Indexing and Embedding Models: Chunking & Vectorization**

    Initially, we construct a vector index to represent the contents of our text documents. This involves breaking down the documents into smaller chunks and converting them into numerical vectors. The vectorized content forms the basis for subsequent retrieval and generation steps.

3. **Post Retrieval: Retrieval, Reranking & Filtering**
    
    After retrieving relevant documents, we refine the context further through reranking and filtering:
    
    - **Reranking**: Prioritizing documents based on relevance.
    - **Filtering**: Removing less relevant or noisy documents.

4. **Pre Query Retrieval: Query Transformations**

    Advanced RAG models explore various transformations of user queries to enhance retrieval accuracy. Techniques include query expansion and other modifications.

5. **Chat Engine: LLM**

    The chat engine combines retrieved context with the user’s query to create a prompt for the language model. This prompt guides the language model in generating contextually relevant responses.

6. **Chat Engine: RAG Agents**

    RAG agents manage the entire RAG process, coordinating retrieval, generation, and other components. They ensure seamless interaction between the search index, language model, and other modules.

7. **Prompting: Response Synthesizer**

    The response synthesizer generates the actual answer based on the combined context and user query. Attention and prompt engineering mechanisms may be employed to focus on relevant parts of retrieved documents during generation.



## Environment
The application is tested with below configurations.
- Node Version :        **v20.0+**
- MongoDB Version (Atlas) :     **v7.0 (M10 Cluster Tier)** 


## Document Preface
The MongoDB MAAP Chatbot Framework documentation provides a comprehensive guide for setting up a Retrieval-Augmented Generation (RAG) application using MongoDB and Atlas Vector Search, along with integration options for various MAAP partners. This framework is designed to be highly configurable, allowing users to tailor their chatbot applications by simply modifying a YAML configuration file. The framework supports customization in four key areas: data loaders, embedding models, chat LLM (Large Language Models) models, and post-query rerankers.

The setup process begins with cloning the project and installing dependencies. This involves navigating to the chatbot directory, building the project locally, and then installing npm packages in the builder/partnerproduct directory.

Configuration of the RAG application is crucial and involves specifying details for data ingestion, embedding models, vector storage, and LLM models in a YAML file. This includes settings for data source types (e.g., PDF files), paths, chunk sizes, embedding class names, MongoDB connection strings, database and collection names, and specifics about the vector search index and LLM models.

The documentation also highlights the process of instantiating embedding and LLM models based on the configuration. Different classes are instantiated based on the specified class_name in the configuration, catering to various services like VertexAI, Azure-OpenAI, Cohere, and others for embeddings, and a similar approach is taken for LLM models with classes like Fireworks, Anthropic, and Bedrock.

Data loaders play a significant role in how data is ingested into the system. The framework supports multiple types of data loaders (e.g., WebLoader, PdfLoader, SitemapLoader, DocxLoader, ConfluenceLoader), each tailored to handle specific data sources like web pages, PDF files, sitemaps, DOCX documents, and Confluence spaces. These loaders are configured with parameters such as source paths and chunking details, and then added to a dataloaders array for processing.

After configuring the application, the user is guided through the process of ingesting data, running the server, and starting the UI client application. The UI client application runs locally, allowing users to interact with the chatbot through a web interface.

This documentation provides a clear and detailed roadmap for developers to set up and customize their RAG applications using the MongoDB MAAP Chatbot Framework, emphasizing flexibility and ease of use through configuration.

- Setup and Running Demo Video: https://www.youtube.com/watch?v=-r824BdVZt0

- Internal Chatbot Demo Video: https://drive.google.com/file/d/14gcuJLT2BXhQcS-LpjBqvrSY234x7PK9/view?usp=sharing


## Steps to run the application

### Installation

Clone the project to your machine, and install dependencies.

```
cd maap-chabot-builder
npm install
cd builder/partnerproduct
npm install
```


### Configuration
Edit the `config.yaml` file to include the necessary details for data ingestion, embedding models, vector storage, and LLM models. The configuration file should include settings for data source types (e.g., PDF files), paths, chunk sizes, embedding class names, MongoDB connection strings, database and collection names, and specifics about the vector search index and LLM models.

For example, the following configuration settings might be included:
```
ingest:
  - source: 'pdf'
    source_path: '<file_path>'
    chunk_size: 2000
    chunk_overlap: 200
embedding:
    class_name: Nomic-v1.5
vector_store:
    connectionString: '<you_mdb_connection_string>'
    dbName: '<db_name>'
    collectionName: 'embedded_content'
    embeddingKey: 'embedding'
    textKey: 'text'
    numCandidates: 150
    minScore: 0.1 
    vectorSearchIndexName: 'vector_index'
llms:
    class_name: Fireworks
    model_name: 'accounts/fireworks/models/mixtral-8x22b-instruct'
    temprature: ''
    top_p: ''
    top_k: ''
``` 
Also, please make a copy of the `examples/partnerproduct/example.env` file and rename it as `.env`. Place this file in the same folder where you are running your application. In the `.env` file, add the necessary API keys, URLs, connection strings, and any other secrets required for your application.

### MAAP Partner Integrations

Partner specific information can be found as below; 
Go to [this](https://mongodb-partners.github.io/maap-chatbot-builder/docs/category/partners) page for partner specific documentations.

| Sr # | MAAP Partner  | Partner Type  | Documentation                                                                                          |
|------|---------------|---------------|--------------------------------------------------------------------------------------------------------|
| 1    | AWS           | Cloud provider| [Link](https://mongodb-partners.github.io/maap-chatbot-builder/docs/partners/amazon)                   |
| 2    | Azure         | Cloud provider| [Link](https://mongodb-partners.github.io/maap-chatbot-builder/docs/partners/azure)                    |
| 3    | GCP           | Cloud provider| [Link](https://mongodb-partners.github.io/maap-chatbot-builder/docs/partners/gcp)                      |
| 4    | Anthropic     | AI tech       | [Link](https://mongodb-partners.github.io/maap-chatbot-builder/docs/partners/anthropic)                |
| 5    | Anyscale      | AI tech       | [Link](https://mongodb-partners.github.io/maap-chatbot-builder/docs/partners/anyscale)                 |
| 6    | Cohere        | AI tech       | [Link](https://mongodb-partners.github.io/maap-chatbot-builder/docs/partners/cohere)                   |
| 7    | Fireworks.AI  | AI tech       | [Link](https://mongodb-partners.github.io/maap-chatbot-builder/docs/partners/fireworksai)              |
| 8    | Langchain     | AI tech       | [Link](https://mongodb-partners.github.io/maap-chatbot-builder/docs/partners/langchain)                |
| 9    | Nomic         | AI tech       | [Link](https://mongodb-partners.github.io/maap-chatbot-builder/docs/partners/nomic)                    |




### Ingest Data
Once configured you can use the yaml file you just created say as in example `examples/partnerproduct/src/config_1.yaml`.

```
npm install
npm run ingest <path to your config.yaml>
```

Go to [this](https://mongodb-partners.github.io/maap-chatbot-builder/docs/category/app-modules) page for loader specific documentations.

### Run the server
```
npm run start <path to your config.yaml>
```

### Start your application UI
You can start your UI client application by running the following command in a separate terminal.
```
cd builder/partnerproduct/ui
npm install
npm run start
```
Your application ui will be running at [http://localhost:3000](http://localhost:3000).

