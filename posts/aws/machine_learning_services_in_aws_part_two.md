---
title: "AI / Machine Learning Services in AWS Part Two"
subtitle: "Amazon Lex, Amazon Kendra, Amazon Personilize, Amazon Forecast and Amazon Comprehend"
date: "21 November, 2024"
---

# AI / Machine Learning Services in AWS Part One
> *In this article: Amazon Lex, Amazon Kendra, Amazon Personilize, Amazon Forecast and Amazon Comprehend*

<br />
| Looking to do something with AI/ML in AWS with little to no machine learning experience, here we take a look at a few more services in AWS to help you get started with some quality of life tasks, interesting projects and general experimentation in the AI/ML space. |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
![images/ai_vs_ml_vs_dl](/images/blog/aws_ai_services_two.png)

<br />

## Amazon Lex

Ever heard a Lex Luthor speech? This particular service is made specifically within the realm of Natural Language Understanding (NLU) and Automatic Speech Recognition (ASR), in essence this service allows you to build and deploy - *emphasis on deployment as well* - **conversational** interfaces for your applications.

<br />

Amazon Lex does the following:

- Creates a bot in a desired language, these bots will engage in conversation and understand your end-user goals.
- Deploy a specific version of your bot, on versioning, Lex also allows you to rollback to a specific version.

<br />

When Lex engages in conversation, it understands intent and intent is what you are trying to do, the action. 

<br />

Lex also understands utterances, the words that are dictated by you as the user. By providing as many examples of utterances as possible, you can improve the performance of your bot. Lex also provides a fallback intent so that you do not have to build one, this is usually invoked when a bot does not recognize the users input.

<br />

Reminds you of every moment a voice assisted AI said something along the lines of 'sorry, I did not quite catch that'.

<br />

An example of an intent could be 'you want to order a sandwich' and utterances may include:

- I want a peanut butter sandwich from...
- Can I order a peanut butter sandwich from ...

<br />

## Amazon Kendra

If you: 

- have a wide source of information
- across disparate sources 
- you want to get comprehensive insights 
- relevant responses to searches

then Kendra is the service for you. Kendra allows you to improve end user productivity and knowledge sharing by searching through unstructured data and providing answers. You can connect to popular AWS repository types such as S3 and RDS.

<br />

In cases where text may not be searchable, you can use other AI services such as Comprehend and Transcribe to pre-process documents and generate searchable text. This allows you to build your own search applications using natural language and provide highly relevant responses to user queries as you would from a human expert.

<br />

## Amazon Personalize

If you are into fashion, you might be interested in seeing the most trending clothing items, if you are a geek like myself, then maybe you are looking for gadgets, gimmicky tools and so on. 

<br />

Personalization is a huge market and industry that can make or break companies, but with data being in a format that is hard to capture or translate into databases, it may make a lot more sense to use AI/ML as an approach.

<br />

Amazon Personalize is exactly that service for you in AWS, it is an AI service that takes the domain knowledge of personalization into a web service that allows customers to build recommendation systems into their applications by utilizing Recurrent Neural Networks (RNN) which have the ability to recall users session data, this data is important when connecting which item is either similar or related or frequently paired with other items. 

<br />

So if you are shopping for a monitor for example, it may make sense to the algorithm that you are also looking for a keyboard and mouse since these are items that are not directly related to; but may be frequently used/bought with that item.

<br />

There are other strategies we will explore in subsequent articles but that is the base idea.

<br />

## Amazon Forecast


You may be tricked into thinking this service predicts the weather since this is what we usually associate the word 'forecasting' with, but forecasting is a problem that is present across industries. 

- You have a large factory machine that needs to be up 99% of the time, why not predict when and how frequently it needs maintenance so that you do it in advance before the machine goes down.
- You run a shop, you have items that sell well sometimes and not so well on some days, why not predict which seasons/days/weeks drive demand for the product and stock accordingly, saving both time and money.
- You have a lemonade stand... you get the idea, though a lemonade stand may be overkill

<br />

Amazon Forecast is an AI service that uses statistical and deep learning-based algorithms to provide highly accurate forecasts. You provide your data in a specific schema and either let Amazon Forecast choose an algorithm for you or pick one of the many algorithms available within forecast, these are called predictors.

<br />

How this works is, using a time series algorithm, rows of data are related to one another temporally - distinction of time - this allows us to test and create more accurate predictions against these temporal points. 

So next time you wonder why Amazon is recommending a mouse mat after you buy a mouse, you may just have a bit of an idea.

<br />

## Amazon Comprehend

And last but certainly not least is Amazon Comprehend. In order to comprehend this one, we will start with a quick recap of NLP according to [IBM](https://www.ibm.com/topics/natural-language-processing):

> A subfield of computer science and AI that uses machine learning to enable computers to understand and communicate with human language

Comprehend provides a set of natural language processing based APIs to pretrained and custom models that can extract insights from text, sounds like Kendra, but Comprehend provides a much deeper set of utilities away from text based search, such as:

- **Entities** : the ability to read dates, locations, organizations, persons, quantity, titles, events and other custom entities.
- **Key phrases** : extract nouns or phrases that describe a particular item.
- **PII** : data that could be used to potentially identify a person/individual such as names, addresses or bank account numbers.
- **Language** : identify the dominant language in text, supports around one-hundred languages.
- **Sentiment** : determine overall text sentiment, is this positive, negatived, mixed or neutral, think of text such as customer reviews and social media posts.
- **Syntax** : extract different parts of speech for each word in a documents.

A bit of a handful but Comprehend can do a wide variety of NLP tasks as well as allows you to train a custom model using your own data, allowing you to cover a large percentage of NLP tasks that are not in any way generic.

We will look at a few more services in AWS for AI and ML as we continue our series.