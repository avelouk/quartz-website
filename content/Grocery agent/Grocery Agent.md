---
title: Grocery Agent
tags:
  - project
---
My wife wanted to build something together, and we somehow landed on the fact that both of us hate doing groceries ( ˇ෴ˇ ). Autonomous AI agents are getting popular at the same time, so why not? We will get AI to do our weekly groceries and keep our pantry stocked with minimal input from us. <|°_°|> The only thing we want to do is decide what we are going to cook during the week.

## The [[Concept - Grocery Agent|Concept]]

> Here is the [[Concept - Grocery Agent|Concept]] with the MVP defined. 

We have landed on [browser use](https://github.com/browser-use/browser-use) as it seemed to be simple and cheap (potentially free) way to control the browser using an LLM.

Feeding the concept to Cursor's agent first was a great idea, as it kept the AI on track and allowed us to move step by step without creating too much spaghetti code.

## Status

In development ┏( >\_<)┛

**Current Flow:** 
Paste recipe (or URL) → LLM parses → save to SQLite database. 
Pick recipes for the week → checklist (LLM merges duplicates) → confirm → jumbo bot opens browser and uses the list.

Well, currently it just searches for potatoes and adds them to cart, but wife is working on it.

We will also explore running a local LLM for this, as the tasks are not complex.

## TechStack (If this is bad blame the AI)

- **Language:** Python 3.11+
- **Web:** FastAPI, Uvicorn, Jinja2 (server-rendered HTML)
- **Data:** SQLite (recipes/ingredients), Pydantic (models + LLM structured output)
- **LLM:** browser-use (ChatBrowserUse for jumbo, ChatGoogle/Gemini flash for recipes & ingredient normalization)
- **Browser automation:** browser-use (Agent + Browser for jumbo.cl)
- **HTTP / scraping:** httpx, trafilatura (recipe URL fetch)
- **Tooling:** uv (venv + deps), python-dotenv (env)

## Result

https://github.com/avelouk/grocery-agent