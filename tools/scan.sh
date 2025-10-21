#!/usr/bin/env bash
hosts=( "https://example.com" "https://example.org" )
for h in "${hosts[@]}"; do
  code=$(curl -s -o /dev/null -w "%{http_code}" "$h" || echo "000")
  printf "%s -> %s\n" "$h" "$code"
done
