---
title: "What is AWS CloudFormation?"
subtitle: "Infrastructure as code, sign me up..."
date: "07 July, 2023"
---

[Image Link](https://www.cloud4c.com/sites/default/files/inline-images/infrastructure-as-code-graphics.png) 

![images/IaC](/images/blog/infrastructure-as-code.png)

## What is CloudFormation
There are several Infrastructure as Code tools in the market that follow the principles of IaC, AWS CloudFormation is a proprietory tool to create, manage and automate resources in AWS using text files written in JSON or YAML. 

Like any other tool, learning takes time, to get used to the syntax to test and actually start comfortably using this as one of the tools in your toolbag.

Some of the terms, operations, tests and general use will take some time, shorter if you already have the basics of IaC well understood.

Feel free to check out the documentation on how to get started and this article on medium also provides a sample guide.

- [AWS CloudFormation Documantation ](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html).
- [Medium Article](<https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html>).


## Why?

The benefits of AWS CloudFormation follow the principles of IaC, these include.
- **Reusability** > You are able to define resources using a template, if you are able to verify that it has worked once, generally, it should work every other time with little to no modifications, whether one more time or a thousand more times.
- **Version Control** > I am very sure, 12%, why this has anything to do with code is the part where you are able to use a version control system/tool such as [GitHub](https://github.com/) to track changes to files, restore changes and generally treat your CloudFormation file as if it were code that needed to keep a history that can be easily tracked.
- **Consistency** > If this `template` created an EC2 instance last time, it will create an EC2 instance next time, human error is minimized
- **Detect Drift** > One of the greatest advantages of using IaC tools is the ability to track any resource changes that have been applied either using a new template or manually, without having to navigate through these services to compare configuration items.

> There are many more benefits to using CloudFormation and Infrastructure as Code in general, but let us stop here for now and next we look at a few important sections of `CloudFormation`;
