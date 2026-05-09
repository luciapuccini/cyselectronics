#!/usr/bin/env bash
set -e

printf '%s' "${ISSUE_BODY:-*(no body provided)*}" > /tmp/issue_body.txt

{
  cat << 'HEADER'
# Issue Quality Enhancer
Enhance new issues to make them clear, well-structured, and easy to understand.

HEADER

  echo "## Issue to enhance"
  echo "- Number: #${ISSUE_NUMBER}"
  echo "- Author: @${ISSUE_AUTHOR}"
  echo "- Title:  ${ISSUE_TITLE}"
  echo "- Body:"
  echo ""
  cat /tmp/issue_body.txt

  echo ""
  echo "## Repository triage labels"
  echo ""
  cat docs/agents/triage-labels.md

  cat << 'TASKS'

## Your tasks

### 1. Improve the title
Add an emoji prefix based on the issue type:
- 🐛 Bug
- ✨ Feature
- 📝 Docs
- 🔧 Refactor
- ⚡ Performance
Example: `🐛 Fix login error when password contains special characters`

### 2. Restructure the body
**For bugs:**
```
## 🐛 Description
## 📋 Steps to Reproduce
## ✅ Expected vs ❌ Actual Behavior
```
**For features:**
```
## ✨ Description
## 🎯 Why is this needed?
## 📐 Proposed Solution
```

### 3. Output format
Respond ONLY with a single valid JSON object — no extra text:
{
  "title": "improved title",
  "body": "improved body (use \\n for newlines)",
  "labels": ["label1"],
  "comment": "one-sentence summary of improvements"
}

Available labels (use 1–3): needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix

## Rules
- Never change the original meaning
- If already well-written, make minimal changes
- Keep it helpful, not verbose
TASKS
} > /tmp/ollama_prompt.txt
