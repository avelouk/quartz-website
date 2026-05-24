---
title: Concept - Grocery Agent
tags:
  - concept
  - done
---
## High level goals

> To spend less than 5 minutes a week shopping for groceries and home essentials, without significantly increasing costs (we can't hire someone to do that lol)

## User persona

My wife and I!
Easiest user base ever. We can literally read their minds.
Given that it's for personal use, some sections of the concept will be skipped.

## Problems to solve

1. It takes 40-60 minutes to order groceries online. Offline takes even longer.
2. It's annoying and time-consuming to find ingredients one by one, checking the recipes we want to cook against what we already have etc.
3. Forgetting a critical ingredient is a big pain (even if we know what we want to cook).
4. We keep forgetting to buy things like dishwasher salt that is needed rarely (not every week).
5. Want to try a new recipe, but you need to figure out substitutes for retarded ingredients.
6. Deciding what to cook for the week can be a pain, but it is usually fun. This is definitely last in the list
	1. On reflection - this is the opposite of a problem - we WANT to decide what to eat as long as it's stress free.

## MVP

A bot that goes to jumbo.cl (the supermarket we use). Logs in and adds all necessary groceries for the week to cart in a few minutes or less.

The MVP will only solve problems 1, 2, 3 and will be constrained to ingredients for cooking.

### Requirements: 
- I want to give **as little input as possible** to avoid spending more than 5 minutes a week on ordering groceries.
- **Inputs:**
	- Things we want to cook during the week - recipe links or names of the dishes
- **What the bot should already know:**
	- Recipes we cook often, along with their ingredient list 
	- Long-lasting ingredients we want to keep stocked at all times (e.g. olive oil, cumin, oregano)
- **Output:**
	- Appropriate items added to cart in jumbo.cl 

### User flow:
1. I give the bot a list of recipes in free format
2. Bot generates a list of all required ingredients
	1. The list is presented as a checklist with the items that need to be ordered checked
	2. **By default:** all common long-lasting ingredients are unchecked and will not be ordered, since we likely already have them
3. Bot asks which common long-lasting ingredients ran out (e.g. olive oil, cumin, oregano)
4. I mark the ones that need to be ordered 
5. Bot confirms and adds all the necessary items to cart in jumbo.cl
	1. TODO: add logic for choosing the products
6. **Bonus feature - ingest and save recipes:**
	1. Once a recipe is inputed the LLM processes the link/text and creates a recipe entity in the database (name, ingredients with their type, instructions, link to recipe(optional))
## Metrics

1. Time it takes to create the basket **< 5 minutes**
2. Cart completeness **> 90%**
3. Cart accuracy **> 90%**
4. Time it takes to review and approve the basket **< 5 minutes**