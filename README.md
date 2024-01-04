
# Quick Sum AI

QuickSumAI is a web application for summarizing articles from websites.
It uses GPT-4 for summerizing the articles. Copy a article website link and paste it in the input field the summerized version should be ready in a minute.


## Features

- Last 5 inputs history
- Copy to clipboard
- Fully responsive


## Tech Stack

**Client:** React, SASS



## Installation

Install my-project with npm

```bash
  git clone https://github.com/kr1shh/QuickSum---AI-Summerizer.git
```
```bash
  cd QuickSum---AI-Summerizer
```
```bash
  npm Install
```
```bash
  npm run dev
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`



## API Reference

#### Request the AI

```http
  GET https://article-extractor-and-summarizer.p.rapidapi.com/summarize
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

