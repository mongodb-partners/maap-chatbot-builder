---
sidebar_position: 1
---

# AWS

## Introduction
[Amazon Bedrock](https://aws.amazon.com/bedrock/) is a fully managed service that provides a selection of high-performance foundation models (FMs) developed by leading AI companies such as AI21 Labs, Anthropic, Cohere, Meta, Mistral AI, Stability AI, and Amazon. It offers a unified API for building generative AI applications with essential features including security, privacy, and responsible AI.

With Amazon Bedrock, users can easily experiment with and assess various FMs tailored to their specific needs. They can privately customize these models using techniques like fine-tuning and Retrieval Augmented Generation (RAG), enabling the creation of agents capable of performing tasks using enterprise systems and data sources.

Being serverless, Amazon Bedrock eliminates the need for managing infrastructure, allowing seamless integration and deployment of generative AI capabilities using familiar AWS services.


## Deploying your model
Amazon Bedrock offers a number of partners to pick and choose your [foundation models](https://docs.aws.amazon.com/bedrock/latest/userguide/models-supported.html), you can select the best for your use case.


### LLM Model
To start building on AWS console, you will need to setup your account first. Follow the instructions [here](https://docs.aws.amazon.com/bedrock/latest/userguide/setting-up.html) to get started.


#### Usage with MAAP
To use Amazon FM with MAAP framework, you would need to the below components to it.

- #### Config File :
  Provided below are the values required to be added in `config.yaml` file in LLM section.
  ```
  llms:
      class_name: Bedrock
      model_name: <check_references_below>
  ```
- #### Environment Variable :
  Below value(s) are to be added in .env file

  ```
    BEDROCK_AWS_REGION = <check_references_below>
    BEDROCK_AWS_ACCESS_KEY_ID = <check_references_below>
    BEDROCK_AWS_SECRET_ACCESS_KEY = <check_references_below>
  ```


### Embedding Model

To use Amazon powered embedding model `amazon.titan-embed-text-v1` with MAAP framework, use the below configurations.

#### Usage with MAAP
To use AWS Titan embedding with MAAP framework, you would need to feed below values.

- #### Config File :
  Provided below are the values required to be added in `config.yaml` file in embedding section.

  ```
  embedding:
      class_name: Titan
  ```

- #### Environment Variable :
  Below value(s) are to be added in .env file

  ```
    BEDROCK_AWS_REGION = <check_references_below>
    BEDROCK_AWS_ACCESS_KEY_ID = <check_references_below>
    BEDROCK_AWS_SECRET_ACCESS_KEY = <check_references_below>
  ```


