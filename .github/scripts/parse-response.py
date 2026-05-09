import sys, json, re

with open('/tmp/ollama_response.txt') as f:
    text = f.read()

for match in re.finditer(r'\{', text):
    start = match.start()
    depth = 0
    for i, ch in enumerate(text[start:], start):
        if ch == '{':
            depth += 1
        elif ch == '}':
            depth -= 1
            if depth == 0:
                candidate = text[start:i+1]
                try:
                    obj = json.loads(candidate)
                    if 'title' in obj:
                        print(json.dumps(obj))
                        sys.exit(0)
                except json.JSONDecodeError:
                    pass
                break

print('{}')
