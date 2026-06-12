---
title: "AI / Machine Learning Services in AWS Part One"
subtitle: "Amazon Rekognition, Amazon Textract, Amazon Transcribe, Amazon Translate and Amazon Polly"
date: "25 September, 2024"
---

# AI / Machine Learning Services in AWS Part One
> *In this article: Amazon Rekognition, Amazon Textract, Amazon Transcribe, Amazon Translate and Amazon Polly*

Now that we understand what machine learning actually is or have an idea from the previous article, let us take a look at some interesting AWS service that can help you get started with little to no knowledge of Machine Learning, for specific use case.

<br />
*Because AWS does have a multitude of ML services, I will split this series into three different parts* 
![images/ai_vs_ml_vs_dl](/images/blog/aws_ai_services.png)

<br /> 
## Amazon Rekognition
In case you are working with tasks that mainly involve image data and most data that can fit the description of an 'object', Amazon Rekognition is an AWS service that you can use to perform a wide range of visual analysis tasks such as:
- Image classification
- Object detection
- Detection of text in images
- Facial recognition
- Semantic segmentation
Without any prior machine learning or deep learning knowledge, Amazon Rekognition also allows you to extract motion-based context from stored or live stream videos and helps you analyze them as well.

So imagine you just captured thousands of images of your favorite football club and you want to somehow end up with only those images with their logo visible. Since this would be too tedious to go image by image, you can use a service such as Rekognition to learn about this logo in detail and recognize it from all the images you pass to it.  
<br />

## Amazon Textract 
This next service sounds a lot more like optical character recognition but what Textract actually does is a bit more complex, it allows you to extract intelligence from documents beyond simple optical character recognition. Imagine you have some
- Tax forms
- Medical records
- University application forms
These are documents that may need thousands of man hours to process, but Textract can actually extract any tables, forms and text from PDFs or images.

Here is an extract form [AWS Textract FAQs](https://aws.amazon.com/textract/faqs/) 

> Amazon Textract's machine learning models have been trained on millions of documents so that virtually any document type you upload is automatically recognized and processed for text extraction. When information is extracted from documents, the service returns a confidence score for each element it identifies so that you can make informed decisions about how you want to use the results.

This means you can integrate Textract into an automated document processing workflow to extract the data you are interested in or extract text for NLP or even create a smart search index.

<br />
## Amazon Transcribe
On the other hand, Amazon Transcribe allows you to transcribe your voice data. This is an AI service that makes it easy for you to convert speech to text using Automatic Speech Recognition technology.

Now it means you can watch your favorite foreign language show by transcribing the video, Amazon transcribe also allows you to generate subtitles on audio/video content.

<br />
## Amazon Translate
A text translation service that uses deep learning to provide translations and allows you to translate text from various supported languages.

You need to specify a few details with Translate, the source language from which you are translating from and the target language which you want the translation to be in. Translate can be queried via an API, meaning you can theoretically build a wrapper applications without ever learning the source and or target languages. 

Using the API, you can enable real-time or batch translations of text.

<br />
## Amazon Polly
Converts text to speech, using either plain text or Speech Synthesis Markup Language (SSML) and then generates lifelike voice in different languages.

Polly includes dozens of lifelike voices as well as support for multiple languages. You can select an ideal voice and build, as well as distribute speech enabled applications in different locations around the world.

Depending on your use case, you may want to build the next 'Siri', the next intelligent document search browser or break language barriers. These are some of the service you may want to consider to get started.

>In the next article we will look at Amazon Lex, Amazon Kendra, Amazon personalize, Amazon Forecast and Amazon Comprehend